import{b as F,I as E,s as M}from"./irrigations-WiYYdaCC.js";import{e as X,d as J}from"./store-InOgbptE.js";import{p as N}from"./plots-BFmvZ9cD.js";import{I as K}from"./constants-C2D4LmLD.js";const A=new Date().toISOString().split("T")[0],Z=1;X(N);const h=N.filter(i=>i.orgId===Z);function C(i){const s=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,t,a]=i.split("-");return`${parseInt(a)} ${s[parseInt(t)-1]} ${i.split("-")[0]}`}function R(i){const s=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,a]=i.split("-");return`${parseInt(a)} ${s[parseInt(t)-1]}`}function B(i,s){return i?'<div class="iw-chk iw-chk--on"><i class="bi bi-check"></i></div>':s?'<div class="iw-chk iw-chk--partial">−</div>':'<div class="iw-chk"></div>'}function ii(i){const s=i.crop,t=i.irrigation||null,a=i.substrate?"Substrat : "+i.substrate:i.texture||null,l=[s,t,a].filter(Boolean);return l.length?`<span class="iw-plot-info">${l.join(" · ")}</span>`:`<span class="iw-plot-info iw-plot-info--miss">type d'irrigation non renseigné</span>`}function V(i,s){const t=[],a=new Set(i);for(const l of s){const e=l.ids.filter(o=>i.has(o));e.length&&(e.length===l.ids.length?(t.push(l.label),l.ids.forEach(o=>a.delete(o))):e.forEach(o=>{const d=h.find(c=>c.id===o);d&&(t.push(d.name),a.delete(o))}))}for(const l of a){const e=h.find(o=>o.id===l);e&&t.push(e.name)}return t}function ti(i,s){const t=i.size;if(t===1){const l=h.find(e=>e.id===[...i][0]);return{text:(l==null?void 0:l.name)??"Parcelle",count:null}}const a=s.find(l=>l.ids.length===t&&l.ids.every(e=>i.has(e)));return a?{text:a.label,count:a.ids.length}:{text:`${t} parcelles`,count:null}}function ei(i,s){const t=new Set(i),a=[];for(const l of s)if(l.ids.length>=2&&l.ids.every(e=>i.has(e))){const e=l.ids.map(o=>{var d;return(d=h.find(c=>c.id===o))==null?void 0:d.name}).filter(Boolean);a.push({title:`Groupe "${l.label}"`,names:e}),l.ids.forEach(o=>t.delete(o))}if(t.size>0){const l=[...t].map(e=>{var o;return(o=h.find(d=>d.id===e))==null?void 0:o.name}).filter(Boolean);a.push({title:a.length>0?"Autres parcelles":null,names:l})}return a}function si(i){if(i.length<2)return"";const s=[...i].sort((r,b)=>r.iso<b.iso?-1:1),t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],a=new Date(s[0].iso),l=new Date(s[s.length-1].iso),e=Math.max(l-a,1),o=600,d=26,c=5,p=5,w=d-p-4,n=w-p-3,u=d+c+13,m=u+2,g=r=>Math.round((r-a)/e*o),q=r=>{const[,b,x]=r.split("-");return`${parseInt(x)}/${parseInt(b)}`},v=[],y=new Date(a.getFullYear(),a.getMonth()+1,1);for(;y<=l;)v.push(new Date(y)),y.setMonth(y.getMonth()+1);const f=v.map(r=>`<line x1="${g(r)}" y1="${d-6}" x2="${g(r)}" y2="${d+c+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),k=[a,...v,l],$=k.slice(0,-1).map((r,b)=>{const x=g(r),L=g(k[b+1]);return L-x<16?"":`<text x="${Math.round((x+L)/2)}" y="${n}" font-size="9" fill="#B0AEA8" text-anchor="middle">${t[r.getMonth()]}</text>`}).join(""),S=r=>{const b=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,x,L]=r.split("-");return`${parseInt(L)} ${b[parseInt(x)-1]}`},j=s.map(r=>{const b=r.real?"#FF8500":"#FFB705",x=g(new Date(r.iso)),L=`${S(r.iso)} · ${r.mm} mm`;return`<circle cx="${x}" cy="${w}" r="${p}" fill="${b}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${x}" cy="${w}" r="${p+6}" fill="transparent" pointer-events="all" data-tip="${L}"/>`}).join("");return`<div class="iw-timeline">
    <svg width="${o}" height="${m}" viewBox="0 0 ${o} ${m}" style="width:100%;display:block">
      ${$}
      <rect x="0" y="${d}" width="${o}" height="${c}" rx="${c/2}" fill="#E0DED8"/>
      ${f}
      ${j}
      <text x="1" y="${u}" font-size="10" fill="#B0AEA8">${q(s[0].iso)}</text>
      <text x="${o-1}" y="${u}" font-size="10" fill="#B0AEA8" text-anchor="end">${q(s[s.length-1].iso)}</text>
    </svg>
    <div class="iw-timeline-legend">
      <span class="iw-leg-item"><span class="iw-leg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span class="iw-leg-item"><span class="iw-leg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function ni(i){const s=i.filter(e=>e.real),t=i.filter(e=>!e.real),a=s.reduce((e,o)=>e+o.mm,0),l=t.reduce((e,o)=>e+o.mm,0);return`<div class="iw-cumuls-bar">
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Effectuées</div>
      <div class="iw-cumul-val" style="color:#FF8500">${a} mm</div>
      <div class="iw-cumul-count">${s.length} irrigation${s.length!==1?"s":""}</div>
    </div>
    <div class="iw-cumul-sep"></div>
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Planifiées</div>
      <div class="iw-cumul-val" style="color:#FFB705">${l} mm</div>
      <div class="iw-cumul-count">${t.length} irrigation${t.length!==1?"s":""}</div>
    </div>
    <div class="iw-cumul-sep"></div>
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Total saison</div>
      <div class="iw-cumul-val">${a+l} mm</div>
      <div class="iw-cumul-count">${s.length+t.length} irrigations</div>
    </div>
  </div>`}function G({title:i,params:s,labels:t,addedCount:a,filterLabel:l}){const{ov:e,close:o}=T(),d=s.map(u=>`
    <div class="iw-conf-param">
      <span class="iw-conf-param-lbl">${u.label}</span>
      <span class="iw-conf-param-val">${u.value}</span>
    </div>`).join(""),c=5,p=t.slice(0,c),w=t.slice(c),n=p.map(u=>`<span class="iw-apercu-plot-tag">${u}</span>`).join("")+(w.length?`<span class="iw-apercu-plot-more">+ ${w.length} autre${w.length>1?"s":""}</span>`:"");e.innerHTML=`
    <div class="iw-modal iw-modal--confirm">
      <div class="iw-conf-icon">✓</div>
      <div class="iw-conf-title">${i}</div>
      <div class="iw-conf-params">${d}</div>
      <div class="iw-apercu-plots" style="text-align:center;margin-bottom:20px">${n}</div>
      <div class="iw-conf-actions">
        <button class="iw-conf-opt" id="iw-conf-edit">
          <div class="iw-conf-opt-icon">✎</div>
          <div>
            <div class="iw-conf-opt-title">Modifier</div>
            <div class="iw-conf-opt-sub">Corriger une erreur de saisie</div>
          </div>
        </button>
        <button class="iw-conf-opt iw-conf-opt--pri" id="iw-conf-voir">
          <div class="iw-conf-opt-icon">📅</div>
          <div>
            <div class="iw-conf-opt-title">Voir les irrigations</div>
            <div class="iw-conf-opt-sub">Effectuées et planifiées</div>
          </div>
        </button>
        <button class="iw-conf-opt" id="iw-conf-close">
          <div class="iw-conf-opt-icon">↩</div>
          <div>
            <div class="iw-conf-opt-title">Fermer</div>
            <div class="iw-conf-opt-sub">Retour au tableau de bord</div>
          </div>
        </button>
      </div>
    </div>`,e.querySelector("#iw-conf-edit").addEventListener("click",()=>{E.splice(E.length-a,a),M(),o()}),e.querySelector("#iw-conf-voir").addEventListener("click",()=>{o();const u=l?(()=>{const m=F(h).find(q=>q.label===l);if(m)return{ids:m.ids,label:m.label};const g=h.find(q=>q.name===l);return g?{ids:[g.id],label:g.name}:null})():null;U(u)}),e.querySelector("#iw-conf-close").addEventListener("click",o)}function li(i){const s=document.createElement("div");s.className="iw-toast",s.textContent=i,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("iw-toast--in")),setTimeout(()=>{s.classList.remove("iw-toast--in"),setTimeout(()=>s.remove(),400)},3e3)}function Y(i,s){const t=h.filter(o=>i.has(o.id)&&(!o.irrigation||o.irrigation==="Non irrigué"));if(!t.length){s();return}const{ov:a,close:l}=T();a.innerHTML=`
    <div class="iw-modal" style="max-width:400px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Type d'irrigation non renseigné</span>
        <button class="iw-modal-close" id="iw-ask-close">×</button>
      </div>
      <div class="iw-modal-body">
        <p style="font-size:13px;color:#636366;margin:0 0 14px">
          ${t.length===1?`<strong>${t[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${t.length} parcelles n'ont pas de type d'irrigation renseigné.`}
        </p>
        <div class="iw-field">
          <label class="iw-label">Type d'irrigation</label>
          <select class="iw-input" id="iw-ask-type">
            <option value="">— Choisir un type —</option>
            ${K.map(o=>`<option value="${o}">${o}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-ask-skip">Passer</button>
        <button class="iw-btn iw-btn--pri" id="iw-ask-confirm">Confirmer</button>
      </div>
    </div>`;const e=()=>{const o=a.querySelector("#iw-ask-type").value;o&&t.forEach(d=>{d.irrigation=o,J(d.id,{irrigation:o})}),l(),s()};a.querySelector("#iw-ask-close").addEventListener("click",()=>{l(),s()}),a.querySelector("#iw-ask-skip").addEventListener("click",()=>{l(),s()}),a.querySelector("#iw-ask-confirm").addEventListener("click",e)}function T(){const i=document.createElement("div");i.className="iw-overlay",document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("iw-overlay--in"));const s=()=>{i.classList.remove("iw-overlay--in"),setTimeout(()=>i.remove(),250)};return i.addEventListener("click",t=>{t.target===i&&s()}),{ov:i,close:s}}function O(i,s){const t=h.filter(e=>!i.some(o=>o.ids.includes(e.id))),a=i.map(e=>{const o=e.ids.every(p=>s.has(p)),d=e.ids.some(p=>s.has(p)),c=e.ids.map(p=>h.find(w=>w.id===p)).filter(Boolean).map(p=>{const w=s.has(p.id);return`<div class="iw-plot-row iw-plot-row--child${w?" iw-plot-row--sel":""}" data-pid="${p.id}">
          ${B(w,!1)}
          <div class="iw-plot-name">${p.name}</div>
        </div>`}).join("");return`<div class="iw-group-card${o?" iw-group-card--sel":""}" data-gids="${e.ids.join(",")}">
      ${B(o,d)}
      <div class="iw-group-info">
        <div class="iw-group-name">${e.label}</div>
        <div class="iw-group-meta">${e.ids.length} parcelles</div>
      </div>
    </div>${c}`}).join(""),l=t.map(e=>{const o=s.has(e.id);return`<div class="iw-plot-row${o?" iw-plot-row--sel":""}" data-pid="${e.id}">
      ${B(o,!1)}
      <div><div class="iw-plot-name">${e.name}</div>${ii(e)}</div>
    </div>`}).join("");return a+(t.length?`${i.length?'<div class="iw-section-lbl" style="margin-top:10px">Autres parcelles</div>':""}${l}`:"")}function Q(i,s,t){if(t){const a=h.filter(l=>t.ids.includes(l.id));return`<div class="iw-panel iw-panel--fixed">
      <div class="iw-presel-banner">
        <i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i>
        <span>${t.label} <span class="iw-presel-count">· ${t.ids.length} parcelle${t.ids.length>1?"s":""}</span></span>
      </div>
      ${a.map(l=>`<div class="iw-sel-name">· ${l.name}</div>`).join("")}
    </div>`}return`<div class="iw-panel iw-panel--scroll">
    <div id="iw-sel-list">${O(i,s)}</div>
  </div>`}function z(i,s){if(i.size===0)return'<div class="iw-sel-empty">Aucune parcelle sélectionnée</div>';const a=ti(i,s),l=ei(i,s);return`<div class="iw-sel-summary">
    <div class="iw-sel-title">${a.text}</div>
    ${l.map(e=>`
      ${e.title?`<div class="iw-sel-sec-hd">${e.title}</div>`:""}
      ${e.names.map(o=>`<div class="iw-sel-name">· ${o}</div>`).join("")}
    `).join("")}
  </div>`}function P(i,s,t,a){i.querySelectorAll(".iw-group-card").forEach(l=>{l.addEventListener("click",()=>{const e=l.dataset.gids.split(",").map(Number),o=e.every(c=>t.has(c));e.forEach(c=>o?t.delete(c):t.add(c));const d=i.querySelector("#iw-sel-list");d&&(d.innerHTML=O(s,t)),P(i,s,t,a),a()})}),i.querySelectorAll(".iw-plot-row").forEach(l=>{l.addEventListener("click",()=>{const e=+l.dataset.pid;t.has(e)?t.delete(e):t.add(e);const o=i.querySelector("#iw-sel-list");o&&(o.innerHTML=O(s,t)),P(i,s,t,a),a()})})}function H(i=null){const s=F(h),t=new Set((i==null?void 0:i.ids)??[]);let a=A,l=10;const{ov:e,close:o}=T();e.innerHTML=`
    <div class="iw-modal iw-modal--wide">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Saisir une irrigation</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body">
        <div class="iw-two-col">
          <div class="iw-panel iw-panel--params">
            <div class="iw-section-lbl" style="margin-top:0">Paramètres</div>
            <div class="iw-field">
              <label class="iw-label">Date</label>
              <input type="date" class="iw-input" id="iw-date" value="${a}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Quantité <span class="iw-unit">(mm par parcelle)</span></label>
              <input type="number" class="iw-input" id="iw-qty" value="${l}" min="1" style="width:80px" />
            </div>
            <div class="iw-divider"></div>
            <div class="iw-section-lbl">Sélection</div>
            <div id="iw-sel-sum">${i?"":z(t,s)}</div>
          </div>
          ${Q(s,t,i)}
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="iw-save" ${!i&&t.size===0?"disabled":""}>Enregistrer</button>
      </div>
    </div>`,e.querySelector("#iw-close").addEventListener("click",o),e.querySelector("#iw-cancel").addEventListener("click",o),e.querySelector("#iw-date").addEventListener("change",c=>{a=c.target.value}),e.querySelector("#iw-qty").addEventListener("input",c=>{l=parseInt(c.target.value)||1});function d(){e.querySelector("#iw-save").disabled=!i&&t.size===0;const c=e.querySelector("#iw-sel-sum");c&&(c.innerHTML=z(t,s))}i||P(e,s,t,d),e.querySelector("#iw-save").addEventListener("click",()=>{const c=i?new Set(i.ids):t;Y(c,()=>{const p=a>A,w=i?[i.label]:V(c,s);w.forEach(n=>{E.push({iso:a,mm:l,real:!p,label:n,fromStrategy:!1})}),M(),o(),G({title:w.length>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:C(a)},{label:"Quantité",value:`${l} mm`}],labels:w,addedCount:w.length,filterLabel:w.length===1?w[0]:null})})})}function I(i=null){const s=F(h),t=new Set((i==null?void 0:i.ids)??[]);let a=A,l=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],e=10,o=7,d="form";const{ov:c,close:p}=T();function w(){if(!a||!l||o<=0)return[];const v=[],y=new Date(l);let f=new Date(a);for(;f<=y&&v.length<100;)v.push(new Date(f)),f.setDate(f.getDate()+o);return v}function n(){const v=w(),y=v.length>0?`<div class="iw-preview-ok">↗ ${v.length} irrigations · ${v.length*e} mm au total</div>`:'<div class="iw-preview-empty">Ajustez les dates et la fréquence</div>';return`
      <div class="iw-two-col">
        <div class="iw-panel iw-panel--params">
          <div class="iw-section-lbl" style="margin-top:0">Récurrence</div>
          <div class="iw-field-row">
            <div class="iw-field">
              <label class="iw-label">Début</label>
              <input type="date" class="iw-input" id="iw-debut" value="${a}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Fin</label>
              <input type="date" class="iw-input" id="iw-fin" value="${l}" />
            </div>
          </div>
          <div class="iw-field-row">
            <div class="iw-field">
              <label class="iw-label">Quantité <span class="iw-unit">(mm/irrig.)</span></label>
              <input type="number" class="iw-input" id="iw-qty" value="${e}" min="1" style="width:70px" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Fréquence <span class="iw-unit">(jours)</span></label>
              <input type="number" class="iw-input" id="iw-freq" value="${o}" min="1" max="30" style="width:70px" />
            </div>
          </div>
          ${y}
        </div>
        ${Q(s,t,i)}
      </div>`}function u(){const v=w(),y=v.filter(L=>L.toISOString().slice(0,10)<A),f=v.filter(L=>L.toISOString().slice(0,10)>=A),k=i?i.ids.length:t.size;function $(L){const D=L.toISOString().slice(0,10),W=D>=A?"#FFB705":"#FF8500";return`<div class="iw-occ-row">
        <span>${C(D)}</span>
        <span style="font-weight:700;color:${W}">${e} mm</span>
      </div>`}const S=i?h.filter(L=>i.ids.includes(L.id)):h.filter(L=>t.has(L.id)),j=4,r=S.slice(0,j),b=S.slice(j),x=`
      <div class="iw-apercu-plots">
        <div class="iw-section-lbl">Parcelles concernées</div>
        ${r.map(L=>`<span class="iw-apercu-plot-tag">${L.name}</span>`).join("")}${b.length?`<span class="iw-apercu-plot-more">+ ${b.length} autre${b.length>1?"s":""}</span>`:""}
      </div>`;return`
      <div class="iw-apercu-summary">
        <div>
          <div class="iw-apercu-big">${v.length} irrigations</div>
          <div class="iw-apercu-sub">${R(a)} → ${R(l)} · tous les ${o}j</div>
        </div>
        <div style="text-align:right">
          <div class="iw-apercu-big">${v.length*e} mm</div>
          <div class="iw-apercu-sub">${k} parcelle${k>1?"s":""} · ${e} mm/irrig.</div>
        </div>
      </div>
      ${x}
      ${y.length?`<div class="iw-section-lbl">Irrigations effectuées</div>${y.map($).join("")}`:""}
      ${f.length?`
        <div class="iw-section-lbl" style="margin-top:${y.length?"12px":"0"}">Irrigations planifiées</div>
        ${f.slice(0,6).map($).join("")}
        ${f.length>6?`
          <div id="iw-apercu-rest" style="display:none">${f.slice(6).map($).join("")}</div>
          <button class="iw-occ-more" id="iw-apercu-more">... et ${f.length-6} irrigation${f.length-6>1?"s":""} de plus</button>`:""}`:""}
    `}function m(){const v=i?i.ids.length:t.size,y=w(),f=c.querySelector("#iw-next-btn");f&&(f.disabled=v===0||y.length===0)}function g(){var y,f,k,$;i||P(c,s,t,m);const v=()=>{const S=w(),j=c.querySelector(".iw-preview-ok, .iw-preview-empty");j&&(j.className=S.length>0?"iw-preview-ok":"iw-preview-empty",j.textContent=S.length>0?`↗ ${S.length} irrigations · ${S.length*e} mm au total`:"Ajustez les dates et la fréquence"),m()};(y=c.querySelector("#iw-debut"))==null||y.addEventListener("change",S=>{a=S.target.value,v()}),(f=c.querySelector("#iw-fin"))==null||f.addEventListener("change",S=>{l=S.target.value,v()}),(k=c.querySelector("#iw-qty"))==null||k.addEventListener("input",S=>{e=parseInt(S.target.value)||1,v()}),($=c.querySelector("#iw-freq"))==null||$.addEventListener("input",S=>{o=parseInt(S.target.value)||1,v()})}function q(){var y;const v=c.querySelector(".iw-modal");v.querySelector(".iw-modal-body").innerHTML=d==="form"?n():u(),v.querySelector("#iw-back-btn").style.display=d==="form"?"none":"",v.querySelector("#iw-next-btn").style.display=d==="form"?"":"none",v.querySelector("#iw-conf-btn").style.display=d==="form"?"none":"",d==="form"?(m(),g()):(y=c.querySelector("#iw-apercu-more"))==null||y.addEventListener("click",f=>{c.querySelector("#iw-apercu-rest").style.display="",f.target.remove()})}c.innerHTML=`
    <div class="iw-modal iw-modal--wide">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Saison d'irrigation</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body"></div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
        <button class="iw-btn iw-btn--sec" id="iw-back-btn" style="display:none"><i class="bi bi-arrow-left"></i> Modifier</button>
        <button class="iw-btn iw-btn--pri" id="iw-next-btn" disabled>Voir l'aperçu →</button>
        <button class="iw-btn iw-btn--pri" id="iw-conf-btn" style="display:none">Confirmer la saison</button>
      </div>
    </div>`,c.querySelector("#iw-close").addEventListener("click",p),c.querySelector("#iw-cancel").addEventListener("click",p),c.querySelector("#iw-back-btn").addEventListener("click",()=>{d="form",q()}),c.querySelector("#iw-next-btn").addEventListener("click",()=>{d="apercu",q()}),c.querySelector("#iw-conf-btn").addEventListener("click",()=>{const v=w(),y=i?new Set(i.ids):t;Y(y,()=>{var k,$;const f=i?[i.label]:V(y,s);v.forEach(S=>{const j=S.toISOString().slice(0,10);f.forEach(r=>{E.push({iso:j,mm:e,real:j<=A,label:r,fromStrategy:!0})})}),M(),p(),G({title:"Saison enregistrée",params:[{label:"Début",value:C(((k=v[0])==null?void 0:k.toISOString().slice(0,10))??"")},{label:"Fin",value:C((($=v[v.length-1])==null?void 0:$.toISOString().slice(0,10))??"")},{label:"Quantité",value:`${e} mm/irrig.`},{label:"Fréquence",value:`tous les ${o} jours`},{label:"Irrigations générées",value:`${v.length*f.length}`}],labels:f,addedCount:v.length*f.length,filterLabel:f.length===1?f[0]:null})})}),q()}function ai(i,s){var p,w;const a=F(h).find(n=>n.label===i.label);let l=i.iso,e=i.mm,o="single";const{ov:d,close:c}=T();d.innerHTML=`
    <div class="iw-modal" style="max-width:420px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">${i.real?"Modifier l'irrigation réalisée":"Modifier l'irrigation planifiée"}</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body">
        <div class="iw-field">
          <label class="iw-label">Date</label>
          <input type="date" class="iw-input" id="iw-edit-date" value="${i.iso}" />
        </div>
        <div class="iw-field">
          <label class="iw-label">Quantité (mm)</label>
          <input type="number" class="iw-input" id="iw-edit-qty" value="${i.mm}" min="1" style="width:80px" />
        </div>
        ${a&&a.ids.length>1?`
        <div class="iw-scope-box">
          <div class="iw-scope-lbl">Appliquer à…</div>
          <div class="iw-scope-btns">
            <button class="iw-scope-btn iw-scope-btn--on" id="scope-single">Cette occurrence</button>
            <button class="iw-scope-btn" id="scope-group">Tout le groupe (${a.ids.length})</button>
          </div>
        </div>`:""}
      </div>
      <div class="iw-modal-ft iw-modal-ft--spread">
        <button class="iw-btn iw-btn--danger" id="iw-delete">Supprimer</button>
        <div style="display:flex;gap:8px">
          <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
          <button class="iw-btn iw-btn--pri" id="iw-save">Enregistrer</button>
        </div>
      </div>
    </div>`,d.querySelector("#iw-close").addEventListener("click",c),d.querySelector("#iw-cancel").addEventListener("click",c),d.querySelector("#iw-edit-date").addEventListener("change",n=>{l=n.target.value}),d.querySelector("#iw-edit-qty").addEventListener("input",n=>{const u=parseInt(n.target.value);u>0&&(e=u)}),a&&((p=d.querySelector("#scope-single"))==null||p.addEventListener("click",n=>{o="single",d.querySelectorAll(".iw-scope-btn").forEach(u=>u.classList.remove("iw-scope-btn--on")),n.target.classList.add("iw-scope-btn--on")}),(w=d.querySelector("#scope-group"))==null||w.addEventListener("click",n=>{o="group",d.querySelectorAll(".iw-scope-btn").forEach(u=>u.classList.remove("iw-scope-btn--on")),n.target.classList.add("iw-scope-btn--on")})),d.querySelector("#iw-delete").addEventListener("click",()=>{const n=E.indexOf(i);n>-1&&E.splice(n,1),M(),c(),s()}),d.querySelector("#iw-save").addEventListener("click",()=>{i.iso=l,i.mm=e,i.real=l<=A,o==="group"&&a&&E.filter(n=>n.label===i.label).forEach(n=>{n.mm=e}),M(),c(),s()})}function _(i,s){let t=!1,a=!1;const{ov:l,close:e}=T();function o(c){const p=F(h).find(n=>n.label===c);if(p)return{ids:p.ids,label:p.label};const w=h.find(n=>n.name===c);return w?{ids:[w.id],label:w.name}:null}function d(){var p,w,n,u,m,g,q;const c=l.querySelector(".iw-modal-body");c.innerHTML=`
      <div class="iw-strat-opt" id="strat-modify">
        <div class="iw-strat-opt-icon" style="background:#E6F1FB">✎</div>
        <div>
          <div class="iw-strat-opt-title">Modifier les paramètres</div>
          <div class="iw-strat-opt-sub">Quantité, fréquence, dates · Les irrigations passées sont conservées</div>
        </div>
      </div>
      <div class="iw-strat-opt iw-strat-opt--danger" id="strat-stop">
        <div class="iw-strat-opt-icon" style="background:#FDECEC">✕</div>
        <div>
          <div class="iw-strat-opt-title" style="color:#8B1A1A">Arrêter la saison</div>
          <div class="iw-strat-opt-sub" style="color:#C05050">Supprime les irrigations futures planifiées</div>
        </div>
      </div>
      <div class="iw-strat-opt iw-strat-opt--danger" id="strat-delete">
        <div class="iw-strat-opt-icon" style="background:#FDECEC">🗑</div>
        <div>
          <div class="iw-strat-opt-title" style="color:#8B1A1A">Supprimer la saison</div>
          <div class="iw-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations de la saison</div>
        </div>
      </div>
      ${t?`
      <div class="iw-confirm-box">
        <div class="iw-confirm-box-txt">Supprimer toutes les occurrences futures ?</div>
        <div class="iw-confirm-box-btns">
          <button class="iw-btn iw-btn--sec iw-btn--sm" id="stop-cancel">Annuler</button>
          <button class="iw-btn iw-btn--danger iw-btn--sm" id="stop-confirm">Confirmer</button>
        </div>
      </div>`:""}
      ${a?`
      <div class="iw-confirm-box">
        <div class="iw-confirm-box-txt">Supprimer toutes les irrigations de cette saison ?</div>
        <div class="iw-confirm-box-btns">
          <button class="iw-btn iw-btn--sec iw-btn--sm" id="del-cancel">Annuler</button>
          <button class="iw-btn iw-btn--danger iw-btn--sm" id="del-confirm">Supprimer tout</button>
        </div>
      </div>`:""}`,(p=c.querySelector("#strat-modify"))==null||p.addEventListener("click",()=>{e(),I(o(i))}),(w=c.querySelector("#strat-stop"))==null||w.addEventListener("click",()=>{t=!0,a=!1,d()}),(n=c.querySelector("#strat-delete"))==null||n.addEventListener("click",()=>{a=!0,t=!1,d()}),(u=c.querySelector("#stop-cancel"))==null||u.addEventListener("click",()=>{t=!1,d()}),(m=c.querySelector("#stop-confirm"))==null||m.addEventListener("click",()=>{E.splice(0,E.length,...E.filter(v=>!(v.label===i&&!v.real))),M(),e(),s()}),(g=c.querySelector("#del-cancel"))==null||g.addEventListener("click",()=>{a=!1,d()}),(q=c.querySelector("#del-confirm"))==null||q.addEventListener("click",()=>{E.splice(0,E.length,...E.filter(v=>v.label!==i)),M(),e(),s()})}l.innerHTML=`
    <div class="iw-modal" style="max-width:440px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Gérer la saison</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body"></div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Fermer</button>
      </div>
    </div>`,l.querySelector("#iw-close").addEventListener("click",e),l.querySelector("#iw-cancel").addEventListener("click",e),d()}function oi(){var p,w;const i=F(h),s=new Set(h.map(n=>n.id)),t=[...E].sort((n,u)=>n.iso<u.iso?-1:1);let a=((p=t[0])==null?void 0:p.iso)??A,l=((w=t[t.length-1])==null?void 0:w.iso)??A;const{ov:e,close:o}=T();function d(){return h.map(n=>{const u=s.has(n.id);return`<div class="iw-plot-row${u?" iw-plot-row--sel":""}" data-pid="${n.id}">
        ${B(u,!1)}
        <div class="iw-plot-name">${n.name}</div>
      </div>`}).join("")}e.innerHTML=`
    <div class="iw-modal" style="max-width:560px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Export CSV</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body">
        <div class="iw-two-col">
          <div class="iw-panel iw-panel--scroll">
            <div class="iw-section-lbl">Parcelles</div>
            <div id="iw-export-plots">${d()}</div>
          </div>
          <div class="iw-panel iw-panel--params">
            <div class="iw-section-lbl" style="margin-top:0">Période</div>
            <div class="iw-field">
              <label class="iw-label">Du</label>
              <input type="date" class="iw-input" id="iw-exp-start" value="${a}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Au</label>
              <input type="date" class="iw-input" id="iw-exp-end" value="${l}" />
            </div>
            <div class="iw-section-lbl">Format</div>
            <div class="iw-export-info">Une ligne par date · Une colonne par parcelle · Valeurs en mm</div>
          </div>
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="iw-do-export"><i class="bi bi-download"></i> Télécharger CSV</button>
      </div>
    </div>`,e.querySelector("#iw-close").addEventListener("click",o),e.querySelector("#iw-cancel").addEventListener("click",o),e.querySelector("#iw-exp-start").addEventListener("change",n=>{a=n.target.value}),e.querySelector("#iw-exp-end").addEventListener("change",n=>{l=n.target.value});function c(){e.querySelectorAll("#iw-export-plots .iw-plot-row").forEach(n=>{n.addEventListener("click",()=>{const u=+n.dataset.pid;s.has(u)?s.delete(u):s.add(u),e.querySelector("#iw-export-plots").innerHTML=d(),c()})})}c(),e.querySelector("#iw-do-export").addEventListener("click",()=>{const n=h.filter($=>s.has($.id));if(!n.length){li("Sélectionnez au moins une parcelle");return}const u=new Set;for(const $ of E)$.iso>=a&&$.iso<=l&&u.add($.iso);const m=[...u].sort(),g=["Date",...n.map($=>$.name)].join(";"),q=m.map($=>{const S=n.map(j=>{const r=E.filter(b=>b.iso===$&&(b.label===j.name||i.some(x=>x.ids.includes(j.id)&&x.label===b.label))).reduce((b,x)=>b+x.mm,0);return r>0?r:""});return[$,...S].join(";")}),v=[g,...q].join(`
`),y=new Blob([v],{type:"text/csv;charset=utf-8;"}),f=URL.createObjectURL(y),k=document.createElement("a");k.href=f,k.download=`irrigations_${a}_${l}.csv`,document.body.appendChild(k),k.click(),setTimeout(()=>{URL.revokeObjectURL(f),k.remove()},100),o()})}function U(i=null){const s=F(h);let t=i?i.ids.length>1?i.label:String(i.ids[0]):"all";const{ov:a,close:l}=T();function e(){if(!t||t==="all")return E;const n=s.find(m=>m.label===t);if(n)return E.filter(m=>m.label===n.label);const u=h.find(m=>String(m.id)===String(t));if(u){const m=new Set(s.filter(g=>g.ids.includes(u.id)).map(g=>g.label));return E.filter(g=>g.label===u.name||m.has(g.label))}return E}function o(n){if(!n||n==="all")return null;const u=s.find(g=>g.label===n);if(u)return{ids:u.ids,label:u.label};const m=h.find(g=>String(g.id)===String(n));return m?{ids:[m.id],label:m.name}:null}const d=h.filter(n=>!s.some(u=>u.ids.includes(n.id))),c=s.map(n=>{const u=n.ids.map(m=>h.find(g=>g.id===m)).filter(Boolean).map(m=>`<option value="${m.id}"${String(m.id)===String(t)?" selected":""}>-${m.name}</option>`).join("");return`<optgroup label="${n.label} (${n.ids.length} parcelles)">
      <option value="${n.label}"${n.label===t?" selected":""}>GROUPE : ${n.label}</option>
      ${u}
    </optgroup>`}).join(""),p=d.length?`<optgroup label="Autres parcelles">${d.map(n=>`<option value="${n.id}"${String(n.id)===String(t)?" selected":""}>${n.name}</option>`).join("")}</optgroup>`:"";a.innerHTML=`
    <div class="iw-modal iw-modal--full">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Voir les irrigations</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-full-toolbar">
        <div class="iw-filter-wrap">
          <label class="iw-label" style="margin:0 8px 0 0;white-space:nowrap">Parcelle ou groupe</label>
          <select class="iw-select" id="iw-filter">
            <option value="all"${t==="all"?" selected":""}>Toutes les parcelles</option>
            ${c}
            ${p}
          </select>
        </div>
        <div class="iw-toolbar-actions">
          <button class="iw-btn iw-btn--sec" id="iw-strat-btn" style="display:none"><i class="bi bi-sliders"></i> Gérer la saison</button>
          <button class="iw-btn iw-btn--sec" id="iw-export-btn"><i class="bi bi-download"></i> Export CSV</button>
        </div>
      </div>
      <div class="iw-full-body" id="iw-full-body"></div>
    </div>`,a.querySelector("#iw-close").addEventListener("click",l),a.querySelector("#iw-filter").addEventListener("change",n=>{t=n.target.value,w()}),a.querySelector("#iw-export-btn").addEventListener("click",oi);function w(){var $,S,j;const n=a.querySelector("#iw-full-body"),u=e(),m=u.some(r=>r.fromStrategy),g=a.querySelector("#iw-strat-btn");if(g.style.display=m&&t!=="all"?"":"none",g.onclick=()=>_(t,w),!u.length){n.innerHTML=`
        <div class="iw-empty">
          <i class="bi bi-calendar3" style="font-size:36px;opacity:.2"></i>
          <div>Aucune irrigation enregistrée pour cette sélection</div>
          <div class="iw-empty-actions">
            <button class="iw-btn iw-btn--pri" id="iw-add-saisie"><i class="bi bi-droplet-fill"></i> Saisir une irrigation</button>
            <button class="iw-btn iw-btn--sec" id="iw-add-saison"><i class="bi bi-arrow-repeat"></i> Saisir une saison</button>
          </div>
        </div>`,n.querySelector("#iw-add-saisie").addEventListener("click",()=>{l(),H(o(t))}),n.querySelector("#iw-add-saison").addEventListener("click",()=>{l(),I(o(t))});return}const q={};n.querySelectorAll("details[data-section]").forEach(r=>{q[r.dataset.section]=r.open});const v=[...u].filter(r=>!r.real).sort((r,b)=>r.iso<b.iso?-1:1),y=[...u].filter(r=>r.real).sort((r,b)=>r.iso>b.iso?-1:1);function f(r){const b=E.indexOf(r),x=r.real?"#FF8500":"#FFB705",[,L,D]=r.iso.split("-");return`<div class="iw-list-item">
        <div class="iw-list-stripe" style="background:${x}"></div>
        <div class="iw-list-date"><span style="font-size:15px;font-weight:700;color:${x}">${D}</span><span style="font-size:10px;color:${x}">/${L}</span></div>
        <div style="flex:1">
          <div class="iw-list-label">${r.label}</div>
          <div class="iw-list-status" style="color:${x}">${r.real?"Réalisée":"Planifiée"}</div>
        </div>
        <div class="iw-list-mm" style="color:${x}">${r.mm} mm</div>
        <button class="iw-edit-btn" data-iidx="${b}">✎</button>
        <button class="iw-del-btn"  data-iidx="${b}">🗑</button>
      </div>`}const k=m&&t!=="all"?`<div style="display:flex;justify-content:flex-end;margin-bottom:10px">
           <button class="iw-strat-inline-btn" id="iw-strat-inline"><i class="bi bi-sliders"></i> Modifier la saison</button>
         </div>`:`<div class="iw-add-bar">
           <button class="iw-btn iw-btn--sec" id="iw-add-saisie"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="iw-btn iw-btn--sec" id="iw-add-saison"><i class="bi bi-arrow-repeat"></i> Ajouter une saison</button>
         </div>`;n.innerHTML=`
      ${ni(u)}
      ${si(u)}
      ${k}
      ${y.length?`
        <details class="iw-section-details" data-section="effectuees" open>
          <summary class="iw-section-summary">Effectuées <span class="iw-section-count">${y.length}</span></summary>
          <div class="iw-section-body">${y.map(f).join("")}</div>
        </details>`:""}
      ${v.length?`
        <details class="iw-section-details" data-section="planifiees" open>
          <summary class="iw-section-summary">Planifiées <span class="iw-section-count">${v.length}</span></summary>
          <div class="iw-section-body">${v.map(f).join("")}</div>
        </details>`:""}
    `,n.querySelectorAll("details[data-section]").forEach(r=>{const b=r.dataset.section;b in q&&(r.open=q[b])}),n.querySelectorAll(".iw-edit-btn").forEach(r=>{r.addEventListener("click",()=>{const b=E[+r.dataset.iidx];b&&ai(b,w)})}),n.querySelectorAll(".iw-del-btn").forEach(r=>{r.addEventListener("click",()=>{const b=+r.dataset.iidx;b>=0&&(E.splice(b,1),M(),w())})}),($=n.querySelector("#iw-add-saisie"))==null||$.addEventListener("click",()=>{l(),H(o(t))}),(S=n.querySelector("#iw-add-saison"))==null||S.addEventListener("click",()=>{l(),I(o(t))}),(j=n.querySelector("#iw-strat-inline"))==null||j.addEventListener("click",()=>_(t,w))}w()}(()=>{const i=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(i),document.addEventListener("mouseover",s=>{const t=s.target.closest("[data-tip]");if(!t){i.style.opacity="0";return}i.textContent=t.dataset.tip,i.style.opacity="1"}),document.addEventListener("mousemove",s=>{i.style.left=s.clientX+14+"px",i.style.top=s.clientY-36+"px"}),document.addEventListener("mouseout",s=>{var t;(t=s.relatedTarget)!=null&&t.closest("[data-tip]")||(i.style.opacity="0")})})();window.WebIrrig={openSaisie:H,openSaison:I,openVoirIrrigations:U};
