import"./main-6h3kY6nD.js";import{i as v}from"./integrations-BOxU0_7l.js";import{p as u}from"./plots-CEyFXpqF.js";import{s as g}from"./sensors-BafoiuOm.js";import{o as m}from"./orgs-b3kLTQ0f.js";import{u as p}from"./breadcrumb-CD3EeVEY.js";const b=new URLSearchParams(window.location.search),f=b.get("id");let e=v.find(i=>i.id===f);const y={maladie:"Maladie & ravageurs",irrigation:"Irrigation",fertilisation:"Fertilisation & traitements"},h={maladie:"var(--warn)",irrigation:"var(--pri)",fertilisation:"var(--ok)"},$={abelio:{cultures:"Grandes cultures (blé, maïs, colza)",pays:"France, Belgique",email:"contact@abelio.fr",siteWeb:"abelio.fr"},"criiam-sud":{cultures:"Vigne, maraîchage, arboriculture",pays:"France (bassin méditerranéen)",email:"contact@criiam-sud.fr",siteWeb:"criiam-sud.fr"},"cropwise-protector":{cultures:"Grandes cultures (blé, colza, pomme de terre)",pays:"France, Belgique, Suisse",email:"cropwise.support@syngenta.com",siteWeb:"cropwise.com"},decitrait:{cultures:"Vigne",pays:"France, Suisse, Espagne",email:"contact@decitrait.fr",siteWeb:"decitrait.fr",jetons:5},"irre-lis-mono":{cultures:"Toutes cultures (maïs, sorgho, pomme de terre…)",pays:"France",email:"irre-lis@arvalis.fr",siteWeb:"irre-lis.fr",jetons:4},"irre-lis-multi":{cultures:"Toutes cultures (rotation multi-parcelles)",pays:"France",email:"irre-lis@arvalis.fr",siteWeb:"irre-lis.fr",jetons:3},limacapt:{cultures:"Grandes cultures (colza, céréales)",pays:"France, Belgique",email:"contact@limacapt.fr",siteWeb:"limacapt.fr"},"arvalis-previlis-mileos":{cultures:"Céréales d'hiver, pomme de terre",pays:"France",email:"previlis@arvalis.fr",siteWeb:"arvalis.fr"},"movida-grapevision":{cultures:"Vigne",pays:"France, Espagne, Italie",email:"grapevision@movida.fr",siteWeb:"grapevision.com"},pixagri:{cultures:"Toutes cultures",pays:"France, Europe",email:"contact@pixagri.com",siteWeb:"pixagri.com"},rimpro:{cultures:"Vigne, fruits à pépins",pays:"France, Belgique, Suisse",email:"contact@rimpro.eu",siteWeb:"rimpro.eu"},semiloni:{cultures:"Oignon porte-graine",pays:"France",email:"semiloni@inrae.fr",siteWeb:"semiloni.fr"},vintel:{cultures:"Vigne",pays:"France",email:"contact@vintel.fr",siteWeb:"vintel.fr"},vitimeteo:{cultures:"Vigne",pays:"France, Suisse, Allemagne",email:"info@vitimeteo.de",siteWeb:"vitimeteo.de"},xarvio:{cultures:"Grandes cultures (blé, colza, maïs)",pays:"France, Belgique, Allemagne, Espagne",email:"xarvio.support@basf.com",siteWeb:"xarvio.com"}};document.addEventListener("DOMContentLoaded",()=>{if(!e){document.getElementById("integ-detail").innerHTML='<div style="padding:40px"><h1>Intégration non trouvée</h1><a href="integrations.html">← Retour aux intégrations</a></div>';return}p(e.name),E()});function E(){const i=h[e.type],l=y[e.type],t=$[e.id]||{},n=u.filter(s=>(s.integrations||[]).includes(e.name));document.getElementById("integ-detail").innerHTML=`
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
            <div class="integ-detail-logo-fallback" style="display:none;background:${i}22;color:${i}">
              ${W(e.name)}
            </div>
          </div>
          <div class="integ-detail-header-info">
            <h1 class="integ-detail-name">
              ${e.name}
              ${e.badge?`<span class="integ-card-variant">${e.badge}</span>`:""}
            </h1>
            <span class="integ-type-badge" style="background:${i}22;color:${i}">
              <i class="bi ${w(e.type)}"></i> ${l}
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
          <div class="integ-detail-section-title">Capteurs compatibles</div>
          <div class="integ-sensors-list">
            ${e.sensors.map(s=>`
              <div class="integ-sensor-pill">
                <i class="bi bi-broadcast"></i>
                <strong>${s}</strong>
              </div>
            `).join("")}
          </div>
        </div>

        ${n.length?`
        <div class="integ-detail-section">
          <div class="integ-detail-section-title">Parcelles connectées (${n.length})</div>
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
                ${n.map(s=>{const r=m.find(a=>a.id===s.orgId),c=(r==null?void 0:r.ville)||"—",d=g.filter(a=>a.parcelId===s.id),o=[...new Set(d.map(a=>a.model))].join(", ")||"—";return`<tr>
                    <td style="font-weight:500">${s.name}</td>
                    <td class="member-email">${c}</td>
                    <td class="num">${s.area} ha</td>
                    <td>${s.crop}</td>
                    <td>${s.irrigation}</td>
                    <td class="member-email">${o}</td>
                    <td class="num">${s.id}</td>
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
          <div class="integ-aside-value">${l}</div>
        </div>
        <div class="integ-aside-section">
          <div class="integ-aside-label">Capteurs requis</div>
          <div class="integ-aside-value">${e.sensors.join(", ")}</div>
        </div>
        <div class="integ-aside-section">
          <div class="integ-aside-label">Fréquence de sync.</div>
          <div class="integ-aside-value">Toutes les heures</div>
        </div>
        ${t.cultures?`
        <div class="integ-aside-section">
          <div class="integ-aside-label">Cultures couvertes</div>
          <div class="integ-aside-value">${t.cultures}</div>
        </div>`:""}
        ${t.pays?`
        <div class="integ-aside-section">
          <div class="integ-aside-label">Pays couverts</div>
          <div class="integ-aside-value">${t.pays}</div>
        </div>`:""}
        ${t.jetons!=null?`
        <div class="integ-aside-section">
          <div class="integ-aside-label">Jetons disponibles</div>
          <div class="integ-aside-value" style="font-size:20px;font-weight:600;color:var(--pri)">${t.jetons}</div>
        </div>`:""}
        ${t.email?`
        <div class="integ-aside-section">
          <div class="integ-aside-label">Email</div>
          <div class="integ-aside-value"><a href="mailto:${t.email}" style="color:var(--pri)">${t.email}</a></div>
        </div>`:""}
        ${t.siteWeb?`
        <div class="integ-aside-section">
          <div class="integ-aside-label">Site web</div>
          <div class="integ-aside-value"><a href="#" style="color:var(--pri)">${t.siteWeb}</a></div>
        </div>`:""}
        <div class="integ-aside-section">
          <div class="integ-aside-label">Aide</div>
          <div class="integ-aside-value">
            <a href="#" style="color:var(--pri)">Comment faire ?</a>
          </div>
        </div>
      </div>

    </div>
  `,document.getElementById("connect-btn").addEventListener("click",F)}function F(){e.connected=!e.connected;const i=document.getElementById("connect-btn");i.className=`integ-connect-btn${e.connected?" connected":""}`,i.innerHTML=e.connected?'<i class="bi bi-pause-circle-fill"></i> Désactiver':'<i class="bi bi-play-circle-fill"></i> Activer'}function W(i){return i.split(/[\s\-—]+/).slice(0,2).map(l=>l[0]).join("").toUpperCase().slice(0,2)}function w(i){return{maladie:"bi-bug",irrigation:"bi-droplet",fertilisation:"bi-flower1"}[i]||"bi-plug"}
