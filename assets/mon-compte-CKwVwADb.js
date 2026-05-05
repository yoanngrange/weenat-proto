import"./main-CTKmqMeY.js";import{u as x}from"./breadcrumb-DEBQjfiD.js";const g={"admin-reseau":{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",tel:"+33 6 12 34 56 78",extraPhones:[{nom:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"2026-01-10"},{id:2,name:"Intégration Agreo",created:"2026-02-28"},{id:3,name:"Script export nuit",created:"2026-04-01"}]},"adherent-reseau":{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",tel:"+33 7 52 18 93 46",extraPhones:[],apiKeys:[{id:1,name:"Application mobile",created:"2026-02-14"}]}};function f(){const e=localStorage.getItem("menuRole")||"admin-reseau";return g[e]||g["admin-reseau"]}document.addEventListener("DOMContentLoaded",()=>{x(),v()});function l(e){const t=document.createElement("div");t.className="toast",t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},2500)}function v(){const e=document.getElementById("content");if(!e)return;const t=f(),a=localStorage.getItem("avatarUrl"),n=a?`style="background-image:url(${a});background-size:cover;"`:"";e.innerHTML=`
    <div class="account-page">

      <!-- Avatar + nom -->
      <section class="account-section account-section--avatar">
        <div class="account-avatar" id="account-avatar" ${n}>${a?"":t.initials}</div>
        <div class="account-avatar-info">
          <div class="account-avatar-name">${t.prenom} ${t.nom}</div>
          <label class="btn-secondary account-avatar-upload" style="cursor:pointer">
            <i class="bi bi-camera"></i> Changer la photo
            <input type="file" accept="image/*" style="display:none" id="avatar-upload">
          </label>
        </div>
      </section>

      <!-- Identité -->
      <section class="account-section">
        <div class="account-section-title">Identité</div>
        <div class="account-field-row">
          <label class="account-label">Prénom</label>
          <input type="text" class="account-input" value="${t.prenom}" id="field-prenom">
          <button class="account-save-btn" data-field="prenom"><i class="bi bi-check-lg"></i></button>
        </div>
        <div class="account-field-row">
          <label class="account-label">Nom</label>
          <input type="text" class="account-input" value="${t.nom}" id="field-nom">
          <button class="account-save-btn" data-field="nom"><i class="bi bi-check-lg"></i></button>
        </div>
      </section>

      <!-- Email -->
      <section class="account-section">
        <div class="account-section-title">Email</div>
        <div class="account-field-row">
          <label class="account-label">Adresse email</label>
          <span class="account-value">${t.email}</span>
          <span class="verified-badge"><i class="bi bi-patch-check-fill"></i> Vérifié</span>
          <button class="btn-secondary" id="modify-email-btn">Modifier</button>
        </div>
      </section>

      <!-- Mot de passe -->
      <section class="account-section">
        <div class="account-section-title">Mot de passe</div>
        <div class="account-field-row">
          <label class="account-label">Mot de passe</label>
          <span class="account-value">••••••••••••</span>
          <button class="btn-secondary" id="modify-pwd-btn">Modifier</button>
        </div>
      </section>

      <!-- Téléphone -->
      <section class="account-section">
        <div class="account-section-title" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
          <span>Téléphone</span>
          ${(t.extraPhones||[]).length<4?'<button class="btn-secondary" id="add-extra-phone-btn" style="font-size:12px"><i class="bi bi-plus"></i> Ajouter un numéro</button>':""}
        </div>
        <div class="account-field-row">
          <label class="account-label">Numéro principal</label>
          <input type="tel" class="account-input" value="${t.tel}" id="field-tel">
          <button class="account-save-btn" data-field="tel"><i class="bi bi-check-lg"></i></button>
        </div>
        <div id="extra-phones-list">
          ${(t.extraPhones||[]).map((i,s)=>`
          <div class="account-field-row extra-phone-row" data-index="${s}">
            <input type="text" class="account-input" style="max-width:160px" placeholder="Nom" value="${i.nom}" data-extra-phone-nom="${s}">
            <input type="tel" class="account-input" placeholder="Numéro" value="${i.numero}" data-extra-phone-num="${s}">
            <button class="account-save-btn extra-phone-save" data-index="${s}"><i class="bi bi-check-lg"></i></button>
            <button class="icon-btn remove-extra-phone" data-index="${s}" title="Supprimer"><i class="bi bi-x-lg"></i></button>
          </div>`).join("")}
        </div>
      </section>

      <!-- Préférences notifications -->
      <section class="account-section">
        <div class="account-section-title">Préférences de notifications</div>
        ${k()}
      </section>

      <!-- Langue -->
      <section class="account-section">
        <div class="account-section-title">Langue</div>
        <div class="account-field-row">
          <label class="account-label">Langue de l'interface</label>
          <select class="account-input" id="field-langue" style="max-width:220px">
            <option value="fr" selected>Français</option>
            <option value="en">Anglais</option>
            <option value="es">Espagnol</option>
            <option value="de">Allemand</option>
            <option value="it">Italien</option>
            <option value="pt">Portugais</option>
            <option value="pl">Polonais</option>
            <option value="nl">Néerlandais</option>
          </select>
          <button class="account-save-btn" data-field="langue"><i class="bi bi-check-lg"></i></button>
        </div>
      </section>

      <!-- Système d'unités -->
      <section class="account-section">
        <div class="account-section-title">Système d'unités</div>
        <div class="account-field-row" style="gap:20px">
          <label class="account-label">Unités de mesure</label>
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:14px">
            <input type="radio" name="units" value="metrique" checked> Métrique (mm, °C, km/h…)
          </label>
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:14px">
            <input type="radio" name="units" value="imperial"> Impérial (in, °F, mph…)
          </label>
          <button class="account-save-btn" data-field="units"><i class="bi bi-check-lg"></i></button>
        </div>
      </section>

      <!-- Smartphones autorisés -->
      <section class="account-section">
        <div class="account-section-title">Smartphones autorisés</div>
        <div id="smartphones-list"></div>
      </section>

      <!-- Clés d'API -->
      <section class="account-section">
        <div class="account-section-title" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
          <span>Clés d'API <span id="api-key-count" style="font-weight:400;color:var(--txt3);font-size:11px"></span></span>
          <button class="btn-secondary" id="add-api-key-btn" style="font-size:12px"><i class="bi bi-plus"></i> Générer une clé</button>
        </div>
        <div id="api-keys-list"></div>
      </section>

      <!-- Supprimer le compte -->
      <section class="account-section account-section--danger">
        <div class="account-section-title">Zone de danger</div>
        <p class="account-danger-desc">La suppression de votre compte est irréversible. Toutes vos données seront définitivement effacées.</p>
        <button class="btn-danger" id="delete-account-btn"><i class="bi bi-trash"></i> Supprimer mon compte</button>
      </section>

    </div>
  `,w()}function k(){const e=[{key:"orgs",label:"Organisations",icon:"bi-building"},{key:"capteurs",label:"Capteurs",icon:"bi-broadcast"}],t=[{key:"email",label:"Email",icon:"bi-envelope"},{key:"sms",label:"SMS",icon:"bi-phone"},{key:"push",label:"Notification push",icon:"bi-bell"}];return`<div class="notif-prefs-grid">
    <div></div>
    ${t.map(a=>`<div class="notif-prefs-channel"><i class="bi ${a.icon}"></i> ${a.label}</div>`).join("")}
    ${e.map(a=>`
      <div class="notif-prefs-cat"><i class="bi ${a.icon}"></i> ${a.label}</div>
      ${t.map(n=>`
        <div class="notif-prefs-cell">
          <label class="toggle-switch">
            <input type="checkbox" ${a.key==="capteurs"&&n.key==="sms"?"":"checked"}>
            <span class="toggle-track"></span>
          </label>
        </div>
      `).join("")}
    `).join("")}
  </div>`}const b=20;function y(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return"sk-wnt-"+Array.from({length:32},()=>e[Math.floor(Math.random()*e.length)]).join("")}let c=f().apiKeys.map(e=>({...e,key:y()})),E=c.length+1;function u(){const e=document.getElementById("api-keys-list"),t=document.getElementById("api-key-count"),a=document.getElementById("add-api-key-btn");e&&(t&&(t.textContent=`(${c.length} / ${b})`),a&&(a.disabled=c.length>=b),e.innerHTML=c.map(n=>`
    <div class="api-key-entry" data-id="${n.id}">
      <div class="api-key-entry-header">
        <span class="api-key-name" data-id="${n.id}">${n.name}</span>
        <button class="api-key-rename-btn icon-btn" data-id="${n.id}" title="Renommer"><i class="bi bi-pencil"></i></button>
        <span class="api-key-created">créée le ${n.created.split("-").reverse().join("/")}</span>
      </div>
      <div class="api-key-row">
        <code class="api-key-value">${n.key.slice(0,14)}••••••••••••••••••••••••••</code>
        <button class="api-key-copy btn-secondary" data-key="${n.key}" style="font-size:12px"><i class="bi bi-clipboard"></i> Copier</button>
        <button class="api-key-regen btn-secondary" data-id="${n.id}" style="font-size:12px"><i class="bi bi-arrow-repeat"></i> Régénérer</button>
        <button class="api-key-delete icon-btn" data-id="${n.id}" title="Supprimer" style="color:var(--err)"><i class="bi bi-trash"></i></button>
      </div>
    </div>
  `).join("")||`<div style="color:var(--txt3);font-size:13px;padding:8px 0">Aucune clé d'API.</div>`,e.querySelectorAll(".api-key-copy").forEach(n=>{n.addEventListener("click",()=>{var i;(i=navigator.clipboard)==null||i.writeText(n.dataset.key),l("Clé copiée dans le presse-papier.")})}),e.querySelectorAll(".api-key-regen").forEach(n=>{n.addEventListener("click",()=>{const i=c.find(s=>s.id===parseInt(n.dataset.id));!i||!confirm(`Régénérer la clé "${i.name}" ? L'ancienne sera invalidée.`)||(i.key=y(),u(),l("Clé régénérée."))})}),e.querySelectorAll(".api-key-delete").forEach(n=>{n.addEventListener("click",()=>{const i=c.find(s=>s.id===parseInt(n.dataset.id));!i||!confirm(`Supprimer la clé "${i.name}" ?`)||(c=c.filter(s=>s.id!==i.id),u(),l("Clé supprimée."))})}),e.querySelectorAll(".api-key-rename-btn").forEach(n=>{n.addEventListener("click",()=>{const i=c.find(d=>d.id===parseInt(n.dataset.id));if(!i)return;const s=e.querySelector(`.api-key-name[data-id="${i.id}"]`);if(!s)return;const o=document.createElement("input");o.type="text",o.className="account-input",o.value=i.name,o.style.cssText="width:180px;padding:3px 8px;font-size:13px",s.replaceWith(o),o.focus();const r=()=>{i.name=o.value.trim()||i.name,u()};o.addEventListener("blur",r),o.addEventListener("keydown",d=>{d.key==="Enter"&&r()})})}))}function $(){var e;u(),(e=document.getElementById("add-api-key-btn"))==null||e.addEventListener("click",()=>{if(c.length>=b)return;const t=prompt("Nom de la nouvelle clé :");if(!t)return;const a=new Date().toISOString().slice(0,10);c.push({id:E++,name:t.trim()||"Nouvelle clé",key:y(),created:a}),u(),l("Clé générée.")})}const S=4;function I(){var t;const e=f();e.extraPhones||(e.extraPhones=[]),(t=document.getElementById("add-extra-phone-btn"))==null||t.addEventListener("click",()=>{e.extraPhones.length>=S||(e.extraPhones.push({nom:"",numero:""}),v())}),document.querySelectorAll(".remove-extra-phone").forEach(a=>{a.addEventListener("click",()=>{const n=parseInt(a.dataset.index);e.extraPhones.splice(n,1),v()})}),document.querySelectorAll(".extra-phone-save").forEach(a=>{a.addEventListener("click",()=>{var o,r;const n=parseInt(a.dataset.index),i=((o=document.querySelector(`[data-extra-phone-nom="${n}"]`))==null?void 0:o.value.trim())||"",s=((r=document.querySelector(`[data-extra-phone-num="${n}"]`))==null?void 0:r.value.trim())||"";e.extraPhones[n]={nom:i,numero:s},l("Numéro enregistré.")})})}let m=[{id:"A1B2-3C4D",model:"iPhone 15 Pro"},{id:"E5F6-7G8H",model:"Samsung Galaxy S24"},{id:"I9J0-K1L2",model:"Google Pixel 8"}];function h(){const e=document.getElementById("smartphones-list");if(e){if(!m.length){e.innerHTML='<div style="color:var(--txt3);font-size:13px;padding:4px 0">Aucun smartphone autorisé.</div>';return}e.innerHTML=m.map((t,a)=>`
    <div class="account-field-row" style="align-items:center">
      <span class="account-label" style="font-family:monospace;font-size:12px;color:var(--txt3)">${t.id}</span>
      <span class="account-value">${t.model}</span>
      <button class="icon-btn remove-smartphone" data-index="${a}" title="Révoquer" style="color:var(--err)"><i class="bi bi-trash"></i></button>
    </div>`).join(""),e.querySelectorAll(".remove-smartphone").forEach(t=>{t.addEventListener("click",()=>{m.splice(parseInt(t.dataset.index),1),h(),l("Smartphone révoqué.")})})}}function L(){h()}function w(){var e,t,a,n;document.querySelectorAll(".account-save-btn").forEach(i=>{i.addEventListener("click",()=>l("Modifications enregistrées."))}),(e=document.getElementById("modify-email-btn"))==null||e.addEventListener("click",()=>l("Modification email — fonctionnalité à venir")),(t=document.getElementById("modify-pwd-btn"))==null||t.addEventListener("click",()=>l("Modification mot de passe — fonctionnalité à venir")),$(),I(),L(),(a=document.getElementById("delete-account-btn"))==null||a.addEventListener("click",()=>{confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")&&l("Suppression de compte — fonctionnalité à venir")}),(n=document.getElementById("avatar-upload"))==null||n.addEventListener("change",i=>{var r;const s=(r=i.target.files)==null?void 0:r[0];if(!s)return;const o=new FileReader;o.onload=d=>{const p=document.getElementById("account-avatar");p&&(p.style.backgroundImage=`url(${d.target.result})`,p.style.backgroundSize="cover",p.textContent=""),localStorage.setItem("avatarUrl",d.target.result)},o.readAsDataURL(s)})}
