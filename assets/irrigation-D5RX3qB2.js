import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as p,s as D,R as N,b as ne}from"./irrigations-cQAUTeq7.js";import{p as oe}from"./plots-BEYIGwLd.js";import{u as ce}from"./breadcrumb-DEBQjfiD.js";import"./irrigation-web-DOugNMGF.js";const de=1,j=oe.filter(e=>e.orgId===de),I=new Date().toISOString().split("T")[0];let B=null,P=0;function W(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}function V(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]} ${e.split("-")[0]}`}function R(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]}`}function pe(e){const[,t,r]=e.split("-");return`${parseInt(r)}/${parseInt(t)}`}function O(){return ne(j)}function X(e){if(!e||e==="all")return null;const t=O().find(i=>i.label===e);if(t)return{ids:t.ids,label:t.label};const r=j.find(i=>String(i.id)===String(e));return r?{ids:[r.id],label:r.name}:null}function ue(e){if(!e)return p;const t=O().find(i=>i.label===e.label);if(t)return p.filter(i=>i.label===t.label);const r=j.find(i=>i.name===e.label);if(r){const i=new Set(O().filter(c=>c.ids.includes(r.id)).map(c=>c.label));return p.filter(c=>c.label===r.name||i.has(c.label))}return p}function re(e){const t=new Set([e.name]);for(const r of O())r.ids.includes(e.id)&&t.add(r.label);return t}function ee(e,t){var i;(i=document.querySelector(".irr-save-confirm"))==null||i.remove(),M();const r=document.createElement("div");r.className="irr-save-confirm",r.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(c=>`<div>${c}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(r),r.addEventListener("click",c=>{c.target===r&&r.remove()}),r.querySelector("#irr-confirm-close").addEventListener("click",()=>r.remove())}function J(e,t=""){const r=O(),i=j.filter(n=>!r.some(v=>v.ids.includes(n.id))),c=r.map(n=>{const v=n.ids.map(u=>j.find(d=>d.id===u)).filter(Boolean).map(u=>`<option value="${u.id}"${String(t)===String(u.id)?" selected":""}>${u.name}</option>`).join("");return`<optgroup label="${n.label} (${n.ids.length} parcelles)">
      <option value="${n.label}"${t===n.label?" selected":""}>⬡ Groupe · ${n.label}</option>
      ${v}
    </optgroup>`}).join(""),a=i.length?`<optgroup label="Autres parcelles">${i.map(n=>`<option value="${n.id}"${String(t)===String(n.id)?" selected":""}>${n.name}</option>`).join("")}</optgroup>`:"";return`<select class="irr-lc-select" id="${e}">
    <option value="" disabled${t?"":" selected"}>— Sélectionner —</option>
    <option value="all"${t==="all"?" selected":""}>Toutes les parcelles</option>
    ${c}${a}
  </select>`}function te(e){if(e.length<2)return"";const t=[...e].sort((m,s)=>m.iso<s.iso?-1:1),r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],i=new Date(t[0].iso),c=new Date(t[t.length-1].iso),a=Math.max(c-i,1),n=500,v=24,u=5,d=5,b=v-d-4,y=b-d-3,S=v+u+13,g=S+2,q=m=>Math.round((m-i)/a*n),x=m=>{const[,s,f]=m.split("-");return`${parseInt(f)}/${parseInt(s)}`},E=[],l=new Date(i.getFullYear(),i.getMonth()+1,1);for(;l<=c;)E.push(new Date(l)),l.setMonth(l.getMonth()+1);const $=E.map(m=>`<line x1="${q(m)}" y1="${v-6}" x2="${q(m)}" y2="${v+u+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),w=[i,...E,c],k=w.slice(0,-1).map((m,s)=>{const f=q(m),h=q(w[s+1]);return h-f<16?"":`<text x="${Math.round((f+h)/2)}" y="${y}" font-size="9" fill="#B0AEA8" text-anchor="middle">${r[m.getMonth()]}</text>`}).join(""),o=t.map(m=>{const s=m.real?"#FF8500":"#FFB705",f=q(new Date(m.iso)),h=`${R(m.iso)} · ${m.mm} mm`;return`<circle cx="${f}" cy="${b}" r="${d}" fill="${s}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${f}" cy="${b}" r="${d+6}" fill="transparent" pointer-events="all" data-tip="${h}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${n}" height="${g}" viewBox="0 0 ${n} ${g}" style="width:100%;display:block">
      ${k}<rect x="0" y="${v}" width="${n}" height="${u}" rx="${u/2}" fill="#E0DED8"/>${$}${o}
      <text x="1" y="${S}" font-size="9" fill="#B0AEA8">${x(t[0].iso)}</text>
      <text x="${n-1}" y="${S}" font-size="9" fill="#B0AEA8" text-anchor="end">${x(t[t.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function ie(e){const t=e.filter(a=>a.real),r=e.filter(a=>!a.real),i=t.reduce((a,n)=>a+n.mm,0),c=r.reduce((a,n)=>a+n.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${i} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${c} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${i+c} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function M(){var k,o,m;const e=document.getElementById("irr-right"),t=W(I,14),r=[...p.map(s=>s.iso),...N.filter(s=>s.iso<=t).map(s=>s.iso),t];if(!p.length&&!N.length){e.innerHTML=`<div class="irr-rv-hd">Vue globale</div><div class="irr-pr-empty"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const i=[...r].sort()[0],c=p.length?[...p].map(s=>s.iso).sort().at(-1):null,a=c&&c>t?c:t,n=new Date(a);n.setMonth(n.getMonth()+P);const v=n.toISOString().split("T")[0],u=((k=e.querySelector("#irr-gl-body"))==null?void 0:k.scrollLeft)??null,d=[];let b=new Date(i);const y=new Date(v);for(;b<=y;)d.push(b.toISOString().split("T")[0]),b.setDate(b.getDate()+1);const S={};for(const s of N)S[s.iso]=s.mm;function g(s,f,h){if(!h)return 0;const[,L,A]=f.split("-").map(Number);if((s*13+L*7+A*3)%100<12)return 0;const H=.75+(s*11+A*5)%50/100;return Math.round(h*H)}const q=d.map(s=>`<th class="irr-gl-th${s===I?" irr-gl-th--today":""}">${pe(s)}</th>`).join("");function x(s){const f=re(s),h=d.map(L=>{const A=L===I,F=p.filter(T=>T.iso===L&&f.has(T.label)),H=F.reduce((T,Q)=>T+Q.mm,0),_=F.some(T=>T.real),U=(s.id*7+3)%3-1,G=W(L,U),Z=g(s.id,L,S[G]??0);let C="";if(H){const T=_?"#E07820":"#FFB705",Q=F.map(ae=>p.indexOf(ae)).join(",");C+=`<span class="irr-gl-val irr-gl-irrig" data-idxs="${Q}" data-iso="${L}" style="color:${T};cursor:pointer">${H} mm</span>`}return Z&&(C+=`<span class="irr-gl-rain">${Z} mm</span>`),C||(C=`<button class="irr-gl-add" data-plot-id="${s.id}" data-plot-name="${s.name}" data-iso="${L}">+</button>`),`<td class="irr-gl-td${A?" irr-gl-td--today":""}">${C}</td>`}).join("");return`<tr data-row-plot="${s.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${s.id}">${s.name}</span></td>${h}</tr>`}const E=O(),l=j.filter(s=>!E.some(f=>f.ids.includes(s.id))),$=d.map(s=>`<td class="irr-gl-td${s===I?" irr-gl-td--today":""}"></td>`).join(""),w=[...E.map(s=>{const f=s.ids.map(L=>j.find(A=>A.id===L)).filter(Boolean);return`<tr class="irr-gl-group-row" data-row-group="${s.label}"><td class="irr-gl-group-cell"><span class="irr-gl-group-link" data-group-label="${s.label}">⬡ ${s.label}</span></td>${$}</tr>`+f.map(x).join("")}),l.length?`<tr class="irr-gl-group-row"><td class="irr-gl-group-cell irr-gl-group-cell--other">Autres parcelles</td>${$}</tr>`+l.map(x).join(""):""].join("");e.innerHTML=`
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
          <thead id="irr-gl-thead"><tr><th class="irr-gl-plot-hd">Parcelles & groupes</th>${q}</tr></thead>
          <tbody>${w}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${P===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${P>0?`+${P} mois au-delà de la saison`:`Fin de saison : ${R(a)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var A;const s=e.querySelector("#irr-gl-body"),f=e.querySelector("#irr-gl-table"),h=e.querySelector("#irr-gl-scroll-top"),L=e.querySelector("#irr-gl-scroll-inner");if(!(!s||!f||!h||!L))if(L.style.width=f.offsetWidth+"px",h.addEventListener("scroll",()=>{s.scrollLeft=h.scrollLeft}),s.addEventListener("scroll",()=>{h.scrollLeft=s.scrollLeft}),u!==null)s.scrollLeft=u,h.scrollLeft=u;else{const F=e.querySelector(".irr-gl-th--today");if(F){const _=F.previousElementSibling??F,U=((A=e.querySelector(".irr-gl-plot-hd"))==null?void 0:A.offsetWidth)??120,G=_.offsetLeft-U;s.scrollLeft=G,h.scrollLeft=G}}}),(o=e.querySelector("#irr-gl-prev-month"))==null||o.addEventListener("click",()=>{P>0&&(P--,M())}),(m=e.querySelector("#irr-gl-next-month"))==null||m.addEventListener("click",()=>{P++,M()}),e.querySelectorAll(".irr-gl-irrig").forEach(s=>{s.addEventListener("click",()=>{ve(s.dataset.idxs.split(",").map(Number),s.dataset.iso)})}),e.querySelectorAll(".irr-gl-add").forEach(s=>{s.addEventListener("click",()=>{fe(s.dataset.plotId,s.dataset.plotName,s.dataset.iso)})}),e.querySelectorAll(".irr-gl-plot-link").forEach(s=>{s.addEventListener("click",()=>{const f=j.find(h=>String(h.id)===s.dataset.plotId);f&&me(f)})}),e.querySelectorAll(".irr-gl-group-link").forEach(s=>{s.addEventListener("click",()=>{const f=O().find(h=>h.label===s.dataset.groupLabel);f&&z(f)})})}function ve(e,t){var c;(c=document.querySelector(".irr-edit-overlay"))==null||c.remove();const r=document.createElement("div");r.className="irr-edit-overlay";const i=e.map(a=>p[a]).filter(Boolean);r.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${V(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${i.map((a,n)=>`
          <div class="irr-edit-row">
            <span class="irr-edit-label">${a.label}</span>
            <input type="number" class="irr-edit-qty" data-i="${n}" value="${a.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${n}">🗑</button>
          </div>`).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(r),r.addEventListener("click",a=>{a.target===r&&r.remove()}),r.querySelector("#irr-edit-close").addEventListener("click",()=>r.remove()),r.querySelector("#irr-edit-cancel").addEventListener("click",()=>r.remove()),r.querySelectorAll(".irr-edit-del").forEach(a=>{a.addEventListener("click",()=>{const n=i[+a.dataset.i],v=p.indexOf(n);v>=0&&(p.splice(v,1),D()),r.remove()})}),r.querySelector("#irr-edit-save").addEventListener("click",()=>{r.querySelectorAll(".irr-edit-qty").forEach(a=>{const n=i[+a.dataset.i],v=parseInt(a.value);n&&v>0&&(n.mm=v,n.real=t<=I)}),D(),r.remove()})}function K(e,t){var i,c;const r=document.getElementById("irr-right");r&&(r.querySelectorAll("[data-row-plot],[data-row-group]").forEach(a=>a.classList.remove("irr-gl-row--active")),e&&((i=r.querySelector(`[data-row-plot="${e}"]`))==null||i.classList.add("irr-gl-row--active")),t&&((c=r.querySelector(`[data-row-group="${CSS.escape(t)}"]`))==null||c.classList.add("irr-gl-row--active")))}function z(e){var S,g,q,x,E;const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!t||!r)return;if(r.dataset.plotId===`group:${e.label}`&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=`group:${e.label}`,r.style.display="",t.classList.add("irr-has-detail"),K(null,e.label);const i=p.filter(l=>l.label===e.label),c=i.some(l=>l.fromStrategy),a=i.filter(l=>l.fromStrategy).sort((l,$)=>l.iso<$.iso?-1:1),n=(S=a[0])==null?void 0:S.iso,v=(g=a[a.length-1])==null?void 0:g.iso,u=i.filter(l=>l.real).sort((l,$)=>l.iso>$.iso?-1:1),d=i.filter(l=>!l.real).sort((l,$)=>l.iso<$.iso?-1:1),b=l=>{const $=p.indexOf(l),w=l.real?"#FF8500":"#FFB705",[,k,o]=l.iso.split("-");return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${w}"></div>
      <div class="irr-pr-date" style="color:${w};min-width:52px;font-size:13px;font-weight:600">${parseInt(o)} ${se[parseInt(k)-1]}</div>
      <div class="irr-pr-info"><div class="irr-pr-status" style="color:${w}">${l.real?"Réalisée":"Planifiée"}</div></div>
      <div class="irr-pr-mm" style="color:${w}">${l.mm} mm</div>
      <button class="irr-pr-del" data-idx="${$}">🗑</button>
    </div>`},y=c?`
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
          ${n&&v?`<div><strong>Saison :</strong> ${R(n)} → ${R(v)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>'}
        </div>
        ${y}
        ${ie(i)}
        ${te(i)}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${u.length?`<details class="irr-pr-details"><summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${u.length}</span></summary><div>${u.map(b).join("")}</div></details>`:""}
      ${d.length?`<details class="irr-pr-details" open><summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${d.length}</span></summary><div>${d.map(b).join("")}</div></details>`:""}
      ${i.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation pour ce groupe</p></div>'}
    </div>`,(q=r.querySelector("#irr-det-strat-toggle"))==null||q.addEventListener("click",()=>{const l=r.querySelector("#irr-det-strat-opts");l.style.display=l.style.display==="none"?"":"none"}),(x=r.querySelector("#irr-det-stop"))==null||x.addEventListener("click",()=>{p.splice(0,p.length,...p.filter(l=>!(l.label===e.label&&!l.real&&l.iso>I))),D(),z(e),M()}),(E=r.querySelector("#irr-det-del-all"))==null||E.addEventListener("click",()=>{p.splice(0,p.length,...p.filter(l=>l.label!==e.label)),D(),z(e),M()}),r.querySelectorAll(".irr-pr-del").forEach(l=>{l.addEventListener("click",()=>{const $=+l.dataset.idx;$>=0&&(p.splice($,1),D(),z(e))})}),r.querySelector("#irr-det-close").addEventListener("click",()=>{var l;(l=document.getElementById("irr-page"))==null||l.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId=""})}function me(e){const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!(!t||!r)){if(r.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=String(e.id),r.style.display="",t.classList.add("irr-has-detail"),K(String(e.id),null),Y(e)}}const se=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function Y(e){var E,l,$,w,k;const t=document.getElementById("irr-detail");if(document.getElementById("irr-page"),!t)return;const i=O().find(o=>o.ids.includes(e.id)),c={ids:[e.id],label:e.name},a=ue(c),n=a.some(o=>o.fromStrategy),v=a.filter(o=>o.fromStrategy).sort((o,m)=>o.iso<m.iso?-1:1),u=(E=v[0])==null?void 0:E.iso,d=(l=v[v.length-1])==null?void 0:l.iso,b=i?`<div><strong>Groupe :</strong> ${i.label} — ${i.ids.length} parcelles</div>`:"",y=u&&d?`<div><strong>Saison :</strong> ${R(u)} → ${R(d)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',S=a.filter(o=>o.real).sort((o,m)=>o.iso>m.iso?-1:1),g=a.filter(o=>!o.real).sort((o,m)=>o.iso<m.iso?-1:1),q=o=>{const m=p.indexOf(o),s=o.real?"#FF8500":"#FFB705",[,f,h]=o.iso.split("-"),L=`${parseInt(h)} ${se[parseInt(f)-1]}`;return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${s}"></div>
      <div class="irr-pr-date" style="color:${s};min-width:52px;font-size:13px;font-weight:600">${L}</div>
      <div class="irr-pr-info"><div class="irr-pr-status" style="color:${s}">${o.real?"Réalisée":"Planifiée"}</div></div>
      <div class="irr-pr-mm" style="color:${s}">${o.mm} mm</div>
      <button class="irr-pr-del" data-idx="${m}">🗑</button>
    </div>`},x=n?`
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
        <div class="irr-det-meta">${b}${y}</div>
        ${x}
        ${ie(a)}
        ${te(a)}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${S.length?`
        <details class="irr-pr-details">
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${S.length}</span></summary>
          <div>${S.map(q).join("")}</div>
        </details>`:""}
      ${g.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${g.length}</span></summary>
          <div>${g.map(q).join("")}</div>
        </details>`:""}
      ${a.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,($=t.querySelector("#irr-det-strat-toggle"))==null||$.addEventListener("click",()=>{const o=t.querySelector("#irr-det-strat-opts");o.style.display=o.style.display==="none"?"":"none"}),(w=t.querySelector("#irr-det-stop"))==null||w.addEventListener("click",()=>{p.splice(0,p.length,...p.filter(o=>!(o.label===e.name&&!o.real&&o.iso>I))),D(),Y(e),M()}),(k=t.querySelector("#irr-det-del-all"))==null||k.addEventListener("click",()=>{p.splice(0,p.length,...p.filter(o=>o.label!==e.name)),D(),Y(e),M()}),t.querySelectorAll(".irr-pr-del").forEach(o=>{o.addEventListener("click",()=>{const m=+o.dataset.idx;m>=0&&(p.splice(m,1),D(),Y(e))})}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var o;(o=document.getElementById("irr-page"))==null||o.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",K(null,null)})}function fe(e,t,r){var c;(c=document.querySelector(".irr-edit-overlay"))==null||c.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${V(r)}</span>
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
    </div>`,document.body.appendChild(i),i.addEventListener("click",a=>{a.target===i&&i.remove()}),i.querySelector("#irr-qa-close").addEventListener("click",()=>i.remove()),i.querySelector("#irr-qa-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#irr-qa-save").addEventListener("click",()=>{const a=parseInt(i.querySelector("#irr-qa-qty").value)||10,n=j.find(v=>String(v.id)===String(e));n&&(p.push({iso:r,mm:a,real:r<=I,label:n.name,fromStrategy:!1}),D()),i.remove()})}function be(){const e=document.getElementById("irr-right");e.innerHTML=`
    <div class="irr-rv-hd">Exporter les irrigations</div>
    <div class="irr-export-form">
      <div class="irr-ef-field">
        <label class="irr-ef-lbl">Périmètre</label>
        ${J("irr-exp-scope","all")}
      </div>
      <div class="irr-ef-row">
        <div class="irr-ef-field">
          <label class="irr-ef-lbl">Du</label>
          <input type="date" class="irr-pm-input" id="irr-exp-start" value="${p.length?[...p].sort((t,r)=>t.iso<r.iso?-1:1)[0].iso:I}" />
        </div>
        <div class="irr-ef-field">
          <label class="irr-ef-lbl">Au</label>
          <input type="date" class="irr-pm-input" id="irr-exp-end" value="${p.length?[...p].sort((t,r)=>t.iso>r.iso?-1:1)[0].iso:I}" />
        </div>
      </div>
      <div class="irr-ef-field">
        <label class="irr-ef-lbl">Données à inclure</label>
        <div class="irr-ef-checks">
          <label><input type="checkbox" id="irr-exp-irrig" checked /> Irrigations</label>
          <label><input type="checkbox" id="irr-exp-rain" checked /> Pluie</label>
        </div>
      </div>
      <p class="irr-ef-hint">Une ligne par date · Une colonne par parcelle · Valeurs en mm</p>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-exp-dl"><i class="bi bi-download"></i> Télécharger CSV</button>
    </div>`,e.querySelector("#irr-exp-dl").addEventListener("click",()=>{const t=e.querySelector("#irr-exp-scope").value,r=e.querySelector("#irr-exp-start").value,i=e.querySelector("#irr-exp-end").value,c=e.querySelector("#irr-exp-irrig").checked,a=e.querySelector("#irr-exp-rain").checked,n=X(t),v=n?j.filter(l=>n.ids.includes(l.id)):j,u=new Set;if(c)for(const l of p)l.iso>=r&&l.iso<=i&&u.add(l.iso);if(a)for(const l of N)l.iso>=r&&l.iso<=i&&u.add(l.iso);const d=[...u].sort(),b={};if(a)for(const l of N)b[l.iso]=l.mm;const y=["Date",...v.map(l=>l.name+(a?" (irrig.)":""))].join(";"),S=d.map(l=>{const $=v.map(w=>{const k=re(w),o=c?p.filter(f=>f.iso===l&&k.has(f.label)).reduce((f,h)=>f+h.mm,0):0,m=a?b[l]??0:0,s=o+m;return s>0?s:""});return[l,...$].join(";")}),g=[y,...S].join(`
`),q=new Blob([g],{type:"text/csv;charset=utf-8;"}),x=URL.createObjectURL(q),E=Object.assign(document.createElement("a"),{href:x,download:`irrigations_${r}_${i}.csv`});document.body.appendChild(E),E.click(),setTimeout(()=>{URL.revokeObjectURL(x),E.remove()},100)})}function le(){var r,i,c,a,n,v;const e=document.getElementById("irr-left");e.innerHTML=`
    <div class="irr-lc-hd">Irrigation</div>

    <button class="irr-lc-btn${B==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet-fill"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${B==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelle ou groupe</label>
        ${J("irr-s-scope")}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Date</label>
        <input type="date" class="irr-lc-input" id="irr-s-date" value="${I}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Quantité <span class="irr-lc-unit">(mm par parcelle)</span></label>
        <input type="number" class="irr-lc-input" id="irr-s-qty" value="10" min="1" />
      </div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-s-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${B==="saison"?" irr-lc-btn--active":""}" data-action="saison">
      <i class="bi bi-arrow-repeat"></i><span>Saisir une saison d'irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${B==="saison"?"":" irr-lc-form--hidden"}" id="irr-form-saison">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelle ou groupe</label>
        ${J("irr-sa-scope")}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Début</label>
        <input type="date" class="irr-lc-input" id="irr-sa-debut" value="${I}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Fin</label>
        <input type="date" class="irr-lc-input" id="irr-sa-fin" value="${W(I,120)}" />
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
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-sa-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${B==="voir"?" irr-lc-btn--active":""}" data-action="voir">
      <i class="bi bi-calendar3"></i><span>Voir les irrigations</span>
    </button>

    <button class="irr-lc-btn${B==="export"?" irr-lc-btn--active":""}" data-action="export">
      <i class="bi bi-download"></i><span>Exporter les irrigations</span>
    </button>
  `,e.querySelectorAll(".irr-lc-btn").forEach(u=>{u.addEventListener("click",()=>{const d=u.dataset.action;if(B=d==="voir"||d==="export"?d:B===d?null:d,le(),d==="voir"&&M(),d==="export"){const b=document.getElementById("irr-page"),y=document.getElementById("irr-detail");b&&y&&(b.classList.remove("irr-has-detail"),y.style.display="none",y.dataset.plotId=""),be()}})});function t(){var E,l,$,w;const u=(E=e.querySelector("#irr-sa-debut"))==null?void 0:E.value,d=(l=e.querySelector("#irr-sa-fin"))==null?void 0:l.value,b=parseInt(($=e.querySelector("#irr-sa-qty"))==null?void 0:$.value)||0,y=parseInt((w=e.querySelector("#irr-sa-freq"))==null?void 0:w.value)||0,S=e.querySelector("#irr-sa-preview");if(!S)return;if(!u||!d||y<=0){S.textContent="—";return}let g=0,q=new Date(u),x=new Date(d);for(;q<=x&&g<200;)g++,q.setDate(q.getDate()+y);S.innerHTML=g>0?`<span style="color:var(--pri);font-weight:600">↗ ${g} irrigations · ${g*b} mm au total</span>`:'<span style="color:var(--txt3)">Ajustez les paramètres</span>'}B==="saison"&&(t(),(r=e.querySelector("#irr-sa-debut"))==null||r.addEventListener("change",t),(i=e.querySelector("#irr-sa-fin"))==null||i.addEventListener("change",t),(c=e.querySelector("#irr-sa-qty"))==null||c.addEventListener("input",t),(a=e.querySelector("#irr-sa-freq"))==null||a.addEventListener("input",t)),(n=e.querySelector("#irr-s-save"))==null||n.addEventListener("click",()=>{const u=e.querySelector("#irr-s-scope").value,d=e.querySelector("#irr-s-date").value,b=parseInt(e.querySelector("#irr-s-qty").value)||10,y=X(u),S=d>I;if(!u)return;(y?[y.label]:[]).forEach(q=>p.push({iso:d,mm:b,real:!S,label:q,fromStrategy:!1})),D(),ee("Irrigation enregistrée",[`Date : ${V(d)}`,`Quantité : ${b} mm`,`Périmètre : ${(y==null?void 0:y.label)??"Toutes les parcelles"}`])}),(v=e.querySelector("#irr-sa-save"))==null||v.addEventListener("click",()=>{const u=e.querySelector("#irr-sa-scope").value,d=e.querySelector("#irr-sa-debut").value,b=e.querySelector("#irr-sa-fin").value,y=parseInt(e.querySelector("#irr-sa-qty").value)||10,S=parseInt(e.querySelector("#irr-sa-freq").value)||7;if(!u||!d||!b)return;const g=X(u),q=g?[g.label]:[],x=[];let E=new Date(d),l=new Date(b);for(;E<=l&&x.length<200;)x.push(new Date(E)),E.setDate(E.getDate()+S);q.forEach($=>x.forEach(w=>{const k=w.toISOString().slice(0,10);p.push({iso:k,mm:y,real:k<=I,label:$,fromStrategy:!0})})),D(),ee("Saison enregistrée",[`Début : ${V(d)} · Fin : ${V(b)}`,`${x.length} irrigations · ${y} mm · tous les ${S} j`,`Périmètre : ${(g==null?void 0:g.label)??"Toutes les parcelles"}`])})}function ge(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const r=t.target.closest("[data-tip]");if(!r){e.style.opacity="0";return}e.textContent=r.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var r;(r=t.relatedTarget)!=null&&r.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{ce(),ge(),le(),M(),window.addEventListener("irrig-updated",()=>{M()})});
