const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chart-fullscreen-Cx9wG9JP.js","assets/sensors-CRadjF8G.js","assets/irrigations-C22Dtsoo.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-DhtWL7s_.js","assets/store-BQ9NCY7W.js","assets/orgs-DnFmvGlp.js","assets/network-YzWdS0n_.js","assets/constants-D_Yu58_o.js","assets/members-Cr98hVG_.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as le}from"./plots-DhtWL7s_.js";import{d as Je,b as Ss,c as Qe,l as yn}from"./store-BQ9NCY7W.js";import{s as ce}from"./sensors-CRadjF8G.js";import{o as ye}from"./orgs-DnFmvGlp.js";import{n as We}from"./network-YzWdS0n_.js";import{I as me,s as st,g as xn}from"./irrigations-C22Dtsoo.js";import{I as Ut,S as Mi,M as ks,a as yt,E as $n,A as ei,b as Di}from"./constants-D_Yu58_o.js";import{m as ti}from"./members-Cr98hVG_.js";const wn="modulepreload",Sn=function(e){return"/weenat-proto/"+e},Fi={},ge=function(i,t,o){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),r=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(t.map(p=>{if(p=Sn(p),p in Fi)return;Fi[p]=!0;const c=p.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${u}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":wn,c||(m.as="script"),m.crossOrigin="",m.href=p,r&&m.setAttribute("nonce",r),document.head.appendChild(m),c)return new Promise((v,l)=>{m.addEventListener("load",v),m.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return n.then(s=>{for(const r of s||[])r.status==="rejected"&&a(r.reason);return i().catch(a)})},nt=[];function xe(e){const i=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),nt.push(t),t}function fe(){const e=nt.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function _i(){return nt.length}function kn(){return nt.some(e=>e.dataset.dirty==="true")}function Es(){nt.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{nt.forEach(e=>e.remove()),nt.length=0});const En=[{key:"orgs",label:"Organisations",icon:"bi-building",desc:"Ajouts de membres, changements d'organisation, nouvelles exploitations"},{key:"capteurs",label:"Capteurs",icon:"bi-broadcast",desc:"Anomalies, changements d'état, mise à jour firmware"},{key:"alertes",label:"Alertes",icon:"bi-bell",desc:"Déclenchements de seuils et alertes météo configurées"}],Bi=[{key:"email",label:"Email",icon:"bi-envelope"},{key:"sms",label:"SMS",icon:"bi-phone"},{key:"push",label:"Push",icon:"bi-bell"}],Ln=["Mon réseau","Mon organisation","Mon secteur"],ii={orgs:"Mon organisation",capteurs:"Mon réseau",alertes:"Mon secteur"},Hi={orgs:{email:!0,sms:!1,push:!0},capteurs:{email:!0,sms:!1,push:!0},alertes:{email:!0,sms:!0,push:!0}};function Cn(e){let i=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif"))||JSON.parse(JSON.stringify(Hi))}catch{return JSON.parse(JSON.stringify(Hi))}})(),t=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif-peri"))||JSON.parse(JSON.stringify(ii))}catch{return JSON.parse(JSON.stringify(ii))}})();function o(){localStorage.setItem("weenat-mobile-notif",JSON.stringify(i)),localStorage.setItem("weenat-mobile-notif-peri",JSON.stringify(t)),e("Préférences enregistrées")}function n(s){const r=i[s.key]||{},p=t[s.key]||ii[s.key];return`
      <div class="m-list-section-header" style="display:flex;align-items:center;gap:6px">
        <i class="bi ${s.icon}" style="font-size:13px"></i> ${s.label}
      </div>
      <p style="font-size:12px;color:#8e8e93;margin:0 16px 8px;line-height:1.4">${s.desc}</p>
      <div class="m-list">
        ${Bi.map((c,u)=>{const m=u===Bi.length-1&&!0;return`<div class="m-list-row">
            <i class="bi ${c.icon}" style="color:#636366;font-size:14px;flex-shrink:0;width:20px;text-align:center"></i>
            <span class="m-list-row-label">${c.label}</span>
            <label class="m-toggle">
              <input type="checkbox" class="notif-toggle" data-cat="${s.key}" data-ch="${c.key}" ${r[c.key]?"checked":""}>
              <span class="m-toggle-track"></span>
            </label>
          </div>`}).join("")}
        <div class="m-list-row m-list-row--last" style="align-items:center;gap:8px">
          <i class="bi bi-geo-alt" style="color:#636366;font-size:14px;flex-shrink:0;width:20px;text-align:center"></i>
          <span class="m-list-row-label">Périmètre</span>
          <select class="notif-peri-sel" data-cat="${s.key}" style="border:none;background:transparent;font-size:14px;color:#636366;font-family:inherit;text-align:right;flex:1;min-width:0;outline:none;cursor:pointer">
            ${Ln.map(c=>`<option value="${c}"${c===p?" selected":""}>${c}</option>`).join("")}
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
      ${En.map(s=>n(s)).join("")}
      <div class="m-list-section-footer" style="margin-top:8px">
        Les alertes de seuil se configurent depuis la section <strong>Alertes</strong> de l'application.
      </div>
    </div>
  `);a.querySelector("#notif-back").addEventListener("click",fe),a.querySelectorAll(".notif-toggle").forEach(s=>{s.addEventListener("change",()=>{const r=s.dataset.cat,p=s.dataset.ch;i[r][p]=s.checked,o()})}),a.querySelectorAll(".notif-peri-sel").forEach(s=>{s.addEventListener("change",()=>{t[s.dataset.cat]=s.value,o()})})}const Ri={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},An=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Oi=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let Xe={};function Oe(e){var o;const i=document.getElementById("phone-screen");(o=document.querySelector(".m-toast"))==null||o.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ot({title:e,body:i,onDone:t,doneLabel:o="OK"}){var r;const n=document.getElementById("phone-screen");(r=document.querySelector(".m-sheet-overlay"))==null||r.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${o}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}function Ni(e,i,t){const o=document.createElement("div");o.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${e}">`;const n=o.querySelector("input");ot({title:e,body:o,doneLabel:"Enregistrer",onDone:()=>{t(n.value.trim()),Oe("Enregistré")}}),setTimeout(()=>n.focus(),300)}function Vi(e,i,t,o){const n=document.createElement("div");n.innerHTML=i.map((s,r)=>`
    <div class="m-sheet-option${s===t?" m-sheet-option--active":""}" data-i="${r}">
      <span>${s}</span>
      ${s===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const a=ot({title:e,body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelectorAll(".m-sheet-option").forEach(s=>{s.addEventListener("click",()=>{o(i[+s.dataset.i]),a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280),Oe("Enregistré")})})}function Mn(e,i){const t=document.createElement("div"),o=()=>{var n;t.innerHTML=e.map((a,s)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="label" value="${a.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="numero" value="${a.numero}" placeholder="+33 6…">
        </div>
        ${s>0?`<button class="m-sheet-remove" data-i="${s}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(a=>{a.addEventListener("input",()=>{e[+a.dataset.i][a.dataset.f]=a.value})}),t.querySelectorAll(".m-sheet-remove").forEach(a=>{a.addEventListener("click",()=>{e.splice(+a.dataset.i,1),o()})}),(n=t.querySelector(".m-sheet-add-phone"))==null||n.addEventListener("click",()=>{e.push({label:"",numero:""}),o()})};o(),ot({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{i(e),Oe("Enregistré")}})}function Tn(e,i,t){const o=document.createElement("div");o.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,o.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var a;(a=navigator.clipboard)==null||a.writeText(e.value).catch(()=>{}),Oe("Clé copiée !")});const n=ot({title:"Clé API",body:o,doneLabel:"Fermer",onDone:()=>{}});o.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const a=i.findIndex(s=>s.id===e.id);a!==-1&&i.splice(a,1),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{n.remove(),t()},280),Oe("Clé supprimée")})}function In(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function qn(e){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=i.querySelector("input");ot({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const o=t.value.trim();if(!o){Oe("Entrez un nom");return}const n={id:Date.now(),name:o,created:new Date().toLocaleDateString("fr-FR"),value:In()};e(n),Oe("Clé générée")}}),setTimeout(()=>t.focus(),300)}function Pn(e,i){Xe={profile:JSON.parse(JSON.stringify(Ri[i]||Ri.admin)),langue:"Français",unites:Oi[0]};const o=localStorage.getItem("mobile_avatarUrl")||null;function n(){const s=Xe.profile,r=o?`<img src="${o}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${s.initials}</span>`,p=s.apiKeys.map(u=>`
      <div class="m-list-row" data-key-id="${u.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${u.name}</span>
          <span class="m-list-row-sub">créée le ${u.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),c=s.phones.map((u,m)=>`
      <div class="m-list-row${m===s.phones.length-1&&s.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${u.label||"Numéro "+(m+1)}</span>
        <span class="m-list-row-value">${u.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");e.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${r}</div>
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
          <span class="m-list-row-value" id="val-langue">${Xe.langue}</span>
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
    `,a()}function a(){var r;const s=Xe.profile;(r=e.querySelector("#m-avatar-upload"))==null||r.addEventListener("change",p=>{const c=p.target.files[0];if(!c)return;const u=new FileReader;u.onload=m=>{localStorage.setItem("mobile_avatarUrl",m.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${m.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},u.readAsDataURL(c)}),e.querySelectorAll(".m-list-row[data-action]").forEach(p=>{p.addEventListener("click",()=>{switch(p.dataset.action){case"prenom":Ni("Prénom",s.prenom,c=>{s.prenom=c,n()});break;case"nom":Ni("Nom",s.nom,c=>{s.nom=c,n()});break;case"email":ot({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${s.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>Oe("Fonctionnalité à venir")});break;case"phones":Mn(s.phones,c=>{s.phones=c,n()});break;case"mdp":{const c=document.createElement("div");c.innerHTML=`
              <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(0,122,255,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
                  <i class="bi bi-envelope-at" style="font-size:26px;color:#007aff"></i>
                </div>
                <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 20px">Un e-mail de réinitialisation sera envoyé à <strong>${s.email}</strong>. Vous pourrez ensuite définir un nouveau mot de passe.</p>
                <button id="send-reset-btn" style="background:#007aff;color:#fff;border:none;border-radius:12px;padding:14px 0;font-size:16px;font-weight:600;cursor:pointer;width:100%">Envoyer l'e-mail</button>
              </div>`;const u=ot({title:"Réinitialiser le mot de passe",body:c,doneLabel:"Annuler",onDone:()=>{}});c.querySelector("#send-reset-btn").addEventListener("click",()=>{u.classList.remove("m-sheet-overlay--show"),setTimeout(()=>u.remove(),280),Oe("E-mail de réinitialisation envoyé")});break}case"langue":Vi("Langue",An,Xe.langue,c=>{Xe.langue=c,e.querySelector("#val-langue").textContent=c});break;case"unites":Vi("Unités",Oi,Xe.unites,c=>{Xe.unites=c,e.querySelector("#val-unites").textContent=c.split(" ")[0]});break;case"gen-key":qn(c=>{s.apiKeys.push(c),n()});break;case"notif-settings":Cn(Oe);break;case"delete":Oe("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(p=>{p.addEventListener("click",()=>{const c=s.apiKeys.find(u=>u.id===+p.dataset.keyId);c&&Tn(c,s.apiKeys,n)})})}n()}function K(e){var o;const i=document.getElementById("phone-screen");(o=document.querySelector(".m-toast"))==null||o.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ue({title:e,body:i,doneLabel:t="Fermer",onDone:o}={}){var r;const n=document.getElementById("phone-screen");(r=document.querySelector(".m-sheet-overlay"))==null||r.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{o==null||o(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}function Vt({title:e,message:i="",confirmLabel:t="Confirmer",confirmColor:o="#ff3b30",onConfirm:n}){var p;const a=document.getElementById("phone-screen");(p=document.querySelector(".m-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
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
    </div>`,a.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const r=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#sc-cancel").addEventListener("click",r),s.querySelector("#sc-confirm").addEventListener("click",()=>{r(),setTimeout(()=>n==null?void 0:n(),50)}),s.addEventListener("click",c=>{c.target===s&&r()})}function jn(e){const i=3+e%5,t=Date.now();return Array.from({length:i},(o,n)=>{const a=e*17+n*7,s=1+n*(2+a%6),r=t-s*864e5-a%8*36e5,p=(1+a%5)*36e5+a%60*6e4,c=n===0&&a%7===0;return{start:new Date(r),end:c?null:new Date(r+p)}})}const zn=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Dn=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],Ji={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},Fn={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function si(e){if(!e)return"—";const[i,t,o]=e.split("-");return`${o}/${t}/${i}`}function Wi(e){const i=e.sensorIds.map(o=>{const n=ce.find(a=>a.id===o);return n?`${n.model} ${n.serial}`:null}).filter(Boolean),t=e.parcelIds.map(o=>{const n=le.find(a=>a.id===o);return(n==null?void 0:n.name)||null}).filter(Boolean);return[...i,...t]}function _n(e,i){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const o=i==="new"||i==="new-adherent"?[]:[...i==="adherent"?Dn:zn];function n(){if(!o.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=o.map(s=>{Wi(s);const r=Fn[s.metric]||"bi-bell",p=s.statut==="actif";return`
        <div class="m-alert-card" data-id="${s.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${p?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${r}"></i>
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
              <span class="m-alert-row-val">${Ji[s.metric]||s.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${si(s.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${s.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),a()}function a(){t.querySelectorAll(".m-alert-toggle input").forEach(s=>{s.addEventListener("change",r=>{r.stopPropagation();const p=+s.dataset.id,c=o.find(u=>u.id===p);c&&(c.statut=s.checked?"actif":"inactif",n(),K(`Alerte ${s.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-more-btn").forEach(s=>{s.addEventListener("click",r=>{r.stopPropagation();const p=+s.dataset.id,c=o.find(b=>b.id===p);if(!c)return;Wi(c);const u=document.createElement("div"),m=jn(p);function v(){const b=c.sensorIds.map((h,w)=>{const C=ce.find(P=>P.id===h);return C?{label:`${C.model} ${C.serial}`,type:"sensor",idx:w}:null}).filter(Boolean),f=c.parcelIds.map((h,w)=>{const C=le.find(P=>P.id===h);return C?{label:C.name,type:"parcel",idx:w}:null}).filter(Boolean),x=[...b,...f];return x.length?x.map(h=>`<div class="m-perimetre-item" data-type="${h.type}" data-idx="${h.idx}">
                <span>${h.label}</span>
                <button class="m-perimetre-del" data-type="${h.type}" data-idx="${h.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const l=document.createElement("div");l.className="m-sheet-info-rows";function d(){var w;u.innerHTML="";const b=document.createElement("div");b.className="m-sheet-info-rows",b.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Ji[c.metric]||c.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${si(c.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${si(c.created)}</span></div>
            ${(w=c.phones)!=null&&w.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${c.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${c.statut}</span></div>`;const f=document.createElement("div");f.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",f.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${v()}</div>`,b.appendChild(f),u.appendChild(b);const x=C=>C.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+C.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${m.map(C=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${C.end?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${x(C.start)} → <span style="color:${C.end?"inherit":"#ff9f0a"}">${C.end?x(C.end):"En cours"}</span></div>
              </div></div>`).join("")}`,u.appendChild(h),u.querySelectorAll(".m-perimetre-del").forEach(C=>{C.addEventListener("click",P=>{P.stopPropagation();const E=C.dataset.type,S=+C.dataset.idx;E==="sensor"?c.sensorIds.splice(S,1):c.parcelIds.splice(S,1),d(),n(),K("Retiré du périmètre")})})}d(),ue({title:c.name,body:u,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-alert-card").forEach(s=>{s.addEventListener("click",r=>{if(r.target.closest(".m-alert-toggle")||r.target.closest(".m-alert-more-btn"))return;const p=+s.dataset.id,c=o.find(v=>v.id===p);if(!c)return;const u=document.createElement("div");u.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const m=ue({title:c.name,body:u,doneLabel:"Fermer",onDone:()=>{}});u.querySelector("#al-edit").addEventListener("click",()=>{m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),K("Modification à venir")},280)}),u.querySelector("#al-delete").addEventListener("click",()=>{const v=o.findIndex(l=>l.id===p);v!==-1&&o.splice(v,1),m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),n()},280),K("Alerte supprimée")})})})}n()}const Ls=e=>`parcel-journal-${e}`;function Jt(e){try{const i=localStorage.getItem(Ls(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"note",category:"Observation générale",date:"2026-05-11",auteur:"Jean Dupont",role:"membre",texte:"Quelques pucerons sur feuilles basses. À surveiller."},{id:2,type:"traitement",date:"2026-05-16",auteur:"Sophie Martin",role:"conseiller",texte:"Vent < 2 m/s, conditions conformes.",produit:"Karate Zeon",dose:"0,1 L/ha",cible:"Pucerons"},{id:3,type:"integration",date:"2026-04-02",texte:"L'intégration « Rimpro » a expiré et n'est plus active.",_system:!0},{id:4,type:"integration",date:"2025-10-02",texte:"Intégration « Rimpro » activée.",_system:!0}]}function Ti(e,i){localStorage.setItem(Ls(e),JSON.stringify(i))}function ze(e,i){const t={id:`sys-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,_system:!0,...i};Ti(e,[t,...Jt(e)])}function Cs(e,i,t="Irrigations",o=null){const n=i.find(s=>s.id===+e);if(!n)return;const a=ce.filter(s=>s.parcelIds.includes(n.id)).map(s=>s.id);ge(()=>Promise.resolve().then(()=>ut),void 0).then(s=>{s.initParcelDetail(n,a,"widgets",t),o&&setTimeout(()=>{var r;(r=document.querySelector(`[data-widget-id="${o}"], #${o}`))==null||r.scrollIntoView({behavior:"smooth",block:"start"})},150)})}function at(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const Te=new Date().toISOString().split("T")[0];function xt(e){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,o,n]=e.split("-");return`${parseInt(n)} ${i[parseInt(o)-1]} ${t}`}function zt(e){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,o]=e.split("-");return`${parseInt(o)} ${i[parseInt(t)-1]}`}function vi(e){return!e||e===Te?"":e<Te?'<span class="irr-pill irr-pill--past">Passée · Effectuée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function fi(e,i){return e?'<div class="irr-chk irr-chk--on"></div>':i?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function Yt(e,i,t){const o=i.length>0&&i.every(a=>t.has(a.id)),n=[...i].sort((a,s)=>{const r=t.has(a.id)?0:1,p=t.has(s.id)?0:1;return r!==p?r-p:a.name.localeCompare(s.name,"fr")}).map(a=>{const s=t.has(a.id);return`<div class="irr-plot-row${s?" irr-plot-row--sel":""}" data-pid="${a.id}">
      <div><div class="irr-plot-name">${a.name}</div>${Bn(a)}</div>
      ${fi(s,!1)}
    </div>`}).join("");return`<div class="irr-sel-all-row" id="irr-sel-all">
    <span class="irr-sel-all-lbl">${o?"Tout désélectionner":"Tout sélectionner"}</span>
    ${fi(o,!1)}
  </div>${n}`}function bi({title:e,body:i,onSave:t,onDelete:o,saveLabel:n="Enregistrer"}){var p,c;const a=document.getElementById("phone-screen");(p=document.querySelector(".irr-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="irr-sheet-overlay",s.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${e}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${o?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${n}</button>
      </div>
    </div>`,s.querySelector(".irr-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),a.appendChild(s),requestAnimationFrame(()=>s.classList.add("irr-sheet-overlay--open"));const r=()=>{s.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>s.remove(),280)};return s.addEventListener("click",u=>{u.target===s&&r()}),(c=s.querySelector("#iss-del"))==null||c.addEventListener("click",()=>{o==null||o(),r()}),s.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),r()}),s}function As(e,i,t){const o=i.filter(r=>e.has(r.id)&&(!r.irrigation||r.irrigation==="Non irrigué"));if(!o.length){t();return}const n=document.createElement("div");n.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${o.length===1?`<strong>${o[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${o.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" class="m-prev-select" style="margin-bottom:0">
      <option value="">— Choisir un type —</option>
      ${Ut.map(r=>`<option value="${r}">${r}</option>`).join("")}
    </select>`;const s=bi({title:"Type d'irrigation",body:n,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const r=n.querySelector("#irr-type-ask").value;r&&o.forEach(p=>{p.irrigation=r,Je(p.id,{irrigation:r})}),t()}}).querySelector("#iss-del");s&&(s.textContent="Passer",s.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function Bn(e){const i=e.crop,t=e.irrigation||null,o=[i,t||"<em>type irrigation non renseigné</em>"].filter(Boolean);return!i&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${o.join(" · ")}</span>`}function Ms(e,i,t=null,o=!1,n=null){let a=new Set((t==null?void 0:t.ids)??[]),s=Te,r=10;function p(){return Yt([],e,a)}function c(d){d.querySelector("#irr-date-hint").innerHTML=vi(s)}function u(d){const b=a.size,f=d.querySelector(".irr-summary"),x=d.querySelector(".irr-save-btn");!f||!x||(f.textContent=b===0?"":`${b} parcelle${b>1?"s":""} · ${r} mm`,x.disabled=b===0,x.textContent="Enregistrer")}function m(d){var b;d.querySelectorAll(".irr-plot-row").forEach(f=>{f.addEventListener("click",()=>{const x=+f.dataset.pid;a.has(x)?a.delete(x):a.add(x),d.querySelector("#irr-sel-list").innerHTML=p(),m(d),u(d)})}),(b=d.querySelector("#irr-sel-all"))==null||b.addEventListener("click",()=>{const f=e.some(x=>!a.has(x.id));e.forEach(x=>f?a.add(x.id):a.delete(x.id)),d.querySelector("#irr-sel-list").innerHTML=p(),m(d),u(d)})}const v=`<div id="irr-sel-list">${p()}</div>`,l=at(xe(`
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
            <input type="number" class="irr-qty-input" id="irr-qty" value="${r}" min="1" />
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
  `));l.dataset.dirty="true",m(l),u(l),l.querySelector("#irr-back").addEventListener("click",fe),l.querySelector("#irr-date").addEventListener("change",d=>{s=d.target.value,c(l),u(l)}),l.querySelector("#irr-qty").addEventListener("input",d=>{r=parseInt(d.target.value)||1,u(l)}),l.querySelector(".irr-save-btn").addEventListener("click",()=>{const d=a;As(d,e,()=>{const b=s>Te;d.forEach(w=>{me.push({iso:s,mm:r,real:!b,plotId:w,fromStrategy:!1})}),st();const x=[{title:null,names:[...d].map(w=>{var C;return(C=e.find(P=>P.id===w))==null?void 0:C.name}).filter(Boolean)}],h=d.size===1?String([...d][0]):"all";Es(),Ts({title:d.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:xt(s)},{label:"Quantité",value:`${r} mm`}],parcelSections:x,isFut:b,plots:e,calFilter:h,addedCount:d.size,stackDepth:1,backToParcel:o,onBack:n})})})}function hi(e,i,t=null,o=null,n=!1,a=null){let s=new Set((t==null?void 0:t.ids)??[]),r=Te,p=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],c=10,u=7,m=null,v=null;if(o){const h=me.filter(w=>w.fromStrategy&&o.has(w.seasonId));if(h.length){const w=h.map(P=>P.iso).sort();r=w[0],p=w[w.length-1],c=h[0].mm;const C=[...new Set(w)];u=C.length>=2?Math.round((new Date(C[1])-new Date(C[0]))/864e5):7,m=r,v=p}}function l(){if(!r||!p||u<=0)return[];const h=[],w=new Date(p);let C=new Date(r);for(;C<=w&&h.length<100;)h.push(new Date(C)),C.setDate(C.getDate()+u);return h}function d(){const h=l();s.size;const w=h.length>0?`<span class="irr-preview-ok">↗ ${h.length} irrigations · ${h.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${r}" />
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
          <input type="number" class="irr-qty-input" id="strat-freq" value="${u}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${w}</div>
      ${Yt([],e,s)}
      <div class="irr-bottom-spacer"></div>
    `}function b(h){const w=s.size,C=l(),P=h.querySelector(".irr-save-btn"),E=h.querySelector(".irr-summary");!P||!E||(P.disabled=w===0||C.length===0,E.textContent=w===0?"":`${w} parcelle${w>1?"s":""} · ${C.length} occurrences`,P.textContent="Voir l'aperçu →")}function f(h){var P,E,S,_,F;const w=h.querySelector(".irr-scroll-body");w.querySelectorAll(".irr-plot-row").forEach(A=>{A.addEventListener("click",()=>{const M=+A.dataset.pid;s.has(M)?s.delete(M):s.add(M),w.innerHTML=d(),f(h),b(h)})}),(P=w.querySelector("#irr-sel-all"))==null||P.addEventListener("click",()=>{const A=e.some(M=>!s.has(M.id));e.forEach(M=>A?s.add(M.id):s.delete(M.id)),w.innerHTML=d(),f(h),b(h)});const C=()=>{const A=l(),M=w.querySelector("#strat-preview");M&&(M.innerHTML=A.length>0?`<span class="irr-preview-ok">↗ ${A.length} irrigations · ${A.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),b(h)};(E=w.querySelector("#strat-debut"))==null||E.addEventListener("change",A=>{r=A.target.value,C()}),(S=w.querySelector("#strat-fin"))==null||S.addEventListener("change",A=>{p=A.target.value,C()}),(_=w.querySelector("#strat-qty"))==null||_.addEventListener("input",A=>{c=parseInt(A.target.value)||1,C()}),(F=w.querySelector("#strat-freq"))==null||F.addEventListener("input",A=>{u=parseInt(A.target.value)||1,C()})}const x=at(xe(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saison d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${d()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `));x.dataset.dirty="true",f(x),b(x),x.querySelector("#strat-back").addEventListener("click",fe),x.querySelector(".irr-save-btn").addEventListener("click",()=>{const h=l();Hn(x,e,s,r,p,c,u,h,i,t,o,n,a,m,v)})}function Hn(e,i,t,o,n,a,s,r,p,c,u=null,m=!1,v=null,l=null,d=null){var I,k,y;const b=t.size,f=!!u&&(o!==l||n!==d),x=f?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées.",h=5;r.length-h;function w($){const q=$.toISOString().slice(0,10)>=Te?"#FFB705":"#FF8500",j=$.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${xt(j)}</span>
      <span style="font-size:13px;font-weight:700;color:${q}">${a} mm</span>
    </div>`}const C=r.filter($=>$.toISOString().slice(0,10)<Te),P=r.filter($=>$.toISOString().slice(0,10)>=Te),E=P.slice(0,h),S=P.slice(h),_=`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${C.length?C.map(w).join(""):'<div style="font-size:13px;color:#9E9D98;padding:8px 0">Aucune irrigation effectuée</div>'}`,F=P.length?`
    <div class="irr-section-lbl" style="margin-top:${C.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${E.map(w).join("")}
    ${S.length?`
      <div id="apercu-rest" style="display:none">${S.map(w).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${S.length} irrigation${S.length>1?"s":""} de plus</button>
    `:""}`:"",A=at(xe(`
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
          <div class="irr-apercu-big">${r.length} irrigations</div>
          <div class="irr-apercu-sub">${zt(o)} → ${zt(n)} · tous les ${s}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${r.length*a} mm</div>
          <div class="irr-apercu-sub">${b} parcelle${b>1?"s":""} · ${a} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${_}
        ${F}
        ${!C.length&&!P.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      ${u?`
      <div class="irr-stop-confirm" style="margin-top:12px">
        <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">${x}</div>
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
  `));A.dataset.dirty="true",A.querySelector("#apercu-back").addEventListener("click",fe),(I=A.querySelector("#apercu-show-more"))==null||I.addEventListener("click",$=>{A.querySelector("#apercu-rest").style.display="",$.target.remove()});function M(){const $=t;As($,i,()=>{u&&(f?me.splice(0,me.length,...me.filter(z=>!(u.has(z.seasonId)&&z.fromStrategy))):me.splice(0,me.length,...me.filter(z=>!(u.has(z.seasonId)&&z.fromStrategy&&z.iso>Te))));const g=u&&!f?r.filter(z=>z.toISOString().slice(0,10)>Te):r,q=xn();if(g.forEach(z=>{const T=z.toISOString().slice(0,10);$.forEach(V=>{me.push({iso:T,mm:a,real:T<=Te,plotId:V,fromStrategy:!0,seasonId:q})})}),st(),u){const z=f?"sur toute la saison":"à partir de demain";$.forEach(T=>{ze(T,{type:"modification",date:Te,texte:`Saison d'irrigation modifiée (${z}) : ${a} mm tous les ${s} jours, du ${zt(o)} au ${zt(n)} (${r.length} irrigations).`})})}const L=[{title:null,names:[...$].map(z=>{var T;return(T=i.find(V=>V.id===z))==null?void 0:T.name}).filter(Boolean)}],D=$.size===1?String([...$][0]):"all";Es(),Ts({title:"Saison enregistrée",params:[{label:"Début",value:xt(o)},{label:"Fin",value:xt(n)},{label:"Quantité",value:`${a} mm/irrig.`},{label:"Fréquence",value:`tous les ${s} jours`},{label:"Irrigations générées",value:`${r.length*$.size}`}],parcelSections:L,isFut:!0,plots:i,calFilter:D,addedCount:r.length*$.size,stackDepth:2,backToParcel:m,onBack:v})})}A.querySelector("#apercu-confirm").addEventListener("click",()=>{if(u){A.querySelector("#apercu-edit-confirm").style.display="flex",A.querySelector("#apercu-edit-confirm").scrollIntoView({behavior:"smooth",block:"center"});return}M()}),(k=A.querySelector("#apercu-edit-cancel"))==null||k.addEventListener("click",()=>{A.querySelector("#apercu-edit-confirm").style.display="none"}),(y=A.querySelector("#apercu-edit-confirm-btn"))==null||y.addEventListener("click",M)}function Ts({title:e,params:i,parcelSections:t=[],isFut:o,plots:n,calFilter:a,addedCount:s=0,stackDepth:r=3,backToParcel:p=!1,onBack:c=null}){const u=(i||[]).map(h=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${h.label}</span>
      <span class="irr-confirm-param-val">${h.value}</span>
    </div>`).join(""),m=3,v=t.flatMap(h=>h.names.map(w=>({title:h.title,name:w}))),l=v.slice(0,m),d=v.slice(m);function b(h){const w=[];let C=null;for(const P of h)(!C||C.title!==P.title)&&(C={title:P.title,names:[]},w.push(C)),C.names.push(P.name);return w.map(P=>`
      ${P.title?`<div class="irr-confirm-sec-hd">${P.title}</div>`:""}
      ${P.names.map(E=>`<div class="irr-confirm-parcel">· ${E}</div>`).join("")}
    `).join("")}const f=v.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${b(l)}
      ${d.length?`
        <details class="irr-confirm-more">
          <summary>${d.length} parcelle${d.length>1?"s":""} de plus</summary>
          ${b(d)}
        </details>`:""}
    </div>`,x=at(xe(`
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
  `));x.querySelector("#conf-edit").addEventListener("click",()=>{s>0&&me.splice(me.length-s,s),fe()}),x.querySelector("#conf-back").addEventListener("click",()=>{for(let h=0;h<=r;h++)fe();c==null||c()}),x.querySelector("#conf-calendar").addEventListener("click",()=>{Is(n,a)})}const Rn=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function Is(e,i){let t=i||"";function o(l){if(!l||l==="all")return null;const d=e.find(b=>String(b.id)===String(l));return d?{ids:[d.id],label:d.name}:null}function n(){return!t||t==="all"?me:me.filter(l=>l.plotId===+t)}function a(l){const d=l.filter(h=>h.real),b=l.filter(h=>!h.real),f=d.reduce((h,w)=>h+w.mm,0),x=b.reduce((h,w)=>h+w.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${f} mm</div>
        <div class="irr-cumul-count">${d.length} irrigation${d.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${x} mm</div>
        <div class="irr-cumul-count">${b.length} irrigation${b.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${f+x} mm</div>
        <div class="irr-cumul-count">${d.length+b.length} irrigations</div>
      </div>
    </div>`}function s(l){if(l.length<2)return"";const d=[...l].sort((L,D)=>L.iso<D.iso?-1:1),b=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],f=new Date(d[0].iso),x=new Date(d[d.length-1].iso),h=Math.max(x-f,1),w=300,C=26,P=5,E=5,S=C-E-4,_=S-E-3,F=C+P+13,A=F+2,M=L=>Math.round((L-f)/h*w),I=L=>{const[,D,z]=L.split("-");return`${parseInt(z)}/${parseInt(D)}`},k=[],y=new Date(f.getFullYear(),f.getMonth()+1,1);for(;y<=x;)k.push(new Date(y)),y.setMonth(y.getMonth()+1);const $=k.map(L=>`<line x1="${M(L)}" y1="${C-6}" x2="${M(L)}" y2="${C+P+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),g=[f,...k,x],q=g.slice(0,-1).map((L,D)=>{const z=M(L),T=M(g[D+1]);return T-z<16?"":`<text x="${Math.round((z+T)/2)}" y="${_}" font-size="8" fill="#B0AEA8" text-anchor="middle">${b[L.getMonth()]}</text>`}).join(""),j=d.map(L=>{const D=L.real?"#FF8500":"#FFB705",z=M(new Date(L.iso)),[,T,V]=L.iso.split("-"),ne=`${parseInt(V)} ${Rn[parseInt(T)-1]} · ${L.mm} mm`;return`<circle cx="${z}" cy="${S}" r="${E}" fill="${D}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${z}" cy="${S}" r="${E+6}" fill="transparent" pointer-events="all"><title>${ne}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${w}" height="${A}" viewBox="0 0 ${w} ${A}" style="width:100%;display:block">
        ${q}
        <rect x="0" y="${C}" width="${w}" height="${P}" rx="${P/2}" fill="#E0DED8"/>
        ${$}
        ${j}
        <text x="1" y="${F}" font-size="9" fill="#B0AEA8">${I(d[0].iso)}</text>
        <text x="${w-1}" y="${F}" font-size="9" fill="#B0AEA8" text-anchor="end">${I(d[d.length-1].iso)}</text>
      </svg>
    </div>`}function r(l,d,b){const f=document.createElement("div");let x=l.iso,h=l.mm;f.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${l.iso}" />
          <div id="edit-date-hint">${vi(l.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${l.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>`,f.querySelector("#edit-date").addEventListener("change",w=>{x=w.target.value,f.querySelector("#edit-date-hint").innerHTML=vi(x)}),f.querySelector("#edit-qty").addEventListener("input",w=>{const C=parseInt(w.target.value);C>0&&(h=C)}),bi({title:l.real?"Modifier l'irrigation effectuée":"Modifier l'irrigation planifiée",body:f,saveLabel:"Enregistrer",onSave:()=>{l.iso=x,l.mm=h,l.real=x<=Te,st(),u(b)},onDelete:()=>{const w=me.indexOf(l);w>-1&&me.splice(w,1),st(),u(b)}})}function p(l,d){const b=+l,f=document.createElement("div");let x=!1,h=!1;function w(){return new Set(me.filter(E=>E.plotId===b&&E.fromStrategy&&E.seasonId).map(E=>E.seasonId))}function C(){return me.some(E=>E.plotId===b&&!E.fromStrategy)}function P(){var E,S,_,F,A,M,I;f.innerHTML=`
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
        ${x?`
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
        </div>`:""}`,(E=f.querySelector("#strat-modify"))==null||E.addEventListener("click",()=>{var g;(g=document.querySelector(".irr-sheet-overlay"))==null||g.remove();const k=w(),y=e.find(q=>q.id===b),$=y?{ids:[y.id],label:y.name}:null;hi(e,()=>u(d),$,k)}),(S=f.querySelector("#strat-stop"))==null||S.addEventListener("click",()=>{x=!0,h=!1,P()}),(_=f.querySelector("#strat-delete"))==null||_.addEventListener("click",()=>{h=!0,x=!1,P()}),(F=f.querySelector("#stop-cancel"))==null||F.addEventListener("click",()=>{x=!1,P()}),(A=f.querySelector("#stop-confirm"))==null||A.addEventListener("click",()=>{var $;const k=w(),y=me.filter(g=>g.plotId===b&&k.has(g.seasonId)&&!g.real).length;me.splice(0,me.length,...me.filter(g=>!(g.plotId===b&&k.has(g.seasonId)&&!g.real))),st(),ze(b,{type:"modification",date:Te,texte:`Saison d'irrigation arrêtée (${y} irrigation(s) planifiée(s) annulée(s)).`}),($=document.querySelector(".irr-sheet-overlay"))==null||$.remove(),u(d)}),(M=f.querySelector("#delete-cancel"))==null||M.addEventListener("click",()=>{h=!1,P()}),(I=f.querySelector("#delete-confirm"))==null||I.addEventListener("click",()=>{var y;const k=me.filter($=>$.plotId===b).length;me.splice(0,me.length,...me.filter($=>$.plotId!==b)),st(),ze(b,{type:"modification",date:Te,texte:`Saison d'irrigation supprimée (${k} irrigation(s) retirée(s) du calendrier).`}),(y=document.querySelector(".irr-sheet-overlay"))==null||y.remove(),u(d)})}P(),bi({title:"Gérer la saison",body:f,saveLabel:"Fermer",onSave:()=>{}})}function c(l){if(!l.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const d=[...l].filter(x=>!x.real).sort((x,h)=>x.iso<h.iso?-1:1),b=[...l].filter(x=>x.real).sort((x,h)=>x.iso>h.iso?-1:1);function f(x){const h=x.real?"#FF8500":"#FFB705",w=me.indexOf(x);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${xt(x.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${h};white-space:nowrap;margin-right:4px">${x.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${w}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${w}" title="Supprimer">🗑</button>
      </div>`}return`
      ${b.length?`
        <details class="irr-section-details" data-section="effectuees"${d.length?"":" open"}>
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${b.length}</span></summary>
          ${b.map(f).join("")}
        </details>`:""}
      ${d.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${d.length}</span></summary>
          ${d.map(f).join("")}
        </details>`:""}
    `}function u(l){var S,_,F,A;const d=l.querySelector(".irr-cal-body");if(!t){d.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const b={};if(d.querySelectorAll("details[data-section]").forEach(M=>{b[M.dataset.section]=M.open}),t==="all"){const M={};for(const y of me){const $=y.plotId??"unknown";M[$]||(M[$]=[]),M[$].push(y)}const I=Object.keys(M).filter(y=>e.some($=>String($.id)===y));if(!I.length){d.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}const k=I.sort((y,$)=>{var j,L;const g=((j=e.find(D=>String(D.id)===y))==null?void 0:j.name)??y,q=((L=e.find(D=>String(D.id)===$))==null?void 0:L.name)??$;return g.localeCompare(q,"fr")});d.innerHTML=k.map((y,$)=>{const g=M[y],q=g.some(V=>V.fromStrategy),j=e.find(V=>String(V.id)===y),L=(j==null?void 0:j.name)??y,D=[j==null?void 0:j.crop,j==null?void 0:j.irrigation].filter(Boolean),z=$>0?'<hr style="border:none;border-top:1px solid #E0DED8;margin:0 0 16px">':"",T=q?`<div class="irr-cal-add-bar" style="margin-top:8px">
               <button class="irr-cal-add-btn irr-cal-add-btn--sec" data-strat-pid="${y}"><i class="bi bi-pencil"></i> Modifier la saison</button>
             </div>`:`<div class="irr-cal-add-bar" style="margin-top:8px">
               <button class="irr-cal-add-btn irr-cal-add-btn--tert" data-goto-pid="${y}"><i class="bi bi-list-ul"></i> Voir les irrigations</button>
             </div>`;return`${z}<div style="margin-bottom:16px">
          <button class="irr-cal-plot-link" data-goto-pid="${y}" style="display:flex;align-items:baseline;gap:6px;background:none;border:none;padding:0;margin-bottom:6px;text-align:left;cursor:pointer">
            <span style="font-size:13px;font-weight:700;color:#185FA5;text-decoration:underline">${L}</span>
            ${D.length?`<span style="font-size:11px;color:#8e8e93">${D.join(" · ")}</span>`:""}
          </button>
          ${a(g)}
          ${s(g)}
          ${T}
        </div>`}).join(""),d.querySelectorAll("[data-strat-pid]").forEach(y=>{y.addEventListener("click",()=>p(y.dataset.stratPid,l))}),d.querySelectorAll("[data-goto-pid]").forEach(y=>{y.addEventListener("click",()=>{t=y.dataset.gotoPid;const $=l.querySelector("#cal-filter-sel");$&&($.value=t),u(l)})});return}const f=n(),x=f.some(M=>M.fromStrategy),h=t!=="all"?e.find(M=>String(M.id)===String(t)):null,w=h?'<button class="irr-cal-add-btn irr-cal-add-btn--tert" id="cal-goto-plot"><i class="bi bi-geo-alt-fill"></i> Voir la parcelle</button>':"",C=x?`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="open-strat-edit"><i class="bi bi-pencil"></i> Modifier la saison</button>
           ${w}
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Saisir une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Saisir une saison d'irrigation</button>
           ${w}
         </div>`,P=[h==null?void 0:h.crop,h==null?void 0:h.irrigation].filter(Boolean),E=P.length?`<div style="padding:8px 14px 2px;font-size:13px;color:#636366">${P.join(" · ")}</div>`:"";d.innerHTML=`
      ${E}
      ${a(f)}
      ${s(f)}
      ${C}
      ${c(f)}
    `,(S=d.querySelector("#cal-goto-plot"))==null||S.addEventListener("click",()=>{h&&Cs(h.id,e)}),d.querySelectorAll("details[data-section]").forEach(M=>{const I=M.dataset.section;I in b&&(M.open=b[I])}),d.querySelectorAll(".irr-edit-btn").forEach(M=>{M.addEventListener("click",I=>{I.stopPropagation();const k=me[+M.dataset.iidx];k&&r(k,f,l)})}),d.querySelectorAll(".irr-del-btn").forEach(M=>{M.addEventListener("click",I=>{I.stopPropagation();const k=+M.dataset.iidx;k>=0&&(me.splice(k,1),st(),u(l))})}),(_=d.querySelector("#open-strat-edit"))==null||_.addEventListener("click",()=>{p(t,l)}),(F=d.querySelector("#cal-add-irrig"))==null||F.addEventListener("click",()=>{Ms(e,()=>u(l),o(t))}),(A=d.querySelector("#cal-add-strat"))==null||A.addEventListener("click",()=>{hi(e,()=>u(l),o(t))})}const m=[...e].sort((l,d)=>l.name.localeCompare(d.name,"fr")).map(l=>`<option value="${l.id}"${String(l.id)===String(t)?" selected":""}>${l.name}</option>`).join(""),v=at(xe(`
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
  `));v.querySelector("#cal-back").addEventListener("click",fe),v.querySelector("#cal-filter-sel").addEventListener("change",l=>{t=l.target.value,u(v)}),u(v)}const et=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:Yt,checkIcon:fi,flexLayer:at,goToPlot:Cs,openCalendar:Is,openIrrigationSaisie:Ms,openIrrigationStrategie:hi},Symbol.toStringTag,{value:"Module"})),On=[{name:"Allier AgriTech",distance:8,adherents:31,capteurs:198,parcelles:1140,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Auvergne Agri Conseil",distance:15,adherents:54,capteurs:361,parcelles:2080,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]},{name:"Réseau Bourbonnais",distance:22,adherents:18,capteurs:112,parcelles:630,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Creuse Agri Net",distance:38,adherents:12,capteurs:74,parcelles:410,sharedSensorTypes:["Capteurs d'irrigation"]},{name:"Puy-de-Dôme Connect",distance:45,adherents:39,capteurs:255,parcelles:1490,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]}],Gi={name:"Breiz'Agri Conseil",city:"Rennes (35)",phone:"02 99 XX XX XX",email:"contact@breizagri.fr",capteurs:312,parcelles:1830,sharedSensorTypes:["Capteurs météo"]},Nn=["Capteurs météo","Capteurs d'irrigation","Stations météo virtuelles"];function Ui(e){return e.split(" ").filter(i=>i.length>2).slice(0,2).map(i=>i[0].toUpperCase()).join("")}const He={prenom:"Pierre",nom:"Jourdain",email:"pierre@gaec-jourdain.fr",phone:"06 71 23 45 67",orgName:"GAEC Jourdain",adresse:"Lieu-dit La Croix Blanche, 03500 Saint-Pourçain-sur-Sioule",selectedPlan:"expert",joinNetwork:!0},qs={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre 15/30 cm","CHP-30/60":"Tensiomètre 30/60 cm","CHP-60/90":"Tensiomètre 60/90 cm","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},Vn={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]},Jn=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),Wn={"CHP-15/30":[15,30],"CHP-30/60":[30,60],"CHP-60/90":[45,90]},ni=[{id:"essential",name:"Weenat Essential",priceNum:0,price:"Gratuit",color:"#636366",features:["Aucun capteur physique","Historique illimité","Alertes","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"plus",name:"Weenat Plus",priceNum:16.5,price:"16,5 €/mois",color:"#00B093",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"expert",name:"Weenat Expert",priceNum:30,price:"30 €/mois",color:"#006798",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées","Capteurs irrigation","Fonctionnalités irrigation"]}],oi={Administrateur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!0}]}],Agent:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}],Lecteur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!1}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!1}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!1},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}]};function Gn(e,i,t,o){const n=i==="essential",a=i==="expert";return e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?["signup","verify","emailVerified","creating","done"]:e==="new-adherent"?["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkInfo","invite","plan",...a?["volumeChoice"]:[],"creating","done"]:["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkChoice",...t?["networkPick"]:[],"invite","plan",...n?[]:["payment","paymentConfirmed"],...a?["volumeChoice"]:[],"creating","done"]}function Un(e,i,t,o){return Gn(e,i,t)}const Yn={signup:"Inscription",verify:"Vérification",orgName:"Exploitation",geoloc:"Localisation",orgInfo:"Informations",networkChoice:"Réseau",networkPick:"Choisir un réseau",networkInfo:"Mon réseau",invite:"Invitations",plan:"Abonnement",payment:"Paiement",paymentConfirmed:"Paiement",volumeChoice:"Volume autorisé",parcelMap:"Parcelle",parcelSource:"Source de données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"};function Zn(e,i){const t=document.getElementById("phone-screen");let o=0,n=e==="new-adherent"?"expert":He.selectedPlan,a=He.joinNetwork,s=!1,r=0,p=!0,c=46.3021,u=3.2938,m=null,v=null,l="smv",d=[],b="Parcelle 1";const f=document.createElement("div");f.id="onboarding-overlay",f.className="m-ob-overlay",t.appendChild(f);function x(){return Un(e,n,a)}function h(){return x()[o]}function w(){return x().filter(N=>!["creating","done","parcelDone","emailVerified","paymentConfirmed"].includes(N)).length}function C(){return ni.find(N=>N.id===n)}function P(){const N=x().slice(0,o).filter(U=>U!=="creating"&&U!=="done"&&U!=="parcelDone").length;return`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${Math.round(N/w()*100)}%"></div></div>`}function E(N,G=!0){const U=h(),O=new Set(["creating","done","parcelDone","emailVerified","paymentConfirmed"]),B=G&&o>0&&!O.has(U),R=Yn[U]||"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${B?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${R}</span>
          <div style="width:32px"></div>
        </div>
        ${O.has(U)?"":P()}
        <div class="m-ob-body">${N}</div>
      </div>`}function S(){o++,_e()}function _(){o--,_e()}function F(){return E(`
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
    `)}function M(){return`
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
      </div>`}function I(){return E(`
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
    `)}function k(){return E(`
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
    `)}function y(){const N=ks.map(G=>`<button type="button" class="m-ob-pill" data-metier="${G}">${G}</button>`).join("");return E(`
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
    `)}function $(){return E(`
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
    `)}function g(){const N=On.map(G=>{var U;return`
      <div class="m-ob-net-row" data-net="${G.name}">
        <div class="m-ob-net-avatar">${Ui(G.name)}</div>
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
    `)}function q(){var G;const N=Gi;return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-diagram-3-fill"></i></div>
        <h2 class="m-ob-h2">Mon réseau</h2>
        <p class="m-ob-sub">Vous avez été invité à rejoindre ce réseau.</p>
      </div>
      <div class="m-ob-info-card" style="background:var(--bg2,#f5f5f7);border-radius:12px;padding:20px 16px;margin:0 0 16px">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;margin-bottom:14px">
          <div class="m-ob-net-avatar" style="width:64px;height:64px;font-size:24px;border-radius:16px;margin-bottom:8px">${Ui(N.name)}</div>
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
          <div class="m-ob-pills">${Nn.map(U=>`<span class="m-ob-pill${N.sharedSensorTypes.includes(U)?" m-ob-pill--on":" m-ob-pill--off"}" style="cursor:default">${U}</span>`).join("")}</div>
          `:`<div style="font-size:13px;color:#3a3a3c">Aucun capteur n'est partagé entre les adhérents de ce réseau</div>`}
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function j(N){const G=oi[N];return G?`<div class="m-ob-role-perms">${G.map(U=>`
      <div class="m-rp-section">
        <div class="m-rp-section-title">${U.section}</div>
        ${U.items.map(O=>`
          <div class="m-rp-item">
            <i class="bi bi-${O.ok?"check-circle-fill":"x-circle-fill"}" style="color:${O.ok?"#30d158":"#ff3b30"}"></i>
            <span>${O.label}</span>
          </div>`).join("")}
      </div>`).join("")}</div>`:""}function L(N){const G=oi[N];return G?`<div class="m-rp-summary">${G.map(O=>{const B=O.items.filter(oe=>oe.ok).length,R=B===0?"none":B===O.items.length?"full":"partial",X={full:"check-circle-fill",partial:"dash-circle-fill",none:"x-circle"}[R],Z={full:"#30d158",partial:"#ff9500",none:"#c7c7cc"}[R],ae=O.section.replace("Exploitations adhérentes","Adhérents");return`<div class="m-rp-badge"><i class="bi bi-${X}" style="color:${Z}"></i><span>${ae}</span></div>`}).join("")}</div>`:""}function D(){const N=Object.keys(oi);return`
      <button type="button" class="m-rp-toggle" id="ob-roles-info-toggle"><span>Comparer les droits par rôle</span><i class="bi bi-chevron-down"></i></button>
      <div class="m-ob-roles-info" id="ob-roles-info" hidden>
        <div class="m-ob-roles-tabs">${N.map((G,U)=>`<button type="button" class="m-ob-roles-tab${U===0?" m-ob-roles-tab--on":""}" data-role="${G}">${G}</button>`).join("")}</div>
        <div id="ob-roles-info-detail">${j(N[0])}</div>
      </div>`}function z(){return`
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
      </div>`}function T(){return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-people"></i></div>
        <h2 class="m-ob-h2">Inviter des membres</h2>
        <p class="m-ob-sub">Ajoutez des collègues de votre exploitation. Salariés, chefs de culture, conseillers externes...</p>
        <p class="m-ob-sub" style="margin-top:6px">Chaque membre implique une licence payante additionnelle.</p>
      </div>
      ${D()}
      <div id="ob-invite-list">${z()}</div>
      <button class="m-ob-add-member" id="ob-add-member" type="button"><i class="bi bi-plus-circle"></i> Ajouter un membre</button>
      <button class="m-ob-cta" id="ob-send-invites">Continuer</button>
      <button class="m-ob-link" id="ob-skip-invite" type="button">Passer cette étape</button>
    `)}function V(){const N=e==="new-adherent",G=Gi;if(N){const O=ni.find(R=>R.id==="expert"),B=O.features.map(R=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${O.color}"></i> ${R}</li>`).join("");return E(`
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
      `)}const U=ni.map(O=>{const B=O.id===n,R=O.features.map(X=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${O.color}"></i> ${X}</li>`).join("");return`
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
    `)}function ne(){const N=C(),G=r+1,U=G*N.priceNum,O=U*12,B=R=>R%1===0?`${R}`:R.toFixed(1).replace(".",",");return E(`
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
          <span style="font-size:13px;color:#636366">${G} licences (${r} invité${r>1?"s":""} + vous)</span>
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
    `)}function te(){return E(`
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
      </div>`}function ie(){return`
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
      </div>`}function Le(){return E(`
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
    `)}function ke(){if(n==="essential")return S(),"";const U=["P+","CHP-15/30","CAPA-30-3","EC"].map(B=>ce.find(R=>R.orgId===1&&R.model===B)).filter(Boolean);return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(B=>`
          <div class="m-ob-plan-card${l===B.id?" m-ob-plan-card--on":""}" data-psource="${B.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${B.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${B.title}</div>
                <div class="m-ob-plan-desc">${B.desc}</div>
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
        ${U.map(B=>`
          <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:.5px solid rgba(0,0,0,.08);cursor:pointer">
            <input type="checkbox" ${d.includes(B.id)?"checked":""} data-sensor-id="${B.id}" style="width:18px;height:18px;flex-shrink:0">
            <div>
              <div style="font-size:14px;font-weight:600;color:#1c1c1e">${qs[B.model]||B.model}</div>
              <div style="font-size:12px;color:#636366;margin-top:1px">${B.model} · ${B.serial}</div>
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
    `)}function De(){const N=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),G=new Set(["EC"]),U=ce.filter(R=>d.includes(R.id)),O=U.some(R=>N.has(R.model)),B=U.some(R=>G.has(R.model));return E(`
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
            ${Mi.map(R=>`<option>${R}</option>`).join("")}
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
            ${Ut.map(R=>`<option${R==="Non irrigué"?" selected":""}>${R}</option>`).join("")}
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
          ${n==="essential"?"<br>Une station météo virtuelle a été ajoutée au centre de la parcelle.":""}
        </p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Accéder au tableau de bord</button>
      </div>`}const rt={signup:F,verify:A,emailVerified:M,orgName:I,geoloc:k,orgInfo:y,networkChoice:$,networkPick:g,networkInfo:q,invite:T,plan:V,payment:ne,paymentConfirmed:J,volumeChoice:te,creating:ie,done:pe,parcelMap:Le,parcelSource:ke,parcelConfig:De,parcelDone:Fe};function _e(){const N=rt[h()];if(!N)return;const G=N();G&&(f.innerHTML=G),$e()}function H(){r=[...f.querySelectorAll("#ob-invite-list .m-ob-input--email")].filter(G=>G.value.trim()).length}function Y(){const N=window.L;N&&setTimeout(()=>{const G=f.querySelector("#ob-parcel-map");if(!G||G._leaflet_id)return;v=N.map(G,{zoomControl:!0,attributionControl:!1}).setView([c,u],15),N.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(v),N.circleMarker([c,u],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(v);const U=c+45e-5;m=N.marker([U,u],{icon:N.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),draggable:!0}).addTo(v),m.on("dragend",()=>{const O=m.getLatLng();c=O.lat,u=O.lng}),v.invalidateSize()},50)}const W=new Set(["orgInfo","networkChoice","networkPick","plan","payment","volumeChoice"]);function Q(){const N=h();if(!W.has(N))return;const G=f.querySelector("#ob-next");if(!G)return;let U=!0;N==="orgInfo"?U=f.querySelectorAll(".m-ob-pill--on").length>0:N==="networkChoice"?U=f.querySelectorAll("[data-join].m-ob-plan-card--on").length>0:N==="networkPick"?U=f.querySelectorAll("[data-net].m-ob-net-row--on").length>0:N==="plan"?U=f.querySelectorAll(".m-ob-sub-card--on").length>0:N==="payment"?U=[...f.querySelectorAll(".m-ob-form .m-ob-input")].every(B=>B.value.trim().length>0):N==="volumeChoice"&&(U=f.querySelectorAll("[data-volume].m-ob-plan-card--on").length>0),G.disabled=!U,G.style.opacity=U?"":"0.4"}function $e(){var G,U,O,B,R,X,Z,ae,oe,be,re,de,he,Se,Ce,we;(G=f.querySelector("#ob-back"))==null||G.addEventListener("click",_),f.querySelectorAll("#ob-next").forEach(ee=>ee.addEventListener("click",S)),(U=f.querySelector("#ob-pw-eye"))==null||U.addEventListener("click",()=>{s=!s;const ee=f.querySelector("#ob-pw");ee&&(ee.type=s?"text":"password");const se=f.querySelector("#ob-pw-eye i");se&&(se.className=s?"bi bi-eye":"bi bi-eye-slash")}),f.querySelectorAll(".m-ob-sub-card").forEach(ee=>{ee.addEventListener("click",se=>{se.target.closest(".m-ob-feat-toggle")||(n=ee.dataset.plan,_e())})}),f.querySelectorAll(".m-ob-feat-toggle").forEach(ee=>{ee.addEventListener("click",se=>{se.stopPropagation();const ve=f.querySelector(`#feat-${ee.dataset.plan}`),je=ee.querySelector(".bi");if(!ve)return;const Be=ve.style.display!=="none";ve.style.display=Be?"none":"block",je.className=`bi bi-chevron-${Be?"down":"up"}`})}),f.querySelectorAll("[data-join]").forEach(ee=>{ee.addEventListener("click",()=>{a=ee.dataset.join==="oui",f.querySelectorAll("[data-join]").forEach(se=>se.classList.toggle("m-ob-plan-card--on",se===ee)),Q()})}),f.querySelectorAll("[data-net]").forEach(ee=>{ee.addEventListener("click",()=>{f.querySelectorAll("[data-net]").forEach(se=>{const ve=se===ee;se.classList.toggle("m-ob-net-row--on",ve),se.querySelector(".bi").className=`bi bi-${ve?"check-circle-fill":"circle"}`}),Q()})});const N=()=>{var ve;(ve=f.querySelector("#ob-geoloc-btns"))==null||ve.remove();const ee=f.querySelector("#ob-geoloc-addr");ee&&(ee.style.display="");const se=window.L;se&&setTimeout(()=>{const je=f.querySelector("#ob-addr-map");if(!je||je._leaflet_id)return;const Be=se.map(je,{zoomControl:!0,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}).setView([46.3021,3.2938],13);se.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:18}).addTo(Be),se.marker([46.3021,3.2938]).addTo(Be)},50)};(O=f.querySelector("#ob-geoloc-allow"))==null||O.addEventListener("click",N),(B=f.querySelector("#ob-geoloc-manual"))==null||B.addEventListener("click",N),f.querySelectorAll(".m-ob-pill").forEach(ee=>{ee.addEventListener("click",()=>{ee.classList.toggle("m-ob-pill--on"),Q()})}),(R=f.querySelector("#ob-add-member"))==null||R.addEventListener("click",()=>{const ee=f.querySelector("#ob-invite-list"),se=document.createElement("div");se.innerHTML=z(),ee.appendChild(se.firstElementChild)}),(X=f.querySelector("#ob-invite-list"))==null||X.addEventListener("click",ee=>{const se=ee.target.closest(".m-ob-invite-remove");if(!se)return;const ve=se.closest(".m-ob-invite-item");ve&&ve.remove()}),(Z=f.querySelector("#ob-roles-info-toggle"))==null||Z.addEventListener("click",()=>{const ee=f.querySelector("#ob-roles-info-toggle"),se=f.querySelector("#ob-roles-info"),ve=!se.hidden;se.hidden=ve,ee.classList.toggle("m-rp-toggle--open",!ve),ee.querySelector("span").textContent=ve?"Comparer les droits par rôle":"Masquer la comparaison des rôles"}),(ae=f.querySelector("#ob-roles-info"))==null||ae.addEventListener("click",ee=>{const se=ee.target.closest(".m-ob-roles-tab");se&&(f.querySelectorAll(".m-ob-roles-tab").forEach(ve=>ve.classList.toggle("m-ob-roles-tab--on",ve===se)),f.querySelector("#ob-roles-info-detail").innerHTML=j(se.dataset.role))}),(oe=f.querySelector("#ob-invite-list"))==null||oe.addEventListener("change",ee=>{var je;const se=ee.target.closest(".m-ob-invite-role-sel");if(!se)return;const ve=(je=se.closest(".m-ob-invite-item"))==null?void 0:je.querySelector(".m-ob-role-summary-wrap");ve&&(ve.innerHTML=L(se.value))}),(be=f.querySelector("#ob-remove-invites"))==null||be.addEventListener("click",()=>{r=0,_e()}),(re=f.querySelector("#ob-send-invites"))==null||re.addEventListener("click",()=>{H(),S()}),(de=f.querySelector("#ob-skip-invite"))==null||de.addEventListener("click",()=>{r=0,S()}),f.querySelectorAll("[data-psource]").forEach(ee=>{ee.addEventListener("click",()=>{l=ee.dataset.psource,f.querySelectorAll("[data-psource]").forEach(se=>se.classList.toggle("m-ob-plan-card--on",se===ee)),f.querySelector("#ob-link-sensors").style.display=l==="link"?"block":"none",f.querySelector("#ob-add-sensor-form").style.display=l==="add"?"block":"none"})}),f.querySelectorAll("[data-sensor-id]").forEach(ee=>{ee.addEventListener("change",()=>{const se=parseInt(ee.dataset.sensorId);ee.checked?d.includes(se)||d.push(se):d=d.filter(Re=>Re!==se);const je=ce.filter(Re=>d.includes(Re.id)).filter(Re=>!Jn.has(Re.model)),Be={};je.forEach(Re=>(Vn[Re.model]||[]).forEach(zi=>{Be[zi]=(Be[zi]||0)+1}));const vt=Object.entries(Be).filter(([,Re])=>Re>1).map(([Re])=>Re),lt=f.querySelector("#ob-sensor-conflict"),jt=f.querySelector("#ob-sensor-conflict-msg");lt&&jt&&(vt.length>0?(jt.textContent=`Plusieurs capteurs mesurent la même métrique (${vt.join(", ")}). Décochez l'un des capteurs redondants.`,lt.style.display="flex"):lt.style.display="none")})}),f.querySelectorAll("[data-volume]").forEach(ee=>{ee.addEventListener("click",()=>{p=ee.dataset.volume==="oui",f.querySelectorAll("[data-volume]").forEach(ve=>ve.classList.toggle("m-ob-plan-card--on",ve===ee));const se=f.querySelector("#ob-volume-field");se&&(se.style.display=p?"block":"none"),Q()})}),(he=f.querySelector("#ob-skip-source"))==null||he.addEventListener("click",()=>{l="smv",S()}),(Se=f.querySelector("#ob-parcel-name"))==null||Se.addEventListener("input",ee=>{b=ee.target.value}),h()==="parcelMap"&&Y(),h()==="creating"&&setTimeout(()=>{o++,_e()},2200),(Ce=f.querySelector("#ob-finish"))==null||Ce.addEventListener("click",()=>{f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),i()},400)}),(we=f.querySelector("#ob-see-parcel"))==null||we.addEventListener("click",()=>{f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),i()},400)}),f.querySelectorAll(".m-ob-form .m-ob-input").forEach(ee=>{ee.addEventListener("input",Q)}),Q()}_e()}const Kn=["Ail","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Colza","Courgette","Féverole","Haricot vert","Laitue","Lin oléagineux","Luzerne","Maïs fourrage","Maïs grain","Orge d'hiver","Orge de printemps","Oignon","Pêcher","Pois protéagineux","Poireau","Poirier","Pomme de terre","Pommier","Prairie","Prunier","Ray-grass","Soja","Tomate","Tournesol","Trèfle","Vigne"];function Ps({showBack:e=!0,btnLabel:i="Ajouter",showSkip:t=!1}={}){return`
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
            ${Object.entries(qs).map(([o,n])=>`<option value="${o}">${n} (${o})</option>`).join("")}
          </select>
          <div class="m-ob-field" id="ob-sensor-depth-field" style="display:none;margin-bottom:12px">
            <label class="m-ob-label">Profondeur d'installation</label>
            <select class="m-ob-input m-ob-input--select" id="ob-sensor-depth"></select>
          </div>
          <button class="m-ob-cta" id="ob-next" style="margin:0 0 12px"><i class="bi bi-plus-lg"></i> ${i}</button>
          ${t?'<button class="m-ob-link" id="ob-skip-source" type="button" style="margin-bottom:8px">Passer cette étape</button>':""}
        </div>
      </div>
    </div>`}function js(e){const i=e.querySelector("#ob-sensor-model"),t=e.querySelector("#ob-sensor-depth-field"),o=e.querySelector("#ob-sensor-depth");if(!i||!t||!o)return;const n=()=>{const a=Wn[i.value];if(!a){t.style.display="none";return}const s=[];for(let r=a[0];r<=a[1];r+=5)s.push(r);o.innerHTML=s.map(r=>`<option value="${r}">${r} cm</option>`).join(""),t.style.display=""};i.addEventListener("change",n),n()}async function Xn(e,i){var t,o,n,a;try{const r=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${i}`)).json();return((t=r.address)==null?void 0:t.village)||((o=r.address)==null?void 0:o.town)||((n=r.address)==null?void 0:n.city)||((a=r.address)==null?void 0:a.municipality)||""}catch{return""}}function Qn(e){const i=document.getElementById("phone-screen");let t=46.3021,o=3.2938,n=null,a=null,s=46.3021+45e-5,r=3.2938,p=null,c=null,u="smv",m=[],v="",l=0;const d=["parcelMap","parcelSource","parcelData","parcelConfig","parcelDone"],b={parcelMap:"Parcelle",parcelSource:"Source de données",parcelData:"Données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"},f=document.createElement("div");f.id="parcel-creation-overlay",f.className="m-ob-overlay",i.appendChild(f);function x(){return d[l]}function h(){l++,k()}function w(){l--,k()}function C(g,q=!0){const j=x(),L=q&&l>0&&j!=="parcelDone",D=b[j]||"",z=d.filter(te=>te!=="parcelDone"),T=z.indexOf(j),V=T>=0?Math.round(T/z.length*100):100,ne=j!=="parcelDone"?`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${V}%"></div></div>`:"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${L?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${D}</span>
          <button class="m-ob-back" id="ob-close" style="margin-left:auto"><i class="bi bi-x-lg"></i></button>
        </div>
        ${ne}
        <div class="m-ob-body">${g}</div>
      </div>`}function P(){return C(`
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
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(q=>`
          <div class="m-ob-plan-card${u===q.id?" m-ob-plan-card--on":""}" data-psource="${q.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${q.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${q.title}</div>
                <div class="m-ob-plan-desc">${q.desc}</div>
              </div>
            </div>
          </div>`).join("")}
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
      <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
    `)}function S(){if(u==="smv")return C(`
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
          ${g.map((q,j)=>`
            <label style="display:flex;align-items:center;gap:12px;padding:12px 14px;${j<g.length-1?"border-bottom:.5px solid rgba(0,0,0,.08)":""};cursor:pointer">
              <input type="checkbox" ${m.includes(q.id)?"checked":""} data-sensor-id="${q.id}" style="width:18px;height:18px;flex-shrink:0">
              <div>
                <div style="font-size:14px;font-weight:600">${q.model}</div>
                <div style="font-size:12px;color:#636366">${q.serial}</div>
              </div>
            </label>`).join("")}
        </div>
        <button class="m-ob-cta" id="ob-next">Continuer</button>
        <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
      `)}return Ps({showBack:!0,btnLabel:"Continuer",showSkip:!0})}function _(){const g=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),q=new Set(["EC"]),j=ce.filter(T=>m.includes(T.id)),L=j.some(T=>g.has(T.model)),D=j.some(T=>q.has(T.model)),z=Ut.filter(T=>T!=="Non renseigné");return v||Xn(t,o).then(T=>{if(!T)return;v=T;const V=f.querySelector("#ob-parcel-name");V&&!V._edited&&(V.value=T)}),C(`
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
            ${Mi.map(T=>`<option>${T}</option>`).join("")}
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
            ${Kn.map(T=>`<option>${T}</option>`).join("")}
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
            ${z.map(T=>`<option>${T}</option>`).join("")}
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
      </div>`}function A(){const g=window.L;g&&setTimeout(()=>{const q=f.querySelector("#ob-parcel-map");if(!q||q._leaflet_id)return;a=g.map(q,{zoomControl:!0,attributionControl:!1}).setView([t,o],15),g.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(a),g.circleMarker([t,o],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(a);const j=g.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});n=g.marker([t+45e-5,o],{icon:j,draggable:!0}).addTo(a),n.on("dragend",()=>{const L=n.getLatLng();t=L.lat,o=L.lng}),a.on("click",L=>{t=L.latlng.lat,o=L.latlng.lng,n.setLatLng([t,o])}),a.invalidateSize()},50)}function M(){const g=window.L;g&&(s=t+45e-5,r=o,setTimeout(()=>{const q=f.querySelector("#ob-smv-map");if(!q||q._leaflet_id)return;c=g.map(q,{zoomControl:!0,attributionControl:!1}).setView([t,o],15),g.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(c),g.circleMarker([t,o],{radius:8,color:"#fff",weight:2,fillColor:"#E05252",fillOpacity:1}).addTo(c);const j=g.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#0172A4;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});p=g.marker([s,r],{icon:j,draggable:!0}).addTo(c),p.on("dragend",()=>{const L=p.getLatLng();s=L.lat,r=L.lng}),c.on("click",L=>{s=L.latlng.lat,r=L.latlng.lng,p.setLatLng([s,r])}),c.invalidateSize()},50))}const I={parcelMap:P,parcelSource:E,parcelData:S,parcelConfig:_,parcelDone:F};function k(){var q;const g=(q=I[x()])==null?void 0:q.call(I);g&&(f.innerHTML=g),$()}function y(){f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),e()},400)}function $(){var q,j,L,D,z;(q=f.querySelector("#ob-back"))==null||q.addEventListener("click",w),(j=f.querySelector("#ob-close"))==null||j.addEventListener("click",y),f.querySelectorAll("#ob-next").forEach(T=>T.addEventListener("click",h)),js(f),f.querySelectorAll("[data-psource]").forEach(T=>{T.addEventListener("click",()=>{u=T.dataset.psource,f.querySelectorAll("[data-psource]").forEach(V=>V.classList.toggle("m-ob-plan-card--on",V===T))})}),f.querySelectorAll("[data-sensor-id]").forEach(T=>{T.addEventListener("change",()=>{const V=parseInt(T.dataset.sensorId);T.checked?m.includes(V)||m.push(V):m=m.filter(ne=>ne!==V)})}),(L=f.querySelector("#ob-skip-source"))==null||L.addEventListener("click",()=>{u="smv",h()});const g=f.querySelector("#ob-parcel-name");g&&g.addEventListener("input",T=>{T.target._edited=!0,v=T.target.value}),x()==="parcelMap"&&A(),x()==="parcelData"&&u==="smv"&&M(),(D=f.querySelector("#ob-see-parcel"))==null||D.addEventListener("click",y),(z=f.querySelector("#ob-finish"))==null||z.addEventListener("click",y)}k()}function eo(e){const i=document.getElementById("phone-screen");let t=0;const o=["sensorAdd","sensorDone"],n=document.createElement("div");n.id="sensor-creation-overlay",n.className="m-ob-overlay",i.appendChild(n);function a(){return o[t]}function s(){t++,m()}function r(){return Ps({showBack:!1,btnLabel:"Enregistrer le capteur",showSkip:!1})}function p(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Capteur ajouté !</h2>
        <p class="m-ob-sub">Votre capteur a été enregistré avec succès.</p>
        <button class="m-ob-cta" id="ob-see-sensor" style="margin-top:32px"><i class="bi bi-broadcast"></i> Voir le capteur</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function c(){n.classList.add("m-ob-overlay--out"),setTimeout(()=>{n.remove(),e()},400)}function u(){var v,l,d,b;(v=n.querySelector("#ob-close"))==null||v.addEventListener("click",c),(l=n.querySelector("#ob-next"))==null||l.addEventListener("click",s),(d=n.querySelector("#ob-see-sensor"))==null||d.addEventListener("click",c),(b=n.querySelector("#ob-finish"))==null||b.addEventListener("click",c),js(n)}function m(){var d;const v={sensorAdd:r,sensorDone:p},l=(d=v[a()])==null?void 0:d.call(v);l&&(n.innerHTML=l),u()}m()}function Mt(e){var i;return((i=e.integrations)==null?void 0:i.some(t=>t.startsWith("IRRÉ-LIS")))??!1}const gi="weenat-irrelis-config";function mt(e){try{const r=JSON.parse(localStorage.getItem(gi)||"{}");if(r[e])return r[e]}catch{}const t=60+e*13%50,o=Math.round(t*.42),n=["Maïs","Maïs","Maïs","Blé","Maïs","Tournesol","Orge","Maïs"],a=n[e%n.length],s=String(5+e%16).padStart(2,"0");return{ru:t,rfu:o,culture:a,semisDate:`2026-04-${s}`}}function to(e,i){try{const t=JSON.parse(localStorage.getItem(gi)||"{}");t[e]={...mt(e),...i},localStorage.setItem(gi,JSON.stringify(t))}catch{}}const zs=e=>`weenat-il-events-${e}`;function Ds(e){try{return JSON.parse(localStorage.getItem(zs(e)))||[]}catch{return[]}}function io(e,i){try{localStorage.setItem(zs(e),JSON.stringify(i))}catch{}}function so(e,i,t){const o=[];let n=!0,a=5+Math.floor(Math.abs(Math.sin(e*.13))*5);for(let s=0;s<i;s++)if(a<=0&&(n=!n,a=n?4+Math.floor(Math.abs(Math.sin(e*1337+s*.53))*7):1+Math.floor(Math.abs(Math.sin(e*2997+s*.91))*2.9)),a--,n)o.push(0);else{const r=8+Math.floor(Math.abs(Math.sin(e*7919+s*1.73))*22);o.push(s>=t?Math.round(r*.6):r)}return o}function kt(e,i=5){const t=mt(e.id),{ru:o,rfu:n}=t,a=e.id,s=new Date("2026-04-01T00:00:00"),r=new Date("2026-10-01T00:00:00"),p=new Date;p.setHours(0,0,0,0);const c=864e5,u=Math.round((r-s)/c),m=Math.max(0,Math.min(Math.round((p-s)/c),u)),v=u,l=so(a,v,m),d={};for(const S of Ds(e.id))d[S.iso]||(d[S.iso]={pluie:0,irrigation:0}),d[S.iso][S.type]=(d[S.iso][S.type]||0)+S.mm;const b=[],f=[];for(let S=0;S<v;S++){const{ru:_,rfu:F}=oo(t,s,S);b.push(_),f.push(F)}const x=[],h=[],w=[],C=[],P=[];let E=b[0]*.88;for(let S=0;S<v;S++){const _=new Date(s.getTime()+S*c).toISOString().split("T")[0],F=d[_]||{pluie:0,irrigation:0},A=Math.max(.8,Math.min(5,1+4*Math.pow(Math.max(0,S/150),.6)+Math.sin(a*999+S*.57)*.3)),M=l[S]+F.pluie,I=F.irrigation;w.push(+A.toFixed(1)),h.push(M),C.push(I);const k=b[S];E=E-A+M+I;const y=Math.max(0,E-k);P.push(+y.toFixed(1)),E=Math.max(0,Math.min(k,E)),x.push(+E.toFixed(1))}return{reservoir:x,pluie:h,etp:w,drainage:P,irrigation:C,nDays:m,nFcDays:i,ru:o,rfu:n,cfg:t,apr1:s,ruArr:b,rfuArr:f}}function Ii(e,i){const t=kt(e,5),o=t.nDays;switch(i){case"Aujourd'hui":return t.reservoir[o]??0;case"Demain":return t.reservoir[o+1]??0;case"J+3":return t.reservoir[o+3]??0;case"J+5":return t.reservoir[o+5]??0;default:return t.reservoir[o]??0}}function Zt(e,i,t){return e>t?"#007aff":e>=i?"#24B066":e>=t*.15?"#E8A020":"#E05252"}function Fs(e,i,t,o){if(e==="7j"){const n=Math.max(0,i-7);return{startIdx:n,displayLen:Math.min(o-n,7+t)}}if(e==="30j"){const n=Math.max(0,i-30);return{startIdx:n,displayLen:Math.min(o-n,30+t)}}return{startIdx:0,displayLen:o}}const no=[{label:"Levée",daysAfter:10},{label:"4 feuilles",daysAfter:22},{label:"10 feuilles",daysAfter:38},{label:"15 feuilles",daysAfter:52},{label:"Floraison",daysAfter:68},{label:"Sl. laiteux",daysAfter:83},{label:"70% humidité",daysAfter:100}],Yi=[{daysAfter:0,factor:.1},{daysAfter:10,factor:.22},{daysAfter:22,factor:.42},{daysAfter:38,factor:.66},{daysAfter:52,factor:.85},{daysAfter:68,factor:1},{daysAfter:83,factor:1},{daysAfter:100,factor:.97}];function oo(e,i,t){if(e.culture!=="Maïs")return{ru:e.ru,rfu:e.rfu};const o=new Date(e.semisDate+"T00:00:00"),n=Math.round((o-i)/864e5),a=t-n;if(a<0)return{ru:Math.round(e.ru*.08),rfu:Math.round(e.rfu*.08)};let s=Yi[0].factor;for(const c of Yi)a>=c.daysAfter&&(s=c.factor);const r=Math.round(e.ru*s),p=Math.round(r*e.rfu/e.ru);return{ru:r,rfu:p}}function yi(e){if(e.length<2)return"";let i=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let t=0;t<e.length-1;t++){const o=e[Math.max(t-1,0)],n=e[t],a=e[t+1],s=e[Math.min(t+2,e.length-1)],r=n.x+(a.x-o.x)/6,p=n.y+(a.y-o.y)/6,c=a.x-(s.x-n.x)/6,u=a.y-(s.y-n.y)/6;i+=` C${r.toFixed(1)},${p.toFixed(1)} ${c.toFixed(1)},${u.toFixed(1)} ${a.x.toFixed(1)},${a.y.toFixed(1)}`}return i}const _s=["jan.","fév.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],Bs={t:24,r:38,b:28,l:52},ao={t:8,r:38,b:28,l:52};function ro(e,i,t,o,n){const{reservoir:a,nDays:s,ru:r,rfu:p,cfg:c,apr1:u,ruArr:m,rfuArr:v}=t,l=Bs,d=e-l.l-l.r,b=i-l.t-l.b,f=r*1.05,x=H=>l.t+b-Math.max(0,Math.min(f,H))/f*b,h=H=>l.l+(H-o)/Math.max(n-1,1)*d,w=l.t+b,C=l.t;function P(H){let Y="";for(let W=0;W<n;W++){const Q=Math.min(o+W,H.length-1),$e=h(o+W).toFixed(1),N=W>0?H[Math.min(o+W-1,H.length-1)]:null;N!==null&&H[Q]!==N&&(Y+=`${$e},${x(N).toFixed(1)} `),Y+=`${$e},${x(H[Q]).toFixed(1)} `}return Y.trim()}const E=P(v),S=E.split(" ").reverse().join(" "),_=P(m),F=_.split(" ").reverse().join(" "),A=`${l.l},${C} ${(l.l+d).toFixed(1)},${C} ${S}`,M=`${E} ${F}`,I=Math.min(s,v.length-1),k=(x(v[I])-5).toFixed(1),y=(x(m[I])-5).toFixed(1),$=`
    <polygon points="${A}" fill="#24B066" opacity="0.1" clip-path="url(#il-c)"/>
    <polygon points="${M}"   fill="#E05252" opacity="0.08" clip-path="url(#il-c)"/>
    <polyline points="${_}"  fill="none" stroke="#0172A4" stroke-width="1"   stroke-dasharray="4,4" opacity="0.35" clip-path="url(#il-c)"/>
    <polyline points="${E}" fill="none" stroke="#24B066" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.65" clip-path="url(#il-c)"/>
    <text x="${(l.l+d-4).toFixed(1)}" y="${k}" text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#24B066" font-weight="700">RFU</text>
    <text x="${(l.l+d-4).toFixed(1)}" y="${y}"  text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#0172A4" font-weight="600" opacity="0.7">RU</text>`,g=new Date(c.semisDate+"T00:00:00"),q=Math.round((g-u)/864e5),j=(c.culture==="Maïs"?no:[]).map(H=>{const Y=q+H.daysAfter;if(Y<o||Y>=o+n)return"";const W=h(Y),Q=W.toFixed(1),$e=(W+3).toFixed(0),N=(w-4).toFixed(0);return`<line x1="${Q}" y1="${C}" x2="${Q}" y2="${w}" stroke="#4CAF50" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.55"/>
<text transform="translate(${$e},${N}) rotate(-90)" font-size="10" font-family="-apple-system,sans-serif" fill="#4CAF50" font-weight="600">${H.label}</text>`}).join("");let L="",D="";for(let H=o;H<o+n;H++){const Y=new Date(u.getTime()+H*864e5);if(Y.getDate()===1){const W=h(H).toFixed(1);L+=`<line x1="${W}" y1="${l.t}" x2="${W}" y2="${w}" stroke="rgba(0,0,0,.18)" stroke-width="1" stroke-dasharray="3,4"/>`;const Q=new Date(Y.getFullYear(),Y.getMonth()+1,1),$e=Math.round((Q-u)/864e5),N=Math.min($e,o+n-1),G=h((H+N)/2).toFixed(1),U=String(Y.getFullYear()).slice(-2),O=`${_s[Y.getMonth()]} ${U}`;D+=`<text x="${G}" y="${i-6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${O}</text>`}}const T=[0,p,r].map(H=>{const Y=(x(H)+4).toFixed(1);return`<text x="${l.l-6}" y="${Y}" text-anchor="end" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${H}</text>`}).join("")+`<text x="${l.l-6}" y="${l.t-7}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`,V=7,te=a.slice(o,o+n).map((H,Y)=>({x:h(o+Y),y:x(H)})),J=s-o,ie=te.slice(0,Math.min(Math.max(J+1,1),te.length)),pe=Math.min(J+V+1,te.length),Le=J>=0&&J<te.length?te.slice(J,pe):[],ke=yi(ie),De=Le.length>=2?yi(Le):"",Fe=h(Math.max(o,Math.min(s,o+n-1))).toFixed(1),rt=ie.length?ie[ie.length-1].x.toFixed(1):Fe,_e=ke?`${ke} L${rt},${w} L${l.l},${w} Z`:"";return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <defs>
      <clipPath id="il-c"><rect x="${l.l}" y="${l.t}" width="${d}" height="${b}"/></clipPath>
      <linearGradient id="il-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0172A4" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#0172A4" stop-opacity="0.01"/>
      </linearGradient>
    </defs>
    ${$}
    <g clip-path="url(#il-c)">${L}${j}</g>
    ${_e?`<path d="${_e}" fill="url(#il-g)" clip-path="url(#il-c)"/>`:""}
    ${ke?`<path d="${ke}" fill="none" stroke="#0172A4" stroke-width="2.5" stroke-linejoin="round" clip-path="url(#il-c)"/>`:""}
    ${De?`<path d="${De}" fill="none" stroke="#0172A4" stroke-width="2" stroke-dasharray="7,5" stroke-linejoin="round" opacity="0.7" clip-path="url(#il-c)"/>`:""}
    <line x1="${Fe}" y1="${l.t}" x2="${Fe}" y2="${w}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="${Fe}" y="${l.t-6}" text-anchor="middle" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">Auj.</text>
    ${T}
    ${D}
    <rect x="${l.l}" y="${l.t}" width="${d}" height="${b}" fill="none" stroke="rgba(0,0,0,.07)" stroke-width="1"/>
  </svg>`}function lo(e,i,t,o,n){const{pluie:a,etp:s,drainage:r,irrigation:p,nDays:c,nFcDays:u,apr1:m}=t,v=ao,l=e-v.l-v.r,d=i-v.t-v.b,b=v.t+d/2,f=a.slice(o,o+n),x=s.slice(o,o+n),h=r.slice(o,o+n),w=p.slice(o,o+n),C=Math.max(...f.map((g,q)=>g+(w[q]||0)),1),P=Math.max(...x.map((g,q)=>g+(h[q]||0)),1),E=Math.max(C,P,1),S=d/2,_=Math.max(1.5,l/n*.8),F=g=>v.l+g/Math.max(n-1,1)*l-_/2;let A="";for(let g=0;g<n;g++){const q=f[g]/E*S,j=w[g]/E*S,L=x[g]/E*S,D=h[g]/E*S,z=F(g).toFixed(1),T=_.toFixed(1);f[g]>0&&(A+=`<rect x="${z}" y="${(b-q).toFixed(1)}" width="${T}" height="${q.toFixed(1)}" fill="#2E75B6" opacity="0.85"/>`),w[g]>0&&(A+=`<rect x="${z}" y="${(b-q-j).toFixed(1)}" width="${T}" height="${j.toFixed(1)}" fill="#FF8C00" opacity="0.85"/>`),A+=`<rect x="${z}" y="${b.toFixed(1)}" width="${T}" height="${L.toFixed(1)}" fill="#00887E" opacity="0.75"/>`,h[g]>0&&(A+=`<rect x="${z}" y="${(b+L).toFixed(1)}" width="${T}" height="${D.toFixed(1)}" fill="#8B1A1A" opacity="0.75"/>`)}const M=+E.toFixed(1),I=[`<text x="${v.l-6}" y="${(v.t+13).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">+${M}</text>`,`<text x="${v.l-6}" y="${(b+4).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">0</text>`,`<text x="${v.l-6}" y="${(v.t+d).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">-${M}</text>`,`<text x="${v.l-6}" y="${v.t-1}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`].join("");let k="";for(let g=0;g<n;g++){const q=o+g,j=new Date(m.getTime()+q*864e5);if(j.getDate()===1){const L=new Date(j.getFullYear(),j.getMonth()+1,1),D=Math.round((L-m)/864e5),z=Math.min(D-o,n-1),T=(g+z)/2,V=(v.l+T/Math.max(n-1,1)*l).toFixed(1),ne=String(j.getFullYear()).slice(-2);k+=`<text x="${V}" y="${i-6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${_s[j.getMonth()]} ${ne}</text>`;const te=(v.l+g/Math.max(n-1,1)*l).toFixed(1);k+=`<line x1="${te}" y1="${v.t}" x2="${te}" y2="${v.t+d}" stroke="rgba(0,0,0,.12)" stroke-width="1" stroke-dasharray="3,4"/>`}}const y=c-o,$=y>=0&&y<n?(v.l+y/Math.max(n-1,1)*l).toFixed(1):null;return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <line x1="${v.l}" y1="${b.toFixed(1)}" x2="${v.l+l}" y2="${b.toFixed(1)}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>
    ${A}
    ${$?`<line x1="${$}" y1="${v.t}" x2="${$}" y2="${v.t+d}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3" opacity="0.7"/>`:""}
    ${I}
    ${k}
    <rect x="${v.l}" y="${v.t}" width="${l}" height="${d}" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="1"/>
  </svg>`}function co(){const e=(a,s)=>`<svg width="20" height="10" style="flex-shrink:0"><line x1="0" y1="5" x2="20" y2="5" stroke="${a}" stroke-width="2.5"${s?' stroke-dasharray="5,3"':""}/></svg>`,i=(a,s)=>`<span style="display:inline-block;width:14px;height:10px;background:${a};opacity:${s};border-radius:2px;flex-shrink:0"></span>`,t=a=>`<span style="display:inline-block;width:10px;height:10px;background:${a};border-radius:2px;flex-shrink:0"></span>`,o=(a,s)=>`<span style="display:flex;align-items:center;gap:4px;font-size:11px;color:#636366;white-space:nowrap">${a}<span>${s}</span></span>`,n=a=>`<div style="display:flex;gap:10px;flex-wrap:wrap">${a.join("")}</div>`;return`<div style="display:flex;flex-direction:column;gap:4px">
    ${n([o(e("#0172A4",!1),"Réserve"),o(e("#0172A4",!0),"Prévision J+7"),o(i("#24B066","1"),"Eau disponible"),o(i("#E05252","1"),"Zone de stress")])}
    ${n([o(t("#2E75B6"),"Pluie"),o(t("#FF8C00"),"Irrigation"),o(t("#00887E"),"ETP"),o(t("#8B1A1A"),"Drainage")])}
  </div>`}function uo(e,i,t){const{nDays:o,nFcDays:n,pluie:a,etp:s,drainage:r,irrigation:p}=i,c=i.reservoir.length,{startIdx:u,displayLen:m}=Fs(t,o,n,c),v=Math.min(u+m,o),l=b=>b.slice(u,v).reduce((f,x)=>f+x,0),d=(b,f,x)=>`<div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px">
      <span style="font-size:12px;color:#636366">${f}</span>
      <span style="font-size:13px;font-weight:700;color:${b}">${x} mm</span>
    </div>`;e.innerHTML=`<div style="font-size:10px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;padding:5px 14px 3px">Cumuls sur la période</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:2px 10px;padding:0 14px 8px">
      ${d("#2E75B6","Pluie",Math.round(l(a)))}
      ${d("#00887E","ETP",+l(s).toFixed(1))}
      ${d("#FF8C00","Irrigation",Math.round(l(p)))}
      ${d("#8B1A1A","Drainage",+l(r).toFixed(1))}
    </div>`}function po(e,i,t,o,n){const{reservoir:a,ru:s,rfu:r,nDays:p,apr1:c,ruArr:u,rfuArr:m}=i,v=Bs,d=e.clientWidth-v.l-v.r;e.style.position="relative";const b=document.createElement("div");b.style.cssText="position:absolute;background:rgba(28,28,30,.88);color:#fff;border-radius:10px;padding:6px 11px;font-size:13px;font-weight:600;pointer-events:none;display:none;white-space:nowrap;z-index:20;transform:translate(-50%,-100%);margin-top:-10px;font-family:-apple-system,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.25)";const f=document.createElement("div");f.style.cssText=`position:absolute;width:1px;background:rgba(100,100,100,.35);pointer-events:none;display:none;top:${v.t}px`,f.style.height=n-v.t-v.b+"px",e.appendChild(f),e.appendChild(b);const x=(w,C)=>{const P=e.getBoundingClientRect(),E=C-P.top;if(E>n){h();return}const S=w-P.left,_=Math.max(0,Math.min(1,(S-v.l)/d)),F=Math.max(0,Math.min(a.length-1,Math.round(t+_*(o-1)))),A=a[F],M=F>=p,I=u?u[Math.min(F,u.length-1)]:s,k=m?m[Math.min(F,m.length-1)]:r,y=Zt(A,k,I),g=new Date(c.getTime()+F*864e5).toLocaleDateString("fr-FR",{day:"numeric",month:"short"});b.innerHTML=`<span style="color:${y}">${A} mm</span>&ensp;<span style="font-size:11px;opacity:.7">${g}${M?" ·&thinsp;prév.":""}</span>`;const q=Math.max(60,Math.min(P.width-60,S));b.style.left=q+"px",b.style.top=Math.min(E,n-20)+"px",b.style.display="block",f.style.left=S+"px",f.style.display="block"},h=()=>{b.style.display="none",f.style.display="none"};e.addEventListener("mousemove",w=>x(w.clientX,w.clientY)),e.addEventListener("mouseleave",h),e.addEventListener("touchmove",w=>{w.preventDefault(),x(w.touches[0].clientX,w.touches[0].clientY)},{passive:!1}),e.addEventListener("touchend",h)}function mo(e,i,t="saison"){const o=e.clientWidth,n=e.clientHeight;if(!o||!n)return;const{nDays:a,nFcDays:s}=i,r=i.reservoir.length,{startIdx:p,displayLen:c}=Fs(t,a,s,r),u=Math.round(n*3/5),m=n-u;e.innerHTML=ro(o,u,i,p,c)+lo(o,m,i,p,c),po(e,i,p,c,u)}function vo(e,i){const t=mt(e.id),o=document.createElement("div");o.innerHTML=`
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
    </div>`;const n=ue({title:`Configuration — ${e.name}`,body:o,doneLabel:"Fermer",onDone:()=>{}});o.querySelector("#il-cfg-save").addEventListener("click",()=>{to(e.id,{culture:o.querySelector("#il-culture").value,semisDate:o.querySelector("#il-semis").value,ru:+o.querySelector("#il-ru").value||t.ru,rfu:+o.querySelector("#il-rfu").value||t.rfu}),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{n.remove(),i==null||i()},280),K("Configuration enregistrée")})}function fo(e,i){let t=[...Ds(e.id)],o="all",n=null;function a(p){return new Date(p+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function s(){const c=[...o==="all"?t:t.filter(l=>l.type===o)].sort((l,d)=>d.iso.localeCompare(l.iso)),u=c.map(l=>{const d=t.indexOf(l),b=l.type==="pluie",f=b?"rgba(46,117,182,.12)":"rgba(255,140,0,.12)",x=b?"#2E75B6":"#FF8C00";return`
        <div style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:.5px solid rgba(0,0,0,.07)">
          <div style="width:32px;height:32px;border-radius:50%;background:${f};display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="bi ${b?"bi-cloud-rain":"bi-droplet-fill"}" style="color:${x};font-size:14px"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:600;color:#1c1c1e">${b?"Pluie":"Irrigation"}</div>
            <div style="font-size:12px;color:#8e8e93">${a(l.iso)}</div>
          </div>
          <div style="font-size:15px;font-weight:700;color:${x};margin-right:4px">${l.mm} mm</div>
          <button class="gpi-edit" data-idx="${d}" style="background:none;border:none;cursor:pointer;padding:4px;color:#8e8e93"><i class="bi bi-pencil" style="font-size:14px"></i></button>
          <button class="gpi-del" data-idx="${d}" style="background:none;border:none;cursor:pointer;padding:4px;color:#E05252"><i class="bi bi-trash" style="font-size:14px"></i></button>
        </div>`}).join(""),m="background:#0172A4;color:#fff;",v="background:rgba(1,114,164,.08);color:#0172A4;";n.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;border-bottom:.5px solid rgba(0,0,0,.1);background:#fff;flex-shrink:0">
        <button id="gpi-back" style="color:#0172A4;background:none;border:none;font-size:15px;cursor:pointer;display:flex;align-items:center;gap:4px"><i class="bi bi-chevron-left"></i> Irré-LIS</button>
        <span style="font-size:16px;font-weight:700;color:#1c1c1e;flex:1;text-align:center">Pluies &amp; irrigations</span>
        <div style="width:80px"></div>
      </div>
      <div style="display:flex;gap:6px;padding:10px 16px 8px;flex-shrink:0">
        <button class="gpi-filter" data-f="all"       style="${o==="all"?m:v}flex:1;border:none;border-radius:10px;padding:8px 4px;font-size:13px;font-weight:600;cursor:pointer">Tout</button>
        <button class="gpi-filter" data-f="pluie"     style="${o==="pluie"?m:v}flex:1;border:none;border-radius:10px;padding:8px 4px;font-size:13px;font-weight:600;cursor:pointer">Pluie</button>
        <button class="gpi-filter" data-f="irrigation" style="${o==="irrigation"?m:v}flex:1;border:none;border-radius:10px;padding:8px 4px;font-size:13px;font-weight:600;cursor:pointer">Irrigation</button>
      </div>
      <div style="display:flex;gap:8px;padding:0 16px 12px;flex-shrink:0">
        <button id="gpi-add-pluie" style="flex:1;background:rgba(46,117,182,.1);color:#2E75B6;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Pluie</button>
        <button id="gpi-add-irrig" style="flex:1;background:rgba(255,140,0,.1);color:#FF8C00;border:none;border-radius:12px;padding:11px 8px;font-size:14px;font-weight:600;cursor:pointer"><i class="bi bi-plus-circle"></i> Irrigation</button>
      </div>
      <div style="overflow-y:auto;flex:1;background:#f2f2f7">
        ${c.length?u:'<p style="color:#8e8e93;text-align:center;padding:32px 0;font-size:14px">Aucun événement</p>'}
      </div>
      <div style="padding:10px 16px 20px;background:#fff;border-top:.5px solid rgba(0,0,0,.1);flex-shrink:0">
        <button id="gpi-save" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:14px;padding:15px;font-size:16px;font-weight:700;cursor:pointer">Enregistrer (${t.length})</button>
      </div>`,n.querySelector("#gpi-back").addEventListener("click",()=>fe()),n.querySelector("#gpi-add-pluie").addEventListener("click",()=>r("pluie")),n.querySelector("#gpi-add-irrig").addEventListener("click",()=>r("irrigation")),n.querySelector("#gpi-save").addEventListener("click",()=>{io(e.id,t),fe(),i==null||i(),K(`${t.length} événement(s) enregistré(s)`)}),n.querySelectorAll(".gpi-filter").forEach(l=>{l.addEventListener("click",()=>{o=l.dataset.f,s()})}),n.querySelectorAll(".gpi-edit").forEach(l=>{l.addEventListener("click",()=>{r(t[+l.dataset.idx].type,+l.dataset.idx)})}),n.querySelectorAll(".gpi-del").forEach(l=>{l.addEventListener("click",()=>{t.splice(+l.dataset.idx,1),s()})})}function r(p,c=-1){const u=c>=0?t[c]:null,m=document.createElement("div");m.innerHTML=`
      <div style="padding:4px 0 8px">
        <div class="m-form-label">Date</div>
        <input id="gpi-date" type="date" value="${(u==null?void 0:u.iso)??new Date().toISOString().split("T")[0]}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
        <div class="m-form-label">Quantité (mm)</div>
        <input id="gpi-mm" type="number" value="${(u==null?void 0:u.mm)??""}" placeholder="ex : 25" min="0" max="300" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
        <button id="gpi-sheet-save" style="width:100%;background:${p==="pluie"?"#2E75B6":"#FF8C00"};color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">${c>=0?"Modifier":"Ajouter"}</button>
      </div>`;const v=p==="pluie"?c>=0?"Modifier la pluie":"Ajouter une pluie":c>=0?"Modifier l'irrigation":"Ajouter une irrigation",l=ue({title:v,body:m,doneLabel:"Fermer",onDone:()=>{}});m.querySelector("#gpi-sheet-save").addEventListener("click",()=>{const d=m.querySelector("#gpi-date").value,b=parseFloat(m.querySelector("#gpi-mm").value);if(!d||isNaN(b)||b<=0)return;const f={type:p,iso:d,mm:+b.toFixed(1)};c>=0?t[c]=f:t.push(f),l.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{l.remove(),s()},280)})}n=xe(""),n.style.cssText="display:flex;flex-direction:column;background:#f2f2f7",s()}function bo(e){const i=document.createElement("div");i.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
      <div style="width:56px;height:56px;border-radius:50%;background:rgba(48,209,88,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
        <i class="bi bi-file-earmark-spreadsheet" style="font-size:26px;color:#30d158"></i>
      </div>
      <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 16px">Le bilan hydrique Irré-LIS de <strong>${e.name}</strong> sera envoyé par e-mail au format Excel.</p>
      <div class="m-form-label" style="align-self:flex-start;width:100%;text-align:left">Adresse e-mail</div>
      <input id="il-dl-email" type="email" value="contact@fermebocage.fr" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
      <button id="il-dl-send" style="width:100%;background:#30d158;color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">Envoyer le fichier</button>
    </div>`;const t=ue({title:"Télécharger le bilan",body:i,doneLabel:"Fermer",onDone:()=>{}});i.querySelector("#il-dl-send").addEventListener("click",()=>{t.classList.remove("m-sheet-overlay--show"),setTimeout(()=>t.remove(),280),K("Bilan envoyé par e-mail")})}function Hs(e){const i=kt(e,5),{reservoir:t,pluie:o,etp:n,drainage:a,irrigation:s,nDays:r,ru:p,rfu:c,cfg:u,ruArr:m,rfuArr:v}=i,l=t[r]??t[r-1]??0,d=m[Math.min(r,m.length-1)],b=v[Math.min(r,v.length-1)],f=Zt(l,b,d),x=Math.round(l/d*100),h=Math.max(0,r-7),w=J=>J.slice(h,r).reduce((ie,pe)=>ie+pe,0),C=Math.round(w(o)),P=Math.round(w(s)),E=+w(n).toFixed(1),S=+w(a).toFixed(1),_=t.slice(h,r+1),F=260,A=52,M=4,I=4,k=4,y=4,$=F-M-I,g=A-k-y,q=J=>k+g-Math.max(0,Math.min(1.02,J/d))*g,j=J=>M+J/Math.max(_.length-1,1)*$,L=_.map((J,ie)=>({x:j(ie),y:q(J)})),D=yi(L),z=q(b).toFixed(1),T=(k+g).toFixed(1),V=D?`${D} L${j(_.length-1).toFixed(1)},${T} L${M},${T} Z`:"",ne=`<svg viewBox="0 0 ${F} ${A}" width="${F}" height="${A}" style="display:block;width:100%;height:${A}px">
    <rect x="${M}" y="${k}" width="${$}" height="${(+z-k).toFixed(1)}" fill="#24B066" opacity="0.1"/>
    <rect x="${M}" y="${z}" width="${$}" height="${(+T-+z).toFixed(1)}" fill="#E05252" opacity="0.08"/>
    <line x1="${M}" y1="${z}" x2="${M+$}" y2="${z}" stroke="#24B066" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
    ${V?`<path d="${V}" fill="#0172A4" opacity="0.08"/>`:""}
    ${D?`<path d="${D}" fill="none" stroke="#0172A4" stroke-width="2" stroke-linejoin="round"/>`:""}
  </svg>`,te=(J,ie,pe)=>`<div style="flex:1;text-align:center">
    <div style="font-size:13px;font-weight:700;color:${J}">${pe}</div>
    <div style="font-size:10px;color:#8e8e93">${ie}</div>
  </div>`;return`<div class="m-widget-card" data-widget-id="irrelis">
    <div style="padding:12px 14px 10px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-size:11px;color:#0172A4;font-weight:700;background:rgba(1,114,164,.09);border-radius:6px;padding:2px 7px">Irré-LIS</span>
        <span style="font-size:14px;font-weight:700;color:${f}">${l} <span style="font-size:11px;font-weight:400">mm</span></span>
        <span style="font-size:11px;color:#8e8e93">${x}% RU</span>
        <button class="m-il-detail-btn" data-il-plot="${e.id}" style="margin-left:auto;font-size:12px;color:#0172A4;background:none;border:none;cursor:pointer;font-weight:600;white-space:nowrap">Voir le bilan →</button>
      </div>
      ${ne}
      <div style="display:flex;gap:0;margin-top:8px;padding-top:8px;border-top:.5px solid rgba(0,0,0,.07)">
        ${te("#2E75B6","Pluie 7j",C+" mm")}
        ${te("#FF8C00","Irrigation 7j",P+" mm")}
        ${te("#00887E","ETP 7j",E+" mm")}
        ${te("#8B1A1A","Drainage 7j",S+" mm")}
      </div>
    </div>
  </div>`}function ho(e,i){const t=le.filter(a=>Mt(a)),o=document.createElement("div");o.style.cssText="padding:4px 0",o.innerHTML=t.map(a=>`
    <button class="il-plot-pick" data-id="${a.id}" style="
      display:flex;align-items:center;width:100%;padding:14px 16px;
      border:none;border-bottom:.5px solid rgba(0,0,0,.06);font-family:inherit;cursor:pointer;gap:12px;
      background:${a.id===e.id?"rgba(1,114,164,.07)":"none"}">
      <i class="bi bi-geo-alt" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
      <span style="flex:1;font-size:16px;color:#1c1c1e;font-weight:${a.id===e.id?"700":"400"};text-align:left">${a.name}</span>
      ${a.id===e.id?'<i class="bi bi-check2" style="color:#0172A4;font-size:18px;flex-shrink:0"></i>':""}
    </button>`).join("");const n=ue({title:"Parcelles Irré-LIS",body:o,doneLabel:"Fermer",onDone:()=>{}});o.querySelectorAll(".il-plot-pick").forEach(a=>{a.addEventListener("click",()=>{const s=le.find(r=>r.id===+a.dataset.id);n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{n.remove(),s&&s.id!==e.id&&i(s)},280)})})}function Rs(e){const i=mt(e.id),t=new Date(i.semisDate+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short"});let o="saison";const n=xe(`
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
      ${co()}
    </div>
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
  `);n.classList.add("m-fs-layer");const a=n.querySelector("#il-chart-area"),s=n.querySelector("#il-cumuls");let r=kt(e,5),p=null;function c(){a.clientWidth&&a.clientHeight&&(mo(a,r,o),uo(s,r,o))}p=new ResizeObserver(()=>requestAnimationFrame(c)),p.observe(a),requestAnimationFrame(c),n.querySelector("#il-back").addEventListener("click",()=>{p==null||p.disconnect(),fe()}),n.querySelector("#il-plot-picker").addEventListener("click",()=>{ho(e,m=>{p==null||p.disconnect(),fe(),requestAnimationFrame(()=>Rs(m))})}),n.querySelector("#il-period").addEventListener("change",m=>{o=m.target.value,c()}),n.querySelector("#il-parcel-btn").addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>ut),void 0).then(m=>m.initParcelDetail(e,[],"widgets","Irré-LIS"))});const u=()=>{r=kt(e,5),c()};n.querySelector("#il-btn-config").addEventListener("click",()=>vo(e,u)),n.querySelector("#il-btn-pluv").addEventListener("click",()=>fo(e,u)),n.querySelector("#il-btn-dl").addEventListener("click",()=>bo(e))}const Os=Object.freeze(Object.defineProperty({__proto__:null,getIrrelisConfig:mt,getIrrelisDailyData:kt,getIrrelisVal:Ii,hasIrrelis:Mt,irrelisColor:Zt,irrelisMobileWidget:Hs,openIrrelisDetail:Rs},Symbol.toStringTag,{value:"Module"})),Ns={admin:100,adherent:1,new:41},Vs="weenat-m-dash";function pt(){try{return JSON.parse(localStorage.getItem(Vs))||{}}catch{return{}}}function $t(e){try{localStorage.setItem(Vs,JSON.stringify({...pt(),...e}))}catch{}}const Ee=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls préférés",info:"Mes cumuls préférés.<br><br>Ajoutez ici les valeurs des cumuls qui sont importants pour vous en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures préférées",info:"Mes mesures préférées.<br><br>Ajoutez ici les indicateurs de vos parcelles ou capteurs qui vous intéressent en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"radar_pluie",title:"Radar de pluie",icon:"bi-cloud-rain-heavy",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"irrelis",title:"Bilan Irré-LIS",icon:"bi-moisture",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function go(e,i,t){var a;const o=document.getElementById("phone-screen");(a=document.querySelector(".m-winfo-overlay"))==null||a.remove();const n=document.createElement("div");n.className="m-winfo-overlay",n.innerHTML=`
    <div class="m-winfo-modal">
      <div class="m-winfo-hd">
        <span class="m-winfo-title">${e}</span>
        <button class="m-winfo-close" type="button"><i class="bi bi-x"></i></button>
      </div>
      <div class="m-winfo-gif">
        ${t?`<img src="${t}" alt="${e}">`:'<div class="m-winfo-gif-placeholder"><i class="bi bi-play-circle" style="font-size:28px;display:block;margin-bottom:6px"></i>GIF à venir</div>'}
      </div>
      <div class="m-winfo-body">${i}</div>
    </div>`,n.querySelector(".m-winfo-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",s=>{s.target===n&&n.remove()}),o.appendChild(n)}function Ge(e){var o;const i=document.getElementById("phone-screen");(o=document.querySelector(".m-toast"))==null||o.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Ue({title:e,body:i,doneLabel:t="Fermer",onDone:o}={}){var r;const n=document.getElementById("phone-screen");(r=document.querySelector(".m-sheet-overlay"))==null||r.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{o==null||o(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}const Zi=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function Ki(){return Array.from({length:14},(e,i)=>i).map(e=>{const i=new Date;i.setDate(i.getDate()+e);const t=Zi[Math.floor(Math.random()*Zi.length)],o=t.label==="Pluie"||t.label==="Averses",n=Math.round(8+Math.random()*8),a=Math.round(16+Math.random()*14),s=Array.from({length:24},(r,p)=>{const c=Math.sin(Math.PI*(p-6)/12),u=Math.round(n+(a-n)*Math.max(0,c)),m=o&&p>=8&&p<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:p,label:`${String(p).padStart(2,"0")}h`,temp:u,pluie:m,hum:Math.round(85-40*Math.max(0,c)),vent:Math.round(10+Math.random()*20),icon:m>0?"bi-cloud-rain-fill":p<7||p>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:o?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:n,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:a,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:s}})}function Xi(e){const i=e.id,t=e.reserveHydrique||50,o=+((i*2.3+7)%32).toFixed(1),n=+((i*1.1+14)%14+10).toFixed(1),a=+((i*.6+1)%6).toFixed(1),s=Math.round(t*((i%5+1)/10)),r=Math.max(0,+(s+o-n-a).toFixed(0)),p=r<s?s-r:0;return{j0:s,j7:r,bilan:p}}const wt=4,Rt=5,Qi=["#0172A4","#ff8500","#30d158","#bf5af2"],Js={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548",irrigation:"#FF8C00"},xi={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol",irrigation:"Irrigation"},yo={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C",irrigation:"mm"},es={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},xo=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function Ws(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function $o(e,i){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const n=new Set(t),a=+e.slice(2);i.filter(r=>r.parcelIds.includes(a)).forEach(r=>(es[r.model]||[]).forEach(p=>n.add(p)));const s=le.find(r=>r.id===a);return(s!=null&&s.irrigation&&s.irrigation!=="Non irrigué"||me.some(r=>r.plotId===a))&&n.add("irrigation"),[...n].filter(r=>r in xi)}const o=i.find(n=>n.id===+e.slice(2));return o?es[o.model]||[]:[]}function wo(e,i){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let Ie=[],qe=[];(()=>{const e=pt();if(e.catalog){const i=e.catalog.map(t=>t.id);Ee.sort((t,o)=>{const n=i.indexOf(t.id),a=i.indexOf(o.id);return(n<0?999:n)-(a<0?999:a)}),e.catalog.forEach(t=>{const o=Ee.find(n=>n.id===t.id);o&&(o.active=t.active)})}e.mesuresList&&(Ie=e.mesuresList),e.cumulsList&&(qe=e.cumulsList)})();let Ot=null,Nt=null;function Gs(e){return Ie.length>=wt?"max":Ie.some(i=>i.subjectKey===e.subjectKey&&i.metricId===e.metricId&&i.period===e.period&&i.step===e.step)?"dup":(Ie.push(e),$t({mesuresList:Ie}),Ot==null||Ot(),"ok")}function Us(e){return qe.length>=Rt?"max":(qe.push(e),$t({cumulsList:qe}),Nt==null||Nt(),"ok")}function So(e,i,t){if(i==="irrigation"&&e.startsWith("p-")){const s=parseInt(e.slice(2),10),r=Date.now(),p=24*36e5,c=r-t*p,u=new Array(t).fill(0);return me.filter(m=>m.plotId===s&&m.real).forEach(m=>{const v=new Date(m.iso).getTime();if(v<c||v>r)return;const l=Math.min(t-1,Math.floor((v-c)/p));u[l]+=m.mm||0}),u}const o=[...e+i].reduce((s,r)=>s+r.charCodeAt(0),1),n=s=>(Math.sin(o*.07+s*.5)+Math.sin(o*.03+s*1.3))/2+.5,a={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:t},(s,r)=>a.sparse&&n(r*3.7)>.28?0:Math.max(0,a.base+a.amp*n(r*.28+1.2)))}const ko=new Set(["pluie","etp","irrigation"]);function Eo(e,i){var C,P;const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,o=So(e.subjectKey,e.metricId,t),n=270,a=100,s=28,r=14,p=Math.max(...o,1),c=ko.has(e.metricId);let u,m="";for(let E=0;E<=2;E++){const S=Math.round(E/2*(a-r-4)+4);m+=`<line x1="${s}" y1="${S}" x2="${s+n}" y2="${S}" stroke="#E8E6E0" stroke-width=".5"/>`,m+=`<text x="${s-3}" y="${S+3}" text-anchor="end" font-size="8" fill="#636366">${+(p*(1-E/2)).toFixed(p<5?1:0)}</text>`}const v=wo(e.period,e.step),l=v.map((E,S)=>`<text x="${s+Math.round(S/(v.length-1)*n)}" y="${a+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${E}</text>`).join(""),d=JSON.stringify(o.map(E=>+E.toFixed(2))),b=Js[e.metricId]||e.color,f=e.metricId==="pluie"?"#2E75B6":b;if(c){const E=Math.max(1,n/t*.7),S=o.map((_,F)=>{const A=Math.round(_/p*(a-r-4)),M=s+Math.round(F/(t-1)*n)-E/2,I=a-r-A;return`<rect x="${M.toFixed(1)}" y="${I.toFixed(1)}" width="${E.toFixed(1)}" height="${A.toFixed(1)}" fill="${f}" opacity=".85" rx="1"/>`}).join("");u=`<svg viewBox="0 0 ${s+n} ${a+6}" style="width:100%;display:block;overflow:visible">${m}${S}${l}</svg>`}else{const E=o.map((S,_)=>`${s+Math.round(_/(t-1)*n)},${a-r-Math.round(S/p*(a-r-4))}`).join(" ");u=`<svg viewBox="0 0 ${s+n} ${a+6}" style="width:100%;display:block;overflow:visible">
      ${m}
      <polyline points="${E}" fill="none" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${a}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${l}
    </svg>`}const x=(C=e.subjectKey)!=null&&C.startsWith("s-")?e.subjectKey.slice(2):null,h=(P=e.subjectKey)!=null&&P.startsWith("p-")?e.subjectKey.slice(2):null,w=x||h?`<button class="m-wf-view-data" ${x?`data-sensor-id="${x}"`:`data-parcel-id="${h}"`} data-metric-id="${e.metricId}" data-period="${e.period}" data-step="${e.step}" style="display:flex;align-items:center;gap:4px;margin-top:8px;padding:6px 10px;border:none;background:rgba(0,122,255,.08);border-radius:8px;color:#007AFF;font-size:12px;font-weight:600;cursor:pointer;width:100%;justify-content:center">Voir détails <i class="bi bi-fullscreen" style="font-size:11px"></i></button>`:"";return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?f:b}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${d}' style="position:relative;margin-top:4px">
        ${u}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${w}
    </div>`}function ts(e,i){const t=Ie.length>=wt,o=[...e].sort((r,p)=>r.name.localeCompare(p.name,"fr")).map(r=>`<option value="p-${r.id}">${Tt(r)}</option>`).join(""),n=i.filter(r=>r.parcelIds.length>0).map(r=>`<option value="s-${r.id}">${It(r,e)}</option>`).join(""),a=Ws("7d");return`
    <div id="msr-list">${Ie.length?Ie.map(Eo).join(""):'<div class="m-wf-empty">Ajoutez ici les mesures que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Ie.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${wt}/${wt})</div>
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
          ${xo.map(r=>`<option value="${r.id}"${r.id==="7d"?" selected":""}>${r.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${a.map(r=>`<option value="${r.id}">${r.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Ajouter la mesure</button>
    </div>`}`}function Lo(e){const i=new Date().toISOString().split("T")[0],t=new Date;t.setDate(t.getDate()+7);const o=t.toISOString().split("T")[0];return me.filter(n=>n.iso>i&&n.iso<=o&&n.plotId===e.id).reduce((n,a)=>n+a.mm,0)}function Co(e){return 25+e.id*7%20}const is=9;function Ao(e){const i=e.filter(n=>Mt(n));return i.length?`
    <div style="font-size:11px;color:#8e8e93;margin-bottom:2px">Réserve en eau — Aujourd'hui</div>
    ${i.map(n=>{const a=mt(n.id),s=Math.round(Ii(n,"Aujourd'hui")),r=Zt(s,a.rfu,a.ru),p=Math.round(s/a.ru*100);return`
      <div class="m-il-row" data-il-plot="${n.id}" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:.5px solid rgba(0,0,0,.07);cursor:pointer">
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.name}</div>
          <div style="font-size:11px;color:#8e8e93">${a.culture} · semis ${new Date(a.semisDate+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:17px;font-weight:700;color:${r}">${s} <span style="font-size:11px;font-weight:400">mm</span></div>
          <div style="font-size:10px;color:#8e8e93">${p}% RU</div>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px;flex-shrink:0"></i>
      </div>`}).join("")}
    <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap">
    <span style="font-size:10px;color:#24B066;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#24B066"></span>RFU</span>
    <span style="font-size:10px;color:#E8A020;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#E8A020"></span>Bas de RFU</span>
    <span style="font-size:10px;color:#E05252;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#E05252"></span>Réservoir de survie</span>
    <span style="font-size:10px;color:#007aff;display:flex;align-items:center;gap:3px"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#007aff"></span>Saturation</span>
  </div>`:'<div class="m-widget-empty"><i class="bi bi-droplet" style="color:#0172A4;font-size:28px"></i><p>Aucune parcelle avec le service Irré-LIS</p></div>'}function ft(e,i=!1,t=pt().sensorlessEnabled??!0,o=pt().irrigAdvisor??!1){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const n=E=>E.id%3===2,a=e.slice(),s=(E,S)=>Xi(S).bilan-Xi(E).bilan,r=a.slice().sort(s),p=i?r:r.slice(0,is),c=new Set(p.map(E=>E.id)),u=r.length-p.length,m=E=>Math.round((E.id*2.3+7)%32*10)/10,v=E=>Math.round(((E.id*1.1+14)%14+10)*10)/10,l="font-size:11px;font-weight:700;color:#8e8e93;text-align:right;padding-bottom:6px;text-transform:uppercase;letter-spacing:.03em;line-height:1.3",d=E=>`<span style="display:block;font-size:9px;font-weight:400;text-transform:none;color:#b0aead;letter-spacing:0">${E}</span>`,b="border-top:none",f=(E,S)=>{const _=Lo(E),F=m(E),A=v(E),M=S===0?"border-top:none":"border-top:.5px solid rgba(0,0,0,.18);padding-top:8px;margin-top:2px",I=`<button class="m-bh-th-n m-bh-plot-link" data-plot-id="${E.id}" style="grid-column:1/-1;white-space:normal;overflow:visible;text-overflow:unset;text-align:left;${M}">${E.name}</button>`;if(o){const y=n(E)?Co(E):null,$=y!==null?_>=y?"#24B066":"#E05252":null,g=y!==null?`<span style="color:${$};font-weight:700">${y}</span>`:'<span style="color:#c7c7cc">—</span>';return`
        ${I}
        <div class="m-bh-td" style="${b}">${F}</div>
        <div class="m-bh-td" style="${b}">${A}</div>
        <div class="m-bh-td m-bh-td--planif" style="${b}">${_>0?_:"—"}</div>
        <div class="m-bh-td" style="${b}">${g}</div>`}return`
      ${I}
      <div class="m-bh-td" style="${b}">${F}</div>
      <div class="m-bh-td" style="${b}">${A}</div>
      <div class="m-bh-td m-bh-td--planif" style="${b}">${_>0?_:"—"}</div>`},x=r.filter(E=>c.has(E.id)).map((E,S)=>f(E,S)).join(""),h=o?"1fr 1fr 1.5fr 1fr":"1fr 1fr 1.5fr",w=o?`<div style="${l}">Pluie${d("J+7 mm")}</div>
       <div style="${l}">ETP${d("J+7 mm")}</div>
       <div style="${l}">Irr. planif.${d("J+7 mm")}</div>
       <div style="${l}">Irr. reco.${d("J+7 mm")}</div>`:`<div style="${l}">Pluie${d("J+7 mm")}</div>
       <div style="${l}">ETP${d("J+7 mm")}</div>
       <div style="${l}">Irr. planif.${d("J+7 mm")}</div>`,C=o?`<div style="font-size:11px;color:#8e8e93;margin-bottom:6px">
         <i class="bi bi-info-circle" style="color:#ff9f0a"></i>
         Reco. affiché uniquement pour les parcelles avec Irrigation Advisor actif
       </div>`:"",P=r.length>is?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${u} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <label style="display:flex;align-items:center;gap:8px;padding:4px 0 8px;cursor:pointer;font-size:13px;color:#1c1c1e">
      <input type="checkbox" id="bh-advisor-cb" ${o?"checked":""} style="width:16px;height:16px;accent-color:#ff9f0a">
      Irrigation Advisor${o?' <span style="font-size:11px;color:#ff9f0a;font-weight:600">✦</span>':""}
    </label>
    ${C}
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${h};gap:0 6px">
        ${w}
        ${x}
      </div>
    </div>
    ${P}
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
    </div>`}const ss=(e,i=40)=>e.length>i?e.slice(0,i-1)+"…":e;function Mo(e,i,t,o){Object.fromEntries(ye.map(m=>[m.id,m]));const n=[...e].sort((m,v)=>m.name.localeCompare(v.name,"fr")).map(m=>`<option value="p-${m.id}">${ss(Tt(m))}</option>`).join(""),a=i.map(m=>`<option value="s-${m.id}">${ss(It(m,e))}</option>`).join(""),s=`
    <optgroup label="Parcelles">${n}</optgroup>
    ${a?`<optgroup label="Capteurs">${a}</optgroup>`:""}`,r=(m,v)=>{const l=`${m.dayLabel.charAt(0).toUpperCase()+m.dayLabel.slice(1)} · ${m.dateStr}`;return`
    <div class="m-prev-card" data-day="${v}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${m.icon}" style="color:${m.color};font-size:26px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${l}</span>
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
    </div>`},p=t.slice(0,3).map(r).join(""),c=t.slice(3).map(r).join("");return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select"><option value="addr" selected>Adresse de mon exploitation</option>${s}</select>
    <div class="m-prev-cards">
      ${p}
      <div class="m-prev-extra" style="display:none">${c}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const Ye=[{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:null},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:null},{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],Ys=new Set(Ye.flatMap(e=>e.needsModels||[]));function ai(e){if(!e)return Ye;if(e.startsWith("s-")){const t=ce.find(o=>o.id===+e.slice(2));return t?Ye.filter(o=>o.needsModels===null||o.needsModels.includes(t.model)):Ye}const i=new Set(ce.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return Ye.filter(t=>t.needsModels===null||t.needsModels.some(o=>i.has(o)))}const ns={etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#FEE7B4"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function To(){return qe.length?qe.map((e,i)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
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
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function os(e,i,t){if(!e||!i)return null;const o=Ye.find(s=>s.id===t)||Ye[0],n=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),a=e.split("").reduce((s,r)=>s+r.charCodeAt(0),0)+n;return+(o.base+a%(o.amp*10)/10).toFixed(1)}function as(e,i){const t=qe.length>=Rt,o=`${new Date().getFullYear()}-01-01`,n=i.filter(p=>p.parcelIds.length>0&&Ys.has(p.model)),a=[...e].sort((p,c)=>p.name.localeCompare(c.name,"fr")).map(p=>`<option value="p-${p.id}">${Tt(p)}</option>`).join(""),s=n.map(p=>`<option value="s-${p.id}">${It(p,e)}</option>`).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${qe.length?To():'<div class="m-wf-empty">Ajoutez ici les cumuls que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${qe.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${Rt}/${Rt})</div>
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
    </div>`}`}function Io(e){const i=e.id,t=new Date;let o,n;i%5===3?(o=0,n=(t.getHours()+2+i%3*3)%24):(o=(i*2+1)%6+1,n=6+i%5*2);const a=2+i%3,s=new Date(t);s.setDate(s.getDate()+o);const r=o===0?"Aujourd'hui":s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),p=o*1440+n*60-(t.getHours()*60+t.getMinutes());return{winDateStr:r,winHour:n,winDur:a,minutesFromNow:p}}const qo="#1a9e40";function Po(e){const t=e.filter(n=>n.crop).map(n=>({p:n,d:Io(n)})).filter(({d:n})=>n.minutesFromNow>=0&&n.minutesFromNow<=1440).sort((n,a)=>n.d.minutesFromNow-a.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:n,d:a})=>{const s=String(a.winHour).padStart(2,"0"),r=String((a.winHour+a.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${n.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${n.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${qo};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
            <i class="bi bi-check2-circle" style="font-size:12px"></i>
            ${a.winDateStr} · ${s}h–${r}h
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
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const Zs="weenat-m-traitements";function St(){try{return JSON.parse(localStorage.getItem(Zs))||[]}catch{return[]}}function qi(e){localStorage.setItem(Zs,JSON.stringify(e))}function jo(e,i){let t=new Set;const o=[],n=new Date().toISOString().split("T")[0];function a(){return Yt(o,e,t)}function s(c){const u=t.size,m=c.querySelector(".irr-summary"),v=c.querySelector(".irr-save-btn");!m||!v||(m.textContent=u===0?"":`${u} parcelle${u>1?"s":""}`,v.disabled=u===0)}function r(c){var u;(u=c.querySelector("#irr-sel-all"))==null||u.addEventListener("click",()=>{const m=e.every(v=>t.has(v.id));e.forEach(v=>m?t.delete(v.id):t.add(v.id)),c.querySelector("#trait-sel-list").innerHTML=a(),r(c),s(c)}),c.querySelectorAll(".irr-group-card").forEach(m=>{m.addEventListener("click",()=>{const v=m.dataset.gids.split(",").map(Number),l=v.every(d=>t.has(d));v.forEach(d=>l?t.delete(d):t.add(d)),c.querySelector("#trait-sel-list").innerHTML=a(),r(c),s(c)})}),c.querySelectorAll(".irr-plot-row").forEach(m=>{m.addEventListener("click",()=>{const v=+m.dataset.pid;t.has(v)?t.delete(v):t.add(v),c.querySelector("#trait-sel-list").innerHTML=a(),r(c),s(c)})})}const p=at(xe(`
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
  `));r(p),s(p),p.querySelector("#trait-back").addEventListener("click",fe),p.querySelector(".irr-save-btn").addEventListener("click",()=>{const c=p.querySelector("#trait-date").value||n,u=p.querySelector("#trait-produit").value.trim()||"—",m=p.querySelector("#trait-dose").value.trim()||"—",v=St();v.unshift({id:Date.now(),date:c,produit:u,dose:m,plotIds:[...t]}),qi(v),fe(),i("Traitement enregistré")})}function zo(e,i,t){const o=i==="adherent"?Ns.adherent:null,n=o!==null?le.filter(c=>c.orgId===o):le;let a=null;const s=xe(`
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
    </div>`);s.querySelector(".m-detail-back").addEventListener("click",fe);const r=c=>{const[u,m,v]=c.split("-");return`${v}/${m}/${u}`};function p(){const c=s.querySelector("#trait-cal-content");let u=St();if(a!==null&&(u=u.filter(m=>(m.plotIds||[]).includes(a))),!u.length){c.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}c.innerHTML=u.map(m=>{const v=(m.plotIds||[]).map(l=>{var d;return(d=e.find(b=>b.id===l))==null?void 0:d.name}).filter(Boolean);return`
        <div class="m-trait-cal-card" data-id="${m.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:12px 14px;margin-bottom:10px;cursor:pointer;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:12px;color:#8e8e93">${r(m.date)}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:11px;font-weight:600;color:#1a9e40;background:#edf7f0;padding:2px 8px;border-radius:20px">${v.length} parcelle${v.length>1?"s":""}</span>
              <i class="bi bi-chevron-right" style="font-size:12px;color:#c7c7cc"></i>
            </div>
          </div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${m.produit}</div>
          <div style="font-size:12px;color:#636366"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${m.dose}</div>
          ${v.length?`<div style="font-size:11px;color:#8e8e93;margin-top:6px">${v.join(", ")}</div>`:""}
        </div>`}).join(""),c.querySelectorAll(".m-trait-cal-card").forEach(m=>{m.addEventListener("click",()=>{const v=+m.dataset.id,d=St().find(h=>h.id===v);if(!d)return;const b=(d.plotIds||[]).map(h=>{var w;return(w=e.find(C=>C.id===h))==null?void 0:w.name}).filter(Boolean),f=document.createElement("div");f.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${r(d.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${d.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${d.dose}</div>
            ${b.length?`<div style="font-size:12px;color:#8e8e93">${b.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const x=Ue({title:"Traitement",body:f,doneLabel:"Fermer",onDone:()=>{}});f.querySelector("#tcal-del").addEventListener("click",()=>{const h=St().filter(w=>w.id!==v);qi(h),x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{x.remove(),p()},280),t("Traitement supprimé")}),f.querySelector("#tcal-edit").addEventListener("click",()=>{x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>x.remove(),280),Do(d,e,t,p)})})})}s.querySelector("#trait-filter").addEventListener("change",c=>{a=c.target.value?+c.target.value:null,p()}),p()}function Do(e,i,t,o){const n=document.createElement("div");n.innerHTML=`
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
    </div>`,Ue({title:"Modifier le traitement",body:n,doneLabel:"Enregistrer",onDone:()=>{const a=St(),s=a.findIndex(r=>r.id===e.id);s!==-1&&(a[s].date=n.querySelector("#tedit-date").value||e.date,a[s].produit=n.querySelector("#tedit-produit").value.trim()||e.produit,a[s].dose=n.querySelector("#tedit-dose").value.trim()||e.dose,qi(a)),t("Traitement modifié"),o()}})}const Fo={"capteur déplacé":"M12 2c-2.117 0-3.98.741-5.588 2.225C4.803 5.708 4 7.699 4 10.199c0 1.6.6 3.322 1.8 5.164C7 17.205 8.818 19.2 11.25 21.35a1.2 1.2 0 0 0 .75.275 1.2 1.2 0 0 0 .75-.275c2.433-2.15 4.25-4.145 5.45-5.987C19.4 13.521 20 11.8 20 10.2c0-2.5-.803-4.491-2.412-5.974C15.98 2.74 14.117 2 12 2zm0 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 7v3a.969.969 0 0 1-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287A.966.966 0 0 1 11 10V7c0-.283.095-.52.287-.713A.969.969 0 0 1 12 6zm0 7a.97.97 0 0 1 .713.287c.191.192.287.43.287.713s-.096.522-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287c-.192-.191-.287-.43-.287-.713s.095-.52.287-.713A.969.969 0 0 1 12 13z","émissions interrompues":"M19.075 21.9 8.125 10.975c-.033.167-.063.333-.087.5S8 11.817 8 12c0 .383.046.746.138 1.087.091.342.229.663.412.963.15.25.217.517.2.8a1.04 1.04 0 0 1-.3.7c-.2.2-.438.292-.713.275s-.487-.133-.637-.35c-.35-.5-.62-1.042-.813-1.625A5.889 5.889 0 0 1 6 12a5.985 5.985 0 0 1 .575-2.575L5.1 7.95c-.35.6-.62 1.238-.813 1.913A7.79 7.79 0 0 0 4 12a7.855 7.855 0 0 0 1.675 4.9c.183.233.27.487.262.762-.008.275-.112.513-.312.713a.916.916 0 0 1-1.375-.05c-.7-.867-1.25-1.837-1.65-2.913S2 13.2 2 12c0-1.033.146-2.008.437-2.925A10.71 10.71 0 0 1 3.65 6.5L2.075 4.925a.948.948 0 0 1-.275-.7c0-.283.1-.525.3-.725a.948.948 0 0 1 .7-.275c.283 0 .525.092.725.275l16.975 17c.183.183.275.417.275.7s-.092.517-.275.7c-.2.2-.442.3-.725.3s-.517-.1-.7-.3zm1.275-4.4-1.45-1.45c.35-.6.62-1.238.813-1.913S20 12.75 20 12a7.854 7.854 0 0 0-1.675-4.9c-.183-.233-.27-.487-.263-.762s.113-.513.313-.713a.916.916 0 0 1 1.375.05c.7.867 1.25 1.833 1.65 2.9.4 1.067.6 2.208.6 3.425 0 1.017-.146 1.988-.438 2.913S20.867 16.7 20.35 17.5zm-2.925-2.925-1.55-1.55c.033-.167.062-.333.087-.5S16 12.183 16 12c0-.383-.046-.746-.138-1.088s-.229-.662-.412-.962a1.367 1.367 0 0 1-.2-.8 1.04 1.04 0 0 1 .3-.7.93.93 0 0 1 .712-.287.76.76 0 0 1 .638.337c.35.483.62 1.025.813 1.625.191.6.287 1.225.287 1.875a5.985 5.985 0 0 1-.575 2.575z","capteur couché":"M6 5a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h7a1 1 0 1 0 0-2h-7V7a2 2 0 0 0-2-2H6zm3 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2 16v2h20v-2H2z","cuillère bloquée":"M17.615 3.25c-.268 0-.537.103-.742.309L3.508 16.922a1.05 1.05 0 0 0 0 1.486l.031.027-.002.002.05.041c.459.438 1.055.718 1.733.813.678.094 1.416 0 2.139-.274a5.793 5.793 0 0 0 2.018-1.322 5.802 5.802 0 0 0 1.322-2.02c.411-1.087.411-2.189 0-3.074l7.558-7.558a1.047 1.047 0 0 0 0-1.485 1.046 1.046 0 0 0-.742-.308zm-1.037 8.416a.473.473 0 0 0-.35.137l-1.05 1.05a.435.435 0 0 0-.106.163.555.555 0 0 0-.031.187c0 .067.01.13.031.188.02.058.055.112.105.162l1.051 1.05a.473.473 0 0 0 .35.137.472.472 0 0 0 .488-.488.474.474 0 0 0-.138-.35l-.2-.199h.037c.834 0 1.542.292 2.125.875.584.584.875 1.292.875 2.125 0 .675-.198 1.274-.593 1.799a3.032 3.032 0 0 1-1.532 1.088.527.527 0 0 0-.267.187.465.465 0 0 0-.108.287c0 .167.06.3.176.4.117.1.254.13.412.089a3.912 3.912 0 0 0 2.1-1.426 3.882 3.882 0 0 0 .812-2.424c0-1.116-.387-2.063-1.162-2.838-.775-.775-1.72-1.162-2.838-1.162h-.037l.2-.201a.474.474 0 0 0 .138-.35.473.473 0 0 0-.488-.486zm-2.563 2.344a.462.462 0 0 0-.337.156c-.292.358-.516.75-.674 1.18-.159.429-.239.882-.239 1.357 0 .917.271 1.728.813 2.432a3.922 3.922 0 0 0 2.1 1.418.442.442 0 0 0 .414-.082.479.479 0 0 0 .173-.393.532.532 0 0 0-.375-.488 2.946 2.946 0 0 1-1.53-1.08 2.939 2.939 0 0 1-.595-1.807c0-.341.054-.666.163-.974.108-.309.262-.594.462-.852a.565.565 0 0 0 .131-.375.477.477 0 0 0-.142-.336.48.48 0 0 0-.364-.156z"},rs=new Set(["P+","PT","P"]);function Tt(e){return[e.name,e.crop].filter(Boolean).join(" — ")}function It(e,i){var a,s;const t=Object.fromEntries(ye.map(r=>[r.id,r])),o=Ks[e.model]||e.model,n=((a=(e.parcelIds||[]).map(r=>i.find(p=>p.id===r)).filter(Boolean).find(r=>r.ville))==null?void 0:a.ville)||((s=t[e.orgId])==null?void 0:s.ville)||"";return[o,e.serial,n].filter(Boolean).join(" — ")}const Ks={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function _o(e,i){const t=Object.fromEntries(ye.map(n=>[n.id,n])),o=i.filter(n=>n.event?(Array.isArray(n.event)?n.event:[n.event]).filter(r=>r!=="cuillère bloquée"||rs.has(n.model)).length>0:!1);return o.length?`<div class="m-w-list">${o.map(n=>{var u;const a=e.find(m=>(n.parcelIds||[]).includes(m.id)),s=(a==null?void 0:a.ville)||((u=t[n.orgId])==null?void 0:u.ville)||"",p=(Array.isArray(n.event)?n.event:[n.event]).filter(m=>m!=="cuillère bloquée"||rs.has(n.model)).map(m=>{const v=Fo[m]||"";return`<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:#ff3b30;border-radius:6px;flex-shrink:0" title="${m}"><svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="${v}"/></svg></span>`}).join(""),c=Ks[n.model]||n.model;return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${n.id}">
      <div style="flex:1;min-width:0">
        <div class="m-w-row-name">${c}</div>
        <div style="font-size:12px;color:#636366;margin-top:1px">${n.model} — ${n.serial}</div>
        ${s?`<div style="font-size:11px;color:#8e8e93;margin-top:1px">${s}</div>`:""}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;margin-left:12px">
        <div style="display:flex;flex-wrap:wrap;gap:5px;width:61px;justify-content:flex-end">${p}</div>
        <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
      </div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const Xs={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},Bo={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function Ho(e){const i=e.id,t=Xs[e.crop]||Bo,o=i%t.stages.length,n=(i*2+5)%18+4,a=new Date("2026-04-18");a.setDate(a.getDate()+n);const s=a.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[o],nextStage:t.nextStages[o],variety:t.varieties[i%t.varieties.length],nextDateStr:s,daysToNext:n}}function Ro(e){const i=e.filter(n=>n.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const n of i)t[n.crop]||(t[n.crop]=[]),t[n.crop].push(n);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([n,a])=>{const s=a.map(r=>{const p=!!Xs[r.crop],c=p?Ho(r):null,u=p&&c.variety!=="—"?c.variety:"",m=p?c.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${r.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${r.name}</div>
          ${u?`<div class="m-w-row-sub">${u}</div>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <div style="font-size:12px;font-weight:600;color:#1c1c1e;text-align:right">${m}</div>
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
    </details>`}).join("")}`}const Qs="weenat-m-notes";function tt(){try{return JSON.parse(localStorage.getItem(Qs))||[]}catch{return[]}}function ri(e){localStorage.setItem(Qs,JSON.stringify(e))}function ls(e){const i=tt(),t=x=>{const[h,w,C]=x.split("-");return`${C}/${w}/${h}`},o=x=>x.length>70?x.slice(0,70)+"…":x,n=(x,h)=>{const w=x.text.length>70,C=(x.imageIds||[]).length,P=C>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${C} photo${C>1?"s":""}</span>`:"",E=x.linkedType?`<span style="font-size:10px;background:${x.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${x.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${x.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${x.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${h}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${w||C>0||x.linkedType?"pointer":"default"}">
        <button class="m-note-del m-del-btn" data-idx="${h}" style="position:absolute;top:8px;right:8px">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <span>${t(x.date)}${x.time?" · "+x.time:""}</span>
          ${x.auteur?`<span style="color:#636366;font-weight:500">${x.auteur}</span>`:""}
          ${x.role?`<span style="font-size:10px;background:${x.role==="conseiller"?"#eef4ff":"#f2f2f7"};color:${x.role==="conseiller"?"#3a7bd5":"#636366"};border-radius:4px;padding:1px 5px;font-weight:500">${x.role==="conseiller"?"Conseiller":"Membre"}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${o(x.text)}</div>
        ${E||P?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${E}${P}</div>`:""}
      </div>`},a=i.slice(0,5),s=a.length?a.map((x,h)=>n(x,h)).join(""):"",r=new Date,p=r.toISOString().slice(0,10),c=`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`,u=ye.find(x=>x.id===(e==="admin"?100:1)),m=u?`${u.prenomProprietaire} ${u.nomProprietaire}`:"",v=u==null?void 0:u.id,l=e==="adherent"?le.filter(x=>x.orgId===v):le,d=e==="adherent"?ce.filter(x=>x.parcelIds.some(h=>l.some(w=>w.id===h))):ce,b=[...l].sort((x,h)=>x.name.localeCompare(h.name,"fr")).map(x=>`<option value="p-${x.id}">${Tt(x)}</option>`).join(""),f=d.map(x=>`<option value="s-${x.id}">${It(x,l)}</option>`).join("");return`
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
        <input type="time" id="notes-time" class="m-sheet-input" value="${c}" style="flex:1">
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
    <button id="notes-view" class="m-btn m-btn--secondary">Voir les notes${i.length?` (${i.length})`:""}</button>`}function Oo(e){const i=le.map(n=>n.orgId).filter((n,a,s)=>s.indexOf(n)===a&&n!==100).length,t=ce.length,o=le.length;return`
    <div class="m-reseau-name">${We.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${o}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${We.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${We.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${We.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${We.siege.adresse}, ${We.siege.codePostal} ${We.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function No(){return`
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
    </a>`}const cs=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Vo(){var c;const e=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,e.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const t=i.querySelector("#chat-messages"),o=i.querySelector("#chat-input"),n=i.querySelector("#chat-send"),a=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",a),i.addEventListener("click",u=>{u.target===i&&a()});function s(u,m){const v=document.createElement("div");v.className=`m-chat-msg m-chat-msg--${m}`,v.innerHTML=`<div class="m-chat-bubble">${u}</div>`,t.appendChild(v),t.scrollTop=t.scrollHeight}function r(){const u=document.createElement("div");return u.className="m-chat-msg m-chat-msg--bot m-chat-typing",u.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(u),t.scrollTop=t.scrollHeight,u}function p(){const u=o.value.trim();if(!u)return;s(u,"user"),o.value="",n.disabled=!0;const m=r();setTimeout(()=>{m.remove();const v=cs[Math.floor(Math.random()*cs.length)];s(v,"bot"),n.disabled=!1,o.focus()},1200+Math.random()*800)}n.addEventListener("click",p),o.addEventListener("keydown",u=>{u.key==="Enter"&&p()}),setTimeout(()=>o.focus(),350)}function Jo(e,i){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const o=Ns[i]||1,n=i==="new"||i==="new-adherent"?[]:o===100?le:le.filter(k=>k.orgId===o),a=new Set(n.map(k=>k.id)),s=i==="new"||i==="new-adherent"?[]:ce.filter(k=>k.parcelIds.some(y=>a.has(y)));let r=Ki(),p=null,c=null;function u(){return i!=="admin"?n:p===null?le:le.filter(k=>k.orgId===p)}function m(){return i!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${ye.filter(y=>y.id!==100).sort((y,$)=>y.name.localeCompare($.name)).map(y=>`<option value="${y.id}">${y.name}</option>`).join("")}
    </select>`}const v=pt(),l=new Set(["mon_reseau","support"]),d=new Set(v.collapsed??Ee.map(k=>k.id).filter(k=>!l.has(k)));function b(){$t({catalog:Ee.map(k=>({id:k.id,active:k.active})),collapsed:[...d],mesuresList:Ie,cumulsList:qe})}function f(){return`
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
      </div>`}function x(){return`
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
      </div>`}function h(){const k=window.L;k&&setTimeout(()=>{const y=t.querySelector("#radar-map");if(!y||c)return;const $=n[0]?[n[0].lat,n[0].lng]:[47.5,-1.5];c=k.map(y,{zoomControl:!0,attributionControl:!1,tap:!1}).setView($,7),k.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:14}).addTo(c);const g=t.querySelector("#radar-slider"),q=t.querySelector("#radar-time-lbl"),j=t.querySelector("#radar-play-btn"),L=t.querySelector("#radar-loading");let D=[],z=0,T=0,V=null,ne=!1,te=null;function J(ie){if(!D.length)return;V&&c.removeLayer(V);const pe=D[ie];V=k.tileLayer(`https://tilecache.rainviewer.com${pe.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:.65,zIndex:10}).addTo(c);const Le=new Date(pe.time*1e3);q.textContent=Le.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),q.style.color=ie>=z?"#007aff":"#8e8e93",g.value=ie}g.addEventListener("input",()=>{T=+g.value,J(T)}),j.addEventListener("click",()=>{ne=!ne,j.innerHTML=ne?'<i class="bi bi-pause-fill"></i>':'<i class="bi bi-play-fill"></i>',ne?te=setInterval(()=>{T=(T+1)%D.length,J(T)},500):clearInterval(te)}),fetch("https://api.rainviewer.com/public/weather-maps.json").then(ie=>ie.json()).then(ie=>{var ke,De;L==null||L.remove();const pe=((ke=ie.radar)==null?void 0:ke.past)||[],Le=((De=ie.radar)==null?void 0:De.nowcast)||[];D=[...pe,...Le],z=pe.length,D.length&&(g.max=D.length-1,T=Math.max(0,z-1),J(T))}).catch(()=>{L&&(L.textContent="Radar indisponible")})},50)}function w(k,y){const $=k.fixed?"":`<button class="m-widget-menu" data-widget="${k.id}" type="button">•••</button>`,g=d.has(k.id);return`
      <div class="m-widget${g?" m-widget--collapsed":""}" data-widget="${k.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${k.id}">
          <div class="m-widget-icon-wrap" style="background:${k.color}20;color:${k.color}">
            <i class="bi ${k.icon}"></i>
          </div>
          <span class="m-widget-title">${k.title}</span>
          ${k.info?`<button class="m-widget-info" data-widget="${k.id}" type="button"><i class="bi bi-info-circle"></i></button>`:""}
          <i class="bi ${g?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${k.fixed?"0":"8px"}"></i>
          ${$}
        </div>
        <div class="m-widget-bd" style="${g?"display:none":""}">${y}</div>
      </div>`}function C(){c==null||c.remove(),c=null,r=Ki();const k=new Set(["previsions","support"]),y=Ee.filter(g=>g.active&&!g.fixed&&(i!=="new"||k.has(g.id))),$=Ee.filter(g=>g.active&&g.fixed&&(i!=="new"||k.has(g.id)));t.innerHTML=`
      ${i==="new"?f():'<button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>'}
      ${[...y,...$].map(g=>{let q="";return g.id==="bilan_hydrique"?q=m()+ft(u()):g.id==="previsions"?q=Mo(n,s,r):g.id==="cumuls"?q=as(n,s):g.id==="temps_reel"?q=ts(n,s):g.id==="traitements"?q=Po(n):g.id==="evenements"?q=_o(n,s):g.id==="cultures"?q=Ro(n):g.id==="notes"?q=ls(i):g.id==="radar_pluie"?q=x():g.id==="irrelis"?q=Ao(n):g.id==="mon_reseau"?q=Oo(i):g.id==="support"&&(q=No()),w(g,q)}).join("")}
      <div style="height:24px"></div>`,F(),d.has("radar_pluie")||h()}const P='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function E(k,y,$=""){const g=k[y],q=`${g.dayLabel.charAt(0).toUpperCase()+g.dayLabel.slice(1)} · ${g.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${P}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${y===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px">
            <i class="bi ${g.icon}" style="color:${g.color};font-size:22px"></i>
            <div>
              <span class="m-d-name">${q}</span>
              ${$?`<div style="font-size:12px;color:#8e8e93;margin-top:1px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$}</div>`:""}
            </div>
          </div>
          <button class="m-day-nav" id="next-day" ${y>=k.length-1?"disabled":""}>›</button>
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
            ${g.hours.map((j,L)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${L<g.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${j.label}</span>
                <i class="bi ${j.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${j.pluie>0?`${j.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${j.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${j.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${j.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function S(k,y,$,g=""){var q,j;k.querySelector(".m-detail-back").addEventListener("click",fe),(q=k.querySelector("#prev-day"))==null||q.addEventListener("click",()=>{k.innerHTML=E(y,$-1,g),S(k,y,$-1,g)}),(j=k.querySelector("#next-day"))==null||j.addEventListener("click",()=>{k.innerHTML=E(y,$+1,g),S(k,y,$+1,g)})}function _(k,y,$=""){const g=xe(E(k,y,$));S(g,k,y,$)}function F(){var pe,Le,ke,De,Fe,rt,_e;(pe=e.querySelector(".m-navbar-action"))==null||pe.addEventListener("click",M),(Le=t.querySelector("#dash-add-widget-btn"))==null||Le.addEventListener("click",I),(ke=t.querySelector('[data-action="add-parcel"]'))==null||ke.addEventListener("click",()=>Qn(()=>C())),(De=t.querySelector('[data-action="add-sensor"]'))==null||De.addEventListener("click",()=>eo(()=>C())),t.querySelectorAll(".m-widget-info").forEach(H=>{H.addEventListener("click",Y=>{Y.stopPropagation();const W=Ee.find(Q=>Q.id===H.dataset.widget);W&&go(W.title,W.info,W.gif)})}),t.querySelectorAll(".m-widget-hd--toggle").forEach(H=>{H.addEventListener("click",Y=>{if(Y.target.closest(".m-widget-menu")||Y.target.closest(".m-widget-info"))return;const W=H.dataset.collapse;d.has(W)?d.delete(W):d.add(W),b(),C()})}),(Fe=t.querySelector("#trait-btn-saisir"))==null||Fe.addEventListener("click",()=>{jo(n,Ge)}),(rt=t.querySelector("#trait-btn-voir"))==null||rt.addEventListener("click",()=>{zo(n,i,Ge)}),t.querySelectorAll(".m-trait-card").forEach(H=>{H.addEventListener("click",()=>{const Y=le.find(W=>W.id===+H.dataset.plotId);if(Y){const W=ce.filter(Q=>Q.parcelIds.includes(Y.id)).map(Q=>Q.id);ge(()=>Promise.resolve().then(()=>ut),void 0).then(Q=>Q.initParcelDetail(Y,W,"widgets","Tableau de bord"))}})}),t.querySelectorAll("[data-sensor-id]").forEach(H=>{H.addEventListener("click",()=>{const Y=s.find(W=>W.id===+H.dataset.sensorId);Y&&ge(()=>Promise.resolve().then(()=>Ai),void 0).then(W=>W.initSensorDetail(Y,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(H=>{H.addEventListener("click",()=>{const Y=le.find(W=>W.id===+H.dataset.plotId);if(Y){const W=ce.filter(Q=>Q.parcelIds.includes(Y.id)).map(Q=>Q.id);ge(()=>Promise.resolve().then(()=>ut),void 0).then(Q=>Q.initParcelDetail(Y,W,"params","Tableau de bord"))}})});function k(){t.querySelectorAll(".m-bh-plot-link").forEach(H=>{H.addEventListener("click",()=>{const Y=le.find(W=>W.id===+H.dataset.plotId);if(Y){const W=ce.filter(Q=>Q.parcelIds.includes(Y.id)).map(Q=>Q.id);ge(()=>Promise.resolve().then(()=>ut),void 0).then(Q=>{Q.initParcelDetail(Y,W,"widgets","Tableau de bord"),setTimeout(()=>{var $e;($e=document.querySelector('[data-widget-id="irrigations"]'))==null||$e.scrollIntoView({behavior:"smooth",block:"start"})},150)})}})})}function y(){var H,Y,W;(H=t.querySelector("#bh-btn-calendar"))==null||H.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(Q=>Q.openCalendar(n,""))}),(Y=t.querySelector("#bh-btn-irrigation"))==null||Y.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(Q=>Q.openIrrigationSaisie(n,Ge))}),(W=t.querySelector("#bh-btn-strategie"))==null||W.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(Q=>Q.openIrrigationStrategie(n,Ge))})}function $(){const H=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');H&&(H.innerHTML=m()+ft(u()),k(),y(),g(),q(),i==="admin"&&j())}function g(){const H=t.querySelector("#bh-expand");H&&H.addEventListener("click",()=>{const Y=H.dataset.expanded==="true",W=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');W&&(W.innerHTML=m()+ft(u(),!Y),k(),y(),g(),q(),i==="admin"&&j())})}function q(){const H=t.querySelector("#bh-advisor-cb");H&&H.addEventListener("change",()=>{$t({irrigAdvisor:H.checked}),$()})}function j(){const H=t.querySelector("#bh-org-select");H&&(H.value=p===null?"all":String(p),H.addEventListener("change",()=>{p=H.value==="all"?null:+H.value,$()}))}k(),y(),g(),q(),i==="admin"&&j(),t.querySelectorAll('[data-widget="irrelis"] .m-il-row').forEach(H=>{H.addEventListener("click",()=>{const Y=le.find(W=>W.id===+H.dataset.ilPlot);Y&&ge(()=>Promise.resolve().then(()=>Os),void 0).then(W=>W.openIrrelisDetail(Y))})});function L(){const H=t.querySelector('[data-widget="cumuls"] .m-widget-bd');H&&(H.innerHTML=as(n,s),D())}Nt=L;function D(){var N,G,U,O;const H=()=>{var X;const B=(X=t.querySelector("#cumuls-metric"))==null?void 0:X.value,R=t.querySelector("#cumuls-thresholds");R&&(B==="hf"?R.innerHTML=`
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
            </div>`:R.innerHTML="")},Y=()=>{var Z;const B=t.querySelector("#cumuls-metric"),R=(Z=t.querySelector("#cumuls-subject"))==null?void 0:Z.value;if(!B)return;const X=ai(R);B.innerHTML='<option value="">— Métrique —</option>'+X.map(ae=>`<option value="${ae.id}">${ae.label}</option>`).join(""),B.disabled=!R||!X.length,H(),W()},W=()=>{var be,re,de;const B=t.querySelector("#cumuls-create"),R=t.querySelector("#cumuls-date-err"),X=(be=t.querySelector("#cumuls-subject"))==null?void 0:be.value,Z=(re=t.querySelector("#cumuls-from"))==null?void 0:re.value,ae=(de=t.querySelector("#cumuls-metric"))==null?void 0:de.value,oe=Z?(Date.now()-new Date(Z))/864e5>365:!1;R&&(R.style.display=oe?"":"none"),B&&(B.disabled=!X||!Z||!ae||oe)};(N=t.querySelector("#cumuls-subject"))==null||N.addEventListener("change",()=>{Y(),W()}),(G=t.querySelector("#cumuls-from"))==null||G.addEventListener("change",W),(U=t.querySelector("#cumuls-metric"))==null||U.addEventListener("change",()=>{H(),W()}),(O=t.querySelector("#cumuls-create"))==null||O.addEventListener("click",()=>{var re,de,he,Se,Ce,we;const B=t.querySelector("#cumuls-subject"),R=B==null?void 0:B.value,X=(re=t.querySelector("#cumuls-from"))==null?void 0:re.value,Z=(de=t.querySelector("#cumuls-metric"))==null?void 0:de.value;if(!R||!X||!Z)return;const ae=Ye.find(ee=>ee.id===Z),oe=ns[Z]||{icon:"bi-bar-chart-fill",color:"#636366"},be=Z==="hf"?{cold:+(((he=t.querySelector("#cumuls-th-cold"))==null?void 0:he.value)??7.2)}:Z==="dj"?{low:+(((Se=t.querySelector("#cumuls-th-low"))==null?void 0:Se.value)??0),high:+(((Ce=t.querySelector("#cumuls-th-high"))==null?void 0:Ce.value)??18)}:null;qe.push({metricId:Z,metricLabel:(ae==null?void 0:ae.label)||Z,unit:(ae==null?void 0:ae.unit)||"",icon:oe.icon,color:oe.color,subjectKey:R,subjectLabel:(((we=B.options[B.selectedIndex])==null?void 0:we.text)||R).trim(),fromDate:X,value:String(os(R,X,Z)??"—"),thresholds:be}),b(),L()}),t.querySelectorAll(".m-cumuls-del").forEach(B=>{B.addEventListener("click",()=>{qe.splice(+B.dataset.cidx,1),b(),L()})}),t.querySelectorAll(".m-cumuls-edit").forEach(B=>{B.addEventListener("click",()=>$e(+B.dataset.cidx))});function Q(B,R={}){return B==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${R.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:B==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${R.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${R.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function $e(B){const R=qe[B];if(!R)return;const X=s.filter(de=>de.parcelIds.length>0&&Ys.has(de.model)),Z=[...n].sort((de,he)=>de.name.localeCompare(he.name,"fr")).map(de=>`<option value="p-${de.id}"${R.subjectKey===`p-${de.id}`?" selected":""}>${Tt(de)}</option>`).join(""),ae=X.map(de=>`<option value="s-${de.id}"${R.subjectKey===`s-${de.id}`?" selected":""}>${It(de,n)}</option>`).join(""),be=ai(R.subjectKey).map(de=>`<option value="${de.id}"${R.metricId===de.id?" selected":""}>${de.label}</option>`).join(""),re=document.createElement("div");re.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",re.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${Z}</optgroup>
            ${ae?`<optgroup label="Capteurs">${ae}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${be}
          </select>
          <div id="cedit-thresholds">${Q(R.metricId,R.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${R.fromDate}">
          </div>`,re.querySelector("#cedit-subject").addEventListener("change",()=>{const de=re.querySelector("#cedit-subject").value,he=re.querySelector("#cedit-metric"),Se=ai(de);he.innerHTML='<option value="">— Métrique —</option>'+Se.map(Ce=>`<option value="${Ce.id}">${Ce.label}</option>`).join(""),re.querySelector("#cedit-thresholds").innerHTML=""}),re.querySelector("#cedit-metric").addEventListener("change",()=>{re.querySelector("#cedit-thresholds").innerHTML=Q(re.querySelector("#cedit-metric").value)}),Ue({title:"Modifier le cumul",body:re,doneLabel:"Enregistrer",onDone:()=>{var je,Be,vt,lt;const de=re.querySelector("#cedit-subject").value||R.subjectKey,he=re.querySelector("#cedit-metric").value||R.metricId,Se=re.querySelector("#cedit-from").value||R.fromDate;if(!de||!he||!Se)return;if((Date.now()-new Date(Se))/864e5>365){Ge("Date trop ancienne (max 365 jours)");return}const we=Ye.find(jt=>jt.id===he),ee=ns[he]||{icon:"bi-bar-chart-fill",color:"#636366"},se=re.querySelector("#cedit-subject"),ve=he==="hf"?{cold:+(((je=re.querySelector("#cedit-th-cold"))==null?void 0:je.value)??7.2)}:he==="dj"?{low:+(((Be=re.querySelector("#cedit-th-low"))==null?void 0:Be.value)??0),high:+(((vt=re.querySelector("#cedit-th-high"))==null?void 0:vt.value)??18)}:null;qe[B]={...R,metricId:he,metricLabel:(we==null?void 0:we.label)||he,unit:(we==null?void 0:we.unit)||"",icon:ee.icon,color:ee.color,subjectKey:de,subjectLabel:(((lt=se.options[se.selectedIndex])==null?void 0:lt.text)||de).trim(),fromDate:Se,value:String(os(de,Se,he)??"—"),thresholds:ve},b(),L()}})}}D(),(_e=t.querySelector("#open-chat-btn"))==null||_e.addEventListener("click",Vo);function z(){const H=t.querySelector('[data-widget="notes"] .m-widget-bd');H&&(H.innerHTML=ls(i),V())}let T=[];function V(){var N,G;T=[];const H=t.querySelector("#notes-img-input"),Y=t.querySelector("#notes-img-btn"),W=t.querySelector("#notes-previews"),Q=t.querySelector("#notes-img-error");H&&Y&&W&&window.setupImgUpload&&window.setupImgUpload(H,Y,W,Q,T),(N=t.querySelector("#notes-add"))==null||N.addEventListener("click",async()=>{var de,he,Se,Ce,we,ee;const U=(de=t.querySelector("#notes-input"))==null?void 0:de.value.trim(),O=((he=t.querySelector("#notes-date"))==null?void 0:he.value)||new Date().toISOString().slice(0,10),B=((Se=t.querySelector("#notes-time"))==null?void 0:Se.value)||"",R=((Ce=t.querySelector("#notes-auteur"))==null?void 0:Ce.value)||"";if(!U)return;const X=((we=t.querySelector("#notes-link"))==null?void 0:we.value)||"";let Z=null,ae=null,oe="";if(X.startsWith("p-"))Z="parcel",ae=+X.slice(2),oe=((ee=le.find(se=>se.id===ae))==null?void 0:ee.name)||"";else if(X.startsWith("s-")){Z="sensor",ae=+X.slice(2);const se=ce.find(ve=>ve.id===ae);oe=se?se.serial:""}const be=[];if(T.length&&window.ImageStore)for(const se of T){const ve=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(ve,se),be.push(ve)}const re=tt();re.unshift({date:O,time:B,text:U,auteur:R,role:"membre",imageIds:be,linkedType:Z,linkedId:ae,linkedName:oe}),ri(re),t.querySelector("#notes-input").value="",z()}),(G=t.querySelector("#notes-view"))==null||G.addEventListener("click",()=>{const U=X=>{const[Z,ae,oe]=X.split("-");return`${oe}/${ae}/${Z}`},O=X=>X.length>70?X.slice(0,70)+"…":X,B=document.createElement("div");function R(){const X=tt();if(!X.length){B.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}B.innerHTML=X.map((Z,ae)=>{const oe=(Z.imageIds||[]).length,be=Z.linkedType?`<span style="font-size:10px;background:${Z.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${Z.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${Z.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${Z.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${ae}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del m-del-btn" data-idx="${ae}" style="position:absolute;top:8px;right:8px">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${U(Z.date)}${Z.time?" · "+Z.time:""}</span>
                  ${Z.auteur?`<span style="color:#636366;font-weight:500">${Z.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${O(Z.text)}</div>
                ${be||oe>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${be}${oe>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${oe} photo${oe>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),B.querySelectorAll(".m-note-del").forEach(Z=>{Z.addEventListener("click",async ae=>{var de;ae.stopPropagation();const oe=tt(),be=+Z.dataset.idx,re=oe[be];(de=re==null?void 0:re.imageIds)!=null&&de.length&&window.ImageStore&&await window.ImageStore.remove(re.imageIds),oe.splice(be,1),ri(oe),R(),z()})}),B.querySelectorAll(".m-note-card").forEach(Z=>{Z.addEventListener("click",async()=>{const oe=tt()[+Z.dataset.idx];if(!oe)return;const be=oe.linkedType?`<span style="font-size:11px;background:${oe.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${oe.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${oe.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${oe.linkedName||""}</span>`:"",re=document.createElement("div");if(re.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${U(oe.date)}${oe.time?" · "+oe.time:""}</span>
                  ${oe.auteur?`<span style="color:#636366;font-weight:500">${oe.auteur}</span>`:""}
                  ${be}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${oe.text}</div>
                ${(oe.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ue({title:"Note",body:re,doneLabel:"Fermer",onDone:()=>{}}),(oe.imageIds||[]).length&&window.ImageStore){const de=re.querySelector("#note-detail-photos");for(const he of oe.imageIds){const Se=await window.ImageStore.get(he);if(!Se)continue;const Ce=document.createElement("div");Ce.className="jrn-img-thumb-wrap";const we=document.createElement("img");we.className="jrn-img-thumb",we.src=Se,we.alt="",we.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(Se)}),Ce.appendChild(we),de.appendChild(Ce)}}})})}R(),Ue({title:"Notes",body:B,doneLabel:"Fermer",onDone:()=>{}})});const $e=U=>{const[O,B,R]=U.split("-");return`${R}/${B}/${O}`};t.querySelectorAll("#notes-list .m-note-del").forEach(U=>{U.addEventListener("click",async O=>{var Z;O.stopPropagation();const B=tt(),R=+U.dataset.idx,X=B[R];(Z=X==null?void 0:X.imageIds)!=null&&Z.length&&window.ImageStore&&await window.ImageStore.remove(X.imageIds),B.splice(R,1),ri(B),z()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(U=>{U.addEventListener("click",async()=>{const B=tt()[+U.dataset.idx];if(!B)return;const R=B.linkedType?`<span style="font-size:11px;background:${B.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${B.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${B.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${B.linkedName||""}</span>`:"",X=document.createElement("div");if(X.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${$e(B.date)}${B.time?" · "+B.time:""}</span>
              ${B.auteur?`<span style="color:#636366;font-weight:500">${B.auteur}</span>`:""}
              ${R}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${B.text}</div>
            ${(B.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ue({title:"Note",body:X,doneLabel:"Fermer",onDone:()=>{}}),(B.imageIds||[]).length&&window.ImageStore){const Z=X.querySelector("#note-detail-photos");for(const ae of B.imageIds){const oe=await window.ImageStore.get(ae);if(!oe)continue;const be=document.createElement("div");be.className="jrn-img-thumb-wrap";const re=document.createElement("img");re.className="jrn-img-thumb",re.src=oe,re.alt="",re.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(oe)}),be.appendChild(re),Z.appendChild(be)}}})})}V();function ne(){t.querySelectorAll(".m-tr-chart-wrap").forEach(H=>{const Y=H.querySelector(".m-tr-cursor"),W=H.querySelector(".m-tr-tooltip");if(!W)return;const Q=JSON.parse(H.dataset.series||"[]"),$e=H.dataset.unit||"",N=Q.length,G=26,U=270;H.addEventListener("pointermove",O=>{const B=H.getBoundingClientRect(),R=Math.max(0,Math.min(((O.clientX-B.left)*(G+U)/B.width-G)/U,1)),X=Q[Math.round(R*(N-1))]??null;if(Y){const Z=G+Math.round(R*U);Y.setAttribute("x1",Z),Y.setAttribute("x2",Z),Y.setAttribute("opacity","1")}W.style.display="",W.style.left=`${Math.max(0,Math.min(O.clientX-B.left-24,B.width-60))}px`,W.textContent=X!==null?`${(+X).toFixed(1)} ${$e}`:"—"}),H.addEventListener("pointerleave",()=>{W.style.display="none",Y==null||Y.setAttribute("opacity","0")})})}function te(){const H=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');H&&(H.innerHTML=ts(n,s),J())}Ot=te;function J(){var Q,$e,N,G,U;const H=()=>{var B,R;const O=t.querySelector("#msr-create");O&&(O.disabled=!((B=t.querySelector("#msr-subject"))!=null&&B.value)||!((R=t.querySelector("#msr-metric"))!=null&&R.value)||Ie.length>=wt)},Y=()=>{var X;const O=t.querySelector("#msr-metric"),B=(X=t.querySelector("#msr-subject"))==null?void 0:X.value;if(!O)return;const R=$o(B,s);O.innerHTML='<option value="">— Métrique —</option>'+R.map(Z=>`<option value="${Z}">${xi[Z]}</option>`).join(""),O.disabled=!B||!R.length,H()},W=()=>{var R;const O=t.querySelector("#msr-step"),B=((R=t.querySelector("#msr-period"))==null?void 0:R.value)||"7d";O&&(O.innerHTML=Ws(B).map(X=>`<option value="${X.id}">${X.label}</option>`).join(""),H())};(Q=t.querySelector("#msr-subject"))==null||Q.addEventListener("change",()=>{Y(),H()}),($e=t.querySelector("#msr-period"))==null||$e.addEventListener("change",()=>{W(),H()}),(N=t.querySelector("#msr-metric"))==null||N.addEventListener("change",H),(G=t.querySelector("#msr-step"))==null||G.addEventListener("change",H),(U=t.querySelector("#msr-create"))==null||U.addEventListener("click",()=>{var re,de,he;const O=t.querySelector("#msr-subject"),B=t.querySelector("#msr-metric"),R=t.querySelector("#msr-period"),X=t.querySelector("#msr-step"),Z=O==null?void 0:O.value,ae=B==null?void 0:B.value,oe=R==null?void 0:R.value,be=X==null?void 0:X.value;!Z||!ae||!oe||!be||(Ie.push({subjectKey:Z,subjectLabel:(((re=O.options[O.selectedIndex])==null?void 0:re.text)||Z).trim(),metricId:ae,metricLabel:xi[ae]||ae,unit:yo[ae]||"",period:oe,periodLabel:(((de=R.options[R.selectedIndex])==null?void 0:de.text)||oe).trim(),step:be,stepLabel:(((he=X.options[X.selectedIndex])==null?void 0:he.text)||be).trim(),color:Js[ae]||Qi[Ie.length%Qi.length]}),b(),te())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(O=>{O.addEventListener("click",()=>{Ie.splice(+O.dataset.idx,1),b(),te()})}),t.querySelectorAll(".m-wf-view-data").forEach(O=>{O.addEventListener("click",()=>{const B=O.dataset.metricId||null;if(O.dataset.sensorId){const R=+O.dataset.sensorId,X=ce.find(Z=>Z.id===R);X&&ge(()=>import("./chart-fullscreen-Cx9wG9JP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(Z=>Z.initChartFullscreen({sensor:X,metricId:B,backLabel:X.model+" "+X.serial}))}else if(O.dataset.parcelId){const R=+O.dataset.parcelId,X=n.find(ae=>ae.id===R),Z=ce.filter(ae=>{var oe;return(oe=ae.parcelIds)==null?void 0:oe.includes(R)}).map(ae=>ae.id);X&&ge(()=>import("./chart-fullscreen-Cx9wG9JP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(ae=>ae.initChartFullscreen({parcel:X,linkedSensorIds:Z,metricId:B,backLabel:X.name}))}})}),ne()}J(),t.querySelectorAll(".m-prev-card").forEach(H=>{H.addEventListener("click",()=>{var W,Q;const Y=((Q=(W=t.querySelector(".m-prev-select"))==null?void 0:W.selectedOptions[0])==null?void 0:Q.text)||"";_(r,+H.dataset.day,Y)})});const ie=t.querySelector(".m-prev-expand-btn");ie&&ie.addEventListener("click",()=>{var Y,W;const H=((W=(Y=t.querySelector(".m-prev-select"))==null?void 0:Y.selectedOptions[0])==null?void 0:W.text)||"";_(r,3,H)}),t.querySelectorAll(".m-widget-menu").forEach(H=>{H.addEventListener("click",Y=>{var U;Y.stopPropagation();const W=Ee.find(O=>O.id===H.dataset.widget);if(!W)return;const Q=document.createElement("div"),$e=W.id==="bilan_hydrique",N=pt().sensorlessEnabled??!0;Q.innerHTML=`
          <div class="m-sheet-links">
            ${$e?`<a class="m-sheet-link" id="menu-sensorless">${N?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const G=Ue({title:W.title,body:Q,doneLabel:"Fermer",onDone:()=>{}});(U=Q.querySelector("#menu-sensorless"))==null||U.addEventListener("click",()=>{$t({sensorlessEnabled:!N}),G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove();const O=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');O&&(O.innerHTML=m()+ft(u()),k(),y(),g(),i==="admin"&&j())},280)}),Q.querySelector("#menu-move").addEventListener("click",()=>{G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),A()},280)}),Q.querySelector("#menu-remove").addEventListener("click",()=>{W.active=!1,G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),b(),C()},280),Ge("Widget retiré")})})})}function A(){const k=document.createElement("div"),y=()=>Ee.filter(g=>g.active&&!g.fixed),$=()=>{const g=y();k.innerHTML=g.map((q,j)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${q.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${j}" data-dir="-1" ${j===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${j}" data-dir="1" ${j===g.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),k.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(q=>{q.addEventListener("click",()=>{const j=y(),L=+q.dataset.i,D=L+ +q.dataset.dir,z=Ee.indexOf(j[L]),T=Ee.indexOf(j[D]);[Ee[z],Ee[T]]=[Ee[T],Ee[z]],b(),$(),C()})})};$(),Ue({title:"Réorganiser les widgets",body:k,doneLabel:"Fermer",onDone:()=>{}})}function M(){const k=i==="admin",y=xe(`
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
            ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map($=>`
              <button class="m-add-item" data-action="${$.action}">
                <i class="bi ${$.icon}"></i>
                <span>${$.label}</span>
              </button>`).join("")}
          </div>
          ${k?`
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
      </div>`);y.querySelector(".m-detail-back").addEventListener("click",fe),y.querySelectorAll(".m-add-item").forEach($=>{$.addEventListener("click",()=>{const g=$.dataset.action;g==="irrigation"?(fe(),ge(()=>Promise.resolve().then(()=>et),void 0).then(q=>q.openIrrigationSaisie(n,Ge))):g==="strategie-irrigation"?(fe(),ge(()=>Promise.resolve().then(()=>et),void 0).then(q=>q.openIrrigationStrategie(n,Ge))):Ge("Fonctionnalité à venir")})})}function I(){const k=document.createElement("div"),y=()=>{const $=Ee.filter(g=>!g.fixed);k.innerHTML=$.map(g=>`
        <div class="m-catalog-row${g.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${g.color}20;color:${g.color}"><i class="bi ${g.icon}"></i></div>
          <span class="m-catalog-title">${g.title}</span>
          ${g.available?`<button class="m-catalog-toggle${g.active?" m-catalog-toggle--on":""}" data-cid="${g.id}" type="button">
                <i class="bi ${g.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),k.querySelectorAll("[data-cid]").forEach(g=>{g.addEventListener("click",()=>{const q=Ee.find(j=>j.id===g.dataset.cid);q&&(q.active=!q.active,b(),y(),C())})})};y(),Ue({title:"Widgets disponibles",body:k,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",k=>{if(k.key!=="weenat_proto_store")return;Ss(le);const y=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');y&&(y.innerHTML=m()+ft(u()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),i==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=M,C()}const ds={"Blé tendre":["Semis","Levée","Tallage","Épi 1 cm","Épiaison","Floraison","Maturité"],Maïs:["Semis","Levée","4 feuilles","6 feuilles","Floraison ♂","Soie","Maturité"],Colza:["Semis","Levée","Rosette","Reprise","Bouton floral","Floraison","Siliques","Maturité"],Tournesol:["Semis","Levée","4 feuilles","Bouton floral","Floraison","Maturité"],Vigne:["Débourrement","Sortie feuilles","Floraison","Nouaison","Véraison","Récolte"],Sorgho:["Semis","Levée","Montaison","Floraison","Maturité"],"Orge de printemps":["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],Orge:["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],"Pomme de terre":["Plantation","Levée","Croissance","Tuberisation","Grossissement","Maturité"],Cerisier:["Dormance","Bourgeons","Débourrement","Floraison","Nouaison","Fructification","Récolte"],Poire:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Pomme:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Salade:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Laitue:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Betterave:["Semis","Levée","4 feuilles","Fermeture rang","Grossissement","Récolte"]},us=["Semis","Levée","Floraison","Récolte"];function Wo(e){if(!e)return us;const i=e.toLowerCase();for(const t of Object.keys(ds))if(i.startsWith(t.toLowerCase()))return ds[t];return us}const Et=new URLSearchParams(window.location.search).get("role")==="adherent"?"adherent":"admin";function li(e){return Et==="adherent"?le.filter(i=>i.orgId===e.orgId):le}const Ae={djMin:0,djMax:18,hfSeuil:7.2},Go={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"},irrigation:{metricLabel:"Cumul d'irrigation",unit:"mm",icon:"bi-moisture",color:"#FF8C00"}},Uo=4,Yo=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Weephyt",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermomètre-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Capteur d'humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],$i={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},en=e=>`dash-widgets-parcel-${e}`;function Zo(e,i){const t=i.map(a=>ce.find(s=>s.id===a)).filter(Boolean),o=new Set(t.map(a=>a.model)),n=["previsions-5j","cumuls","irrigations"];return Object.entries($i).forEach(([a,s])=>{s.some(r=>o.has(r))&&n.push(a)}),Mt(e)&&n.push("irrelis"),n}function Wt(e,i){try{const t=JSON.parse(localStorage.getItem(en(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return Zo(e,i)}function tn(e,i){localStorage.setItem(en(e),JSON.stringify(i))}function Ko(e,i,t){const o=new Set(Wt(e,i)),n=Yo.map((s,r)=>`
    <div class="m-list-section-header"${r>0?' style="margin-top:20px"':""}>${s.title}</div>
    ${s.items.map(p=>{const c=o.has(p.id);return`
        <div class="m-wcat-item">
          <span>${p.label}</span>
          ${c?'<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>':`<button class="m-wcat-add" data-wid="${p.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
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
      <div style="padding:8px 0 32px">${n}</div>
    </div>`);a.querySelector(".m-detail-back").addEventListener("click",fe),a.querySelectorAll(".m-wcat-add").forEach(s=>{s.addEventListener("click",()=>{const r=s.dataset.wid,p=Wt(e,i);p.includes(r)||(p.push(r),tn(e.id,p)),fe(),t==null||t()})})}const Ne={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Capteur d'humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1},irrigation:{label:"Irrigation",unit:"mm",color:"#FF8C00",cumul:!0,cumulsType:"irrigation"},rfu:{label:"Niveau de réservoir",unit:"mm",color:"#0099CC",cumul:!1},nrs:{label:"Niveau de réservoir (spatialisé)",unit:"mm",color:"#0172A4",cumul:!1}},Xo=new Set(["pluie","temperature","humidite","vent","pothydr","etp","temp_rosee","rayonnement"]),Pi={j7j2:2},Lt={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function Kt(e,i){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3},rfu:{base:60,amp:30,min:0,max:120},nrs:{base:65,amp:28,min:0,max:120}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(o,n)=>{const a=n/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,s))})}const Xt={"365d":52,"30d":60,"7d":84,j7j2:108,hier:48,"1d":24,custom:60},qt={"365d":525600,"30d":43200,"7d":10080,j7j2:10080,hier:1440,"1d":1440,custom:10080};function sn(e,i,t=0,o=0,n=null){const a=n??(Xt[i]||60),s=qt[i]||10080,r=Date.now(),p=r-s*6e4,c=s*6e4/a,u=new Array(a+t).fill(0),m=t>0?o*6e4/t:0;return me.filter(v=>v.plotId===e).forEach(v=>{const l=new Date(v.iso).getTime();if(!(l<p)){if(l<=r){const d=Math.min(a-1,Math.floor((l-p)/c));u[d]+=v.mm}else if(t>0&&l<=r+o*6e4){const d=Math.min(t-1,Math.floor((l-r)/m));u[a+d]+=v.mm}}}),u}function Qo(e,i,t,o,n,a=20,s=0){const r=qt[e]||10080,p=r+s,c=new Date,u=d=>e==="1d"||e==="hier"?`${String(d.getHours()).padStart(2,"0")}h`:e==="365d"?d.toLocaleDateString("fr-FR",{month:"short"}):`${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}`,m=4,v=i-t-o,l=n-a;return Array.from({length:m+1},(d,b)=>{const f=b/m,x=new Date(c.getTime()+(f*p-r)*6e4),h=(t+f*v).toFixed(1),w=b===0?"start":b===m?"end":"middle";return[`<line x1="${h}" y1="${l}" x2="${h}" y2="${l+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${h}" y="${n-3}" text-anchor="${w}" font-size="9" fill="#8e8e93" font-family="-apple-system">${u(x)}</text>`].join("")}).join("")}function ea(e,i,t,o="7d",n="",a=null){const s=Xt[o]||60,r=qt[o]||10080,p=Pi[o]||0,c=r/1440,u=p>0?Math.round(s*c/(c+p)):s,m=s-u,v=m>0?p*1440:0,d=m>0&&Xo.has(e)?m:0,b=e==="irrigation"?sn(a,o,m,m>0?p*1440:0,u):Kt(e,u+d),f=320,x=100,h=34,w=6,C=10,P=20,E=f-h-w,S=x-C-P,_=t?0:Math.min(...b),F=Math.max(...b,_+.001),A=F-_,M=J=>h+J/(s-1)*E,I=J=>C+S-(J-_)/A*S,k=`g${Math.random().toString(36).slice(2,8)}`,y=[0,.5,1].map(J=>{const ie=_+J*A,pe=C+S-J*S;return`<text x="${h-3}" y="${(pe+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${ie<10?ie.toFixed(1):Math.round(ie)}</text>`}).join(""),$=[.25,.5,.75].map(J=>{const ie=(C+S-J*S).toFixed(1);return`<line x1="${h}" y1="${ie}" x2="${f-w}" y2="${ie}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),g=`<line x1="${h}" y1="${C+S}" x2="${f-w}" y2="${C+S}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,q=Qo(o,f,h,w,x,P,v);let j="";if(m>0){const J=M(u-.5),ie=`stripe${k}`;j=`<defs><pattern id="${ie}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.06)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.18)" stroke-width="3"/>
      </pattern></defs>
      <rect x="${J.toFixed(1)}" y="${C}" width="${(f-w-J).toFixed(1)}" height="${S}" fill="url(#${ie})"/>
      <line x1="${J.toFixed(1)}" y1="${C}" x2="${J.toFixed(1)}" y2="${C+S}" stroke="rgba(142,142,147,.35)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(f-w-3).toFixed(1)}" y="${(C+9).toFixed(1)}" text-anchor="end" font-size="8" fill="#8e8e93" font-family="-apple-system" font-style="italic">Prévisions</text>`}if(t){const J=E/b.length*.7,ie=b.map((pe,Le)=>{const ke=(pe-_)/A*S,De=C+S-ke,Fe=Le>=u;return`<rect x="${(M(Le)-J/2).toFixed(1)}" y="${De.toFixed(1)}" width="${J.toFixed(1)}" height="${ke.toFixed(1)}" fill="${Fe?"#C7C7CC":i}" opacity="${Fe?".55":".8"}" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${f} ${x}" width="100%" height="${x}" preserveAspectRatio="none">${j}${y}${$}${g}${q}${ie}</svg>`}const L=b.map((J,ie)=>[M(ie),I(J)]),D=L.slice(0,u),z=L.slice(u-1),T=D.map(([J,ie],pe)=>`${pe?"L":"M"}${J.toFixed(1)},${ie.toFixed(1)}`).join(" "),V=d>0?z.map(([J,ie],pe)=>`${pe?"L":"M"}${J.toFixed(1)},${ie.toFixed(1)}`).join(" "):"",ne=`${T} L${M(u-1).toFixed(1)},${(C+S).toFixed(1)} L${h},${(C+S).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:b.map(J=>+J.toFixed(2)),minV:+_.toFixed(2),maxV:+F.toFixed(2)}))}" data-color="${i}" data-unit="${n}" style="position:relative">
    <svg viewBox="0 0 ${f} ${x}" width="100%" height="${x}" preserveAspectRatio="none">
      <defs><linearGradient id="${k}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${j}
      ${y}${$}${g}
      <path d="${ne}" fill="url(#${k})"/>
      <path d="${T}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${V?`<path d="${V}" fill="none" stroke="${i}" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>`:""}
      ${L.map(([J,ie],pe)=>`<circle cx="${J.toFixed(1)}" cy="${ie.toFixed(1)}" r="2" fill="${i}" opacity="${pe>=u?".55":"1"}"/>`).join("")}
      ${q}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function ta(e,i,t,o=null){if(!t)return"";const n=Xt[i]||60,a=qt[i]||10080,s=Pi[i]||0,r=a/1440,p=s>0?Math.round(n*r/(r+s)):n,c=a/(p*60),u=e==="irrigation"?sn(o,i,0,0,p):Kt(e,p);let m=[];if(t==="temp"){const v=u.reduce((d,b)=>d+Math.max(0,Math.min(b,Ae.djMax)-Ae.djMin),0)*(c/24),l=u.filter(d=>d<Ae.hfSeuil).length*c;m=[{label:"Cumul de degrés jours",val:`${Math.round(v)} DJ`,metricId:"dj",thresholdText:`${Ae.djMin}°C → ${Ae.djMax}°C`},{label:"Cumul d'heures de froid",val:`${Math.round(l)} h`,metricId:"hf",thresholdText:`< ${Ae.hfSeuil}°C`}]}else if(t==="pluie")m=[{label:"Cumul de pluie",val:`${u.reduce((l,d)=>l+d,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const v=u.filter(l=>l>120).length*c;m=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(v)} h`,metricId:"rayo"}]}else if(t==="etp")m=[{label:"Cumul d'évapotranspiration",val:`${(u.reduce((l,d)=>l+d,0)*(c/24)).toFixed(1)} mm`,metricId:"etp"}];else if(t==="hws"){const v=u.filter(l=>l>50).length*c;m=[{label:"Cumul d'heures d'humectation foliaire",val:`${Math.round(v)} h`,metricId:"humec"}]}else t==="irrigation"&&(m=[{label:"Cumul irrigation",val:`${u.reduce((l,d)=>l+d,0).toFixed(1)} mm`,metricId:"irrigation"}]);return m.length?`<div class="m-chart-cumuls">${m.map(v=>{const l=v.metricId==="dj"||v.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${v.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${v.label}</span>
          ${v.thresholdText?`<span class="m-chart-cumul-thresh">${v.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${v.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${l}
        <button class="m-cumul-add-btn" data-cumul-label="${v.label}" data-cumul-val="${v.val}" data-cumul-metric-id="${v.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}const ia={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",j7j2:"J-7 → J+2",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},sa={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"};function ps(e,i,t=null,o=null,n="1h",a=null){const s=Ne[e];if(!s)return"";const r=ta(e,i,s.cumulsType,o),p=t||e==="irrigation"?`<div class="m-chart-details-link" data-sensor-id="${t??""}" data-metric-id="${e}">Voir détails →</div>`:"",c=a?`<button class="m-msr-add-btn" data-msr-metric-id="${e}" data-msr-subject-key="${a.key}" data-msr-subject-label="${a.label}" data-msr-period="${i}" data-msr-step="${n}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`:"";return`
    <div class="m-chart-card" data-metric-id="${e}">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${s.color}">${s.label}</span>
        ${c}
      </div>
      ${ea(e,s.color,s.cumul,i,s.unit||"",o)}
      ${p}
      ${r}
    </div>`}function na(e){const i=e.dataset.msrMetricId,t=e.dataset.msrSubjectKey,o=e.dataset.msrSubjectLabel,n=e.dataset.msrPeriod,a=e.dataset.msrStep,s=Ne[i];if(!s)return;const r=Gs({subjectKey:t,subjectLabel:o,metricId:i,metricLabel:s.label,unit:s.unit||"",period:n,periodLabel:ia[n]||n,step:a,stepLabel:sa[a]||a,color:s.color});if(r==="max"){K(`Maximum de mesures atteint (${Uo})`);return}if(r==="dup"){K("Cette mesure est déjà dans vos favoris");return}K("Mesure ajoutée au tableau de bord")}function oa(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function aa(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t,minV:o,maxV:n}=i,a=e.querySelector(".m-chart-tip"),s=e.querySelector(".m-chart-crosshair"),r=e.dataset.color||"#0172A4",p=e.dataset.unit||"";function c(m){const v=e.getBoundingClientRect(),l=Math.max(0,Math.min(1,(m-v.left)/v.width)),d=Math.round(l*(t.length-1)),b=t[d],f=l*100,x=(b<10?b.toFixed(1):String(Math.round(b)))+(p?` ${p}`:""),h=oa(r);s.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${f}%;width:1px;background:${r};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(f,75)}%;background:${r};color:${h};border:1.5px solid ${h};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=x}function u(){s.style.display="none",a.style.display="none"}e.addEventListener("pointermove",m=>{m.preventDefault(),c(m.clientX)}),e.addEventListener("pointerdown",m=>c(m.clientX)),e.addEventListener("pointerup",u),e.addEventListener("pointerleave",u),e.style.cursor="crosshair"}function ra(e){const i=me.filter(d=>d.plotId===e.id),t=i.filter(d=>d.real),o=i.filter(d=>!d.real),n=t.reduce((d,b)=>d+b.mm,0),a=o.reduce((d,b)=>d+b.mm,0),s=Qe(e.id).irrigation??e.irrigation,p=s&&!new Set(["Non irrigué","Non renseigné",""]).has(s),c=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-act-saisie" type="button"${p?"":" disabled"}>+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-act-saison" type="button"${p?"":" disabled"}>↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`;if(!p)return dt("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3,#8e8e93)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez préciser un type d'irrigation.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-set-type" type="button" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,"irrigations");if(!i.length)return dt("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3,#8e8e93);padding:8px 0">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${c}
      </div>`,"irrigations");let u="";if(i.some(d=>d.fromStrategy)){const d=[...i].sort((h,w)=>h.iso.localeCompare(w.iso)),b=d[d.length-1],f=d[d.length-2],x=f?Math.round((new Date(b.iso)-new Date(f.iso))/864e5):null;u=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${b.mm} mm</strong>${x?` tous les <strong>${x} jours</strong>`:""}.</div>
      </div>`}const v=n+a,l=`
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
          <div class="w-irrig-kpi-val" style="color:#8e8e93">${v} <span class="w-irrig-unit">mm</span></div>
        </div>
      </div>
      ${u}
      ${c}
      <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-view-cal" type="button" style="margin-top:5px"><i class="bi bi-calendar3"></i> Voir les irrigations</button>
    </div>`;return dt("Irrigations","bi-moisture","#FF8C00",l,"irrigations")}function la(e,i=[]){const t=Wt(e,i),o=i.map(a=>ce.find(s=>s.id===a)).filter(Boolean);let n="";for(const a of t)if(a==="irrigations")n+=ra(e);else if(a==="cumuls")n+=da(e,i);else if(a==="previsions-5j")n+=pa(e);else if(a==="irrelis")n+=Hs(e);else if($i[a]){const s=new Set($i[a]),r=o.filter(p=>s.has(p.model));r.length&&(n+=ma(r,a))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${n}
    </div>`}function dt(e,i,t,o,n="",a=""){return`
    <div class="m-widget-card"${n?` data-widget-id="${n}"`:""}>
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${i}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${n}" type="button">•••</button>
      </div>
      ${a?`<div class="m-widget-card-subtitle">${a}</div>`:""}
      ${o}
    </div>`}function it(e,i,t){const o=(e*9301+49297)%233280,a={etp:1+o%60/100,pluie:.8+o%70/100,djc:4+o%60/10,hfroid:.4+o%12/10,humec:.1+o%20/100,enso:4+o%40/10}[i]??1,s=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(a*s*10)/10}const nn=e=>`m-pcumuls-${e}`;function ct(e){try{return JSON.parse(localStorage.getItem(nn(e)))||{}}catch{return{}}}function Dt(e,i){const t=ct(e);localStorage.setItem(nn(e),JSON.stringify({...t,...i}))}const ca={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function da(e,i=[]){const t=new Set;i.forEach(l=>{const d=ce.find(b=>b.id===l);d&&(Lt[d.model]||[]).forEach(b=>t.add(b))});const o=`${new Date().getFullYear()}-01-01`,n=ct(e.id),a=new Set(n.hidden||[]),s=n.dates||{},r=n.cfg||{};e.id;const p=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:it(e.id,"etp",s.etp||o),show:!0},{id:"enso",label:"Rayonnement solaire",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:it(e.id,"enso",s.enso||o),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:it(e.id,"pluie",s.pluie||o),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:it(e.id,"djc",s.djc||o),show:t.has("temperature"),cfg:!0,cfgLabel:`${r.djMin??0}–${r.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#FEE7B4",icon:"bi-snow",val:it(e.id,"hfroid",s.hfroid||o),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${r.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:it(e.id,"humec",s.humec||o),show:t.has("humectation")}].filter(l=>l.show),c=p.filter(l=>!a.has(l.id)),u=p.filter(l=>a.has(l.id)),m=u.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${u.map(l=>`
          <button class="m-pcumul-add" data-cid="${l.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${l.icon}" style="color:${l.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${l.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",v=c.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${c.map(l=>{const d=s[l.id]||o;return`<div class="m-cumuls-saved-card" style="position:relative">
          <button class="m-pcumul-del m-del-btn" data-cid="${l.id}" data-pid="${e.id}" type="button" style="position:absolute;top:8px;right:8px">×</button>
          <div class="m-pcumul-hd">
            <div class="m-pcumul-icon" style="background:${l.color}22;color:${l.color}"><i class="bi ${l.icon}"></i></div>
            <div class="m-pcumul-label" style="color:${l.color}">${l.label}</div>
          </div>
          <div class="m-pcumul-value" style="color:${l.color}">${l.val}<span class="m-pcumul-unit">${l.unit}</span></div>
          <div class="m-pcumul-since">
            <span>Depuis le</span>
            <input type="date" class="m-pcumul-date m-pcumul-date-inp" data-cid="${l.id}" data-pid="${e.id}" value="${d}">
            ${l.cfg?`<button class="m-pcumul-cfg m-pcumul-cfg-btn" data-cid="${l.id}" data-pid="${e.id}"><i class="bi bi-gear"></i> ${l.cfgLabel}</button>`:""}
          </div>
        </div>`}).join("")}${m}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${m}`;return dt("Cumuls","bi-bar-chart-fill","#0172A4",v,"cumuls")}const on={};function an(e){const i=(e==null?void 0:e.id)||1,t=(a,s,r)=>{const p=Math.sin(a*9301+49297)*43758.5453;return s+Math.floor((p-Math.floor(p))*(r-s+1))},o=[{label:"Ensoleillé",icon:"bi-sun",color:"#f4a01c"},{label:"Part. nuageux",icon:"bi-cloud-sun",color:"#5b8dd9"},{label:"Couvert",icon:"bi-cloud",color:"#8e8e93"},{label:"Pluie",icon:"bi-cloud-rain-fill",color:"#2E75B6"},{label:"Orageux",icon:"bi-cloud-lightning-rain",color:"#bf5af2"}],n=new Date;return Array.from({length:14},(a,s)=>{const r=new Date(n);r.setDate(r.getDate()+s);const p=t(i*17+s*7,0,4),c=o[p],u=p>=3,m=t(i*3+s*11,6,14),v=t(i*5+s*13,17,32),l=Array.from({length:24},(d,b)=>{const f=Math.sin(Math.PI*(b-6)/12),x=Math.round(m+(v-m)*Math.max(0,f)),h=u&&b>=8&&b<=16&&t(i+s*100+b,0,9)>5?+(t(i+s*100+b+1,0,30)/10).toFixed(1):0;return{label:`${String(b).padStart(2,"0")}h`,temp:x,pluie:h,hum:Math.round(85-40*Math.max(0,f)),vent:t(i*7+s*50+b,8,30),icon:h>0?"bi-cloud-rain-fill":b<7||b>20?"bi-moon-fill":c.icon}});return{dayLabel:s===0?"Aujourd'hui":s===1?"Demain":r.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:r.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...c,pluie:u?t(i*23+s*31,2,20):0,tMin:m,tMax:v,ventMoy:t(i*11+s*17,8,30),ventRafales:t(i*13+s*19,18,50),hours:l}})}function ci(e,i,t){const o=e[i],n=`${o.dayLabel.charAt(0).toUpperCase()+o.dayLabel.slice(1)} · ${o.dateStr}`,a=t?`<div style="font-size:12px;color:#8e8e93;text-align:center;padding:2px 0 6px"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${t}</div>`:"";return`
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
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${o.icon}" style="color:${o.color};font-size:20px"></i><span class="m-d-name">${n}</span></div>
        </div>
        <button class="m-day-nav" id="next-day" ${i>=e.length-1?"disabled":""}>›</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="detail-content" class="m-detail-content" style="top:84px">
      <div style="padding:12px 16px 0">
        <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
          <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${o.pluie} mm</strong></div>
          <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${o.tMin} / ${o.tMax}°C</strong></div>
          <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${o.ventMoy}/${o.ventRafales}</strong></div>
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
          ${o.hours.map((s,r)=>`
            <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${r<o.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
              <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${s.label}</span>
              <i class="bi ${s.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
              <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${s.pluie>0?s.pluie+"mm":""}</span>
              <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${s.temp}°C</span>
              <span style="font-size:12px;color:#8e8e93">${s.hum}%</span>
              <span style="font-size:12px;color:#8e8e93;margin-left:auto">${s.vent} km/h</span>
            </div>`).join("")}
        </div>
      </div>
    </div>`}function ua(e){const i=on[e.id]||an(e),t=e.name,o=xe(ci(i,0,t)),n=(a,s)=>{var r,p;a.querySelector(".m-detail-back").addEventListener("click",fe),(r=a.querySelector("#prev-day"))==null||r.addEventListener("click",()=>{a.innerHTML=ci(i,s-1,t),n(a,s-1)}),(p=a.querySelector("#next-day"))==null||p.addEventListener("click",()=>{a.innerHTML=ci(i,s+1,t),n(a,s+1)})};n(o,0)}function pa(e){const i=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=ye.find(c=>c.id===(e==null?void 0:e.orgId)),o=(e==null?void 0:e.ville)||(t==null?void 0:t.ville)||"—",n=(e==null?void 0:e.id)||1,a=an(e);on[n]=a;const s=a.slice(0,5).map((c,u)=>({lbl:u===0?"Auj.":i[new Date(Date.now()+u*864e5).getDay()],date:c.dateStr,tmax:c.tMax,tmin:c.tMin,pluie:c.pluie,vent:c.ventMoy,icon:c.icon,label:c.label})),r=c=>`
    <div class="m-wprev5-col">
      <div class="m-wprev5-day">${c.lbl}</div>
      <div class="m-wprev5-date">${c.date}</div>
      <i class="bi ${c.icon} m-wprev5-icon" title="${c.label}"></i>
      <div class="m-wprev5-rain${c.pluie===0?" m-wprev5-rain--none":""}">${c.pluie>0?c.pluie+" mm":"—"}</div>
      <div class="m-wprev5-tmax">${c.tmax}°</div>
      <div class="m-wprev5-tmin">${c.tmin}°</div>
      <div class="m-wprev5-wind">${c.vent} <span>km/h</span></div>
    </div>`,p=`
    <div class="m-wprev5-loc"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${o}</div>
    <div class="m-wprev5-model-hdr">
      <span class="m-wprev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="m-wprev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="m-wprev5-grid">${s.map(r).join("")}</div>
    <div style="padding:6px 12px 4px;text-align:right">
      <button class="m-prev5j-voir-details" style="background:none;border:none;color:#0172A4;font-size:13px;cursor:pointer;padding:4px 0">Voir détails <i class="bi bi-chevron-right" style="font-size:11px"></i></button>
    </div>`;return dt("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",p,"previsions-5j")}function ma(e,i=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},o={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},n={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(a=>{const s=t[a.model]||"bi-broadcast",r=rn[a.model]||a.model,p=o[a.model]||"#0172A4",c=n[a.model]||[],u=c[0],v=a.model.startsWith("CAPA")?30:15,l=v-a.id*7%v,d=`
      <div class="m-wsensor-vals" style="margin:8px 0">
        ${c.slice(0,4).map(b=>{const f=Ne[b];if(!f)return"";const h=Kt(b,1)[0],w=h<10?h.toFixed(1):Math.round(h);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${f.label}</span>
            <span class="m-wsensor-value" style="color:${f.color}">${w} ${f.unit}</span>
          </div>`}).join("")}
      </div>
      <div class="m-widget-footer" style="display:flex;align-items:center;justify-content:space-between">
        <span style="font-size:11px;color:#8e8e93">Il y a ${l} min · ${a.serial}</span>
        <button class="m-wsensor-voir-donnees" data-sensor-id="${a.id}" data-metric-id="${u}" style="border:none;background:none;color:#007AFF;font-size:12px;cursor:pointer;padding:0;font-family:inherit;display:flex;align-items:center;gap:3px">Voir les données <i class="bi bi-arrow-right-short"></i></button>
      </div>`;return dt(r,s,p,d,i)}).join("")}function va(e,i){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),o=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:i});document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(o.href),100)}function fa(e,i,t){const o=new Set;i.forEach(f=>{const x=ce.find(h=>h.id===f);x&&(Lt[x.model]||[]).forEach(h=>o.add(h))});const n=[...new Set(["etp","rayonnement","temp_rosee",...o])].filter(f=>Ne[f]),a=Xt[t]||60,s=qt[t]||10080,r=Pi[t]||0,p=s/1440,c=r>0?Math.round(a*p/(p+r)):a,u=s/c*6e4,m=new Date,v=new Date(m-s*6e4),l=["Horodatage",...n.map(f=>`${Ne[f].label} (${Ne[f].unit})`)].join(";"),d=Array.from({length:c},(f,x)=>[new Date(v.getTime()+x*u).toISOString().replace("T"," ").slice(0,19),...n.map(w=>Kt(w,1)[0].toFixed(2))].join(";")),b=(e.name||"parcelle").replace(/[^\w]/g,"_");va([l,...d].join(`\r
`),`${b}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function ba(e,i="7d",t="1h",o=null){const n=new Set,a={};e.forEach(l=>{const d=ce.find(b=>b.id===l);d&&(Lt[d.model]||[]).forEach(b=>{n.add(b),a[b]||(a[b]=l)})});const s=me.some(l=>l.plotId===o),r=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),p=e.some(l=>{const d=ce.find(b=>b.id===l);return d&&r.has(d.model)}),c=["pluie","irrigation","temperature","humidite","pothydr","teneur","temp_sol","vent","rayonnement","humectation","par","temp_rosee","etp"],u=[...new Set([...n,"etp","rayonnement","temp_rosee",...p?["rfu"]:["nrs"],...s?["irrigation"]:[]])].filter(l=>Ne[l]).sort((l,d)=>{const b=c.indexOf(l),f=c.indexOf(d);return(b===-1?999:b)-(f===-1?999:f)}),m=new Date().toISOString().slice(0,10),v=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
      ${(()=>{const l=e[0]??null,d=o!=null?le.find(f=>f.id===o):null,b=d?{key:`p-${d.id}`,label:d.name}:null;return u.map(f=>f==="irrigation"?ps(f,i,null,o,t,b):ps(f,i,a[f]??l,null,t,b)).join("")})()}
    </div>`}const ha={"IRRÉ-LIS Multi-Cultures":{icon:"bi-droplet-fill",color:"#2E75B6"},"IRRÉ-LIS Mono-Culture":{icon:"bi-droplet-fill",color:"#2E75B6"},DeciTrait:{icon:"bi-shield-check",color:"#4CAF50"},Limacapt:{icon:"bi-bug",color:"#795548"},"Modèles Arvalis — PRÉVI-LIS / MILÉOS":{icon:"bi-graph-up",color:"#FBAF05"},Xarvio:{icon:"bi-grid-3x3-gap",color:"#00B14F"},Pixagri:{icon:"bi-map",color:"#00897B"},VitiMeteo:{icon:"bi-flower1",color:"#8B4C9E"},Rimpro:{icon:"bi-cloud-lightning",color:"#E53935"},"Cropwise Protector":{icon:"bi-shield-fill-check",color:"#43A047"},"Movida GrapeVision":{icon:"bi-eye",color:"#7B1FA2"}};function ga(e){if(e.substrate)return"Substrat : "+e.substrate;if(e.texture===yt&&e.soilAnalysis){const{argile:i,limon:t,sable:o}=e.soilAnalysis;return`Analyse de sol (argile ${i}% / limon ${t}% / sable ${o}%)`}return e.texture||"—"}function wi(e){const i=ha[e]||{icon:"bi-puzzle",color:"#8e8e93"};return`<i class="bi ${i.icon}" style="font-size:18px;color:${i.color};width:24px;text-align:center;flex-shrink:0"></i>`}const rn={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"};function ya(e,i,t){var u,m;const o=t.map(v=>ce.find(l=>l.id===v)).filter(Boolean),n=o.some(v=>v.model==="P+"||v.model==="PT"),a=o.some(v=>v.model==="P"),s=n&&a,r=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),p=new Map;o.forEach(v=>{(Lt[v.model]||[]).forEach(l=>{p.has(l)||p.set(l,[]),p.get(l).push(v)})});const c=new Set;return p.forEach((v,l)=>{v.length<=1||v.every(d=>r.has(d.model))||v.forEach(d=>c.add(d.id))}),`
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
          <span class="m-list-row-value">${Qe(e.id).volumeMaxM3??e.volumeMaxM3?`${(Qe(e.id).volumeMaxM3??e.volumeMaxM3).toLocaleString("fr-FR")} m³`:"Non défini"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${ga(e)}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${o.length?o.map((v,l)=>{const d=v.event&&(Array.isArray(v.event)?v.event.length>0:!0),b=c.has(v.id),f=rn[v.model]||v.model,x=(Lt[v.model]||[]).map(h=>{const w=Ne[h];return w?`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${w.color}18;color:${w.color};border:1px solid ${w.color}40;white-space:nowrap">${w.label}</span>`:""}).join("");return`<div class="m-list-row${l===o.length-1?" m-list-row--last":""} m-tappable" data-open-sensor="${v.id}" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:15px;font-weight:500;display:flex;align-items:center;gap:5px">
                      ${f}
                      ${d?'<span style="width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0;display:inline-block"></span>':""}
                      ${b?'<i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:12px;flex-shrink:0"></i>':""}
                    </div>
                    <div style="font-size:12px;color:#8e8e93;margin-top:1px">${v.model} · ${v.serial}</div>
                  </div>
                  <button class="btn-sensor-more" data-sensor-id="${v.id}" style="border:none;background:none;color:#8e8e93;font-size:18px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0;line-height:1" onclick="event.stopPropagation()">···</button>
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
                </div>
                ${x?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px">${x}</div>`:""}
                ${r.has(v.model)&&v.depth!=null?`<div style="font-size:12px;color:#8e8e93;margin-top:2px">Profondeur d'installation : ${v.depth} cm</div>`:""}
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
            ${[Ne.etp,...o.some(v=>v.model==="PYRANO")?[]:[Ne.rayonnement],Ne.temp_rosee].map(v=>`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${v.color}18;color:${v.color};border:1px solid ${v.color}40;white-space:nowrap">${v.label}</span>`).join("")}
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
                ${wi(v)}<span>${v}</span>
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
    </div>`}function Si(e,i=[],t="widgets",o="Parcelles"){let n=ye.find(A=>A.id===e.orgId),a=t,s="j7j2",r="1d",p=!1;const c=(n==null?void 0:n.ville)||"",u=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${o}</span></button>
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
    <div id="detail-content" class="m-detail-content"></div>`);function m(){const A=ye.filter(y=>y.id!==100&&y.statut!=="inactif"),M=document.createElement("div"),I=()=>{M.innerHTML=A.map(y=>`
        <div class="m-sheet-option${y.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${y.id}">
          <span>${y.name}</span>
          ${y.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),M.querySelectorAll("[data-pick-org]").forEach(y=>{y.addEventListener("click",()=>{const $=+y.dataset.pickOrg;$!==e.orgId&&(e.orgId=$,n=ye.find(g=>g.id===$),S(),K("Exploitation mise à jour")),k.classList.remove("m-sheet-overlay--show"),setTimeout(()=>k.remove(),280)})})},k=ue({title:"Exploitation",body:M,doneLabel:"Fermer",onDone:()=>{}});I()}function v(){const A=Ut.filter($=>$!=="Non renseigné"),M=Qe(e.id).irrigation??e.irrigation,I=document.createElement("div"),k=()=>{I.innerHTML=`
        <div class="m-sheet-option${M?"":" m-sheet-option--active"}" data-pick-irrig="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez un type</span>
          ${M?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${A.map($=>`
          <div class="m-sheet-option${$===M?" m-sheet-option--active":""}" data-pick-irrig="${$}">
            <span>${$}</span>
            ${$===M?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,I.querySelectorAll("[data-pick-irrig]").forEach($=>{$.addEventListener("click",()=>{const g=$.dataset.pickIrrig;g&&g!==M&&(Je(e.id,{irrigation:g}),e.irrigation=g,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Type d'irrigation modifié : ${M||"—"} → ${g}.`}),S(),K("Type d'irrigation mis à jour")),y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>y.remove(),280)})})},y=ue({title:"Type d'irrigation",body:I,doneLabel:"Fermer",onDone:()=>{}});k()}function l(){const A=$n,M=Qe(e.id).env??e.env??"Plein champ",I=document.createElement("div"),k=()=>{I.innerHTML=A.map($=>`
        <div class="m-sheet-option${$===M?" m-sheet-option--active":""}" data-pick-env="${$}">
          <span>${$}</span>
          ${$===M?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),I.querySelectorAll("[data-pick-env]").forEach($=>{$.addEventListener("click",()=>{const g=$.dataset.pickEnv;g&&g!==M&&(Je(e.id,{env:g}),e.env=g,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Environnement modifié : ${M||"—"} → ${g}.`}),S(),K("Environnement mis à jour")),y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>y.remove(),280)})})},y=ue({title:"Environnement",body:I,doneLabel:"Fermer",onDone:()=>{}});k()}function d(){const A=[...Mi,yt],M=Qe(e.id).texture??e.texture,I=document.createElement("div"),k=()=>{I.innerHTML=`
        <div class="m-sheet-option${M?"":" m-sheet-option--active"}" data-pick-texture="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez une texture</span>
          ${M?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${A.map($=>`
          <div class="m-sheet-option${$===M?" m-sheet-option--active":""}" data-pick-texture="${$}">
            <span>${$}</span>
            ${$===M?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,I.querySelectorAll("[data-pick-texture]").forEach($=>{$.addEventListener("click",()=>{const g=$.dataset.pickTexture;if(y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>y.remove(),280),g===yt){w(M);return}g!==M&&(Je(e.id,{texture:g||null,soilAnalysis:null}),e.texture=g||null,e.soilAnalysis=null,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${M||"—"} → ${g||"—"}.`}),S(),K("Texture de sol mise à jour"))})})},y=ue({title:"Texture de sol",body:I,doneLabel:"Fermer",onDone:()=>{}});k()}function b(){const A=e.name||"",M=document.createElement("div");M.innerHTML=`<input class="m-sheet-input" type="text" value="${A.replace(/"/g,"&quot;")}" placeholder="Nom de la parcelle">`;const I=M.querySelector("input");ue({title:"Nom",body:M,doneLabel:"Enregistrer",onDone:()=>{const k=I.value.trim();k&&k!==A&&(Je(e.id,{name:k}),e.name=k,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Nom de la parcelle modifié : ${A} → ${k}.`}),S(),K("Nom mis à jour"))}}),setTimeout(()=>I.focus(),300)}function f(){const A=e.variety||"",M=document.createElement("div");M.innerHTML=`<input class="m-sheet-input" type="text" value="${A.replace(/"/g,"&quot;")}" placeholder="Variété">`;const I=M.querySelector("input");ue({title:"Variété",body:M,doneLabel:"Enregistrer",onDone:()=>{const k=I.value.trim();k!==A&&(Je(e.id,{variety:k||null}),e.variety=k||null,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Variété modifiée : ${A||"—"} → ${k||"—"}.`}),S(),K("Variété mise à jour"))}}),setTimeout(()=>I.focus(),300)}function x(){const A=cropOptions,M=e.crop,I=document.createElement("div");I.innerHTML=A.map(y=>`
      <div class="m-sheet-option${y===M?" m-sheet-option--active":""}" data-pick-crop="${y}">
        <span>${y}</span>
        ${y===M?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const k=ue({title:"Culture",body:I,doneLabel:"Fermer",onDone:()=>{}});I.querySelectorAll("[data-pick-crop]").forEach(y=>{y.addEventListener("click",()=>{const $=y.dataset.pickCrop;k.classList.remove("m-sheet-overlay--show"),setTimeout(()=>k.remove(),280),$!==M&&(Je(e.id,{crop:$,phenoStage:null}),e.crop=$,e.phenoStage=null,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Culture modifiée : ${M||"—"} → ${$}.`}),S(),K("Culture mise à jour"))})})}function h(){const A=Wo(e.crop),M=e.phenoStage,I=document.createElement("div");I.innerHTML=A.map(y=>`
      <div class="m-sheet-option${y===M?" m-sheet-option--active":""}" data-pick-stade="${y}">
        <span>${y}</span>
        ${y===M?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const k=ue({title:"Stade phénologique",body:I,doneLabel:"Fermer",onDone:()=>{}});I.querySelectorAll("[data-pick-stade]").forEach(y=>{y.addEventListener("click",()=>{const $=y.dataset.pickStade;k.classList.remove("m-sheet-overlay--show"),setTimeout(()=>k.remove(),280),$!==M&&(Je(e.id,{phenoStage:$}),e.phenoStage=$,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Stade phénologique modifié : ${M||"—"} → ${$}.`}),S(),K("Stade phénologique mis à jour"))})})}function w(A){const M=Qe(e.id).soilAnalysis??e.soilAnalysis??{},I=document.createElement("div");I.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:12px">
      <div>
        <label class="m-form-label">Argile (%)</label>
        <input type="number" class="m-sheet-input" id="soil-argile" value="${M.argile??""}" placeholder="Ex : 25" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Limon (%)</label>
        <input type="number" class="m-sheet-input" id="soil-limon" value="${M.limon??""}" placeholder="Ex : 40" min="0" max="100">
      </div>
      <div>
        <label class="m-form-label">Sable (%)</label>
        <input type="number" class="m-sheet-input" id="soil-sable" value="${M.sable??""}" placeholder="Ex : 35" min="0" max="100">
      </div>
    </div>`,ue({title:"Analyse de sol",body:I,doneLabel:"Enregistrer",onDone:()=>{var q,j,L;const k=+(((q=I.querySelector("#soil-argile"))==null?void 0:q.value)||0),y=+(((j=I.querySelector("#soil-limon"))==null?void 0:j.value)||0),$=+(((L=I.querySelector("#soil-sable"))==null?void 0:L.value)||0),g={argile:k,limon:y,sable:$};Je(e.id,{texture:yt,soilAnalysis:g}),e.texture=yt,e.soilAnalysis=g,ze(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${A||"—"} → analyse de sol (argile ${k}% / limon ${y}% / sable ${$}%).`}),S(),K("Analyse de sol enregistrée")}})}function C(){const A=Qe(e.id).volumeMaxM3??e.volumeMaxM3??null,M=document.createElement("div");M.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
      <label class="m-form-label">Volume limité (m³)</label>
      <input type="number" class="m-sheet-input" id="edit-volume-max" value="${A??""}" placeholder="Ex : 33000" step="100" min="0">
    </div>`,ue({title:"Volume limité de la parcelle",body:M,doneLabel:"Appliquer",onDone:()=>{var y;const I=(y=M.querySelector("#edit-volume-max"))==null?void 0:y.value,k=I===""?null:Math.max(0,+I);Je(e.id,{volumeMaxM3:k}),e.volumeMaxM3=k,S(),K("Volume limité mis à jour")}})}const P=["IRRÉ-LIS Multi-Cultures","IRRÉ-LIS Mono-Culture","DeciTrait","Limacapt","Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","Movida GrapeVision"];function E(){let A=[...e.integrations||[]];function M(k){const y=P.filter($=>!A.includes($));k.innerHTML=`
        <div class="m-list-section-header">${A.length?`Actives (${A.length})`:"Actives"}</div>
        <div class="m-list">
          ${A.length?A.map(($,g)=>`
            <div class="m-list-row${g===A.length-1?" m-list-row--last":""}" style="gap:10px">
              ${wi($)}
              <span class="m-list-row-label" style="flex:1">${$}</span>
              <button class="btn-unlink-integ" data-integ="${$}" style="border:none;background:none;color:#ff3b30;font-size:13px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Délier</button>
            </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucune intégration active</span></div>'}
        </div>
        ${y.length?`
        <div class="m-list-section-header">Disponibles</div>
        <div class="m-list">
          ${y.map(($,g)=>`
            <div class="m-list-row${g===y.length-1?" m-list-row--last":""}" style="gap:10px">
              ${wi($)}
              <span class="m-list-row-label" style="flex:1">${$}</span>
              <button class="btn-add-integ" data-integ="${$}" style="border:none;background:none;color:#0172A4;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Lier</button>
            </div>`).join("")}
        </div>`:""}`,k.querySelectorAll(".btn-unlink-integ").forEach($=>{$.addEventListener("click",()=>{A=A.filter(g=>g!==$.dataset.integ),e.integrations=[...A],ze(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${$.dataset.integ} » retirée de la parcelle.`}),M(k),K("Intégration déliée")})}),k.querySelectorAll(".btn-add-integ").forEach($=>{$.addEventListener("click",()=>{A.includes($.dataset.integ)||A.push($.dataset.integ),e.integrations=[...A],ze(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${$.dataset.integ} » activée sur la parcelle.`}),M(k),K("Intégration liée")})})}const I=xe(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${e.name}</span></button>
          <span style="font-size:17px;font-weight:600">Intégrations</span>
          <div style="width:60px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="integ-list-content" style="padding-bottom:32px"></div>`);I.querySelector(".m-detail-back").addEventListener("click",fe),M(I.querySelector("#integ-list-content"))}function S(){const A=u.querySelector("#detail-content");a==="widgets"&&(A.innerHTML=la(e,i)),a==="donnees"&&(A.innerHTML=ba(i,s,r,e.id)),a==="params"&&(A.innerHTML=ya(e,n,i),_()),F()}function _(){const A=window.L;A&&setTimeout(()=>{var k;const M=u.querySelector("#parcel-minimap");if(!M)return;const I=A.map(M,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(A.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(I),((k=e.latlngs)==null?void 0:k.length)>=3){const y=A.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(I);I.fitBounds(y.getBounds(),{padding:[8,8]})}else I.setView([e.lat,e.lng],14),A.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(I)},50)}function F(){var A,M,I,k,y,$,g,q,j;(A=u.querySelector(".m-prev5j-voir-details"))==null||A.addEventListener("click",()=>ua(e)),(M=u.querySelector(".m-period-sel"))==null||M.addEventListener("change",L=>{s=L.target.value,s==="j7j2"&&(r="1d"),S()}),(I=u.querySelector(".m-step-sel"))==null||I.addEventListener("change",L=>{r=L.target.value,S()}),(k=u.querySelector(".m-export-btn"))==null||k.addEventListener("click",()=>fa(e,i,s)),u.querySelectorAll(".m-chart-svg-wrap").forEach(L=>aa(L)),u.querySelectorAll(".m-wsensor-voir-donnees[data-sensor-id]").forEach(L=>{L.addEventListener("click",()=>{const D=+L.dataset.sensorId,z=ce.find(T=>T.id===D);z&&ge(()=>import("./chart-fullscreen-Cx9wG9JP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(T=>T.initChartFullscreen({sensor:z,linkedSensorIds:i,metricId:L.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),u.querySelectorAll(".m-irrig-view-cal").forEach(L=>{L.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(D=>D.openCalendar(li(e),String(e.id)))})}),u.querySelectorAll(".m-chart-details-link").forEach(L=>{L.addEventListener("click",()=>{if(L.dataset.metricId==="irrigation"){ge(()=>import("./chart-fullscreen-Cx9wG9JP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(T=>T.initChartFullscreen({linkedSensorIds:i,metricId:"irrigation",backLabel:e.name,parcel:e}));return}const D=+L.dataset.sensorId,z=ce.find(T=>T.id===D);z&&ge(()=>import("./chart-fullscreen-Cx9wG9JP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(T=>T.initChartFullscreen({sensor:z,linkedSensorIds:i,metricId:L.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),(y=u.querySelector(".m-il-detail-btn"))==null||y.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>Os),void 0).then(L=>L.openIrrelisDetail(e))}),u.querySelectorAll(".m-msr-add-btn").forEach(L=>{L.addEventListener("click",()=>na(L))}),u.addEventListener("click",L=>{const D=L.target.closest(".m-cumul-add-btn");if(D){const T=D.dataset.cumulMetricId,V=D.dataset.cumulVal,ne=Go[T];if(!ne)return;const te=document.createElement("div");te.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${ne.metricLabel}</strong> (<em>${V}</em>) au tableau de bord de <strong>${e.name}</strong> ?</div>`,ue({title:"Tableau de bord",body:te,doneLabel:"Ajouter",onDone:()=>{const J=T==="hf"?{cold:Ae.hfSeuil}:T==="dj"?{low:Ae.djMin,high:Ae.djMax}:null;if(Us({metricId:T,...ne,subjectKey:`p-${e.id}`,subjectLabel:e.name,fromDate:`${new Date().getFullYear()}-01-01`,value:V,thresholds:J})==="max"){K("Maximum de cumuls atteint (5)");return}K("Cumul ajouté au tableau de bord")}});return}const z=L.target.closest(".m-cumul-edit-btn");if(z){const T=z.dataset.cumulMetricId,V=document.createElement("div");T==="hf"?(V.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Ae.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:V,doneLabel:"Appliquer",onDone:()=>{var ne;Ae.hfSeuil=+(((ne=V.querySelector("#edit-hf-seuil"))==null?void 0:ne.value)??7.2),S()}})):T==="dj"&&(V.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Ae.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Ae.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:V,doneLabel:"Appliquer",onDone:()=>{var ne,te;Ae.djMin=+(((ne=V.querySelector("#edit-dj-min"))==null?void 0:ne.value)??0),Ae.djMax=+(((te=V.querySelector("#edit-dj-max"))==null?void 0:te.value)??18),S()}}));return}}),u.querySelectorAll("[data-open-sensor]").forEach(L=>{L.addEventListener("click",()=>{const D=+L.dataset.openSensor,z=ce.find(T=>T.id===D);z&&ge(()=>Promise.resolve().then(()=>Ai),void 0).then(T=>T.initSensorDetail(z,"donnees",Et))})}),u.querySelectorAll(".btn-sensor-more").forEach(L=>{L.addEventListener("click",D=>{D.stopPropagation();const z=+L.dataset.sensorId,T=ce.find(J=>J.id===z);if(!T)return;const V=T.model==="P+"||T.model==="PT"?"Station météo":T.model==="P"?"Pluviomètre":T.model,ne=document.createElement("div");ne.innerHTML=`
          <div style="padding:8px 0">
            <button id="sheet-open-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;text-align:left">
              <i class="bi bi-broadcast" style="color:#0172A4;width:22px;text-align:center"></i>Voir la fiche capteur
            </button>
            <div style="height:.5px;background:rgba(0,0,0,.1);margin:0 20px"></div>
            <button id="sheet-unlink-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;color:#ff3b30;text-align:left">
              <i class="bi bi-x-circle" style="width:22px;text-align:center"></i>Délier de cette parcelle
            </button>
          </div>`;const te=ue({title:`${V} · ${T.serial}`,body:ne,doneLabel:"Fermer",onDone:()=>{}});ne.querySelector("#sheet-open-sensor").addEventListener("click",()=>{te.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{te.remove(),ge(()=>Promise.resolve().then(()=>Ai),void 0).then(J=>J.initSensorDetail(T,"donnees",Et))},280)}),ne.querySelector("#sheet-unlink-sensor").addEventListener("click",()=>{te.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{te.remove(),Vt({title:"Délier le capteur",message:`Délier <strong>${V} — ${T.serial}</strong> de <strong>${e.name}</strong> ?`,confirmLabel:"Délier",confirmColor:"#ff3b30",onConfirm:()=>{const J=i.indexOf(z);J!==-1&&i.splice(J,1),T.parcelIds=T.parcelIds.filter(ie=>ie!==e.id),S(),K(`${T.serial} délié`)}})},280)})})}),u.querySelectorAll(".m-list-row[data-action]").forEach(L=>{L.addEventListener("click",()=>{if(L.dataset.action==="edit-exploitation")m();else if(L.dataset.action==="edit-name")b();else if(L.dataset.action==="edit-crop")x();else if(L.dataset.action==="edit-variety")f();else if(L.dataset.action==="edit-stade")h();else if(L.dataset.action==="edit-env")l();else if(L.dataset.action==="edit-irrigation")v();else if(L.dataset.action==="edit-volume-max")C();else if(L.dataset.action==="edit-texture")d();else if(L.dataset.action==="edit-integrations")E();else if(L.dataset.action==="delete-parcel"){const D=document.createElement("div");D.innerHTML=`
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
          `;const z=ue({title:"Supprimer la parcelle ?",body:D,doneLabel:"Annuler",onDone:()=>{}});D.querySelector("#do-delete-parcel").addEventListener("click",()=>{z.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{z.remove(),yn(e.id,le),fe(),window.dispatchEvent(new CustomEvent("parcel-deleted",{detail:{id:e.id}}))},280)})}else K("Fonctionnalité à venir")})}),u.querySelectorAll(".m-widget-menu").forEach(L=>{L.addEventListener("click",D=>{var J;D.stopPropagation();const z=L.dataset.wid;if(!z)return;(J=u.querySelector(".m-widget-dd"))==null||J.remove();const T=document.createElement("div");T.className="m-widget-dd",T.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:180px",T.innerHTML=`<button class="m-widget-dd-remove" data-wid="${z}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const V=u.querySelector(".m-detail-content"),ne=L.getBoundingClientRect(),te=V.getBoundingClientRect();T.style.top=`${ne.bottom-te.top+V.scrollTop+4}px`,T.style.right=`${te.right-ne.right}px`,V.style.position="relative",V.appendChild(T),T.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{T.remove();const ie=Wt(e,i).filter(pe=>pe!==z);tn(e.id,ie),S()}),setTimeout(()=>document.addEventListener("click",()=>T.remove(),{once:!0}),0)})}),($=u.querySelector(".m-add-widget-btn"))==null||$.addEventListener("click",()=>Ko(e,i,S)),(g=u.querySelector(".m-irrig-act-saisie"))==null||g.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(L=>L.openIrrigationSaisie(li(e),K,{ids:[e.id],label:e.name},!0,S))}),(q=u.querySelector(".m-irrig-act-saison"))==null||q.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>et),void 0).then(L=>L.openIrrigationStrategie(li(e),K,{ids:[e.id],label:e.name},null,!0,S))}),(j=u.querySelector(".m-irrig-set-type"))==null||j.addEventListener("click",()=>{a="params",u.querySelectorAll(".m-detail-tab").forEach(L=>L.classList.toggle("active",L.dataset.view==="params")),S(),v()}),u.querySelectorAll(".m-pcumul-del").forEach(L=>{L.addEventListener("click",D=>{D.stopPropagation();const z=+L.dataset.pid,T=ct(z),V=new Set(T.hidden||[]);V.add(L.dataset.cid),Dt(z,{hidden:[...V]}),S()})}),u.querySelectorAll(".m-pcumul-date").forEach(L=>{L.addEventListener("click",()=>{var D;return(D=L.showPicker)==null?void 0:D.call(L)}),L.addEventListener("change",()=>{const D=+L.dataset.pid,z=L.dataset.cid,T=L.value;if(!T||(Date.now()-new Date(T))/864e5>365)return;const te=ct(D).dates||{};te[z]=T,Dt(D,{dates:te});const J=L.closest(".m-cumuls-saved-card"),ie=J==null?void 0:J.querySelector(".m-pcumul-value");if(ie){const pe=J.querySelector(".m-pcumul-unit"),Le=(pe==null?void 0:pe.textContent.trim())||"",ke=it(D,z,T);ie.innerHTML=`${ke}<span class="m-pcumul-unit">${Le}</span>`}})}),u.querySelectorAll(".m-pcumul-cfg").forEach(L=>{L.addEventListener("click",D=>{var ie;D.stopPropagation();const z=+L.dataset.pid,T=L.dataset.cid,ne={...ct(z).cfg},te=ca[T];if(!te)return;(ie=u.querySelector(".m-pcumul-cfg-panel"))==null||ie.remove();const J=document.createElement("div");J.className="m-pcumul-cfg-panel",J.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",J.innerHTML=te.map(pe=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${pe.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${pe.key}" value="${ne[pe.key]??pe.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',L.closest(".m-cumuls-saved-card").after(J),J.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{J.querySelectorAll(".m-pcumul-cfg-inp").forEach(pe=>{ne[pe.dataset.key]=parseFloat(pe.value)||0}),Dt(z,{cfg:ne}),J.remove(),S()})})}),u.querySelectorAll(".m-pcumul-add").forEach(L=>{L.addEventListener("click",D=>{D.stopPropagation();const z=+L.dataset.pid,T=L.dataset.cid,V=ct(z),ne=new Set(V.hidden||[]);ne.delete(T),Dt(z,{hidden:[...ne]}),S()})})}u.querySelectorAll(".m-detail-tab").forEach(A=>{A.addEventListener("click",()=>{u.querySelectorAll(".m-detail-tab").forEach(M=>M.classList.remove("active")),A.classList.add("active"),a=A.dataset.view,S()})}),u.querySelector(".m-detail-back").addEventListener("click",fe),u.querySelector("#d-star").addEventListener("click",()=>{p=!p;const A=u.querySelector("#d-star");A.querySelector("i").className=p?"bi bi-star-fill":"bi bi-star",A.style.color=p?"#f5c842":"",K(p?"Ajouté aux favoris":"Retiré des favoris")}),u.querySelector("#d-plus").addEventListener("click",()=>{var A;(A=window.showMobileAddPage)==null||A.call(window)}),u.querySelector("#d-journal").addEventListener("click",()=>ka(e)),S()}function xa(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}const $a=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"],ki=e=>{const[i,t,o]=e.split("-");return`${o}/${t}/${i}`};function wa(e){const i=[],t=(n,a)=>i.push({id:`auto-mod-${n}-${a.slice(0,16)}`,type:"modification",date:n,texte:a,_system:!0});t("2024-01-01","Création de la parcelle"),e.crop&&t("2024-03-15",`Culture définie : ${e.crop}`);const o=e.substrate?`Substrat : ${e.substrate}`:e.texture;return o&&t("2024-03-15",`Texture de sol définie : ${o}`),e.irrigation&&t("2024-04-01",`Type d'irrigation défini : ${e.irrigation}`),i}function Sa(e){const i=[],t=me.filter(n=>n.plotId===e);t.filter(n=>!n.fromStrategy).forEach(n=>{i.push({id:`auto-irrig-${n.iso}-${n.mm}`,type:"irrigation",date:n.iso,texte:n.real?`Irrigation ponctuelle de ${n.mm} mm enregistrée.`:`Irrigation ponctuelle de ${n.mm} mm planifiée.`,_system:!0})});const o=new Map;return t.filter(n=>n.fromStrategy&&n.seasonId).forEach(n=>{o.has(n.seasonId)||o.set(n.seasonId,[]),o.get(n.seasonId).push(n)}),o.forEach((n,a)=>{n.sort((u,m)=>u.iso.localeCompare(m.iso));const s=n[0],r=n[n.length-1],p=s.mm,c=n.length>1?Math.round((new Date(n[1].iso)-new Date(n[0].iso))/864e5):7;i.push({id:`auto-irrig-season-${a}`,type:"irrigation",date:s.iso,texte:`Saison d'irrigation programmée : ${p} mm tous les ${c} jours, du ${ki(s.iso)} au ${ki(r.iso)} (${n.length} irrigation${n.length>1?"s":""}, ${n.length*p} mm au total).`,_system:!0})}),i}function ka(e){const i=ye.find(a=>a.id===e.orgId),t=(i==null?void 0:i.ville)||"",o=xe(`
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
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);o.querySelector(".m-detail-back").addEventListener("click",fe);function n(){var v,l;const a=o.querySelector("#mjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(d=>d.linkedType==="parcel"&&d.linkedId===e.id).map((d,b)=>({id:`dash-${b}`,type:"note",date:d.date,texte:d.text,auteur:d.auteur,role:d.role,_fromDashboard:!0})),r=[...wa(e),...Sa(e.id)],p=[...Jt(e.id),...s,...r].sort((d,b)=>b.date.localeCompare(d.date)),c=ki,u={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotColor:"#1d4ed8",dotBg:"#eff6ff",badgeCls:"irrigation"},integration:{label:"Intégration",icon:"bi-plug-fill",dotColor:"#7a4fa0",dotBg:"#f5f0fb",badgeCls:"integration"},modification:{label:"Modification",icon:"bi-pencil-square",dotColor:"#7a6a1e",dotBg:"#fdf8ee",badgeCls:"modification"}};let m=`
      <div style="padding:12px 16px 4px;display:flex;flex-direction:column;gap:8px">
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-note">
          <i class="bi bi-pencil-square"></i> Ajouter une note
        </button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-trait">
          <i class="bi bi-eyedropper"></i> Ajouter un traitement
        </button>
      </div>
    `;p.length===0?m+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(m+='<div class="m-jrn-timeline">',p.forEach((d,b)=>{const f=u[d.type]||u.note,x=d.type==="traitement",h=b===p.length-1,w=!!d._fromDashboard,C=!!d._system;m+=`
          <div class="m-jrn-entry" data-id="${d.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${f.dotBg};color:${f.dotColor};border-color:${f.dotColor}40">
                <i class="bi ${f.icon}"></i>
              </div>
              ${h?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${c(d.date)}</span>
                <span class="journal-type-badge journal-type-badge--${f.badgeCls}">${f.label}</span>
                ${w?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':C?"":`<button class="m-jrn-del" data-id="${d.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${d.texte?`<div class="m-jrn-texte">${d.texte}</div>`:""}
              ${d.auteur?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${d.auteur}${xa(d.role)}</div>`:""}
              ${x&&(d.produit||d.dose||d.cible)?`
                <div class="m-jrn-meta">
                  ${d.produit?`<span class="m-jrn-chip"><i class="bi bi-flask"></i>${d.produit}</span>`:""}
                  ${d.dose?`<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${d.dose}</span>`:""}
                  ${d.cible?`<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${d.cible}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),m+="</div>"),a.innerHTML=m,(v=a.querySelector("#mjrn-add-note"))==null||v.addEventListener("click",()=>ms("note",e.id,n)),(l=a.querySelector("#mjrn-add-trait"))==null||l.addEventListener("click",()=>ms("traitement",e.id,n)),a.querySelectorAll(".m-jrn-del").forEach(d=>{d.addEventListener("click",()=>{const b=parseInt(d.dataset.id);Ti(e.id,Jt(e.id).filter(f=>f.id!==b)),n()})})}n()}function ms(e,i,t){const o=e==="traitement",n=new Date().toISOString().slice(0,10),a=Et==="admin"?"conseiller":"membre",s=ye.find(c=>c.id===(Et==="admin"?100:1)),r=s?`${s.prenomProprietaire} ${s.nomProprietaire}`:"Jean Dupont",p=document.createElement("div");p.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:12px">
      ${o?"":`
      <div>
        <div class="m-form-label">Catégorie</div>
        <select class="m-sheet-input" id="mjf-category">
          ${$a.map(c=>`<option value="${c}">${c}</option>`).join("")}
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
    </div>`,ue({title:o?"Ajouter un traitement":"Ajouter une note",body:p,doneLabel:"Enregistrer",onDone:()=>{var l;const c=p.querySelector("#mjf-date").value||n,u=p.querySelector("#mjf-texte").value.trim(),m=o?"":((l=p.querySelector("#mjf-category"))==null?void 0:l.value)||"",v={id:Date.now(),type:e,date:c,texte:u,auteur:r,role:a};o||(v.category=m),o&&(v.produit=p.querySelector("#mjf-produit").value.trim(),v.dose=p.querySelector("#mjf-dose").value.trim(),v.cible=p.querySelector("#mjf-cible").value.trim()),!(!u&&!v.produit)&&(Ti(i,[v,...Jt(i)]),t())}}),setTimeout(()=>{var c;return(c=p.querySelector("#mjf-texte"))==null?void 0:c.focus()},380)}const ut=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:Si},Symbol.toStringTag,{value:"Module"})),bt=100,Ea={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function ht(e,i){if(i==="irrelis")return Mt(e);const t=Ea[i];return t?ce.some(o=>o.parcelIds.includes(e.id)&&t.includes(o.model)):!0}const Ft=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"nrs",label:"Niveau de réservoir (spatialisé)",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Hier"],defaultAgg:"7 derniers jours"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"},{id:"irrelis",label:"Irré-LIS",unit:"mm",aggs:["Aujourd'hui","Demain","J+3","J+5"],defaultAgg:"Aujourd'hui"}];function La(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function vs(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"irrigation":return i===0?"#c7c7cc":i<30?"#FFDFB8":"#FF8C00";case"etp":return i<2?"#D6EDF9":i<5?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"temp_rosee":return i<5?"#D2DEFA":i<12?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"rfu":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"nrs":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";case"irrelis":return i>=35?"#24B066":i>=12?"#E8A020":"#E05252";default:return"#0172A4"}}function Ca(e,i){const t=new Date().toISOString().split("T")[0],o=s=>{const r=new Date;return r.setDate(r.getDate()-s),r.toISOString().split("T")[0]},n=s=>{const r=new Date;return r.setDate(r.getDate()+s),r.toISOString().split("T")[0]},a=me.filter(s=>s.plotId===e);switch(i){case"Aujourd'hui":return a.filter(s=>s.iso===t).reduce((s,r)=>s+r.mm,0);case"7 derniers jours":return a.filter(s=>s.real&&s.iso>=o(7)).reduce((s,r)=>s+r.mm,0);case"30 derniers jours":return a.filter(s=>s.real&&s.iso>=o(30)).reduce((s,r)=>s+r.mm,0);case"Demain":return a.filter(s=>!s.real&&s.iso===n(1)).reduce((s,r)=>s+r.mm,0);case"7 prochains jours":return a.filter(s=>!s.real&&s.iso>t&&s.iso<=n(7)).reduce((s,r)=>s+r.mm,0);case"30 prochains jours":return a.filter(s=>!s.real&&s.iso>t&&s.iso<=n(30)).reduce((s,r)=>s+r.mm,0);case"Toute la saison":return a.filter(s=>s.real).reduce((s,r)=>s+r.mm,0);default:return a.filter(s=>s.real).reduce((s,r)=>s+r.mm,0)}}function Aa(e){switch(e){case"irrigation":return 0;case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"nrs":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Ma(e,i){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const o=i==="admin",n=ye.filter(h=>h.id!==bt);Object.fromEntries(ye.map(h=>[h.id,h]));let a=null,s=null;const r={};let p="carte",c="pluie",u="7 derniers jours",m="all";function v(h){if(c==="irrigation")return Ca(h,u);if(c==="irrelis"){const C=le.find(P=>P.id===h);return C?Math.round(Ii(C,u)):0}const w=`${h}-${c}-${u}`;return w in r||(r[w]=Aa(c)),r[w]}function l(){return i==="new"||i==="new-adherent"?[]:o?m==="all"?le:m===String(bt)?le.filter(h=>h.orgId===bt):le.filter(h=>String(h.orgId)===m):le.filter(h=>h.orgId===1)}function d(){if(a){try{a.remove()}catch{}a=null,s=null}}function b(){d();const h=Ft.find(S=>S.id===c)||Ft[0],w=l(),C=o?`
      <select class="m-filter-select" id="org-filter" style="flex:0 0 44px;height:44px">
        <option value="all">Toutes les organisations</option>
        <option value="${bt}"${m===String(bt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${n.map(S=>`<option value="${S.id}"${m===String(S.id)?" selected":""}>${S.name}</option>`).join("")}
      </select>`:"",P=[...w].sort((S,_)=>{const F=ht(S,c),A=ht(_,c);return F&&!A?-1:!F&&A?1:F?v(_.id)-v(S.id):S.name.localeCompare(_.name,"fr")}),E=P.length?`<div class="m-plain-list">${P.map(S=>{var I,k,y;const _=((I=S.latlngs)==null?void 0:I.length)>0||((k=S.shape)==null?void 0:k.type)==="polygon"||((y=S.shape)==null?void 0:y.type)==="rectangle",F=[S.crop,S.irrigation,_&&S.area?`${S.area} ha`:null].filter(Boolean).join(" · "),A=ht(S,c),M=ce.filter($=>$.parcelIds.includes(S.id)).some($=>$.event&&(Array.isArray($.event)?$.event.length>0:!0));return`
            <div class="m-plain-row m-tappable" data-plot-id="${S.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${S.name}${M?' <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px"></span>':""}</span>
                ${F?`<span class="m-plain-city">${F}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                ${(()=>{const $=A&&!(c==="irrigation"&&!me.some(q=>q.plotId===S.id)),g=$?v(S.id):null;return`<span class="m-plain-data${$?"":" m-plain-na"}"${$?` style="color:${vs(c,g)}"`:""}>${$?`${g} ${h.unit}`:"—"}</span>`})()}
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
            ${Ft.map(S=>`<option value="${S.id}"${S.id===c?" selected":""}>${S.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${h.aggs.map(S=>`<option${S===u?" selected":""}>${S}</option>`).join("")}
          </select>
        </div>
        ${C}
      </div>
      ${p==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${E}</div>`}`,x(),p==="carte"&&f(w,h)}function f(h,w){const C=window.L;C&&setTimeout(()=>{const P=t.querySelector("#parcel-map");if(!P)return;if(a=C.map(P,{zoomControl:!1,attributionControl:!1}),C.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(a),!h.length&&(i==="new"||i==="new-adherent")){const S=ye.find(A=>A.id===1);S&&a.setView([S.lat,S.lng],13),a.invalidateSize();const _=P.parentElement;_.style.position="relative";const F=document.createElement("div");F.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",F.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-geo-alt" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de parcelle</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Créez votre première parcelle pour commencer à suivre vos cultures.</p>
            <button id="empty-create-parcel-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Créer une parcelle</button>
          </div>`,_.appendChild(F),_.querySelector("#empty-create-parcel-btn").addEventListener("click",()=>{var A;return(A=window.showMobileAddPage)==null?void 0:A.call(window)});return}const E=[];h.forEach(S=>{var q;const _=c!=="irrigation"||me.some(j=>j.plotId===S.id),F=ht(S,c)&&_?`${v(S.id)} ${w.unit}`:"—",A=ce.filter(j=>j.parcelIds.includes(S.id)).map(j=>j.id),M=()=>Si(S,A),I=[S.lat,S.lng],k=ht(S,c)&&_,y=k?vs(c,v(S.id)):"#0172A4";S.latlngs&&S.latlngs.length>=3?(C.polygon(S.latlngs,{color:"#fff",weight:2,fillColor:y,fillOpacity:.35}).addTo(a).on("click",M),E.push(...S.latlngs)):E.push(I);const $=C.circleMarker(I,{radius:k?8:6,color:"#fff",weight:2,fillColor:y,fillOpacity:k?.95:.4}).addTo(a);if(A.some(j=>{const L=ce.find(D=>D.id===j);return(L==null?void 0:L.event)&&(Array.isArray(L.event)?L.event.length>0:!0)})&&C.marker(I,{icon:C.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(a),k){$.bindTooltip(F,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const j=D=>{if(!D)return;const z=La(y);D.style.setProperty("background",y,"important"),D.style.setProperty("color",z,"important"),D.style.setProperty("border-color",z,"important"),D.style.setProperty("box-shadow","none","important")},L=(q=$.getTooltip())==null?void 0:q.getElement();L&&j(L),$.on("tooltipopen",D=>j(D.tooltip.getElement()))}$.on("click",M)}),E.length&&(s=E,a.fitBounds(E,{padding:[32,32]})),a.invalidateSize()},0)}window.addEventListener("m-tab-change",h=>{h.detail==="parcelles"&&p==="carte"&&a&&setTimeout(()=>{a.invalidateSize(),s!=null&&s.length&&a.fitBounds(s,{padding:[32,32]})},50)});function x(){var h,w,C;t.querySelectorAll(".m-view-btn").forEach(P=>P.addEventListener("click",()=>{p=P.dataset.view,b()})),(h=t.querySelector("#metric-sel"))==null||h.addEventListener("change",P=>{var E;c=P.target.value,u=((E=Ft.find(S=>S.id===c))==null?void 0:E.defaultAgg)||"",b()}),(w=t.querySelector("#agg-sel"))==null||w.addEventListener("change",P=>{u=P.target.value,b()}),(C=t.querySelector("#org-filter"))==null||C.addEventListener("change",P=>{m=P.target.value,b()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(P=>{P.addEventListener("click",()=>{const E=le.find(_=>_.id===+P.dataset.plotId);if(!E)return;const S=ce.filter(_=>_.parcelIds.includes(E.id)).map(_=>_.id);Si(E,S)})})}b()}const Me={djMin:0,djMax:18,hfSeuil:7.2},Ta={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"}},Ia=4,qa={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},Pa={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"},ja={"cuillère bloquée":{icon:"bi-droplet-fill",summary:"La cuillère du pluviomètre ne se déverse pas correctement. Les mesures de pluie peuvent être inexactes ou nulles.",causes:["Feuilles, insectes ou toiles d'araignées obstruant l'entonnoir","Corps étranger bloquant l'axe de rotation de la cuillère","Dépôts calcaires ou algues dans le mécanisme","Capteur installé hors niveau (non vertical)","Gel partiel du mécanisme en période froide"],solutions:[{n:1,title:"Inspecter l'entonnoir",desc:"Retirez toute feuille, insecte ou débris présent dans l'entonnoir. Inspectez visuellement la cuillère."},{n:2,title:"Tester la cuillère manuellement",desc:"Appuyez alternativement sur chaque compartiment de la cuillère : elle doit basculer librement d'un côté à l'autre."},{n:3,title:"Rincer à l'eau claire",desc:"Versez lentement de l'eau claire dans l'entonnoir. Évitez les détergents qui pourraient laisser des résidus affectant les mesures."},{n:4,title:"Vérifier la verticalité",desc:"Assurez-vous que le mat ou le support est bien vertical à l'aide d'un niveau à bulle. Une inclinaison de 5° peut bloquer la cuillère."},{n:5,title:"Observer les prochaines pluies",desc:"Si l'anomalie persiste après la prochaine pluie, comparez avec une station voisine. Contactez le support si nécessaire."}],diag:[{label:"Dernière mesure de pluie",hint:"Vérifiez si des pluies ont bien été comptabilisées récemment"},{label:"Station voisine",hint:"Comparez avec un autre capteur P ou P+ proche"},{label:"Historique nettoyage",hint:"Vérifiez le journal de maintenance du capteur"},{label:"Saison",hint:"Automne/hiver : vérifiez la présence de gel ou feuilles"}]},"capteur couché":{icon:"bi-phone-landscape",summary:"Le capteur a détecté une position anormale (inclinaison excessive). Les mesures météo peuvent être perturbées.",causes:["Coup de vent violent ayant renversé ou incliné le support","Choc accidentel (passage d'engins agricoles, animaux)","Support ou mat inadapté, insuffisamment ancré","Affaissement du sol après forte pluie","Neige ou givre ayant alourdi le capteur"],solutions:[{n:1,title:"Se rendre sur site",desc:"Vérifiez visuellement l'état du capteur et de son support."},{n:2,title:"Redresser et fixer le support",desc:"Remettez le mat en position verticale. Utilisez un niveau à bulle pour vérifier. Renforcez l'ancrage si nécessaire."},{n:3,title:"Vérifier l'intégrité du capteur",desc:"Inspectez le boîtier, l'antenne et les capteurs externes (anémomètre, girouette, pluvio) pour tout dommage visible."},{n:4,title:"Contrôler la qualité du signal",desc:"Après remise en place, vérifiez que les émissions reprennent normalement et que le signal est bon."},{n:5,title:"Signaler l'anomalie résolue",desc:`Utilisez le bouton "Arrêter" pour clore l'anomalie une fois le capteur en position correcte.`}],diag:[{label:"Qualité du signal",hint:"Un signal dégradé peut indiquer un problème d'antenne"},{label:"Date de l'anomalie",hint:"Correspond-elle à un épisode météo violent ?"},{label:"Type de support",hint:"Mat télescopique, piquet, fixation murale ?"},{label:"Accès terrain",hint:"Vérifiez si la parcelle est accessible (engins, conditions météo)"}]},"émissions interrompues":{icon:"bi-wifi-off",summary:"Le capteur n'émet plus de données. Aucune mesure n'a été reçue depuis un moment anormalement long.",causes:["Batterie déchargée ou défaillante","Perte de couverture réseau télécom (Sigfox / LoRa)","Obstruction physique du signal (bâtiment, relief, végétation)","Défaillance électronique interne","Exposition à l'eau ou à l'humidité excessive (joint endommagé)"],solutions:[{n:1,title:"Vérifier le niveau de batterie",desc:"Accédez aux paramètres du capteur et consultez l'indicateur de batterie. Si critique, procédez au remplacement."},{n:2,title:"Contrôler la couverture réseau",desc:"Vérifiez la carte de couverture Sigfox ou LoRa pour l'emplacement du capteur. Un déplacement de quelques mètres peut suffire."},{n:3,title:"Relancer manuellement",desc:"Sur certains modèles, un appui court sur le bouton d'activation peut forcer une tentative d'émission. Consultez la notice."},{n:4,title:"Inspecter l'étanchéité",desc:"Vérifiez l'état des joints et du boîtier. Une infiltration d'eau peut provoquer des courts-circuits."},{n:5,title:"Contacter le support",desc:"Si les étapes précédentes n'ont pas résolu le problème, le capteur peut nécessiter une réparation ou un remplacement."}],diag:[{label:"Dernière émission",hint:"Il y a combien de temps ? Heure/jour de la dernière trame reçue"},{label:"Couverture réseau",hint:"Vérifiez sur la carte de couverture opérateur"},{label:"Batterie",hint:"Niveau batterie lors de la dernière émission connue"},{label:"Météo récente",hint:"Orage, forte pluie, gel ayant pu affecter le capteur"}]},"capteur déplacé":{icon:"bi-geo-alt",summary:"Le capteur a été détecté à un emplacement différent de sa position habituelle.",causes:["Déplacement intentionnel non enregistré dans l'application","Vol ou déplacement non autorisé du capteur","Dérive GPS en cas de signal GNSS perturbé","Déplacement lors d'opérations agricoles (travaux, irrigation)"],solutions:[{n:1,title:"Vérifier la position actuelle",desc:"Rendez-vous sur site pour confirmer l'emplacement physique du capteur."},{n:2,title:"Mettre à jour la position",desc:"Si le capteur a été déplacé intentionnellement, mettez à jour sa géolocalisation dans les paramètres."},{n:3,title:"Signaler un vol",desc:"Si le capteur a disparu, contactez les autorités et le support Weenat pour signalement et désactivation."},{n:4,title:"Clore l'anomalie",desc:`Une fois la situation clarifiée, utilisez le bouton "Arrêter" pour clore l'événement.`}],diag:[{label:"Coordonnées initiales",hint:"Comparez avec les coordonnées enregistrées dans les paramètres"},{label:"Dernier passage",hint:"Qui a eu accès à la parcelle récemment ?"},{label:"Signal GPS",hint:"Un signal faible peut fausser la localisation sans déplacement réel"}]}};function za(e,i){const t=ja[e]||{summary:"Anomalie détectée sur ce capteur.",causes:["Cause inconnue — contactez le support pour plus d'informations."],solutions:[{n:1,title:"Contacter le support",desc:"Décrivez l'anomalie observée pour obtenir de l'aide."}]};let o="causes";function n(v,l,d){return`<button class="m-anom-tab" data-tab="${v}" style="flex:1;padding:10px 4px;background:none;border:none;border-bottom:2px solid ${d?"#0172A4":"transparent"};font-size:13px;font-weight:${d?"600":"400"};color:${d?"#0172A4":"#8e8e93"};cursor:pointer;font-family:inherit;white-space:nowrap">${l}</button>`}function a(){return`<ul style="margin:0;padding:0 0 0 18px;display:flex;flex-direction:column;gap:10px">
      ${t.causes.map(v=>`<li style="font-size:14px;color:#1c1c1e;line-height:1.5">${v}</li>`).join("")}
    </ul>`}function s(){return t.solutions.map(v=>`
      <div style="display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid #f2f2f7">
        <div style="min-width:28px;height:28px;border-radius:50%;background:#0172A4;color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${v.n}</div>
        <div>
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;margin-bottom:3px">${v.title}</div>
          <div style="font-size:13px;color:#636366;line-height:1.5">${v.desc}</div>
        </div>
      </div>`).join("")}function r(){return`<div style="display:flex;flex-direction:column;gap:12px">
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
        ${n("causes","Causes",o==="causes")}
        ${n("solutions","Solutions",o==="solutions")}
        ${n("support","Support",o==="support")}
      </div>`}function c(){return o==="causes"?a():o==="solutions"?s():r()}const u=xe(`
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
        <div id="anom-content">${c()}</div>
      </div>
    </div>
  `);u.querySelector("#anom-back").addEventListener("click",fe);function m(){u.querySelectorAll(".m-anom-tab").forEach(v=>{v.addEventListener("click",()=>{o=v.dataset.tab,u.querySelector("#anom-tabs-bar").innerHTML=p(),u.querySelector("#anom-content").innerHTML=c(),m()})})}m()}const Ei={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Da={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"};function ji(e){return e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[30,60]:e==="CHP-60/90"?[45,90]:null}function fs(e,i){const t=Ei[e.model]?`${Ei[e.model]} · ${e.model}`:e.model,o=ji(e.model)&&e.depth!=null?`${e.depth} cm`:null;return[t,o,i].filter(Boolean).join(" · ")}const Ct={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function ln(e,i){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:i},(o,n)=>{const a=n/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,s))})}const cn={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Fa(e,i,t,o,n,a=20){const s=cn[e]||10080,r=new Date,p=v=>e==="1d"||e==="hier"?`${String(v.getHours()).padStart(2,"0")}h`:e==="365d"?v.toLocaleDateString("fr-FR",{month:"short"}):`${String(v.getDate()).padStart(2,"0")}/${String(v.getMonth()+1).padStart(2,"0")}`,c=4,u=i-t-o,m=n-a;return Array.from({length:c+1},(v,l)=>{const d=l/c,b=new Date(r.getTime()-(1-d)*s*6e4),f=(t+d*u).toFixed(1),x=l===0?"start":l===c?"end":"middle";return[`<line x1="${f}" y1="${m}" x2="${f}" y2="${m+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${f}" y="${n-3}" text-anchor="${x}" font-size="9" fill="#8e8e93" font-family="-apple-system">${p(b)}</text>`].join("")}).join("")}function _a(e,i,t,o="7d",n=""){const a=dn[o]||60,s=ln(e,a),r=320,p=100,c=34,u=6,m=10,v=20,l=r-c-u,d=p-m-v,b=t?0:Math.min(...s),f=Math.max(...s,b+.001),x=f-b,h=k=>c+k/(s.length-1)*l,w=k=>m+d-(k-b)/x*d,C=`g${Math.random().toString(36).slice(2,8)}`,P=[0,.5,1].map(k=>{const y=b+k*x,$=m+d-k*d;return`<text x="${c-3}" y="${($+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${y<10?y.toFixed(1):Math.round(y)}</text>`}).join(""),E=[.25,.5,.75].map(k=>`<line x1="${c}" y1="${(m+d-k*d).toFixed(1)}" x2="${r-u}" y2="${(m+d-k*d).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),S=`<line x1="${c}" y1="${m+d}" x2="${r-u}" y2="${m+d}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,_=Fa(o,r,c,u,p);if(t){const k=l/s.length*.7;return`<svg viewBox="0 0 ${r} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      ${P}${E}${S}
      ${s.map((y,$)=>{const g=(y-b)/x*d,q=m+d-g;return`<rect x="${(h($)-k/2).toFixed(1)}" y="${q.toFixed(1)}" width="${k.toFixed(1)}" height="${g.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${_}
    </svg>`}const F=s.map((k,y)=>[h(y),w(k)]),A=F.map(([k,y],$)=>`${$?"L":"M"}${k.toFixed(1)},${y.toFixed(1)}`).join(" "),M=`${A} L${h(s.length-1).toFixed(1)},${(m+d).toFixed(1)} L${c},${(m+d).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map(k=>+k.toFixed(2)),minV:+b.toFixed(2),maxV:+f.toFixed(2)}))}" data-color="${i}" data-unit="${n}" style="position:relative">
    <svg viewBox="0 0 ${r} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      <defs><linearGradient id="${C}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${P}${E}${S}
      <path d="${M}" fill="url(#${C})"/>
      <path d="${A}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${F.map(([k,y])=>`<circle cx="${k.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="${i}"/>`).join("")}
      ${_}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Ba(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function Ha(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t}=i,o=e.querySelector(".m-chart-tip"),n=e.querySelector(".m-chart-crosshair"),a=e.dataset.color||"#0172A4",s=e.dataset.unit||"";function r(c){const u=e.getBoundingClientRect(),m=Math.max(0,Math.min(1,(c-u.left)/u.width)),v=Math.round(m*(t.length-1)),l=t[v],d=m*100,b=(l<10?l.toFixed(1):String(Math.round(l)))+(s?` ${s}`:""),f=Ba(a);n.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${d}%;width:1px;background:${a};opacity:.5`,o.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(d,75)}%;background:${a};color:${f};border:1.5px solid ${f};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,o.textContent=b}function p(){n.style.display="none",o.style.display="none"}e.addEventListener("pointermove",c=>{c.preventDefault(),r(c.clientX)}),e.addEventListener("pointerdown",c=>r(c.clientX)),e.addEventListener("pointerup",p),e.addEventListener("pointerleave",p),e.style.cursor="crosshair"}const dn={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function Ra(e,i,t){if(!t)return"";const o=dn[i]||60,a=(cn[i]||10080)/(o*60),s=ln(e,o);let r=[];if(t==="temp"){const p=s.reduce((u,m)=>u+Math.max(0,Math.min(m,Me.djMax)-Me.djMin),0)*(a/24),c=s.filter(u=>u<Me.hfSeuil).length*a;r=[{label:"Degrés jours",val:`${Math.round(p)} DJ`,metricId:"dj",thresholdText:`${Me.djMin}°C → ${Me.djMax}°C`},{label:"Heures de froid",val:`${Math.round(c)} h`,metricId:"hf",thresholdText:`< ${Me.hfSeuil}°C`}]}else if(t==="pluie")r=[{label:"Cumul de pluie",val:`${s.reduce((c,u)=>c+u,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const p=s.filter(c=>c>120).length*a;r=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(p)} h`,metricId:"rayo"}]}else if(t==="hws"){const p=s.filter(c=>c>50).length*a;r=[{label:"Cumul d'heures d'humectation",val:`${Math.round(p)} h`,metricId:"humec"}]}return r.length?`<div class="m-chart-cumuls">${r.map(p=>{const c=p.metricId==="dj"||p.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${p.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
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
    </div>`}).join("")}</div>`:""}function Oa(e,i="7d",t="1h"){const o=Ct[e.model]||[];if(!o.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const n={temp:"temperature",tseche:"temp_seche",thumide:"temp_humide"},a={temp:"temperature"},s=new Set(["tseche","thumide"]),r=o.map(u=>{const m=n[u.id]||u.id,v=Ra(u.id,i,u.cumulsType),l=s.has(u.id)?"":`<button class="m-msr-add-btn" data-msr-metric-id="${a[u.id]||u.id}" data-msr-label="${u.label}" data-msr-unit="${u.unit||""}" data-msr-color="${u.color}" data-msr-period="${i}" data-msr-step="${t}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`;return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${u.color}">${u.label}</span>
          ${l}
        </div>
        ${_a(u.id,u.color,u.cumul,i,u.unit||"")}
        <div class="m-chart-details-link" data-metric-id="${m}">Voir détails →</div>
        ${v}
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
    <div class="m-detail-section">${r}</div>`}function Na(e){var p;const i=(e.parcelIds||[]).map(c=>le.find(u=>u.id===c)).filter(Boolean),t=i[0]||null,o=t?ye.find(c=>c.id===t.orgId):null,n=e.networkQuality||0,a=n>70?"#30d158":n>40?"#ff9f0a":"#ff3b30",s=e.event?Array.isArray(e.event)?e.event:[e.event]:[],r=i.map((c,u)=>`<div class="m-list-row${u===i.length-1&&i.length>0,""}" data-unlink-plot="${c.id}">
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
          <span class="m-list-row-value">${Da[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${Ei[e.model]||e.model}</span>
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

      ${(()=>{const c=ji(e.model);return c?`
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
        ${s.length?s.map((c,u)=>{const m=c.toLowerCase().includes("déplacé");return`<div class="m-list-row m-ev-row" data-ev-idx="${u}" style="justify-content:space-between;gap:10px;cursor:pointer">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;flex-shrink:0"></i>
                  <span class="m-list-row-label" style="color:#ff3b30">${c}</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
                  ${m?`<button class="ev-stop-btn" data-ev-idx="${u}" style="background:rgba(255,59,48,.1);border:1px solid #ff3b30;border-radius:8px;padding:5px 10px;font-size:12px;color:#ff3b30;font-family:inherit;cursor:pointer;white-space:nowrap">Arrêter</button>`:""}
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
                </div>
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
        ${r}
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
    </div>`}function Li(e,i="donnees",t="admin"){var l;e.parcelIds||(e.parcelIds=[]);const o=e.parcelIds.length?le.find(d=>e.parcelIds.includes(d.id)):null;let n=i,a="7d",s="1h",r=!1;const p=o&&((l=ye.find(d=>d.id===o.orgId))==null?void 0:l.ville)||"",c=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.serial}</div>
          <div class="m-detail-subtitle">${fs(e,p)}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres${e.event&&(!Array.isArray(e.event)||e.event.length>0)?' <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px;margin-bottom:1px;flex-shrink:0"></span>':""}</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function u(){const d=c.querySelector("#detail-content");n==="donnees"&&(d.innerHTML=Oa(e,a,s)),n==="params"&&(d.innerHTML=Na(e),m()),v()}function m(){const d=window.L,b=e.parcelIds.length?le.find(f=>e.parcelIds.includes(f.id)):null;!d||!b||setTimeout(()=>{const f=c.querySelector("#sensor-minimap");if(!f)return;const x=d.map(f,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});d.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(x),x.setView([b.lat,b.lng],15),d.circleMarker([b.lat,b.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(x)},50)}function v(){var d,b,f,x;(d=c.querySelector(".m-period-sel"))==null||d.addEventListener("change",h=>{a=h.target.value,u()}),(b=c.querySelector(".m-step-sel"))==null||b.addEventListener("change",h=>{s=h.target.value,u()}),c.querySelectorAll(".m-chart-svg-wrap").forEach(h=>Ha(h)),c.querySelectorAll(".m-chart-details-link[data-metric-id]").forEach(h=>{h.addEventListener("click",()=>{ge(()=>import("./chart-fullscreen-Cx9wG9JP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(w=>w.initChartFullscreen({sensor:e,metricId:h.dataset.metricId,backLabel:"Retour"}))})}),c.querySelectorAll(".m-msr-add-btn").forEach(h=>{h.addEventListener("click",()=>{const w=h.dataset.msrMetricId,C=`s-${e.id}`,P=`${e.model} ${e.serial}`,E=h.dataset.msrPeriod,S=h.dataset.msrStep,_=Gs({subjectKey:C,subjectLabel:P,metricId:w,metricLabel:h.dataset.msrLabel,unit:h.dataset.msrUnit||"",period:E,periodLabel:qa[E]||E,step:S,stepLabel:Pa[S]||S,color:h.dataset.msrColor});if(_==="max"){K(`Maximum de mesures atteint (${Ia})`);return}if(_==="dup"){K("Cette mesure est déjà dans vos favoris");return}K("Mesure ajoutée au tableau de bord")})}),c.addEventListener("click",h=>{const w=h.target.closest(".m-cumul-add-btn");if(w){const P=w.dataset.cumulMetricId,E=w.dataset.cumulVal,S=Ta[P];if(!S)return;const _=`${e.model} ${e.serial}`,F=document.createElement("div");F.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${S.metricLabel}</strong> (<em>${E}</em>) au tableau de bord du capteur <strong>${e.serial}</strong> ?</div>`,ue({title:"Tableau de bord",body:F,doneLabel:"Ajouter",onDone:()=>{const A=P==="hf"?{cold:Me.hfSeuil}:P==="dj"?{low:Me.djMin,high:Me.djMax}:null;if(Us({metricId:P,...S,subjectKey:`s-${e.id}`,subjectLabel:_,fromDate:`${new Date().getFullYear()}-01-01`,value:E,thresholds:A})==="max"){K("Maximum de cumuls atteint (5)");return}K("Cumul ajouté au tableau de bord")}});return}const C=h.target.closest(".m-cumul-edit-btn");if(C){const P=C.dataset.cumulMetricId,E=document.createElement("div");P==="hf"?(E.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Me.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:E,doneLabel:"Appliquer",onDone:()=>{var S;Me.hfSeuil=+(((S=E.querySelector("#edit-hf-seuil"))==null?void 0:S.value)??7.2),u()}})):P==="dj"&&(E.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Me.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Me.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:E,doneLabel:"Appliquer",onDone:()=>{var S,_;Me.djMin=+(((S=E.querySelector("#edit-dj-min"))==null?void 0:S.value)??0),Me.djMax=+(((_=E.querySelector("#edit-dj-max"))==null?void 0:_.value)??18),u()}}))}}),c.querySelectorAll(".m-list-row[data-action]").forEach(h=>{h.addEventListener("click",()=>{const w=h.dataset.action;if(w==="add-maintenance")bs(e,{openForm:!0});else if(w==="add-plot")Va(e,t,u);else if(w==="delete"){const C=le.find(P=>{var E;return(E=e.parcelIds)==null?void 0:E.includes(P.id)});Vt({title:"Retirer de l'exploitation",message:`Retirer <strong>${e.model} ${e.serial}</strong> de l'exploitation ?${C?`<br><br>Parcelle liée : <strong>${C.name}</strong>.`:""}<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>K("Capteur retiré de l'exploitation (fonctionnalité à venir)")})}else K("Fonctionnalité à venir")})}),c.querySelectorAll(".ev-stop-btn").forEach(h=>{h.addEventListener("click",w=>{w.stopPropagation();const C=+h.dataset.evIdx;Array.isArray(e.event)?(e.event=e.event.filter((P,E)=>E!==C),e.event.length||(e.event=null)):e.event=null,u()})}),c.querySelectorAll(".m-ev-row").forEach(h=>{h.addEventListener("click",w=>{if(w.target.closest(".ev-stop-btn"))return;const C=+h.dataset.evIdx,P=e.event?Array.isArray(e.event)?e.event:[e.event]:[];P[C]&&za(P[C],e)})}),c.querySelectorAll("[data-unlink-plot-btn]").forEach(h=>{h.addEventListener("click",w=>{w.stopPropagation();const C=+h.dataset.unlinkPlotBtn,P=le.find(E=>E.id===C);Vt({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${(P==null?void 0:P.name)||"la parcelle"}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(E=>E!==C),K(`Délié de ${(P==null?void 0:P.name)||"la parcelle"}`),u()}})})}),(f=c.querySelector("#sensor-name-input"))==null||f.addEventListener("change",h=>{const w=h.target.value.trim();try{const P=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};w?P[e.id]=w:delete P[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify(P))}catch{}const C=c.querySelector(".m-detail-title");C&&(C.textContent=w||e.serial),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))}),(x=c.querySelector("#chp-depth-save"))==null||x.addEventListener("click",()=>{const h=c.querySelector("#chp-depth-input"),w=ji(e.model);if(!h||!w)return;let C=parseInt(h.value);if(isNaN(C))return;C=Math.max(w[0],Math.min(w[1],C)),h.value=C,e.depth=C;const P=c.querySelector(".m-detail-subtitle");P&&(P.textContent=fs(e,p)),K(`Profondeur enregistrée : ${C} cm`)})}c.querySelectorAll(".m-detail-tab").forEach(d=>{d.addEventListener("click",()=>{c.querySelectorAll(".m-detail-tab").forEach(b=>b.classList.remove("active")),d.classList.add("active"),n=d.dataset.view,u()})}),c.querySelector(".m-detail-back").addEventListener("click",fe),c.querySelector("#d-star").addEventListener("click",()=>{r=!r;const d=c.querySelector("#d-star");d.querySelector("i").className=r?"bi bi-star-fill":"bi bi-star",d.style.color=r?"#f5c842":"",K(r?"Ajouté aux favoris":"Retiré des favoris")}),c.querySelector("#d-journal").addEventListener("click",()=>bs(e)),c.querySelector("#d-plus").addEventListener("click",()=>{var d;return(d=window.showMobileAddPage)==null?void 0:d.call(window)}),u()}const un=e=>`sensor-journal-${e}`,pn=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function Ci(e){try{const i=localStorage.getItem(un(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",role:"conseiller",texte:""},{id:2,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",role:"conseiller",texte:""},{id:3,type:"note",date:"2023-11-02",user:"Jean Dupont",role:"membre",texte:"Capteur légèrement déplacé — redressé"}]}function mn(e,i){localStorage.setItem(un(e),JSON.stringify(i))}function Va(e,i,t){const o=i==="adherent"?1:null,n=o?le.filter(c=>c.orgId===o):le.filter(c=>c.orgId!==100),a=new Set((Ct[e.model]||[]).map(c=>c.id)),s=document.createElement("div");s.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function r(c=""){const u=c.toLowerCase(),m=(u?n.filter(l=>l.name.toLowerCase().includes(u)||(l.crop||"").toLowerCase().includes(u)):n).slice().sort((l,d)=>l.name.localeCompare(d.name,"fr")),v=s.querySelector("#plot-list");if(!m.length){v.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}v.innerHTML="",m.forEach((l,d)=>{const b=e.parcelIds.includes(l.id),f=d===m.length-1,x=document.createElement("div");x.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${f?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,x.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${l.name}</span>
          ${l.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${l.crop}</span>`:""}
        </span>
        ${b?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,x.addEventListener("click",()=>{if(b)Vt({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${l.name}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(h=>h!==l.id),K(`Délié de ${l.name}`),r(c),t()}});else{const h=ce.find(w=>w.id!==e.id&&w.parcelIds.includes(l.id)&&(Ct[w.model]||[]).some(C=>a.has(C.id)));h?(p.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{p.remove(),Ja(e,l,h,t)},280)):(e.parcelIds=[...e.parcelIds,l.id],K(`Lié à ${l.name}`),r(c),t())}}),v.appendChild(x)})}r();const p=ue({title:"Parcelles liées",body:s,doneLabel:"Fermer",onDone:()=>{t()}});s.querySelector("#plot-search").addEventListener("input",c=>r(c.target.value))}function Ja(e,i,t,o){const n=(Ct[t.model]||[]).filter(r=>(Ct[e.model]||[]).some(p=>p.id===r.id)).map(r=>r.label).join(", "),a=document.createElement("div");a.innerHTML=`
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
    <div style="height:6px"></div>`;const s=ue({title:"Conflit de métrique",body:a,doneLabel:"Annuler",onDone:()=>{}});a.querySelector("#keep-existing").addEventListener("click",()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),K("Liaison annulée")},280)}),a.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(r=>r!==i.id),e.parcelIds=[...e.parcelIds,i.id],s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),K(`Lié à ${i.name}`),o()},280)})}function bs(e,i={}){const t=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",fe);const o=Object.fromEntries(pn.map(a=>[a.id,a]));function n(){var u;const a=t.querySelector("#sjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(m=>m.linkedType==="sensor"&&m.linkedId===e.id).map((m,v)=>({id:`dash-${v}`,type:"note",date:m.date,texte:m.text,user:m.auteur,_fromDashboard:!0})),r=[...Ci(e.id),...s].sort((m,v)=>v.date.localeCompare(m.date)),p=m=>{const[v,l,d]=m.split("-");return`${d}/${l}/${v}`};let c=`
      <div style="padding:12px 16px 8px">
        <button class="m-btn m-btn--primary" id="sjrn-add-btn">
          <i class="bi bi-plus-circle-fill"></i> Ajouter une opération de maintenance
        </button>
      </div>
    `;r.length===0?c+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(c+='<div class="m-jrn-timeline">',r.forEach((m,v)=>{const l=o[m.type]||{label:m.type,icon:"bi-circle",color:"#8e8e93"},d=v===r.length-1,b=!!m._fromDashboard;c+=`
          <div class="m-jrn-entry" data-id="${m.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${l.color}18;color:${l.color};border-color:${l.color}40">
                <i class="bi ${l.icon}"></i>
              </div>
              ${d?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${p(m.date)}</span>
                <span style="font-size:12px;font-weight:600;color:${l.color}">${l.label}</span>
                ${b?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':`<button class="m-jrn-del" data-id="${m.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${m.texte?`<div class="m-jrn-texte">${m.texte}</div>`:""}
              ${m.user?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${m.user}${Wa(m.role)}</div>`:""}
            </div>
          </div>`}),c+="</div>"),a.innerHTML=c,(u=a.querySelector("#sjrn-add-btn"))==null||u.addEventListener("click",()=>hs(e.id,n)),a.querySelectorAll(".m-jrn-del").forEach(m=>{m.addEventListener("click",()=>{const v=parseInt(m.dataset.id);mn(e.id,Ci(e.id).filter(l=>l.id!==v)),n()})})}n(),i.openForm&&hs(e.id,n)}function Wa(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}function hs(e,i){const t=new Date().toISOString().slice(0,10),o=document.createElement("div");o.innerHTML=`
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-form-label">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${pn.map(n=>`<option value="${n.id}">${n.label}</option>`).join("")}
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
    </div>`,ue({title:"Opération de maintenance",body:o,doneLabel:"Enregistrer",onDone:()=>{const n=o.querySelector("#sjf-type").value,a=o.querySelector("#sjf-date").value||t,s=o.querySelector("#sjf-user").value.trim()||"Jean Dupont",r=localStorage.getItem("menuRole")==="admin-reseau"?"conseiller":"membre",p=o.querySelector("#sjf-texte").value.trim();mn(e,[{id:Date.now(),type:n,date:a,user:s,role:r,texte:p},...Ci(e)]),i()}}),setTimeout(()=>{var n;return(n=o.querySelector("#sjf-texte"))==null?void 0:n.focus()},350)}const Ai=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:Li},Symbol.toStringTag,{value:"Module"})),gt=100,di=1,ui=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Ga={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Ua={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function _t(e,i){return(Ua[e]||[]).includes(i)}function Ya(e){return Ga[e]||e}function Za(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const Bt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Ka(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function gs(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"pothydr":return i<80?"#E2EAC7":i<150?"#A6C157":"#7D9537";case"teneur":return i<15?"#F7D2A1":i<30?"#ED9A2C":"#BC7210";case"temp_sol":return i<8?"#D9C6BF":i<18?"#795548":"#484646";case"temp_sche":return i<0?"#9DECDF":i<10?"#23B19B":"#177365";case"temp_hum":return i<0?"#D2DEFA":i<10?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function Xa(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Qa(e,i){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const o=i==="admin",n=ye.filter(E=>E.id!==gt),a=Object.fromEntries(le.map(E=>[E.id,E])),s=Object.fromEntries(ye.map(E=>[E.id,E]));let r=null,p=null;const c={};let u="carte",m="pluie",v="7 derniers jours",l="all";function d(E){const S=`${E}-${m}-${v}`;return S in c||(c[S]=Xa(m)),c[S]}function b(){if(i==="new"||i==="new-adherent")return[];if(o){if(l==="anomalies")return ce.filter(A=>A.event&&(Array.isArray(A.event)?A.event.length>0:!0));if(l==="all")return ce;if(l===String(gt)){const A=new Set(le.filter(M=>M.orgId===gt).map(M=>M.id));return ce.filter(M=>M.parcelIds.some(I=>A.has(I)))}const F=new Set(le.filter(A=>String(A.orgId)===l).map(A=>A.id));return ce.filter(A=>A.parcelIds.some(M=>F.has(M)))}const E=new Set(le.filter(F=>F.orgId===di).map(F=>F.id)),S=ce.filter(F=>F.parcelIds.some(A=>E.has(A))),_=ce.filter(F=>!F.parcelIds.some(A=>E.has(A))&&ui.includes(F.model));return l==="mine"?S:l==="network"?_:[...S,..._]}function f(E){const S=E.parcelIds.length?a[E.parcelIds[0]]:null;if(!S)return null;const _=(E.id*7919%1e3-500)/1e6,F=(E.id*6271%1e3-500)/1e6;return{lat:S.lat+_,lng:S.lng+F,name:S.name}}function x(E){var _,F;const S=E.parcelIds.length?a[E.parcelIds[0]]:null;return(S?(_=s[S.orgId])==null?void 0:_.ville:null)||((F=s[E.orgId])==null?void 0:F.ville)||null}function h(){if(r){try{r.remove()}catch{}r=null,p=null}}function w(){h();const E=Bt.find(I=>I.id===m)||Bt[0],S=b();let _;const F=ce.some(I=>I.event&&(Array.isArray(I.event)?I.event.length>0:!0));if(o)_=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${l==="all"?" selected":""}>Toutes les organisations</option>
            ${F?`<option value="anomalies"${l==="anomalies"?" selected":""}>⚠ Anomalies capteurs</option>`:""}
            <option value="${gt}"${l===String(gt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
            ${n.map(I=>`<option value="${I.id}"${l===String(I.id)?" selected":""}>${I.name}</option>`).join("")}
          </select>
        </div>`;else{const I=ye.find(k=>k.id===di);_=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${l==="all"?" selected":""}>Tous les capteurs du réseau</option>
            <option value="mine"${l==="mine"?" selected":""}>${(I==null?void 0:I.name)||"Mon exploitation"} uniquement</option>
          </select>
        </div>`}const A=[...S].sort((I,k)=>{const y=_t(I.model,m),$=_t(k.model,m);return y&&!$?-1:!y&&$?1:y?d(k.id)-d(I.id):0}),M=A.length?`<div class="m-plain-list">${A.map(I=>{const k=ui.includes(I.model),y=_t(I.model,m),$=y?d(I.id):null,g=y?`<span class="m-sensor-val" style="color:${gs(m,$)}">${$} ${E.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>',q=I.event&&(Array.isArray(I.event)?I.event.length>0:!0);return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${I.id}">
              <div class="m-sensor-icon" style="position:relative;background:${k?"#0172A420":"#5b8dd920"};color:${k?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
                ${q?'<span style="position:absolute;top:-3px;right:-3px;width:9px;height:9px;border-radius:50%;background:#ff3b30;border:1.5px solid #fff"></span>':""}
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${Ya(I.model)} - ${I.model}</span>
                <span class="m-sensor-sub">${[x(I),Za(I)].filter(Boolean).join(" - ")}</span>
                ${q?`<span style="font-size:11px;color:#ff3b30;font-weight:500"><i class="bi bi-exclamation-triangle-fill"></i> ${Array.isArray(I.event)?I.event[0]:I.event}</span>`:""}
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
            ${Bt.map(I=>`<option value="${I.id}"${I.id===m?" selected":""}>${I.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${E.aggs.map(I=>`<option${I===v?" selected":""}>${I}</option>`).join("")}
          </select>
        </div>
        ${_}
      </div>
      ${u==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${M}</div>`}`,P(),u==="carte"&&C(S,E)}function C(E,S){const _=window.L;_&&setTimeout(()=>{const F=t.querySelector("#sensor-map");if(!F)return;if(r=_.map(F,{zoomControl:!1,attributionControl:!1}),_.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(r),!E.length&&(i==="new"||i==="new-adherent")){const M=ye.find(y=>y.id===di);M&&r.setView([M.lat,M.lng],13),r.invalidateSize();const I=F.parentElement;I.style.position="relative";const k=document.createElement("div");k.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",k.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-broadcast" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de capteur</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Ajoutez votre premier capteur pour commencer à collecter des données.</p>
            <button id="empty-add-sensor-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Ajouter un capteur</button>
          </div>`,I.appendChild(k),I.querySelector("#empty-add-sensor-btn").addEventListener("click",()=>{var y;return(y=window.showMobileAddPage)==null?void 0:y.call(window)});return}const A=[];E.forEach(M=>{var q;const I=f(M);if(!I)return;const k=_t(M.model,m),y=ui.includes(M.model),$=k?gs(m,d(M.id)):y?"#0172A4":"#5b8dd9",g=_.circleMarker([I.lat,I.lng],{radius:k?10:7,color:"#fff",weight:2,fillColor:$,fillOpacity:k?.95:.45}).addTo(r);if(k){g.bindTooltip(`${d(M.id)} ${S.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const j=D=>{if(!D)return;const z=Ka($);D.style.setProperty("background",$,"important"),D.style.setProperty("color",z,"important"),D.style.setProperty("border-color",z,"important"),D.style.setProperty("box-shadow","none","important")},L=(q=g.getTooltip())==null?void 0:q.getElement();L&&j(L),g.on("tooltipopen",D=>j(D.tooltip.getElement()))}g.on("click",()=>Li(M,"donnees",i)),M.event&&(!Array.isArray(M.event)||M.event.length>0)&&_.marker([I.lat,I.lng],{icon:_.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(r),A.push([I.lat,I.lng])}),A.length&&(p=A,r.fitBounds(A,{padding:[32,32]})),r.invalidateSize()},0)}window.addEventListener("m-tab-change",E=>{E.detail==="capteurs"&&(w(),u==="carte"&&r&&setTimeout(()=>{r.invalidateSize(),p!=null&&p.length&&r.fitBounds(p,{padding:[32,32]})},50))});function P(){var E,S,_;t.querySelectorAll(".m-view-btn").forEach(F=>F.addEventListener("click",()=>{u=F.dataset.view,w()})),(E=t.querySelector("#metric-sel"))==null||E.addEventListener("change",F=>{var A;m=F.target.value,v=((A=Bt.find(M=>M.id===m))==null?void 0:A.defaultAgg)||"",w()}),(S=t.querySelector("#agg-sel"))==null||S.addEventListener("change",F=>{v=F.target.value,w()}),(_=t.querySelector("#org-filter"))==null||_.addEventListener("change",F=>{l=F.target.value,w()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(F=>{F.addEventListener("click",()=>{const A=ce.find(M=>M.id===+F.dataset.sensorId);A&&Li(A,"donnees",i)})})}w(),window.addEventListener("weenat-sensor-renamed",()=>{u==="liste"&&w()})}const er=["Essentiel","Plus","Expert"],tr=["Administrateur","Agent","Lecteur"],ys=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function ir(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")}function sr(e){const i=(e||"").match(/(\d{5})/);if(i){const t=e.indexOf(i[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:i[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function xs({rue:e,cp:i,ville:t}){return[e,i&&t?`${i} ${t}`:i||t].filter(Boolean).join(", ")}function Ht(e){if(!e)return"—";const[i,t,o]=e.split("-");return`${o}/${t}/${i}`}function $s(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let o=11;o>=0;o--){const n=new Date(i.getFullYear(),i.getMonth()-o,1),a=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),r=o>0?o===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${a}-${s}`,dateEmission:`${a}-${s}-01`,montant:n.getMonth()===11?1980:t[o%t.length],statut:r})}return e.reverse()}function nr(e,i){var k;if(!e)return{};const t=i==="admin",o=i==="new-member-admin"||i==="new-member-agent"||i==="new-member-reader",n=i!=="new-member-reader",a=t?[{id:"100",name:"Breiz'Agri Conseil"},{id:"42",name:"Exploitation Dupont"}]:o?[]:[{id:"1",name:"Ferme du Bocage"},{id:"dutilleul",name:"Exploitation Dutilleul"}];let s=((k=a[0])==null?void 0:k.id)??null;const r=ye.find(y=>y.id===(t?ei:Di));if(!r)return{};const c=(t?ti.filter(y=>{var $;return!(($=y.orgIds)!=null&&$.length)||y.orgIds.includes(ei)}):ti.filter(y=>{var $;return($=y.orgIds)==null?void 0:$.includes(Di)})).filter(y=>y.statut!=="inactif").map(y=>({...y})),u=ye.filter(y=>y.id!==ei&&y.statut!=="inactif").length,m=sr(r.adresse||""),v={rue:"",cp:"",ville:""},l={name:r.name,siret:r.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:m,adresseLivrai:v,copieFactures:r.copieFactures||"",pays:"France",markerLat:r.lat||48.117,markerLng:r.lng||-1.678,plan:r.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":r.codeAdherent||"CTR-2022-00418",dateAdhesion:r.dateAdhesion||"2022-03-15",licencesMembres:t?ti.length:3,licencesAdherents:t?u:null,licencesIntegrations:t?27:2}};let d=null,b=null;function f(){if(!b)return;const y=e.querySelector(`#${b}`);if(!y)return;if(d){try{d.remove()}catch{}d=null}const $=window.L;$&&(d=$.map(y,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),$.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(d),d.setView([l.markerLat,l.markerLng],14),$.marker([l.markerLat,l.markerLng],{draggable:!1}).addTo(d),setTimeout(()=>d==null?void 0:d.invalidateSize(),50))}function x(){if(b=`expl-map-${Math.random().toString(36).slice(2,8)}`,d){try{d.remove()}catch{}d=null}const y=xs(l.adresseFactu)||"—",$=xs(l.adresseLivrai),g=t?$s():[],q=g.slice(0,3),j=g.length>3,L=c.slice(0,3),D=c.length>3;function z(T,V){const ne=T.statut==="payée"?"#30d158":"#ff9f0a",te=T.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${V?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${T.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${T.numero}</span>
            <span class="m-list-row-sub">${Ht(T.dateEmission)} · ${T.montant.toLocaleString("fr-FR")} € HT</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:${ne};flex-shrink:0;margin-right:4px">${te}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}e.innerHTML=`
      ${a.length>1?`
      <div style="padding:12px 16px 4px">
        <select id="org-selector" style="width:100%;padding:10px 14px;border-radius:10px;border:1.5px solid #e5e5ea;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e;cursor:pointer">
          ${a.map(T=>`<option value="${T.id}"${T.id===s?" selected":""}>${T.name}</option>`).join("")}
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
            ${l.metiers.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">${l.metiers.map(T=>`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:4px;padding:2px 8px;font-size:12px;font-weight:500">${T}</span>`).join("")}</div>`:'<div style="font-size:13px;color:#8e8e93;margin-top:4px">—</div>'}
          </div>
          <i class="bi bi-chevron-right m-list-chevron" style="margin-top:2px"></i>
        </div>
      </div>

      <div class="m-list-section-header">Adresses</div>
      <div class="m-list">
        <div class="m-list-row" data-action="adresse-factu">
          <span class="m-list-row-label">Facturation</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${y}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${$||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="pays">
          <span class="m-list-row-label">Pays</span>
          <span class="m-list-row-value">${l.pays}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="siret">
          <span class="m-list-row-label">SIRET</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:12px">${l.siret||"—"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="copie-factures" style="align-items:flex-start;padding-top:12px;padding-bottom:12px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Envoyer une copie des factures</span>
            <div style="font-size:12px;color:#8e8e93;margin-top:4px;line-height:1.4">Ajoutez une adresse email pour envoyer un reçu et des copies des factures à un tiers (comptable, achats, finances…)</div>
            <div style="font-size:13px;color:${l.copieFactures?"#1c1c1e":"#8e8e93"};margin-top:6px">${l.copieFactures||"Aucune adresse renseignée"}</div>
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
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${l.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${Ht(l.contrat.dateAdhesion)}</span>
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
        ${q.map((T,V)=>z(T,!j&&V===q.length-1)).join("")}
        ${j?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${g.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${c.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${c.length?[...L.map((T,V)=>`
            <div class="m-list-row${!D&&V===L.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${V}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${T.prenom} ${T.nom}</span>
                <span class="m-list-row-sub">${T.role}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`),D?`
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
          ${ys.slice(0,5).map((T,V)=>`
            <div class="m-list-row${V===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${ir(T.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${T.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${T.distance} km · ${T.capteurs} capteurs · ${T.parcelles} parcelles</div>
                <button class="m-join-net-btn" data-net-idx="${V}" style="margin-top:8px;padding:5px 14px;border:1.5px solid #0172A4;color:#0172A4;background:none;border-radius:8px;font-size:12px;font-weight:500;font-family:inherit;cursor:pointer">Demander à rejoindre</button>
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
            <span class="m-list-row-value">${Ht("2026-06-08")}</span>
          </div>
        </div>
        <div style="padding:8px 20px 0">
          <button id="btn-use-default-exploit" class="m-btn m-btn--outline" style="margin-bottom:20px">Utiliser cette exploitation</button>
        </div>
      </div>
      `:""}
      <div style="height:32px"></div>`,h()}function h(){var y,$,g,q;(y=e.querySelector("#org-selector"))==null||y.addEventListener("change",j=>{s=j.target.value;const L=a.find(D=>D.id===s);L&&(l.name=L.name,x())}),e.querySelectorAll(".m-list-row[data-action]").forEach(j=>{j.addEventListener("click",()=>{if(n)switch(j.dataset.action){case"name":w("Nom de l'exploitation",l.name,L=>{l.name=L,x()});break;case"siret":w("SIRET",l.siret,L=>{l.siret=L,x()});break;case"metier":E();break;case"adresse-factu":P("Adresse de facturation",l.adresseFactu,L=>{l.adresseFactu=L,x()});break;case"adresse-livrai":P("Adresse de livraison",l.adresseLivrai,L=>{l.adresseLivrai=L,x()});break;case"pays":w("Pays",l.pays,L=>{l.pays=L,x()});break;case"copie-factures":C(l.copieFactures,L=>{l.copieFactures=L,r.copieFactures=L,x()});break;case"plan":S("Abonnement",er,l.plan,L=>{l.plan=L,x()});break;case"facture":K(`PDF ${j.dataset.factureId} téléchargé`);break;case"voir-factures":A();break;case"voir-membres":F();break}})}),e.querySelectorAll("[data-member-idx]").forEach(j=>{j.addEventListener("click",()=>_(+j.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(j=>{j.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach(D=>{const z=D===j;D.style.background=z?"#fff":"transparent",D.style.color=z?"#000":"#8e8e93"});const L=j.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=L==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=L==="independante"?"":"none"})}),($=e.querySelector("#btn-ajouter-membre"))==null||$.addEventListener("click",M),(g=e.querySelector("#btn-quitter-reseau"))==null||g.addEventListener("click",()=>{const j=document.createElement("div");j.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,ue({title:"Quitter le réseau ?",body:j,doneLabel:"Confirmer",onDone:()=>K("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(j=>{j.addEventListener("click",()=>{const L=ys[+j.dataset.netIdx];K(`Demande envoyée à ${L.name}`)})}),e.querySelectorAll(".m-exploit-tab").forEach(j=>{j.addEventListener("click",()=>{e.querySelectorAll(".m-exploit-tab").forEach(D=>{const z=D===j;D.style.background=z?"#fff":"transparent",D.style.color=z?"#000":"#8e8e93"});const L=e.querySelector("#default-exploit-panel");L&&(L.style.display=j.dataset.exploitTab==="membre"?"":"none")})}),(q=e.querySelector("#btn-use-default-exploit"))==null||q.addEventListener("click",()=>{K("Exploitation Jourdain sélectionnée")})}function w(y,$,g){const q=document.createElement("div");q.innerHTML=`<input class="m-sheet-input" type="text" value="${($||"").replace(/"/g,"&quot;")}" placeholder="${y}">`;const j=q.querySelector("input");ue({title:y,body:q,doneLabel:"Enregistrer",onDone:()=>{const L=j.value.trim();L&&(g(L),K("Enregistré"))}}),setTimeout(()=>j.focus(),300)}function C(y,$){const g=document.createElement("div");g.innerHTML=`
      <div style="font-size:13px;color:#636366;line-height:1.4;margin-bottom:10px">Ajoutez une adresse email pour envoyer un reçu et des copies des factures à un tiers (comptable, achats, finances…)</div>
      <input class="m-sheet-input" type="email" placeholder="Adresse email du destinataire" value="${(y||"").replace(/"/g,"&quot;")}">`;const q=g.querySelector("input");ue({title:"Copie des factures",body:g,doneLabel:"Enregistrer",onDone:()=>{$(q.value.trim()),K("Enregistré")}}),setTimeout(()=>q.focus(),300)}function P(y,$,g){const q=document.createElement("div");q.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${($.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${$.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${($.ville||"").replace(/"/g,"&quot;")}">`,ue({title:y,body:q,doneLabel:"Enregistrer",onDone:()=>{g({rue:q.querySelector("#f-rue").value.trim(),cp:q.querySelector("#f-cp").value.trim(),ville:q.querySelector("#f-ville").value.trim()}),K("Enregistré")}}),setTimeout(()=>q.querySelector("#f-rue").focus(),300)}function E(){const y=new Set(l.metiers),$=document.createElement("div"),g=()=>{$.innerHTML=ks.map(q=>`
        <div class="m-sheet-option${y.has(q)?" m-sheet-option--active":""}" data-m="${q}" style="justify-content:space-between">
          <span>${q}</span>
          ${y.has(q)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),$.querySelectorAll("[data-m]").forEach(q=>{q.addEventListener("click",()=>{const j=q.dataset.m;y.has(j)?y.delete(j):y.add(j),g()})})};g(),ue({title:"Métiers",body:$,doneLabel:"Valider",onDone:()=>{l.metiers=[...y],x()}})}function S(y,$,g,q){const j=document.createElement("div");j.innerHTML=$.map((D,z)=>`
      <div class="m-sheet-option${D===g?" m-sheet-option--active":""}" data-i="${z}">
        <span>${D}</span>${D===g?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const L=ue({title:y,body:j,doneLabel:"Fermer",onDone:()=>{}});j.querySelectorAll(".m-sheet-option").forEach(D=>{D.addEventListener("click",()=>{q($[+D.dataset.i]),L.classList.remove("m-sheet-overlay--show"),setTimeout(()=>L.remove(),280),K("Enregistré")})})}function _(y,$){const g=c[y];if(!g)return;const q=document.createElement("div");q.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${g.role}</span></div>
        ${g.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${g.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${g.prenom} ${g.nom}</a>
      </div>`;const j=ue({title:`${g.prenom} ${g.nom}`,body:q,doneLabel:"Fermer",onDone:()=>{}});q.querySelector("#mem-delete").addEventListener("click",()=>{c.splice(y,1),j.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{j.remove(),x(),K("Membre retiré"),$==null||$()},280)})}function F(){let y="",g=20;function q(){if(!y)return c;const z=y.toLowerCase();return c.filter(T=>`${T.prenom} ${T.nom}`.toLowerCase().includes(z)||(T.email||"").toLowerCase().includes(z)||(T.role||"").toLowerCase().includes(z))}const j=xe(`
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
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),L=j.querySelector("#mbr-list-content");function D(){var ne;const z=q(),T=z.slice(0,g),V=z.length-T.length;L.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${z.length} membre${z.length!==1?"s":""}${y?" trouvé"+(z.length!==1?"s":""):" actif"+(z.length!==1?"s":"")}</div>
        <div class="m-list">
          ${T.length?T.map((te,J)=>`<div class="m-list-row${J===T.length-1&&V===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${c.indexOf(te)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${te.prenom} ${te.nom}</span>
                <span class="m-list-row-sub">${te.role}${te.email?" · "+te.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${V>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${V} de plus</span>
            </div>`:""}
          ${z.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,L.querySelectorAll("[data-mbr-idx]").forEach(te=>{te.addEventListener("click",()=>_(+te.dataset.mbrIdx,D))}),(ne=L.querySelector("#mbr-load-more"))==null||ne.addEventListener("click",()=>{g+=20,D()})}j.querySelector(".m-detail-back").addEventListener("click",fe),j.querySelector("#mbr-invite-btn").addEventListener("click",M),j.querySelector("#mbr-search").addEventListener("input",z=>{y=z.target.value,g=20,D()}),D()}function A(){const y=$s();let $="";function g(){if(!$)return y;const D=$.toLowerCase();return y.filter(z=>z.numero.toLowerCase().includes(D)||z.statut.toLowerCase().includes(D)||String(z.montant).includes(D))}const q=xe(`
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
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),j=q.querySelector("#fac-list-content");function L(){const D=g();j.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${D.length} facture${D.length!==1?"s":""}</div>
        <div class="m-list">
          ${D.length?D.map((z,T)=>{const V=z.statut==="payée"?"#30d158":"#ff9f0a",ne=z.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${T===D.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${z.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${z.numero}</span>
                <span class="m-list-row-sub">${Ht(z.dateEmission)} · ${z.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${V};flex-shrink:0;margin-right:4px">${ne}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,j.querySelectorAll("[data-fac-id]").forEach(z=>{z.addEventListener("click",()=>K(`PDF ${z.dataset.facId} téléchargé`))})}q.querySelector(".m-detail-back").addEventListener("click",fe),q.querySelector("#fac-search").addEventListener("input",D=>{$=D.target.value,L()}),L()}function M(){const y=document.createElement("div");y.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${tr.map($=>`<option>${$}</option>`).join("")}
      </select>`,ue({title:"Ajouter un membre",body:y,doneLabel:"Inviter",onDone:()=>{y.querySelector("#inv-email").value.trim()&&K("Invitation envoyée")}}),setTimeout(()=>y.querySelector("#inv-email").focus(),300)}x();function I(){requestAnimationFrame(()=>setTimeout(f,100))}return{onAdd:null,refresh:I}}const or=100,ar=["Essentiel","Plus","Expert"],rr={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function pi(e){return rr[e]||{label:e||"—",color:"#8e8e93"}}function lr(e,i){if(!e)return{};if(i!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=ye.filter(l=>l.id!==or&&l.statut!=="inactif").map(l=>({...l})),o={...We,siege:{...We.siege},antennes:We.antennes.map(l=>({...l}))},n={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function a(l,d,b,f){return l.slice(d,b).map((x,h)=>{const w=d+h,C=pi(x.statut),P=x.statut==="demande en attente";return`
        <div class="m-list-row${w===f?" m-list-row--last":""} m-tappable" data-org-idx="${w}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${x.proprietaire||x.name}</span>
            <span class="m-list-row-sub">${x.name} · ${x.plan||"—"}</span>
          </div>
          ${P?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${w}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${w}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${C.color};flex-shrink:0;margin-right:4px">${C.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function s(){let l="",b=20;function f(){if(!l)return t;const C=l.toLowerCase();return t.filter(P=>(P.proprietaire||P.name||"").toLowerCase().includes(C)||(P.name||"").toLowerCase().includes(C)||(P.email||"").toLowerCase().includes(C)||(P.codeAdherent||"").toLowerCase().includes(C))}const x=xe(`
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
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),h=x.querySelector("#adh-list-content");function w(){var _;const C=f(),P=C.slice(0,b),E=C.length-P.length,S=C.filter(F=>F.statut==="actif"||F.statut==="actif en essai").length;h.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${l?C.length+" résultat"+(C.length!==1?"s":""):S+" actif"+(S!==1?"s":"")+" · "+C.length+" total"}</div>
        <div class="m-list">
          ${P.length?P.map((F,A)=>{const M=t.indexOf(F),I=pi(F.statut),k=F.statut==="demande en attente";return`
              <div class="m-list-row${A===P.length-1&&E===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${M}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${F.proprietaire||F.name}</span>
                  <span class="m-list-row-sub">${F.name} · ${F.plan||"—"}</span>
                </div>
                ${k?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${M}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${M}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${I.color};flex-shrink:0;margin-right:4px">${I.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${E>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${E} de plus</span>
            </div>`:""}
        </div>`,h.querySelectorAll("[data-lp-org-idx]").forEach(F=>{F.addEventListener("click",A=>{A.target.closest("[data-adh-action]")||m(t[+F.dataset.lpOrgIdx],+F.dataset.lpOrgIdx,w)})}),h.querySelectorAll("[data-adh-action]").forEach(F=>{F.addEventListener("click",A=>{A.stopPropagation();const M=+F.dataset.lpAdhIdx,I=F.dataset.adhAction,k=t[M];k&&(I==="valider"?(k.statut="actif",r(),w(),K(`${k.proprietaire||k.name} validé`)):(t.splice(M,1),r(),w(),K("Demande rejetée")))})}),(_=h.querySelector("#adh-load-more"))==null||_.addEventListener("click",()=>{b+=20,w()})}x.querySelector(".m-detail-back").addEventListener("click",fe),x.querySelector("#adh-invite-btn").addEventListener("click",v),x.querySelector("#adh-search").addEventListener("input",C=>{l=C.target.value,b=20,w()}),w()}function r(){var h;const l=t.filter(w=>w.statut!=="inactif"),d=`${o.siege.adresse}, ${o.siege.codePostal} ${o.siege.ville}`;e.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Réseau</div>
      <div class="m-list">
        <div class="m-list-row" data-action="net-nom">
          <span class="m-list-row-label">Nom du réseau</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:13px">${o.nom}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="net-siege">
          <span class="m-list-row-label">Siège</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:12px">${d}</span>
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
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach(w=>{w.addEventListener("click",C=>{C.target.closest("[data-adh-action]")||m(t[+w.dataset.orgIdx],+w.dataset.orgIdx)})}),(h=e.querySelector('[data-action="voir-adherents"]'))==null||h.addEventListener("click",s),e.querySelectorAll("[data-adh-action]").forEach(w=>{w.addEventListener("click",C=>{C.stopPropagation();const P=+w.dataset.adhIdx,E=w.dataset.adhAction,S=t[P];S&&(E==="valider"?(S.statut="actif",r(),K(`${S.proprietaire||S.name} validé`)):(t.splice(P,1),r(),K("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach(w=>{w.addEventListener("click",()=>{switch(w.dataset.action){case"net-nom":p("Nom du réseau",o.nom,C=>{o.nom=C,r()});break;case"net-siege":c();break;case"net-antennes":u();break}})});const b=e.querySelector("#tog-meteo"),f=e.querySelector("#tog-sol"),x=e.querySelector("#tog-irrigation");b==null||b.addEventListener("change",()=>{n.partageMeteo=b.checked,K("Préférence enregistrée")}),f==null||f.addEventListener("change",()=>{n.partageSol=f.checked,K("Préférence enregistrée")}),x==null||x.addEventListener("change",()=>{n.partageIrrigation=x.checked,K("Préférence enregistrée")})}function p(l,d,b){const f=document.createElement("div");f.innerHTML=`<input class="m-sheet-input" type="text" value="${(d||"").replace(/"/g,"&quot;")}" placeholder="${l}">`;const x=f.querySelector("input");ue({title:l,body:f,doneLabel:"Enregistrer",onDone:()=>{const h=x.value.trim();h&&(b(h),K("Enregistré"))}}),setTimeout(()=>x.focus(),300)}function c(){const l=document.createElement("div");l.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${o.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${o.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${o.siege.ville.replace(/"/g,"&quot;")}">`,ue({title:"Adresse du siège",body:l,doneLabel:"Enregistrer",onDone:()=>{o.siege.adresse=l.querySelector("#s-rue").value.trim(),o.siege.codePostal=l.querySelector("#s-cp").value.trim(),o.siege.ville=l.querySelector("#s-ville").value.trim(),r(),K("Enregistré")}}),setTimeout(()=>l.querySelector("#s-rue").focus(),300)}function u(){const l=document.createElement("div");(()=>{l.innerHTML=o.antennes.map((b,f)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${b.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${b.adresse}, ${b.codePostal} ${b.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${b.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),ue({title:"Antennes",body:l,doneLabel:"Fermer",onDone:()=>{}})}function m(l,d,b){var P,E;const f=pi(l.statut),x=l.statut==="invitation en attente",h=`https://app.weenat.com/invitation?code=${l.codeAdherent||"ADZ-XXX"}`,w=document.createElement("div");w.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${l.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${l.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${l.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${l.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${le.filter(S=>S.orgId===l.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const S=new Set(le.filter(_=>_.orgId===l.id).map(_=>_.id));return ce.filter(_=>S.has(_.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${f.color};font-weight:600">${f.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${l.dateAdhesion?l.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${x?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const C=ue({title:l.name,body:w,doneLabel:"Fermer",onDone:()=>{}});(P=w.querySelector("#lnk-copy"))==null||P.addEventListener("click",()=>{var S;(S=navigator.clipboard)==null||S.writeText(h).catch(()=>{}),K("Lien copié !")}),(E=w.querySelector("#lnk-cancel"))==null||E.addEventListener("click",()=>{l.statut="inactif",C.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{C.remove(),r(),b==null||b(),K("Invitation annulée")},280)}),w.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(d,1),C.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{C.remove(),r(),b==null||b(),K("Adhérent supprimé")},280)})}function v(){const l=document.createElement("div");l.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${ar.map(d=>`<option>${d}</option>`).join("")}
      </select>`,ue({title:"Inviter un adhérent",body:l,doneLabel:"Envoyer",onDone:()=>{const d=l.querySelector("#adh-email").value.trim(),b=l.querySelector("#adh-code").value.trim();if(!d||!b){K("Email et code requis");return}t.push({id:Date.now(),name:d,proprietaire:d,email:d,codeAdherent:b,plan:l.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),r(),K("Invitation envoyée")}}),setTimeout(()=>l.querySelector("#adh-email").focus(),300)}return r(),{onAdd:v}}Ss(le);const vn=new URLSearchParams(window.location.search),mi=vn.get("role"),fn=new Set(["new","new-adherent","new-member-admin","new-member-agent","new-member-reader"]),Pe=mi==="adherent"?"adherent":fn.has(mi)?mi:"admin";function bn(){const e=document.getElementById("status-time");if(!e)return;const i=new Date;e.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}bn();setInterval(bn,1e4);const Ze=["parcelles","capteurs","dashboard","alertes","parametres"];let Gt="parcelles";function Ke(e){var i,t;!Ze.includes(e)||e===Gt||(Gt=e,document.querySelectorAll(".m-screen").forEach(o=>o.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(o=>o.classList.remove("active")),(i=document.getElementById(`screen-${e}`))==null||i.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function cr(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var i;e.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const i=e.target.closest(".nav-item");if(!i)return;const t=i.dataset.tab;_i()>0&&kn()?cr(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Ke(t)}):(_i()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Ke(t))});let Ve=null,At=null;const hn=50,Pt=document.getElementById("screen-stack");Pt.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){Ve=null;return}Ve=e.clientX,At=e.clientY});Pt.addEventListener("mouseup",e=>{if(Ve===null)return;const i=e.clientX-Ve,t=e.clientY-At;if(Math.abs(i)>hn&&Math.abs(i)>Math.abs(t)){const o=Ze.indexOf(Gt);i<0&&o<Ze.length-1&&Ke(Ze[o+1]),i>0&&o>0&&Ke(Ze[o-1])}Ve=null,At=null});Pt.addEventListener("mouseleave",()=>{Ve=null});Pt.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){Ve=null;return}Ve=e.touches[0].clientX,At=e.touches[0].clientY},{passive:!0});Pt.addEventListener("touchend",e=>{if(Ve===null)return;const i=e.changedTouches[0].clientX-Ve,t=e.changedTouches[0].clientY-At;if(Math.abs(i)>hn&&Math.abs(i)>Math.abs(t)){const o=Ze.indexOf(Gt);i<0&&o<Ze.length-1&&Ke(Ze[o+1]),i>0&&o>0&&Ke(Ze[o-1])}Ve=null},{passive:!0});const dr=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...Pe==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],Qt={};function gn(e){const i=document.getElementById("param-plus-btn");if(!i)return;const t=Qt[e];i.onclick=(t==null?void 0:t.onAdd)??(()=>{var o;return(o=window.showMobileAddPage)==null?void 0:o.call(window)})}function ur(){var i;const e=document.getElementById("param-segment");e&&(Pe==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),dr.forEach((t,o)=>{const n=document.createElement("button");n.className="m-segment-btn"+(o===0?" active":""),n.textContent=t.label,n.dataset.target=t.id,n.addEventListener("click",()=>{var a,s,r;e.querySelectorAll(".m-segment-btn").forEach(p=>p.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(p=>p.classList.remove("active")),(a=document.getElementById(t.id))==null||a.classList.add("active"),gn(t.id),(r=(s=Qt[t.id])==null?void 0:s.refresh)==null||r.call(s)}),e.appendChild(n)}))}ur();fn.has(Pe)&&Zn(Pe,()=>{(Pe==="new"||Pe==="new-adherent")&&Ke("dashboard")});Jo(document.getElementById("screen-dashboard"),Pe);Ma(document.getElementById("screen-parcelles"),Pe);Qa(document.getElementById("screen-capteurs"),Pe);_n(document.getElementById("screen-alertes"),Pe);Pn(document.getElementById("param-compte"),Pe);Qt["param-exploitation"]=nr(document.getElementById("param-exploitation"),Pe);Qt["param-reseau"]=lr(document.getElementById("param-reseau"),Pe);const ws=vn.get("parcel");if(ws){const e=le.find(i=>i.id===+ws);e&&(Ke("parcelles"),requestAnimationFrame(()=>{ge(()=>Promise.resolve().then(()=>ut),void 0).then(i=>i.initParcelDetail(e,[],"widgets","Parcelles"))}))}function pr(){var o;const e=Pe==="admin",i=document.getElementById("phone-screen");(o=document.getElementById("m-add-modal"))==null||o.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
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
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(n=>{n.addEventListener("click",()=>{var a;t.remove(),(n.dataset.action==="note"||n.dataset.action==="traitement")&&((a=window.openJournalModal)==null||a.call(window,n.dataset.action))})}),i.appendChild(t)}window.openMobileAddModal=pr;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var i;(i=document.querySelector(`#${e} .m-navbar-action`))==null||i.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});gn("param-compte");export{fe as a,xe as p,ue as s};
