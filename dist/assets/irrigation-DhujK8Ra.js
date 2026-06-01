import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as p,R as V,g as le,s as B}from"./irrigations-C22Dtsoo.js";import{p as U}from"./plots-BFmvZ9cD.js";import{o as ne}from"./orgs-Cx4wNzLL.js";import{u as ae}from"./breadcrumb-DEBQjfiD.js";import"./irrigation-web-CUKIccr7.js";import"./store-InOgbptE.js";import"./constants-C2D4LmLD.js";const oe=1,te=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let R=null,C=te?U:U.filter(e=>e.orgId===oe);const k=new Date().toISOString().split("T")[0];let M=null,T=0;function J(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}function _(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]} ${e.split("-")[0]}`}function Y(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]}`}function ce(e){const[,t,r]=e.split("-");return`${r}/${t}`}function de(e){return[e.name,e.crop,e.irrigation].filter(Boolean).join(" — ")}function Z(){return[...C].sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function W(e,t={}){const{allBtn:r=!1}=t,i=Z().map(d=>`
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${d.id}" />
      <span class="irr-msel-name">${de(d)}</span>
    </label>`).join("");return`<div class="irr-msel" id="${e}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${i}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${r?'<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>':""}
    </div>
  </div>`}function G(e,t){const r=e.querySelector(`#${t}`);if(!r)return;const i=r.querySelector(".irr-msel-search"),d=r.querySelector(".irr-msel-count"),n=r.querySelector(".irr-msel-all-btn"),f=()=>{const v=r.querySelectorAll(".irr-msel-cb:checked").length;d.textContent=`${v} sélectionnée${v!==1?"s":""}`};i.addEventListener("input",()=>{const v=i.value.toLowerCase();r.querySelectorAll(".irr-msel-item").forEach(w=>{w.style.display=w.querySelector(".irr-msel-name").textContent.toLowerCase().includes(v)?"":"none"})}),r.querySelectorAll(".irr-msel-cb").forEach(v=>v.addEventListener("change",f)),n==null||n.addEventListener("click",()=>{const v=[...r.querySelectorAll(".irr-msel-cb")].filter(h=>h.closest(".irr-msel-item").style.display!=="none"),w=v.some(h=>!h.checked);v.forEach(h=>{h.checked=w}),f()})}function X(e,t){const r=e.querySelector(`#${t}`);return r?[...r.querySelectorAll(".irr-msel-cb:checked")].map(i=>+i.value):[]}function ee(e,t){var d;(d=document.querySelector(".irr-save-confirm"))==null||d.remove();const r=document.createElement("div");r.className="irr-save-confirm",r.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(n=>`<div>${n}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(r);const i=()=>{r.remove(),F(!0)};r.addEventListener("click",n=>{n.target===r&&i()}),r.querySelector("#irr-confirm-close").addEventListener("click",i)}function re(e,t,r){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigations existantes</span>
        <button class="irr-edit-close" id="irr-cf-close">×</button>
      </div>
      <div class="irr-edit-body" style="font-size:13px;color:var(--txt);line-height:1.5">
        <p style="margin:0"><strong>${e} irrigation${e>1?"s":""}</strong> déjà enregistrée${e>1?"s":""} pour <strong>${t}</strong>.</p>
        <p style="margin:8px 0 0;color:var(--txt2)">Voulez-vous les écraser avec la nouvelle saisie ?</p>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-cf-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-cf-overwrite">Écraser</button>
      </div>
    </div>`,document.body.appendChild(i);const d=()=>i.remove();i.addEventListener("click",f=>{f.target===i&&d()}),i.querySelector("#irr-cf-close").addEventListener("click",d),i.querySelector("#irr-cf-cancel").addEventListener("click",d),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),r()})}function ue(e){if(e.length<2)return"";const t=[...e].sort((c,u)=>c.iso<u.iso?-1:1),r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],i=new Date(t[0].iso),d=new Date(t[t.length-1].iso),n=Math.max(d-i,1),f=500,v=24,w=5,h=5,L=v-h-4,D=L-h-3,a=v+w+13,o=a+2,g=c=>Math.round((c-i)/n*f),$=c=>{const[,u,y]=c.split("-");return`${parseInt(y)}/${parseInt(u)}`},q=[],b=new Date(i.getFullYear(),i.getMonth()+1,1);for(;b<=d;)q.push(new Date(b)),b.setMonth(b.getMonth()+1);const s=q.map(c=>`<line x1="${g(c)}" y1="${v-6}" x2="${g(c)}" y2="${v+w+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),m=[i,...q,d],x=m.slice(0,-1).map((c,u)=>{const y=g(c),E=g(m[u+1]);return E-y<16?"":`<text x="${Math.round((y+E)/2)}" y="${D}" font-size="9" fill="#B0AEA8" text-anchor="middle">${r[c.getMonth()]}</text>`}).join(""),l=t.map(c=>{const u=c.real?"#FF8500":"#FFB705",y=g(new Date(c.iso)),E=`${Y(c.iso)} · ${c.mm} mm`;return`<circle cx="${y}" cy="${L}" r="${h}" fill="${u}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${y}" cy="${L}" r="${h+6}" fill="transparent" pointer-events="all" data-tip="${E}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${f}" height="${o}" viewBox="0 0 ${f} ${o}" style="width:100%;display:block">
      ${x}<rect x="0" y="${v}" width="${f}" height="${w}" rx="${w/2}" fill="#E0DED8"/>${s}${l}
      <text x="1" y="${a}" font-size="9" fill="#B0AEA8">${$(t[0].iso)}</text>
      <text x="${f-1}" y="${a}" font-size="9" fill="#B0AEA8" text-anchor="end">${$(t[t.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function pe(e){const t=e.filter(n=>n.real),r=e.filter(n=>!n.real),i=t.reduce((n,f)=>n+f.mm,0),d=r.reduce((n,f)=>n+f.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${i} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${d} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${i+d} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function F(e=!1){var s,m,x;const t=document.getElementById("irr-right"),r=J(k,14),i=[...p.map(l=>l.iso),...V.filter(l=>l.iso<=r).map(l=>l.iso),r];if(!p.length&&!V.length){t.innerHTML=`<div class="irr-rv-hd">Vue globale</div><div class="irr-pr-empty"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const d=[...i].sort()[0],n=p.length?[...p].map(l=>l.iso).sort().at(-1):null,f=n&&n>r?n:r,v=new Date(f);v.setMonth(v.getMonth()+T);const w=v.toISOString().split("T")[0],h=e?null:((s=t.querySelector("#irr-gl-body"))==null?void 0:s.scrollLeft)??null,L=[];let D=new Date(d);const a=new Date(w);for(;D<=a;)L.push(D.toISOString().split("T")[0]),D.setDate(D.getDate()+1);const o={};for(const l of V)o[l.iso]=l.mm;function g(l,c,u){if(!u)return 0;const[,y,E]=c.split("-").map(Number);if((l*13+y*7+E*3)%100<12)return 0;const S=.75+(l*11+E*5)%50/100;return Math.round(u*S)}const $=L.map(l=>`<th class="irr-gl-th${l===k?" irr-gl-th--today":""}">${ce(l)}</th>`).join("");function q(l){const c=L.map(u=>{const y=u===k,E=p.filter(A=>A.iso===u&&A.plotId===l.id),I=E.reduce((A,j)=>A+j.mm,0),S=E.some(A=>A.real),H=(l.id*7+3)%3-1,N=J(u,H),P=g(l.id,u,o[N]??0);let O="";if(I){const A=S?"#E07820":"#FFB705",j=E.map(Q=>p.indexOf(Q)).join(",");O+=`<span class="irr-gl-val irr-gl-irrig" data-idxs="${j}" data-iso="${u}" style="color:${A};cursor:pointer">${I} mm</span>`}return P&&(O+=`<span class="irr-gl-rain">${P} mm</span>`),I||(O+=`<button class="irr-gl-add" data-plot-id="${l.id}" data-plot-name="${l.name}" data-iso="${u}">+</button>`),`<td class="irr-gl-td${y?" irr-gl-td--today":""}">${O}</td>`}).join("");return`<tr data-row-plot="${l.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${l.id}">${l.name}</span></td>${c}</tr>`}const b=Z().map(q).join("");t.innerHTML=`
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
          <thead id="irr-gl-thead"><tr><th class="irr-gl-plot-hd">Parcelles</th>${$}</tr></thead>
          <tbody>${b}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${T===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${T>0?`+${T} mois au-delà de la saison`:`Fin de saison : ${Y(f)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var E;const l=t.querySelector("#irr-gl-body"),c=t.querySelector("#irr-gl-table"),u=t.querySelector("#irr-gl-scroll-top"),y=t.querySelector("#irr-gl-scroll-inner");if(!(!l||!c||!u||!y))if(y.style.width=c.offsetWidth+"px",u.addEventListener("scroll",()=>{l.scrollLeft=u.scrollLeft}),l.addEventListener("scroll",()=>{u.scrollLeft=l.scrollLeft}),h!==null)l.scrollLeft=h,u.scrollLeft=h;else{const I=t.querySelector(".irr-gl-th--today");if(I){const H=I.previousElementSibling??I,N=((E=t.querySelector(".irr-gl-plot-hd"))==null?void 0:E.offsetWidth)??120,P=H.offsetLeft-N;l.scrollLeft=P,u.scrollLeft=P}}}),(m=t.querySelector("#irr-gl-prev-month"))==null||m.addEventListener("click",()=>{T>0&&(T--,F())}),(x=t.querySelector("#irr-gl-next-month"))==null||x.addEventListener("click",()=>{T++,F()}),t.querySelectorAll(".irr-gl-irrig").forEach(l=>{l.addEventListener("click",()=>{ve(l.dataset.idxs.split(",").map(Number),l.dataset.iso)})}),t.querySelectorAll(".irr-gl-add").forEach(l=>{l.addEventListener("click",()=>{fe(l.dataset.plotId,l.dataset.plotName,l.dataset.iso)})}),t.querySelectorAll(".irr-gl-plot-link").forEach(l=>{l.addEventListener("click",()=>{const c=C.find(u=>String(u.id)===l.dataset.plotId);c&&se(c)})})}function ve(e,t){var d;(d=document.querySelector(".irr-edit-overlay"))==null||d.remove();const r=document.createElement("div");r.className="irr-edit-overlay";const i=e.map(n=>p[n]).filter(Boolean);r.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${_(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${i.map((n,f)=>{const v=C.find(h=>h.id===n.plotId);return`<div class="irr-edit-row">
            <span class="irr-edit-label">${v?v.name:`Parcelle ${n.plotId}`}</span>
            <input type="number" class="irr-edit-qty" data-i="${f}" value="${n.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${f}">🗑</button>
          </div>`}).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(r),r.addEventListener("click",n=>{n.target===r&&r.remove()}),r.querySelector("#irr-edit-close").addEventListener("click",()=>r.remove()),r.querySelector("#irr-edit-cancel").addEventListener("click",()=>r.remove()),r.querySelectorAll(".irr-edit-del").forEach(n=>{n.addEventListener("click",()=>{const f=i[+n.dataset.i],v=p.indexOf(f);v>=0&&(p.splice(v,1),B()),r.remove()})}),r.querySelector("#irr-edit-save").addEventListener("click",()=>{r.querySelectorAll(".irr-edit-qty").forEach(n=>{const f=i[+n.dataset.i],v=parseInt(n.value);f&&v>0&&(f.mm=v,f.real=t<=k)}),B(),r.remove()})}function ie(e){var r;const t=document.getElementById("irr-right");t&&(t.querySelectorAll("[data-row-plot]").forEach(i=>i.classList.remove("irr-gl-row--active")),e&&((r=t.querySelector(`[data-row-plot="${e}"]`))==null||r.classList.add("irr-gl-row--active")))}function se(e){const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!(!t||!r)){if(r.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=String(e.id),r.style.display="",t.classList.add("irr-has-detail"),ie(String(e.id)),z(e)}}const me=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function z(e){var o,g,$,q,b;const t=document.getElementById("irr-detail");if(!t)return;const r=p.filter(s=>s.plotId===e.id),i=r.some(s=>s.fromStrategy&&s.seasonId),d=r.filter(s=>s.fromStrategy).sort((s,m)=>s.iso<m.iso?-1:1),n=(o=d[0])==null?void 0:o.iso,f=(g=d[d.length-1])==null?void 0:g.iso,v=new Set(r.filter(s=>s.fromStrategy&&s.seasonId).map(s=>s.seasonId)),w=n&&f?`<div><strong>Saison :</strong> ${Y(n)} → ${Y(f)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',h=r.filter(s=>s.real).sort((s,m)=>s.iso>m.iso?-1:1),L=r.filter(s=>!s.real).sort((s,m)=>s.iso<m.iso?-1:1),D=s=>{const m=p.indexOf(s),x=s.real?"#FF8500":"#FFB705",[,l,c]=s.iso.split("-"),u=`${parseInt(c)} ${me[parseInt(l)-1]}`;return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${x}"></div>
      <div class="irr-pr-date" style="color:${x};min-width:52px;font-size:13px;font-weight:600">${u}</div>
      <div class="irr-pr-info"><div class="irr-pr-status" style="color:${x}">${s.real?"Réalisée":"Planifiée"}</div></div>
      <div class="irr-pr-mm" style="color:${x}">${s.mm} mm</div>
      <button class="irr-pr-del" data-idx="${m}">🗑</button>
    </div>`},a=i?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-stop">Arrêter la saison <span>supprime les irrigations futures de cette parcelle</span></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all">Supprimer la saison <span>supprime toutes les irrigations de cette parcelle</span></button>
      </div>
    </div>`:"";t.innerHTML=`
    <div class="irr-det-sticky">
      <div class="irr-det-hd">
        <span class="irr-det-eyebrow">Vue détail</span>
        <span class="irr-det-name">${e.name}</span>
        <a class="irr-det-link" href="parcelle-detail.html?id=${e.id}">Voir la parcelle →</a>
        <button class="irr-det-close" id="irr-det-close">×</button>
      </div>
      <div class="irr-det-body">
        <div class="irr-det-meta">${w}</div>
        ${a}
        ${pe(r)}
        ${ue(r)}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${h.length?`
        <details class="irr-pr-details">
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${h.length}</span></summary>
          <div>${h.map(D).join("")}</div>
        </details>`:""}
      ${L.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${L.length}</span></summary>
          <div>${L.map(D).join("")}</div>
        </details>`:""}
      ${r.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,($=t.querySelector("#irr-det-strat-toggle"))==null||$.addEventListener("click",()=>{const s=t.querySelector("#irr-det-strat-opts");s.style.display=s.style.display==="none"?"":"none"}),(q=t.querySelector("#irr-det-stop"))==null||q.addEventListener("click",()=>{p.splice(0,p.length,...p.filter(s=>!(s.plotId===e.id&&v.has(s.seasonId)&&!s.real&&s.iso>k))),B(),z(e),F(!0)}),(b=t.querySelector("#irr-det-del-all"))==null||b.addEventListener("click",()=>{p.splice(0,p.length,...p.filter(s=>!(s.plotId===e.id&&v.has(s.seasonId)))),B(),z(e),F(!0)}),t.querySelectorAll(".irr-pr-del").forEach(s=>{s.addEventListener("click",()=>{const m=+s.dataset.idx;m>=0&&(p.splice(m,1),B(),z(e))})}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var s;(s=document.getElementById("irr-page"))==null||s.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",ie(null)})}function fe(e,t,r){var d;(d=document.querySelector(".irr-edit-overlay"))==null||d.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${_(r)}</span>
        <button class="irr-edit-close" id="irr-qa-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${t}</span>
          <input type="number" class="irr-edit-qty" id="irr-qa-qty" value="10" min="1" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-qa-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-qa-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(i),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelector("#irr-qa-close").addEventListener("click",()=>i.remove()),i.querySelector("#irr-qa-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#irr-qa-save").addEventListener("click",()=>{const n=parseInt(i.querySelector("#irr-qa-qty").value)||10;p.push({iso:r,mm:n,real:r<=k,plotId:+e,fromStrategy:!1}),B(),i.remove()})}function K(){var d,n,f,v,w,h,L,D;const e=document.getElementById("irr-left"),t=[...ne].filter(a=>a.id!==100).sort((a,o)=>a.name.localeCompare(o.name)),r=te?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${R===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${R===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${t.map(a=>`<option value="${a.id}"${a.id===R?" selected":""}>${a.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"";e.innerHTML=`
    <div class="irr-lc-hd">Irrigation</div>
    ${r}

    <button class="irr-lc-btn${M==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${M==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${W("irr-s-scope",{allBtn:!0})}
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
        ${W("irr-sa-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Début</label>
        <input type="date" class="irr-lc-input" id="irr-sa-debut" value="${k}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Fin</label>
        <input type="date" class="irr-lc-input" id="irr-sa-fin" value="${J(k,120)}" />
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
        ${W("irr-ex-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Du</label>
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${p.length?[...p].sort((a,o)=>a.iso<o.iso?-1:1)[0].iso:k}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${p.length?[...p].sort((a,o)=>a.iso>o.iso?-1:1)[0].iso:k}" />
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
  `,M==="saisie"&&G(e,"irr-s-scope"),M==="saison"&&G(e,"irr-sa-scope"),M==="export"&&G(e,"irr-ex-scope"),(d=e.querySelector("#irr-org-select"))==null||d.addEventListener("change",a=>{const o=a.target.value;R=o===""?null:parseInt(o),C=R===null?U:U.filter(g=>g.orgId===R),T=0,K(),F()}),e.querySelectorAll(".irr-lc-btn").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.action;M=M===o?null:o,K()})});function i(){var x,l,c,u;const a=(x=e.querySelector("#irr-sa-debut"))==null?void 0:x.value,o=(l=e.querySelector("#irr-sa-fin"))==null?void 0:l.value,g=parseInt((c=e.querySelector("#irr-sa-qty"))==null?void 0:c.value)||0,$=parseInt((u=e.querySelector("#irr-sa-freq"))==null?void 0:u.value)||0,q=e.querySelector("#irr-sa-preview");if(!q)return;if(!a||!o||$<=0){q.textContent="—";return}let b=0,s=new Date(a),m=new Date(o);for(;s<=m&&b<200;)b++,s.setDate(s.getDate()+$);q.innerHTML=b>0?`<span style="color:var(--pri);font-weight:600">↗ ${b} irrigations · ${b*g} mm au total</span>`:'<span style="color:var(--txt3)">Ajustez les paramètres</span>'}M==="saison"&&(i(),(n=e.querySelector("#irr-sa-debut"))==null||n.addEventListener("change",i),(f=e.querySelector("#irr-sa-fin"))==null||f.addEventListener("change",i),(v=e.querySelector("#irr-sa-qty"))==null||v.addEventListener("input",i),(w=e.querySelector("#irr-sa-freq"))==null||w.addEventListener("input",i)),(h=e.querySelector("#irr-ex-dl"))==null||h.addEventListener("click",()=>{const a=e.querySelector("#irr-ex-start").value,o=e.querySelector("#irr-ex-end").value,g=e.querySelector("#irr-ex-irrig").checked,$=e.querySelector("#irr-ex-rain").checked,q=X(e,"irr-ex-scope"),b=q.length>0?C.filter(S=>q.includes(S.id)):Z(),s=new Set;if(g)for(const S of p)S.iso>=a&&S.iso<=o&&s.add(S.iso);if($)for(const S of V)S.iso>=a&&S.iso<=o&&s.add(S.iso);const m=[...s].sort(),x={};if($)for(const S of V)x[S.iso]=S.mm;const l=["Date",...b.map(S=>S.name+($?" (irrig.)":""))].join(";"),c=m.map(S=>{const H=b.map(N=>{const P=g?p.filter(j=>j.iso===S&&j.plotId===N.id).reduce((j,Q)=>j+Q.mm,0):0,O=$?x[S]??0:0,A=P+O;return A>0?A:""});return[S,...H].join(";")}),u=[l,...c].join(`
`),y=new Blob([u],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(y),I=Object.assign(document.createElement("a"),{href:E,download:`irrigations_${a}_${o}.csv`});document.body.appendChild(I),I.click(),setTimeout(()=>{URL.revokeObjectURL(E),I.remove()},100)}),(L=e.querySelector("#irr-s-save"))==null||L.addEventListener("click",()=>{const a=X(e,"irr-s-scope"),o=e.querySelector("#irr-s-date").value,g=parseInt(e.querySelector("#irr-s-qty").value)||0,$=e.querySelector("#irr-s-err");if(!a.length||!o||!g){$&&($.style.display="");return}$&&($.style.display="none");const q=o>k,b=()=>{a.forEach(m=>{p.push({iso:o,mm:g,real:!q,plotId:m,fromStrategy:!1})}),B(),ee("Irrigation enregistrée",[`Date : ${_(o)}`,`Quantité : ${g} mm`,`Parcelles : ${a.length} sélectionnée${a.length>1?"s":""}`])},s=p.filter(m=>a.includes(m.plotId)&&m.iso===o);if(s.length){re(s.length,`${a.length} parcelle(s)`,()=>{p.splice(0,p.length,...p.filter(m=>!(a.includes(m.plotId)&&m.iso===o))),b()});return}b()}),(D=e.querySelector("#irr-sa-save"))==null||D.addEventListener("click",()=>{const a=X(e,"irr-sa-scope"),o=e.querySelector("#irr-sa-debut").value,g=e.querySelector("#irr-sa-fin").value,$=parseInt(e.querySelector("#irr-sa-qty").value)||10,q=parseInt(e.querySelector("#irr-sa-freq").value)||7,b=e.querySelector("#irr-sa-err");if(!a.length||!o||!g){b&&(b.style.display="");return}b&&(b.style.display="none");const s=[];let m=new Date(o),x=new Date(g);for(;m<=x&&s.length<200;)s.push(new Date(m)),m.setDate(m.getDate()+q);const l=le(),c=()=>{a.forEach(y=>{s.forEach(E=>{const I=E.toISOString().slice(0,10);p.push({iso:I,mm:$,real:I<=k,plotId:y,fromStrategy:!0,seasonId:l})})}),B(),ee("Saison enregistrée",[`Début : ${_(o)} · Fin : ${_(g)}`,`${s.length} irrigations · ${$} mm · tous les ${q} j`,`Parcelles : ${a.length} sélectionnée${a.length>1?"s":""}`])},u=p.filter(y=>a.includes(y.plotId)&&y.iso>=o&&y.iso<=g);if(u.length){re(u.length,`${a.length} parcelle(s)`,()=>{p.splice(0,p.length,...p.filter(y=>!(a.includes(y.plotId)&&y.iso>=o&&y.iso<=g))),c()});return}c()})}function ge(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const r=t.target.closest("[data-tip]");if(!r){e.style.opacity="0";return}e.textContent=r.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var r;(r=t.relatedTarget)!=null&&r.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{ae(),ge(),K(),F(),window.addEventListener("irrig-updated",()=>{F();const r=document.getElementById("irr-detail"),i=r==null?void 0:r.dataset.plotId;if(!i)return;const d=C.find(n=>String(n.id)===i);d&&z(d)});const t=new URLSearchParams(window.location.search).get("plot");if(t){const r=C.find(i=>i.id===+t);r&&se(r)}});
