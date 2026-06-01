import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as v,R as N,g as re,s as j}from"./irrigations-C22Dtsoo.js";import{p as U}from"./plots-BFmvZ9cD.js";import{o as ne}from"./orgs-Cx4wNzLL.js";import{u as ae}from"./breadcrumb-DEBQjfiD.js";import"./irrigation-web-Cptgtrcf.js";import"./store-InOgbptE.js";import"./constants-C2D4LmLD.js";const oe=1,ie=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let O=null,V=ie?U:U.filter(e=>e.orgId===oe);const k=new Date().toISOString().split("T")[0];let M=null,F=0;function Y(e,r){const t=new Date(e);return t.setDate(t.getDate()+r),t.toISOString().split("T")[0]}function _(e){const r=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,t,i]=e.split("-");return`${parseInt(i)} ${r[parseInt(t)-1]} ${e.split("-")[0]}`}function Q(e){const r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,i]=e.split("-");return`${parseInt(i)} ${r[parseInt(t)-1]}`}function ce(e){const[,r,t]=e.split("-");return`${t}/${r}`}function de(e){return[e.name,e.crop,e.irrigation].filter(Boolean).join(" — ")}function Z(){return[...V].sort((e,r)=>e.name.localeCompare(r.name,"fr"))}function G(e,r={}){const{allBtn:t=!1}=r,i=Z().map(a=>`
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${a.id}" />
      <span class="irr-msel-name">${de(a)}</span>
    </label>`).join("");return`<div class="irr-msel" id="${e}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${i}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${t?'<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>':""}
    </div>
  </div>`}function X(e,r){const t=e.querySelector(`#${r}`);if(!t)return;const i=t.querySelector(".irr-msel-search"),a=t.querySelector(".irr-msel-count"),l=t.querySelector(".irr-msel-all-btn"),d=()=>{const m=t.querySelectorAll(".irr-msel-cb:checked").length;a.textContent=`${m} sélectionnée${m!==1?"s":""}`};i.addEventListener("input",()=>{const m=i.value.toLowerCase();t.querySelectorAll(".irr-msel-item").forEach(q=>{q.style.display=q.querySelector(".irr-msel-name").textContent.toLowerCase().includes(m)?"":"none"})}),t.querySelectorAll(".irr-msel-cb").forEach(m=>m.addEventListener("change",d)),l==null||l.addEventListener("click",()=>{const m=[...t.querySelectorAll(".irr-msel-cb")].filter(f=>f.closest(".irr-msel-item").style.display!=="none"),q=m.some(f=>!f.checked);m.forEach(f=>{f.checked=q}),d()})}function J(e,r){const t=e.querySelector(`#${r}`);return t?[...t.querySelectorAll(".irr-msel-cb:checked")].map(i=>+i.value):[]}function ee(e,r){var a;(a=document.querySelector(".irr-save-confirm"))==null||a.remove();const t=document.createElement("div");t.className="irr-save-confirm",t.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${r.map(l=>`<div>${l}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(t);const i=()=>{t.remove(),T(!0)};t.addEventListener("click",l=>{l.target===t&&i()}),t.querySelector("#irr-confirm-close").addEventListener("click",i)}function te(e,r,t){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
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
    </div>`,document.body.appendChild(i);const a=()=>i.remove();i.addEventListener("click",d=>{d.target===i&&a()}),i.querySelector("#irr-cf-close").addEventListener("click",a),i.querySelector("#irr-cf-cancel").addEventListener("click",a),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),t()})}function ue(e){if(e.length<2)return"";const r=[...e].sort((u,$)=>u.iso<$.iso?-1:1),t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],i=new Date(r[0].iso),a=new Date(r[r.length-1].iso),l=Math.max(a-i,1),d=500,m=24,q=5,f=5,D=m-f-4,I=D-f-3,o=m+q+13,p=o+2,S=f+2,y=u=>Math.round(S+(u-i)/l*(d-2*S)),c=u=>{const[,$,E]=u.split("-");return`${parseInt(E)}/${parseInt($)}`},g=[],b=new Date(i.getFullYear(),i.getMonth()+1,1);for(;b<=a;)g.push(new Date(b)),b.setMonth(b.getMonth()+1);const s=g.map(u=>`<line x1="${y(u)}" y1="${m-6}" x2="${y(u)}" y2="${m+q+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),h=[i,...g,a],n=h.slice(0,-1).map((u,$)=>{const E=y(u),L=y(h[$+1]);return L-E<16?"":`<text x="${Math.round((E+L)/2)}" y="${I}" font-size="9" fill="#B0AEA8" text-anchor="middle">${t[u.getMonth()]}</text>`}).join(""),w=r.map(u=>{const $=u.real?"#FF8500":"#FFB705",E=y(new Date(u.iso)),L=`${Q(u.iso)} · ${u.mm} mm`;return`<circle cx="${E}" cy="${D}" r="${f}" fill="${$}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${E}" cy="${D}" r="${f+6}" fill="transparent" pointer-events="all" data-tip="${L}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${d}" height="${p}" viewBox="0 0 ${d} ${p}" style="width:100%;display:block">
      ${n}<rect x="0" y="${m}" width="${d}" height="${q}" rx="${q/2}" fill="#E0DED8"/>${s}${w}
      <text x="1" y="${o}" font-size="9" fill="#B0AEA8">${c(r[0].iso)}</text>
      <text x="${d-1}" y="${o}" font-size="9" fill="#B0AEA8" text-anchor="end">${c(r[r.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function pe(e){const r=e.filter(l=>l.real),t=e.filter(l=>!l.real),i=r.reduce((l,d)=>l+d.mm,0),a=t.reduce((l,d)=>l+d.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${i} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${a} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${i+a} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function T(e=!1){var b,s,h;const r=document.getElementById("irr-right"),t=Y(k,14),i=[...v.map(n=>n.iso),...N.filter(n=>n.iso<=t).map(n=>n.iso),t];if(!v.length&&!N.length){r.innerHTML=`<div class="irr-rv-hd">Vue globale</div><div class="irr-pr-empty"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const a=[...i].sort()[0],l=v.length?[...v].map(n=>n.iso).sort().at(-1):null,d=l&&l>t?l:t,m=new Date(d);m.setMonth(m.getMonth()+F);const q=m.toISOString().split("T")[0],f=e?null:((b=r.querySelector("#irr-gl-body"))==null?void 0:b.scrollLeft)??null,D=[];let I=new Date(a);const o=new Date(q);for(;I<=o;)D.push(I.toISOString().split("T")[0]),I.setDate(I.getDate()+1);const p={};for(const n of N)p[n.iso]=n.mm;function S(n,w,u){if(!u)return 0;const[,$,E]=w.split("-").map(Number);if((n*13+$*7+E*3)%100<12)return 0;const x=.75+(n*11+E*5)%50/100;return Math.round(u*x)}const y=D.map(n=>`<th class="irr-gl-th${n===k?" irr-gl-th--today":""}">${ce(n)}</th>`).join("");function c(n){const w=D.map(u=>{const $=u===k,E=v.filter(A=>A.iso===u&&A.plotId===n.id),L=E.reduce((A,B)=>A+B.mm,0),x=E.some(A=>A.real),R=(n.id*7+3)%3-1,H=Y(u,R),C=S(n.id,u,p[H]??0);let P="";if(L){const A=x?"#E07820":"#FFB705",B=E.map(W=>v.indexOf(W)).join(",");P+=`<span class="irr-gl-val irr-gl-irrig" data-idxs="${B}" data-iso="${u}" style="color:${A};cursor:pointer">${L} mm</span>`}return C&&(P+=`<span class="irr-gl-rain">${C} mm</span>`),L||(P+=`<button class="irr-gl-add" data-plot-id="${n.id}" data-plot-name="${n.name}" data-iso="${u}">+</button>`),`<td class="irr-gl-td${$?" irr-gl-td--today":""}">${P}</td>`}).join("");return`<tr data-row-plot="${n.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${n.id}">${n.name}</span></td>${w}</tr>`}const g=Z().map(c).join("");r.innerHTML=`
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
          <thead id="irr-gl-thead"><tr><th class="irr-gl-plot-hd">Parcelles</th>${y}</tr></thead>
          <tbody>${g}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${F===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${F>0?`+${F} mois au-delà de la saison`:`Fin de saison : ${Q(d)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var E;const n=r.querySelector("#irr-gl-body"),w=r.querySelector("#irr-gl-table"),u=r.querySelector("#irr-gl-scroll-top"),$=r.querySelector("#irr-gl-scroll-inner");if(!(!n||!w||!u||!$))if($.style.width=w.offsetWidth+"px",u.addEventListener("scroll",()=>{n.scrollLeft=u.scrollLeft}),n.addEventListener("scroll",()=>{u.scrollLeft=n.scrollLeft}),f!==null)n.scrollLeft=f,u.scrollLeft=f;else{const L=r.querySelector(".irr-gl-th--today");if(L){const R=L.previousElementSibling??L,H=((E=r.querySelector(".irr-gl-plot-hd"))==null?void 0:E.offsetWidth)??120,C=R.offsetLeft-H;n.scrollLeft=C,u.scrollLeft=C}}}),(s=r.querySelector("#irr-gl-prev-month"))==null||s.addEventListener("click",()=>{F>0&&(F--,T())}),(h=r.querySelector("#irr-gl-next-month"))==null||h.addEventListener("click",()=>{F++,T()}),r.querySelectorAll(".irr-gl-irrig").forEach(n=>{n.addEventListener("click",()=>{ve(n.dataset.idxs.split(",").map(Number),n.dataset.iso)})}),r.querySelectorAll(".irr-gl-add").forEach(n=>{n.addEventListener("click",()=>{be(n.dataset.plotId,n.dataset.plotName,n.dataset.iso)})}),r.querySelectorAll(".irr-gl-plot-link").forEach(n=>{n.addEventListener("click",()=>{const w=V.find(u=>String(u.id)===n.dataset.plotId);w&&le(w)})})}function ve(e,r){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const t=document.createElement("div");t.className="irr-edit-overlay";const i=e.map(l=>v[l]).filter(Boolean);t.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${_(r)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${i.map((l,d)=>{const m=V.find(f=>f.id===l.plotId);return`<div class="irr-edit-row">
            <span class="irr-edit-label">${m?m.name:`Parcelle ${l.plotId}`}</span>
            <input type="number" class="irr-edit-qty" data-i="${d}" value="${l.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${d}">🗑</button>
          </div>`}).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",l=>{l.target===t&&t.remove()}),t.querySelector("#irr-edit-close").addEventListener("click",()=>t.remove()),t.querySelector("#irr-edit-cancel").addEventListener("click",()=>t.remove()),t.querySelectorAll(".irr-edit-del").forEach(l=>{l.addEventListener("click",()=>{const d=i[+l.dataset.i],m=v.indexOf(d);m>=0&&(v.splice(m,1),j()),t.remove()})}),t.querySelector("#irr-edit-save").addEventListener("click",()=>{t.querySelectorAll(".irr-edit-qty").forEach(l=>{const d=i[+l.dataset.i],m=parseInt(l.value);d&&m>0&&(d.mm=m,d.real=r<=k)}),j(),t.remove()})}function me(e,r){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();let t=e.iso,i=e.mm;const a=document.createElement("div");a.className="irr-edit-overlay",a.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>${e.real?"Modifier l'irrigation réalisée":"Modifier l'irrigation planifiée"}</span>
        <button class="irr-edit-close" id="irr-di-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row" style="flex-direction:column;align-items:flex-start;gap:6px">
          <label style="font-size:12px;color:var(--txt3)">Date</label>
          <input type="date" id="irr-di-date" value="${e.iso}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
        </div>
        <div class="irr-edit-row" style="margin-top:10px">
          <span class="irr-edit-label">Quantité</span>
          <input type="number" id="irr-di-qty" value="${e.mm}" min="1" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--danger" id="irr-di-del">Supprimer</button>
        <div style="display:flex;gap:8px">
          <button class="iw-btn iw-btn--sec" id="irr-di-cancel">Annuler</button>
          <button class="iw-btn iw-btn--pri" id="irr-di-save">Enregistrer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(a),a.addEventListener("click",d=>{d.target===a&&a.remove()}),a.querySelector("#irr-di-close").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-date").addEventListener("change",d=>{t=d.target.value}),a.querySelector("#irr-di-qty").addEventListener("input",d=>{const m=parseInt(d.target.value);m>0&&(i=m)}),a.querySelector("#irr-di-del").addEventListener("click",()=>{const d=v.indexOf(e);d>=0&&v.splice(d,1),j(),a.remove(),r()}),a.querySelector("#irr-di-save").addEventListener("click",()=>{e.iso=t,e.mm=i,e.real=t<=k,j(),a.remove(),r()})}function fe(e,r){var o,p,S,y;const t=v.filter(c=>c.plotId===e&&c.fromStrategy&&c.seasonId),i=[...t].sort((c,g)=>c.iso<g.iso?-1:1),a=new Set(t.map(c=>c.seasonId));let l=((o=i[0])==null?void 0:o.iso)||k,d=((p=i[i.length-1])==null?void 0:p.iso)||Y(k,90),m=((S=i[0])==null?void 0:S.mm)||10,q=i.length>=2?Math.max(1,Math.round((new Date(i[i.length-1].iso)-new Date(i[0].iso))/864e5/(i.length-1))):7;(y=document.querySelector(".irr-edit-overlay"))==null||y.remove();const f=document.createElement("div");f.className="irr-edit-overlay";function D(){if(!l||!d||q<=0)return[];const c=[],g=new Date(d);let b=new Date(l);for(;b<=g&&c.length<200;)c.push(b.toISOString().split("T")[0]),b.setDate(b.getDate()+q);return c}function I(){const c=D(),g=c.filter(b=>b>k).length;f.querySelector("#irr-ms-preview").textContent=c.length>0?`↗ ${c.length} irrigations · ${c.length*m} mm · dont ${g} à venir`:"Ajustez les dates et la fréquence"}f.innerHTML=`
    <div class="irr-edit-modal" style="max-width:460px">
      <div class="irr-edit-hd">
        <span>Modifier la saison</span>
        <button class="irr-edit-close" id="irr-ms-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Début</label>
            <input type="date" id="irr-ms-debut" value="${l}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fin</label>
            <input type="date" id="irr-ms-fin" value="${d}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Quantité (mm/irrig.)</label>
            <input type="number" id="irr-ms-qty" value="${m}" min="1" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fréquence (jours)</label>
            <input type="number" id="irr-ms-freq" value="${q}" min="1" max="30" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
        </div>
        <div id="irr-ms-preview" style="margin-top:12px;font-size:12px;color:var(--txt3)"></div>
        <div style="margin-top:10px;font-size:11px;color:var(--txt3);line-height:1.4">
          Les irrigations déjà réalisées sont conservées. Les irrigations futures sont recalculées.
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-ms-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-ms-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(f),I(),f.addEventListener("click",c=>{c.target===f&&f.remove()}),f.querySelector("#irr-ms-close").addEventListener("click",()=>f.remove()),f.querySelector("#irr-ms-cancel").addEventListener("click",()=>f.remove()),f.querySelector("#irr-ms-debut").addEventListener("change",c=>{l=c.target.value,I()}),f.querySelector("#irr-ms-fin").addEventListener("change",c=>{d=c.target.value,I()}),f.querySelector("#irr-ms-qty").addEventListener("input",c=>{const g=parseInt(c.target.value);g>0&&(m=g,I())}),f.querySelector("#irr-ms-freq").addEventListener("input",c=>{const g=parseInt(c.target.value);g>0&&(q=g,I())}),f.querySelector("#irr-ms-save").addEventListener("click",()=>{const c=v.filter(b=>!(b.plotId===e&&a.has(b.seasonId)));v.splice(0,v.length,...c);const g=re();for(const b of D())v.push({iso:b,mm:m,real:b<=k,plotId:e,fromStrategy:!0,seasonId:g});j(),f.remove(),r()})}function se(e){var t;const r=document.getElementById("irr-right");r&&(r.querySelectorAll("[data-row-plot]").forEach(i=>i.classList.remove("irr-gl-row--active")),e&&((t=r.querySelector(`[data-row-plot="${e}"]`))==null||t.classList.add("irr-gl-row--active")))}function le(e){const r=document.getElementById("irr-page"),t=document.getElementById("irr-detail");if(!(!r||!t)){if(t.dataset.plotId===String(e.id)&&r.classList.contains("irr-has-detail")){r.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="";return}t.dataset.plotId=String(e.id),t.style.display="",r.classList.add("irr-has-detail"),se(String(e.id)),z(e)}}const ge=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function z(e){var p,S,y,c,g,b;const r=document.getElementById("irr-detail");if(!r)return;const t=v.filter(s=>s.plotId===e.id),i=t.some(s=>s.fromStrategy&&s.seasonId),a=t.filter(s=>s.fromStrategy).sort((s,h)=>s.iso<h.iso?-1:1),l=(p=a[0])==null?void 0:p.iso,d=(S=a[a.length-1])==null?void 0:S.iso,m=new Set(t.filter(s=>s.fromStrategy&&s.seasonId).map(s=>s.seasonId)),q=l&&d?`<div><strong>Saison :</strong> ${Q(l)} → ${Q(d)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',f=t.filter(s=>s.real).sort((s,h)=>s.iso<h.iso?-1:1),D=t.filter(s=>!s.real).sort((s,h)=>s.iso<h.iso?-1:1),I=s=>{const h=v.indexOf(s),n=s.real?"#FF8500":"#FFB705",[,w,u]=s.iso.split("-"),$=`${parseInt(u)} ${ge[parseInt(w)-1]}`;return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${n}"></div>
      <div class="irr-pr-date" style="color:${n};min-width:52px;font-size:13px;font-weight:600">${$}</div>
      <div class="irr-pr-info"><div class="irr-pr-status" style="color:${n}">${s.real?"Réalisée":"Planifiée"}</div></div>
      <div class="irr-pr-mm" style="color:${n}">${s.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${h}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${h}" title="Supprimer">🗑</button>
    </div>`},o=i?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
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
        <div class="irr-det-meta">${q}</div>
        ${o}
        ${pe(t)}
        ${ue(t)}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${f.length?`
        <details class="irr-pr-details">
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${f.length}</span></summary>
          <div>${f.map(I).join("")}</div>
        </details>`:""}
      ${D.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${D.length}</span></summary>
          <div>${D.map(I).join("")}</div>
        </details>`:""}
      ${t.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(y=r.querySelector("#irr-det-strat-toggle"))==null||y.addEventListener("click",()=>{const s=r.querySelector("#irr-det-strat-opts");s.style.display=s.style.display==="none"?"":"none"}),(c=r.querySelector("#irr-det-modify"))==null||c.addEventListener("click",()=>{r.querySelector("#irr-det-strat-opts").style.display="none",fe(e.id,()=>{z(e),T(!0)})}),(g=r.querySelector("#irr-det-stop"))==null||g.addEventListener("click",()=>{v.splice(0,v.length,...v.filter(s=>!(s.plotId===e.id&&m.has(s.seasonId)&&!s.real&&s.iso>k))),j(),z(e),T(!0)}),(b=r.querySelector("#irr-det-del-all"))==null||b.addEventListener("click",()=>{v.splice(0,v.length,...v.filter(s=>!(s.plotId===e.id&&m.has(s.seasonId)))),j(),z(e),T(!0)}),r.querySelectorAll(".irr-pr-edit").forEach(s=>{s.addEventListener("click",()=>{const h=v[+s.dataset.idx];h&&me(h,()=>{z(e),T(!0)})})}),r.querySelectorAll(".irr-pr-del").forEach(s=>{s.addEventListener("click",()=>{const h=+s.dataset.idx;h>=0&&(v.splice(h,1),j(),z(e))})}),r.querySelector("#irr-det-close").addEventListener("click",()=>{var s;(s=document.getElementById("irr-page"))==null||s.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="",se(null)})}function be(e,r,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${_(t)}</span>
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
    </div>`,document.body.appendChild(i),i.addEventListener("click",l=>{l.target===i&&i.remove()}),i.querySelector("#irr-qa-close").addEventListener("click",()=>i.remove()),i.querySelector("#irr-qa-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#irr-qa-save").addEventListener("click",()=>{const l=parseInt(i.querySelector("#irr-qa-qty").value)||10;v.push({iso:t,mm:l,real:t<=k,plotId:+e,fromStrategy:!1}),j(),i.remove()})}function K(){var a,l,d,m,q,f,D,I;const e=document.getElementById("irr-left"),r=[...ne].filter(o=>o.id!==100).sort((o,p)=>o.name.localeCompare(p.name)),t=ie?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${O===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${O===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${r.map(o=>`<option value="${o.id}"${o.id===O?" selected":""}>${o.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"";e.innerHTML=`
    <div class="irr-lc-hd">Irrigation</div>
    ${t}

    <button class="irr-lc-btn${M==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${M==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${G("irr-s-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Date</label>
        <input type="date" class="irr-lc-input" id="irr-s-date" value="${k}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Quantité <span class="irr-lc-unit">(mm par parcelle)</span></label>
        <input type="number" class="irr-lc-input" id="irr-s-qty" value="10" min="1" />
      </div>
      <div class="irr-lc-err" id="irr-s-err" style="display:none">Veuillez sélectionner au moins une parcelle et renseigner tous les champs.</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-s-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${M==="saison"?" irr-lc-btn--active":""}" data-action="saison">
      <i class="bi bi-arrow-repeat"></i><span>Saisir une saison d'irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${M==="saison"?"":" irr-lc-form--hidden"}" id="irr-form-saison">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${G("irr-sa-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Début</label>
        <input type="date" class="irr-lc-input" id="irr-sa-debut" value="${k}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Fin</label>
        <input type="date" class="irr-lc-input" id="irr-sa-fin" value="${Y(k,120)}" />
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
      <div class="irr-lc-err" id="irr-sa-err" style="display:none">Veuillez sélectionner au moins une parcelle et renseigner tous les champs.</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-sa-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${M==="export"?" irr-lc-btn--active":""}" data-action="export">
      <i class="bi bi-download"></i><span>Exporter les irrigations</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${M==="export"?"":" irr-lc-form--hidden"}" id="irr-form-export">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${G("irr-ex-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Du</label>
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${v.length?[...v].sort((o,p)=>o.iso<p.iso?-1:1)[0].iso:k}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${v.length?[...v].sort((o,p)=>o.iso>p.iso?-1:1)[0].iso:k}" />
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
  `,M==="saisie"&&X(e,"irr-s-scope"),M==="saison"&&X(e,"irr-sa-scope"),M==="export"&&X(e,"irr-ex-scope"),(a=e.querySelector("#irr-org-select"))==null||a.addEventListener("change",o=>{const p=o.target.value;O=p===""?null:parseInt(p),V=O===null?U:U.filter(S=>S.orgId===O),F=0,K(),T()}),e.querySelectorAll(".irr-lc-btn").forEach(o=>{o.addEventListener("click",()=>{const p=o.dataset.action;M=M===p?null:p,K()})});function i(){var h,n,w,u;const o=(h=e.querySelector("#irr-sa-debut"))==null?void 0:h.value,p=(n=e.querySelector("#irr-sa-fin"))==null?void 0:n.value,S=parseInt((w=e.querySelector("#irr-sa-qty"))==null?void 0:w.value)||0,y=parseInt((u=e.querySelector("#irr-sa-freq"))==null?void 0:u.value)||0,c=e.querySelector("#irr-sa-preview");if(!c)return;if(!o||!p||y<=0){c.textContent="—";return}let g=0,b=new Date(o),s=new Date(p);for(;b<=s&&g<200;)g++,b.setDate(b.getDate()+y);c.innerHTML=g>0?`<span style="color:var(--pri);font-weight:600">↗ ${g} irrigations · ${g*S} mm au total</span>`:'<span style="color:var(--txt3)">Ajustez les paramètres</span>'}M==="saison"&&(i(),(l=e.querySelector("#irr-sa-debut"))==null||l.addEventListener("change",i),(d=e.querySelector("#irr-sa-fin"))==null||d.addEventListener("change",i),(m=e.querySelector("#irr-sa-qty"))==null||m.addEventListener("input",i),(q=e.querySelector("#irr-sa-freq"))==null||q.addEventListener("input",i)),(f=e.querySelector("#irr-ex-dl"))==null||f.addEventListener("click",()=>{const o=e.querySelector("#irr-ex-start").value,p=e.querySelector("#irr-ex-end").value,S=e.querySelector("#irr-ex-irrig").checked,y=e.querySelector("#irr-ex-rain").checked,c=J(e,"irr-ex-scope"),g=c.length>0?V.filter(x=>c.includes(x.id)):Z(),b=new Set;if(S)for(const x of v)x.iso>=o&&x.iso<=p&&b.add(x.iso);if(y)for(const x of N)x.iso>=o&&x.iso<=p&&b.add(x.iso);const s=[...b].sort(),h={};if(y)for(const x of N)h[x.iso]=x.mm;const n=["Date",...g.map(x=>x.name+(y?" (irrig.)":""))].join(";"),w=s.map(x=>{const R=g.map(H=>{const C=S?v.filter(B=>B.iso===x&&B.plotId===H.id).reduce((B,W)=>B+W.mm,0):0,P=y?h[x]??0:0,A=C+P;return A>0?A:""});return[x,...R].join(";")}),u=[n,...w].join(`
`),$=new Blob([u],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL($),L=Object.assign(document.createElement("a"),{href:E,download:`irrigations_${o}_${p}.csv`});document.body.appendChild(L),L.click(),setTimeout(()=>{URL.revokeObjectURL(E),L.remove()},100)}),(D=e.querySelector("#irr-s-save"))==null||D.addEventListener("click",()=>{const o=J(e,"irr-s-scope"),p=e.querySelector("#irr-s-date").value,S=parseInt(e.querySelector("#irr-s-qty").value)||0,y=e.querySelector("#irr-s-err");if(!o.length||!p||!S){y&&(y.style.display="");return}y&&(y.style.display="none");const c=p>k,g=()=>{o.forEach(s=>{v.push({iso:p,mm:S,real:!c,plotId:s,fromStrategy:!1})}),j(),ee("Irrigation enregistrée",[`Date : ${_(p)}`,`Quantité : ${S} mm`,`Parcelles : ${o.length} sélectionnée${o.length>1?"s":""}`])},b=v.filter(s=>o.includes(s.plotId)&&s.iso===p);if(b.length){te(b.length,`${o.length} parcelle(s)`,()=>{v.splice(0,v.length,...v.filter(s=>!(o.includes(s.plotId)&&s.iso===p))),g()});return}g()}),(I=e.querySelector("#irr-sa-save"))==null||I.addEventListener("click",()=>{const o=J(e,"irr-sa-scope"),p=e.querySelector("#irr-sa-debut").value,S=e.querySelector("#irr-sa-fin").value,y=parseInt(e.querySelector("#irr-sa-qty").value)||10,c=parseInt(e.querySelector("#irr-sa-freq").value)||7,g=e.querySelector("#irr-sa-err");if(!o.length||!p||!S){g&&(g.style.display="");return}g&&(g.style.display="none");const b=[];let s=new Date(p),h=new Date(S);for(;s<=h&&b.length<200;)b.push(new Date(s)),s.setDate(s.getDate()+c);const n=re(),w=()=>{o.forEach($=>{b.forEach(E=>{const L=E.toISOString().slice(0,10);v.push({iso:L,mm:y,real:L<=k,plotId:$,fromStrategy:!0,seasonId:n})})}),j(),ee("Saison enregistrée",[`Début : ${_(p)} · Fin : ${_(S)}`,`${b.length} irrigations · ${y} mm · tous les ${c} j`,`Parcelles : ${o.length} sélectionnée${o.length>1?"s":""}`])},u=v.filter($=>o.includes($.plotId)&&$.iso>=p&&$.iso<=S);if(u.length){te(u.length,`${o.length} parcelle(s)`,()=>{v.splice(0,v.length,...v.filter($=>!(o.includes($.plotId)&&$.iso>=p&&$.iso<=S))),w()});return}w()})}function ye(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",r=>{const t=r.target.closest("[data-tip]");if(!t){e.style.opacity="0";return}e.textContent=t.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",r=>{e.style.left=r.clientX+14+"px",e.style.top=r.clientY-36+"px"}),document.addEventListener("mouseout",r=>{var t;(t=r.relatedTarget)!=null&&t.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{ae(),ye(),K(),T(),window.addEventListener("irrig-updated",()=>{T();const t=document.getElementById("irr-detail"),i=t==null?void 0:t.dataset.plotId;if(!i)return;const a=V.find(l=>String(l.id)===i);a&&z(a)});const r=new URLSearchParams(window.location.search).get("plot");if(r){const t=V.find(i=>i.id===+r);t&&le(t)}});
