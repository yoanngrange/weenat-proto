import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as d,R as U,s as A,b as pe}from"./irrigations-B9z3zJvy.js";import{p as J}from"./plots-2gWiFi4a.js";import{o as ve}from"./orgs-Cx4wNzLL.js";import{u as me}from"./breadcrumb-DEBQjfiD.js";import"./irrigation-web-B-tPknGM.js";const be=1,ae=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let z=null,M=ae?J:J.filter(e=>e.orgId===be);const D=new Date().toISOString().split("T")[0];let C=null,H=0;function re(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}function Q(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]} ${e.split("-")[0]}`}function V(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]}`}function ge(e){const[,t,r]=e.split("-");return`${r}/${t}`}function B(){return pe(M)}function Z(e){if(!e||e==="all")return null;const t=B().find(i=>i.label===e);if(t)return{ids:t.ids,label:t.label};const r=M.find(i=>String(i.id)===String(e));return r?{ids:[r.id],label:r.name}:null}function fe(e){if(!e)return d;const t=B().find(i=>i.label===e.label);if(t)return d.filter(i=>i.label===t.label);const r=M.find(i=>i.name===e.label);if(r){const i=new Set(B().filter(p=>p.ids.includes(r.id)).map(p=>p.label));return d.filter(p=>p.label===r.name||i.has(p.label))}return d}function ne(e){const t=new Set([e.name]);for(const r of B())r.ids.includes(e.id)&&t.add(r.label);return t}function se(e,t){var p;(p=document.querySelector(".irr-save-confirm"))==null||p.remove();const r=document.createElement("div");r.className="irr-save-confirm",r.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(n=>`<div>${n}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(r);const i=()=>{r.remove(),O(!0)};r.addEventListener("click",n=>{n.target===r&&i()}),r.querySelector("#irr-confirm-close").addEventListener("click",i)}function le(e,t,r){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
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
    </div>`,document.body.appendChild(i);const p=()=>i.remove();i.addEventListener("click",c=>{c.target===i&&p()}),i.querySelector("#irr-cf-close").addEventListener("click",p),i.querySelector("#irr-cf-cancel").addEventListener("click",p),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),r()})}function ee(e,t=""){const r=B(),i=M.filter(c=>!r.some(f=>f.ids.includes(c.id))),p=r.map(c=>{const f=c.ids.map(w=>M.find(L=>L.id===w)).filter(Boolean).map(w=>`<option value="${w.id}"${String(t)===String(w.id)?" selected":""}>${w.name}</option>`).join("");return`<optgroup label="${c.label} (${c.ids.length} parcelles)">
      <option value="${c.label}"${t===c.label?" selected":""}>⬡ Groupe · ${c.label}</option>
      ${f}
    </optgroup>`}).join(""),n=i.length?`<optgroup label="Autres parcelles">${i.map(c=>`<option value="${c.id}"${String(t)===String(c.id)?" selected":""}>${c.name}</option>`).join("")}</optgroup>`:"";return`<select class="irr-lc-select" id="${e}">
    <option value="" disabled${t?"":" selected"}>— Sélectionner —</option>
    <option value="all"${t==="all"?" selected":""}>Toutes les parcelles</option>
    ${p}${n}
  </select>`}function oe(e){if(e.length<2)return"";const t=[...e].sort((o,q)=>o.iso<q.iso?-1:1),r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],i=new Date(t[0].iso),p=new Date(t[t.length-1].iso),n=Math.max(p-i,1),c=500,f=24,w=5,L=5,I=f-L-4,j=I-L-3,v=f+w+13,u=v+2,y=o=>Math.round((o-i)/n*c),S=o=>{const[,q,s]=o.split("-");return`${parseInt(s)}/${parseInt(q)}`},g=[],l=new Date(i.getFullYear(),i.getMonth()+1,1);for(;l<=p;)g.push(new Date(l)),l.setMonth(l.getMonth()+1);const m=g.map(o=>`<line x1="${y(o)}" y1="${f-6}" x2="${y(o)}" y2="${f+w+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),$=[i,...g,p],x=$.slice(0,-1).map((o,q)=>{const s=y(o),b=y($[q+1]);return b-s<16?"":`<text x="${Math.round((s+b)/2)}" y="${j}" font-size="9" fill="#B0AEA8" text-anchor="middle">${r[o.getMonth()]}</text>`}).join(""),a=t.map(o=>{const q=o.real?"#FF8500":"#FFB705",s=y(new Date(o.iso)),b=`${V(o.iso)} · ${o.mm} mm`;return`<circle cx="${s}" cy="${I}" r="${L}" fill="${q}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${s}" cy="${I}" r="${L+6}" fill="transparent" pointer-events="all" data-tip="${b}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${c}" height="${u}" viewBox="0 0 ${c} ${u}" style="width:100%;display:block">
      ${x}<rect x="0" y="${f}" width="${c}" height="${w}" rx="${w/2}" fill="#E0DED8"/>${m}${a}
      <text x="1" y="${v}" font-size="9" fill="#B0AEA8">${S(t[0].iso)}</text>
      <text x="${c-1}" y="${v}" font-size="9" fill="#B0AEA8" text-anchor="end">${S(t[t.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function ce(e){const t=e.filter(n=>n.real),r=e.filter(n=>!n.real),i=t.reduce((n,c)=>n+c.mm,0),p=r.reduce((n,c)=>n+c.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${i} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${p} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${i+p} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function O(e=!1){var a,o,q;const t=document.getElementById("irr-right"),r=re(D,14),i=[...d.map(s=>s.iso),...U.filter(s=>s.iso<=r).map(s=>s.iso),r];if(!d.length&&!U.length){t.innerHTML=`<div class="irr-rv-hd">Vue globale</div><div class="irr-pr-empty"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const p=[...i].sort()[0],n=d.length?[...d].map(s=>s.iso).sort().at(-1):null,c=n&&n>r?n:r,f=new Date(c);f.setMonth(f.getMonth()+H);const w=f.toISOString().split("T")[0],L=e?null:((a=t.querySelector("#irr-gl-body"))==null?void 0:a.scrollLeft)??null,I=[];let j=new Date(p);const v=new Date(w);for(;j<=v;)I.push(j.toISOString().split("T")[0]),j.setDate(j.getDate()+1);const u={};for(const s of U)u[s.iso]=s.mm;function y(s,b,E){if(!E)return 0;const[,k,h]=b.split("-").map(Number);if((s*13+k*7+h*3)%100<12)return 0;const R=.75+(s*11+h*5)%50/100;return Math.round(E*R)}const S=I.map(s=>`<th class="irr-gl-th${s===D?" irr-gl-th--today":""}">${ge(s)}</th>`).join("");function g(s){const b=ne(s),E=I.map(k=>{const h=k===D,T=d.filter(F=>F.iso===k&&b.has(F.label)),R=T.reduce((F,K)=>F+K.mm,0),G=T.some(F=>F.real),_=(s.id*7+3)%3-1,N=re(k,_),Y=y(s.id,k,u[N]??0);let P="";if(R){const F=G?"#E07820":"#FFB705",K=T.map(ue=>d.indexOf(ue)).join(",");P+=`<span class="irr-gl-val irr-gl-irrig" data-idxs="${K}" data-iso="${k}" style="color:${F};cursor:pointer">${R} mm</span>`}return Y&&(P+=`<span class="irr-gl-rain">${Y} mm</span>`),R||(P+=`<button class="irr-gl-add" data-plot-id="${s.id}" data-plot-name="${s.name}" data-iso="${k}">+</button>`),`<td class="irr-gl-td${h?" irr-gl-td--today":""}">${P}</td>`}).join("");return`<tr data-row-plot="${s.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${s.id}">${s.name}</span></td>${E}</tr>`}const l=B(),m=M.filter(s=>!l.some(b=>b.ids.includes(s.id))),$=I.map(s=>`<td class="irr-gl-td${s===D?" irr-gl-td--today":""}"></td>`).join(""),x=[...l.map(s=>{const b=s.ids.map(k=>M.find(h=>h.id===k)).filter(Boolean);return`<tr class="irr-gl-group-row" data-row-group="${s.label}"><td class="irr-gl-group-cell"><span class="irr-gl-group-link" data-group-label="${s.label}">⬡ ${s.label}</span></td>${$}</tr>`+b.map(g).join("")}),m.length?`<tr class="irr-gl-group-row"><td class="irr-gl-group-cell irr-gl-group-cell--other">Autres parcelles</td>${$}</tr>`+m.map(g).join(""):""].join("");t.innerHTML=`
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
          <thead id="irr-gl-thead"><tr><th class="irr-gl-plot-hd">Parcelles & groupes</th>${S}</tr></thead>
          <tbody>${x}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${H===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${H>0?`+${H} mois au-delà de la saison`:`Fin de saison : ${V(c)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var h;const s=t.querySelector("#irr-gl-body"),b=t.querySelector("#irr-gl-table"),E=t.querySelector("#irr-gl-scroll-top"),k=t.querySelector("#irr-gl-scroll-inner");if(!(!s||!b||!E||!k))if(k.style.width=b.offsetWidth+"px",E.addEventListener("scroll",()=>{s.scrollLeft=E.scrollLeft}),s.addEventListener("scroll",()=>{E.scrollLeft=s.scrollLeft}),L!==null)s.scrollLeft=L,E.scrollLeft=L;else{const T=t.querySelector(".irr-gl-th--today");if(T){const G=T.previousElementSibling??T,_=((h=t.querySelector(".irr-gl-plot-hd"))==null?void 0:h.offsetWidth)??120,N=G.offsetLeft-_;s.scrollLeft=N,E.scrollLeft=N}}}),(o=t.querySelector("#irr-gl-prev-month"))==null||o.addEventListener("click",()=>{H>0&&(H--,O())}),(q=t.querySelector("#irr-gl-next-month"))==null||q.addEventListener("click",()=>{H++,O()}),t.querySelectorAll(".irr-gl-irrig").forEach(s=>{s.addEventListener("click",()=>{ye(s.dataset.idxs.split(",").map(Number),s.dataset.iso)})}),t.querySelectorAll(".irr-gl-add").forEach(s=>{s.addEventListener("click",()=>{$e(s.dataset.plotId,s.dataset.plotName,s.dataset.iso)})}),t.querySelectorAll(".irr-gl-plot-link").forEach(s=>{s.addEventListener("click",()=>{const b=M.find(E=>String(E.id)===s.dataset.plotId);b&&he(b)})}),t.querySelectorAll(".irr-gl-group-link").forEach(s=>{s.addEventListener("click",()=>{const b=B().find(E=>E.label===s.dataset.groupLabel);b&&W(b)})})}function ye(e,t){var p;(p=document.querySelector(".irr-edit-overlay"))==null||p.remove();const r=document.createElement("div");r.className="irr-edit-overlay";const i=e.map(n=>d[n]).filter(Boolean);r.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${Q(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${i.map((n,c)=>`
          <div class="irr-edit-row">
            <span class="irr-edit-label">${n.label}</span>
            <input type="number" class="irr-edit-qty" data-i="${c}" value="${n.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${c}">🗑</button>
          </div>`).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(r),r.addEventListener("click",n=>{n.target===r&&r.remove()}),r.querySelector("#irr-edit-close").addEventListener("click",()=>r.remove()),r.querySelector("#irr-edit-cancel").addEventListener("click",()=>r.remove()),r.querySelectorAll(".irr-edit-del").forEach(n=>{n.addEventListener("click",()=>{const c=i[+n.dataset.i],f=d.indexOf(c);f>=0&&(d.splice(f,1),A()),r.remove()})}),r.querySelector("#irr-edit-save").addEventListener("click",()=>{r.querySelectorAll(".irr-edit-qty").forEach(n=>{const c=i[+n.dataset.i],f=parseInt(n.value);c&&f>0&&(c.mm=f,c.real=t<=D)}),A(),r.remove()})}function ie(e,t){var i,p;const r=document.getElementById("irr-right");r&&(r.querySelectorAll("[data-row-plot],[data-row-group]").forEach(n=>n.classList.remove("irr-gl-row--active")),e&&((i=r.querySelector(`[data-row-plot="${e}"]`))==null||i.classList.add("irr-gl-row--active")),t&&((p=r.querySelector(`[data-row-group="${CSS.escape(t)}"]`))==null||p.classList.add("irr-gl-row--active")))}function W(e){var v,u,y,S,g;const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!t||!r)return;if(r.dataset.plotId===`group:${e.label}`&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=`group:${e.label}`,r.style.display="",t.classList.add("irr-has-detail"),ie(null,e.label);const i=d.filter(l=>l.label===e.label),p=i.some(l=>l.fromStrategy),n=i.filter(l=>l.fromStrategy).sort((l,m)=>l.iso<m.iso?-1:1),c=(v=n[0])==null?void 0:v.iso,f=(u=n[n.length-1])==null?void 0:u.iso,w=i.filter(l=>l.real).sort((l,m)=>l.iso>m.iso?-1:1),L=i.filter(l=>!l.real).sort((l,m)=>l.iso<m.iso?-1:1),I=l=>{const m=d.indexOf(l),$=l.real?"#FF8500":"#FFB705",[,x,a]=l.iso.split("-");return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${$}"></div>
      <div class="irr-pr-date" style="color:${$};min-width:52px;font-size:13px;font-weight:600">${parseInt(a)} ${de[parseInt(x)-1]}</div>
      <div class="irr-pr-info"><div class="irr-pr-status" style="color:${$}">${l.real?"Réalisée":"Planifiée"}</div></div>
      <div class="irr-pr-mm" style="color:${$}">${l.mm} mm</div>
      <button class="irr-pr-del" data-idx="${m}">🗑</button>
    </div>`},j=p?`
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
          ${c&&f?`<div><strong>Saison :</strong> ${V(c)} → ${V(f)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>'}
        </div>
        ${j}
        ${ce(i)}
        ${oe(i)}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${w.length?`<details class="irr-pr-details"><summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${w.length}</span></summary><div>${w.map(I).join("")}</div></details>`:""}
      ${L.length?`<details class="irr-pr-details" open><summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${L.length}</span></summary><div>${L.map(I).join("")}</div></details>`:""}
      ${i.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation pour ce groupe</p></div>'}
    </div>`,(y=r.querySelector("#irr-det-strat-toggle"))==null||y.addEventListener("click",()=>{const l=r.querySelector("#irr-det-strat-opts");l.style.display=l.style.display==="none"?"":"none"}),(S=r.querySelector("#irr-det-stop"))==null||S.addEventListener("click",()=>{d.splice(0,d.length,...d.filter(l=>!(l.label===e.label&&!l.real&&l.iso>D))),A(),W(e),O(!0)}),(g=r.querySelector("#irr-det-del-all"))==null||g.addEventListener("click",()=>{d.splice(0,d.length,...d.filter(l=>l.label!==e.label)),A(),W(e),O(!0)}),r.querySelectorAll(".irr-pr-del").forEach(l=>{l.addEventListener("click",()=>{const m=+l.dataset.idx;m>=0&&(d.splice(m,1),A(),W(e))})}),r.querySelector("#irr-det-close").addEventListener("click",()=>{var l;(l=document.getElementById("irr-page"))==null||l.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId=""})}function he(e){const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!(!t||!r)){if(r.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=String(e.id),r.style.display="",t.classList.add("irr-has-detail"),ie(String(e.id),null),X(e)}}const de=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function X(e){var g,l,m,$,x;const t=document.getElementById("irr-detail");if(document.getElementById("irr-page"),!t)return;const i=B().find(a=>a.ids.includes(e.id)),p={ids:[e.id],label:e.name},n=fe(p),c=n.some(a=>a.fromStrategy),f=n.filter(a=>a.fromStrategy).sort((a,o)=>a.iso<o.iso?-1:1),w=(g=f[0])==null?void 0:g.iso,L=(l=f[f.length-1])==null?void 0:l.iso,I=i?`<div><strong>Groupe :</strong> ${i.label} — ${i.ids.length} parcelles</div>`:"",j=w&&L?`<div><strong>Saison :</strong> ${V(w)} → ${V(L)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',v=n.filter(a=>a.real).sort((a,o)=>a.iso>o.iso?-1:1),u=n.filter(a=>!a.real).sort((a,o)=>a.iso<o.iso?-1:1),y=a=>{const o=d.indexOf(a),q=a.real?"#FF8500":"#FFB705",[,s,b]=a.iso.split("-"),E=`${parseInt(b)} ${de[parseInt(s)-1]}`;return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${q}"></div>
      <div class="irr-pr-date" style="color:${q};min-width:52px;font-size:13px;font-weight:600">${E}</div>
      <div class="irr-pr-info"><div class="irr-pr-status" style="color:${q}">${a.real?"Réalisée":"Planifiée"}</div></div>
      <div class="irr-pr-mm" style="color:${q}">${a.mm} mm</div>
      <button class="irr-pr-del" data-idx="${o}">🗑</button>
    </div>`},S=c?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-stop">Arrêter la saison <span>supprime les irrigations futures</span></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all">Supprimer la saison <span>supprime toutes les irrigations</span></button>
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
        <div class="irr-det-meta">${I}${j}</div>
        ${S}
        ${ce(n)}
        ${oe(n)}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${v.length?`
        <details class="irr-pr-details">
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${v.length}</span></summary>
          <div>${v.map(y).join("")}</div>
        </details>`:""}
      ${u.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${u.length}</span></summary>
          <div>${u.map(y).join("")}</div>
        </details>`:""}
      ${n.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(m=t.querySelector("#irr-det-strat-toggle"))==null||m.addEventListener("click",()=>{const a=t.querySelector("#irr-det-strat-opts");a.style.display=a.style.display==="none"?"":"none"}),($=t.querySelector("#irr-det-stop"))==null||$.addEventListener("click",()=>{const a=new Set([e.name]);B().filter(o=>o.ids.includes(e.id)).forEach(o=>a.add(o.label)),d.splice(0,d.length,...d.filter(o=>!(a.has(o.label)&&!o.real&&o.iso>D))),A(),X(e),O(!0)}),(x=t.querySelector("#irr-det-del-all"))==null||x.addEventListener("click",()=>{const a=new Set([e.name]);B().filter(o=>o.ids.includes(e.id)).forEach(o=>a.add(o.label)),d.splice(0,d.length,...d.filter(o=>!a.has(o.label))),A(),X(e),O(!0)}),t.querySelectorAll(".irr-pr-del").forEach(a=>{a.addEventListener("click",()=>{const o=+a.dataset.idx;o>=0&&(d.splice(o,1),A(),X(e))})}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var a;(a=document.getElementById("irr-page"))==null||a.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",ie(null,null)})}function $e(e,t,r){var p;(p=document.querySelector(".irr-edit-overlay"))==null||p.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${Q(r)}</span>
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
    </div>`,document.body.appendChild(i),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelector("#irr-qa-close").addEventListener("click",()=>i.remove()),i.querySelector("#irr-qa-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#irr-qa-save").addEventListener("click",()=>{const n=parseInt(i.querySelector("#irr-qa-qty").value)||10,c=M.find(f=>String(f.id)===String(e));c&&(d.push({iso:r,mm:n,real:r<=D,label:c.name,fromStrategy:!1}),A()),i.remove()})}function te(){var p,n,c,f,w,L,I,j;const e=document.getElementById("irr-left"),t=[...ve].filter(v=>v.id!==100).sort((v,u)=>v.name.localeCompare(u.name)),r=ae?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${z===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${z===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${t.map(v=>`<option value="${v.id}"${v.id===z?" selected":""}>${v.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"";e.innerHTML=`
    <div class="irr-lc-hd">Irrigation</div>
    ${r}

    <button class="irr-lc-btn${C==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${C==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
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

    <button class="irr-lc-btn${C==="saison"?" irr-lc-btn--active":""}" data-action="saison">
      <i class="bi bi-arrow-repeat"></i><span>Saisir une saison d'irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${C==="saison"?"":" irr-lc-form--hidden"}" id="irr-form-saison">
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

    <button class="irr-lc-btn${C==="export"?" irr-lc-btn--active":""}" data-action="export">
      <i class="bi bi-download"></i><span>Exporter les irrigations</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${C==="export"?"":" irr-lc-form--hidden"}" id="irr-form-export">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Périmètre</label>
        ${ee("irr-ex-scope","all")}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Du</label>
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${d.length?[...d].sort((v,u)=>v.iso<u.iso?-1:1)[0].iso:D}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${d.length?[...d].sort((v,u)=>v.iso>u.iso?-1:1)[0].iso:D}" />
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
  `,(p=e.querySelector("#irr-org-select"))==null||p.addEventListener("change",v=>{const u=v.target.value;z=u===""?null:parseInt(u),M=z===null?J:J.filter(y=>y.orgId===z),H=0,te(),O()}),e.querySelectorAll(".irr-lc-btn").forEach(v=>{v.addEventListener("click",()=>{const u=v.dataset.action;C=C===u?null:u,te()})});function i(){var x,a,o,q;const v=(x=e.querySelector("#irr-sa-debut"))==null?void 0:x.value,u=(a=e.querySelector("#irr-sa-fin"))==null?void 0:a.value,y=parseInt((o=e.querySelector("#irr-sa-qty"))==null?void 0:o.value)||0,S=parseInt((q=e.querySelector("#irr-sa-freq"))==null?void 0:q.value)||0,g=e.querySelector("#irr-sa-preview");if(!g)return;if(!v||!u||S<=0){g.textContent="—";return}let l=0,m=new Date(v),$=new Date(u);for(;m<=$&&l<200;)l++,m.setDate(m.getDate()+S);g.innerHTML=l>0?`<span style="color:var(--pri);font-weight:600">↗ ${l} irrigations · ${l*y} mm au total</span>`:'<span style="color:var(--txt3)">Ajustez les paramètres</span>'}C==="saison"&&(i(),(n=e.querySelector("#irr-sa-debut"))==null||n.addEventListener("change",i),(c=e.querySelector("#irr-sa-fin"))==null||c.addEventListener("change",i),(f=e.querySelector("#irr-sa-qty"))==null||f.addEventListener("input",i),(w=e.querySelector("#irr-sa-freq"))==null||w.addEventListener("input",i)),(L=e.querySelector("#irr-ex-dl"))==null||L.addEventListener("click",()=>{const v=e.querySelector("#irr-ex-scope").value,u=e.querySelector("#irr-ex-start").value,y=e.querySelector("#irr-ex-end").value,S=e.querySelector("#irr-ex-irrig").checked,g=e.querySelector("#irr-ex-rain").checked,l=Z(v),m=l?M.filter(h=>l.ids.includes(h.id)):M,$=new Set;if(S)for(const h of d)h.iso>=u&&h.iso<=y&&$.add(h.iso);if(g)for(const h of U)h.iso>=u&&h.iso<=y&&$.add(h.iso);const x=[...$].sort(),a={};if(g)for(const h of U)a[h.iso]=h.mm;const o=["Date",...m.map(h=>h.name+(g?" (irrig.)":""))].join(";"),q=x.map(h=>{const T=m.map(R=>{const G=ne(R),_=S?d.filter(P=>P.iso===h&&G.has(P.label)).reduce((P,F)=>P+F.mm,0):0,N=g?a[h]??0:0,Y=_+N;return Y>0?Y:""});return[h,...T].join(";")}),s=[o,...q].join(`
`),b=new Blob([s],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(b),k=Object.assign(document.createElement("a"),{href:E,download:`irrigations_${u}_${y}.csv`});document.body.appendChild(k),k.click(),setTimeout(()=>{URL.revokeObjectURL(E),k.remove()},100)}),(I=e.querySelector("#irr-s-save"))==null||I.addEventListener("click",()=>{const v=e.querySelector("#irr-s-scope").value,u=e.querySelector("#irr-s-date").value,y=parseInt(e.querySelector("#irr-s-qty").value)||0,S=e.querySelector("#irr-s-err");if(!v||!u||!y){S&&(S.style.display="");return}S&&(S.style.display="none");const g=Z(v),l=u>D,m=g?[g.label]:[],$=()=>{m.forEach(a=>d.push({iso:u,mm:y,real:!l,label:a,fromStrategy:!1})),A(),se("Irrigation enregistrée",[`Date : ${Q(u)}`,`Quantité : ${y} mm`,`Périmètre : ${(g==null?void 0:g.label)??"Toutes les parcelles"}`])},x=d.filter(a=>m.includes(a.label));if(x.length){le(x.length,(g==null?void 0:g.label)??"Toutes les parcelles",()=>{d.splice(0,d.length,...d.filter(a=>!m.includes(a.label))),$()});return}$()}),(j=e.querySelector("#irr-sa-save"))==null||j.addEventListener("click",()=>{const v=e.querySelector("#irr-sa-scope").value,u=e.querySelector("#irr-sa-debut").value,y=e.querySelector("#irr-sa-fin").value,S=parseInt(e.querySelector("#irr-sa-qty").value)||10,g=parseInt(e.querySelector("#irr-sa-freq").value)||7,l=e.querySelector("#irr-sa-err");if(!v||!u||!y){l&&(l.style.display="");return}l&&(l.style.display="none");const m=Z(v),$=m?[m.label]:[],x=[];let a=new Date(u),o=new Date(y);for(;a<=o&&x.length<200;)x.push(new Date(a)),a.setDate(a.getDate()+g);const q=()=>{$.forEach(b=>x.forEach(E=>{const k=E.toISOString().slice(0,10);d.push({iso:k,mm:S,real:k<=D,label:b,fromStrategy:!0})})),A(),se("Saison enregistrée",[`Début : ${Q(u)} · Fin : ${Q(y)}`,`${x.length} irrigations · ${S} mm · tous les ${g} j`,`Périmètre : ${(m==null?void 0:m.label)??"Toutes les parcelles"}`])},s=d.filter(b=>$.includes(b.label)&&b.iso>=u&&b.iso<=y);if(s.length){le(s.length,(m==null?void 0:m.label)??"Toutes les parcelles",()=>{d.splice(0,d.length,...d.filter(b=>!($.includes(b.label)&&b.iso>=u&&b.iso<=y))),q()});return}q()})}function Se(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const r=t.target.closest("[data-tip]");if(!r){e.style.opacity="0";return}e.textContent=r.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var r;(r=t.relatedTarget)!=null&&r.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{me(),Se(),te(),O(),window.addEventListener("irrig-updated",()=>{O()})});
