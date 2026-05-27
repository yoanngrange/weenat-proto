import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as u,R as U,b as ve,s as A}from"./irrigations-MeXOpmvP.js";import{p as J}from"./plots-urzhAbT6.js";import{o as me}from"./orgs-Cx4wNzLL.js";import{u as fe}from"./breadcrumb-DEBQjfiD.js";import"./irrigation-web-BzruHZYB.js";import"./store-DRCbE3kB.js";const ge=1,ae=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let z=null,M=ae?J:J.filter(e=>e.orgId===ge);const D=new Date().toISOString().split("T")[0];let R=null,H=0;function re(e,r){const t=new Date(e);return t.setDate(t.getDate()+r),t.toISOString().split("T")[0]}function W(e){const r=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,t,i]=e.split("-");return`${parseInt(i)} ${r[parseInt(t)-1]} ${e.split("-")[0]}`}function _(e){const r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,i]=e.split("-");return`${parseInt(i)} ${r[parseInt(t)-1]}`}function be(e){const[,r,t]=e.split("-");return`${t}/${r}`}function T(){return ve(M)}function Z(e){if(!e||e==="all")return null;const r=T().find(i=>i.label===e);if(r)return{ids:r.ids,label:r.label};const t=M.find(i=>String(i.id)===String(e));return t?{ids:[t.id],label:t.name}:null}function ye(e){if(!e)return u;const r=T().find(i=>i.label===e.label);if(r)return u.filter(i=>i.label===r.label);const t=M.find(i=>i.name===e.label);if(t){const i=new Set(T().filter(d=>d.ids.includes(t.id)).map(d=>d.label));return u.filter(d=>d.label===t.name||i.has(d.label))}return u}function ne(e){const r=new Set([e.name]);for(const t of T())t.ids.includes(e.id)&&r.add(t.label);return r}function se(e,r){var d;(d=document.querySelector(".irr-save-confirm"))==null||d.remove();const t=document.createElement("div");t.className="irr-save-confirm",t.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${r.map(a=>`<div>${a}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(t);const i=()=>{t.remove(),P(!0)};t.addEventListener("click",a=>{a.target===t&&i()}),t.querySelector("#irr-confirm-close").addEventListener("click",i)}function le(e,r,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigations existantes</span>
        <button class="irr-edit-close" id="irr-cf-close">×</button>
      </div>
      <div class="irr-edit-body" style="font-size:13px;color:var(--txt);line-height:1.5">
        <p style="margin:0"><strong>${e} irrigation${e>1?"s":""}</strong> déjà enregistrée${e>1?"s":""} pour <strong>${r}</strong>.</p>
        <p style="margin:8px 0 0;color:var(--txt2)">Voulez-vous les écraser avec la nouvelle saisie ?</p>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-cf-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-cf-overwrite">Écraser</button>
      </div>
    </div>`,document.body.appendChild(i);const d=()=>i.remove();i.addEventListener("click",c=>{c.target===i&&d()}),i.querySelector("#irr-cf-close").addEventListener("click",d),i.querySelector("#irr-cf-cancel").addEventListener("click",d),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),t()})}function ee(e,r=""){const t=T(),i=M.filter(c=>!t.some(g=>g.ids.includes(c.id))),d=t.map(c=>{const g=c.ids.map(w=>M.find(I=>I.id===w)).filter(Boolean).map(w=>`<option value="${w.id}"${String(r)===String(w.id)?" selected":""}>${w.name}</option>`).join("");return`<optgroup label="${c.label} (${c.ids.length} parcelles)">
      <option value="${c.label}"${r===c.label?" selected":""}>⬡ Groupe · ${c.label}</option>
      ${g}
    </optgroup>`}).join(""),a=i.length?`<optgroup label="Autres parcelles">${i.map(c=>`<option value="${c.id}"${String(r)===String(c.id)?" selected":""}>${c.name}</option>`).join("")}</optgroup>`:"";return`<select class="irr-lc-select" id="${e}">
    <option value="" disabled${r?"":" selected"}>— Sélectionner —</option>
    <option value="all"${r==="all"?" selected":""}>Toutes les parcelles</option>
    ${d}${a}
  </select>`}function oe(e){if(e.length<2)return"";const r=[...e].sort((o,E)=>o.iso<E.iso?-1:1),t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],i=new Date(r[0].iso),d=new Date(r[r.length-1].iso),a=Math.max(d-i,1),c=500,g=24,w=5,I=5,k=g-I-4,j=k-I-3,v=g+w+13,p=v+2,y=o=>Math.round((o-i)/a*c),$=o=>{const[,E,s]=o.split("-");return`${parseInt(s)}/${parseInt(E)}`},l=[],m=new Date(i.getFullYear(),i.getMonth()+1,1);for(;m<=d;)l.push(new Date(m)),m.setMonth(m.getMonth()+1);const b=l.map(o=>`<line x1="${y(o)}" y1="${g-6}" x2="${y(o)}" y2="${g+w+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),S=[i,...l,d],x=S.slice(0,-1).map((o,E)=>{const s=y(o),f=y(S[E+1]);return f-s<16?"":`<text x="${Math.round((s+f)/2)}" y="${j}" font-size="9" fill="#B0AEA8" text-anchor="middle">${t[o.getMonth()]}</text>`}).join(""),n=r.map(o=>{const E=o.real?"#FF8500":"#FFB705",s=y(new Date(o.iso)),f=`${_(o.iso)} · ${o.mm} mm`;return`<circle cx="${s}" cy="${k}" r="${I}" fill="${E}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${s}" cy="${k}" r="${I+6}" fill="transparent" pointer-events="all" data-tip="${f}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${c}" height="${p}" viewBox="0 0 ${c} ${p}" style="width:100%;display:block">
      ${x}<rect x="0" y="${g}" width="${c}" height="${w}" rx="${w/2}" fill="#E0DED8"/>${b}${n}
      <text x="1" y="${v}" font-size="9" fill="#B0AEA8">${$(r[0].iso)}</text>
      <text x="${c-1}" y="${v}" font-size="9" fill="#B0AEA8" text-anchor="end">${$(r[r.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function ce(e){const r=e.filter(a=>a.real),t=e.filter(a=>!a.real),i=r.reduce((a,c)=>a+c.mm,0),d=t.reduce((a,c)=>a+c.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${i} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${d} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${i+d} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function P(e=!1){var n,o,E;const r=document.getElementById("irr-right"),t=re(D,14),i=[...u.map(s=>s.iso),...U.filter(s=>s.iso<=t).map(s=>s.iso),t];if(!u.length&&!U.length){r.innerHTML=`<div class="irr-rv-hd">Vue globale</div><div class="irr-pr-empty"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const d=[...i].sort()[0],a=u.length?[...u].map(s=>s.iso).sort().at(-1):null,c=a&&a>t?a:t,g=new Date(c);g.setMonth(g.getMonth()+H);const w=g.toISOString().split("T")[0],I=e?null:((n=r.querySelector("#irr-gl-body"))==null?void 0:n.scrollLeft)??null,k=[];let j=new Date(d);const v=new Date(w);for(;j<=v;)k.push(j.toISOString().split("T")[0]),j.setDate(j.getDate()+1);const p={};for(const s of U)p[s.iso]=s.mm;function y(s,f,q){if(!q)return 0;const[,L,h]=f.split("-").map(Number);if((s*13+L*7+h*3)%100<12)return 0;const C=.75+(s*11+h*5)%50/100;return Math.round(q*C)}const $=k.map(s=>`<th class="irr-gl-th${s===D?" irr-gl-th--today":""}">${be(s)}</th>`).join("");function l(s){const f=ne(s),q=k.map(L=>{const h=L===D,B=u.filter(F=>F.iso===L&&f.has(F.label)),C=B.reduce((F,K)=>F+K.mm,0),V=B.some(F=>F.real),G=(s.id*7+3)%3-1,N=re(L,G),Y=y(s.id,L,p[N]??0);let O="";if(C){const F=V?"#E07820":"#FFB705",K=B.map(pe=>u.indexOf(pe)).join(",");O+=`<span class="irr-gl-val irr-gl-irrig" data-idxs="${K}" data-iso="${L}" style="color:${F};cursor:pointer">${C} mm</span>`}return Y&&(O+=`<span class="irr-gl-rain">${Y} mm</span>`),C||(O+=`<button class="irr-gl-add" data-plot-id="${s.id}" data-plot-name="${s.name}" data-iso="${L}">+</button>`),`<td class="irr-gl-td${h?" irr-gl-td--today":""}">${O}</td>`}).join("");return`<tr data-row-plot="${s.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${s.id}">${s.name}</span></td>${q}</tr>`}const m=T(),b=M.filter(s=>!m.some(f=>f.ids.includes(s.id))),S=k.map(s=>`<td class="irr-gl-td${s===D?" irr-gl-td--today":""}"></td>`).join(""),x=[...m.map(s=>{const f=s.ids.map(L=>M.find(h=>h.id===L)).filter(Boolean);return`<tr class="irr-gl-group-row" data-row-group="${s.label}"><td class="irr-gl-group-cell"><span class="irr-gl-group-link" data-group-label="${s.label}">⬡ ${s.label}</span></td>${S}</tr>`+f.map(l).join("")}),b.length?`<tr class="irr-gl-group-row"><td class="irr-gl-group-cell irr-gl-group-cell--other">Autres parcelles</td>${S}</tr>`+b.map(l).join(""):""].join("");r.innerHTML=`
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-rv-hd" style="position:static">Vue globale</div>
        <div class="irr-gl-legend">
          <span><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. réalisée</span>
          <span><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</span>
          <span><span class="irr-gl-dot" style="background:#3A7FC1"></span>Pluie</span>
        </div>
        <div class="irr-gl-scroll-top" id="irr-gl-scroll-top">
          <div class="irr-gl-scroll-inner" id="irr-gl-scroll-inner"></div>
        </div>
      </div>
      <div class="irr-gl-body" id="irr-gl-body">
        <table class="irr-gl-table" id="irr-gl-table">
          <thead id="irr-gl-thead"><tr><th class="irr-gl-plot-hd">Parcelles & groupes</th>${$}</tr></thead>
          <tbody>${x}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${H===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${H>0?`+${H} mois au-delà de la saison`:`Fin de saison : ${_(c)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var h;const s=r.querySelector("#irr-gl-body"),f=r.querySelector("#irr-gl-table"),q=r.querySelector("#irr-gl-scroll-top"),L=r.querySelector("#irr-gl-scroll-inner");if(!(!s||!f||!q||!L))if(L.style.width=f.offsetWidth+"px",q.addEventListener("scroll",()=>{s.scrollLeft=q.scrollLeft}),s.addEventListener("scroll",()=>{q.scrollLeft=s.scrollLeft}),I!==null)s.scrollLeft=I,q.scrollLeft=I;else{const B=r.querySelector(".irr-gl-th--today");if(B){const V=B.previousElementSibling??B,G=((h=r.querySelector(".irr-gl-plot-hd"))==null?void 0:h.offsetWidth)??120,N=V.offsetLeft-G;s.scrollLeft=N,q.scrollLeft=N}}}),(o=r.querySelector("#irr-gl-prev-month"))==null||o.addEventListener("click",()=>{H>0&&(H--,P())}),(E=r.querySelector("#irr-gl-next-month"))==null||E.addEventListener("click",()=>{H++,P()}),r.querySelectorAll(".irr-gl-irrig").forEach(s=>{s.addEventListener("click",()=>{he(s.dataset.idxs.split(",").map(Number),s.dataset.iso)})}),r.querySelectorAll(".irr-gl-add").forEach(s=>{s.addEventListener("click",()=>{Se(s.dataset.plotId,s.dataset.plotName,s.dataset.iso)})}),r.querySelectorAll(".irr-gl-plot-link").forEach(s=>{s.addEventListener("click",()=>{const f=M.find(q=>String(q.id)===s.dataset.plotId);f&&de(f)})}),r.querySelectorAll(".irr-gl-group-link").forEach(s=>{s.addEventListener("click",()=>{const f=T().find(q=>q.label===s.dataset.groupLabel);f&&$e(f)})})}function he(e,r){var d;(d=document.querySelector(".irr-edit-overlay"))==null||d.remove();const t=document.createElement("div");t.className="irr-edit-overlay";const i=e.map(a=>u[a]).filter(Boolean);t.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${W(r)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${i.map((a,c)=>`
          <div class="irr-edit-row">
            <span class="irr-edit-label">${a.label}</span>
            <input type="number" class="irr-edit-qty" data-i="${c}" value="${a.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${c}">🗑</button>
          </div>`).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",a=>{a.target===t&&t.remove()}),t.querySelector("#irr-edit-close").addEventListener("click",()=>t.remove()),t.querySelector("#irr-edit-cancel").addEventListener("click",()=>t.remove()),t.querySelectorAll(".irr-edit-del").forEach(a=>{a.addEventListener("click",()=>{const c=i[+a.dataset.i],g=u.indexOf(c);g>=0&&(u.splice(g,1),A()),t.remove()})}),t.querySelector("#irr-edit-save").addEventListener("click",()=>{t.querySelectorAll(".irr-edit-qty").forEach(a=>{const c=i[+a.dataset.i],g=parseInt(a.value);c&&g>0&&(c.mm=g,c.real=r<=D)}),A(),t.remove()})}function ie(e,r){var i,d;const t=document.getElementById("irr-right");t&&(t.querySelectorAll("[data-row-plot],[data-row-group]").forEach(a=>a.classList.remove("irr-gl-row--active")),e&&((i=t.querySelector(`[data-row-plot="${e}"]`))==null||i.classList.add("irr-gl-row--active")),r&&((d=t.querySelector(`[data-row-group="${CSS.escape(r)}"]`))==null||d.classList.add("irr-gl-row--active")))}function Q(e){var j,v,p,y,$;const r=document.getElementById("irr-detail");if(!r)return;const t=u.filter(l=>l.label===e.label),i=t.some(l=>l.fromStrategy),d=t.filter(l=>l.fromStrategy).sort((l,m)=>l.iso<m.iso?-1:1),a=(j=d[0])==null?void 0:j.iso,c=(v=d[d.length-1])==null?void 0:v.iso,g=t.filter(l=>l.real).sort((l,m)=>l.iso>m.iso?-1:1),w=t.filter(l=>!l.real).sort((l,m)=>l.iso<m.iso?-1:1),I=l=>{const m=u.indexOf(l),b=l.real?"#FF8500":"#FFB705",[,S,x]=l.iso.split("-");return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${b}"></div>
      <div class="irr-pr-date" style="color:${b};min-width:52px;font-size:13px;font-weight:600">${parseInt(x)} ${ue[parseInt(S)-1]}</div>
      <div class="irr-pr-info"><div class="irr-pr-status" style="color:${b}">${l.real?"Réalisée":"Planifiée"}</div></div>
      <div class="irr-pr-mm" style="color:${b}">${l.mm} mm</div>
      <button class="irr-pr-del" data-idx="${m}">🗑</button>
    </div>`},k=i?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-stop">Arrêter la saison <span>supprime les irrigations futures du groupe</span></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all">Supprimer la saison <span>supprime toutes les irrigations du groupe</span></button>
      </div>
    </div>`:"";r.innerHTML=`
    <div class="irr-det-sticky">
      <div class="irr-det-hd">
        <span class="irr-det-eyebrow">Groupe</span>
        <span class="irr-det-name">⬡ ${e.label}</span>
        <span style="font-size:12px;color:var(--txt3);flex-shrink:0">${e.ids.length} parcelles</span>
        <button class="irr-det-close" id="irr-det-close">×</button>
      </div>
      <div class="irr-det-body">
        <div class="irr-det-meta">
          ${a&&c?`<div><strong>Saison :</strong> ${_(a)} → ${_(c)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>'}
        </div>
        ${k}
        ${ce(t)}
        ${oe(t)}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${g.length?`<details class="irr-pr-details"><summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${g.length}</span></summary><div>${g.map(I).join("")}</div></details>`:""}
      ${w.length?`<details class="irr-pr-details" open><summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${w.length}</span></summary><div>${w.map(I).join("")}</div></details>`:""}
      ${t.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation pour ce groupe</p></div>'}
    </div>`,(p=r.querySelector("#irr-det-strat-toggle"))==null||p.addEventListener("click",()=>{const l=r.querySelector("#irr-det-strat-opts");l.style.display=l.style.display==="none"?"":"none"}),(y=r.querySelector("#irr-det-stop"))==null||y.addEventListener("click",()=>{u.splice(0,u.length,...u.filter(l=>!(l.label===e.label&&!l.real&&l.iso>D))),A(),Q(e),P(!0)}),($=r.querySelector("#irr-det-del-all"))==null||$.addEventListener("click",()=>{u.splice(0,u.length,...u.filter(l=>l.label!==e.label)),A(),Q(e),P(!0)}),r.querySelectorAll(".irr-pr-del").forEach(l=>{l.addEventListener("click",()=>{const m=+l.dataset.idx;m>=0&&(u.splice(m,1),A(),Q(e))})}),r.querySelector("#irr-det-close").addEventListener("click",()=>{var l;(l=document.getElementById("irr-page"))==null||l.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId=""})}function $e(e){const r=document.getElementById("irr-page"),t=document.getElementById("irr-detail");if(!(!r||!t)){if(t.dataset.plotId===`group:${e.label}`&&r.classList.contains("irr-has-detail")){r.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="";return}t.dataset.plotId=`group:${e.label}`,t.style.display="",r.classList.add("irr-has-detail"),ie(null,e.label),Q(e)}}function de(e){const r=document.getElementById("irr-page"),t=document.getElementById("irr-detail");if(!(!r||!t)){if(t.dataset.plotId===String(e.id)&&r.classList.contains("irr-has-detail")){r.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="";return}t.dataset.plotId=String(e.id),t.style.display="",r.classList.add("irr-has-detail"),ie(String(e.id),null),X(e)}}const ue=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function X(e){var l,m,b,S,x;const r=document.getElementById("irr-detail");if(document.getElementById("irr-page"),!r)return;const i=T().find(n=>n.ids.includes(e.id)),d={ids:[e.id],label:e.name},a=ye(d),c=a.some(n=>n.fromStrategy),g=a.filter(n=>n.fromStrategy).sort((n,o)=>n.iso<o.iso?-1:1),w=(l=g[0])==null?void 0:l.iso,I=(m=g[g.length-1])==null?void 0:m.iso,k=i?`<div><strong>Groupe :</strong> ${i.label} — ${i.ids.length} parcelles</div>`:"",j=w&&I?`<div><strong>Saison :</strong> ${_(w)} → ${_(I)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',v=a.filter(n=>n.real).sort((n,o)=>n.iso>o.iso?-1:1),p=a.filter(n=>!n.real).sort((n,o)=>n.iso<o.iso?-1:1),y=n=>{const o=u.indexOf(n),E=n.real?"#FF8500":"#FFB705",[,s,f]=n.iso.split("-"),q=`${parseInt(f)} ${ue[parseInt(s)-1]}`;return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${E}"></div>
      <div class="irr-pr-date" style="color:${E};min-width:52px;font-size:13px;font-weight:600">${q}</div>
      <div class="irr-pr-info"><div class="irr-pr-status" style="color:${E}">${n.real?"Réalisée":"Planifiée"}</div></div>
      <div class="irr-pr-mm" style="color:${E}">${n.mm} mm</div>
      <button class="irr-pr-del" data-idx="${o}">🗑</button>
    </div>`},$=c?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-stop">Arrêter la saison <span>supprime les irrigations futures</span></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all">Supprimer la saison <span>supprime toutes les irrigations</span></button>
      </div>
    </div>`:"";r.innerHTML=`
    <div class="irr-det-sticky">
      <div class="irr-det-hd">
        <span class="irr-det-eyebrow">Vue détail</span>
        <span class="irr-det-name">${e.name}</span>
        <a class="irr-det-link" href="parcelle-detail.html?id=${e.id}">Voir la parcelle →</a>
        <button class="irr-det-close" id="irr-det-close">×</button>
      </div>
      <div class="irr-det-body">
        <div class="irr-det-meta">${k}${j}</div>
        ${$}
        ${ce(a)}
        ${oe(a)}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${v.length?`
        <details class="irr-pr-details">
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${v.length}</span></summary>
          <div>${v.map(y).join("")}</div>
        </details>`:""}
      ${p.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${p.length}</span></summary>
          <div>${p.map(y).join("")}</div>
        </details>`:""}
      ${a.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(b=r.querySelector("#irr-det-strat-toggle"))==null||b.addEventListener("click",()=>{const n=r.querySelector("#irr-det-strat-opts");n.style.display=n.style.display==="none"?"":"none"}),(S=r.querySelector("#irr-det-stop"))==null||S.addEventListener("click",()=>{const n=new Set([e.name]);T().filter(o=>o.ids.includes(e.id)).forEach(o=>n.add(o.label)),u.splice(0,u.length,...u.filter(o=>!(n.has(o.label)&&!o.real&&o.iso>D))),A(),X(e),P(!0)}),(x=r.querySelector("#irr-det-del-all"))==null||x.addEventListener("click",()=>{const n=new Set([e.name]);T().filter(o=>o.ids.includes(e.id)).forEach(o=>n.add(o.label)),u.splice(0,u.length,...u.filter(o=>!n.has(o.label))),A(),X(e),P(!0)}),r.querySelectorAll(".irr-pr-del").forEach(n=>{n.addEventListener("click",()=>{const o=+n.dataset.idx;o>=0&&(u.splice(o,1),A(),X(e))})}),r.querySelector("#irr-det-close").addEventListener("click",()=>{var n;(n=document.getElementById("irr-page"))==null||n.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="",ie(null,null)})}function Se(e,r,t){var d;(d=document.querySelector(".irr-edit-overlay"))==null||d.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${W(t)}</span>
        <button class="irr-edit-close" id="irr-qa-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${r}</span>
          <input type="number" class="irr-edit-qty" id="irr-qa-qty" value="10" min="1" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-qa-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-qa-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(i),i.addEventListener("click",a=>{a.target===i&&i.remove()}),i.querySelector("#irr-qa-close").addEventListener("click",()=>i.remove()),i.querySelector("#irr-qa-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#irr-qa-save").addEventListener("click",()=>{const a=parseInt(i.querySelector("#irr-qa-qty").value)||10,c=M.find(g=>String(g.id)===String(e));c&&(u.push({iso:t,mm:a,real:t<=D,label:c.name,fromStrategy:!1}),A()),i.remove()})}function te(){var d,a,c,g,w,I,k,j;const e=document.getElementById("irr-left"),r=[...me].filter(v=>v.id!==100).sort((v,p)=>v.name.localeCompare(p.name)),t=ae?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${z===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${z===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${r.map(v=>`<option value="${v.id}"${v.id===z?" selected":""}>${v.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"";e.innerHTML=`
    <div class="irr-lc-hd">Irrigation</div>
    ${t}

    <button class="irr-lc-btn${R==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${R==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelle ou groupe</label>
        ${ee("irr-s-scope")}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Date</label>
        <input type="date" class="irr-lc-input" id="irr-s-date" value="${D}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Quantité <span class="irr-lc-unit">(mm par parcelle)</span></label>
        <input type="number" class="irr-lc-input" id="irr-s-qty" value="10" min="1" />
      </div>
      <div class="irr-lc-err" id="irr-s-err" style="display:none">Veuillez renseigner tous les champs requis.</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-s-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${R==="saison"?" irr-lc-btn--active":""}" data-action="saison">
      <i class="bi bi-arrow-repeat"></i><span>Saisir une saison d'irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${R==="saison"?"":" irr-lc-form--hidden"}" id="irr-form-saison">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelle ou groupe</label>
        ${ee("irr-sa-scope")}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Début</label>
        <input type="date" class="irr-lc-input" id="irr-sa-debut" value="${D}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Fin</label>
        <input type="date" class="irr-lc-input" id="irr-sa-fin" value="${re(D,120)}" />
      </div>
      <div class="irr-lc-field-row">
        <div class="irr-lc-field">
          <label class="irr-lc-lbl">Quantité <span class="irr-lc-unit">(mm)</span></label>
          <input type="number" class="irr-lc-input" id="irr-sa-qty" value="10" min="1" />
        </div>
        <div class="irr-lc-field">
          <label class="irr-lc-lbl">Fréquence <span class="irr-lc-unit">(jours)</span></label>
          <input type="number" class="irr-lc-input" id="irr-sa-freq" value="7" min="1" max="30" />
        </div>
      </div>
      <div class="irr-lc-preview" id="irr-sa-preview">—</div>
      <div class="irr-lc-err" id="irr-sa-err" style="display:none">Veuillez renseigner tous les champs requis.</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-sa-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${R==="export"?" irr-lc-btn--active":""}" data-action="export">
      <i class="bi bi-download"></i><span>Exporter les irrigations</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${R==="export"?"":" irr-lc-form--hidden"}" id="irr-form-export">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Périmètre</label>
        ${ee("irr-ex-scope","all")}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Du</label>
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${u.length?[...u].sort((v,p)=>v.iso<p.iso?-1:1)[0].iso:D}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${u.length?[...u].sort((v,p)=>v.iso>p.iso?-1:1)[0].iso:D}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Données à inclure</label>
        <div class="irr-ef-checks">
          <label><input type="checkbox" id="irr-ex-irrig" checked /> Irrigations</label>
          <label><input type="checkbox" id="irr-ex-rain" checked /> Pluie</label>
        </div>
      </div>
      <p class="irr-ef-hint">Une ligne par date · Valeurs en mm</p>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-ex-dl"><i class="bi bi-download"></i> Télécharger CSV</button>
    </div>
  `,(d=e.querySelector("#irr-org-select"))==null||d.addEventListener("change",v=>{const p=v.target.value;z=p===""?null:parseInt(p),M=z===null?J:J.filter(y=>y.orgId===z),H=0,te(),P()}),e.querySelectorAll(".irr-lc-btn").forEach(v=>{v.addEventListener("click",()=>{const p=v.dataset.action;R=R===p?null:p,te()})});function i(){var x,n,o,E;const v=(x=e.querySelector("#irr-sa-debut"))==null?void 0:x.value,p=(n=e.querySelector("#irr-sa-fin"))==null?void 0:n.value,y=parseInt((o=e.querySelector("#irr-sa-qty"))==null?void 0:o.value)||0,$=parseInt((E=e.querySelector("#irr-sa-freq"))==null?void 0:E.value)||0,l=e.querySelector("#irr-sa-preview");if(!l)return;if(!v||!p||$<=0){l.textContent="—";return}let m=0,b=new Date(v),S=new Date(p);for(;b<=S&&m<200;)m++,b.setDate(b.getDate()+$);l.innerHTML=m>0?`<span style="color:var(--pri);font-weight:600">↗ ${m} irrigations · ${m*y} mm au total</span>`:'<span style="color:var(--txt3)">Ajustez les paramètres</span>'}R==="saison"&&(i(),(a=e.querySelector("#irr-sa-debut"))==null||a.addEventListener("change",i),(c=e.querySelector("#irr-sa-fin"))==null||c.addEventListener("change",i),(g=e.querySelector("#irr-sa-qty"))==null||g.addEventListener("input",i),(w=e.querySelector("#irr-sa-freq"))==null||w.addEventListener("input",i)),(I=e.querySelector("#irr-ex-dl"))==null||I.addEventListener("click",()=>{const v=e.querySelector("#irr-ex-scope").value,p=e.querySelector("#irr-ex-start").value,y=e.querySelector("#irr-ex-end").value,$=e.querySelector("#irr-ex-irrig").checked,l=e.querySelector("#irr-ex-rain").checked,m=Z(v),b=m?M.filter(h=>m.ids.includes(h.id)):M,S=new Set;if($)for(const h of u)h.iso>=p&&h.iso<=y&&S.add(h.iso);if(l)for(const h of U)h.iso>=p&&h.iso<=y&&S.add(h.iso);const x=[...S].sort(),n={};if(l)for(const h of U)n[h.iso]=h.mm;const o=["Date",...b.map(h=>h.name+(l?" (irrig.)":""))].join(";"),E=x.map(h=>{const B=b.map(C=>{const V=ne(C),G=$?u.filter(O=>O.iso===h&&V.has(O.label)).reduce((O,F)=>O+F.mm,0):0,N=l?n[h]??0:0,Y=G+N;return Y>0?Y:""});return[h,...B].join(";")}),s=[o,...E].join(`
`),f=new Blob([s],{type:"text/csv;charset=utf-8;"}),q=URL.createObjectURL(f),L=Object.assign(document.createElement("a"),{href:q,download:`irrigations_${p}_${y}.csv`});document.body.appendChild(L),L.click(),setTimeout(()=>{URL.revokeObjectURL(q),L.remove()},100)}),(k=e.querySelector("#irr-s-save"))==null||k.addEventListener("click",()=>{const v=e.querySelector("#irr-s-scope").value,p=e.querySelector("#irr-s-date").value,y=parseInt(e.querySelector("#irr-s-qty").value)||0,$=e.querySelector("#irr-s-err");if(!v||!p||!y){$&&($.style.display="");return}$&&($.style.display="none");const l=Z(v),m=p>D,b=l?[l.label]:[],S=()=>{b.forEach(n=>u.push({iso:p,mm:y,real:!m,label:n,fromStrategy:!1})),A(),se("Irrigation enregistrée",[`Date : ${W(p)}`,`Quantité : ${y} mm`,`Périmètre : ${(l==null?void 0:l.label)??"Toutes les parcelles"}`])},x=u.filter(n=>b.includes(n.label));if(x.length){le(x.length,(l==null?void 0:l.label)??"Toutes les parcelles",()=>{u.splice(0,u.length,...u.filter(n=>!b.includes(n.label))),S()});return}S()}),(j=e.querySelector("#irr-sa-save"))==null||j.addEventListener("click",()=>{const v=e.querySelector("#irr-sa-scope").value,p=e.querySelector("#irr-sa-debut").value,y=e.querySelector("#irr-sa-fin").value,$=parseInt(e.querySelector("#irr-sa-qty").value)||10,l=parseInt(e.querySelector("#irr-sa-freq").value)||7,m=e.querySelector("#irr-sa-err");if(!v||!p||!y){m&&(m.style.display="");return}m&&(m.style.display="none");const b=Z(v),S=b?[b.label]:[],x=[];let n=new Date(p),o=new Date(y);for(;n<=o&&x.length<200;)x.push(new Date(n)),n.setDate(n.getDate()+l);const E=()=>{S.forEach(f=>x.forEach(q=>{const L=q.toISOString().slice(0,10);u.push({iso:L,mm:$,real:L<=D,label:f,fromStrategy:!0})})),A(),se("Saison enregistrée",[`Début : ${W(p)} · Fin : ${W(y)}`,`${x.length} irrigations · ${$} mm · tous les ${l} j`,`Périmètre : ${(b==null?void 0:b.label)??"Toutes les parcelles"}`])},s=u.filter(f=>S.includes(f.label)&&f.iso>=p&&f.iso<=y);if(s.length){le(s.length,(b==null?void 0:b.label)??"Toutes les parcelles",()=>{u.splice(0,u.length,...u.filter(f=>!(S.includes(f.label)&&f.iso>=p&&f.iso<=y))),E()});return}E()})}function Ee(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",r=>{const t=r.target.closest("[data-tip]");if(!t){e.style.opacity="0";return}e.textContent=t.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",r=>{e.style.left=r.clientX+14+"px",e.style.top=r.clientY-36+"px"}),document.addEventListener("mouseout",r=>{var t;(t=r.relatedTarget)!=null&&t.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{fe(),Ee(),te(),P(),window.addEventListener("irrig-updated",()=>{P();const t=document.getElementById("irr-detail"),i=t==null?void 0:t.dataset.plotId;if(i)if(i.startsWith("group:")){const d=i.slice(6),a=T().find(c=>c.label===d);a&&Q(a)}else{const d=M.find(a=>String(a.id)===i);d&&X(d)}});const r=new URLSearchParams(window.location.search).get("plot");if(r){const t=M.find(i=>i.id===+r);t&&de(t)}});
