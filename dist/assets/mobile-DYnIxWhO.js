const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chart-fullscreen-Bk60tdHe.js","assets/sensors-CRadjF8G.js","assets/irrigations-C22Dtsoo.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-DhtWL7s_.js","assets/store-c0FlIf2T.js","assets/orgs-DnFmvGlp.js","assets/network-YzWdS0n_.js","assets/constants-CJpDUNiw.js","assets/members-Cr98hVG_.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as re}from"./plots-DhtWL7s_.js";import{d as Ne,b as Ps,c as Re,l as Tn}from"./store-c0FlIf2T.js";import{s as ce}from"./sensors-CRadjF8G.js";import{o as we}from"./orgs-DnFmvGlp.js";import{n as Ue}from"./network-YzWdS0n_.js";import{I as me,s as nt,g as In}from"./irrigations-C22Dtsoo.js";import{I as Zt,S as Pi,M as Ds,A as hi,a as $t,E as jn,b as si}from"./constants-CJpDUNiw.js";import{m as ni}from"./members-Cr98hVG_.js";const qn="modulepreload",Pn=function(e){return"/weenat-proto/"+e},Oi={},ye=function(i,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(t.map(m=>{if(m=Pn(m),m in Oi)return;Oi[m]=!0;const d=m.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${p}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":qn,d||(v.as="script"),v.crossOrigin="",v.href=m,l&&v.setAttribute("nonce",l),document.head.appendChild(v),d)return new Promise((u,c)=>{v.addEventListener("load",u),v.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return a.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return i().catch(o)})},ct=[];function $e(e){const i=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),ct.push(t),t}function fe(){const e=ct.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function Ni(){return ct.length}function Dn(){return ct.some(e=>e.dataset.dirty==="true")}function zs(){ct.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{ct.forEach(e=>e.remove()),ct.length=0});const zn=[{key:"orgs",label:"Organisations",icon:"bi-building",desc:"Ajouts de membres, changements d'organisation, nouvelles exploitations"},{key:"capteurs",label:"Capteurs",icon:"bi-broadcast",desc:"Anomalies, changements d'état, mise à jour firmware"},{key:"alertes",label:"Alertes",icon:"bi-bell",desc:"Déclenchements de seuils et alertes météo configurées"}],Vi=[{key:"email",label:"Email",icon:"bi-envelope"},{key:"sms",label:"SMS",icon:"bi-phone"},{key:"push",label:"Push",icon:"bi-bell"}],_n=["Mon réseau","Mon organisation","Mon secteur"],ai={orgs:"Mon organisation",capteurs:"Mon réseau",alertes:"Mon secteur"},Wi={orgs:{email:!0,sms:!1,push:!0},capteurs:{email:!0,sms:!1,push:!0},alertes:{email:!0,sms:!0,push:!0}};function Fn(e){let i=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif"))||JSON.parse(JSON.stringify(Wi))}catch{return JSON.parse(JSON.stringify(Wi))}})(),t=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif-peri"))||JSON.parse(JSON.stringify(ai))}catch{return JSON.parse(JSON.stringify(ai))}})();function n(){localStorage.setItem("weenat-mobile-notif",JSON.stringify(i)),localStorage.setItem("weenat-mobile-notif-peri",JSON.stringify(t)),e("Préférences enregistrées")}function a(s){const l=i[s.key]||{},m=t[s.key]||ai[s.key];return`
      <div class="m-list-section-header" style="display:flex;align-items:center;gap:6px">
        <i class="bi ${s.icon}" style="font-size:13px"></i> ${s.label}
      </div>
      <p style="font-size:12px;color:#8e8e93;margin:0 16px 8px;line-height:1.4">${s.desc}</p>
      <div class="m-list">
        ${Vi.map((d,p)=>{const v=p===Vi.length-1&&!0;return`<div class="m-list-row">
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
            ${_n.map(d=>`<option value="${d}"${d===m?" selected":""}>${d}</option>`).join("")}
          </select>
        </div>
      </div>`}const o=$e(`
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
      ${zn.map(s=>a(s)).join("")}
      <div class="m-list-section-footer" style="margin-top:8px">
        Les alertes de seuil se configurent depuis la section <strong>Alertes</strong> de l'application.
      </div>
    </div>
  `);o.querySelector("#notif-back").addEventListener("click",fe),o.querySelectorAll(".notif-toggle").forEach(s=>{s.addEventListener("change",()=>{const l=s.dataset.cat,m=s.dataset.ch;i[l][m]=s.checked,n()})}),o.querySelectorAll(".notif-peri-sel").forEach(s=>{s.addEventListener("change",()=>{t[s.dataset.cat]=s.value,n()})})}const Ji={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Bn=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Ui=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let Qe={};function Ve(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function dt({title:e,body:i,onDone:t,doneLabel:n="OK"}){var l;const a=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const o=document.createElement("div");o.className="m-sheet-overlay",o.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${n}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,o.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),a.appendChild(o),requestAnimationFrame(()=>o.classList.add("m-sheet-overlay--show"));const s=()=>{o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280)};return o.querySelector(".m-sheet-cancel").addEventListener("click",s),o.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),s()}),o.addEventListener("click",m=>{m.target===o&&s()}),o}function Gi(e,i,t){const n=document.createElement("div");n.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${e}">`;const a=n.querySelector("input");dt({title:e,body:n,doneLabel:"Enregistrer",onDone:()=>{t(a.value.trim()),Ve("Enregistré")}}),setTimeout(()=>a.focus(),300)}function Yi(e,i,t,n){const a=document.createElement("div");a.innerHTML=i.map((s,l)=>`
    <div class="m-sheet-option${s===t?" m-sheet-option--active":""}" data-i="${l}">
      <span>${s}</span>
      ${s===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const o=dt({title:e,body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelectorAll(".m-sheet-option").forEach(s=>{s.addEventListener("click",()=>{n(i[+s.dataset.i]),o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280),Ve("Enregistré")})})}function Hn(e,i){const t=document.createElement("div"),n=()=>{var a;t.innerHTML=e.map((o,s)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="label" value="${o.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="numero" value="${o.numero}" placeholder="+33 6…">
        </div>
        ${s>0?`<button class="m-sheet-remove" data-i="${s}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(o=>{o.addEventListener("input",()=>{e[+o.dataset.i][o.dataset.f]=o.value})}),t.querySelectorAll(".m-sheet-remove").forEach(o=>{o.addEventListener("click",()=>{e.splice(+o.dataset.i,1),n()})}),(a=t.querySelector(".m-sheet-add-phone"))==null||a.addEventListener("click",()=>{e.push({label:"",numero:""}),n()})};n(),dt({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{i(e),Ve("Enregistré")}})}function Rn(e,i,t){const n=document.createElement("div");n.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,n.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var o;(o=navigator.clipboard)==null||o.writeText(e.value).catch(()=>{}),Ve("Clé copiée !")});const a=dt({title:"Clé API",body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const o=i.findIndex(s=>s.id===e.id);o!==-1&&i.splice(o,1),a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{a.remove(),t()},280),Ve("Clé supprimée")})}function On(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function Nn(e){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=i.querySelector("input");dt({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const n=t.value.trim();if(!n){Ve("Entrez un nom");return}const a={id:Date.now(),name:n,created:new Date().toLocaleDateString("fr-FR"),value:On()};e(a),Ve("Clé générée")}}),setTimeout(()=>t.focus(),300)}function Vn(e,i){Qe={profile:JSON.parse(JSON.stringify(Ji[i]||Ji.admin)),langue:"Français",unites:Ui[0]};const n=localStorage.getItem("mobile_avatarUrl")||null;function a(){const s=Qe.profile,l=n?`<img src="${n}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${s.initials}</span>`,m=s.apiKeys.map(p=>`
      <div class="m-list-row" data-key-id="${p.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${p.name}</span>
          <span class="m-list-row-sub">créée le ${p.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),d=s.phones.map((p,v)=>`
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
    `,o()}function o(){var l;const s=Qe.profile;(l=e.querySelector("#m-avatar-upload"))==null||l.addEventListener("change",m=>{const d=m.target.files[0];if(!d)return;const p=new FileReader;p.onload=v=>{localStorage.setItem("mobile_avatarUrl",v.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${v.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},p.readAsDataURL(d)}),e.querySelectorAll(".m-list-row[data-action]").forEach(m=>{m.addEventListener("click",()=>{switch(m.dataset.action){case"prenom":Gi("Prénom",s.prenom,d=>{s.prenom=d,a()});break;case"nom":Gi("Nom",s.nom,d=>{s.nom=d,a()});break;case"email":dt({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${s.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>Ve("Fonctionnalité à venir")});break;case"phones":Hn(s.phones,d=>{s.phones=d,a()});break;case"mdp":{const d=document.createElement("div");d.innerHTML=`
              <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(0,122,255,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
                  <i class="bi bi-envelope-at" style="font-size:26px;color:#007aff"></i>
                </div>
                <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 20px">Un e-mail de réinitialisation sera envoyé à <strong>${s.email}</strong>. Vous pourrez ensuite définir un nouveau mot de passe.</p>
                <button id="send-reset-btn" style="background:#007aff;color:#fff;border:none;border-radius:12px;padding:14px 0;font-size:16px;font-weight:600;cursor:pointer;width:100%">Envoyer l'e-mail</button>
              </div>`;const p=dt({title:"Réinitialiser le mot de passe",body:d,doneLabel:"Annuler",onDone:()=>{}});d.querySelector("#send-reset-btn").addEventListener("click",()=>{p.classList.remove("m-sheet-overlay--show"),setTimeout(()=>p.remove(),280),Ve("E-mail de réinitialisation envoyé")});break}case"langue":Yi("Langue",Bn,Qe.langue,d=>{Qe.langue=d,e.querySelector("#val-langue").textContent=d});break;case"unites":Yi("Unités",Ui,Qe.unites,d=>{Qe.unites=d,e.querySelector("#val-unites").textContent=d.split(" ")[0]});break;case"gen-key":Nn(d=>{s.apiKeys.push(d),a()});break;case"notif-settings":Fn(Ve);break;case"delete":Ve("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(m=>{m.addEventListener("click",()=>{const d=s.apiKeys.find(p=>p.id===+m.dataset.keyId);d&&Rn(d,s.apiKeys,a)})})}a()}function X(e){var n;const i=document.getElementById("phone-screen");(n=document.querySelector(".m-toast"))==null||n.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ue({title:e,body:i,doneLabel:t="Fermer",onDone:n}={}){var l;const a=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const o=document.createElement("div");o.className="m-sheet-overlay",o.innerHTML=`
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
    </div>`,o.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const l=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#sc-cancel").addEventListener("click",l),s.querySelector("#sc-confirm").addEventListener("click",()=>{l(),setTimeout(()=>a==null?void 0:a(),50)}),s.addEventListener("click",d=>{d.target===s&&l()})}function Wn(e){const i=3+e%5,t=Date.now();return Array.from({length:i},(n,a)=>{const o=e*17+a*7,s=1+a*(2+o%6),l=t-s*864e5-o%8*36e5,m=(1+o%5)*36e5+o%60*6e4,d=a===0&&o%7===0;return{start:new Date(l),end:d?null:new Date(l+m)}})}const Jn=[{id:1,name:"Pluie forte > 10 mm/h",params:"cumul > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",params:"< 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",params:"< 20%",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",params:"> 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",params:"< 50 W/m²",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",params:"> 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",params:"> 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",params:"< 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",params:"> 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Un=[{id:1,name:"Gel précoce < 2°C",params:"< 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",params:"cumul > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",params:"< 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]},{id:4,name:"Température humide < 0°C",params:"< 0°C",statut:"actif",metric:"temp-humide",created:"2026-02-01",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 78 92 34 15","+33 7 41 08 63 22"]}],Ki={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},Gn={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function oi(e){if(!e)return"—";const[i,t,n]=e.split("-");return`${n}/${t}/${i}`}function Zi(e){const i=e.sensorIds.map(n=>{const a=ce.find(o=>o.id===n);return a?`${a.model} ${a.serial}`:null}).filter(Boolean),t=e.parcelIds.map(n=>{const a=re.find(o=>o.id===n);return(a==null?void 0:a.name)||null}).filter(Boolean);return[...i,...t]}function Yn(e,i){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const n=i==="new"||i==="new-adherent"?[]:[...i==="adherent"?Un:Jn];function a(){if(!n.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=n.map(s=>{Zi(s);const l=Gn[s.metric]||"bi-bell",m=s.statut==="actif";return`
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
              <span class="m-alert-row-val">${Ki[s.metric]||s.metric}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${oi(s.lastTriggered)}</span>
            </div>
          </div>
          <div class="w-irrig-act-row" style="padding:0 14px">
            <button class="w-irrig-act-btn w-irrig-act-btn--pri m-alert-edit-btn" type="button" data-id="${s.id}">Modifier l'alerte</button>
          </div>
          <button class="m-widget-details-link m-alert-detail-btn" type="button" data-id="${s.id}" style="margin:8px 14px 14px;width:calc(100% - 28px)">Voir détails →</button>
        </div>`}).join(""),o()}function o(){t.querySelectorAll(".m-alert-toggle input").forEach(s=>{s.addEventListener("change",l=>{l.stopPropagation();const m=+s.dataset.id,d=n.find(p=>p.id===m);d&&(d.statut=s.checked?"actif":"inactif",a(),X(`Alerte ${s.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-edit-btn").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation(),X("Modification à venir")})}),t.querySelectorAll(".m-alert-detail-btn").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const m=+s.dataset.id,d=n.find(f=>f.id===m);if(!d)return;Zi(d);const p=document.createElement("div"),v=Wn(m);function u(){const f=d.sensorIds.map((k,A)=>{const q=ce.find($=>$.id===k);return q?{label:`${q.model} ${q.serial}`,type:"sensor",idx:A}:null}).filter(Boolean),S=d.parcelIds.map((k,A)=>{const q=re.find($=>$.id===k);return q?{label:q.name,type:"parcel",idx:A}:null}).filter(Boolean),h=[...f,...S];return h.length?h.map(k=>`<div class="m-perimetre-item" data-type="${k.type}" data-idx="${k.idx}">
                <span>${k.label}</span>
                <button class="m-perimetre-del" data-type="${k.type}" data-idx="${k.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const c=document.createElement("div");c.className="m-sheet-info-rows";function r(){var q;p.innerHTML="";const f=document.createElement("div");f.className="m-sheet-info-rows",f.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Ki[d.metric]||d.metric}</span></div>
            <div class="m-sheet-info-row"><span>Paramètres</span><span>${d.params||"—"}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${oi(d.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${oi(d.created)}</span></div>
            ${(q=d.phones)!=null&&q.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${d.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${d.statut}</span></div>`;const S=document.createElement("div");S.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",S.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${u()}</div>`,f.appendChild(S),p.appendChild(f);const h=$=>$.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+$.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),k=document.createElement("div");k.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${v.map($=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${$.end?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${h($.start)} → <span style="color:${$.end?"inherit":"#ff9f0a"}">${$.end?h($.end):"En cours"}</span></div>
              </div></div>`).join("")}`,p.appendChild(k),p.querySelectorAll(".m-perimetre-del").forEach($=>{$.addEventListener("click",E=>{E.stopPropagation();const F=$.dataset.type,D=+$.dataset.idx;F==="sensor"?d.sensorIds.splice(D,1):d.parcelIds.splice(D,1),r(),a(),X("Retiré du périmètre")})});const A=document.createElement("a");A.className="m-sheet-link m-sheet-link--danger",A.style.marginTop="8px",A.textContent="Supprimer l'alerte",A.addEventListener("click",()=>{const $=n.findIndex(E=>E.id===m);$!==-1&&n.splice($,1),g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{g.remove(),a()},280),X("Alerte supprimée")}),p.appendChild(A)}r();const g=ue({title:d.name,body:p,doneLabel:"Fermer",onDone:()=>{}})})})}a()}const _s=e=>`parcel-journal-${e}`,Xi=[{cible:"Pucerons",produit:"Karate Zeon",dose:"0,1 L/ha",obs:"Quelques pucerons sur feuilles basses. À surveiller."},{cible:"Mildiou",produit:"Bordeaux mixture",dose:"2 kg/ha",obs:"Taches suspectes sur feuillage, conditions humides."},{cible:"Limaces",produit:"Métaldéhyde",dose:"5 kg/ha",obs:"Dégâts de limaces en bordure après les pluies."},{cible:"Altises",produit:"Karaté K",dose:"75 mL/ha",obs:"Présence d'altises sur jeunes plants."}],Qi=["Rimpro","Weephyt","DeciTrait","Maï'zy"],mt=[["Jean Dupont","membre"],["Marie Martin","membre"],["Alexandre Bernard","conseiller"]];function Ut(e){try{const l=localStorage.getItem(_s(e));if(l)return JSON.parse(l)}catch{}const i=Xi[e%Xi.length],t=Qi[e%Qi.length],[n,a]=mt[e%mt.length],o=e%6,s=(l,m)=>{const d=new Date(l+"T00:00:00");return d.setDate(d.getDate()+m),d.toISOString().slice(0,10)};return[{id:1,type:"note",category:"Observation générale",date:s("2026-05-11",o),auteur:n,role:a,texte:i.obs},{id:2,type:"traitement",date:s("2026-05-16",o),auteur:mt[(e+1)%mt.length][0],role:mt[(e+1)%mt.length][1],texte:"Vent < 2 m/s, conditions conformes.",produit:i.produit,dose:i.dose,cible:i.cible},{id:3,type:"integration",date:s("2026-04-02",o),texte:`L'intégration « ${t} » a expiré et n'est plus active.`,_system:!0},{id:4,type:"integration",date:s("2025-10-02",o),texte:`Intégration « ${t} » activée.`,_system:!0}]}function Di(e,i){localStorage.setItem(_s(e),JSON.stringify(i))}function Fe(e,i){const t={id:`sys-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,_system:!0,...i};Di(e,[t,...Ut(e)])}function Fs(e,i,t="Irrigations",n=null){const a=i.find(s=>s.id===+e);if(!a)return;const o=ce.filter(s=>s.parcelIds.includes(a.id)).map(s=>s.id);ye(()=>Promise.resolve().then(()=>lt),void 0).then(s=>{s.initParcelDetail(a,o,"widgets",t),n&&setTimeout(()=>{var l;(l=document.querySelector(`[data-widget-id="${n}"], #${n}`))==null||l.scrollIntoView({behavior:"smooth",block:"start"})},150)})}function ut(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const Ie=new Date().toISOString().split("T")[0];function wt(e){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,n,a]=e.split("-");return`${parseInt(a)} ${i[parseInt(n)-1]} ${t}`}function _t(e){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,n]=e.split("-");return`${parseInt(n)} ${i[parseInt(t)-1]}`}function gi(e){return!e||e===Ie?"":e<Ie?'<span class="irr-pill irr-pill--past">Passée · Effectuée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function yi(e,i){return e?'<div class="irr-chk irr-chk--on"></div>':i?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function Xt(e,i,t){const n=i.length>0&&i.every(o=>t.has(o.id)),a=[...i].sort((o,s)=>{const l=t.has(o.id)?0:1,m=t.has(s.id)?0:1;return l!==m?l-m:o.name.localeCompare(s.name,"fr")}).map(o=>{const s=t.has(o.id);return`<div class="irr-plot-row${s?" irr-plot-row--sel":""}" data-pid="${o.id}">
      <div><div class="irr-plot-name">${o.name}</div>${Kn(o)}</div>
      ${yi(s,!1)}
    </div>`}).join("");return`<div class="irr-sel-all-row" id="irr-sel-all">
    <span class="irr-sel-all-lbl">${n?"Tout désélectionner":"Tout sélectionner"}</span>
    ${yi(n,!1)}
  </div>${a}`}function xi({title:e,body:i,onSave:t,onDelete:n,saveLabel:a="Enregistrer"}){var m,d;const o=document.getElementById("phone-screen");(m=document.querySelector(".irr-sheet-overlay"))==null||m.remove();const s=document.createElement("div");s.className="irr-sheet-overlay",s.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${e}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${n?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${a}</button>
      </div>
    </div>`,s.querySelector(".irr-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),o.appendChild(s),requestAnimationFrame(()=>s.classList.add("irr-sheet-overlay--open"));const l=()=>{s.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>s.remove(),280)};return s.addEventListener("click",p=>{p.target===s&&l()}),(d=s.querySelector("#iss-del"))==null||d.addEventListener("click",()=>{n==null||n(),l()}),s.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),l()}),s}function Bs(e,i,t){const n=i.filter(l=>e.has(l.id)&&(!l.irrigation||l.irrigation==="Non irrigué"));if(!n.length){t();return}const a=document.createElement("div");a.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${n.length===1?`<strong>${n[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${n.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" class="m-prev-select" style="margin-bottom:0">
      <option value="">— Choisir un type —</option>
      ${Zt.map(l=>`<option value="${l}">${l}</option>`).join("")}
    </select>`;const s=xi({title:"Type d'irrigation",body:a,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const l=a.querySelector("#irr-type-ask").value;l&&n.forEach(m=>{m.irrigation=l,Ne(m.id,{irrigation:l})}),t()}}).querySelector("#iss-del");s&&(s.textContent="Passer",s.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function Kn(e){const i=e.crop,t=e.irrigation||null,n=[i,t||"<em>type irrigation non renseigné</em>"].filter(Boolean);return!i&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${n.join(" · ")}</span>`}function Hs(e,i,t=null,n=!1,a=null){let o=new Set((t==null?void 0:t.ids)??[]),s=Ie,l=10;function m(){return Xt([],e,o)}function d(r){r.querySelector("#irr-date-hint").innerHTML=gi(s)}function p(r){const g=o.size,f=r.querySelector(".irr-summary"),S=r.querySelector(".irr-save-btn");!f||!S||(f.textContent=g===0?"":`${g} parcelle${g>1?"s":""} · ${l} mm`,S.disabled=g===0,S.textContent="Enregistrer")}function v(r){var g;r.querySelectorAll(".irr-plot-row").forEach(f=>{f.addEventListener("click",()=>{const S=+f.dataset.pid;o.has(S)?o.delete(S):o.add(S),r.querySelector("#irr-sel-list").innerHTML=m(),v(r),p(r)})}),(g=r.querySelector("#irr-sel-all"))==null||g.addEventListener("click",()=>{const f=e.some(S=>!o.has(S.id));e.forEach(S=>f?o.add(S.id):o.delete(S.id)),r.querySelector("#irr-sel-list").innerHTML=m(),v(r),p(r)})}const u=`<div id="irr-sel-list">${m()}</div>`,c=ut($e(`
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
  `));c.dataset.dirty="true",v(c),p(c),c.querySelector("#irr-back").addEventListener("click",fe),c.querySelector("#irr-date").addEventListener("change",r=>{s=r.target.value,d(c),p(c)}),c.querySelector("#irr-qty").addEventListener("input",r=>{l=parseInt(r.target.value)||1,p(c)}),c.querySelector(".irr-save-btn").addEventListener("click",()=>{const r=o;Bs(r,e,()=>{const g=s>Ie;r.forEach(k=>{me.push({iso:s,mm:l,real:!g,plotId:k,fromStrategy:!1})}),nt();const S=[{title:null,names:[...r].map(k=>{var A;return(A=e.find(q=>q.id===k))==null?void 0:A.name}).filter(Boolean)}],h=r.size===1?String([...r][0]):"all";zs(),Rs({title:r.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:wt(s)},{label:"Quantité",value:`${l} mm`}],parcelSections:S,isFut:g,plots:e,calFilter:h,addedCount:r.size,stackDepth:1,backToParcel:n,onBack:a})})})}function $i(e,i,t=null,n=null,a=!1,o=null){let s=new Set((t==null?void 0:t.ids)??[]),l=Ie,m=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],d=10,p=7,v=null,u=null;if(n){const h=me.filter(k=>k.fromStrategy&&n.has(k.seasonId));if(h.length){const k=h.map(q=>q.iso).sort();l=k[0],m=k[k.length-1],d=h[0].mm;const A=[...new Set(k)];p=A.length>=2?Math.round((new Date(A[1])-new Date(A[0]))/864e5):7,v=l,u=m}}function c(){if(!l||!m||p<=0)return[];const h=[],k=new Date(m);let A=new Date(l);for(;A<=k&&h.length<100;)h.push(new Date(A)),A.setDate(A.getDate()+p);return h}function r(){const h=c();s.size;const k=h.length>0?`<span class="irr-preview-ok">↗ ${h.length} irrigations · ${h.length*d} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
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
          <input type="number" class="irr-qty-input" id="strat-qty" value="${d}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence <span class="irr-unit">(jours)</span></div>
          <input type="number" class="irr-qty-input" id="strat-freq" value="${p}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${k}</div>
      ${Xt([],e,s)}
      <div class="irr-bottom-spacer"></div>
    `}function g(h){const k=s.size,A=c(),q=h.querySelector(".irr-save-btn"),$=h.querySelector(".irr-summary");!q||!$||(q.disabled=k===0||A.length===0,$.textContent=k===0?"":`${k} parcelle${k>1?"s":""} · ${A.length} occurrences`,q.textContent="Voir l'aperçu →")}function f(h){var q,$,E,F,D;const k=h.querySelector(".irr-scroll-body");k.querySelectorAll(".irr-plot-row").forEach(C=>{C.addEventListener("click",()=>{const I=+C.dataset.pid;s.has(I)?s.delete(I):s.add(I),k.innerHTML=r(),f(h),g(h)})}),(q=k.querySelector("#irr-sel-all"))==null||q.addEventListener("click",()=>{const C=e.some(I=>!s.has(I.id));e.forEach(I=>C?s.add(I.id):s.delete(I.id)),k.innerHTML=r(),f(h),g(h)});const A=()=>{const C=c(),I=k.querySelector("#strat-preview");I&&(I.innerHTML=C.length>0?`<span class="irr-preview-ok">↗ ${C.length} irrigations · ${C.length*d} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),g(h)};($=k.querySelector("#strat-debut"))==null||$.addEventListener("change",C=>{l=C.target.value,A()}),(E=k.querySelector("#strat-fin"))==null||E.addEventListener("change",C=>{m=C.target.value,A()}),(F=k.querySelector("#strat-qty"))==null||F.addEventListener("input",C=>{d=parseInt(C.target.value)||1,A()}),(D=k.querySelector("#strat-freq"))==null||D.addEventListener("input",C=>{p=parseInt(C.target.value)||1,A()})}const S=ut($e(`
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
  `));S.dataset.dirty="true",f(S),g(S),S.querySelector("#strat-back").addEventListener("click",fe),S.querySelector(".irr-save-btn").addEventListener("click",()=>{const h=c();Zn(S,e,s,l,m,d,p,h,i,t,n,a,o,v,u)})}function Zn(e,i,t,n,a,o,s,l,m,d,p=null,v=!1,u=null,c=null,r=null){var P,w,x;const g=t.size,f=!!p&&(n!==c||a!==r),S=f?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées.",h=5;l.length-h;function k(b){const T=b.toISOString().slice(0,10)>=Ie?"#FFB705":"#FF8500",j=b.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${wt(j)}</span>
      <span style="font-size:13px;font-weight:700;color:${T}">${o} mm</span>
    </div>`}const A=l.filter(b=>b.toISOString().slice(0,10)<Ie),q=l.filter(b=>b.toISOString().slice(0,10)>=Ie),$=q.slice(0,h),E=q.slice(h),F=`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${A.length?A.map(k).join(""):'<div style="font-size:13px;color:#9E9D98;padding:8px 0">Aucune irrigation effectuée</div>'}`,D=q.length?`
    <div class="irr-section-lbl" style="margin-top:${A.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${$.map(k).join("")}
    ${E.length?`
      <div id="apercu-rest" style="display:none">${E.map(k).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${E.length} irrigation${E.length>1?"s":""} de plus</button>
    `:""}`:"",C=ut($e(`
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
          <div class="irr-apercu-sub">${_t(n)} → ${_t(a)} · tous les ${s}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${l.length*o} mm</div>
          <div class="irr-apercu-sub">${g} parcelle${g>1?"s":""} · ${o} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${F}
        ${D}
        ${!A.length&&!q.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      ${p?`
      <div class="irr-stop-confirm" style="margin-top:12px">
        <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">${S}</div>
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
  `));C.dataset.dirty="true",C.querySelector("#apercu-back").addEventListener("click",fe),(P=C.querySelector("#apercu-show-more"))==null||P.addEventListener("click",b=>{C.querySelector("#apercu-rest").style.display="",b.target.remove()});function I(){const b=t;Bs(b,i,()=>{p&&(f?me.splice(0,me.length,...me.filter(L=>!(p.has(L.seasonId)&&L.fromStrategy))):me.splice(0,me.length,...me.filter(L=>!(p.has(L.seasonId)&&L.fromStrategy&&L.iso>Ie))));const y=p&&!f?l.filter(L=>L.toISOString().slice(0,10)>Ie):l,T=In();if(y.forEach(L=>{const M=L.toISOString().slice(0,10);b.forEach(O=>{me.push({iso:M,mm:o,real:M<=Ie,plotId:O,fromStrategy:!0,seasonId:T})})}),nt(),p){const L=f?"sur toute la saison":"à partir de demain";b.forEach(M=>{Fe(M,{type:"modification",date:Ie,texte:`Saison d'irrigation modifiée (${L}) : ${o} mm tous les ${s} jours, du ${_t(n)} au ${_t(a)} (${l.length} irrigations).`})})}const z=[{title:null,names:[...b].map(L=>{var M;return(M=i.find(O=>O.id===L))==null?void 0:M.name}).filter(Boolean)}],B=b.size===1?String([...b][0]):"all";zs(),Rs({title:"Saison enregistrée",params:[{label:"Début",value:wt(n)},{label:"Fin",value:wt(a)},{label:"Quantité",value:`${o} mm/irrig.`},{label:"Fréquence",value:`tous les ${s} jours`},{label:"Irrigations générées",value:`${l.length*b.size}`}],parcelSections:z,isFut:!0,plots:i,calFilter:B,addedCount:l.length*b.size,stackDepth:2,backToParcel:v,onBack:u})})}C.querySelector("#apercu-confirm").addEventListener("click",()=>{if(p){C.querySelector("#apercu-edit-confirm").style.display="flex",C.querySelector("#apercu-edit-confirm").scrollIntoView({behavior:"smooth",block:"center"});return}I()}),(w=C.querySelector("#apercu-edit-cancel"))==null||w.addEventListener("click",()=>{C.querySelector("#apercu-edit-confirm").style.display="none"}),(x=C.querySelector("#apercu-edit-confirm-btn"))==null||x.addEventListener("click",I)}function Rs({title:e,params:i,parcelSections:t=[],isFut:n,plots:a,calFilter:o,addedCount:s=0,stackDepth:l=3,backToParcel:m=!1,onBack:d=null}){const p=(i||[]).map(h=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${h.label}</span>
      <span class="irr-confirm-param-val">${h.value}</span>
    </div>`).join(""),v=3,u=t.flatMap(h=>h.names.map(k=>({title:h.title,name:k}))),c=u.slice(0,v),r=u.slice(v);function g(h){const k=[];let A=null;for(const q of h)(!A||A.title!==q.title)&&(A={title:q.title,names:[]},k.push(A)),A.names.push(q.name);return k.map(q=>`
      ${q.title?`<div class="irr-confirm-sec-hd">${q.title}</div>`:""}
      ${q.names.map($=>`<div class="irr-confirm-parcel">· ${$}</div>`).join("")}
    `).join("")}const f=u.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${g(c)}
      ${r.length?`
        <details class="irr-confirm-more">
          <summary>${r.length} parcelle${r.length>1?"s":""} de plus</summary>
          ${g(r)}
        </details>`:""}
    </div>`,S=ut($e(`
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
            <div class="irr-confirm-opt-title">${m?"Retour à la parcelle":"Retour au tableau de bord"}</div>
            <div class="irr-confirm-opt-sub">Continuer la navigation</div>
          </div>
        </div>
      </div>
    </div>
  `));S.querySelector("#conf-edit").addEventListener("click",()=>{s>0&&me.splice(me.length-s,s),fe()}),S.querySelector("#conf-back").addEventListener("click",()=>{for(let h=0;h<=l;h++)fe();d==null||d()}),S.querySelector("#conf-calendar").addEventListener("click",()=>{Os(a,o)})}const Xn=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function Os(e,i){let t=i||"";function n(c){if(!c||c==="all")return null;const r=e.find(g=>String(g.id)===String(c));return r?{ids:[r.id],label:r.name}:null}function a(){return!t||t==="all"?me:me.filter(c=>c.plotId===+t)}function o(c){const r=c.filter(h=>h.real),g=c.filter(h=>!h.real),f=r.reduce((h,k)=>h+k.mm,0),S=g.reduce((h,k)=>h+k.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${f} mm</div>
        <div class="irr-cumul-count">${r.length} irrigation${r.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${S} mm</div>
        <div class="irr-cumul-count">${g.length} irrigation${g.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${f+S} mm</div>
        <div class="irr-cumul-count">${r.length+g.length} irrigations</div>
      </div>
    </div>`}function s(c){if(c.length<2)return"";const r=[...c].sort((z,B)=>z.iso<B.iso?-1:1),g=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],f=new Date(r[0].iso),S=new Date(r[r.length-1].iso),h=Math.max(S-f,1),k=300,A=26,q=5,$=5,E=A-$-4,F=E-$-3,D=A+q+13,C=D+2,I=z=>Math.round((z-f)/h*k),P=z=>{const[,B,L]=z.split("-");return`${parseInt(L)}/${parseInt(B)}`},w=[],x=new Date(f.getFullYear(),f.getMonth()+1,1);for(;x<=S;)w.push(new Date(x)),x.setMonth(x.getMonth()+1);const b=w.map(z=>`<line x1="${I(z)}" y1="${A-6}" x2="${I(z)}" y2="${A+q+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),y=[f,...w,S],T=y.slice(0,-1).map((z,B)=>{const L=I(z),M=I(y[B+1]);return M-L<16?"":`<text x="${Math.round((L+M)/2)}" y="${F}" font-size="8" fill="#B0AEA8" text-anchor="middle">${g[z.getMonth()]}</text>`}).join(""),j=r.map(z=>{const B=z.real?"#FF8500":"#FFB705",L=I(new Date(z.iso)),[,M,O]=z.iso.split("-"),N=`${parseInt(O)} ${Xn[parseInt(M)-1]} · ${z.mm} mm`;return`<circle cx="${L}" cy="${E}" r="${$}" fill="${B}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${L}" cy="${E}" r="${$+6}" fill="transparent" pointer-events="all"><title>${N}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${k}" height="${C}" viewBox="0 0 ${k} ${C}" style="width:100%;display:block">
        ${T}
        <rect x="0" y="${A}" width="${k}" height="${q}" rx="${q/2}" fill="#E0DED8"/>
        ${b}
        ${j}
        <text x="1" y="${D}" font-size="9" fill="#B0AEA8">${P(r[0].iso)}</text>
        <text x="${k-1}" y="${D}" font-size="9" fill="#B0AEA8" text-anchor="end">${P(r[r.length-1].iso)}</text>
      </svg>
    </div>`}function l(c,r,g){const f=document.createElement("div");let S=c.iso,h=c.mm;f.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${c.iso}" />
          <div id="edit-date-hint">${gi(c.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${c.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>`,f.querySelector("#edit-date").addEventListener("change",k=>{S=k.target.value,f.querySelector("#edit-date-hint").innerHTML=gi(S)}),f.querySelector("#edit-qty").addEventListener("input",k=>{const A=parseInt(k.target.value);A>0&&(h=A)}),xi({title:c.real?"Modifier l'irrigation effectuée":"Modifier l'irrigation planifiée",body:f,saveLabel:"Enregistrer",onSave:()=>{c.iso=S,c.mm=h,c.real=S<=Ie,nt(),p(g)},onDelete:()=>{const k=me.indexOf(c);k>-1&&me.splice(k,1),nt(),p(g)}})}function m(c,r){const g=+c,f=document.createElement("div");let S=!1,h=!1;function k(){return new Set(me.filter($=>$.plotId===g&&$.fromStrategy&&$.seasonId).map($=>$.seasonId))}function A(){return me.some($=>$.plotId===g&&!$.fromStrategy)}function q(){var $,E,F,D,C,I,P;f.innerHTML=`
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
        ${S?`
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
        </div>`:""}`,($=f.querySelector("#strat-modify"))==null||$.addEventListener("click",()=>{var y;(y=document.querySelector(".irr-sheet-overlay"))==null||y.remove();const w=k(),x=e.find(T=>T.id===g),b=x?{ids:[x.id],label:x.name}:null;$i(e,()=>p(r),b,w)}),(E=f.querySelector("#strat-stop"))==null||E.addEventListener("click",()=>{S=!0,h=!1,q()}),(F=f.querySelector("#strat-delete"))==null||F.addEventListener("click",()=>{h=!0,S=!1,q()}),(D=f.querySelector("#stop-cancel"))==null||D.addEventListener("click",()=>{S=!1,q()}),(C=f.querySelector("#stop-confirm"))==null||C.addEventListener("click",()=>{var b;const w=k(),x=me.filter(y=>y.plotId===g&&w.has(y.seasonId)&&!y.real).length;me.splice(0,me.length,...me.filter(y=>!(y.plotId===g&&w.has(y.seasonId)&&!y.real))),nt(),Fe(g,{type:"modification",date:Ie,texte:`Saison d'irrigation arrêtée (${x} irrigation(s) planifiée(s) annulée(s)).`}),(b=document.querySelector(".irr-sheet-overlay"))==null||b.remove(),p(r)}),(I=f.querySelector("#delete-cancel"))==null||I.addEventListener("click",()=>{h=!1,q()}),(P=f.querySelector("#delete-confirm"))==null||P.addEventListener("click",()=>{var x;const w=me.filter(b=>b.plotId===g).length;me.splice(0,me.length,...me.filter(b=>b.plotId!==g)),nt(),Fe(g,{type:"modification",date:Ie,texte:`Saison d'irrigation supprimée (${w} irrigation(s) retirée(s) du calendrier).`}),(x=document.querySelector(".irr-sheet-overlay"))==null||x.remove(),p(r)})}q(),xi({title:"Gérer la saison",body:f,saveLabel:"Fermer",onSave:()=>{}})}function d(c){if(!c.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const r=[...c].filter(S=>!S.real).sort((S,h)=>S.iso<h.iso?-1:1),g=[...c].filter(S=>S.real).sort((S,h)=>S.iso>h.iso?-1:1);function f(S){const h=S.real?"#FF8500":"#FFB705",k=me.indexOf(S);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${wt(S.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${h};white-space:nowrap;margin-right:4px">${S.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${k}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${k}" title="Supprimer">🗑</button>
      </div>`}return`
      ${g.length?`
        <details class="irr-section-details" data-section="effectuees"${r.length?"":" open"}>
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${g.length}</span></summary>
          ${g.map(f).join("")}
        </details>`:""}
      ${r.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${r.length}</span></summary>
          ${r.map(f).join("")}
        </details>`:""}
    `}function p(c){var F,D,C,I,P;const r=c.querySelector(".irr-cal-body");if(!t){r.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const g={};if(r.querySelectorAll("details[data-section]").forEach(w=>{g[w.dataset.section]=w.open}),t==="all"){const w={};for(const y of me){const T=y.plotId??"unknown";w[T]||(w[T]=[]),w[T].push(y)}const x=Object.keys(w).filter(y=>e.some(T=>String(T.id)===y));if(!x.length){r.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}const b=x.sort((y,T)=>{var B,L;const j=((B=e.find(M=>String(M.id)===y))==null?void 0:B.name)??y,z=((L=e.find(M=>String(M.id)===T))==null?void 0:L.name)??T;return j.localeCompare(z,"fr")});r.innerHTML=b.map((y,T)=>{const j=w[y],z=j.some(Q=>Q.fromStrategy),B=e.find(Q=>String(Q.id)===y),L=(B==null?void 0:B.name)??y,M=[B==null?void 0:B.crop,B==null?void 0:B.irrigation].filter(Boolean),O=T>0?'<hr style="border:none;border-top:1px solid #E0DED8;margin:0 0 16px">':"",N=z?`<div class="irr-cal-add-bar" style="margin-top:8px">
               <button class="irr-cal-add-btn irr-cal-add-btn--sec" data-strat-pid="${y}"><i class="bi bi-pencil"></i> Modifier la saison</button>
             </div>`:`<div class="irr-cal-add-bar" style="margin-top:8px">
               <button class="irr-cal-add-btn irr-cal-add-btn--tert" data-goto-pid="${y}"><i class="bi bi-list-ul"></i> Voir les irrigations</button>
             </div>`;return`${O}<div style="margin-bottom:16px">
          <button class="irr-cal-plot-link" data-goto-pid="${y}" style="display:flex;align-items:baseline;gap:6px;background:none;border:none;padding:0;margin-bottom:6px;text-align:left;cursor:pointer">
            <span style="font-size:13px;font-weight:700;color:#185FA5;text-decoration:underline">${L}</span>
            ${M.length?`<span style="font-size:11px;color:#8e8e93">${M.join(" · ")}</span>`:""}
          </button>
          ${o(j)}
          ${s(j)}
          ${N}
        </div>`}).join(""),r.querySelectorAll("[data-strat-pid]").forEach(y=>{y.addEventListener("click",()=>m(y.dataset.stratPid,c))}),r.querySelectorAll("[data-goto-pid]").forEach(y=>{y.addEventListener("click",()=>{t=y.dataset.gotoPid;const T=c.querySelector("#cal-filter-sel");T&&(T.value=t),p(c)})});return}const f=a(),S=f.some(w=>w.fromStrategy),h=t!=="all"?e.find(w=>String(w.id)===String(t)):null,k=h?'<button class="irr-cal-add-btn irr-cal-add-btn--tert" id="cal-goto-plot"><i class="bi bi-geo-alt-fill"></i> Voir la parcelle</button>':"",q=S?`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="open-strat-edit"><i class="bi bi-pencil"></i> Modifier la saison</button>
           ${h?'<button class="irr-cal-add-btn irr-cal-add-btn--tert" id="cal-edit-params"><i class="bi bi-sliders"></i> Modifier les paramètres</button>':""}
           ${k}
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Saisir une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Saisir une saison d'irrigation</button>
           ${k}
         </div>`,$=[h==null?void 0:h.crop,h==null?void 0:h.irrigation].filter(Boolean),E=$.length?`<div style="padding:8px 14px 2px;font-size:13px;color:#636366">${$.join(" · ")}</div>`:"";r.innerHTML=`
      ${E}
      ${o(f)}
      ${s(f)}
      ${q}
      ${d(f)}
    `,(F=r.querySelector("#cal-goto-plot"))==null||F.addEventListener("click",()=>{h&&Fs(h.id,e)}),(D=r.querySelector("#cal-edit-params"))==null||D.addEventListener("click",()=>{h&&ye(()=>Promise.resolve().then(()=>lt),void 0).then(w=>w.openMobileVolDebitSheet(h,()=>p(c)))}),r.querySelectorAll("details[data-section]").forEach(w=>{const x=w.dataset.section;x in g&&(w.open=g[x])}),r.querySelectorAll(".irr-edit-btn").forEach(w=>{w.addEventListener("click",x=>{x.stopPropagation();const b=me[+w.dataset.iidx];b&&l(b,f,c)})}),r.querySelectorAll(".irr-del-btn").forEach(w=>{w.addEventListener("click",x=>{x.stopPropagation();const b=+w.dataset.iidx;b>=0&&(me.splice(b,1),nt(),p(c))})}),(C=r.querySelector("#open-strat-edit"))==null||C.addEventListener("click",()=>{m(t,c)}),(I=r.querySelector("#cal-add-irrig"))==null||I.addEventListener("click",()=>{Hs(e,()=>p(c),n(t))}),(P=r.querySelector("#cal-add-strat"))==null||P.addEventListener("click",()=>{$i(e,()=>p(c),n(t))})}const v=[...e].sort((c,r)=>c.name.localeCompare(r.name,"fr")).map(c=>`<option value="${c.id}"${String(c.id)===String(t)?" selected":""}>${c.name}</option>`).join(""),u=ut($e(`
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
  `));u.querySelector("#cal-back").addEventListener("click",fe),u.querySelector("#cal-filter-sel").addEventListener("change",c=>{t=c.target.value,p(u)}),p(u)}const et=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:Xt,checkIcon:yi,flexLayer:ut,goToPlot:Fs,openCalendar:Os,openIrrigationSaisie:Hs,openIrrigationStrategie:$i},Symbol.toStringTag,{value:"Module"})),Qn=[{name:"Allier AgriTech",distance:8,adherents:31,capteurs:198,parcelles:1140,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Auvergne Agri Conseil",distance:15,adherents:54,capteurs:361,parcelles:2080,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]},{name:"Réseau Bourbonnais",distance:22,adherents:18,capteurs:112,parcelles:630,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Creuse Agri Net",distance:38,adherents:12,capteurs:74,parcelles:410,sharedSensorTypes:["Capteurs d'irrigation"]},{name:"Puy-de-Dôme Connect",distance:45,adherents:39,capteurs:255,parcelles:1490,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]}],es={name:"Breiz'Agri Conseil",city:"Rennes (35)",phone:"02 99 XX XX XX",email:"contact@breizagri.fr",capteurs:312,parcelles:1830,sharedSensorTypes:["Capteurs météo"]},ea=["Capteurs météo","Capteurs d'irrigation","Stations météo virtuelles"];function ts(e){return e.split(" ").filter(i=>i.length>2).slice(0,2).map(i=>i[0].toUpperCase()).join("")}const He={prenom:"Pierre",nom:"Jourdain",email:"pierre@gaec-jourdain.fr",phone:"06 71 23 45 67",orgName:"GAEC Jourdain",adresse:"Lieu-dit La Croix Blanche, 03500 Saint-Pourçain-sur-Sioule",selectedPlan:"expert",joinNetwork:!0},Ns={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre 15/30 cm","CHP-30/60":"Tensiomètre 30/60 cm","CHP-60/90":"Tensiomètre 60/90 cm","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},ta={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]},ia=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),sa={"CHP-15/30":[15,30],"CHP-30/60":[30,60],"CHP-60/90":[45,90]},li=[{id:"essential",name:"Weenat Essential",priceNum:0,price:"Gratuit",color:"#636366",features:["Aucun capteur physique","Historique illimité","Alertes","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"plus",name:"Weenat Plus",priceNum:16.5,price:"16,5 €/mois",color:"#00B093",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"expert",name:"Weenat Expert",priceNum:30,price:"30 €/mois",color:"#006798",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées","Capteurs irrigation","Fonctionnalités irrigation"]}],ri={Administrateur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!0}]}],Agent:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}],Lecteur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!1}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!1}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!1},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}]};function na(e,i,t,n){const a=i==="essential",o=i==="expert";return e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?["signup","verify","emailVerified","creating","done"]:e==="new-adherent"?["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkInfo","invite","plan",...o?["volumeChoice"]:[],"creating","done"]:["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkChoice",...t?["networkPick"]:[],"invite","plan",...a?[]:["payment","paymentConfirmed"],...o?["volumeChoice"]:[],"creating","done"]}function aa(e,i,t,n){return na(e,i,t)}const oa={signup:"Inscription",verify:"Vérification",orgName:"Exploitation",geoloc:"Localisation",orgInfo:"Informations",networkChoice:"Réseau",networkPick:"Choisir un réseau",networkInfo:"Mon réseau",invite:"Invitations",plan:"Abonnement",payment:"Paiement",paymentConfirmed:"Paiement",volumeChoice:"Volume autorisé",parcelMap:"Parcelle",parcelSource:"Source de données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"};function la(e,i){const t=document.getElementById("phone-screen");let n=0,a=e==="new-adherent"?"expert":He.selectedPlan,o=He.joinNetwork,s=!1,l=0,m=!0,d=46.3021,p=3.2938,v=null,u=null,c="smv",r=[],g="Parcelle 1";const f=document.createElement("div");f.id="onboarding-overlay",f.className="m-ob-overlay",t.appendChild(f);function S(){return aa(e,a,o)}function h(){return S()[n]}function k(){return S().filter(J=>!["creating","done","parcelDone","emailVerified","paymentConfirmed"].includes(J)).length}function A(){return li.find(J=>J.id===a)}function q(){const J=S().slice(0,n).filter(V=>V!=="creating"&&V!=="done"&&V!=="parcelDone").length;return`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${Math.round(J/k()*100)}%"></div></div>`}function $(J,G=!0){const V=h(),H=new Set(["creating","done","parcelDone","emailVerified","paymentConfirmed"]),_=G&&n>0&&!H.has(V),R=oa[V]||"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${_?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${R}</span>
          <div style="width:32px"></div>
        </div>
        ${H.has(V)?"":q()}
        <div class="m-ob-body">${J}</div>
      </div>`}function E(){n++,qe()}function F(){n--,qe()}function D(){return $(`
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
    `,!1)}function C(){return $(`
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
      </div>`}function P(){return $(`
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
    `)}function w(){return $(`
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
    `)}function x(){const J=Ds.map(G=>`<button type="button" class="m-ob-pill" data-metier="${G}">${G}</button>`).join("");return $(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-house"></i></div>
        <h2 class="m-ob-h2">Votre activité</h2>
        <p class="m-ob-sub">Ces informations nous permettent de vous conseiller les fonctionnalités les plus adaptées.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Métier(s)</label>
          <div class="m-ob-pills">${J}</div>
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function b(){return $(`
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
    `)}function y(){const J=Qn.map(G=>{var V;return`
      <div class="m-ob-net-row" data-net="${G.name}">
        <div class="m-ob-net-avatar">${ts(G.name)}</div>
        <div class="m-ob-net-info">
          <div class="m-ob-net-name">${G.name}</div>
          <div class="m-ob-net-meta">${G.distance} km · ${G.capteurs} capteurs · ${G.parcelles} parcelles</div>
          ${(V=G.sharedSensorTypes)!=null&&V.length?`<div class="m-ob-net-tags">${G.sharedSensorTypes.map(H=>`<span class="m-ob-net-tag">${H}</span>`).join("")}</div>`:""}
        </div>
        <div class="m-ob-net-check"><i class="bi bi-circle"></i></div>
      </div>`}).join("");return $(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-building-check"></i></div>
        <h2 class="m-ob-h2">Choisir un réseau</h2>
        <p class="m-ob-sub">Les 5 réseaux les plus proches de votre exploitation.</p>
      </div>
      <div class="m-ob-net-list">${J}</div>
      <button class="m-ob-cta" id="ob-next">Rejoindre</button>
    `)}function T(){var G;const J=es;return $(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-diagram-3-fill"></i></div>
        <h2 class="m-ob-h2">Mon réseau</h2>
        <p class="m-ob-sub">Vous avez été invité à rejoindre ce réseau.</p>
      </div>
      <div class="m-ob-info-card" style="background:var(--bg2,#f5f5f7);border-radius:12px;padding:20px 16px;margin:0 0 16px">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:4px;margin-bottom:14px">
          <div class="m-ob-net-avatar" style="width:64px;height:64px;font-size:24px;border-radius:16px;margin-bottom:8px">${ts(J.name)}</div>
          <div style="font-weight:700;font-size:16px">${J.name}</div>
          <div style="font-size:13px;color:#636366">${J.city}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px;margin-top:6px"><i class="bi bi-telephone" style="color:#0172A4"></i> ${J.phone}</div>
          <div style="font-size:13px;color:#3a3a3c;display:flex;align-items:center;gap:6px"><i class="bi bi-envelope" style="color:#0172A4"></i> ${J.email}</div>
        </div>
        <div style="display:flex;gap:16px;padding-top:12px;padding-bottom:12px;border-top:.5px solid rgba(0,0,0,.1)">
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${J.capteurs}</div><div style="font-size:11px;color:#636366">capteurs</div></div>
          <div style="text-align:center;flex:1"><div style="font-weight:700;font-size:18px">${J.parcelles}</div><div style="font-size:11px;color:#636366">parcelles</div></div>
        </div>
        <div style="padding-top:12px;border-top:.5px solid rgba(0,0,0,.1)">
          ${(G=J.sharedSensorTypes)!=null&&G.length?`
          <div style="font-size:13px;color:#3a3a3c;margin-bottom:8px">Capteurs partagés entre les adhérents :</div>
          <div class="m-ob-pills">${ea.map(V=>`<span class="m-ob-pill${J.sharedSensorTypes.includes(V)?" m-ob-pill--on":" m-ob-pill--off"}" style="cursor:default">${V}</span>`).join("")}</div>
          `:`<div style="font-size:13px;color:#3a3a3c">Aucun capteur n'est partagé entre les adhérents de ce réseau</div>`}
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function j(J){const G=ri[J];return G?`<div class="m-ob-role-perms">${G.map(V=>`
      <div class="m-rp-section">
        <div class="m-rp-section-title">${V.section}</div>
        ${V.items.map(H=>`
          <div class="m-rp-item">
            <i class="bi bi-${H.ok?"check-circle-fill":"x-circle-fill"}" style="color:${H.ok?"#30d158":"#ff3b30"}"></i>
            <span>${H.label}</span>
          </div>`).join("")}
      </div>`).join("")}</div>`:""}function z(J){const G=ri[J];return G?`<div class="m-rp-summary">${G.map(H=>{const _=H.items.filter(ae=>ae.ok).length,R=_===0?"none":_===H.items.length?"full":"partial",Y={full:"check-circle-fill",partial:"dash-circle-fill",none:"x-circle"}[R],K={full:"#30d158",partial:"#ff9500",none:"#c7c7cc"}[R],le=H.section.replace("Exploitations adhérentes","Adhérents");return`<div class="m-rp-badge"><i class="bi bi-${Y}" style="color:${K}"></i><span>${le}</span></div>`}).join("")}</div>`:""}function B(){const J=Object.keys(ri);return`
      <button type="button" class="m-rp-toggle" id="ob-roles-info-toggle"><span>Comparer les droits par rôle</span><i class="bi bi-chevron-down"></i></button>
      <div class="m-ob-roles-info" id="ob-roles-info" hidden>
        <div class="m-ob-roles-tabs">${J.map((G,V)=>`<button type="button" class="m-ob-roles-tab${V===0?" m-ob-roles-tab--on":""}" data-role="${G}">${G}</button>`).join("")}</div>
        <div id="ob-roles-info-detail">${j(J[0])}</div>
      </div>`}function L(){return`
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
      </div>`}function M(){return $(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-people"></i></div>
        <h2 class="m-ob-h2">Inviter des membres</h2>
        <p class="m-ob-sub">Ajoutez des collègues de votre exploitation. Salariés, chefs de culture, conseillers externes...</p>
        <p class="m-ob-sub" style="margin-top:6px">Chaque membre implique une licence payante additionnelle.</p>
      </div>
      ${B()}
      <div id="ob-invite-list">${L()}</div>
      <button class="m-ob-add-member" id="ob-add-member" type="button"><i class="bi bi-plus-circle"></i> Ajouter un membre</button>
      <button class="m-ob-cta" id="ob-send-invites">Continuer</button>
      <button class="m-ob-link" id="ob-skip-invite" type="button">Passer cette étape</button>
    `)}function O(){const J=e==="new-adherent",G=es;if(J){const H=li.find(R=>R.id==="expert"),_=H.features.map(R=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${H.color}"></i> ${R}</li>`).join("");return $(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-gift"></i></div>
          <h2 class="m-ob-h2">Votre abonnement</h2>
          <p class="m-ob-sub">Le réseau <strong>${G.name}</strong> vous a invité à profiter de l'abonnement <strong style="color:${H.color}">Weenat Expert</strong>. Découvrez ce qu'il comprend.</p>
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
      `)}const V=li.map(H=>{const _=H.id===a,R=H.features.map(Y=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${H.color}"></i> ${Y}</li>`).join("");return`
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
        </div>`}).join("");return $(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-grid-1x2"></i></div>
        <h2 class="m-ob-h2">Votre abonnement</h2>
        <p class="m-ob-sub">Choisissez le plan qui correspond à vos besoins.</p>
      </div>
      <div class="m-ob-sub-cards">${V}</div>
      <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
    `)}function N(){const J=A(),G=l+1,V=G*J.priceNum,H=V*12,_=R=>R%1===0?`${R}`:R.toFixed(1).replace(".",",");return $(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-credit-card"></i></div>
        <h2 class="m-ob-h2">Paiement</h2>
      </div>
      <div class="m-ob-pay-summary">
        <div class="m-ob-pay-line">
          <span style="color:${J.color};font-weight:700">${J.name}</span>
          <span class="m-ob-pay-price" style="color:${J.color}">${_(J.priceNum)} €<span class="m-ob-pay-period">/licence/mois</span></span>
        </div>
        ${G>1?`
        <div class="m-ob-pay-line" style="margin-top:6px">
          <span style="font-size:13px;color:#636366">${G} licences (${l} invité${l>1?"s":""} + vous)</span>
          <span style="font-size:15px;font-weight:700;color:${J.color}">${_(V)} €/mois</span>
        </div>
        <button class="m-ob-link" id="ob-remove-invites" type="button" style="font-size:12px;color:#636366;padding:2px 0;text-align:left">Retirer les invités et ne prendre qu'une licence</button>`:""}
        <div class="m-ob-pay-divider"></div>
        <div class="m-ob-pay-line">
          <span style="font-weight:600">Total annuel</span>
          <span style="font-size:17px;font-weight:700;color:${J.color}">${_(H)} €/an</span>
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
      <button class="m-ob-cta" id="ob-next" style="background:${J.color}"><i class="bi bi-lock-fill" style="font-size:13px"></i> Payer ${_(H)} €</button>
      <p class="m-ob-legal" style="margin-top:10px"><i class="bi bi-shield-check"></i> Paiement sécurisé SSL · Données chiffrées</p>
    `)}function Q(){return $(`
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
    `)}function W(){return A(),`
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
      </div>`}function Z(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-spinner"><div class="m-ob-spinner-ring"></div></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Création de votre espace…</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?"Nous configurons votre accès et créons votre exploitation par défaut.":"Nous configurons votre exploitation."}</p>
      </div>`}function ie(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Votre espace est prêt !</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?`Votre compte a été créé. Votre exploitation par défaut <strong>Exploitation ${He.nom}</strong> est prête.`:"Une parcelle et une station météo virtuelle ont été créées à l'adresse de votre exploitation. Vous pouvez les modifier ou les supprimer."}</p>
        <button class="m-ob-cta" id="ob-finish" style="margin-top:32px">Accéder à mon exploitation</button>
      </div>`}function he(){return $(`
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
    `)}function be(){if(a==="essential")return E(),"";const V=["P+","CHP-15/30","CAPA-30-3","EC"].map(_=>ce.find(R=>R.orgId===1&&R.model===_)).filter(Boolean);return $(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(_=>`
          <div class="m-ob-plan-card${c===_.id?" m-ob-plan-card--on":""}" data-psource="${_.id}" style="cursor:pointer">
            <div style="display:flex;align-items:center;gap:10px">
              <i class="bi ${_.icon}" style="font-size:20px;color:#0172A4;flex-shrink:0"></i>
              <div>
                <div class="m-ob-plan-name" style="margin-bottom:2px">${_.title}</div>
                <div class="m-ob-plan-desc">${_.desc}</div>
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
        ${V.map(_=>`
          <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:.5px solid rgba(0,0,0,.08);cursor:pointer">
            <input type="checkbox" ${r.includes(_.id)?"checked":""} data-sensor-id="${_.id}" style="width:18px;height:18px;flex-shrink:0">
            <div>
              <div style="font-size:14px;font-weight:600;color:#1c1c1e">${Ns[_.model]||_.model}</div>
              <div style="font-size:12px;color:#636366;margin-top:1px">${_.model} · ${_.serial}</div>
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
    `)}function Ee(){const J=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),G=new Set(["EC"]),V=ce.filter(R=>r.includes(R.id)),H=V.some(R=>J.has(R.model)),_=V.some(R=>G.has(R.model));return $(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-sliders"></i></div>
        <h2 class="m-ob-h2">Paramétrage</h2>
        <p class="m-ob-sub">Quelques informations sur cette parcelle.</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de la parcelle</label>
          <input class="m-ob-input" type="text" id="ob-parcel-name" value="${g}">
        </div>
        ${H?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${Pi.map(R=>`<option>${R}</option>`).join("")}
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
            ${Zt.map(R=>`<option${R==="Non irrigué"?" selected":""}>${R}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function ze(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub">
          <strong>${g}</strong> a été créée avec succès.
          ${a==="essential"?"<br>Une station météo virtuelle a été ajoutée au centre de la parcelle.":""}
        </p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Accéder au tableau de bord</button>
      </div>`}const tt={signup:D,verify:C,emailVerified:I,orgName:P,geoloc:w,orgInfo:x,networkChoice:b,networkPick:y,networkInfo:T,invite:M,plan:O,payment:N,paymentConfirmed:W,volumeChoice:Q,creating:Z,done:ie,parcelMap:he,parcelSource:be,parcelConfig:Ee,parcelDone:ze};function qe(){const J=tt[h()];if(!J)return;const G=J();G&&(f.innerHTML=G),Le()}function U(){l=[...f.querySelectorAll("#ob-invite-list .m-ob-input--email")].filter(G=>G.value.trim()).length}function se(){const J=window.L;J&&setTimeout(()=>{const G=f.querySelector("#ob-parcel-map");if(!G||G._leaflet_id)return;u=J.map(G,{zoomControl:!0,attributionControl:!1}).setView([d,p],15),J.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(u),J.circleMarker([d,p],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(u);const V=d+45e-5;v=J.marker([V,p],{icon:J.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),draggable:!0}).addTo(u),v.on("dragend",()=>{const H=v.getLatLng();d=H.lat,p=H.lng}),u.invalidateSize()},50)}const ee=new Set(["orgInfo","networkChoice","networkPick","plan","payment","volumeChoice"]);function ne(){const J=h();if(!ee.has(J))return;const G=f.querySelector("#ob-next");if(!G)return;let V=!0;J==="orgInfo"?V=f.querySelectorAll(".m-ob-pill--on").length>0:J==="networkChoice"?V=f.querySelectorAll("[data-join].m-ob-plan-card--on").length>0:J==="networkPick"?V=f.querySelectorAll("[data-net].m-ob-net-row--on").length>0:J==="plan"?V=f.querySelectorAll(".m-ob-sub-card--on").length>0:J==="payment"?V=[...f.querySelectorAll(".m-ob-form .m-ob-input")].every(_=>_.value.trim().length>0):J==="volumeChoice"&&(V=f.querySelectorAll("[data-volume].m-ob-plan-card--on").length>0),G.disabled=!V,G.style.opacity=V?"":"0.4"}function Le(){var G,V,H,_,R,Y,K,le,ae,ge,de,pe,xe,ke,Ce,Se;(G=f.querySelector("#ob-back"))==null||G.addEventListener("click",F),f.querySelectorAll("#ob-next").forEach(te=>te.addEventListener("click",E)),(V=f.querySelector("#ob-pw-eye"))==null||V.addEventListener("click",()=>{s=!s;const te=f.querySelector("#ob-pw");te&&(te.type=s?"text":"password");const oe=f.querySelector("#ob-pw-eye i");oe&&(oe.className=s?"bi bi-eye":"bi bi-eye-slash")}),f.querySelectorAll(".m-ob-sub-card").forEach(te=>{te.addEventListener("click",oe=>{oe.target.closest(".m-ob-feat-toggle")||(a=te.dataset.plan,qe())})}),f.querySelectorAll(".m-ob-feat-toggle").forEach(te=>{te.addEventListener("click",oe=>{oe.stopPropagation();const ve=f.querySelector(`#feat-${te.dataset.plan}`),_e=te.querySelector(".bi");if(!ve)return;const Be=ve.style.display!=="none";ve.style.display=Be?"none":"block",_e.className=`bi bi-chevron-${Be?"down":"up"}`})}),f.querySelectorAll("[data-join]").forEach(te=>{te.addEventListener("click",()=>{o=te.dataset.join==="oui",f.querySelectorAll("[data-join]").forEach(oe=>oe.classList.toggle("m-ob-plan-card--on",oe===te)),ne()})}),f.querySelectorAll("[data-net]").forEach(te=>{te.addEventListener("click",()=>{f.querySelectorAll("[data-net]").forEach(oe=>{const ve=oe===te;oe.classList.toggle("m-ob-net-row--on",ve),oe.querySelector(".bi").className=`bi bi-${ve?"check-circle-fill":"circle"}`}),ne()})});const J=()=>{var ve;(ve=f.querySelector("#ob-geoloc-btns"))==null||ve.remove();const te=f.querySelector("#ob-geoloc-addr");te&&(te.style.display="");const oe=window.L;oe&&setTimeout(()=>{const _e=f.querySelector("#ob-addr-map");if(!_e||_e._leaflet_id)return;const Be=oe.map(_e,{zoomControl:!0,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}).setView([46.3021,3.2938],13);oe.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:18}).addTo(Be),oe.marker([46.3021,3.2938]).addTo(Be)},50)};(H=f.querySelector("#ob-geoloc-allow"))==null||H.addEventListener("click",J),(_=f.querySelector("#ob-geoloc-manual"))==null||_.addEventListener("click",J),f.querySelectorAll(".m-ob-pill").forEach(te=>{te.addEventListener("click",()=>{te.classList.toggle("m-ob-pill--on"),ne()})}),(R=f.querySelector("#ob-add-member"))==null||R.addEventListener("click",()=>{const te=f.querySelector("#ob-invite-list"),oe=document.createElement("div");oe.innerHTML=L(),te.appendChild(oe.firstElementChild)}),(Y=f.querySelector("#ob-invite-list"))==null||Y.addEventListener("click",te=>{const oe=te.target.closest(".m-ob-invite-remove");if(!oe)return;const ve=oe.closest(".m-ob-invite-item");ve&&ve.remove()}),(K=f.querySelector("#ob-roles-info-toggle"))==null||K.addEventListener("click",()=>{const te=f.querySelector("#ob-roles-info-toggle"),oe=f.querySelector("#ob-roles-info"),ve=!oe.hidden;oe.hidden=ve,te.classList.toggle("m-rp-toggle--open",!ve),te.querySelector("span").textContent=ve?"Comparer les droits par rôle":"Masquer la comparaison des rôles"}),(le=f.querySelector("#ob-roles-info"))==null||le.addEventListener("click",te=>{const oe=te.target.closest(".m-ob-roles-tab");oe&&(f.querySelectorAll(".m-ob-roles-tab").forEach(ve=>ve.classList.toggle("m-ob-roles-tab--on",ve===oe)),f.querySelector("#ob-roles-info-detail").innerHTML=j(oe.dataset.role))}),(ae=f.querySelector("#ob-invite-list"))==null||ae.addEventListener("change",te=>{var _e;const oe=te.target.closest(".m-ob-invite-role-sel");if(!oe)return;const ve=(_e=oe.closest(".m-ob-invite-item"))==null?void 0:_e.querySelector(".m-ob-role-summary-wrap");ve&&(ve.innerHTML=z(oe.value))}),(ge=f.querySelector("#ob-remove-invites"))==null||ge.addEventListener("click",()=>{l=0,qe()}),(de=f.querySelector("#ob-send-invites"))==null||de.addEventListener("click",()=>{U(),E()}),(pe=f.querySelector("#ob-skip-invite"))==null||pe.addEventListener("click",()=>{l=0,E()}),f.querySelectorAll("[data-psource]").forEach(te=>{te.addEventListener("click",()=>{c=te.dataset.psource,f.querySelectorAll("[data-psource]").forEach(oe=>oe.classList.toggle("m-ob-plan-card--on",oe===te)),f.querySelector("#ob-link-sensors").style.display=c==="link"?"block":"none",f.querySelector("#ob-add-sensor-form").style.display=c==="add"?"block":"none"})}),f.querySelectorAll("[data-sensor-id]").forEach(te=>{te.addEventListener("change",()=>{const oe=parseInt(te.dataset.sensorId);te.checked?r.includes(oe)||r.push(oe):r=r.filter(Oe=>Oe!==oe);const _e=ce.filter(Oe=>r.includes(Oe.id)).filter(Oe=>!ia.has(Oe.model)),Be={};_e.forEach(Oe=>(ta[Oe.model]||[]).forEach(Ri=>{Be[Ri]=(Be[Ri]||0)+1}));const bt=Object.entries(Be).filter(([,Oe])=>Oe>1).map(([Oe])=>Oe),pt=f.querySelector("#ob-sensor-conflict"),zt=f.querySelector("#ob-sensor-conflict-msg");pt&&zt&&(bt.length>0?(zt.textContent=`Plusieurs capteurs mesurent la même métrique (${bt.join(", ")}). Décochez l'un des capteurs redondants.`,pt.style.display="flex"):pt.style.display="none")})}),f.querySelectorAll("[data-volume]").forEach(te=>{te.addEventListener("click",()=>{m=te.dataset.volume==="oui",f.querySelectorAll("[data-volume]").forEach(ve=>ve.classList.toggle("m-ob-plan-card--on",ve===te));const oe=f.querySelector("#ob-volume-field");oe&&(oe.style.display=m?"block":"none"),ne()})}),(xe=f.querySelector("#ob-skip-source"))==null||xe.addEventListener("click",()=>{c="smv",E()}),(ke=f.querySelector("#ob-parcel-name"))==null||ke.addEventListener("input",te=>{g=te.target.value}),h()==="parcelMap"&&se(),h()==="creating"&&setTimeout(()=>{n++,qe()},2200),(Ce=f.querySelector("#ob-finish"))==null||Ce.addEventListener("click",()=>{f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),i()},400)}),(Se=f.querySelector("#ob-see-parcel"))==null||Se.addEventListener("click",()=>{f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),i()},400)}),f.querySelectorAll(".m-ob-form .m-ob-input").forEach(te=>{te.addEventListener("input",ne)}),ne()}qe()}const ra=["Ail","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Colza","Courgette","Féverole","Haricot vert","Laitue","Lin oléagineux","Luzerne","Maïs fourrage","Maïs grain","Orge d'hiver","Orge de printemps","Oignon","Pêcher","Pois protéagineux","Poireau","Poirier","Pomme de terre","Pommier","Prairie","Prunier","Ray-grass","Soja","Tomate","Tournesol","Trèfle","Vigne"];function Vs({showBack:e=!0,btnLabel:i="Ajouter",showSkip:t=!1}={}){return`
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
            ${Object.entries(Ns).map(([n,a])=>`<option value="${n}">${a} (${n})</option>`).join("")}
          </select>
          <div class="m-ob-field" id="ob-sensor-depth-field" style="display:none;margin-bottom:12px">
            <label class="m-ob-label">Profondeur d'installation</label>
            <select class="m-ob-input m-ob-input--select" id="ob-sensor-depth"></select>
          </div>
          <button class="m-ob-cta" id="ob-next" style="margin:0 0 12px"><i class="bi bi-plus-lg"></i> ${i}</button>
          ${t?'<button class="m-ob-link" id="ob-skip-source" type="button" style="margin-bottom:8px">Passer cette étape</button>':""}
        </div>
      </div>
    </div>`}function Ws(e){const i=e.querySelector("#ob-sensor-model"),t=e.querySelector("#ob-sensor-depth-field"),n=e.querySelector("#ob-sensor-depth");if(!i||!t||!n)return;const a=()=>{const o=sa[i.value];if(!o){t.style.display="none";return}const s=[];for(let l=o[0];l<=o[1];l+=5)s.push(l);n.innerHTML=s.map(l=>`<option value="${l}">${l} cm</option>`).join(""),t.style.display=""};i.addEventListener("change",a),a()}async function ca(e,i){var t,n,a,o;try{const l=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${i}`)).json();return((t=l.address)==null?void 0:t.village)||((n=l.address)==null?void 0:n.town)||((a=l.address)==null?void 0:a.city)||((o=l.address)==null?void 0:o.municipality)||""}catch{return""}}function da(e){const i=document.getElementById("phone-screen");let t=46.3021,n=3.2938,a=null,o=null,s=46.3021+45e-5,l=3.2938,m=null,d=null,p="smv",v=[],u="",c=0;const r=["parcelMap","parcelSource","parcelData","parcelConfig","parcelDone"],g={parcelMap:"Parcelle",parcelSource:"Source de données",parcelData:"Données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"},f=document.createElement("div");f.id="parcel-creation-overlay",f.className="m-ob-overlay",i.appendChild(f);function S(){return r[c]}function h(){c++,w()}function k(){c--,w()}function A(y,T=!0){const j=S(),z=T&&c>0&&j!=="parcelDone",B=g[j]||"",L=r.filter(Q=>Q!=="parcelDone"),M=L.indexOf(j),O=M>=0?Math.round(M/L.length*100):100,N=j!=="parcelDone"?`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${O}%"></div></div>`:"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${z?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${B}</span>
          <button class="m-ob-back" id="ob-close" style="margin-left:auto"><i class="bi bi-x-lg"></i></button>
        </div>
        ${N}
        <div class="m-ob-body">${y}</div>
      </div>`}function q(){return A(`
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
    `,!1)}function $(){return A(`
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
    `)}function E(){if(p==="smv")return A(`
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
          ${y.map((T,j)=>`
            <label style="display:flex;align-items:center;gap:12px;padding:12px 14px;${j<y.length-1?"border-bottom:.5px solid rgba(0,0,0,.08)":""};cursor:pointer">
              <input type="checkbox" ${v.includes(T.id)?"checked":""} data-sensor-id="${T.id}" style="width:18px;height:18px;flex-shrink:0">
              <div>
                <div style="font-size:14px;font-weight:600">${T.model}</div>
                <div style="font-size:12px;color:#636366">${T.serial}</div>
              </div>
            </label>`).join("")}
        </div>
        <button class="m-ob-cta" id="ob-next">Continuer</button>
        <button class="m-ob-link" id="ob-skip-source" type="button">Passer cette étape</button>
      `)}return Vs({showBack:!0,btnLabel:"Continuer",showSkip:!0})}function F(){const y=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),T=new Set(["EC"]),j=ce.filter(M=>v.includes(M.id)),z=j.some(M=>y.has(M.model)),B=j.some(M=>T.has(M.model)),L=Zt.filter(M=>M!=="Non renseigné");return u||ca(t,n).then(M=>{if(!M)return;u=M;const O=f.querySelector("#ob-parcel-name");O&&!O._edited&&(O.value=M)}),A(`
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
        ${z?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${Pi.map(M=>`<option>${M}</option>`).join("")}
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
          <select class="m-ob-input m-ob-input--select">
            <option value="" disabled selected>Sélectionnez une culture</option>
            ${ra.map(M=>`<option>${M}</option>`).join("")}
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
            ${L.map(M=>`<option>${M}</option>`).join("")}
          </select>
        </div>
        `}
      </div>
      <button class="m-ob-cta" id="ob-next">Créer la parcelle</button>
    `)}function D(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub"><strong>${u||"La parcelle"}</strong> a été créée avec succès.</p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function C(){const y=window.L;y&&setTimeout(()=>{const T=f.querySelector("#ob-parcel-map");if(!T||T._leaflet_id)return;o=y.map(T,{zoomControl:!0,attributionControl:!1}).setView([t,n],15),y.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(o),y.circleMarker([t,n],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(o);const j=y.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});a=y.marker([t+45e-5,n],{icon:j,draggable:!0}).addTo(o),a.on("dragend",()=>{const z=a.getLatLng();t=z.lat,n=z.lng}),o.on("click",z=>{t=z.latlng.lat,n=z.latlng.lng,a.setLatLng([t,n])}),o.invalidateSize()},50)}function I(){const y=window.L;y&&(s=t+45e-5,l=n,setTimeout(()=>{const T=f.querySelector("#ob-smv-map");if(!T||T._leaflet_id)return;d=y.map(T,{zoomControl:!0,attributionControl:!1}).setView([t,n],15),y.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(d),y.circleMarker([t,n],{radius:8,color:"#fff",weight:2,fillColor:"#E05252",fillOpacity:1}).addTo(d);const j=y.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#0172A4;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});m=y.marker([s,l],{icon:j,draggable:!0}).addTo(d),m.on("dragend",()=>{const z=m.getLatLng();s=z.lat,l=z.lng}),d.on("click",z=>{s=z.latlng.lat,l=z.latlng.lng,m.setLatLng([s,l])}),d.invalidateSize()},50))}const P={parcelMap:q,parcelSource:$,parcelData:E,parcelConfig:F,parcelDone:D};function w(){var T;const y=(T=P[S()])==null?void 0:T.call(P);y&&(f.innerHTML=y),b()}function x(){f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),e()},400)}function b(){var T,j,z,B,L;(T=f.querySelector("#ob-back"))==null||T.addEventListener("click",k),(j=f.querySelector("#ob-close"))==null||j.addEventListener("click",x),f.querySelectorAll("#ob-next").forEach(M=>M.addEventListener("click",h)),Ws(f),f.querySelectorAll("[data-psource]").forEach(M=>{M.addEventListener("click",()=>{p=M.dataset.psource,f.querySelectorAll("[data-psource]").forEach(O=>O.classList.toggle("m-ob-plan-card--on",O===M))})}),f.querySelectorAll("[data-sensor-id]").forEach(M=>{M.addEventListener("change",()=>{const O=parseInt(M.dataset.sensorId);M.checked?v.includes(O)||v.push(O):v=v.filter(N=>N!==O)})}),(z=f.querySelector("#ob-skip-source"))==null||z.addEventListener("click",()=>{p="smv",h()});const y=f.querySelector("#ob-parcel-name");y&&y.addEventListener("input",M=>{M.target._edited=!0,u=M.target.value}),S()==="parcelMap"&&C(),S()==="parcelData"&&p==="smv"&&I(),(B=f.querySelector("#ob-see-parcel"))==null||B.addEventListener("click",x),(L=f.querySelector("#ob-finish"))==null||L.addEventListener("click",x)}w()}function ua(e){const i=document.getElementById("phone-screen");let t=0;const n=["sensorAdd","sensorDone"],a=document.createElement("div");a.id="sensor-creation-overlay",a.className="m-ob-overlay",i.appendChild(a);function o(){return n[t]}function s(){t++,v()}function l(){return Vs({showBack:!1,btnLabel:"Enregistrer le capteur",showSkip:!1})}function m(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Capteur ajouté !</h2>
        <p class="m-ob-sub">Votre capteur a été enregistré avec succès.</p>
        <button class="m-ob-cta" id="ob-see-sensor" style="margin-top:32px"><i class="bi bi-broadcast"></i> Voir le capteur</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function d(){a.classList.add("m-ob-overlay--out"),setTimeout(()=>{a.remove(),e()},400)}function p(){var u,c,r,g;(u=a.querySelector("#ob-close"))==null||u.addEventListener("click",d),(c=a.querySelector("#ob-next"))==null||c.addEventListener("click",s),(r=a.querySelector("#ob-see-sensor"))==null||r.addEventListener("click",d),(g=a.querySelector("#ob-finish"))==null||g.addEventListener("click",d),Ws(a)}function v(){var r;const u={sensorAdd:l,sensorDone:m},c=(r=u[o()])==null?void 0:r.call(u);c&&(a.innerHTML=c),p()}v()}function It(e){var i;return((i=e.integrations)==null?void 0:i.some(t=>t.startsWith("IRRÉ-LIS")))??!1}const wi="weenat-irrelis-config";function ft(e){try{const l=JSON.parse(localStorage.getItem(wi)||"{}");if(l[e])return l[e]}catch{}const t=60+e*13%50,n=Math.round(t/3),a=["Maïs","Maïs","Maïs","Blé","Maïs","Tournesol","Orge","Maïs"],o=a[e%a.length],s=String(5+e%16).padStart(2,"0");return{ru:t,rfu:n,culture:o,semisDate:`2026-04-${s}`}}function pa(e,i){try{const t=JSON.parse(localStorage.getItem(wi)||"{}");t[e]={...ft(e),...i},localStorage.setItem(wi,JSON.stringify(t))}catch{}}const Js=e=>`weenat-il-events-${e}`;function Us(e){try{return JSON.parse(localStorage.getItem(Js(e)))||[]}catch{return[]}}function ma(e,i){try{localStorage.setItem(Js(e),JSON.stringify(i))}catch{}}function va(e,i,t){const n=[];let a=!0,o=5+Math.floor(Math.abs(Math.sin(e*.13))*5);for(let s=0;s<i;s++)if(o<=0&&(a=!a,o=a?4+Math.floor(Math.abs(Math.sin(e*1337+s*.53))*7):1+Math.floor(Math.abs(Math.sin(e*2997+s*.91))*2.9)),o--,a)n.push(0);else{const l=8+Math.floor(Math.abs(Math.sin(e*7919+s*1.73))*22);n.push(s>=t?Math.round(l*.6):l)}return n}function Lt(e,i=14){const t=ft(e.id),{ru:n,rfu:a}=t,o=e.id,s=new Date("2026-04-01T00:00:00"),l=new Date("2026-10-01T00:00:00"),m=new Date;m.setHours(0,0,0,0);const d=864e5,p=Math.round((l-s)/d),v=Math.max(0,Math.min(Math.round((m-s)/d),p)),u=p,c=va(o,u,v),r={};for(const E of Us(e.id))r[E.iso]||(r[E.iso]={pluie:0,irrigation:0}),r[E.iso][E.type]=(r[E.iso][E.type]||0)+E.mm;const g=[],f=[];for(let E=0;E<u;E++){const{ru:F,rfu:D}=ba(t,s,E);g.push(F),f.push(D)}const S=[],h=[],k=[],A=[],q=[];let $=g[0]*.88;for(let E=0;E<u;E++){const F=new Date(s.getTime()+E*d).toISOString().split("T")[0],D=r[F]||{pluie:0,irrigation:0},C=Math.max(.8,Math.min(5,1+4*Math.pow(Math.max(0,E/150),.6)+Math.sin(o*999+E*.57)*.3)),I=c[E]+D.pluie,P=D.irrigation;k.push(+C.toFixed(1)),h.push(I),A.push(P);const w=g[E];$=$-C+I+P;const x=Math.max(0,$-w),b=Math.min(x,(I+P)*.5);q.push(+b.toFixed(1)),$=Math.max(0,Math.min(w,$)),S.push(+$.toFixed(1))}return{reservoir:S,pluie:h,etp:k,drainage:q,irrigation:A,nDays:v,nFcDays:i,ru:n,rfu:a,cfg:t,apr1:s,ruArr:g,rfuArr:f}}function zi(e,i){const t=Lt(e,14),n=t.nDays;switch(i){case"Aujourd'hui":return t.reservoir[n]??0;case"Demain":return t.reservoir[n+1]??0;case"J+3":return t.reservoir[n+3]??0;case"J+5":return t.reservoir[n+5]??0;default:return t.reservoir[n]??0}}function Qt(e,i,t){return e>t?"#007aff":e>=i?"#24B066":e>=t*.15?"#E8A020":"#E05252"}function Gs(e,i,t,n){if(e==="7j"){const a=Math.max(0,i-7);return{startIdx:a,displayLen:Math.min(n-a,7+t)}}if(e==="30j"){const a=Math.max(0,i-30);return{startIdx:a,displayLen:Math.min(n-a,30+t)}}return{startIdx:0,displayLen:n}}const fa={Maïs:[{label:"Levée",daysAfter:10},{label:"4 feuilles",daysAfter:22},{label:"10 feuilles",daysAfter:38},{label:"15 feuilles",daysAfter:52},{label:"Floraison",daysAfter:68},{label:"Sl. laiteux",daysAfter:83},{label:"70% humidité",daysAfter:100}],Blé:[{label:"Levée",daysAfter:12},{label:"Tallage",daysAfter:35},{label:"Épiaison",daysAfter:95},{label:"Floraison",daysAfter:110},{label:"Maturité",daysAfter:150}],Orge:[{label:"Levée",daysAfter:10},{label:"Tallage",daysAfter:30},{label:"Épiaison",daysAfter:85},{label:"Floraison",daysAfter:95},{label:"Maturité",daysAfter:135}],Colza:[{label:"Levée",daysAfter:8},{label:"4-6 feuilles",daysAfter:25},{label:"Floraison",daysAfter:70},{label:"Maturité",daysAfter:110}],Tournesol:[{label:"Levée",daysAfter:10},{label:"Bouton étoilé",daysAfter:45},{label:"Floraison",daysAfter:65},{label:"Maturité",daysAfter:105}],Sorgho:[{label:"Levée",daysAfter:12},{label:"Tallage",daysAfter:30},{label:"Floraison",daysAfter:75},{label:"Maturité",daysAfter:115}],Betterave:[{label:"Levée",daysAfter:15},{label:"Couverture du sol",daysAfter:55},{label:"Grossissement racine",daysAfter:90},{label:"Récolte",daysAfter:160}]},is=[{daysAfter:0,factor:.1},{daysAfter:10,factor:.22},{daysAfter:22,factor:.42},{daysAfter:38,factor:.66},{daysAfter:52,factor:.85},{daysAfter:68,factor:1},{daysAfter:83,factor:1},{daysAfter:100,factor:.97}];function ba(e,i,t){if(e.culture!=="Maïs")return{ru:e.ru,rfu:e.rfu};const n=new Date(e.semisDate+"T00:00:00"),a=Math.round((n-i)/864e5),o=t-a;if(o<0)return{ru:Math.round(e.ru*.08),rfu:Math.round(e.rfu*.08)};let s=is[0].factor;for(const d of is)o>=d.daysAfter&&(s=d.factor);const l=Math.round(e.ru*s),m=Math.round(l*e.rfu/e.ru);return{ru:l,rfu:m}}function Si(e){if(e.length<2)return"";let i=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let t=0;t<e.length-1;t++){const n=e[Math.max(t-1,0)],a=e[t],o=e[t+1],s=e[Math.min(t+2,e.length-1)],l=a.x+(o.x-n.x)/6,m=a.y+(o.y-n.y)/6,d=o.x-(s.x-a.x)/6,p=o.y-(s.y-a.y)/6;i+=` C${l.toFixed(1)},${m.toFixed(1)} ${d.toFixed(1)},${p.toFixed(1)} ${o.x.toFixed(1)},${o.y.toFixed(1)}`}return i}const Ys=["jan.","fév.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],Ks={t:24,r:20,b:28,l:40},ki={t:8,r:20,b:28,l:40};function ha(e,i,t,n,a){const{reservoir:o,nDays:s,nFcDays:l,cfg:m,apr1:d,ruArr:p,rfuArr:v}=t,u=Ks,c=e-u.l-u.r,r=i-u.t-u.b,g=o.map((V,H)=>V-p[H]),f=v.map((V,H)=>V-p[H]),S=p.map(V=>-V),h=g.slice(n,n+a),k=p.slice(n,n+a),A=Math.min(0,...h),q=Math.max(...k),E=n===0&&a===o.length?Math.min(A,-q)*1.05:Math.min(A*1.15,-5),F=V=>u.t+Math.max(E,Math.min(0,V))/E*r,D=V=>u.l+(V-n)/Math.max(a-1,1)*c,C=u.t+r,I=u.t;function P(V){let H="";for(let _=0;_<a;_++){const R=Math.min(n+_,V.length-1),Y=D(n+_).toFixed(1),K=_>0?V[Math.min(n+_-1,V.length-1)]:null;K!==null&&V[R]!==K&&(H+=`${Y},${F(K).toFixed(1)} `),H+=`${Y},${F(V[R]).toFixed(1)} `}return H.trim()}const w=P(f),x=w.split(" ").reverse().join(" "),y=P(S).split(" ").reverse().join(" "),T=`${u.l},${I} ${(u.l+c).toFixed(1)},${I} ${x}`,j=`${w} ${y}`,z=Math.min(s,f.length-1),B=(F(f[z])-5).toFixed(1),L=`
    <polygon points="${T}" fill="#24B066" opacity="0.1" clip-path="url(#il-c)"/>
    <polygon points="${j}"   fill="#E05252" opacity="0.1" clip-path="url(#il-c)"/>
    <polyline points="${w}" fill="none" stroke="#24B066" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.65" clip-path="url(#il-c)"/>
    <text x="${(u.l+c-4).toFixed(1)}" y="${B}" text-anchor="end" font-size="10" font-family="-apple-system,sans-serif" fill="#24B066" font-weight="700">RFU</text>`,M=new Date(m.semisDate+"T00:00:00"),O=Math.round((M-d)/864e5),N=(fa[m.culture]||[]).map(V=>{const H=O+V.daysAfter;if(H<n||H>=n+a)return"";const _=D(H).toFixed(1);return`<line x1="${_}" y1="${I}" x2="${_}" y2="${C}" stroke="#4CAF50" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.55"/>
<circle class="il-stade-dot" data-label="${V.label}" cx="${_}" cy="${C}" r="9" fill="transparent" style="cursor:pointer"/>
<circle cx="${_}" cy="${C}" r="4.5" fill="#4CAF50" stroke="#fff" stroke-width="1.5" style="pointer-events:none"/>`}).join("");let Q="",W="";for(let V=n;V<n+a;V++){const H=new Date(d.getTime()+V*864e5);if(H.getDate()===1){const _=D(V).toFixed(1);Q+=`<line x1="${_}" y1="${u.t}" x2="${_}" y2="${C}" stroke="rgba(0,0,0,.18)" stroke-width="1" stroke-dasharray="3,4"/>`;const R=new Date(H.getFullYear(),H.getMonth()+1,1),Y=Math.round((R-d)/864e5),K=Math.min(Y,n+a-1),le=D((V+K)/2).toFixed(1),ae=String(H.getFullYear()).slice(-2),ge=`${Ys[H.getMonth()]} ${ae}`;W+=`<text x="${le}" y="${i-6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${ge}</text>`}}const Z=`
    <text x="${u.l-6}" y="${(F(0)+11).toFixed(1)}" text-anchor="end" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">0</text>
    <text x="${u.l-6}" y="${(F(E)-3).toFixed(1)}" text-anchor="end" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${Math.round(E)}</text>
    <text x="${u.l-6}" y="${u.t-7}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`,he=g.slice(n,n+a).map((V,H)=>({x:D(n+H),y:F(V)})),be=s-n,Ee=he.slice(0,Math.min(Math.max(be+1,1),he.length)),ze=Math.min(be+l+1,he.length),tt=be>=0&&be<he.length?he.slice(be,ze):[],qe=Si(Ee),U=tt.length>=2?Si(tt):"",se=D(Math.max(n,Math.min(s,n+a-1))).toFixed(1),ee=Ee.length?Ee[Ee.length-1].x.toFixed(1):se,ne=qe?`${qe} L${ee},${I} L${u.l},${I} Z`:"",Le=Math.max(u.l,Math.min(u.l+c,+se)),J=u.l+c-Le,G=J>0?`<rect x="${Le.toFixed(1)}" y="${u.t}" width="${J.toFixed(1)}" height="${r}" fill="url(#il-hatch)" clip-path="url(#il-c)"/>`:"";return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <defs>
      <clipPath id="il-c"><rect x="${u.l}" y="${u.t}" width="${c}" height="${r}"/></clipPath>
      <linearGradient id="il-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0172A4" stop-opacity="0.01"/>
        <stop offset="100%" stop-color="#0172A4" stop-opacity="0.2"/>
      </linearGradient>
      <pattern id="il-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.22)" stroke-width="3"/>
      </pattern>
    </defs>
    ${L}
    ${G}
    <g clip-path="url(#il-c)">${Q}</g>
    ${ne?`<path d="${ne}" fill="url(#il-g)" clip-path="url(#il-c)"/>`:""}
    ${qe?`<path d="${qe}" fill="none" stroke="#0172A4" stroke-width="2.5" stroke-linejoin="round" clip-path="url(#il-c)"/>`:""}
    ${U?`<path d="${U}" fill="none" stroke="#0172A4" stroke-width="2" stroke-dasharray="7,5" stroke-linejoin="round" opacity="0.7" clip-path="url(#il-c)"/>`:""}
    <line x1="${se}" y1="${u.t}" x2="${se}" y2="${C}" stroke="#1c1c1e" stroke-width="2"/>
    <text x="${se}" y="${u.t-6}" text-anchor="middle" font-size="11" font-family="-apple-system,sans-serif" fill="#1c1c1e" font-weight="700">Aujourd'hui</text>
    ${Z}
    ${W}
    <rect x="${u.l}" y="${u.t}" width="${c}" height="${r}" fill="none" stroke="rgba(0,0,0,.07)" stroke-width="1"/>
    ${N}
  </svg>`}function ga(e,i,t,n,a){const{pluie:o,etp:s,drainage:l,irrigation:m,nDays:d,nFcDays:p,apr1:v}=t,u=ki,c=e-u.l-u.r,r=i-u.t-u.b,g=u.t+r/2,f=o.slice(n,n+a),S=s.slice(n,n+a),h=l.slice(n,n+a),k=m.slice(n,n+a),A=d+p,q=j=>n+j<=A,$=Math.max(...f.map((j,z)=>(q(z)?j:0)+(k[z]||0)),1),E=Math.max(...S.map((j,z)=>q(z)?j+(h[z]||0):0),1),F=r/2,D=Math.max(1.5,c/a*.8),C=j=>u.l+j/Math.max(a-1,1)*c-D/2;let I="";for(let j=0;j<a;j++){const z=!q(j),B=z?0:f[j],L=z?0:S[j],M=z?0:h[j],O=B/$*F,N=k[j]/$*F,Q=L/E*F,W=M/E*F,Z=C(j).toFixed(1),ie=D.toFixed(1);B>0&&(I+=`<rect x="${Z}" y="${(g-O).toFixed(1)}" width="${ie}" height="${O.toFixed(1)}" fill="#2E75B6" opacity="0.85"/>`),k[j]>0&&(I+=`<rect x="${Z}" y="${(g-O-N).toFixed(1)}" width="${ie}" height="${N.toFixed(1)}" fill="#FF8C00" opacity="0.85"/>`),z||(I+=`<rect x="${Z}" y="${g.toFixed(1)}" width="${ie}" height="${Q.toFixed(1)}" fill="#00887E" opacity="0.75"/>`),M>0&&(I+=`<rect x="${Z}" y="${(g+Q).toFixed(1)}" width="${ie}" height="${W.toFixed(1)}" fill="#8B1A1A" opacity="0.75"/>`)}const P=[`<text x="${u.l-6}" y="${(u.t+13).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">+${$.toFixed(1)}</text>`,`<text x="${u.l-6}" y="${(g+4).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">0</text>`,`<text x="${u.l-6}" y="${(u.t+r).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">-${E.toFixed(1)}</text>`,`<text x="${u.l-6}" y="${u.t-1}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`].join("");let w="";for(let j=0;j<a;j++){const z=n+j,B=new Date(v.getTime()+z*864e5);if(B.getDate()===1){const L=new Date(B.getFullYear(),B.getMonth()+1,1),M=Math.round((L-v)/864e5),O=Math.min(M-n,a-1),N=(j+O)/2,Q=(u.l+N/Math.max(a-1,1)*c).toFixed(1),W=String(B.getFullYear()).slice(-2);w+=`<text x="${Q}" y="${i-6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${Ys[B.getMonth()]} ${W}</text>`;const Z=(u.l+j/Math.max(a-1,1)*c).toFixed(1);w+=`<line x1="${Z}" y1="${u.t}" x2="${Z}" y2="${u.t+r}" stroke="rgba(0,0,0,.12)" stroke-width="1" stroke-dasharray="3,4"/>`}}const x=d-n,b=x>=0&&x<a?(u.l+x/Math.max(a-1,1)*c).toFixed(1):null,y=b!==null?Math.max(u.l,Math.min(u.l+c,+b)):null,T=y!==null&&u.l+c-y>0?`<rect x="${y.toFixed(1)}" y="${u.t}" width="${(u.l+c-y).toFixed(1)}" height="${r}" fill="url(#il-hatch-h)"/>`:"";return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <defs>
      <pattern id="il-hatch-h" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.05)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.22)" stroke-width="3"/>
      </pattern>
    </defs>
    <line x1="${u.l}" y1="${g.toFixed(1)}" x2="${u.l+c}" y2="${g.toFixed(1)}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>
    ${T}
    ${I}
    ${b?`<line x1="${b}" y1="${u.t}" x2="${b}" y2="${u.t+r}" stroke="#1c1c1e" stroke-width="2"/>`:""}
    ${P}
    ${w}
    <rect x="${u.l}" y="${u.t}" width="${c}" height="${r}" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="1"/>
  </svg>`}function ya(){const e=(o,s)=>`<svg width="20" height="10" style="flex-shrink:0"><line x1="0" y1="5" x2="20" y2="5" stroke="${o}" stroke-width="2.5"${s?' stroke-dasharray="5,3"':""}/></svg>`,i=(o,s)=>`<span style="display:inline-block;width:14px;height:10px;background:${o};opacity:${s};border-radius:2px;flex-shrink:0"></span>`,t=o=>`<span style="display:inline-block;width:10px;height:10px;background:${o};border-radius:2px;flex-shrink:0"></span>`,n=(o,s)=>`<span style="display:flex;align-items:center;gap:6px;font-size:13px;color:#3a3a3c"><span style="flex-shrink:0">${o}</span><span>${s}</span></span>`,a=o=>`<div style="display:flex;flex-direction:column;gap:10px">${o.join("")}</div>`;return`<div style="display:flex;flex-direction:column;gap:16px;padding:4px 0">
    ${a([n(e("#0172A4",!1),"Déficit (réserve)"),n(e("#0172A4",!0),"Prévision J+14"),n(i("#24B066","1"),"RFU — réserve facilement utilisable"),n(i("#E05252","1"),"Réservoir de survie")])}
    ${a([n(t("#2E75B6"),"Pluie"),n(t("#FF8C00"),"Irrigation"),n(t("#00887E"),"ETP"),n(t("#8B1A1A"),"Drainage")])}
  </div>`}function xa(e,i){const{nDays:t,nFcDays:n,pluie:a,etp:o,drainage:s,irrigation:l}=e,m=e.reservoir.length,{startIdx:d,displayLen:p}=Gs(i,t,n,m),v=Math.min(d+p,t),u=r=>r.slice(d,v).reduce((g,f)=>g+f,0),c=(r,g,f)=>`<div style="display:flex;justify-content:space-between;align-items:baseline;gap:6px;padding:11px 0;border-bottom:.5px solid rgba(0,0,0,.07)">
      <span style="font-size:14px;color:#3a3a3c">${g}</span>
      <span style="font-size:15px;font-weight:700;color:${r}">${f} mm</span>
    </div>`;return`<div style="padding:0 0 4px">
    ${c("#2E75B6","Pluie",Math.round(u(a)))}
    ${c("#00887E","ETP",+u(o).toFixed(1))}
    ${c("#FF8C00","Irrigation",Math.round(u(l)))}
    ${c("#8B1A1A","Drainage",+u(s).toFixed(1))}
  </div>`}function $a(e,i,t,n,a){const{reservoir:o,ru:s,rfu:l,nDays:m,nFcDays:d,apr1:p,ruArr:v,rfuArr:u,pluie:c,etp:r,drainage:g,irrigation:f}=i,S=Ks,h=a+ki.t,k=e.clientWidth,A=e.clientHeight,q=k-S.l-S.r;e.style.position="relative";const $=document.createElement("div");$.style.cssText="position:absolute;background:rgba(28,28,30,.88);color:#fff;border-radius:10px;padding:6px 11px;font-size:13px;font-weight:600;pointer-events:none;display:none;white-space:nowrap;z-index:20;transform:translate(-50%,-100%);margin-top:-10px;font-family:-apple-system,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.25)";const E=document.createElement("div");E.style.cssText=`position:absolute;width:1px;background:rgba(100,100,100,.35);pointer-events:none;display:none;top:${S.t}px`,E.style.height=A-S.t-ki.b+"px",e.appendChild(E),e.appendChild($);const F=b=>{const y=Math.max(0,Math.min(1,(b-S.l)/q));return Math.max(0,Math.min(o.length-1,Math.round(t+y*(n-1))))},D=(b,y,T)=>{const j=o[b],z=b>=m,B=v?v[Math.min(b,v.length-1)]:s,L=u?u[Math.min(b,u.length-1)]:l,M=+(j-B).toFixed(1),O=Qt(j,L,B),N=I(b);$.innerHTML=`<span style="color:${O}">${M} mm</span>&ensp;<span style="font-size:11px;opacity:.7">${N}${z?" ·&thinsp;prév.":""}</span>`,$.style.left=Math.max(60,Math.min(e.clientWidth-60,y))+"px",$.style.top=Math.min(T,a-20)+"px",$.style.display="block"},C=(b,y,T)=>{const j=I(b),B=[...b>m+d?[]:[["#2E75B6","Pluie",c[b]],["#00887E","ETP",r[b]],["#8B1A1A","Drainage",g[b]]],["#FF8C00","Irrigation",f[b]]].filter(([,,L])=>L>0);$.innerHTML=B.length?B.map(([L,M,O])=>`<span style="color:${L}">${M} ${O} mm</span>`).join("&ensp;·&ensp;")+`&ensp;<span style="font-size:11px;opacity:.7">${j}</span>`:`<span style="opacity:.7">Aucun mouvement</span>&ensp;<span style="font-size:11px;opacity:.7">${j}</span>`,$.style.left=Math.max(60,Math.min(e.clientWidth-60,y))+"px",$.style.top=Math.max(h+14,Math.min(T,e.clientHeight-10))+"px",$.style.display="block"},I=b=>new Date(p.getTime()+b*864e5).toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),P=(b,y)=>{const T=e.getBoundingClientRect(),j=y-T.top;if(j>e.clientHeight){w();return}const z=b-T.left,B=F(z);j<=a?D(B,z,j):C(B,z,j),E.style.left=z+"px",E.style.display="block"},w=()=>{$.style.display="none",E.style.display="none"};e.addEventListener("mousemove",b=>P(b.clientX,b.clientY)),e.addEventListener("mouseleave",w),e.addEventListener("touchmove",b=>{b.preventDefault(),P(b.touches[0].clientX,b.touches[0].clientY)},{passive:!1}),e.addEventListener("touchend",w);let x=null;e.querySelectorAll(".il-stade-dot").forEach(b=>{b.addEventListener("click",y=>{y.stopPropagation();const T=e.getBoundingClientRect(),j=y.clientX-T.left,z=y.clientY-T.top;$.innerHTML=`<span style="color:#34c759">${b.dataset.label}</span>`,$.style.left=Math.max(60,Math.min(e.clientWidth-60,j))+"px",$.style.top=z+"px",$.style.display="block",E.style.display="none",clearTimeout(x),x=setTimeout(w,2200)})})}function wa(e,i,t="saison"){const n=e.clientWidth,a=e.clientHeight;if(!n||!a)return;const{nDays:o,nFcDays:s}=i,l=i.reservoir.length,{startIdx:m,displayLen:d}=Gs(t,o,s,l),p=Math.round(a*3/5),v=a-p;e.innerHTML=ha(n,p,i,m,d)+ga(n,v,i,m,d),$a(e,i,m,d,p)}function Sa(e,i){const t=ft(e.id),n=document.createElement("div");n.innerHTML=`
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
    </div>`;const a=ue({title:`Configuration — ${e.name}`,body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelector("#il-cfg-save").addEventListener("click",()=>{pa(e.id,{culture:n.querySelector("#il-culture").value,semisDate:n.querySelector("#il-semis").value,ru:+n.querySelector("#il-ru").value||t.ru,rfu:+n.querySelector("#il-rfu").value||t.rfu}),a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{a.remove(),i==null||i()},280),X("Configuration enregistrée")})}function ka(e,i){let t=[...Us(e.id)],n=!0,a=!0,o=null;function s(d){return new Date(d+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function l(){const p=[...t.filter(u=>u.type==="pluie"&&n||u.type==="irrigation"&&a)].sort((u,c)=>c.iso.localeCompare(u.iso)),v=p.map(u=>{const c=t.indexOf(u),r=u.type==="pluie",g=r?"rgba(46,117,182,.12)":"rgba(255,140,0,.12)",f=r?"#2E75B6":"#FF8C00";return`
        <div style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:.5px solid rgba(0,0,0,.07)">
          <div style="width:32px;height:32px;border-radius:50%;background:${g};display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="bi ${r?"bi-cloud-rain":"bi-droplet-fill"}" style="color:${f};font-size:14px"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:600;color:#1c1c1e">${r?"Pluie":"Irrigation"}</div>
            <div style="font-size:12px;color:#8e8e93">${s(u.iso)}</div>
          </div>
          <div style="font-size:15px;font-weight:700;color:${f};margin-right:4px">${u.mm} mm</div>
          <button class="gpi-edit" data-idx="${c}" style="background:none;border:none;cursor:pointer;padding:4px;color:#8e8e93"><i class="bi bi-pencil" style="font-size:14px"></i></button>
          <button class="gpi-del" data-idx="${c}" style="background:none;border:none;cursor:pointer;padding:4px;color:#E05252"><i class="bi bi-trash" style="font-size:14px"></i></button>
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
      </div>`,o.querySelector("#gpi-back").addEventListener("click",()=>fe()),o.querySelector("#gpi-add-pluie").addEventListener("click",()=>m("pluie")),o.querySelector("#gpi-add-irrig").addEventListener("click",()=>m("irrigation")),o.querySelector("#gpi-save").addEventListener("click",()=>{ma(e.id,t),fe(),i==null||i(),X(`${t.length} événement(s) enregistré(s)`)}),o.querySelectorAll(".gpi-check").forEach(u=>{u.addEventListener("change",()=>{u.dataset.t==="pluie"?n=u.checked:a=u.checked,l()})}),o.querySelectorAll(".gpi-edit").forEach(u=>{u.addEventListener("click",()=>{m(t[+u.dataset.idx].type,+u.dataset.idx)})}),o.querySelectorAll(".gpi-del").forEach(u=>{u.addEventListener("click",()=>{t.splice(+u.dataset.idx,1),l()})})}function m(d,p=-1){var g;const v=p>=0?t[p]:null,u=document.createElement("div");u.innerHTML=`
      <div style="padding:4px 0 8px">
        <div class="m-form-label">Date</div>
        <input id="gpi-date" type="date" value="${(v==null?void 0:v.iso)??new Date().toISOString().split("T")[0]}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
        <div class="m-form-label">Quantité (mm)</div>
        <input id="gpi-mm" type="number" value="${(v==null?void 0:v.mm)??""}" placeholder="ex : 25" min="0" max="300" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
        <button id="gpi-sheet-save" style="width:100%;background:${d==="pluie"?"#2E75B6":"#FF8C00"};color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">${p>=0?"Modifier":"Ajouter"}</button>
        ${p>=0?`<button id="gpi-sheet-transform" style="width:100%;background:none;border:none;color:#8e8e93;font-size:14px;font-weight:600;cursor:pointer;padding:12px 0 0;text-align:center">Transformer en ${d==="pluie"?"irrigation":"pluie"}</button>`:""}
      </div>`;const c=d==="pluie"?p>=0?"Modifier la pluie":"Ajouter une pluie":p>=0?"Modifier l'irrigation":"Ajouter une irrigation",r=ue({title:c,body:u,doneLabel:"Fermer",onDone:()=>{}});u.querySelector("#gpi-sheet-save").addEventListener("click",()=>{const f=u.querySelector("#gpi-date").value,S=parseFloat(u.querySelector("#gpi-mm").value);if(!f||isNaN(S)||S<=0)return;const h={type:d,iso:f,mm:+S.toFixed(1)};p>=0?t[p]=h:t.push(h),r.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{r.remove(),l()},280)}),(g=u.querySelector("#gpi-sheet-transform"))==null||g.addEventListener("click",()=>{const f=d==="pluie"?"irrigation":"pluie";t[p]={...t[p],type:f},r.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{r.remove(),l()},280),X(f==="irrigation"?"Transformé en irrigation":"Transformé en pluie")})}o=$e(""),o.style.cssText="display:flex;flex-direction:column;background:#f2f2f7",l()}function Zs(e){const i=Lt(e,14),{reservoir:t,pluie:n,etp:a,drainage:o,irrigation:s,nDays:l,ru:m,rfu:d,cfg:p,ruArr:v,rfuArr:u}=i,c=t[l]??t[l-1]??0,r=v[Math.min(l,v.length-1)],g=u[Math.min(l,u.length-1)],f=Qt(c,g,r),S=Math.round(c/r*100),h=Math.max(0,l-7),k=W=>W.slice(h,l).reduce((Z,ie)=>Z+ie,0),A=Math.round(k(n)),q=Math.round(k(s)),$=+k(a).toFixed(1),E=+k(o).toFixed(1),F=t.slice(h,l+1),D=260,C=52,I=4,P=4,w=4,x=4,b=D-I-P,y=C-w-x,T=W=>w+y-Math.max(0,Math.min(1.02,W/r))*y,j=W=>I+W/Math.max(F.length-1,1)*b,z=F.map((W,Z)=>({x:j(Z),y:T(W)})),B=Si(z),L=T(g).toFixed(1),M=(w+y).toFixed(1),O=B?`${B} L${j(F.length-1).toFixed(1)},${M} L${I},${M} Z`:"",N=`<svg viewBox="0 0 ${D} ${C}" width="${D}" height="${C}" style="display:block;width:100%;height:${C}px">
    <rect x="${I}" y="${w}" width="${b}" height="${(+L-w).toFixed(1)}" fill="#24B066" opacity="0.1"/>
    <rect x="${I}" y="${L}" width="${b}" height="${(+M-+L).toFixed(1)}" fill="#E05252" opacity="0.08"/>
    <line x1="${I}" y1="${L}" x2="${I+b}" y2="${L}" stroke="#24B066" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
    ${O?`<path d="${O}" fill="#0172A4" opacity="0.08"/>`:""}
    ${B?`<path d="${B}" fill="none" stroke="#0172A4" stroke-width="2" stroke-linejoin="round"/>`:""}
  </svg>`,Q=(W,Z,ie)=>`<div style="flex:1;text-align:center">
    <div style="font-size:13px;font-weight:700;color:${W}">${ie}</div>
    <div style="font-size:10px;color:#8e8e93">${Z}</div>
  </div>`;return`<div class="m-widget-card" data-widget-id="irrelis">
    <div style="padding:12px 14px 10px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-size:11px;color:#0172A4;font-weight:700;background:rgba(1,114,164,.09);border-radius:6px;padding:2px 7px">Irré-LIS</span>
        <span style="font-size:14px;font-weight:700;color:${f}">${c} <span style="font-size:11px;font-weight:400">mm</span></span>
        <span style="font-size:11px;color:#8e8e93">${S}% RU</span>
      </div>
      ${N}
      <div style="display:flex;gap:0;margin-top:8px;padding-top:8px;border-top:.5px solid rgba(0,0,0,.07)">
        ${Q("#2E75B6","Pluie 7j",A+" mm")}
        ${Q("#FF8C00","Irrigation 7j",q+" mm")}
        ${Q("#00887E","ETP 7j",$+" mm")}
        ${Q("#8B1A1A","Drainage 7j",E+" mm")}
      </div>
      <button class="m-il-detail-btn m-widget-details-link" data-il-plot="${e.id}">Voir détails →</button>
    </div>
  </div>`}function Ea(e,i){const t=new URLSearchParams(location.search).get("role")==="adherent",n=re.filter(s=>It(s)&&(!t||s.orgId===hi)).sort((s,l)=>s.name.localeCompare(l.name,"fr")),a=document.createElement("div");a.style.cssText="padding:4px 0",a.innerHTML=n.map(s=>`
    <button class="il-plot-pick" data-id="${s.id}" style="
      display:flex;align-items:center;width:100%;padding:14px 16px;
      border:none;border-bottom:.5px solid rgba(0,0,0,.06);font-family:inherit;cursor:pointer;gap:12px;
      background:${s.id===e.id?"rgba(1,114,164,.07)":"none"}">
      <i class="bi bi-geo-alt" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
      <span style="flex:1;font-size:16px;color:#1c1c1e;font-weight:${s.id===e.id?"700":"400"};text-align:left">${s.name}</span>
      ${s.id===e.id?'<i class="bi bi-check2" style="color:#0172A4;font-size:18px;flex-shrink:0"></i>':""}
    </button>`).join("");const o=ue({title:"Parcelles Irré-LIS",body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelectorAll(".il-plot-pick").forEach(s=>{s.addEventListener("click",()=>{const l=re.find(m=>m.id===+s.dataset.id);o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{o.remove(),l&&l.id!==e.id&&i(l)},280)})})}function Xs(e){const i=ft(e.id);let t="saison";const n=$e(`
    <div class="m-fs-topbar">
      <button class="m-fs-back" id="il-back"><i class="bi bi-chevron-left"></i>Parcelle</button>
      <button id="il-plot-picker" style="flex:1;display:flex;align-items:center;justify-content:center;gap:5px;background:none;border:none;cursor:pointer;padding:0 4px;min-width:0">
        <span style="font-size:16px;font-weight:700;color:#1c1c1e;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.name}</span>
        <i class="bi bi-chevron-down" style="font-size:10px;color:#8e8e93;flex-shrink:0;margin-top:1px"></i>
      </button>
      <div style="width:62px;flex-shrink:0"></div>
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
  `);n.classList.add("m-fs-layer");const a=n.querySelector("#il-chart-area");let o=Lt(e,14),s=null;function l(){a.clientWidth&&a.clientHeight&&wa(a,o,t)}s=new ResizeObserver(()=>requestAnimationFrame(l)),s.observe(a),requestAnimationFrame(l),n.querySelector("#il-back").addEventListener("click",()=>{s==null||s.disconnect(),fe()}),n.querySelector("#il-plot-picker").addEventListener("click",()=>{Ea(e,d=>{s==null||s.disconnect(),fe(),requestAnimationFrame(()=>Xs(d))})}),n.querySelector("#il-period").addEventListener("change",d=>{t=d.target.value,l()}),n.querySelector("#il-btn-cumuls").addEventListener("click",()=>{const d=document.createElement("div");d.innerHTML=xa(o,t),ue({title:"Cumuls sur la période",body:d,doneLabel:"Fermer",onDone:()=>{}})}),n.querySelector("#il-btn-legend").addEventListener("click",()=>{const d=document.createElement("div");d.innerHTML=ya(),ue({title:"Légende",body:d,doneLabel:"Fermer",onDone:()=>{}})});const m=()=>{o=Lt(e,14),l()};n.querySelector("#il-btn-config").addEventListener("click",()=>Sa(e,m)),n.querySelector("#il-btn-pluv").addEventListener("click",()=>ka(e,m))}const Qs=Object.freeze(Object.defineProperty({__proto__:null,getIrrelisConfig:ft,getIrrelisDailyData:Lt,getIrrelisVal:zi,hasIrrelis:It,irrelisColor:Qt,irrelisMobileWidget:Zs,openIrrelisDetail:Xs},Symbol.toStringTag,{value:"Module"})),en={admin:100,adherent:1,new:41},tn="weenat-m-dash";function vt(){try{return JSON.parse(localStorage.getItem(tn))||{}}catch{return{}}}function St(e){try{localStorage.setItem(tn,JSON.stringify({...vt(),...e}))}catch{}}const Ae=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls préférés",info:"Mes cumuls préférés.<br><br>Ajoutez ici les valeurs des cumuls qui sont importants pour vous en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures préférées",info:"Mes mesures préférées.<br><br>Ajoutez ici les indicateurs de vos parcelles ou capteurs qui vous intéressent en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"radar_pluie",title:"Radar de pluie",icon:"bi-cloud-rain-heavy",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"irrelis",title:"Bilan Irré-LIS",icon:"bi-moisture",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function La(e,i,t){var o;const n=document.getElementById("phone-screen");(o=document.querySelector(".m-winfo-overlay"))==null||o.remove();const a=document.createElement("div");a.className="m-winfo-overlay",a.innerHTML=`
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
    </div>`,o.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),a.appendChild(o),requestAnimationFrame(()=>o.classList.add("m-sheet-overlay--show"));const s=()=>{o.classList.remove("m-sheet-overlay--show"),setTimeout(()=>o.remove(),280)};return o.querySelector(".m-sheet-cancel").addEventListener("click",s),o.querySelector(".m-sheet-done").addEventListener("click",()=>{n==null||n(),s()}),o.addEventListener("click",m=>{m.target===o&&s()}),o}const ss=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function ns(){return Array.from({length:14},(e,i)=>i).map(e=>{const i=new Date;i.setDate(i.getDate()+e);const t=ss[Math.floor(Math.random()*ss.length)],n=t.label==="Pluie"||t.label==="Averses",a=Math.round(8+Math.random()*8),o=Math.round(16+Math.random()*14),s=Array.from({length:24},(l,m)=>{const d=Math.sin(Math.PI*(m-6)/12),p=Math.round(a+(o-a)*Math.max(0,d)),v=n&&m>=8&&m<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:m,label:`${String(m).padStart(2,"0")}h`,temp:p,pluie:v,hum:Math.round(85-40*Math.max(0,d)),vent:Math.round(10+Math.random()*20),icon:v>0?"bi-cloud-rain-fill":m<7||m>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:n?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:a,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:o,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:s}})}function as(e){const i=e.id,t=e.reserveHydrique||50,n=+((i*2.3+7)%32).toFixed(1),a=+((i*1.1+14)%14+10).toFixed(1),o=+((i*.6+1)%6).toFixed(1),s=Math.round(t*((i%5+1)/10)),l=Math.max(0,+(s+n-a-o).toFixed(0)),m=l<s?s-l:0;return{j0:s,j7:l,bilan:m}}const kt=4,Nt=5,os=["#0172A4","#ff8500","#30d158","#bf5af2"],sn={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548",irrigation:"#FF8C00"},Ei={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol",irrigation:"Irrigation"},Aa={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C",irrigation:"mm"},ls={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},Ca=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function nn(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function Ma(e,i){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const a=new Set(t),o=+e.slice(2);i.filter(l=>l.parcelIds.includes(o)).forEach(l=>(ls[l.model]||[]).forEach(m=>a.add(m)));const s=re.find(l=>l.id===o);return(s!=null&&s.irrigation&&s.irrigation!=="Non irrigué"||me.some(l=>l.plotId===o))&&a.add("irrigation"),[...a].filter(l=>l in Ei)}const n=i.find(a=>a.id===+e.slice(2));return n?ls[n.model]||[]:[]}function Ta(e,i){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let Pe=[],je=[];(()=>{const e=vt();if(e.catalog){const i=e.catalog.map(t=>t.id);Ae.sort((t,n)=>{const a=i.indexOf(t.id),o=i.indexOf(n.id);return(a<0?999:a)-(o<0?999:o)}),e.catalog.forEach(t=>{const n=Ae.find(a=>a.id===t.id);n&&(n.active=t.active)})}e.mesuresList&&(Pe=e.mesuresList),e.cumulsList&&(je=e.cumulsList)})();let Vt=null,Wt=null;function an(e){return Pe.length>=kt?"max":Pe.some(i=>i.subjectKey===e.subjectKey&&i.metricId===e.metricId&&i.period===e.period&&i.step===e.step)?"dup":(Pe.push(e),St({mesuresList:Pe}),Vt==null||Vt(),"ok")}function Li(e){return je.length>=Nt?"max":(je.push(e),St({cumulsList:je}),Wt==null||Wt(),"ok")}function Ia(e,i,t){if(i==="irrigation"&&e.startsWith("p-")){const s=parseInt(e.slice(2),10),l=Date.now(),m=24*36e5,d=l-t*m,p=new Array(t).fill(0);return me.filter(v=>v.plotId===s&&v.real).forEach(v=>{const u=new Date(v.iso).getTime();if(u<d||u>l)return;const c=Math.min(t-1,Math.floor((u-d)/m));p[c]+=v.mm||0}),p}const n=[...e+i].reduce((s,l)=>s+l.charCodeAt(0),1),a=s=>(Math.sin(n*.07+s*.5)+Math.sin(n*.03+s*1.3))/2+.5,o={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:t},(s,l)=>o.sparse&&a(l*3.7)>.28?0:Math.max(0,o.base+o.amp*a(l*.28+1.2)))}const ja=new Set(["pluie","etp","irrigation"]);function qa(e,i){var A,q;const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,n=Ia(e.subjectKey,e.metricId,t),a=270,o=100,s=28,l=14,m=Math.max(...n,1),d=ja.has(e.metricId);let p,v="";for(let $=0;$<=2;$++){const E=Math.round($/2*(o-l-4)+4);v+=`<line x1="${s}" y1="${E}" x2="${s+a}" y2="${E}" stroke="#E8E6E0" stroke-width=".5"/>`,v+=`<text x="${s-3}" y="${E+3}" text-anchor="end" font-size="8" fill="#636366">${+(m*(1-$/2)).toFixed(m<5?1:0)}</text>`}const u=Ta(e.period,e.step),c=u.map(($,E)=>`<text x="${s+Math.round(E/(u.length-1)*a)}" y="${o+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${$}</text>`).join(""),r=JSON.stringify(n.map($=>+$.toFixed(2))),g=sn[e.metricId]||e.color,f=e.metricId==="pluie"?"#2E75B6":g;if(d){const $=Math.max(1,a/t*.7),E=n.map((F,D)=>{const C=Math.round(F/m*(o-l-4)),I=s+Math.round(D/(t-1)*a)-$/2,P=o-l-C;return`<rect x="${I.toFixed(1)}" y="${P.toFixed(1)}" width="${$.toFixed(1)}" height="${C.toFixed(1)}" fill="${f}" opacity=".85" rx="1"/>`}).join("");p=`<svg viewBox="0 0 ${s+a} ${o+6}" style="width:100%;display:block;overflow:visible">${v}${E}${c}</svg>`}else{const $=n.map((E,F)=>`${s+Math.round(F/(t-1)*a)},${o-l-Math.round(E/m*(o-l-4))}`).join(" ");p=`<svg viewBox="0 0 ${s+a} ${o+6}" style="width:100%;display:block;overflow:visible">
      ${v}
      <polyline points="${$}" fill="none" stroke="${g}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${o}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${c}
    </svg>`}const S=(A=e.subjectKey)!=null&&A.startsWith("s-")?e.subjectKey.slice(2):null,h=(q=e.subjectKey)!=null&&q.startsWith("p-")?e.subjectKey.slice(2):null,k=S||h?`<button class="m-wf-view-data m-widget-details-link" ${S?`data-sensor-id="${S}"`:`data-parcel-id="${h}"`} data-metric-id="${e.metricId}" data-period="${e.period}" data-step="${e.step}">Voir détails →</button>`:"";return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?f:g}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${r}' style="position:relative;margin-top:4px">
        ${p}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${k}
    </div>`}function rs(e,i){const t=Pe.length>=kt,n=[...e].sort((l,m)=>l.name.localeCompare(m.name,"fr")).map(l=>`<option value="p-${l.id}">${jt(l)}</option>`).join(""),a=i.filter(l=>l.parcelIds.length>0).map(l=>`<option value="s-${l.id}">${qt(l,e)}</option>`).join(""),o=nn("7d");return`
    <div id="msr-list">${Pe.length?Pe.map(qa).join(""):'<div class="m-wf-empty">Ajoutez ici les mesures que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Pe.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${kt}/${kt})</div>
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
          ${Ca.map(l=>`<option value="${l.id}"${l.id==="7d"?" selected":""}>${l.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${o.map(l=>`<option value="${l.id}">${l.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Ajouter la mesure</button>
    </div>`}`}function Pa(e){const i=new Date().toISOString().split("T")[0],t=new Date;t.setDate(t.getDate()+7);const n=t.toISOString().split("T")[0];return me.filter(a=>a.iso>i&&a.iso<=n&&a.plotId===e.id).reduce((a,o)=>a+o.mm,0)}function Da(e){return 25+e.id*7%20}const cs=9;function za(e){const i=e.filter(a=>It(a));return i.length?`
    <div style="font-size:11px;color:#8e8e93;margin-bottom:2px">Réserve en eau — Aujourd'hui</div>
    ${i.map(a=>{const o=ft(a.id),s=Math.round(zi(a,"Aujourd'hui")),l=Qt(s,o.rfu,o.ru),m=Math.round(s/o.ru*100);return`
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
  </div>`:'<div class="m-widget-empty"><i class="bi bi-droplet" style="color:#0172A4;font-size:28px"></i><p>Aucune parcelle avec le service Irré-LIS</p></div>'}function ht(e,i=!1,t=vt().sensorlessEnabled??!0,n=vt().irrigAdvisor??!1){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const a=$=>$.id%3===2,o=e.slice(),s=($,E)=>as(E).bilan-as($).bilan,l=o.slice().sort(s),m=i?l:l.slice(0,cs),d=new Set(m.map($=>$.id)),p=l.length-m.length,v=$=>Math.round(($.id*2.3+7)%32*10)/10,u=$=>Math.round((($.id*1.1+14)%14+10)*10)/10,c="font-size:11px;font-weight:700;color:#8e8e93;text-align:right;padding-bottom:6px;text-transform:uppercase;letter-spacing:.03em;line-height:1.3",r=$=>`<span style="display:block;font-size:9px;font-weight:400;text-transform:none;color:#b0aead;letter-spacing:0">${$}</span>`,g="border-top:none",f=($,E)=>{const F=Pa($),D=v($),C=u($),I=E===0?"border-top:none":"border-top:.5px solid rgba(0,0,0,.18);padding-top:8px;margin-top:2px",P=`<button class="m-bh-th-n m-bh-plot-link" data-plot-id="${$.id}" style="grid-column:1/-1;white-space:normal;overflow:visible;text-overflow:unset;text-align:left;${I}">${$.name}</button>`;if(n){const x=a($)?Da($):null,b=x!==null?F>=x?"#24B066":"#E05252":null,y=x!==null?`<span style="color:${b};font-weight:700">${x}</span>`:'<span style="color:#c7c7cc">—</span>';return`
        ${P}
        <div class="m-bh-td" style="${g}">${D}</div>
        <div class="m-bh-td" style="${g}">${C}</div>
        <div class="m-bh-td m-bh-td--planif" style="${g}">${F>0?F:"—"}</div>
        <div class="m-bh-td" style="${g}">${y}</div>`}return`
      ${P}
      <div class="m-bh-td" style="${g}">${D}</div>
      <div class="m-bh-td" style="${g}">${C}</div>
      <div class="m-bh-td m-bh-td--planif" style="${g}">${F>0?F:"—"}</div>`},S=l.filter($=>d.has($.id)).map(($,E)=>f($,E)).join(""),h=n?"1fr 1fr 1.5fr 1fr":"1fr 1fr 1.5fr",k=n?`<div style="${c}">Pluie${r("J+7 mm")}</div>
       <div style="${c}">ETP${r("J+7 mm")}</div>
       <div style="${c}">Irr. planif.${r("J+7 mm")}</div>
       <div style="${c}">Irr. reco.${r("J+7 mm")}</div>`:`<div style="${c}">Pluie${r("J+7 mm")}</div>
       <div style="${c}">ETP${r("J+7 mm")}</div>
       <div style="${c}">Irr. planif.${r("J+7 mm")}</div>`,A=n?`<div style="font-size:11px;color:#8e8e93;margin-bottom:6px">
         <i class="bi bi-info-circle" style="color:#ff9f0a"></i>
         Reco. affiché uniquement pour les parcelles avec Irrigation Advisor actif
       </div>`:"",q=l.length>cs?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${p} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <label style="display:flex;align-items:center;gap:8px;padding:4px 0 8px;cursor:pointer;font-size:13px;color:#1c1c1e">
      <input type="checkbox" id="bh-advisor-cb" ${n?"checked":""} style="width:16px;height:16px;accent-color:#ff9f0a">
      Irrigation Advisor${n?' <span style="font-size:11px;color:#ff9f0a;font-weight:600">✦</span>':""}
    </label>
    ${A}
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${h};gap:0 6px">
        ${k}
        ${S}
      </div>
    </div>
    ${q}
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
    </div>`}const ds=(e,i=40)=>e.length>i?e.slice(0,i-1)+"…":e;function _a(e,i,t,n){Object.fromEntries(we.map(v=>[v.id,v]));const a=[...e].sort((v,u)=>v.name.localeCompare(u.name,"fr")).map(v=>`<option value="p-${v.id}">${ds(jt(v))}</option>`).join(""),o=i.map(v=>`<option value="s-${v.id}">${ds(qt(v,e))}</option>`).join(""),s=`
    <optgroup label="Parcelles">${a}</optgroup>
    ${o?`<optgroup label="Capteurs">${o}</optgroup>`:""}`,l=(v,u)=>{const c=`${v.dayLabel.charAt(0).toUpperCase()+v.dayLabel.slice(1)} · ${v.dateStr}`;return`
    <div class="m-prev-card" data-day="${u}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${v.icon}" style="color:${v.color};font-size:26px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${c}</span>
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
    </div>`},m=t.slice(0,3).map(l).join(""),d=t.slice(3).map(l).join("");return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select"><option value="addr" selected>Adresse de mon exploitation</option>${s}</select>
    <div class="m-prev-cards">
      ${m}
      <div class="m-prev-extra" style="display:none">${d}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const Ke=[{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:null},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:null},{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],Fa={etp:"evapo",rayo:"solar",pluie:"bursty",dj:"temperature",hf:"cold",humec:"bursty"},on=new Set(Ke.flatMap(e=>e.needsModels||[]));function ci(e){if(!e)return Ke;if(e.startsWith("s-")){const t=ce.find(n=>n.id===+e.slice(2));return t?Ke.filter(n=>n.needsModels===null||n.needsModels.includes(t.model)):Ke}const i=new Set(ce.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return Ke.filter(t=>t.needsModels===null||t.needsModels.some(n=>i.has(n)))}const us={etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#0B3A64"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function Ba(){return je.length?je.map((e,i)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
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
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function ps(e,i,t){if(!e||!i)return null;const n=Ke.find(s=>s.id===t)||Ke[0],a=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),o=e.split("").reduce((s,l)=>s+l.charCodeAt(0),0)+a;return+(n.base+o%(n.amp*10)/10).toFixed(1)}function ms(e,i){const t=je.length>=Nt,n=`${new Date().getFullYear()}-01-01`,a=i.filter(m=>m.parcelIds.length>0&&on.has(m.model)),o=[...e].sort((m,d)=>m.name.localeCompare(d.name,"fr")).map(m=>`<option value="p-${m.id}">${jt(m)}</option>`).join(""),s=a.map(m=>`<option value="s-${m.id}">${qt(m,e)}</option>`).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${je.length?Ba():'<div class="m-wf-empty">Ajoutez ici les cumuls que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${je.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${Nt}/${Nt})</div>
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
    </div>`}`}function Ha(e){const i=e.id,t=new Date;let n,a;i%5===3?(n=0,a=(t.getHours()+2+i%3*3)%24):(n=(i*2+1)%6+1,a=6+i%5*2);const o=2+i%3,s=new Date(t);s.setDate(s.getDate()+n);const l=n===0?"Aujourd'hui":s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),m=n*1440+a*60-(t.getHours()*60+t.getMinutes());return{winDateStr:l,winHour:a,winDur:o,minutesFromNow:m}}const Ra="#1a9e40";function Oa(e){const t=e.filter(a=>a.crop).map(a=>({p:a,d:Ha(a)})).filter(({d:a})=>a.minutesFromNow>=0&&a.minutesFromNow<=1440).sort((a,o)=>a.d.minutesFromNow-o.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:a,d:o})=>{const s=String(o.winHour).padStart(2,"0"),l=String((o.winHour+o.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${a.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${a.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${Ra};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
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
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const ln="weenat-m-traitements";function Et(){try{return JSON.parse(localStorage.getItem(ln))||[]}catch{return[]}}function _i(e){localStorage.setItem(ln,JSON.stringify(e))}function Na(e,i){let t=new Set;const n=[],a=new Date().toISOString().split("T")[0];function o(){return Xt(n,e,t)}function s(d){const p=t.size,v=d.querySelector(".irr-summary"),u=d.querySelector(".irr-save-btn");!v||!u||(v.textContent=p===0?"":`${p} parcelle${p>1?"s":""}`,u.disabled=p===0)}function l(d){var p;(p=d.querySelector("#irr-sel-all"))==null||p.addEventListener("click",()=>{const v=e.every(u=>t.has(u.id));e.forEach(u=>v?t.delete(u.id):t.add(u.id)),d.querySelector("#trait-sel-list").innerHTML=o(),l(d),s(d)}),d.querySelectorAll(".irr-group-card").forEach(v=>{v.addEventListener("click",()=>{const u=v.dataset.gids.split(",").map(Number),c=u.every(r=>t.has(r));u.forEach(r=>c?t.delete(r):t.add(r)),d.querySelector("#trait-sel-list").innerHTML=o(),l(d),s(d)})}),d.querySelectorAll(".irr-plot-row").forEach(v=>{v.addEventListener("click",()=>{const u=+v.dataset.pid;t.has(u)?t.delete(u):t.add(u),d.querySelector("#trait-sel-list").innerHTML=o(),l(d),s(d)})})}const m=ut($e(`
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
  `));l(m),s(m),m.querySelector("#trait-back").addEventListener("click",fe),m.querySelector(".irr-save-btn").addEventListener("click",()=>{const d=m.querySelector("#trait-date").value||a,p=m.querySelector("#trait-produit").value.trim()||"—",v=m.querySelector("#trait-dose").value.trim()||"—",u=Et();u.unshift({id:Date.now(),date:d,produit:p,dose:v,plotIds:[...t]}),_i(u),fe(),i("Traitement enregistré")})}function Va(e,i,t){const n=i==="adherent"?en.adherent:null,a=n!==null?re.filter(d=>d.orgId===n):re;let o=null;const s=$e(`
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
          ${a.map(d=>`<option value="${d.id}">${d.name}</option>`).join("")}
        </select>
      </div>
      <div id="trait-cal-content" style="padding:6px 16px 16px"></div>
    </div>`);s.querySelector(".m-detail-back").addEventListener("click",fe);const l=d=>{const[p,v,u]=d.split("-");return`${u}/${v}/${p}`};function m(){const d=s.querySelector("#trait-cal-content");let p=Et();if(o!==null&&(p=p.filter(v=>(v.plotIds||[]).includes(o))),!p.length){d.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}d.innerHTML=p.map(v=>{const u=(v.plotIds||[]).map(c=>{var r;return(r=e.find(g=>g.id===c))==null?void 0:r.name}).filter(Boolean);return`
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
        </div>`}).join(""),d.querySelectorAll(".m-trait-cal-card").forEach(v=>{v.addEventListener("click",()=>{const u=+v.dataset.id,r=Et().find(h=>h.id===u);if(!r)return;const g=(r.plotIds||[]).map(h=>{var k;return(k=e.find(A=>A.id===h))==null?void 0:k.name}).filter(Boolean),f=document.createElement("div");f.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${l(r.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${r.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${r.dose}</div>
            ${g.length?`<div style="font-size:12px;color:#8e8e93">${g.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const S=Ye({title:"Traitement",body:f,doneLabel:"Fermer",onDone:()=>{}});f.querySelector("#tcal-del").addEventListener("click",()=>{const h=Et().filter(k=>k.id!==u);_i(h),S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{S.remove(),m()},280),t("Traitement supprimé")}),f.querySelector("#tcal-edit").addEventListener("click",()=>{S.classList.remove("m-sheet-overlay--show"),setTimeout(()=>S.remove(),280),Wa(r,e,t,m)})})})}s.querySelector("#trait-filter").addEventListener("change",d=>{o=d.target.value?+d.target.value:null,m()}),m()}function Wa(e,i,t,n){const a=document.createElement("div");a.innerHTML=`
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
    </div>`,Ye({title:"Modifier le traitement",body:a,doneLabel:"Enregistrer",onDone:()=>{const o=Et(),s=o.findIndex(l=>l.id===e.id);s!==-1&&(o[s].date=a.querySelector("#tedit-date").value||e.date,o[s].produit=a.querySelector("#tedit-produit").value.trim()||e.produit,o[s].dose=a.querySelector("#tedit-dose").value.trim()||e.dose,_i(o)),t("Traitement modifié"),n()}})}const Ja={"capteur déplacé":"M12 2c-2.117 0-3.98.741-5.588 2.225C4.803 5.708 4 7.699 4 10.199c0 1.6.6 3.322 1.8 5.164C7 17.205 8.818 19.2 11.25 21.35a1.2 1.2 0 0 0 .75.275 1.2 1.2 0 0 0 .75-.275c2.433-2.15 4.25-4.145 5.45-5.987C19.4 13.521 20 11.8 20 10.2c0-2.5-.803-4.491-2.412-5.974C15.98 2.74 14.117 2 12 2zm0 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 7v3a.969.969 0 0 1-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287A.966.966 0 0 1 11 10V7c0-.283.095-.52.287-.713A.969.969 0 0 1 12 6zm0 7a.97.97 0 0 1 .713.287c.191.192.287.43.287.713s-.096.522-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287c-.192-.191-.287-.43-.287-.713s.095-.52.287-.713A.969.969 0 0 1 12 13z","émissions interrompues":"M19.075 21.9 8.125 10.975c-.033.167-.063.333-.087.5S8 11.817 8 12c0 .383.046.746.138 1.087.091.342.229.663.412.963.15.25.217.517.2.8a1.04 1.04 0 0 1-.3.7c-.2.2-.438.292-.713.275s-.487-.133-.637-.35c-.35-.5-.62-1.042-.813-1.625A5.889 5.889 0 0 1 6 12a5.985 5.985 0 0 1 .575-2.575L5.1 7.95c-.35.6-.62 1.238-.813 1.913A7.79 7.79 0 0 0 4 12a7.855 7.855 0 0 0 1.675 4.9c.183.233.27.487.262.762-.008.275-.112.513-.312.713a.916.916 0 0 1-1.375-.05c-.7-.867-1.25-1.837-1.65-2.913S2 13.2 2 12c0-1.033.146-2.008.437-2.925A10.71 10.71 0 0 1 3.65 6.5L2.075 4.925a.948.948 0 0 1-.275-.7c0-.283.1-.525.3-.725a.948.948 0 0 1 .7-.275c.283 0 .525.092.725.275l16.975 17c.183.183.275.417.275.7s-.092.517-.275.7c-.2.2-.442.3-.725.3s-.517-.1-.7-.3zm1.275-4.4-1.45-1.45c.35-.6.62-1.238.813-1.913S20 12.75 20 12a7.854 7.854 0 0 0-1.675-4.9c-.183-.233-.27-.487-.263-.762s.113-.513.313-.713a.916.916 0 0 1 1.375.05c.7.867 1.25 1.833 1.65 2.9.4 1.067.6 2.208.6 3.425 0 1.017-.146 1.988-.438 2.913S20.867 16.7 20.35 17.5zm-2.925-2.925-1.55-1.55c.033-.167.062-.333.087-.5S16 12.183 16 12c0-.383-.046-.746-.138-1.088s-.229-.662-.412-.962a1.367 1.367 0 0 1-.2-.8 1.04 1.04 0 0 1 .3-.7.93.93 0 0 1 .712-.287.76.76 0 0 1 .638.337c.35.483.62 1.025.813 1.625.191.6.287 1.225.287 1.875a5.985 5.985 0 0 1-.575 2.575z","capteur couché":"M6 5a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h7a1 1 0 1 0 0-2h-7V7a2 2 0 0 0-2-2H6zm3 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2 16v2h20v-2H2z","cuillère bloquée":"M17.615 3.25c-.268 0-.537.103-.742.309L3.508 16.922a1.05 1.05 0 0 0 0 1.486l.031.027-.002.002.05.041c.459.438 1.055.718 1.733.813.678.094 1.416 0 2.139-.274a5.793 5.793 0 0 0 2.018-1.322 5.802 5.802 0 0 0 1.322-2.02c.411-1.087.411-2.189 0-3.074l7.558-7.558a1.047 1.047 0 0 0 0-1.485 1.046 1.046 0 0 0-.742-.308zm-1.037 8.416a.473.473 0 0 0-.35.137l-1.05 1.05a.435.435 0 0 0-.106.163.555.555 0 0 0-.031.187c0 .067.01.13.031.188.02.058.055.112.105.162l1.051 1.05a.473.473 0 0 0 .35.137.472.472 0 0 0 .488-.488.474.474 0 0 0-.138-.35l-.2-.199h.037c.834 0 1.542.292 2.125.875.584.584.875 1.292.875 2.125 0 .675-.198 1.274-.593 1.799a3.032 3.032 0 0 1-1.532 1.088.527.527 0 0 0-.267.187.465.465 0 0 0-.108.287c0 .167.06.3.176.4.117.1.254.13.412.089a3.912 3.912 0 0 0 2.1-1.426 3.882 3.882 0 0 0 .812-2.424c0-1.116-.387-2.063-1.162-2.838-.775-.775-1.72-1.162-2.838-1.162h-.037l.2-.201a.474.474 0 0 0 .138-.35.473.473 0 0 0-.488-.486zm-2.563 2.344a.462.462 0 0 0-.337.156c-.292.358-.516.75-.674 1.18-.159.429-.239.882-.239 1.357 0 .917.271 1.728.813 2.432a3.922 3.922 0 0 0 2.1 1.418.442.442 0 0 0 .414-.082.479.479 0 0 0 .173-.393.532.532 0 0 0-.375-.488 2.946 2.946 0 0 1-1.53-1.08 2.939 2.939 0 0 1-.595-1.807c0-.341.054-.666.163-.974.108-.309.262-.594.462-.852a.565.565 0 0 0 .131-.375.477.477 0 0 0-.142-.336.48.48 0 0 0-.364-.156z"},vs=new Set(["P+","PT","P"]);function jt(e){return[e.name,e.crop].filter(Boolean).join(" — ")}function qt(e,i){var s,l;const t=Object.fromEntries(we.map(m=>[m.id,m])),n=rn[e.model]||e.model,a=((s=(e.parcelIds||[]).map(m=>i.find(d=>d.id===m)).filter(Boolean).find(m=>m.ville))==null?void 0:s.ville)||((l=t[e.orgId])==null?void 0:l.ville)||"";let o="";try{o=(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||""}catch{}return[n,e.serial,o,a].filter(Boolean).join(" · ")}const rn={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function Ua(e,i){const t=Object.fromEntries(we.map(a=>[a.id,a])),n=i.filter(a=>a.event?(Array.isArray(a.event)?a.event:[a.event]).filter(l=>l!=="cuillère bloquée"||vs.has(a.model)).length>0:!1);return n.length?`<div class="m-w-list">${n.map(a=>{var p;const o=e.find(v=>(a.parcelIds||[]).includes(v.id)),s=(o==null?void 0:o.ville)||((p=t[a.orgId])==null?void 0:p.ville)||"",m=(Array.isArray(a.event)?a.event:[a.event]).filter(v=>v!=="cuillère bloquée"||vs.has(a.model)).map(v=>{const u=Ja[v]||"";return`<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:#ff3b30;border-radius:6px;flex-shrink:0" title="${v}"><svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="${u}"/></svg></span>`}).join(""),d=rn[a.model]||a.model;return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${a.id}">
      <div style="flex:1;min-width:0">
        <div class="m-w-row-name">${d}</div>
        <div style="font-size:12px;color:#636366;margin-top:1px">${a.model} — ${a.serial}</div>
        ${s?`<div style="font-size:11px;color:#8e8e93;margin-top:1px">${s}</div>`:""}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;margin-left:12px">
        <div style="display:flex;flex-wrap:wrap;gap:5px;width:61px;justify-content:flex-end">${m}</div>
        <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
      </div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const cn={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},Ga={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function Ya(e){const i=e.id,t=cn[e.crop]||Ga,n=i%t.stages.length,a=(i*2+5)%18+4,o=new Date("2026-04-18");o.setDate(o.getDate()+a);const s=o.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[n],nextStage:t.nextStages[n],variety:t.varieties[i%t.varieties.length],nextDateStr:s,daysToNext:a}}function Ka(e){const i=e.filter(a=>a.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const a of i)t[a.crop]||(t[a.crop]=[]),t[a.crop].push(a);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([a,o])=>{const s=o.map(l=>{const m=!!cn[l.crop],d=m?Ya(l):null,p=m&&d.variety!=="—"?d.variety:"",v=m?d.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${l.id}">
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
    </details>`}).join("")}`}const dn="weenat-m-notes";function it(){try{return JSON.parse(localStorage.getItem(dn))||[]}catch{return[]}}function di(e){localStorage.setItem(dn,JSON.stringify(e))}function fs(e){const i=it(),t=S=>{const[h,k,A]=S.split("-");return`${A}/${k}/${h}`},n=S=>S.length>70?S.slice(0,70)+"…":S,a=(S,h)=>{const k=S.text.length>70,A=(S.imageIds||[]).length,q=A>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${A} photo${A>1?"s":""}</span>`:"",$=S.linkedType?`<span style="font-size:10px;background:${S.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${S.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${S.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${S.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${h}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${k||A>0||S.linkedType?"pointer":"default"}">
        <button class="m-note-del m-del-btn" data-idx="${h}" style="position:absolute;top:8px;right:8px">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <span>${t(S.date)}${S.time?" · "+S.time:""}</span>
          ${S.auteur?`<span style="color:#636366;font-weight:500">${S.auteur}</span>`:""}
          ${S.role?`<span style="font-size:10px;background:${S.role==="conseiller"?"#eef4ff":"#f2f2f7"};color:${S.role==="conseiller"?"#3a7bd5":"#636366"};border-radius:4px;padding:1px 5px;font-weight:500">${S.role==="conseiller"?"Conseiller":"Membre"}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${n(S.text)}</div>
        ${$||q?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${$}${q}</div>`:""}
      </div>`},o=i.slice(0,5),s=o.length?o.map((S,h)=>a(S,h)).join(""):"",l=new Date,m=l.toISOString().slice(0,10),d=`${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`,p=we.find(S=>S.id===(e==="admin"?100:1)),v=p?`${p.prenomProprietaire} ${p.nomProprietaire}`:"",u=p==null?void 0:p.id,c=e==="adherent"?re.filter(S=>S.orgId===u):re,r=e==="adherent"?ce.filter(S=>S.parcelIds.some(h=>c.some(k=>k.id===h))):ce,g=[...c].sort((S,h)=>S.name.localeCompare(h.name,"fr")).map(S=>`<option value="p-${S.id}">${jt(S)}</option>`).join(""),f=r.map(S=>`<option value="s-${S.id}">${qt(S,c)}</option>`).join("");return`
    ${s?`<div id="notes-list" style="margin-bottom:12px">${s}</div>`:""}
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Ajouter une note</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:8px">
      <select id="notes-link" class="m-sheet-input">
        <option value="">— Sans lien —</option>
        <optgroup label="Parcelles">${g}</optgroup>
        <optgroup label="Capteurs">${f}</optgroup>
      </select>
      <textarea id="notes-input" class="m-sheet-input" placeholder="Votre note…" rows="2" style="resize:none"></textarea>
      <div style="display:flex;gap:6px">
        <input type="date" id="notes-date" class="m-sheet-input" value="${m}" style="flex:1">
        <input type="time" id="notes-time" class="m-sheet-input" value="${d}" style="flex:1">
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
    <button id="notes-view" class="m-btn m-btn--secondary">Voir les notes${i.length?` (${i.length})`:""}</button>`}function Za(e){const i=re.map(a=>a.orgId).filter((a,o,s)=>s.indexOf(a)===o&&a!==100).length,t=ce.length,n=re.length;return`
    <div class="m-reseau-name">${Ue.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${n}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${Ue.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${Ue.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${Ue.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${Ue.siege.adresse}, ${Ue.siege.codePostal} ${Ue.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function Xa(){return`
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
    </a>`}const bs=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Qa(){var d;const e=document.getElementById("phone-screen");(d=document.querySelector(".m-sheet-overlay"))==null||d.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,e.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const t=i.querySelector("#chat-messages"),n=i.querySelector("#chat-input"),a=i.querySelector("#chat-send"),o=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",o),i.addEventListener("click",p=>{p.target===i&&o()});function s(p,v){const u=document.createElement("div");u.className=`m-chat-msg m-chat-msg--${v}`,u.innerHTML=`<div class="m-chat-bubble">${p}</div>`,t.appendChild(u),t.scrollTop=t.scrollHeight}function l(){const p=document.createElement("div");return p.className="m-chat-msg m-chat-msg--bot m-chat-typing",p.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(p),t.scrollTop=t.scrollHeight,p}function m(){const p=n.value.trim();if(!p)return;s(p,"user"),n.value="",a.disabled=!0;const v=l();setTimeout(()=>{v.remove();const u=bs[Math.floor(Math.random()*bs.length)];s(u,"bot"),a.disabled=!1,n.focus()},1200+Math.random()*800)}a.addEventListener("click",m),n.addEventListener("keydown",p=>{p.key==="Enter"&&m()}),setTimeout(()=>n.focus(),350)}function eo(e,i){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const n=en[i]||1,a=i==="new"||i==="new-adherent"?[]:n===100?re:re.filter(w=>w.orgId===n),o=new Set(a.map(w=>w.id)),s=i==="new"||i==="new-adherent"?[]:ce.filter(w=>w.parcelIds.some(x=>o.has(x)));let l=ns(),m=null,d=null;function p(){return i!=="admin"?a:m===null?re:re.filter(w=>w.orgId===m)}function v(){return i!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${we.filter(x=>x.id!==100).sort((x,b)=>x.name.localeCompare(b.name)).map(x=>`<option value="${x.id}">${x.name}</option>`).join("")}
    </select>`}const u=vt(),c=new Set(["mon_reseau","support"]),r=new Set(u.collapsed??Ae.map(w=>w.id).filter(w=>!c.has(w)));function g(){St({catalog:Ae.map(w=>({id:w.id,active:w.active})),collapsed:[...r],mesuresList:Pe,cumulsList:je})}function f(){return`
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
      </div>`}function S(){return`
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
      </div>`}function h(){const w=window.L;w&&setTimeout(()=>{const x=t.querySelector("#radar-map");if(!x||d)return;const b=a[0]?[a[0].lat,a[0].lng]:[47.5,-1.5];d=w.map(x,{zoomControl:!0,attributionControl:!1,tap:!1}).setView(b,7),w.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:14}).addTo(d);const y=t.querySelector("#radar-slider"),T=t.querySelector("#radar-time-lbl"),j=t.querySelector("#radar-play-btn"),z=t.querySelector("#radar-loading");let B=[],L=0,M=0,O=null,N=!1,Q=null;function W(Z){if(!B.length)return;O&&d.removeLayer(O);const ie=B[Z];O=w.tileLayer(`https://tilecache.rainviewer.com${ie.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:.65,zIndex:10}).addTo(d);const he=new Date(ie.time*1e3);T.textContent=he.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),T.style.color=Z>=L?"#007aff":"#8e8e93",y.value=Z}y.addEventListener("input",()=>{M=+y.value,W(M)}),j.addEventListener("click",()=>{N=!N,j.innerHTML=N?'<i class="bi bi-pause-fill"></i>':'<i class="bi bi-play-fill"></i>',N?Q=setInterval(()=>{M=(M+1)%B.length,W(M)},500):clearInterval(Q)}),fetch("https://api.rainviewer.com/public/weather-maps.json").then(Z=>Z.json()).then(Z=>{var be,Ee;z==null||z.remove();const ie=((be=Z.radar)==null?void 0:be.past)||[],he=((Ee=Z.radar)==null?void 0:Ee.nowcast)||[];B=[...ie,...he],L=ie.length,B.length&&(y.max=B.length-1,M=Math.max(0,L-1),W(M))}).catch(()=>{z&&(z.textContent="Radar indisponible")})},50)}function k(w,x){const b=w.fixed?"":`<button class="m-widget-menu" data-widget="${w.id}" type="button">•••</button>`,y=r.has(w.id);return`
      <div class="m-widget${y?" m-widget--collapsed":""}" data-widget="${w.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${w.id}">
          <div class="m-widget-icon-wrap" style="background:${w.color}20;color:${w.color}">
            <i class="bi ${w.icon}"></i>
          </div>
          <span class="m-widget-title">${w.title}</span>
          ${w.info?`<button class="m-widget-info" data-widget="${w.id}" type="button"><i class="bi bi-info-circle"></i></button>`:""}
          <i class="bi ${y?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${w.fixed?"0":"8px"}"></i>
          ${b}
        </div>
        <div class="m-widget-bd" style="${y?"display:none":""}">${x}</div>
      </div>`}function A(){d==null||d.remove(),d=null,l=ns();const w=new Set(["previsions","support"]),x=Ae.filter(y=>y.active&&!y.fixed&&(i!=="new"||w.has(y.id))),b=Ae.filter(y=>y.active&&y.fixed&&(i!=="new"||w.has(y.id)));t.innerHTML=`
      ${i==="new"?f():'<button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>'}
      ${[...x,...b].map(y=>{let T="";return y.id==="bilan_hydrique"?T=v()+ht(p()):y.id==="previsions"?T=_a(a,s,l):y.id==="cumuls"?T=ms(a,s):y.id==="temps_reel"?T=rs(a,s):y.id==="traitements"?T=Oa(a):y.id==="evenements"?T=Ua(a,s):y.id==="cultures"?T=Ka(a):y.id==="notes"?T=fs(i):y.id==="radar_pluie"?T=S():y.id==="irrelis"?T=za(a):y.id==="mon_reseau"?T=Za(i):y.id==="support"&&(T=Xa()),k(y,T)}).join("")}
      <div style="height:24px"></div>`,D(),r.has("radar_pluie")||h()}const q='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function $(w,x,b=""){const y=w[x],T=`${y.dayLabel.charAt(0).toUpperCase()+y.dayLabel.slice(1)} · ${y.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${q}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${x===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px">
            <i class="bi ${y.icon}" style="color:${y.color};font-size:22px"></i>
            <div>
              <span class="m-d-name">${T}</span>
              ${b?`<div style="font-size:12px;color:#8e8e93;margin-top:1px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b}</div>`:""}
            </div>
          </div>
          <button class="m-day-nav" id="next-day" ${x>=w.length-1?"disabled":""}>›</button>
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
            ${y.hours.map((j,z)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${z<y.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${j.label}</span>
                <i class="bi ${j.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${j.pluie>0?`${j.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${j.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${j.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${j.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function E(w,x,b,y=""){var T,j;w.querySelector(".m-detail-back").addEventListener("click",fe),(T=w.querySelector("#prev-day"))==null||T.addEventListener("click",()=>{w.innerHTML=$(x,b-1,y),E(w,x,b-1,y)}),(j=w.querySelector("#next-day"))==null||j.addEventListener("click",()=>{w.innerHTML=$(x,b+1,y),E(w,x,b+1,y)})}function F(w,x,b=""){const y=$e($(w,x,b));E(y,w,x,b)}function D(){var ie,he,be,Ee,ze,tt,qe;(ie=e.querySelector(".m-navbar-action"))==null||ie.addEventListener("click",I),(he=t.querySelector("#dash-add-widget-btn"))==null||he.addEventListener("click",P),(be=t.querySelector('[data-action="add-parcel"]'))==null||be.addEventListener("click",()=>da(()=>A())),(Ee=t.querySelector('[data-action="add-sensor"]'))==null||Ee.addEventListener("click",()=>ua(()=>A())),t.querySelectorAll(".m-widget-info").forEach(U=>{U.addEventListener("click",se=>{se.stopPropagation();const ee=Ae.find(ne=>ne.id===U.dataset.widget);ee&&La(ee.title,ee.info,ee.gif)})}),t.querySelectorAll(".m-widget-hd--toggle").forEach(U=>{U.addEventListener("click",se=>{if(se.target.closest(".m-widget-menu")||se.target.closest(".m-widget-info"))return;const ee=U.dataset.collapse;r.has(ee)?r.delete(ee):r.add(ee),g(),A()})}),(ze=t.querySelector("#trait-btn-saisir"))==null||ze.addEventListener("click",()=>{Na(a,Ge)}),(tt=t.querySelector("#trait-btn-voir"))==null||tt.addEventListener("click",()=>{Va(a,i,Ge)}),t.querySelectorAll(".m-trait-card").forEach(U=>{U.addEventListener("click",()=>{const se=re.find(ee=>ee.id===+U.dataset.plotId);if(se){const ee=ce.filter(ne=>ne.parcelIds.includes(se.id)).map(ne=>ne.id);ye(()=>Promise.resolve().then(()=>lt),void 0).then(ne=>ne.initParcelDetail(se,ee,"widgets","Tableau de bord"))}})}),t.querySelectorAll("[data-sensor-id]").forEach(U=>{U.addEventListener("click",()=>{const se=s.find(ee=>ee.id===+U.dataset.sensorId);se&&ye(()=>Promise.resolve().then(()=>qi),void 0).then(ee=>ee.initSensorDetail(se,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(U=>{U.addEventListener("click",()=>{const se=re.find(ee=>ee.id===+U.dataset.plotId);if(se){const ee=ce.filter(ne=>ne.parcelIds.includes(se.id)).map(ne=>ne.id);ye(()=>Promise.resolve().then(()=>lt),void 0).then(ne=>ne.initParcelDetail(se,ee,"params","Tableau de bord"))}})});function w(){t.querySelectorAll(".m-bh-plot-link").forEach(U=>{U.addEventListener("click",()=>{const se=re.find(ee=>ee.id===+U.dataset.plotId);if(se){const ee=ce.filter(ne=>ne.parcelIds.includes(se.id)).map(ne=>ne.id);ye(()=>Promise.resolve().then(()=>lt),void 0).then(ne=>{ne.initParcelDetail(se,ee,"widgets","Tableau de bord"),setTimeout(()=>{var Le;(Le=document.querySelector('[data-widget-id="irrigations"]'))==null||Le.scrollIntoView({behavior:"smooth",block:"start"})},150)})}})})}function x(){var U,se,ee;(U=t.querySelector("#bh-btn-calendar"))==null||U.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>et),void 0).then(ne=>ne.openCalendar(a,""))}),(se=t.querySelector("#bh-btn-irrigation"))==null||se.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>et),void 0).then(ne=>ne.openIrrigationSaisie(a,Ge))}),(ee=t.querySelector("#bh-btn-strategie"))==null||ee.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>et),void 0).then(ne=>ne.openIrrigationStrategie(a,Ge))})}function b(){const U=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');U&&(U.innerHTML=v()+ht(p()),w(),x(),y(),T(),i==="admin"&&j())}function y(){const U=t.querySelector("#bh-expand");U&&U.addEventListener("click",()=>{const se=U.dataset.expanded==="true",ee=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');ee&&(ee.innerHTML=v()+ht(p(),!se),w(),x(),y(),T(),i==="admin"&&j())})}function T(){const U=t.querySelector("#bh-advisor-cb");U&&U.addEventListener("change",()=>{St({irrigAdvisor:U.checked}),b()})}function j(){const U=t.querySelector("#bh-org-select");U&&(U.value=m===null?"all":String(m),U.addEventListener("change",()=>{m=U.value==="all"?null:+U.value,b()}))}w(),x(),y(),T(),i==="admin"&&j(),t.querySelectorAll('[data-widget="irrelis"] .m-il-row').forEach(U=>{U.addEventListener("click",()=>{const se=re.find(ee=>ee.id===+U.dataset.ilPlot);se&&ye(()=>Promise.resolve().then(()=>Qs),void 0).then(ee=>ee.openIrrelisDetail(se))})});function z(){const U=t.querySelector('[data-widget="cumuls"] .m-widget-bd');U&&(U.innerHTML=ms(a,s),B())}Wt=z;function B(){var J,G,V,H;const U=()=>{var Y;const _=(Y=t.querySelector("#cumuls-metric"))==null?void 0:Y.value,R=t.querySelector("#cumuls-thresholds");R&&(_==="hf"?R.innerHTML=`
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
            </div>`:R.innerHTML="")},se=()=>{var K;const _=t.querySelector("#cumuls-metric"),R=(K=t.querySelector("#cumuls-subject"))==null?void 0:K.value;if(!_)return;const Y=ci(R);_.innerHTML='<option value="">— Métrique —</option>'+Y.map(le=>`<option value="${le.id}">${le.label}</option>`).join(""),_.disabled=!R||!Y.length,U(),ee()},ee=()=>{var ge,de,pe;const _=t.querySelector("#cumuls-create"),R=t.querySelector("#cumuls-date-err"),Y=(ge=t.querySelector("#cumuls-subject"))==null?void 0:ge.value,K=(de=t.querySelector("#cumuls-from"))==null?void 0:de.value,le=(pe=t.querySelector("#cumuls-metric"))==null?void 0:pe.value,ae=K?(Date.now()-new Date(K))/864e5>365:!1;R&&(R.style.display=ae?"":"none"),_&&(_.disabled=!Y||!K||!le||ae)};(J=t.querySelector("#cumuls-subject"))==null||J.addEventListener("change",()=>{se(),ee()}),(G=t.querySelector("#cumuls-from"))==null||G.addEventListener("change",ee),(V=t.querySelector("#cumuls-metric"))==null||V.addEventListener("change",()=>{U(),ee()}),(H=t.querySelector("#cumuls-create"))==null||H.addEventListener("click",()=>{var de,pe,xe,ke,Ce,Se;const _=t.querySelector("#cumuls-subject"),R=_==null?void 0:_.value,Y=(de=t.querySelector("#cumuls-from"))==null?void 0:de.value,K=(pe=t.querySelector("#cumuls-metric"))==null?void 0:pe.value;if(!R||!Y||!K)return;const le=Ke.find(te=>te.id===K),ae=us[K]||{icon:"bi-bar-chart-fill",color:"#636366"},ge=K==="hf"?{cold:+(((xe=t.querySelector("#cumuls-th-cold"))==null?void 0:xe.value)??7.2)}:K==="dj"?{low:+(((ke=t.querySelector("#cumuls-th-low"))==null?void 0:ke.value)??0),high:+(((Ce=t.querySelector("#cumuls-th-high"))==null?void 0:Ce.value)??18)}:null;je.push({metricId:K,metricLabel:(le==null?void 0:le.label)||K,unit:(le==null?void 0:le.unit)||"",icon:ae.icon,color:ae.color,subjectKey:R,subjectLabel:(((Se=_.options[_.selectedIndex])==null?void 0:Se.text)||R).trim(),fromDate:Y,value:String(ps(R,Y,K)??"—"),thresholds:ge}),g(),z()}),t.querySelectorAll(".m-cumuls-del").forEach(_=>{_.addEventListener("click",()=>{je.splice(+_.dataset.cidx,1),g(),z()})}),t.querySelectorAll(".m-cumuls-edit").forEach(_=>{_.addEventListener("click",()=>Le(+_.dataset.cidx))}),t.querySelectorAll(".m-cumuls-details").forEach(_=>{_.addEventListener("click",()=>{const R=je[+_.dataset.cidx];R&&ye(()=>import("./chart-fullscreen-Bk60tdHe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(Y=>Y.initCumulFullscreen({label:R.metricLabel,unit:R.unit,color:R.color,total:+R.value||0,fromDateIso:R.fromDate,backLabel:"Tableau de bord",seedKey:`${R.subjectKey}-${R.metricId}`,growthShape:Fa[R.metricId]||"linear"}))})});function ne(_,R={}){return _==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${R.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:_==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${R.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${R.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function Le(_){const R=je[_];if(!R)return;const Y=s.filter(pe=>pe.parcelIds.length>0&&on.has(pe.model)),K=[...a].sort((pe,xe)=>pe.name.localeCompare(xe.name,"fr")).map(pe=>`<option value="p-${pe.id}"${R.subjectKey===`p-${pe.id}`?" selected":""}>${jt(pe)}</option>`).join(""),le=Y.map(pe=>`<option value="s-${pe.id}"${R.subjectKey===`s-${pe.id}`?" selected":""}>${qt(pe,a)}</option>`).join(""),ge=ci(R.subjectKey).map(pe=>`<option value="${pe.id}"${R.metricId===pe.id?" selected":""}>${pe.label}</option>`).join(""),de=document.createElement("div");de.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",de.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${K}</optgroup>
            ${le?`<optgroup label="Capteurs">${le}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${ge}
          </select>
          <div id="cedit-thresholds">${ne(R.metricId,R.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${R.fromDate}">
          </div>`,de.querySelector("#cedit-subject").addEventListener("change",()=>{const pe=de.querySelector("#cedit-subject").value,xe=de.querySelector("#cedit-metric"),ke=ci(pe);xe.innerHTML='<option value="">— Métrique —</option>'+ke.map(Ce=>`<option value="${Ce.id}">${Ce.label}</option>`).join(""),de.querySelector("#cedit-thresholds").innerHTML=""}),de.querySelector("#cedit-metric").addEventListener("change",()=>{de.querySelector("#cedit-thresholds").innerHTML=ne(de.querySelector("#cedit-metric").value)}),Ye({title:"Modifier le cumul",body:de,doneLabel:"Enregistrer",onDone:()=>{var _e,Be,bt,pt;const pe=de.querySelector("#cedit-subject").value||R.subjectKey,xe=de.querySelector("#cedit-metric").value||R.metricId,ke=de.querySelector("#cedit-from").value||R.fromDate;if(!pe||!xe||!ke)return;if((Date.now()-new Date(ke))/864e5>365){Ge("Date trop ancienne (max 365 jours)");return}const Se=Ke.find(zt=>zt.id===xe),te=us[xe]||{icon:"bi-bar-chart-fill",color:"#636366"},oe=de.querySelector("#cedit-subject"),ve=xe==="hf"?{cold:+(((_e=de.querySelector("#cedit-th-cold"))==null?void 0:_e.value)??7.2)}:xe==="dj"?{low:+(((Be=de.querySelector("#cedit-th-low"))==null?void 0:Be.value)??0),high:+(((bt=de.querySelector("#cedit-th-high"))==null?void 0:bt.value)??18)}:null;je[_]={...R,metricId:xe,metricLabel:(Se==null?void 0:Se.label)||xe,unit:(Se==null?void 0:Se.unit)||"",icon:te.icon,color:te.color,subjectKey:pe,subjectLabel:(((pt=oe.options[oe.selectedIndex])==null?void 0:pt.text)||pe).trim(),fromDate:ke,value:String(ps(pe,ke,xe)??"—"),thresholds:ve},g(),z()}})}}B(),(qe=t.querySelector("#open-chat-btn"))==null||qe.addEventListener("click",Qa);function L(){const U=t.querySelector('[data-widget="notes"] .m-widget-bd');U&&(U.innerHTML=fs(i),O())}let M=[];function O(){var J,G;M=[];const U=t.querySelector("#notes-img-input"),se=t.querySelector("#notes-img-btn"),ee=t.querySelector("#notes-previews"),ne=t.querySelector("#notes-img-error");U&&se&&ee&&window.setupImgUpload&&window.setupImgUpload(U,se,ee,ne,M),(J=t.querySelector("#notes-add"))==null||J.addEventListener("click",async()=>{var pe,xe,ke,Ce,Se,te;const V=(pe=t.querySelector("#notes-input"))==null?void 0:pe.value.trim(),H=((xe=t.querySelector("#notes-date"))==null?void 0:xe.value)||new Date().toISOString().slice(0,10),_=((ke=t.querySelector("#notes-time"))==null?void 0:ke.value)||"",R=((Ce=t.querySelector("#notes-auteur"))==null?void 0:Ce.value)||"";if(!V)return;const Y=((Se=t.querySelector("#notes-link"))==null?void 0:Se.value)||"";let K=null,le=null,ae="";if(Y.startsWith("p-"))K="parcel",le=+Y.slice(2),ae=((te=re.find(oe=>oe.id===le))==null?void 0:te.name)||"";else if(Y.startsWith("s-")){K="sensor",le=+Y.slice(2);const oe=ce.find(ve=>ve.id===le);ae=oe?oe.serial:""}const ge=[];if(M.length&&window.ImageStore)for(const oe of M){const ve=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(ve,oe),ge.push(ve)}const de=it();de.unshift({date:H,time:_,text:V,auteur:R,role:"membre",imageIds:ge,linkedType:K,linkedId:le,linkedName:ae}),di(de),t.querySelector("#notes-input").value="",L()}),(G=t.querySelector("#notes-view"))==null||G.addEventListener("click",()=>{const V=Y=>{const[K,le,ae]=Y.split("-");return`${ae}/${le}/${K}`},H=Y=>Y.length>70?Y.slice(0,70)+"…":Y,_=document.createElement("div");function R(){const Y=it();if(!Y.length){_.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}_.innerHTML=Y.map((K,le)=>{const ae=(K.imageIds||[]).length,ge=K.linkedType?`<span style="font-size:10px;background:${K.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${K.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${K.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${K.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${le}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del m-del-btn" data-idx="${le}" style="position:absolute;top:8px;right:8px">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${V(K.date)}${K.time?" · "+K.time:""}</span>
                  ${K.auteur?`<span style="color:#636366;font-weight:500">${K.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${H(K.text)}</div>
                ${ge||ae>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${ge}${ae>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${ae} photo${ae>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),_.querySelectorAll(".m-note-del").forEach(K=>{K.addEventListener("click",async le=>{var pe;le.stopPropagation();const ae=it(),ge=+K.dataset.idx,de=ae[ge];(pe=de==null?void 0:de.imageIds)!=null&&pe.length&&window.ImageStore&&await window.ImageStore.remove(de.imageIds),ae.splice(ge,1),di(ae),R(),L()})}),_.querySelectorAll(".m-note-card").forEach(K=>{K.addEventListener("click",async()=>{const ae=it()[+K.dataset.idx];if(!ae)return;const ge=ae.linkedType?`<span style="font-size:11px;background:${ae.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${ae.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${ae.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${ae.linkedName||""}</span>`:"",de=document.createElement("div");if(de.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${V(ae.date)}${ae.time?" · "+ae.time:""}</span>
                  ${ae.auteur?`<span style="color:#636366;font-weight:500">${ae.auteur}</span>`:""}
                  ${ge}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${ae.text}</div>
                ${(ae.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ye({title:"Note",body:de,doneLabel:"Fermer",onDone:()=>{}}),(ae.imageIds||[]).length&&window.ImageStore){const pe=de.querySelector("#note-detail-photos");for(const xe of ae.imageIds){const ke=await window.ImageStore.get(xe);if(!ke)continue;const Ce=document.createElement("div");Ce.className="jrn-img-thumb-wrap";const Se=document.createElement("img");Se.className="jrn-img-thumb",Se.src=ke,Se.alt="",Se.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(ke)}),Ce.appendChild(Se),pe.appendChild(Ce)}}})})}R(),Ye({title:"Notes",body:_,doneLabel:"Fermer",onDone:()=>{}})});const Le=V=>{const[H,_,R]=V.split("-");return`${R}/${_}/${H}`};t.querySelectorAll("#notes-list .m-note-del").forEach(V=>{V.addEventListener("click",async H=>{var K;H.stopPropagation();const _=it(),R=+V.dataset.idx,Y=_[R];(K=Y==null?void 0:Y.imageIds)!=null&&K.length&&window.ImageStore&&await window.ImageStore.remove(Y.imageIds),_.splice(R,1),di(_),L()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(V=>{V.addEventListener("click",async()=>{const _=it()[+V.dataset.idx];if(!_)return;const R=_.linkedType?`<span style="font-size:11px;background:${_.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${_.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${_.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${_.linkedName||""}</span>`:"",Y=document.createElement("div");if(Y.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${Le(_.date)}${_.time?" · "+_.time:""}</span>
              ${_.auteur?`<span style="color:#636366;font-weight:500">${_.auteur}</span>`:""}
              ${R}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${_.text}</div>
            ${(_.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ye({title:"Note",body:Y,doneLabel:"Fermer",onDone:()=>{}}),(_.imageIds||[]).length&&window.ImageStore){const K=Y.querySelector("#note-detail-photos");for(const le of _.imageIds){const ae=await window.ImageStore.get(le);if(!ae)continue;const ge=document.createElement("div");ge.className="jrn-img-thumb-wrap";const de=document.createElement("img");de.className="jrn-img-thumb",de.src=ae,de.alt="",de.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(ae)}),ge.appendChild(de),K.appendChild(ge)}}})})}O();function N(){t.querySelectorAll(".m-tr-chart-wrap").forEach(U=>{const se=U.querySelector(".m-tr-cursor"),ee=U.querySelector(".m-tr-tooltip");if(!ee)return;const ne=JSON.parse(U.dataset.series||"[]"),Le=U.dataset.unit||"",J=ne.length,G=26,V=270;U.addEventListener("pointermove",H=>{const _=U.getBoundingClientRect(),R=Math.max(0,Math.min(((H.clientX-_.left)*(G+V)/_.width-G)/V,1)),Y=ne[Math.round(R*(J-1))]??null;if(se){const K=G+Math.round(R*V);se.setAttribute("x1",K),se.setAttribute("x2",K),se.setAttribute("opacity","1")}ee.style.display="",ee.style.left=`${Math.max(0,Math.min(H.clientX-_.left-24,_.width-60))}px`,ee.textContent=Y!==null?`${(+Y).toFixed(1)} ${Le}`:"—"}),U.addEventListener("pointerleave",()=>{ee.style.display="none",se==null||se.setAttribute("opacity","0")})})}function Q(){const U=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');U&&(U.innerHTML=rs(a,s),W())}Vt=Q;function W(){var ne,Le,J,G,V;const U=()=>{var _,R;const H=t.querySelector("#msr-create");H&&(H.disabled=!((_=t.querySelector("#msr-subject"))!=null&&_.value)||!((R=t.querySelector("#msr-metric"))!=null&&R.value)||Pe.length>=kt)},se=()=>{var Y;const H=t.querySelector("#msr-metric"),_=(Y=t.querySelector("#msr-subject"))==null?void 0:Y.value;if(!H)return;const R=Ma(_,s);H.innerHTML='<option value="">— Métrique —</option>'+R.map(K=>`<option value="${K}">${Ei[K]}</option>`).join(""),H.disabled=!_||!R.length,U()},ee=()=>{var R;const H=t.querySelector("#msr-step"),_=((R=t.querySelector("#msr-period"))==null?void 0:R.value)||"7d";H&&(H.innerHTML=nn(_).map(Y=>`<option value="${Y.id}">${Y.label}</option>`).join(""),U())};(ne=t.querySelector("#msr-subject"))==null||ne.addEventListener("change",()=>{se(),U()}),(Le=t.querySelector("#msr-period"))==null||Le.addEventListener("change",()=>{ee(),U()}),(J=t.querySelector("#msr-metric"))==null||J.addEventListener("change",U),(G=t.querySelector("#msr-step"))==null||G.addEventListener("change",U),(V=t.querySelector("#msr-create"))==null||V.addEventListener("click",()=>{var de,pe,xe;const H=t.querySelector("#msr-subject"),_=t.querySelector("#msr-metric"),R=t.querySelector("#msr-period"),Y=t.querySelector("#msr-step"),K=H==null?void 0:H.value,le=_==null?void 0:_.value,ae=R==null?void 0:R.value,ge=Y==null?void 0:Y.value;!K||!le||!ae||!ge||(Pe.push({subjectKey:K,subjectLabel:(((de=H.options[H.selectedIndex])==null?void 0:de.text)||K).trim(),metricId:le,metricLabel:Ei[le]||le,unit:Aa[le]||"",period:ae,periodLabel:(((pe=R.options[R.selectedIndex])==null?void 0:pe.text)||ae).trim(),step:ge,stepLabel:(((xe=Y.options[Y.selectedIndex])==null?void 0:xe.text)||ge).trim(),color:sn[le]||os[Pe.length%os.length]}),g(),Q())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(H=>{H.addEventListener("click",()=>{Pe.splice(+H.dataset.idx,1),g(),Q()})}),t.querySelectorAll(".m-wf-view-data").forEach(H=>{H.addEventListener("click",()=>{const _=H.dataset.metricId||null;if(H.dataset.sensorId){const R=+H.dataset.sensorId,Y=ce.find(K=>K.id===R);Y&&ye(()=>import("./chart-fullscreen-Bk60tdHe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(K=>K.initChartFullscreen({sensor:Y,metricId:_,backLabel:Y.model+" "+Y.serial}))}else if(H.dataset.parcelId){const R=+H.dataset.parcelId,Y=a.find(le=>le.id===R),K=ce.filter(le=>{var ae;return(ae=le.parcelIds)==null?void 0:ae.includes(R)}).map(le=>le.id);Y&&ye(()=>import("./chart-fullscreen-Bk60tdHe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(le=>le.initChartFullscreen({parcel:Y,linkedSensorIds:K,metricId:_,backLabel:Y.name}))}})}),N()}W(),t.querySelectorAll(".m-prev-card").forEach(U=>{U.addEventListener("click",()=>{var ee,ne;const se=((ne=(ee=t.querySelector(".m-prev-select"))==null?void 0:ee.selectedOptions[0])==null?void 0:ne.text)||"";F(l,+U.dataset.day,se)})});const Z=t.querySelector(".m-prev-expand-btn");Z&&Z.addEventListener("click",()=>{var se,ee;const U=((ee=(se=t.querySelector(".m-prev-select"))==null?void 0:se.selectedOptions[0])==null?void 0:ee.text)||"";F(l,3,U)}),t.querySelectorAll(".m-widget-menu").forEach(U=>{U.addEventListener("click",se=>{var V;se.stopPropagation();const ee=Ae.find(H=>H.id===U.dataset.widget);if(!ee)return;const ne=document.createElement("div"),Le=ee.id==="bilan_hydrique",J=vt().sensorlessEnabled??!0;ne.innerHTML=`
          <div class="m-sheet-links">
            ${Le?`<a class="m-sheet-link" id="menu-sensorless">${J?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const G=Ye({title:ee.title,body:ne,doneLabel:"Fermer",onDone:()=>{}});(V=ne.querySelector("#menu-sensorless"))==null||V.addEventListener("click",()=>{St({sensorlessEnabled:!J}),G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove();const H=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');H&&(H.innerHTML=v()+ht(p()),w(),x(),y(),i==="admin"&&j())},280)}),ne.querySelector("#menu-move").addEventListener("click",()=>{G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),C()},280)}),ne.querySelector("#menu-remove").addEventListener("click",()=>{ee.active=!1,G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),g(),A()},280),Ge("Widget retiré")})})})}function C(){const w=document.createElement("div"),x=()=>Ae.filter(y=>y.active&&!y.fixed),b=()=>{const y=x();w.innerHTML=y.map((T,j)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${T.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${j}" data-dir="-1" ${j===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${j}" data-dir="1" ${j===y.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),w.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(T=>{T.addEventListener("click",()=>{const j=x(),z=+T.dataset.i,B=z+ +T.dataset.dir,L=Ae.indexOf(j[z]),M=Ae.indexOf(j[B]);[Ae[L],Ae[M]]=[Ae[M],Ae[L]],g(),b(),A()})})};b(),Ye({title:"Réorganiser les widgets",body:w,doneLabel:"Fermer",onDone:()=>{}})}function I(){const w=i==="admin",x=$e(`
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
            ${[{action:"parcelle",icon:"bi-geo-alt",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus",label:"Membre"},{action:"irrigation",icon:"bi-droplet",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irrigation"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"},{action:"maintenance",icon:"bi-tools",label:"Opération de maintenance"}].map(b=>`
              <button class="m-add-item" data-action="${b.action}">
                <i class="bi ${b.icon}"></i>
                <span>${b.label}</span>
              </button>`).join("")}
          </div>
          ${w?`
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
      </div>`);x.querySelector(".m-detail-back").addEventListener("click",fe),x.querySelectorAll(".m-add-item").forEach(b=>{b.addEventListener("click",()=>{const y=b.dataset.action;y==="irrigation"?(fe(),ye(()=>Promise.resolve().then(()=>et),void 0).then(T=>T.openIrrigationSaisie(a,Ge))):y==="strategie-irrigation"?(fe(),ye(()=>Promise.resolve().then(()=>et),void 0).then(T=>T.openIrrigationStrategie(a,Ge))):Ge("Fonctionnalité à venir")})})}function P(){const w=document.createElement("div"),x=()=>{const b=Ae.filter(y=>!y.fixed);w.innerHTML=b.map(y=>`
        <div class="m-catalog-row${y.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${y.color}20;color:${y.color}"><i class="bi ${y.icon}"></i></div>
          <span class="m-catalog-title">${y.title}</span>
          ${y.available?`<button class="m-catalog-toggle${y.active?" m-catalog-toggle--on":""}" data-cid="${y.id}" type="button">
                <i class="bi ${y.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),w.querySelectorAll("[data-cid]").forEach(y=>{y.addEventListener("click",()=>{const T=Ae.find(j=>j.id===y.dataset.cid);T&&(T.active=!T.active,g(),x(),A())})})};x(),Ye({title:"Widgets disponibles",body:w,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",w=>{if(w.key!=="weenat_proto_store")return;Ps(re);const x=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');x&&(x.innerHTML=v()+ht(p()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),i==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=I,A()}const hs={"Blé tendre":["Semis","Levée","Tallage","Épi 1 cm","Épiaison","Floraison","Maturité"],Maïs:["Semis","Levée","4 feuilles","6 feuilles","Floraison ♂","Soie","Maturité"],Colza:["Semis","Levée","Rosette","Reprise","Bouton floral","Floraison","Siliques","Maturité"],Tournesol:["Semis","Levée","4 feuilles","Bouton floral","Floraison","Maturité"],Vigne:["Débourrement","Sortie feuilles","Floraison","Nouaison","Véraison","Récolte"],Sorgho:["Semis","Levée","Montaison","Floraison","Maturité"],"Orge de printemps":["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],Orge:["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],"Pomme de terre":["Plantation","Levée","Croissance","Tuberisation","Grossissement","Maturité"],Cerisier:["Dormance","Bourgeons","Débourrement","Floraison","Nouaison","Fructification","Récolte"],Poire:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Pomme:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Salade:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Laitue:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Betterave:["Semis","Levée","4 feuilles","Fermeture rang","Grossissement","Récolte"]},gs=["Semis","Levée","Floraison","Récolte"];function to(e){if(!e)return gs;const i=e.toLowerCase();for(const t of Object.keys(hs))if(i.startsWith(t.toLowerCase()))return hs[t];return gs}const At=new URLSearchParams(window.location.search).get("role")==="adherent"?"adherent":"admin";function ui(e){return At==="adherent"?re.filter(i=>i.orgId===e.orgId):re}const Me={djMin:0,djMax:18,hfSeuil:7.2},un=[{key:"N",icon:"bi-arrow-up"},{key:"NE",icon:"bi-arrow-up-right"},{key:"E",icon:"bi-arrow-right"},{key:"SE",icon:"bi-arrow-down-right"},{key:"S",icon:"bi-arrow-down"},{key:"SW",icon:"bi-arrow-down-left"},{key:"W",icon:"bi-arrow-left"},{key:"NW",icon:"bi-arrow-up-left"}];function io(e,i){const t=(Math.atan2(i,e)*180/Math.PI+360)%360;return un[Math.round(t/45)%8].key}function so(e,i){const t=e.getNorth(),n=e.getSouth(),a=e.getEast(),o=e.getWest(),s=(t-n)*.1,l=(a-o)*.1,m=t-s,d=n+s,p=a-l,v=o+l,u=(m+d)/2,c=(p+v)/2;return{N:[m,c],NE:[m,p],E:[u,p],SE:[d,p],S:[d,c],SW:[d,v],W:[u,v],NW:[m,v]}[i]}function ys(e,i,t,n,a,o){if(!o.length)return;const s=i.getBounds(),l={};o.forEach(m=>{const d=ce.find(r=>r.id===m);if(!d)return;const p=d.parcelIds.find(r=>r!==a),v=p?re.find(r=>r.id===p):null,u=(v==null?void 0:v.lat)??t,c=(v==null?void 0:v.lng)??n;if(!(u==null||c==null))if(s.contains([u,c]))e.circleMarker([u,c],{radius:6,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.95}).addTo(i);else{const r=io(u-t,c-n);l[r]=(l[r]||0)+1}}),Object.entries(l).forEach(([m,d])=>{const p=un.find(u=>u.key===m),v=e.divIcon({className:"mini-map-dir-arrow",html:`<div class="mini-map-dir-arrow-inner"><i class="bi ${p.icon}"></i>${d>1?`<span class="mini-map-dir-count">${d}</span>`:""}</div>`,iconSize:[24,24],iconAnchor:[12,12]});e.marker(so(s,m),{icon:v,interactive:!1}).addTo(i)})}const no={etp:"etp",enso:"rayo",pluie:"pluie",djc:"dj",hfroid:"hf",humec:"humec"},ao={etp:"evapo",enso:"solar",pluie:"bursty",djc:"temperature",hfroid:"cold",humec:"bursty"},xs={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#0B3A64"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"},irrigation:{metricLabel:"Cumul d'irrigation",unit:"mm",icon:"bi-moisture",color:"#FF8C00"}},oo=4,lo=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Traitements",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermomètre-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Capteur d'humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],Ai={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},pn=e=>`dash-widgets-parcel-${e}`;function ro(e,i){const t=i.map(o=>ce.find(s=>s.id===o)).filter(Boolean),n=new Set(t.map(o=>o.model)),a=["previsions-5j","weephyt","cumuls","irrigations"];return Object.entries(Ai).forEach(([o,s])=>{s.some(l=>n.has(l))&&a.push(o)}),It(e)&&a.push("irrelis"),a}function Gt(e,i){try{const t=JSON.parse(localStorage.getItem(pn(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return ro(e,i)}function mn(e,i){localStorage.setItem(pn(e),JSON.stringify(i))}function co(e,i,t){const n=new Set(Gt(e,i)),a=lo.map((s,l)=>`
    <div class="m-list-section-header"${l>0?' style="margin-top:20px"':""}>${s.title}</div>
    ${s.items.map(m=>{const d=n.has(m.id);return`
        <div class="m-wcat-item">
          <span>${m.label}</span>
          ${d?'<span style="font-size:12px;color:#30d158;display:flex;align-items:center;gap:4px"><i class="bi bi-check-circle-fill"></i> Ajouté</span>':`<button class="m-wcat-add" data-wid="${m.id}" type="button"><i class="bi bi-plus-circle"></i></button>`}
        </div>`}).join("")}`).join(""),o=$e(`
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
    </div>`);o.querySelector(".m-detail-back").addEventListener("click",fe),o.querySelectorAll(".m-wcat-add").forEach(s=>{s.addEventListener("click",()=>{const l=s.dataset.wid,m=Gt(e,i);m.includes(l)||(m.push(l),mn(e.id,m)),fe(),t==null||t()})})}const We={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Capteur d'humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1},irrigation:{label:"Irrigation",unit:"mm",color:"#FF8C00",cumul:!0,cumulsType:"irrigation"},rfu:{label:"Niveau de réservoir",unit:"mm",color:"#0099CC",cumul:!1},nrs:{label:"Niveau de réservoir (spatialisé)",unit:"mm",color:"#0172A4",cumul:!1}},uo=new Set(["pluie","temperature","humidite","vent","pothydr","etp","temp_rosee","rayonnement"]),Fi={j7j2:2},Ct={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function ei(e,i){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3},rfu:{base:60,amp:30,min:0,max:120},nrs:{base:65,amp:28,min:0,max:120}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(n,a)=>{const o=a/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(o-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,s))})}const ti={"365d":52,"30d":60,"7d":84,j7j2:108,hier:48,"1d":24,custom:60},Pt={"365d":525600,"30d":43200,"7d":10080,j7j2:10080,hier:1440,"1d":1440,custom:10080};function vn(e,i,t=0,n=0,a=null){const o=a??(ti[i]||60),s=Pt[i]||10080,l=Date.now(),m=l-s*6e4,d=s*6e4/o,p=new Array(o+t).fill(0),v=t>0?n*6e4/t:0;return me.filter(u=>u.plotId===e).forEach(u=>{const c=new Date(u.iso).getTime();if(!(c<m)){if(c<=l){const r=Math.min(o-1,Math.floor((c-m)/d));p[r]+=u.mm}else if(t>0&&c<=l+n*6e4){const r=Math.min(t-1,Math.floor((c-l)/v));p[o+r]+=u.mm}}}),p}function po(e,i,t,n,a,o=20,s=0){const l=Pt[e]||10080,m=l+s,d=new Date,p=r=>e==="1d"||e==="hier"?`${String(r.getHours()).padStart(2,"0")}h`:e==="365d"?r.toLocaleDateString("fr-FR",{month:"short"}):`${String(r.getDate()).padStart(2,"0")}/${String(r.getMonth()+1).padStart(2,"0")}`,v=4,u=i-t-n,c=a-o;return Array.from({length:v+1},(r,g)=>{const f=g/v,S=new Date(d.getTime()+(f*m-l)*6e4),h=(t+f*u).toFixed(1),k=g===0?"start":g===v?"end":"middle";return[`<line x1="${h}" y1="${c}" x2="${h}" y2="${c+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${h}" y="${a-3}" text-anchor="${k}" font-size="9" fill="#8e8e93" font-family="-apple-system">${p(S)}</text>`].join("")}).join("")}function mo(e,i,t,n="7d",a="",o=null){const s=ti[n]||60,l=Pt[n]||10080,m=Fi[n]||0,d=l/1440,p=m>0?Math.round(s*d/(d+m)):s,v=s-p,u=v>0?m*1440:0,r=v>0&&uo.has(e)?v:0,g=e==="irrigation"?vn(o,n,v,v>0?m*1440:0,p):ei(e,p+r),f=320,S=100,h=34,k=6,A=10,q=20,$=f-h-k,E=S-A-q,F=t?0:Math.min(...g),D=Math.max(...g,F+.001),C=D-F,I=W=>h+W/(s-1)*$,P=W=>A+E-(W-F)/C*E,w=`g${Math.random().toString(36).slice(2,8)}`,x=[0,.5,1].map(W=>{const Z=F+W*C,ie=A+E-W*E;return`<text x="${h-3}" y="${(ie+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${Z<10?Z.toFixed(1):Math.round(Z)}</text>`}).join(""),b=[.25,.5,.75].map(W=>{const Z=(A+E-W*E).toFixed(1);return`<line x1="${h}" y1="${Z}" x2="${f-k}" y2="${Z}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),y=`<line x1="${h}" y1="${A+E}" x2="${f-k}" y2="${A+E}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,T=po(n,f,h,k,S,q,u);let j="";if(v>0){const W=I(p-.5),Z=`stripe${w}`;j=`<defs><pattern id="${Z}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.06)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.18)" stroke-width="3"/>
      </pattern></defs>
      <rect x="${W.toFixed(1)}" y="${A}" width="${(f-k-W).toFixed(1)}" height="${E}" fill="url(#${Z})"/>
      <line x1="${W.toFixed(1)}" y1="${A}" x2="${W.toFixed(1)}" y2="${A+E}" stroke="rgba(142,142,147,.35)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(f-k-3).toFixed(1)}" y="${(A+9).toFixed(1)}" text-anchor="end" font-size="8" fill="#8e8e93" font-family="-apple-system" font-style="italic">Prévisions</text>`}if(t){const W=$/g.length*.7,Z=g.map((ie,he)=>{const be=(ie-F)/C*E,Ee=A+E-be,ze=he>=p;return`<rect x="${(I(he)-W/2).toFixed(1)}" y="${Ee.toFixed(1)}" width="${W.toFixed(1)}" height="${be.toFixed(1)}" fill="${ze?"#C7C7CC":i}" opacity="${ze?".55":".8"}" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${f} ${S}" width="100%" height="${S}" preserveAspectRatio="none">${j}${x}${b}${y}${T}${Z}</svg>`}const z=g.map((W,Z)=>[I(Z),P(W)]),B=z.slice(0,p),L=z.slice(p-1),M=B.map(([W,Z],ie)=>`${ie?"L":"M"}${W.toFixed(1)},${Z.toFixed(1)}`).join(" "),O=r>0?L.map(([W,Z],ie)=>`${ie?"L":"M"}${W.toFixed(1)},${Z.toFixed(1)}`).join(" "):"",N=`${M} L${I(p-1).toFixed(1)},${(A+E).toFixed(1)} L${h},${(A+E).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:g.map(W=>+W.toFixed(2)),minV:+F.toFixed(2),maxV:+D.toFixed(2)}))}" data-color="${i}" data-unit="${a}" style="position:relative">
    <svg viewBox="0 0 ${f} ${S}" width="100%" height="${S}" preserveAspectRatio="none">
      <defs><linearGradient id="${w}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${j}
      ${x}${b}${y}
      <path d="${N}" fill="url(#${w})"/>
      <path d="${M}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${O?`<path d="${O}" fill="none" stroke="${i}" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>`:""}
      ${z.map(([W,Z],ie)=>`<circle cx="${W.toFixed(1)}" cy="${Z.toFixed(1)}" r="2" fill="${i}" opacity="${ie>=p?".55":"1"}"/>`).join("")}
      ${T}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function vo(e,i,t,n=null){if(!t)return"";const a=ti[i]||60,o=Pt[i]||10080,s=Fi[i]||0,l=o/1440,m=s>0?Math.round(a*l/(l+s)):a,d=o/(m*60),p=e==="irrigation"?vn(n,i,0,0,m):ei(e,m);let v=[];if(t==="temp"){const u=p.reduce((r,g)=>r+Math.max(0,Math.min(g,Me.djMax)-Me.djMin),0)*(d/24),c=p.filter(r=>r<Me.hfSeuil).length*d;v=[{label:"Cumul de degrés jours",val:`${Math.round(u)} DJ`,metricId:"dj",thresholdText:`${Me.djMin}°C → ${Me.djMax}°C`},{label:"Cumul d'heures de froid",val:`${Math.round(c)} h`,metricId:"hf",thresholdText:`< ${Me.hfSeuil}°C`}]}else if(t==="pluie")v=[{label:"Cumul de pluie",val:`${p.reduce((c,r)=>c+r,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const u=p.filter(c=>c>120).length*d;v=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(u)} h`,metricId:"rayo"}]}else if(t==="etp")v=[{label:"Cumul d'évapotranspiration",val:`${(p.reduce((c,r)=>c+r,0)*(d/24)).toFixed(1)} mm`,metricId:"etp"}];else if(t==="hws"){const u=p.filter(c=>c>50).length*d;v=[{label:"Cumul d'heures d'humectation foliaire",val:`${Math.round(u)} h`,metricId:"humec"}]}else t==="irrigation"&&(v=[{label:"Cumul irrigation",val:`${p.reduce((c,r)=>c+r,0).toFixed(1)} mm`,metricId:"irrigation"}]);return v.length?`<div class="m-chart-cumuls">${v.map(u=>{const c=u.metricId==="dj"||u.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${u.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${u.label}</span>
          ${u.thresholdText?`<span class="m-chart-cumul-thresh">${u.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${u.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${c}
        <button class="m-cumul-add-btn" data-cumul-label="${u.label}" data-cumul-val="${u.val}" data-cumul-metric-id="${u.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}const fo={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",j7j2:"J-7 → J+2",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},bo={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"};function $s(e,i,t=null,n=null,a="1h",o=null){const s=We[e];if(!s)return"";const l=vo(e,i,s.cumulsType,n),d=t||new Set(["irrigation","etp","rayonnement","temp_rosee"]).has(e)?`<div class="m-chart-details-link" data-sensor-id="${t??""}" data-metric-id="${e}">Voir détails →</div>`:"",p=o?`<button class="m-msr-add-btn" data-msr-metric-id="${e}" data-msr-subject-key="${o.key}" data-msr-subject-label="${o.label}" data-msr-period="${i}" data-msr-step="${a}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`:"";return`
    <div class="m-chart-card" data-metric-id="${e}">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${s.color}">${s.label}</span>
        ${p}
      </div>
      ${mo(e,s.color,s.cumul,i,s.unit||"",n)}
      ${d}
      ${l}
    </div>`}function ho(e){const i=e.dataset.msrMetricId,t=e.dataset.msrSubjectKey,n=e.dataset.msrSubjectLabel,a=e.dataset.msrPeriod,o=e.dataset.msrStep,s=We[i];if(!s)return;const l=an({subjectKey:t,subjectLabel:n,metricId:i,metricLabel:s.label,unit:s.unit||"",period:a,periodLabel:fo[a]||a,step:o,stepLabel:bo[o]||o,color:s.color});if(l==="max"){X(`Maximum de mesures atteint (${oo})`);return}if(l==="dup"){X("Cette mesure est déjà dans vos favoris");return}X("Mesure ajoutée au tableau de bord")}function go(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function yo(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t,minV:n,maxV:a}=i,o=e.querySelector(".m-chart-tip"),s=e.querySelector(".m-chart-crosshair"),l=e.dataset.color||"#0172A4",m=e.dataset.unit||"";function d(v){const u=e.getBoundingClientRect(),c=Math.max(0,Math.min(1,(v-u.left)/u.width)),r=Math.round(c*(t.length-1)),g=t[r],f=c*100,S=(g<10?g.toFixed(1):String(Math.round(g)))+(m?` ${m}`:""),h=go(l);s.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${f}%;width:1px;background:${l};opacity:.5`,o.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(f,75)}%;background:${l};color:${h};border:1.5px solid ${h};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,o.textContent=S}function p(){s.style.display="none",o.style.display="none"}e.addEventListener("pointermove",v=>{v.preventDefault(),d(v.clientX)}),e.addEventListener("pointerdown",v=>d(v.clientX)),e.addEventListener("pointerup",p),e.addEventListener("pointerleave",p),e.style.cursor="crosshair"}function xo(e){const i=me.filter(r=>r.plotId===e.id),t=i.filter(r=>r.real),n=i.filter(r=>!r.real),a=t.reduce((r,g)=>r+g.mm,0),o=n.reduce((r,g)=>r+g.mm,0),s=Re(e.id).irrigation??e.irrigation,m=s&&!new Set(["Non irrigué","Non renseigné",""]).has(s),d=`
    <div class="w-irrig-actions">
      <div class="w-irrig-act-row">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-act-saisie" type="button"${m?"":" disabled"}>+ Saisir une irrigation</button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-act-saison" type="button"${m?"":" disabled"}>↺ Saisir une saison d'irrigation</button>
      </div>
    </div>`;if(!m)return ot("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div class="w-irrig-empty-state">
          <i class="bi bi-droplet" style="font-size:22px;color:var(--txt3,#8e8e93)"></i>
          <p class="w-irrig-empty-msg">Afin de pouvoir saisir et gérer vos irrigations, vous devez renseigner un type d'irrigation sur cette parcelle.</p>
        </div>
        <button class="w-irrig-act-btn w-irrig-act-btn--pri m-irrig-set-type" type="button" style="width:100%">Renseigner le type d'irrigation</button>
      </div>`,"irrigations");if(!i.length)return ot("Irrigations","bi-moisture","#FF8C00",`
      <div class="w-irrig-layout">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:8px;color:var(--txt3,#8e8e93);padding:8px 0">
          <i class="bi bi-droplet" style="font-size:24px"></i>
          <div style="font-size:13px">Aucune irrigation enregistrée</div>
        </div>
        ${d}
      </div>`,"irrigations");let p="";if(i.some(r=>r.fromStrategy)){const r=[...i].sort((h,k)=>h.iso.localeCompare(k.iso)),g=r[r.length-1],f=r[r.length-2],S=f?Math.round((new Date(g.iso)-new Date(f.iso))/864e5):null;p=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${g.mm} mm</strong>${S?` tous les <strong>${S} jours</strong>`:""}.</div>
      </div>`}const u=a+o,c=`
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
      ${d}
      <button class="w-irrig-act-btn w-irrig-act-btn--sec m-irrig-view-cal" type="button" style="margin-top:5px"><i class="bi bi-calendar3"></i> Voir les irrigations</button>
    </div>`;return ot("Irrigations","bi-moisture","#FF8C00",c,"irrigations")}function $o(e,i=[]){const t=Gt(e,i),n=i.map(o=>ce.find(s=>s.id===o)).filter(Boolean);let a="";for(const o of t)if(o==="irrigations")a+=xo(e);else if(o==="cumuls")a+=So(e,i);else if(o==="previsions-5j")a+=Lo(e);else if(o==="weephyt")a+=ko(e);else if(o==="irrelis")a+=Zs(e);else if(Ai[o]){const s=new Set(Ai[o]),l=n.filter(m=>s.has(m.model));l.length&&(a+=Ao(l,o))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${a}
    </div>`}function ot(e,i,t,n,a="",o=""){return`
    <div class="m-widget-card"${a?` data-widget-id="${a}"`:""}>
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${i}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${a}" type="button">•••</button>
      </div>
      ${o?`<div class="m-widget-card-subtitle">${o}</div>`:""}
      ${n}
    </div>`}function st(e,i,t){const n=(e*9301+49297)%233280,o={etp:1+n%60/100,pluie:.8+n%70/100,djc:4+n%60/10,hfroid:.4+n%12/10,humec:.1+n%20/100,enso:4+n%40/10}[i]??1,s=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(o*s*10)/10}const fn=e=>`m-pcumuls-${e}`;function at(e){try{return JSON.parse(localStorage.getItem(fn(e)))||{}}catch{return{}}}function Ft(e,i){const t=at(e);localStorage.setItem(fn(e),JSON.stringify({...t,...i}))}const wo={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function So(e,i=[]){const t=new Set;i.forEach(c=>{const r=ce.find(g=>g.id===c);r&&(Ct[r.model]||[]).forEach(g=>t.add(g))});const n=`${new Date().getFullYear()}-01-01`,a=at(e.id),o=new Set(a.hidden||[]),s=a.dates||{},l=a.cfg||{};e.id;const m=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:st(e.id,"etp",s.etp||n),show:!0},{id:"enso",label:"Rayonnement solaire",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:st(e.id,"enso",s.enso||n),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:st(e.id,"pluie",s.pluie||n),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:st(e.id,"djc",s.djc||n),show:t.has("temperature"),cfg:!0,cfgLabel:`${l.djMin??0}–${l.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#0B3A64",icon:"bi-snow",val:st(e.id,"hfroid",s.hfroid||n),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${l.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:st(e.id,"humec",s.humec||n),show:t.has("humectation")}].filter(c=>c.show),d=m.filter(c=>!o.has(c.id)),p=m.filter(c=>o.has(c.id)),v=p.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${p.map(c=>`
          <button class="m-pcumul-add" data-cid="${c.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${c.icon}" style="color:${c.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${c.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",u=d.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${d.map(c=>{const r=s[c.id]||n;return`<div class="m-cumuls-saved-card" style="position:relative">
          <div style="position:absolute;top:8px;right:8px;display:flex;flex-direction:column;align-items:center;gap:18px">
            <button class="m-pcumul-del m-del-btn" data-cid="${c.id}" data-pid="${e.id}" type="button">×</button>
            <button class="m-pcumul-add-fav m-cumul-add-btn" data-cid="${c.id}" data-pid="${e.id}" data-valnum="${c.val}" data-unit="${c.unit}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
          </div>
          <div class="m-pcumul-hd">
            <div class="m-pcumul-icon" style="background:${c.color}22;color:${c.color}"><i class="bi ${c.icon}"></i></div>
            <div class="m-pcumul-label" style="color:${c.color}">${c.label}</div>
          </div>
          <div class="m-pcumul-value" style="color:${c.color}">${c.val}<span class="m-pcumul-unit">${c.unit}</span></div>
          <div class="m-pcumul-since">
            <span>Depuis le</span>
            <div class="m-pcumul-since-row">
              <input type="date" class="m-pcumul-date m-pcumul-date-inp" data-cid="${c.id}" data-pid="${e.id}" value="${r}">
              ${c.cfg?`<button class="m-pcumul-cfg m-pcumul-cfg-btn" data-cid="${c.id}" data-pid="${e.id}"><i class="bi bi-gear"></i> ${c.cfgLabel}</button>`:""}
            </div>
          </div>
          <button class="m-pcumul-details m-widget-details-link" data-cid="${c.id}" data-pid="${e.id}" data-label="${c.label}" data-unit="${c.unit}" data-color="${c.color}" data-val="${c.val}" data-from="${r}">Voir détails →</button>
        </div>`}).join("")}${v}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${v}`;return ot("Cumuls","bi-bar-chart-fill","#0172A4",u,"cumuls")}function ko(e){const i=new Date,t=[{label:"Herbicides de contact",seed:7},{label:"Fongicides",seed:3},{label:"Herbicides racinaires",seed:11},{label:"Herbicides systémiques",seed:5}],n=Array.from({length:24},(d,p)=>{const v=new Date(i);return v.setMinutes(0,0,0),v.setHours(v.getHours()+p),v}),a=d=>`${String(d.getHours()).padStart(2,"0")}h`,o=d=>d.toDateString()===i.toDateString()?"Aujourd'hui":"Demain",s=d=>{const p=n.map((c,r)=>(d.seed*17+e.id*13+r*5)%11<6),v=p.findIndex(c=>c);if(v===-1)return null;let u=v;for(;u+1<p.length&&p[u+1];)u++;return{from:n[v],to:new Date(n[u].getTime()+36e5)}},m=`<div class="w-weephyt-wrap">
    ${t.map(d=>{const p=s(d);return`<div class="w-weephyt-family-row">
      <span class="w-weephyt-family-label">${d.label}</span>
      ${p?`<span class="w-weephyt-window"><i class="bi bi-check-circle-fill"></i> ${o(p.from)} ${a(p.from)}–${a(p.to)}</span>`:'<span class="w-weephyt-window w-weephyt-window--none">Aucune fenêtre sous 24h</span>'}
    </div>`}).join("")}
    <div class="w-weephyt-actions">
      <button class="w-irrig-act-btn w-irrig-act-btn--pri m-weephyt-saisir" type="button" data-pid="${e.id}">Saisir un traitement</button>
    </div>
    <button class="m-widget-details-link m-weephyt-details" type="button" data-pid="${e.id}">Voir détails →</button>
  </div>`;return ot("Traitements","bi-shield-check","#1a9e40",m,"weephyt")}const bn={};function hn(e){const i=(e==null?void 0:e.id)||1,t=(o,s,l)=>{const m=Math.sin(o*9301+49297)*43758.5453;return s+Math.floor((m-Math.floor(m))*(l-s+1))},n=[{label:"Ensoleillé",icon:"bi-sun",color:"#f4a01c"},{label:"Part. nuageux",icon:"bi-cloud-sun",color:"#5b8dd9"},{label:"Couvert",icon:"bi-cloud",color:"#8e8e93"},{label:"Pluie",icon:"bi-cloud-rain-fill",color:"#2E75B6"},{label:"Orageux",icon:"bi-cloud-lightning-rain",color:"#bf5af2"}],a=new Date;return Array.from({length:14},(o,s)=>{const l=new Date(a);l.setDate(l.getDate()+s);const m=t(i*17+s*7,0,4),d=n[m],p=m>=3,v=t(i*3+s*11,6,14),u=t(i*5+s*13,17,32),c=Array.from({length:24},(r,g)=>{const f=Math.sin(Math.PI*(g-6)/12),S=Math.round(v+(u-v)*Math.max(0,f)),h=p&&g>=8&&g<=16&&t(i+s*100+g,0,9)>5?+(t(i+s*100+g+1,0,30)/10).toFixed(1):0;return{label:`${String(g).padStart(2,"0")}h`,temp:S,pluie:h,hum:Math.round(85-40*Math.max(0,f)),vent:t(i*7+s*50+g,8,30),icon:h>0?"bi-cloud-rain-fill":g<7||g>20?"bi-moon-fill":d.icon}});return{dayLabel:s===0?"Aujourd'hui":s===1?"Demain":l.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:l.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...d,pluie:p?t(i*23+s*31,2,20):0,tMin:v,tMax:u,ventMoy:t(i*11+s*17,8,30),ventRafales:t(i*13+s*19,18,50),hours:c}})}function pi(e,i,t){const n=e[i],a=`${n.dayLabel.charAt(0).toUpperCase()+n.dayLabel.slice(1)} · ${n.dateStr}`,o=t?`<div style="font-size:12px;color:#8e8e93;text-align:center;padding:2px 0 6px"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${t}</div>`:"";return`
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
    </div>`}function Eo(e){const i=bn[e.id]||hn(e),t=e.name,n=$e(pi(i,0,t)),a=(o,s)=>{var l,m;o.querySelector(".m-detail-back").addEventListener("click",fe),(l=o.querySelector("#prev-day"))==null||l.addEventListener("click",()=>{o.innerHTML=pi(i,s-1,t),a(o,s-1)}),(m=o.querySelector("#next-day"))==null||m.addEventListener("click",()=>{o.innerHTML=pi(i,s+1,t),a(o,s+1)})};a(n,0)}function Lo(e){const i=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=we.find(d=>d.id===(e==null?void 0:e.orgId)),n=(e==null?void 0:e.ville)||(t==null?void 0:t.ville)||"—",a=(e==null?void 0:e.id)||1,o=hn(e);bn[a]=o;const s=o.slice(0,5).map((d,p)=>({lbl:p===0?"Auj.":i[new Date(Date.now()+p*864e5).getDay()],date:d.dateStr,tmax:d.tMax,tmin:d.tMin,pluie:d.pluie,vent:d.ventMoy,icon:d.icon,label:d.label})),l=d=>`
    <div class="m-wprev5-col">
      <div class="m-wprev5-day">${d.lbl}</div>
      <div class="m-wprev5-date">${d.date}</div>
      <i class="bi ${d.icon} m-wprev5-icon" title="${d.label}"></i>
      <div class="m-wprev5-rain${d.pluie===0?" m-wprev5-rain--none":""}">${d.pluie>0?d.pluie+" mm":"—"}</div>
      <div class="m-wprev5-tmax">${d.tmax}°</div>
      <div class="m-wprev5-tmin">${d.tmin}°</div>
      <div class="m-wprev5-wind">${d.vent} <span>km/h</span></div>
    </div>`,m=`
    <div class="m-wprev5-loc"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${n}</div>
    <div class="m-wprev5-model-hdr">
      <span class="m-wprev5-model-lbl" style="grid-column:1/4">AROME <span>(Météo France)</span></span>
      <span class="m-wprev5-model-lbl" style="grid-column:4/6">ICON EU <span>(DWD)</span></span>
    </div>
    <div class="m-wprev5-grid">${s.map(l).join("")}</div>
    <button class="m-prev5j-voir-details m-widget-details-link">Voir détails →</button>`;return ot("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",m,"previsions-5j")}function Ao(e,i=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},n={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},a={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(o=>{const s=t[o.model]||"bi-broadcast",l=gn[o.model]||o.model,m=n[o.model]||"#0172A4",d=a[o.model]||[],p=d[0],u=o.model.startsWith("CAPA")?30:15,c=u-o.id*7%u,r=`
      <div class="m-wsensor-vals" style="margin:8px 0">
        ${d.slice(0,4).map(g=>{const f=We[g];if(!f)return"";const h=ei(g,1)[0],k=h<10?h.toFixed(1):Math.round(h);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${f.label}</span>
            <span class="m-wsensor-value" style="color:${f.color}">${k} ${f.unit}</span>
          </div>`}).join("")}
      </div>
      <div style="font-size:11px;color:#8e8e93">Il y a ${c} min · ${o.serial}</div>
      <button class="m-wsensor-voir-donnees m-widget-details-link" data-sensor-id="${o.id}" data-metric-id="${p}">Voir détails →</button>`;return ot(l,s,m,r,i)}).join("")}function Co(e,i){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),n=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:i});document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(n.href),100)}function Mo(e,i,t){const n=new Set;i.forEach(f=>{const S=ce.find(h=>h.id===f);S&&(Ct[S.model]||[]).forEach(h=>n.add(h))});const a=[...new Set(["etp","rayonnement","temp_rosee",...n])].filter(f=>We[f]),o=ti[t]||60,s=Pt[t]||10080,l=Fi[t]||0,m=s/1440,d=l>0?Math.round(o*m/(m+l)):o,p=s/d*6e4,v=new Date,u=new Date(v-s*6e4),c=["Horodatage",...a.map(f=>`${We[f].label} (${We[f].unit})`)].join(";"),r=Array.from({length:d},(f,S)=>[new Date(u.getTime()+S*p).toISOString().replace("T"," ").slice(0,19),...a.map(k=>ei(k,1)[0].toFixed(2))].join(";")),g=(e.name||"parcelle").replace(/[^\w]/g,"_");Co([c,...r].join(`\r
`),`${g}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function To(e,i="7d",t="1h",n=null){const a=new Set,o={};e.forEach(c=>{const r=ce.find(g=>g.id===c);r&&(Ct[r.model]||[]).forEach(g=>{a.add(g),o[g]||(o[g]=c)})});const s=me.some(c=>c.plotId===n),l=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),m=e.some(c=>{const r=ce.find(g=>g.id===c);return r&&l.has(r.model)}),d=["pluie","irrigation","temperature","humidite","pothydr","teneur","temp_sol","vent","rayonnement","humectation","par","temp_rosee","etp"],p=[...new Set([...a,"etp","rayonnement","temp_rosee",...m?["rfu"]:["nrs"],...s?["irrigation"]:[]])].filter(c=>We[c]).sort((c,r)=>{const g=d.indexOf(c),f=d.indexOf(r);return(g===-1?999:g)-(f===-1?999:f)}),v=new Date().toISOString().slice(0,10),u=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
      ${(()=>{const c=e[0]??null,r=n!=null?re.find(f=>f.id===n):null,g=r?{key:`p-${r.id}`,label:r.name}:null;return p.map(f=>f==="irrigation"?$s(f,i,null,n,t,g):$s(f,i,o[f]??c,null,t,g)).join("")})()}
    </div>`}const Io={"IRRÉ-LIS Multi-Cultures":{icon:"bi-droplet-fill",color:"#2E75B6"},"IRRÉ-LIS Mono-Culture":{icon:"bi-droplet-fill",color:"#2E75B6"},DeciTrait:{icon:"bi-shield-check",color:"#4CAF50"},Limacapt:{icon:"bi-bug",color:"#795548"},"Modèles Arvalis — PRÉVI-LIS / MILÉOS":{icon:"bi-graph-up",color:"#FBAF05"},Xarvio:{icon:"bi-grid-3x3-gap",color:"#00B14F"},Pixagri:{icon:"bi-map",color:"#00897B"},VitiMeteo:{icon:"bi-flower1",color:"#8B4C9E"},Rimpro:{icon:"bi-cloud-lightning",color:"#E53935"},"Cropwise Protector":{icon:"bi-shield-fill-check",color:"#43A047"},"Movida GrapeVision":{icon:"bi-eye",color:"#7B1FA2"}};function jo(e){if(e.substrate)return"Substrat : "+e.substrate;if(e.texture===$t&&e.soilAnalysis){const{argile:i,limon:t,sable:n}=e.soilAnalysis;return`Analyse de sol (argile ${i}% / limon ${t}% / sable ${n}%)`}return e.texture||"—"}function Ci(e){const i=Io[e]||{icon:"bi-puzzle",color:"#8e8e93"};return`<i class="bi ${i.icon}" style="font-size:18px;color:${i.color};width:24px;text-align:center;flex-shrink:0"></i>`}const gn={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"};function qo(e,i,t){var p,v;const n=t.map(u=>ce.find(c=>c.id===u)).filter(Boolean),a=n.some(u=>u.model==="P+"||u.model==="PT"),o=n.some(u=>u.model==="P"),s=a&&o,l=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),m=new Map;n.forEach(u=>{(Ct[u.model]||[]).forEach(c=>{m.has(c)||m.set(c,[]),m.get(c).push(u)})});const d=new Set;return m.forEach((u,c)=>{u.length<=1||u.every(r=>l.has(r.model))||u.forEach(r=>d.add(r.id))}),`
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
          <span class="m-list-row-value">${jo(e)}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${n.length?n.map((u,c)=>{const r=u.event&&(Array.isArray(u.event)?u.event.length>0:!0),g=d.has(u.id),f=gn[u.model]||u.model,S=(Ct[u.model]||[]).map(h=>{const k=We[h];return k?`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${k.color}18;color:${k.color};border:1px solid ${k.color}40;white-space:nowrap">${k.label}</span>`:""}).join("");return`<div class="m-list-row${c===n.length-1?" m-list-row--last":""} m-tappable" data-open-sensor="${u.id}" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:15px;font-weight:500;display:flex;align-items:center;gap:5px">
                      ${f}
                      ${r?'<span style="width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0;display:inline-block"></span>':""}
                      ${g?'<i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:12px;flex-shrink:0"></i>':""}
                    </div>
                    <div style="font-size:12px;color:#8e8e93;margin-top:1px">${u.model} · ${u.serial}</div>
                  </div>
                  <button class="btn-sensor-more" data-sensor-id="${u.id}" style="border:none;background:none;color:#8e8e93;font-size:18px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0;line-height:1" onclick="event.stopPropagation()">···</button>
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
                </div>
                ${S?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px">${S}</div>`:""}
                ${l.has(u.model)&&u.depth!=null?`<div style="font-size:12px;color:#8e8e93;margin-top:2px">Profondeur d'installation : ${u.depth} cm</div>`:""}
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
            ${[We.etp,...n.some(u=>u.model==="PYRANO")?[]:[We.rayonnement],We.temp_rosee].map(u=>`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${u.color}18;color:${u.color};border:1px solid ${u.color}40;white-space:nowrap">${u.label}</span>`).join("")}
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
                ${Ci(u)}<span>${u}</span>
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
    </div>`}function Mi(e,i=[],t="widgets",n="Parcelles"){let a=we.find(C=>C.id===e.orgId),o=t,s="j7j2",l="1d",m=!1;const d=(a==null?void 0:a.ville)||"",p=$e(`
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
    <div id="detail-content" class="m-detail-content"></div>`);function v(){const C=we.filter(x=>x.id!==100&&x.statut!=="inactif"),I=document.createElement("div"),P=()=>{I.innerHTML=C.map(x=>`
        <div class="m-sheet-option${x.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${x.id}">
          <span>${x.name}</span>
          ${x.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),I.querySelectorAll("[data-pick-org]").forEach(x=>{x.addEventListener("click",()=>{const b=+x.dataset.pickOrg;b!==e.orgId&&(e.orgId=b,a=we.find(y=>y.id===b),E(),X("Exploitation mise à jour")),w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>w.remove(),280)})})},w=ue({title:"Exploitation",body:I,doneLabel:"Fermer",onDone:()=>{}});P()}function u(){const C=Zt.filter(b=>b!=="Non renseigné"),I=Re(e.id).irrigation??e.irrigation,P=document.createElement("div"),w=()=>{P.innerHTML=`
        <div class="m-sheet-option${I?"":" m-sheet-option--active"}" data-pick-irrig="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez un type</span>
          ${I?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${C.map(b=>`
          <div class="m-sheet-option${b===I?" m-sheet-option--active":""}" data-pick-irrig="${b}">
            <span>${b}</span>
            ${b===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,P.querySelectorAll("[data-pick-irrig]").forEach(b=>{b.addEventListener("click",()=>{const y=b.dataset.pickIrrig;y&&y!==I&&(Ne(e.id,{irrigation:y}),e.irrigation=y,Fe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Type d'irrigation modifié : ${I||"—"} → ${y}.`}),E(),X("Type d'irrigation mis à jour")),x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>x.remove(),280)})})},x=ue({title:"Type d'irrigation",body:P,doneLabel:"Fermer",onDone:()=>{}});w()}function c(){const C=jn,I=Re(e.id).env??e.env??"Plein champ",P=document.createElement("div"),w=()=>{P.innerHTML=C.map(b=>`
        <div class="m-sheet-option${b===I?" m-sheet-option--active":""}" data-pick-env="${b}">
          <span>${b}</span>
          ${b===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),P.querySelectorAll("[data-pick-env]").forEach(b=>{b.addEventListener("click",()=>{const y=b.dataset.pickEnv;y&&y!==I&&(Ne(e.id,{env:y}),e.env=y,Fe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Environnement modifié : ${I||"—"} → ${y}.`}),E(),X("Environnement mis à jour")),x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>x.remove(),280)})})},x=ue({title:"Environnement",body:P,doneLabel:"Fermer",onDone:()=>{}});w()}function r(){const C=[...Pi,$t],I=Re(e.id).texture??e.texture,P=document.createElement("div"),w=()=>{P.innerHTML=`
        <div class="m-sheet-option${I?"":" m-sheet-option--active"}" data-pick-texture="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez une texture</span>
          ${I?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${C.map(b=>`
          <div class="m-sheet-option${b===I?" m-sheet-option--active":""}" data-pick-texture="${b}">
            <span>${b}</span>
            ${b===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,P.querySelectorAll("[data-pick-texture]").forEach(b=>{b.addEventListener("click",()=>{const y=b.dataset.pickTexture;if(x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>x.remove(),280),y===$t){k(I);return}y!==I&&(Ne(e.id,{texture:y||null,soilAnalysis:null}),e.texture=y||null,e.soilAnalysis=null,Fe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${I||"—"} → ${y||"—"}.`}),E(),X("Texture de sol mise à jour"))})})},x=ue({title:"Texture de sol",body:P,doneLabel:"Fermer",onDone:()=>{}});w()}function g(){const C=e.name||"",I=document.createElement("div");I.innerHTML=`<input class="m-sheet-input" type="text" value="${C.replace(/"/g,"&quot;")}" placeholder="Nom de la parcelle">`;const P=I.querySelector("input");ue({title:"Nom",body:I,doneLabel:"Enregistrer",onDone:()=>{const w=P.value.trim();w&&w!==C&&(Ne(e.id,{name:w}),e.name=w,Fe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Nom de la parcelle modifié : ${C} → ${w}.`}),E(),X("Nom mis à jour"))}}),setTimeout(()=>P.focus(),300)}function f(){const C=e.variety||"",I=document.createElement("div");I.innerHTML=`<input class="m-sheet-input" type="text" value="${C.replace(/"/g,"&quot;")}" placeholder="Variété">`;const P=I.querySelector("input");ue({title:"Variété",body:I,doneLabel:"Enregistrer",onDone:()=>{const w=P.value.trim();w!==C&&(Ne(e.id,{variety:w||null}),e.variety=w||null,Fe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Variété modifiée : ${C||"—"} → ${w||"—"}.`}),E(),X("Variété mise à jour"))}}),setTimeout(()=>P.focus(),300)}function S(){const C=cropOptions,I=e.crop,P=document.createElement("div");P.innerHTML=C.map(x=>`
      <div class="m-sheet-option${x===I?" m-sheet-option--active":""}" data-pick-crop="${x}">
        <span>${x}</span>
        ${x===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const w=ue({title:"Culture",body:P,doneLabel:"Fermer",onDone:()=>{}});P.querySelectorAll("[data-pick-crop]").forEach(x=>{x.addEventListener("click",()=>{const b=x.dataset.pickCrop;w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>w.remove(),280),b!==I&&(Ne(e.id,{crop:b,phenoStage:null}),e.crop=b,e.phenoStage=null,Fe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Culture modifiée : ${I||"—"} → ${b}.`}),E(),X("Culture mise à jour"))})})}function h(){const C=to(e.crop),I=e.phenoStage,P=document.createElement("div");P.innerHTML=C.map(x=>`
      <div class="m-sheet-option${x===I?" m-sheet-option--active":""}" data-pick-stade="${x}">
        <span>${x}</span>
        ${x===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const w=ue({title:"Stade phénologique",body:P,doneLabel:"Fermer",onDone:()=>{}});P.querySelectorAll("[data-pick-stade]").forEach(x=>{x.addEventListener("click",()=>{const b=x.dataset.pickStade;w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>w.remove(),280),b!==I&&(Ne(e.id,{phenoStage:b}),e.phenoStage=b,Fe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Stade phénologique modifié : ${I||"—"} → ${b}.`}),E(),X("Stade phénologique mis à jour"))})})}function k(C){const I=Re(e.id).soilAnalysis??e.soilAnalysis??{},P=document.createElement("div");P.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:12px">
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
    </div>`,ue({title:"Analyse de sol",body:P,doneLabel:"Enregistrer",onDone:()=>{var T,j,z;const w=+(((T=P.querySelector("#soil-argile"))==null?void 0:T.value)||0),x=+(((j=P.querySelector("#soil-limon"))==null?void 0:j.value)||0),b=+(((z=P.querySelector("#soil-sable"))==null?void 0:z.value)||0),y={argile:w,limon:x,sable:b};Ne(e.id,{texture:$t,soilAnalysis:y}),e.texture=$t,e.soilAnalysis=y,Fe(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${C||"—"} → analyse de sol (argile ${w}% / limon ${x}% / sable ${b}%).`}),E(),X("Analyse de sol enregistrée")}})}function A(){const C=Re(e.id).volumeMaxM3??e.volumeMaxM3??null,I=document.createElement("div");I.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
      <label class="m-form-label">Volume limité (m³)</label>
      <input type="number" class="m-sheet-input" id="edit-volume-max" value="${C??""}" placeholder="Ex : 33000" step="100" min="0">
    </div>`,ue({title:"Volume limité de la parcelle",body:I,doneLabel:"Appliquer",onDone:()=>{var x;const P=(x=I.querySelector("#edit-volume-max"))==null?void 0:x.value,w=P===""?null:Math.max(0,+P);Ne(e.id,{volumeMaxM3:w}),e.volumeMaxM3=w,E(),X("Volume limité mis à jour")}})}const q=["IRRÉ-LIS Multi-Cultures","IRRÉ-LIS Mono-Culture","DeciTrait","Limacapt","Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","Movida GrapeVision"];function $(){let C=[...e.integrations||[]];function I(w){const x=q.filter(b=>!C.includes(b));w.innerHTML=`
        <div class="m-list-section-header">${C.length?`Actives (${C.length})`:"Actives"}</div>
        <div class="m-list">
          ${C.length?C.map((b,y)=>`
            <div class="m-list-row${y===C.length-1?" m-list-row--last":""}" style="gap:10px">
              ${Ci(b)}
              <span class="m-list-row-label" style="flex:1">${b}</span>
              <button class="btn-unlink-integ" data-integ="${b}" style="border:none;background:none;color:#ff3b30;font-size:13px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Délier</button>
            </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucune intégration active</span></div>'}
        </div>
        ${x.length?`
        <div class="m-list-section-header">Disponibles</div>
        <div class="m-list">
          ${x.map((b,y)=>`
            <div class="m-list-row${y===x.length-1?" m-list-row--last":""}" style="gap:10px">
              ${Ci(b)}
              <span class="m-list-row-label" style="flex:1">${b}</span>
              <button class="btn-add-integ" data-integ="${b}" style="border:none;background:none;color:#0172A4;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Lier</button>
            </div>`).join("")}
        </div>`:""}`,w.querySelectorAll(".btn-unlink-integ").forEach(b=>{b.addEventListener("click",()=>{C=C.filter(y=>y!==b.dataset.integ),e.integrations=[...C],Fe(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${b.dataset.integ} » retirée de la parcelle.`}),I(w),X("Intégration déliée")})}),w.querySelectorAll(".btn-add-integ").forEach(b=>{b.addEventListener("click",()=>{C.includes(b.dataset.integ)||C.push(b.dataset.integ),e.integrations=[...C],Fe(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${b.dataset.integ} » activée sur la parcelle.`}),I(w),X("Intégration liée")})})}const P=$e(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${e.name}</span></button>
          <span style="font-size:17px;font-weight:600">Intégrations</span>
          <div style="width:60px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="integ-list-content" style="padding-bottom:32px"></div>`);P.querySelector(".m-detail-back").addEventListener("click",fe),I(P.querySelector("#integ-list-content"))}function E(){const C=p.querySelector("#detail-content");o==="widgets"&&(C.innerHTML=$o(e,i)),o==="donnees"&&(C.innerHTML=To(i,s,l,e.id)),o==="params"&&(C.innerHTML=qo(e,a,i),F()),D()}function F(){const C=window.L;C&&setTimeout(()=>{var w;const I=p.querySelector("#parcel-minimap");if(!I)return;const P=C.map(I,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(C.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(P),((w=e.latlngs)==null?void 0:w.length)>=3){const x=C.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(P);P.fitBounds(x.getBounds(),{padding:[8,8]});const b=x.getBounds().getCenter();ys(C,P,b.lat,b.lng,e.id,i)}else P.setView([e.lat,e.lng],14),C.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(P),ys(C,P,e.lat,e.lng,e.id,i)},50)}function D(){var C,I,P,w,x,b,y,T,j,z,B;(C=p.querySelector(".m-prev5j-voir-details"))==null||C.addEventListener("click",()=>Eo(e)),(I=p.querySelector(".m-period-sel"))==null||I.addEventListener("change",L=>{s=L.target.value,s==="j7j2"&&(l="1d"),E()}),(P=p.querySelector(".m-step-sel"))==null||P.addEventListener("change",L=>{l=L.target.value,E()}),(w=p.querySelector(".m-export-btn"))==null||w.addEventListener("click",()=>Mo(e,i,s)),p.querySelectorAll(".m-chart-svg-wrap").forEach(L=>yo(L)),p.querySelectorAll(".m-wsensor-voir-donnees[data-sensor-id]").forEach(L=>{L.addEventListener("click",()=>{const M=+L.dataset.sensorId,O=ce.find(N=>N.id===M);O&&ye(()=>import("./chart-fullscreen-Bk60tdHe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(N=>N.initChartFullscreen({sensor:O,linkedSensorIds:i,metricId:L.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),p.querySelectorAll(".m-irrig-view-cal").forEach(L=>{L.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>et),void 0).then(M=>M.openCalendar(ui(e),String(e.id)))})}),p.querySelectorAll(".m-chart-details-link").forEach(L=>{L.addEventListener("click",()=>{const M=L.dataset.sensorId?+L.dataset.sensorId:null,O=M?ce.find(N=>N.id===M):null;ye(()=>import("./chart-fullscreen-Bk60tdHe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(N=>N.initChartFullscreen({sensor:O,linkedSensorIds:i,metricId:L.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),(x=p.querySelector(".m-il-detail-btn"))==null||x.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>Qs),void 0).then(L=>L.openIrrelisDetail(e))}),p.querySelectorAll(".m-msr-add-btn").forEach(L=>{L.addEventListener("click",()=>ho(L))}),p.addEventListener("click",L=>{const M=L.target.closest(".m-cumul-add-btn");if(M){const N=M.dataset.cumulMetricId,Q=M.dataset.cumulVal,W=xs[N];if(!W)return;const Z=document.createElement("div");Z.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${W.metricLabel}</strong> (<em>${Q}</em>) au tableau de bord de <strong>${e.name}</strong> ?</div>`,ue({title:"Tableau de bord",body:Z,doneLabel:"Ajouter",onDone:()=>{const ie=N==="hf"?{cold:Me.hfSeuil}:N==="dj"?{low:Me.djMin,high:Me.djMax}:null;if(Li({metricId:N,...W,subjectKey:`p-${e.id}`,subjectLabel:e.name,fromDate:`${new Date().getFullYear()}-01-01`,value:Q,thresholds:ie})==="max"){X("Maximum de cumuls atteint (5)");return}X("Cumul ajouté au tableau de bord")}});return}const O=L.target.closest(".m-cumul-edit-btn");if(O){const N=O.dataset.cumulMetricId,Q=document.createElement("div");N==="hf"?(Q.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Me.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:Q,doneLabel:"Appliquer",onDone:()=>{var W;Me.hfSeuil=+(((W=Q.querySelector("#edit-hf-seuil"))==null?void 0:W.value)??7.2),E()}})):N==="dj"&&(Q.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Me.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Me.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:Q,doneLabel:"Appliquer",onDone:()=>{var W,Z;Me.djMin=+(((W=Q.querySelector("#edit-dj-min"))==null?void 0:W.value)??0),Me.djMax=+(((Z=Q.querySelector("#edit-dj-max"))==null?void 0:Z.value)??18),E()}}));return}}),p.querySelectorAll("[data-open-sensor]").forEach(L=>{L.addEventListener("click",()=>{const M=+L.dataset.openSensor,O=ce.find(N=>N.id===M);O&&ye(()=>Promise.resolve().then(()=>qi),void 0).then(N=>N.initSensorDetail(O,"donnees",At))})}),p.querySelectorAll(".btn-sensor-more").forEach(L=>{L.addEventListener("click",M=>{M.stopPropagation();const O=+L.dataset.sensorId,N=ce.find(ie=>ie.id===O);if(!N)return;const Q=N.model==="P+"||N.model==="PT"?"Station météo":N.model==="P"?"Pluviomètre":N.model,W=document.createElement("div");W.innerHTML=`
          <div style="padding:8px 0">
            <button id="sheet-open-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;text-align:left">
              <i class="bi bi-broadcast" style="color:#0172A4;width:22px;text-align:center"></i>Voir la fiche capteur
            </button>
            <div style="height:.5px;background:rgba(0,0,0,.1);margin:0 20px"></div>
            <button id="sheet-unlink-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;color:#ff3b30;text-align:left">
              <i class="bi bi-x-circle" style="width:22px;text-align:center"></i>Délier de cette parcelle
            </button>
          </div>`;const Z=ue({title:`${Q} · ${N.serial}`,body:W,doneLabel:"Fermer",onDone:()=>{}});W.querySelector("#sheet-open-sensor").addEventListener("click",()=>{Z.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{Z.remove(),ye(()=>Promise.resolve().then(()=>qi),void 0).then(ie=>ie.initSensorDetail(N,"donnees",At))},280)}),W.querySelector("#sheet-unlink-sensor").addEventListener("click",()=>{Z.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{Z.remove(),Jt({title:"Délier le capteur",message:`Délier <strong>${Q} — ${N.serial}</strong> de <strong>${e.name}</strong> ?`,confirmLabel:"Délier",confirmColor:"#ff3b30",onConfirm:()=>{const ie=i.indexOf(O);ie!==-1&&i.splice(ie,1),N.parcelIds=N.parcelIds.filter(he=>he!==e.id),E(),X(`${N.serial} délié`)}})},280)})})}),p.querySelectorAll(".m-list-row[data-action]").forEach(L=>{L.addEventListener("click",()=>{if(L.dataset.action==="edit-exploitation")v();else if(L.dataset.action==="edit-name")g();else if(L.dataset.action==="edit-crop")S();else if(L.dataset.action==="edit-variety")f();else if(L.dataset.action==="edit-stade")h();else if(L.dataset.action==="edit-env")c();else if(L.dataset.action==="edit-irrigation")u();else if(L.dataset.action==="edit-volume-max")A();else if(L.dataset.action==="edit-debit")Ti(e,E);else if(L.dataset.action==="edit-texture")r();else if(L.dataset.action==="edit-integrations")$();else if(L.dataset.action==="delete-parcel"){const M=document.createElement("div");M.innerHTML=`
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
          `;const O=ue({title:"Supprimer la parcelle ?",body:M,doneLabel:"Annuler",onDone:()=>{}});M.querySelector("#do-delete-parcel").addEventListener("click",()=>{O.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{O.remove(),Tn(e.id,re),fe(),window.dispatchEvent(new CustomEvent("parcel-deleted",{detail:{id:e.id}}))},280)})}else X("Fonctionnalité à venir")})}),p.querySelectorAll(".m-widget-menu").forEach(L=>{L.addEventListener("click",M=>{var he,be;M.stopPropagation();const O=L.dataset.wid;if(!O)return;(he=p.querySelector(".m-widget-dd"))==null||he.remove();const N=document.createElement("div");N.className="m-widget-dd",N.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:220px";const Q=O==="irrigations"?'<button class="m-widget-dd-vol" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;border-bottom:.5px solid rgba(0,0,0,.08);background:none;font-size:14px;color:#1c1c1e;font-family:inherit;cursor:pointer">Définir le volume limité et le débit</button>':"";N.innerHTML=`${Q}<button class="m-widget-dd-remove" data-wid="${O}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const W=p.querySelector(".m-detail-content"),Z=L.getBoundingClientRect(),ie=W.getBoundingClientRect();N.style.top=`${Z.bottom-ie.top+W.scrollTop+4}px`,N.style.right=`${ie.right-Z.right}px`,W.style.position="relative",W.appendChild(N),(be=N.querySelector(".m-widget-dd-vol"))==null||be.addEventListener("click",()=>{N.remove(),Ti(e,E)}),N.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{N.remove();const Ee=Gt(e,i).filter(ze=>ze!==O);mn(e.id,Ee),E()}),setTimeout(()=>document.addEventListener("click",()=>N.remove(),{once:!0}),0)})}),(b=p.querySelector(".m-add-widget-btn"))==null||b.addEventListener("click",()=>co(e,i,E)),(y=p.querySelector(".m-irrig-act-saisie"))==null||y.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>et),void 0).then(L=>L.openIrrigationSaisie(ui(e),X,{ids:[e.id],label:e.name},!0,E))}),(T=p.querySelector(".m-irrig-act-saison"))==null||T.addEventListener("click",()=>{ye(()=>Promise.resolve().then(()=>et),void 0).then(L=>L.openIrrigationStrategie(ui(e),X,{ids:[e.id],label:e.name},null,!0,E))}),(j=p.querySelector(".m-irrig-set-type"))==null||j.addEventListener("click",()=>{o="params",p.querySelectorAll(".m-detail-tab").forEach(L=>L.classList.toggle("active",L.dataset.view==="params")),E(),u()}),p.querySelectorAll(".m-pcumul-del").forEach(L=>{L.addEventListener("click",M=>{M.stopPropagation();const O=+L.dataset.pid,N=at(O),Q=new Set(N.hidden||[]);Q.add(L.dataset.cid),Ft(O,{hidden:[...Q]}),E()})}),p.querySelectorAll(".m-pcumul-add-fav").forEach(L=>{L.addEventListener("click",M=>{var ie;M.stopPropagation();const O=no[L.dataset.cid],N=xs[O];if(!N)return;const Q=+L.dataset.pid,W=((ie=at(Q).dates)==null?void 0:ie[L.dataset.cid])||`${new Date().getFullYear()}-01-01`,Z=document.createElement("div");Z.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${N.metricLabel}</strong> (<em>${L.dataset.valnum} ${L.dataset.unit}</em>) au tableau de bord de <strong>${e.name}</strong> ?</div>`,ue({title:"Tableau de bord",body:Z,doneLabel:"Ajouter",onDone:()=>{if(Li({metricId:O,...N,subjectKey:`p-${Q}`,subjectLabel:e.name,fromDate:W,value:L.dataset.valnum,thresholds:null})==="max"){X("Maximum de cumuls atteint (5)");return}X("Cumul ajouté au tableau de bord")}})})}),p.querySelectorAll(".m-pcumul-details").forEach(L=>{L.addEventListener("click",()=>{ye(()=>import("./chart-fullscreen-Bk60tdHe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(M=>M.initCumulFullscreen({label:L.dataset.label,unit:L.dataset.unit,color:L.dataset.color,total:+L.dataset.val||0,fromDateIso:L.dataset.from,backLabel:e.name,seedKey:`${L.dataset.pid}-${L.dataset.cid}`,growthShape:ao[L.dataset.cid]||"linear"}))})}),(z=p.querySelector(".m-weephyt-saisir"))==null||z.addEventListener("click",()=>{yn("traitement",e.id,()=>{})}),(B=p.querySelector(".m-weephyt-details"))==null||B.addEventListener("click",()=>{ws(e)}),p.querySelectorAll(".m-pcumul-date").forEach(L=>{L.addEventListener("click",()=>{var M;return(M=L.showPicker)==null?void 0:M.call(L)}),L.addEventListener("change",()=>{const M=+L.dataset.pid,O=L.dataset.cid,N=L.value;if(!N||(Date.now()-new Date(N))/864e5>365)return;const Z=at(M).dates||{};Z[O]=N,Ft(M,{dates:Z});const ie=L.closest(".m-cumuls-saved-card"),he=ie==null?void 0:ie.querySelector(".m-pcumul-value");if(he){const be=ie.querySelector(".m-pcumul-unit"),Ee=(be==null?void 0:be.textContent.trim())||"",ze=st(M,O,N);he.innerHTML=`${ze}<span class="m-pcumul-unit">${Ee}</span>`}})}),p.querySelectorAll(".m-pcumul-cfg").forEach(L=>{L.addEventListener("click",M=>{var he;M.stopPropagation();const O=+L.dataset.pid,N=L.dataset.cid,W={...at(O).cfg},Z=wo[N];if(!Z)return;(he=p.querySelector(".m-pcumul-cfg-panel"))==null||he.remove();const ie=document.createElement("div");ie.className="m-pcumul-cfg-panel",ie.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",ie.innerHTML=Z.map(be=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${be.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${be.key}" value="${W[be.key]??be.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',L.closest(".m-cumuls-saved-card").after(ie),ie.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{ie.querySelectorAll(".m-pcumul-cfg-inp").forEach(be=>{W[be.dataset.key]=parseFloat(be.value)||0}),Ft(O,{cfg:W}),ie.remove(),E()})})}),p.querySelectorAll(".m-pcumul-add").forEach(L=>{L.addEventListener("click",M=>{M.stopPropagation();const O=+L.dataset.pid,N=L.dataset.cid,Q=at(O),W=new Set(Q.hidden||[]);W.delete(N),Ft(O,{hidden:[...W]}),E()})})}p.querySelectorAll(".m-detail-tab").forEach(C=>{C.addEventListener("click",()=>{p.querySelectorAll(".m-detail-tab").forEach(I=>I.classList.remove("active")),C.classList.add("active"),o=C.dataset.view,E()})}),p.querySelector(".m-detail-back").addEventListener("click",fe),p.querySelector("#d-star").addEventListener("click",()=>{m=!m;const C=p.querySelector("#d-star");C.querySelector("i").className=m?"bi bi-star-fill":"bi bi-star",C.style.color=m?"#f5c842":"",X(m?"Ajouté aux favoris":"Retiré des favoris")}),p.querySelector("#d-plus").addEventListener("click",()=>{var C;(C=window.showMobileAddPage)==null||C.call(window)}),p.querySelector("#d-journal").addEventListener("click",()=>ws(e)),E()}function Po(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}const Do=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"],zo=e=>{const[i,t,n]=e.split("-");return`${n}/${t}/${i}`};function _o(e){const i=[],t=(a,o)=>i.push({id:`auto-mod-${a}-${o.slice(0,16)}`,type:"modification",date:a,texte:o,_system:!0});t("2024-01-01","Création de la parcelle"),e.crop&&t("2024-03-15",`Culture définie : ${e.crop}`);const n=e.substrate?`Substrat : ${e.substrate}`:e.texture;return n&&t("2024-03-15",`Texture de sol définie : ${n}`),e.irrigation&&t("2024-04-01",`Type d'irrigation défini : ${e.irrigation}`),i}function Fo(e){const i=re.find(t=>t.id===e);return me.filter(t=>t.plotId===e&&t.real).map(t=>({id:`auto-irrig-${e}-${t.iso}-${t.mm}`,type:"irrigation",date:t.iso,volume:t.mm,unite:"mm",methode:(i==null?void 0:i.irrigation)||"",texte:"Irrigation effectuée.",auteur:"Système",_system:!0}))}function Ti(e,i){const t=Re(e.id).volumeMaxM3??"",n=Re(e.id).debitM3h??"",a=document.createElement("div");a.innerHTML=`
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
    </div>`,ue({title:"Volume limité et débit",body:a,doneLabel:"Enregistrer",onDone:()=>{const o=a.querySelector("#mvd-vol").value,s=a.querySelector("#mvd-debit").value;Ne(e.id,{volumeMaxM3:o!==""?parseInt(o):null,debitM3h:s!==""?parseFloat(s):null}),i==null||i()}})}function ws(e){const i=we.find(o=>o.id===e.orgId),t=(i==null?void 0:i.ville)||"",n=$e(`
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
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);n.querySelector(".m-detail-back").addEventListener("click",fe);function a(){var c;const o=n.querySelector("#mjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(r=>r.linkedType==="parcel"&&r.linkedId===e.id).map((r,g)=>({id:`dash-${g}`,type:"note",date:r.date,texte:r.text,auteur:r.auteur,role:r.role,_fromDashboard:!0})),l=[..._o(e),...Fo(e.id)],m=[...Ut(e.id),...s,...l].sort((r,g)=>g.date.localeCompare(r.date)),d=zo,p={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"},culture:{label:"Culture",icon:"bi-flower1",dotColor:"#15803d",dotBg:"#f0fdf4",badgeCls:"culture"},stade:{label:"Stade phéno.",icon:"bi-calendar2-check",dotColor:"#7c3aed",dotBg:"#f5f3ff",badgeCls:"stade"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotColor:"#1d4ed8",dotBg:"#eff6ff",badgeCls:"irrigation"},cycle:{label:"Cycle cultural",icon:"bi-arrow-repeat",dotColor:"#c2410c",dotBg:"#fff7ed",badgeCls:"cycle"},integration:{label:"Intégration",icon:"bi-plug-fill",dotColor:"#7a4fa0",dotBg:"#f5f0fb",badgeCls:"integration"},modification:{label:"Modification",icon:"bi-pencil-square",dotColor:"#7a6a1e",dotBg:"#fdf8ee",badgeCls:"modification"}},v=[{type:"note",label:"Note",icon:"bi-pencil-square"},{type:"traitement",label:"Traitement phytosanitaire",icon:"bi-eyedropper"},{type:"culture",label:"Culture",icon:"bi-flower1"},{type:"stade",label:"Stade phénologique",icon:"bi-calendar2-check"},{type:"irrigation",label:"Irrigation",icon:"bi-droplet-half"},{type:"cycle",label:"Cycle cultural",icon:"bi-arrow-repeat"}];let u=`
      <div style="padding:12px 16px 4px">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="mjrn-add-btn">
          <i class="bi bi-plus-lg"></i> Ajouter
        </button>
      </div>
    `;m.length===0?u+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(u+='<div class="m-jrn-timeline">',m.forEach((r,g)=>{const f=p[r.type]||p.note,S=r.type==="traitement",h=g===m.length-1,k=!!r._fromDashboard,A=!!r._system;u+=`
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
                ${k?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':!A&&r.type==="note"?`<button class="m-jrn-del" data-id="${r.id}"><i class="bi bi-trash3"></i></button>`:""}
              </div>
              ${r.texte?`<div class="m-jrn-texte">${r.texte}</div>`:""}
              ${r.auteur?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${r.auteur}${Po(r.role)}</div>`:""}
              ${S&&(r.produit||r.dose||r.cible)?`
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
                  ${r.culture?`<span class="m-jrn-chip"><i class="bi bi-flower1"></i>${r.culture}</span>`:""}
                  ${r.annee?`<span class="m-jrn-chip"><i class="bi bi-calendar3"></i>${r.annee}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),u+="</div>"),o.innerHTML=u,(c=o.querySelector("#mjrn-add-btn"))==null||c.addEventListener("click",()=>{const r=document.createElement("div");r.innerHTML=`<div class="m-sheet-links">${v.map(f=>`<a class="m-sheet-link" data-type="${f.type}"><i class="bi ${f.icon}" style="margin-right:8px;color:#8e8e93"></i>${f.label}</a>`).join("")}</div>`;const g=ue({title:"Ajouter une entrée",body:r,doneLabel:"Fermer",onDone:()=>{}});r.querySelectorAll(".m-sheet-link").forEach(f=>{f.addEventListener("click",()=>{g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{g.remove(),yn(f.dataset.type,e.id,a)},280)})})}),o.querySelectorAll(".m-jrn-del").forEach(r=>{r.addEventListener("click",()=>{const g=parseInt(r.dataset.id);Di(e.id,Ut(e.id).filter(f=>f.id!==g)),a()})})}a()}function yn(e,i,t){const n=new Date().toISOString().slice(0,10),a=At==="admin"?"conseiller":"membre",o=we.find(u=>u.id===(At==="admin"?100:1)),s=o?`${o.prenomProprietaire} ${o.nomProprietaire}`:"Jean Dupont",l=re.find(u=>u.id===i),m=(l==null?void 0:l.crop)||"",d={note:"Ajouter une note",traitement:"Ajouter un traitement",culture:"Culture — événement",stade:"Stade phénologique",irrigation:"Irrigation",cycle:"Cycle cultural"},p={note:`
      <div>
        <div class="m-form-label">Catégorie</div>
        <select class="m-sheet-input" id="mjf-category">
          ${Do.map(u=>`<option value="${u}">${u}</option>`).join("")}
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
        <div class="m-form-label">Culture</div>
        <input type="text" class="m-sheet-input" id="mjf-culture" value="${m}" placeholder="Culture concernée">
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
    </div>`,ue({title:d[e]||"Ajouter une entrée",body:v,doneLabel:"Enregistrer",onDone:()=>{var f,S;const u=v.querySelector("#mjf-date").value||n,c=((f=v.querySelector("#mjf-texte"))==null?void 0:f.value.trim())||"",r={id:Date.now(),type:e,date:u,texte:c,auteur:s,role:a};if(e==="note")r.category=((S=v.querySelector("#mjf-category"))==null?void 0:S.value)||"";else if(e==="traitement")r.produit=v.querySelector("#mjf-produit").value.trim(),r.dose=v.querySelector("#mjf-dose").value.trim(),r.cible=v.querySelector("#mjf-cible").value.trim();else if(e==="culture")r.action=v.querySelector("#mjf-action").value,r.culture=v.querySelector("#mjf-culture").value.trim(),r.variete=v.querySelector("#mjf-variete").value.trim();else if(e==="stade")r.stade=v.querySelector("#mjf-stade").value.trim(),r.culture=v.querySelector("#mjf-culture").value.trim();else if(e==="irrigation"){const h=parseFloat(v.querySelector("#mjf-volume").value);r.volume=isNaN(h)?0:h,r.unite=v.querySelector("#mjf-unite").value,r.methode=v.querySelector("#mjf-methode").value}else e==="cycle"&&(r.action=v.querySelector("#mjf-action").value,r.culture=v.querySelector("#mjf-culture").value.trim(),r.annee=v.querySelector("#mjf-annee").value.trim());(c||r.produit||r.culture||r.stade||r.volume||r.annee)&&(Di(i,[r,...Ut(i)]),t())}}),setTimeout(()=>{var u;return(u=v.querySelector("#mjf-texte"))==null?void 0:u.focus()},380)}const lt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:Mi,openMobileVolDebitSheet:Ti},Symbol.toStringTag,{value:"Module"})),gt=100,Bo={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function yt(e,i){if(i==="irrelis")return It(e);const t=Bo[i];return t?ce.some(n=>n.parcelIds.includes(e.id)&&t.includes(n.model)):!0}const Bt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"nrs",label:"Niveau de réservoir (spatialisé)",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Hier"],defaultAgg:"7 derniers jours"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"},{id:"irrelis",label:"Irré-LIS",unit:"mm",aggs:["Aujourd'hui","Demain","J+3","J+5"],defaultAgg:"Aujourd'hui"}];function Ho(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function Ss(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"irrigation":return i===0?"#c7c7cc":i<30?"#FFDFB8":"#FF8C00";case"etp":return i<2?"#D6EDF9":i<5?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"temp_rosee":return i<5?"#D2DEFA":i<12?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"rfu":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"nrs":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";case"irrelis":return i>=35?"#24B066":i>=12?"#E8A020":"#E05252";default:return"#0172A4"}}function Ro(e,i){const t=new Date().toISOString().split("T")[0],n=s=>{const l=new Date;return l.setDate(l.getDate()-s),l.toISOString().split("T")[0]},a=s=>{const l=new Date;return l.setDate(l.getDate()+s),l.toISOString().split("T")[0]},o=me.filter(s=>s.plotId===e);switch(i){case"Aujourd'hui":return o.filter(s=>s.iso===t).reduce((s,l)=>s+l.mm,0);case"7 derniers jours":return o.filter(s=>s.real&&s.iso>=n(7)).reduce((s,l)=>s+l.mm,0);case"30 derniers jours":return o.filter(s=>s.real&&s.iso>=n(30)).reduce((s,l)=>s+l.mm,0);case"Demain":return o.filter(s=>!s.real&&s.iso===a(1)).reduce((s,l)=>s+l.mm,0);case"7 prochains jours":return o.filter(s=>!s.real&&s.iso>t&&s.iso<=a(7)).reduce((s,l)=>s+l.mm,0);case"30 prochains jours":return o.filter(s=>!s.real&&s.iso>t&&s.iso<=a(30)).reduce((s,l)=>s+l.mm,0);case"Toute la saison":return o.filter(s=>s.real).reduce((s,l)=>s+l.mm,0);default:return o.filter(s=>s.real).reduce((s,l)=>s+l.mm,0)}}function Oo(e){switch(e){case"irrigation":return 0;case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"nrs":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function No(e,i){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const n=i==="admin",a=we.filter(h=>h.id!==gt);Object.fromEntries(we.map(h=>[h.id,h]));let o=null,s=null;const l={};let m="carte",d="pluie",p="7 derniers jours",v="all";function u(h){if(d==="irrigation")return Ro(h,p);if(d==="irrelis"){const A=re.find(q=>q.id===h);return A?Math.round(zi(A,p)):0}const k=`${h}-${d}-${p}`;return k in l||(l[k]=Oo(d)),l[k]}function c(){return i==="new"||i==="new-adherent"?[]:n?v==="all"?re:v===String(gt)?re.filter(h=>h.orgId===gt):re.filter(h=>String(h.orgId)===v):re.filter(h=>h.orgId===1)}function r(){if(o){try{o.remove()}catch{}o=null,s=null}}function g(){r();const h=Bt.find(E=>E.id===d)||Bt[0],k=c(),A=n?`
      <select class="m-filter-select" id="org-filter" style="flex:0 0 44px;height:44px">
        <option value="all">Toutes les organisations</option>
        <option value="${gt}"${v===String(gt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${a.map(E=>`<option value="${E.id}"${v===String(E.id)?" selected":""}>${E.name}</option>`).join("")}
      </select>`:"",q=[...k].sort((E,F)=>{const D=yt(E,d),C=yt(F,d);return D&&!C?-1:!D&&C?1:D?u(F.id)-u(E.id):E.name.localeCompare(F.name,"fr")}),$=q.length?`<div class="m-plain-list">${q.map(E=>{var P,w,x;const F=((P=E.latlngs)==null?void 0:P.length)>0||((w=E.shape)==null?void 0:w.type)==="polygon"||((x=E.shape)==null?void 0:x.type)==="rectangle",D=[E.crop,E.irrigation,F&&E.area?`${E.area} ha`:null].filter(Boolean).join(" · "),C=yt(E,d),I=ce.filter(b=>b.parcelIds.includes(E.id)).some(b=>b.event&&(Array.isArray(b.event)?b.event.length>0:!0));return`
            <div class="m-plain-row m-tappable" data-plot-id="${E.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${E.name}${I?' <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px"></span>':""}</span>
                ${D?`<span class="m-plain-city">${D}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                ${(()=>{const b=C&&!(d==="irrigation"&&!me.some(T=>T.plotId===E.id)),y=b?u(E.id):null;return`<span class="m-plain-data${b?"":" m-plain-na"}"${b?` style="color:${Ss(d,y)}"`:""}>${b?`${y} ${h.unit}`:"—"}</span>`})()}
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
            ${Bt.map(E=>`<option value="${E.id}"${E.id===d?" selected":""}>${E.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${h.aggs.map(E=>`<option${E===p?" selected":""}>${E}</option>`).join("")}
          </select>
        </div>
        ${A}
      </div>
      ${m==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${$}</div>`}`,S(),m==="carte"&&f(k,h)}function f(h,k){const A=window.L;A&&setTimeout(()=>{const q=t.querySelector("#parcel-map");if(!q)return;if(o=A.map(q,{zoomControl:!1,attributionControl:!1}),A.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(o),!h.length&&(i==="new"||i==="new-adherent")){const D=we.find(P=>P.id===1);D&&o.setView([D.lat,D.lng],13),o.invalidateSize();const C=q.parentElement;C.style.position="relative";const I=document.createElement("div");I.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",I.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-geo-alt" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de parcelle</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Créez votre première parcelle pour commencer à suivre vos cultures.</p>
            <button id="empty-create-parcel-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Créer une parcelle</button>
          </div>`,C.appendChild(I),C.querySelector("#empty-create-parcel-btn").addEventListener("click",()=>{var P;return(P=window.showMobileAddPage)==null?void 0:P.call(window)});return}const $=[],E=[];h.forEach(D=>{var B;const C=d!=="irrigation"||me.some(L=>L.plotId===D.id),I=yt(D,d)&&C?`${u(D.id)} ${k.unit}`:"—",P=ce.filter(L=>L.parcelIds.includes(D.id)).map(L=>L.id),w=()=>Mi(D,P),x=[D.lat,D.lng],b=yt(D,d)&&C,y=b?Ss(d,u(D.id)):"#0172A4",T=D.latlngs&&D.latlngs.length>=3?D.latlngs:[x];D.latlngs&&D.latlngs.length>=3&&A.polygon(D.latlngs,{color:"#fff",weight:2,fillColor:y,fillOpacity:.35}).addTo(o).on("click",w),$.push(...T),b&&E.push(...T);const j=A.circleMarker(x,{radius:b?8:6,color:"#fff",weight:2,fillColor:y,fillOpacity:b?.95:.4}).addTo(o);if(P.some(L=>{const M=ce.find(O=>O.id===L);return(M==null?void 0:M.event)&&(Array.isArray(M.event)?M.event.length>0:!0)})&&A.marker(x,{icon:A.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(o),b){j.bindTooltip(I,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const L=O=>{if(!O)return;const N=Ho(y);O.style.setProperty("background",y,"important"),O.style.setProperty("color",N,"important"),O.style.setProperty("border-color",N,"important"),O.style.setProperty("box-shadow","none","important")},M=(B=j.getTooltip())==null?void 0:B.getElement();M&&L(M),j.on("tooltipopen",O=>L(O.tooltip.getElement()))}j.on("click",w)});const F=E.length?E:$;F.length&&(s=F,o.fitBounds(F,{padding:[32,32]})),o.invalidateSize()},0)}window.addEventListener("m-tab-change",h=>{h.detail==="parcelles"&&m==="carte"&&o&&setTimeout(()=>{o.invalidateSize(),s!=null&&s.length&&o.fitBounds(s,{padding:[32,32]})},50)});function S(){var h,k,A;t.querySelectorAll(".m-view-btn").forEach(q=>q.addEventListener("click",()=>{m=q.dataset.view,g()})),(h=t.querySelector("#metric-sel"))==null||h.addEventListener("change",q=>{var $;d=q.target.value,p=(($=Bt.find(E=>E.id===d))==null?void 0:$.defaultAgg)||"",g()}),(k=t.querySelector("#agg-sel"))==null||k.addEventListener("change",q=>{p=q.target.value,g()}),(A=t.querySelector("#org-filter"))==null||A.addEventListener("change",q=>{v=q.target.value,g()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(q=>{q.addEventListener("click",()=>{const $=re.find(F=>F.id===+q.dataset.plotId);if(!$)return;const E=ce.filter(F=>F.parcelIds.includes($.id)).map(F=>F.id);Mi($,E)})})}g()}const Te={djMin:0,djMax:18,hfSeuil:7.2},Vo={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#0B3A64"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"}},Wo=4,Jo={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},Uo={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"},Go={"cuillère bloquée":{icon:"bi-droplet-fill",summary:"La cuillère du pluviomètre ne se déverse pas correctement. Les mesures de pluie peuvent être inexactes ou nulles.",causes:["Feuilles, insectes ou toiles d'araignées obstruant l'entonnoir","Corps étranger bloquant l'axe de rotation de la cuillère","Dépôts calcaires ou algues dans le mécanisme","Capteur installé hors niveau (non vertical)","Gel partiel du mécanisme en période froide"],solutions:[{n:1,title:"Inspecter l'entonnoir",desc:"Retirez toute feuille, insecte ou débris présent dans l'entonnoir. Inspectez visuellement la cuillère."},{n:2,title:"Tester la cuillère manuellement",desc:"Appuyez alternativement sur chaque compartiment de la cuillère : elle doit basculer librement d'un côté à l'autre."},{n:3,title:"Rincer à l'eau claire",desc:"Versez lentement de l'eau claire dans l'entonnoir. Évitez les détergents qui pourraient laisser des résidus affectant les mesures."},{n:4,title:"Vérifier la verticalité",desc:"Assurez-vous que le mat ou le support est bien vertical à l'aide d'un niveau à bulle. Une inclinaison de 5° peut bloquer la cuillère."},{n:5,title:"Observer les prochaines pluies",desc:"Si l'anomalie persiste après la prochaine pluie, comparez avec une station voisine. Contactez le support si nécessaire."}],diag:[{label:"Dernière mesure de pluie",hint:"Vérifiez si des pluies ont bien été comptabilisées récemment"},{label:"Station voisine",hint:"Comparez avec un autre capteur P ou P+ proche"},{label:"Historique nettoyage",hint:"Vérifiez le journal de maintenance du capteur"},{label:"Saison",hint:"Automne/hiver : vérifiez la présence de gel ou feuilles"}]},"capteur couché":{icon:"bi-phone-landscape",summary:"Le capteur a détecté une position anormale (inclinaison excessive). Les mesures météo peuvent être perturbées.",causes:["Coup de vent violent ayant renversé ou incliné le support","Choc accidentel (passage d'engins agricoles, animaux)","Support ou mat inadapté, insuffisamment ancré","Affaissement du sol après forte pluie","Neige ou givre ayant alourdi le capteur"],solutions:[{n:1,title:"Se rendre sur site",desc:"Vérifiez visuellement l'état du capteur et de son support."},{n:2,title:"Redresser et fixer le support",desc:"Remettez le mat en position verticale. Utilisez un niveau à bulle pour vérifier. Renforcez l'ancrage si nécessaire."},{n:3,title:"Vérifier l'intégrité du capteur",desc:"Inspectez le boîtier, l'antenne et les capteurs externes (anémomètre, girouette, pluvio) pour tout dommage visible."},{n:4,title:"Contrôler la qualité du signal",desc:"Après remise en place, vérifiez que les émissions reprennent normalement et que le signal est bon."},{n:5,title:"Signaler l'anomalie résolue",desc:`Utilisez le bouton "Arrêter" pour clore l'anomalie une fois le capteur en position correcte.`}],diag:[{label:"Qualité du signal",hint:"Un signal dégradé peut indiquer un problème d'antenne"},{label:"Date de l'anomalie",hint:"Correspond-elle à un épisode météo violent ?"},{label:"Type de support",hint:"Mat télescopique, piquet, fixation murale ?"},{label:"Accès terrain",hint:"Vérifiez si la parcelle est accessible (engins, conditions météo)"}]},"émissions interrompues":{icon:"bi-wifi-off",summary:"Le capteur n'émet plus de données. Aucune mesure n'a été reçue depuis un moment anormalement long.",causes:["Batterie déchargée ou défaillante","Perte de couverture réseau télécom (Sigfox / LoRa)","Obstruction physique du signal (bâtiment, relief, végétation)","Défaillance électronique interne","Exposition à l'eau ou à l'humidité excessive (joint endommagé)"],solutions:[{n:1,title:"Vérifier le niveau de batterie",desc:"Accédez aux paramètres du capteur et consultez l'indicateur de batterie. Si critique, procédez au remplacement."},{n:2,title:"Contrôler la couverture réseau",desc:"Vérifiez la carte de couverture Sigfox ou LoRa pour l'emplacement du capteur. Un déplacement de quelques mètres peut suffire."},{n:3,title:"Relancer manuellement",desc:"Sur certains modèles, un appui court sur le bouton d'activation peut forcer une tentative d'émission. Consultez la notice."},{n:4,title:"Inspecter l'étanchéité",desc:"Vérifiez l'état des joints et du boîtier. Une infiltration d'eau peut provoquer des courts-circuits."},{n:5,title:"Contacter le support",desc:"Si les étapes précédentes n'ont pas résolu le problème, le capteur peut nécessiter une réparation ou un remplacement."}],diag:[{label:"Dernière émission",hint:"Il y a combien de temps ? Heure/jour de la dernière trame reçue"},{label:"Couverture réseau",hint:"Vérifiez sur la carte de couverture opérateur"},{label:"Batterie",hint:"Niveau batterie lors de la dernière émission connue"},{label:"Météo récente",hint:"Orage, forte pluie, gel ayant pu affecter le capteur"}]},"capteur déplacé":{icon:"bi-geo-alt",summary:"Le capteur a été détecté à un emplacement différent de sa position habituelle.",causes:["Déplacement intentionnel non enregistré dans l'application","Vol ou déplacement non autorisé du capteur","Dérive GPS en cas de signal GNSS perturbé","Déplacement lors d'opérations agricoles (travaux, irrigation)"],solutions:[{n:1,title:"Vérifier la position actuelle",desc:"Rendez-vous sur site pour confirmer l'emplacement physique du capteur."},{n:2,title:"Mettre à jour la position",desc:"Si le capteur a été déplacé intentionnellement, mettez à jour sa géolocalisation dans les paramètres."},{n:3,title:"Signaler un vol",desc:"Si le capteur a disparu, contactez les autorités et le support Weenat pour signalement et désactivation."},{n:4,title:"Clore l'anomalie",desc:`Une fois la situation clarifiée, utilisez le bouton "Arrêter" pour clore l'événement.`}],diag:[{label:"Coordonnées initiales",hint:"Comparez avec les coordonnées enregistrées dans les paramètres"},{label:"Dernier passage",hint:"Qui a eu accès à la parcelle récemment ?"},{label:"Signal GPS",hint:"Un signal faible peut fausser la géolocalisation sans déplacement réel"}]}};function Yo(e,i){const t=Go[e]||{summary:"Anomalie détectée sur ce capteur.",causes:["Cause inconnue — contactez le support pour plus d'informations."],solutions:[{n:1,title:"Contacter le support",desc:"Décrivez l'anomalie observée pour obtenir de l'aide."}]};let n="causes";function a(u,c,r){return`<button class="m-anom-tab" data-tab="${u}" style="flex:1;padding:10px 4px;background:none;border:none;border-bottom:2px solid ${r?"#0172A4":"transparent"};font-size:13px;font-weight:${r?"600":"400"};color:${r?"#0172A4":"#8e8e93"};cursor:pointer;font-family:inherit;white-space:nowrap">${c}</button>`}function o(){return`<ul style="margin:0;padding:0 0 0 18px;display:flex;flex-direction:column;gap:10px">
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
      </div>`}function d(){return n==="causes"?o():n==="solutions"?s():l()}const p=$e(`
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
        <div id="anom-content">${d()}</div>
      </div>
    </div>
  `);p.querySelector("#anom-back").addEventListener("click",fe);function v(){p.querySelectorAll(".m-anom-tab").forEach(u=>{u.addEventListener("click",()=>{n=u.dataset.tab,p.querySelector("#anom-tabs-bar").innerHTML=m(),p.querySelector("#anom-content").innerHTML=d(),v()})})}v()}const Ii={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Ko={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"};function Bi(e){return e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[30,60]:e==="CHP-60/90"?[45,90]:null}function ks(e,i){const t=Ii[e.model]?`${Ii[e.model]} · ${e.model}`:e.model,n=Bi(e.model)&&e.depth!=null?`${e.depth} cm`:null;return[t,n,i].filter(Boolean).join(" · ")}const Mt={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function xn(e,i){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:i},(n,a)=>{const o=a/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(o-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,s))})}const $n={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function Zo(e,i,t,n,a,o=20){const s=$n[e]||10080,l=new Date,m=u=>e==="1d"||e==="hier"?`${String(u.getHours()).padStart(2,"0")}h`:e==="365d"?u.toLocaleDateString("fr-FR",{month:"short"}):`${String(u.getDate()).padStart(2,"0")}/${String(u.getMonth()+1).padStart(2,"0")}`,d=4,p=i-t-n,v=a-o;return Array.from({length:d+1},(u,c)=>{const r=c/d,g=new Date(l.getTime()-(1-r)*s*6e4),f=(t+r*p).toFixed(1),S=c===0?"start":c===d?"end":"middle";return[`<line x1="${f}" y1="${v}" x2="${f}" y2="${v+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${f}" y="${a-3}" text-anchor="${S}" font-size="9" fill="#8e8e93" font-family="-apple-system">${m(g)}</text>`].join("")}).join("")}function Xo(e,i,t,n="7d",a=""){const o=wn[n]||60,s=xn(e,o),l=320,m=100,d=34,p=6,v=10,u=20,c=l-d-p,r=m-v-u,g=t?0:Math.min(...s),f=Math.max(...s,g+.001),S=f-g,h=w=>d+w/(s.length-1)*c,k=w=>v+r-(w-g)/S*r,A=`g${Math.random().toString(36).slice(2,8)}`,q=[0,.5,1].map(w=>{const x=g+w*S,b=v+r-w*r;return`<text x="${d-3}" y="${(b+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${x<10?x.toFixed(1):Math.round(x)}</text>`}).join(""),$=[.25,.5,.75].map(w=>`<line x1="${d}" y1="${(v+r-w*r).toFixed(1)}" x2="${l-p}" y2="${(v+r-w*r).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),E=`<line x1="${d}" y1="${v+r}" x2="${l-p}" y2="${v+r}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,F=Zo(n,l,d,p,m);if(t){const w=c/s.length*.7;return`<svg viewBox="0 0 ${l} ${m}" width="100%" height="${m}" preserveAspectRatio="none">
      ${q}${$}${E}
      ${s.map((x,b)=>{const y=(x-g)/S*r,T=v+r-y;return`<rect x="${(h(b)-w/2).toFixed(1)}" y="${T.toFixed(1)}" width="${w.toFixed(1)}" height="${y.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${F}
    </svg>`}const D=s.map((w,x)=>[h(x),k(w)]),C=D.map(([w,x],b)=>`${b?"L":"M"}${w.toFixed(1)},${x.toFixed(1)}`).join(" "),I=`${C} L${h(s.length-1).toFixed(1)},${(v+r).toFixed(1)} L${d},${(v+r).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map(w=>+w.toFixed(2)),minV:+g.toFixed(2),maxV:+f.toFixed(2)}))}" data-color="${i}" data-unit="${a}" style="position:relative">
    <svg viewBox="0 0 ${l} ${m}" width="100%" height="${m}" preserveAspectRatio="none">
      <defs><linearGradient id="${A}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${q}${$}${E}
      <path d="${I}" fill="url(#${A})"/>
      <path d="${C}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${D.map(([w,x])=>`<circle cx="${w.toFixed(1)}" cy="${x.toFixed(1)}" r="2" fill="${i}"/>`).join("")}
      ${F}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Qo(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function el(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t}=i,n=e.querySelector(".m-chart-tip"),a=e.querySelector(".m-chart-crosshair"),o=e.dataset.color||"#0172A4",s=e.dataset.unit||"";function l(d){const p=e.getBoundingClientRect(),v=Math.max(0,Math.min(1,(d-p.left)/p.width)),u=Math.round(v*(t.length-1)),c=t[u],r=v*100,g=(c<10?c.toFixed(1):String(Math.round(c)))+(s?` ${s}`:""),f=Qo(o);a.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${r}%;width:1px;background:${o};opacity:.5`,n.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(r,75)}%;background:${o};color:${f};border:1.5px solid ${f};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,n.textContent=g}function m(){a.style.display="none",n.style.display="none"}e.addEventListener("pointermove",d=>{d.preventDefault(),l(d.clientX)}),e.addEventListener("pointerdown",d=>l(d.clientX)),e.addEventListener("pointerup",m),e.addEventListener("pointerleave",m),e.style.cursor="crosshair"}const wn={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function tl(e,i,t){if(!t)return"";const n=wn[i]||60,o=($n[i]||10080)/(n*60),s=xn(e,n);let l=[];if(t==="temp"){const m=s.reduce((p,v)=>p+Math.max(0,Math.min(v,Te.djMax)-Te.djMin),0)*(o/24),d=s.filter(p=>p<Te.hfSeuil).length*o;l=[{label:"Degrés jours",val:`${Math.round(m)} DJ`,metricId:"dj",thresholdText:`${Te.djMin}°C → ${Te.djMax}°C`},{label:"Heures de froid",val:`${Math.round(d)} h`,metricId:"hf",thresholdText:`< ${Te.hfSeuil}°C`}]}else if(t==="pluie")l=[{label:"Cumul de pluie",val:`${s.reduce((d,p)=>d+p,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const m=s.filter(d=>d>120).length*o;l=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(m)} h`,metricId:"rayo"}]}else if(t==="hws"){const m=s.filter(d=>d>50).length*o;l=[{label:"Cumul d'heures d'humectation",val:`${Math.round(m)} h`,metricId:"humec"}]}return l.length?`<div class="m-chart-cumuls">${l.map(m=>{const d=m.metricId==="dj"||m.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${m.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${m.label}</span>
          ${m.thresholdText?`<span class="m-chart-cumul-thresh">${m.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${m.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${d}
        <button class="m-cumul-add-btn" data-cumul-label="${m.label}" data-cumul-val="${m.val}" data-cumul-metric-id="${m.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}function il(e,i="7d",t="1h"){const n=Mt[e.model]||[];if(!n.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const a={temp:"temperature",tseche:"temp_seche",thumide:"temp_humide"},o={temp:"temperature"},s=new Set(["tseche","thumide"]),l=n.map(p=>{const v=a[p.id]||p.id,u=tl(p.id,i,p.cumulsType),c=s.has(p.id)?"":`<button class="m-msr-add-btn" data-msr-metric-id="${o[p.id]||p.id}" data-msr-label="${p.label}" data-msr-unit="${p.unit||""}" data-msr-color="${p.color}" data-msr-period="${i}" data-msr-step="${t}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`;return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${p.color}">${p.label}</span>
          ${c}
        </div>
        ${Xo(p.id,p.color,p.cumul,i,p.unit||"")}
        <div class="m-chart-details-link" data-metric-id="${v}">Voir détails →</div>
        ${u}
      </div>`}).join(""),m=new Date().toISOString().slice(0,10),d=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
        <input type="date" class="m-custom-to m-custom-date" value="${m}">
      </div>`:""}
    </div>
    <div class="m-detail-section">${l}</div>`}function sl(e){var v;const i=(e.parcelIds||[]).map(u=>re.find(c=>c.id===u)).filter(Boolean),t=i[0]||null,n=t?we.find(u=>u.id===t.orgId):null,a=u=>u>=80?"#30d158":u>=60?"#ff9f0a":"#ff3b30",o=e.networkQuality||80,s=a(o),l=e.messages7d||85,m=a(l),d=e.event?Array.isArray(e.event)?e.event:[e.event]:[],p=i.map((u,c)=>`<div class="m-list-row${c===i.length-1&&i.length>0,""}" data-open-plot="${u.id}" style="cursor:pointer">
      <span class="m-list-row-label" style="color:#0172A4;font-weight:600">${u.name}</span>
      ${u.crop?`<span class="m-list-row-value">${u.crop}</span>`:""}
      <i class="bi bi-chevron-right" style="color:#0172A4;font-size:14px;flex-shrink:0;margin-right:2px"></i>
      <button data-unlink-plot-btn="${u.id}" style="background:none;border:none;padding:4px 6px;cursor:pointer;color:#ff3b30;font-size:13px;line-height:1;flex-shrink:0" title="Délier">
        <i class="bi bi-x-circle"></i>
      </button>
    </div>`).join("");return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Nom du capteur</span>
          <input type="text" id="sensor-name-input" class="m-inline-input" placeholder="${e.serial}"
            value="${((v=(()=>{try{return JSON.parse(localStorage.getItem("weenat-sensor-names"))||{}}catch{return{}}})())==null?void 0:v[e.id])||""}"
            style="flex:1;min-width:0;margin-left:10px;border:1px solid rgba(0,0,0,.15);border-radius:8px;padding:5px 10px;font-size:14px;font-family:inherit;color:#1c1c1e;background:#f5f5f7;outline:none;user-select:text;-webkit-user-select:text">
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${Ko[e.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${e.model} — ${Ii[e.model]||e.model}</span>
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

      ${(()=>{const u=Bi(e.model);return u?`
          <div class="m-list-section-header">Configuration</div>
          <div class="m-list">
            <div class="m-list-row m-list-row--last" style="flex-wrap:wrap;gap:8px">
              <span class="m-list-row-label">Profondeur d'installation</span>
              <div style="display:flex;align-items:center;gap:6px;margin-left:auto">
                <input type="number" id="chp-depth-input" value="${e.depth??u[0]}" min="${u[0]}" max="${u[1]}" step="5"
                  style="width:62px;border:1px solid rgba(0,0,0,.15);border-radius:8px;padding:5px 8px;font-size:14px;font-family:inherit;background:#f5f5f7;text-align:center;-webkit-appearance:none">
                <span style="font-size:13px;color:#8e8e93">cm</span>
                <button id="chp-depth-save" style="background:#0172A4;color:#fff;border:none;border-radius:8px;padding:6px 12px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer">Enregistrer</button>
              </div>
              <div style="width:100%;font-size:11px;color:#8e8e93;margin-top:-4px">De ${u[0]} à ${u[1]} cm</div>
            </div>
          </div>`:""})()}

      <div class="m-list-section-header">Géolocalisation</div>
      <div class="m-list">
        ${t?`<div id="sensor-minimap" class="m-minimap-container"></div>
        <div class="m-list-row" data-action="expand-map">
          <i class="bi bi-arrows-fullscreen" style="color:#0172A4"></i>
          <span class="m-list-row-label" style="color:#0172A4">Agrandir la carte</span>
        </div>`:""}
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
        ${d.length?d.map((u,c)=>{const r=u.toLowerCase().includes("déplacé");return`<div class="m-list-row m-ev-row" data-ev-idx="${c}" style="justify-content:space-between;gap:10px;cursor:pointer">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;flex-shrink:0"></i>
                  <span class="m-list-row-label" style="color:#ff3b30">${u}</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
                  ${r?`<button class="ev-stop-btn" data-ev-idx="${c}" style="background:rgba(255,59,48,.1);border:1px solid #ff3b30;border-radius:8px;padding:5px 10px;font-size:12px;color:#ff3b30;font-family:inherit;cursor:pointer;white-space:nowrap">Arrêter</button>`:""}
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:12px"></i>
                </div>
              </div>`}).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
      </div>

      <div class="m-list-section-header">Réseau</div>
      <div class="m-list" style="padding:12px 14px">
        <div class="m-signal-metric">
          <div class="m-signal-metric-row">
            <span class="m-signal-bar-label">Qualité de la couverture réseau</span>
            <span class="m-signal-bar-pct" style="color:${s}">${o}%</span>
          </div>
          <div class="m-signal-bar-track"><div class="m-signal-bar-fill" style="width:${o}%;background:${s}"></div></div>
        </div>
        <div class="m-signal-metric">
          <div class="m-signal-metric-row">
            <span class="m-signal-bar-label">Mesures reçues sur 7 jours</span>
            <span class="m-signal-bar-pct" style="color:${m}">${l}%</span>
          </div>
          <div class="m-signal-bar-track"><div class="m-signal-bar-fill" style="width:${l}%;background:${m}"></div></div>
        </div>
        <div class="m-list-row m-list-row--last" style="padding:0;margin-top:4px">
          <span class="m-list-row-label">Opérateur</span>
          <span class="m-list-row-value">${e.telecom||"Sigfox"}</span>
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
        ${p}
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
    </div>`}function ji(e,i="donnees",t="admin"){var c;e.parcelIds||(e.parcelIds=[]);const n=e.parcelIds.length?re.find(r=>e.parcelIds.includes(r.id)):null;let a=i,o="7d",s="1h",l=!1;const m=n&&((c=we.find(r=>r.id===n.orgId))==null?void 0:c.ville)||"",d=$e(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${e.serial}</div>
          <div class="m-detail-subtitle">${ks(e,m)}</div>
        </div>
        <button class="m-detail-journal-btn" id="d-journal" title="Journal"><i class="bi bi-journal-text"></i></button>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres${e.event&&(!Array.isArray(e.event)||e.event.length>0)?' <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px;margin-bottom:1px;flex-shrink:0"></span>':""}</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function p(){const r=d.querySelector("#detail-content");a==="donnees"&&(r.innerHTML=il(e,o,s)),a==="params"&&(r.innerHTML=sl(e),v()),u()}function v(){const r=window.L,g=e.parcelIds.length?re.find(f=>e.parcelIds.includes(f.id)):null;!r||!g||setTimeout(()=>{const f=d.querySelector("#sensor-minimap");if(!f)return;const S=r.map(f,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});r.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(S),S.setView([g.lat,g.lng],15),r.circleMarker([g.lat,g.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(S)},50)}function u(){var r,g,f,S;(r=d.querySelector(".m-period-sel"))==null||r.addEventListener("change",h=>{o=h.target.value,p()}),(g=d.querySelector(".m-step-sel"))==null||g.addEventListener("change",h=>{s=h.target.value,p()}),d.querySelectorAll(".m-chart-svg-wrap").forEach(h=>el(h)),d.querySelectorAll(".m-chart-details-link[data-metric-id]").forEach(h=>{h.addEventListener("click",()=>{ye(()=>import("./chart-fullscreen-Bk60tdHe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(k=>k.initChartFullscreen({sensor:e,metricId:h.dataset.metricId,backLabel:"Retour"}))})}),d.querySelectorAll(".m-msr-add-btn").forEach(h=>{h.addEventListener("click",()=>{const k=h.dataset.msrMetricId,A=`s-${e.id}`,q=`${e.model} ${e.serial}`,$=h.dataset.msrPeriod,E=h.dataset.msrStep,F=an({subjectKey:A,subjectLabel:q,metricId:k,metricLabel:h.dataset.msrLabel,unit:h.dataset.msrUnit||"",period:$,periodLabel:Jo[$]||$,step:E,stepLabel:Uo[E]||E,color:h.dataset.msrColor});if(F==="max"){X(`Maximum de mesures atteint (${Wo})`);return}if(F==="dup"){X("Cette mesure est déjà dans vos favoris");return}X("Mesure ajoutée au tableau de bord")})}),d.addEventListener("click",h=>{const k=h.target.closest(".m-cumul-add-btn");if(k){const q=k.dataset.cumulMetricId,$=k.dataset.cumulVal,E=Vo[q];if(!E)return;const F=`${e.model} ${e.serial}`,D=document.createElement("div");D.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${E.metricLabel}</strong> (<em>${$}</em>) au tableau de bord du capteur <strong>${e.serial}</strong> ?</div>`,ue({title:"Tableau de bord",body:D,doneLabel:"Ajouter",onDone:()=>{const C=q==="hf"?{cold:Te.hfSeuil}:q==="dj"?{low:Te.djMin,high:Te.djMax}:null;if(Li({metricId:q,...E,subjectKey:`s-${e.id}`,subjectLabel:F,fromDate:`${new Date().getFullYear()}-01-01`,value:$,thresholds:C})==="max"){X("Maximum de cumuls atteint (5)");return}X("Cumul ajouté au tableau de bord")}});return}const A=h.target.closest(".m-cumul-edit-btn");if(A){const q=A.dataset.cumulMetricId,$=document.createElement("div");q==="hf"?($.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Te.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:$,doneLabel:"Appliquer",onDone:()=>{var E;Te.hfSeuil=+(((E=$.querySelector("#edit-hf-seuil"))==null?void 0:E.value)??7.2),p()}})):q==="dj"&&($.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Te.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Te.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:$,doneLabel:"Appliquer",onDone:()=>{var E,F;Te.djMin=+(((E=$.querySelector("#edit-dj-min"))==null?void 0:E.value)??0),Te.djMax=+(((F=$.querySelector("#edit-dj-max"))==null?void 0:F.value)??18),p()}}))}}),d.querySelectorAll(".m-list-row[data-action]").forEach(h=>{h.addEventListener("click",()=>{const k=h.dataset.action;if(k==="expand-map"){const A=e.parcelIds.length?re.find(q=>e.parcelIds.includes(q.id)):null;A&&nl(A.lat,A.lng)}else if(k==="add-maintenance")As(e,{openForm:!0});else if(k==="add-plot")al(e,t,p);else if(k==="delete"){const A=re.find(q=>{var $;return($=e.parcelIds)==null?void 0:$.includes(q.id)});Jt({title:"Retirer de l'exploitation",message:`Retirer <strong>${e.model} ${e.serial}</strong> de l'exploitation ?${A?`<br><br>Parcelle liée : <strong>${A.name}</strong>.`:""}<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>X("Capteur retiré de l'exploitation (fonctionnalité à venir)")})}else X("Fonctionnalité à venir")})}),d.querySelectorAll(".ev-stop-btn").forEach(h=>{h.addEventListener("click",k=>{k.stopPropagation();const A=+h.dataset.evIdx;Array.isArray(e.event)?(e.event=e.event.filter((q,$)=>$!==A),e.event.length||(e.event=null)):e.event=null,p()})}),d.querySelectorAll(".m-ev-row").forEach(h=>{h.addEventListener("click",k=>{if(k.target.closest(".ev-stop-btn"))return;const A=+h.dataset.evIdx,q=e.event?Array.isArray(e.event)?e.event:[e.event]:[];q[A]&&Yo(q[A],e)})}),d.querySelectorAll("[data-open-plot]").forEach(h=>{h.addEventListener("click",()=>{const k=re.find(q=>q.id===+h.dataset.openPlot);if(!k)return;const A=ce.filter(q=>q.parcelIds.includes(k.id)).map(q=>q.id);ye(()=>Promise.resolve().then(()=>lt),void 0).then(q=>q.initParcelDetail(k,A,"widgets","Capteur"))})}),d.querySelectorAll("[data-unlink-plot-btn]").forEach(h=>{h.addEventListener("click",k=>{k.stopPropagation();const A=+h.dataset.unlinkPlotBtn,q=re.find($=>$.id===A);Jt({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${(q==null?void 0:q.name)||"la parcelle"}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter($=>$!==A),rt(e.id,`Capteur délié de la parcelle « ${(q==null?void 0:q.name)||""} »`),X(`Délié de ${(q==null?void 0:q.name)||"la parcelle"}`),p()}})})}),(f=d.querySelector("#sensor-name-input"))==null||f.addEventListener("change",h=>{const k=h.target.value.trim();let A="";try{const $=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};A=$[e.id]||"",k?$[e.id]=k:delete $[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify($))}catch{}const q=d.querySelector(".m-detail-title");q&&(q.textContent=k||e.serial),rt(e.id,`Nom du capteur modifié : « ${A||e.serial} » → « ${k||e.serial} »`),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))}),(S=d.querySelector("#chp-depth-save"))==null||S.addEventListener("click",()=>{const h=d.querySelector("#chp-depth-input"),k=Bi(e.model);if(!h||!k)return;let A=parseInt(h.value);if(isNaN(A))return;A=Math.max(k[0],Math.min(k[1],A)),h.value=A;const q=e.depth??k[0];e.depth=A;const $=d.querySelector(".m-detail-subtitle");$&&($.textContent=ks(e,m)),A!==q&&rt(e.id,`Profondeur d'installation modifiée : ${q} cm → ${A} cm`),X(`Profondeur enregistrée : ${A} cm`)})}d.querySelectorAll(".m-detail-tab").forEach(r=>{r.addEventListener("click",()=>{d.querySelectorAll(".m-detail-tab").forEach(g=>g.classList.remove("active")),r.classList.add("active"),a=r.dataset.view,p()})}),d.querySelector(".m-detail-back").addEventListener("click",fe),d.querySelector("#d-star").addEventListener("click",()=>{l=!l;const r=d.querySelector("#d-star");r.querySelector("i").className=l?"bi bi-star-fill":"bi bi-star",r.style.color=l?"#f5c842":"",X(l?"Ajouté aux favoris":"Retiré des favoris")}),d.querySelector("#d-journal").addEventListener("click",()=>As(e)),d.querySelector("#d-plus").addEventListener("click",()=>{var r;return(r=window.showMobileAddPage)==null?void 0:r.call(window)}),p()}const Sn=e=>`sensor-journal-${e}`,kn=[{id:"installation",label:"Ajouté à l'organisation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}],Es=["Capteur légèrement déplacé — redressé","Antenne réorientée pour améliorer la réception","Végétation haute autour du capteur — dégagée","Capteur incliné après un coup de vent — stabilisé"],Ls=["antenne","bocal","lacet","cuillere"];function Yt(e){try{const a=localStorage.getItem(Sn(e));if(a)return JSON.parse(a)}catch{}const i=Ls[e%Ls.length],t=(a,o)=>{const s=new Date(a+"T00:00:00");return s.setDate(s.getDate()+o),s.toISOString().slice(0,10)},n=e%8;return[{id:1,type:"installation",date:t("2023-01-15",n),user:"Technicien Weenat",role:"conseiller",texte:""},{id:2,type:i,date:t("2023-06-10",n),user:"Technicien Weenat",role:"conseiller",texte:""},{id:3,type:"note",date:t("2023-11-02",n),user:"Jean Dupont",role:"membre",texte:Es[e%Es.length]}]}function Hi(e,i){localStorage.setItem(Sn(e),JSON.stringify(i))}function rt(e,i){Hi(e,[{id:Date.now(),type:"note",date:new Date().toISOString().slice(0,10),user:"",role:"",texte:i,_system:!0},...Yt(e)])}function nl(e,i){const t=$e(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
        <span style="font-size:17px;font-weight:600">Localisation</span>
        <div style="width:44px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sensor-map-fullscreen" style="position:absolute;top:52px;left:0;right:0;bottom:0"></div>`);t.querySelector(".m-detail-back").addEventListener("click",fe),setTimeout(()=>{const n=window.L,a=t.querySelector("#sensor-map-fullscreen");if(!n||!a)return;const o=n.map(a,{zoomControl:!0,attributionControl:!1});n.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(o),o.setView([e,i],16),n.circleMarker([e,i],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(o)},50)}function al(e,i,t){const n=i==="adherent"?1:null,a=n?re.filter(d=>d.orgId===n):re.filter(d=>d.orgId!==100),o=new Set((Mt[e.model]||[]).map(d=>d.id)),s=document.createElement("div");s.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function l(d=""){const p=d.toLowerCase(),v=(p?a.filter(c=>c.name.toLowerCase().includes(p)||(c.crop||"").toLowerCase().includes(p)):a).slice().sort((c,r)=>c.name.localeCompare(r.name,"fr")),u=s.querySelector("#plot-list");if(!v.length){u.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}u.innerHTML="",v.forEach((c,r)=>{const g=e.parcelIds.includes(c.id),f=r===v.length-1,S=document.createElement("div");S.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${f?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,S.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${c.name}</span>
          ${c.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${c.crop}</span>`:""}
        </span>
        ${g?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,S.addEventListener("click",()=>{if(g)Jt({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${c.name}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(h=>h!==c.id),rt(e.id,`Capteur délié de la parcelle « ${c.name} »`),X(`Délié de ${c.name}`),l(d),t()}});else{const h=ce.find(k=>k.id!==e.id&&k.parcelIds.includes(c.id)&&(Mt[k.model]||[]).some(A=>o.has(A.id)));h?(m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),ol(e,c,h,t)},280)):(e.parcelIds=[...e.parcelIds,c.id],rt(e.id,`Capteur lié à la parcelle « ${c.name} »`),X(`Lié à ${c.name}`),l(d),t())}}),u.appendChild(S)})}l();const m=ue({title:"Parcelles liées",body:s,doneLabel:"Fermer",onDone:()=>{t()}});s.querySelector("#plot-search").addEventListener("input",d=>l(d.target.value))}function ol(e,i,t,n){const a=(Mt[t.model]||[]).filter(l=>(Mt[e.model]||[]).some(m=>m.id===l.id)).map(l=>l.label).join(", "),o=document.createElement("div");o.innerHTML=`
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
    <div style="height:6px"></div>`;const s=ue({title:"Conflit de métrique",body:o,doneLabel:"Annuler",onDone:()=>{}});o.querySelector("#keep-existing").addEventListener("click",()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),X("Liaison annulée")},280)}),o.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(l=>l!==i.id),rt(t.id,`Capteur délié de la parcelle « ${i.name} »`),e.parcelIds=[...e.parcelIds,i.id],rt(e.id,`Capteur lié à la parcelle « ${i.name} »`),s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),X(`Lié à ${i.name}`),n()},280)})}function As(e,i={}){const t=$e(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",fe);const n=Object.fromEntries(kn.map(o=>[o.id,o]));function a(){var p;const o=t.querySelector("#sjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(v=>v.linkedType==="sensor"&&v.linkedId===e.id).map((v,u)=>({id:`dash-${u}`,type:"note",date:v.date,texte:v.text,user:v.auteur,_fromDashboard:!0})),l=[...Yt(e.id),...s].sort((v,u)=>u.date.localeCompare(v.date)),m=v=>{const[u,c,r]=v.split("-");return`${r}/${c}/${u}`};let d=`
      <div style="padding:12px 16px 8px">
        <button class="w-irrig-act-btn w-irrig-act-btn--pri" id="sjrn-add-btn">
          <i class="bi bi-plus-lg"></i> Ajouter une entrée
        </button>
      </div>
    `;l.length===0?d+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(d+='<div class="m-jrn-timeline">',l.forEach((v,u)=>{const c=n[v.type]||{label:v.type,icon:"bi-circle",color:"#8e8e93"},r=u===l.length-1,g=!!v._fromDashboard,f=v.type==="note"&&!v._system;d+=`
          <div class="m-jrn-entry" data-id="${v.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${c.color}18;color:${c.color};border-color:${c.color}40">
                <i class="bi ${c.icon}"></i>
              </div>
              ${r?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${m(v.date)}</span>
                <span class="journal-type-badge journal-type-badge--maintenance">${c.label}</span>
                ${g?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':f?`<button class="m-jrn-del" data-id="${v.id}"><i class="bi bi-trash3"></i></button>`:""}
              </div>
              ${v.texte?`<div class="m-jrn-texte">${v.texte}</div>`:""}
              ${v.user?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${v.user}${ll(v.role)}</div>`:""}
            </div>
          </div>`}),d+="</div>"),o.innerHTML=d,(p=o.querySelector("#sjrn-add-btn"))==null||p.addEventListener("click",()=>Cs(e.id,a)),o.querySelectorAll(".m-jrn-del").forEach(v=>{v.addEventListener("click",()=>{const u=parseInt(v.dataset.id);Hi(e.id,Yt(e.id).filter(c=>c.id!==u)),a()})})}a(),i.openForm&&Cs(e.id,a)}function ll(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}function Cs(e,i){const t=new Date().toISOString().slice(0,10),n=document.createElement("div");n.innerHTML=`
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-form-label">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${kn.map(a=>`<option value="${a.id}">${a.label}</option>`).join("")}
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
    </div>`,ue({title:"Opération de maintenance",body:n,doneLabel:"Enregistrer",onDone:()=>{const a=n.querySelector("#sjf-type").value,o=n.querySelector("#sjf-date").value||t,s=n.querySelector("#sjf-user").value.trim()||"Jean Dupont",l=localStorage.getItem("menuRole")==="admin-reseau"?"conseiller":"membre",m=n.querySelector("#sjf-texte").value.trim();Hi(e,[{id:Date.now(),type:a,date:o,user:s,role:l,texte:m},...Yt(e)]),i()}}),setTimeout(()=>{var a;return(a=n.querySelector("#sjf-texte"))==null?void 0:a.focus()},350)}const qi=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:ji},Symbol.toStringTag,{value:"Module"})),xt=100,mi=1,vi=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],rl={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},cl={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function Ht(e,i){return(cl[e]||[]).includes(i)}function dl(e){return rl[e]||e}function ul(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const Rt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function pl(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*n)/255>.5?"#000000":"#ffffff"}function Ms(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"pothydr":return i<80?"#E2EAC7":i<150?"#A6C157":"#7D9537";case"teneur":return i<15?"#F7D2A1":i<30?"#ED9A2C":"#BC7210";case"temp_sol":return i<8?"#D9C6BF":i<18?"#795548":"#484646";case"temp_sche":return i<0?"#9DECDF":i<10?"#23B19B":"#177365";case"temp_hum":return i<0?"#D2DEFA":i<10?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function ml(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function vl(e,i){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const n=i==="admin",a=we.filter($=>$.id!==xt),o=Object.fromEntries(re.map($=>[$.id,$])),s=Object.fromEntries(we.map($=>[$.id,$]));let l=null,m=null;const d={};let p="carte",v="pluie",u="7 derniers jours",c="all";function r($){const E=`${$}-${v}-${u}`;return E in d||(d[E]=ml(v)),d[E]}function g(){if(i==="new"||i==="new-adherent")return[];if(n){if(c==="anomalies")return ce.filter(C=>C.event&&(Array.isArray(C.event)?C.event.length>0:!0));if(c==="all")return ce;if(c===String(xt)){const C=new Set(re.filter(I=>I.orgId===xt).map(I=>I.id));return ce.filter(I=>I.parcelIds.some(P=>C.has(P)))}const D=new Set(re.filter(C=>String(C.orgId)===c).map(C=>C.id));return ce.filter(C=>C.parcelIds.some(I=>D.has(I)))}const $=new Set(re.filter(D=>D.orgId===mi).map(D=>D.id)),E=ce.filter(D=>D.parcelIds.some(C=>$.has(C))),F=ce.filter(D=>!D.parcelIds.some(C=>$.has(C))&&vi.includes(D.model));return c==="mine"?E:c==="network"?F:[...E,...F]}function f($){const E=$.parcelIds.length?o[$.parcelIds[0]]:null;if(!E)return null;const F=($.id*7919%1e3-500)/1e6,D=($.id*6271%1e3-500)/1e6;return{lat:E.lat+F,lng:E.lng+D,name:E.name}}function S($){var F,D;const E=$.parcelIds.length?o[$.parcelIds[0]]:null;return(E?(F=s[E.orgId])==null?void 0:F.ville:null)||((D=s[$.orgId])==null?void 0:D.ville)||null}function h(){if(l){try{l.remove()}catch{}l=null,m=null}}function k(){h();const $=Rt.find(P=>P.id===v)||Rt[0],E=g();let F;const D=ce.some(P=>P.event&&(Array.isArray(P.event)?P.event.length>0:!0));if(n)F=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${c==="all"?" selected":""}>Toutes les organisations</option>
            ${D?`<option value="anomalies"${c==="anomalies"?" selected":""}>⚠ Anomalies capteurs</option>`:""}
            <option value="${xt}"${c===String(xt)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
            ${a.map(P=>`<option value="${P.id}"${c===String(P.id)?" selected":""}>${P.name}</option>`).join("")}
          </select>
        </div>`;else{const P=we.find(w=>w.id===mi);F=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${c==="all"?" selected":""}>Tous les capteurs du réseau</option>
            <option value="mine"${c==="mine"?" selected":""}>${(P==null?void 0:P.name)||"Mon exploitation"} uniquement</option>
          </select>
        </div>`}const C=[...E].sort((P,w)=>{const x=Ht(P.model,v),b=Ht(w.model,v);return x&&!b?-1:!x&&b?1:x?r(w.id)-r(P.id):0}),I=C.length?`<div class="m-plain-list">${C.map(P=>{const w=vi.includes(P.model),x=Ht(P.model,v),b=x?r(P.id):null,y=x?`<span class="m-sensor-val" style="color:${Ms(v,b)}">${b} ${$.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>',T=P.event&&(Array.isArray(P.event)?P.event.length>0:!0);return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${P.id}">
              <div class="m-sensor-icon" style="position:relative;background:${w?"#0172A420":"#5b8dd920"};color:${w?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
                ${T?'<span style="position:absolute;top:-3px;right:-3px;width:9px;height:9px;border-radius:50%;background:#ff3b30;border:1.5px solid #fff"></span>':""}
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${dl(P.model)} - ${P.model}</span>
                <span class="m-sensor-sub">${[S(P),ul(P)].filter(Boolean).join(" - ")}</span>
                ${T?`<span style="font-size:11px;color:#ff3b30;font-weight:500"><i class="bi bi-exclamation-triangle-fill"></i> ${Array.isArray(P.event)?P.event[0]:P.event}</span>`:""}
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
            ${Rt.map(P=>`<option value="${P.id}"${P.id===v?" selected":""}>${P.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${$.aggs.map(P=>`<option${P===u?" selected":""}>${P}</option>`).join("")}
          </select>
        </div>
        ${F}
      </div>
      ${p==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${I}</div>`}`,q(),p==="carte"&&A(E,$)}function A($,E){const F=window.L;F&&setTimeout(()=>{const D=t.querySelector("#sensor-map");if(!D)return;if(l=F.map(D,{zoomControl:!1,attributionControl:!1}),F.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l),!$.length&&(i==="new"||i==="new-adherent")){const w=we.find(y=>y.id===mi);w&&l.setView([w.lat,w.lng],13),l.invalidateSize();const x=D.parentElement;x.style.position="relative";const b=document.createElement("div");b.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",b.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-broadcast" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de capteur</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Ajoutez votre premier capteur pour commencer à collecter des données.</p>
            <button id="empty-add-sensor-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Ajouter un capteur</button>
          </div>`,x.appendChild(b),x.querySelector("#empty-add-sensor-btn").addEventListener("click",()=>{var y;return(y=window.showMobileAddPage)==null?void 0:y.call(window)});return}const C=[],I=[];$.forEach(w=>{var z;const x=f(w);if(!x)return;const b=Ht(w.model,v),y=vi.includes(w.model),T=b?Ms(v,r(w.id)):y?"#0172A4":"#5b8dd9",j=F.circleMarker([x.lat,x.lng],{radius:b?10:7,color:"#fff",weight:2,fillColor:T,fillOpacity:b?.95:.45}).addTo(l);if(b){j.bindTooltip(`${r(w.id)} ${E.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const B=M=>{if(!M)return;const O=pl(T);M.style.setProperty("background",T,"important"),M.style.setProperty("color",O,"important"),M.style.setProperty("border-color",O,"important"),M.style.setProperty("box-shadow","none","important")},L=(z=j.getTooltip())==null?void 0:z.getElement();L&&B(L),j.on("tooltipopen",M=>B(M.tooltip.getElement()))}j.on("click",()=>ji(w,"donnees",i)),w.event&&(!Array.isArray(w.event)||w.event.length>0)&&F.marker([x.lat,x.lng],{icon:F.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(l),C.push([x.lat,x.lng]),b&&I.push([x.lat,x.lng])});const P=I.length?I:C;P.length&&(m=P,l.fitBounds(P,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",$=>{$.detail==="capteurs"&&(k(),p==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),m!=null&&m.length&&l.fitBounds(m,{padding:[32,32]})},50))});function q(){var $,E,F;t.querySelectorAll(".m-view-btn").forEach(D=>D.addEventListener("click",()=>{p=D.dataset.view,k()})),($=t.querySelector("#metric-sel"))==null||$.addEventListener("change",D=>{var C;v=D.target.value,u=((C=Rt.find(I=>I.id===v))==null?void 0:C.defaultAgg)||"",k()}),(E=t.querySelector("#agg-sel"))==null||E.addEventListener("change",D=>{u=D.target.value,k()}),(F=t.querySelector("#org-filter"))==null||F.addEventListener("change",D=>{c=D.target.value,k()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(D=>{D.addEventListener("click",()=>{const C=ce.find(I=>I.id===+D.dataset.sensorId);C&&ji(C,"donnees",i)})})}k(),window.addEventListener("weenat-sensor-renamed",()=>{p==="liste"&&k()})}const fl=["Essentiel","Plus","Expert"],bl=["Administrateur","Agent","Lecteur"],Ts=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function hl(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")}function gl(e){const i=(e||"").match(/(\d{5})/);if(i){const t=e.indexOf(i[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:i[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function Is({rue:e,cp:i,ville:t}){return[e,i&&t?`${i} ${t}`:i||t].filter(Boolean).join(", ")}function Ot(e){if(!e)return"—";const[i,t,n]=e.split("-");return`${n}/${t}/${i}`}function js(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let n=11;n>=0;n--){const a=new Date(i.getFullYear(),i.getMonth()-n,1),o=a.getFullYear(),s=String(a.getMonth()+1).padStart(2,"0"),l=n>0?n===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${o}-${s}`,dateEmission:`${o}-${s}-01`,montant:a.getMonth()===11?1980:t[n%t.length],statut:l})}return e.reverse()}function yl(e,i){var w;if(!e)return{};const t=i==="admin",n=i==="new-member-admin"||i==="new-member-agent"||i==="new-member-reader",a=i!=="new-member-reader",o=t?[{id:"100",name:"Breiz'Agri Conseil"},{id:"42",name:"Exploitation Dupont"}]:n?[]:[{id:"1",name:"Ferme du Bocage"},{id:"dutilleul",name:"Exploitation Dutilleul"}];let s=((w=o[0])==null?void 0:w.id)??null;const l=we.find(x=>x.id===(t?si:hi));if(!l)return{};const d=(t?ni.filter(x=>{var b;return!((b=x.orgIds)!=null&&b.length)||x.orgIds.includes(si)}):ni.filter(x=>{var b;return(b=x.orgIds)==null?void 0:b.includes(hi)})).filter(x=>x.statut!=="inactif").map(x=>({...x})),p=we.filter(x=>x.id!==si&&x.statut!=="inactif").length,v=gl(l.adresse||""),u={rue:"",cp:"",ville:""},c={name:l.name,siret:l.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:v,adresseLivrai:u,copieFactures:l.copieFactures||"",pays:"France",markerLat:l.lat||48.117,markerLng:l.lng||-1.678,plan:l.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":l.codeAdherent||"CTR-2022-00418",dateAdhesion:l.dateAdhesion||"2022-03-15",licencesMembres:t?ni.length:3,licencesAdherents:t?p:null,licencesIntegrations:t?27:2}};let r=null,g=null;function f(){if(!g)return;const x=e.querySelector(`#${g}`);if(!x)return;if(r){try{r.remove()}catch{}r=null}const b=window.L;b&&(r=b.map(x,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),b.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(r),r.setView([c.markerLat,c.markerLng],14),b.marker([c.markerLat,c.markerLng],{draggable:!1}).addTo(r),setTimeout(()=>r==null?void 0:r.invalidateSize(),50))}function S(){if(g=`expl-map-${Math.random().toString(36).slice(2,8)}`,r){try{r.remove()}catch{}r=null}const x=Is(c.adresseFactu)||"—",b=Is(c.adresseLivrai),y=t?js():[],T=y.slice(0,3),j=y.length>3,z=d.slice(0,3),B=d.length>3;function L(M,O){const N=M.statut==="payée"?"#30d158":"#ff9f0a",Q=M.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${O?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${M.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${M.numero}</span>
            <span class="m-list-row-sub">${Ot(M.dateEmission)} · ${M.montant.toLocaleString("fr-FR")} € HT</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:${N};flex-shrink:0;margin-right:4px">${Q}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}e.innerHTML=`
      ${o.length>1?`
      <div style="padding:12px 16px 4px">
        <select id="org-selector" style="width:100%;padding:10px 14px;border-radius:10px;border:1.5px solid #e5e5ea;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e;cursor:pointer">
          ${o.map(M=>`<option value="${M.id}"${M.id===s?" selected":""}>${M.name}</option>`).join("")}
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
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${x}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${b||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
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
      <div id="${g}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${c.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${Ot(c.contrat.dateAdhesion)}</span>
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
        ${T.map((M,O)=>L(M,!j&&O===T.length-1)).join("")}
        ${j?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${y.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${d.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${d.length?[...z.map((M,O)=>`
            <div class="m-list-row${!B&&O===z.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${O}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${M.prenom} ${M.nom}</span>
                <span class="m-list-row-sub">${M.role}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`),B?`
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
          ${Ts.slice(0,5).map((M,O)=>`
            <div class="m-list-row${O===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${hl(M.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${M.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${M.distance} km · ${M.capteurs} capteurs · ${M.parcelles} parcelles</div>
                <button class="m-join-net-btn" data-net-idx="${O}" style="margin-top:8px;padding:5px 14px;border:1.5px solid #0172A4;color:#0172A4;background:none;border-radius:8px;font-size:12px;font-weight:500;font-family:inherit;cursor:pointer">Demander à rejoindre</button>
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
            <span class="m-list-row-value">${Ot("2026-06-08")}</span>
          </div>
        </div>
        <div style="padding:8px 20px 0">
          <button id="btn-use-default-exploit" class="m-btn m-btn--outline" style="margin-bottom:20px">Utiliser cette exploitation</button>
        </div>
      </div>
      `:""}
      <div style="height:32px"></div>`,h()}function h(){var x,b,y,T;(x=e.querySelector("#org-selector"))==null||x.addEventListener("change",j=>{s=j.target.value;const z=o.find(B=>B.id===s);z&&(c.name=z.name,S())}),e.querySelectorAll(".m-list-row[data-action]").forEach(j=>{j.addEventListener("click",()=>{if(a)switch(j.dataset.action){case"name":k("Nom de l'exploitation",c.name,z=>{c.name=z,S()});break;case"siret":k("SIRET",c.siret,z=>{c.siret=z,S()});break;case"metier":$();break;case"adresse-factu":q("Adresse de facturation",c.adresseFactu,z=>{c.adresseFactu=z,S()});break;case"adresse-livrai":q("Adresse de livraison",c.adresseLivrai,z=>{c.adresseLivrai=z,S()});break;case"pays":k("Pays",c.pays,z=>{c.pays=z,S()});break;case"copie-factures":A(c.copieFactures,z=>{c.copieFactures=z,l.copieFactures=z,S()});break;case"plan":E("Abonnement",fl,c.plan,z=>{c.plan=z,S()});break;case"facture":X(`PDF ${j.dataset.factureId} téléchargé`);break;case"voir-factures":C();break;case"voir-membres":D();break}})}),e.querySelectorAll("[data-member-idx]").forEach(j=>{j.addEventListener("click",()=>F(+j.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(j=>{j.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach(B=>{const L=B===j;B.style.background=L?"#fff":"transparent",B.style.color=L?"#000":"#8e8e93"});const z=j.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=z==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=z==="independante"?"":"none"})}),(b=e.querySelector("#btn-ajouter-membre"))==null||b.addEventListener("click",I),(y=e.querySelector("#btn-quitter-reseau"))==null||y.addEventListener("click",()=>{const j=document.createElement("div");j.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,ue({title:"Quitter le réseau ?",body:j,doneLabel:"Confirmer",onDone:()=>X("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(j=>{j.addEventListener("click",()=>{const z=Ts[+j.dataset.netIdx];X(`Demande envoyée à ${z.name}`)})}),e.querySelectorAll(".m-exploit-tab").forEach(j=>{j.addEventListener("click",()=>{e.querySelectorAll(".m-exploit-tab").forEach(B=>{const L=B===j;B.style.background=L?"#fff":"transparent",B.style.color=L?"#000":"#8e8e93"});const z=e.querySelector("#default-exploit-panel");z&&(z.style.display=j.dataset.exploitTab==="membre"?"":"none")})}),(T=e.querySelector("#btn-use-default-exploit"))==null||T.addEventListener("click",()=>{X("Exploitation Jourdain sélectionnée")})}function k(x,b,y){const T=document.createElement("div");T.innerHTML=`<input class="m-sheet-input" type="text" value="${(b||"").replace(/"/g,"&quot;")}" placeholder="${x}">`;const j=T.querySelector("input");ue({title:x,body:T,doneLabel:"Enregistrer",onDone:()=>{const z=j.value.trim();z&&(y(z),X("Enregistré"))}}),setTimeout(()=>j.focus(),300)}function A(x,b){const y=document.createElement("div");y.innerHTML=`
      <div style="font-size:13px;color:#636366;line-height:1.4;margin-bottom:10px">Ajoutez une adresse email pour envoyer un reçu et des copies des factures à un tiers (comptable, achats, finances…)</div>
      <input class="m-sheet-input" type="email" placeholder="Adresse email du destinataire" value="${(x||"").replace(/"/g,"&quot;")}">`;const T=y.querySelector("input");ue({title:"Copie des factures",body:y,doneLabel:"Enregistrer",onDone:()=>{b(T.value.trim()),X("Enregistré")}}),setTimeout(()=>T.focus(),300)}function q(x,b,y){const T=document.createElement("div");T.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(b.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${b.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(b.ville||"").replace(/"/g,"&quot;")}">`,ue({title:x,body:T,doneLabel:"Enregistrer",onDone:()=>{y({rue:T.querySelector("#f-rue").value.trim(),cp:T.querySelector("#f-cp").value.trim(),ville:T.querySelector("#f-ville").value.trim()}),X("Enregistré")}}),setTimeout(()=>T.querySelector("#f-rue").focus(),300)}function $(){const x=new Set(c.metiers),b=document.createElement("div"),y=()=>{b.innerHTML=Ds.map(T=>`
        <div class="m-sheet-option${x.has(T)?" m-sheet-option--active":""}" data-m="${T}" style="justify-content:space-between">
          <span>${T}</span>
          ${x.has(T)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),b.querySelectorAll("[data-m]").forEach(T=>{T.addEventListener("click",()=>{const j=T.dataset.m;x.has(j)?x.delete(j):x.add(j),y()})})};y(),ue({title:"Métiers",body:b,doneLabel:"Valider",onDone:()=>{c.metiers=[...x],S()}})}function E(x,b,y,T){const j=document.createElement("div");j.innerHTML=b.map((B,L)=>`
      <div class="m-sheet-option${B===y?" m-sheet-option--active":""}" data-i="${L}">
        <span>${B}</span>${B===y?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const z=ue({title:x,body:j,doneLabel:"Fermer",onDone:()=>{}});j.querySelectorAll(".m-sheet-option").forEach(B=>{B.addEventListener("click",()=>{T(b[+B.dataset.i]),z.classList.remove("m-sheet-overlay--show"),setTimeout(()=>z.remove(),280),X("Enregistré")})})}function F(x,b){const y=d[x];if(!y)return;const T=document.createElement("div");T.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${y.role}</span></div>
        ${y.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${y.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${y.prenom} ${y.nom}</a>
      </div>`;const j=ue({title:`${y.prenom} ${y.nom}`,body:T,doneLabel:"Fermer",onDone:()=>{}});T.querySelector("#mem-delete").addEventListener("click",()=>{d.splice(x,1),j.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{j.remove(),S(),X("Membre retiré"),b==null||b()},280)})}function D(){let x="",y=20;function T(){if(!x)return d;const L=x.toLowerCase();return d.filter(M=>`${M.prenom} ${M.nom}`.toLowerCase().includes(L)||(M.email||"").toLowerCase().includes(L)||(M.role||"").toLowerCase().includes(L))}const j=$e(`
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
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),z=j.querySelector("#mbr-list-content");function B(){var N;const L=T(),M=L.slice(0,y),O=L.length-M.length;z.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${L.length} membre${L.length!==1?"s":""}${x?" trouvé"+(L.length!==1?"s":""):" actif"+(L.length!==1?"s":"")}</div>
        <div class="m-list">
          ${M.length?M.map((Q,W)=>`<div class="m-list-row${W===M.length-1&&O===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${d.indexOf(Q)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${Q.prenom} ${Q.nom}</span>
                <span class="m-list-row-sub">${Q.role}${Q.email?" · "+Q.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${O>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${O} de plus</span>
            </div>`:""}
          ${L.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,z.querySelectorAll("[data-mbr-idx]").forEach(Q=>{Q.addEventListener("click",()=>F(+Q.dataset.mbrIdx,B))}),(N=z.querySelector("#mbr-load-more"))==null||N.addEventListener("click",()=>{y+=20,B()})}j.querySelector(".m-detail-back").addEventListener("click",fe),j.querySelector("#mbr-invite-btn").addEventListener("click",I),j.querySelector("#mbr-search").addEventListener("input",L=>{x=L.target.value,y=20,B()}),B()}function C(){const x=js();let b="";function y(){if(!b)return x;const B=b.toLowerCase();return x.filter(L=>L.numero.toLowerCase().includes(B)||L.statut.toLowerCase().includes(B)||String(L.montant).includes(B))}const T=$e(`
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
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),j=T.querySelector("#fac-list-content");function z(){const B=y();j.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${B.length} facture${B.length!==1?"s":""}</div>
        <div class="m-list">
          ${B.length?B.map((L,M)=>{const O=L.statut==="payée"?"#30d158":"#ff9f0a",N=L.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${M===B.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${L.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${L.numero}</span>
                <span class="m-list-row-sub">${Ot(L.dateEmission)} · ${L.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${O};flex-shrink:0;margin-right:4px">${N}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,j.querySelectorAll("[data-fac-id]").forEach(L=>{L.addEventListener("click",()=>X(`PDF ${L.dataset.facId} téléchargé`))})}T.querySelector(".m-detail-back").addEventListener("click",fe),T.querySelector("#fac-search").addEventListener("input",B=>{b=B.target.value,z()}),z()}function I(){const x=document.createElement("div");x.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${bl.map(b=>`<option>${b}</option>`).join("")}
      </select>`,ue({title:"Ajouter un membre",body:x,doneLabel:"Inviter",onDone:()=>{x.querySelector("#inv-email").value.trim()&&X("Invitation envoyée")}}),setTimeout(()=>x.querySelector("#inv-email").focus(),300)}S();function P(){requestAnimationFrame(()=>setTimeout(f,100))}return{onAdd:null,refresh:P}}const xl=100,$l=["Essentiel","Plus","Expert"],wl={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function fi(e){return wl[e]||{label:e||"—",color:"#8e8e93"}}function Sl(e,i){if(!e)return{};if(i!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=we.filter(c=>c.id!==xl&&c.statut!=="inactif").map(c=>({...c})),n={...Ue,siege:{...Ue.siege},antennes:Ue.antennes.map(c=>({...c}))},a={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function o(c,r,g,f){return c.slice(r,g).map((S,h)=>{const k=r+h,A=fi(S.statut),q=S.statut==="demande en attente";return`
        <div class="m-list-row${k===f?" m-list-row--last":""} m-tappable" data-org-idx="${k}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${S.proprietaire||S.name}</span>
            <span class="m-list-row-sub">${S.name} · ${S.plan||"—"}</span>
          </div>
          ${q?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${k}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${k}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${A.color};flex-shrink:0;margin-right:4px">${A.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function s(){let c="",g=20;function f(){if(!c)return t;const A=c.toLowerCase();return t.filter(q=>(q.proprietaire||q.name||"").toLowerCase().includes(A)||(q.name||"").toLowerCase().includes(A)||(q.email||"").toLowerCase().includes(A)||(q.codeAdherent||"").toLowerCase().includes(A))}const S=$e(`
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
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),h=S.querySelector("#adh-list-content");function k(){var F;const A=f(),q=A.slice(0,g),$=A.length-q.length,E=A.filter(D=>D.statut==="actif"||D.statut==="actif en essai").length;h.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${c?A.length+" résultat"+(A.length!==1?"s":""):E+" actif"+(E!==1?"s":"")+" · "+A.length+" total"}</div>
        <div class="m-list">
          ${q.length?q.map((D,C)=>{const I=t.indexOf(D),P=fi(D.statut),w=D.statut==="demande en attente";return`
              <div class="m-list-row${C===q.length-1&&$===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${I}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${D.proprietaire||D.name}</span>
                  <span class="m-list-row-sub">${D.name} · ${D.plan||"—"}</span>
                </div>
                ${w?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${I}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${I}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${P.color};flex-shrink:0;margin-right:4px">${P.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${$>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${$} de plus</span>
            </div>`:""}
        </div>`,h.querySelectorAll("[data-lp-org-idx]").forEach(D=>{D.addEventListener("click",C=>{C.target.closest("[data-adh-action]")||v(t[+D.dataset.lpOrgIdx],+D.dataset.lpOrgIdx,k)})}),h.querySelectorAll("[data-adh-action]").forEach(D=>{D.addEventListener("click",C=>{C.stopPropagation();const I=+D.dataset.lpAdhIdx,P=D.dataset.adhAction,w=t[I];w&&(P==="valider"?(w.statut="actif",l(),k(),X(`${w.proprietaire||w.name} validé`)):(t.splice(I,1),l(),k(),X("Demande rejetée")))})}),(F=h.querySelector("#adh-load-more"))==null||F.addEventListener("click",()=>{g+=20,k()})}S.querySelector(".m-detail-back").addEventListener("click",fe),S.querySelector("#adh-invite-btn").addEventListener("click",u),S.querySelector("#adh-search").addEventListener("input",A=>{c=A.target.value,g=20,k()}),k()}function l(){var h;const c=t.filter(k=>k.statut!=="inactif"),r=`${n.siege.adresse}, ${n.siege.codePostal} ${n.siege.ville}`;e.innerHTML=`
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

      <div class="m-list-section-header">Adhérents — ${c.length} actifs</div>
      <div class="m-list">
        ${o(t,0,Math.min(5,t.length),t.length>5?-1:t.length-1)}
        ${t.length>5?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-adherents">
            <span class="m-list-row-label" style="color:#007aff">Voir tous les adhérents</span>
            <span class="m-list-row-value" style="color:#8e8e93">${t.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach(k=>{k.addEventListener("click",A=>{A.target.closest("[data-adh-action]")||v(t[+k.dataset.orgIdx],+k.dataset.orgIdx)})}),(h=e.querySelector('[data-action="voir-adherents"]'))==null||h.addEventListener("click",s),e.querySelectorAll("[data-adh-action]").forEach(k=>{k.addEventListener("click",A=>{A.stopPropagation();const q=+k.dataset.adhIdx,$=k.dataset.adhAction,E=t[q];E&&($==="valider"?(E.statut="actif",l(),X(`${E.proprietaire||E.name} validé`)):(t.splice(q,1),l(),X("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach(k=>{k.addEventListener("click",()=>{switch(k.dataset.action){case"net-nom":m("Nom du réseau",n.nom,A=>{n.nom=A,l()});break;case"net-siege":d();break;case"net-antennes":p();break}})});const g=e.querySelector("#tog-meteo"),f=e.querySelector("#tog-sol"),S=e.querySelector("#tog-irrigation");g==null||g.addEventListener("change",()=>{a.partageMeteo=g.checked,X("Préférence enregistrée")}),f==null||f.addEventListener("change",()=>{a.partageSol=f.checked,X("Préférence enregistrée")}),S==null||S.addEventListener("change",()=>{a.partageIrrigation=S.checked,X("Préférence enregistrée")})}function m(c,r,g){const f=document.createElement("div");f.innerHTML=`<input class="m-sheet-input" type="text" value="${(r||"").replace(/"/g,"&quot;")}" placeholder="${c}">`;const S=f.querySelector("input");ue({title:c,body:f,doneLabel:"Enregistrer",onDone:()=>{const h=S.value.trim();h&&(g(h),X("Enregistré"))}}),setTimeout(()=>S.focus(),300)}function d(){const c=document.createElement("div");c.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${n.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${n.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${n.siege.ville.replace(/"/g,"&quot;")}">`,ue({title:"Adresse du siège",body:c,doneLabel:"Enregistrer",onDone:()=>{n.siege.adresse=c.querySelector("#s-rue").value.trim(),n.siege.codePostal=c.querySelector("#s-cp").value.trim(),n.siege.ville=c.querySelector("#s-ville").value.trim(),l(),X("Enregistré")}}),setTimeout(()=>c.querySelector("#s-rue").focus(),300)}function p(){const c=document.createElement("div");(()=>{c.innerHTML=n.antennes.map((g,f)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${g.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${g.adresse}, ${g.codePostal} ${g.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${g.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),ue({title:"Antennes",body:c,doneLabel:"Fermer",onDone:()=>{}})}function v(c,r,g){var q,$;const f=fi(c.statut),S=c.statut==="invitation en attente",h=`https://app.weenat.com/invitation?code=${c.codeAdherent||"ADZ-XXX"}`,k=document.createElement("div");k.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${c.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${c.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${c.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${c.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${re.filter(E=>E.orgId===c.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const E=new Set(re.filter(F=>F.orgId===c.id).map(F=>F.id));return ce.filter(F=>E.has(F.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${f.color};font-weight:600">${f.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${c.dateAdhesion?c.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${S?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const A=ue({title:c.name,body:k,doneLabel:"Fermer",onDone:()=>{}});(q=k.querySelector("#lnk-copy"))==null||q.addEventListener("click",()=>{var E;(E=navigator.clipboard)==null||E.writeText(h).catch(()=>{}),X("Lien copié !")}),($=k.querySelector("#lnk-cancel"))==null||$.addEventListener("click",()=>{c.statut="inactif",A.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{A.remove(),l(),g==null||g(),X("Invitation annulée")},280)}),k.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(r,1),A.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{A.remove(),l(),g==null||g(),X("Adhérent supprimé")},280)})}function u(){const c=document.createElement("div");c.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${$l.map(r=>`<option>${r}</option>`).join("")}
      </select>`,ue({title:"Inviter un adhérent",body:c,doneLabel:"Envoyer",onDone:()=>{const r=c.querySelector("#adh-email").value.trim(),g=c.querySelector("#adh-code").value.trim();if(!r||!g){X("Email et code requis");return}t.push({id:Date.now(),name:r,proprietaire:r,email:r,codeAdherent:g,plan:c.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),l(),X("Invitation envoyée")}}),setTimeout(()=>c.querySelector("#adh-email").focus(),300)}return l(),{onAdd:u}}Ps(re);const En=new URLSearchParams(window.location.search),bi=En.get("role"),Ln=new Set(["new","new-adherent","new-member-admin","new-member-agent","new-member-reader"]),De=bi==="adherent"?"adherent":Ln.has(bi)?bi:"admin";function An(){const e=document.getElementById("status-time");if(!e)return;const i=new Date;e.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}An();setInterval(An,1e4);const Ze=["parcelles","capteurs","dashboard","alertes","parametres"];let Kt="parcelles";function Xe(e){var i,t;!Ze.includes(e)||e===Kt||(Kt=e,document.querySelectorAll(".m-screen").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),(i=document.getElementById(`screen-${e}`))==null||i.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function kl(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var i;e.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const i=e.target.closest(".nav-item");if(!i)return;const t=i.dataset.tab;Ni()>0&&Dn()?kl(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Xe(t)}):(Ni()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Xe(t))});let Je=null,Tt=null;const Cn=50,Dt=document.getElementById("screen-stack");Dt.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){Je=null;return}Je=e.clientX,Tt=e.clientY});Dt.addEventListener("mouseup",e=>{if(Je===null)return;const i=e.clientX-Je,t=e.clientY-Tt;if(Math.abs(i)>Cn&&Math.abs(i)>Math.abs(t)){const n=Ze.indexOf(Kt);i<0&&n<Ze.length-1&&Xe(Ze[n+1]),i>0&&n>0&&Xe(Ze[n-1])}Je=null,Tt=null});Dt.addEventListener("mouseleave",()=>{Je=null});Dt.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){Je=null;return}Je=e.touches[0].clientX,Tt=e.touches[0].clientY},{passive:!0});Dt.addEventListener("touchend",e=>{if(Je===null)return;const i=e.changedTouches[0].clientX-Je,t=e.changedTouches[0].clientY-Tt;if(Math.abs(i)>Cn&&Math.abs(i)>Math.abs(t)){const n=Ze.indexOf(Kt);i<0&&n<Ze.length-1&&Xe(Ze[n+1]),i>0&&n>0&&Xe(Ze[n-1])}Je=null},{passive:!0});const El=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...De==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],ii={};function Mn(e){const i=document.getElementById("param-plus-btn");if(!i)return;const t=ii[e];i.onclick=(t==null?void 0:t.onAdd)??(()=>{var n;return(n=window.showMobileAddPage)==null?void 0:n.call(window)})}function Ll(){var i;const e=document.getElementById("param-segment");e&&(De==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),El.forEach((t,n)=>{const a=document.createElement("button");a.className="m-segment-btn"+(n===0?" active":""),a.textContent=t.label,a.dataset.target=t.id,a.addEventListener("click",()=>{var o,s,l;e.querySelectorAll(".m-segment-btn").forEach(m=>m.classList.remove("active")),a.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(m=>m.classList.remove("active")),(o=document.getElementById(t.id))==null||o.classList.add("active"),Mn(t.id),(l=(s=ii[t.id])==null?void 0:s.refresh)==null||l.call(s)}),e.appendChild(a)}))}Ll();Ln.has(De)&&la(De,()=>{(De==="new"||De==="new-adherent")&&Xe("dashboard")});eo(document.getElementById("screen-dashboard"),De);No(document.getElementById("screen-parcelles"),De);vl(document.getElementById("screen-capteurs"),De);Yn(document.getElementById("screen-alertes"),De);Vn(document.getElementById("param-compte"),De);ii["param-exploitation"]=yl(document.getElementById("param-exploitation"),De);ii["param-reseau"]=Sl(document.getElementById("param-reseau"),De);const qs=En.get("parcel");if(qs){const e=re.find(i=>i.id===+qs);e&&(Xe("parcelles"),requestAnimationFrame(()=>{ye(()=>Promise.resolve().then(()=>lt),void 0).then(i=>i.initParcelDetail(e,[],"widgets","Parcelles"))}))}function Al(){var n;const e=De==="admin",i=document.getElementById("phone-screen");(n=document.getElementById("m-add-modal"))==null||n.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
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
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(a=>{a.addEventListener("click",()=>{var o;t.remove(),(a.dataset.action==="note"||a.dataset.action==="traitement")&&((o=window.openJournalModal)==null||o.call(window,a.dataset.action))})}),i.appendChild(t)}window.openMobileAddModal=Al;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var i;(i=document.querySelector(`#${e} .m-navbar-action`))==null||i.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});Mn("param-compte");export{fe as a,$e as p,ue as s};
