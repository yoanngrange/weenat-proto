const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chart-fullscreen-DEDxXQIB.js","assets/sensors-CRadjF8G.js","assets/irrigations-C22Dtsoo.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/plots-Bejh2i72.js","assets/store-Dh73ozZU.js","assets/orgs-DnFmvGlp.js","assets/network-YzWdS0n_.js","assets/constants-D_Yu58_o.js","assets/members-CuDabgg3.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as ce}from"./plots-Bejh2i72.js";import{d as Oe,c as $s,b as Xe,j as bn}from"./store-Dh73ozZU.js";import{s as re}from"./sensors-CRadjF8G.js";import{o as ye}from"./orgs-DnFmvGlp.js";import{n as Ne}from"./network-YzWdS0n_.js";import{I as pe,s as it,g as hn}from"./irrigations-C22Dtsoo.js";import{I as Ut,S as Mi,M as ws,a as gt,E as gn,A as ei,b as Di}from"./constants-D_Yu58_o.js";import{m as ti}from"./members-CuDabgg3.js";const yn="modulepreload",xn=function(e){return"/weenat-proto/"+e},Fi={},ge=function(i,t,o){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(t.map(p=>{if(p=xn(p),p in Fi)return;Fi[p]=!0;const c=p.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":yn,c||(m.as="script"),m.crossOrigin="",m.href=p,l&&m.setAttribute("nonce",l),document.head.appendChild(m),c)return new Promise((v,r)=>{m.addEventListener("load",v),m.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return n.then(s=>{for(const l of s||[])l.status==="rejected"&&a(l.reason);return i().catch(a)})},nt=[];function xe(e){const i=document.getElementById("phone-screen"),t=document.createElement("div");return t.className="m-detail-layer",t.innerHTML=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-detail-layer--in")),nt.push(t),t}function fe(){const e=nt.pop();e&&(e.classList.remove("m-detail-layer--in"),setTimeout(()=>e.remove(),300))}function _i(){return nt.length}function $n(){return nt.some(e=>e.dataset.dirty==="true")}function Ss(){nt.forEach(e=>delete e.dataset.dirty)}window.addEventListener("m-tab-change",()=>{nt.forEach(e=>e.remove()),nt.length=0});const wn=[{key:"orgs",label:"Organisations",icon:"bi-building",desc:"Ajouts de membres, changements d'organisation, nouvelles exploitations"},{key:"capteurs",label:"Capteurs",icon:"bi-broadcast",desc:"Anomalies, changements d'état, mise à jour firmware"},{key:"alertes",label:"Alertes",icon:"bi-bell",desc:"Déclenchements de seuils et alertes météo configurées"}],Hi=[{key:"email",label:"Email",icon:"bi-envelope"},{key:"sms",label:"SMS",icon:"bi-phone"},{key:"push",label:"Push",icon:"bi-bell"}],Sn=["Mon réseau","Mon organisation","Mon secteur"],ii={orgs:"Mon organisation",capteurs:"Mon réseau",alertes:"Mon secteur"},Bi={orgs:{email:!0,sms:!1,push:!0},capteurs:{email:!0,sms:!1,push:!0},alertes:{email:!0,sms:!0,push:!0}};function kn(e){let i=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif"))||JSON.parse(JSON.stringify(Bi))}catch{return JSON.parse(JSON.stringify(Bi))}})(),t=(()=>{try{return JSON.parse(localStorage.getItem("weenat-mobile-notif-peri"))||JSON.parse(JSON.stringify(ii))}catch{return JSON.parse(JSON.stringify(ii))}})();function o(){localStorage.setItem("weenat-mobile-notif",JSON.stringify(i)),localStorage.setItem("weenat-mobile-notif-peri",JSON.stringify(t)),e("Préférences enregistrées")}function n(s){const l=i[s.key]||{},p=t[s.key]||ii[s.key];return`
      <div class="m-list-section-header" style="display:flex;align-items:center;gap:6px">
        <i class="bi ${s.icon}" style="font-size:13px"></i> ${s.label}
      </div>
      <p style="font-size:12px;color:#8e8e93;margin:0 16px 8px;line-height:1.4">${s.desc}</p>
      <div class="m-list">
        ${Hi.map((c,d)=>{const m=d===Hi.length-1&&!0;return`<div class="m-list-row">
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
            ${Sn.map(c=>`<option value="${c}"${c===p?" selected":""}>${c}</option>`).join("")}
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
      ${wn.map(s=>n(s)).join("")}
      <div class="m-list-section-footer" style="margin-top:8px">
        Les alertes de seuil se configurent depuis la section <strong>Alertes</strong> de l'application.
      </div>
    </div>
  `);a.querySelector("#notif-back").addEventListener("click",fe),a.querySelectorAll(".notif-toggle").forEach(s=>{s.addEventListener("change",()=>{const l=s.dataset.cat,p=s.dataset.ch;i[l][p]=s.checked,o()})}),a.querySelectorAll(".notif-peri-sel").forEach(s=>{s.addEventListener("change",()=>{t[s.dataset.cat]=s.value,o()})})}const Ri={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},En=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],Oi=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let Ke={};function He(e){var o;const i=document.getElementById("phone-screen");(o=document.querySelector(".m-toast"))==null||o.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ot({title:e,body:i,onDone:t,doneLabel:o="OK"}){var l;const n=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${o}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{t==null||t(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}function Ni(e,i,t){const o=document.createElement("div");o.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${e}">`;const n=o.querySelector("input");ot({title:e,body:o,doneLabel:"Enregistrer",onDone:()=>{t(n.value.trim()),He("Enregistré")}}),setTimeout(()=>n.focus(),300)}function Vi(e,i,t,o){const n=document.createElement("div");n.innerHTML=i.map((s,l)=>`
    <div class="m-sheet-option${s===t?" m-sheet-option--active":""}" data-i="${l}">
      <span>${s}</span>
      ${s===t?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const a=ot({title:e,body:n,doneLabel:"Fermer",onDone:()=>{}});n.querySelectorAll(".m-sheet-option").forEach(s=>{s.addEventListener("click",()=>{o(i[+s.dataset.i]),a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280),He("Enregistré")})})}function Ln(e,i){const t=document.createElement("div"),o=()=>{var n;t.innerHTML=e.map((a,s)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="label" value="${a.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="numero" value="${a.numero}" placeholder="+33 6…">
        </div>
        ${s>0?`<button class="m-sheet-remove" data-i="${s}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',t.querySelectorAll("input").forEach(a=>{a.addEventListener("input",()=>{e[+a.dataset.i][a.dataset.f]=a.value})}),t.querySelectorAll(".m-sheet-remove").forEach(a=>{a.addEventListener("click",()=>{e.splice(+a.dataset.i,1),o()})}),(n=t.querySelector(".m-sheet-add-phone"))==null||n.addEventListener("click",()=>{e.push({label:"",numero:""}),o()})};o(),ot({title:"Téléphone(s)",body:t,doneLabel:"Enregistrer",onDone:()=>{i(e),He("Enregistré")}})}function Cn(e,i,t){const o=document.createElement("div");o.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${e.name}</div>
      <div class="m-sheet-key-date">créée le ${e.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${e.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,o.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var a;(a=navigator.clipboard)==null||a.writeText(e.value).catch(()=>{}),He("Clé copiée !")});const n=ot({title:"Clé API",body:o,doneLabel:"Fermer",onDone:()=>{}});o.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const a=i.findIndex(s=>s.id===e.id);a!==-1&&i.splice(a,1),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{n.remove(),t()},280),He("Clé supprimée")})}function An(){const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}function Mn(e){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const t=i.querySelector("input");ot({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const o=t.value.trim();if(!o){He("Entrez un nom");return}const n={id:Date.now(),name:o,created:new Date().toLocaleDateString("fr-FR"),value:An()};e(n),He("Clé générée")}}),setTimeout(()=>t.focus(),300)}function Tn(e,i){Ke={profile:JSON.parse(JSON.stringify(Ri[i]||Ri.admin)),langue:"Français",unites:Oi[0]};const o=localStorage.getItem("mobile_avatarUrl")||null;function n(){const s=Ke.profile,l=o?`<img src="${o}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${s.initials}</span>`,p=s.apiKeys.map(d=>`
      <div class="m-list-row" data-key-id="${d.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${d.name}</span>
          <span class="m-list-row-sub">créée le ${d.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),c=s.phones.map((d,m)=>`
      <div class="m-list-row${m===s.phones.length-1&&s.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${d.label||"Numéro "+(m+1)}</span>
        <span class="m-list-row-value">${d.numero}</span>
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
          <span class="m-list-row-value" id="val-langue">${Ke.langue}</span>
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
    `,a()}function a(){var l;const s=Ke.profile;(l=e.querySelector("#m-avatar-upload"))==null||l.addEventListener("change",p=>{const c=p.target.files[0];if(!c)return;const d=new FileReader;d.onload=m=>{localStorage.setItem("mobile_avatarUrl",m.target.result),e.querySelector("#m-avatar").innerHTML=`<img src="${m.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},d.readAsDataURL(c)}),e.querySelectorAll(".m-list-row[data-action]").forEach(p=>{p.addEventListener("click",()=>{switch(p.dataset.action){case"prenom":Ni("Prénom",s.prenom,c=>{s.prenom=c,n()});break;case"nom":Ni("Nom",s.nom,c=>{s.nom=c,n()});break;case"email":ot({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${s.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>He("Fonctionnalité à venir")});break;case"phones":Ln(s.phones,c=>{s.phones=c,n()});break;case"mdp":{const c=document.createElement("div");c.innerHTML=`
              <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
                <div style="width:56px;height:56px;border-radius:50%;background:rgba(0,122,255,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
                  <i class="bi bi-envelope-at" style="font-size:26px;color:#007aff"></i>
                </div>
                <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 20px">Un e-mail de réinitialisation sera envoyé à <strong>${s.email}</strong>. Vous pourrez ensuite définir un nouveau mot de passe.</p>
                <button id="send-reset-btn" style="background:#007aff;color:#fff;border:none;border-radius:12px;padding:14px 0;font-size:16px;font-weight:600;cursor:pointer;width:100%">Envoyer l'e-mail</button>
              </div>`;const d=ot({title:"Réinitialiser le mot de passe",body:c,doneLabel:"Annuler",onDone:()=>{}});c.querySelector("#send-reset-btn").addEventListener("click",()=>{d.classList.remove("m-sheet-overlay--show"),setTimeout(()=>d.remove(),280),He("E-mail de réinitialisation envoyé")});break}case"langue":Vi("Langue",En,Ke.langue,c=>{Ke.langue=c,e.querySelector("#val-langue").textContent=c});break;case"unites":Vi("Unités",Oi,Ke.unites,c=>{Ke.unites=c,e.querySelector("#val-unites").textContent=c.split(" ")[0]});break;case"gen-key":Mn(c=>{s.apiKeys.push(c),n()});break;case"notif-settings":kn(He);break;case"delete":He("Contactez le support pour supprimer votre compte");break}})}),e.querySelectorAll(".m-list-row[data-key-id]").forEach(p=>{p.addEventListener("click",()=>{const c=s.apiKeys.find(d=>d.id===+p.dataset.keyId);c&&Cn(c,s.apiKeys,n)})})}n()}function Y(e){var o;const i=document.getElementById("phone-screen");(o=document.querySelector(".m-toast"))==null||o.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function ue({title:e,body:i,doneLabel:t="Fermer",onDone:o}={}){var l;const n=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{o==null||o(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}function Nt({title:e,message:i="",confirmLabel:t="Confirmer",confirmColor:o="#ff3b30",onConfirm:n}){var p;const a=document.getElementById("phone-screen");(p=document.querySelector(".m-sheet-overlay"))==null||p.remove();const s=document.createElement("div");s.className="m-sheet-overlay",s.innerHTML=`
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
    </div>`,a.appendChild(s),requestAnimationFrame(()=>s.classList.add("m-sheet-overlay--show"));const l=()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>s.remove(),280)};s.querySelector("#sc-cancel").addEventListener("click",l),s.querySelector("#sc-confirm").addEventListener("click",()=>{l(),setTimeout(()=>n==null?void 0:n(),50)}),s.addEventListener("click",c=>{c.target===s&&l()})}function In(e){const i=3+e%5,t=Date.now();return Array.from({length:i},(o,n)=>{const a=e*17+n*7,s=1+n*(2+a%6),l=t-s*864e5-a%8*36e5,p=(1+a%5)*36e5+a%60*6e4,c=n===0&&a%7===0;return{start:new Date(l),end:c?null:new Date(l+p)}})}const qn=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Pn=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],Ji={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},jn={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function si(e){if(!e)return"—";const[i,t,o]=e.split("-");return`${o}/${t}/${i}`}function Wi(e){const i=e.sensorIds.map(o=>{const n=re.find(a=>a.id===o);return n?`${n.model} ${n.serial}`:null}).filter(Boolean),t=e.parcelIds.map(o=>{const n=ce.find(a=>a.id===o);return(n==null?void 0:n.name)||null}).filter(Boolean);return[...i,...t]}function zn(e,i){let t=e.querySelector("#alertes-content");t||(t=document.createElement("div"),t.id="alertes-content",e.appendChild(t));const o=i==="new"||i==="new-adherent"?[]:[...i==="adherent"?Pn:qn];function n(){if(!o.length){t.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}t.innerHTML=o.map(s=>{Wi(s);const l=jn[s.metric]||"bi-bell",p=s.statut==="actif";return`
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
        </div>`}).join(""),a()}function a(){t.querySelectorAll(".m-alert-toggle input").forEach(s=>{s.addEventListener("change",l=>{l.stopPropagation();const p=+s.dataset.id,c=o.find(d=>d.id===p);c&&(c.statut=s.checked?"actif":"inactif",n(),Y(`Alerte ${s.checked?"activée":"désactivée"}`))})}),t.querySelectorAll(".m-alert-more-btn").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const p=+s.dataset.id,c=o.find(b=>b.id===p);if(!c)return;Wi(c);const d=document.createElement("div"),m=In(p);function v(){const b=c.sensorIds.map((h,$)=>{const E=re.find(P=>P.id===h);return E?{label:`${E.model} ${E.serial}`,type:"sensor",idx:$}:null}).filter(Boolean),f=c.parcelIds.map((h,$)=>{const E=ce.find(P=>P.id===h);return E?{label:E.name,type:"parcel",idx:$}:null}).filter(Boolean),y=[...b,...f];return y.length?y.map(h=>`<div class="m-perimetre-item" data-type="${h.type}" data-idx="${h.idx}">
                <span>${h.label}</span>
                <button class="m-perimetre-del" data-type="${h.type}" data-idx="${h.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const r=document.createElement("div");r.className="m-sheet-info-rows";function u(){var $;d.innerHTML="";const b=document.createElement("div");b.className="m-sheet-info-rows",b.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${Ji[c.metric]||c.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${si(c.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${si(c.created)}</span></div>
            ${($=c.phones)!=null&&$.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${c.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${c.statut}</span></div>`;const f=document.createElement("div");f.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",f.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${v()}</div>`,b.appendChild(f),d.appendChild(b);const y=E=>E.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+E.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${m.map(E=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${E.end?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${y(E.start)} → <span style="color:${E.end?"inherit":"#ff9f0a"}">${E.end?y(E.end):"En cours"}</span></div>
              </div></div>`).join("")}`,d.appendChild(h),d.querySelectorAll(".m-perimetre-del").forEach(E=>{E.addEventListener("click",P=>{P.stopPropagation();const L=E.dataset.type,S=+E.dataset.idx;L==="sensor"?c.sensorIds.splice(S,1):c.parcelIds.splice(S,1),u(),n(),Y("Retiré du périmètre")})})}u(),ue({title:c.name,body:d,doneLabel:"Fermer",onDone:()=>{}})})}),t.querySelectorAll(".m-alert-card").forEach(s=>{s.addEventListener("click",l=>{if(l.target.closest(".m-alert-toggle")||l.target.closest(".m-alert-more-btn"))return;const p=+s.dataset.id,c=o.find(v=>v.id===p);if(!c)return;const d=document.createElement("div");d.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const m=ue({title:c.name,body:d,doneLabel:"Fermer",onDone:()=>{}});d.querySelector("#al-edit").addEventListener("click",()=>{m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),Y("Modification à venir")},280)}),d.querySelector("#al-delete").addEventListener("click",()=>{const v=o.findIndex(r=>r.id===p);v!==-1&&o.splice(v,1),m.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{m.remove(),n()},280),Y("Alerte supprimée")})})})}n()}const ks=e=>`parcel-journal-${e}`;function Vt(e){try{const i=localStorage.getItem(ks(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"note",category:"Observation générale",date:"2026-05-11",auteur:"Jean Dupont",role:"membre",texte:"Quelques pucerons sur feuilles basses. À surveiller."},{id:2,type:"traitement",date:"2026-05-16",auteur:"Sophie Martin",role:"conseiller",texte:"Vent < 2 m/s, conditions conformes.",produit:"Karate Zeon",dose:"0,1 L/ha",cible:"Pucerons"},{id:3,type:"integration",date:"2026-04-02",texte:"L'intégration « Rimpro » a expiré et n'est plus active.",_system:!0},{id:4,type:"integration",date:"2025-10-02",texte:"Intégration « Rimpro » activée.",_system:!0}]}function Ti(e,i){localStorage.setItem(ks(e),JSON.stringify(i))}function je(e,i){const t={id:`sys-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,_system:!0,...i};Ti(e,[t,...Vt(e)])}function Es(e,i,t="Irrigations",o=null){const n=i.find(s=>s.id===+e);if(!n)return;const a=re.filter(s=>s.parcelIds.includes(n.id)).map(s=>s.id);ge(()=>Promise.resolve().then(()=>dt),void 0).then(s=>{s.initParcelDetail(n,a,"widgets",t),o&&setTimeout(()=>{var l;(l=document.querySelector(`[data-widget-id="${o}"], #${o}`))==null||l.scrollIntoView({behavior:"smooth",block:"start"})},150)})}function at(e){return e.style.display="flex",e.style.flexDirection="column",e.style.overflowY="hidden",e}const Me=new Date().toISOString().split("T")[0];function yt(e){const i=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[t,o,n]=e.split("-");return`${parseInt(n)} ${i[parseInt(o)-1]} ${t}`}function jt(e){const i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,o]=e.split("-");return`${parseInt(o)} ${i[parseInt(t)-1]}`}function vi(e){return!e||e===Me?"":e<Me?'<span class="irr-pill irr-pill--past">Passée · Effectuée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function fi(e,i){return e?'<div class="irr-chk irr-chk--on"></div>':i?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function Yt(e,i,t){const o=i.length>0&&i.every(a=>t.has(a.id)),n=[...i].sort((a,s)=>a.name.localeCompare(s.name,"fr")).map(a=>{const s=t.has(a.id);return`<div class="irr-plot-row${s?" irr-plot-row--sel":""}" data-pid="${a.id}">
      <div><div class="irr-plot-name">${a.name}</div>${Dn(a)}</div>
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
    </div>`,s.querySelector(".irr-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),a.appendChild(s),requestAnimationFrame(()=>s.classList.add("irr-sheet-overlay--open"));const l=()=>{s.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>s.remove(),280)};return s.addEventListener("click",d=>{d.target===s&&l()}),(c=s.querySelector("#iss-del"))==null||c.addEventListener("click",()=>{o==null||o(),l()}),s.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),l()}),s}function Ls(e,i,t){const o=i.filter(l=>e.has(l.id)&&(!l.irrigation||l.irrigation==="Non irrigué"));if(!o.length){t();return}const n=document.createElement("div");n.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${o.length===1?`<strong>${o[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${o.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" class="m-prev-select" style="margin-bottom:0">
      <option value="">— Choisir un type —</option>
      ${Ut.map(l=>`<option value="${l}">${l}</option>`).join("")}
    </select>`;const s=bi({title:"Type d'irrigation",body:n,saveLabel:"Confirmer",onDelete:()=>t(),onSave:()=>{const l=n.querySelector("#irr-type-ask").value;l&&o.forEach(p=>{p.irrigation=l,Oe(p.id,{irrigation:l})}),t()}}).querySelector("#iss-del");s&&(s.textContent="Passer",s.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function Dn(e){const i=e.crop,t=e.irrigation||null,o=e.substrate?"Substrat : "+e.substrate:e.texture||null,n=[i,t||"<em>type irrigation non renseigné</em>",o].filter(Boolean);return!i&&!t?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${n.join(" · ")}</span>`}function Cs(e,i,t=null,o=!1,n=null){let a=new Set((t==null?void 0:t.ids)??[]),s=Me,l=10;function p(){return Yt([],e,a)}function c(u){u.querySelector("#irr-date-hint").innerHTML=vi(s)}function d(u){const b=a.size,f=u.querySelector(".irr-summary"),y=u.querySelector(".irr-save-btn");!f||!y||(t?(f.textContent="",y.disabled=!1,y.textContent="Enregistrer"):(f.textContent=b===0?"":`${b} parcelle${b>1?"s":""} · ${l} mm`,y.disabled=b===0,y.textContent="Enregistrer"))}function m(u){var b;u.querySelectorAll(".irr-plot-row").forEach(f=>{f.addEventListener("click",()=>{const y=+f.dataset.pid;a.has(y)?a.delete(y):a.add(y),u.querySelector("#irr-sel-list").innerHTML=p(),m(u),d(u)})}),(b=u.querySelector("#irr-sel-all"))==null||b.addEventListener("click",()=>{const f=e.some(y=>!a.has(y.id));e.forEach(y=>f?a.add(y.id):a.delete(y.id)),u.querySelector("#irr-sel-list").innerHTML=p(),m(u),d(u)})}const v=t?`<div class="irr-presel-banner">
         <i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
         <span>${t.ids.length>1?"Parcelles concernées":"Parcelle concernée"} : ${t.label}</span>
       </div>`:`<div id="irr-sel-list">${p()}</div>`,r=at(xe(`
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
      <button class="irr-save-btn" ${t?"":"disabled"}>Enregistrer</button>
    </div>
  `));r.dataset.dirty="true",t||m(r),d(r),r.querySelector("#irr-back").addEventListener("click",fe),r.querySelector("#irr-date").addEventListener("change",u=>{s=u.target.value,c(r),d(r)}),r.querySelector("#irr-qty").addEventListener("input",u=>{l=parseInt(u.target.value)||1,d(r)}),r.querySelector(".irr-save-btn").addEventListener("click",()=>{const u=t?new Set(t.ids):a;Ls(u,e,()=>{const b=s>Me;u.forEach($=>{pe.push({iso:s,mm:l,real:!b,plotId:$,fromStrategy:!1})}),it();const y=[{title:null,names:[...u].map($=>{var E;return(E=e.find(P=>P.id===$))==null?void 0:E.name}).filter(Boolean)}],h=u.size===1?String([...u][0]):"all";Ss(),As({title:u.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:yt(s)},{label:"Quantité",value:`${l} mm`}],parcelSections:y,isFut:b,plots:e,calFilter:h,addedCount:u.size,stackDepth:1,backToParcel:o,onBack:n})})})}function hi(e,i,t=null,o=null,n=!1,a=null){let s=new Set((t==null?void 0:t.ids)??[]),l=Me,p=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],c=10,d=7,m=null,v=null;if(o){const h=pe.filter($=>$.fromStrategy&&o.has($.seasonId));if(h.length){const $=h.map(P=>P.iso).sort();l=$[0],p=$[$.length-1],c=h[0].mm;const E=[...new Set($)];d=E.length>=2?Math.round((new Date(E[1])-new Date(E[0]))/864e5):7,m=l,v=p}}function r(){if(!l||!p||d<=0)return[];const h=[],$=new Date(p);let E=new Date(l);for(;E<=$&&h.length<100;)h.push(new Date(E)),E.setDate(E.getDate()+d);return h}function u(){const h=r();s.size;const $=h.length>0?`<span class="irr-preview-ok">↗ ${h.length} irrigations · ${h.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
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
          <input type="number" class="irr-qty-input" id="strat-qty" value="${c}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence <span class="irr-unit">(jours)</span></div>
          <input type="number" class="irr-qty-input" id="strat-freq" value="${d}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${$}</div>
      ${t?`<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${t.ids.length>1?"Parcelles concernées":"Parcelle concernée"} : ${t.label}</span>
           </div>`:Yt([],e,s)}
      <div class="irr-bottom-spacer"></div>
    `}function b(h){const $=s.size,E=r(),P=h.querySelector(".irr-save-btn"),L=h.querySelector(".irr-summary");!P||!L||(P.disabled=$===0||E.length===0,L.textContent=$===0?"":`${$} parcelle${$>1?"s":""} · ${E.length} occurrences`,P.textContent="Voir l'aperçu →")}function f(h){var P,L,S,H,z;const $=h.querySelector(".irr-scroll-body");$.querySelectorAll(".irr-plot-row").forEach(A=>{A.addEventListener("click",()=>{const I=+A.dataset.pid;s.has(I)?s.delete(I):s.add(I),$.innerHTML=u(),f(h),b(h)})}),(P=$.querySelector("#irr-sel-all"))==null||P.addEventListener("click",()=>{const A=e.some(I=>!s.has(I.id));e.forEach(I=>A?s.add(I.id):s.delete(I.id)),$.innerHTML=u(),f(h),b(h)});const E=()=>{const A=r(),I=$.querySelector("#strat-preview");I&&(I.innerHTML=A.length>0?`<span class="irr-preview-ok">↗ ${A.length} irrigations · ${A.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),b(h)};(L=$.querySelector("#strat-debut"))==null||L.addEventListener("change",A=>{l=A.target.value,E()}),(S=$.querySelector("#strat-fin"))==null||S.addEventListener("change",A=>{p=A.target.value,E()}),(H=$.querySelector("#strat-qty"))==null||H.addEventListener("input",A=>{c=parseInt(A.target.value)||1,E()}),(z=$.querySelector("#strat-freq"))==null||z.addEventListener("input",A=>{d=parseInt(A.target.value)||1,E()})}const y=at(xe(`
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
  `));y.dataset.dirty="true",f(y),b(y),y.querySelector("#strat-back").addEventListener("click",fe),y.querySelector(".irr-save-btn").addEventListener("click",()=>{const h=r();Fn(y,e,s,l,p,c,d,h,i,t,o,n,a,m,v)})}function Fn(e,i,t,o,n,a,s,l,p,c,d=null,m=!1,v=null,r=null,u=null){var T,k,w;const b=t.size,f=!!d&&(o!==r||n!==u),y=f?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées.",h=5;l.length-h;function $(x){const q=x.toISOString().slice(0,10)>=Me?"#FFB705":"#FF8500",j=x.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${yt(j)}</span>
      <span style="font-size:13px;font-weight:700;color:${q}">${a} mm</span>
    </div>`}const E=l.filter(x=>x.toISOString().slice(0,10)<Me),P=l.filter(x=>x.toISOString().slice(0,10)>=Me),L=P.slice(0,h),S=P.slice(h),H=`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${E.length?E.map($).join(""):'<div style="font-size:13px;color:#9E9D98;padding:8px 0">Aucune irrigation effectuée</div>'}`,z=P.length?`
    <div class="irr-section-lbl" style="margin-top:${E.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${L.map($).join("")}
    ${S.length?`
      <div id="apercu-rest" style="display:none">${S.map($).join("")}</div>
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
          <div class="irr-apercu-big">${l.length} irrigations</div>
          <div class="irr-apercu-sub">${jt(o)} → ${jt(n)} · tous les ${s}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${l.length*a} mm</div>
          <div class="irr-apercu-sub">${b} parcelle${b>1?"s":""} · ${a} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${H}
        ${z}
        ${!E.length&&!P.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      ${d?`
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
  `));A.dataset.dirty="true",A.querySelector("#apercu-back").addEventListener("click",fe),(T=A.querySelector("#apercu-show-more"))==null||T.addEventListener("click",x=>{A.querySelector("#apercu-rest").style.display="",x.target.remove()});function I(){const x=c?new Set(c.ids):t;Ls(x,i,()=>{d&&(f?pe.splice(0,pe.length,...pe.filter(D=>!(d.has(D.seasonId)&&D.fromStrategy))):pe.splice(0,pe.length,...pe.filter(D=>!(d.has(D.seasonId)&&D.fromStrategy&&D.iso>Me))));const g=d&&!f?l.filter(D=>D.toISOString().slice(0,10)>Me):l,q=hn();if(g.forEach(D=>{const M=D.toISOString().slice(0,10);x.forEach(R=>{pe.push({iso:M,mm:a,real:M<=Me,plotId:R,fromStrategy:!0,seasonId:q})})}),it(),d){const D=f?"sur toute la saison":"à partir de demain";x.forEach(M=>{je(M,{type:"modification",date:Me,texte:`Saison d'irrigation modifiée (${D}) : ${a} mm tous les ${s} jours, du ${jt(o)} au ${jt(n)} (${l.length} irrigations).`})})}const C=[{title:null,names:[...x].map(D=>{var M;return(M=i.find(R=>R.id===D))==null?void 0:M.name}).filter(Boolean)}],F=x.size===1?String([...x][0]):"all";Ss(),As({title:"Saison enregistrée",params:[{label:"Début",value:yt(o)},{label:"Fin",value:yt(n)},{label:"Quantité",value:`${a} mm/irrig.`},{label:"Fréquence",value:`tous les ${s} jours`},{label:"Irrigations générées",value:`${l.length*x.size}`}],parcelSections:C,isFut:!0,plots:i,calFilter:F,addedCount:l.length*x.size,stackDepth:2,backToParcel:m,onBack:v})})}A.querySelector("#apercu-confirm").addEventListener("click",()=>{if(d){A.querySelector("#apercu-edit-confirm").style.display="flex",A.querySelector("#apercu-edit-confirm").scrollIntoView({behavior:"smooth",block:"center"});return}I()}),(k=A.querySelector("#apercu-edit-cancel"))==null||k.addEventListener("click",()=>{A.querySelector("#apercu-edit-confirm").style.display="none"}),(w=A.querySelector("#apercu-edit-confirm-btn"))==null||w.addEventListener("click",I)}function As({title:e,params:i,parcelSections:t=[],isFut:o,plots:n,calFilter:a,addedCount:s=0,stackDepth:l=3,backToParcel:p=!1,onBack:c=null}){const d=(i||[]).map(h=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${h.label}</span>
      <span class="irr-confirm-param-val">${h.value}</span>
    </div>`).join(""),m=3,v=t.flatMap(h=>h.names.map($=>({title:h.title,name:$}))),r=v.slice(0,m),u=v.slice(m);function b(h){const $=[];let E=null;for(const P of h)(!E||E.title!==P.title)&&(E={title:P.title,names:[]},$.push(E)),E.names.push(P.name);return $.map(P=>`
      ${P.title?`<div class="irr-confirm-sec-hd">${P.title}</div>`:""}
      ${P.names.map(L=>`<div class="irr-confirm-parcel">· ${L}</div>`).join("")}
    `).join("")}const f=v.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${b(r)}
      ${u.length?`
        <details class="irr-confirm-more">
          <summary>${u.length} parcelle${u.length>1?"s":""} de plus</summary>
          ${b(u)}
        </details>`:""}
    </div>`,y=at(xe(`
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
      <div class="irr-confirm-params">${d}</div>
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
  `));y.querySelector("#conf-edit").addEventListener("click",()=>{s>0&&pe.splice(pe.length-s,s),fe()}),y.querySelector("#conf-back").addEventListener("click",()=>{for(let h=0;h<=l;h++)fe();c==null||c()}),y.querySelector("#conf-calendar").addEventListener("click",()=>{Ms(n,a)})}const _n=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function Ms(e,i){let t=i||"";function o(r){if(!r||r==="all")return null;const u=e.find(b=>String(b.id)===String(r));return u?{ids:[u.id],label:u.name}:null}function n(){return!t||t==="all"?pe:pe.filter(r=>r.plotId===+t)}function a(r){const u=r.filter(h=>h.real),b=r.filter(h=>!h.real),f=u.reduce((h,$)=>h+$.mm,0),y=b.reduce((h,$)=>h+$.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${f} mm</div>
        <div class="irr-cumul-count">${u.length} irrigation${u.length!==1?"s":""}</div>
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
        <div class="irr-cumul-count">${u.length+b.length} irrigations</div>
      </div>
    </div>`}function s(r){if(r.length<2)return"";const u=[...r].sort((C,F)=>C.iso<F.iso?-1:1),b=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],f=new Date(u[0].iso),y=new Date(u[u.length-1].iso),h=Math.max(y-f,1),$=300,E=26,P=5,L=5,S=E-L-4,H=S-L-3,z=E+P+13,A=z+2,I=C=>Math.round((C-f)/h*$),T=C=>{const[,F,D]=C.split("-");return`${parseInt(D)}/${parseInt(F)}`},k=[],w=new Date(f.getFullYear(),f.getMonth()+1,1);for(;w<=y;)k.push(new Date(w)),w.setMonth(w.getMonth()+1);const x=k.map(C=>`<line x1="${I(C)}" y1="${E-6}" x2="${I(C)}" y2="${E+P+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),g=[f,...k,y],q=g.slice(0,-1).map((C,F)=>{const D=I(C),M=I(g[F+1]);return M-D<16?"":`<text x="${Math.round((D+M)/2)}" y="${H}" font-size="8" fill="#B0AEA8" text-anchor="middle">${b[C.getMonth()]}</text>`}).join(""),j=u.map(C=>{const F=C.real?"#FF8500":"#FFB705",D=I(new Date(C.iso)),[,M,R]=C.iso.split("-"),G=`${parseInt(R)} ${_n[parseInt(M)-1]} · ${C.mm} mm`;return`<circle cx="${D}" cy="${S}" r="${L}" fill="${F}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${D}" cy="${S}" r="${L+6}" fill="transparent" pointer-events="all"><title>${G}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${$}" height="${A}" viewBox="0 0 ${$} ${A}" style="width:100%;display:block">
        ${q}
        <rect x="0" y="${E}" width="${$}" height="${P}" rx="${P/2}" fill="#E0DED8"/>
        ${x}
        ${j}
        <text x="1" y="${z}" font-size="9" fill="#B0AEA8">${T(u[0].iso)}</text>
        <text x="${$-1}" y="${z}" font-size="9" fill="#B0AEA8" text-anchor="end">${T(u[u.length-1].iso)}</text>
      </svg>
    </div>`}function l(r,u,b){const f=document.createElement("div");let y=r.iso,h=r.mm;f.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${r.iso}" />
          <div id="edit-date-hint">${vi(r.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${r.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>`,f.querySelector("#edit-date").addEventListener("change",$=>{y=$.target.value,f.querySelector("#edit-date-hint").innerHTML=vi(y)}),f.querySelector("#edit-qty").addEventListener("input",$=>{const E=parseInt($.target.value);E>0&&(h=E)}),bi({title:r.real?"Modifier l'irrigation effectuée":"Modifier l'irrigation planifiée",body:f,saveLabel:"Enregistrer",onSave:()=>{r.iso=y,r.mm=h,r.real=y<=Me,it(),d(b)},onDelete:()=>{const $=pe.indexOf(r);$>-1&&pe.splice($,1),it(),d(b)}})}function p(r,u){const b=+r,f=document.createElement("div");let y=!1,h=!1;function $(){return new Set(pe.filter(L=>L.plotId===b&&L.fromStrategy&&L.seasonId).map(L=>L.seasonId))}function E(){return pe.some(L=>L.plotId===b&&!L.fromStrategy)}function P(){var L,S,H,z,A,I,T;f.innerHTML=`
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
          ${E()?'<div style="font-size:12px;color:#7A3A00;margin-bottom:8px">Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.</div>':""}
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(L=f.querySelector("#strat-modify"))==null||L.addEventListener("click",()=>{var g;(g=document.querySelector(".irr-sheet-overlay"))==null||g.remove();const k=$(),w=e.find(q=>q.id===b),x=w?{ids:[w.id],label:w.name}:null;hi(e,()=>d(u),x,k)}),(S=f.querySelector("#strat-stop"))==null||S.addEventListener("click",()=>{y=!0,h=!1,P()}),(H=f.querySelector("#strat-delete"))==null||H.addEventListener("click",()=>{h=!0,y=!1,P()}),(z=f.querySelector("#stop-cancel"))==null||z.addEventListener("click",()=>{y=!1,P()}),(A=f.querySelector("#stop-confirm"))==null||A.addEventListener("click",()=>{var x;const k=$(),w=pe.filter(g=>g.plotId===b&&k.has(g.seasonId)&&!g.real).length;pe.splice(0,pe.length,...pe.filter(g=>!(g.plotId===b&&k.has(g.seasonId)&&!g.real))),it(),je(b,{type:"modification",date:Me,texte:`Saison d'irrigation arrêtée (${w} irrigation(s) planifiée(s) annulée(s)).`}),(x=document.querySelector(".irr-sheet-overlay"))==null||x.remove(),d(u)}),(I=f.querySelector("#delete-cancel"))==null||I.addEventListener("click",()=>{h=!1,P()}),(T=f.querySelector("#delete-confirm"))==null||T.addEventListener("click",()=>{var w;const k=pe.filter(x=>x.plotId===b).length;pe.splice(0,pe.length,...pe.filter(x=>x.plotId!==b)),it(),je(b,{type:"modification",date:Me,texte:`Saison d'irrigation supprimée (${k} irrigation(s) retirée(s) du calendrier).`}),(w=document.querySelector(".irr-sheet-overlay"))==null||w.remove(),d(u)})}P(),bi({title:"Gérer la saison",body:f,saveLabel:"Fermer",onSave:()=>{}})}function c(r){if(!r.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const u=[...r].filter(y=>!y.real).sort((y,h)=>y.iso<h.iso?-1:1),b=[...r].filter(y=>y.real).sort((y,h)=>y.iso>h.iso?-1:1);function f(y){const h=y.real?"#FF8500":"#FFB705",$=pe.indexOf(y);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${yt(y.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${h};white-space:nowrap;margin-right:4px">${y.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${$}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${$}" title="Supprimer">🗑</button>
      </div>`}return`
      ${b.length?`
        <details class="irr-section-details" data-section="effectuees"${u.length?"":" open"}>
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${b.length}</span></summary>
          ${b.map(f).join("")}
        </details>`:""}
      ${u.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${u.length}</span></summary>
          ${u.map(f).join("")}
        </details>`:""}
    `}function d(r){var P,L,S,H;const u=r.querySelector(".irr-cal-body");if(!t){u.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const b={};if(u.querySelectorAll("details[data-section]").forEach(z=>{b[z.dataset.section]=z.open}),t==="all"){const z={};for(const T of pe){const k=T.plotId??"unknown";z[k]||(z[k]=[]),z[k].push(T)}const A=Object.keys(z).filter(T=>e.some(k=>String(k.id)===T));if(!A.length){u.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}const I=A.sort((T,k)=>{var g,q;const w=((g=e.find(j=>String(j.id)===T))==null?void 0:g.name)??T,x=((q=e.find(j=>String(j.id)===k))==null?void 0:q.name)??k;return w.localeCompare(x,"fr")});u.innerHTML=I.map(T=>{const k=z[T],w=k.some(j=>j.fromStrategy),x=e.find(j=>String(j.id)===T),g=(x==null?void 0:x.name)??T,q=[x==null?void 0:x.crop,x==null?void 0:x.irrigation].filter(Boolean);return`<div style="margin-bottom:20px">
          <button class="irr-cal-plot-link" data-goto-pid="${T}" style="display:flex;align-items:baseline;gap:6px;background:none;border:none;padding:0;margin-bottom:6px;text-align:left;cursor:pointer">
            <span style="font-size:13px;font-weight:700;color:#185FA5;text-decoration:underline">${g}</span>
            ${q.length?`<span style="font-size:11px;color:#8e8e93">${q.join(" · ")}</span>`:""}
          </button>
          ${a(k)}
          ${s(k)}
          ${w?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-pid="${T}">Modifier la saison <i class="bi bi-chevron-down"></i></button>
          </div>`:""}
        </div>`}).join(""),u.querySelectorAll("[data-strat-pid]").forEach(T=>{T.addEventListener("click",()=>p(T.dataset.stratPid,r))}),u.querySelectorAll("[data-goto-pid]").forEach(T=>{T.addEventListener("click",()=>{t=T.dataset.gotoPid;const k=r.querySelector("#cal-filter-sel");k&&(k.value=t),d(r)})});return}const f=n(),y=f.some(z=>z.fromStrategy),h=t!=="all"?e.find(z=>String(z.id)===String(t)):null,$=h?`<button class="irr-cal-plot-link" id="cal-goto-plot" style="display:inline-flex;align-items:center;gap:5px;background:none;border:none;padding:0;text-align:left;cursor:pointer;font-size:13px;font-weight:700;color:#185FA5;text-decoration:underline">
          <svg width="13" height="13" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.23205 12.5C5.56103 11.809 4.98368 11.1423 4.5 10.5H3.49984C3.12107 10.5 2.77481 10.714 2.60542 11.0528L0.105694 16.0522C-0.0492999 16.3622 -0.0330139 16.7309 0.149193 17.0257C0.331399 17.3205 0.653266 17.5 0.999844 17.5H17.9998C18.3464 17.5 18.6683 17.3205 18.8505 17.0257C19.0327 16.7309 19.0493 16.3628 18.8943 16.0528L16.3943 11.0528C16.2249 10.714 15.8786 10.5 15.4998 10.5H14.5C14.0163 11.1423 13.439 11.809 12.768 12.5H14.8818L16.3818 15.5H2.61788L4.11788 12.5H6.23205Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.49984 14C9.40818 14 9.31651 13.9822 9.22484 13.9465C9.13318 13.9108 9.05297 13.8633 8.98422 13.8038C7.3113 12.2701 6.06234 10.8464 5.23734 9.53284C4.41234 8.2188 3.99984 6.99108 3.99984 5.84968C3.99984 4.06624 4.55282 2.64544 5.65878 1.58726C6.76428 0.529087 8.04464 0 9.49984 0C10.9551 0 12.2354 0.529087 13.3409 1.58726C14.4469 2.64544 14.9998 4.06624 14.9998 5.84968C14.9998 6.99108 14.5873 8.2188 13.7623 9.53284C12.9373 10.8464 11.6884 12.2701 10.0155 13.8038C9.94672 13.8633 9.86651 13.9108 9.77484 13.9465C9.68318 13.9822 9.59151 14 9.49984 14ZM9.49984 7C10.6044 7 11.4998 6.10457 11.4998 5C11.4998 3.89543 10.6044 3 9.49984 3C8.39527 3 7.49984 3.89543 7.49984 5C7.49984 6.10457 8.39527 7 9.49984 7Z" fill="currentColor"/></svg>
          Voir la parcelle
        </button>`:"",E=y?`<div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison <i class="bi bi-chevron-down"></i></button>
           ${$}
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
           ${$}
         </div>`;u.innerHTML=`
      ${a(f)}
      ${s(f)}
      ${E}
      ${c(f)}
    `,(P=u.querySelector("#cal-goto-plot"))==null||P.addEventListener("click",()=>{h&&Es(h.id,e)}),u.querySelectorAll("details[data-section]").forEach(z=>{const A=z.dataset.section;A in b&&(z.open=b[A])}),u.querySelectorAll(".irr-edit-btn").forEach(z=>{z.addEventListener("click",A=>{A.stopPropagation();const I=pe[+z.dataset.iidx];I&&l(I,f,r)})}),u.querySelectorAll(".irr-del-btn").forEach(z=>{z.addEventListener("click",A=>{A.stopPropagation();const I=+z.dataset.iidx;I>=0&&(pe.splice(I,1),it(),d(r))})}),(L=u.querySelector("#open-strat-edit"))==null||L.addEventListener("click",()=>{p(t,r)}),(S=u.querySelector("#cal-add-irrig"))==null||S.addEventListener("click",()=>{Cs(e,()=>d(r),o(t))}),(H=u.querySelector("#cal-add-strat"))==null||H.addEventListener("click",()=>{hi(e,()=>d(r),o(t))})}const m=[...e].sort((r,u)=>r.name.localeCompare(u.name,"fr")).map(r=>`<option value="${r.id}"${String(r.id)===String(t)?" selected":""}>${r.name}</option>`).join(""),v=at(xe(`
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
  `));v.querySelector("#cal-back").addEventListener("click",fe),v.querySelector("#cal-filter-sel").addEventListener("change",r=>{t=r.target.value,d(v)}),d(v)}const st=Object.freeze(Object.defineProperty({__proto__:null,buildSelectionHTML:Yt,checkIcon:fi,flexLayer:at,goToPlot:Es,openCalendar:Ms,openIrrigationSaisie:Cs,openIrrigationStrategie:hi},Symbol.toStringTag,{value:"Module"})),Hn=[{name:"Allier AgriTech",distance:8,adherents:31,capteurs:198,parcelles:1140,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Auvergne Agri Conseil",distance:15,adherents:54,capteurs:361,parcelles:2080,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]},{name:"Réseau Bourbonnais",distance:22,adherents:18,capteurs:112,parcelles:630,sharedSensorTypes:["Capteurs météo","Capteurs d'irrigation"]},{name:"Creuse Agri Net",distance:38,adherents:12,capteurs:74,parcelles:410,sharedSensorTypes:["Capteurs d'irrigation"]},{name:"Puy-de-Dôme Connect",distance:45,adherents:39,capteurs:255,parcelles:1490,sharedSensorTypes:["Capteurs météo","Stations météo virtuelles"]}],Gi={name:"Breiz'Agri Conseil",city:"Rennes (35)",phone:"02 99 XX XX XX",email:"contact@breizagri.fr",capteurs:312,parcelles:1830,sharedSensorTypes:["Capteurs météo"]},Bn=["Capteurs météo","Capteurs d'irrigation","Stations météo virtuelles"];function Ui(e){return e.split(" ").filter(i=>i.length>2).slice(0,2).map(i=>i[0].toUpperCase()).join("")}const Fe={prenom:"Pierre",nom:"Jourdain",email:"pierre@gaec-jourdain.fr",phone:"06 71 23 45 67",orgName:"GAEC Jourdain",adresse:"Lieu-dit La Croix Blanche, 03500 Saint-Pourçain-sur-Sioule",selectedPlan:"expert",joinNetwork:!0},Ts={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre 15/30 cm","CHP-30/60":"Tensiomètre 30/60 cm","CHP-60/90":"Tensiomètre 60/90 cm","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"},Rn={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]},On=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),Nn={"CHP-15/30":[15,30],"CHP-30/60":[30,60],"CHP-60/90":[45,90]},ni=[{id:"essential",name:"Weenat Essential",priceNum:0,price:"Gratuit",color:"#636366",features:["Aucun capteur physique","Historique illimité","Alertes","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"plus",name:"Weenat Plus",priceNum:16.5,price:"16,5 €/mois",color:"#00B093",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées"]},{id:"expert",name:"Weenat Expert",priceNum:30,price:"30 €/mois",color:"#006798",features:["Historique illimité","Alertes","Intégrations","Exports","Accès API","2 stations météo virtuelles","Parcelles illimitées","Capteurs irrigation","Fonctionnalités irrigation"]}],oi={Administrateur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!0}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!0}]}],Agent:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!0}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!0}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}],Lecteur:[{section:"Parcelles",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Créer, modifier, archiver et supprimer",ok:!1}]},{section:"Capteurs",items:[{label:"Consulter et exporter les données",ok:!0},{label:"Ajouter, retirer et lier à une parcelle",ok:!1}]},{section:"Membres",items:[{label:"Consulter les informations",ok:!0},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Exploitations adhérentes",items:[{label:"Consulter les informations",ok:!1},{label:"Inviter, modifier et retirer",ok:!1}]},{section:"Facturation",items:[{label:"Consulter et modifier les informations",ok:!1}]}]};function Vn(e,i,t,o){const n=i==="essential",a=i==="expert";return e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?["signup","verify","emailVerified","creating","done"]:e==="new-adherent"?["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkInfo","invite","plan",...a?["volumeChoice"]:[],"creating","done"]:["signup","verify","emailVerified","orgName","geoloc","orgInfo","networkChoice",...t?["networkPick"]:[],"invite","plan",...n?[]:["payment","paymentConfirmed"],...a?["volumeChoice"]:[],"creating","done"]}function Jn(e,i,t,o){return Vn(e,i,t)}const Wn={signup:"Inscription",verify:"Vérification",orgName:"Exploitation",geoloc:"Localisation",orgInfo:"Informations",networkChoice:"Réseau",networkPick:"Choisir un réseau",networkInfo:"Mon réseau",invite:"Invitations",plan:"Abonnement",payment:"Paiement",paymentConfirmed:"Paiement",volumeChoice:"Volume autorisé",parcelMap:"Parcelle",parcelSource:"Source de données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"};function Gn(e,i){const t=document.getElementById("phone-screen");let o=0,n=e==="new-adherent"?"expert":Fe.selectedPlan,a=Fe.joinNetwork,s=!1,l=0,p=!0,c=46.3021,d=3.2938,m=null,v=null,r="smv",u=[],b="Parcelle 1";const f=document.createElement("div");f.id="onboarding-overlay",f.className="m-ob-overlay",t.appendChild(f);function y(){return Jn(e,n,a)}function h(){return y()[o]}function $(){return y().filter(N=>!["creating","done","parcelDone","emailVerified","paymentConfirmed"].includes(N)).length}function E(){return ni.find(N=>N.id===n)}function P(){const N=y().slice(0,o).filter(W=>W!=="creating"&&W!=="done"&&W!=="parcelDone").length;return`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${Math.round(N/$()*100)}%"></div></div>`}function L(N,J=!0){const W=h(),O=new Set(["creating","done","parcelDone","emailVerified","paymentConfirmed"]),_=J&&o>0&&!O.has(W),B=Wn[W]||"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${_?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${B}</span>
          <div style="width:32px"></div>
        </div>
        ${O.has(W)?"":P()}
        <div class="m-ob-body">${N}</div>
      </div>`}function S(){o++,Je()}function H(){o--,Je()}function z(){return L(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-person"></i></div>
        <h2 class="m-ob-h2">Créer mon compte</h2>
      </div>
      <div class="m-ob-form" style="margin-top:20px">
        <div class="m-ob-row2">
          <div class="m-ob-field">
            <label class="m-ob-label">Prénom</label>
            <input class="m-ob-input" type="text" placeholder="Prénom" value="${Fe.prenom}">
          </div>
          <div class="m-ob-field">
            <label class="m-ob-label">Nom</label>
            <input class="m-ob-input" type="text" placeholder="Nom" value="${Fe.nom}">
          </div>
        </div>
        <div class="m-ob-field">
          <label class="m-ob-label">Adresse email professionnelle</label>
          <input class="m-ob-input" type="email" placeholder="Adresse email professionnelle" value="${Fe.email}">
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
            <input class="m-ob-input m-ob-input--phone" type="tel" placeholder="06 12 12 12 12" value="${Fe.phone}">
          </div>
        </div>
        <label class="m-ob-cgu-row">
          <input type="checkbox" checked>
          <span>J'ai lu et j'accepte les <a href="#">conditions d'utilisations</a> et la <a href="#">politique de confidentialité</a></span>
        </label>
      </div>
      <button class="m-ob-cta" id="ob-next">Créer mon compte</button>
    `,!1)}function A(){return L(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-envelope-check"></i></div>
        <h2 class="m-ob-h2">Vérifiez votre adresse email</h2>
        <p class="m-ob-sub">Un e-mail a été envoyé à<br><strong>${Fe.email}</strong></p>
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
          <p class="m-ob-sub" style="text-align:center"><strong>${Fe.email}</strong><br>a bien été confirmée.</p>
          <button class="m-ob-cta" id="ob-next" style="margin-top:12px">Continuer</button>
        </div>
      </div>`}function T(){return L(`
      <div class="m-ob-hero">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-building"></i></div>
        <h2 class="m-ob-h2">Votre exploitation</h2>
        <p class="m-ob-sub">Comment s'appelle votre exploitation ?</p>
      </div>
      <div class="m-ob-form">
        <div class="m-ob-field">
          <label class="m-ob-label">Nom de l'exploitation</label>
          <input class="m-ob-input" type="text" value="${Fe.orgName}">
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function k(){return L(`
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
            <input class="m-ob-input" type="text" value="${Fe.adresse}">
          </div>
          <div id="ob-addr-map" class="m-ob-addr-map"></div>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      </div>
    `)}function w(){const N=ws.map(J=>`<button type="button" class="m-ob-pill" data-metier="${J}">${J}</button>`).join("");return L(`
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
    `)}function x(){return L(`
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
    `)}function g(){const N=Hn.map(J=>{var W;return`
      <div class="m-ob-net-row" data-net="${J.name}">
        <div class="m-ob-net-avatar">${Ui(J.name)}</div>
        <div class="m-ob-net-info">
          <div class="m-ob-net-name">${J.name}</div>
          <div class="m-ob-net-meta">${J.distance} km · ${J.capteurs} capteurs · ${J.parcelles} parcelles</div>
          ${(W=J.sharedSensorTypes)!=null&&W.length?`<div class="m-ob-net-tags">${J.sharedSensorTypes.map(O=>`<span class="m-ob-net-tag">${O}</span>`).join("")}</div>`:""}
        </div>
        <div class="m-ob-net-check"><i class="bi bi-circle"></i></div>
      </div>`}).join("");return L(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#5b8dd9"><i class="bi bi-building-check"></i></div>
        <h2 class="m-ob-h2">Choisir un réseau</h2>
        <p class="m-ob-sub">Les 5 réseaux les plus proches de votre exploitation.</p>
      </div>
      <div class="m-ob-net-list">${N}</div>
      <button class="m-ob-cta" id="ob-next">Rejoindre</button>
    `)}function q(){var J;const N=Gi;return L(`
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
          ${(J=N.sharedSensorTypes)!=null&&J.length?`
          <div style="font-size:13px;color:#3a3a3c;margin-bottom:8px">Capteurs partagés entre les adhérents :</div>
          <div class="m-ob-pills">${Bn.map(W=>`<span class="m-ob-pill${N.sharedSensorTypes.includes(W)?" m-ob-pill--on":" m-ob-pill--off"}" style="cursor:default">${W}</span>`).join("")}</div>
          `:`<div style="font-size:13px;color:#3a3a3c">Aucun capteur n'est partagé entre les adhérents de ce réseau</div>`}
        </div>
      </div>
      <button class="m-ob-cta" id="ob-next">Continuer</button>
    `)}function j(N){const J=oi[N];return J?`<div class="m-ob-role-perms">${J.map(W=>`
      <div class="m-rp-section">
        <div class="m-rp-section-title">${W.section}</div>
        ${W.items.map(O=>`
          <div class="m-rp-item">
            <i class="bi bi-${O.ok?"check-circle-fill":"x-circle-fill"}" style="color:${O.ok?"#30d158":"#ff3b30"}"></i>
            <span>${O.label}</span>
          </div>`).join("")}
      </div>`).join("")}</div>`:""}function C(N){const J=oi[N];return J?`<div class="m-rp-summary">${J.map(O=>{const _=O.items.filter(te=>te.ok).length,B=_===0?"none":_===O.items.length?"full":"partial",K={full:"check-circle-fill",partial:"dash-circle-fill",none:"x-circle"}[B],U={full:"#30d158",partial:"#ff9500",none:"#c7c7cc"}[B],ne=O.section.replace("Exploitations adhérentes","Adhérents");return`<div class="m-rp-badge"><i class="bi bi-${K}" style="color:${U}"></i><span>${ne}</span></div>`}).join("")}</div>`:""}function F(){const N=Object.keys(oi);return`
      <button type="button" class="m-rp-toggle" id="ob-roles-info-toggle"><span>Comparer les droits par rôle</span><i class="bi bi-chevron-down"></i></button>
      <div class="m-ob-roles-info" id="ob-roles-info" hidden>
        <div class="m-ob-roles-tabs">${N.map((J,W)=>`<button type="button" class="m-ob-roles-tab${W===0?" m-ob-roles-tab--on":""}" data-role="${J}">${J}</button>`).join("")}</div>
        <div id="ob-roles-info-detail">${j(N[0])}</div>
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
      </div>`}function M(){return L(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8fff0;color:#30d158"><i class="bi bi-people"></i></div>
        <h2 class="m-ob-h2">Inviter des membres</h2>
        <p class="m-ob-sub">Ajoutez des collègues de votre exploitation. Salariés, chefs de culture, conseillers externes...</p>
        <p class="m-ob-sub" style="margin-top:6px">Chaque membre implique une licence payante additionnelle.</p>
      </div>
      ${F()}
      <div id="ob-invite-list">${D()}</div>
      <button class="m-ob-add-member" id="ob-add-member" type="button"><i class="bi bi-plus-circle"></i> Ajouter un membre</button>
      <button class="m-ob-cta" id="ob-send-invites">Continuer</button>
      <button class="m-ob-link" id="ob-skip-invite" type="button">Passer cette étape</button>
    `)}function R(){const N=e==="new-adherent",J=Gi;if(N){const O=ni.find(B=>B.id==="expert"),_=O.features.map(B=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${O.color}"></i> ${B}</li>`).join("");return L(`
        <div class="m-ob-hero m-ob-hero--compact">
          <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-gift"></i></div>
          <h2 class="m-ob-h2">Votre abonnement</h2>
          <p class="m-ob-sub">Le réseau <strong>${J.name}</strong> vous a invité à profiter de l'abonnement <strong style="color:${O.color}">Weenat Expert</strong>. Découvrez ce qu'il comprend.</p>
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
          <ul class="m-ob-feat-list" style="display:block;margin-top:10px">${_}</ul>
        </div>
        <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
      `)}const W=ni.map(O=>{const _=O.id===n,B=O.features.map(K=>`<li class="m-ob-feat-item"><i class="bi bi-check-circle-fill" style="color:${O.color}"></i> ${K}</li>`).join("");return`
        <div class="m-ob-sub-card${_?" m-ob-sub-card--on":""}" data-plan="${O.id}" style="${_?`--plan-color:${O.color}`:""}">
          <div class="m-ob-sub-hd">
            <div>
              <div class="m-ob-sub-name" style="color:${O.color}">${O.name}${O.id==="expert"?' <span style="font-size:11px;font-weight:400;opacity:.8">(irrigation)</span>':""}</div>
              <div class="m-ob-sub-price">${O.price}</div>
            </div>
            <div class="m-ob-sub-radio" style="border-color:${_?O.color:"#c7c7cc"};background:${_?O.color:"transparent"}">
              ${_?'<i class="bi bi-check" style="color:#fff;font-size:13px"></i>':""}
            </div>
          </div>
          <button class="m-ob-feat-toggle" data-plan="${O.id}" type="button">
            Ce qui est inclus <i class="bi bi-chevron-down"></i>
          </button>
          <ul class="m-ob-feat-list" id="feat-${O.id}" style="display:none">${B}</ul>
        </div>`}).join("");return L(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#f0e8ff;color:#bf5af2"><i class="bi bi-grid-1x2"></i></div>
        <h2 class="m-ob-h2">Votre abonnement</h2>
        <p class="m-ob-sub">Choisissez le plan qui correspond à vos besoins.</p>
      </div>
      <div class="m-ob-sub-cards">${W}</div>
      <button class="m-ob-cta" id="ob-next" style="margin-top:20px">Continuer</button>
    `)}function G(){const N=E(),J=l+1,W=J*N.priceNum,O=W*12,_=B=>B%1===0?`${B}`:B.toFixed(1).replace(".",",");return L(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-credit-card"></i></div>
        <h2 class="m-ob-h2">Paiement</h2>
      </div>
      <div class="m-ob-pay-summary">
        <div class="m-ob-pay-line">
          <span style="color:${N.color};font-weight:700">${N.name}</span>
          <span class="m-ob-pay-price" style="color:${N.color}">${_(N.priceNum)} €<span class="m-ob-pay-period">/licence/mois</span></span>
        </div>
        ${J>1?`
        <div class="m-ob-pay-line" style="margin-top:6px">
          <span style="font-size:13px;color:#636366">${J} licences (${l} invité${l>1?"s":""} + vous)</span>
          <span style="font-size:15px;font-weight:700;color:${N.color}">${_(W)} €/mois</span>
        </div>
        <button class="m-ob-link" id="ob-remove-invites" type="button" style="font-size:12px;color:#636366;padding:2px 0;text-align:left">Retirer les invités et ne prendre qu'une licence</button>`:""}
        <div class="m-ob-pay-divider"></div>
        <div class="m-ob-pay-line">
          <span style="font-weight:600">Total annuel</span>
          <span style="font-size:17px;font-weight:700;color:${N.color}">${_(O)} €/an</span>
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
      <button class="m-ob-cta" id="ob-next" style="background:${N.color}"><i class="bi bi-lock-fill" style="font-size:13px"></i> Payer ${_(O)} €</button>
      <p class="m-ob-legal" style="margin-top:10px"><i class="bi bi-shield-check"></i> Paiement sécurisé SSL · Données chiffrées</p>
    `)}function oe(){return L(`
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
    `)}function Z(){return E(),`
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
            <p class="m-ob-sub" style="text-align:center">Un reçu de votre paiement vous a été envoyé par email à <strong>${Fe.email}</strong>.</p>
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
      </div>`}function ae(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-spinner"><div class="m-ob-spinner-ring"></div></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Création de votre espace…</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?"Nous configurons votre accès et créons votre exploitation par défaut.":"Nous configurons votre exploitation."}</p>
      </div>`}function me(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Votre espace est prêt !</h2>
        <p class="m-ob-sub">${e==="new-member-admin"||e==="new-member-agent"||e==="new-member-reader"?`Votre compte a été créé. Votre exploitation par défaut <strong>Exploitation ${Fe.nom}</strong> est prête.`:"Une parcelle et une station météo virtuelle ont été créées à l'adresse de votre exploitation. Vous pouvez les modifier ou les supprimer."}</p>
        <button class="m-ob-cta" id="ob-finish" style="margin-top:32px">Accéder à mon exploitation</button>
      </div>`}function Ee(){return L(`
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
    `)}function ze(){if(n==="essential")return S(),"";const W=["P+","CHP-15/30","CAPA-30-3","EC"].map(_=>re.find(B=>B.orgId===1&&B.model===_)).filter(Boolean);return L(`
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
              <div style="font-size:14px;font-weight:600;color:#1c1c1e">${Ts[_.model]||_.model}</div>
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
    `)}function Ve(){const N=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),J=new Set(["EC"]),W=re.filter(B=>u.includes(B.id)),O=W.some(B=>N.has(B.model)),_=W.some(B=>J.has(B.model));return L(`
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
            ${Mi.map(B=>`<option>${B}</option>`).join("")}
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
            ${Ut.map(B=>`<option${B==="Non irrigué"?" selected":""}>${B}</option>`).join("")}
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
          ${n==="essential"?"<br>Une station météo virtuelle a été ajoutée au centre de la parcelle.":""}
        </p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Accéder au tableau de bord</button>
      </div>`}const qt={signup:z,verify:A,emailVerified:I,orgName:T,geoloc:k,orgInfo:w,networkChoice:x,networkPick:g,networkInfo:q,invite:M,plan:R,payment:G,paymentConfirmed:Z,volumeChoice:oe,creating:ae,done:me,parcelMap:Ee,parcelSource:ze,parcelConfig:Ve,parcelDone:Qe};function Je(){const N=qt[h()];if(!N)return;const J=N();J&&(f.innerHTML=J),Le()}function V(){l=[...f.querySelectorAll("#ob-invite-list .m-ob-input--email")].filter(J=>J.value.trim()).length}function se(){const N=window.L;N&&setTimeout(()=>{const J=f.querySelector("#ob-parcel-map");if(!J||J._leaflet_id)return;v=N.map(J,{zoomControl:!0,attributionControl:!1}).setView([c,d],15),N.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(v),N.circleMarker([c,d],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(v);const W=c+45e-5;m=N.marker([W,d],{icon:N.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),draggable:!0}).addTo(v),m.on("dragend",()=>{const O=m.getLatLng();c=O.lat,d=O.lng}),v.invalidateSize()},50)}const X=new Set(["orgInfo","networkChoice","networkPick","plan","payment","volumeChoice"]);function ie(){const N=h();if(!X.has(N))return;const J=f.querySelector("#ob-next");if(!J)return;let W=!0;N==="orgInfo"?W=f.querySelectorAll(".m-ob-pill--on").length>0:N==="networkChoice"?W=f.querySelectorAll("[data-join].m-ob-plan-card--on").length>0:N==="networkPick"?W=f.querySelectorAll("[data-net].m-ob-net-row--on").length>0:N==="plan"?W=f.querySelectorAll(".m-ob-sub-card--on").length>0:N==="payment"?W=[...f.querySelectorAll(".m-ob-form .m-ob-input")].every(_=>_.value.trim().length>0):N==="volumeChoice"&&(W=f.querySelectorAll("[data-volume].m-ob-plan-card--on").length>0),J.disabled=!W,J.style.opacity=W?"":"0.4"}function Le(){var J,W,O,_,B,K,U,ne,te,be,le,de,he,we,ke,$e;(J=f.querySelector("#ob-back"))==null||J.addEventListener("click",H),f.querySelectorAll("#ob-next").forEach(Q=>Q.addEventListener("click",S)),(W=f.querySelector("#ob-pw-eye"))==null||W.addEventListener("click",()=>{s=!s;const Q=f.querySelector("#ob-pw");Q&&(Q.type=s?"text":"password");const ee=f.querySelector("#ob-pw-eye i");ee&&(ee.className=s?"bi bi-eye":"bi bi-eye-slash")}),f.querySelectorAll(".m-ob-sub-card").forEach(Q=>{Q.addEventListener("click",ee=>{ee.target.closest(".m-ob-feat-toggle")||(n=Q.dataset.plan,Je())})}),f.querySelectorAll(".m-ob-feat-toggle").forEach(Q=>{Q.addEventListener("click",ee=>{ee.stopPropagation();const ve=f.querySelector(`#feat-${Q.dataset.plan}`),Pe=Q.querySelector(".bi");if(!ve)return;const De=ve.style.display!=="none";ve.style.display=De?"none":"block",Pe.className=`bi bi-chevron-${De?"down":"up"}`})}),f.querySelectorAll("[data-join]").forEach(Q=>{Q.addEventListener("click",()=>{a=Q.dataset.join==="oui",f.querySelectorAll("[data-join]").forEach(ee=>ee.classList.toggle("m-ob-plan-card--on",ee===Q)),ie()})}),f.querySelectorAll("[data-net]").forEach(Q=>{Q.addEventListener("click",()=>{f.querySelectorAll("[data-net]").forEach(ee=>{const ve=ee===Q;ee.classList.toggle("m-ob-net-row--on",ve),ee.querySelector(".bi").className=`bi bi-${ve?"check-circle-fill":"circle"}`}),ie()})});const N=()=>{var ve;(ve=f.querySelector("#ob-geoloc-btns"))==null||ve.remove();const Q=f.querySelector("#ob-geoloc-addr");Q&&(Q.style.display="");const ee=window.L;ee&&setTimeout(()=>{const Pe=f.querySelector("#ob-addr-map");if(!Pe||Pe._leaflet_id)return;const De=ee.map(Pe,{zoomControl:!0,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}).setView([46.3021,3.2938],13);ee.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:18}).addTo(De),ee.marker([46.3021,3.2938]).addTo(De)},50)};(O=f.querySelector("#ob-geoloc-allow"))==null||O.addEventListener("click",N),(_=f.querySelector("#ob-geoloc-manual"))==null||_.addEventListener("click",N),f.querySelectorAll(".m-ob-pill").forEach(Q=>{Q.addEventListener("click",()=>{Q.classList.toggle("m-ob-pill--on"),ie()})}),(B=f.querySelector("#ob-add-member"))==null||B.addEventListener("click",()=>{const Q=f.querySelector("#ob-invite-list"),ee=document.createElement("div");ee.innerHTML=D(),Q.appendChild(ee.firstElementChild)}),(K=f.querySelector("#ob-invite-list"))==null||K.addEventListener("click",Q=>{const ee=Q.target.closest(".m-ob-invite-remove");if(!ee)return;const ve=ee.closest(".m-ob-invite-item");ve&&ve.remove()}),(U=f.querySelector("#ob-roles-info-toggle"))==null||U.addEventListener("click",()=>{const Q=f.querySelector("#ob-roles-info-toggle"),ee=f.querySelector("#ob-roles-info"),ve=!ee.hidden;ee.hidden=ve,Q.classList.toggle("m-rp-toggle--open",!ve),Q.querySelector("span").textContent=ve?"Comparer les droits par rôle":"Masquer la comparaison des rôles"}),(ne=f.querySelector("#ob-roles-info"))==null||ne.addEventListener("click",Q=>{const ee=Q.target.closest(".m-ob-roles-tab");ee&&(f.querySelectorAll(".m-ob-roles-tab").forEach(ve=>ve.classList.toggle("m-ob-roles-tab--on",ve===ee)),f.querySelector("#ob-roles-info-detail").innerHTML=j(ee.dataset.role))}),(te=f.querySelector("#ob-invite-list"))==null||te.addEventListener("change",Q=>{var Pe;const ee=Q.target.closest(".m-ob-invite-role-sel");if(!ee)return;const ve=(Pe=ee.closest(".m-ob-invite-item"))==null?void 0:Pe.querySelector(".m-ob-role-summary-wrap");ve&&(ve.innerHTML=C(ee.value))}),(be=f.querySelector("#ob-remove-invites"))==null||be.addEventListener("click",()=>{l=0,Je()}),(le=f.querySelector("#ob-send-invites"))==null||le.addEventListener("click",()=>{V(),S()}),(de=f.querySelector("#ob-skip-invite"))==null||de.addEventListener("click",()=>{l=0,S()}),f.querySelectorAll("[data-psource]").forEach(Q=>{Q.addEventListener("click",()=>{r=Q.dataset.psource,f.querySelectorAll("[data-psource]").forEach(ee=>ee.classList.toggle("m-ob-plan-card--on",ee===Q)),f.querySelector("#ob-link-sensors").style.display=r==="link"?"block":"none",f.querySelector("#ob-add-sensor-form").style.display=r==="add"?"block":"none"})}),f.querySelectorAll("[data-sensor-id]").forEach(Q=>{Q.addEventListener("change",()=>{const ee=parseInt(Q.dataset.sensorId);Q.checked?u.includes(ee)||u.push(ee):u=u.filter(_e=>_e!==ee);const Pe=re.filter(_e=>u.includes(_e.id)).filter(_e=>!On.has(_e.model)),De={};Pe.forEach(_e=>(Rn[_e.model]||[]).forEach(zi=>{De[zi]=(De[zi]||0)+1}));const mt=Object.entries(De).filter(([,_e])=>_e>1).map(([_e])=>_e),lt=f.querySelector("#ob-sensor-conflict"),Pt=f.querySelector("#ob-sensor-conflict-msg");lt&&Pt&&(mt.length>0?(Pt.textContent=`Plusieurs capteurs mesurent la même métrique (${mt.join(", ")}). Décochez l'un des capteurs redondants.`,lt.style.display="flex"):lt.style.display="none")})}),f.querySelectorAll("[data-volume]").forEach(Q=>{Q.addEventListener("click",()=>{p=Q.dataset.volume==="oui",f.querySelectorAll("[data-volume]").forEach(ve=>ve.classList.toggle("m-ob-plan-card--on",ve===Q));const ee=f.querySelector("#ob-volume-field");ee&&(ee.style.display=p?"block":"none"),ie()})}),(he=f.querySelector("#ob-skip-source"))==null||he.addEventListener("click",()=>{r="smv",S()}),(we=f.querySelector("#ob-parcel-name"))==null||we.addEventListener("input",Q=>{b=Q.target.value}),h()==="parcelMap"&&se(),h()==="creating"&&setTimeout(()=>{o++,Je()},2200),(ke=f.querySelector("#ob-finish"))==null||ke.addEventListener("click",()=>{f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),i()},400)}),($e=f.querySelector("#ob-see-parcel"))==null||$e.addEventListener("click",()=>{f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),i()},400)}),f.querySelectorAll(".m-ob-form .m-ob-input").forEach(Q=>{Q.addEventListener("input",ie)}),ie()}Je()}const Un=["Ail","Betterave sucrière","Blé dur","Blé tendre","Brocoli","Carotte","Cerisier","Chou-fleur","Colza","Courgette","Féverole","Haricot vert","Laitue","Lin oléagineux","Luzerne","Maïs fourrage","Maïs grain","Orge d'hiver","Orge de printemps","Oignon","Pêcher","Pois protéagineux","Poireau","Poirier","Pomme de terre","Pommier","Prairie","Prunier","Ray-grass","Soja","Tomate","Tournesol","Trèfle","Vigne"];function Is({showBack:e=!0,btnLabel:i="Ajouter",showSkip:t=!1}={}){return`
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
            ${Object.entries(Ts).map(([o,n])=>`<option value="${o}">${n} (${o})</option>`).join("")}
          </select>
          <div class="m-ob-field" id="ob-sensor-depth-field" style="display:none;margin-bottom:12px">
            <label class="m-ob-label">Profondeur d'installation</label>
            <select class="m-ob-input m-ob-input--select" id="ob-sensor-depth"></select>
          </div>
          <button class="m-ob-cta" id="ob-next" style="margin:0 0 12px"><i class="bi bi-plus-lg"></i> ${i}</button>
          ${t?'<button class="m-ob-link" id="ob-skip-source" type="button" style="margin-bottom:8px">Passer cette étape</button>':""}
        </div>
      </div>
    </div>`}function qs(e){const i=e.querySelector("#ob-sensor-model"),t=e.querySelector("#ob-sensor-depth-field"),o=e.querySelector("#ob-sensor-depth");if(!i||!t||!o)return;const n=()=>{const a=Nn[i.value];if(!a){t.style.display="none";return}const s=[];for(let l=a[0];l<=a[1];l+=5)s.push(l);o.innerHTML=s.map(l=>`<option value="${l}">${l} cm</option>`).join(""),t.style.display=""};i.addEventListener("change",n),n()}async function Yn(e,i){var t,o,n,a;try{const l=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${i}`)).json();return((t=l.address)==null?void 0:t.village)||((o=l.address)==null?void 0:o.town)||((n=l.address)==null?void 0:n.city)||((a=l.address)==null?void 0:a.municipality)||""}catch{return""}}function Zn(e){const i=document.getElementById("phone-screen");let t=46.3021,o=3.2938,n=null,a=null,s=46.3021+45e-5,l=3.2938,p=null,c=null,d="smv",m=[],v="",r=0;const u=["parcelMap","parcelSource","parcelData","parcelConfig","parcelDone"],b={parcelMap:"Parcelle",parcelSource:"Source de données",parcelData:"Données",parcelConfig:"Paramétrage",parcelDone:"Confirmation"},f=document.createElement("div");f.id="parcel-creation-overlay",f.className="m-ob-overlay",i.appendChild(f);function y(){return u[r]}function h(){r++,k()}function $(){r--,k()}function E(g,q=!0){const j=y(),C=q&&r>0&&j!=="parcelDone",F=b[j]||"",D=u.filter(oe=>oe!=="parcelDone"),M=D.indexOf(j),R=M>=0?Math.round(M/D.length*100):100,G=j!=="parcelDone"?`<div class="m-ob-progress-bar"><div class="m-ob-progress-fill" style="width:${R}%"></div></div>`:"";return`
      <div class="m-ob-screen">
        <div class="m-ob-topbar">
          ${C?'<button class="m-ob-back" id="ob-back"><i class="bi bi-chevron-left"></i></button>':'<div style="width:32px"></div>'}
          <span class="m-ob-step-label">${F}</span>
          <button class="m-ob-back" id="ob-close" style="margin-left:auto"><i class="bi bi-x-lg"></i></button>
        </div>
        ${G}
        <div class="m-ob-body">${g}</div>
      </div>`}function P(){return E(`
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
    `,!1)}function L(){return E(`
      <div class="m-ob-hero m-ob-hero--compact">
        <div class="m-ob-logo-wrap" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-database-add"></i></div>
        <h2 class="m-ob-h2">Source de données</h2>
        <p class="m-ob-sub">Comment souhaitez-vous alimenter cette parcelle en données ?</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
        ${[{id:"link",icon:"bi-link-45deg",title:"Lier un capteur déjà enregistré",desc:"Associez un ou plusieurs capteurs existants à cette parcelle."},{id:"add",icon:"bi-broadcast",title:"Ajouter un capteur à l'exploitation",desc:"Flashez son code-barres ou saisissez son numéro de série."},{id:"smv",icon:"bi-cloud-sun",title:"Ajouter une station météo virtuelle",desc:"Accédez aux données météo de votre zone sans capteur physique."}].map(q=>`
          <div class="m-ob-plan-card${d===q.id?" m-ob-plan-card--on":""}" data-psource="${q.id}" style="cursor:pointer">
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
    `)}function S(){if(d==="smv")return E(`
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
      `);if(d==="link"){const g=re.slice(0,6);return E(`
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
      `)}return Is({showBack:!0,btnLabel:"Continuer",showSkip:!0})}function H(){const g=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),q=new Set(["EC"]),j=re.filter(M=>m.includes(M.id)),C=j.some(M=>g.has(M.model)),F=j.some(M=>q.has(M.model)),D=Ut.filter(M=>M!=="Non renseigné");return v||Yn(t,o).then(M=>{if(!M)return;v=M;const R=f.querySelector("#ob-parcel-name");R&&!R._edited&&(R.value=M)}),E(`
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
        ${C?`
        <div class="m-ob-field">
          <label class="m-ob-label">Texture de sol</label>
          <select class="m-ob-input m-ob-input--select">
            <option value="">— Choisir</option>
            ${Mi.map(M=>`<option>${M}</option>`).join("")}
          </select>
        </div>
        ${F?`
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
            ${Un.map(M=>`<option>${M}</option>`).join("")}
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
    `)}function z(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#e8fff0;color:#30d158"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Parcelle créée !</h2>
        <p class="m-ob-sub"><strong>${v||"La parcelle"}</strong> a été créée avec succès.</p>
        <button class="m-ob-cta" id="ob-see-parcel" style="margin-top:32px"><i class="bi bi-map"></i> Voir la parcelle</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function A(){const g=window.L;g&&setTimeout(()=>{const q=f.querySelector("#ob-parcel-map");if(!q||q._leaflet_id)return;a=g.map(q,{zoomControl:!0,attributionControl:!1}).setView([t,o],15),g.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(a),g.circleMarker([t,o],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:1}).addTo(a);const j=g.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#E05252;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});n=g.marker([t+45e-5,o],{icon:j,draggable:!0}).addTo(a),n.on("dragend",()=>{const C=n.getLatLng();t=C.lat,o=C.lng}),a.on("click",C=>{t=C.latlng.lat,o=C.latlng.lng,n.setLatLng([t,o])}),a.invalidateSize()},50)}function I(){const g=window.L;g&&(s=t+45e-5,l=o,setTimeout(()=>{const q=f.querySelector("#ob-smv-map");if(!q||q._leaflet_id)return;c=g.map(q,{zoomControl:!0,attributionControl:!1}).setView([t,o],15),g.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19}).addTo(c),g.circleMarker([t,o],{radius:8,color:"#fff",weight:2,fillColor:"#E05252",fillOpacity:1}).addTo(c);const j=g.divIcon({className:"",html:'<div style="width:24px;height:36px;background:#0172A4;border-radius:50% 50% 50% 0;transform:rotate(-45deg) translate(-50%,-50%);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',iconSize:[0,0],iconAnchor:[0,0]});p=g.marker([s,l],{icon:j,draggable:!0}).addTo(c),p.on("dragend",()=>{const C=p.getLatLng();s=C.lat,l=C.lng}),c.on("click",C=>{s=C.latlng.lat,l=C.latlng.lng,p.setLatLng([s,l])}),c.invalidateSize()},50))}const T={parcelMap:P,parcelSource:L,parcelData:S,parcelConfig:H,parcelDone:z};function k(){var q;const g=(q=T[y()])==null?void 0:q.call(T);g&&(f.innerHTML=g),x()}function w(){f.classList.add("m-ob-overlay--out"),setTimeout(()=>{f.remove(),e()},400)}function x(){var q,j,C,F,D;(q=f.querySelector("#ob-back"))==null||q.addEventListener("click",$),(j=f.querySelector("#ob-close"))==null||j.addEventListener("click",w),f.querySelectorAll("#ob-next").forEach(M=>M.addEventListener("click",h)),qs(f),f.querySelectorAll("[data-psource]").forEach(M=>{M.addEventListener("click",()=>{d=M.dataset.psource,f.querySelectorAll("[data-psource]").forEach(R=>R.classList.toggle("m-ob-plan-card--on",R===M))})}),f.querySelectorAll("[data-sensor-id]").forEach(M=>{M.addEventListener("change",()=>{const R=parseInt(M.dataset.sensorId);M.checked?m.includes(R)||m.push(R):m=m.filter(G=>G!==R)})}),(C=f.querySelector("#ob-skip-source"))==null||C.addEventListener("click",()=>{d="smv",h()});const g=f.querySelector("#ob-parcel-name");g&&g.addEventListener("input",M=>{M.target._edited=!0,v=M.target.value}),y()==="parcelMap"&&A(),y()==="parcelData"&&d==="smv"&&I(),(F=f.querySelector("#ob-see-parcel"))==null||F.addEventListener("click",w),(D=f.querySelector("#ob-finish"))==null||D.addEventListener("click",w)}k()}function Kn(e){const i=document.getElementById("phone-screen");let t=0;const o=["sensorAdd","sensorDone"],n=document.createElement("div");n.id="sensor-creation-overlay",n.className="m-ob-overlay",i.appendChild(n);function a(){return o[t]}function s(){t++,m()}function l(){return Is({showBack:!1,btnLabel:"Enregistrer le capteur",showSkip:!1})}function p(){return`
      <div class="m-ob-screen m-ob-screen--center">
        <div class="m-ob-logo-wrap m-ob-logo-wrap--done" style="background:#ff9f0a20;color:#ff9f0a"><i class="bi bi-check-lg"></i></div>
        <h2 class="m-ob-h2" style="margin-top:24px">Capteur ajouté !</h2>
        <p class="m-ob-sub">Votre capteur a été enregistré avec succès.</p>
        <button class="m-ob-cta" id="ob-see-sensor" style="margin-top:32px"><i class="bi bi-broadcast"></i> Voir le capteur</button>
        <button class="m-ob-link" id="ob-finish" type="button" style="margin-top:8px">Retour au tableau de bord</button>
      </div>`}function c(){n.classList.add("m-ob-overlay--out"),setTimeout(()=>{n.remove(),e()},400)}function d(){var v,r,u,b;(v=n.querySelector("#ob-close"))==null||v.addEventListener("click",c),(r=n.querySelector("#ob-next"))==null||r.addEventListener("click",s),(u=n.querySelector("#ob-see-sensor"))==null||u.addEventListener("click",c),(b=n.querySelector("#ob-finish"))==null||b.addEventListener("click",c),qs(n)}function m(){var u;const v={sensorAdd:l,sensorDone:p},r=(u=v[a()])==null?void 0:u.call(v);r&&(n.innerHTML=r),d()}m()}function Ct(e){var i;return((i=e.integrations)==null?void 0:i.some(t=>t.startsWith("IRRÉ-LIS")))??!1}const gi="weenat-irrelis-config";function pt(e){try{const l=JSON.parse(localStorage.getItem(gi)||"{}");if(l[e])return l[e]}catch{}const t=60+e*13%50,o=Math.round(t*.42),n=["Maïs","Maïs","Maïs","Blé","Maïs","Tournesol","Orge","Maïs"],a=n[e%n.length],s=String(5+e%16).padStart(2,"0");return{ru:t,rfu:o,culture:a,semisDate:`2026-04-${s}`}}function Xn(e,i){try{const t=JSON.parse(localStorage.getItem(gi)||"{}");t[e]={...pt(e),...i},localStorage.setItem(gi,JSON.stringify(t))}catch{}}const Ps=e=>`weenat-il-events-${e}`;function js(e){try{return JSON.parse(localStorage.getItem(Ps(e)))||[]}catch{return[]}}function Qn(e,i){try{localStorage.setItem(Ps(e),JSON.stringify(i))}catch{}}function eo(e,i,t){const o=[];let n=!0,a=5+Math.floor(Math.abs(Math.sin(e*.13))*5);for(let s=0;s<i;s++)if(a<=0&&(n=!n,a=n?4+Math.floor(Math.abs(Math.sin(e*1337+s*.53))*7):1+Math.floor(Math.abs(Math.sin(e*2997+s*.91))*2.9)),a--,n)o.push(0);else{const l=8+Math.floor(Math.abs(Math.sin(e*7919+s*1.73))*22);o.push(s>=t?Math.round(l*.6):l)}return o}function St(e,i=5){const t=pt(e.id),{ru:o,rfu:n}=t,a=e.id,s=new Date("2026-04-01T00:00:00"),l=new Date;l.setHours(0,0,0,0);const p=864e5,c=Math.round((l-s)/p),d=c+i,m=eo(a,d,c),v={};for(const $ of js(e.id))v[$.iso]||(v[$.iso]={pluie:0,irrigation:0}),v[$.iso][$.type]=(v[$.iso][$.type]||0)+$.mm;const r=[],u=[],b=[],f=[],y=[];let h=o*.88;for(let $=0;$<d;$++){const E=new Date(s.getTime()+$*p).toISOString().split("T")[0],P=v[E]||{pluie:0,irrigation:0},L=Math.max(.8,Math.min(5,1+4*Math.pow(Math.max(0,$/150),.6)+Math.sin(a*999+$*.57)*.3)),S=m[$]+P.pluie,H=P.irrigation;b.push(+L.toFixed(1)),u.push(S),f.push(H),h=h-L+S+H;const z=Math.max(0,h-o);y.push(+z.toFixed(1)),h=Math.max(0,Math.min(o,h)),r.push(+h.toFixed(1))}return{reservoir:r,pluie:u,etp:b,drainage:y,irrigation:f,nDays:c,nFcDays:i,ru:o,rfu:n,cfg:t,apr1:s}}function Ii(e,i){const t=St(e,5),o=t.nDays;switch(i){case"Aujourd'hui":return t.reservoir[o]??0;case"Demain":return t.reservoir[o+1]??0;case"J+3":return t.reservoir[o+3]??0;case"J+5":return t.reservoir[o+5]??0;default:return t.reservoir[o]??0}}function Zt(e,i,t){return e>t?"#007aff":e>=i?"#24B066":e>=t*.15?"#E8A020":"#E05252"}function to(e,i,t){const o=i+t;if(e==="7j"){const n=Math.max(0,i-7);return{startIdx:n,displayLen:Math.min(o-n,7+t)}}if(e==="30j"){const n=Math.max(0,i-30);return{startIdx:n,displayLen:Math.min(o-n,30+t)}}return{startIdx:0,displayLen:o}}const io=[{label:"Levée",daysAfter:10},{label:"4 feuilles",daysAfter:22},{label:"10 feuilles",daysAfter:38},{label:"15 feuilles",daysAfter:52},{label:"Floraison",daysAfter:68},{label:"Sl. laiteux",daysAfter:83},{label:"70% humidité",daysAfter:100}];function yi(e){if(e.length<2)return"";let i=`M${e[0].x.toFixed(1)},${e[0].y.toFixed(1)}`;for(let t=0;t<e.length-1;t++){const o=e[Math.max(t-1,0)],n=e[t],a=e[t+1],s=e[Math.min(t+2,e.length-1)],l=n.x+(a.x-o.x)/6,p=n.y+(a.y-o.y)/6,c=a.x-(s.x-n.x)/6,d=a.y-(s.y-n.y)/6;i+=` C${l.toFixed(1)},${p.toFixed(1)} ${c.toFixed(1)},${d.toFixed(1)} ${a.x.toFixed(1)},${a.y.toFixed(1)}`}return i}const zs=["jan","fév","mar","avr","mai","juin","juil","aoû","sep","oct","nov","déc"],Ds={t:24,r:38,b:28,l:52},so={t:8,r:38,b:28,l:52};function no(e,i,t,o,n){const{reservoir:a,nDays:s,nFcDays:l,ru:p,rfu:c,cfg:d,apr1:m}=t,v=Ds,r=e-v.l-v.r,u=i-v.t-v.b,b=p*1.05,f=R=>v.t+u-Math.max(0,Math.min(b,R))/b*u,y=R=>v.l+(R-o)/Math.max(n-1,1)*r,h=f(c),$=v.t+u,E=v.t,P=`
    <rect x="${v.l}" y="${E}" width="${r}" height="${(h-E).toFixed(1)}" fill="#24B066" opacity="0.1"/>
    <rect x="${v.l}" y="${h.toFixed(1)}" width="${r}" height="${($-h).toFixed(1)}" fill="#E05252" opacity="0.08"/>
    <line x1="${v.l}" y1="${h.toFixed(1)}" x2="${v.l+r}" y2="${h.toFixed(1)}" stroke="#24B066" stroke-width="1" stroke-dasharray="6,4" opacity="0.6"/>
    <text x="${v.l+r-4}" y="${((E+h)/2+4).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#24B066" font-weight="600">RFU</text>`,L=new Date(d.semisDate+"T00:00:00"),S=Math.round((L-m)/864e5),H=(d.culture==="Maïs"?io:[]).map(R=>{const G=S+R.daysAfter;if(G<o||G>=o+n)return"";const oe=y(G),Z=oe.toFixed(1),ae=(oe+3).toFixed(0),me=($-4).toFixed(0);return`<line x1="${Z}" y1="${E}" x2="${Z}" y2="${$}" stroke="#4CAF50" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.55"/>
<text transform="translate(${ae},${me}) rotate(-90)" font-size="10" font-family="-apple-system,sans-serif" fill="#4CAF50" font-weight="600">${R.label}</text>`}).join("");let z="",A="";for(let R=o;R<o+n;R++){const G=new Date(m.getTime()+R*864e5);if(G.getDate()===1){const oe=y(R).toFixed(1);z+=`<line x1="${oe}" y1="${v.t}" x2="${oe}" y2="${$}" stroke="rgba(0,0,0,.18)" stroke-width="1" stroke-dasharray="3,4"/>`;const Z=new Date(G.getFullYear(),G.getMonth()+1,1),ae=Math.round((Z-m)/864e5),me=Math.min(ae,o+n-1),Ee=y((R+me)/2).toFixed(1);A+=`<text x="${Ee}" y="${i-6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${zs[G.getMonth()]}</text>`}}const T=[0,c,p].map(R=>{const G=(f(R)+4).toFixed(1);return`<text x="${v.l-6}" y="${G}" text-anchor="end" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${R}</text>`}).join("")+`<text x="${v.l-6}" y="${v.t-7}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`,w=a.slice(o,o+n).map((R,G)=>({x:y(o+G),y:f(R)})),x=s-o,g=w.slice(0,Math.min(Math.max(x+1,1),w.length)),q=x>=0&&x<n?w.slice(x):[],j=yi(g),C=q.length>=2?yi(q):"",F=y(Math.max(o,Math.min(s,o+n-1))).toFixed(1),D=g.length?g[g.length-1].x.toFixed(1):F,M=j?`${j} L${D},${$} L${v.l},${$} Z`:"";return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <defs>
      <clipPath id="il-c"><rect x="${v.l}" y="${v.t}" width="${r}" height="${u}"/></clipPath>
      <linearGradient id="il-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0172A4" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#0172A4" stop-opacity="0.01"/>
      </linearGradient>
    </defs>
    ${P}
    <g clip-path="url(#il-c)">${z}${H}</g>
    ${M?`<path d="${M}" fill="url(#il-g)" clip-path="url(#il-c)"/>`:""}
    ${j?`<path d="${j}" fill="none" stroke="#0172A4" stroke-width="2.5" stroke-linejoin="round" clip-path="url(#il-c)"/>`:""}
    ${C?`<path d="${C}" fill="none" stroke="#0172A4" stroke-width="2" stroke-dasharray="7,5" stroke-linejoin="round" opacity="0.7" clip-path="url(#il-c)"/>`:""}
    <line x1="${F}" y1="${v.t}" x2="${F}" y2="${$}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="${F}" y="${v.t-6}" text-anchor="middle" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">Auj.</text>
    ${T}
    ${A}
    <rect x="${v.l}" y="${v.t}" width="${r}" height="${u}" fill="none" stroke="rgba(0,0,0,.07)" stroke-width="1"/>
  </svg>`}function oo(e,i,t,o,n){const{pluie:a,etp:s,drainage:l,irrigation:p,nDays:c,nFcDays:d,apr1:m}=t,v=so,r=e-v.l-v.r,u=i-v.t-v.b,b=v.t+u/2,f=a.slice(o,o+n),y=s.slice(o,o+n),h=l.slice(o,o+n),$=p.slice(o,o+n),E=Math.max(...f.map((g,q)=>g+($[q]||0)),1),P=Math.max(...y.map((g,q)=>g+(h[q]||0)),1),L=Math.max(E,P,1),S=u/2,H=Math.max(1.5,r/n*.8),z=g=>v.l+g/Math.max(n-1,1)*r-H/2;let A="";for(let g=0;g<n;g++){const q=f[g]/L*S,j=$[g]/L*S,C=y[g]/L*S,F=h[g]/L*S,D=z(g).toFixed(1),M=H.toFixed(1);f[g]>0&&(A+=`<rect x="${D}" y="${(b-q).toFixed(1)}" width="${M}" height="${q.toFixed(1)}" fill="#2E75B6" opacity="0.85"/>`),$[g]>0&&(A+=`<rect x="${D}" y="${(b-q-j).toFixed(1)}" width="${M}" height="${j.toFixed(1)}" fill="#FF8C00" opacity="0.85"/>`),A+=`<rect x="${D}" y="${b.toFixed(1)}" width="${M}" height="${C.toFixed(1)}" fill="#00887E" opacity="0.75"/>`,h[g]>0&&(A+=`<rect x="${D}" y="${(b+C).toFixed(1)}" width="${M}" height="${F.toFixed(1)}" fill="#8B1A1A" opacity="0.75"/>`)}const I=+L.toFixed(1),T=[`<text x="${v.l-6}" y="${(v.t+13).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">+${I}</text>`,`<text x="${v.l-6}" y="${(b+4).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">0</text>`,`<text x="${v.l-6}" y="${(v.t+u).toFixed(1)}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">-${I}</text>`,`<text x="${v.l-6}" y="${v.t-1}" text-anchor="end" font-size="11" font-family="-apple-system,sans-serif" fill="#8e8e93">mm</text>`].join("");let k="";for(let g=0;g<n;g++){const q=o+g,j=new Date(m.getTime()+q*864e5);if(j.getDate()===1){const C=new Date(j.getFullYear(),j.getMonth()+1,1),F=Math.round((C-m)/864e5),D=Math.min(F-o,n-1),M=(g+D)/2,R=(v.l+M/Math.max(n-1,1)*r).toFixed(1);k+=`<text x="${R}" y="${i-6}" text-anchor="middle" font-size="12" font-family="-apple-system,sans-serif" fill="#8e8e93">${zs[j.getMonth()]}</text>`;const G=(v.l+g/Math.max(n-1,1)*r).toFixed(1);k+=`<line x1="${G}" y1="${v.t}" x2="${G}" y2="${v.t+u}" stroke="rgba(0,0,0,.12)" stroke-width="1" stroke-dasharray="3,4"/>`}}const w=c-o,x=w>=0&&w<n?(v.l+w/Math.max(n-1,1)*r).toFixed(1):null;return`<svg width="${e}" height="${i}" style="display:block;flex-shrink:0">
    <line x1="${v.l}" y1="${b.toFixed(1)}" x2="${v.l+r}" y2="${b.toFixed(1)}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>
    ${A}
    ${x?`<line x1="${x}" y1="${v.t}" x2="${x}" y2="${v.t+u}" stroke="#8e8e93" stroke-width="1" stroke-dasharray="3,3" opacity="0.7"/>`:""}
    ${T}
    ${k}
    <rect x="${v.l}" y="${v.t}" width="${r}" height="${u}" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="1"/>
  </svg>`}function ao(){const e='<svg width="22" height="12" style="flex-shrink:0"><line x1="0" y1="6" x2="22" y2="6" stroke="#0172A4" stroke-width="2.5" stroke-dasharray="5,3"/></svg>',i='<svg width="22" height="12" style="flex-shrink:0"><line x1="0" y1="6" x2="22" y2="6" stroke="#0172A4" stroke-width="2.5"/></svg>',t=n=>`<span style="display:inline-block;width:11px;height:11px;background:${n};border-radius:2px;flex-shrink:0;margin-top:1px"></span>`,o=(n,a)=>`<span style="display:flex;align-items:center;gap:5px;font-size:12px;color:#636366">${n}${a}</span>`;return`<div style="display:flex;gap:10px;flex-wrap:wrap;padding:5px 14px 8px;border-top:.5px solid rgba(0,0,0,.07)">
    ${o(i,"Réserve")}
    ${o(e,"Prévision")}
    ${o(t("#2E75B6"),"Pluie")}
    ${o(t("#FF8C00"),"Irrigation")}
    ${o(t("#00887E"),"ETP")}
    ${o(t("#8B1A1A"),"Drainage")}
  </div>`}function lo(e,i,t){const{pluie:o,etp:n,drainage:a,irrigation:s,nDays:l}=e,p=Math.min(i+t,l),c=v=>v.slice(i,p).reduce((r,u)=>r+u,0);return`<div style="background:#f9f9fb;border-top:.5px solid rgba(0,0,0,.07)">
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;padding:5px 14px 3px">Cumuls sur la période</div>
    <div style="display:flex;align-items:center;padding:3px 8px 8px">${[{c:"#2E75B6",label:"Pluie",v:Math.round(c(o))},{c:"#FF8C00",label:"Irrigation",v:Math.round(c(s))},{c:"#00887E",label:"ETP",v:+c(n).toFixed(1)},{c:"#8B1A1A",label:"Drainage",v:+c(a).toFixed(1)}].map(({c:v,label:r,v:u})=>`
    <div style="flex:1;text-align:center;padding:0 2px">
      <div style="font-size:15px;font-weight:700;color:${v}">${u}<span style="font-size:11px;font-weight:400"> mm</span></div>
      <div style="font-size:11px;color:#8e8e93;margin-top:1px">${r}</div>
    </div>`).join("")}</div>
  </div>`}function ro(e,i,t,o,n){const{reservoir:a,ru:s,rfu:l,nDays:p,apr1:c}=i,d=Ds,v=e.clientWidth-d.l-d.r;e.style.position="relative";const r=document.createElement("div");r.style.cssText="position:absolute;background:rgba(28,28,30,.88);color:#fff;border-radius:10px;padding:6px 11px;font-size:13px;font-weight:600;pointer-events:none;display:none;white-space:nowrap;z-index:20;transform:translate(-50%,-100%);margin-top:-10px;font-family:-apple-system,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.25)";const u=document.createElement("div");u.style.cssText=`position:absolute;width:1px;background:rgba(100,100,100,.35);pointer-events:none;display:none;top:${d.t}px`,u.style.height=n-d.t-d.b+"px",e.appendChild(u),e.appendChild(r);const b=(y,h)=>{const $=e.getBoundingClientRect(),E=h-$.top;if(E>n){f();return}const P=y-$.left,L=Math.max(0,Math.min(1,(P-d.l)/v)),S=Math.max(0,Math.min(a.length-1,Math.round(t+L*(o-1)))),H=a[S],z=S>=p,A=Zt(H,l,s),T=new Date(c.getTime()+S*864e5).toLocaleDateString("fr-FR",{day:"numeric",month:"short"});r.innerHTML=`<span style="color:${A}">${H} mm</span>&ensp;<span style="font-size:11px;opacity:.7">${T}${z?" ·&thinsp;prév.":""}</span>`;const k=Math.max(60,Math.min($.width-60,P));r.style.left=k+"px",r.style.top=Math.min(E,n-20)+"px",r.style.display="block",u.style.left=P+"px",u.style.display="block"},f=()=>{r.style.display="none",u.style.display="none"};e.addEventListener("mousemove",y=>b(y.clientX,y.clientY)),e.addEventListener("mouseleave",f),e.addEventListener("touchmove",y=>{y.preventDefault(),b(y.touches[0].clientX,y.touches[0].clientY)},{passive:!1}),e.addEventListener("touchend",f)}function co(e,i,t="saison"){const o=e.clientWidth,n=e.clientHeight;if(!o||!n)return;const{nDays:a,nFcDays:s}=i,{startIdx:l,displayLen:p}=to(t,a,s),m=n-58-38,v=Math.round(m*3/5),r=m-v;e.innerHTML=no(o,v,i,l,p)+oo(o,r,i,l,p)+lo(i,l,p)+ao(),ro(e,i,l,p,v)}function uo(e,i){const t=pt(e.id),o=document.createElement("div");o.innerHTML=`
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
    </div>`;const n=ue({title:`Configuration — ${e.name}`,body:o,doneLabel:"Fermer",onDone:()=>{}});o.querySelector("#il-cfg-save").addEventListener("click",()=>{Xn(e.id,{culture:o.querySelector("#il-culture").value,semisDate:o.querySelector("#il-semis").value,ru:+o.querySelector("#il-ru").value||t.ru,rfu:+o.querySelector("#il-rfu").value||t.rfu}),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{n.remove(),i==null||i()},280),Y("Configuration enregistrée")})}function po(e,i){let t=[...js(e.id)],o="all",n=null;function a(p){return new Date(p+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function s(){const c=[...o==="all"?t:t.filter(r=>r.type===o)].sort((r,u)=>u.iso.localeCompare(r.iso)),d=c.map(r=>{const u=t.indexOf(r),b=r.type==="pluie",f=b?"rgba(46,117,182,.12)":"rgba(255,140,0,.12)",y=b?"#2E75B6":"#FF8C00";return`
        <div style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:.5px solid rgba(0,0,0,.07)">
          <div style="width:32px;height:32px;border-radius:50%;background:${f};display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="bi ${b?"bi-cloud-rain":"bi-droplet-fill"}" style="color:${y};font-size:14px"></i>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:600;color:#1c1c1e">${b?"Pluie":"Irrigation"}</div>
            <div style="font-size:12px;color:#8e8e93">${a(r.iso)}</div>
          </div>
          <div style="font-size:15px;font-weight:700;color:${y};margin-right:4px">${r.mm} mm</div>
          <button class="gpi-edit" data-idx="${u}" style="background:none;border:none;cursor:pointer;padding:4px;color:#8e8e93"><i class="bi bi-pencil" style="font-size:14px"></i></button>
          <button class="gpi-del" data-idx="${u}" style="background:none;border:none;cursor:pointer;padding:4px;color:#E05252"><i class="bi bi-trash" style="font-size:14px"></i></button>
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
        ${c.length?d:'<p style="color:#8e8e93;text-align:center;padding:32px 0;font-size:14px">Aucun événement</p>'}
      </div>
      <div style="padding:10px 16px 20px;background:#fff;border-top:.5px solid rgba(0,0,0,.1);flex-shrink:0">
        <button id="gpi-save" style="width:100%;background:#0172A4;color:#fff;border:none;border-radius:14px;padding:15px;font-size:16px;font-weight:700;cursor:pointer">Enregistrer (${t.length})</button>
      </div>`,n.querySelector("#gpi-back").addEventListener("click",()=>fe()),n.querySelector("#gpi-add-pluie").addEventListener("click",()=>l("pluie")),n.querySelector("#gpi-add-irrig").addEventListener("click",()=>l("irrigation")),n.querySelector("#gpi-save").addEventListener("click",()=>{Qn(e.id,t),fe(),i==null||i(),Y(`${t.length} événement(s) enregistré(s)`)}),n.querySelectorAll(".gpi-filter").forEach(r=>{r.addEventListener("click",()=>{o=r.dataset.f,s()})}),n.querySelectorAll(".gpi-edit").forEach(r=>{r.addEventListener("click",()=>{l(t[+r.dataset.idx].type,+r.dataset.idx)})}),n.querySelectorAll(".gpi-del").forEach(r=>{r.addEventListener("click",()=>{t.splice(+r.dataset.idx,1),s()})})}function l(p,c=-1){const d=c>=0?t[c]:null,m=document.createElement("div");m.innerHTML=`
      <div style="padding:4px 0 8px">
        <div class="m-form-label">Date</div>
        <input id="gpi-date" type="date" value="${(d==null?void 0:d.iso)??new Date().toISOString().split("T")[0]}" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:14px">
        <div class="m-form-label">Quantité (mm)</div>
        <input id="gpi-mm" type="number" value="${(d==null?void 0:d.mm)??""}" placeholder="ex : 25" min="0" max="300" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
        <button id="gpi-sheet-save" style="width:100%;background:${p==="pluie"?"#2E75B6":"#FF8C00"};color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">${c>=0?"Modifier":"Ajouter"}</button>
      </div>`;const v=p==="pluie"?c>=0?"Modifier la pluie":"Ajouter une pluie":c>=0?"Modifier l'irrigation":"Ajouter une irrigation",r=ue({title:v,body:m,doneLabel:"Fermer",onDone:()=>{}});m.querySelector("#gpi-sheet-save").addEventListener("click",()=>{const u=m.querySelector("#gpi-date").value,b=parseFloat(m.querySelector("#gpi-mm").value);if(!u||isNaN(b)||b<=0)return;const f={type:p,iso:u,mm:+b.toFixed(1)};c>=0?t[c]=f:t.push(f),r.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{r.remove(),s()},280)})}n=xe(""),n.style.cssText="display:flex;flex-direction:column;background:#f2f2f7",s()}function mo(e){const i=document.createElement("div");i.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:8px 0 4px">
      <div style="width:56px;height:56px;border-radius:50%;background:rgba(48,209,88,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
        <i class="bi bi-file-earmark-spreadsheet" style="font-size:26px;color:#30d158"></i>
      </div>
      <p style="font-size:14px;color:#636366;line-height:1.5;margin:0 0 16px">Le bilan hydrique Irré-LIS de <strong>${e.name}</strong> sera envoyé par e-mail au format Excel.</p>
      <div class="m-form-label" style="align-self:flex-start;width:100%;text-align:left">Adresse e-mail</div>
      <input id="il-dl-email" type="email" value="contact@fermebocage.fr" style="width:100%;padding:10px;border:1.5px solid #e5e5ea;border-radius:10px;font-size:15px;background:#fff;box-sizing:border-box;margin-bottom:16px">
      <button id="il-dl-send" style="width:100%;background:#30d158;color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:600;cursor:pointer">Envoyer le fichier</button>
    </div>`;const t=ue({title:"Télécharger le bilan",body:i,doneLabel:"Fermer",onDone:()=>{}});i.querySelector("#il-dl-send").addEventListener("click",()=>{t.classList.remove("m-sheet-overlay--show"),setTimeout(()=>t.remove(),280),Y("Bilan envoyé par e-mail")})}function Fs(e){const i=St(e,5),{reservoir:t,pluie:o,etp:n,drainage:a,irrigation:s,nDays:l,ru:p,rfu:c,cfg:d}=i,m=t[l]??t[l-1]??0,v=Zt(m,c,p),r=Math.round(m/p*100),u=Math.max(0,l-7),b=M=>M.slice(u,l).reduce((R,G)=>R+G,0),f=Math.round(b(o)),y=Math.round(b(s)),h=+b(n).toFixed(1),$=+b(a).toFixed(1),E=t.slice(u,l+1),P=260,L=52,S=4,H=4,z=4,A=4,I=P-S-H,T=L-z-A,k=M=>z+T-Math.max(0,Math.min(1.02,M/p))*T,w=M=>S+M/Math.max(E.length-1,1)*I,x=E.map((M,R)=>({x:w(R),y:k(M)})),g=yi(x),q=k(c).toFixed(1),j=(z+T).toFixed(1),C=g?`${g} L${w(E.length-1).toFixed(1)},${j} L${S},${j} Z`:"",F=`<svg viewBox="0 0 ${P} ${L}" width="${P}" height="${L}" style="display:block;width:100%;height:${L}px">
    <rect x="${S}" y="${z}" width="${I}" height="${(+q-z).toFixed(1)}" fill="#24B066" opacity="0.1"/>
    <rect x="${S}" y="${q}" width="${I}" height="${(+j-+q).toFixed(1)}" fill="#E05252" opacity="0.08"/>
    <line x1="${S}" y1="${q}" x2="${S+I}" y2="${q}" stroke="#24B066" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
    ${C?`<path d="${C}" fill="#0172A4" opacity="0.08"/>`:""}
    ${g?`<path d="${g}" fill="none" stroke="#0172A4" stroke-width="2" stroke-linejoin="round"/>`:""}
  </svg>`,D=(M,R,G)=>`<div style="flex:1;text-align:center">
    <div style="font-size:13px;font-weight:700;color:${M}">${G}</div>
    <div style="font-size:10px;color:#8e8e93">${R}</div>
  </div>`;return`<div class="m-widget-card" data-widget-id="irrelis">
    <div style="padding:12px 14px 10px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <span style="font-size:11px;color:#0172A4;font-weight:700;background:rgba(1,114,164,.09);border-radius:6px;padding:2px 7px">Irré-LIS</span>
        <span style="font-size:14px;font-weight:700;color:${v}">${m} <span style="font-size:11px;font-weight:400">mm</span></span>
        <span style="font-size:11px;color:#8e8e93">${r}% RU</span>
        <button class="m-il-detail-btn" data-il-plot="${e.id}" style="margin-left:auto;font-size:12px;color:#0172A4;background:none;border:none;cursor:pointer;font-weight:600;white-space:nowrap">Voir le bilan →</button>
      </div>
      ${F}
      <div style="display:flex;gap:0;margin-top:8px;padding-top:8px;border-top:.5px solid rgba(0,0,0,.07)">
        ${D("#2E75B6","Pluie 7j",f+" mm")}
        ${D("#FF8C00","Irrigation 7j",y+" mm")}
        ${D("#00887E","ETP 7j",h+" mm")}
        ${D("#8B1A1A","Drainage 7j",$+" mm")}
      </div>
    </div>
  </div>`}function vo(e,i){const t=ce.filter(a=>Ct(a)),o=document.createElement("div");o.style.cssText="padding:4px 0",o.innerHTML=t.map(a=>`
    <button class="il-plot-pick" data-id="${a.id}" style="
      display:flex;align-items:center;width:100%;padding:14px 16px;
      border:none;border-bottom:.5px solid rgba(0,0,0,.06);font-family:inherit;cursor:pointer;gap:12px;
      background:${a.id===e.id?"rgba(1,114,164,.07)":"none"}">
      <i class="bi bi-geo-alt" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
      <span style="flex:1;font-size:16px;color:#1c1c1e;font-weight:${a.id===e.id?"700":"400"};text-align:left">${a.name}</span>
      ${a.id===e.id?'<i class="bi bi-check2" style="color:#0172A4;font-size:18px;flex-shrink:0"></i>':""}
    </button>`).join("");const n=ue({title:"Parcelles Irré-LIS",body:o,doneLabel:"Fermer",onDone:()=>{}});o.querySelectorAll(".il-plot-pick").forEach(a=>{a.addEventListener("click",()=>{const s=ce.find(l=>l.id===+a.dataset.id);n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{n.remove(),s&&s.id!==e.id&&i(s)},280)})})}function _s(e){const i=pt(e.id),t=new Date(i.semisDate+"T00:00:00").toLocaleDateString("fr-FR",{day:"numeric",month:"short"});let o="saison";const n=xe(`
    <div class="m-fs-topbar">
      <button class="m-fs-back" id="il-back"><i class="bi bi-chevron-left"></i>Parcelles</button>
      <button id="il-plot-picker" style="flex:1;display:flex;align-items:center;justify-content:center;gap:5px;background:none;border:none;cursor:pointer;padding:0 4px;min-width:0">
        <span style="font-size:16px;font-weight:700;color:#1c1c1e;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.name}</span>
        <i class="bi bi-chevron-down" style="font-size:10px;color:#8e8e93;flex-shrink:0;margin-top:1px"></i>
      </button>
      <button id="il-parcel-btn" style="background:none;border:none;color:#0172A4;font-size:13px;font-weight:600;cursor:pointer;padding:0 4px;white-space:nowrap">Parcelle →</button>
    </div>
    <div style="display:flex;align-items:center;gap:8px;padding:7px 14px 6px;background:#fff;border-bottom:.5px solid rgba(0,0,0,.1)">
      <div style="display:flex;align-items:center;gap:6px;flex:1;flex-wrap:wrap;min-width:0">
        <span style="font-size:12px;color:#0172A4;font-weight:700;background:rgba(1,114,164,.09);border-radius:6px;padding:3px 9px;white-space:nowrap;flex-shrink:0">Irré-LIS</span>
        <span style="font-size:13px;color:#1c1c1e;font-weight:500;white-space:nowrap">${i.culture}</span>
        <span style="font-size:11px;color:#8e8e93;white-space:nowrap">Semis ${t}</span>
      </div>
      <select id="il-period" style="flex-shrink:0;font-size:12px;color:#1c1c1e;border:1px solid #e5e5ea;border-radius:8px;padding:4px 8px;background:#fff;cursor:pointer">
        <option value="saison" selected>Saison entière</option>
        <option value="30j">30 jours</option>
        <option value="7j">7 jours</option>
      </select>
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
  `);n.classList.add("m-fs-layer");const a=n.querySelector("#il-chart-area");let s=St(e,5),l=null;function p(){a.clientWidth&&a.clientHeight&&co(a,s,o)}l=new ResizeObserver(()=>requestAnimationFrame(p)),l.observe(a),requestAnimationFrame(p),n.querySelector("#il-back").addEventListener("click",()=>{l==null||l.disconnect(),fe()}),n.querySelector("#il-plot-picker").addEventListener("click",()=>{vo(e,d=>{l==null||l.disconnect(),fe(),requestAnimationFrame(()=>_s(d))})}),n.querySelector("#il-period").addEventListener("change",d=>{o=d.target.value,p()}),n.querySelector("#il-parcel-btn").addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>dt),void 0).then(d=>d.initParcelDetail(e,[],"widgets","Irré-LIS"))});const c=()=>{s=St(e,5),p()};n.querySelector("#il-btn-config").addEventListener("click",()=>uo(e,c)),n.querySelector("#il-btn-pluv").addEventListener("click",()=>po(e,c)),n.querySelector("#il-btn-dl").addEventListener("click",()=>mo(e))}const Hs=Object.freeze(Object.defineProperty({__proto__:null,getIrrelisConfig:pt,getIrrelisDailyData:St,getIrrelisVal:Ii,hasIrrelis:Ct,irrelisColor:Zt,irrelisMobileWidget:Fs,openIrrelisDetail:_s},Symbol.toStringTag,{value:"Module"})),Bs={admin:100,adherent:1,new:41},Rs="weenat-m-dash";function ut(){try{return JSON.parse(localStorage.getItem(Rs))||{}}catch{return{}}}function xt(e){try{localStorage.setItem(Rs,JSON.stringify({...ut(),...e}))}catch{}}const Se=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls préférés",info:"Mes cumuls préférés.<br><br>Ajoutez ici les valeurs des cumuls qui sont importants pour vous en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-bar-chart",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures préférées",info:"Mes mesures préférées.<br><br>Ajoutez ici les indicateurs de vos parcelles ou capteurs qui vous intéressent en ce moment afin de gagner du temps. Vous ouvrez l'app, vous voyez ce qui intéresse. Vous fermez l'app.",gif:"",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"notes",title:"Notes",icon:"bi-pencil-square",color:"#636366",active:!1,available:!0,fixed:!1},{id:"radar_pluie",title:"Radar de pluie",icon:"bi-cloud-rain-heavy",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"irrelis",title:"Bilan Irré-LIS",icon:"bi-moisture",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Besoin d'aide ?",icon:"bi-question-circle",color:"#30d158",active:!0,available:!0,fixed:!0}];function fo(e,i,t){var a;const o=document.getElementById("phone-screen");(a=document.querySelector(".m-winfo-overlay"))==null||a.remove();const n=document.createElement("div");n.className="m-winfo-overlay",n.innerHTML=`
    <div class="m-winfo-modal">
      <div class="m-winfo-hd">
        <span class="m-winfo-title">${e}</span>
        <button class="m-winfo-close" type="button"><i class="bi bi-x"></i></button>
      </div>
      <div class="m-winfo-gif">
        ${t?`<img src="${t}" alt="${e}">`:'<div class="m-winfo-gif-placeholder"><i class="bi bi-play-circle" style="font-size:28px;display:block;margin-bottom:6px"></i>GIF à venir</div>'}
      </div>
      <div class="m-winfo-body">${i}</div>
    </div>`,n.querySelector(".m-winfo-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",s=>{s.target===n&&n.remove()}),o.appendChild(n)}function We(e){var o;const i=document.getElementById("phone-screen");(o=document.querySelector(".m-toast"))==null||o.remove();const t=document.createElement("div");t.className="m-toast",t.textContent=e,i.appendChild(t),requestAnimationFrame(()=>t.classList.add("m-toast--show")),setTimeout(()=>{t.classList.remove("m-toast--show"),setTimeout(()=>t.remove(),300)},2200)}function Ge({title:e,body:i,doneLabel:t="Fermer",onDone:o}={}){var l;const n=document.getElementById("phone-screen");(l=document.querySelector(".m-sheet-overlay"))==null||l.remove();const a=document.createElement("div");a.className="m-sheet-overlay",a.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${e}</span>
        <button class="m-sheet-done">${t}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,a.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),n.appendChild(a),requestAnimationFrame(()=>a.classList.add("m-sheet-overlay--show"));const s=()=>{a.classList.remove("m-sheet-overlay--show"),setTimeout(()=>a.remove(),280)};return a.querySelector(".m-sheet-cancel").addEventListener("click",s),a.querySelector(".m-sheet-done").addEventListener("click",()=>{o==null||o(),s()}),a.addEventListener("click",p=>{p.target===a&&s()}),a}const Yi=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#2E75B6"}];function Zi(){return Array.from({length:14},(e,i)=>i).map(e=>{const i=new Date;i.setDate(i.getDate()+e);const t=Yi[Math.floor(Math.random()*Yi.length)],o=t.label==="Pluie"||t.label==="Averses",n=Math.round(8+Math.random()*8),a=Math.round(16+Math.random()*14),s=Array.from({length:24},(l,p)=>{const c=Math.sin(Math.PI*(p-6)/12),d=Math.round(n+(a-n)*Math.max(0,c)),m=o&&p>=8&&p<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:p,label:`${String(p).padStart(2,"0")}h`,temp:d,pluie:m,hum:Math.round(85-40*Math.max(0,c)),vent:Math.round(10+Math.random()*20),icon:m>0?"bi-cloud-rain-fill":p<7||p>20?"bi-moon-fill":t.icon}});return{dayLabel:e===0?"Aujourd'hui":e===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...t,pluie:o?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:n,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:a,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:s}})}function Ki(e){const i=e.id,t=e.reserveHydrique||50,o=+((i*2.3+7)%32).toFixed(1),n=+((i*1.1+14)%14+10).toFixed(1),a=+((i*.6+1)%6).toFixed(1),s=Math.round(t*((i%5+1)/10)),l=Math.max(0,+(s+o-n-a).toFixed(0)),p=l<s?s-l:0;return{j0:s,j7:l,bilan:p}}const $t=4,Bt=5,Xi=["#0172A4","#ff8500","#30d158","#bf5af2"],Os={pluie:"#2E75B6",temperature:"#FBAF05",humidite:"#5B12A4",etp:"#7DBDD7",rayonnement:"#CBCB0B",temp_rosee:"#72B0D8",vent:"#616161",par:"#4CBB17",humectation:"#00887E",pothydr:"#A6C157",teneur:"#ED9A2C",temp_sol:"#795548",irrigation:"#FF8C00"},xi={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol",irrigation:"Irrigation"},bo={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C",irrigation:"mm"},Qi={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},ho=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function Ns(e){return e==="1d"||e==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:e==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function go(e,i){const t=["etp","rayonnement","temp_rosee"];if(!e)return[];if(e.startsWith("p-")){const n=new Set(t),a=+e.slice(2);i.filter(l=>l.parcelIds.includes(a)).forEach(l=>(Qi[l.model]||[]).forEach(p=>n.add(p)));const s=ce.find(l=>l.id===a);return(s!=null&&s.irrigation&&s.irrigation!=="Non irrigué"||pe.some(l=>l.plotId===a))&&n.add("irrigation"),[...n].filter(l=>l in xi)}const o=i.find(n=>n.id===+e.slice(2));return o?Qi[o.model]||[]:[]}function yo(e,i){return e==="1d"||e==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?e==="365d"?["Jan","Avr","Jul","Oct","Déc"]:e==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?e==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?e==="365d"?["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let Te=[],Ie=[];(()=>{const e=ut();if(e.catalog){const i=e.catalog.map(t=>t.id);Se.sort((t,o)=>{const n=i.indexOf(t.id),a=i.indexOf(o.id);return(n<0?999:n)-(a<0?999:a)}),e.catalog.forEach(t=>{const o=Se.find(n=>n.id===t.id);o&&(o.active=t.active)})}e.mesuresList&&(Te=e.mesuresList),e.cumulsList&&(Ie=e.cumulsList)})();let Rt=null,Ot=null;function Vs(e){return Te.length>=$t?"max":Te.some(i=>i.subjectKey===e.subjectKey&&i.metricId===e.metricId&&i.period===e.period&&i.step===e.step)?"dup":(Te.push(e),xt({mesuresList:Te}),Rt==null||Rt(),"ok")}function Js(e){return Ie.length>=Bt?"max":(Ie.push(e),xt({cumulsList:Ie}),Ot==null||Ot(),"ok")}function xo(e,i,t){if(i==="irrigation"&&e.startsWith("p-")){const s=parseInt(e.slice(2),10),l=Date.now(),p=24*36e5,c=l-t*p,d=new Array(t).fill(0);return pe.filter(m=>m.plotId===s&&m.real).forEach(m=>{const v=new Date(m.iso).getTime();if(v<c||v>l)return;const r=Math.min(t-1,Math.floor((v-c)/p));d[r]+=m.mm||0}),d}const o=[...e+i].reduce((s,l)=>s+l.charCodeAt(0),1),n=s=>(Math.sin(o*.07+s*.5)+Math.sin(o*.03+s*1.3))/2+.5,a={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:t},(s,l)=>a.sparse&&n(l*3.7)>.28?0:Math.max(0,a.base+a.amp*n(l*.28+1.2)))}const $o=new Set(["pluie","etp","irrigation"]);function wo(e,i){var E,P;const t=e.period==="365d"&&e.step==="1mo"?12:{"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[e.period]||42,o=xo(e.subjectKey,e.metricId,t),n=270,a=100,s=28,l=14,p=Math.max(...o,1),c=$o.has(e.metricId);let d,m="";for(let L=0;L<=2;L++){const S=Math.round(L/2*(a-l-4)+4);m+=`<line x1="${s}" y1="${S}" x2="${s+n}" y2="${S}" stroke="#E8E6E0" stroke-width=".5"/>`,m+=`<text x="${s-3}" y="${S+3}" text-anchor="end" font-size="8" fill="#636366">${+(p*(1-L/2)).toFixed(p<5?1:0)}</text>`}const v=yo(e.period,e.step),r=v.map((L,S)=>`<text x="${s+Math.round(S/(v.length-1)*n)}" y="${a+3}" text-anchor="middle" font-size="9" fill="#3c3c43">${L}</text>`).join(""),u=JSON.stringify(o.map(L=>+L.toFixed(2))),b=Os[e.metricId]||e.color,f=e.metricId==="pluie"?"#2E75B6":b;if(c){const L=Math.max(1,n/t*.7),S=o.map((H,z)=>{const A=Math.round(H/p*(a-l-4)),I=s+Math.round(z/(t-1)*n)-L/2,T=a-l-A;return`<rect x="${I.toFixed(1)}" y="${T.toFixed(1)}" width="${L.toFixed(1)}" height="${A.toFixed(1)}" fill="${f}" opacity=".85" rx="1"/>`}).join("");d=`<svg viewBox="0 0 ${s+n} ${a+6}" style="width:100%;display:block;overflow:visible">${m}${S}${r}</svg>`}else{const L=o.map((S,H)=>`${s+Math.round(H/(t-1)*n)},${a-l-Math.round(S/p*(a-l-4))}`).join(" ");d=`<svg viewBox="0 0 ${s+n} ${a+6}" style="width:100%;display:block;overflow:visible">
      ${m}
      <polyline points="${L}" fill="none" stroke="${b}" stroke-width="2" stroke-linejoin="round"/>
      <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${a}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
      ${r}
    </svg>`}const y=(E=e.subjectKey)!=null&&E.startsWith("s-")?e.subjectKey.slice(2):null,h=(P=e.subjectKey)!=null&&P.startsWith("p-")?e.subjectKey.slice(2):null,$=y||h?`<button class="m-wf-view-data" ${y?`data-sensor-id="${y}"`:`data-parcel-id="${h}"`} data-metric-id="${e.metricId}" data-period="${e.period}" data-step="${e.step}" style="display:flex;align-items:center;gap:4px;margin-top:8px;padding:6px 10px;border:none;background:rgba(0,122,255,.08);border-radius:8px;color:#007AFF;font-size:12px;font-weight:600;cursor:pointer;width:100%;justify-content:center">Voir détails <i class="bi bi-fullscreen" style="font-size:11px"></i></button>`:"";return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${e.metricId==="pluie"?f:b}">${e.metricLabel}</div>
          <div class="m-wf-card-sub" style="color:#3c3c43;font-weight:500">${e.subjectLabel}</div>
          <div class="m-wf-card-sub">${e.periodLabel} · ${e.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${e.unit}" data-series='${u}' style="position:relative;margin-top:4px">
        ${d}
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
      ${$}
    </div>`}function es(e,i){const t=Te.length>=$t,o=[...e].sort((l,p)=>l.name.localeCompare(p.name,"fr")).map(l=>`<option value="p-${l.id}">${At(l)}</option>`).join(""),n=i.filter(l=>l.parcelIds.length>0).map(l=>`<option value="s-${l.id}">${Mt(l,e)}</option>`).join(""),a=Ns("7d");return`
    <div id="msr-list">${Te.length?Te.map(wo).join(""):'<div class="m-wf-empty">Ajoutez ici les mesures que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Te.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${$t}/${$t})</div>
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
          ${ho.map(l=>`<option value="${l.id}"${l.id==="7d"?" selected":""}>${l.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step">
          ${a.map(l=>`<option value="${l.id}">${l.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Ajouter la mesure</button>
    </div>`}`}function So(e){const i=new Date().toISOString().split("T")[0],t=new Date;t.setDate(t.getDate()+7);const o=t.toISOString().split("T")[0];return pe.filter(n=>n.iso>i&&n.iso<=o&&n.plotId===e.id).reduce((n,a)=>n+a.mm,0)}function ko(e){return 25+e.id*7%20}const ts=9;function Eo(e){const i=e.filter(n=>Ct(n));return i.length?`
    <div style="font-size:11px;color:#8e8e93;margin-bottom:2px">Réserve en eau — Aujourd'hui</div>
    ${i.map(n=>{const a=pt(n.id),s=Math.round(Ii(n,"Aujourd'hui")),l=Zt(s,a.rfu,a.ru),p=Math.round(s/a.ru*100);return`
      <div class="m-il-row" data-il-plot="${n.id}" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:.5px solid rgba(0,0,0,.07);cursor:pointer">
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.name}</div>
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
  </div>`:'<div class="m-widget-empty"><i class="bi bi-droplet" style="color:#0172A4;font-size:28px"></i><p>Aucune parcelle avec le service Irré-LIS</p></div>'}function vt(e,i=!1,t=ut().sensorlessEnabled??!0,o=ut().irrigAdvisor??!1){if(!e.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const n=L=>L.id%3===2,a=e.slice(),s=(L,S)=>Ki(S).bilan-Ki(L).bilan,l=a.slice().sort(s),p=i?l:l.slice(0,ts),c=new Set(p.map(L=>L.id)),d=l.length-p.length,m=L=>Math.round((L.id*2.3+7)%32*10)/10,v=L=>Math.round(((L.id*1.1+14)%14+10)*10)/10,r="font-size:11px;font-weight:700;color:#8e8e93;text-align:right;padding-bottom:6px;text-transform:uppercase;letter-spacing:.03em;line-height:1.3",u=L=>`<span style="display:block;font-size:9px;font-weight:400;text-transform:none;color:#b0aead;letter-spacing:0">${L}</span>`,b="border-top:none",f=(L,S)=>{const H=So(L),z=m(L),A=v(L),I=S===0?"border-top:none":"border-top:.5px solid rgba(0,0,0,.18);padding-top:8px;margin-top:2px",T=`<button class="m-bh-th-n m-bh-plot-link" data-plot-id="${L.id}" style="grid-column:1/-1;white-space:normal;overflow:visible;text-overflow:unset;text-align:left;${I}">${L.name}</button>`;if(o){const w=n(L)?ko(L):null,x=w!==null?H>=w?"#24B066":"#E05252":null,g=w!==null?`<span style="color:${x};font-weight:700">${w}</span>`:'<span style="color:#c7c7cc">—</span>';return`
        ${T}
        <div class="m-bh-td" style="${b}">${z}</div>
        <div class="m-bh-td" style="${b}">${A}</div>
        <div class="m-bh-td m-bh-td--planif" style="${b}">${H>0?H:"—"}</div>
        <div class="m-bh-td" style="${b}">${g}</div>`}return`
      ${T}
      <div class="m-bh-td" style="${b}">${z}</div>
      <div class="m-bh-td" style="${b}">${A}</div>
      <div class="m-bh-td m-bh-td--planif" style="${b}">${H>0?H:"—"}</div>`},y=l.filter(L=>c.has(L.id)).map((L,S)=>f(L,S)).join(""),h=o?"1fr 1fr 1.5fr 1fr":"1fr 1fr 1.5fr",$=o?`<div style="${r}">Pluie${u("J+7 mm")}</div>
       <div style="${r}">ETP${u("J+7 mm")}</div>
       <div style="${r}">Irr. planif.${u("J+7 mm")}</div>
       <div style="${r}">Irr. reco.${u("J+7 mm")}</div>`:`<div style="${r}">Pluie${u("J+7 mm")}</div>
       <div style="${r}">ETP${u("J+7 mm")}</div>
       <div style="${r}">Irr. planif.${u("J+7 mm")}</div>`,E=o?`<div style="font-size:11px;color:#8e8e93;margin-bottom:6px">
         <i class="bi bi-info-circle" style="color:#ff9f0a"></i>
         Reco. affiché uniquement pour les parcelles avec Irrigation Advisor actif
       </div>`:"",P=l.length>ts?`<button class="m-bh-expand" id="bh-expand" data-expanded="${i}">
        ${i?'Réduire <i class="bi bi-chevron-up"></i>':`Afficher les ${d} autres parcelles <i class="bi bi-chevron-down"></i>`}
      </button>`:"";return`
    <label style="display:flex;align-items:center;gap:8px;padding:4px 0 8px;cursor:pointer;font-size:13px;color:#1c1c1e">
      <input type="checkbox" id="bh-advisor-cb" ${o?"checked":""} style="width:16px;height:16px;accent-color:#ff9f0a">
      Irrigation Advisor${o?' <span style="font-size:11px;color:#ff9f0a;font-weight:600">✦</span>':""}
    </label>
    ${E}
    <div style="background:#f5f5f7;border-radius:10px;padding:8px;margin-bottom:8px">
      <div class="m-bh-table" style="grid-template-columns:${h};gap:0 6px">
        ${$}
        ${y}
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
    </div>`}const ai=(e,i=40)=>e.length>i?e.slice(0,i-1)+"…":e;function Lo(e,i,t,o){Object.fromEntries(ye.map(r=>[r.id,r]));const n=[...e].sort((r,u)=>r.name.localeCompare(u.name,"fr")).map(r=>`<option value="p-${r.id}">${ai(At(r))}</option>`).join(""),a=i.map(r=>`<option value="s-${r.id}">${ai(Mt(r,e))}</option>`).join(""),s=`
    <optgroup label="Parcelles">${n}</optgroup>
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
    </div>`},p=t.slice(0,3).map(l).join(""),c=t.slice(3).map(l).join(""),d=ye.find(r=>r.id===(o==="admin"?100:1)),m=(d==null?void 0:d.adresse)||"";return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select">${m?`<option value="addr">${ai(`${d.name} — ${d.ville||m}`)}</option>`:""}${s}</select>
    <div class="m-prev-cards">
      ${p}
      <div class="m-prev-extra" style="display:none">${c}</div>
      <button class="m-prev-expand-btn">Voir les ${t.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const Ue=[{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:null},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:null},{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],Ws=new Set(Ue.flatMap(e=>e.needsModels||[]));function li(e){if(!e)return Ue;if(e.startsWith("s-")){const t=re.find(o=>o.id===+e.slice(2));return t?Ue.filter(o=>o.needsModels===null||o.needsModels.includes(t.model)):Ue}const i=new Set(re.filter(t=>t.parcelIds.includes(+e.slice(2))).map(t=>t.model));return Ue.filter(t=>t.needsModels===null||t.needsModels.some(o=>i.has(o)))}const is={etp:{icon:"bi-moisture",color:"#7DBDD7"},rayo:{icon:"bi-sun-fill",color:"#CBCB0B"},pluie:{icon:"bi-droplet-fill",color:"#2E75B6"},dj:{icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{icon:"bi-thermometer-low",color:"#FEE7B4"},humec:{icon:"bi-droplet-half",color:"#00887E"}};function Co(){return Ie.length?Ie.map((e,i)=>{const t=e.thresholds?e.metricId==="hf"?` · seuil < ${e.thresholds.cold}°C`:e.metricId==="dj"?` · ${e.thresholds.low}–${e.thresholds.high}°C`:"":"";return`<div class="m-cumuls-saved-card" style="position:relative">
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
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function ss(e,i,t){if(!e||!i)return null;const o=Ue.find(s=>s.id===t)||Ue[0],n=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),a=e.split("").reduce((s,l)=>s+l.charCodeAt(0),0)+n;return+(o.base+a%(o.amp*10)/10).toFixed(1)}function ns(e,i){const t=Ie.length>=Bt,o=`${new Date().getFullYear()}-01-01`,n=i.filter(p=>p.parcelIds.length>0&&Ws.has(p.model)),a=[...e].sort((p,c)=>p.name.localeCompare(c.name,"fr")).map(p=>`<option value="p-${p.id}">${At(p)}</option>`).join(""),s=n.map(p=>`<option value="s-${p.id}">${Mt(p,e)}</option>`).join("");return`
    <div id="cumuls-saved-list" style="display:flex;flex-direction:column;gap:8px">${Ie.length?Co():'<div class="m-wf-empty">Ajoutez ici les cumuls que vous souhaitez consulter très régulièrement</div>'}</div>
    <div class="m-list-section-header" style="margin-top:${Ie.length?"16px":"0"}"></div>
    ${t?`
    <div class="m-wf-max-msg">
      <i class="bi bi-slash-circle" style="font-size:18px;color:#8e8e93"></i>
      <div>
        <div style="font-weight:600;color:#1c1c1e;font-size:13px">Limite atteinte (${Bt}/${Bt})</div>
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
    </div>`}`}function Ao(e){const i=e.id,t=new Date;let o,n;i%5===3?(o=0,n=(t.getHours()+2+i%3*3)%24):(o=(i*2+1)%6+1,n=6+i%5*2);const a=2+i%3,s=new Date(t);s.setDate(s.getDate()+o);const l=o===0?"Aujourd'hui":s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),p=o*1440+n*60-(t.getHours()*60+t.getMinutes());return{winDateStr:l,winHour:n,winDur:a,minutesFromNow:p}}const Mo="#1a9e40";function To(e){const t=e.filter(n=>n.crop).map(n=>({p:n,d:Ao(n)})).filter(({d:n})=>n.minutesFromNow>=0&&n.minutesFromNow<=1440).sort((n,a)=>n.d.minutesFromNow-a.d.minutesFromNow);return t.length?`
    <div style="font-size:11px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Fenêtres météo favorables</div>
    <div style="margin-bottom:4px">${t.slice(0,10).map(({p:n,d:a})=>{const s=String(a.winHour).padStart(2,"0"),l=String((a.winHour+a.winDur)%24).padStart(2,"0");return`
      <div class="m-trait-card" data-plot-id="${n.id}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:12px;padding:11px 14px;margin-bottom:8px;cursor:pointer">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:600;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.name}</div>
            <div style="font-size:11px;color:#8e8e93;margin-top:1px">${n.crop}</div>
          </div>
          <div style="background:#edf7f0;color:${Mo};font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;display:flex;align-items:center;gap:4px;flex-shrink:0">
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
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 24h</div>'}const Gs="weenat-m-traitements";function wt(){try{return JSON.parse(localStorage.getItem(Gs))||[]}catch{return[]}}function qi(e){localStorage.setItem(Gs,JSON.stringify(e))}function Io(e,i){let t=new Set;const o=[],n=new Date().toISOString().split("T")[0];function a(){return Yt(o,e,t)}function s(c){const d=t.size,m=c.querySelector(".irr-summary"),v=c.querySelector(".irr-save-btn");!m||!v||(m.textContent=d===0?"":`${d} parcelle${d>1?"s":""}`,v.disabled=d===0)}function l(c){var d;(d=c.querySelector("#irr-sel-all"))==null||d.addEventListener("click",()=>{const m=e.every(v=>t.has(v.id));e.forEach(v=>m?t.delete(v.id):t.add(v.id)),c.querySelector("#trait-sel-list").innerHTML=a(),l(c),s(c)}),c.querySelectorAll(".irr-group-card").forEach(m=>{m.addEventListener("click",()=>{const v=m.dataset.gids.split(",").map(Number),r=v.every(u=>t.has(u));v.forEach(u=>r?t.delete(u):t.add(u)),c.querySelector("#trait-sel-list").innerHTML=a(),l(c),s(c)})}),c.querySelectorAll(".irr-plot-row").forEach(m=>{m.addEventListener("click",()=>{const v=+m.dataset.pid;t.has(v)?t.delete(v):t.add(v),c.querySelector("#trait-sel-list").innerHTML=a(),l(c),s(c)})})}const p=at(xe(`
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
  `));l(p),s(p),p.querySelector("#trait-back").addEventListener("click",fe),p.querySelector(".irr-save-btn").addEventListener("click",()=>{const c=p.querySelector("#trait-date").value||n,d=p.querySelector("#trait-produit").value.trim()||"—",m=p.querySelector("#trait-dose").value.trim()||"—",v=wt();v.unshift({id:Date.now(),date:c,produit:d,dose:m,plotIds:[...t]}),qi(v),fe(),i("Traitement enregistré")})}function qo(e,i,t){const o=i==="adherent"?Bs.adherent:null,n=o!==null?ce.filter(c=>c.orgId===o):ce;let a=null;const s=xe(`
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
    </div>`);s.querySelector(".m-detail-back").addEventListener("click",fe);const l=c=>{const[d,m,v]=c.split("-");return`${v}/${m}/${d}`};function p(){const c=s.querySelector("#trait-cal-content");let d=wt();if(a!==null&&(d=d.filter(m=>(m.plotIds||[]).includes(a))),!d.length){c.innerHTML='<div style="padding:32px 0;text-align:center;color:#8e8e93;font-size:14px">Aucun traitement enregistré</div>';return}c.innerHTML=d.map(m=>{const v=(m.plotIds||[]).map(r=>{var u;return(u=e.find(b=>b.id===r))==null?void 0:u.name}).filter(Boolean);return`
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
        </div>`}).join(""),c.querySelectorAll(".m-trait-cal-card").forEach(m=>{m.addEventListener("click",()=>{const v=+m.dataset.id,u=wt().find(h=>h.id===v);if(!u)return;const b=(u.plotIds||[]).map(h=>{var $;return($=e.find(E=>E.id===h))==null?void 0:$.name}).filter(Boolean),f=document.createElement("div");f.innerHTML=`
          <div style="padding:0 0 12px">
            <div style="font-size:12px;color:#8e8e93;margin-bottom:4px">${l(u.date)}</div>
            <div style="font-size:15px;font-weight:600;color:#1c1c1e;margin-bottom:2px">${u.produit}</div>
            <div style="font-size:13px;color:#636366;margin-bottom:6px"><i class="bi bi-eyedropper" style="color:#1a9e40"></i> ${u.dose}</div>
            ${b.length?`<div style="font-size:12px;color:#8e8e93">${b.join(", ")}</div>`:""}
          </div>
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="tcal-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="tcal-del">Supprimer</a>
          </div>`;const y=Ge({title:"Traitement",body:f,doneLabel:"Fermer",onDone:()=>{}});f.querySelector("#tcal-del").addEventListener("click",()=>{const h=wt().filter($=>$.id!==v);qi(h),y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{y.remove(),p()},280),t("Traitement supprimé")}),f.querySelector("#tcal-edit").addEventListener("click",()=>{y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>y.remove(),280),Po(u,e,t,p)})})})}s.querySelector("#trait-filter").addEventListener("change",c=>{a=c.target.value?+c.target.value:null,p()}),p()}function Po(e,i,t,o){const n=document.createElement("div");n.innerHTML=`
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
    </div>`,Ge({title:"Modifier le traitement",body:n,doneLabel:"Enregistrer",onDone:()=>{const a=wt(),s=a.findIndex(l=>l.id===e.id);s!==-1&&(a[s].date=n.querySelector("#tedit-date").value||e.date,a[s].produit=n.querySelector("#tedit-produit").value.trim()||e.produit,a[s].dose=n.querySelector("#tedit-dose").value.trim()||e.dose,qi(a)),t("Traitement modifié"),o()}})}const jo={"capteur déplacé":"M12 2c-2.117 0-3.98.741-5.588 2.225C4.803 5.708 4 7.699 4 10.199c0 1.6.6 3.322 1.8 5.164C7 17.205 8.818 19.2 11.25 21.35a1.2 1.2 0 0 0 .75.275 1.2 1.2 0 0 0 .75-.275c2.433-2.15 4.25-4.145 5.45-5.987C19.4 13.521 20 11.8 20 10.2c0-2.5-.803-4.491-2.412-5.974C15.98 2.74 14.117 2 12 2zm0 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 7v3a.969.969 0 0 1-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287A.966.966 0 0 1 11 10V7c0-.283.095-.52.287-.713A.969.969 0 0 1 12 6zm0 7a.97.97 0 0 1 .713.287c.191.192.287.43.287.713s-.096.522-.287.713c-.192.192-.43.287-.713.287s-.522-.095-.713-.287c-.192-.191-.287-.43-.287-.713s.095-.52.287-.713A.969.969 0 0 1 12 13z","émissions interrompues":"M19.075 21.9 8.125 10.975c-.033.167-.063.333-.087.5S8 11.817 8 12c0 .383.046.746.138 1.087.091.342.229.663.412.963.15.25.217.517.2.8a1.04 1.04 0 0 1-.3.7c-.2.2-.438.292-.713.275s-.487-.133-.637-.35c-.35-.5-.62-1.042-.813-1.625A5.889 5.889 0 0 1 6 12a5.985 5.985 0 0 1 .575-2.575L5.1 7.95c-.35.6-.62 1.238-.813 1.913A7.79 7.79 0 0 0 4 12a7.855 7.855 0 0 0 1.675 4.9c.183.233.27.487.262.762-.008.275-.112.513-.312.713a.916.916 0 0 1-1.375-.05c-.7-.867-1.25-1.837-1.65-2.913S2 13.2 2 12c0-1.033.146-2.008.437-2.925A10.71 10.71 0 0 1 3.65 6.5L2.075 4.925a.948.948 0 0 1-.275-.7c0-.283.1-.525.3-.725a.948.948 0 0 1 .7-.275c.283 0 .525.092.725.275l16.975 17c.183.183.275.417.275.7s-.092.517-.275.7c-.2.2-.442.3-.725.3s-.517-.1-.7-.3zm1.275-4.4-1.45-1.45c.35-.6.62-1.238.813-1.913S20 12.75 20 12a7.854 7.854 0 0 0-1.675-4.9c-.183-.233-.27-.487-.263-.762s.113-.513.313-.713a.916.916 0 0 1 1.375.05c.7.867 1.25 1.833 1.65 2.9.4 1.067.6 2.208.6 3.425 0 1.017-.146 1.988-.438 2.913S20.867 16.7 20.35 17.5zm-2.925-2.925-1.55-1.55c.033-.167.062-.333.087-.5S16 12.183 16 12c0-.383-.046-.746-.138-1.088s-.229-.662-.412-.962a1.367 1.367 0 0 1-.2-.8 1.04 1.04 0 0 1 .3-.7.93.93 0 0 1 .712-.287.76.76 0 0 1 .638.337c.35.483.62 1.025.813 1.625.191.6.287 1.225.287 1.875a5.985 5.985 0 0 1-.575 2.575z","capteur couché":"M6 5a2 2 0 0 0-2 2v2H3a1 1 0 0 0 0 2h1v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2h7a1 1 0 1 0 0-2h-7V7a2 2 0 0 0-2-2H6zm3 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2 16v2h20v-2H2z","cuillère bloquée":"M17.615 3.25c-.268 0-.537.103-.742.309L3.508 16.922a1.05 1.05 0 0 0 0 1.486l.031.027-.002.002.05.041c.459.438 1.055.718 1.733.813.678.094 1.416 0 2.139-.274a5.793 5.793 0 0 0 2.018-1.322 5.802 5.802 0 0 0 1.322-2.02c.411-1.087.411-2.189 0-3.074l7.558-7.558a1.047 1.047 0 0 0 0-1.485 1.046 1.046 0 0 0-.742-.308zm-1.037 8.416a.473.473 0 0 0-.35.137l-1.05 1.05a.435.435 0 0 0-.106.163.555.555 0 0 0-.031.187c0 .067.01.13.031.188.02.058.055.112.105.162l1.051 1.05a.473.473 0 0 0 .35.137.472.472 0 0 0 .488-.488.474.474 0 0 0-.138-.35l-.2-.199h.037c.834 0 1.542.292 2.125.875.584.584.875 1.292.875 2.125 0 .675-.198 1.274-.593 1.799a3.032 3.032 0 0 1-1.532 1.088.527.527 0 0 0-.267.187.465.465 0 0 0-.108.287c0 .167.06.3.176.4.117.1.254.13.412.089a3.912 3.912 0 0 0 2.1-1.426 3.882 3.882 0 0 0 .812-2.424c0-1.116-.387-2.063-1.162-2.838-.775-.775-1.72-1.162-2.838-1.162h-.037l.2-.201a.474.474 0 0 0 .138-.35.473.473 0 0 0-.488-.486zm-2.563 2.344a.462.462 0 0 0-.337.156c-.292.358-.516.75-.674 1.18-.159.429-.239.882-.239 1.357 0 .917.271 1.728.813 2.432a3.922 3.922 0 0 0 2.1 1.418.442.442 0 0 0 .414-.082.479.479 0 0 0 .173-.393.532.532 0 0 0-.375-.488 2.946 2.946 0 0 1-1.53-1.08 2.939 2.939 0 0 1-.595-1.807c0-.341.054-.666.163-.974.108-.309.262-.594.462-.852a.565.565 0 0 0 .131-.375.477.477 0 0 0-.142-.336.48.48 0 0 0-.364-.156z"},os=new Set(["P+","PT","P"]);function At(e){return[e.name,e.crop].filter(Boolean).join(" — ")}function Mt(e,i){var a,s;const t=Object.fromEntries(ye.map(l=>[l.id,l])),o=Us[e.model]||e.model,n=((a=(e.parcelIds||[]).map(l=>i.find(p=>p.id===l)).filter(Boolean).find(l=>l.ville))==null?void 0:a.ville)||((s=t[e.orgId])==null?void 0:s.ville)||"";return[o,e.serial,n].filter(Boolean).join(" — ")}const Us={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"};function zo(e,i){const t=Object.fromEntries(ye.map(n=>[n.id,n])),o=i.filter(n=>n.event?(Array.isArray(n.event)?n.event:[n.event]).filter(l=>l!=="cuillère bloquée"||os.has(n.model)).length>0:!1);return o.length?`<div class="m-w-list">${o.map(n=>{var d;const a=e.find(m=>(n.parcelIds||[]).includes(m.id)),s=(a==null?void 0:a.ville)||((d=t[n.orgId])==null?void 0:d.ville)||"",p=(Array.isArray(n.event)?n.event:[n.event]).filter(m=>m!=="cuillère bloquée"||os.has(n.model)).map(m=>{const v=jo[m]||"";return`<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:#ff3b30;border-radius:6px;flex-shrink:0" title="${m}"><svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="${v}"/></svg></span>`}).join(""),c=Us[n.model]||n.model;return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${n.id}">
      <div style="flex:1;min-width:0">
        <div class="m-w-row-name">${c}</div>
        <div style="font-size:12px;color:#636366;margin-top:1px">${n.model} — ${n.serial}</div>
        ${s?`<div style="font-size:11px;color:#8e8e93;margin-top:1px">${s}</div>`:""}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;margin-left:12px">
        <div style="display:flex;flex-wrap:wrap;gap:5px;width:61px;justify-content:flex-end">${p}</div>
        <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
      </div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const Ys={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},Do={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function Fo(e){const i=e.id,t=Ys[e.crop]||Do,o=i%t.stages.length,n=(i*2+5)%18+4,a=new Date("2026-04-18");a.setDate(a.getDate()+n);const s=a.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:t.stages[o],nextStage:t.nextStages[o],variety:t.varieties[i%t.varieties.length],nextDateStr:s,daysToNext:n}}function _o(e){const i=e.filter(n=>n.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const t={};for(const n of i)t[n.crop]||(t[n.crop]=[]),t[n.crop].push(n);return`<div class="m-widget-hint">Sélectionnez une culture, puis sur une parcelle pour renseigner ou mettre à jour les stades phénologiques.</div>
    ${Object.entries(t).map(([n,a])=>{const s=a.map(l=>{const p=!!Ys[l.crop],c=p?Fo(l):null,d=p&&c.variety!=="—"?c.variety:"",m=p?c.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${l.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${l.name}</div>
          ${d?`<div class="m-w-row-sub">${d}</div>`:""}
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
    </details>`}).join("")}`}const Zs="weenat-m-notes";function et(){try{return JSON.parse(localStorage.getItem(Zs))||[]}catch{return[]}}function ri(e){localStorage.setItem(Zs,JSON.stringify(e))}function as(e){const i=et(),t=y=>{const[h,$,E]=y.split("-");return`${E}/${$}/${h}`},o=y=>y.length>70?y.slice(0,70)+"…":y,n=(y,h)=>{const $=y.text.length>70,E=(y.imageIds||[]).length,P=E>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${E} photo${E>1?"s":""}</span>`:"",L=y.linkedType?`<span style="font-size:10px;background:${y.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${y.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${y.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${y.linkedName||""}</span>`:"";return`
      <div class="m-note-card" data-idx="${h}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:${$||E>0||y.linkedType?"pointer":"default"}">
        <button class="m-note-del m-del-btn" data-idx="${h}" style="position:absolute;top:8px;right:8px">×</button>
        <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <span>${t(y.date)}${y.time?" · "+y.time:""}</span>
          ${y.auteur?`<span style="color:#636366;font-weight:500">${y.auteur}</span>`:""}
          ${y.role?`<span style="font-size:10px;background:${y.role==="conseiller"?"#eef4ff":"#f2f2f7"};color:${y.role==="conseiller"?"#3a7bd5":"#636366"};border-radius:4px;padding:1px 5px;font-weight:500">${y.role==="conseiller"?"Conseiller":"Membre"}</span>`:""}
        </div>
        <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${o(y.text)}</div>
        ${L||P?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${L}${P}</div>`:""}
      </div>`},a=i.slice(0,5),s=a.length?a.map((y,h)=>n(y,h)).join(""):"",l=new Date,p=l.toISOString().slice(0,10),c=`${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`,d=ye.find(y=>y.id===(e==="admin"?100:1)),m=d?`${d.prenomProprietaire} ${d.nomProprietaire}`:"",v=d==null?void 0:d.id,r=e==="adherent"?ce.filter(y=>y.orgId===v):ce,u=e==="adherent"?re.filter(y=>y.parcelIds.some(h=>r.some($=>$.id===h))):re,b=[...r].sort((y,h)=>y.name.localeCompare(h.name,"fr")).map(y=>`<option value="p-${y.id}">${At(y)}</option>`).join(""),f=u.map(y=>`<option value="s-${y.id}">${Mt(y,r)}</option>`).join("");return`
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
    <button id="notes-view" class="m-btn m-btn--secondary">Voir les notes${i.length?` (${i.length})`:""}</button>`}function Ho(e){const i=ce.map(n=>n.orgId).filter((n,a,s)=>s.indexOf(n)===a&&n!==100).length,t=re.length,o=ce.length;return`
    <div class="m-reseau-name">${Ne.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Capteurs</span></div>
      <div class="m-reseau-stat"><strong>${o}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Adhérents</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${Ne.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${Ne.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${Ne.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${Ne.siege.adresse}, ${Ne.siege.codePostal} ${Ne.siege.ville}</span></div>
    </div>
    ${e==="admin"?'<div style="padding:10px 16px;font-size:12px;color:#8e8e93;text-align:center;border-top:.5px solid rgba(0,0,0,.08)">Infos modifiables sur la version web.</div>':""}`}function Bo(){return`
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
    </a>`}const ls=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function Ro(){var c;const e=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,e.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const t=i.querySelector("#chat-messages"),o=i.querySelector("#chat-input"),n=i.querySelector("#chat-send"),a=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",a),i.addEventListener("click",d=>{d.target===i&&a()});function s(d,m){const v=document.createElement("div");v.className=`m-chat-msg m-chat-msg--${m}`,v.innerHTML=`<div class="m-chat-bubble">${d}</div>`,t.appendChild(v),t.scrollTop=t.scrollHeight}function l(){const d=document.createElement("div");return d.className="m-chat-msg m-chat-msg--bot m-chat-typing",d.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',t.appendChild(d),t.scrollTop=t.scrollHeight,d}function p(){const d=o.value.trim();if(!d)return;s(d,"user"),o.value="",n.disabled=!0;const m=l();setTimeout(()=>{m.remove();const v=ls[Math.floor(Math.random()*ls.length)];s(v,"bot"),n.disabled=!1,o.focus()},1200+Math.random()*800)}n.addEventListener("click",p),o.addEventListener("keydown",d=>{d.key==="Enter"&&p()}),setTimeout(()=>o.focus(),350)}function Oo(e,i){let t=e.querySelector("#dashboard-content");t||(t=document.createElement("div"),t.id="dashboard-content",e.appendChild(t));const o=Bs[i]||1,n=i==="new"||i==="new-adherent"?[]:o===100?ce:ce.filter(k=>k.orgId===o),a=new Set(n.map(k=>k.id)),s=i==="new"||i==="new-adherent"?[]:re.filter(k=>k.parcelIds.some(w=>a.has(w)));let l=Zi(),p=null,c=null;function d(){return i!=="admin"?n:p===null?ce:ce.filter(k=>k.orgId===p)}function m(){return i!=="admin"?"":`<select id="bh-org-select" style="width:100%;padding:8px 10px;border:none;border-bottom:.5px solid rgba(0,0,0,.1);background:#f9f9fb;font-size:14px;font-family:inherit;color:#1c1c1e;outline:none;margin-bottom:10px">
      <option value="all">Toutes les organisations</option>
      <option value="100">Breiz'Agri Conseil</option>
      ${ye.filter(w=>w.id!==100).sort((w,x)=>w.name.localeCompare(x.name)).map(w=>`<option value="${w.id}">${w.name}</option>`).join("")}
    </select>`}const v=ut(),r=new Set(["mon_reseau","support"]),u=new Set(v.collapsed??Se.map(k=>k.id).filter(k=>!r.has(k)));function b(){xt({catalog:Se.map(k=>({id:k.id,active:k.active})),collapsed:[...u],mesuresList:Te,cumulsList:Ie})}function f(){return`
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
      </div>`}function h(){const k=window.L;k&&setTimeout(()=>{const w=t.querySelector("#radar-map");if(!w||c)return;const x=n[0]?[n[0].lat,n[0].lng]:[47.5,-1.5];c=k.map(w,{zoomControl:!0,attributionControl:!1,tap:!1}).setView(x,7),k.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:14}).addTo(c);const g=t.querySelector("#radar-slider"),q=t.querySelector("#radar-time-lbl"),j=t.querySelector("#radar-play-btn"),C=t.querySelector("#radar-loading");let F=[],D=0,M=0,R=null,G=!1,oe=null;function Z(ae){if(!F.length)return;R&&c.removeLayer(R);const me=F[ae];R=k.tileLayer(`https://tilecache.rainviewer.com${me.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:.65,zIndex:10}).addTo(c);const Ee=new Date(me.time*1e3);q.textContent=Ee.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),q.style.color=ae>=D?"#007aff":"#8e8e93",g.value=ae}g.addEventListener("input",()=>{M=+g.value,Z(M)}),j.addEventListener("click",()=>{G=!G,j.innerHTML=G?'<i class="bi bi-pause-fill"></i>':'<i class="bi bi-play-fill"></i>',G?oe=setInterval(()=>{M=(M+1)%F.length,Z(M)},500):clearInterval(oe)}),fetch("https://api.rainviewer.com/public/weather-maps.json").then(ae=>ae.json()).then(ae=>{var ze,Ve;C==null||C.remove();const me=((ze=ae.radar)==null?void 0:ze.past)||[],Ee=((Ve=ae.radar)==null?void 0:Ve.nowcast)||[];F=[...me,...Ee],D=me.length,F.length&&(g.max=F.length-1,M=Math.max(0,D-1),Z(M))}).catch(()=>{C&&(C.textContent="Radar indisponible")})},50)}function $(k,w){const x=k.fixed?"":`<button class="m-widget-menu" data-widget="${k.id}" type="button">•••</button>`,g=u.has(k.id);return`
      <div class="m-widget${g?" m-widget--collapsed":""}" data-widget="${k.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${k.id}">
          <div class="m-widget-icon-wrap" style="background:${k.color}20;color:${k.color}">
            <i class="bi ${k.icon}"></i>
          </div>
          <span class="m-widget-title">${k.title}</span>
          ${k.info?`<button class="m-widget-info" data-widget="${k.id}" type="button"><i class="bi bi-info-circle"></i></button>`:""}
          <i class="bi ${g?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${k.fixed?"0":"8px"}"></i>
          ${x}
        </div>
        <div class="m-widget-bd" style="${g?"display:none":""}">${w}</div>
      </div>`}function E(){c==null||c.remove(),c=null,l=Zi();const k=new Set(["previsions","support"]),w=Se.filter(g=>g.active&&!g.fixed&&(i!=="new"||k.has(g.id))),x=Se.filter(g=>g.active&&g.fixed&&(i!=="new"||k.has(g.id)));t.innerHTML=`
      ${i==="new"?f():'<button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>'}
      ${[...w,...x].map(g=>{let q="";return g.id==="bilan_hydrique"?q=m()+vt(d()):g.id==="previsions"?q=Lo(n,s,l,i):g.id==="cumuls"?q=ns(n,s):g.id==="temps_reel"?q=es(n,s):g.id==="traitements"?q=To(n):g.id==="evenements"?q=zo(n,s):g.id==="cultures"?q=_o(n):g.id==="notes"?q=as(i):g.id==="radar_pluie"?q=y():g.id==="irrelis"?q=Eo(n):g.id==="mon_reseau"?q=Ho(i):g.id==="support"&&(q=Bo()),$(g,q)}).join("")}
      <div style="height:24px"></div>`,z(),u.has("radar_pluie")||h()}const P='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function L(k,w,x=""){const g=k[w],q=`${g.dayLabel.charAt(0).toUpperCase()+g.dayLabel.slice(1)} · ${g.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${P}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${w===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px">
            <i class="bi ${g.icon}" style="color:${g.color};font-size:22px"></i>
            <div>
              <span class="m-d-name">${q}</span>
              ${x?`<div style="font-size:12px;color:#8e8e93;margin-top:1px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</div>`:""}
            </div>
          </div>
          <button class="m-day-nav" id="next-day" ${w>=k.length-1?"disabled":""}>›</button>
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
            ${g.hours.map((j,C)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${C<g.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${j.label}</span>
                <i class="bi ${j.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${j.pluie>0?`${j.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${j.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${j.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${j.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function S(k,w,x,g=""){var q,j;k.querySelector(".m-detail-back").addEventListener("click",fe),(q=k.querySelector("#prev-day"))==null||q.addEventListener("click",()=>{k.innerHTML=L(w,x-1,g),S(k,w,x-1,g)}),(j=k.querySelector("#next-day"))==null||j.addEventListener("click",()=>{k.innerHTML=L(w,x+1,g),S(k,w,x+1,g)})}function H(k,w,x=""){const g=xe(L(k,w,x));S(g,k,w,x)}function z(){var me,Ee,ze,Ve,Qe,qt,Je;(me=e.querySelector(".m-navbar-action"))==null||me.addEventListener("click",I),(Ee=t.querySelector("#dash-add-widget-btn"))==null||Ee.addEventListener("click",T),(ze=t.querySelector('[data-action="add-parcel"]'))==null||ze.addEventListener("click",()=>Zn(()=>E())),(Ve=t.querySelector('[data-action="add-sensor"]'))==null||Ve.addEventListener("click",()=>Kn(()=>E())),t.querySelectorAll(".m-widget-info").forEach(V=>{V.addEventListener("click",se=>{se.stopPropagation();const X=Se.find(ie=>ie.id===V.dataset.widget);X&&fo(X.title,X.info,X.gif)})}),t.querySelectorAll(".m-widget-hd--toggle").forEach(V=>{V.addEventListener("click",se=>{if(se.target.closest(".m-widget-menu")||se.target.closest(".m-widget-info"))return;const X=V.dataset.collapse;u.has(X)?u.delete(X):u.add(X),b(),E()})}),(Qe=t.querySelector("#trait-btn-saisir"))==null||Qe.addEventListener("click",()=>{Io(n,We)}),(qt=t.querySelector("#trait-btn-voir"))==null||qt.addEventListener("click",()=>{qo(n,i,We)}),t.querySelectorAll(".m-trait-card").forEach(V=>{V.addEventListener("click",()=>{const se=ce.find(X=>X.id===+V.dataset.plotId);if(se){const X=re.filter(ie=>ie.parcelIds.includes(se.id)).map(ie=>ie.id);ge(()=>Promise.resolve().then(()=>dt),void 0).then(ie=>ie.initParcelDetail(se,X,"widgets","Tableau de bord"))}})}),t.querySelectorAll("[data-sensor-id]").forEach(V=>{V.addEventListener("click",()=>{const se=s.find(X=>X.id===+V.dataset.sensorId);se&&ge(()=>Promise.resolve().then(()=>Ai),void 0).then(X=>X.initSensorDetail(se,"params"))})}),t.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(V=>{V.addEventListener("click",()=>{const se=ce.find(X=>X.id===+V.dataset.plotId);if(se){const X=re.filter(ie=>ie.parcelIds.includes(se.id)).map(ie=>ie.id);ge(()=>Promise.resolve().then(()=>dt),void 0).then(ie=>ie.initParcelDetail(se,X,"params","Tableau de bord"))}})});function k(){t.querySelectorAll(".m-bh-plot-link").forEach(V=>{V.addEventListener("click",()=>{const se=ce.find(X=>X.id===+V.dataset.plotId);if(se){const X=re.filter(ie=>ie.parcelIds.includes(se.id)).map(ie=>ie.id);ge(()=>Promise.resolve().then(()=>dt),void 0).then(ie=>{ie.initParcelDetail(se,X,"widgets","Tableau de bord"),setTimeout(()=>{var Le;(Le=document.querySelector('[data-widget-id="irrigations"]'))==null||Le.scrollIntoView({behavior:"smooth",block:"start"})},150)})}})})}function w(){var V,se,X;(V=t.querySelector("#bh-btn-calendar"))==null||V.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>st),void 0).then(ie=>ie.openCalendar(n,""))}),(se=t.querySelector("#bh-btn-irrigation"))==null||se.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>st),void 0).then(ie=>ie.openIrrigationSaisie(n,We))}),(X=t.querySelector("#bh-btn-strategie"))==null||X.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>st),void 0).then(ie=>ie.openIrrigationStrategie(n,We))})}function x(){const V=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');V&&(V.innerHTML=m()+vt(d()),k(),w(),g(),q(),i==="admin"&&j())}function g(){const V=t.querySelector("#bh-expand");V&&V.addEventListener("click",()=>{const se=V.dataset.expanded==="true",X=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');X&&(X.innerHTML=m()+vt(d(),!se),k(),w(),g(),q(),i==="admin"&&j())})}function q(){const V=t.querySelector("#bh-advisor-cb");V&&V.addEventListener("change",()=>{xt({irrigAdvisor:V.checked}),x()})}function j(){const V=t.querySelector("#bh-org-select");V&&(V.value=p===null?"all":String(p),V.addEventListener("change",()=>{p=V.value==="all"?null:+V.value,x()}))}k(),w(),g(),q(),i==="admin"&&j(),t.querySelectorAll('[data-widget="irrelis"] .m-il-row').forEach(V=>{V.addEventListener("click",()=>{const se=ce.find(X=>X.id===+V.dataset.ilPlot);se&&ge(()=>Promise.resolve().then(()=>Hs),void 0).then(X=>X.openIrrelisDetail(se))})});function C(){const V=t.querySelector('[data-widget="cumuls"] .m-widget-bd');V&&(V.innerHTML=ns(n,s),F())}Ot=C;function F(){var N,J,W,O;const V=()=>{var K;const _=(K=t.querySelector("#cumuls-metric"))==null?void 0:K.value,B=t.querySelector("#cumuls-thresholds");B&&(_==="hf"?B.innerHTML=`
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
            </div>`:B.innerHTML="")},se=()=>{var U;const _=t.querySelector("#cumuls-metric"),B=(U=t.querySelector("#cumuls-subject"))==null?void 0:U.value;if(!_)return;const K=li(B);_.innerHTML='<option value="">— Métrique —</option>'+K.map(ne=>`<option value="${ne.id}">${ne.label}</option>`).join(""),_.disabled=!B||!K.length,V(),X()},X=()=>{var be,le,de;const _=t.querySelector("#cumuls-create"),B=t.querySelector("#cumuls-date-err"),K=(be=t.querySelector("#cumuls-subject"))==null?void 0:be.value,U=(le=t.querySelector("#cumuls-from"))==null?void 0:le.value,ne=(de=t.querySelector("#cumuls-metric"))==null?void 0:de.value,te=U?(Date.now()-new Date(U))/864e5>365:!1;B&&(B.style.display=te?"":"none"),_&&(_.disabled=!K||!U||!ne||te)};(N=t.querySelector("#cumuls-subject"))==null||N.addEventListener("change",()=>{se(),X()}),(J=t.querySelector("#cumuls-from"))==null||J.addEventListener("change",X),(W=t.querySelector("#cumuls-metric"))==null||W.addEventListener("change",()=>{V(),X()}),(O=t.querySelector("#cumuls-create"))==null||O.addEventListener("click",()=>{var le,de,he,we,ke,$e;const _=t.querySelector("#cumuls-subject"),B=_==null?void 0:_.value,K=(le=t.querySelector("#cumuls-from"))==null?void 0:le.value,U=(de=t.querySelector("#cumuls-metric"))==null?void 0:de.value;if(!B||!K||!U)return;const ne=Ue.find(Q=>Q.id===U),te=is[U]||{icon:"bi-bar-chart-fill",color:"#636366"},be=U==="hf"?{cold:+(((he=t.querySelector("#cumuls-th-cold"))==null?void 0:he.value)??7.2)}:U==="dj"?{low:+(((we=t.querySelector("#cumuls-th-low"))==null?void 0:we.value)??0),high:+(((ke=t.querySelector("#cumuls-th-high"))==null?void 0:ke.value)??18)}:null;Ie.push({metricId:U,metricLabel:(ne==null?void 0:ne.label)||U,unit:(ne==null?void 0:ne.unit)||"",icon:te.icon,color:te.color,subjectKey:B,subjectLabel:((($e=_.options[_.selectedIndex])==null?void 0:$e.text)||B).trim(),fromDate:K,value:String(ss(B,K,U)??"—"),thresholds:be}),b(),C()}),t.querySelectorAll(".m-cumuls-del").forEach(_=>{_.addEventListener("click",()=>{Ie.splice(+_.dataset.cidx,1),b(),C()})}),t.querySelectorAll(".m-cumuls-edit").forEach(_=>{_.addEventListener("click",()=>Le(+_.dataset.cidx))});function ie(_,B={}){return _==="hf"?`
          <div class="m-wf-field">
            <span class="m-wf-label">Seuil de froid (°C)</span>
            <input type="number" class="m-wf-date" id="cedit-th-cold" value="${B.cold??7.2}" step="0.1" min="-20" max="20">
          </div>`:_==="dj"?`
          <div class="m-wf-row">
            <div class="m-wf-field"><span class="m-wf-label">Seuil bas (°C)</span><input type="number" class="m-wf-date" id="cedit-th-low" value="${B.low??0}" step="1" min="-20" max="50"></div>
            <div class="m-wf-field"><span class="m-wf-label">Seuil haut (°C)</span><input type="number" class="m-wf-date" id="cedit-th-high" value="${B.high??18}" step="1" min="0" max="50"></div>
          </div>`:""}function Le(_){const B=Ie[_];if(!B)return;const K=s.filter(de=>de.parcelIds.length>0&&Ws.has(de.model)),U=[...n].sort((de,he)=>de.name.localeCompare(he.name,"fr")).map(de=>`<option value="p-${de.id}"${B.subjectKey===`p-${de.id}`?" selected":""}>${At(de)}</option>`).join(""),ne=K.map(de=>`<option value="s-${de.id}"${B.subjectKey===`s-${de.id}`?" selected":""}>${Mt(de,n)}</option>`).join(""),be=li(B.subjectKey).map(de=>`<option value="${de.id}"${B.metricId===de.id?" selected":""}>${de.label}</option>`).join(""),le=document.createElement("div");le.style.cssText="display:flex;flex-direction:column;gap:10px;padding:4px 0",le.innerHTML=`
          <select class="m-wf-sel" id="cedit-subject">
            <option value="">— Parcelle ou capteur —</option>
            <optgroup label="Parcelles">${U}</optgroup>
            ${ne?`<optgroup label="Capteurs">${ne}</optgroup>`:""}
          </select>
          <select class="m-wf-sel" id="cedit-metric">
            <option value="">— Métrique —</option>${be}
          </select>
          <div id="cedit-thresholds">${ie(B.metricId,B.thresholds)}</div>
          <div class="m-wf-field">
            <span class="m-wf-label">Depuis le</span>
            <input type="date" class="m-wf-date" id="cedit-from" value="${B.fromDate}">
          </div>`,le.querySelector("#cedit-subject").addEventListener("change",()=>{const de=le.querySelector("#cedit-subject").value,he=le.querySelector("#cedit-metric"),we=li(de);he.innerHTML='<option value="">— Métrique —</option>'+we.map(ke=>`<option value="${ke.id}">${ke.label}</option>`).join(""),le.querySelector("#cedit-thresholds").innerHTML=""}),le.querySelector("#cedit-metric").addEventListener("change",()=>{le.querySelector("#cedit-thresholds").innerHTML=ie(le.querySelector("#cedit-metric").value)}),Ge({title:"Modifier le cumul",body:le,doneLabel:"Enregistrer",onDone:()=>{var Pe,De,mt,lt;const de=le.querySelector("#cedit-subject").value||B.subjectKey,he=le.querySelector("#cedit-metric").value||B.metricId,we=le.querySelector("#cedit-from").value||B.fromDate;if(!de||!he||!we)return;if((Date.now()-new Date(we))/864e5>365){We("Date trop ancienne (max 365 jours)");return}const $e=Ue.find(Pt=>Pt.id===he),Q=is[he]||{icon:"bi-bar-chart-fill",color:"#636366"},ee=le.querySelector("#cedit-subject"),ve=he==="hf"?{cold:+(((Pe=le.querySelector("#cedit-th-cold"))==null?void 0:Pe.value)??7.2)}:he==="dj"?{low:+(((De=le.querySelector("#cedit-th-low"))==null?void 0:De.value)??0),high:+(((mt=le.querySelector("#cedit-th-high"))==null?void 0:mt.value)??18)}:null;Ie[_]={...B,metricId:he,metricLabel:($e==null?void 0:$e.label)||he,unit:($e==null?void 0:$e.unit)||"",icon:Q.icon,color:Q.color,subjectKey:de,subjectLabel:(((lt=ee.options[ee.selectedIndex])==null?void 0:lt.text)||de).trim(),fromDate:we,value:String(ss(de,we,he)??"—"),thresholds:ve},b(),C()}})}}F(),(Je=t.querySelector("#open-chat-btn"))==null||Je.addEventListener("click",Ro);function D(){const V=t.querySelector('[data-widget="notes"] .m-widget-bd');V&&(V.innerHTML=as(i),R())}let M=[];function R(){var N,J;M=[];const V=t.querySelector("#notes-img-input"),se=t.querySelector("#notes-img-btn"),X=t.querySelector("#notes-previews"),ie=t.querySelector("#notes-img-error");V&&se&&X&&window.setupImgUpload&&window.setupImgUpload(V,se,X,ie,M),(N=t.querySelector("#notes-add"))==null||N.addEventListener("click",async()=>{var de,he,we,ke,$e,Q;const W=(de=t.querySelector("#notes-input"))==null?void 0:de.value.trim(),O=((he=t.querySelector("#notes-date"))==null?void 0:he.value)||new Date().toISOString().slice(0,10),_=((we=t.querySelector("#notes-time"))==null?void 0:we.value)||"",B=((ke=t.querySelector("#notes-auteur"))==null?void 0:ke.value)||"";if(!W)return;const K=(($e=t.querySelector("#notes-link"))==null?void 0:$e.value)||"";let U=null,ne=null,te="";if(K.startsWith("p-"))U="parcel",ne=+K.slice(2),te=((Q=ce.find(ee=>ee.id===ne))==null?void 0:Q.name)||"";else if(K.startsWith("s-")){U="sensor",ne=+K.slice(2);const ee=re.find(ve=>ve.id===ne);te=ee?ee.serial:""}const be=[];if(M.length&&window.ImageStore)for(const ee of M){const ve=`note-img-${Date.now()}-${Math.random().toString(36).slice(2)}`;await window.ImageStore.store(ve,ee),be.push(ve)}const le=et();le.unshift({date:O,time:_,text:W,auteur:B,role:"membre",imageIds:be,linkedType:U,linkedId:ne,linkedName:te}),ri(le),t.querySelector("#notes-input").value="",D()}),(J=t.querySelector("#notes-view"))==null||J.addEventListener("click",()=>{const W=K=>{const[U,ne,te]=K.split("-");return`${te}/${ne}/${U}`},O=K=>K.length>70?K.slice(0,70)+"…":K,_=document.createElement("div");function B(){const K=et();if(!K.length){_.innerHTML='<div style="padding:24px;text-align:center;color:#8e8e93;font-size:14px">Aucune note</div>';return}_.innerHTML=K.map((U,ne)=>{const te=(U.imageIds||[]).length,be=U.linkedType?`<span style="font-size:10px;background:${U.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${U.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:1px 6px;display:inline-flex;align-items:center;gap:3px"><i class="bi bi-${U.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${U.linkedName||""}</span>`:"";return`
              <div class="m-note-card" data-idx="${ne}" style="background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;cursor:pointer">
                <button class="m-note-del m-del-btn" data-idx="${ne}" style="position:absolute;top:8px;right:8px">×</button>
                <div style="font-size:11px;color:#8e8e93;margin-bottom:3px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${W(U.date)}${U.time?" · "+U.time:""}</span>
                  ${U.auteur?`<span style="color:#636366;font-weight:500">${U.auteur}</span>`:""}
                </div>
                <div style="font-size:13px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word">${O(U.text)}</div>
                ${be||te>0?`<div style="margin-top:6px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${be}${te>0?`<span style="font-size:11px;color:#636366"><i class="bi bi-image"></i> ${te} photo${te>1?"s":""}</span>`:""}</div>`:""}
              </div>`}).join(""),_.querySelectorAll(".m-note-del").forEach(U=>{U.addEventListener("click",async ne=>{var de;ne.stopPropagation();const te=et(),be=+U.dataset.idx,le=te[be];(de=le==null?void 0:le.imageIds)!=null&&de.length&&window.ImageStore&&await window.ImageStore.remove(le.imageIds),te.splice(be,1),ri(te),B(),D()})}),_.querySelectorAll(".m-note-card").forEach(U=>{U.addEventListener("click",async()=>{const te=et()[+U.dataset.idx];if(!te)return;const be=te.linkedType?`<span style="font-size:11px;background:${te.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${te.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${te.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${te.linkedName||""}</span>`:"",le=document.createElement("div");if(le.innerHTML=`
                <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
                  <span>${W(te.date)}${te.time?" · "+te.time:""}</span>
                  ${te.auteur?`<span style="color:#636366;font-weight:500">${te.auteur}</span>`:""}
                  ${be}
                </div>
                <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${te.text}</div>
                ${(te.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ge({title:"Note",body:le,doneLabel:"Fermer",onDone:()=>{}}),(te.imageIds||[]).length&&window.ImageStore){const de=le.querySelector("#note-detail-photos");for(const he of te.imageIds){const we=await window.ImageStore.get(he);if(!we)continue;const ke=document.createElement("div");ke.className="jrn-img-thumb-wrap";const $e=document.createElement("img");$e.className="jrn-img-thumb",$e.src=we,$e.alt="",$e.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(we)}),ke.appendChild($e),de.appendChild(ke)}}})})}B(),Ge({title:"Notes",body:_,doneLabel:"Fermer",onDone:()=>{}})});const Le=W=>{const[O,_,B]=W.split("-");return`${B}/${_}/${O}`};t.querySelectorAll("#notes-list .m-note-del").forEach(W=>{W.addEventListener("click",async O=>{var U;O.stopPropagation();const _=et(),B=+W.dataset.idx,K=_[B];(U=K==null?void 0:K.imageIds)!=null&&U.length&&window.ImageStore&&await window.ImageStore.remove(K.imageIds),_.splice(B,1),ri(_),D()})}),t.querySelectorAll("#notes-list .m-note-card").forEach(W=>{W.addEventListener("click",async()=>{const _=et()[+W.dataset.idx];if(!_)return;const B=_.linkedType?`<span style="font-size:11px;background:${_.linkedType==="parcel"?"#eef4ff":"#f0faf0"};color:${_.linkedType==="parcel"?"#3a7bd5":"#2a7a3a"};border-radius:4px;padding:2px 7px;display:inline-flex;align-items:center;gap:4px"><i class="bi bi-${_.linkedType==="parcel"?"geo-alt":"broadcast"}"></i>${_.linkedName||""}</span>`:"",K=document.createElement("div");if(K.innerHTML=`
            <div style="font-size:11px;color:#8e8e93;margin-bottom:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <span>${Le(_.date)}${_.time?" · "+_.time:""}</span>
              ${_.auteur?`<span style="color:#636366;font-weight:500">${_.auteur}</span>`:""}
              ${B}
            </div>
            <div style="font-size:14px;color:#1c1c1e;white-space:pre-wrap;word-break:break-word;line-height:1.5">${_.text}</div>
            ${(_.imageIds||[]).length?'<div style="margin-top:14px"><div class="jrn-img-previews" id="note-detail-photos"></div></div>':""}`,Ge({title:"Note",body:K,doneLabel:"Fermer",onDone:()=>{}}),(_.imageIds||[]).length&&window.ImageStore){const U=K.querySelector("#note-detail-photos");for(const ne of _.imageIds){const te=await window.ImageStore.get(ne);if(!te)continue;const be=document.createElement("div");be.className="jrn-img-thumb-wrap";const le=document.createElement("img");le.className="jrn-img-thumb",le.src=te,le.alt="",le.addEventListener("click",()=>{window.openLightbox&&window.openLightbox(te)}),be.appendChild(le),U.appendChild(be)}}})})}R();function G(){t.querySelectorAll(".m-tr-chart-wrap").forEach(V=>{const se=V.querySelector(".m-tr-cursor"),X=V.querySelector(".m-tr-tooltip");if(!X)return;const ie=JSON.parse(V.dataset.series||"[]"),Le=V.dataset.unit||"",N=ie.length,J=26,W=270;V.addEventListener("pointermove",O=>{const _=V.getBoundingClientRect(),B=Math.max(0,Math.min(((O.clientX-_.left)*(J+W)/_.width-J)/W,1)),K=ie[Math.round(B*(N-1))]??null;if(se){const U=J+Math.round(B*W);se.setAttribute("x1",U),se.setAttribute("x2",U),se.setAttribute("opacity","1")}X.style.display="",X.style.left=`${Math.max(0,Math.min(O.clientX-_.left-24,_.width-60))}px`,X.textContent=K!==null?`${(+K).toFixed(1)} ${Le}`:"—"}),V.addEventListener("pointerleave",()=>{X.style.display="none",se==null||se.setAttribute("opacity","0")})})}function oe(){const V=t.querySelector('[data-widget="temps_reel"] .m-widget-bd');V&&(V.innerHTML=es(n,s),Z())}Rt=oe;function Z(){var ie,Le,N,J,W;const V=()=>{var _,B;const O=t.querySelector("#msr-create");O&&(O.disabled=!((_=t.querySelector("#msr-subject"))!=null&&_.value)||!((B=t.querySelector("#msr-metric"))!=null&&B.value)||Te.length>=$t)},se=()=>{var K;const O=t.querySelector("#msr-metric"),_=(K=t.querySelector("#msr-subject"))==null?void 0:K.value;if(!O)return;const B=go(_,s);O.innerHTML='<option value="">— Métrique —</option>'+B.map(U=>`<option value="${U}">${xi[U]}</option>`).join(""),O.disabled=!_||!B.length,V()},X=()=>{var B;const O=t.querySelector("#msr-step"),_=((B=t.querySelector("#msr-period"))==null?void 0:B.value)||"7d";O&&(O.innerHTML=Ns(_).map(K=>`<option value="${K.id}">${K.label}</option>`).join(""),V())};(ie=t.querySelector("#msr-subject"))==null||ie.addEventListener("change",()=>{se(),V()}),(Le=t.querySelector("#msr-period"))==null||Le.addEventListener("change",()=>{X(),V()}),(N=t.querySelector("#msr-metric"))==null||N.addEventListener("change",V),(J=t.querySelector("#msr-step"))==null||J.addEventListener("change",V),(W=t.querySelector("#msr-create"))==null||W.addEventListener("click",()=>{var le,de,he;const O=t.querySelector("#msr-subject"),_=t.querySelector("#msr-metric"),B=t.querySelector("#msr-period"),K=t.querySelector("#msr-step"),U=O==null?void 0:O.value,ne=_==null?void 0:_.value,te=B==null?void 0:B.value,be=K==null?void 0:K.value;!U||!ne||!te||!be||(Te.push({subjectKey:U,subjectLabel:(((le=O.options[O.selectedIndex])==null?void 0:le.text)||U).trim(),metricId:ne,metricLabel:xi[ne]||ne,unit:bo[ne]||"",period:te,periodLabel:(((de=B.options[B.selectedIndex])==null?void 0:de.text)||te).trim(),step:be,stepLabel:(((he=K.options[K.selectedIndex])==null?void 0:he.text)||be).trim(),color:Os[ne]||Xi[Te.length%Xi.length]}),b(),oe())}),t.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(O=>{O.addEventListener("click",()=>{Te.splice(+O.dataset.idx,1),b(),oe()})}),t.querySelectorAll(".m-wf-view-data").forEach(O=>{O.addEventListener("click",()=>{const _=O.dataset.metricId||null;if(O.dataset.sensorId){const B=+O.dataset.sensorId,K=re.find(U=>U.id===B);K&&ge(()=>import("./chart-fullscreen-DEDxXQIB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(U=>U.initChartFullscreen({sensor:K,metricId:_,backLabel:K.model+" "+K.serial}))}else if(O.dataset.parcelId){const B=+O.dataset.parcelId,K=n.find(ne=>ne.id===B),U=re.filter(ne=>{var te;return(te=ne.parcelIds)==null?void 0:te.includes(B)}).map(ne=>ne.id);K&&ge(()=>import("./chart-fullscreen-DEDxXQIB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(ne=>ne.initChartFullscreen({parcel:K,linkedSensorIds:U,metricId:_,backLabel:K.name}))}})}),G()}Z(),t.querySelectorAll(".m-prev-card").forEach(V=>{V.addEventListener("click",()=>{var X,ie;const se=((ie=(X=t.querySelector(".m-prev-select"))==null?void 0:X.selectedOptions[0])==null?void 0:ie.text)||"";H(l,+V.dataset.day,se)})});const ae=t.querySelector(".m-prev-expand-btn");ae&&ae.addEventListener("click",()=>{var se,X;const V=((X=(se=t.querySelector(".m-prev-select"))==null?void 0:se.selectedOptions[0])==null?void 0:X.text)||"";H(l,3,V)}),t.querySelectorAll(".m-widget-menu").forEach(V=>{V.addEventListener("click",se=>{var W;se.stopPropagation();const X=Se.find(O=>O.id===V.dataset.widget);if(!X)return;const ie=document.createElement("div"),Le=X.id==="bilan_hydrique",N=ut().sensorlessEnabled??!0;ie.innerHTML=`
          <div class="m-sheet-links">
            ${Le?`<a class="m-sheet-link" id="menu-sensorless">${N?"Désactiver":"Activer"} réservoir sensorless</a>`:""}
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const J=Ge({title:X.title,body:ie,doneLabel:"Fermer",onDone:()=>{}});(W=ie.querySelector("#menu-sensorless"))==null||W.addEventListener("click",()=>{xt({sensorlessEnabled:!N}),J.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{J.remove();const O=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');O&&(O.innerHTML=m()+vt(d()),k(),w(),g(),i==="admin"&&j())},280)}),ie.querySelector("#menu-move").addEventListener("click",()=>{J.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{J.remove(),A()},280)}),ie.querySelector("#menu-remove").addEventListener("click",()=>{X.active=!1,J.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{J.remove(),b(),E()},280),We("Widget retiré")})})})}function A(){const k=document.createElement("div"),w=()=>Se.filter(g=>g.active&&!g.fixed),x=()=>{const g=w();k.innerHTML=g.map((q,j)=>`
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
        </div>`).join(""),k.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(q=>{q.addEventListener("click",()=>{const j=w(),C=+q.dataset.i,F=C+ +q.dataset.dir,D=Se.indexOf(j[C]),M=Se.indexOf(j[F]);[Se[D],Se[M]]=[Se[M],Se[D]],b(),x(),E()})})};x(),Ge({title:"Réorganiser les widgets",body:k,doneLabel:"Fermer",onDone:()=>{}})}function I(){const k=i==="admin",w=xe(`
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
      </div>`);w.querySelector(".m-detail-back").addEventListener("click",fe),w.querySelectorAll(".m-add-item").forEach(x=>{x.addEventListener("click",()=>{const g=x.dataset.action;g==="irrigation"?(fe(),ge(()=>Promise.resolve().then(()=>st),void 0).then(q=>q.openIrrigationSaisie(n,We))):g==="strategie-irrigation"?(fe(),ge(()=>Promise.resolve().then(()=>st),void 0).then(q=>q.openIrrigationStrategie(n,We))):We("Fonctionnalité à venir")})})}function T(){const k=document.createElement("div"),w=()=>{const x=Se.filter(g=>!g.fixed);k.innerHTML=x.map(g=>`
        <div class="m-catalog-row${g.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${g.color}20;color:${g.color}"><i class="bi ${g.icon}"></i></div>
          <span class="m-catalog-title">${g.title}</span>
          ${g.available?`<button class="m-catalog-toggle${g.active?" m-catalog-toggle--on":""}" data-cid="${g.id}" type="button">
                <i class="bi ${g.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),k.querySelectorAll("[data-cid]").forEach(g=>{g.addEventListener("click",()=>{const q=Se.find(j=>j.id===g.dataset.cid);q&&(q.active=!q.active,b(),w(),E())})})};w(),Ge({title:"Widgets disponibles",body:k,doneLabel:"Fermer",onDone:()=>{}})}window.addEventListener("storage",k=>{if(k.key!=="weenat_proto_store")return;$s(ce);const w=t.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');w&&(w.innerHTML=m()+vt(d()),bindBhPlotLinks(),bindBhButtons(),bindBhExpand(),i==="admin"&&bindBhOrgSelect())}),window.showMobileAddPage=I,E()}const rs={"Blé tendre":["Semis","Levée","Tallage","Épi 1 cm","Épiaison","Floraison","Maturité"],Maïs:["Semis","Levée","4 feuilles","6 feuilles","Floraison ♂","Soie","Maturité"],Colza:["Semis","Levée","Rosette","Reprise","Bouton floral","Floraison","Siliques","Maturité"],Tournesol:["Semis","Levée","4 feuilles","Bouton floral","Floraison","Maturité"],Vigne:["Débourrement","Sortie feuilles","Floraison","Nouaison","Véraison","Récolte"],Sorgho:["Semis","Levée","Montaison","Floraison","Maturité"],"Orge de printemps":["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],Orge:["Semis","Levée","Tallage","Montaison","Épiaison","Floraison","Grain pâteux","Récolte"],"Pomme de terre":["Plantation","Levée","Croissance","Tuberisation","Grossissement","Maturité"],Cerisier:["Dormance","Bourgeons","Débourrement","Floraison","Nouaison","Fructification","Récolte"],Poire:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Pomme:["Débourrement","Floraison","Nouaison","Croissance","Véraison","Récolte"],Salade:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Laitue:["Plantation","Reprise","Croissance","Pommaison","Récolte"],Betterave:["Semis","Levée","4 feuilles","Fermeture rang","Grossissement","Récolte"]},cs=["Semis","Levée","Floraison","Récolte"];function No(e){if(!e)return cs;const i=e.toLowerCase();for(const t of Object.keys(rs))if(i.startsWith(t.toLowerCase()))return rs[t];return cs}const Jt=new URLSearchParams(window.location.search).get("role")==="adherent"?"adherent":"admin",Ce={djMin:0,djMax:18,hfSeuil:7.2},Vo={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"},irrigation:{metricLabel:"Cumul d'irrigation",unit:"mm",icon:"bi-moisture",color:"#FF8C00"}},Jo=4,Wo=[{title:"Cumuls",items:[{label:"Cumuls",id:"cumuls"}]},{title:"Prévisions",items:[{label:"Prévisions à 5 jours",id:"previsions-5j"},{label:"Prévisions à 6 heures",id:"previsions-6h"}]},{title:"Outils aide à la décision",items:[{label:"Maï'zy",id:"maizy"},{label:"Weephyt",id:"weephyt"},{label:"Decitrait",id:"decitrait"},{label:"Tavelure Pomme",id:"tavelure"}]},{title:"Indicateurs",items:[{label:"DPV",id:"dpv"},{label:"THI",id:"thi"},{label:"Température de rosée",id:"temp-rosee"},{label:"Température du sol",id:"temp-sol"}]},{title:"Capteurs",items:[{label:"Station météo",id:"w-station"},{label:"Thermomètre-hygromètre",id:"w-thygro"},{label:"Thermomètre de sol",id:"w-tsol"},{label:"Anémomètre",id:"w-anem"},{label:"Pyranomètre",id:"w-pyrano"},{label:"Capteur d'humectation foliaire",id:"w-lws"},{label:"Capteur PAR",id:"w-par"},{label:"Sonde capacitive",id:"w-capa"},{label:"Tensiomètre",id:"w-tensio"},{label:"Fertirrigation",id:"w-ec"}]},{title:"Irrigation",items:[{label:"Irrigations",id:"irrigations"}]}],$i={"w-station":["P+","PT","P","SMV"],"w-thygro":["TH"],"w-tsol":["T_MINI"],"w-anem":["W"],"w-pyrano":["PYRANO"],"w-lws":["LWS"],"w-par":["PAR"],"w-capa":["CAPA-30-3","CAPA-60-6"],"w-tensio":["CHP-15/30","CHP-30/60","CHP-60/90"],"w-ec":["EC"]},Ks=e=>`dash-widgets-parcel-${e}`;function Go(e,i){const t=i.map(a=>re.find(s=>s.id===a)).filter(Boolean),o=new Set(t.map(a=>a.model)),n=["previsions-5j","cumuls","irrigations"];return Object.entries($i).forEach(([a,s])=>{s.some(l=>o.has(l))&&n.push(a)}),Ct(e)&&n.push("irrelis"),n}function Wt(e,i){try{const t=JSON.parse(localStorage.getItem(Ks(e.id)));if(Array.isArray(t)&&t.length)return t}catch{}return Go(e,i)}function Xs(e,i){localStorage.setItem(Ks(e),JSON.stringify(i))}function Uo(e,i,t){const o=new Set(Wt(e,i)),n=Wo.map((s,l)=>`
    <div class="m-list-section-header"${l>0?' style="margin-top:20px"':""}>${s.title}</div>
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
    </div>`);a.querySelector(".m-detail-back").addEventListener("click",fe),a.querySelectorAll(".m-wcat-add").forEach(s=>{s.addEventListener("click",()=>{const l=s.dataset.wid,p=Wt(e,i);p.includes(l)||(p.push(l),Xs(e.id,p)),fe(),t==null||t()})})}const Be={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#7DBDD7",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#72B0D8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#795548",cumul:!1},humectation:{label:"Capteur d'humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#616161",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1},irrigation:{label:"Irrigation",unit:"mm",color:"#FF8C00",cumul:!0,cumulsType:"irrigation"},rfu:{label:"Niveau de réservoir",unit:"mm",color:"#0099CC",cumul:!1},nrs:{label:"Niveau de réservoir (spatialisé)",unit:"mm",color:"#0172A4",cumul:!1}},Yo=new Set(["pluie","temperature","humidite","vent","pothydr","etp","temp_rosee","rayonnement"]),Pi={j7j2:2},kt={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function Kt(e,i){const t={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3},rfu:{base:60,amp:30,min:0,max:120},nrs:{base:65,amp:28,min:0,max:120}}[e]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(o,n)=>{const a=n/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min,Math.min(t.max,s))})}const Xt={"365d":52,"30d":60,"7d":84,j7j2:108,hier:48,"1d":24,custom:60},Tt={"365d":525600,"30d":43200,"7d":10080,j7j2:10080,hier:1440,"1d":1440,custom:10080};function Qs(e,i,t=0,o=0,n=null){const a=n??(Xt[i]||60),s=Tt[i]||10080,l=Date.now(),p=l-s*6e4,c=s*6e4/a,d=new Array(a+t).fill(0),m=t>0?o*6e4/t:0;return pe.filter(v=>v.plotId===e).forEach(v=>{const r=new Date(v.iso).getTime();if(!(r<p)){if(r<=l){const u=Math.min(a-1,Math.floor((r-p)/c));d[u]+=v.mm}else if(t>0&&r<=l+o*6e4){const u=Math.min(t-1,Math.floor((r-l)/m));d[a+u]+=v.mm}}}),d}function Zo(e,i,t,o,n,a=20,s=0){const l=Tt[e]||10080,p=l+s,c=new Date,d=u=>e==="1d"||e==="hier"?`${String(u.getHours()).padStart(2,"0")}h`:e==="365d"?u.toLocaleDateString("fr-FR",{month:"short"}):`${String(u.getDate()).padStart(2,"0")}/${String(u.getMonth()+1).padStart(2,"0")}`,m=4,v=i-t-o,r=n-a;return Array.from({length:m+1},(u,b)=>{const f=b/m,y=new Date(c.getTime()+(f*p-l)*6e4),h=(t+f*v).toFixed(1),$=b===0?"start":b===m?"end":"middle";return[`<line x1="${h}" y1="${r}" x2="${h}" y2="${r+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${h}" y="${n-3}" text-anchor="${$}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(y)}</text>`].join("")}).join("")}function Ko(e,i,t,o="7d",n="",a=null){const s=Xt[o]||60,l=Tt[o]||10080,p=Pi[o]||0,c=l/1440,d=p>0?Math.round(s*c/(c+p)):s,m=s-d,v=m>0?p*1440:0,u=m>0&&Yo.has(e)?m:0,b=e==="irrigation"?Qs(a,o,m,m>0?p*1440:0,d):Kt(e,d+u),f=320,y=100,h=34,$=6,E=10,P=20,L=f-h-$,S=y-E-P,H=t?0:Math.min(...b),z=Math.max(...b,H+.001),A=z-H,I=Z=>h+Z/(s-1)*L,T=Z=>E+S-(Z-H)/A*S,k=`g${Math.random().toString(36).slice(2,8)}`,w=[0,.5,1].map(Z=>{const ae=H+Z*A,me=E+S-Z*S;return`<text x="${h-3}" y="${(me+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${ae<10?ae.toFixed(1):Math.round(ae)}</text>`}).join(""),x=[.25,.5,.75].map(Z=>{const ae=(E+S-Z*S).toFixed(1);return`<line x1="${h}" y1="${ae}" x2="${f-$}" y2="${ae}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),g=`<line x1="${h}" y1="${E+S}" x2="${f-$}" y2="${E+S}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,q=Zo(o,f,h,$,y,P,v);let j="";if(m>0){const Z=I(d-.5),ae=`stripe${k}`;j=`<defs><pattern id="${ae}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="6" height="6" fill="rgba(142,142,147,.06)"/>
        <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(142,142,147,.18)" stroke-width="3"/>
      </pattern></defs>
      <rect x="${Z.toFixed(1)}" y="${E}" width="${(f-$-Z).toFixed(1)}" height="${S}" fill="url(#${ae})"/>
      <line x1="${Z.toFixed(1)}" y1="${E}" x2="${Z.toFixed(1)}" y2="${E+S}" stroke="rgba(142,142,147,.35)" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="${(f-$-3).toFixed(1)}" y="${(E+9).toFixed(1)}" text-anchor="end" font-size="8" fill="#8e8e93" font-family="-apple-system" font-style="italic">Prévisions</text>`}if(t){const Z=L/b.length*.7,ae=b.map((me,Ee)=>{const ze=(me-H)/A*S,Ve=E+S-ze,Qe=Ee>=d;return`<rect x="${(I(Ee)-Z/2).toFixed(1)}" y="${Ve.toFixed(1)}" width="${Z.toFixed(1)}" height="${ze.toFixed(1)}" fill="${Qe?"#C7C7CC":i}" opacity="${Qe?".55":".8"}" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${f} ${y}" width="100%" height="${y}" preserveAspectRatio="none">${j}${w}${x}${g}${q}${ae}</svg>`}const C=b.map((Z,ae)=>[I(ae),T(Z)]),F=C.slice(0,d),D=C.slice(d-1),M=F.map(([Z,ae],me)=>`${me?"L":"M"}${Z.toFixed(1)},${ae.toFixed(1)}`).join(" "),R=u>0?D.map(([Z,ae],me)=>`${me?"L":"M"}${Z.toFixed(1)},${ae.toFixed(1)}`).join(" "):"",G=`${M} L${I(d-1).toFixed(1)},${(E+S).toFixed(1)} L${h},${(E+S).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:b.map(Z=>+Z.toFixed(2)),minV:+H.toFixed(2),maxV:+z.toFixed(2)}))}" data-color="${i}" data-unit="${n}" style="position:relative">
    <svg viewBox="0 0 ${f} ${y}" width="100%" height="${y}" preserveAspectRatio="none">
      <defs><linearGradient id="${k}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${j}
      ${w}${x}${g}
      <path d="${G}" fill="url(#${k})"/>
      <path d="${M}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${R?`<path d="${R}" fill="none" stroke="${i}" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>`:""}
      ${C.map(([Z,ae],me)=>`<circle cx="${Z.toFixed(1)}" cy="${ae.toFixed(1)}" r="2" fill="${i}" opacity="${me>=d?".55":"1"}"/>`).join("")}
      ${q}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Xo(e,i,t,o=null){if(!t)return"";const n=Xt[i]||60,a=Tt[i]||10080,s=Pi[i]||0,l=a/1440,p=s>0?Math.round(n*l/(l+s)):n,c=a/(p*60),d=e==="irrigation"?Qs(o,i,0,0,p):Kt(e,p);let m=[];if(t==="temp"){const v=d.reduce((u,b)=>u+Math.max(0,Math.min(b,Ce.djMax)-Ce.djMin),0)*(c/24),r=d.filter(u=>u<Ce.hfSeuil).length*c;m=[{label:"Cumul de degrés jours",val:`${Math.round(v)} DJ`,metricId:"dj",thresholdText:`${Ce.djMin}°C → ${Ce.djMax}°C`},{label:"Cumul d'heures de froid",val:`${Math.round(r)} h`,metricId:"hf",thresholdText:`< ${Ce.hfSeuil}°C`}]}else if(t==="pluie")m=[{label:"Cumul de pluie",val:`${d.reduce((r,u)=>r+u,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const v=d.filter(r=>r>120).length*c;m=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(v)} h`,metricId:"rayo"}]}else if(t==="etp")m=[{label:"Cumul d'évapotranspiration",val:`${(d.reduce((r,u)=>r+u,0)*(c/24)).toFixed(1)} mm`,metricId:"etp"}];else if(t==="hws"){const v=d.filter(r=>r>50).length*c;m=[{label:"Cumul d'heures d'humectation foliaire",val:`${Math.round(v)} h`,metricId:"humec"}]}else t==="irrigation"&&(m=[{label:"Cumul irrigation",val:`${d.reduce((r,u)=>r+u,0).toFixed(1)} mm`,metricId:"irrigation"}]);return m.length?`<div class="m-chart-cumuls">${m.map(v=>{const r=v.metricId==="dj"||v.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${v.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
      <div class="m-chart-cumul-info">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span class="m-chart-cumul-label">${v.label}</span>
          ${v.thresholdText?`<span class="m-chart-cumul-thresh">${v.thresholdText}</span>`:""}
        </div>
        <span class="m-chart-cumul-val">${v.val}</span>
      </div>
      <div style="display:flex;align-items:center;gap:2px">
        ${r}
        <button class="m-cumul-add-btn" data-cumul-label="${v.label}" data-cumul-val="${v.val}" data-cumul-metric-id="${v.metricId}" title="Ajouter au tableau de bord"><i class="bi bi-house-add"></i></button>
      </div>
    </div>`}).join("")}</div>`:""}const Qo={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",j7j2:"J-7 → J+2",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},ea={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"};function ds(e,i,t=null,o=null,n="1h",a=null){const s=Be[e];if(!s)return"";const l=Xo(e,i,s.cumulsType,o),p=t||e==="irrigation"?`<div class="m-chart-details-link" data-sensor-id="${t??""}" data-metric-id="${e}">Voir détails →</div>`:"",c=a?`<button class="m-msr-add-btn" data-msr-metric-id="${e}" data-msr-subject-key="${a.key}" data-msr-subject-label="${a.label}" data-msr-period="${i}" data-msr-step="${n}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`:"";return`
    <div class="m-chart-card" data-metric-id="${e}">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${s.color}">${s.label}</span>
        ${c}
      </div>
      ${Ko(e,s.color,s.cumul,i,s.unit||"",o)}
      ${p}
      ${l}
    </div>`}function ta(e){const i=e.dataset.msrMetricId,t=e.dataset.msrSubjectKey,o=e.dataset.msrSubjectLabel,n=e.dataset.msrPeriod,a=e.dataset.msrStep,s=Be[i];if(!s)return;const l=Vs({subjectKey:t,subjectLabel:o,metricId:i,metricLabel:s.label,unit:s.unit||"",period:n,periodLabel:Qo[n]||n,step:a,stepLabel:ea[a]||a,color:s.color});if(l==="max"){Y(`Maximum de mesures atteint (${Jo})`);return}if(l==="dup"){Y("Cette mesure est déjà dans vos favoris");return}Y("Mesure ajoutée au tableau de bord")}function ia(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function sa(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t,minV:o,maxV:n}=i,a=e.querySelector(".m-chart-tip"),s=e.querySelector(".m-chart-crosshair"),l=e.dataset.color||"#0172A4",p=e.dataset.unit||"";function c(m){const v=e.getBoundingClientRect(),r=Math.max(0,Math.min(1,(m-v.left)/v.width)),u=Math.round(r*(t.length-1)),b=t[u],f=r*100,y=(b<10?b.toFixed(1):String(Math.round(b)))+(p?` ${p}`:""),h=ia(l);s.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${f}%;width:1px;background:${l};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(f,75)}%;background:${l};color:${h};border:1.5px solid ${h};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=y}function d(){s.style.display="none",a.style.display="none"}e.addEventListener("pointermove",m=>{m.preventDefault(),c(m.clientX)}),e.addEventListener("pointerdown",m=>c(m.clientX)),e.addEventListener("pointerup",d),e.addEventListener("pointerleave",d),e.style.cursor="crosshair"}function na(e){const i=pe.filter(b=>b.plotId===e.id),t=i.filter(b=>b.real),o=i.filter(b=>!b.real),n=t.reduce((b,f)=>b+f.mm,0),a=o.reduce((b,f)=>b+f.mm,0),s=Xe(e.id).irrigation??e.irrigation,p=s&&!new Set(["Non irrigué","Non renseigné",""]).has(s),c=`
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
        ${c}
      </div>`,"irrigations");let d="";if(i.some(b=>b.fromStrategy)){const b=[...i].sort(($,E)=>$.iso.localeCompare(E.iso)),f=b[b.length-1],y=b[b.length-2],h=y?Math.round((new Date(f.iso)-new Date(y.iso))/864e5):null;d=`
      <div class="w-irrig-season-params">
        <div class="w-irrig-season-lbl">Paramètres actuels de la saison :</div>
        <div class="w-irrig-season-val"><strong>${f.mm} mm</strong>${h?` tous les <strong>${h} jours</strong>`:""}.</div>
      </div>`}const v=n+a,u=`
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
      ${d}
      ${c}
    </div>
    <div class="m-irrig-footer-link">Voir les irrigations →</div>`;return ct("Irrigations","bi-moisture","#FF8C00",u,"irrigations")}function oa(e,i=[]){const t=Wt(e,i),o=i.map(a=>re.find(s=>s.id===a)).filter(Boolean);let n="";for(const a of t)if(a==="irrigations")n+=na(e);else if(a==="cumuls")n+=la(e,i);else if(a==="previsions-5j")n+=ca(e);else if(a==="irrelis")n+=Fs(e);else if($i[a]){const s=new Set($i[a]),l=o.filter(p=>s.has(p.model));l.length&&(n+=da(l,a))}return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${n}
    </div>`}function ct(e,i,t,o,n="",a=""){return`
    <div class="m-widget-card"${n?` data-widget-id="${n}"`:""}>
      <div class="m-widget-card-hd">
        <span class="m-widget-card-title" style="color:${t}"><i class="bi ${i}"></i> ${e}</span>
        <button class="m-widget-menu" data-wid="${n}" type="button">•••</button>
      </div>
      ${a?`<div class="m-widget-card-subtitle">${a}</div>`:""}
      ${o}
    </div>`}function tt(e,i,t){const o=(e*9301+49297)%233280,a={etp:1+o%60/100,pluie:.8+o%70/100,djc:4+o%60/10,hfroid:.4+o%12/10,humec:.1+o%20/100,enso:4+o%40/10}[i]??1,s=Math.max(0,Math.round((Date.now()-new Date(t))/864e5));return Math.round(a*s*10)/10}const en=e=>`m-pcumuls-${e}`;function rt(e){try{return JSON.parse(localStorage.getItem(en(e)))||{}}catch{return{}}}function zt(e,i){const t=rt(e);localStorage.setItem(en(e),JSON.stringify({...t,...i}))}const aa={djc:[{key:"djMin",label:"T min (°C)",def:0},{key:"djMax",label:"T max (°C)",def:18}],hfroid:[{key:"hfSeuil",label:"Seuil (°C)",def:7.2}]};function la(e,i=[]){const t=new Set;i.forEach(r=>{const u=re.find(b=>b.id===r);u&&(kt[u.model]||[]).forEach(b=>t.add(b))});const o=`${new Date().getFullYear()}-01-01`,n=rt(e.id),a=new Set(n.hidden||[]),s=n.dates||{},l=n.cfg||{};e.id;const p=[{id:"etp",label:"ETP",unit:"mm",color:"#7DBDD7",icon:"bi-moisture",val:tt(e.id,"etp",s.etp||o),show:!0},{id:"enso",label:"Rayonnement solaire",unit:"h",color:"#CBCB0B",icon:"bi-brightness-high",val:tt(e.id,"enso",s.enso||o),show:!0},{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",icon:"bi-cloud-rain-heavy",val:tt(e.id,"pluie",s.pluie||o),show:t.has("pluie")},{id:"djc",label:"Degrés jours",unit:"DJ",color:"#FBAF05",icon:"bi-thermometer-half",val:tt(e.id,"djc",s.djc||o),show:t.has("temperature"),cfg:!0,cfgLabel:`${l.djMin??0}–${l.djMax??18}°C`},{id:"hfroid",label:"Heures de froid",unit:"h",color:"#FEE7B4",icon:"bi-snow",val:tt(e.id,"hfroid",s.hfroid||o),show:t.has("temperature"),cfg:!0,cfgLabel:`< ${l.hfSeuil??7.2}°C`},{id:"humec",label:"Humectation",unit:"h",color:"#00887E",icon:"bi-droplet",val:tt(e.id,"humec",s.humec||o),show:t.has("humectation")}].filter(r=>r.show),c=p.filter(r=>!a.has(r.id)),d=p.filter(r=>a.has(r.id)),m=d.length?`<div style="border-top:1px solid rgba(0,0,0,.06);padding:8px 0 0;margin-top:8px">
        <div style="font-size:11px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">Disponibles</div>
        ${d.map(r=>`
          <button class="m-pcumul-add" data-cid="${r.id}" data-pid="${e.id}" type="button"
            style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px dashed rgba(0,0,0,.15);border-radius:10px;padding:9px 12px;background:none;cursor:pointer;font-family:inherit;margin-bottom:6px">
            <i class="bi ${r.icon}" style="color:${r.color};font-size:16px;flex-shrink:0"></i>
            <span style="font-size:13px;color:#3a3a3c;flex:1">${r.label}</span>
            <i class="bi bi-plus-circle" style="color:#0172A4;font-size:16px;flex-shrink:0"></i>
          </button>`).join("")}
      </div>`:"",v=c.length?`<div class="m-cumuls-saved" style="padding:0 0 4px">${c.map(r=>{const u=s[r.id]||o;return`<div class="m-cumuls-saved-card" style="position:relative">
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
        </div>`}).join("")}${m}</div>`:`<div style="font-size:13px;color:#8e8e93;padding:4px 0 4px">Tous les cumuls ont été supprimés.</div>${m}`;return ct("Cumuls","bi-bar-chart-fill","#0172A4",v,"cumuls")}const tn={};function sn(e){const i=(e==null?void 0:e.id)||1,t=(a,s,l)=>{const p=Math.sin(a*9301+49297)*43758.5453;return s+Math.floor((p-Math.floor(p))*(l-s+1))},o=[{label:"Ensoleillé",icon:"bi-sun",color:"#f4a01c"},{label:"Part. nuageux",icon:"bi-cloud-sun",color:"#5b8dd9"},{label:"Couvert",icon:"bi-cloud",color:"#8e8e93"},{label:"Pluie",icon:"bi-cloud-rain-fill",color:"#2E75B6"},{label:"Orageux",icon:"bi-cloud-lightning-rain",color:"#bf5af2"}],n=new Date;return Array.from({length:14},(a,s)=>{const l=new Date(n);l.setDate(l.getDate()+s);const p=t(i*17+s*7,0,4),c=o[p],d=p>=3,m=t(i*3+s*11,6,14),v=t(i*5+s*13,17,32),r=Array.from({length:24},(u,b)=>{const f=Math.sin(Math.PI*(b-6)/12),y=Math.round(m+(v-m)*Math.max(0,f)),h=d&&b>=8&&b<=16&&t(i+s*100+b,0,9)>5?+(t(i+s*100+b+1,0,30)/10).toFixed(1):0;return{label:`${String(b).padStart(2,"0")}h`,temp:y,pluie:h,hum:Math.round(85-40*Math.max(0,f)),vent:t(i*7+s*50+b,8,30),icon:h>0?"bi-cloud-rain-fill":b<7||b>20?"bi-moon-fill":c.icon}});return{dayLabel:s===0?"Aujourd'hui":s===1?"Demain":l.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:l.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...c,pluie:d?t(i*23+s*31,2,20):0,tMin:m,tMax:v,ventMoy:t(i*11+s*17,8,30),ventRafales:t(i*13+s*19,18,50),hours:r}})}function ci(e,i,t){const o=e[i],n=`${o.dayLabel.charAt(0).toUpperCase()+o.dayLabel.slice(1)} · ${o.dateStr}`,a=t?`<div style="font-size:12px;color:#8e8e93;text-align:center;padding:2px 0 6px"><i class="bi bi-geo-alt-fill" style="color:#0172A4"></i> ${t}</div>`:"";return`
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
          ${o.hours.map((s,l)=>`
            <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${l<o.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
              <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${s.label}</span>
              <i class="bi ${s.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
              <span style="font-size:12px;color:#2E75B6;width:44px;flex-shrink:0">${s.pluie>0?s.pluie+"mm":""}</span>
              <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${s.temp}°C</span>
              <span style="font-size:12px;color:#8e8e93">${s.hum}%</span>
              <span style="font-size:12px;color:#8e8e93;margin-left:auto">${s.vent} km/h</span>
            </div>`).join("")}
        </div>
      </div>
    </div>`}function ra(e){const i=tn[e.id]||sn(e),t=e.name,o=xe(ci(i,0,t)),n=(a,s)=>{var l,p;a.querySelector(".m-detail-back").addEventListener("click",fe),(l=a.querySelector("#prev-day"))==null||l.addEventListener("click",()=>{a.innerHTML=ci(i,s-1,t),n(a,s-1)}),(p=a.querySelector("#next-day"))==null||p.addEventListener("click",()=>{a.innerHTML=ci(i,s+1,t),n(a,s+1)})};n(o,0)}function ca(e){const i=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],t=ye.find(c=>c.id===(e==null?void 0:e.orgId)),o=(e==null?void 0:e.ville)||(t==null?void 0:t.ville)||"—",n=(e==null?void 0:e.id)||1,a=sn(e);tn[n]=a;const s=a.slice(0,5).map((c,d)=>({lbl:d===0?"Auj.":i[new Date(Date.now()+d*864e5).getDay()],date:c.dateStr,tmax:c.tMax,tmin:c.tMin,pluie:c.pluie,vent:c.ventMoy,icon:c.icon,label:c.label})),l=c=>`
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
    <div class="m-wprev5-grid">${s.map(l).join("")}</div>
    <div style="padding:6px 12px 4px;text-align:right">
      <button class="m-prev5j-voir-details" style="background:none;border:none;color:#0172A4;font-size:13px;cursor:pointer;padding:4px 0">Voir détails <i class="bi bi-chevron-right" style="font-size:11px"></i></button>
    </div>`;return ct("Prévisions 5 jours","bi-cloud-sun","#5b8dd9",p,"previsions-5j")}function da(e,i=""){if(!e.length)return"";const t={"P+":"bi-cloud-rain-heavy",PT:"bi-cloud-rain-heavy",P:"bi-cloud-rain-heavy",TH:"bi-thermometer-half",SMV:"bi-cloud-sun",W:"bi-wind",PYRANO:"bi-brightness-high",PAR:"bi-brightness-alt-high",LWS:"bi-droplet",T_GEL:"bi-snow",T_MINI:"bi-thermometer-half","CHP-15/30":"bi-moisture","CHP-30/60":"bi-moisture","CHP-60/90":"bi-moisture","CAPA-30-3":"bi-moisture","CAPA-60-6":"bi-moisture",EC:"bi-plug"},o={"P+":"#45b7d1",PT:"#45b7d1",P:"#45b7d1",TH:"#e07050",SMV:"#c090e0",W:"#82b8e0",PYRANO:"#f5c842",PAR:"#a0d070",LWS:"#60a090",T_GEL:"#7bc4b0",T_MINI:"#bb8fce","CHP-15/30":"#5b8dd9","CHP-30/60":"#5b8dd9","CHP-60/90":"#5b8dd9","CAPA-30-3":"#f0c060","CAPA-60-6":"#f0c060",EC:"#f0a030"},n={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],TH:["temperature","humidite"],SMV:["pluie","temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temperature"],T_MINI:["temp_sol"],"CHP-15/30":["pothydr"],"CHP-30/60":["pothydr"],"CHP-60/90":["pothydr"],"CAPA-30-3":["teneur"],"CAPA-60-6":["teneur"],EC:["teneur"]};return e.slice(0,4).map(a=>{const s=t[a.model]||"bi-broadcast",l=nn[a.model]||a.model,p=o[a.model]||"#0172A4",c=n[a.model]||[],d=c[0],v=a.model.startsWith("CAPA")?30:15,r=v-a.id*7%v,u=`
      <div class="m-wsensor-vals" style="margin:8px 0">
        ${c.slice(0,4).map(b=>{const f=Be[b];if(!f)return"";const h=Kt(b,1)[0],$=h<10?h.toFixed(1):Math.round(h);return`<div class="m-wsensor-val-row">
            <span class="m-wsensor-metric">${f.label}</span>
            <span class="m-wsensor-value" style="color:${f.color}">${$} ${f.unit}</span>
          </div>`}).join("")}
      </div>
      <div class="m-widget-footer" style="display:flex;align-items:center;justify-content:space-between">
        <span style="font-size:11px;color:#8e8e93">Il y a ${r} min · ${a.serial}</span>
        <button class="m-wsensor-voir-donnees" data-sensor-id="${a.id}" data-metric-id="${d}" style="border:none;background:none;color:#007AFF;font-size:12px;cursor:pointer;padding:0;font-family:inherit;display:flex;align-items:center;gap:3px">Voir les données <i class="bi bi-arrow-right-short"></i></button>
      </div>`;return ct(l,s,p,u,i)}).join("")}function ua(e,i){const t=new Blob(["\uFEFF"+e],{type:"text/csv;charset=utf-8;"}),o=Object.assign(document.createElement("a"),{href:URL.createObjectURL(t),download:i});document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(o.href),100)}function pa(e,i,t){const o=new Set;i.forEach(f=>{const y=re.find(h=>h.id===f);y&&(kt[y.model]||[]).forEach(h=>o.add(h))});const n=[...new Set(["etp","rayonnement","temp_rosee",...o])].filter(f=>Be[f]),a=Xt[t]||60,s=Tt[t]||10080,l=Pi[t]||0,p=s/1440,c=l>0?Math.round(a*p/(p+l)):a,d=s/c*6e4,m=new Date,v=new Date(m-s*6e4),r=["Horodatage",...n.map(f=>`${Be[f].label} (${Be[f].unit})`)].join(";"),u=Array.from({length:c},(f,y)=>[new Date(v.getTime()+y*d).toISOString().replace("T"," ").slice(0,19),...n.map($=>Kt($,1)[0].toFixed(2))].join(";")),b=(e.name||"parcelle").replace(/[^\w]/g,"_");ua([r,...u].join(`\r
`),`${b}_${t}_${new Date().toISOString().slice(0,10)}.csv`)}function ma(e,i="7d",t="1h",o=null){const n=new Set,a={};e.forEach(r=>{const u=re.find(b=>b.id===r);u&&(kt[u.model]||[]).forEach(b=>{n.add(b),a[b]||(a[b]=r)})});const s=pe.some(r=>r.plotId===o),l=new Set(["CHP-15/30","CHP-30/60","CHP-60/90","CAPA-30-3","CAPA-60-6","EC"]),p=e.some(r=>{const u=re.find(b=>b.id===r);return u&&l.has(u.model)}),c=["pluie","irrigation","temperature","humidite","pothydr","teneur","temp_sol","vent","rayonnement","humectation","par","temp_rosee","etp"],d=[...new Set([...n,"etp","rayonnement","temp_rosee",...p?["rfu"]:["nrs"],...s?["irrigation"]:[]])].filter(r=>Be[r]).sort((r,u)=>{const b=c.indexOf(r),f=c.indexOf(u);return(b===-1?999:b)-(f===-1?999:f)}),m=new Date().toISOString().slice(0,10),v=new Date(Date.now()-7*864e5).toISOString().slice(0,10);return`
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
      ${(()=>{const r=e[0]??null,u=o!=null?ce.find(f=>f.id===o):null,b=u?{key:`p-${u.id}`,label:u.name}:null;return d.map(f=>f==="irrigation"?ds(f,i,null,o,t,b):ds(f,i,a[f]??r,null,t,b)).join("")})()}
    </div>`}const va={"IRRÉ-LIS Multi-Cultures":{icon:"bi-droplet-fill",color:"#2E75B6"},"IRRÉ-LIS Mono-Culture":{icon:"bi-droplet-fill",color:"#2E75B6"},DeciTrait:{icon:"bi-shield-check",color:"#4CAF50"},Limacapt:{icon:"bi-bug",color:"#795548"},"Modèles Arvalis — PRÉVI-LIS / MILÉOS":{icon:"bi-graph-up",color:"#FBAF05"},Xarvio:{icon:"bi-grid-3x3-gap",color:"#00B14F"},Pixagri:{icon:"bi-map",color:"#00897B"},VitiMeteo:{icon:"bi-flower1",color:"#8B4C9E"},Rimpro:{icon:"bi-cloud-lightning",color:"#E53935"},"Cropwise Protector":{icon:"bi-shield-fill-check",color:"#43A047"},"Movida GrapeVision":{icon:"bi-eye",color:"#7B1FA2"}};function fa(e){if(e.substrate)return"Substrat : "+e.substrate;if(e.texture===gt&&e.soilAnalysis){const{argile:i,limon:t,sable:o}=e.soilAnalysis;return`Analyse de sol (argile ${i}% / limon ${t}% / sable ${o}%)`}return e.texture||"—"}function wi(e){const i=va[e]||{icon:"bi-puzzle",color:"#8e8e93"};return`<i class="bi ${i.icon}" style="font-size:18px;color:${i.color};width:24px;text-align:center;flex-shrink:0"></i>`}const nn={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",TH:"Thermomètre-hygromètre",SMV:"Station météo virtuelle",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Sonde gel",T_MINI:"Thermo. sol","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Fertirrigation"};function ba(e,i,t){const o=t.map(d=>re.find(m=>m.id===d)).filter(Boolean),n=o.some(d=>d.model==="P+"||d.model==="PT"),a=o.some(d=>d.model==="P"),s=n&&a,l=new Set(["CHP-15/30","CHP-30/60","CHP-60/90"]),p=new Map;o.forEach(d=>{(kt[d.model]||[]).forEach(m=>{p.has(m)||p.set(m,[]),p.get(m).push(d)})});const c=new Set;return p.forEach((d,m)=>{d.length<=1||d.every(v=>l.has(v.model))||d.forEach(v=>c.add(v.id))}),`
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
          <span class="m-list-row-value">${Xe(e.id).volumeMaxM3??e.volumeMaxM3?`${(Xe(e.id).volumeMaxM3??e.volumeMaxM3).toLocaleString("fr-FR")} m³`:"Non défini"}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="edit-texture">
          <span class="m-list-row-label">Texture de sol</span>
          <span class="m-list-row-value">${fa(e)}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Capteurs liés</div>
      <div class="m-list">
        ${o.length?o.map((d,m)=>{const v=d.event&&(Array.isArray(d.event)?d.event.length>0:!0),r=c.has(d.id),u=nn[d.model]||d.model,b=(kt[d.model]||[]).map(f=>{const y=Be[f];return y?`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${y.color}18;color:${y.color};border:1px solid ${y.color}40;white-space:nowrap">${y.label}</span>`:""}).join("");return`<div class="m-list-row${m===o.length-1?" m-list-row--last":""} m-tappable" data-open-sensor="${d.id}" style="flex-direction:column;align-items:stretch;gap:4px;padding:10px 16px">
                <div style="display:flex;align-items:center;gap:6px">
                  <div style="flex:1;min-width:0">
                    <div style="font-size:15px;font-weight:500;display:flex;align-items:center;gap:5px">
                      ${u}
                      ${v?'<span style="width:7px;height:7px;border-radius:50%;background:#ff3b30;flex-shrink:0;display:inline-block"></span>':""}
                      ${r?'<i class="bi bi-exclamation-triangle-fill" style="color:#ff9f0a;font-size:12px;flex-shrink:0"></i>':""}
                    </div>
                    <div style="font-size:12px;color:#8e8e93;margin-top:1px">${d.model} · ${d.serial}</div>
                  </div>
                  <button class="btn-sensor-more" data-sensor-id="${d.id}" style="border:none;background:none;color:#8e8e93;font-size:18px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0;line-height:1" onclick="event.stopPropagation()">···</button>
                  <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
                </div>
                ${b?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px">${b}</div>`:""}
                ${l.has(d.model)&&d.depth!=null?`<div style="font-size:12px;color:#8e8e93;margin-top:2px">Profondeur d'installation : ${d.depth} cm</div>`:""}
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
            ${[Be.etp,...o.some(d=>d.model==="PYRANO")?[]:[Be.rayonnement],Be.temp_rosee].map(d=>`<span style="font-size:10px;font-weight:500;padding:1px 6px;border-radius:10px;background:${d.color}18;color:${d.color};border:1px solid ${d.color}40;white-space:nowrap">${d.label}</span>`).join("")}
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
            ${(e.integrations||[]).map(d=>`
              <span style="display:inline-flex;align-items:center;gap:5px;background:#EFF6FF;color:#0172A4;border:1px solid #BFDBFE;border-radius:20px;padding:3px 10px 3px 7px;font-size:12px;font-weight:500;line-height:1.4">
                ${wi(d)}<span>${d}</span>
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
    </div>`}function Si(e,i=[],t="widgets",o="Parcelles"){let n=ye.find(A=>A.id===e.orgId),a=t,s="j7j2",l="1d",p=!1;const c=(n==null?void 0:n.ville)||"",d=xe(`
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
    <div id="detail-content" class="m-detail-content"></div>`);function m(){const A=ye.filter(w=>w.id!==100&&w.statut!=="inactif"),I=document.createElement("div"),T=()=>{I.innerHTML=A.map(w=>`
        <div class="m-sheet-option${w.id===e.orgId?" m-sheet-option--active":""}" data-pick-org="${w.id}">
          <span>${w.name}</span>
          ${w.id===e.orgId?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),I.querySelectorAll("[data-pick-org]").forEach(w=>{w.addEventListener("click",()=>{const x=+w.dataset.pickOrg;x!==e.orgId&&(e.orgId=x,n=ye.find(g=>g.id===x),S(),Y("Exploitation mise à jour")),k.classList.remove("m-sheet-overlay--show"),setTimeout(()=>k.remove(),280)})})},k=ue({title:"Exploitation",body:I,doneLabel:"Fermer",onDone:()=>{}});T()}function v(){const A=Ut.filter(x=>x!=="Non renseigné"),I=Xe(e.id).irrigation??e.irrigation,T=document.createElement("div"),k=()=>{T.innerHTML=`
        <div class="m-sheet-option${I?"":" m-sheet-option--active"}" data-pick-irrig="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez un type</span>
          ${I?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${A.map(x=>`
          <div class="m-sheet-option${x===I?" m-sheet-option--active":""}" data-pick-irrig="${x}">
            <span>${x}</span>
            ${x===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,T.querySelectorAll("[data-pick-irrig]").forEach(x=>{x.addEventListener("click",()=>{const g=x.dataset.pickIrrig;g&&g!==I&&(Oe(e.id,{irrigation:g}),e.irrigation=g,je(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Type d'irrigation modifié : ${I||"—"} → ${g}.`}),S(),Y("Type d'irrigation mis à jour")),w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>w.remove(),280)})})},w=ue({title:"Type d'irrigation",body:T,doneLabel:"Fermer",onDone:()=>{}});k()}function r(){const A=gn,I=Xe(e.id).env??e.env??"Plein champ",T=document.createElement("div"),k=()=>{T.innerHTML=A.map(x=>`
        <div class="m-sheet-option${x===I?" m-sheet-option--active":""}" data-pick-env="${x}">
          <span>${x}</span>
          ${x===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
        </div>`).join(""),T.querySelectorAll("[data-pick-env]").forEach(x=>{x.addEventListener("click",()=>{const g=x.dataset.pickEnv;g&&g!==I&&(Oe(e.id,{env:g}),e.env=g,je(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Environnement modifié : ${I||"—"} → ${g}.`}),S(),Y("Environnement mis à jour")),w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>w.remove(),280)})})},w=ue({title:"Environnement",body:T,doneLabel:"Fermer",onDone:()=>{}});k()}function u(){const A=[...Mi,gt],I=Xe(e.id).texture??e.texture,T=document.createElement("div"),k=()=>{T.innerHTML=`
        <div class="m-sheet-option${I?"":" m-sheet-option--active"}" data-pick-texture="">
          <span style="color:var(--txt3,#8e8e93)">Sélectionnez une texture</span>
          ${I?"":'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>'}
        </div>
        ${A.map(x=>`
          <div class="m-sheet-option${x===I?" m-sheet-option--active":""}" data-pick-texture="${x}">
            <span>${x}</span>
            ${x===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
          </div>`).join("")}`,T.querySelectorAll("[data-pick-texture]").forEach(x=>{x.addEventListener("click",()=>{const g=x.dataset.pickTexture;if(w.classList.remove("m-sheet-overlay--show"),setTimeout(()=>w.remove(),280),g===gt){$(I);return}g!==I&&(Oe(e.id,{texture:g||null,soilAnalysis:null}),e.texture=g||null,e.soilAnalysis=null,je(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${I||"—"} → ${g||"—"}.`}),S(),Y("Texture de sol mise à jour"))})})},w=ue({title:"Texture de sol",body:T,doneLabel:"Fermer",onDone:()=>{}});k()}function b(){const A=e.name||"",I=document.createElement("div");I.innerHTML=`<input class="m-sheet-input" type="text" value="${A.replace(/"/g,"&quot;")}" placeholder="Nom de la parcelle">`;const T=I.querySelector("input");ue({title:"Nom",body:I,doneLabel:"Enregistrer",onDone:()=>{const k=T.value.trim();k&&k!==A&&(Oe(e.id,{name:k}),e.name=k,je(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Nom de la parcelle modifié : ${A} → ${k}.`}),S(),Y("Nom mis à jour"))}}),setTimeout(()=>T.focus(),300)}function f(){const A=e.variety||"",I=document.createElement("div");I.innerHTML=`<input class="m-sheet-input" type="text" value="${A.replace(/"/g,"&quot;")}" placeholder="Variété">`;const T=I.querySelector("input");ue({title:"Variété",body:I,doneLabel:"Enregistrer",onDone:()=>{const k=T.value.trim();k!==A&&(Oe(e.id,{variety:k||null}),e.variety=k||null,je(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Variété modifiée : ${A||"—"} → ${k||"—"}.`}),S(),Y("Variété mise à jour"))}}),setTimeout(()=>T.focus(),300)}function y(){const A=cropOptions,I=e.crop,T=document.createElement("div");T.innerHTML=A.map(w=>`
      <div class="m-sheet-option${w===I?" m-sheet-option--active":""}" data-pick-crop="${w}">
        <span>${w}</span>
        ${w===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const k=ue({title:"Culture",body:T,doneLabel:"Fermer",onDone:()=>{}});T.querySelectorAll("[data-pick-crop]").forEach(w=>{w.addEventListener("click",()=>{const x=w.dataset.pickCrop;k.classList.remove("m-sheet-overlay--show"),setTimeout(()=>k.remove(),280),x!==I&&(Oe(e.id,{crop:x,phenoStage:null}),e.crop=x,e.phenoStage=null,je(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Culture modifiée : ${I||"—"} → ${x}.`}),S(),Y("Culture mise à jour"))})})}function h(){const A=No(e.crop),I=e.phenoStage,T=document.createElement("div");T.innerHTML=A.map(w=>`
      <div class="m-sheet-option${w===I?" m-sheet-option--active":""}" data-pick-stade="${w}">
        <span>${w}</span>
        ${w===I?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const k=ue({title:"Stade phénologique",body:T,doneLabel:"Fermer",onDone:()=>{}});T.querySelectorAll("[data-pick-stade]").forEach(w=>{w.addEventListener("click",()=>{const x=w.dataset.pickStade;k.classList.remove("m-sheet-overlay--show"),setTimeout(()=>k.remove(),280),x!==I&&(Oe(e.id,{phenoStage:x}),e.phenoStage=x,je(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Stade phénologique modifié : ${I||"—"} → ${x}.`}),S(),Y("Stade phénologique mis à jour"))})})}function $(A){const I=Xe(e.id).soilAnalysis??e.soilAnalysis??{},T=document.createElement("div");T.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:12px">
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
    </div>`,ue({title:"Analyse de sol",body:T,doneLabel:"Enregistrer",onDone:()=>{var q,j,C;const k=+(((q=T.querySelector("#soil-argile"))==null?void 0:q.value)||0),w=+(((j=T.querySelector("#soil-limon"))==null?void 0:j.value)||0),x=+(((C=T.querySelector("#soil-sable"))==null?void 0:C.value)||0),g={argile:k,limon:w,sable:x};Oe(e.id,{texture:gt,soilAnalysis:g}),e.texture=gt,e.soilAnalysis=g,je(e.id,{type:"modification",date:new Date().toISOString().slice(0,10),texte:`Texture de sol modifiée : ${A||"—"} → analyse de sol (argile ${k}% / limon ${w}% / sable ${x}%).`}),S(),Y("Analyse de sol enregistrée")}})}function E(){const A=Xe(e.id).volumeMaxM3??e.volumeMaxM3??null,I=document.createElement("div");I.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
      <label class="m-form-label">Volume limité (m³)</label>
      <input type="number" class="m-sheet-input" id="edit-volume-max" value="${A??""}" placeholder="Ex : 33000" step="100" min="0">
    </div>`,ue({title:"Volume limité de la parcelle",body:I,doneLabel:"Appliquer",onDone:()=>{var w;const T=(w=I.querySelector("#edit-volume-max"))==null?void 0:w.value,k=T===""?null:Math.max(0,+T);Oe(e.id,{volumeMaxM3:k}),e.volumeMaxM3=k,S(),Y("Volume limité mis à jour")}})}const P=["IRRÉ-LIS Multi-Cultures","IRRÉ-LIS Mono-Culture","DeciTrait","Limacapt","Modèles Arvalis — PRÉVI-LIS / MILÉOS","Xarvio","Pixagri","VitiMeteo","Rimpro","Cropwise Protector","Movida GrapeVision"];function L(){let A=[...e.integrations||[]];function I(k){const w=P.filter(x=>!A.includes(x));k.innerHTML=`
        <div class="m-list-section-header">${A.length?`Actives (${A.length})`:"Actives"}</div>
        <div class="m-list">
          ${A.length?A.map((x,g)=>`
            <div class="m-list-row${g===A.length-1?" m-list-row--last":""}" style="gap:10px">
              ${wi(x)}
              <span class="m-list-row-label" style="flex:1">${x}</span>
              <button class="btn-unlink-integ" data-integ="${x}" style="border:none;background:none;color:#ff3b30;font-size:13px;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Délier</button>
            </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucune intégration active</span></div>'}
        </div>
        ${w.length?`
        <div class="m-list-section-header">Disponibles</div>
        <div class="m-list">
          ${w.map((x,g)=>`
            <div class="m-list-row${g===w.length-1?" m-list-row--last":""}" style="gap:10px">
              ${wi(x)}
              <span class="m-list-row-label" style="flex:1">${x}</span>
              <button class="btn-add-integ" data-integ="${x}" style="border:none;background:none;color:#0172A4;font-size:13px;font-weight:500;font-family:inherit;cursor:pointer;padding:4px 8px;flex-shrink:0">Lier</button>
            </div>`).join("")}
        </div>`:""}`,k.querySelectorAll(".btn-unlink-integ").forEach(x=>{x.addEventListener("click",()=>{A=A.filter(g=>g!==x.dataset.integ),e.integrations=[...A],je(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${x.dataset.integ} » retirée de la parcelle.`}),I(k),Y("Intégration déliée")})}),k.querySelectorAll(".btn-add-integ").forEach(x=>{x.addEventListener("click",()=>{A.includes(x.dataset.integ)||A.push(x.dataset.integ),e.integrations=[...A],je(e.id,{type:"integration",date:new Date().toISOString().slice(0,10),texte:`Intégration « ${x.dataset.integ} » activée sur la parcelle.`}),I(k),Y("Intégration liée")})})}const T=xe(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>${e.name}</span></button>
          <span style="font-size:17px;font-weight:600">Intégrations</span>
          <div style="width:60px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="integ-list-content" style="padding-bottom:32px"></div>`);T.querySelector(".m-detail-back").addEventListener("click",fe),I(T.querySelector("#integ-list-content"))}function S(){const A=d.querySelector("#detail-content");a==="widgets"&&(A.innerHTML=oa(e,i)),a==="donnees"&&(A.innerHTML=ma(i,s,l,e.id)),a==="params"&&(A.innerHTML=ba(e,n,i),H()),z()}function H(){const A=window.L;A&&setTimeout(()=>{var k;const I=d.querySelector("#parcel-minimap");if(!I)return;const T=A.map(I,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(A.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(T),((k=e.latlngs)==null?void 0:k.length)>=3){const w=A.polygon(e.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(T);T.fitBounds(w.getBounds(),{padding:[8,8]})}else T.setView([e.lat,e.lng],14),A.circleMarker([e.lat,e.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(T)},50)}function z(){var A,I,T,k,w,x,g,q,j;(A=d.querySelector(".m-prev5j-voir-details"))==null||A.addEventListener("click",()=>ra(e)),(I=d.querySelector(".m-period-sel"))==null||I.addEventListener("change",C=>{s=C.target.value,s==="j7j2"&&(l="1d"),S()}),(T=d.querySelector(".m-step-sel"))==null||T.addEventListener("change",C=>{l=C.target.value,S()}),(k=d.querySelector(".m-export-btn"))==null||k.addEventListener("click",()=>pa(e,i,s)),d.querySelectorAll(".m-chart-svg-wrap").forEach(C=>sa(C)),d.querySelectorAll(".m-wsensor-voir-donnees[data-sensor-id]").forEach(C=>{C.addEventListener("click",()=>{const F=+C.dataset.sensorId,D=re.find(M=>M.id===F);D&&ge(()=>import("./chart-fullscreen-DEDxXQIB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(M=>M.initChartFullscreen({sensor:D,linkedSensorIds:i,metricId:C.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),d.querySelectorAll(".m-irrig-footer-link").forEach(C=>{C.addEventListener("click",()=>{a="donnees",d.querySelectorAll(".m-detail-tab").forEach(F=>F.classList.toggle("active",F.dataset.view==="donnees")),S(),requestAnimationFrame(()=>{var F;(F=d.querySelector('.m-chart-card[data-metric-id="irrigation"]'))==null||F.scrollIntoView({block:"start"})})})}),d.querySelectorAll(".m-chart-details-link").forEach(C=>{C.addEventListener("click",()=>{if(C.dataset.metricId==="irrigation"){ge(()=>import("./chart-fullscreen-DEDxXQIB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(M=>M.initChartFullscreen({linkedSensorIds:i,metricId:"irrigation",backLabel:e.name,parcel:e}));return}const F=+C.dataset.sensorId,D=re.find(M=>M.id===F);D&&ge(()=>import("./chart-fullscreen-DEDxXQIB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(M=>M.initChartFullscreen({sensor:D,linkedSensorIds:i,metricId:C.dataset.metricId||null,backLabel:e.name,parcel:e}))})}),(w=d.querySelector(".m-il-detail-btn"))==null||w.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>Hs),void 0).then(C=>C.openIrrelisDetail(e))}),d.querySelectorAll(".m-msr-add-btn").forEach(C=>{C.addEventListener("click",()=>ta(C))}),d.addEventListener("click",C=>{const F=C.target.closest(".m-cumul-add-btn");if(F){const M=F.dataset.cumulMetricId,R=F.dataset.cumulVal,G=Vo[M];if(!G)return;const oe=document.createElement("div");oe.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${G.metricLabel}</strong> (<em>${R}</em>) au tableau de bord de <strong>${e.name}</strong> ?</div>`,ue({title:"Tableau de bord",body:oe,doneLabel:"Ajouter",onDone:()=>{const Z=M==="hf"?{cold:Ce.hfSeuil}:M==="dj"?{low:Ce.djMin,high:Ce.djMax}:null;if(Js({metricId:M,...G,subjectKey:`p-${e.id}`,subjectLabel:e.name,fromDate:`${new Date().getFullYear()}-01-01`,value:R,thresholds:Z})==="max"){Y("Maximum de cumuls atteint (5)");return}Y("Cumul ajouté au tableau de bord")}});return}const D=C.target.closest(".m-cumul-edit-btn");if(D){const M=D.dataset.cumulMetricId,R=document.createElement("div");M==="hf"?(R.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Ce.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:R,doneLabel:"Appliquer",onDone:()=>{var G;Ce.hfSeuil=+(((G=R.querySelector("#edit-hf-seuil"))==null?void 0:G.value)??7.2),S()}})):M==="dj"&&(R.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Ce.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Ce.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:R,doneLabel:"Appliquer",onDone:()=>{var G,oe;Ce.djMin=+(((G=R.querySelector("#edit-dj-min"))==null?void 0:G.value)??0),Ce.djMax=+(((oe=R.querySelector("#edit-dj-max"))==null?void 0:oe.value)??18),S()}}));return}}),d.querySelectorAll("[data-open-sensor]").forEach(C=>{C.addEventListener("click",()=>{const F=+C.dataset.openSensor,D=re.find(M=>M.id===F);D&&ge(()=>Promise.resolve().then(()=>Ai),void 0).then(M=>M.initSensorDetail(D,"donnees",Jt))})}),d.querySelectorAll(".btn-sensor-more").forEach(C=>{C.addEventListener("click",F=>{F.stopPropagation();const D=+C.dataset.sensorId,M=re.find(Z=>Z.id===D);if(!M)return;const R=M.model==="P+"||M.model==="PT"?"Station météo":M.model==="P"?"Pluviomètre":M.model,G=document.createElement("div");G.innerHTML=`
          <div style="padding:8px 0">
            <button id="sheet-open-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;text-align:left">
              <i class="bi bi-broadcast" style="color:#0172A4;width:22px;text-align:center"></i>Voir la fiche capteur
            </button>
            <div style="height:.5px;background:rgba(0,0,0,.1);margin:0 20px"></div>
            <button id="sheet-unlink-sensor" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;color:#ff3b30;text-align:left">
              <i class="bi bi-x-circle" style="width:22px;text-align:center"></i>Délier de cette parcelle
            </button>
          </div>`;const oe=ue({title:`${R} · ${M.serial}`,body:G,doneLabel:"Fermer",onDone:()=>{}});G.querySelector("#sheet-open-sensor").addEventListener("click",()=>{oe.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{oe.remove(),ge(()=>Promise.resolve().then(()=>Ai),void 0).then(Z=>Z.initSensorDetail(M,"donnees",Jt))},280)}),G.querySelector("#sheet-unlink-sensor").addEventListener("click",()=>{oe.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{oe.remove(),Nt({title:"Délier le capteur",message:`Délier <strong>${R} — ${M.serial}</strong> de <strong>${e.name}</strong> ?`,confirmLabel:"Délier",confirmColor:"#ff3b30",onConfirm:()=>{const Z=i.indexOf(D);Z!==-1&&i.splice(Z,1),M.parcelIds=M.parcelIds.filter(ae=>ae!==e.id),S(),Y(`${M.serial} délié`)}})},280)})})}),d.querySelectorAll(".m-list-row[data-action]").forEach(C=>{C.addEventListener("click",()=>{if(C.dataset.action==="edit-exploitation")m();else if(C.dataset.action==="edit-name")b();else if(C.dataset.action==="edit-crop")y();else if(C.dataset.action==="edit-variety")f();else if(C.dataset.action==="edit-stade")h();else if(C.dataset.action==="edit-env")r();else if(C.dataset.action==="edit-irrigation")v();else if(C.dataset.action==="edit-volume-max")E();else if(C.dataset.action==="edit-texture")u();else if(C.dataset.action==="edit-integrations")L();else if(C.dataset.action==="delete-parcel"){const F=document.createElement("div");F.innerHTML=`
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
          `;const D=ue({title:"Supprimer la parcelle ?",body:F,doneLabel:"Annuler",onDone:()=>{}});F.querySelector("#do-delete-parcel").addEventListener("click",()=>{D.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{D.remove(),bn(e.id,ce),fe(),window.dispatchEvent(new CustomEvent("parcel-deleted",{detail:{id:e.id}}))},280)})}else Y("Fonctionnalité à venir")})}),d.querySelectorAll(".m-widget-menu").forEach(C=>{C.addEventListener("click",F=>{var Z;F.stopPropagation();const D=C.dataset.wid;if(!D)return;(Z=d.querySelector(".m-widget-dd"))==null||Z.remove();const M=document.createElement("div");M.className="m-widget-dd",M.style.cssText="position:absolute;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:200;overflow:hidden;min-width:180px",M.innerHTML=`<button class="m-widget-dd-remove" data-wid="${D}" style="display:block;width:100%;text-align:left;padding:14px 16px;border:none;background:none;font-size:14px;color:#ff3b30;font-family:inherit;cursor:pointer">Retirer le widget</button>`;const R=d.querySelector(".m-detail-content"),G=C.getBoundingClientRect(),oe=R.getBoundingClientRect();M.style.top=`${G.bottom-oe.top+R.scrollTop+4}px`,M.style.right=`${oe.right-G.right}px`,R.style.position="relative",R.appendChild(M),M.querySelector(".m-widget-dd-remove").addEventListener("click",()=>{M.remove();const ae=Wt(e,i).filter(me=>me!==D);Xs(e.id,ae),S()}),setTimeout(()=>document.addEventListener("click",()=>M.remove(),{once:!0}),0)})}),(x=d.querySelector(".m-add-widget-btn"))==null||x.addEventListener("click",()=>Uo(e,i,S)),(g=d.querySelector(".m-irrig-act-saisie"))==null||g.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>st),void 0).then(C=>C.openIrrigationSaisie([e],Y,{ids:[e.id],label:e.name},!0,S))}),(q=d.querySelector(".m-irrig-act-saison"))==null||q.addEventListener("click",()=>{ge(()=>Promise.resolve().then(()=>st),void 0).then(C=>C.openIrrigationStrategie([e],Y,{ids:[e.id],label:e.name},null,!0,S))}),(j=d.querySelector(".m-irrig-set-type"))==null||j.addEventListener("click",()=>{a="params",d.querySelectorAll(".m-detail-tab").forEach(C=>C.classList.toggle("active",C.dataset.view==="params")),S(),v()}),d.querySelectorAll(".m-pcumul-del").forEach(C=>{C.addEventListener("click",F=>{F.stopPropagation();const D=+C.dataset.pid,M=rt(D),R=new Set(M.hidden||[]);R.add(C.dataset.cid),zt(D,{hidden:[...R]}),S()})}),d.querySelectorAll(".m-pcumul-date").forEach(C=>{C.addEventListener("click",()=>{var F;return(F=C.showPicker)==null?void 0:F.call(C)}),C.addEventListener("change",()=>{const F=+C.dataset.pid,D=C.dataset.cid,M=C.value;if(!M||(Date.now()-new Date(M))/864e5>365)return;const oe=rt(F).dates||{};oe[D]=M,zt(F,{dates:oe});const Z=C.closest(".m-cumuls-saved-card"),ae=Z==null?void 0:Z.querySelector(".m-pcumul-value");if(ae){const me=Z.querySelector(".m-pcumul-unit"),Ee=(me==null?void 0:me.textContent.trim())||"",ze=tt(F,D,M);ae.innerHTML=`${ze}<span class="m-pcumul-unit">${Ee}</span>`}})}),d.querySelectorAll(".m-pcumul-cfg").forEach(C=>{C.addEventListener("click",F=>{var ae;F.stopPropagation();const D=+C.dataset.pid,M=C.dataset.cid,G={...rt(D).cfg},oe=aa[M];if(!oe)return;(ae=d.querySelector(".m-pcumul-cfg-panel"))==null||ae.remove();const Z=document.createElement("div");Z.className="m-pcumul-cfg-panel",Z.style.cssText="background:#f2f2f7;border-radius:12px;padding:12px 14px;margin:4px 0 0;display:flex;flex-direction:column;gap:8px",Z.innerHTML=oe.map(me=>`
          <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px">
            <span>${me.label}</span>
            <input type="number" class="m-pcumul-cfg-inp" data-key="${me.key}" value="${G[me.key]??me.def}" step="0.1" style="width:80px;padding:4px 8px;border:1px solid rgba(0,0,0,.15);border-radius:8px;font-size:13px;font-family:inherit">
          </label>`).join("")+'<button class="m-pcumul-cfg-ok" style="padding:8px;background:#0172A4;color:#fff;border:none;border-radius:8px;font-size:13px;font-family:inherit;cursor:pointer">OK</button>',C.closest(".m-cumuls-saved-card").after(Z),Z.querySelector(".m-pcumul-cfg-ok").addEventListener("click",()=>{Z.querySelectorAll(".m-pcumul-cfg-inp").forEach(me=>{G[me.dataset.key]=parseFloat(me.value)||0}),zt(D,{cfg:G}),Z.remove(),S()})})}),d.querySelectorAll(".m-pcumul-add").forEach(C=>{C.addEventListener("click",F=>{F.stopPropagation();const D=+C.dataset.pid,M=C.dataset.cid,R=rt(D),G=new Set(R.hidden||[]);G.delete(M),zt(D,{hidden:[...G]}),S()})})}d.querySelectorAll(".m-detail-tab").forEach(A=>{A.addEventListener("click",()=>{d.querySelectorAll(".m-detail-tab").forEach(I=>I.classList.remove("active")),A.classList.add("active"),a=A.dataset.view,S()})}),d.querySelector(".m-detail-back").addEventListener("click",fe),d.querySelector("#d-star").addEventListener("click",()=>{p=!p;const A=d.querySelector("#d-star");A.querySelector("i").className=p?"bi bi-star-fill":"bi bi-star",A.style.color=p?"#f5c842":"",Y(p?"Ajouté aux favoris":"Retiré des favoris")}),d.querySelector("#d-plus").addEventListener("click",()=>{var A;(A=window.showMobileAddPage)==null||A.call(window)}),d.querySelector("#d-journal").addEventListener("click",()=>$a(e)),S()}function ha(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}const ga=["Observation générale","Préparation du sol (labour)","Préparation du sol (strip-till)","Préparation du sol (sous-solage)","Fertilisation","Semis","Récolte","Stade phénologique","Passage de sangliers","Gestion de haie bocagère","Irrigation manuelle","Autre"],ki=e=>{const[i,t,o]=e.split("-");return`${o}/${t}/${i}`};function ya(e){const i=[],t=(n,a)=>i.push({id:`auto-mod-${n}-${a.slice(0,16)}`,type:"modification",date:n,texte:a,_system:!0});t("2024-01-01","Création de la parcelle"),e.crop&&t("2024-03-15",`Culture définie : ${e.crop}`);const o=e.substrate?`Substrat : ${e.substrate}`:e.texture;return o&&t("2024-03-15",`Texture de sol définie : ${o}`),e.irrigation&&t("2024-04-01",`Type d'irrigation défini : ${e.irrigation}`),i}function xa(e){const i=[],t=pe.filter(n=>n.plotId===e);t.filter(n=>!n.fromStrategy).forEach(n=>{i.push({id:`auto-irrig-${n.iso}-${n.mm}`,type:"irrigation",date:n.iso,texte:n.real?`Irrigation ponctuelle de ${n.mm} mm enregistrée.`:`Irrigation ponctuelle de ${n.mm} mm planifiée.`,_system:!0})});const o=new Map;return t.filter(n=>n.fromStrategy&&n.seasonId).forEach(n=>{o.has(n.seasonId)||o.set(n.seasonId,[]),o.get(n.seasonId).push(n)}),o.forEach((n,a)=>{n.sort((d,m)=>d.iso.localeCompare(m.iso));const s=n[0],l=n[n.length-1],p=s.mm,c=n.length>1?Math.round((new Date(n[1].iso)-new Date(n[0].iso))/864e5):7;i.push({id:`auto-irrig-season-${a}`,type:"irrigation",date:s.iso,texte:`Saison d'irrigation programmée : ${p} mm tous les ${c} jours, du ${ki(s.iso)} au ${ki(l.iso)} (${n.length} irrigation${n.length>1?"s":""}, ${n.length*p} mm au total).`,_system:!0})}),i}function $a(e){const i=ye.find(a=>a.id===e.orgId),t=(i==null?void 0:i.ville)||"",o=xe(`
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
    <div id="mjrn-content" class="m-detail-content" style="top:96px;overflow-y:auto"></div>`);o.querySelector(".m-detail-back").addEventListener("click",fe);function n(){var v,r;const a=o.querySelector("#mjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(u=>u.linkedType==="parcel"&&u.linkedId===e.id).map((u,b)=>({id:`dash-${b}`,type:"note",date:u.date,texte:u.text,auteur:u.auteur,role:u.role,_fromDashboard:!0})),l=[...ya(e),...xa(e.id)],p=[...Vt(e.id),...s,...l].sort((u,b)=>b.date.localeCompare(u.date)),c=ki,d={note:{label:"Note",icon:"bi-pencil",dotColor:"#3a7bd5",dotBg:"#eef4ff",badgeCls:"note"},traitement:{label:"Traitement",icon:"bi-eyedropper",dotColor:"#3a7a38",dotBg:"#f2faf0",badgeCls:"traitement"},irrigation:{label:"Irrigation",icon:"bi-droplet-half",dotColor:"#1d4ed8",dotBg:"#eff6ff",badgeCls:"irrigation"},integration:{label:"Intégration",icon:"bi-plug-fill",dotColor:"#7a4fa0",dotBg:"#f5f0fb",badgeCls:"integration"},modification:{label:"Modification",icon:"bi-pencil-square",dotColor:"#7a6a1e",dotBg:"#fdf8ee",badgeCls:"modification"}};let m=`
      <div style="padding:12px 16px 4px;display:flex;flex-direction:column;gap:8px">
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-note">
          <i class="bi bi-pencil-square"></i> Ajouter une note
        </button>
        <button class="w-irrig-act-btn w-irrig-act-btn--sec" id="mjrn-add-trait">
          <i class="bi bi-eyedropper"></i> Ajouter un traitement
        </button>
      </div>
    `;p.length===0?m+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(m+='<div class="m-jrn-timeline">',p.forEach((u,b)=>{const f=d[u.type]||d.note,y=u.type==="traitement",h=b===p.length-1,$=!!u._fromDashboard,E=!!u._system;m+=`
          <div class="m-jrn-entry" data-id="${u.id}">
            <div class="m-jrn-aside">
              <div class="m-jrn-dot" style="background:${f.dotBg};color:${f.dotColor};border-color:${f.dotColor}40">
                <i class="bi ${f.icon}"></i>
              </div>
              ${h?"":'<div class="m-jrn-line"></div>'}
            </div>
            <div class="m-jrn-body">
              <div class="m-jrn-hd">
                <span class="m-jrn-date">${c(u.date)}</span>
                <span class="journal-type-badge journal-type-badge--${f.badgeCls}">${f.label}</span>
                ${$?'<span style="font-size:10px;background:#f2f2f7;color:#8e8e93;border-radius:4px;padding:1px 5px">Dashboard</span>':E?"":`<button class="m-jrn-del" data-id="${u.id}"><i class="bi bi-trash3"></i></button>`}
              </div>
              ${u.texte?`<div class="m-jrn-texte">${u.texte}</div>`:""}
              ${u.auteur?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${u.auteur}${ha(u.role)}</div>`:""}
              ${y&&(u.produit||u.dose||u.cible)?`
                <div class="m-jrn-meta">
                  ${u.produit?`<span class="m-jrn-chip"><i class="bi bi-flask"></i>${u.produit}</span>`:""}
                  ${u.dose?`<span class="m-jrn-chip"><i class="bi bi-droplet"></i>${u.dose}</span>`:""}
                  ${u.cible?`<span class="m-jrn-chip"><i class="bi bi-bullseye"></i>${u.cible}</span>`:""}
                </div>`:""}
            </div>
          </div>`}),m+="</div>"),a.innerHTML=m,(v=a.querySelector("#mjrn-add-note"))==null||v.addEventListener("click",()=>us("note",e.id,n)),(r=a.querySelector("#mjrn-add-trait"))==null||r.addEventListener("click",()=>us("traitement",e.id,n)),a.querySelectorAll(".m-jrn-del").forEach(u=>{u.addEventListener("click",()=>{const b=parseInt(u.dataset.id);Ti(e.id,Vt(e.id).filter(f=>f.id!==b)),n()})})}n()}function us(e,i,t){const o=e==="traitement",n=new Date().toISOString().slice(0,10),a=Jt==="admin"?"conseiller":"membre",s=ye.find(c=>c.id===(Jt==="admin"?100:1)),l=s?`${s.prenomProprietaire} ${s.nomProprietaire}`:"Jean Dupont",p=document.createElement("div");p.innerHTML=`
    <div style="display:flex;flex-direction:column;gap:12px">
      ${o?"":`
      <div>
        <div class="m-form-label">Catégorie</div>
        <select class="m-sheet-input" id="mjf-category">
          ${ga.map(c=>`<option value="${c}">${c}</option>`).join("")}
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
    </div>`,ue({title:o?"Ajouter un traitement":"Ajouter une note",body:p,doneLabel:"Enregistrer",onDone:()=>{var r;const c=p.querySelector("#mjf-date").value||n,d=p.querySelector("#mjf-texte").value.trim(),m=o?"":((r=p.querySelector("#mjf-category"))==null?void 0:r.value)||"",v={id:Date.now(),type:e,date:c,texte:d,auteur:l,role:a};o||(v.category=m),o&&(v.produit=p.querySelector("#mjf-produit").value.trim(),v.dose=p.querySelector("#mjf-dose").value.trim(),v.cible=p.querySelector("#mjf-cible").value.trim()),!(!d&&!v.produit)&&(Ti(i,[v,...Vt(i)]),t())}}),setTimeout(()=>{var c;return(c=p.querySelector("#mjf-texte"))==null?void 0:c.focus()},380)}const dt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:Si},Symbol.toStringTag,{value:"Module"})),ft=100,wa={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function bt(e,i){if(i==="irrelis")return Ct(e);const t=wa[i];return t?re.some(o=>o.parcelIds.includes(e.id)&&t.includes(o.model)):!0}const Dt=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"nrs",label:"Niveau de réservoir (spatialisé)",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Hier"],defaultAgg:"7 derniers jours"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"},{id:"irrelis",label:"Irré-LIS",unit:"mm",aggs:["Aujourd'hui","Demain","J+3","J+5"],defaultAgg:"Aujourd'hui"}];function Sa(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function ps(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"irrigation":return i===0?"#c7c7cc":i<30?"#FFDFB8":"#FF8C00";case"etp":return i<2?"#D6EDF9":i<5?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"temp_rosee":return i<5?"#D2DEFA":i<12?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"rfu":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"nrs":return i<30?"#E05252":i<60?"#FBAF05":"#24B066";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";case"irrelis":return i>=35?"#24B066":i>=12?"#E8A020":"#E05252";default:return"#0172A4"}}function ka(e,i){const t=new Date().toISOString().split("T")[0],o=s=>{const l=new Date;return l.setDate(l.getDate()-s),l.toISOString().split("T")[0]},n=s=>{const l=new Date;return l.setDate(l.getDate()+s),l.toISOString().split("T")[0]},a=pe.filter(s=>s.plotId===e);switch(i){case"Aujourd'hui":return a.filter(s=>s.iso===t).reduce((s,l)=>s+l.mm,0);case"7 derniers jours":return a.filter(s=>s.real&&s.iso>=o(7)).reduce((s,l)=>s+l.mm,0);case"30 derniers jours":return a.filter(s=>s.real&&s.iso>=o(30)).reduce((s,l)=>s+l.mm,0);case"Demain":return a.filter(s=>!s.real&&s.iso===n(1)).reduce((s,l)=>s+l.mm,0);case"7 prochains jours":return a.filter(s=>!s.real&&s.iso>t&&s.iso<=n(7)).reduce((s,l)=>s+l.mm,0);case"30 prochains jours":return a.filter(s=>!s.real&&s.iso>t&&s.iso<=n(30)).reduce((s,l)=>s+l.mm,0);case"Toute la saison":return a.filter(s=>s.real).reduce((s,l)=>s+l.mm,0);default:return a.filter(s=>s.real).reduce((s,l)=>s+l.mm,0)}}function Ea(e){switch(e){case"irrigation":return 0;case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"nrs":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function La(e,i){let t=e.querySelector("#parcelles-content");t||(t=document.createElement("div"),t.id="parcelles-content",e.appendChild(t));const o=i==="admin",n=ye.filter(h=>h.id!==ft);Object.fromEntries(ye.map(h=>[h.id,h]));let a=null,s=null;const l={};let p="carte",c="pluie",d="7 derniers jours",m="all";function v(h){if(c==="irrigation")return ka(h,d);if(c==="irrelis"){const E=ce.find(P=>P.id===h);return E?Math.round(Ii(E,d)):0}const $=`${h}-${c}-${d}`;return $ in l||(l[$]=Ea(c)),l[$]}function r(){return i==="new"||i==="new-adherent"?[]:o?m==="all"?ce:m===String(ft)?ce.filter(h=>h.orgId===ft):ce.filter(h=>String(h.orgId)===m):ce.filter(h=>h.orgId===1)}function u(){if(a){try{a.remove()}catch{}a=null,s=null}}function b(){u();const h=Dt.find(S=>S.id===c)||Dt[0],$=r(),E=o?`
      <select class="m-filter-select" id="org-filter" style="flex:0 0 44px;height:44px">
        <option value="all">Toutes les organisations</option>
        <option value="${ft}"${m===String(ft)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${n.map(S=>`<option value="${S.id}"${m===String(S.id)?" selected":""}>${S.name}</option>`).join("")}
      </select>`:"",P=[...$].sort((S,H)=>{const z=bt(S,c),A=bt(H,c);return z&&!A?-1:!z&&A?1:z?v(H.id)-v(S.id):S.name.localeCompare(H.name,"fr")}),L=P.length?`<div class="m-plain-list">${P.map(S=>{var T,k,w;const H=((T=S.latlngs)==null?void 0:T.length)>0||((k=S.shape)==null?void 0:k.type)==="polygon"||((w=S.shape)==null?void 0:w.type)==="rectangle",z=[S.crop,S.irrigation,H&&S.area?`${S.area} ha`:null].filter(Boolean).join(" · "),A=bt(S,c),I=re.filter(x=>x.parcelIds.includes(S.id)).some(x=>x.event&&(Array.isArray(x.event)?x.event.length>0:!0));return`
            <div class="m-plain-row m-tappable" data-plot-id="${S.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${S.name}${I?' <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#ff3b30;vertical-align:middle;margin-left:3px"></span>':""}</span>
                ${z?`<span class="m-plain-city">${z}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                ${(()=>{const x=A&&!(c==="irrigation"&&!pe.some(q=>q.plotId===S.id)),g=x?v(S.id):null;return`<span class="m-plain-data${x?"":" m-plain-na"}"${x?` style="color:${ps(c,g)}"`:""}>${x?`${g} ${h.unit}`:"—"}</span>`})()}
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
            ${Dt.map(S=>`<option value="${S.id}"${S.id===c?" selected":""}>${S.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${h.aggs.map(S=>`<option${S===d?" selected":""}>${S}</option>`).join("")}
          </select>
        </div>
        ${E}
      </div>
      ${p==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${L}</div>`}`,y(),p==="carte"&&f($,h)}function f(h,$){const E=window.L;E&&setTimeout(()=>{const P=t.querySelector("#parcel-map");if(!P)return;if(a=E.map(P,{zoomControl:!1,attributionControl:!1}),E.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(a),!h.length&&(i==="new"||i==="new-adherent")){const S=ye.find(A=>A.id===1);S&&a.setView([S.lat,S.lng],13),a.invalidateSize();const H=P.parentElement;H.style.position="relative";const z=document.createElement("div");z.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",z.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-geo-alt" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de parcelle</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Créez votre première parcelle pour commencer à suivre vos cultures.</p>
            <button id="empty-create-parcel-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Créer une parcelle</button>
          </div>`,H.appendChild(z),H.querySelector("#empty-create-parcel-btn").addEventListener("click",()=>{var A;return(A=window.showMobileAddPage)==null?void 0:A.call(window)});return}const L=[];h.forEach(S=>{var q;const H=c!=="irrigation"||pe.some(j=>j.plotId===S.id),z=bt(S,c)&&H?`${v(S.id)} ${$.unit}`:"—",A=re.filter(j=>j.parcelIds.includes(S.id)).map(j=>j.id),I=()=>Si(S,A),T=[S.lat,S.lng],k=bt(S,c)&&H,w=k?ps(c,v(S.id)):"#0172A4";S.latlngs&&S.latlngs.length>=3?(E.polygon(S.latlngs,{color:"#fff",weight:2,fillColor:w,fillOpacity:.35}).addTo(a).on("click",I),L.push(...S.latlngs)):L.push(T);const x=E.circleMarker(T,{radius:k?8:6,color:"#fff",weight:2,fillColor:w,fillOpacity:k?.95:.4}).addTo(a);if(A.some(j=>{const C=re.find(F=>F.id===j);return(C==null?void 0:C.event)&&(Array.isArray(C.event)?C.event.length>0:!0)})&&E.marker(T,{icon:E.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(a),k){x.bindTooltip(z,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const j=F=>{if(!F)return;const D=Sa(w);F.style.setProperty("background",w,"important"),F.style.setProperty("color",D,"important"),F.style.setProperty("border-color",D,"important"),F.style.setProperty("box-shadow","none","important")},C=(q=x.getTooltip())==null?void 0:q.getElement();C&&j(C),x.on("tooltipopen",F=>j(F.tooltip.getElement()))}x.on("click",I)}),L.length&&(s=L,a.fitBounds(L,{padding:[32,32]})),a.invalidateSize()},0)}window.addEventListener("m-tab-change",h=>{h.detail==="parcelles"&&p==="carte"&&a&&setTimeout(()=>{a.invalidateSize(),s!=null&&s.length&&a.fitBounds(s,{padding:[32,32]})},50)});function y(){var h,$,E;t.querySelectorAll(".m-view-btn").forEach(P=>P.addEventListener("click",()=>{p=P.dataset.view,b()})),(h=t.querySelector("#metric-sel"))==null||h.addEventListener("change",P=>{var L;c=P.target.value,d=((L=Dt.find(S=>S.id===c))==null?void 0:L.defaultAgg)||"",b()}),($=t.querySelector("#agg-sel"))==null||$.addEventListener("change",P=>{d=P.target.value,b()}),(E=t.querySelector("#org-filter"))==null||E.addEventListener("change",P=>{m=P.target.value,b()}),t.querySelectorAll(".m-tappable[data-plot-id]").forEach(P=>{P.addEventListener("click",()=>{const L=ce.find(H=>H.id===+P.dataset.plotId);if(!L)return;const S=re.filter(H=>H.parcelIds.includes(L.id)).map(H=>H.id);Si(L,S)})})}b()}const Ae={djMin:0,djMax:18,hfSeuil:7.2},Ca={dj:{metricLabel:"Degrés-jours",unit:"DJ",icon:"bi-thermometer-sun",color:"#FBAF05"},hf:{metricLabel:"Heures de froid",unit:"h",icon:"bi-thermometer-low",color:"#5AC8FA"},pluie:{metricLabel:"Cumul de pluie",unit:"mm",icon:"bi-droplet-fill",color:"#2E75B6"},rayo:{metricLabel:"Rayonnement solaire",unit:"MJ",icon:"bi-sun-fill",color:"#CBCB0B"},etp:{metricLabel:"Évapotranspiration",unit:"mm",icon:"bi-moisture",color:"#7DBDD7"},humec:{metricLabel:"Humectation foliaire",unit:"h",icon:"bi-droplet-half",color:"#00887E"}},Aa=4,Ma={"365d":"365 derniers jours","30d":"30 derniers jours","7d":"7 derniers jours",hier:"Hier","1d":"Aujourd'hui",custom:"Personnalisé"},Ta={"1h":"Horaire","1d":"Journalier","1w":"Hebdo"},Ia={"cuillère bloquée":{icon:"bi-droplet-fill",summary:"La cuillère du pluviomètre ne se déverse pas correctement. Les mesures de pluie peuvent être inexactes ou nulles.",causes:["Feuilles, insectes ou toiles d'araignées obstruant l'entonnoir","Corps étranger bloquant l'axe de rotation de la cuillère","Dépôts calcaires ou algues dans le mécanisme","Capteur installé hors niveau (non vertical)","Gel partiel du mécanisme en période froide"],solutions:[{n:1,title:"Inspecter l'entonnoir",desc:"Retirez toute feuille, insecte ou débris présent dans l'entonnoir. Inspectez visuellement la cuillère."},{n:2,title:"Tester la cuillère manuellement",desc:"Appuyez alternativement sur chaque compartiment de la cuillère : elle doit basculer librement d'un côté à l'autre."},{n:3,title:"Rincer à l'eau claire",desc:"Versez lentement de l'eau claire dans l'entonnoir. Évitez les détergents qui pourraient laisser des résidus affectant les mesures."},{n:4,title:"Vérifier la verticalité",desc:"Assurez-vous que le mat ou le support est bien vertical à l'aide d'un niveau à bulle. Une inclinaison de 5° peut bloquer la cuillère."},{n:5,title:"Observer les prochaines pluies",desc:"Si l'anomalie persiste après la prochaine pluie, comparez avec une station voisine. Contactez le support si nécessaire."}],diag:[{label:"Dernière mesure de pluie",hint:"Vérifiez si des pluies ont bien été comptabilisées récemment"},{label:"Station voisine",hint:"Comparez avec un autre capteur P ou P+ proche"},{label:"Historique nettoyage",hint:"Vérifiez le journal de maintenance du capteur"},{label:"Saison",hint:"Automne/hiver : vérifiez la présence de gel ou feuilles"}]},"capteur couché":{icon:"bi-phone-landscape",summary:"Le capteur a détecté une position anormale (inclinaison excessive). Les mesures météo peuvent être perturbées.",causes:["Coup de vent violent ayant renversé ou incliné le support","Choc accidentel (passage d'engins agricoles, animaux)","Support ou mat inadapté, insuffisamment ancré","Affaissement du sol après forte pluie","Neige ou givre ayant alourdi le capteur"],solutions:[{n:1,title:"Se rendre sur site",desc:"Vérifiez visuellement l'état du capteur et de son support."},{n:2,title:"Redresser et fixer le support",desc:"Remettez le mat en position verticale. Utilisez un niveau à bulle pour vérifier. Renforcez l'ancrage si nécessaire."},{n:3,title:"Vérifier l'intégrité du capteur",desc:"Inspectez le boîtier, l'antenne et les capteurs externes (anémomètre, girouette, pluvio) pour tout dommage visible."},{n:4,title:"Contrôler la qualité du signal",desc:"Après remise en place, vérifiez que les émissions reprennent normalement et que le signal est bon."},{n:5,title:"Signaler l'anomalie résolue",desc:`Utilisez le bouton "Arrêter" pour clore l'anomalie une fois le capteur en position correcte.`}],diag:[{label:"Qualité du signal",hint:"Un signal dégradé peut indiquer un problème d'antenne"},{label:"Date de l'anomalie",hint:"Correspond-elle à un épisode météo violent ?"},{label:"Type de support",hint:"Mat télescopique, piquet, fixation murale ?"},{label:"Accès terrain",hint:"Vérifiez si la parcelle est accessible (engins, conditions météo)"}]},"émissions interrompues":{icon:"bi-wifi-off",summary:"Le capteur n'émet plus de données. Aucune mesure n'a été reçue depuis un moment anormalement long.",causes:["Batterie déchargée ou défaillante","Perte de couverture réseau télécom (Sigfox / LoRa)","Obstruction physique du signal (bâtiment, relief, végétation)","Défaillance électronique interne","Exposition à l'eau ou à l'humidité excessive (joint endommagé)"],solutions:[{n:1,title:"Vérifier le niveau de batterie",desc:"Accédez aux paramètres du capteur et consultez l'indicateur de batterie. Si critique, procédez au remplacement."},{n:2,title:"Contrôler la couverture réseau",desc:"Vérifiez la carte de couverture Sigfox ou LoRa pour l'emplacement du capteur. Un déplacement de quelques mètres peut suffire."},{n:3,title:"Relancer manuellement",desc:"Sur certains modèles, un appui court sur le bouton d'activation peut forcer une tentative d'émission. Consultez la notice."},{n:4,title:"Inspecter l'étanchéité",desc:"Vérifiez l'état des joints et du boîtier. Une infiltration d'eau peut provoquer des courts-circuits."},{n:5,title:"Contacter le support",desc:"Si les étapes précédentes n'ont pas résolu le problème, le capteur peut nécessiter une réparation ou un remplacement."}],diag:[{label:"Dernière émission",hint:"Il y a combien de temps ? Heure/jour de la dernière trame reçue"},{label:"Couverture réseau",hint:"Vérifiez sur la carte de couverture opérateur"},{label:"Batterie",hint:"Niveau batterie lors de la dernière émission connue"},{label:"Météo récente",hint:"Orage, forte pluie, gel ayant pu affecter le capteur"}]},"capteur déplacé":{icon:"bi-geo-alt",summary:"Le capteur a été détecté à un emplacement différent de sa position habituelle.",causes:["Déplacement intentionnel non enregistré dans l'application","Vol ou déplacement non autorisé du capteur","Dérive GPS en cas de signal GNSS perturbé","Déplacement lors d'opérations agricoles (travaux, irrigation)"],solutions:[{n:1,title:"Vérifier la position actuelle",desc:"Rendez-vous sur site pour confirmer l'emplacement physique du capteur."},{n:2,title:"Mettre à jour la position",desc:"Si le capteur a été déplacé intentionnellement, mettez à jour sa géolocalisation dans les paramètres."},{n:3,title:"Signaler un vol",desc:"Si le capteur a disparu, contactez les autorités et le support Weenat pour signalement et désactivation."},{n:4,title:"Clore l'anomalie",desc:`Une fois la situation clarifiée, utilisez le bouton "Arrêter" pour clore l'événement.`}],diag:[{label:"Coordonnées initiales",hint:"Comparez avec les coordonnées enregistrées dans les paramètres"},{label:"Dernier passage",hint:"Qui a eu accès à la parcelle récemment ?"},{label:"Signal GPS",hint:"Un signal faible peut fausser la localisation sans déplacement réel"}]}};function qa(e,i){const t=Ia[e]||{summary:"Anomalie détectée sur ce capteur.",causes:["Cause inconnue — contactez le support pour plus d'informations."],solutions:[{n:1,title:"Contacter le support",desc:"Décrivez l'anomalie observée pour obtenir de l'aide."}]};let o="causes";function n(v,r,u){return`<button class="m-anom-tab" data-tab="${v}" style="flex:1;padding:10px 4px;background:none;border:none;border-bottom:2px solid ${u?"#0172A4":"transparent"};font-size:13px;font-weight:${u?"600":"400"};color:${u?"#0172A4":"#8e8e93"};cursor:pointer;font-family:inherit;white-space:nowrap">${r}</button>`}function a(){return`<ul style="margin:0;padding:0 0 0 18px;display:flex;flex-direction:column;gap:10px">
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
        ${n("causes","Causes",o==="causes")}
        ${n("solutions","Solutions",o==="solutions")}
        ${n("support","Support",o==="support")}
      </div>`}function c(){return o==="causes"?a():o==="solutions"?s():l()}const d=xe(`
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
  `);d.querySelector("#anom-back").addEventListener("click",fe);function m(){d.querySelectorAll(".m-anom-tab").forEach(v=>{v.addEventListener("click",()=>{o=v.dataset.tab,d.querySelector("#anom-tabs-bar").innerHTML=p(),d.querySelector("#anom-content").innerHTML=c(),m()})})}m()}const Ei={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Pa={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"};function ji(e){return e==="CHP-15/30"?[15,30]:e==="CHP-30/60"?[30,60]:e==="CHP-60/90"?[45,90]:null}function ms(e,i){const t=Ei[e.model]?`${Ei[e.model]} · ${e.model}`:e.model,o=ji(e.model)&&e.depth!=null?`${e.depth} cm`:null;return[t,o,i].filter(Boolean).join(" · ")}const Et={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#2E75B6",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#FBAF05",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#5B12A4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#23B19B",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#5E88EC",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#616161",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#CBCB0B",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#4CBB17",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#00887E",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#A6C157",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#ED9A2C",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#795548",cumul:!1}]};function on(e,i){const t={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[e]||{base:50,amp:20,min:0};return Array.from({length:i},(o,n)=>{const a=n/i*Math.PI*4;if(t.sparse&&Math.random()>.25)return 0;const s=t.base+t.amp*Math.sin(a-1)+(Math.random()-.5)*t.amp*.5;return Math.max(t.min??0,Math.min(t.max??9999,s))})}const an={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function ja(e,i,t,o,n,a=20){const s=an[e]||10080,l=new Date,p=v=>e==="1d"||e==="hier"?`${String(v.getHours()).padStart(2,"0")}h`:e==="365d"?v.toLocaleDateString("fr-FR",{month:"short"}):`${String(v.getDate()).padStart(2,"0")}/${String(v.getMonth()+1).padStart(2,"0")}`,c=4,d=i-t-o,m=n-a;return Array.from({length:c+1},(v,r)=>{const u=r/c,b=new Date(l.getTime()-(1-u)*s*6e4),f=(t+u*d).toFixed(1),y=r===0?"start":r===c?"end":"middle";return[`<line x1="${f}" y1="${m}" x2="${f}" y2="${m+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${f}" y="${n-3}" text-anchor="${y}" font-size="9" fill="#8e8e93" font-family="-apple-system">${p(b)}</text>`].join("")}).join("")}function za(e,i,t,o="7d",n=""){const a=ln[o]||60,s=on(e,a),l=320,p=100,c=34,d=6,m=10,v=20,r=l-c-d,u=p-m-v,b=t?0:Math.min(...s),f=Math.max(...s,b+.001),y=f-b,h=k=>c+k/(s.length-1)*r,$=k=>m+u-(k-b)/y*u,E=`g${Math.random().toString(36).slice(2,8)}`,P=[0,.5,1].map(k=>{const w=b+k*y,x=m+u-k*u;return`<text x="${c-3}" y="${(x+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${w<10?w.toFixed(1):Math.round(w)}</text>`}).join(""),L=[.25,.5,.75].map(k=>`<line x1="${c}" y1="${(m+u-k*u).toFixed(1)}" x2="${l-d}" y2="${(m+u-k*u).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),S=`<line x1="${c}" y1="${m+u}" x2="${l-d}" y2="${m+u}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,H=ja(o,l,c,d,p);if(t){const k=r/s.length*.7;return`<svg viewBox="0 0 ${l} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      ${P}${L}${S}
      ${s.map((w,x)=>{const g=(w-b)/y*u,q=m+u-g;return`<rect x="${(h(x)-k/2).toFixed(1)}" y="${q.toFixed(1)}" width="${k.toFixed(1)}" height="${g.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${H}
    </svg>`}const z=s.map((k,w)=>[h(w),$(k)]),A=z.map(([k,w],x)=>`${x?"L":"M"}${k.toFixed(1)},${w.toFixed(1)}`).join(" "),I=`${A} L${h(s.length-1).toFixed(1)},${(m+u).toFixed(1)} L${c},${(m+u).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:s.map(k=>+k.toFixed(2)),minV:+b.toFixed(2),maxV:+f.toFixed(2)}))}" data-color="${i}" data-unit="${n}" style="position:relative">
    <svg viewBox="0 0 ${l} ${p}" width="100%" height="${p}" preserveAspectRatio="none">
      <defs><linearGradient id="${E}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${P}${L}${S}
      <path d="${I}" fill="url(#${E})"/>
      <path d="${A}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${z.map(([k,w])=>`<circle cx="${k.toFixed(1)}" cy="${w.toFixed(1)}" r="2" fill="${i}"/>`).join("")}
      ${H}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function Da(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function Fa(e){const i=JSON.parse(decodeURIComponent(e.dataset.chart||"{}"));if(!i.vals)return;const{vals:t}=i,o=e.querySelector(".m-chart-tip"),n=e.querySelector(".m-chart-crosshair"),a=e.dataset.color||"#0172A4",s=e.dataset.unit||"";function l(c){const d=e.getBoundingClientRect(),m=Math.max(0,Math.min(1,(c-d.left)/d.width)),v=Math.round(m*(t.length-1)),r=t[v],u=m*100,b=(r<10?r.toFixed(1):String(Math.round(r)))+(s?` ${s}`:""),f=Da(a);n.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${u}%;width:1px;background:${a};opacity:.5`,o.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(u,75)}%;background:${a};color:${f};border:1.5px solid ${f};font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,o.textContent=b}function p(){n.style.display="none",o.style.display="none"}e.addEventListener("pointermove",c=>{c.preventDefault(),l(c.clientX)}),e.addEventListener("pointerdown",c=>l(c.clientX)),e.addEventListener("pointerup",p),e.addEventListener("pointerleave",p),e.style.cursor="crosshair"}const ln={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function _a(e,i,t){if(!t)return"";const o=ln[i]||60,a=(an[i]||10080)/(o*60),s=on(e,o);let l=[];if(t==="temp"){const p=s.reduce((d,m)=>d+Math.max(0,Math.min(m,Ae.djMax)-Ae.djMin),0)*(a/24),c=s.filter(d=>d<Ae.hfSeuil).length*a;l=[{label:"Degrés jours",val:`${Math.round(p)} DJ`,metricId:"dj",thresholdText:`${Ae.djMin}°C → ${Ae.djMax}°C`},{label:"Heures de froid",val:`${Math.round(c)} h`,metricId:"hf",thresholdText:`< ${Ae.hfSeuil}°C`}]}else if(t==="pluie")l=[{label:"Cumul de pluie",val:`${s.reduce((c,d)=>c+d,0).toFixed(1)} mm`,metricId:"pluie"}];else if(t==="rayo"){const p=s.filter(c=>c>120).length*a;l=[{label:"Cumul d'heures d'ensoleillement",val:`${Math.round(p)} h`,metricId:"rayo"}]}else if(t==="hws"){const p=s.filter(c=>c>50).length*a;l=[{label:"Cumul d'heures d'humectation",val:`${Math.round(p)} h`,metricId:"humec"}]}return l.length?`<div class="m-chart-cumuls">${l.map(p=>{const c=p.metricId==="dj"||p.metricId==="hf"?`<button class="m-cumul-edit-btn" data-cumul-metric-id="${p.metricId}" title="Modifier seuils"><i class="bi bi-pencil"></i></button>`:"";return`<div class="m-chart-cumul-chip">
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
    </div>`}).join("")}</div>`:""}function Ha(e,i="7d",t="1h"){const o=Et[e.model]||[];if(!o.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const n={temp:"temperature",tseche:"temp_seche",thumide:"temp_humide"},a={temp:"temperature"},s=new Set(["tseche","thumide"]),l=o.map(d=>{const m=n[d.id]||d.id,v=_a(d.id,i,d.cumulsType),r=s.has(d.id)?"":`<button class="m-msr-add-btn" data-msr-metric-id="${a[d.id]||d.id}" data-msr-label="${d.label}" data-msr-unit="${d.unit||""}" data-msr-color="${d.color}" data-msr-period="${i}" data-msr-step="${t}" title="Ajouter aux mesures préférées"><i class="bi bi-house-add"></i></button>`;return`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${d.color}">${d.label}</span>
          ${r}
        </div>
        ${za(d.id,d.color,d.cumul,i,d.unit||"")}
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
    <div class="m-detail-section">${l}</div>`}function Ba(e){var p;const i=(e.parcelIds||[]).map(c=>ce.find(d=>d.id===c)).filter(Boolean),t=i[0]||null,o=t?ye.find(c=>c.id===t.orgId):null,n=e.networkQuality||0,a=n>70?"#30d158":n>40?"#ff9f0a":"#ff3b30",s=e.event?Array.isArray(e.event)?e.event:[e.event]:[],l=i.map((c,d)=>`<div class="m-list-row${d===i.length-1&&i.length>0,""}" data-unlink-plot="${c.id}">
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
          <span class="m-list-row-value">${Pa[e.model]||"Weenat"}</span>
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
        ${s.length?s.map((c,d)=>{const m=c.toLowerCase().includes("déplacé");return`<div class="m-list-row m-ev-row" data-ev-idx="${d}" style="justify-content:space-between;gap:10px;cursor:pointer">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  <i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30;flex-shrink:0"></i>
                  <span class="m-list-row-label" style="color:#ff3b30">${c}</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
                  ${m?`<button class="ev-stop-btn" data-ev-idx="${d}" style="background:rgba(255,59,48,.1);border:1px solid #ff3b30;border-radius:8px;padding:5px 10px;font-size:12px;color:#ff3b30;font-family:inherit;cursor:pointer;white-space:nowrap">Arrêter</button>`:""}
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
    </div>`}function Li(e,i="donnees",t="admin"){var r;e.parcelIds||(e.parcelIds=[]);const o=e.parcelIds.length?ce.find(u=>e.parcelIds.includes(u.id)):null;let n=i,a="7d",s="1h",l=!1;const p=o&&((r=ye.find(u=>u.id===o.orgId))==null?void 0:r.ville)||"",c=xe(`
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
    <div id="detail-content" class="m-detail-content"></div>`);function d(){const u=c.querySelector("#detail-content");n==="donnees"&&(u.innerHTML=Ha(e,a,s)),n==="params"&&(u.innerHTML=Ba(e),m()),v()}function m(){const u=window.L,b=e.parcelIds.length?ce.find(f=>e.parcelIds.includes(f.id)):null;!u||!b||setTimeout(()=>{const f=c.querySelector("#sensor-minimap");if(!f)return;const y=u.map(f,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});u.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(y),y.setView([b.lat,b.lng],15),u.circleMarker([b.lat,b.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(y)},50)}function v(){var u,b,f,y;(u=c.querySelector(".m-period-sel"))==null||u.addEventListener("change",h=>{a=h.target.value,d()}),(b=c.querySelector(".m-step-sel"))==null||b.addEventListener("change",h=>{s=h.target.value,d()}),c.querySelectorAll(".m-chart-svg-wrap").forEach(h=>Fa(h)),c.querySelectorAll(".m-chart-details-link[data-metric-id]").forEach(h=>{h.addEventListener("click",()=>{ge(()=>import("./chart-fullscreen-DEDxXQIB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then($=>$.initChartFullscreen({sensor:e,metricId:h.dataset.metricId,backLabel:"Retour"}))})}),c.querySelectorAll(".m-msr-add-btn").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.msrMetricId,E=`s-${e.id}`,P=`${e.model} ${e.serial}`,L=h.dataset.msrPeriod,S=h.dataset.msrStep,H=Vs({subjectKey:E,subjectLabel:P,metricId:$,metricLabel:h.dataset.msrLabel,unit:h.dataset.msrUnit||"",period:L,periodLabel:Ma[L]||L,step:S,stepLabel:Ta[S]||S,color:h.dataset.msrColor});if(H==="max"){Y(`Maximum de mesures atteint (${Aa})`);return}if(H==="dup"){Y("Cette mesure est déjà dans vos favoris");return}Y("Mesure ajoutée au tableau de bord")})}),c.addEventListener("click",h=>{const $=h.target.closest(".m-cumul-add-btn");if($){const P=$.dataset.cumulMetricId,L=$.dataset.cumulVal,S=Ca[P];if(!S)return;const H=`${e.model} ${e.serial}`,z=document.createElement("div");z.innerHTML=`<div style="padding:16px;font-size:14px;color:#3a3a3c">Ajouter <strong>${S.metricLabel}</strong> (<em>${L}</em>) au tableau de bord du capteur <strong>${e.serial}</strong> ?</div>`,ue({title:"Tableau de bord",body:z,doneLabel:"Ajouter",onDone:()=>{const A=P==="hf"?{cold:Ae.hfSeuil}:P==="dj"?{low:Ae.djMin,high:Ae.djMax}:null;if(Js({metricId:P,...S,subjectKey:`s-${e.id}`,subjectLabel:H,fromDate:`${new Date().getFullYear()}-01-01`,value:L,thresholds:A})==="max"){Y("Maximum de cumuls atteint (5)");return}Y("Cumul ajouté au tableau de bord")}});return}const E=h.target.closest(".m-cumul-edit-btn");if(E){const P=E.dataset.cumulMetricId,L=document.createElement("div");P==="hf"?(L.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Seuil de froid (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-hf-seuil" value="${Ae.hfSeuil}" step="0.1" min="-20" max="20">
          </div>`,ue({title:"Heures de froid",body:L,doneLabel:"Appliquer",onDone:()=>{var S;Ae.hfSeuil=+(((S=L.querySelector("#edit-hf-seuil"))==null?void 0:S.value)??7.2),d()}})):P==="dj"&&(L.innerHTML=`<div style="padding:16px;display:flex;flex-direction:column;gap:8px">
            <label class="m-form-label">Température min (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-min" value="${Ae.djMin}" step="1" min="-20" max="30">
            <label class="m-form-label">Température max (°C)</label>
            <input type="number" class="m-sheet-input" id="edit-dj-max" value="${Ae.djMax}" step="1" min="-20" max="50">
          </div>`,ue({title:"Degrés-jours",body:L,doneLabel:"Appliquer",onDone:()=>{var S,H;Ae.djMin=+(((S=L.querySelector("#edit-dj-min"))==null?void 0:S.value)??0),Ae.djMax=+(((H=L.querySelector("#edit-dj-max"))==null?void 0:H.value)??18),d()}}))}}),c.querySelectorAll(".m-list-row[data-action]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.action;if($==="add-maintenance")vs(e,{openForm:!0});else if($==="add-plot")Ra(e,t,d);else if($==="delete"){const E=ce.find(P=>{var L;return(L=e.parcelIds)==null?void 0:L.includes(P.id)});Nt({title:"Retirer de l'exploitation",message:`Retirer <strong>${e.model} ${e.serial}</strong> de l'exploitation ?${E?`<br><br>Parcelle liée : <strong>${E.name}</strong>.`:""}<br><br>Le capteur restera visible dans le catalogue réseau.`,confirmLabel:"Retirer",onConfirm:()=>Y("Capteur retiré de l'exploitation (fonctionnalité à venir)")})}else Y("Fonctionnalité à venir")})}),c.querySelectorAll(".ev-stop-btn").forEach(h=>{h.addEventListener("click",$=>{$.stopPropagation();const E=+h.dataset.evIdx;Array.isArray(e.event)?(e.event=e.event.filter((P,L)=>L!==E),e.event.length||(e.event=null)):e.event=null,d()})}),c.querySelectorAll(".m-ev-row").forEach(h=>{h.addEventListener("click",$=>{if($.target.closest(".ev-stop-btn"))return;const E=+h.dataset.evIdx,P=e.event?Array.isArray(e.event)?e.event:[e.event]:[];P[E]&&qa(P[E],e)})}),c.querySelectorAll("[data-unlink-plot-btn]").forEach(h=>{h.addEventListener("click",$=>{$.stopPropagation();const E=+h.dataset.unlinkPlotBtn,P=ce.find(L=>L.id===E);Nt({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${(P==null?void 0:P.name)||"la parcelle"}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(L=>L!==E),Y(`Délié de ${(P==null?void 0:P.name)||"la parcelle"}`),d()}})})}),(f=c.querySelector("#sensor-name-input"))==null||f.addEventListener("change",h=>{const $=h.target.value.trim();try{const P=JSON.parse(localStorage.getItem("weenat-sensor-names"))||{};$?P[e.id]=$:delete P[e.id],localStorage.setItem("weenat-sensor-names",JSON.stringify(P))}catch{}const E=c.querySelector(".m-detail-title");E&&(E.textContent=$||e.serial),window.dispatchEvent(new CustomEvent("weenat-sensor-renamed"))}),(y=c.querySelector("#chp-depth-save"))==null||y.addEventListener("click",()=>{const h=c.querySelector("#chp-depth-input"),$=ji(e.model);if(!h||!$)return;let E=parseInt(h.value);if(isNaN(E))return;E=Math.max($[0],Math.min($[1],E)),h.value=E,e.depth=E;const P=c.querySelector(".m-detail-subtitle");P&&(P.textContent=ms(e,p)),Y(`Profondeur enregistrée : ${E} cm`)})}c.querySelectorAll(".m-detail-tab").forEach(u=>{u.addEventListener("click",()=>{c.querySelectorAll(".m-detail-tab").forEach(b=>b.classList.remove("active")),u.classList.add("active"),n=u.dataset.view,d()})}),c.querySelector(".m-detail-back").addEventListener("click",fe),c.querySelector("#d-star").addEventListener("click",()=>{l=!l;const u=c.querySelector("#d-star");u.querySelector("i").className=l?"bi bi-star-fill":"bi bi-star",u.style.color=l?"#f5c842":"",Y(l?"Ajouté aux favoris":"Retiré des favoris")}),c.querySelector("#d-journal").addEventListener("click",()=>vs(e)),c.querySelector("#d-plus").addEventListener("click",()=>{var u;return(u=window.showMobileAddPage)==null?void 0:u.call(window)}),d()}const rn=e=>`sensor-journal-${e}`,cn=[{id:"installation",label:"Installation",icon:"bi-box-arrow-in-down",color:"#0172A4"},{id:"batterie",label:"Remplacement batterie",icon:"bi-battery-charging",color:"#e07820"},{id:"antenne",label:"Remplacement antenne",icon:"bi-reception-4",color:"#5b8dd9"},{id:"bocal",label:"Remplacement bocal",icon:"bi-cup",color:"#3a9e6a"},{id:"lacet",label:"Remplacement lacet",icon:"bi-link-45deg",color:"#8060c0"},{id:"cuillere",label:"Remplacement cuillère",icon:"bi-moisture",color:"#45b7d1"},{id:"nettoyage",label:"Nettoyage",icon:"bi-droplet",color:"#4ecdc4"},{id:"verification",label:"Vérification terrain",icon:"bi-check2-circle",color:"#3a7a38"},{id:"note",label:"Note technique",icon:"bi-chat-text",color:"#8e8e93"}];function Ci(e){try{const i=localStorage.getItem(rn(e));if(i)return JSON.parse(i)}catch{}return[{id:1,type:"installation",date:"2023-01-15",user:"Technicien Weenat",role:"conseiller",texte:""},{id:2,type:"batterie",date:"2023-06-10",user:"Technicien Weenat",role:"conseiller",texte:""},{id:3,type:"note",date:"2023-11-02",user:"Jean Dupont",role:"membre",texte:"Capteur légèrement déplacé — redressé"}]}function dn(e,i){localStorage.setItem(rn(e),JSON.stringify(i))}function Ra(e,i,t){const o=i==="adherent"?1:null,n=o?ce.filter(c=>c.orgId===o):ce.filter(c=>c.orgId!==100),a=new Set((Et[e.model]||[]).map(c=>c.id)),s=document.createElement("div");s.innerHTML=`
    <div style="padding:4px 0 10px">
      <div style="position:relative">
        <i class="bi bi-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#8e8e93;font-size:14px;pointer-events:none"></i>
        <input type="search" id="plot-search" placeholder="Rechercher une parcelle…" autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:9px 12px 9px 32px;border:1px solid rgba(0,0,0,.15);border-radius:10px;font-size:14px;font-family:inherit;background:#f5f5f7;-webkit-appearance:none;outline:none">
      </div>
    </div>
    <div id="plot-list" style="max-height:50vh;overflow-y:auto;margin:0 -16px"></div>`;function l(c=""){const d=c.toLowerCase(),m=(d?n.filter(r=>r.name.toLowerCase().includes(d)||(r.crop||"").toLowerCase().includes(d)):n).slice().sort((r,u)=>r.name.localeCompare(u.name,"fr")),v=s.querySelector("#plot-list");if(!m.length){v.innerHTML='<div style="text-align:center;padding:28px 16px;color:#8e8e93;font-size:14px">Aucune parcelle trouvée</div>';return}v.innerHTML="",m.forEach((r,u)=>{const b=e.parcelIds.includes(r.id),f=u===m.length-1,y=document.createElement("div");y.style.cssText=`display:flex;align-items:center;gap:10px;padding:13px 16px;cursor:pointer;${f?"":"border-bottom:1px solid rgba(0,0,0,.07);"}`,y.innerHTML=`
        <span style="flex:1;min-width:0">
          <span style="font-size:15px;font-weight:500;color:#1c1c1e">${r.name}</span>
          ${r.crop?`<span style="font-size:12px;color:#8e8e93;margin-left:6px">${r.crop}</span>`:""}
        </span>
        ${b?'<i class="bi bi-check-circle-fill" style="color:#30d158;font-size:20px;flex-shrink:0"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:20px;flex-shrink:0"></i>'}`,y.addEventListener("click",()=>{if(b)Nt({title:"Délier la parcelle",message:`Délier ce capteur de <strong>${r.name}</strong> ?`,confirmLabel:"Délier",onConfirm:()=>{e.parcelIds=e.parcelIds.filter(h=>h!==r.id),Y(`Délié de ${r.name}`),l(c),t()}});else{const h=re.find($=>$.id!==e.id&&$.parcelIds.includes(r.id)&&(Et[$.model]||[]).some(E=>a.has(E.id)));h?(p.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{p.remove(),Oa(e,r,h,t)},280)):(e.parcelIds=[...e.parcelIds,r.id],Y(`Lié à ${r.name}`),l(c),t())}}),v.appendChild(y)})}l();const p=ue({title:"Parcelles liées",body:s,doneLabel:"Fermer",onDone:()=>{t()}});s.querySelector("#plot-search").addEventListener("input",c=>l(c.target.value))}function Oa(e,i,t,o){const n=(Et[t.model]||[]).filter(l=>(Et[e.model]||[]).some(p=>p.id===l.id)).map(l=>l.label).join(", "),a=document.createElement("div");a.innerHTML=`
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
    <div style="height:6px"></div>`;const s=ue({title:"Conflit de métrique",body:a,doneLabel:"Annuler",onDone:()=>{}});a.querySelector("#keep-existing").addEventListener("click",()=>{s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),Y("Liaison annulée")},280)}),a.querySelector("#keep-new").addEventListener("click",()=>{t.parcelIds=t.parcelIds.filter(l=>l!==i.id),e.parcelIds=[...e.parcelIds,i.id],s.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{s.remove(),Y(`Lié à ${i.name}`),o()},280)})}function vs(e,i={}){const t=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <span style="font-size:17px;font-weight:600;flex:1;text-align:center;padding-left:44px">Journal capteur</span>
        <button class="m-detail-back" id="sjrn-close" style="padding:0 12px;font-size:20px;font-weight:300">×</button>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div id="sjrn-content" class="m-detail-content" style="top:52px;overflow-y:auto"></div>`);t.querySelector("#sjrn-close").addEventListener("click",fe);const o=Object.fromEntries(cn.map(a=>[a.id,a]));function n(){var d;const a=t.querySelector("#sjrn-content"),s=(()=>{try{return JSON.parse(localStorage.getItem("weenat-m-notes"))||[]}catch{return[]}})().filter(m=>m.linkedType==="sensor"&&m.linkedId===e.id).map((m,v)=>({id:`dash-${v}`,type:"note",date:m.date,texte:m.text,user:m.auteur,_fromDashboard:!0})),l=[...Ci(e.id),...s].sort((m,v)=>v.date.localeCompare(m.date)),p=m=>{const[v,r,u]=m.split("-");return`${u}/${r}/${v}`};let c=`
      <div style="padding:12px 16px 8px">
        <button class="m-btn m-btn--primary" id="sjrn-add-btn">
          <i class="bi bi-plus-circle-fill"></i> Ajouter une opération de maintenance
        </button>
      </div>
    `;l.length===0?c+='<div style="padding:40px 16px;text-align:center;color:#8e8e93;font-size:14px">Aucune entrée dans le journal.</div>':(c+='<div class="m-jrn-timeline">',l.forEach((m,v)=>{const r=o[m.type]||{label:m.type,icon:"bi-circle",color:"#8e8e93"},u=v===l.length-1,b=!!m._fromDashboard;c+=`
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
              ${m.user?`<div style="font-size:11px;color:#8e8e93;margin-top:3px;display:flex;gap:5px;align-items:center">${m.user}${Na(m.role)}</div>`:""}
            </div>
          </div>`}),c+="</div>"),a.innerHTML=c,(d=a.querySelector("#sjrn-add-btn"))==null||d.addEventListener("click",()=>fs(e.id,n)),a.querySelectorAll(".m-jrn-del").forEach(m=>{m.addEventListener("click",()=>{const v=parseInt(m.dataset.id);dn(e.id,Ci(e.id).filter(r=>r.id!==v)),n()})})}n(),i.openForm&&fs(e.id,n)}function Na(e){if(!e)return"";const i={membre:{label:"Membre",bg:"#f2f2f7",color:"#636366"},conseiller:{label:"Conseiller",bg:"#eef4ff",color:"#3a7bd5"}},t=i[e]||i.membre;return`<span style="font-size:10px;background:${t.bg};color:${t.color};border-radius:4px;padding:1px 5px;font-weight:500">${t.label}</span>`}function fs(e,i){const t=new Date().toISOString().slice(0,10),o=document.createElement("div");o.innerHTML=`
    <div class="m-sheet-input-group" style="display:flex;flex-direction:column;gap:10px">
      <div>
        <div class="m-form-label">Type</div>
        <select class="m-sheet-input" id="sjf-type">
          ${cn.map(n=>`<option value="${n.id}">${n.label}</option>`).join("")}
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
    </div>`,ue({title:"Opération de maintenance",body:o,doneLabel:"Enregistrer",onDone:()=>{const n=o.querySelector("#sjf-type").value,a=o.querySelector("#sjf-date").value||t,s=o.querySelector("#sjf-user").value.trim()||"Jean Dupont",l=localStorage.getItem("menuRole")==="admin-reseau"?"conseiller":"membre",p=o.querySelector("#sjf-texte").value.trim();dn(e,[{id:Date.now(),type:n,date:a,user:s,role:l,texte:p},...Ci(e)]),i()}}),setTimeout(()=>{var n;return(n=o.querySelector("#sjf-texte"))==null?void 0:n.focus()},350)}const Ai=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:Li},Symbol.toStringTag,{value:"Module"})),ht=100,di=1,ui=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Va={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermomètre-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Capteur d'humectation foliaire",T_GEL:"Capteur de gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde de fertirrigation"},Ja={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function Ft(e,i){return(Ja[e]||[]).includes(i)}function Wa(e){return Va[e]||e}function Ga(e){try{return(JSON.parse(localStorage.getItem("weenat-sensor-names"))||{})[e.id]||e.serial}catch{return e.serial}}const _t=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Ua(e){const i=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return(.299*i+.587*t+.114*o)/255>.5?"#000000":"#ffffff"}function bs(e,i){switch(e){case"pluie":return i<8?"#C1E1FF":i<18?"#2E75B6":"#0B3A64";case"temp":return i<12?"#FEE7B4":i<18?"#FBAF05":"#7D5702";case"hum":return i<40?"#E3C7FF":i<70?"#5B12A4":"#29084A";case"pothydr":return i<80?"#E2EAC7":i<150?"#A6C157":"#7D9537";case"teneur":return i<15?"#F7D2A1":i<30?"#ED9A2C":"#BC7210";case"temp_sol":return i<8?"#D9C6BF":i<18?"#795548":"#484646";case"temp_sche":return i<0?"#9DECDF":i<10?"#23B19B":"#177365";case"temp_hum":return i<0?"#D2DEFA":i<10?"#5E88EC":"#1B56E4";case"rayonnement":return i<200?"#FBFBB6":i<400?"#CBCB0B":"#838307";case"par":return i<500?"#F9EED2":i<1200?"#E8B44C":"#9B6E00";case"vent":return i<15?"#E1E1E1":i<30?"#616161":"#343232";case"humectation":return i<30?"#B2FFF9":i<70?"#00887E":"#003D39";default:return"#0172A4"}}function Ya(e){switch(e){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Za(e,i){let t=e.querySelector("#capteurs-content");t||(t=document.createElement("div"),t.id="capteurs-content",e.appendChild(t));const o=i==="admin",n=ye.filter(L=>L.id!==ht),a=Object.fromEntries(ce.map(L=>[L.id,L])),s=Object.fromEntries(ye.map(L=>[L.id,L]));let l=null,p=null;const c={};let d="carte",m="pluie",v="7 derniers jours",r="all";function u(L){const S=`${L}-${m}-${v}`;return S in c||(c[S]=Ya(m)),c[S]}function b(){if(i==="new"||i==="new-adherent")return[];if(o){if(r==="anomalies")return re.filter(A=>A.event&&(Array.isArray(A.event)?A.event.length>0:!0));if(r==="all")return re;if(r===String(ht)){const A=new Set(ce.filter(I=>I.orgId===ht).map(I=>I.id));return re.filter(I=>I.parcelIds.some(T=>A.has(T)))}const z=new Set(ce.filter(A=>String(A.orgId)===r).map(A=>A.id));return re.filter(A=>A.parcelIds.some(I=>z.has(I)))}const L=new Set(ce.filter(z=>z.orgId===di).map(z=>z.id)),S=re.filter(z=>z.parcelIds.some(A=>L.has(A))),H=re.filter(z=>!z.parcelIds.some(A=>L.has(A))&&ui.includes(z.model));return r==="mine"?S:r==="network"?H:[...S,...H]}function f(L){const S=L.parcelIds.length?a[L.parcelIds[0]]:null;if(!S)return null;const H=(L.id*7919%1e3-500)/1e6,z=(L.id*6271%1e3-500)/1e6;return{lat:S.lat+H,lng:S.lng+z,name:S.name}}function y(L){var H,z;const S=L.parcelIds.length?a[L.parcelIds[0]]:null;return(S?(H=s[S.orgId])==null?void 0:H.ville:null)||((z=s[L.orgId])==null?void 0:z.ville)||null}function h(){if(l){try{l.remove()}catch{}l=null,p=null}}function $(){h();const L=_t.find(T=>T.id===m)||_t[0],S=b();let H;const z=re.some(T=>T.event&&(Array.isArray(T.event)?T.event.length>0:!0));if(o)H=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${r==="all"?" selected":""}>Toutes les organisations</option>
            ${z?`<option value="anomalies"${r==="anomalies"?" selected":""}>⚠ Anomalies capteurs</option>`:""}
            <option value="${ht}"${r===String(ht)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
            ${n.map(T=>`<option value="${T.id}"${r===String(T.id)?" selected":""}>${T.name}</option>`).join("")}
          </select>
        </div>`;else{const T=ye.find(k=>k.id===di);H=`
        <div class="m-filter-row">
          <select class="m-filter-select" id="org-filter">
            <option value="all"${r==="all"?" selected":""}>Tous les capteurs du réseau</option>
            <option value="mine"${r==="mine"?" selected":""}>${(T==null?void 0:T.name)||"Mon exploitation"} uniquement</option>
          </select>
        </div>`}const A=[...S].sort((T,k)=>{const w=Ft(T.model,m),x=Ft(k.model,m);return w&&!x?-1:!w&&x?1:w?u(k.id)-u(T.id):0}),I=A.length?`<div class="m-plain-list">${A.map(T=>{const k=ui.includes(T.model),w=Ft(T.model,m),x=w?u(T.id):null,g=w?`<span class="m-sensor-val" style="color:${bs(m,x)}">${x} ${L.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>',q=T.event&&(Array.isArray(T.event)?T.event.length>0:!0);return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${T.id}">
              <div class="m-sensor-icon" style="position:relative;background:${k?"#0172A420":"#5b8dd920"};color:${k?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
                ${q?'<span style="position:absolute;top:-3px;right:-3px;width:9px;height:9px;border-radius:50%;background:#ff3b30;border:1.5px solid #fff"></span>':""}
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${Wa(T.model)} - ${T.model}</span>
                <span class="m-sensor-sub">${[y(T),Ga(T)].filter(Boolean).join(" - ")}</span>
                ${q?`<span style="font-size:11px;color:#ff3b30;font-weight:500"><i class="bi bi-exclamation-triangle-fill"></i> ${Array.isArray(T.event)?T.event[0]:T.event}</span>`:""}
              </div>
              ${g}
            </div>`}).join("")}</div>`:i==="new"||i==="new-adherent"?`<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Vous n'avez pas encore de capteur</p><button onclick="window.showMobileAddPage?.()" style="margin-top:8px;background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer">Ajouter un capteur</button></div>`:'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>';t.innerHTML=`
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
            ${_t.map(T=>`<option value="${T.id}"${T.id===m?" selected":""}>${T.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${L.aggs.map(T=>`<option${T===v?" selected":""}>${T}</option>`).join("")}
          </select>
        </div>
        ${H}
      </div>
      ${d==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${I}</div>`}`,P(),d==="carte"&&E(S,L)}function E(L,S){const H=window.L;H&&setTimeout(()=>{const z=t.querySelector("#sensor-map");if(!z)return;if(l=H.map(z,{zoomControl:!1,attributionControl:!1}),H.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l),!L.length&&(i==="new"||i==="new-adherent")){const I=ye.find(w=>w.id===di);I&&l.setView([I.lat,I.lng],13),l.invalidateSize();const T=z.parentElement;T.style.position="relative";const k=document.createElement("div");k.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:500;pointer-events:none",k.innerHTML=`
          <div style="background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.18);padding:24px 20px;width:260px;text-align:center;pointer-events:auto">
            <i class="bi bi-broadcast" style="font-size:36px;color:#0172A4;display:block;margin-bottom:12px"></i>
            <p style="font-size:15px;font-weight:600;margin:0 0 6px;color:#1c1c1e">Vous n'avez pas encore de capteur</p>
            <p style="font-size:13px;color:#8e8e93;margin:0 0 18px;line-height:1.4">Ajoutez votre premier capteur pour commencer à collecter des données.</p>
            <button id="empty-add-sensor-btn" style="background:#0172A4;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-size:15px;font-weight:600;cursor:pointer;width:100%">Ajouter un capteur</button>
          </div>`,T.appendChild(k),T.querySelector("#empty-add-sensor-btn").addEventListener("click",()=>{var w;return(w=window.showMobileAddPage)==null?void 0:w.call(window)});return}const A=[];L.forEach(I=>{var q;const T=f(I);if(!T)return;const k=Ft(I.model,m),w=ui.includes(I.model),x=k?bs(m,u(I.id)):w?"#0172A4":"#5b8dd9",g=H.circleMarker([T.lat,T.lng],{radius:k?10:7,color:"#fff",weight:2,fillColor:x,fillOpacity:k?.95:.45}).addTo(l);if(k){g.bindTooltip(`${u(I.id)} ${S.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0});const j=F=>{if(!F)return;const D=Ua(x);F.style.setProperty("background",x,"important"),F.style.setProperty("color",D,"important"),F.style.setProperty("border-color",D,"important"),F.style.setProperty("box-shadow","none","important")},C=(q=g.getTooltip())==null?void 0:q.getElement();C&&j(C),g.on("tooltipopen",F=>j(F.tooltip.getElement()))}g.on("click",()=>Li(I,"donnees",i)),I.event&&(!Array.isArray(I.event)||I.event.length>0)&&H.marker([T.lat,T.lng],{icon:H.divIcon({className:"",html:'<div style="width:10px;height:10px;border-radius:50%;background:#ff3b30;border:2px solid #fff;transform:translate(3px,5px)"></div>',iconSize:[0,0],iconAnchor:[0,0]}),interactive:!1,zIndexOffset:500}).addTo(l),A.push([T.lat,T.lng])}),A.length&&(p=A,l.fitBounds(A,{padding:[32,32]})),l.invalidateSize()},0)}window.addEventListener("m-tab-change",L=>{L.detail==="capteurs"&&($(),d==="carte"&&l&&setTimeout(()=>{l.invalidateSize(),p!=null&&p.length&&l.fitBounds(p,{padding:[32,32]})},50))});function P(){var L,S,H;t.querySelectorAll(".m-view-btn").forEach(z=>z.addEventListener("click",()=>{d=z.dataset.view,$()})),(L=t.querySelector("#metric-sel"))==null||L.addEventListener("change",z=>{var A;m=z.target.value,v=((A=_t.find(I=>I.id===m))==null?void 0:A.defaultAgg)||"",$()}),(S=t.querySelector("#agg-sel"))==null||S.addEventListener("change",z=>{v=z.target.value,$()}),(H=t.querySelector("#org-filter"))==null||H.addEventListener("change",z=>{r=z.target.value,$()}),t.querySelectorAll(".m-tappable[data-sensor-id]").forEach(z=>{z.addEventListener("click",()=>{const A=re.find(I=>I.id===+z.dataset.sensorId);A&&Li(A,"donnees",i)})})}$(),window.addEventListener("weenat-sensor-renamed",()=>{d==="liste"&&$()})}const Ka=["Essentiel","Plus","Expert"],Xa=["Administrateur","Agent","Lecteur"],hs=[{name:"Breiz'Agri Conseil",distance:12,adherents:47,capteurs:312,parcelles:1840},{name:"Armor Agri",distance:24,adherents:23,capteurs:154,parcelles:920},{name:"Terres de Bretagne",distance:31,adherents:61,capteurs:418,parcelles:2310},{name:"Coop Armorique",distance:38,adherents:18,capteurs:97,parcelles:540},{name:"Agri Trégor",distance:45,adherents:34,capteurs:201,parcelles:1120},{name:"Finistère AgriTech",distance:53,adherents:29,capteurs:187,parcelles:830},{name:"Léon Nature",distance:61,adherents:12,capteurs:68,parcelles:310},{name:"Pays de Morlaix Agri",distance:67,adherents:41,capteurs:267,parcelles:1540},{name:"Réseau Manche Ouest",distance:72,adherents:56,capteurs:389,parcelles:2120},{name:"Granit Agri",distance:78,adherents:9,capteurs:44,parcelles:180},{name:"Côte d'Émeraude",distance:85,adherents:27,capteurs:163,parcelles:740},{name:"Agri Ille-et-Vilaine",distance:91,adherents:38,capteurs:241,parcelles:1380},{name:"Morbihan Agritech",distance:98,adherents:15,capteurs:87,parcelles:420},{name:"Loire-Atlantique Net",distance:104,adherents:44,capteurs:298,parcelles:1690},{name:"Maine Agri",distance:112,adherents:31,capteurs:196,parcelles:1050},{name:"Cotentin Réseau",distance:119,adherents:20,capteurs:121,parcelles:580},{name:"Agri Normandie",distance:126,adherents:52,capteurs:341,parcelles:1960},{name:"Mayenne Connect",distance:133,adherents:8,capteurs:39,parcelles:150},{name:"Pays de la Loire",distance:141,adherents:67,capteurs:455,parcelles:2680},{name:"Anjou Agri",distance:148,adherents:24,capteurs:142,parcelles:630}];function Qa(e){return e.split(/[\s'']+/).filter(Boolean).slice(0,2).map(i=>i[0].toUpperCase()).join("")}function el(e){const i=(e||"").match(/(\d{5})/);if(i){const t=e.indexOf(i[0]);return{rue:e.slice(0,t).trim().replace(/,\s*$/,""),cp:i[0],ville:e.slice(t+5).trim().replace(/^,?\s*/,"")}}return{rue:e||"",cp:"",ville:""}}function gs({rue:e,cp:i,ville:t}){return[e,i&&t?`${i} ${t}`:i||t].filter(Boolean).join(", ")}function Ht(e){if(!e)return"—";const[i,t,o]=e.split("-");return`${o}/${t}/${i}`}function ys(){const e=[],i=new Date("2026-04-15"),t=[150,250,100,150,250,150,100,250,150,100];for(let o=11;o>=0;o--){const n=new Date(i.getFullYear(),i.getMonth()-o,1),a=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),l=o>0?o===2?"en attente":"payée":"en attente";e.push({numero:`FAC-${a}-${s}`,dateEmission:`${a}-${s}-01`,montant:n.getMonth()===11?1980:t[o%t.length],statut:l})}return e.reverse()}function tl(e,i){var k;if(!e)return{};const t=i==="admin",o=i==="new-member-admin"||i==="new-member-agent"||i==="new-member-reader",n=i!=="new-member-reader",a=t?[{id:"100",name:"Breiz'Agri Conseil"},{id:"42",name:"Exploitation Dupont"}]:o?[]:[{id:"1",name:"Ferme du Bocage"},{id:"dutilleul",name:"Exploitation Dutilleul"}];let s=((k=a[0])==null?void 0:k.id)??null;const l=ye.find(w=>w.id===(t?ei:Di));if(!l)return{};const c=(t?ti.filter(w=>{var x;return!((x=w.orgIds)!=null&&x.length)||w.orgIds.includes(ei)}):ti.filter(w=>{var x;return(x=w.orgIds)==null?void 0:x.includes(Di)})).filter(w=>w.statut!=="inactif").map(w=>({...w})),d=ye.filter(w=>w.id!==ei&&w.statut!=="inactif").length,m=el(l.adresse||""),v={rue:"",cp:"",ville:""},r={name:l.name,siret:l.siret||(t?"83412789200012":"42198765400024"),metiers:[t?"Coopérative":"Grandes cultures"],adresseFactu:m,adresseLivrai:v,copieFactures:l.copieFactures||"",pays:"France",markerLat:l.lat||48.117,markerLng:l.lng||-1.678,plan:l.plan||"Plus",contrat:{numero:t?"CTR-NET-2022-00001":l.codeAdherent||"CTR-2022-00418",dateAdhesion:l.dateAdhesion||"2022-03-15",licencesMembres:t?ti.length:3,licencesAdherents:t?d:null,licencesIntegrations:t?27:2}};let u=null,b=null;function f(){if(!b)return;const w=e.querySelector(`#${b}`);if(!w)return;if(u){try{u.remove()}catch{}u=null}const x=window.L;x&&(u=x.map(w,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,keyboard:!1}),x.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(u),u.setView([r.markerLat,r.markerLng],14),x.marker([r.markerLat,r.markerLng],{draggable:!1}).addTo(u),setTimeout(()=>u==null?void 0:u.invalidateSize(),50))}function y(){if(b=`expl-map-${Math.random().toString(36).slice(2,8)}`,u){try{u.remove()}catch{}u=null}const w=gs(r.adresseFactu)||"—",x=gs(r.adresseLivrai),g=t?ys():[],q=g.slice(0,3),j=g.length>3,C=c.slice(0,3),F=c.length>3;function D(M,R){const G=M.statut==="payée"?"#30d158":"#ff9f0a",oe=M.statut==="payée"?"Payée":"En attente";return`
        <div class="m-list-row${R?" m-list-row--last":""} m-tappable" data-action="facture" data-facture-id="${M.numero}">
          <div class="m-list-row-col">
            <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${M.numero}</span>
            <span class="m-list-row-sub">${Ht(M.dateEmission)} · ${M.montant.toLocaleString("fr-FR")} € HT</span>
          </div>
          <span style="font-size:11px;font-weight:600;color:${G};flex-shrink:0;margin-right:4px">${oe}</span>
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
          <span class="m-list-row-value">${r.name}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="metier" style="align-items:flex-start;padding-top:12px;padding-bottom:12px">
          <div style="flex:1;min-width:0">
            <span class="m-list-row-label">Métiers</span>
            ${r.metiers.length?`<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">${r.metiers.map(M=>`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:4px;padding:2px 8px;font-size:12px;font-weight:500">${M}</span>`).join("")}</div>`:'<div style="font-size:13px;color:#8e8e93;margin-top:4px">—</div>'}
          </div>
          <i class="bi bi-chevron-right m-list-chevron" style="margin-top:2px"></i>
        </div>
      </div>

      <div class="m-list-section-header">Adresses</div>
      <div class="m-list">
        <div class="m-list-row" data-action="adresse-factu">
          <span class="m-list-row-label">Facturation</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${w}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${x||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
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
          <span class="m-list-row-value">${Ht(r.contrat.dateAdhesion)}</span>
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
        ${q.map((M,R)=>D(M,!j&&R===q.length-1)).join("")}
        ${j?`
          <div class="m-list-row m-list-row--last m-tappable" data-action="voir-factures">
            <span class="m-list-row-label" style="color:#007aff">Voir toutes les factures</span>
            <span class="m-list-row-value" style="color:#8e8e93">${g.length}</span>
            <i class="bi bi-chevron-right m-list-chevron" style="color:#007aff"></i>
          </div>`:""}
      </div>`:""}

      <div class="m-list-section-header">Membres actifs (${c.length})</div>
      <div class="m-list" style="margin:0 16px 0px;">
        ${c.length?[...C.map((M,R)=>`
            <div class="m-list-row${!F&&R===C.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${R}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${M.prenom} ${M.nom}</span>
                <span class="m-list-row-sub">${M.role}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`),F?`
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
          ${hs.slice(0,5).map((M,R)=>`
            <div class="m-list-row${R===4?" m-list-row--last":""}" style="align-items:flex-start;padding-top:14px;padding-bottom:14px">
              <div style="width:40px;height:40px;border-radius:8px;background:#e8f4f8;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-right:12px">
                <span style="font-size:11px;font-weight:700;color:#0172A4">${Qa(M.name)}</span>
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:600;font-size:14px">${M.name}</div>
                <div style="font-size:11px;color:#8e8e93;margin-top:2px">${M.distance} km · ${M.capteurs} capteurs · ${M.parcelles} parcelles</div>
                <button class="m-join-net-btn" data-net-idx="${R}" style="margin-top:8px;padding:5px 14px;border:1.5px solid #0172A4;color:#0172A4;background:none;border-radius:8px;font-size:12px;font-weight:500;font-family:inherit;cursor:pointer">Demander à rejoindre</button>
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
      <div style="height:32px"></div>`,h()}function h(){var w,x,g,q;(w=e.querySelector("#org-selector"))==null||w.addEventListener("change",j=>{s=j.target.value;const C=a.find(F=>F.id===s);C&&(r.name=C.name,y())}),e.querySelectorAll(".m-list-row[data-action]").forEach(j=>{j.addEventListener("click",()=>{if(n)switch(j.dataset.action){case"name":$("Nom de l'exploitation",r.name,C=>{r.name=C,y()});break;case"siret":$("SIRET",r.siret,C=>{r.siret=C,y()});break;case"metier":L();break;case"adresse-factu":P("Adresse de facturation",r.adresseFactu,C=>{r.adresseFactu=C,y()});break;case"adresse-livrai":P("Adresse de livraison",r.adresseLivrai,C=>{r.adresseLivrai=C,y()});break;case"pays":$("Pays",r.pays,C=>{r.pays=C,y()});break;case"copie-factures":E(r.copieFactures,C=>{r.copieFactures=C,l.copieFactures=C,y()});break;case"plan":S("Abonnement",Ka,r.plan,C=>{r.plan=C,y()});break;case"facture":Y(`PDF ${j.dataset.factureId} téléchargé`);break;case"voir-factures":A();break;case"voir-membres":z();break}})}),e.querySelectorAll("[data-member-idx]").forEach(j=>{j.addEventListener("click",()=>H(+j.dataset.memberIdx))}),e.querySelectorAll(".m-reseau-tab").forEach(j=>{j.addEventListener("click",()=>{e.querySelectorAll(".m-reseau-tab").forEach(F=>{const D=F===j;F.style.background=D?"#fff":"transparent",F.style.color=D?"#000":"#8e8e93"});const C=j.dataset.reseauTab;e.querySelector("#reseau-panel-adherente").style.display=C==="adherente"?"":"none",e.querySelector("#reseau-panel-independante").style.display=C==="independante"?"":"none"})}),(x=e.querySelector("#btn-ajouter-membre"))==null||x.addEventListener("click",I),(g=e.querySelector("#btn-quitter-reseau"))==null||g.addEventListener("click",()=>{const j=document.createElement("div");j.innerHTML=`<p style="font-size:14px;color:#3c3c43;margin:0">Vous allez quitter le réseau Breiz'Agri Conseil. Cette action est irréversible et devra être validée par votre administrateur réseau.</p>`,ue({title:"Quitter le réseau ?",body:j,doneLabel:"Confirmer",onDone:()=>Y("Demande de résiliation envoyée")})}),e.querySelectorAll(".m-join-net-btn").forEach(j=>{j.addEventListener("click",()=>{const C=hs[+j.dataset.netIdx];Y(`Demande envoyée à ${C.name}`)})}),e.querySelectorAll(".m-exploit-tab").forEach(j=>{j.addEventListener("click",()=>{e.querySelectorAll(".m-exploit-tab").forEach(F=>{const D=F===j;F.style.background=D?"#fff":"transparent",F.style.color=D?"#000":"#8e8e93"});const C=e.querySelector("#default-exploit-panel");C&&(C.style.display=j.dataset.exploitTab==="membre"?"":"none")})}),(q=e.querySelector("#btn-use-default-exploit"))==null||q.addEventListener("click",()=>{Y("Exploitation Jourdain sélectionnée")})}function $(w,x,g){const q=document.createElement("div");q.innerHTML=`<input class="m-sheet-input" type="text" value="${(x||"").replace(/"/g,"&quot;")}" placeholder="${w}">`;const j=q.querySelector("input");ue({title:w,body:q,doneLabel:"Enregistrer",onDone:()=>{const C=j.value.trim();C&&(g(C),Y("Enregistré"))}}),setTimeout(()=>j.focus(),300)}function E(w,x){const g=document.createElement("div");g.innerHTML=`
      <div style="font-size:13px;color:#636366;line-height:1.4;margin-bottom:10px">Ajoutez une adresse email pour envoyer un reçu et des copies des factures à un tiers (comptable, achats, finances…)</div>
      <input class="m-sheet-input" type="email" placeholder="Adresse email du destinataire" value="${(w||"").replace(/"/g,"&quot;")}">`;const q=g.querySelector("input");ue({title:"Copie des factures",body:g,doneLabel:"Enregistrer",onDone:()=>{x(q.value.trim()),Y("Enregistré")}}),setTimeout(()=>q.focus(),300)}function P(w,x,g){const q=document.createElement("div");q.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(x.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${x.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(x.ville||"").replace(/"/g,"&quot;")}">`,ue({title:w,body:q,doneLabel:"Enregistrer",onDone:()=>{g({rue:q.querySelector("#f-rue").value.trim(),cp:q.querySelector("#f-cp").value.trim(),ville:q.querySelector("#f-ville").value.trim()}),Y("Enregistré")}}),setTimeout(()=>q.querySelector("#f-rue").focus(),300)}function L(){const w=new Set(r.metiers),x=document.createElement("div"),g=()=>{x.innerHTML=ws.map(q=>`
        <div class="m-sheet-option${w.has(q)?" m-sheet-option--active":""}" data-m="${q}" style="justify-content:space-between">
          <span>${q}</span>
          ${w.has(q)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),x.querySelectorAll("[data-m]").forEach(q=>{q.addEventListener("click",()=>{const j=q.dataset.m;w.has(j)?w.delete(j):w.add(j),g()})})};g(),ue({title:"Métiers",body:x,doneLabel:"Valider",onDone:()=>{r.metiers=[...w],y()}})}function S(w,x,g,q){const j=document.createElement("div");j.innerHTML=x.map((F,D)=>`
      <div class="m-sheet-option${F===g?" m-sheet-option--active":""}" data-i="${D}">
        <span>${F}</span>${F===g?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const C=ue({title:w,body:j,doneLabel:"Fermer",onDone:()=>{}});j.querySelectorAll(".m-sheet-option").forEach(F=>{F.addEventListener("click",()=>{q(x[+F.dataset.i]),C.classList.remove("m-sheet-overlay--show"),setTimeout(()=>C.remove(),280),Y("Enregistré")})})}function H(w,x){const g=c[w];if(!g)return;const q=document.createElement("div");q.innerHTML=`
      <div class="m-sheet-info-rows" style="margin-bottom:12px">
        <div class="m-sheet-info-row"><span>Rôle</span><span>${g.role}</span></div>
        ${g.email?`<div class="m-sheet-info-row"><span>Email</span><span style="font-size:12px">${g.email}</span></div>`:""}
      </div>
      <div class="m-sheet-links">
        <a class="m-sheet-link m-sheet-link--danger" id="mem-delete"><i class="bi bi-trash"></i> Supprimer ${g.prenom} ${g.nom}</a>
      </div>`;const j=ue({title:`${g.prenom} ${g.nom}`,body:q,doneLabel:"Fermer",onDone:()=>{}});q.querySelector("#mem-delete").addEventListener("click",()=>{c.splice(w,1),j.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{j.remove(),y(),Y("Membre retiré"),x==null||x()},280)})}function z(){let w="",g=20;function q(){if(!w)return c;const D=w.toLowerCase();return c.filter(M=>`${M.prenom} ${M.nom}`.toLowerCase().includes(D)||(M.email||"").toLowerCase().includes(D)||(M.role||"").toLowerCase().includes(D))}const j=xe(`
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
      <div id="mbr-list-content" style="padding-bottom:32px"></div>`),C=j.querySelector("#mbr-list-content");function F(){var G;const D=q(),M=D.slice(0,g),R=D.length-M.length;C.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${D.length} membre${D.length!==1?"s":""}${w?" trouvé"+(D.length!==1?"s":""):" actif"+(D.length!==1?"s":"")}</div>
        <div class="m-list">
          ${M.length?M.map((oe,Z)=>`<div class="m-list-row${Z===M.length-1&&R===0?" m-list-row--last":""} m-tappable" data-mbr-idx="${c.indexOf(oe)}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${oe.prenom} ${oe.nom}</span>
                <span class="m-list-row-sub">${oe.role}${oe.email?" · "+oe.email:""}</span>
              </div>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`).join(""):""}
          ${R>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="mbr-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${R} de plus</span>
            </div>`:""}
          ${D.length?"":'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,C.querySelectorAll("[data-mbr-idx]").forEach(oe=>{oe.addEventListener("click",()=>H(+oe.dataset.mbrIdx,F))}),(G=C.querySelector("#mbr-load-more"))==null||G.addEventListener("click",()=>{g+=20,F()})}j.querySelector(".m-detail-back").addEventListener("click",fe),j.querySelector("#mbr-invite-btn").addEventListener("click",I),j.querySelector("#mbr-search").addEventListener("input",D=>{w=D.target.value,g=20,F()}),F()}function A(){const w=ys();let x="";function g(){if(!x)return w;const F=x.toLowerCase();return w.filter(D=>D.numero.toLowerCase().includes(F)||D.statut.toLowerCase().includes(F)||String(D.montant).includes(F))}const q=xe(`
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
      <div id="fac-list-content" style="padding-bottom:32px"></div>`),j=q.querySelector("#fac-list-content");function C(){const F=g();j.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${F.length} facture${F.length!==1?"s":""}</div>
        <div class="m-list">
          ${F.length?F.map((D,M)=>{const R=D.statut==="payée"?"#30d158":"#ff9f0a",G=D.statut==="payée"?"Payée":"En attente";return`<div class="m-list-row${M===F.length-1?" m-list-row--last":""} m-tappable" data-fac-id="${D.numero}">
              <div class="m-list-row-col">
                <span class="m-list-row-label" style="font-family:monospace;font-size:12px">${D.numero}</span>
                <span class="m-list-row-sub">${Ht(D.dateEmission)} · ${D.montant.toLocaleString("fr-FR")} € HT</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${R};flex-shrink:0;margin-right:4px">${G}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
        </div>`,j.querySelectorAll("[data-fac-id]").forEach(D=>{D.addEventListener("click",()=>Y(`PDF ${D.dataset.facId} téléchargé`))})}q.querySelector(".m-detail-back").addEventListener("click",fe),q.querySelector("#fac-search").addEventListener("input",F=>{x=F.target.value,C()}),C()}function I(){const w=document.createElement("div");w.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <select class="m-sheet-input" id="inv-role">
        ${Xa.map(x=>`<option>${x}</option>`).join("")}
      </select>`,ue({title:"Ajouter un membre",body:w,doneLabel:"Inviter",onDone:()=>{w.querySelector("#inv-email").value.trim()&&Y("Invitation envoyée")}}),setTimeout(()=>w.querySelector("#inv-email").focus(),300)}y();function T(){requestAnimationFrame(()=>setTimeout(f,100))}return{onAdd:null,refresh:T}}const il=100,sl=["Essentiel","Plus","Expert"],nl={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function pi(e){return nl[e]||{label:e||"—",color:"#8e8e93"}}function ol(e,i){if(!e)return{};if(i!=="admin")return e.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const t=ye.filter(r=>r.id!==il&&r.statut!=="inactif").map(r=>({...r})),o={...Ne,siege:{...Ne.siege},antennes:Ne.antennes.map(r=>({...r}))},n={partageMeteo:!0,partageSol:!1,partageIrrigation:!0};function a(r,u,b,f){return r.slice(u,b).map((y,h)=>{const $=u+h,E=pi(y.statut),P=y.statut==="demande en attente";return`
        <div class="m-list-row${$===f?" m-list-row--last":""} m-tappable" data-org-idx="${$}">
          <div class="m-list-row-col">
            <span class="m-list-row-label">${y.proprietaire||y.name}</span>
            <span class="m-list-row-sub">${y.name} · ${y.plan||"—"}</span>
          </div>
          ${P?`
            <button class="m-adh-action m-adh-action--ok" data-adh-idx="${$}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
            <button class="m-adh-action m-adh-action--ko" data-adh-idx="${$}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
          `:`<span style="font-size:11px;font-weight:600;color:${E.color};flex-shrink:0;margin-right:4px">${E.label}</span>`}
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>`}).join("")}function s(){let r="",b=20;function f(){if(!r)return t;const E=r.toLowerCase();return t.filter(P=>(P.proprietaire||P.name||"").toLowerCase().includes(E)||(P.name||"").toLowerCase().includes(E)||(P.email||"").toLowerCase().includes(E)||(P.codeAdherent||"").toLowerCase().includes(E))}const y=xe(`
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
      <div id="adh-list-content" style="padding-bottom:32px"></div>`),h=y.querySelector("#adh-list-content");function $(){var H;const E=f(),P=E.slice(0,b),L=E.length-P.length,S=E.filter(z=>z.statut==="actif"||z.statut==="actif en essai").length;h.innerHTML=`
        <div class="m-list-section-header" style="margin-top:4px">${r?E.length+" résultat"+(E.length!==1?"s":""):S+" actif"+(S!==1?"s":"")+" · "+E.length+" total"}</div>
        <div class="m-list">
          ${P.length?P.map((z,A)=>{const I=t.indexOf(z),T=pi(z.statut),k=z.statut==="demande en attente";return`
              <div class="m-list-row${A===P.length-1&&L===0?" m-list-row--last":""} m-tappable" data-lp-org-idx="${I}">
                <div class="m-list-row-col">
                  <span class="m-list-row-label">${z.proprietaire||z.name}</span>
                  <span class="m-list-row-sub">${z.name} · ${z.plan||"—"}</span>
                </div>
                ${k?`
                  <button class="m-adh-action m-adh-action--ok" data-lp-adh-idx="${I}" data-adh-action="valider" title="Valider"><i class="bi bi-check-lg"></i></button>
                  <button class="m-adh-action m-adh-action--ko" data-lp-adh-idx="${I}" data-adh-action="rejeter" title="Rejeter"><i class="bi bi-x-lg"></i></button>
                `:`<span style="font-size:11px;font-weight:600;color:${T.color};flex-shrink:0;margin-right:4px">${T.label}</span>`}
                <i class="bi bi-chevron-right m-list-chevron"></i>
              </div>`}).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun résultat</span></div>'}
          ${L>0?`
            <div class="m-list-row m-list-row--last m-tappable" id="adh-load-more" style="justify-content:center">
              <span style="color:#007aff;font-size:14px">Afficher ${L} de plus</span>
            </div>`:""}
        </div>`,h.querySelectorAll("[data-lp-org-idx]").forEach(z=>{z.addEventListener("click",A=>{A.target.closest("[data-adh-action]")||m(t[+z.dataset.lpOrgIdx],+z.dataset.lpOrgIdx,$)})}),h.querySelectorAll("[data-adh-action]").forEach(z=>{z.addEventListener("click",A=>{A.stopPropagation();const I=+z.dataset.lpAdhIdx,T=z.dataset.adhAction,k=t[I];k&&(T==="valider"?(k.statut="actif",l(),$(),Y(`${k.proprietaire||k.name} validé`)):(t.splice(I,1),l(),$(),Y("Demande rejetée")))})}),(H=h.querySelector("#adh-load-more"))==null||H.addEventListener("click",()=>{b+=20,$()})}y.querySelector(".m-detail-back").addEventListener("click",fe),y.querySelector("#adh-invite-btn").addEventListener("click",v),y.querySelector("#adh-search").addEventListener("input",E=>{r=E.target.value,b=20,$()}),$()}function l(){var h;const r=t.filter($=>$.statut!=="inactif"),u=`${o.siege.adresse}, ${o.siege.codePostal} ${o.siege.ville}`;e.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Réseau</div>
      <div class="m-list">
        <div class="m-list-row" data-action="net-nom">
          <span class="m-list-row-label">Nom du réseau</span>
          <span class="m-list-row-value" style="text-align:right;max-width:180px;font-size:13px">${o.nom}</span>
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
      <div style="height:32px"></div>`,e.querySelectorAll("[data-org-idx]").forEach($=>{$.addEventListener("click",E=>{E.target.closest("[data-adh-action]")||m(t[+$.dataset.orgIdx],+$.dataset.orgIdx)})}),(h=e.querySelector('[data-action="voir-adherents"]'))==null||h.addEventListener("click",s),e.querySelectorAll("[data-adh-action]").forEach($=>{$.addEventListener("click",E=>{E.stopPropagation();const P=+$.dataset.adhIdx,L=$.dataset.adhAction,S=t[P];S&&(L==="valider"?(S.statut="actif",l(),Y(`${S.proprietaire||S.name} validé`)):(t.splice(P,1),l(),Y("Demande rejetée")))})}),e.querySelectorAll("[data-action]").forEach($=>{$.addEventListener("click",()=>{switch($.dataset.action){case"net-nom":p("Nom du réseau",o.nom,E=>{o.nom=E,l()});break;case"net-siege":c();break;case"net-antennes":d();break}})});const b=e.querySelector("#tog-meteo"),f=e.querySelector("#tog-sol"),y=e.querySelector("#tog-irrigation");b==null||b.addEventListener("change",()=>{n.partageMeteo=b.checked,Y("Préférence enregistrée")}),f==null||f.addEventListener("change",()=>{n.partageSol=f.checked,Y("Préférence enregistrée")}),y==null||y.addEventListener("change",()=>{n.partageIrrigation=y.checked,Y("Préférence enregistrée")})}function p(r,u,b){const f=document.createElement("div");f.innerHTML=`<input class="m-sheet-input" type="text" value="${(u||"").replace(/"/g,"&quot;")}" placeholder="${r}">`;const y=f.querySelector("input");ue({title:r,body:f,doneLabel:"Enregistrer",onDone:()=>{const h=y.value.trim();h&&(b(h),Y("Enregistré"))}}),setTimeout(()=>y.focus(),300)}function c(){const r=document.createElement("div");r.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="s-rue" value="${o.siege.adresse.replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="s-cp" value="${o.siege.codePostal}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="s-ville" value="${o.siege.ville.replace(/"/g,"&quot;")}">`,ue({title:"Adresse du siège",body:r,doneLabel:"Enregistrer",onDone:()=>{o.siege.adresse=r.querySelector("#s-rue").value.trim(),o.siege.codePostal=r.querySelector("#s-cp").value.trim(),o.siege.ville=r.querySelector("#s-ville").value.trim(),l(),Y("Enregistré")}}),setTimeout(()=>r.querySelector("#s-rue").focus(),300)}function d(){const r=document.createElement("div");(()=>{r.innerHTML=o.antennes.map((b,f)=>`
        <div class="m-sheet-info-rows" style="margin-bottom:8px">
          <div class="m-sheet-info-row"><span>Nom</span><span>${b.nom}</span></div>
          <div class="m-sheet-info-row"><span>Adresse</span><span style="font-size:12px">${b.adresse}, ${b.codePostal} ${b.ville}</span></div>
          <div class="m-sheet-info-row"><span>Tél.</span><span>${b.telephone}</span></div>
        </div>`).join('<hr style="border:none;border-top:1px solid #e5e5ea;margin:4px 0">')})(),ue({title:"Antennes",body:r,doneLabel:"Fermer",onDone:()=>{}})}function m(r,u,b){var P,L;const f=pi(r.statut),y=r.statut==="invitation en attente",h=`https://app.weenat.com/invitation?code=${r.codeAdherent||"ADZ-XXX"}`,$=document.createElement("div");$.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email (propriétaire)</span><span>${r.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${r.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${r.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${r.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${ce.filter(S=>S.orgId===r.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const S=new Set(ce.filter(H=>H.orgId===r.id).map(H=>H.id));return re.filter(H=>S.has(H.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${f.color};font-weight:600">${f.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${r.dateAdhesion?r.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${y?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const E=ue({title:r.name,body:$,doneLabel:"Fermer",onDone:()=>{}});(P=$.querySelector("#lnk-copy"))==null||P.addEventListener("click",()=>{var S;(S=navigator.clipboard)==null||S.writeText(h).catch(()=>{}),Y("Lien copié !")}),(L=$.querySelector("#lnk-cancel"))==null||L.addEventListener("click",()=>{r.statut="inactif",E.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{E.remove(),l(),b==null||b(),Y("Invitation annulée")},280)}),$.querySelector("#lnk-delete").addEventListener("click",()=>{t.splice(u,1),E.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{E.remove(),l(),b==null||b(),Y("Adhérent supprimé")},280)})}function v(){const r=document.createElement("div");r.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${sl.map(u=>`<option>${u}</option>`).join("")}
      </select>`,ue({title:"Inviter un adhérent",body:r,doneLabel:"Envoyer",onDone:()=>{const u=r.querySelector("#adh-email").value.trim(),b=r.querySelector("#adh-code").value.trim();if(!u||!b){Y("Email et code requis");return}t.push({id:Date.now(),name:u,proprietaire:u,email:u,codeAdherent:b,plan:r.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),l(),Y("Invitation envoyée")}}),setTimeout(()=>r.querySelector("#adh-email").focus(),300)}return l(),{onAdd:v}}$s(ce);const un=new URLSearchParams(window.location.search),mi=un.get("role"),pn=new Set(["new","new-adherent","new-member-admin","new-member-agent","new-member-reader"]),qe=mi==="adherent"?"adherent":pn.has(mi)?mi:"admin";function mn(){const e=document.getElementById("status-time");if(!e)return;const i=new Date;e.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}mn();setInterval(mn,1e4);const Ye=["parcelles","capteurs","dashboard","alertes","parametres"];let Gt="parcelles";function Ze(e){var i,t;!Ye.includes(e)||e===Gt||(Gt=e,document.querySelectorAll(".m-screen").forEach(o=>o.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(o=>o.classList.remove("active")),(i=document.getElementById(`screen-${e}`))==null||i.classList.add("active"),(t=document.querySelector(`.nav-item[data-tab="${e}"]`))==null||t.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})))}function al(e){var t;(t=document.getElementById("abandon-modal"))==null||t.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),e()})}document.getElementById("phone-screen").addEventListener("click",e=>{var i;e.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",e=>{const i=e.target.closest(".nav-item");if(!i)return;const t=i.dataset.tab;_i()>0&&$n()?al(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Ze(t)}):(_i()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})),Ze(t))});let Re=null,Lt=null;const vn=50,It=document.getElementById("screen-stack");It.addEventListener("mousedown",e=>{if(e.target.closest(".leaflet-container")){Re=null;return}Re=e.clientX,Lt=e.clientY});It.addEventListener("mouseup",e=>{if(Re===null)return;const i=e.clientX-Re,t=e.clientY-Lt;if(Math.abs(i)>vn&&Math.abs(i)>Math.abs(t)){const o=Ye.indexOf(Gt);i<0&&o<Ye.length-1&&Ze(Ye[o+1]),i>0&&o>0&&Ze(Ye[o-1])}Re=null,Lt=null});It.addEventListener("mouseleave",()=>{Re=null});It.addEventListener("touchstart",e=>{if(e.target.closest(".leaflet-container")){Re=null;return}Re=e.touches[0].clientX,Lt=e.touches[0].clientY},{passive:!0});It.addEventListener("touchend",e=>{if(Re===null)return;const i=e.changedTouches[0].clientX-Re,t=e.changedTouches[0].clientY-Lt;if(Math.abs(i)>vn&&Math.abs(i)>Math.abs(t)){const o=Ye.indexOf(Gt);i<0&&o<Ye.length-1&&Ze(Ye[o+1]),i>0&&o>0&&Ze(Ye[o-1])}Re=null},{passive:!0});const ll=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...qe==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],Qt={};function fn(e){const i=document.getElementById("param-plus-btn");if(!i)return;const t=Qt[e];i.onclick=(t==null?void 0:t.onAdd)??(()=>{var o;return(o=window.showMobileAddPage)==null?void 0:o.call(window)})}function rl(){var i;const e=document.getElementById("param-segment");e&&(qe==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),ll.forEach((t,o)=>{const n=document.createElement("button");n.className="m-segment-btn"+(o===0?" active":""),n.textContent=t.label,n.dataset.target=t.id,n.addEventListener("click",()=>{var a,s,l;e.querySelectorAll(".m-segment-btn").forEach(p=>p.classList.remove("active")),n.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(p=>p.classList.remove("active")),(a=document.getElementById(t.id))==null||a.classList.add("active"),fn(t.id),(l=(s=Qt[t.id])==null?void 0:s.refresh)==null||l.call(s)}),e.appendChild(n)}))}rl();pn.has(qe)&&Gn(qe,()=>{(qe==="new"||qe==="new-adherent")&&Ze("dashboard")});Oo(document.getElementById("screen-dashboard"),qe);La(document.getElementById("screen-parcelles"),qe);Za(document.getElementById("screen-capteurs"),qe);zn(document.getElementById("screen-alertes"),qe);Tn(document.getElementById("param-compte"),qe);Qt["param-exploitation"]=tl(document.getElementById("param-exploitation"),qe);Qt["param-reseau"]=ol(document.getElementById("param-reseau"),qe);const xs=un.get("parcel");if(xs){const e=ce.find(i=>i.id===+xs);e&&(Ze("parcelles"),requestAnimationFrame(()=>{ge(()=>Promise.resolve().then(()=>dt),void 0).then(i=>i.initParcelDetail(e,[],"widgets","Parcelles"))}))}function cl(){var o;const e=qe==="admin",i=document.getElementById("phone-screen");(o=document.getElementById("m-add-modal"))==null||o.remove();const t=document.createElement("div");t.id="m-add-modal",t.style.cssText="position:absolute;inset:0;background:#f2f2f7;z-index:3000;display:flex;flex-direction:column",t.innerHTML=`
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
    </div>`,t.querySelector("#m-add-close").addEventListener("click",()=>t.remove()),t.querySelectorAll(".m-add-row").forEach(n=>{n.addEventListener("click",()=>{var a;t.remove(),(n.dataset.action==="note"||n.dataset.action==="traitement")&&((a=window.openJournalModal)==null||a.call(window,n.dataset.action))})}),i.appendChild(t)}window.openMobileAddModal=cl;["screen-parcelles","screen-capteurs","screen-alertes"].forEach(e=>{var i;(i=document.querySelector(`#${e} .m-navbar-action`))==null||i.addEventListener("click",()=>{var t;return(t=window.showMobileAddPage)==null?void 0:t.call(window)})});fn("param-compte");export{fe as a,xe as p,ue as s};
