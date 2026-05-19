import{p as B,a as A}from"./mobile-DEMilJue.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./plots-tpnimBNe.js";import"./sensors-DDe0aa9W.js";import"./network-YzWdS0n_.js";import"./orgs-Cx4wNzLL.js";import"./members-DEd9yWse.js";function j(l){return l.style.display="flex",l.style.flexDirection="column",l.style.overflowY="hidden",l}const F=new Date().toISOString().split("T")[0];function R(l){const b=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,a]=l.split("-");return`${parseInt(a)} ${b[parseInt(t)-1]}`}function N(l){return!l||l===F?"":l<F?'<span class="irr-pill irr-pill--past">Passée · Réalisée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function I(l){const b={};for(const t of l){const a=t.crop,x=t.irrigation&&t.irrigation!=="Pas d'irrigation"?t.irrigation:null;if(!a&&!x)continue;const h=[a,x].filter(Boolean).join(" · ");b[h]||(b[h]={label:h,ids:[]}),b[h].ids.push(t.id)}return Object.values(b).filter(t=>t.ids.length>=2)}function z(l,b){return l?'<div class="irr-chk irr-chk--on"></div>':b?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function X({title:l,body:b,onSave:t,onDelete:a,saveLabel:x="Enregistrer"}){var w,g;const h=document.getElementById("phone-screen");(w=document.querySelector(".irr-sheet-overlay"))==null||w.remove();const m=document.createElement("div");m.className="irr-sheet-overlay",m.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${l}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${a?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${x}</button>
      </div>
    </div>`,m.querySelector(".irr-sheet-body").appendChild(typeof b=="string"?Object.assign(document.createElement("div"),{innerHTML:b}):b),h.appendChild(m),requestAnimationFrame(()=>m.classList.add("irr-sheet-overlay--open"));const y=()=>{m.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>m.remove(),280)};return m.addEventListener("click",u=>{u.target===m&&y()}),(g=m.querySelector("#iss-del"))==null||g.addEventListener("click",()=>{a==null||a(),y()}),m.querySelector("#iss-save").addEventListener("click",()=>{t==null||t(),y()}),m}function ei(l){const b=l.crop,t=l.irrigation&&l.irrigation!=="Pas d'irrigation"?l.irrigation:null;return b&&t?`<span class="irr-plot-info">${b} · ${t}</span>`:b?`<span class="irr-plot-info">${b} · <em>type non renseigné</em></span>`:t?`<span class="irr-plot-info"><em>Culture non renseignée</em> · ${t}</span>`:'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>'}function ti(l,b){let t=new Set,a=F,x=25;const h=I(l);function m(){return h.map(n=>{const c=n.ids.every(r=>t.has(r)),i=n.ids.some(r=>t.has(r));return`<div class="irr-group-card${c?" irr-group-card--sel":""}" data-gids="${n.ids.join(",")}">
        <div class="irr-group-info">
          <div class="irr-group-name">${n.label}</div>
          <div class="irr-group-meta">${n.ids.length} parcelle${n.ids.length>1?"s":""}</div>
        </div>
        ${z(c,i)}
      </div>`}).join("")}function y(){return l.map(n=>{const c=t.has(n.id);return`<div class="irr-plot-row${c?" irr-plot-row--sel":""}" data-pid="${n.id}">
        <div><div class="irr-plot-name">${n.name}</div>${ei(n)}</div>
        ${z(c,!1)}
      </div>`}).join("")}function w(n){n.querySelector("#irr-date-hint").innerHTML=N(a)}function g(n){const c=t.size,i=n.querySelector(".irr-summary"),r=n.querySelector(".irr-save-btn");!i||!r||(i.textContent=c===0?"":`${c} parcelle${c>1?"s":""} · ${x} mm`,r.disabled=c===0,r.textContent=c===0?"Enregistrer":`Enregistrer · ${c} parcelle${c>1?"s":""}`)}function u(n){n.querySelectorAll(".irr-group-card").forEach(c=>{c.addEventListener("click",()=>{const i=c.dataset.gids.split(",").map(Number),r=i.every(e=>t.has(e));i.forEach(e=>r?t.delete(e):t.add(e)),n.querySelector("#groups-inner").innerHTML=m(),n.querySelector("#plots-inner").innerHTML=y(),u(n),g(n)})}),n.querySelectorAll(".irr-plot-row").forEach(c=>{c.addEventListener("click",()=>{const i=+c.dataset.pid;t.has(i)?t.delete(i):t.add(i),n.querySelector("#groups-inner").innerHTML=m(),n.querySelector("#plots-inner").innerHTML=y(),u(n),g(n)})})}const E=j(B(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="irr-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saisir une irrigation</span>
        <div style="width:60px"></div>
      </div>
      <div class="irr-fixed-inputs">
        <div class="irr-fields-row" style="margin-bottom:0">
          <div class="irr-field-card">
            <div class="irr-field-lbl">Date</div>
            <input type="date" class="irr-date-input" id="irr-date" value="${a}" />
            <div id="irr-date-hint" style="min-height:14px"></div>
          </div>
          <div class="irr-field-card">
            <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
            <input type="number" class="irr-qty-input" id="irr-qty" value="${x}" min="1" />
            <div class="irr-field-hint">par parcelle</div>
          </div>
        </div>
      </div>
    </div>
    <div class="irr-scroll-body irr-two-zones">
      ${h.length?`
      <div class="irr-zone">
        <div class="irr-zone-hd">✦ Groupes suggérés</div>
        <div class="irr-zone-inner" id="groups-inner">${m()}</div>
      </div>`:""}
      <div class="irr-zone">
        <div class="irr-zone-hd">Toutes les parcelles</div>
        <div class="irr-zone-inner" id="plots-inner">${y()}</div>
      </div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Enregistrer</button>
    </div>
  `));u(E),g(E),E.querySelector("#irr-back").addEventListener("click",A),E.querySelector("#irr-date").addEventListener("change",n=>{a=n.target.value,w(E),g(E)}),E.querySelector("#irr-qty").addEventListener("input",n=>{x=parseInt(n.target.value)||1,g(E)}),E.querySelector(".irr-save-btn").addEventListener("click",()=>{const n=t.size,c=a>F,i=c?"Planifiée":"Réalisée";K({title:"Irrigation enregistrée",sub:`${n} parcelle${n>1?"s":""} · ${x} mm · ${R(a)}`,status:i,isFut:c,plots:l,calFilter:[...t][0]??""})})}function Z(l,b){let t=new Set,a=F,x=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],h=25,m=7;const y=I(l);function w(){if(!a||!x||m<=0)return[];const i=[],r=new Date(x);let e=new Date(a);for(;e<=r&&i.length<100;)i.push(new Date(e)),e.setDate(e.getDate()+m);return i}function g(i){const r=i.crop,e=i.irrigation&&i.irrigation!=="Pas d'irrigation"?i.irrigation:null;return r&&e?`<span class="irr-plot-info">${r} · ${e}</span>`:r?`<span class="irr-plot-info">${r}</span>`:e?`<span class="irr-plot-info">${e}</span>`:'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>'}function u(){const i=w();t.size;const r=y.map(o=>{const s=o.ids.every(d=>t.has(d)),p=o.ids.some(d=>t.has(d));return`<div class="irr-group-card${s?" irr-group-card--sel":""}" data-gids="${o.ids.join(",")}">
        <div class="irr-group-info">
          <div class="irr-group-name">${o.label}</div>
          <div class="irr-group-meta">${o.ids.length} parcelle${o.ids.length>1?"s":""}</div>
        </div>
        ${z(s,p)}
      </div>`}).join(""),e=l.map(o=>{const s=t.has(o.id);return`<div class="irr-plot-row${s?" irr-plot-row--sel":""}" data-pid="${o.id}">
        <div>
          <div class="irr-plot-name">${o.name}</div>
          ${g(o)}
        </div>
        ${z(s,!1)}
      </div>`}).join(""),v=i.length>0?`<span class="irr-preview-ok">↗ ${i.length} irrigations · ${i.length*h} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${a}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${x}" />
        </div>
      </div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="strat-qty" value="${h}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence</div>
          <div style="display:flex;align-items:baseline;gap:4px">
            <input type="number" class="irr-qty-input" id="strat-freq" value="${m}" min="1" max="30" style="width:44px" />
            <span class="irr-field-hint">jours</span>
          </div>
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${v}</div>
      <div class="irr-section-lbl">Parcelles</div>
      ${y.length?`<div class="irr-group-hint">✦ Groupes suggérés</div>${r}<div class="irr-divider"></div>`:""}
      ${e}
      <div class="irr-bottom-spacer"></div>
    `}function E(i){const r=t.size,e=w(),v=i.querySelector(".irr-save-btn"),o=i.querySelector(".irr-summary");!v||!o||(v.disabled=r===0||e.length===0,o.textContent=r===0?"":`${r} parcelle${r>1?"s":""} · ${e.length} occurrences`,v.textContent=e.length>0?`Voir l'aperçu (${e.length}) →`:"Voir l'aperçu →")}function n(i){var v,o,s,p;const r=i.querySelector(".irr-scroll-body");r.querySelectorAll(".irr-group-card").forEach(d=>{d.addEventListener("click",()=>{const f=d.dataset.gids.split(",").map(Number),q=f.every(S=>t.has(S));f.forEach(S=>q?t.delete(S):t.add(S)),r.innerHTML=u(),n(i),E(i)})}),r.querySelectorAll(".irr-plot-row").forEach(d=>{d.addEventListener("click",()=>{const f=+d.dataset.pid;t.has(f)?t.delete(f):t.add(f),r.innerHTML=u(),n(i),E(i)})});const e=()=>{const d=w(),f=r.querySelector("#strat-preview");f&&(f.innerHTML=d.length>0?`<span class="irr-preview-ok">↗ ${d.length} irrigations · ${d.length*h} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),E(i)};(v=r.querySelector("#strat-debut"))==null||v.addEventListener("change",d=>{a=d.target.value,e()}),(o=r.querySelector("#strat-fin"))==null||o.addEventListener("change",d=>{x=d.target.value,e()}),(s=r.querySelector("#strat-qty"))==null||s.addEventListener("input",d=>{h=parseInt(d.target.value)||1,e()}),(p=r.querySelector("#strat-freq"))==null||p.addEventListener("input",d=>{m=parseInt(d.target.value)||1,e()})}const c=j(B(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Stratégie d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${u()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `));n(c),E(c),c.querySelector("#strat-back").addEventListener("click",A),c.querySelector(".irr-save-btn").addEventListener("click",()=>{const i=w();si(c,l,t,a,x,h,m,i)})}function si(l,b,t,a,x,h,m,y,w){const g=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],u=t.size,E=y.slice(0,5),n=y.length-5,c=E.map((r,e)=>{const v=r.toISOString().slice(0,10)>=F,o=v?"#185FA5":"#C05000",s=v?"#E6F1FB":"#FEF0E6",p=v?"Planifiée":"Réalisée";return`<div class="irr-occ-row">
      <div class="irr-occ-date" style="background:${s};color:${o}">
        <span style="font-size:14px;font-weight:600">${r.getDate()}</span>
        <span style="font-size:9px">${g[r.getMonth()]}</span>
      </div>
      <span class="irr-occ-label">Irrigation n°${e+1}</span>
      <span class="irr-occ-badge" style="background:${s};color:${o}">${p}</span>
      <span class="irr-occ-qty">${h} mm</span>
    </div>`}).join(""),i=j(B(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="apercu-back"><i class="bi bi-chevron-left"></i> Modifier</button>
        <span class="irr-header-title">Aperçu</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">
      <div class="irr-apercu-summary">
        <div>
          <div class="irr-apercu-big">${y.length} irrigations</div>
          <div class="irr-apercu-sub">${R(a)} → ${R(x)} · tous les ${m}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big" style="color:#185FA5">${y.length*h} mm</div>
          <div class="irr-apercu-sub">${u} parcelle${u>1?"s":""} · ${h} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-section-lbl">Premières occurrences</div>
      ${c}
      ${n>0?`<div class="irr-more-label">... et ${n} occurrence${n>1?"s":""} de plus</div>`:""}
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la stratégie</button>
    </div>
  `));i.querySelector("#apercu-back").addEventListener("click",A),i.querySelector("#apercu-confirm").addEventListener("click",()=>{const r=[...t].map(v=>b.find(o=>o.id===v)).filter(v=>(v==null?void 0:v.irrigation)==="Enrouleur"),e=()=>K({title:"Stratégie enregistrée",sub:`${u} parcelle${u>1?"s":""} · ${h} mm · tous les ${m} j · ${y.length} irrigations générées`,status:"Planifiée",isFut:!0,plots:b,calFilter:[...t][0]??""});r.length>=2?ni(r,m,e):e()})}function ni(l,b,t){let a=l.map((g,u)=>({id:g.id,name:g.name,hours:4}));const x=b*24;function h(){return a.reduce((g,u)=>g+u.hours,0)}function m(){return a.map((g,u)=>`
      <div class="irr-enr-row" data-idx="${u}">
        <div class="irr-enr-order">${u+1}</div>
        <div class="irr-enr-name">${g.name}</div>
        <div class="irr-enr-arrows">
          <button class="irr-enr-up" data-idx="${u}" ${u===0?"disabled":""}>↑</button>
          <button class="irr-enr-dn" data-idx="${u}" ${u===a.length-1?"disabled":""}>↓</button>
        </div>
        <div class="irr-enr-hrs">
          <input type="number" class="irr-enr-input" data-idx="${u}" value="${g.hours}" min="1" max="48" />
          <span class="irr-enr-unit">h</span>
        </div>
      </div>`).join("")}function y(g){const u=h(),E=u>x,n=g.querySelector(".irr-enr-body");n.innerHTML=`
      <div class="irr-enr-hint">Définissez l'ordre et la durée par parcelle. Tour complet tous les ${b} jours.</div>
      <div id="enr-rows">${m()}</div>
      <div class="irr-enr-total ${E?"irr-enr-total--over":""}">
        Durée totale : <strong>${u}h</strong> / ${x}h max
        ${E?'<div style="font-size:11px;margin-top:2px">⚠ Dépasse la fréquence — vous pouvez confirmer quand même</div>':""}
      </div>
    `,n.querySelectorAll(".irr-enr-up").forEach(i=>{i.addEventListener("click",()=>{const r=+i.dataset.idx;[a[r-1],a[r]]=[a[r],a[r-1]],y(g)})}),n.querySelectorAll(".irr-enr-dn").forEach(i=>{i.addEventListener("click",()=>{const r=+i.dataset.idx;[a[r],a[r+1]]=[a[r+1],a[r]],y(g)})}),n.querySelectorAll(".irr-enr-input").forEach(i=>{i.addEventListener("input",()=>{const r=+i.dataset.idx,e=parseInt(i.value);e>0&&(a[r].hours=e,y(g))})});const c=g.querySelector(".irr-save-btn");c&&(c.textContent=E?"Confirmer quand même":"Confirmer le tour d'eau")}const w=j(B(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="enr-back"><i class="bi bi-chevron-left"></i> Aperçu</button>
        <span class="irr-header-title">Tour d'eau</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body irr-enr-body"></div>
    <div class="irr-bottom-bar">
      <div class="irr-summary" style="font-size:11px;color:#6B6A65">Enrouleur · ${l.length} parcelles</div>
      <button class="irr-save-btn">Confirmer le tour d'eau</button>
    </div>
  `));y(w),w.querySelector("#enr-back").addEventListener("click",A),w.querySelector(".irr-save-btn").addEventListener("click",()=>{A(),t()})}function K({title:l,sub:b,status:t,isFut:a,plots:x,calFilter:h}){const m=a?"#185FA5":"#3B6D11",y=a?"#E6F1FB":"#EAF3DE",w=j(B(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <div style="width:60px"></div>
        <span class="irr-header-title">${l.includes("ratégie")?"Stratégie":"Enregistrée"}</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body irr-confirm-body">
      <div class="irr-confirm-icon-wrap">
        <div class="irr-confirm-icon">✓</div>
      </div>
      <div class="irr-confirm-title">${l}</div>
      <div class="irr-confirm-sub">${b}</div>
      <span class="irr-confirm-badge" style="background:${y};color:${m}">${t}</span>
      <div class="irr-confirm-options">
        <div class="irr-confirm-opt" id="conf-back">
          <div class="irr-confirm-opt-icon" style="background:#F5F4F0">↩</div>
          <div>
            <div class="irr-confirm-opt-title">Retour au tableau de bord</div>
            <div class="irr-confirm-opt-sub">Continuer la navigation</div>
          </div>
        </div>
        <div class="irr-confirm-opt irr-confirm-opt--primary" id="conf-calendar">
          <div class="irr-confirm-opt-icon" style="background:#E6F1FB">📅</div>
          <div>
            <div class="irr-confirm-opt-title">Voir le calendrier</div>
            <div class="irr-confirm-opt-sub">Historique &amp; irrigations planifiées</div>
          </div>
        </div>
      </div>
    </div>
  `));w.querySelector("#conf-back").addEventListener("click",()=>{A(),A(),A()}),w.querySelector("#conf-calendar").addEventListener("click",()=>{ai(x,h)})}const M=[{iso:"2026-04-21",mm:18,real:!0,label:"Maïs · Pivot"},{iso:"2026-04-28",mm:22,real:!0,label:"Maïs · Aspersion"},{iso:"2026-05-04",mm:20,real:!0,label:"Maïs · Pivot"},{iso:"2026-05-07",mm:25,real:!0,label:"Maïs · Pivot"},{iso:"2026-05-11",mm:30,real:!0,label:"Maïs · Pivot"},{iso:"2026-05-13",mm:22,real:!1,label:"Maïs · Aspersion"},{iso:"2026-05-18",mm:30,real:!1,label:"Maïs · Pivot"},{iso:"2026-05-21",mm:25,real:!1,label:"Maïs · Pivot"},{iso:"2026-05-24",mm:18,real:!1,label:"Maïs · Aspersion"},{iso:"2026-05-28",mm:30,real:!1,label:"Maïs · Pivot"},{iso:"2026-06-04",mm:25,real:!1,label:"Maïs · Pivot"},{iso:"2026-06-11",mm:30,real:!1,label:"Maïs · Pivot"},{iso:"2026-06-18",mm:25,real:!1,label:"Maïs · Aspersion"}],O=[{iso:"2026-04-25",mm:12},{iso:"2026-05-03",mm:8},{iso:"2026-05-10",mm:15},{iso:"2026-05-17",mm:5},{iso:"2026-05-26",mm:10},{iso:"2026-06-02",mm:6}],J=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function ai(l,b){const t=I(l);let a=b||"";function x(){if(!a)return M;const i=t.find(r=>r.label===a);return i?M.filter(r=>i.ids.some(e=>{var v;return((v=l.find(o=>o.id===e))==null?void 0:v.crop)===r.label.split(" · ")[0]})):M}function h(i){const r=i.filter(s=>s.real),e=i.filter(s=>!s.real),v=r.reduce((s,p)=>s+p.mm,0),o=e.reduce((s,p)=>s+p.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Réalisées</div>
        <div class="irr-cumul-val" style="color:#C05000">${v} mm</div>
        <div class="irr-cumul-count">${r.length} irrigation${r.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#185FA5">${o} mm</div>
        <div class="irr-cumul-count">${e.length} irrigation${e.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${v+o} mm</div>
        <div class="irr-cumul-count">${r.length+e.length} irrigations</div>
      </div>
    </div>`}function m(i){const s=new Date(F),p=new Date(s);p.setDate(p.getDate()-60);const d=new Date(s);d.setDate(d.getDate()+90);const f=Math.round((d-p)/864e5),q=300/f;function S($){return Math.round((new Date($)-p)/864e5*q)}const k=S(F),D=[...i.map($=>$.mm),...O.map($=>$.mm)],G=Math.max(...D,1);let V="",Q="";for(const $ of O){const L=28+S($.iso);if(L<28||L>328)continue;const T=Math.round($.mm/G*100*.4);V+=`<rect x="${L-3}" y="${100-T}" width="6" height="${T}" rx="2" fill="#7BBFEA" opacity=".8"/>`}for(const $ of i){const L=28+S($.iso);if(L<28||L>328)continue;const T=Math.round($.mm/G*100*.6);Q+=`<rect x="${L-4}" y="${100-T}" width="8" height="${T}" rx="2" fill="${$.real?"#E07820":"#FBBF7A"}"/>`}let C=35,_="";for(let $=0;$<f;$++){const L=new Date(p.getTime()+$*864e5).toISOString().slice(0,10);C=Math.max(0,C-3.5);const T=i.find(Y=>Y.iso===L),U=O.find(Y=>Y.iso===L);T&&(C=Math.min(C+T.mm*.8,130)),U&&(C=Math.min(C+U.mm*.7,130));const ii=28+Math.round($*q),ri=Math.round((1-Math.min(C,130)/130)*100*.85+100*.05);_+=`${ii},${ri} `}let P="";for(let $=0;$<=4;$++){const L=Math.round($/4*100);P+=`<line x1="28" y1="${L}" x2="328" y2="${L}" stroke="#F0EDE8" stroke-width=".5"/>`,P+=`<text x="25" y="${L+4}" text-anchor="end" font-size="8" fill="#9E9D98">${Math.round((1-$/4)*130)}</text>`}let W="";const H=new Date(p);for(H.setDate(1),H.setMonth(H.getMonth()+1);H<=d;){const $=28+S(H.toISOString().slice(0,10)),L=J[H.getMonth()];W+=`<line x1="${$}" y1="100" x2="${$}" y2="104" stroke="#D0CEC8"/>`,W+=`<text x="${$+2}" y="114" font-size="9" fill="#9E9D98">${L}</text>`,H.setMonth(H.getMonth()+1)}return`<div class="irr-graph-card">
      <svg width="328" height="122" viewBox="0 0 328 122" style="width:100%;display:block">
        <defs><pattern id="hatch" width="12" height="12" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="12" stroke="#B8B4AC" stroke-width="5"/>
        </pattern></defs>
        <rect x="28" y="0" width="300" height="100" fill="white"/>
        <rect x="${28+k}" y="0" width="${300-k}" height="100" fill="url(#hatch)" opacity=".6"/>
        ${P}${V}${Q}
        <polyline points="${_.trim()}" fill="none" stroke="#185FA5" stroke-width="1.5"/>
        <line x1="${28+k}" y1="0" x2="${28+k}" y2="100" stroke="#C05000" stroke-width="1" stroke-dasharray="3,2" opacity=".7"/>
        ${W}
      </svg>
      <div class="irr-graph-legend">
        <div class="irr-leg-item"><div class="irr-leg-dot" style="background:#7BBFEA"></div>Pluie</div>
        <div class="irr-leg-item"><div class="irr-leg-dot" style="background:#E07820"></div>Irrig. réalisée</div>
        <div class="irr-leg-item"><div class="irr-leg-dot" style="background:#FBBF7A"></div>Irrig. planifiée</div>
        <div class="irr-leg-item"><svg width="18" height="8"><line x1="0" y1="4" x2="18" y2="4" stroke="#185FA5" stroke-width="2"/></svg>Réservoir</div>
      </div>
    </div>`}function y(i,r,e){var q,S;const o=I(l).find(k=>k.label===i.label),s=document.createElement("div");let p="single",d=i.iso,f=i.mm;s.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${i.iso}" />
          <div id="edit-date-hint">${N(i.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${i.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>
      ${o&&o.ids.length>1?`
      <div class="irr-scope-box">
        <div class="irr-scope-lbl">Appliquer à…</div>
        <div class="irr-scope-btns">
          <button class="irr-scope-btn irr-scope-btn--on" id="scope-single">Cette occurrence</button>
          <button class="irr-scope-btn" id="scope-group">Tout le groupe (${o.ids.length})</button>
        </div>
      </div>`:""}`,s.querySelector("#edit-date").addEventListener("change",k=>{d=k.target.value,s.querySelector("#edit-date-hint").innerHTML=N(d)}),s.querySelector("#edit-qty").addEventListener("input",k=>{const D=parseInt(k.target.value);D>0&&(f=D)}),o&&((q=s.querySelector("#scope-single"))==null||q.addEventListener("click",k=>{p="single",s.querySelectorAll(".irr-scope-btn").forEach(D=>D.classList.remove("irr-scope-btn--on")),k.target.classList.add("irr-scope-btn--on")}),(S=s.querySelector("#scope-group"))==null||S.addEventListener("click",k=>{p="group",s.querySelectorAll(".irr-scope-btn").forEach(D=>D.classList.remove("irr-scope-btn--on")),k.target.classList.add("irr-scope-btn--on")})),X({title:i.real?"Modifier l'irrigation réalisée":"Modifier l'irrigation planifiée",body:s,saveLabel:"Enregistrer",onSave:()=>{i.iso=d,i.mm=f,i.real=d<=F,p==="group"&&o&&M.filter(k=>k.label===i.label).forEach(k=>{k.mm=f}),u(e)},onDelete:()=>{const k=M.indexOf(i);k>-1&&M.splice(k,1),u(e)}})}function w(i,r){const e=document.createElement("div");let v=!1;function o(){var s,p,d,f;e.innerHTML=`
        <div class="irr-strat-opt" id="strat-modify">
          <div class="irr-strat-opt-icon" style="background:#E6F1FB">✎</div>
          <div>
            <div class="irr-strat-opt-title">Modifier les paramètres</div>
            <div class="irr-strat-opt-sub">Quantité, fréquence, dates · Les irrigations passées sont conservées</div>
          </div>
        </div>
        <div class="irr-strat-opt irr-strat-opt--danger" id="strat-stop">
          <div class="irr-strat-opt-icon" style="background:#FDECEC">✕</div>
          <div>
            <div class="irr-strat-opt-title" style="color:#8B1A1A">Arrêter la stratégie</div>
            <div class="irr-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations futures planifiées</div>
          </div>
        </div>
        ${v?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>`:""}`,(s=e.querySelector("#strat-modify"))==null||s.addEventListener("click",()=>{var q;(q=document.querySelector(".irr-sheet-overlay"))==null||q.remove(),Z(l)}),(p=e.querySelector("#strat-stop"))==null||p.addEventListener("click",()=>{v=!0,o()}),(d=e.querySelector("#stop-cancel"))==null||d.addEventListener("click",()=>{v=!1,o()}),(f=e.querySelector("#stop-confirm"))==null||f.addEventListener("click",()=>{var q;M.length,M.splice(0,M.length,...M.filter(S=>!(S.label===i&&!S.real))),(q=document.querySelector(".irr-sheet-overlay"))==null||q.remove(),u(r)})}o(),X({title:"Gérer la stratégie",body:e,saveLabel:"Fermer",onSave:()=>{}})}function g(i,r){if(!i.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const e=[...i].filter(s=>!s.real).sort((s,p)=>s.iso<p.iso?-1:1),v=[...i].filter(s=>s.real).sort((s,p)=>s.iso>p.iso?-1:1);function o(s){const[,p,d]=s.iso.split("-").map(Number),f=s.real?"#C05000":"#185FA5",q=s.real?"#FEF0E6":"#E6F1FB",S=M.indexOf(s);return`<div class="irr-list-item">
        <div class="irr-list-stripe" style="background:${f}"></div>
        <div class="irr-list-date" style="background:${q};color:${f}">
          <span style="font-size:15px;font-weight:700">${d}</span>
          <span style="font-size:9px">${J[p-1]}</span>
        </div>
        <div style="flex:1;min-width:0">
          <div class="irr-list-label">${s.label}</div>
          <div class="irr-list-status" style="color:${f}">${s.real?"Réalisée":"Planifiée"}</div>
        </div>
        <div class="irr-list-mm" style="background:${q};color:${f}">${s.mm} mm</div>
        <button class="irr-edit-btn" data-iidx="${S}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${S}" title="Supprimer">🗑</button>
      </div>`}return`
      ${e.length?`<div class="irr-list-section">À venir</div>${e.map(o).join("")}`:""}
      ${v.length?`<div class="irr-list-section">Réalisées</div>${v.map(o).join("")}`:""}
    `}function u(i){var s,p,d;const r=i.querySelector(".irr-cal-body");if(!a){r.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const e=x(),o=e.some(f=>!f.real)?`<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la stratégie ↗</button>
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une stratégie</button>
         </div>`;r.innerHTML=`
      ${h(e)}
      ${o}
      ${m(e)}
      ${g(e)}
    `,r.querySelectorAll(".irr-edit-btn").forEach(f=>{f.addEventListener("click",q=>{q.stopPropagation();const S=M[+f.dataset.iidx];S&&y(S,e,i)})}),r.querySelectorAll(".irr-del-btn").forEach(f=>{f.addEventListener("click",q=>{q.stopPropagation();const S=+f.dataset.iidx;S>=0&&(M.splice(S,1),u(i))})}),(s=r.querySelector("#open-strat-edit"))==null||s.addEventListener("click",()=>{w(a,i)}),(p=r.querySelector("#cal-add-irrig"))==null||p.addEventListener("click",()=>{ti(l)}),(d=r.querySelector("#cal-add-strat"))==null||d.addEventListener("click",()=>{Z(l)})}const E=t.map(i=>`<option value="${i.label}"${i.label===a?" selected":""}>⬡ ${i.label}</option>`).join(""),n=l.map(i=>`<option value="${i.id}"${String(i.id)===String(a)?" selected":""}>${i.name}</option>`).join(""),c=j(B(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="cal-back"><i class="bi bi-chevron-left"></i> Retour</button>
        <span class="irr-header-title">Calendrier</span>
        <div style="width:60px"></div>
      </div>
      <div style="padding:8px 14px 10px">
        <select class="irr-cal-select" id="cal-filter-sel">
          <option value="" disabled ${a?"":"selected"}>— Sélectionner une parcelle ou un groupe —</option>
          ${t.length?`<optgroup label="Groupes auto-détectés">${E}</optgroup>`:""}
          <optgroup label="Parcelles">${n}</optgroup>
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `));c.querySelector("#cal-back").addEventListener("click",A),c.querySelector("#cal-filter-sel").addEventListener("change",i=>{a=i.target.value,u(c)}),u(c)}export{ai as openCalendar,ti as openIrrigationSaisie,Z as openIrrigationStrategie};
