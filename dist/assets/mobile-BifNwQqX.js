const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/irrigation-CoslZCc2.js","assets/irrigations-cQAUTeq7.js","assets/plots-BEYIGwLd.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/sensors-DDe0aa9W.js","assets/orgs-Cx4wNzLL.js","assets/network-YzWdS0n_.js","assets/members-DEd9yWse.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as B}from"./plots-BEYIGwLd.js";import{s as z}from"./sensors-DDe0aa9W.js";import{o as J}from"./orgs-Cx4wNzLL.js";import{n as ue}from"./network-YzWdS0n_.js";import{b as At,I as Tt}from"./irrigations-cQAUTeq7.js";import{m as Ie}from"./members-DEd9yWse.js";const ve=[];function xe(t){const i=document.getElementById("phone-screen"),e=document.createElement("div");return e.className="m-detail-layer",e.innerHTML=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-detail-layer--in")),ve.push(e),e}function ce(){const t=ve.pop();t&&(t.classList.remove("m-detail-layer--in"),setTimeout(()=>t.remove(),300))}function Ke(){return ve.length}function kt(){return ve.some(t=>t.dataset.dirty==="true")}function bs(){ve.forEach(t=>delete t.dataset.dirty)}window.addEventListener("m-tab-change",()=>{ve.forEach(t=>t.remove()),ve.length=0});const Qe={admin:{initials:"JD",prenom:"Jean",nom:"Dupont",email:"jean.dupont@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 6 12 34 56 78"},{label:"Sophie Dupont",numero:"+33 6 98 76 54 32"}],apiKeys:[{id:1,name:"Application mobile",created:"10/01/2026",value:"sk-wnt-mbl4X9pQr2Lz7vNcKwJ1eYtU6sSoD8aF"},{id:2,name:"Intégration Agreo",created:"28/02/2026",value:"sk-wnt-agr8B3mTxP5nVcLqR1uZoK7wJ9dE2sY"},{id:3,name:"Script export nuit",created:"01/04/2026",value:"sk-wnt-xpt2H7kNpQ4rVmLcJ9sT1oY6uB3wF8dE"}]},adherent:{initials:"MM",prenom:"Marie",nom:"Martin",email:"marie.martin@ferme-du-bocage.fr",phones:[{label:"Principal",numero:"+33 7 52 18 93 46"}],apiKeys:[{id:1,name:"Application mobile",created:"14/02/2026",value:"sk-wnt-mbl9Z2xQr5Lp7vNcKwA1eYtU3sRoD4bG"}]}},Pt=["Français","English","Español","Deutsch","Italiano","Português","Polski","Nederlands"],et=["Métrique (mm, °C, km/h…)","Impérial (in, °F, mph…)"];let oe={};function Y(t){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function he({title:t,body:i,onDone:e,doneLabel:a="OK"}){var o;const r=document.getElementById("phone-screen");(o=document.querySelector(".m-sheet-overlay"))==null||o.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${a}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>
  `,n.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),r.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const s=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",s),n.querySelector(".m-sheet-done").addEventListener("click",()=>{e==null||e(),s()}),n.addEventListener("click",d=>{d.target===n&&s()}),n}function tt(t,i,e){const a=document.createElement("div");a.innerHTML=`<input class="m-sheet-input" type="text" value="${i}" placeholder="${t}">`;const r=a.querySelector("input");he({title:t,body:a,doneLabel:"Enregistrer",onDone:()=>{e(r.value.trim()),Y("Enregistré")}}),setTimeout(()=>r.focus(),300)}function it(t,i,e,a){const r=document.createElement("div");r.innerHTML=i.map((s,o)=>`
    <div class="m-sheet-option${s===e?" m-sheet-option--active":""}" data-i="${o}">
      <span>${s}</span>
      ${s===e?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
    </div>
  `).join("");const n=he({title:t,body:r,doneLabel:"Fermer",onDone:()=>{}});r.querySelectorAll(".m-sheet-option").forEach(s=>{s.addEventListener("click",()=>{a(i[+s.dataset.i]),n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280),Y("Enregistré")})})}function It(t,i){const e=document.createElement("div"),a=()=>{var r;e.innerHTML=t.map((n,s)=>`
      <div class="m-sheet-phone-row">
        <div class="m-sheet-phone-fields">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="label" value="${n.label}" placeholder="Libellé">
          <input class="m-sheet-input m-sheet-input--sm" data-i="${s}" data-f="numero" value="${n.numero}" placeholder="+33 6…">
        </div>
        ${s>0?`<button class="m-sheet-remove" data-i="${s}"><i class="bi bi-trash"></i></button>`:""}
      </div>
    `).join("")+'<button class="m-sheet-add-phone"><i class="bi bi-plus-circle"></i> Ajouter un numéro</button>',e.querySelectorAll("input").forEach(n=>{n.addEventListener("input",()=>{t[+n.dataset.i][n.dataset.f]=n.value})}),e.querySelectorAll(".m-sheet-remove").forEach(n=>{n.addEventListener("click",()=>{t.splice(+n.dataset.i,1),a()})}),(r=e.querySelector(".m-sheet-add-phone"))==null||r.addEventListener("click",()=>{t.push({label:"",numero:""}),a()})};a(),he({title:"Téléphone(s)",body:e,doneLabel:"Enregistrer",onDone:()=>{i(t),Y("Enregistré")}})}function qt(t,i,e){const a=document.createElement("div");a.innerHTML=`
    <div style="padding:4px 0 12px">
      <div class="m-sheet-key-label">${t.name}</div>
      <div class="m-sheet-key-date">créée le ${t.created}</div>
    </div>
    <div class="m-sheet-key-box">
      <code class="m-sheet-key-value">${t.value}</code>
      <button class="m-sheet-key-copy"><i class="bi bi-clipboard"></i> Copier</button>
    </div>
    <button class="m-sheet-key-delete"><i class="bi bi-trash"></i> Supprimer cette clé</button>
  `,a.querySelector(".m-sheet-key-copy").addEventListener("click",()=>{var n;(n=navigator.clipboard)==null||n.writeText(t.value).catch(()=>{}),Y("Clé copiée !")});const r=he({title:"Clé API",body:a,doneLabel:"Fermer",onDone:()=>{}});a.querySelector(".m-sheet-key-delete").addEventListener("click",()=>{const n=i.findIndex(s=>s.id===t.id);n!==-1&&i.splice(n,1),r.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{r.remove(),e()},280),Y("Clé supprimée")})}function jt(){const t="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";return"sk-wnt-"+Array.from({length:32},()=>t[Math.floor(Math.random()*t.length)]).join("")}function Ht(t){const i=document.createElement("div");i.innerHTML='<input class="m-sheet-input" type="text" placeholder="Nom de la clé (ex: Application mobile)">';const e=i.querySelector("input");he({title:"Nouvelle clé API",body:i,doneLabel:"Générer",onDone:()=>{const a=e.value.trim();if(!a){Y("Entrez un nom");return}const r={id:Date.now(),name:a,created:new Date().toLocaleDateString("fr-FR"),value:jt()};t(r),Y("Clé générée")}}),setTimeout(()=>e.focus(),300)}function _t(t,i){oe={profile:JSON.parse(JSON.stringify(Qe[i]||Qe.admin)),langue:"Français",unites:et[0]};const a=localStorage.getItem("mobile_avatarUrl")||null;function r(){const s=oe.profile,o=a?`<img src="${a}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`:`<span>${s.initials}</span>`,d=s.apiKeys.map(l=>`
      <div class="m-list-row" data-key-id="${l.id}">
        <div class="m-list-row-col">
          <span class="m-list-row-label">${l.name}</span>
          <span class="m-list-row-sub">créée le ${l.created}</span>
        </div>
        <span class="m-list-row-value" style="font-family:monospace;font-size:11px">sk-wnt-••••</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join(""),c=s.phones.map((l,h)=>`
      <div class="m-list-row${h===s.phones.length-1&&s.phones.length>1?" m-list-row--last":""}" data-action="phones">
        <span class="m-list-row-label">${l.label||"Numéro "+(h+1)}</span>
        <span class="m-list-row-value">${l.numero}</span>
        <i class="bi bi-chevron-right m-list-chevron"></i>
      </div>
    `).join("");t.innerHTML=`
      <div class="m-compte-avatar-section">
        <div class="m-compte-avatar" id="m-avatar">${o}</div>
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
          <span class="m-list-row-value" id="val-langue">${oe.langue}</span>
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
        ${d}
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
    `,n()}function n(){var o;const s=oe.profile;(o=t.querySelector("#m-avatar-upload"))==null||o.addEventListener("change",d=>{const c=d.target.files[0];if(!c)return;const l=new FileReader;l.onload=h=>{localStorage.setItem("mobile_avatarUrl",h.target.result),t.querySelector("#m-avatar").innerHTML=`<img src="${h.target.result}" alt="avatar" style="width:100%;height:100%;object-fit:cover">`},l.readAsDataURL(c)}),t.querySelectorAll(".m-list-row[data-action]").forEach(d=>{d.addEventListener("click",()=>{switch(d.dataset.action){case"prenom":tt("Prénom",s.prenom,c=>{s.prenom=c,r()});break;case"nom":tt("Nom",s.nom,c=>{s.nom=c,r()});break;case"email":he({title:"Adresse email",body:Object.assign(document.createElement("div"),{innerHTML:`<div class="m-sheet-info"><i class="bi bi-envelope-check" style="font-size:32px;color:#007aff"></i><p>${s.email}</p><p class="m-sheet-info-sub">Pour modifier votre email, un lien de vérification sera envoyé à la nouvelle adresse.</p></div>`}),doneLabel:"Modifier",onDone:()=>Y("Fonctionnalité à venir")});break;case"phones":It(s.phones,c=>{s.phones=c,r()});break;case"mdp":he({title:"Mot de passe",body:Object.assign(document.createElement("div"),{innerHTML:`
                  <input class="m-sheet-input" type="password" placeholder="Mot de passe actuel" id="mdp-old">
                  <input class="m-sheet-input" type="password" placeholder="Nouveau mot de passe" id="mdp-new">
                  <input class="m-sheet-input" type="password" placeholder="Confirmer le nouveau" id="mdp-conf">
                `}),doneLabel:"Modifier",onDone:()=>Y("Fonctionnalité à venir")});break;case"langue":it("Langue",Pt,oe.langue,c=>{oe.langue=c,t.querySelector("#val-langue").textContent=c});break;case"unites":it("Unités",et,oe.unites,c=>{oe.unites=c,t.querySelector("#val-unites").textContent=c.split(" ")[0]});break;case"gen-key":Ht(c=>{s.apiKeys.push(c),r()});break;case"delete":Y("Contactez le support pour supprimer votre compte");break}})}),t.querySelectorAll(".m-list-row[data-key-id]").forEach(d=>{d.addEventListener("click",()=>{const c=s.apiKeys.find(l=>l.id===+d.dataset.keyId);c&&qt(c,s.apiKeys,r)})}),t.querySelectorAll(".m-toggle input[data-notif]").forEach(d=>{d.addEventListener("change",()=>Y("Préférence enregistrée"))})}r()}function R(t){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function Z({title:t,body:i,doneLabel:e="Fermer",onDone:a}={}){var o;const r=document.getElementById("phone-screen");(o=document.querySelector(".m-sheet-overlay"))==null||o.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${e}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,n.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),r.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const s=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",s),n.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),s()}),n.addEventListener("click",d=>{d.target===n&&s()}),n}function Dt(t){const i=[{label:"Seuil dépassé",desc:"Conditions déclenchantes vérifiées",duration:"2h34",resolved:!0},{label:"Seuil dépassé",desc:"Notification SMS envoyée",duration:"45min",resolved:!0},{label:"Seuil dépassé",desc:"Valeur mesurée hors plage",duration:"1h20",resolved:!0},{label:"Fausse alerte",desc:"Pic transitoire — durée < seuil",duration:null,resolved:!0},{label:"Seuil dépassé",desc:"Conditions toujours vérifiées",duration:"3h05",resolved:!0},{label:"Alerte en cours",desc:"Conditions vérifiées depuis ce matin",duration:null,resolved:!1}],e=3+t%5,a=Date.now();return Array.from({length:e},(r,n)=>{const s=t*17+n*7,o=1+n*(2+s%6),d=new Date(a-o*864e5),c=i[s%i.length],l=d.getDate(),h=d.getMonth()+1;return{date:`${String(l).padStart(2,"0")}/${String(h).padStart(2,"0")}`,heure:`${String(6+s%14).padStart(2,"0")}h${String(s%60).padStart(2,"0")}`,label:c.label,desc:c.desc,duration:c.duration,resolved:n>0?!0:c.resolved}})}const Rt=[{id:1,name:"Pluie forte > 10 mm/h",statut:"actif",metric:"pluie",created:"2026-01-15",lastTriggered:"2026-04-10",sensorIds:[1,3],parcelIds:[1,2]},{id:2,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-03",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[3]},{id:3,name:"Teneur en eau critique",statut:"inactif",metric:"teneur-eau",created:"2026-02-20",lastTriggered:null,sensorIds:[5],parcelIds:[4,5]},{id:4,name:"Vent violent > 80 km/h",statut:"actif",metric:"vent",created:"2025-09-01",lastTriggered:"2026-02-28",sensorIds:[1,4],parcelIds:[]},{id:5,name:"Rayonnement faible",statut:"inactif",metric:"rayonnement",created:"2026-03-01",lastTriggered:null,sensorIds:[],parcelIds:[1]},{id:6,name:"DPV élevé > 2 kPa",statut:"actif",metric:"temperature",created:"2026-03-15",lastTriggered:"2026-04-14",sensorIds:[2],parcelIds:[2,3]},{id:7,name:"Potentiel hydrique > 100 kPa",statut:"actif",metric:"potentiel-hydrique",created:"2026-04-01",lastTriggered:"2026-04-12",sensorIds:[6],parcelIds:[6]},{id:8,name:"Température humide < 0°C",statut:"actif",metric:"temp-humide",created:"2026-01-10",lastTriggered:"2026-03-05",sensorIds:[3],parcelIds:[1],phones:["+33 6 12 34 56 78","+33 7 52 18 93 46"]},{id:9,name:"Température sèche > 35°C",statut:"actif",metric:"temp-seche",created:"2026-02-15",lastTriggered:"2026-04-18",sensorIds:[4],parcelIds:[3],phones:["+33 6 12 34 56 78"]}],Bt=[{id:1,name:"Gel précoce < 2°C",statut:"actif",metric:"temperature",created:"2025-11-15",lastTriggered:"2026-03-18",sensorIds:[2],parcelIds:[1]},{id:2,name:"Pluie forte > 15 mm/h",statut:"actif",metric:"pluie",created:"2026-01-20",lastTriggered:"2026-04-10",sensorIds:[1],parcelIds:[2]},{id:3,name:"Teneur en eau basse < 30%",statut:"inactif",metric:"teneur-eau",created:"2026-03-05",lastTriggered:null,sensorIds:[5],parcelIds:[]}],st={pluie:"Pluie",temperature:"Température","teneur-eau":"Teneur en eau sol","potentiel-hydrique":"Potentiel hydrique",vent:"Vent",rayonnement:"Rayonnement",humidite:"Humidité","temp-humide":"Température humide","temp-seche":"Température sèche"},Ft={pluie:"bi-cloud-rain-fill",temperature:"bi-thermometer-half","teneur-eau":"bi-droplet-fill","potentiel-hydrique":"bi-moisture",vent:"bi-wind",rayonnement:"bi-sun-fill",humidite:"bi-water","temp-humide":"bi-thermometer-low","temp-seche":"bi-thermometer-high"};function qe(t){if(!t)return"—";const[i,e,a]=t.split("-");return`${a}/${e}/${i}`}function at(t){const i=t.sensorIds.map(a=>{const r=z.find(n=>n.id===a);return r?`${r.model} ${r.serial}`:null}).filter(Boolean),e=t.parcelIds.map(a=>{const r=B.find(n=>n.id===a);return(r==null?void 0:r.name)||null}).filter(Boolean);return[...i,...e]}function Ot(t,i){var s;let e=t.querySelector("#alertes-content");e||(e=document.createElement("div"),e.id="alertes-content",t.appendChild(e));const a=[...i==="adherent"?Bt:Rt];function r(){if(!a.length){e.innerHTML='<div class="m-empty-state"><i class="bi bi-bell-slash"></i><p>Aucune alerte</p></div>';return}e.innerHTML=a.map(o=>{at(o);const d=Ft[o.metric]||"bi-bell",c=o.statut==="actif";return`
        <div class="m-alert-card" data-id="${o.id}">
          <div class="m-alert-card-hd">
            <div class="m-alert-icon-wrap${c?"":" m-alert-icon-wrap--off"}">
              <i class="bi ${d}"></i>
            </div>
            <span class="m-alert-name">${o.name}</span>
            <label class="m-toggle m-alert-toggle">
              <input type="checkbox" ${c?"checked":""} data-id="${o.id}">
              <span class="m-toggle-track"></span>
            </label>
          </div>
          <div class="m-alert-body">
            <div class="m-alert-row">
              <span class="m-alert-row-label">Métrique</span>
              <span class="m-alert-row-val">${st[o.metric]||o.metric}</span>
            </div>
            <div class="m-alert-row">
              <span class="m-alert-row-label">Dernier déclenchement</span>
              <span class="m-alert-row-val">${qe(o.lastTriggered)}</span>
            </div>
            <div class="m-alert-row m-alert-row--last">
              <button class="m-alert-more-btn" data-id="${o.id}">Plus d'infos…</button>
            </div>
          </div>
        </div>`}).join(""),n()}function n(){e.querySelectorAll(".m-alert-toggle input").forEach(o=>{o.addEventListener("change",d=>{d.stopPropagation();const c=+o.dataset.id,l=a.find(h=>h.id===c);l&&(l.statut=o.checked?"actif":"inactif",r(),R(`Alerte ${o.checked?"activée":"désactivée"}`))})}),e.querySelectorAll(".m-alert-more-btn").forEach(o=>{o.addEventListener("click",d=>{d.stopPropagation();const c=+o.dataset.id,l=a.find(C=>C.id===c);if(!l)return;at(l);const h=document.createElement("div"),y=Dt(c);function m(){const C=l.sensorIds.map((I,S)=>{const T=z.find(f=>f.id===I);return T?{label:`${T.model} ${T.serial}`,type:"sensor",idx:S}:null}).filter(Boolean),E=l.parcelIds.map((I,S)=>{const T=B.find(f=>f.id===I);return T?{label:T.name,type:"parcel",idx:S}:null}).filter(Boolean),O=[...C,...E];return O.length?O.map(I=>`<div class="m-perimetre-item" data-type="${I.type}" data-idx="${I.idx}">
                <span>${I.label}</span>
                <button class="m-perimetre-del" data-type="${I.type}" data-idx="${I.idx}"><i class="bi bi-x-lg"></i></button>
              </div>`).join(""):'<span style="color:#8e8e93;font-size:13px">—</span>'}const b=document.createElement("div");b.className="m-sheet-info-rows";function x(){var I;h.innerHTML="";const C=document.createElement("div");C.className="m-sheet-info-rows",C.innerHTML=`
            <div class="m-sheet-info-row"><span>Métrique</span><span>${st[l.metric]||l.metric}</span></div>
            <div class="m-sheet-info-row"><span>Dernier déclenchement</span><span>${qe(l.lastTriggered)}</span></div>
            <div class="m-sheet-info-row"><span>Créée le</span><span>${qe(l.created)}</span></div>
            ${(I=l.phones)!=null&&I.length?`<div class="m-sheet-info-row"><span>Téléphone(s)</span><span>${l.phones.join(", ")}</span></div>`:""}
            <div class="m-sheet-info-row"><span>Statut</span><span>${l.statut}</span></div>`;const E=document.createElement("div");E.style.cssText="padding:8px 0;border-bottom:.5px solid rgba(0,0,0,.08)",E.innerHTML=`<div style="font-size:13px;color:#8e8e93;margin-bottom:6px">Périmètre</div><div class="m-perimetre-list">${m()}</div>`,C.appendChild(E),h.appendChild(C);const O=document.createElement("div");O.innerHTML=`<div class="m-history-title">Déclenchements</div>
            ${y.map(S=>`<div class="m-history-row">
              <div class="m-history-dot" style="background:${S.resolved?"#30d158":"#ff9f0a"}"></div>
              <div class="m-history-info">
                <div class="m-history-when">${S.date} à ${S.heure}${S.duration?` · ${S.duration}`:""}</div>
                <div class="m-history-label">${S.label}</div>
                <div class="m-history-desc">${S.desc}</div>
              </div></div>`).join("")}`,h.appendChild(O),h.querySelectorAll(".m-perimetre-del").forEach(S=>{S.addEventListener("click",T=>{T.stopPropagation();const f=S.dataset.type,v=+S.dataset.idx;f==="sensor"?l.sensorIds.splice(v,1):l.parcelIds.splice(v,1),x(),r(),R("Retiré du périmètre")})})}x(),Z({title:l.name,body:h,doneLabel:"Fermer",onDone:()=>{}})})}),e.querySelectorAll(".m-alert-card").forEach(o=>{o.addEventListener("click",d=>{if(d.target.closest(".m-alert-toggle")||d.target.closest(".m-alert-more-btn"))return;const c=+o.dataset.id,l=a.find(m=>m.id===c);if(!l)return;const h=document.createElement("div");h.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="al-edit">Modifier</a>
            <a class="m-sheet-link m-sheet-link--danger" id="al-delete">Supprimer</a>
          </div>`;const y=Z({title:l.name,body:h,doneLabel:"Fermer",onDone:()=>{}});h.querySelector("#al-edit").addEventListener("click",()=>{y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{y.remove(),R("Modification à venir")},280)}),h.querySelector("#al-delete").addEventListener("click",()=>{const m=a.findIndex(b=>b.id===c);m!==-1&&a.splice(m,1),y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{y.remove(),r()},280),R("Alerte supprimée")})})})}(s=t.querySelector(".m-navbar-action"))==null||s.addEventListener("click",()=>{R("Création d'alerte — à venir")}),r()}const zt="modulepreload",Nt=function(t){return"/weenat-proto/"+t},nt={},ae=function(i,e,a){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(e.map(d=>{if(d=Nt(d),d in nt)return;nt[d]=!0;const c=d.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":zt,c||(h.as="script"),h.crossOrigin="",h.href=d,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((y,m)=>{h.addEventListener("load",y),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return r.then(s=>{for(const o of s||[])o.status==="rejected"&&n(o.reason);return i().catch(n)})},Vt={admin:100,adherent:1},yt="weenat-m-dash";function ze(){try{return JSON.parse(localStorage.getItem(yt))||{}}catch{return{}}}function Wt(t){try{localStorage.setItem(yt,JSON.stringify({...ze(),...t}))}catch{}}const V=[{id:"bilan_hydrique",title:"Irrigation",icon:"bi-droplet-fill",color:"#0172A4",active:!0,available:!0,fixed:!1},{id:"previsions",title:"Prévisions",icon:"bi-cloud-sun-fill",color:"#f5a623",active:!0,available:!0,fixed:!1},{id:"cumuls",title:"Cumuls",icon:"bi-bar-chart-fill",color:"#bf5af2",active:!0,available:!0,fixed:!1},{id:"temps_reel",title:"Mesures",icon:"bi-activity",color:"#ff9f0a",active:!0,available:!0,fixed:!1},{id:"traitements",title:"Traitements",icon:"bi-shield-fill",color:"#4ecdc4",active:!0,available:!0,fixed:!1},{id:"cultures",title:"Cultures",icon:"bi-flower1",color:"#a2c4c9",active:!0,available:!0,fixed:!1},{id:"evenements",title:"Anomalies capteurs",icon:"bi-exclamation-triangle-fill",color:"#ff3b30",active:!0,available:!0,fixed:!1},{id:"mon_reseau",title:"Infos Réseau",icon:"bi-diagram-3-fill",color:"#5b8dd9",active:!0,available:!0,fixed:!0},{id:"support",title:"Support",icon:"bi-question-circle-fill",color:"#30d158",active:!0,available:!0,fixed:!0}];function re(t){var a;const i=document.getElementById("phone-screen");(a=document.querySelector(".m-toast"))==null||a.remove();const e=document.createElement("div");e.className="m-toast",e.textContent=t,i.appendChild(e),requestAnimationFrame(()=>e.classList.add("m-toast--show")),setTimeout(()=>{e.classList.remove("m-toast--show"),setTimeout(()=>e.remove(),300)},2200)}function je({title:t,body:i,doneLabel:e="Fermer",onDone:a}={}){var o;const r=document.getElementById("phone-screen");(o=document.querySelector(".m-sheet-overlay"))==null||o.remove();const n=document.createElement("div");n.className="m-sheet-overlay",n.innerHTML=`
    <div class="m-sheet">
      <div class="m-sheet-handle"></div>
      <div class="m-sheet-hd">
        <button class="m-sheet-cancel">Annuler</button>
        <span class="m-sheet-title">${t}</span>
        <button class="m-sheet-done">${e}</button>
      </div>
      <div class="m-sheet-body"></div>
    </div>`,n.querySelector(".m-sheet-body").appendChild(typeof i=="string"?Object.assign(document.createElement("div"),{innerHTML:i}):i),r.appendChild(n),requestAnimationFrame(()=>n.classList.add("m-sheet-overlay--show"));const s=()=>{n.classList.remove("m-sheet-overlay--show"),setTimeout(()=>n.remove(),280)};return n.querySelector(".m-sheet-cancel").addEventListener("click",s),n.querySelector(".m-sheet-done").addEventListener("click",()=>{a==null||a(),s()}),n.addEventListener("click",d=>{d.target===n&&s()}),n}const lt=[{icon:"bi-sun-fill",label:"Ensoleillé",color:"#f5c842"},{icon:"bi-cloud-sun-fill",label:"Nuageux",color:"#8e8e93"},{icon:"bi-cloud-fill",label:"Couvert",color:"#636366"},{icon:"bi-cloud-drizzle-fill",label:"Averses",color:"#5b8dd9"},{icon:"bi-cloud-rain-fill",label:"Pluie",color:"#45b7d1"}];function ot(){return Array.from({length:14},(t,i)=>i).map(t=>{const i=new Date;i.setDate(i.getDate()+t);const e=lt[Math.floor(Math.random()*lt.length)],a=e.label==="Pluie"||e.label==="Averses",r=Math.round(8+Math.random()*8),n=Math.round(16+Math.random()*14),s=Array.from({length:24},(o,d)=>{const c=Math.sin(Math.PI*(d-6)/12),l=Math.round(r+(n-r)*Math.max(0,c)),h=a&&d>=8&&d<=16&&Math.random()>.6?+(Math.random()*3).toFixed(1):0;return{h:d,label:`${String(d).padStart(2,"0")}h`,temp:l,pluie:h,hum:Math.round(85-40*Math.max(0,c)),vent:Math.round(10+Math.random()*20),icon:h>0?"bi-cloud-rain-fill":d<7||d>20?"bi-moon-fill":e.icon}});return{dayLabel:t===0?"Aujourd'hui":t===1?"Demain":i.toLocaleDateString("fr-FR",{weekday:"long"}),dateStr:i.toLocaleDateString("fr-FR",{day:"numeric",month:"short"}),...e,pluie:a?Math.round(2+Math.random()*18):0,etp:+(1+Math.random()*5).toFixed(1),tMin:r,tMinHeure:`0${Math.floor(4+Math.random()*4)}h`.slice(-3),tMax:n,tMaxHeure:`${13+Math.floor(Math.random()*4)}h`,humMoy:Math.round(45+Math.random()*45),ventMoy:Math.round(10+Math.random()*25),ventRafales:Math.round(20+Math.random()*35),hours:s}})}function He(t){const i=t.id,e=t.reserveHydrique||50,a=+((i*2.3+7)%32).toFixed(1),r=+((i*1.1+14)%14+10).toFixed(1),n=+((i*.6+1)%6).toFixed(1),s=Math.round(e*((i%5+1)/10)),o=Math.max(0,+(s+a-r-n).toFixed(0)),d=o<s?s-o:0;return{j0:s,j7:o,bilan:d}}const Ne=4,rt=["#0172A4","#ff8500","#30d158","#bf5af2"],Be={pluie:"Pluie",temperature:"Température",humidite:"Humidité",etp:"Évapotranspiration",rayonnement:"Rayonnement solaire",temp_rosee:"Temp. rosée",vent:"Vent",par:"Ray. PAR",humectation:"Humectation foliaire",pothydr:"Potentiel hydrique",teneur:"Teneur en eau",temp_sol:"Temp. sol"},Gt={pluie:"mm",temperature:"°C",humidite:"%",etp:"mm",rayonnement:"W/m²",temp_rosee:"°C",vent:"km/h",par:"µmol/m²/s",humectation:"%",pothydr:"kPa",teneur:"%vol",temp_sol:"°C"},ct={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]},Jt=[{id:"365d",label:"365 derniers jours"},{id:"30d",label:"30 derniers jours"},{id:"7d",label:"7 derniers jours"},{id:"hier",label:"Hier"},{id:"1d",label:"Aujourd'hui"}];function wt(t){return t==="1d"||t==="hier"?[{id:"raw",label:"Mesures brutes"},{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:t==="7d"?[{id:"1h",label:"Heure"},{id:"1d",label:"Jour"}]:[{id:"1d",label:"Jour"},{id:"1w",label:"Semaine"},{id:"1mo",label:"Mois"}]}function Ut(t,i){const e=["etp","rayonnement","temp_rosee"];if(!t)return[];if(t.startsWith("p-")){const r=new Set(e);return i.filter(n=>n.parcelId===+t.slice(2)).forEach(n=>(ct[n.model]||[]).forEach(s=>r.add(s))),[...r].filter(n=>n in Be)}const a=i.find(r=>r.id===+t.slice(2));return a?ct[a.model]||[]:[]}function Zt(t,i){return t==="1d"||t==="hier"?["0h","6h","12h","18h","24h"]:i==="1h"?["J-7","J-5","J-3","J-1","Auj."]:i==="1d"?t==="365d"?["Jan","Avr","Jul","Oct","Déc"]:t==="30d"?["J-30","J-22","J-14","J-7","Auj."]:["J-7","J-5","J-3","J-1","Auj."]:i==="1w"?t==="365d"?["S-52","S-38","S-26","S-13","Auj."]:["S-4","S-3","S-2","S-1","Auj."]:i==="1mo"?t==="365d"?["Jan","Avr","Jul","Oct","Déc"]:["M-4","M-3","M-2","M-1","Auj."]:[]}let ne=[],me=[];(()=>{const t=ze();if(t.catalog){const i=t.catalog.map(e=>e.id);V.sort((e,a)=>{const r=i.indexOf(e.id),n=i.indexOf(a.id);return(r<0?999:r)-(n<0?999:n)}),t.catalog.forEach(e=>{const a=V.find(r=>r.id===e.id);a&&(a.active=e.active)})}t.mesuresList&&(ne=t.mesuresList),t.cumulsList&&(me=t.cumulsList)})();function Yt(t,i,e){const a=[...t+i].reduce((s,o)=>s+o.charCodeAt(0),1),r=s=>(Math.sin(a*.07+s*.5)+Math.sin(a*.03+s*1.3))/2+.5,n={pluie:{base:0,amp:18,sparse:!0},temperature:{base:10,amp:14},humidite:{base:50,amp:38},etp:{base:1,amp:4},rayonnement:{base:100,amp:550},temp_rosee:{base:4,amp:9},vent:{base:4,amp:22},par:{base:100,amp:1400},humectation:{base:0,amp:100,sparse:!0},pothydr:{base:20,amp:130},teneur:{base:18,amp:18},temp_sol:{base:7,amp:9}}[i]||{base:40,amp:40};return Array.from({length:e},(s,o)=>n.sparse&&r(o*3.7)>.28?0:Math.max(0,n.base+n.amp*r(o*.28+1.2)))}function Xt(t,i){const e={"1d":24,hier:24,"7d":42,"30d":60,"365d":90}[t.period]||42,a=Yt(t.subjectKey,t.metricId,e),r=270,n=60,s=26,o=12,d=Math.max(...a,1),c=a.map((b,x)=>`${s+Math.round(x/(e-1)*r)},${n-o-Math.round(b/d*(n-o-4))}`).join(" ");let l="";for(let b=0;b<=2;b++){const x=Math.round(b/2*(n-o-4)+4);l+=`<line x1="${s}" y1="${x}" x2="${s+r}" y2="${x}" stroke="#E8E6E0" stroke-width=".5"/>`,l+=`<text x="${s-3}" y="${x+3}" text-anchor="end" font-size="7" fill="#B0AEA8">${+(d*(1-b/2)).toFixed(d<5?1:0)}</text>`}const h=Zt(t.period,t.step),y=h.map((b,x)=>`<text x="${s+Math.round(x/(h.length-1)*r)}" y="${n+2}" text-anchor="middle" font-size="7" fill="#B0AEA8">${b}</text>`).join(""),m=JSON.stringify(a.map(b=>+b.toFixed(2)));return`
    <div class="m-wf-card">
      <div class="m-wf-card-hd">
        <div>
          <div class="m-wf-card-title" style="color:${t.color}">${t.metricLabel} <span style="font-weight:400;color:#636366">· ${t.subjectLabel}</span></div>
          <div class="m-wf-card-sub">${t.periodLabel} · ${t.stepLabel}</div>
        </div>
        <button class="m-wf-del" data-widget="temps_reel" data-idx="${i}" type="button">×</button>
      </div>
      <div class="m-tr-chart-wrap" data-unit="${t.unit}" data-series='${m}' style="position:relative;margin-top:4px">
        <svg viewBox="0 0 ${s+r} ${n+6}" style="width:100%;display:block;overflow:visible">
          ${l}
          <polyline points="${c}" fill="none" stroke="${t.color}" stroke-width="1.5" stroke-linejoin="round"/>
          <line class="m-tr-cursor" x1="0" y1="0" x2="0" y2="${n}" stroke="#333" stroke-width=".7" stroke-dasharray="3,2" opacity="0"/>
          ${y}
        </svg>
        <div class="m-tr-tooltip" style="display:none;position:absolute;top:2px;pointer-events:none;background:rgba(28,28,30,.85);color:#fff;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;white-space:nowrap">—</div>
      </div>
    </div>`}function dt(t,i){const e=ne.length>=Ne,a=t.map(o=>`<option value="p-${o.id}">${o.name}</option>`).join(""),r=i.filter(o=>o.parcelId).map(o=>{const d=t.find(c=>c.id===o.parcelId);return`<option value="s-${o.id}">${o.model} — ${o.serial}${d?` · ${d.name}`:""}</option>`}).join(""),n=wt("7d"),s=ne.length?ne.map(Xt).join(""):'<div class="m-wf-empty">Aucune mesure enregistrée</div>';return`
    <div class="m-list-section-header">Nouvelle mesure</div>
    <div class="m-wf-form${e?" m-wf-disabled":""}">
      <select class="m-wf-sel" id="msr-subject" ${e?"disabled":""}>
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${a}</optgroup>
        ${r?`<optgroup label="Capteurs">${r}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="msr-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div class="m-wf-row">
        <select class="m-wf-sel" id="msr-period" ${e?"disabled":""}>
          ${Jt.map(o=>`<option value="${o.id}"${o.id==="7d"?" selected":""}>${o.label}</option>`).join("")}
        </select>
        <select class="m-wf-sel" id="msr-step" ${e?"disabled":""}>
          ${n.map(o=>`<option value="${o.id}">${o.label}</option>`).join("")}
        </select>
      </div>
      <button class="m-wf-create-btn" id="msr-create" disabled>Créer la mesure</button>
      ${e?'<div class="m-wf-max-msg">Quantité maximale atteinte. Supprimez une mesure pour en ajouter une nouvelle.</div>':""}
    </div>
    <div class="m-list-section-header" style="margin-top:16px">Mesures enregistrées</div>
    <div id="msr-list">${s}</div>`}const _e=8;function Kt(t){const i=t.id;return!t.irrigation||t.irrigation==="Pas d'irrigation"?0:i%3===0?Math.round((i*1.7+8)%30+5):0}function mt(t,i=!1){if(!t.length)return'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucune parcelle</p></div>';const e=[...t].sort((s,o)=>He(o).bilan-He(s).bilan),r=(i?e:e.slice(0,_e)).map(s=>{const{j0:o,j7:d,bilan:c}=He(s),l=Kt(s);return`
      <button class="m-bh-th-n m-bh-plot-link" data-plot-id="${s.id}">${s.name}</button>
      <div class="m-bh-td">${o}</div>
      <div class="m-bh-td">${d}</div>
      <div class="m-bh-td m-bh-td--reco">${c>0?c:"—"}</div>
      <div class="m-bh-td m-bh-td--planif">${l>0?l:"—"}</div>`}).join(""),n=!i&&e.length>_e?`<button class="m-bh-expand" id="bh-expand">Afficher les ${t.length-_e} autres parcelles <i class="bi bi-chevron-down"></i></button>`:"";return`
    <div class="m-bh-table">
      <div class="m-bh-gh"></div>
      <div class="m-bh-gh" style="grid-column:span 2">Niveau RFU</div>
      <div class="m-bh-gh" style="grid-column:span 2">Irrigations J+7</div>
      <div class="m-bh-th m-bh-unit-lbl">mm</div>
      <div class="m-bh-th">J0</div>
      <div class="m-bh-th">J+7</div>
      <div class="m-bh-th">Reco.</div>
      <div class="m-bh-th">Planif.</div>
      ${r}
    </div>
    ${n}
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
    </div>`}function Qt(t,i,e){const a=Object.fromEntries(J.map(l=>[l.id,l])),r=t.map(l=>{var m;const h=l.ville||((m=a[l.orgId])==null?void 0:m.ville)||null,y=[l.name,l.crop||null,h].filter(Boolean).join(" · ");return`<option value="p-${l.id}">${y}</option>`}).join(""),n=i.map(l=>`<option value="s-${l.id}">${l.model} — ${l.serial}</option>`).join(""),s=`
    <optgroup label="Parcelles">${r}</optgroup>
    ${n?`<optgroup label="Capteurs">${n}</optgroup>`:""}`,o=(l,h)=>{const y=`${l.dayLabel.charAt(0).toUpperCase()+l.dayLabel.slice(1)} · ${l.dateStr}`;return`
    <div class="m-prev-card" data-day="${h}" role="button">
      <div class="m-prev-card-hd">
        <i class="bi ${l.icon}" style="color:${l.color};font-size:28px;flex-shrink:0"></i>
        <div class="m-prev-card-hd-info">
          <span class="m-prev-card-day">${y}</span>
          <span class="m-prev-card-cond">${l.label}</span>
        </div>
        <i class="bi bi-chevron-right" style="color:#c7c7cc;font-size:13px;flex-shrink:0"></i>
      </div>
      <div class="m-prev-card-body">
        <div class="m-prev-row"><span>Pluie</span><strong>${l.pluie} mm</strong></div>
        <div class="m-prev-row"><span>Température</span><strong>${l.tMin}°C <em>${l.tMinHeure}</em> — ${l.tMax}°C <em>${l.tMaxHeure}</em></strong></div>
        <div class="m-prev-row"><span>Humidité</span><strong>${l.humMoy}%</strong></div>
        <div class="m-prev-row"><span>Vent</span><strong>${l.ventMoy}/${l.ventRafales} km/h</strong></div>
        <div class="m-prev-row m-prev-row--last"><span>Évapotranspiration</span><strong>${l.etp} mm</strong></div>
      </div>
    </div>`},d=e.slice(0,3).map(o).join(""),c=e.slice(3).map(o).join("");return`
    <div class="m-w-section-hd" style="margin-top:0">Lieu des prévisions</div>
    <select class="m-prev-select">${s}</select>
    <div class="m-prev-cards">
      ${d}
      <div class="m-prev-extra" style="display:none">${c}</div>
      <button class="m-prev-expand-btn">Voir les ${e.length-3} jours suivants <i class="bi bi-chevron-down"></i></button>
    </div>`}const de=[{id:"pluie",label:"Cumul de pluie",unit:"mm",base:45,amp:80,needsModels:["P+","PT","P","SMV"]},{id:"dj",label:"Degrés-jours",unit:"DJ",base:120,amp:300,needsModels:["P+","PT","SMV","TH"]},{id:"hf",label:"Heures de froid",unit:"h",base:30,amp:120,needsModels:["P+","PT","SMV","TH"]},{id:"etp",label:"Évapotranspiration",unit:"mm",base:20,amp:60,needsModels:["P+","PT","SMV"]},{id:"rayo",label:"Rayonnement solaire",unit:"MJ",base:8,amp:20,needsModels:["PYRANO"]},{id:"humec",label:"Humectation foliaire",unit:"h",base:10,amp:40,needsModels:["LWS"]}],ei=new Set(de.flatMap(t=>t.needsModels||[]));function ti(t){if(!t)return de;if(t.startsWith("s-")){const e=z.find(a=>a.id===+t.slice(2));return e?de.filter(a=>a.needsModels===null||a.needsModels.includes(e.model)):de}const i=new Set(z.filter(e=>e.parcelId===+t.slice(2)).map(e=>e.model));return de.filter(e=>e.needsModels===null||e.needsModels.some(a=>i.has(a)))}const ii={pluie:{icon:"bi-droplet-fill",color:"#45b7d1"},dj:{icon:"bi-thermometer-sun",color:"#ff9f0a"},hf:{icon:"bi-thermometer-low",color:"#5ac8fa"},etp:{icon:"bi-moisture",color:"#30d158"},rayo:{icon:"bi-sun-fill",color:"#f5c842"},humec:{icon:"bi-droplet-half",color:"#bf5af2"}};function si(){return me.length?me.map((t,i)=>{const e=new Date(t.fromDate).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"});return`<div class="m-cumuls-saved-card" style="position:relative">
      <button class="m-cumuls-del" data-cidx="${i}" type="button" title="Supprimer">×</button>
      <div class="m-cumuls-saved-row1">
        <span class="m-cumuls-saved-metric"><i class="bi ${t.icon}" style="color:${t.color}"></i> ${t.metricLabel}</span>
        <span class="m-cumuls-saved-val">${t.value} <span class="m-cumuls-saved-unit">${t.unit}</span></span>
      </div>
      <div class="m-cumuls-saved-row2">${t.subjectLabel}</div>
      <div class="m-cumuls-saved-row3">depuis le ${e}${t.thresholds?t.metricId==="hf"?` · seuil < ${t.thresholds.cold}°C`:t.metricId==="dj"?` · ${t.thresholds.low}–${t.thresholds.high}°C`:"":""}</div>
    </div>`}).join(""):'<div style="text-align:center;padding:16px;font-size:13px;color:#8e8e93">Aucun cumul enregistré</div>'}function ai(t,i,e){if(!t||!i)return null;const a=de.find(s=>s.id===e)||de[0],r=Math.max(1,Math.round((Date.now()-new Date(i))/864e5)),n=t.split("").reduce((s,o)=>s+o.charCodeAt(0),0)+r;return+(a.base+n%(a.amp*10)/10).toFixed(1)}function ut(t,i){const e=me.length>=Ne,a=`${new Date().getFullYear()}-01-01`,r=i.filter(l=>l.parcelId&&ei.has(l.model)),n=new Set(r.map(l=>l.parcelId)),o=t.filter(l=>n.has(l.id)).map(l=>`<option value="p-${l.id}">${l.name}</option>`).join(""),d=r.map(l=>{const h=t.find(y=>y.id===l.parcelId);return`<option value="s-${l.id}">${l.model} — ${l.serial}${h?` · ${h.name}`:""}</option>`}).join(""),c=me.length?si():'<div class="m-wf-empty">Aucun cumul enregistré</div>';return`
    <div class="m-list-section-header">Nouveau cumul</div>
    <div class="m-wf-form${e?" m-wf-disabled":""}">
      <select class="m-wf-sel" id="cumuls-subject" ${e?"disabled":""}>
        <option value="">— Parcelle ou capteur —</option>
        <optgroup label="Parcelles">${o}</optgroup>
        ${d?`<optgroup label="Capteurs">${d}</optgroup>`:""}
      </select>
      <select class="m-wf-sel" id="cumuls-metric" disabled>
        <option value="">— Métrique —</option>
      </select>
      <div id="cumuls-thresholds"></div>
      <div class="m-wf-row">
        <div class="m-wf-field">
          <span class="m-wf-label">Depuis le</span>
          <input type="date" class="m-wf-date" id="cumuls-from" value="${a}" ${e?"disabled":""}>
        </div>
      </div>
      <div id="cumuls-date-err" class="m-wf-err" style="display:none">Période supérieure à 365 jours. Choisissez une date plus récente.</div>
      <button class="m-wf-create-btn" id="cumuls-create" disabled>Créer le cumul</button>
      ${e?'<div class="m-wf-max-msg">Quantité maximale atteinte. Supprimez un cumul pour en ajouter un nouveau.</div>':""}
    </div>
    <div class="m-list-section-header" style="margin-top:16px">Cumuls enregistrés</div>
    <div id="cumuls-saved-list">${c}</div>`}const ni={"Blé tendre":["Prosaro","Aviator Xpro","Input Xpro"],Maïs:["Mercantor Gold","Callisto","Milagro"],Orge:["Comet Pro","Siltra Xpro","Variano Xpro"],Colza:["Karate Zeon","Plenum","Caryx"],"Prairie permanente":["Duplosan KV","Starane Premium","—"],Tournesol:["Adengo","Merlin Flexx","Pulsar Plus"],Betterave:["Betanal Expert","Debut","Safari"]};function li(t){const i=t.id,e=new Date,a=ni[t.crop]||["—"],r=a[i%a.length];let n,s;i%5===3?(n=0,s=(e.getHours()+2+i%3*3)%24):(n=(i*2+1)%6+1,s=6+i%5*2);const o=2+i%3,d=new Date(e);d.setDate(d.getDate()+n);const c=n===0?"Aujourd'hui":d.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}),l=n*1440+s*60-(e.getHours()*60+e.getMinutes()),h=l>=0&&l<=600;return{product:r,winDateStr:c,winHour:s,winDur:o,isUrgent:h,minutesFromNow:l}}function oi(t){const e=t.filter(n=>n.crop).map(n=>({p:n,d:li(n)})).filter(({d:n})=>n.minutesFromNow>=0&&n.minutesFromNow<=2880).sort((n,s)=>n.d.minutesFromNow-s.d.minutesFromNow);return e.length?`<div class="m-w-list">${e.slice(0,10).map(({p:n,d:s})=>{const o=s.isUrgent?"#ff9f0a":"#1c1c1e",d=s.isUrgent?'<i class="bi bi-alarm-fill" style="color:#ff9f0a"></i> ':"",c=String(s.winHour).padStart(2,"0");return`<div class="m-w-row">
      <div class="m-w-row-main">
        <div class="m-w-row-name">${n.name}</div>
        <div class="m-w-row-sub">${n.crop}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:12px;font-weight:600;color:${o}">${d}${s.winDateStr} · ${c}:00</div>
        <div style="font-size:11px;color:#8e8e93">fenêtre de ${s.winDur} heures</div>
      </div>
    </div>`}).join("")}</div>
    <div class="m-w-see-more" data-action="weephyt">
      <i class="bi bi-box-arrow-up-right"></i> Voir les fenêtres des autres parcelles
    </div>`:'<div class="m-widget-empty">Aucune fenêtre favorable dans les prochaines 48h</div>'}const ri={"capteur couché":{icon:"bi-arrow-down-circle-fill",color:"#ff9f0a"},"émissions interrompues":{icon:"bi-wifi-off",color:"#ff3b30"},"capteur déplacé":{icon:"bi-geo-alt-fill",color:"#ff9f0a"},"cuillère bloquée":{icon:"bi-x-octagon-fill",color:"#ff3b30"}};function ci(t,i){const e=i.filter(a=>a.event&&(Array.isArray(a.event)?a.event.length>0:!0));return e.length?`<div class="m-w-list">${e.map(a=>{const r=t.find(o=>o.id===a.parcelId),s=(Array.isArray(a.event)?a.event:[a.event]).map(o=>{const d=ri[o]||{icon:"bi-exclamation-circle-fill",color:"#ff9f0a"};return`<span class="m-ev-badge" style="color:${d.color}"><i class="bi ${d.icon}"></i> ${o}</span>`}).join("");return`<div class="m-w-row m-w-row--clickable" data-sensor-id="${a.id}" style="flex-direction:column;align-items:flex-start;gap:4px">
      <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
        <div class="m-w-row-name">${a.model} — ${a.serial}</div>
        <div style="display:flex;align-items:center;gap:5px">
          <span style="font-size:11px;color:#8e8e93">${(r==null?void 0:r.ville)||(r==null?void 0:r.name)||"—"}</span>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:4px">${s}</div>
    </div>`}).join("")}</div>`:'<div class="m-widget-empty"><i class="bi bi-check-circle" style="color:#30d158;font-size:28px"></i><p>Aucun événement en cours</p></div>'}const $t={"Blé tendre":{varieties:["Bermude","Chevignon","Oregrain"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 32)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Maïs:{varieties:["DKC4795","Farrandole","Ambition"],stages:["Levée (BBCH 09)","6 feuilles (BBCH 16)","10 feuilles (BBCH 18)","Floraison mâle (BBCH 65)"],nextStages:["6 feuilles","10 feuilles","Floraison mâle","Nouaison"]},Orge:{varieties:["Irina","KWS Cassia","Etincel"],stages:["Tallage (BBCH 25)","SLAG (BBCH 29-30)","Montaison (BBCH 33)","Gonflement (BBCH 45)"],nextStages:["SLAG","Montaison","Gonflement","Épiaison"]},Colza:{varieties:["Avatar","DK Expower","Atlavista"],stages:["Boutons floraux (BBCH 51)","Début floraison (BBCH 60)","Pleine floraison (BBCH 65)","Nouaison (BBCH 70)"],nextStages:["Début floraison","Pleine floraison","Nouaison","Siliques vertes"]},Tournesol:{varieties:["Heliasol","LG 5474","Heliosol"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Bouton floral (BBCH 51)","Floraison (BBCH 65)"],nextStages:["4 feuilles","Bouton floral","Floraison","Maturité"]},"Betterave sucrière":{varieties:["Alegria","Belinda","Cosima"],stages:["Levée (BBCH 09)","4 feuilles (BBCH 14)","Fermeture rang (BBCH 29)","Grossissement (BBCH 40)"],nextStages:["4 feuilles","Fermeture rang","Grossissement","Maturité"]},"Pomme de terre":{varieties:["Bintje","Charlotte","Agria"],stages:["Levée (BBCH 09)","Développement tiges (BBCH 30)","Floraison (BBCH 60)","Sénescence (BBCH 90)"],nextStages:["Développement tiges","Floraison","Sénescence","Récolte"]}},di={varieties:["—"],stages:["Végétation active"],nextStages:["Prochain stade"]};function mi(t){const i=t.id,e=$t[t.crop]||di,a=i%e.stages.length,r=(i*2+5)%18+4,n=new Date("2026-04-18");n.setDate(n.getDate()+r);const s=n.toLocaleDateString("fr-FR",{day:"numeric",month:"short"});return{stage:e.stages[a],nextStage:e.nextStages[a],variety:e.varieties[i%e.varieties.length],nextDateStr:s,daysToNext:r}}function ui(t){const i=t.filter(r=>r.crop);if(!i.length)return'<div class="m-widget-empty">Aucune parcelle avec culture renseignée</div>';const e={};for(const r of i)e[r.crop]||(e[r.crop]=[]),e[r.crop].push(r);return`<div class="m-widget-hint">Appuyez sur une parcelle pour renseigner ou mettre à jour les stades phénologiques</div>
    ${Object.entries(e).map(([r,n])=>{const s=n.map(o=>{const d=!!$t[o.crop],c=d?mi(o):null,l=d&&c.variety!=="—"?c.variety:"",h=d?c.stage.split(" (BBCH")[0]:"Stade non renseigné";return`<div class="m-w-row m-w-row--clickable" data-plot-id="${o.id}">
        <div class="m-w-row-main">
          <div class="m-w-row-name">${o.name}</div>
          ${l?`<div class="m-w-row-sub">${l}</div>`:""}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <div style="font-size:12px;font-weight:600;color:#1c1c1e;text-align:right">${h}</div>
          <i class="bi bi-chevron-right" style="font-size:12px;color:#C0BEB8"></i>
        </div>
      </div>`}).join("");return`<details class="m-crop-group">
      <summary class="m-crop-summary">
        <div class="m-crop-summary-left">
          <div class="m-crop-summary-name">${r}</div>
          <div class="m-crop-summary-count">${n.length} parcelle${n.length>1?"s":""}</div>
        </div>
        <i class="bi bi-chevron-right m-crop-chevron"></i>
      </summary>
      <div class="m-crop-plots">${s}</div>
    </details>`}).join("")}`}function pi(){const t=B.map(a=>a.orgId).filter((a,r,n)=>n.indexOf(a)===r&&a!==100).length,i=z.length,e=B.length;return`
    <div class="m-reseau-name">${ue.nom}</div>
    <div class="m-reseau-stats">
      <div class="m-reseau-stat"><strong>${t}</strong><span>Adhérents</span></div>
      <div class="m-reseau-stat"><strong>${e}</strong><span>Parcelles</span></div>
      <div class="m-reseau-stat"><strong>${i}</strong><span>Capteurs</span></div>
    </div>
    <div class="m-reseau-contacts">
      <div class="m-reseau-row"><i class="bi bi-envelope"></i><span>${ue.email}</span></div>
      <div class="m-reseau-row"><i class="bi bi-telephone"></i><span>${ue.telephone}</span></div>
      <div class="m-reseau-row"><i class="bi bi-globe"></i><span>${ue.siteWeb}</span></div>
      <div class="m-reseau-row"><i class="bi bi-geo-alt"></i><span>${ue.siege.adresse}, ${ue.siege.codePostal} ${ue.siege.ville}</span></div>
    </div>`}function vi(){return`
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
    </a>`}const pt=["Je comprends votre question. Voici ce que je peux vous dire : consultez la section concernée dans l'application ou contactez notre équipe si le problème persiste.","Bonne question ! Vous pouvez retrouver cette information dans les paramètres de votre compte ou dans la documentation en ligne.","Merci pour votre message. Notre équipe technique peut vous aider si besoin — vous pouvez nous joindre par email ou téléphone pendant les horaires d'ouverture.","Cette fonctionnalité est disponible depuis l'onglet correspondant dans l'application. Souhaitez-vous que je vous explique comment y accéder ?","Je transmets votre demande à notre équipe support. En attendant, le centre d'aide en ligne contient de nombreuses réponses."];function hi(){var c;const t=document.getElementById("phone-screen");(c=document.querySelector(".m-sheet-overlay"))==null||c.remove();const i=document.createElement("div");i.className="m-sheet-overlay m-sheet-overlay--tall",i.innerHTML=`
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
    </div>`,t.appendChild(i),requestAnimationFrame(()=>i.classList.add("m-sheet-overlay--show"));const e=i.querySelector("#chat-messages"),a=i.querySelector("#chat-input"),r=i.querySelector("#chat-send"),n=()=>{i.classList.remove("m-sheet-overlay--show"),setTimeout(()=>i.remove(),280)};i.querySelector("#chat-close").addEventListener("click",n),i.addEventListener("click",l=>{l.target===i&&n()});function s(l,h){const y=document.createElement("div");y.className=`m-chat-msg m-chat-msg--${h}`,y.innerHTML=`<div class="m-chat-bubble">${l}</div>`,e.appendChild(y),e.scrollTop=e.scrollHeight}function o(){const l=document.createElement("div");return l.className="m-chat-msg m-chat-msg--bot m-chat-typing",l.innerHTML='<div class="m-chat-bubble"><span></span><span></span><span></span></div>',e.appendChild(l),e.scrollTop=e.scrollHeight,l}function d(){const l=a.value.trim();if(!l)return;s(l,"user"),a.value="",r.disabled=!0;const h=o();setTimeout(()=>{h.remove();const y=pt[Math.floor(Math.random()*pt.length)];s(y,"bot"),r.disabled=!1,a.focus()},1200+Math.random()*800)}r.addEventListener("click",d),a.addEventListener("keydown",l=>{l.key==="Enter"&&d()}),setTimeout(()=>a.focus(),350)}function fi(t,i){let e=t.querySelector("#dashboard-content");e||(e=document.createElement("div"),e.id="dashboard-content",t.appendChild(e));const a=Vt[i]||1,r=a===100?B:B.filter(f=>f.orgId===a),n=new Set(r.map(f=>f.id)),s=z.filter(f=>n.has(f.parcelId));let o=ot();const d=ze(),c=new Set(["mon_reseau","support"]),l=new Set(d.collapsed??V.map(f=>f.id).filter(f=>!c.has(f)));function h(){Wt({catalog:V.map(f=>({id:f.id,active:f.active})),collapsed:[...l],mesuresList:ne,cumulsList:me})}function y(f,v){const p=f.fixed?"":`<button class="m-widget-menu" data-widget="${f.id}" type="button">•••</button>`,u=l.has(f.id);return`
      <div class="m-widget${u?" m-widget--collapsed":""}" data-widget="${f.id}">
        <div class="m-widget-hd m-widget-hd--toggle" data-collapse="${f.id}">
          <div class="m-widget-icon-wrap" style="background:${f.color}20;color:${f.color}">
            <i class="bi ${f.icon}"></i>
          </div>
          <span class="m-widget-title">${f.title}</span>
          <i class="bi ${u?"bi-chevron-down":"bi-chevron-up"}" style="font-size:14px;color:#636366;flex-shrink:0;margin-left:auto;margin-right:${f.fixed?"0":"8px"}"></i>
          ${p}
        </div>
        <div class="m-widget-bd" style="${u?"display:none":""}">${v}</div>
      </div>`}function m(){o=ot();const f=V.filter(p=>p.active&&!p.fixed),v=V.filter(p=>p.active&&p.fixed);e.innerHTML=`
      <button class="m-add-widget-btn" id="dash-add-widget-btn" style="margin-top:16px;margin-bottom:12px"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${[...f,...v].map(p=>{let u="";return p.id==="bilan_hydrique"?u=mt(r,!1):p.id==="previsions"?u=Qt(r,s,o):p.id==="cumuls"?u=ut(r,s):p.id==="temps_reel"?u=dt(r,s):p.id==="traitements"?u=oi(r):p.id==="evenements"?u=ci(r,s):p.id==="cultures"?u=ui(r):p.id==="mon_reseau"?u=pi():p.id==="support"&&(u=vi()),y(p,u)}).join("")}
      <div style="height:24px"></div>`,O()}const b='<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0184 1.16895C16.0184 1.16895 15.4978 1.17996 14.9386 1.81018H14.9373C14.7194 2.05554 14.6559 2.13527 14.5413 2.28722C14.012 2.99093 14.317 3.60621 14.317 3.60621L14.3134 3.60378C14.4429 3.87654 14.5162 4.18056 14.5162 4.5019C14.5162 4.60029 14.5076 4.69621 14.4939 4.79211L14.4965 4.78822C14.4965 4.78822 14.3072 5.56417 14.9748 6.18941C15.2737 6.4684 16.3909 7.47352 16.8841 7.86959C17.4259 8.30427 18.0574 8.3167 18.0574 8.3167L18.0535 8.31914C18.1083 8.3154 18.1631 8.31062 18.218 8.31062C18.4957 8.31062 18.7611 8.36524 19.0039 8.46363V8.4612C19.0039 8.4612 19.8161 8.76144 20.7864 7.85596C21.5661 7.12734 23.0816 5.51441 23.7118 4.80572C24.4653 3.95754 23.9211 3.45933 23.8551 3.40329C21.5821 1.98715 18.8981 1.16898 16.0223 1.16898L16.0184 1.16895ZM14.0791 1.29592C8.55534 2.01832 3.98808 5.77226 2.10114 10.834C2.06751 10.9909 1.96678 11.6633 2.65554 11.8576L2.65676 11.8564C3.24463 12.0221 4.23593 12.2663 4.87114 12.3622C5.79032 12.5017 6.20881 12.0345 6.20881 12.0345C6.42926 11.8128 6.69827 11.6422 6.99843 11.5351H6.99357C6.99357 11.5351 7.70348 11.3346 8.36487 10.2871C8.73229 9.70542 10.1036 7.40497 10.349 6.96406C10.7824 6.18563 10.644 5.68854 10.5618 5.5067C10.5506 5.48677 10.5419 5.46581 10.5307 5.44589C10.5244 5.43468 10.5195 5.42837 10.5195 5.42837L10.5234 5.4308C10.3826 5.14932 10.3017 4.83311 10.3054 4.50056C10.3141 3.33851 11.2495 2.39292 12.4116 2.39292C12.5124 2.39292 12.6107 2.40306 12.7078 2.41676L12.7042 2.41433C12.7042 2.41433 12.7241 2.41908 12.7553 2.42406C12.7652 2.42531 12.7753 2.42668 12.784 2.42917C12.9708 2.45657 13.4501 2.47652 13.8001 2.07547C13.9022 1.95839 13.9347 1.91238 14.109 1.68819C14.393 1.32326 14.1165 1.29842 14.0791 1.29592ZM25.5018 4.85557C25.2233 4.84281 24.8491 4.93643 24.4443 5.34745V5.34988H24.4431C23.4754 6.33134 21.5248 8.45878 21.1275 8.91463C20.4188 9.7267 20.3218 10.5462 20.3218 10.5462L20.3193 10.5426C20.3031 10.8079 20.2383 11.0595 20.1337 11.2887L20.1374 11.286C20.1374 11.286 19.8846 11.966 20.2495 13.1044C20.4413 13.7048 22.1189 18.423 22.3929 19.1055C22.703 19.8765 23.2213 19.9386 23.2886 19.9436H23.2959C23.5325 19.9672 23.758 20.0258 23.9709 20.1092L23.9673 20.1056C23.9673 20.1056 24.5925 20.4307 25.2763 19.0756C25.8331 17.9708 28.8347 11.5302 29.1274 10.8203C29.5783 9.72548 29.0228 8.84018 29.0228 8.84018C29.0278 8.84641 29.0315 8.85247 29.0364 8.85745C28.2368 7.40769 27.2031 6.10626 25.985 5.00274C25.9632 4.9878 25.7804 4.86858 25.5018 4.85581L25.5018 4.85557ZM13.625 6.3579C13.3945 6.36055 13.2473 6.4372 13.2473 6.4372C12.9907 6.54681 12.7093 6.60779 12.4116 6.6053C12.3743 6.6053 12.3393 6.6017 12.3019 6.59921L12.307 6.60165C12.307 6.60165 11.465 6.50203 11.0029 7.30663C10.7475 7.75127 9.52321 9.92841 9.11344 10.6907C8.6688 11.5177 8.9851 11.8416 9.04363 11.8914H9.0412V11.8926C9.0412 11.8926 9.04481 11.895 9.04606 11.8963C9.04855 11.8988 9.05117 11.8999 9.05117 11.8999C9.16825 11.9971 9.27276 12.108 9.36741 12.2288V12.2252C9.36741 12.2252 9.69132 12.7445 10.6517 12.4743C11.3678 12.2725 14.6934 11.3382 15.1206 11.2137C16.0236 10.9509 16.1158 10.2871 16.1158 10.2871L16.1219 10.2983C16.1393 9.97818 16.2265 9.67691 16.371 9.41037C16.371 9.40788 16.665 8.71164 16.0248 8.13373C15.7421 7.8784 14.854 7.03518 14.5027 6.72257C14.1695 6.42677 13.8556 6.35525 13.625 6.3579ZM30.0906 11.6345C29.992 11.636 29.8478 11.748 29.6478 12.1453L29.6491 12.1441C29.3427 12.7532 26.2776 19.216 25.9887 19.8076C25.2924 21.2374 25.4929 21.6934 25.4929 21.6934L25.4892 21.6897C25.5764 21.9413 25.6261 22.2091 25.6298 22.4893V22.4842C25.6298 22.4842 25.7257 23.2316 26.5041 23.3748C26.8927 23.4458 27.3264 23.5256 27.6788 23.5804C28.6254 23.7298 28.9317 23.351 28.984 23.2751C30.1871 21.1303 30.8734 18.6569 30.8734 16.0226C30.8734 14.5504 30.658 13.1293 30.2594 11.7867C30.242 11.7418 30.1891 11.6329 30.0906 11.6345ZM16.126 11.9819C15.9196 11.9852 15.6821 12.0139 15.4162 12.0843C14.7287 12.2661 11.2887 13.2263 10.8565 13.3533C9.8327 13.6535 9.6869 14.2291 9.6869 14.2291V14.2239C9.45524 14.8691 8.91974 15.3699 8.25209 15.5504H8.25573C8.25573 15.5504 7.40138 15.7174 7.298 16.7799C7.26188 17.1435 6.99648 19.5312 6.96036 19.8625C6.84577 20.885 7.257 21.1005 7.36661 21.1404H7.37026C7.38396 21.1453 7.39264 21.1464 7.39264 21.1464H7.3902C7.91954 21.3245 8.35549 21.7058 8.60335 22.199V22.1951C8.60335 22.1951 8.82992 22.8517 10.1028 22.8517C10.7106 22.8517 17.1299 22.7718 18.0616 22.7257C20.3072 22.6149 20.5689 21.6921 20.5689 21.6921V21.697C20.6847 21.3594 20.8665 21.0543 21.0995 20.7952L21.0931 20.7979C21.0931 20.7979 21.103 20.7902 21.1179 20.774C21.1316 20.7591 21.1456 20.743 21.1605 20.728C21.315 20.5474 21.6573 19.9982 21.3422 18.9233C21.1579 18.2968 19.7841 14.3897 19.5039 13.6934V13.6947C19.0318 12.5214 18.2209 12.5214 18.2209 12.5214C17.8024 12.5214 17.4139 12.3969 17.0863 12.1864V12.1889C17.0863 12.1889 16.7453 11.9717 16.126 11.9819ZM2.28722 12.7104C1.69434 12.6971 1.47356 13.1441 1.42802 13.2539C1.25863 14.1506 1.16895 15.0762 1.16895 16.0215C1.16895 18.6906 1.87275 21.1938 3.10583 23.3585C3.16935 23.4357 3.41109 23.6576 3.97281 23.4758H3.97403C4.61671 23.2678 4.65273 22.7708 4.65273 22.7708V22.7757C4.74116 22.2949 4.99017 21.8702 5.3414 21.5613H5.3341C5.3341 21.5613 5.85466 21.1891 6.04273 19.8102C6.07512 19.5723 6.36668 17.1236 6.40155 16.7238C6.51863 15.3749 6.07022 14.8468 6.07022 14.8468C5.87094 14.6027 5.72751 14.3125 5.65278 13.9961V14C5.65278 14 5.65287 13.9937 5.64913 13.9837C5.64415 13.9638 5.63924 13.9438 5.63551 13.9226C5.58942 13.752 5.40617 13.341 4.69749 13.1629C3.82439 12.9437 3.18558 12.8154 2.41087 12.7194C2.36798 12.7142 2.32675 12.7113 2.28722 12.7104ZM19.5275 23.6124C19.4563 23.6114 19.382 23.6122 19.3042 23.6151C18.6889 23.6388 10.8558 23.7197 10.1334 23.7309C9.05728 23.7483 8.58897 24.1818 8.44075 24.3612C8.42332 24.3849 8.40592 24.4086 8.38724 24.4322C8.38724 24.4347 8.38334 24.4371 8.38334 24.4371C8.15791 24.7261 7.86038 24.9566 7.51538 25.0973H7.51781C7.51781 25.0973 6.86764 25.3165 6.85394 26.0514C6.85021 26.2793 6.85031 26.3017 6.87024 26.7289C6.91259 27.6144 7.33718 28.0529 7.51903 28.2011C8.22772 28.6968 8.98125 29.1314 9.77339 29.4989C9.95398 29.5612 10.8932 29.7865 13.1015 28.764H13.1039C14.7629 27.9968 19.4373 25.6802 20.2357 25.2605C21.4065 24.6452 20.9307 24.0661 20.9307 24.0661C20.9307 24.0661 20.5957 23.6282 19.5275 23.6124ZM25.5942 24.0744C25.0894 24.0825 24.9773 24.2603 24.9773 24.2603L24.9797 24.2542C24.8539 24.3962 24.7121 24.5245 24.5589 24.6366L24.5664 24.6339C24.5664 24.6339 24.098 24.8645 24.5003 25.8111C24.7045 26.2931 24.8305 26.557 24.9912 26.8634C25.3212 27.4924 25.7758 27.2134 25.8343 27.1736C26.5642 26.5309 27.2304 25.8172 27.8232 25.0437C27.8731 24.9665 28.1259 24.5155 27.3562 24.3424H27.355V24.3412C27.2503 24.3175 26.6538 24.2104 26.2403 24.1356C25.9744 24.0877 25.7625 24.0717 25.5942 24.0744ZM4.54519 24.0856C4.45749 24.0836 4.35347 24.0977 4.23114 24.1369C3.79397 24.2777 3.85882 24.5181 3.88498 24.5828C4.44172 25.37 5.07187 26.1001 5.76681 26.7639C5.86396 26.8412 6.01099 26.9022 6.02344 26.5783H6.02466C6.03338 26.3566 6.0383 26.2419 6.02709 25.8571C6.00592 25.121 5.55638 24.893 5.55638 24.893C5.32222 24.7373 5.12045 24.537 4.96477 24.3041C4.96477 24.3041 4.85841 24.0925 4.54519 24.0856ZM22.8317 25.1248C22.7071 25.1198 22.2826 25.1647 21.1306 25.7376C19.9436 26.328 14.8394 28.9347 13.716 29.5338C12.2799 30.2985 12.9937 30.5564 13.0672 30.5788C14.0237 30.7719 15.0127 30.8741 16.0252 30.8741C19.0655 30.8741 21.8928 29.9597 24.2468 28.3916C24.3078 28.3418 24.7201 27.9708 24.4013 27.2222H24.4001C24.1099 26.5397 24.0612 26.4399 23.8843 26.0949C23.3762 25.111 22.8755 25.1297 22.8755 25.1297C22.8755 25.1297 22.8656 25.1261 22.8432 25.1248L22.8317 25.1248Z" fill="url(#wl)"/><path d="M12.4103 3.0918C12.2253 3.09178 12.0421 3.12821 11.8712 3.199C11.7002 3.26979 11.5449 3.37356 11.4141 3.50439C11.2833 3.63521 11.1795 3.79052 11.1087 3.96145C11.0379 4.13238 11.0015 4.31558 11.0015 4.50059C11.0015 4.68557 11.038 4.86875 11.1088 5.03965C11.1796 5.21055 11.2834 5.36583 11.4142 5.49663C11.545 5.62742 11.7003 5.73117 11.8712 5.80195C12.0421 5.87272 12.2253 5.90914 12.4103 5.90913C12.7838 5.90909 13.1421 5.76068 13.4062 5.49654C13.6704 5.23239 13.8188 4.87414 13.8188 4.50059C13.8188 4.3156 13.7824 4.13242 13.7117 3.9615C13.6409 3.79059 13.5371 3.63529 13.4063 3.50447C13.2755 3.37366 13.1203 3.26988 12.9494 3.19907C12.7785 3.12827 12.5953 3.09181 12.4103 3.0918ZM18.2203 9.00545C17.8468 9.00548 17.4885 9.15389 17.2244 9.41803C16.9602 9.68218 16.8118 10.0404 16.8118 10.414C16.8118 10.599 16.8482 10.7822 16.919 10.9531C16.9897 11.124 17.0935 11.2793 17.2243 11.4101C17.3551 11.5409 17.5104 11.6447 17.6813 11.7155C17.8522 11.7863 18.0353 11.8228 18.2203 11.8228C18.4053 11.8228 18.5885 11.7864 18.7595 11.7156C18.9304 11.6448 19.0857 11.541 19.2165 11.4102C19.3473 11.2794 19.4511 11.1241 19.5219 10.9531C19.5927 10.7822 19.6291 10.599 19.6291 10.414C19.6291 10.229 19.5926 10.0458 19.5218 9.87492C19.451 9.70402 19.3472 9.54874 19.2164 9.41795C19.0856 9.28715 18.9303 9.1834 18.7594 9.11263C18.5885 9.04185 18.4053 9.00543 18.2203 9.00545ZM7.70217 12.1092C7.51718 12.1092 7.334 12.1456 7.16308 12.2164C6.99217 12.2872 6.83687 12.3909 6.70605 12.5217C6.57524 12.6525 6.47146 12.8078 6.40065 12.9787C6.32985 13.1496 6.29339 13.3328 6.29338 13.5178C6.29336 13.7028 6.32979 13.886 6.40058 14.0569C6.47137 14.2278 6.57514 14.3832 6.70597 14.514C6.83679 14.6448 6.9921 14.7486 7.16303 14.8194C7.33396 14.8902 7.51716 14.9266 7.70217 14.9266C7.88718 14.9266 8.07038 14.8902 8.24131 14.8194C8.41223 14.7486 8.56755 14.6448 8.69837 14.514C8.82919 14.3832 8.93296 14.2278 9.00375 14.0569C9.07454 13.886 9.11097 13.7028 9.11095 13.5178C9.11094 13.3328 9.07449 13.1496 9.00368 12.9787C8.93287 12.8078 8.8291 12.6525 8.69828 12.5217C8.56746 12.3909 8.41216 12.2872 8.24125 12.2164C8.07033 12.1456 7.88715 12.1092 7.70217 12.1092ZM23.0306 20.631C22.7806 20.631 22.5332 20.6802 22.3023 20.7758C22.0714 20.8714 21.8616 21.0116 21.6848 21.1883C21.5081 21.365 21.3679 21.5748 21.2722 21.8057C21.1766 22.0366 21.1273 22.2841 21.1273 22.534C21.1273 22.7839 21.1766 23.0314 21.2722 23.2623C21.3679 23.4932 21.5081 23.7029 21.6848 23.8797C21.8616 24.0564 22.0714 24.1965 22.3023 24.2922C22.5332 24.3878 22.7806 24.437 23.0306 24.437C23.5353 24.437 24.0193 24.2364 24.3762 23.8796C24.733 23.5227 24.9335 23.0387 24.9336 22.534C24.9335 22.0293 24.733 21.5453 24.3762 21.1884C24.0193 20.8315 23.5353 20.631 23.0306 20.631ZM6.72196 21.7356C6.53697 21.7356 6.35379 21.7721 6.18289 21.8429C6.01199 21.9137 5.85671 22.0175 5.72592 22.1483C5.59512 22.2791 5.49137 22.4344 5.4206 22.6053C5.34982 22.7762 5.3134 22.9594 5.31342 23.1444C5.3134 23.3294 5.34982 23.5126 5.4206 23.6835C5.49137 23.8544 5.59512 24.0097 5.72592 24.1405C5.85671 24.2713 6.01199 24.3751 6.18289 24.4459C6.35379 24.5167 6.53697 24.5532 6.72196 24.5532C6.90696 24.5532 7.09016 24.5168 7.26109 24.446C7.43202 24.3752 7.58733 24.2714 7.71816 24.1406C7.84898 24.0098 7.95275 23.8545 8.02354 23.6836C8.09433 23.5126 8.13076 23.3294 8.13074 23.1444C8.13076 22.9594 8.09433 22.7762 8.02354 22.6053C7.95275 22.4343 7.84898 22.279 7.71816 22.1482C7.58733 22.0174 7.43202 21.9136 7.26109 21.8428C7.09016 21.772 6.90696 21.7356 6.72196 21.7356Z" fill="#0172A4"/><defs><linearGradient id="wl" x1="22.1214" y1="24.1023" x2="29.1448" y2="13.8518" gradientUnits="userSpaceOnUse"><stop stop-color="#0172A4"/><stop offset="1" stop-color="#002635"/></linearGradient></defs></svg>';function x(f,v){const p=f[v],u=`${p.dayLabel.charAt(0).toUpperCase()+p.dayLabel.slice(1)} · ${p.dateStr}`;return`
      <div class="m-detail-header">
        <div class="m-detail-row1">
          <div class="m-navbar-logo-mark">${b}</div>
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Prévisions</span></button>
          <div style="width:32px"></div>
        </div>
        <div class="m-detail-row2" style="justify-content:space-between;align-items:center;padding:4px 16px 10px">
          <button class="m-day-nav" id="prev-day" ${v===0?"disabled":""}>‹</button>
          <div style="display:flex;align-items:center;gap:6px"><i class="bi ${p.icon}" style="color:${p.color};font-size:22px"></i><span class="m-d-name">${u}</span></div>
          <button class="m-day-nav" id="next-day" ${v>=f.length-1?"disabled":""}>›</button>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:84px">
        <div style="padding:12px 16px 0">
          <div class="m-prev-detail-grid" style="grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
            <div class="m-prev-detail-stat"><i class="bi bi-cloud-rain"></i><strong>${p.pluie} mm</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-thermometer"></i><strong>${p.tMin} / ${p.tMax}°C</strong></div>
            <div class="m-prev-detail-stat"><i class="bi bi-wind"></i><strong>${p.ventMoy}/${p.ventRafales}</strong></div>
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
            ${p.hours.map((g,w)=>`
              <div style="display:flex;align-items:center;gap:12px;padding:9px 14px;${w<p.hours.length-1?"border-bottom:.5px solid rgba(0,0,0,.06)":""}">
                <span style="font-size:12px;color:#8e8e93;width:28px;flex-shrink:0">${g.label}</span>
                <i class="bi ${g.icon}" style="color:#8e8e93;font-size:14px;width:18px;text-align:center;flex-shrink:0"></i>
                <span style="font-size:12px;color:#45b7d1;width:44px;flex-shrink:0">${g.pluie>0?`${g.pluie}mm`:""}</span>
                <span style="font-size:14px;font-weight:600;width:40px;flex-shrink:0">${g.temp}°C</span>
                <span style="font-size:12px;color:#8e8e93">${g.hum}%</span>
                <span style="font-size:12px;color:#8e8e93;margin-left:auto">${g.vent} km/h</span>
              </div>`).join("")}
          </div>
        </div>
      </div>`}function C(f,v,p){var u,g;f.querySelector(".m-detail-back").addEventListener("click",ce),(u=f.querySelector("#prev-day"))==null||u.addEventListener("click",()=>{f.innerHTML=x(v,p-1),C(f,v,p-1)}),(g=f.querySelector("#next-day"))==null||g.addEventListener("click",()=>{f.innerHTML=x(v,p+1),C(f,v,p+1)})}function E(f,v){const p=xe(x(f,v));C(p,f,v)}function O(){var q,N,U,Le,Ye;(q=t.querySelector(".m-navbar-action"))==null||q.addEventListener("click",S),(N=e.querySelector("#dash-add-widget-btn"))==null||N.addEventListener("click",T),e.querySelectorAll(".m-widget-hd--toggle").forEach(M=>{M.addEventListener("click",H=>{if(H.target.closest(".m-widget-menu"))return;const k=M.dataset.collapse;l.has(k)?l.delete(k):l.add(k),h(),m()})}),(U=e.querySelector('[data-action="weephyt"]'))==null||U.addEventListener("click",()=>{re("Page Weephyt — à venir")}),e.querySelectorAll("[data-sensor-id]").forEach(M=>{M.addEventListener("click",()=>{const H=s.find(k=>k.id===+M.dataset.sensorId);H&&ae(()=>Promise.resolve().then(()=>zi),void 0).then(k=>k.initSensorDetail(H,"params"))})}),e.querySelectorAll('[data-widget="cultures"] [data-plot-id]').forEach(M=>{M.addEventListener("click",()=>{const H=B.find(k=>k.id===+M.dataset.plotId);H&&ae(()=>Promise.resolve().then(()=>vt),void 0).then(k=>k.initParcelDetail(H,[],"params"))})}),(Le=e.querySelector("#bh-expand"))==null||Le.addEventListener("click",()=>{const M=e.querySelector('[data-widget="bilan_hydrique"] .m-widget-bd');M&&(M.innerHTML=mt(r,!0),v(),f())});function f(){e.querySelectorAll(".m-bh-plot-link").forEach(M=>{M.addEventListener("click",()=>{const H=B.find(k=>k.id===+M.dataset.plotId);H&&ae(()=>Promise.resolve().then(()=>vt),void 0).then(k=>k.initParcelDetail(H,[]))})})}function v(){var M,H,k;(M=e.querySelector("#bh-btn-calendar"))==null||M.addEventListener("click",()=>{ae(()=>import("./irrigation-CoslZCc2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(F=>F.openCalendar(r,""))}),(H=e.querySelector("#bh-btn-irrigation"))==null||H.addEventListener("click",()=>{ae(()=>import("./irrigation-CoslZCc2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(F=>F.openIrrigationSaisie(r,re))}),(k=e.querySelector("#bh-btn-strategie"))==null||k.addEventListener("click",()=>{ae(()=>import("./irrigation-CoslZCc2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(F=>F.openIrrigationStrategie(r,re))})}f(),v();function p(){const M=e.querySelector('[data-widget="cumuls"] .m-widget-bd');M&&(M.innerHTML=ut(r,s),u())}function u(){var F,G,ee,te;const M=()=>{var j;const D=(j=e.querySelector("#cumuls-metric"))==null?void 0:j.value,A=e.querySelector("#cumuls-thresholds");A&&(D==="hf"?A.innerHTML=`
            <div class="m-wf-field">
              <span class="m-wf-label">Seuil de froid (°C)</span>
              <input type="number" class="m-wf-date" id="cumuls-th-cold" value="7.2" step="0.1" min="-20" max="20">
            </div>`:D==="dj"?A.innerHTML=`
            <div class="m-wf-row">
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil bas (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-low" value="0" step="1" min="-20" max="50">
              </div>
              <div class="m-wf-field">
                <span class="m-wf-label">Seuil haut (°C)</span>
                <input type="number" class="m-wf-date" id="cumuls-th-high" value="18" step="1" min="0" max="50">
              </div>
            </div>`:A.innerHTML="")},H=()=>{var P;const D=e.querySelector("#cumuls-metric"),A=(P=e.querySelector("#cumuls-subject"))==null?void 0:P.value;if(!D)return;const j=ti(A);D.innerHTML='<option value="">— Métrique —</option>'+j.map(_=>`<option value="${_.id}">${_.label}</option>`).join(""),D.disabled=!A||!j.length,M(),k()},k=()=>{var K,ie,se;const D=e.querySelector("#cumuls-create"),A=e.querySelector("#cumuls-date-err"),j=(K=e.querySelector("#cumuls-subject"))==null?void 0:K.value,P=(ie=e.querySelector("#cumuls-from"))==null?void 0:ie.value,_=(se=e.querySelector("#cumuls-metric"))==null?void 0:se.value,W=P?(Date.now()-new Date(P))/864e5>365:!1;A&&(A.style.display=W?"":"none"),D&&(D.disabled=!j||!P||!_||W)};(F=e.querySelector("#cumuls-subject"))==null||F.addEventListener("change",()=>{H(),k()}),(G=e.querySelector("#cumuls-from"))==null||G.addEventListener("change",k),(ee=e.querySelector("#cumuls-metric"))==null||ee.addEventListener("change",()=>{M(),k()}),(te=e.querySelector("#cumuls-create"))==null||te.addEventListener("click",()=>{var ie,se,be,ge,ye,Xe;const D=e.querySelector("#cumuls-subject"),A=D==null?void 0:D.value,j=(ie=e.querySelector("#cumuls-from"))==null?void 0:ie.value,P=(se=e.querySelector("#cumuls-metric"))==null?void 0:se.value;if(!A||!j||!P)return;const _=de.find(Et=>Et.id===P),W=ii[P]||{icon:"bi-bar-chart-fill",color:"#636366"},K=P==="hf"?{cold:+(((be=e.querySelector("#cumuls-th-cold"))==null?void 0:be.value)??7.2)}:P==="dj"?{low:+(((ge=e.querySelector("#cumuls-th-low"))==null?void 0:ge.value)??0),high:+(((ye=e.querySelector("#cumuls-th-high"))==null?void 0:ye.value)??18)}:null;me.push({metricId:P,metricLabel:(_==null?void 0:_.label)||P,unit:(_==null?void 0:_.unit)||"",icon:W.icon,color:W.color,subjectKey:A,subjectLabel:(((Xe=D.options[D.selectedIndex])==null?void 0:Xe.text)||A).trim(),fromDate:j,value:String(ai(A,j,P)??"—"),thresholds:K}),h(),p()}),e.querySelectorAll(".m-cumuls-del").forEach(D=>{D.addEventListener("click",()=>{me.splice(+D.dataset.cidx,1),h(),p()})})}u(),(Ye=e.querySelector("#open-chat-btn"))==null||Ye.addEventListener("click",hi);function g(){e.querySelectorAll(".m-tr-chart-wrap").forEach(M=>{const H=M.querySelector(".m-tr-cursor"),k=M.querySelector(".m-tr-tooltip");if(!k)return;const F=JSON.parse(M.dataset.series||"[]"),G=M.dataset.unit||"",ee=F.length,te=26,D=270;M.addEventListener("pointermove",A=>{const j=M.getBoundingClientRect(),P=Math.max(0,Math.min(((A.clientX-j.left)*(te+D)/j.width-te)/D,1)),_=F[Math.round(P*(ee-1))]??null;if(H){const W=te+Math.round(P*D);H.setAttribute("x1",W),H.setAttribute("x2",W),H.setAttribute("opacity","1")}k.style.display="",k.style.left=`${Math.max(0,Math.min(A.clientX-j.left-24,j.width-60))}px`,k.textContent=_!==null?`${(+_).toFixed(1)} ${G}`:"—"}),M.addEventListener("pointerleave",()=>{k.style.display="none",H==null||H.setAttribute("opacity","0")})})}function w(){const M=e.querySelector('[data-widget="temps_reel"] .m-widget-bd');M&&(M.innerHTML=dt(r,s),$())}function $(){var F,G,ee,te,D;const M=()=>{var j,P;const A=e.querySelector("#msr-create");A&&(A.disabled=!((j=e.querySelector("#msr-subject"))!=null&&j.value)||!((P=e.querySelector("#msr-metric"))!=null&&P.value)||ne.length>=Ne)},H=()=>{var _;const A=e.querySelector("#msr-metric"),j=(_=e.querySelector("#msr-subject"))==null?void 0:_.value;if(!A)return;const P=Ut(j,s);A.innerHTML='<option value="">— Métrique —</option>'+P.map(W=>`<option value="${W}">${Be[W]}</option>`).join(""),A.disabled=!j||!P.length,M()},k=()=>{var P;const A=e.querySelector("#msr-step"),j=((P=e.querySelector("#msr-period"))==null?void 0:P.value)||"7d";A&&(A.innerHTML=wt(j).map(_=>`<option value="${_.id}">${_.label}</option>`).join(""),M())};(F=e.querySelector("#msr-subject"))==null||F.addEventListener("change",()=>{H(),M()}),(G=e.querySelector("#msr-period"))==null||G.addEventListener("change",()=>{k(),M()}),(ee=e.querySelector("#msr-metric"))==null||ee.addEventListener("change",M),(te=e.querySelector("#msr-step"))==null||te.addEventListener("change",M),(D=e.querySelector("#msr-create"))==null||D.addEventListener("click",()=>{var be,ge,ye;const A=e.querySelector("#msr-subject"),j=e.querySelector("#msr-metric"),P=e.querySelector("#msr-period"),_=e.querySelector("#msr-step"),W=A==null?void 0:A.value,K=j==null?void 0:j.value,ie=P==null?void 0:P.value,se=_==null?void 0:_.value;!W||!K||!ie||!se||(ne.push({subjectKey:W,subjectLabel:(((be=A.options[A.selectedIndex])==null?void 0:be.text)||W).trim(),metricId:K,metricLabel:Be[K]||K,unit:Gt[K]||"",period:ie,periodLabel:(((ge=P.options[P.selectedIndex])==null?void 0:ge.text)||ie).trim(),step:se,stepLabel:(((ye=_.options[_.selectedIndex])==null?void 0:ye.text)||se).trim(),color:rt[ne.length%rt.length]}),h(),w())}),e.querySelectorAll('.m-wf-del[data-widget="temps_reel"]').forEach(A=>{A.addEventListener("click",()=>{ne.splice(+A.dataset.idx,1),h(),w()})}),g()}$(),e.querySelectorAll(".m-prev-card").forEach(M=>{M.addEventListener("click",()=>{E(o,+M.dataset.day)})});const L=e.querySelector(".m-prev-expand-btn");L&&L.addEventListener("click",()=>E(o,3)),e.querySelectorAll(".m-widget-menu").forEach(M=>{M.addEventListener("click",H=>{H.stopPropagation();const k=V.find(ee=>ee.id===M.dataset.widget);if(!k)return;const F=document.createElement("div");F.innerHTML=`
          <div class="m-sheet-links">
            <a class="m-sheet-link" id="menu-config">Configurer</a>
            <a class="m-sheet-link" id="menu-move">Déplacer</a>
            <a class="m-sheet-link m-sheet-link--danger" id="menu-remove">Retirer</a>
          </div>`;const G=je({title:k.title,body:F,doneLabel:"Fermer",onDone:()=>{}});F.querySelector("#menu-config").addEventListener("click",()=>{G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),re("Configuration à venir")},280)}),F.querySelector("#menu-move").addEventListener("click",()=>{G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),I()},280)}),F.querySelector("#menu-remove").addEventListener("click",()=>{k.active=!1,G.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{G.remove(),h(),m()},280),re("Widget retiré")})})})}function I(){const f=document.createElement("div"),v=()=>V.filter(u=>u.active&&!u.fixed),p=()=>{const u=v();f.innerHTML=u.map((g,w)=>`
        <div class="m-reorder-row">
          <i class="bi bi-grip-vertical" style="color:#c7c7cc;font-size:20px"></i>
          <span class="m-reorder-title">${g.title}</span>
          <div class="m-reorder-btns">
            <button class="m-reorder-btn" data-i="${w}" data-dir="-1" ${w===0?"disabled":""} type="button">
              <i class="bi bi-arrow-up"></i>
            </button>
            <button class="m-reorder-btn" data-i="${w}" data-dir="1" ${w===u.length-1?"disabled":""} type="button">
              <i class="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>`).join(""),f.querySelectorAll(".m-reorder-btn:not([disabled])").forEach(g=>{g.addEventListener("click",()=>{const w=v(),$=+g.dataset.i,L=$+ +g.dataset.dir,q=V.indexOf(w[$]),N=V.indexOf(w[L]);[V[q],V[N]]=[V[N],V[q]],h(),p(),m()})})};p(),je({title:"Réorganiser les widgets",body:f,doneLabel:"Fermer",onDone:()=>{}})}function S(){const v=xe(`
      <div class="m-detail-header">
        <div class="m-detail-topbar">
          <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
          <span style="font-size:17px;font-weight:600">Ajouter</span>
          <div style="width:44px"></div>
        </div>
      </div>
      <div class="m-detail-tabs" style="display:none"></div>
      <div id="detail-content" class="m-detail-content" style="top:52px">
        <div style="padding:20px 16px">
          <div class="m-add-section-label">Mon exploitation</div>
          <div class="m-add-grid">
            <button class="m-add-item" data-action="parcelle">
              <div class="m-add-icon"><i class="bi bi-geo-alt-fill"></i></div>
              <span>Parcelle</span>
            </button>
            <button class="m-add-item" data-action="capteur">
              <div class="m-add-icon"><i class="bi bi-broadcast"></i></div>
              <span>Capteur</span>
            </button>
            <button class="m-add-item" data-action="station">
              <div class="m-add-icon"><i class="bi bi-cloud-sun-fill"></i></div>
              <span>Station météo virtuelle</span>
            </button>
            <button class="m-add-item" data-action="membre">
              <div class="m-add-icon"><i class="bi bi-person-plus-fill"></i></div>
              <span>Membre</span>
            </button>
            <button class="m-add-item" data-action="irrigation">
              <div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-droplet-fill"></i></div>
              <span>Irrigation</span>
            </button>
            <button class="m-add-item" data-action="strategie-irrigation">
              <div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-arrow-repeat"></i></div>
              <span>Saison d'irr.</span>
            </button>
            <button class="m-add-item" data-action="calendrier">
              <div class="m-add-icon" style="background:#e8f4fd;color:#0172A4"><i class="bi bi-calendar3"></i></div>
              <span>Voir les irrigations</span>
            </button>
          </div>
          ${i==="admin"?`
          <div class="m-add-section-label" style="margin-top:20px">Mon réseau</div>
          <div class="m-add-grid">
            <button class="m-add-item" data-action="adherent">
              <div class="m-add-icon"><i class="bi bi-building"></i></div>
              <span>Adhérent</span>
            </button>
          </div>`:""}
          <div class="m-add-section-label" style="margin-top:20px">Mon compte</div>
          <div class="m-add-grid">
            <button class="m-add-item" data-action="alerte">
              <div class="m-add-icon"><i class="bi bi-bell-fill"></i></div>
              <span>Alerte</span>
            </button>
            <button class="m-add-item" data-action="export">
              <div class="m-add-icon"><i class="bi bi-download"></i></div>
              <span>Export de données</span>
            </button>
          </div>
        </div>
      </div>`);v.querySelector(".m-detail-back").addEventListener("click",ce),v.querySelectorAll(".m-add-item").forEach(p=>{p.addEventListener("click",()=>{const u=p.dataset.action;u==="irrigation"?(ce(),ae(()=>import("./irrigation-CoslZCc2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(g=>g.openIrrigationSaisie(r,re))):u==="strategie-irrigation"?(ce(),ae(()=>import("./irrigation-CoslZCc2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(g=>g.openIrrigationStrategie(r,re))):u==="calendrier"?(ce(),ae(()=>import("./irrigation-CoslZCc2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(g=>g.openCalendar(r,""))):re("Fonctionnalité à venir")})})}function T(){const f=document.createElement("div"),v=()=>{const p=V.filter(u=>!u.fixed);f.innerHTML=p.map(u=>`
        <div class="m-catalog-row${u.available?"":" m-catalog-row--soon"}">
          <div class="m-catalog-icon" style="background:${u.color}20;color:${u.color}"><i class="bi ${u.icon}"></i></div>
          <span class="m-catalog-title">${u.title}</span>
          ${u.available?`<button class="m-catalog-toggle${u.active?" m-catalog-toggle--on":""}" data-cid="${u.id}" type="button">
                <i class="bi ${u.active?"bi-check-circle-fill":"bi-plus-circle"}"></i>
              </button>`:'<span class="m-catalog-soon">Bientôt</span>'}
        </div>`).join(""),f.querySelectorAll("[data-cid]").forEach(u=>{u.addEventListener("click",()=>{const g=V.find(w=>w.id===u.dataset.cid);g&&(g.active=!g.active,h(),v(),m())})})};v(),je({title:"Widgets disponibles",body:f,doneLabel:"Fermer",onDone:()=>{}})}m()}new URLSearchParams(window.location.search).get("role");const bi=[{title:"Cumuls",items:["Cumul Degrés jours","Cumul Pluie","Cumul Ensoleillement","Cumul Evapotranspiration","Cumul Heures froides","Cumul Humectation foliaire"]},{title:"Outils aide à la décision",items:["Maï'zy","Suivi de culture","Weephyt","Decitrait","Tavelure Pomme"]},{title:"Indicateurs",items:["DPV","THI","Température de rosée","Température du sol","Rayonnement solaire"]},{title:"Prévisions",items:["Prévisions à 5 jours","Prévisions à 6 heures","Prévisions du jour","Prévisions de tensiométrie"]},{title:"Capteurs",items:["Anémomètre","Capteur d'humectation foliaire","Capteur PAR","Pyranomètre","Station météo","Station Météo Virtuelle","Thermomètre de sol","Thermomètre-Hygromètre"]},{title:"Irrigation",items:["Sonde capacitive","Tensiomètre","Sonde de fertirrigation","Profil capteurs","Niveau de réservoir en eau utilisable","Profil de niveau de réservoir"]}];function gi(){const t=bi.map(e=>`
    <div class="m-list-section-header">${e.title}</div>
    ${e.items.map(a=>`
      <div class="m-wcat-item">
        <span>${a}</span>
        <button class="m-wcat-add" type="button"><i class="bi bi-plus-circle"></i></button>
      </div>`).join("")}`).join(""),i=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Retour</span></button>
        <span style="font-size:17px;font-weight:600">Ajouter un widget</span>
        <div style="width:44px"></div>
      </div>
    </div>
    <div class="m-detail-tabs" style="display:none"></div>
    <div class="m-detail-content" style="top:52px;overflow-y:auto">
      <div style="padding:8px 0 32px">${t}</div>
    </div>`);i.querySelector(".m-detail-back").addEventListener("click",ce),i.querySelectorAll(".m-wcat-add").forEach(e=>{e.addEventListener("click",()=>R("Widget bientôt disponible"))})}const Te={etp:{label:"Évapotranspiration",unit:"mm/j",color:"#c090e0",cumul:!0,cumulsType:"etp"},rayonnement:{label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"},temp_rosee:{label:"Température de rosée",unit:"°C",color:"#80c8e8",cumul:!1},pluie:{label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},temperature:{label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},humidite:{label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1},pothydr:{label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},teneur:{label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},temp_sol:{label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1},humectation:{label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"},vent:{label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1},par:{label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}},xt={"P+":["pluie","temperature","humidite"],PT:["pluie","temperature"],P:["pluie"],SMV:["pluie","temperature","humidite"],TH:["temperature","humidite"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],T_MINI:["temp_sol"],EC:["teneur","temp_sol"]};function Ve(t,i){const e={etp:{base:3,amp:1.5,min:0,max:8},rayonnement:{base:350,amp:300,min:0,max:900},temp_rosee:{base:9,amp:5,min:-2,max:18},pluie:{base:2,amp:6,min:0,max:30,sparse:!0},temperature:{base:15,amp:8,min:-5,max:35},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[t]||{base:50,amp:20,min:0,max:100};return Array.from({length:i},(a,r)=>{const n=r/i*Math.PI*4;if(e.sparse&&Math.random()>.25)return 0;const s=e.base+e.amp*Math.sin(n-1)+(Math.random()-.5)*e.amp*.5;return Math.max(e.min,Math.min(e.max,s))})}const We={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60},Ge={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function yi(t,i,e,a,r,n=20){const s=Ge[t]||10080,o=new Date,d=y=>t==="1d"||t==="hier"?`${String(y.getHours()).padStart(2,"0")}h`:t==="365d"?y.toLocaleDateString("fr-FR",{month:"short"}):`${String(y.getDate()).padStart(2,"0")}/${String(y.getMonth()+1).padStart(2,"0")}`,c=4,l=i-e-a,h=r-n;return Array.from({length:c+1},(y,m)=>{const b=m/c,x=new Date(o.getTime()-(1-b)*s*6e4),C=(e+b*l).toFixed(1),E=m===0?"start":m===c?"end":"middle";return[`<line x1="${C}" y1="${h}" x2="${C}" y2="${h+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${C}" y="${r-3}" text-anchor="${E}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(x)}</text>`].join("")}).join("")}function wi(t,i,e,a="7d"){const r=We[a]||60,n=Ve(t,r),s=320,o=100,d=34,c=6,l=10,h=20,y=s-d-c,m=o-l-h,b=e?0:Math.min(...n),x=Math.max(...n,b+.001),C=x-b,E=$=>d+$/(n.length-1)*y,O=$=>l+m-($-b)/C*m,I=`g${Math.random().toString(36).slice(2,8)}`,S=[0,.5,1].map($=>{const L=b+$*C,q=l+m-$*m;return`<text x="${d-3}" y="${(q+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${L<10?L.toFixed(1):Math.round(L)}</text>`}).join(""),T=[.25,.5,.75].map($=>{const L=(l+m-$*m).toFixed(1);return`<line x1="${d}" y1="${L}" x2="${s-c}" y2="${L}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`}).join(""),f=`<line x1="${d}" y1="${l+m}" x2="${s-c}" y2="${l+m}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,v=yi(a,s,d,c,o);if(e){const $=y/n.length*.7,L=n.map((q,N)=>{const U=(q-b)/C*m,Le=l+m-U;return`<rect x="${(E(N)-$/2).toFixed(1)}" y="${Le.toFixed(1)}" width="${$.toFixed(1)}" height="${U.toFixed(1)}" fill="${i}" opacity=".8" rx="1"/>`}).join("");return`<svg viewBox="0 0 ${s} ${o}" width="100%" height="${o}" preserveAspectRatio="none">${S}${T}${f}${v}${L}</svg>`}const u=n.map(($,L)=>[E(L),O($)]).map(([$,L],q)=>`${q?"L":"M"}${$.toFixed(1)},${L.toFixed(1)}`).join(" "),g=`${u} L${E(n.length-1).toFixed(1)},${(l+m).toFixed(1)} L${d},${(l+m).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:n.map($=>+$.toFixed(2)),minV:+b.toFixed(2),maxV:+x.toFixed(2)}))}" data-color="${i}" style="position:relative">
    <svg viewBox="0 0 ${s} ${o}" width="100%" height="${o}" preserveAspectRatio="none">
      <defs><linearGradient id="${I}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${S}${T}${f}
      <path d="${g}" fill="url(#${I})"/>
      <path d="${u}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${v}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function $i(t,i,e){if(!e)return"";const a=We[i]||60,n=(Ge[i]||10080)/(a*60),s=Ve(t,a);let o=[];if(e==="temp"){const d=s.reduce((l,h)=>l+Math.max(0,h),0)*(n/24),c=s.filter(l=>l<7).length*n;o=[{label:"Degrés jours",val:`${Math.round(d)} DJ`},{label:"Heures de froid",val:`${Math.round(c)} h`}]}else if(e==="pluie")o=[{label:"Cumul pluie",val:`${s.reduce((c,l)=>c+l,0).toFixed(1)} mm`}];else if(e==="rayo"){const d=s.filter(c=>c>120).length*n;o=[{label:"Ensoleillement",val:`${Math.round(d)} h`}]}else if(e==="etp")o=[{label:"ETP cumulée",val:`${(s.reduce((c,l)=>c+l,0)*(n/24)).toFixed(1)} mm`}];else if(e==="hws"){const d=s.filter(c=>c>50).length*n;o=[{label:"Heures d'humectation",val:`${Math.round(d)} h`}]}return o.length?`<div class="m-chart-cumuls">${o.map(d=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${d.label}</span>
      <span class="m-chart-cumul-val">${d.val}</span>
    </div>`).join("")}</div>`:""}function xi(t,i){const e=Te[t];return e?`
    <div class="m-chart-card">
      <div class="m-chart-card-hd">
        <span class="m-chart-label" style="color:${e.color}">${e.label}</span>
      </div>
      ${wi(t,e.color,e.cumul,i)}
      ${$i(t,i,e.cumulsType)}
    </div>`:""}function Ci(t){const i=JSON.parse(decodeURIComponent(t.dataset.chart||"{}"));if(!i.vals)return;const{vals:e,minV:a,maxV:r}=i,n=t.querySelector(".m-chart-tip"),s=t.querySelector(".m-chart-crosshair"),o=t.dataset.color||"#0172A4";function d(l){const h=t.getBoundingClientRect(),y=Math.max(0,Math.min(1,(l-h.left)/h.width)),m=Math.round(y*(e.length-1)),b=e[m],x=y*100;s.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${x}%;width:1px;background:${o};opacity:.5`,n.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(x,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,n.textContent=b<10?b.toFixed(1):String(Math.round(b))}function c(){s.style.display="none",n.style.display="none"}t.addEventListener("pointermove",l=>{l.preventDefault(),d(l.clientX)}),t.addEventListener("pointerdown",l=>d(l.clientX)),t.addEventListener("pointerup",c),t.addEventListener("pointerleave",c),t.style.cursor="crosshair"}function Si(t){const i=At(B.filter(m=>m.orgId===t.orgId)),e=new Set([t.name]);i.filter(m=>m.ids.includes(t.id)).forEach(m=>e.add(m.label));const a=Tt.filter(m=>e.has(m.label)),r=new Date().toISOString().split("T")[0],n=a.filter(m=>m.real),s=a.filter(m=>!m.real),o=n.reduce((m,b)=>m+b.mm,0),d=s.reduce((m,b)=>m+b.mm,0),c=s.filter(m=>m.iso>=r).sort((m,b)=>m.iso<b.iso?-1:1)[0],l=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],h=m=>{const[,b,x]=m.split("-");return`${+x} ${l[+b-1]}`},y=t.irrigation;return a.length?`
    <div class="m-placeholder-widget" style="flex-direction:column;align-items:flex-start;gap:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
        <span style="font-size:13px;font-weight:700;color:#1c1c1e;display:flex;align-items:center;gap:6px">
          <i class="bi bi-droplet-fill" style="color:#0172A4"></i> Irrigation
          ${y&&y!=="Pas d'irrigation"?`<span style="background:rgba(1,114,164,.1);color:#0172A4;border-radius:20px;padding:1px 8px;font-size:11px;font-weight:600">${y}</span>`:""}
        </span>
        <button class="m-widget-menu" type="button">•••</button>
      </div>
      <div style="display:flex;gap:20px;width:100%">
        <div>
          <div style="font-size:10px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Réalisées</div>
          <div style="font-size:22px;font-weight:700;color:#E07820;line-height:1.1">${o} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${n.length} irrig.</div>
        </div>
        <div>
          <div style="font-size:10px;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Planifiées</div>
          <div style="font-size:22px;font-weight:700;color:#FFB705;line-height:1.1">${d} <span style="font-size:12px;font-weight:400;color:#8e8e93">mm</span></div>
          <div style="font-size:11px;color:#8e8e93">${s.length} irrig.</div>
        </div>
      </div>
      ${c?`<div style="font-size:12px;color:#3a3a3c"><i class="bi bi-arrow-right-circle" style="color:#0172A4"></i> Prochaine · <strong>${h(c.iso)}</strong> · ${c.mm} mm</div>`:""}
    </div>`:`
      <div class="m-placeholder-widget" style="flex-direction:column;align-items:flex-start;gap:8px">
        <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
          <span style="font-size:13px;font-weight:700;color:#1c1c1e;display:flex;align-items:center;gap:6px">
            <i class="bi bi-droplet-fill" style="color:#0172A4"></i> Irrigation
          </span>
          <button class="m-widget-menu" type="button">•••</button>
        </div>
        <div style="font-size:13px;color:#8e8e93">Aucune irrigation enregistrée cette saison</div>
      </div>`}function Li(t){const i=["Bilan hydrique","Stades phénologiques","Alertes actives","Données temps-réel"];return`
    <div class="m-detail-section">
      <button class="m-add-widget-btn"><i class="bi bi-plus-circle"></i> Ajouter un widget</button>
      ${Si(t)}
      ${i.map(e=>`
        <div class="m-placeholder-widget">
          <span class="m-placeholder-widget-name">${e}</span>
          <button class="m-widget-menu" type="button">•••</button>
        </div>`).join("")}
    </div>`}function Mi(t,i){const e=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:i});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function Ei(t,i,e){const a=new Set;i.forEach(m=>{const b=z.find(x=>x.id===m);b&&(xt[b.model]||[]).forEach(x=>a.add(x))});const r=[...new Set(["etp","rayonnement","temp_rosee",...a])].filter(m=>Te[m]),n=We[e]||60,s=Ge[e]||10080,o=s/n*6e4,d=new Date,c=new Date(d-s*6e4),l=["Horodatage",...r.map(m=>`${Te[m].label} (${Te[m].unit})`)].join(";"),h=Array.from({length:n},(m,b)=>[new Date(c.getTime()+b*o).toISOString().replace("T"," ").slice(0,19),...r.map(C=>Ve(C,1)[0].toFixed(2))].join(";")),y=(t.name||"parcelle").replace(/[^\w]/g,"_");Mi([l,...h].join(`\r
`),`${y}_${e}_${new Date().toISOString().slice(0,10)}.csv`)}function Ai(t,i="7d",e="1h"){const a=new Set;t.forEach(n=>{const s=z.find(o=>o.id===n);s&&(xt[s.model]||[]).forEach(o=>a.add(o))});const r=[...new Set(["etp","rayonnement","temp_rosee",...a])];return`
    <div class="m-period-bar">
      <select class="m-period-sel">
        <option value="365d"${i==="365d"?" selected":""}>365 jours</option>
        <option value="30d"${i==="30d"?" selected":""}>30 jours</option>
        <option value="7d"${i==="7d"?" selected":""}>7 jours</option>
        <option value="hier"${i==="hier"?" selected":""}>Hier</option>
        <option value="1d"${i==="1d"?" selected":""}>Aujourd'hui</option>
        <option value="custom"${i==="custom"?" selected":""}>Personnalisé</option>
      </select>
      <select class="m-step-sel">
        <option value="1h"${e==="1h"?" selected":""}>Horaire</option>
        <option value="1d"${e==="1d"?" selected":""}>Journalier</option>
        <option value="1w"${e==="1w"?" selected":""}>Hebdo</option>
      </select>
      <button class="m-export-btn" title="Exporter CSV"><i class="bi bi-download"></i></button>
    </div>
    <div class="m-detail-section">
      ${r.map(n=>xi(n,i)).join("")}
    </div>`}function Ti(t,i,e){const a=e.map(r=>{const n=z.find(s=>s.id===r);return n?`${n.model} — ${n.serial}`:null}).filter(Boolean);return`
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
          <span class="m-list-row-value">${(i==null?void 0:i.name)||"—"}</span>
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
          <span class="m-list-row-value">${(i==null?void 0:i.ville)||"—"}</span>
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
        ${a.length?a.map((r,n)=>`<div class="m-list-row${n===a.length-1?" m-list-row--last":""}">
              <span class="m-list-row-label">${r}</span>
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
    </div>`}function Fe(t,i=[],e="widgets"){const a=J.find(m=>m.id===t.orgId);let r=e,n="7d",s="1h",o=!1;const d=(a==null?void 0:a.ville)||"",c=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Parcelles</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${t.name}</div>
          ${t.crop||d?`<div class="m-detail-subtitle">${[t.crop,d].filter(Boolean).join(" · ")}</div>`:""}
        </div>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${e==="widgets"?"active":""}" data-view="widgets">Widgets</button>
      <button class="m-detail-tab ${e==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${e==="params"?"active":""}" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function l(){const m=c.querySelector("#detail-content");r==="widgets"&&(m.innerHTML=Li(t)),r==="donnees"&&(m.innerHTML=Ai(i,n,s)),r==="params"&&(m.innerHTML=Ti(t,a,i),h()),y()}function h(){const m=window.L;m&&setTimeout(()=>{var C;const b=c.querySelector("#parcel-minimap");if(!b)return;const x=m.map(b,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});if(m.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(x),((C=t.latlngs)==null?void 0:C.length)>=3){const E=m.polygon(t.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.4}).addTo(x);x.fitBounds(E.getBounds(),{padding:[8,8]})}else x.setView([t.lat,t.lng],14),m.circleMarker([t.lat,t.lng],{radius:8,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.9}).addTo(x)},50)}function y(){var m,b,x,C;(m=c.querySelector(".m-period-sel"))==null||m.addEventListener("change",E=>{n=E.target.value,l()}),(b=c.querySelector(".m-step-sel"))==null||b.addEventListener("change",E=>{s=E.target.value,l()}),(x=c.querySelector(".m-export-btn"))==null||x.addEventListener("click",()=>Ei(t,i,n)),c.querySelectorAll(".m-chart-svg-wrap").forEach(E=>Ci(E)),c.querySelectorAll(".m-list-row[data-action]").forEach(E=>{E.addEventListener("click",()=>R("Fonctionnalité à venir"))}),c.querySelectorAll(".m-widget-menu").forEach(E=>{E.addEventListener("click",O=>{O.stopPropagation(),R("Options widget")})}),(C=c.querySelector(".m-add-widget-btn"))==null||C.addEventListener("click",gi)}c.querySelectorAll(".m-detail-tab").forEach(m=>{m.addEventListener("click",()=>{c.querySelectorAll(".m-detail-tab").forEach(b=>b.classList.remove("active")),m.classList.add("active"),r=m.dataset.view,l()})}),c.querySelector(".m-detail-back").addEventListener("click",ce),c.querySelector("#d-star").addEventListener("click",()=>{o=!o;const m=c.querySelector("#d-star");m.querySelector("i").className=o?"bi bi-star-fill":"bi bi-star",m.style.color=o?"#f5c842":"",R(o?"Ajouté aux favoris":"Retiré des favoris")}),c.querySelector("#d-plus").addEventListener("click",()=>{const m=`
      <a class="m-sheet-link" data-a="widget"><i class="bi bi-grid-1x2"></i> Widget</a>
      <a class="m-sheet-link" data-a="irrigation"><i class="bi bi-droplet"></i> Irrigation</a>
      <a class="m-sheet-link" data-a="strategie-irrigation"><i class="bi bi-arrow-repeat"></i> Stratégie d'irrigation</a>
      <a class="m-sheet-link" data-a="capteur"><i class="bi bi-broadcast"></i> Capteur</a>
      <a class="m-sheet-link" data-a="alerte"><i class="bi bi-bell"></i> Alerte</a>
      <a class="m-sheet-link" data-a="integration" style="color:#8e8e93">
        <i class="bi bi-plug"></i> Intégration <span style="font-size:11px">(version web uniquement)</span>
      </a>
      <a class="m-sheet-link" data-a="note"><i class="bi bi-pencil"></i> Note</a>
      <a class="m-sheet-link" data-a="traitement"><i class="bi bi-eyedropper"></i> Traitement</a>`,b=document.createElement("div");b.innerHTML=m;const x=Z({title:"Ajouter à la parcelle",body:b,doneLabel:"Fermer",onDone:()=>{}});b.querySelectorAll("[data-a]").forEach(C=>{C.addEventListener("click",()=>{const E=C.dataset.a;x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{x.remove(),R(E==="integration"?"Disponible sur la version web":"Fonctionnalité à venir")},280)})})}),l()}const vt=Object.freeze(Object.defineProperty({__proto__:null,initParcelDetail:Fe},Symbol.toStringTag,{value:"Module"})),we=100,ki={pluie:["P+","PT","P"],vent:["W"],par:["PAR"],humectation:["LWS"]};function $e(t,i){const e=ki[i];return e?z.some(a=>a.parcelId===t.id&&e.includes(a.model)):!0}const Me=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 derniers jours","30 jours"],defaultAgg:"7 derniers jours"},{id:"irrigation",label:"Irrigations",unit:"mm",aggs:["30 derniers jours","7 derniers jours","Aujourd'hui","Demain","7 prochains jours","30 prochains jours","Toute la saison"],defaultAgg:"Aujourd'hui"},{id:"etp",label:"Évapotranspiration",unit:"mm",aggs:["Aujourd'hui","7 derniers jours"],defaultAgg:"Aujourd'hui"},{id:"temp",label:"Température air",unit:"°C",aggs:["Actuel","Min du jour","Max du jour"],defaultAgg:"Actuel"},{id:"temp_rosee",label:"Température de rosée",unit:"°C",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"rfu",label:"Réservoir",unit:"mm",aggs:["Actuel"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Moyenne du jour"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Pi(t){switch(t){case"irrigation":return Math.round(Math.random()>.4?Math.random()*45:0);case"pluie":return+(Math.random()*50).toFixed(1);case"etp":return+(Math.random()*8).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"temp_rosee":return+(2+Math.random()*14).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"rfu":return Math.round(20+Math.random()*110);case"hum":return Math.round(40+Math.random()*55);case"vent":return+(Math.random()*40).toFixed(1);case"par":return Math.round(Math.random()*1800);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Ii(t,i){let e=t.querySelector("#parcelles-content");e||(e=document.createElement("div"),e.id="parcelles-content",t.appendChild(e));const a=i==="admin",r=J.filter(S=>S.id!==we),n=Object.fromEntries(J.map(S=>[S.id,S]));let s=null,o=null;const d={};let c="carte",l="pluie",h="7 derniers jours",y="all";function m(S){const T=`${S}-${l}-${h}`;return T in d||(d[T]=Pi(l)),d[T]}function b(S){var T;return((T=n[S.orgId])==null?void 0:T.ville)||null}function x(){return a?y==="all"?B:y===String(we)?B.filter(S=>S.orgId===we):B.filter(S=>String(S.orgId)===y):B.filter(S=>S.orgId===1)}function C(){if(s){try{s.remove()}catch{}s=null,o=null}}function E(){C();const S=Me.find(u=>u.id===l)||Me[0],T=x(),f=a?`
      <select class="m-filter-select" id="org-filter">
        <option value="all">Toutes les organisations</option>
        <option value="${we}"${y===String(we)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
        ${r.map(u=>`<option value="${u.id}"${y===String(u.id)?" selected":""}>${u.name}</option>`).join("")}
      </select>`:"",v=[...T].sort((u,g)=>{const w=$e(u,l),$=$e(g,l);return w&&!$?-1:!w&&$?1:w?m(g.id)-m(u.id):0}),p=v.length?`<div class="m-plain-list">${v.map(u=>{const g=b(u),w=$e(u,l);return`
            <div class="m-plain-row m-tappable" data-plot-id="${u.id}">
              <div class="m-plain-info">
                <span class="m-plain-name">${u.name}</span>
                ${g?`<span class="m-plain-city">${g}</span>`:""}
              </div>
              <div style="display:flex;align-items:center;gap:6px">
                <span class="m-plain-data${w?"":" m-plain-na"}">${w?`${m(u.id)} ${S.unit}`:"—"}</span>
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
            ${Me.map(u=>`<option value="${u.id}"${u.id===l?" selected":""}>${u.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${S.aggs.map(u=>`<option${u===h?" selected":""}>${u}</option>`).join("")}
          </select>
        </div>
        ${f}
      </div>
      ${c==="carte"?'<div class="m-map-view"><div id="parcel-map" class="m-map-container"></div></div>':`<div class="m-list-view">${p}</div>`}`,I(),c==="carte"&&O(T,S)}function O(S,T){const f=window.L;f&&setTimeout(()=>{const v=e.querySelector("#parcel-map");if(!v)return;s=f.map(v,{zoomControl:!1,attributionControl:!1}),f.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(s);const p=[];S.forEach(u=>{const g=$e(u,l)?`${m(u.id)} ${T.unit}`:"—",w=z.filter(U=>U.parcelId===u.id).map(U=>U.id),$=()=>Fe(u,w),L=[u.lat,u.lng];u.latlngs&&u.latlngs.length>=3?(f.polygon(u.latlngs,{color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:.35}).addTo(s).on("click",$),p.push(...u.latlngs)):p.push(L);const q=$e(u,l),N=f.circleMarker(L,{radius:q?8:6,color:"#fff",weight:2,fillColor:"#0172A4",fillOpacity:q?.95:.4}).addTo(s);q&&N.bindTooltip(g,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),N.on("click",$)}),p.length&&(o=p,s.fitBounds(p,{padding:[32,32]})),s.invalidateSize()},0)}window.addEventListener("m-tab-change",S=>{S.detail==="parcelles"&&c==="carte"&&s&&setTimeout(()=>{s.invalidateSize(),o!=null&&o.length&&s.fitBounds(o,{padding:[32,32]})},50)});function I(){var S,T,f;e.querySelectorAll(".m-view-btn").forEach(v=>v.addEventListener("click",()=>{c=v.dataset.view,E()})),(S=e.querySelector("#metric-sel"))==null||S.addEventListener("change",v=>{var p;l=v.target.value,h=((p=Me.find(u=>u.id===l))==null?void 0:p.defaultAgg)||"",E()}),(T=e.querySelector("#agg-sel"))==null||T.addEventListener("change",v=>{h=v.target.value,E()}),(f=e.querySelector("#org-filter"))==null||f.addEventListener("change",v=>{y=v.target.value,E()}),e.querySelectorAll(".m-tappable[data-plot-id]").forEach(v=>{v.addEventListener("click",()=>{const p=B.find(g=>g.id===+v.dataset.plotId);if(!p)return;const u=z.filter(g=>g.parcelId===p.id).map(g=>g.id);Fe(p,u)})})}E()}const Ct={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},qi={"P+":"Weenat",PT:"Weenat",P:"Weenat",TH:"Weenat",W:"Weenat",PYRANO:"Weenat",T_MINI:"Weenat",T_GEL:"Weenat",LWS:"Weenat","CHP-15/30":"CoRHIZE","CHP-30/60":"CoRHIZE","CHP-60/90":"CoRHIZE","CAPA-30-3":"CoRHIZE","CAPA-60-6":"CoRHIZE",EC:"CoRHIZE",SMV:"Weenat (virtuel)"},St={"P+":[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],PT:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"}],P:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"}],SMV:[{id:"pluie",label:"Pluie",unit:"mm",color:"#45b7d1",cumul:!0,cumulsType:"pluie"},{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],TH:[{id:"temp",label:"Température",unit:"°C",color:"#e07050",cumul:!1,cumulsType:"temp"},{id:"humidite",label:"Humidité",unit:"%",color:"#4ecdc4",cumul:!1}],T_MINI:[{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],T_GEL:[{id:"tseche",label:"Température sèche",unit:"°C",color:"#e07050",cumul:!1},{id:"thumide",label:"Température humide",unit:"°C",color:"#80c8e8",cumul:!1}],W:[{id:"vent",label:"Vent",unit:"km/h",color:"#82b8e0",cumul:!1}],PYRANO:[{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",color:"#f5c842",cumul:!1,cumulsType:"rayo"}],PAR:[{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",color:"#a0d070",cumul:!1}],LWS:[{id:"humectation",label:"Humectation foliaire",unit:"%",color:"#60a090",cumul:!1,cumulsType:"hws"}],"CHP-15/30":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-30/60":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CHP-60/90":[{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",color:"#5b8dd9",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-30-3":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],"CAPA-60-6":[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}],EC:[{id:"teneur",label:"Teneur en eau",unit:"%vol",color:"#f0c060",cumul:!1},{id:"temp_sol",label:"Température sol",unit:"°C",color:"#bb8fce",cumul:!1}]};function Je(t,i){const e={pluie:{base:2,amp:6,min:0,sparse:!0},temp:{base:15,amp:8,min:-5},humidite:{base:65,amp:20,min:20,max:100},pothydr:{base:80,amp:60,min:0,max:200},teneur:{base:30,amp:12,min:5,max:50},temp_sol:{base:14,amp:5,min:0,max:35},tseche:{base:14,amp:6,min:-5},thumide:{base:10,amp:5,min:-8},rayonnement:{base:350,amp:300,min:0,max:900},humectation:{base:20,amp:80,min:0,max:100,sparse:!0},vent:{base:15,amp:15,min:0,max:80},par:{base:900,amp:800,min:0,max:2e3}}[t]||{base:50,amp:20,min:0};return Array.from({length:i},(a,r)=>{const n=r/i*Math.PI*4;if(e.sparse&&Math.random()>.25)return 0;const s=e.base+e.amp*Math.sin(n-1)+(Math.random()-.5)*e.amp*.5;return Math.max(e.min??0,Math.min(e.max??9999,s))})}const Ue={"365d":525600,"30d":43200,"7d":10080,hier:1440,"1d":1440,custom:10080};function ji(t,i,e,a,r,n=20){const s=Ue[t]||10080,o=new Date,d=y=>t==="1d"||t==="hier"?`${String(y.getHours()).padStart(2,"0")}h`:t==="365d"?y.toLocaleDateString("fr-FR",{month:"short"}):`${String(y.getDate()).padStart(2,"0")}/${String(y.getMonth()+1).padStart(2,"0")}`,c=4,l=i-e-a,h=r-n;return Array.from({length:c+1},(y,m)=>{const b=m/c,x=new Date(o.getTime()-(1-b)*s*6e4),C=(e+b*l).toFixed(1),E=m===0?"start":m===c?"end":"middle";return[`<line x1="${C}" y1="${h}" x2="${C}" y2="${h+4}" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`,`<text x="${C}" y="${r-3}" text-anchor="${E}" font-size="9" fill="#8e8e93" font-family="-apple-system">${d(x)}</text>`].join("")}).join("")}function Hi(t,i,e,a="7d"){const r=Ze[a]||60,n=Je(t,r),s=320,o=100,d=34,c=6,l=10,h=20,y=s-d-c,m=o-l-h,b=e?0:Math.min(...n),x=Math.max(...n,b+.001),C=x-b,E=$=>d+$/(n.length-1)*y,O=$=>l+m-($-b)/C*m,I=`g${Math.random().toString(36).slice(2,8)}`,S=[0,.5,1].map($=>{const L=b+$*C,q=l+m-$*m;return`<text x="${d-3}" y="${(q+3).toFixed(1)}" text-anchor="end" font-size="9" fill="#8e8e93" font-family="-apple-system">${L<10?L.toFixed(1):Math.round(L)}</text>`}).join(""),T=[.25,.5,.75].map($=>`<line x1="${d}" y1="${(l+m-$*m).toFixed(1)}" x2="${s-c}" y2="${(l+m-$*m).toFixed(1)}" stroke="rgba(0,0,0,.07)" stroke-width="1" stroke-dasharray="3,3"/>`).join(""),f=`<line x1="${d}" y1="${l+m}" x2="${s-c}" y2="${l+m}" stroke="rgba(0,0,0,.12)" stroke-width="1"/>`,v=ji(a,s,d,c,o);if(e){const $=y/n.length*.7;return`<svg viewBox="0 0 ${s} ${o}" width="100%" height="${o}" preserveAspectRatio="none">
      ${S}${T}${f}
      ${n.map((L,q)=>{const N=(L-b)/C*m,U=l+m-N;return`<rect x="${(E(q)-$/2).toFixed(1)}" y="${U.toFixed(1)}" width="${$.toFixed(1)}" height="${N.toFixed(1)}" fill="${i}" opacity=".75" rx="1"/>`}).join("")}
      ${v}
    </svg>`}const u=n.map(($,L)=>[E(L),O($)]).map(([$,L],q)=>`${q?"L":"M"}${$.toFixed(1)},${L.toFixed(1)}`).join(" "),g=`${u} L${E(n.length-1).toFixed(1)},${(l+m).toFixed(1)} L${d},${(l+m).toFixed(1)} Z`;return`<div class="m-chart-svg-wrap" data-chart="${encodeURIComponent(JSON.stringify({vals:n.map($=>+$.toFixed(2)),minV:+b.toFixed(2),maxV:+x.toFixed(2)}))}" data-color="${i}" style="position:relative">
    <svg viewBox="0 0 ${s} ${o}" width="100%" height="${o}" preserveAspectRatio="none">
      <defs><linearGradient id="${I}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity=".25"/>
        <stop offset="100%" stop-color="${i}" stop-opacity=".02"/>
      </linearGradient></defs>
      ${S}${T}${f}
      <path d="${g}" fill="url(#${I})"/>
      <path d="${u}" fill="none" stroke="${i}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${v}
    </svg>
    <div class="m-chart-crosshair" style="display:none"></div>
    <div class="m-chart-tip" style="display:none"></div>
  </div>`}function _i(t){const i=JSON.parse(decodeURIComponent(t.dataset.chart||"{}"));if(!i.vals)return;const{vals:e}=i,a=t.querySelector(".m-chart-tip"),r=t.querySelector(".m-chart-crosshair"),n=t.dataset.color||"#0172A4";function s(d){const c=t.getBoundingClientRect(),l=Math.max(0,Math.min(1,(d-c.left)/c.width)),h=Math.round(l*(e.length-1)),y=e[h],m=l*100;r.style.cssText=`display:block;position:absolute;top:0;bottom:20px;left:${m}%;width:1px;background:${n};opacity:.5`,a.style.cssText=`display:block;position:absolute;top:8px;left:${Math.min(m,75)}%;background:#1a1a1a;color:#fff;font-size:12px;font-weight:700;padding:3px 8px;border-radius:6px;white-space:nowrap;pointer-events:none`,a.textContent=y<10?y.toFixed(1):String(Math.round(y))}function o(){r.style.display="none",a.style.display="none"}t.addEventListener("pointermove",d=>{d.preventDefault(),s(d.clientX)}),t.addEventListener("pointerdown",d=>s(d.clientX)),t.addEventListener("pointerup",o),t.addEventListener("pointerleave",o),t.style.cursor="crosshair"}const Ze={"365d":52,"30d":60,"7d":84,hier:48,"1d":24,custom:60};function Di(t,i,e){if(!e)return"";const a=Ze[i]||60,n=(Ue[i]||10080)/(a*60),s=Je(t,a);let o=[];if(e==="temp"){const d=s.reduce((l,h)=>l+Math.max(0,h),0)*(n/24),c=s.filter(l=>l<7).length*n;o=[{label:"Degrés jours",val:`${Math.round(d)} DJ`},{label:"Heures de froid",val:`${Math.round(c)} h`}]}else if(e==="pluie")o=[{label:"Cumul pluie",val:`${s.reduce((c,l)=>c+l,0).toFixed(1)} mm`}];else if(e==="rayo"){const d=s.filter(c=>c>120).length*n;o=[{label:"Ensoleillement",val:`${Math.round(d)} h`}]}else if(e==="hws"){const d=s.filter(c=>c>50).length*n;o=[{label:"Heures d'humectation",val:`${Math.round(d)} h`}]}return o.length?`<div class="m-chart-cumuls">${o.map(d=>`<div class="m-chart-cumul-chip">
      <span class="m-chart-cumul-label">${d.label}</span>
      <span class="m-chart-cumul-val">${d.val}</span>
    </div>`).join("")}</div>`:""}function Ri(t,i){const e=new Blob(["\uFEFF"+t],{type:"text/csv;charset=utf-8;"}),a=Object.assign(document.createElement("a"),{href:URL.createObjectURL(e),download:i});document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(a.href),100)}function Bi(t,i){const e=St[t.model]||[];if(!e.length)return;const a=Ze[i]||60,r=Ue[i]||10080,n=r/a*6e4,s=new Date,o=new Date(s-r*6e4),d=["Horodatage",...e.map(l=>`${l.label} (${l.unit})`)].join(";"),c=Array.from({length:a},(l,h)=>[new Date(o.getTime()+h*n).toISOString().replace("T"," ").slice(0,19),...e.map(m=>Je(m.id,1)[0].toFixed(2))].join(";"));Ri([d,...c].join(`\r
`),`${t.serial}_${i}_${new Date().toISOString().slice(0,10)}.csv`)}function Fi(t,i="7d",e="1h"){const a=St[t.model]||[];if(!a.length)return'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucune donnée disponible</p></div>';const r=a.map(n=>`
      <div class="m-chart-card">
        <div class="m-chart-card-hd">
          <span class="m-chart-label" style="color:${n.color}">${n.label}</span>
        </div>
        ${Hi(n.id,n.color,n.cumul,i)}
        ${Di(n.id,i,n.cumulsType)}
      </div>`).join("");return`
    <div class="m-period-bar">
      <select class="m-period-sel">
        <option value="365d"${i==="365d"?" selected":""}>365 jours</option>
        <option value="30d"${i==="30d"?" selected":""}>30 jours</option>
        <option value="7d"${i==="7d"?" selected":""}>7 jours</option>
        <option value="hier"${i==="hier"?" selected":""}>Hier</option>
        <option value="1d"${i==="1d"?" selected":""}>Aujourd'hui</option>
        <option value="custom"${i==="custom"?" selected":""}>Personnalisé</option>
      </select>
      <select class="m-step-sel">
        <option value="1h"${e==="1h"?" selected":""}>Horaire</option>
        <option value="1d"${e==="1d"?" selected":""}>Journalier</option>
        <option value="1w"${e==="1w"?" selected":""}>Hebdo</option>
      </select>
      <button class="m-export-btn" title="Exporter CSV"><i class="bi bi-download"></i></button>
    </div>
    <div class="m-detail-section">${r}</div>`}function Oi(t){const i=t.parcelId?B.find(s=>s.id===t.parcelId):null,e=i?J.find(s=>s.id===i.orgId):null,a=t.networkQuality||0,r=a>70?"#30d158":a>40?"#ff9f0a":"#ff3b30",n=t.event?[t.event]:[];return`
    <div class="m-detail-section">
      <div class="m-list-section-header">Identification</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">Marque</span>
          <span class="m-list-row-value">${qi[t.model]||"Weenat"}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Modèle</span>
          <span class="m-list-row-value">${t.model} — ${Ct[t.model]||t.model}</span>
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
        ${i?'<div id="sensor-minimap" class="m-minimap-container"></div>':""}
        <div class="m-list-row">
          <span class="m-list-row-label">Commune</span>
          <span class="m-list-row-value">${(e==null?void 0:e.ville)||"—"}</span>
        </div>
        <div class="m-list-row m-list-row--last">
          <a class="m-itinerary-link" href="geo:${(i==null?void 0:i.lat)||0},${(i==null?void 0:i.lng)||0}?q=${(i==null?void 0:i.lat)||0},${(i==null?void 0:i.lng)||0}" target="_blank">
            <i class="bi bi-signpost-2"></i> Obtenir l'itinéraire
          </a>
        </div>
      </div>

      <div class="m-list-section-header">État</div>
      <div class="m-list">
        ${n.length?n.map(s=>`<div class="m-list-row"><i class="bi bi-exclamation-triangle-fill" style="color:#ff3b30"></i><span class="m-list-row-label" style="color:#ff3b30">${s}</span></div>`).join(""):'<div class="m-list-row"><i class="bi bi-check-circle-fill" style="color:#30d158"></i><span class="m-list-row-label">Aucun événement en cours</span></div>'}
        <div class="m-list-row">
          <span class="m-list-row-label">Qualité du signal</span>
          <span class="m-list-row-value" style="color:${r};font-weight:600">${a}%</span>
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
        ${i?`<div class="m-list-row"><span class="m-list-row-label">Parcelle</span><span class="m-list-row-value">${i.name}</span><i class="bi bi-chevron-right m-list-chevron"></i></div>`:""}
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
    </div>`}function Oe(t,i="donnees"){var y;const e=t.parcelId?B.find(m=>m.id===t.parcelId):null;let a=i,r="7d",n="1h",s=!1;const o=e&&((y=J.find(m=>m.id===e.orgId))==null?void 0:y.ville)||"",d=xe(`
    <div class="m-detail-header">
      <div class="m-detail-topbar">
        <button class="m-detail-back"><i class="bi bi-chevron-left"></i><span>Capteurs</span></button>
        <button class="m-detail-plus" id="d-plus"><i class="bi bi-plus"></i></button>
      </div>
      <div class="m-detail-identity">
        <button class="m-detail-star" id="d-star"><i class="bi bi-star"></i></button>
        <div class="m-detail-title-block">
          <div class="m-detail-title">${t.serial}</div>
          <div class="m-detail-subtitle">${[Ct[t.model]||t.model,o].filter(Boolean).join(" · ")}</div>
        </div>
      </div>
    </div>
    <div class="m-detail-tabs">
      <button class="m-detail-tab ${i==="donnees"?"active":""}" data-view="donnees">Données</button>
      <button class="m-detail-tab ${i==="params"?"active":""}" data-view="params">Paramètres</button>
    </div>
    <div id="detail-content" class="m-detail-content"></div>`);function c(){const m=d.querySelector("#detail-content");a==="donnees"&&(m.innerHTML=Fi(t,r,n)),a==="params"&&(m.innerHTML=Oi(t),l()),h()}function l(){const m=window.L;!m||!e||setTimeout(()=>{const b=d.querySelector("#sensor-minimap");if(!b)return;const x=m.map(b,{zoomControl:!1,attributionControl:!1,dragging:!1,scrollWheelZoom:!1});m.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(x),x.setView([e.lat,e.lng],15),m.circleMarker([e.lat,e.lng],{radius:9,color:"#fff",weight:2,fillColor:"#5b8dd9",fillOpacity:.9}).addTo(x)},50)}function h(){var m,b,x;(m=d.querySelector(".m-period-sel"))==null||m.addEventListener("change",C=>{r=C.target.value,c()}),(b=d.querySelector(".m-step-sel"))==null||b.addEventListener("change",C=>{n=C.target.value,c()}),(x=d.querySelector(".m-export-btn"))==null||x.addEventListener("click",()=>Bi(t,r)),d.querySelectorAll(".m-chart-svg-wrap").forEach(C=>_i(C)),d.querySelectorAll(".m-list-row[data-action]").forEach(C=>{C.addEventListener("click",()=>R("Fonctionnalité à venir"))})}d.querySelectorAll(".m-detail-tab").forEach(m=>{m.addEventListener("click",()=>{d.querySelectorAll(".m-detail-tab").forEach(b=>b.classList.remove("active")),m.classList.add("active"),a=m.dataset.view,c()})}),d.querySelector(".m-detail-back").addEventListener("click",ce),d.querySelector("#d-star").addEventListener("click",()=>{s=!s;const m=d.querySelector("#d-star");m.querySelector("i").className=s?"bi bi-star-fill":"bi bi-star",m.style.color=s?"#f5c842":"",R(s?"Ajouté aux favoris":"Retiré des favoris")}),d.querySelector("#d-plus").addEventListener("click",()=>{const m=`
      <button class="m-sheet-option" data-a="plot"><i class="bi bi-map"></i> Parcelle</button>
      <button class="m-sheet-option" data-a="alerte"><i class="bi bi-bell"></i> Alerte</button>
      <button class="m-sheet-option" data-a="maintenance"><i class="bi bi-tools"></i> Opération de maintenance</button>
      <button class="m-sheet-option" data-a="note"><i class="bi bi-pencil"></i> Note</button>
      <button class="m-sheet-option" data-a="traitement"><i class="bi bi-eyedropper"></i> Traitement</button>`,b=document.createElement("div");b.innerHTML=m;const x=Z({title:"Ajouter au capteur",body:b,doneLabel:"Fermer",onDone:()=>{}});b.querySelectorAll("[data-a]").forEach(C=>{C.addEventListener("click",()=>{x.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{x.remove(),R("Fonctionnalité à venir")},280)})})}),c()}const zi=Object.freeze(Object.defineProperty({__proto__:null,initSensorDetail:Oe},Symbol.toStringTag,{value:"Module"})),fe=100,ht=1,De=["P+","PT","P","SMV","TH","W","PYRANO","T_GEL"],Ni={"P+":"Station météo",PT:"Station météo",P:"Pluviomètre",SMV:"Station météo virtuelle",TH:"Thermo-hygromètre",T_MINI:"Thermomètre de sol",W:"Anémomètre",PYRANO:"Pyranomètre",PAR:"Capteur PAR",LWS:"Humectation foliaire",T_GEL:"Capteur gel","CHP-15/30":"Tensiomètre","CHP-30/60":"Tensiomètre","CHP-60/90":"Tensiomètre","CAPA-30-3":"Sonde capacitive","CAPA-60-6":"Sonde capacitive",EC:"Sonde fertirrigation"},Vi={"P+":["pluie","temp","hum"],PT:["pluie","temp"],P:["pluie"],SMV:["pluie","temp","hum"],TH:["temp","hum"],T_MINI:["temp_sol"],W:["vent"],PYRANO:["rayonnement"],PAR:["par"],LWS:["humectation"],T_GEL:["temp_sche","temp_hum"],"CHP-15/30":["pothydr","temp_sol"],"CHP-30/60":["pothydr","temp_sol"],"CHP-60/90":["pothydr","temp_sol"],"CAPA-30-3":["teneur","temp_sol"],"CAPA-60-6":["teneur","temp_sol"],EC:["teneur","temp_sol"]};function Ee(t,i){return(Vi[t]||[]).includes(i)}function Wi(t){return Ni[t]||t}const Ae=[{id:"pluie",label:"Pluie",unit:"mm",aggs:["Aujourd'hui","Hier","7 jours","30 jours","1 an"],defaultAgg:"7 jours"},{id:"temp",label:"Température",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"hum",label:"Humidité",unit:"%",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours","Moy. 30 jours"],defaultAgg:"Actuel"},{id:"pothydr",label:"Potentiel hydrique",unit:"kPa",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"teneur",label:"Teneur en eau du sol",unit:"%vol",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sol",label:"Température du sol",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_sche",label:"Température sèche",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"temp_hum",label:"Température humide",unit:"°C",aggs:["Actuel","Min du jour","Max du jour","Moy. 7 jours"],defaultAgg:"Actuel"},{id:"rayonnement",label:"Rayonnement solaire",unit:"W/m²",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"par",label:"Rayonnement PAR",unit:"µmol/m²/s",aggs:["Actuel","Journalier"],defaultAgg:"Actuel"},{id:"vent",label:"Vent",unit:"km/h",aggs:["Actuel","Moyen du jour","Rafales"],defaultAgg:"Actuel"},{id:"humectation",label:"Humectation foliaire",unit:"%",aggs:["Actuel","Heures du jour"],defaultAgg:"Actuel"}];function Gi(t){switch(t){case"pluie":return+(Math.random()*50).toFixed(1);case"temp":return+(8+Math.random()*22).toFixed(1);case"hum":return Math.round(40+Math.random()*55);case"pothydr":return Math.round(10+Math.random()*180);case"teneur":return+(10+Math.random()*35).toFixed(1);case"temp_sol":return+(5+Math.random()*20).toFixed(1);case"temp_sche":return+(8+Math.random()*20).toFixed(1);case"temp_hum":return+(4+Math.random()*18).toFixed(1);case"rayonnement":return Math.round(Math.random()*900);case"par":return Math.round(Math.random()*1800);case"vent":return+(Math.random()*40).toFixed(1);case"humectation":return Math.round(Math.random()*100);default:return+(Math.random()*100).toFixed(1)}}function Ji(t,i){let e=t.querySelector("#capteurs-content");e||(e=document.createElement("div"),e.id="capteurs-content",t.appendChild(e));const a=i==="admin",r=J.filter(f=>f.id!==fe),n=Object.fromEntries(B.map(f=>[f.id,f])),s=Object.fromEntries(J.map(f=>[f.id,f]));let o=null,d=null;const c={};let l="carte",h="pluie",y="7 derniers jours",m="all";function b(f){const v=`${f}-${h}-${y}`;return v in c||(c[v]=Gi(h)),c[v]}function x(){if(a){if(m==="all")return z;if(m===String(fe)){const g=new Set(B.filter(w=>w.orgId===fe).map(w=>w.id));return z.filter(w=>g.has(w.parcelId))}const u=new Set(B.filter(g=>String(g.orgId)===m).map(g=>g.id));return z.filter(g=>u.has(g.parcelId))}const f=new Set(B.filter(u=>u.orgId===ht).map(u=>u.id)),v=z.filter(u=>f.has(u.parcelId)),p=z.filter(u=>!f.has(u.parcelId)&&De.includes(u.model));return m==="mine"?v:m==="network"?p:[...v,...p]}function C(f){const v=f.parcelId?n[f.parcelId]:null;if(!v)return null;const p=(f.id*7919%1e3-500)/1e6,u=(f.id*6271%1e3-500)/1e6;return{lat:v.lat+p,lng:v.lng+u,name:v.name}}function E(f){var p;const v=f.parcelId?n[f.parcelId]:null;return v&&((p=s[v.orgId])==null?void 0:p.ville)||null}function O(){if(o){try{o.remove()}catch{}o=null,d=null}}function I(){O();const f=Ae.find(w=>w.id===h)||Ae[0],v=x();let p;if(a)p=`
        <select class="m-filter-select" id="org-filter">
          <option value="all">Toutes les organisations</option>
          <option value="${fe}"${m===String(fe)?" selected":""}>Breiz'Agri Conseil (réseau)</option>
          ${r.map(w=>`<option value="${w.id}"${m===String(w.id)?" selected":""}>${w.name}</option>`).join("")}
        </select>`;else{const w=J.find(L=>L.id===ht),$=J.find(L=>L.id===fe);p=`
        <select class="m-filter-select" id="org-filter">
          <option value="all"${m==="all"?" selected":""}>Tout le réseau</option>
          <option value="mine"${m==="mine"?" selected":""}>${(w==null?void 0:w.name)||"Mon organisation"}</option>
          <option value="network"${m==="network"?" selected":""}>${($==null?void 0:$.name)||"Breiz'Agri Conseil"}</option>
        </select>`}const u=[...v].sort((w,$)=>{const L=Ee(w.model,h),q=Ee($.model,h);return L&&!q?-1:!L&&q?1:L?b($.id)-b(w.id):0}),g=u.length?`<div class="m-plain-list">${u.map(w=>{const $=De.includes(w.model),q=Ee(w.model,h)?`<span class="m-sensor-val">${b(w.id)} ${f.unit}</span>`:'<span class="m-sensor-val m-sensor-val--na">—</span>';return`
            <div class="m-sensor-row m-tappable" data-sensor-id="${w.id}">
              <div class="m-sensor-icon" style="background:${$?"#0172A420":"#5b8dd920"};color:${$?"#0172A4":"#5b8dd9"}">
                <i class="bi bi-broadcast"></i>
              </div>
              <div class="m-sensor-info">
                <span class="m-sensor-name">${Wi(w.model)}</span>
                <span class="m-sensor-sub">${w.serial}${E(w)?` · ${E(w)}`:""}</span>
              </div>
              ${q}
            </div>`}).join("")}</div>`:'<div class="m-empty-state"><i class="bi bi-broadcast"></i><p>Aucun capteur</p></div>';e.innerHTML=`
      <div class="m-screen-controls">
        <div class="m-view-toggle">
          <button class="m-view-btn${l==="carte"?" m-view-btn--on":""}" data-view="carte">
            <i class="bi bi-map"></i> Carte
          </button>
          <button class="m-view-btn${l==="liste"?" m-view-btn--on":""}" data-view="liste">
            <i class="bi bi-list-ul"></i> Liste
          </button>
        </div>
        <div class="m-filter-row">
          <select class="m-filter-select" id="metric-sel">
            ${Ae.map(w=>`<option value="${w.id}"${w.id===h?" selected":""}>${w.label}</option>`).join("")}
          </select>
          <select class="m-filter-select" id="agg-sel">
            ${f.aggs.map(w=>`<option${w===y?" selected":""}>${w}</option>`).join("")}
          </select>
        </div>
        ${p}
      </div>
      ${l==="carte"?'<div class="m-map-view"><div id="sensor-map" class="m-map-container"></div></div>':`<div class="m-list-view">${g}</div>`}`,T(),l==="carte"&&S(v,f)}function S(f,v){const p=window.L;p&&setTimeout(()=>{const u=e.querySelector("#sensor-map");if(!u)return;o=p.map(u,{zoomControl:!1,attributionControl:!1}),p.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(o);const g=[];f.forEach(w=>{const $=C(w);if(!$)return;const L=Ee(w.model,h),q=De.includes(w.model),N=p.circleMarker([$.lat,$.lng],{radius:L?10:7,color:"#fff",weight:2,fillColor:q?"#0172A4":"#5b8dd9",fillOpacity:L?.95:.45}).addTo(o);L&&N.bindTooltip(`${b(w.id)} ${v.unit}`,{permanent:!0,direction:"top",className:"m-map-tip",interactive:!0}),N.on("click",()=>Oe(w)),g.push([$.lat,$.lng])}),g.length&&(d=g,o.fitBounds(g,{padding:[32,32]})),o.invalidateSize()},0)}window.addEventListener("m-tab-change",f=>{f.detail==="capteurs"&&l==="carte"&&o&&setTimeout(()=>{o.invalidateSize(),d!=null&&d.length&&o.fitBounds(d,{padding:[32,32]})},50)});function T(){var f,v,p;e.querySelectorAll(".m-view-btn").forEach(u=>u.addEventListener("click",()=>{l=u.dataset.view,I()})),(f=e.querySelector("#metric-sel"))==null||f.addEventListener("change",u=>{var g;h=u.target.value,y=((g=Ae.find(w=>w.id===h))==null?void 0:g.defaultAgg)||"",I()}),(v=e.querySelector("#agg-sel"))==null||v.addEventListener("change",u=>{y=u.target.value,I()}),(p=e.querySelector("#org-filter"))==null||p.addEventListener("change",u=>{m=u.target.value,I()}),e.querySelectorAll(".m-tappable[data-sensor-id]").forEach(u=>{u.addEventListener("click",()=>{const g=z.find(w=>w.id===+u.dataset.sensorId);g&&Oe(g)})})}I()}const Re=100,ft=1,Ui=["Arboriculture","Viticulture","Maraîchage","Grandes cultures","Polyculture-Élevage","Pépiniériste","Floriculture","Trufficulture","Organismes publics / semi-publics","Coopérative","Négoce","Concessionnaire","Semencier","Laboratoire / Institut / Recherche","Autre"],Zi=["Essentiel","Plus","Expert"],Yi=["Administrateur","Agent","Lecteur"];function Xi(t){const i=(t||"").match(/(\d{5})/);if(i){const e=t.indexOf(i[0]);return{rue:t.slice(0,e).trim().replace(/,\s*$/,""),cp:i[0],ville:t.slice(e+5).trim().replace(/^,?\s*/,"")}}return{rue:t||"",cp:"",ville:""}}function bt({rue:t,cp:i,ville:e}){return[t,i&&e?`${i} ${e}`:i||e].filter(Boolean).join(", ")}function Ki(t){const[i,e,a]=t.split("-");return`${a}/${e}/${i}`}function Qi(t,i){if(!t)return{};const e=i==="admin",a=J.find(v=>v.id===(e?Re:ft));if(!a)return{};const n=(e?Ie.filter(v=>{var p;return!((p=v.orgIds)!=null&&p.length)||v.orgIds.includes(Re)}):Ie.filter(v=>{var p;return(p=v.orgIds)==null?void 0:p.includes(ft)})).map(v=>({...v})),s=J.filter(v=>v.id!==Re&&v.statut!=="inactif").length,o=Xi(a.adresse||""),d={rue:"",cp:"",ville:""},c={name:a.name,metiers:[e?"Coopérative":"Grandes cultures"],adresseFactu:o,adresseLivrai:d,markerLat:a.lat||48.117,markerLng:a.lng||-1.678,plan:a.plan||"Plus",contrat:{numero:e?"CTR-NET-2022-00001":a.codeAdherent||"CTR-2022-00418",dateAdhesion:a.dateAdhesion||"2022-03-15",licencesMembres:e?Ie.length:3,licencesAdherents:e?s:null,licencesIntegrations:e?27:2}};let l=null,h=null,y=null;function m(){if(!y)return;const v=t.querySelector(`#${y}`);if(!v)return;if(l){try{l.remove()}catch{}l=null,h=null}const p=window.L;p&&(l=p.map(v,{zoomControl:!0,attributionControl:!1}),p.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(l),l.setView([c.markerLat,c.markerLng],14),h=p.marker([c.markerLat,c.markerLng],{draggable:!0}).addTo(l),h.on("dragend",()=>{const u=h.getLatLng();c.markerLat=u.lat,c.markerLng=u.lng,R("Position mise à jour")}),setTimeout(()=>l==null?void 0:l.invalidateSize(),50))}function b(){if(y=`expl-map-${Math.random().toString(36).slice(2,8)}`,l){try{l.remove()}catch{}l=null,h=null}const v=bt(c.adresseFactu)||"—",p=bt(c.adresseLivrai);t.innerHTML=`
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
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${v}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
        <div class="m-list-row m-list-row--last" data-action="adresse-livrai">
          <span class="m-list-row-label">Livraison</span>
          <span class="m-list-row-value" style="text-align:right;max-width:190px;font-size:12px">${p||'<em style="color:#8e8e93">Identique facturation</em>'}</span>
          <i class="bi bi-chevron-right m-list-chevron"></i>
        </div>
      </div>

      <div class="m-list-section-header">Localisation <span style="font-size:11px;font-weight:400;color:#8e8e93">— déplacer le marqueur pour modifier</span></div>
      <div id="${y}" style="height:200px;margin:0 16px 12px;border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,.08);position:relative;z-index:0"></div>

      <div class="m-list-section-header">Contrat</div>
      <div class="m-list">
        <div class="m-list-row">
          <span class="m-list-row-label">N° contrat</span>
          <span class="m-list-row-value" style="font-family:monospace;font-size:11px">${c.contrat.numero}</span>
        </div>
        <div class="m-list-row">
          <span class="m-list-row-label">Date d'adhésion</span>
          <span class="m-list-row-value">${Ki(c.contrat.dateAdhesion)}</span>
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

      <div class="m-list-section-header">Membres (${n.length})</div>
      <div class="m-list">
        ${n.length?n.map((u,g)=>`
          <div class="m-list-row${g===n.length-1?" m-list-row--last":""} m-tappable" data-member-idx="${g}">
            <div class="m-list-row-col">
              <span class="m-list-row-label">${u.prenom} ${u.nom}</span>
              <span class="m-list-row-sub">${u.role}</span>
            </div>
            <i class="bi bi-chevron-right m-list-chevron"></i>
          </div>`).join(""):'<div class="m-list-row m-list-row--last"><span class="m-list-row-label" style="color:#8e8e93">Aucun membre</span></div>'}
      </div>
      <div style="height:32px"></div>`,x()}function x(){t.querySelectorAll(".m-list-row[data-action]").forEach(v=>{v.addEventListener("click",()=>{switch(v.dataset.action){case"name":C("Nom de l'exploitation",c.name,p=>{c.name=p,b()});break;case"metier":O();break;case"adresse-factu":E("Adresse de facturation",c.adresseFactu,p=>{c.adresseFactu=p,b()});break;case"adresse-livrai":E("Adresse de livraison",c.adresseLivrai,p=>{c.adresseLivrai=p,b()});break;case"plan":I("Abonnement",Zi,c.plan,p=>{c.plan=p,b()});break}})}),t.querySelectorAll("[data-member-idx]").forEach(v=>{v.addEventListener("click",()=>S(+v.dataset.memberIdx))})}function C(v,p,u){const g=document.createElement("div");g.innerHTML=`<input class="m-sheet-input" type="text" value="${(p||"").replace(/"/g,"&quot;")}" placeholder="${v}">`;const w=g.querySelector("input");Z({title:v,body:g,doneLabel:"Enregistrer",onDone:()=>{const $=w.value.trim();$&&(u($),R("Enregistré"))}}),setTimeout(()=>w.focus(),300)}function E(v,p,u){const g=document.createElement("div");g.innerHTML=`
      <input class="m-sheet-input" type="text" placeholder="Numéro et rue" id="f-rue" value="${(p.rue||"").replace(/"/g,"&quot;")}">
      <input class="m-sheet-input" type="text" placeholder="Code postal" id="f-cp" value="${p.cp||""}">
      <input class="m-sheet-input" type="text" placeholder="Ville" id="f-ville" value="${(p.ville||"").replace(/"/g,"&quot;")}">`,Z({title:v,body:g,doneLabel:"Enregistrer",onDone:()=>{u({rue:g.querySelector("#f-rue").value.trim(),cp:g.querySelector("#f-cp").value.trim(),ville:g.querySelector("#f-ville").value.trim()}),R("Enregistré")}}),setTimeout(()=>g.querySelector("#f-rue").focus(),300)}function O(){const v=new Set(c.metiers),p=document.createElement("div"),u=()=>{p.innerHTML=Ui.map(g=>`
        <div class="m-sheet-option${v.has(g)?" m-sheet-option--active":""}" data-m="${g}" style="justify-content:space-between">
          <span>${g}</span>
          ${v.has(g)?'<i class="bi bi-check-circle-fill" style="color:#007aff;font-size:16px"></i>':'<i class="bi bi-circle" style="color:#c7c7cc;font-size:16px"></i>'}
        </div>`).join(""),p.querySelectorAll("[data-m]").forEach(g=>{g.addEventListener("click",()=>{const w=g.dataset.m;v.has(w)?v.delete(w):v.add(w),u()})})};u(),Z({title:"Métiers",body:p,doneLabel:"Valider",onDone:()=>{c.metiers=[...v],b()}})}function I(v,p,u,g){const w=document.createElement("div");w.innerHTML=p.map((L,q)=>`
      <div class="m-sheet-option${L===u?" m-sheet-option--active":""}" data-i="${q}">
        <span>${L}</span>${L===u?'<i class="bi bi-check" style="color:#007aff;font-size:18px"></i>':""}
      </div>`).join("");const $=Z({title:v,body:w,doneLabel:"Fermer",onDone:()=>{}});w.querySelectorAll(".m-sheet-option").forEach(L=>{L.addEventListener("click",()=>{g(p[+L.dataset.i]),$.classList.remove("m-sheet-overlay--show"),setTimeout(()=>$.remove(),280),R("Enregistré")})})}function S(v){const p=n[v];if(!p)return;const u=document.createElement("div");u.innerHTML=`
      <div class="m-sheet-links">
        <a class="m-sheet-link" id="mem-delete" style="color:#ff3b30">Supprimer ${p.prenom} ${p.nom}</a>
      </div>`;const g=Z({title:`${p.prenom} ${p.nom}`,body:u,doneLabel:"Fermer",onDone:()=>{}});u.querySelector("#mem-delete").addEventListener("click",()=>{n.splice(v,1),g.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{g.remove(),b()},280),R("Membre retiré")})}function T(){const v=document.createElement("div");v.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Adresse email" id="inv-email">
      <input class="m-sheet-input" type="text" placeholder="Prénom Nom" id="inv-name">
      <select class="m-sheet-input" id="inv-role">
        ${Yi.map(p=>`<option>${p}</option>`).join("")}
      </select>`,Z({title:"Inviter un membre",body:v,doneLabel:"Envoyer",onDone:()=>R("Invitation envoyée")}),setTimeout(()=>v.querySelector("#inv-email").focus(),300)}b();function f(){requestAnimationFrame(()=>setTimeout(m,100))}return{onAdd:T,refresh:f}}const es=100,ts=["Essentiel","Plus","Expert"],is={actif:{label:"Actif",color:"#30d158"},"actif en essai":{label:"Essai",color:"#ff9f0a"},"invitation en attente":{label:"Invité",color:"#007aff"},"demande en attente":{label:"En attente",color:"#ff9f0a"},inactif:{label:"Inactif",color:"#8e8e93"}};function gt(t){return is[t]||{label:t||"—",color:"#8e8e93"}}function ss(t,i){if(!t)return{};if(i!=="admin")return t.innerHTML='<div class="m-empty-state" style="margin-top:40px"><i class="bi bi-lock"></i><p>Réservé aux administrateurs réseau</p></div>',{};const e=J.filter(s=>s.id!==es).map(s=>({...s}));function a(){const s=e.filter(o=>o.statut!=="inactif");t.innerHTML=`
      <div class="m-list-section-header" style="margin-top:16px">Adhérents — ${s.length} actifs sur ${e.length}</div>
      <div class="m-list">
        ${e.map((o,d)=>{const c=gt(o.statut);return`
            <div class="m-list-row${d===e.length-1?" m-list-row--last":""} m-tappable" data-org-idx="${d}">
              <div class="m-list-row-col">
                <span class="m-list-row-label">${o.proprietaire||o.name}</span>
                <span class="m-list-row-sub">${o.name} · ${o.plan||"—"}</span>
              </div>
              <span style="font-size:11px;font-weight:600;color:${c.color};flex-shrink:0;margin-right:4px">${c.label}</span>
              <i class="bi bi-chevron-right m-list-chevron"></i>
            </div>`}).join("")}
      </div>
      <div style="height:32px"></div>`,t.querySelectorAll("[data-org-idx]").forEach(o=>{o.addEventListener("click",()=>r(e[+o.dataset.orgIdx],+o.dataset.orgIdx))})}function r(s,o){var m,b;const d=gt(s.statut),c=s.statut==="invitation en attente",l=`https://app.weenat.com/invitation?code=${s.codeAdherent||"ADZ-XXX"}`,h=document.createElement("div");h.innerHTML=`
      <div class="m-sheet-info-rows">
        <div class="m-sheet-info-row"><span>Email</span><span>${s.email||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Code adhérent</span><span style="font-family:monospace;font-size:12px">${s.codeAdherent||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Abonnement</span><span>${s.plan||"—"}</span></div>
        <div class="m-sheet-info-row"><span>Membres</span><span>${s.nbMembres??"—"}</span></div>
        <div class="m-sheet-info-row"><span>Parcelles</span><span>${B.filter(x=>x.orgId===s.id).length}</span></div>
        <div class="m-sheet-info-row"><span>Capteurs</span><span>${(()=>{const x=new Set(B.filter(C=>C.orgId===s.id).map(C=>C.id));return z.filter(C=>x.has(C.parcelId)).length})()} </span></div>
        <div class="m-sheet-info-row"><span>Statut</span><span style="color:${d.color};font-weight:600">${d.label}</span></div>
        <div class="m-sheet-info-row"><span>Date d'adhésion</span><span>${s.dateAdhesion?s.dateAdhesion.split("-").reverse().join("/"):"—"}</span></div>
      </div>
      <div class="m-sheet-links" style="margin-top:12px">
        ${c?`
          <a class="m-sheet-link" id="lnk-copy"><i class="bi bi-link-45deg"></i> Copier le lien d'invitation</a>
          <a class="m-sheet-link" id="lnk-cancel" style="color:#ff9f0a"><i class="bi bi-x-circle"></i> Annuler l'invitation</a>`:""}
        <a class="m-sheet-link m-sheet-link--danger" id="lnk-delete"><i class="bi bi-trash"></i> Supprimer l'adhérent</a>
      </div>`;const y=Z({title:s.name,body:h,doneLabel:"Fermer",onDone:()=>{}});(m=h.querySelector("#lnk-copy"))==null||m.addEventListener("click",()=>{var x;(x=navigator.clipboard)==null||x.writeText(l).catch(()=>{}),R("Lien copié !")}),(b=h.querySelector("#lnk-cancel"))==null||b.addEventListener("click",()=>{s.statut="inactif",y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{y.remove(),a(),R("Invitation annulée")},280)}),h.querySelector("#lnk-delete").addEventListener("click",()=>{e.splice(o,1),y.classList.remove("m-sheet-overlay--show"),setTimeout(()=>{y.remove(),a(),R("Adhérent supprimé")},280)})}function n(){const s=document.createElement("div");s.innerHTML=`
      <input class="m-sheet-input" type="email" placeholder="Email de l'adhérent" id="adh-email">
      <input class="m-sheet-input" type="text" placeholder="Code adhérent (ex: ADZ-021-2026)" id="adh-code">
      <select class="m-sheet-input" id="adh-plan">
        ${ts.map(o=>`<option>${o}</option>`).join("")}
      </select>`,Z({title:"Inviter un adhérent",body:s,doneLabel:"Envoyer",onDone:()=>{const o=s.querySelector("#adh-email").value.trim(),d=s.querySelector("#adh-code").value.trim();if(!o||!d){R("Email et code requis");return}e.push({id:Date.now(),name:o,proprietaire:o,email:o,codeAdherent:d,plan:s.querySelector("#adh-plan").value,statut:"invitation en attente",nbMembres:0}),a(),R("Invitation envoyée")}}),setTimeout(()=>s.querySelector("#adh-email").focus(),300)}return a(),{onAdd:n}}const as=new URLSearchParams(window.location.search),Q=as.get("role")==="adherent"?"adherent":"admin";function Lt(){const t=document.getElementById("status-time");if(!t)return;const i=new Date;t.textContent=i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}Lt();setInterval(Lt,1e4);const le=["dashboard","parcelles","capteurs","alertes","parametres"];let ke="dashboard";function pe(t){var i,e;!le.includes(t)||t===ke||(ke=t,document.querySelectorAll(".m-screen").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),(i=document.getElementById(`screen-${t}`))==null||i.classList.add("active"),(e=document.querySelector(`.nav-item[data-tab="${t}"]`))==null||e.classList.add("active"),window.dispatchEvent(new CustomEvent("m-tab-change",{detail:t})))}function ns(t){var e;(e=document.getElementById("abandon-modal"))==null||e.remove();const i=document.createElement("div");i.id="abandon-modal",i.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",i.innerHTML=`
    <div style="background:#fff;border-radius:16px 16px 0 0;padding:20px 16px 32px;width:100%">
      <div style="font-size:17px;font-weight:700;margin-bottom:8px">Quitter la saisie ?</div>
      <div style="font-size:14px;color:#636366;margin-bottom:20px">Les modifications en cours seront perdues.</div>
      <button id="abandon-ok" style="width:100%;padding:14px;background:#ff3b30;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:inherit;margin-bottom:8px;cursor:pointer">Quitter sans enregistrer</button>
      <button id="abandon-cancel" style="width:100%;padding:14px;background:#f2f2f7;color:#1c1c1e;border:none;border-radius:12px;font-size:15px;font-family:inherit;cursor:pointer">Annuler</button>
    </div>`,document.getElementById("phone-screen").appendChild(i),i.querySelector("#abandon-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#abandon-ok").addEventListener("click",()=>{i.remove(),t()})}document.getElementById("phone-screen").addEventListener("click",t=>{var i;t.target.closest(".m-navbar-logo")&&((i=document.querySelector('.nav-item[data-tab="dashboard"]'))==null||i.click())});document.getElementById("bottom-nav").addEventListener("click",t=>{const i=t.target.closest(".nav-item");if(!i)return;const e=i.dataset.tab;Ke()>0&&kt()?ns(()=>{window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})),pe(e)}):(Ke()>0&&window.dispatchEvent(new CustomEvent("m-tab-change",{detail:e})),pe(e))});let X=null,Ce=null;const Mt=50,Se=document.getElementById("screen-stack");Se.addEventListener("mousedown",t=>{if(t.target.closest(".leaflet-container")){X=null;return}X=t.clientX,Ce=t.clientY});Se.addEventListener("mouseup",t=>{if(X===null)return;const i=t.clientX-X,e=t.clientY-Ce;if(Math.abs(i)>Mt&&Math.abs(i)>Math.abs(e)){const a=le.indexOf(ke);i<0&&a<le.length-1&&pe(le[a+1]),i>0&&a>0&&pe(le[a-1])}X=null,Ce=null});Se.addEventListener("mouseleave",()=>{X=null});Se.addEventListener("touchstart",t=>{if(t.target.closest(".leaflet-container")){X=null;return}X=t.touches[0].clientX,Ce=t.touches[0].clientY},{passive:!0});Se.addEventListener("touchend",t=>{if(X===null)return;const i=t.changedTouches[0].clientX-X,e=t.changedTouches[0].clientY-Ce;if(Math.abs(i)>Mt&&Math.abs(i)>Math.abs(e)){const a=le.indexOf(ke);i<0&&a<le.length-1&&pe(le[a+1]),i>0&&a>0&&pe(le[a-1])}X=null},{passive:!0});const ls=[{id:"param-compte",label:"Mon compte"},{id:"param-exploitation",label:"Mon exploitation"},...Q==="admin"?[{id:"param-reseau",label:"Mon réseau"}]:[]],Pe={};function os(t){const i=document.getElementById("param-plus-btn"),e=document.getElementById("param-plus-spacer"),a=Pe[t];i&&e&&(a!=null&&a.onAdd?(i.style.display="",e.style.display="none",i.onclick=a.onAdd):(i.style.display="none",e.style.display=""))}function rs(){var i;const t=document.getElementById("param-segment");t&&(Q==="adherent"&&((i=document.getElementById("param-reseau"))==null||i.style.setProperty("display","none")),ls.forEach((e,a)=>{const r=document.createElement("button");r.className="m-segment-btn"+(a===0?" active":""),r.textContent=e.label,r.dataset.target=e.id,r.addEventListener("click",()=>{var n,s,o;t.querySelectorAll(".m-segment-btn").forEach(d=>d.classList.remove("active")),r.classList.add("active"),document.querySelectorAll(".m-subscreen").forEach(d=>d.classList.remove("active")),(n=document.getElementById(e.id))==null||n.classList.add("active"),os(e.id),(o=(s=Pe[e.id])==null?void 0:s.refresh)==null||o.call(s)}),t.appendChild(r)}))}rs();fi(document.getElementById("screen-dashboard"),Q);Ii(document.getElementById("screen-parcelles"),Q);Ji(document.getElementById("screen-capteurs"),Q);Ot(document.getElementById("screen-alertes"),Q);_t(document.getElementById("param-compte"),Q);Pe["param-exploitation"]=Qi(document.getElementById("param-exploitation"),Q);Pe["param-reseau"]=ss(document.getElementById("param-reseau"),Q);function cs(){var a;const t=Q==="admin",i=document.getElementById("phone-screen");(a=document.getElementById("m-add-modal"))==null||a.remove();const e=document.createElement("div");e.id="m-add-modal",e.style.cssText="position:absolute;inset:0;background:rgba(0,0,0,.45);z-index:3000;display:flex;align-items:flex-end",e.innerHTML=`
    <div style="background:#f2f2f7;border-radius:16px 16px 0 0;width:100%;padding-bottom:24px;max-height:88%">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 0">
        <span style="font-size:17px;font-weight:700">Ajouter</span>
        <button id="m-add-close" style="width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.07);border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>
      </div>
      <div style="overflow-y:auto;padding:12px 16px 0">
        <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
          <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon exploitation</div>
          ${[{action:"parcelle",icon:"bi-geo-alt-fill",label:"Parcelle"},{action:"capteur",icon:"bi-broadcast",label:"Capteur"},{action:"station",icon:"bi-cloud-sun-fill",label:"Station météo virtuelle"},{action:"membre",icon:"bi-person-plus-fill",label:"Membre"},{action:"irrigation",icon:"bi-droplet-fill",label:"Irrigation"},{action:"strategie-irrigation",icon:"bi-arrow-repeat",label:"Saison d'irr."},{action:"voir-irrigations",icon:"bi-calendar3",label:"Voir les irrigations"},{action:"note",icon:"bi-pencil-square",label:"Note"},{action:"traitement",icon:"bi-eyedropper",label:"Traitement"}].map(r=>`
            <button class="m-add-row" data-action="${r.action}" style="display:flex;align-items:center;gap:12px;width:100%;padding:13px 14px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08)">
              <i class="bi ${r.icon}" style="color:#0172A4;width:20px;text-align:center"></i>
              <span>${r.label}</span>
            </button>`).join("")}
        </div>
        ${t?`
        <div style="background:#fff;border-radius:12px;margin-bottom:10px;overflow:hidden">
          <div style="padding:10px 14px 4px;font-size:12px;font-weight:600;color:#8e8e93;text-transform:uppercase;letter-spacing:.04em">Mon réseau</div>
          <button class="m-add-row" data-action="adherent" style="display:flex;align-items:center;gap:12px;width:100%;padding:13px 14px;border:none;background:none;font-size:16px;font-family:inherit;cursor:pointer;border-top:.5px solid rgba(0,0,0,.08)">
            <i class="bi bi-building" style="color:#0172A4;width:20px;text-align:center"></i>
            <span>Adhérent</span>
          </button>
        </div>`:""}
      </div>
    </div>`,e.addEventListener("click",r=>{r.target===e&&e.remove()}),e.querySelector("#m-add-close").addEventListener("click",()=>e.remove()),e.querySelectorAll(".m-add-row").forEach(r=>{r.addEventListener("click",()=>{var n;e.remove(),(r.dataset.action==="note"||r.dataset.action==="traitement")&&((n=window.openJournalModal)==null||n.call(window,r.dataset.action))})}),i.appendChild(e)}document.querySelectorAll(".m-navbar-action:not(#param-plus-btn)").forEach(t=>{t.addEventListener("click",cs)});export{ce as a,bs as c,xe as p};
