import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{i as E}from"./integrations-ByqilJch.js";import{p as u}from"./plots-DhtWL7s_.js";import{s as y}from"./sensors-CRadjF8G.js";import{o as w}from"./orgs-DnFmvGlp.js";import{u as S}from"./breadcrumb-CzFWtd6d.js";import{b as I,c as h,d as $}from"./store-CX9wca99.js";I(u);const k=new URLSearchParams(window.location.search),F=k.get("id");let e=E.find(l=>l.id===F);const W={maladie:"Maladie & ravageurs",irrigation:"Irrigation",fertilisation:"Fertilisation & traitements"},j={maladie:"var(--warn)",irrigation:"var(--pri)",fertilisation:"var(--ok)"},A={abelio:{cultures:"Grandes cultures (blé, maïs, colza)",pays:"France, Belgique",email:"contact@abelio.fr",siteWeb:"abelio.fr"},"criiam-sud":{cultures:"Vigne, maraîchage, arboriculture",pays:"France (bassin méditerranéen)",email:"contact@criiam-sud.fr",siteWeb:"criiam-sud.fr"},"cropwise-protector":{cultures:"Grandes cultures (blé, colza, pomme de terre)",pays:"France, Belgique, Suisse",email:"cropwise.support@syngenta.com",siteWeb:"cropwise.com"},decitrait:{cultures:"Vigne",pays:"France, Suisse, Espagne",email:"contact@decitrait.fr",siteWeb:"decitrait.fr",jetons:5},"irre-lis-mono":{cultures:"Toutes cultures (maïs, sorgho, pomme de terre…)",pays:"France",email:"irre-lis@arvalis.fr",siteWeb:"irre-lis.fr",jetons:4},"irre-lis-multi":{cultures:"Toutes cultures (rotation multi-parcelles)",pays:"France",email:"irre-lis@arvalis.fr",siteWeb:"irre-lis.fr",jetons:3},limacapt:{cultures:"Grandes cultures (colza, céréales)",pays:"France, Belgique",email:"contact@limacapt.fr",siteWeb:"limacapt.fr"},"arvalis-previlis-mileos":{cultures:"Céréales d'hiver, pomme de terre",pays:"France",email:"previlis@arvalis.fr",siteWeb:"arvalis.fr"},"movida-grapevision":{cultures:"Vigne",pays:"France, Espagne, Italie",email:"grapevision@movida.fr",siteWeb:"grapevision.com"},pixagri:{cultures:"Toutes cultures",pays:"France, Europe",email:"contact@pixagri.com",siteWeb:"pixagri.com"},rimpro:{cultures:"Vigne, fruits à pépins",pays:"France, Belgique, Suisse",email:"contact@rimpro.eu",siteWeb:"rimpro.eu"},semiloni:{cultures:"Oignon porte-graine",pays:"France",email:"semiloni@inrae.fr",siteWeb:"semiloni.fr"},vintel:{cultures:"Vigne",pays:"France",email:"contact@vintel.fr",siteWeb:"vintel.fr"},vitimeteo:{cultures:"Vigne",pays:"France, Suisse, Allemagne",email:"info@vitimeteo.de",siteWeb:"vitimeteo.de"},xarvio:{cultures:"Grandes cultures (blé, colza, maïs)",pays:"France, Belgique, Allemagne, Espagne",email:"xarvio.support@basf.com",siteWeb:"xarvio.com"}};document.addEventListener("DOMContentLoaded",()=>{if(!e){document.getElementById("integ-detail").innerHTML='<div style="padding:40px"><h1>Intégration non trouvée</h1><a href="integrations.html">← Retour aux intégrations</a></div>';return}S(e.name),x()});function x(){const l=j[e.type],g=W[e.type],n=A[e.id]||{},p=localStorage.getItem("menuRole")==="adherent-reseau",t=u.filter(a=>{if(!(a.integrations||[]).includes(e.name)||p&&a.orgId!==1)return!1;const d=y.filter(i=>(i.parcelIds||[]).includes(a.id)).map(i=>i.model);return e.sensors.some(i=>d.includes(i))});document.getElementById("integ-detail").innerHTML=`
    <div class="integ-detail-layout">

      <div class="integ-detail-main">
        <a href="integrations.html" class="integ-back-link">
          <i class="bi bi-arrow-left"></i> Toutes les intégrations
        </a>

        <div class="integ-detail-header">
          <div class="integ-detail-logo-wrap">
            <img
              class="integ-detail-logo"
              src="${e.logo}"
              alt="${e.name}"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
            />
            <div class="integ-detail-logo-fallback" style="display:none;background:${l}22;color:${l}">
              ${P(e.name)}
            </div>
          </div>
          <div class="integ-detail-header-info">
            <h1 class="integ-detail-name">
              ${e.name}
              ${e.badge?`<span class="integ-card-variant">${e.badge}</span>`:""}
            </h1>
            <span class="integ-type-badge" style="background:${l}22;color:${l}">
              <i class="bi ${q(e.type)}"></i> ${g}
            </span>
          </div>
          <div class="integ-detail-cta">
            <button class="integ-connect-btn${e.connected?" connected":""}" id="connect-btn">
              ${e.connected?'<i class="bi bi-pause-circle-fill"></i> Désactiver':'<i class="bi bi-play-circle-fill"></i> Activer'}
            </button>
          </div>
        </div>

        <div class="integ-detail-description">
          <p>${e.descriptionLong}</p>
        </div>

        <div class="integ-detail-section">
          <div class="integ-detail-section-title">Capteurs requis</div>
          <div class="integ-sensors-list">
            ${e.sensors.map(a=>`
              <div class="integ-sensor-pill">
                <i class="bi bi-broadcast"></i>
                <strong>${a}</strong>
              </div>
            `).join("")}
          </div>
        </div>

        ${t.length?`
        <div class="integ-detail-section">
          <div class="integ-detail-section-title">Parcelles connectées (${t.length})</div>
          <div class="admin-table-wrap" style="margin-top:8px">
            <table class="admin-table" style="font-size:12px">
              <thead>
                <tr>
                  <th>Parcelle</th>
                  <th>Ville</th>
                  <th>Surface</th>
                  <th>Culture</th>
                  <th>Irrigation</th>
                  <th>Capteurs</th>
                  <th>ID parcelle</th>
                </tr>
              </thead>
              <tbody>
                ${t.map(a=>{const d=w.find(c=>c.id===a.orgId),i=(d==null?void 0:d.ville)||"—",v=y.filter(c=>(c.parcelIds||[]).includes(a.id)&&e.sensors.includes(c.model)),s=[...new Set(v.map(c=>c.model))].join(", ")||"—";return`<tr>
                    <td style="font-weight:500">${a.name}</td>
                    <td class="member-email">${i}</td>
                    <td class="num">${a.area} ha</td>
                    <td>${a.crop||"—"}</td>
                    <td>${a.irrigation||"—"}</td>
                    <td class="member-email">${s}</td>
                    <td class="num">${a.id}</td>
                  </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
        `:""}
      </div>

      <div class="integ-detail-aside">
        <div class="integ-aside-section">
          <div class="integ-aside-label">Catégorie</div>
          <div class="integ-aside-value">${g}</div>
        </div>
        <div class="integ-aside-section">
          <div class="integ-aside-label">Capteurs requis</div>
          <div class="integ-aside-value">${e.sensors.join(", ")}</div>
        </div>
        <div class="integ-aside-section">
          <div class="integ-aside-label">Fréquence de sync.</div>
          <div class="integ-aside-value">Toutes les heures</div>
        </div>
        ${n.cultures?`
        <div class="integ-aside-section">
          <div class="integ-aside-label">Cultures couvertes</div>
          <div class="integ-aside-value">${n.cultures}</div>
        </div>`:""}
        ${n.pays?`
        <div class="integ-aside-section">
          <div class="integ-aside-label">Pays couverts</div>
          <div class="integ-aside-value">${n.pays}</div>
        </div>`:""}
        ${n.jetons!=null?`
        <div class="integ-aside-section">
          <div class="integ-aside-label">Jetons disponibles</div>
          <div class="integ-aside-value" style="font-size:20px;font-weight:600;color:var(--pri)">${n.jetons}</div>
        </div>`:""}
        ${n.email?`
        <div class="integ-aside-section">
          <div class="integ-aside-label">Email</div>
          <div class="integ-aside-value"><a href="mailto:${n.email}" style="color:var(--pri)">${n.email}</a></div>
        </div>`:""}
        ${n.siteWeb?`
        <div class="integ-aside-section">
          <div class="integ-aside-label">Site web</div>
          <div class="integ-aside-value"><a href="#" style="color:var(--pri)">${n.siteWeb}</a></div>
        </div>`:""}
        <div class="integ-aside-section">
          <div class="integ-aside-label">Aide</div>
          <div class="integ-aside-value">
            <a href="#" style="color:var(--pri)">Comment activer ?</a>
          </div>
        </div>
      </div>

    </div>
  `,document.getElementById("connect-btn").addEventListener("click",()=>{if(e.connected){e.connected=!1;const a=document.getElementById("connect-btn");a.className="integ-connect-btn",a.innerHTML='<i class="bi bi-play-circle-fill"></i> Activer'}else L()})}function L(){const l=localStorage.getItem("menuRole")==="adherent-reseau",g=u.filter(i=>!l||i.orgId===1),n=[],p=[];g.forEach(i=>{const v=y.filter(r=>r.parcelId===i.id||(r.parcelIds||[]).includes(i.id)),s=[...new Set(v.map(r=>r.model))],c=e.sensors.some(r=>s.includes(r)),m=(i.integrations||[]).includes(e.name);(c?n:p).push({p:i,alreadyOn:m})});const t=document.createElement("div");t.className="modal add-modal",t.style.zIndex="9999";const a=n.map(({p:i,alreadyOn:v})=>`
    <label class="integ-activate-row">
      <input type="checkbox" class="integ-plot-cb" data-plot-id="${i.id}" ${v?"checked":""}>
      <span class="integ-activate-name">${i.name}</span>
      <span class="integ-activate-sub">${[i.crop,i.irrigation].filter(Boolean).join(" · ")||""}</span>
    </label>
  `).join(""),d=p.map(({p:i})=>`
    <label class="integ-activate-row integ-activate-row--disabled">
      <input type="checkbox" disabled>
      <span class="integ-activate-name">${i.name}</span>
      <span class="integ-activate-sub">${[i.crop,i.irrigation].filter(Boolean).join(" · ")||""}</span>
    </label>
  `).join("");t.innerHTML=`
    <div class="add-modal-content" style="max-width:480px">
      <div class="add-modal-header">
        <span class="add-modal-title">Activer ${e.name}</span>
        <button class="add-modal-close" aria-label="Fermer">×</button>
      </div>
      <div style="padding:0 20px 20px">
        <p style="margin:0 0 12px;font-size:12px;color:var(--txt2)">
          Capteurs requis : <strong>${e.sensors.join(", ")}</strong>
        </p>
        ${n.length?`
          <div class="integ-activate-section-label">Parcelles compatibles</div>
          <div class="integ-activate-list">${a}</div>
        `:'<p style="font-size:13px;color:var(--txt3);margin:0 0 12px">Aucune parcelle compatible trouvée.</p>'}
        ${p.length?`
          <div class="integ-activate-section-label" style="margin-top:12px">Parcelles incompatibles</div>
          <div class="integ-activate-list">${d}</div>
        `:""}
        <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px">
          <button class="btn-secondary activate-cancel">Annuler</button>
          <button class="btn-primary activate-ok">Activer</button>
        </div>
      </div>
    </div>
  `,t.querySelector(".add-modal-close").addEventListener("click",()=>t.remove()),t.querySelector(".activate-cancel").addEventListener("click",()=>t.remove()),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector(".activate-ok").addEventListener("click",()=>{const i=[...t.querySelectorAll(".integ-plot-cb:checked")].map(s=>parseInt(s.dataset.plotId)),v=[...t.querySelectorAll(".integ-plot-cb:not(:checked)")].map(s=>parseInt(s.dataset.plotId));i.forEach(s=>{var r;const m=h(s).integrations??(((r=u.find(o=>o.id===s))==null?void 0:r.integrations)||[]);if(!m.includes(e.name)){$(s,{integrations:[...m,e.name]});const o=u.find(b=>b.id===s);o&&(o.integrations=[...o.integrations||[],e.name])}}),v.forEach(s=>{var r;const m=h(s).integrations??(((r=u.find(o=>o.id===s))==null?void 0:r.integrations)||[]);if(m.includes(e.name)){const o=m.filter(f=>f!==e.name);$(s,{integrations:o});const b=u.find(f=>f.id===s);b&&(b.integrations=o)}}),e.connected=i.length>0,t.remove(),x()}),document.body.appendChild(t)}function P(l){return l.split(/[\s\-—]+/).slice(0,2).map(g=>g[0]).join("").toUpperCase().slice(0,2)}function q(l){return{maladie:"bi-bug",irrigation:"bi-droplet",fertilisation:"bi-flower1"}[l]||"bi-plug"}
