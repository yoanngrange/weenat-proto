import"./main-QvYlLaZB.js";import{u as y}from"./breadcrumb-DEBQjfiD.js";const v={"admin-reseau":{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",tel:"+33 6 12 34 56 78",apiKeys:[{id:1,name:"Application mobile",created:"2026-01-10"},{id:2,name:"Intégration Agreo",created:"2026-02-28"},{id:3,name:"Script export nuit",created:"2026-04-01"}]},"adherent-reseau":{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",tel:"+33 7 52 18 93 46",apiKeys:[{id:1,name:"Application mobile",created:"2026-02-14"}]}};function f(){const t=localStorage.getItem("menuRole")||"admin-reseau";return v[t]||v["admin-reseau"]}document.addEventListener("DOMContentLoaded",()=>{y(),g()});function l(t){const a=document.createElement("div");a.className="toast",a.textContent=t,document.body.appendChild(a),setTimeout(()=>a.classList.add("show"),10),setTimeout(()=>{a.classList.remove("show"),setTimeout(()=>a.remove(),300)},2500)}function g(){const t=document.getElementById("content");if(!t)return;const a=f(),n=localStorage.getItem("avatarUrl"),e=n?`style="background-image:url(${n});background-size:cover;"`:"";t.innerHTML=`
    <div class="account-page">

      <!-- Avatar + nom -->
      <section class="account-section account-section--avatar">
        <div class="account-avatar" id="account-avatar" ${e}>${n?"":a.initials}</div>
        <div class="account-avatar-info">
          <div class="account-avatar-name">${a.prenom} ${a.nom}</div>
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
          <input type="text" class="account-input" value="${a.prenom}" id="field-prenom">
          <button class="account-save-btn" data-field="prenom"><i class="bi bi-check-lg"></i></button>
        </div>
        <div class="account-field-row">
          <label class="account-label">Nom</label>
          <input type="text" class="account-input" value="${a.nom}" id="field-nom">
          <button class="account-save-btn" data-field="nom"><i class="bi bi-check-lg"></i></button>
        </div>
      </section>

      <!-- Email -->
      <section class="account-section">
        <div class="account-section-title">Email</div>
        <div class="account-field-row">
          <label class="account-label">Adresse email</label>
          <span class="account-value">${a.email}</span>
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
        <div class="account-section-title">Téléphone</div>
        <div class="account-field-row">
          <label class="account-label">Numéro</label>
          <input type="tel" class="account-input" value="${a.tel}" id="field-tel">
          <button class="account-save-btn" data-field="tel"><i class="bi bi-check-lg"></i></button>
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
  `,x()}function k(){const t=[{key:"orgs",label:"Organisations",icon:"bi-building"},{key:"capteurs",label:"Capteurs",icon:"bi-broadcast"}],a=[{key:"email",label:"Email",icon:"bi-envelope"},{key:"sms",label:"SMS",icon:"bi-phone"},{key:"push",label:"Notification push",icon:"bi-bell"}];return`<div class="notif-prefs-grid">
    <div></div>
    ${a.map(n=>`<div class="notif-prefs-channel"><i class="bi ${n.icon}"></i> ${n.label}</div>`).join("")}
    ${t.map(n=>`
      <div class="notif-prefs-cat"><i class="bi ${n.icon}"></i> ${n.label}</div>
      ${a.map(e=>`
        <div class="notif-prefs-cell">
          <label class="toggle-switch">
            <input type="checkbox" ${n.key==="capteurs"&&e.key==="sms"?"":"checked"}>
            <span class="toggle-track"></span>
          </label>
        </div>
      `).join("")}
    `).join("")}
  </div>`}const m=20;function b(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return"sk-wnt-"+Array.from({length:32},()=>t[Math.floor(Math.random()*t.length)]).join("")}let o=f().apiKeys.map(t=>({...t,key:b()})),h=o.length+1;function u(){const t=document.getElementById("api-keys-list"),a=document.getElementById("api-key-count"),n=document.getElementById("add-api-key-btn");t&&(a&&(a.textContent=`(${o.length} / ${m})`),n&&(n.disabled=o.length>=m),t.innerHTML=o.map(e=>`
    <div class="api-key-entry" data-id="${e.id}">
      <div class="api-key-entry-header">
        <span class="api-key-name" data-id="${e.id}">${e.name}</span>
        <button class="api-key-rename-btn icon-btn" data-id="${e.id}" title="Renommer"><i class="bi bi-pencil"></i></button>
        <span class="api-key-created">créée le ${e.created.split("-").reverse().join("/")}</span>
      </div>
      <div class="api-key-row">
        <code class="api-key-value">${e.key.slice(0,14)}••••••••••••••••••••••••••</code>
        <button class="api-key-copy btn-secondary" data-key="${e.key}" style="font-size:12px"><i class="bi bi-clipboard"></i> Copier</button>
        <button class="api-key-regen btn-secondary" data-id="${e.id}" style="font-size:12px"><i class="bi bi-arrow-repeat"></i> Régénérer</button>
        <button class="api-key-delete icon-btn" data-id="${e.id}" title="Supprimer" style="color:var(--err)"><i class="bi bi-trash"></i></button>
      </div>
    </div>
  `).join("")||`<div style="color:var(--txt3);font-size:13px;padding:8px 0">Aucune clé d'API.</div>`,t.querySelectorAll(".api-key-copy").forEach(e=>{e.addEventListener("click",()=>{var i;(i=navigator.clipboard)==null||i.writeText(e.dataset.key),l("Clé copiée dans le presse-papier.")})}),t.querySelectorAll(".api-key-regen").forEach(e=>{e.addEventListener("click",()=>{const i=o.find(c=>c.id===parseInt(e.dataset.id));!i||!confirm(`Régénérer la clé "${i.name}" ? L'ancienne sera invalidée.`)||(i.key=b(),u(),l("Clé régénérée."))})}),t.querySelectorAll(".api-key-delete").forEach(e=>{e.addEventListener("click",()=>{const i=o.find(c=>c.id===parseInt(e.dataset.id));!i||!confirm(`Supprimer la clé "${i.name}" ?`)||(o=o.filter(c=>c.id!==i.id),u(),l("Clé supprimée."))})}),t.querySelectorAll(".api-key-rename-btn").forEach(e=>{e.addEventListener("click",()=>{const i=o.find(d=>d.id===parseInt(e.dataset.id));if(!i)return;const c=t.querySelector(`.api-key-name[data-id="${i.id}"]`);if(!c)return;const s=document.createElement("input");s.type="text",s.className="account-input",s.value=i.name,s.style.cssText="width:180px;padding:3px 8px;font-size:13px",c.replaceWith(s),s.focus();const r=()=>{i.name=s.value.trim()||i.name,u()};s.addEventListener("blur",r),s.addEventListener("keydown",d=>{d.key==="Enter"&&r()})})}))}function E(){var t;u(),(t=document.getElementById("add-api-key-btn"))==null||t.addEventListener("click",()=>{if(o.length>=m)return;const a=prompt("Nom de la nouvelle clé :");if(!a)return;const n=new Date().toISOString().slice(0,10);o.push({id:h++,name:a.trim()||"Nouvelle clé",key:b(),created:n}),u(),l("Clé générée.")})}function x(){var t,a,n,e;document.querySelectorAll(".account-save-btn").forEach(i=>{i.addEventListener("click",()=>l("Modifications enregistrées."))}),(t=document.getElementById("modify-email-btn"))==null||t.addEventListener("click",()=>l("Modification email — fonctionnalité à venir")),(a=document.getElementById("modify-pwd-btn"))==null||a.addEventListener("click",()=>l("Modification mot de passe — fonctionnalité à venir")),E(),(n=document.getElementById("delete-account-btn"))==null||n.addEventListener("click",()=>{confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")&&l("Suppression de compte — fonctionnalité à venir")}),(e=document.getElementById("avatar-upload"))==null||e.addEventListener("change",i=>{var r;const c=(r=i.target.files)==null?void 0:r[0];if(!c)return;const s=new FileReader;s.onload=d=>{const p=document.getElementById("account-avatar");p&&(p.style.backgroundImage=`url(${d.target.result})`,p.style.backgroundSize="cover",p.textContent=""),localStorage.setItem("avatarUrl",d.target.result)},s.readAsDataURL(c)})}
