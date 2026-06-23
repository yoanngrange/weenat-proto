import{u as L}from"./breadcrumb-CzFWtd6d.js";import{p as d}from"./plots-DhtWL7s_.js";import{b as $}from"./store-CX9wca99.js";const o=[{id:"abelio",name:"Abelio",logo:"./logos/Integration-Abelio-squa.png",type:"fertilisation",description:"Optimisation de la fertilisation et du pilotage des cultures.",descriptionLong:"Connectez vos stations météo Weenat à Abelio pour optimiser la fertilisation et le pilotage de vos cultures grâce à des données météo précises et localisées.",sensors:["P+","PT","P"],connected:!1},{id:"criiam-sud",name:"Criiam Sud",logo:"./logos/Integration-CriiamSud-squa.png",type:"maladie",description:"Modèles agroMétéo et pilotage de l'irrigation pour le grand Sud.",descriptionLong:"Connectez votre station météo et votre capteur d'humectation foliaire Weenat aux modèles maladie du Criiam Sud pour des recommandations adaptées aux cultures du bassin méditerranéen.",sensors:["P+","PT","LWS"],connected:!1},{id:"cropwise-protector",name:"Cropwise Protector",logo:"./logos/Integration-CropwiseProtector-squa.png",type:"maladie",description:"Détection des risques maladies et ravageurs, optimisation des traitements.",descriptionLong:"Connectez votre station météo Weenat afin de détecter les risques maladies et ravageurs et d'optimiser vos traitements phytosanitaires grâce aux modèles Syngenta.",sensors:["P+","PT"],connected:!1},{id:"decitrait",name:"DeciTrait",logo:"./logos/Integration-Decitrait-squa.png",type:"maladie",description:"Évaluation du risque mildiou, oïdium et black-rot sur vigne.",descriptionLong:"Connectez votre station météo Weenat afin d'évaluer le risque de mildiou, d'oïdium et de black-rot et optimiser les traitements phytosanitaires sur vigne.",sensors:["P+","PT","LWS"],connected:!1},{id:"irre-lis-mono",name:"IRRÉ-LIS Mono-Culture",logo:"./logos/Integration-Irre-LIS-squa.png",type:"irrigation",description:"Bilan hydrique mono-culture pour l'optimisation de l'irrigation.",descriptionLong:"Connectez votre pluviomètre ou station météo Weenat afin d'obtenir un bilan hydrique dédié à l'optimisation du pilotage de l'irrigation (version mono-culture).",sensors:["P+","PT","P"],connected:!1},{id:"irre-lis-multi",name:"IRRÉ-LIS Multi-Cultures",logo:"./logos/Integration-Irre-LIS-squa.png",type:"irrigation",description:"Bilan hydrique multi-cultures pour l'optimisation de l'irrigation.",descriptionLong:"Connectez votre pluviomètre ou station météo Weenat afin d'obtenir un bilan hydrique dédié à l'optimisation du pilotage de l'irrigation (version multi-cultures).",sensors:["P+","PT","P"],connected:!1},{id:"limacapt",name:"Limacapt",logo:"./logos/Integration-Limacapt-squa.png",type:"maladie",description:"Estimation du risque d'attaques de limaces sur vos cultures.",descriptionLong:"Connectez votre station météo Weenat afin d'estimer les risques d'attaques de limaces sur vos cultures et déclencher les traitements au bon moment.",sensors:["P+","PT"],connected:!1},{id:"arvalis-previlis-mileos",name:"Modèles Arvalis — PRÉVI-LIS / MILÉOS",logo:"./logos/Integration-ModelesArvalis-squa.png",type:"maladie",description:"Modèles maladies céréales d'hiver et mildiou pomme de terre.",descriptionLong:"Connectez votre station météo Weenat aux modèles PRÉVI-LIS ou MILÉOS d'Arvalis afin d'optimiser la protection contre les maladies des céréales d'hiver ou le mildiou de la pomme de terre.",sensors:["P+","PT","LWS"],connected:!1},{id:"movida-grapevision",name:"Movida GrapeVision",logo:"./logos/Integration-Grapevision-squa.png",type:"maladie",description:"Détection des risques maladie et optimisation des traitements vigne.",descriptionLong:"Connectez votre station météo Weenat afin de détecter les risques maladie sur vigne et d'optimiser vos traitements phytosanitaires grâce à Movida GrapeVision.",sensors:["P+","PT"],connected:!1},{id:"pixagri",name:"Pixagri",logo:"./logos/Integration-PixagriIrrigation-squa.png",type:"irrigation",description:"Bilan hydrique agronomique couplé aux images satellitaires.",descriptionLong:"Connectez votre station météo Weenat à Pixagri afin d'obtenir un bilan hydrique basé sur modèle agronomique et images satellitaires pour un pilotage précis de l'irrigation.",sensors:["P+","PT","P"],connected:!1},{id:"rimpro",name:"Rimpro",logo:"./logos/Integration-Rimpro-squa.png",type:"maladie",description:"Estimation du risque maladie et ravageur, optimisation des traitements.",descriptionLong:"Connectez votre station météo et capteur d'humectation foliaire Weenat afin d'estimer le risque maladie / ravageur et d'optimiser les traitements phytosanitaires.",sensors:["P+","PT","LWS"],connected:!1},{id:"semiloni",name:"Semiloni",logo:"./logos/Integration-Semiloni-squa.png",type:"maladie",description:"Estimation du risque de mildiou de l'oignon porte-graine.",descriptionLong:"Connectez votre station météo Weenat afin d'estimer le risque de mildiou de l'oignon porte-graine et d'optimiser vos interventions de traitement.",sensors:["P+","PT"],connected:!1},{id:"vintel",name:"Vintel",logo:"./logos/Integration-Vintel-squa.png",type:"fertilisation",description:"Optimisation de la fertilisation et des traitements sur vigne.",descriptionLong:"Connectez vos stations météo Weenat à Vintel pour optimiser la fertilisation et les traitements sur vigne grâce à des données météo précises et localisées.",sensors:["P+","PT"],connected:!1},{id:"vitimeteo",name:"VitiMeteo",logo:"./logos/Integration-Vitimeteo-squa.png",type:"maladie",description:"Détection des risques maladies et ravageurs, recommandations viticoles.",descriptionLong:"Connectez votre station météo à VitiMeteo afin de détecter les risques maladies et ravageurs sur vigne et d'obtenir des recommandations de traitement adaptées.",sensors:["P+","PT","LWS"],connected:!1},{id:"xarvio",name:"Xarvio",logo:"./logos/Integration-Xarvio-squa.png",type:"fertilisation",description:"Pilotage des grandes cultures : traitements et fertilisation.",descriptionLong:"Connectez vos capteurs Weenat à Xarvio afin d'optimiser la conduite des grandes cultures : traitements phytosanitaires et fertilisation avec les outils BASF.",sensors:["P+","PT","P"],connected:!1}];$(d);const h={maladie:"var(--warn)",irrigation:"var(--pri)",fertilisation:"var(--ok)"},y=new Set(["irre-lis-multi","decitrait","limacapt"]);document.addEventListener("DOMContentLoaded",()=>{L();const t=(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau";C(t),P("",t),T()});function C(n=!1){const t=document.getElementById("integrations-stats");if(!t)return;const r=o.length,a={};if(o.forEach(e=>{a[e.id]=d.filter(p=>(p.integrations||[]).includes(e.name)).length}),n){const e=d.filter(s=>s.orgId===1),p=e.length,g={};o.forEach(s=>{g[s.id]=e.filter(v=>(v.integrations||[]).includes(s.name)).length});const I=o.filter(s=>y.has(s.id)).sort((s,v)=>g[v.id]-g[s.id]),b=Math.max(...I.map(s=>g[s.id]),1),q=I.map((s,v)=>`
      <div class="integ-top5-row">
        <span class="integ-top5-rank">${v+1}</span>
        <span class="integ-top5-name">${s.name}</span>
        <div class="integ-top5-bar">
          <div style="width:${Math.round(g[s.id]/b*100)}%;background:${h[s.type]||"var(--pri)"};height:100%;border-radius:3px"></div>
        </div>
        <span class="integ-top5-ratio">${g[s.id]} / ${p}</span>
      </div>
    `).join("");t.innerHTML=`
      <div class="integ-stats-2col">
        <div class="integ-stats-left">
          <div class="stat-card"><div class="stat-label">Mes intégrations actives</div><div class="stat-value">${y.size}</div></div>
          <div class="stat-card"><div class="stat-label">Intégrations disponibles</div><div class="stat-value">${r}</div></div>
        </div>
        <div class="integ-stats-right">
          <div class="integ-top5-title">Mes intégrations actives</div>
          ${q}
        </div>
      </div>
    `,t._plotCounts=g;return}d.filter(e=>e.orgId===1);const u=d.filter(e=>e.orgId!==1),i=o.filter(e=>e.connected).length,f=new Set(u.flatMap(e=>e.integrations||[])),m=o.filter(e=>f.has(e.name)).length,l=[...o].sort((e,p)=>a[p.id]-a[e.id]).filter(e=>a[e.id]>0).slice(0,5),c=l[0]?a[l[0].id]:1;t.innerHTML=`
    <div class="integ-stats-2col">
      <div class="integ-stats-left">
        <div class="stat-card"><div class="stat-label">Intégrations actives exploitation</div><div class="stat-value">${i}</div></div>
        <div class="stat-card"><div class="stat-label">Intégrations actives adhérents</div><div class="stat-value">${m}</div></div>
        <div class="stat-card"><div class="stat-label">Intégrations disponibles</div><div class="stat-value">${r}</div></div>
      </div>
      <div class="integ-stats-right">
        <div class="integ-top5-title">Top 5 utilisées (parcelles)</div>
        ${l.length?l.map((e,p)=>`
          <div class="integ-top5-row">
            <span class="integ-top5-rank">${p+1}</span>
            <span class="integ-top5-name">${e.name}</span>
            <div class="integ-top5-bar">
              <div style="width:${Math.round(a[e.id]/c*100)}%;background:${h[e.type]||"var(--pri)"};height:100%;border-radius:3px"></div>
            </div>
            <span class="integ-top5-ratio">${a[e.id]} / ${d.length}</span>
          </div>
        `).join(""):'<div style="color:var(--txt3);font-size:13px;padding:12px 0">Aucune parcelle avec intégration active.</div>'}
      </div>
    </div>
  `,t._plotCounts=a}function P(n="",t=!1){const r=document.getElementById("integrations-grid");r.innerHTML="";const a=n?o.filter(i=>i.type===n):o;if(a.length===0){r.innerHTML='<div class="empty-state">Aucune intégration pour ce filtre.</div>';return}const u=document.getElementById("integrations-stats");u!=null&&u._plotCounts,a.forEach(i=>{const f=t?y.has(i.id):i.connected,m=d.filter(e=>e.orgId===1&&(e.integrations||[]).includes(i.name)).length,l=d.filter(e=>e.orgId!==1&&(e.integrations||[]).includes(i.name)).length,c=document.createElement("div");c.className=`integration-card${f?" integ-card-active":""}`,c.style.cursor="pointer",c.innerHTML=`
      <div class="integ-card-logo-left">
        <img
          class="integ-card-logo-squa"
          src="${i.logo}"
          alt="${i.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <div class="integ-card-logo-fallback" style="display:none;background:${h[i.type]}22;color:${h[i.type]}">
          ${S(i.name)}
        </div>
      </div>
      <div class="integ-card-body">
        <div class="integ-card-name">
          ${i.name}
          ${i.badge?`<span class="integ-card-variant">${i.badge}</span>`:""}
          ${f?'<span class="integ-active-pill"><i class="bi bi-check-circle-fill"></i> Active</span>':""}
        </div>
        <p class="integ-card-desc">${i.description}</p>
        <div class="integ-card-badges">
          ${!t&&m>0?`<span class="integ-plot-badge integ-plot-org"><i class="bi bi-geo-alt"></i> Activée sur ${m} parcelle${m>1?"s":""} de mon exploitation</span>`:""}
          ${!t&&l>0?`<span class="integ-plot-badge integ-plot-adh"><i class="bi bi-people"></i> Activée sur ${l} parcelle${l>1?"s":""} de mon réseau</span>`:""}
        </div>
      </div>
    `,c.addEventListener("click",()=>{window.location.href=`integration-detail.html?id=${i.id}`}),r.appendChild(c)})}function S(n){return n.split(/[\s\-—]+/).slice(0,2).map(t=>t[0]).join("").toUpperCase().slice(0,2)}function T(){const n=(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau";document.querySelectorAll(".filter-pill").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".filter-pill").forEach(r=>r.classList.remove("active")),t.classList.add("active"),P(t.dataset.type||"",n)})})}export{o as i};
