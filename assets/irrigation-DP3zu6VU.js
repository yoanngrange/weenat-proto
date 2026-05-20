import{p as C,a as z,c as J}from"./mobile-C71blCF6.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./plots-BEtOZiNT.js";import"./sensors-DDe0aa9W.js";import"./network-YzWdS0n_.js";import"./orgs-Cx4wNzLL.js";import"./members-DEd9yWse.js";function Q(o){o.querySelectorAll(".irr-zone").forEach(p=>{const s=p.querySelector(".irr-zone-inner");if(!s)return;if(!p.querySelector(".irr-fake-track")){const m=document.createElement("div");m.className="irr-fake-track",p.appendChild(m)}let a=p.querySelector(".irr-fake-thumb");a||(a=document.createElement("div"),a.className="irr-fake-thumb",p.appendChild(a));const g=()=>{const{scrollTop:m,scrollHeight:c,clientHeight:v}=s;if(c<=v){a.style.opacity="0";return}const $=Math.max(28,v/c*v),y=c-v,E=y>0?m/y*(v-$):0;a.style.height=`${$}px`,a.style.top=`${E}px`,a.style.opacity="1"};s._fakeScrollHandler&&s.removeEventListener("scroll",s._fakeScrollHandler),s._fakeScrollHandler=g,s.addEventListener("scroll",g),setTimeout(g,30)})}function B(o){return o.style.display="flex",o.style.flexDirection="column",o.style.overflowY="hidden",o}const D=new Date().toISOString().split("T")[0];function I(o){const p=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[s,a,g]=o.split("-");return`${parseInt(g)} ${p[parseInt(a)-1]} ${s}`}function K(o,p,s,a=[]){if(s&&s.ids.length>1)return{text:s.label,count:s.ids.length};const g=o.size;if(g===1){const c=p.find(v=>v.id===[...o][0]);return{text:(c==null?void 0:c.name)??"Parcelle",count:null}}const m=a.find(c=>c.ids.length===g&&c.ids.every(v=>o.has(v)));return m?{text:m.label,count:m.ids.length}:{text:`${g} parcelles`,count:null}}function U(o,p,s,a){if(s){const c=s.ids.map(v=>{var $;return($=p.find(y=>y.id===v))==null?void 0:$.name}).filter(Boolean);return[{title:`Groupe "${s.label}"`,names:c}]}const g=new Set(o),m=[];for(const c of a)if(c.ids.length>=2&&c.ids.every(v=>o.has(v))){const v=c.ids.map($=>{var y;return(y=p.find(E=>E.id===$))==null?void 0:y.name}).filter(Boolean);m.push({title:`Groupe "${c.label}"`,names:v}),c.ids.forEach($=>g.delete($))}if(g.size>0){const c=[...g].map(v=>{var $;return($=p.find(y=>y.id===v))==null?void 0:$.name}).filter(Boolean);m.push({title:m.length>0?"Autres parcelles":null,names:c})}return m}function W(o){const p=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,s,a]=o.split("-");return`${parseInt(a)} ${p[parseInt(s)-1]}`}function R(o){return!o||o===D?"":o<D?'<span class="irr-pill irr-pill--past">Passée · Réalisée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function H(o){const p={};for(const s of o){const a=s.crop,g=s.irrigation&&s.irrigation!=="Pas d'irrigation"?s.irrigation:null;if(!a&&!g)continue;const m=[a,g].filter(Boolean).join(" · ");p[m]||(p[m]={label:m,ids:[]}),p[m].ids.push(s.id)}return Object.values(p).filter(s=>s.ids.length>=2)}function _(o,p){return o?'<div class="irr-chk irr-chk--on"></div>':p?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function X({title:o,body:p,onSave:s,onDelete:a,saveLabel:g="Enregistrer"}){var $,y;const m=document.getElementById("phone-screen");($=document.querySelector(".irr-sheet-overlay"))==null||$.remove();const c=document.createElement("div");c.className="irr-sheet-overlay",c.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${o}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${a?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${g}</button>
      </div>
    </div>`,c.querySelector(".irr-sheet-body").appendChild(typeof p=="string"?Object.assign(document.createElement("div"),{innerHTML:p}):p),m.appendChild(c),requestAnimationFrame(()=>c.classList.add("irr-sheet-overlay--open"));const v=()=>{c.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>c.remove(),280)};return c.addEventListener("click",E=>{E.target===c&&v()}),(y=c.querySelector("#iss-del"))==null||y.addEventListener("click",()=>{a==null||a(),v()}),c.querySelector("#iss-save").addEventListener("click",()=>{s==null||s(),v()}),c}function se(o){const p=o.crop,s=o.irrigation&&o.irrigation!=="Pas d'irrigation"?o.irrigation:null;return p&&s?`<span class="irr-plot-info">${p} · ${s}</span>`:p?`<span class="irr-plot-info">${p} · <em>type non renseigné</em></span>`:s?`<span class="irr-plot-info"><em>Culture non renseignée</em> · ${s}</span>`:'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>'}function ne(o,p,s=null){let a=new Set((s==null?void 0:s.ids)??[]),g=D,m=10;const c=H(o);function v(){return c.map(e=>{const i=e.ids.every(d=>a.has(d)),l=e.ids.some(d=>a.has(d));return`<div class="irr-group-card${i?" irr-group-card--sel":""}" data-gids="${e.ids.join(",")}">
        <div class="irr-group-info">
          <div class="irr-group-name">${e.label}</div>
          <div class="irr-group-meta">${e.ids.length} parcelle${e.ids.length>1?"s":""}</div>
        </div>
        ${_(i,l)}
      </div>`}).join("")}function $(){return o.map(e=>{const i=a.has(e.id);return`<div class="irr-plot-row${i?" irr-plot-row--sel":""}" data-pid="${e.id}">
        <div><div class="irr-plot-name">${e.name}</div>${se(e)}</div>
        ${_(i,!1)}
      </div>`}).join("")}function y(e){e.querySelector("#irr-date-hint").innerHTML=R(g)}function E(e){const i=a.size,l=e.querySelector(".irr-summary"),d=e.querySelector(".irr-save-btn");!l||!d||(s?(l.textContent="",d.disabled=!1,d.textContent="Enregistrer"):(l.textContent=i===0?"":`${i} parcelle${i>1?"s":""} · ${m} mm`,d.disabled=i===0,d.textContent="Enregistrer"))}function x(e){e.querySelectorAll(".irr-group-card").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.gids.split(",").map(Number),d=l.every(u=>a.has(u));l.forEach(u=>d?a.delete(u):a.add(u)),e.querySelector("#groups-inner").innerHTML=v(),e.querySelector("#plots-inner").innerHTML=$(),x(e),E(e)})}),e.querySelectorAll(".irr-plot-row").forEach(i=>{i.addEventListener("click",()=>{const l=+i.dataset.pid;a.has(l)?a.delete(l):a.add(l),e.querySelector("#groups-inner").innerHTML=v(),e.querySelector("#plots-inner").innerHTML=$(),x(e),E(e)})}),Q(e)}const M=s?s.label.split(" · "):[],A=M[0]||"",k=M[1]||"",t=s?o.filter(e=>s.ids.includes(e.id)):[],r=s?`<div style="padding:14px 14px;overflow-y:auto">
         <div style="font-size:16px;font-weight:700;color:#1c1c1e">${A}</div>
         ${k?`<div style="font-size:13px;color:#636366;margin-top:2px">${k}</div>`:""}
         <div style="font-size:12px;color:#8e8e93;margin-top:6px;margin-bottom:8px">${t.length} parcelle${t.length>1?"s":""}</div>
         ${t.map(e=>`<div style="font-size:13px;color:#1c1c1e;padding:2px 0">· ${e.name}</div>`).join("")}
       </div>`:`<div class="irr-two-zones" style="flex:1;min-height:0;display:flex;flex-direction:column;gap:8px">
         ${c.length?`
         <div class="irr-zone">
           <div class="irr-zone-hd">Groupes suggérés</div>
           <div class="irr-zone-inner" id="groups-inner">${v()}</div>
         </div>`:""}
         <div class="irr-zone">
           <div class="irr-zone-hd">Toutes les parcelles</div>
           <div class="irr-zone-inner" id="plots-inner">${$()}</div>
         </div>
       </div>`,n=B(C(`
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
            <input type="date" class="irr-date-input" id="irr-date" value="${g}" />
            <div id="irr-date-hint" style="min-height:14px"></div>
          </div>
          <div class="irr-field-card">
            <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
            <input type="number" class="irr-qty-input" id="irr-qty" value="${m}" min="1" />
            <div class="irr-field-hint">par parcelle</div>
          </div>
        </div>
      </div>
    </div>
    <div class="irr-scroll-body" style="${s?"overflow-y:auto":"overflow-y:hidden;display:flex;flex-direction:column"}">
      ${r}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${s?"":"disabled"}>Enregistrer</button>
    </div>
  `));n.dataset.dirty="true",s?Q(n):x(n),E(n),n.querySelector("#irr-back").addEventListener("click",z),n.querySelector("#irr-date").addEventListener("change",e=>{g=e.target.value,y(n),E(n)}),n.querySelector("#irr-qty").addEventListener("input",e=>{m=parseInt(e.target.value)||1,E(n)}),n.querySelector(".irr-save-btn").addEventListener("click",()=>{const e=g>D,i=K(a,o,s,c),l=i.text,d=i.count?i.text:a.size===1?String([...a][0]):"",u=U(a,o,s,c),h=u.reduce((b,S)=>b+S.names.length,0);L.push({iso:g,mm:m,real:!e,label:l,fromStrategy:!1}),J(),ee({title:h>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:I(g)},{label:"Quantité",value:`${m} mm`}],parcelSections:u,isFut:e,plots:o,calFilter:d,addedCount:1,stackDepth:1})})}function Z(o,p,s=null){let a=new Set((s==null?void 0:s.ids)??[]),g=D,m=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],c=10,v=7;const $=H(o);function y(){if(!g||!m||v<=0)return[];const t=[],r=new Date(m);let n=new Date(g);for(;n<=r&&t.length<100;)t.push(new Date(n)),n.setDate(n.getDate()+v);return t}function E(t){const r=t.crop,n=t.irrigation&&t.irrigation!=="Pas d'irrigation"?t.irrigation:null;return r&&n?`<span class="irr-plot-info">${r} · ${n}</span>`:r?`<span class="irr-plot-info">${r}</span>`:n?`<span class="irr-plot-info">${n}</span>`:'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>'}function x(){const t=y();a.size;const r=$.map(i=>{const l=i.ids.every(u=>a.has(u)),d=i.ids.some(u=>a.has(u));return`<div class="irr-group-card${l?" irr-group-card--sel":""}" data-gids="${i.ids.join(",")}">
        <div class="irr-group-info">
          <div class="irr-group-name">${i.label}</div>
          <div class="irr-group-meta">${i.ids.length} parcelle${i.ids.length>1?"s":""}</div>
        </div>
        ${_(l,d)}
      </div>`}).join(""),n=o.map(i=>{const l=a.has(i.id);return`<div class="irr-plot-row${l?" irr-plot-row--sel":""}" data-pid="${i.id}">
        <div>
          <div class="irr-plot-name">${i.name}</div>
          ${E(i)}
        </div>
        ${_(l,!1)}
      </div>`}).join(""),e=t.length>0?`<span class="irr-preview-ok">↗ ${t.length} irrigations · ${t.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${g}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${m}" />
        </div>
      </div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="strat-qty" value="${c}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence</div>
          <div style="display:flex;align-items:baseline;gap:4px">
            <input type="number" class="irr-qty-input" id="strat-freq" value="${v}" min="1" max="30" style="width:44px" />
            <span class="irr-field-hint">jours</span>
          </div>
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${e}</div>
      ${s?`<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${s.label} <span style="color:#9E9D98;font-weight:400">· ${s.ids.length} parcelle${s.ids.length>1?"s":""}</span></span>
           </div>`:`<div class="irr-section-lbl">Parcelles</div>
           ${$.length?`<div class="irr-group-hint">Groupes suggérés</div>${r}<div class="irr-divider"></div>`:""}
           ${n}`}
      <div class="irr-bottom-spacer"></div>
    `}function M(t){const r=a.size,n=y(),e=t.querySelector(".irr-save-btn"),i=t.querySelector(".irr-summary");!e||!i||(e.disabled=r===0||n.length===0,i.textContent=r===0?"":`${r} parcelle${r>1?"s":""} · ${n.length} occurrences`,e.textContent="Voir l'aperçu →")}function A(t){var e,i,l,d;const r=t.querySelector(".irr-scroll-body");r.querySelectorAll(".irr-group-card").forEach(u=>{u.addEventListener("click",()=>{const h=u.dataset.gids.split(",").map(Number),b=h.every(S=>a.has(S));h.forEach(S=>b?a.delete(S):a.add(S)),r.innerHTML=x(),A(t),M(t)})}),r.querySelectorAll(".irr-plot-row").forEach(u=>{u.addEventListener("click",()=>{const h=+u.dataset.pid;a.has(h)?a.delete(h):a.add(h),r.innerHTML=x(),A(t),M(t)})});const n=()=>{const u=y(),h=r.querySelector("#strat-preview");h&&(h.innerHTML=u.length>0?`<span class="irr-preview-ok">↗ ${u.length} irrigations · ${u.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),M(t)};(e=r.querySelector("#strat-debut"))==null||e.addEventListener("change",u=>{g=u.target.value,n()}),(i=r.querySelector("#strat-fin"))==null||i.addEventListener("change",u=>{m=u.target.value,n()}),(l=r.querySelector("#strat-qty"))==null||l.addEventListener("input",u=>{c=parseInt(u.target.value)||1,n()}),(d=r.querySelector("#strat-freq"))==null||d.addEventListener("input",u=>{v=parseInt(u.target.value)||1,n()})}const k=B(C(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saison d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${x()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `));k.dataset.dirty="true",A(k),M(k),k.querySelector("#strat-back").addEventListener("click",z),k.querySelector(".irr-save-btn").addEventListener("click",()=>{const t=y();ae(k,o,a,g,m,c,v,t,p,s)})}function ae(o,p,s,a,g,m,c,v,$,y){var l;const E=s.size,x=5;v.length-x;function M(d){const h=d.toISOString().slice(0,10)>=D?"#FFB705":"#FF8500",b=d.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${I(b)}</span>
      <span style="font-size:13px;font-weight:700;color:${h}">${m} mm</span>
    </div>`}const A=v.filter(d=>d.toISOString().slice(0,10)<D),k=v.filter(d=>d.toISOString().slice(0,10)>=D),t=k.slice(0,x),r=k.slice(x),n=A.length?`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${A.map(M).join("")}`:"",e=k.length?`
    <div class="irr-section-lbl" style="margin-top:${A.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${t.map(M).join("")}
    ${r.length?`
      <div id="apercu-rest" style="display:none">${r.map(M).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${r.length} irrigation${r.length>1?"s":""} de plus</button>
    `:""}`:"",i=B(C(`
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
          <div class="irr-apercu-big">${v.length} irrigations</div>
          <div class="irr-apercu-sub">${W(a)} → ${W(g)} · tous les ${c}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big" style="color:#185FA5">${v.length*m} mm</div>
          <div class="irr-apercu-sub">${E} parcelle${E>1?"s":""} · ${m} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${n}
        ${e}
        ${!A.length&&!k.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `));i.dataset.dirty="true",i.querySelector("#apercu-back").addEventListener("click",z),(l=i.querySelector("#apercu-show-more"))==null||l.addEventListener("click",d=>{i.querySelector("#apercu-rest").style.display="",d.target.remove()}),i.querySelector("#apercu-confirm").addEventListener("click",()=>{const d=H(p),u=K(s,p,y,d),h=u.text,b=u.count?u.text:s.size===1?String([...s][0]):"",S=U(s,p,y,d);v.forEach(f=>{const q=f.toISOString().slice(0,10);L.push({iso:q,mm:m,real:q<=D,label:h,fromStrategy:!0})}),J(),ee({title:"Saison enregistrée",params:[{label:"Début",value:I(a)},{label:"Fin",value:I(g)},{label:"Quantité",value:`${m} mm/irrig.`},{label:"Fréquence",value:`tous les ${c} jours`},{label:"Irrigations générées",value:`${v.length}`}],parcelSections:S,isFut:!0,plots:p,calFilter:b,addedCount:v.length,stackDepth:2})})}function ee({title:o,params:p,parcelSections:s=[],isFut:a,plots:g,calFilter:m,addedCount:c=0,stackDepth:v=3}){const $=(p||[]).map(r=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${r.label}</span>
      <span class="irr-confirm-param-val">${r.value}</span>
    </div>`).join(""),y=3,E=s.flatMap(r=>r.names.map(n=>({title:r.title,name:n}))),x=E.slice(0,y),M=E.slice(y);function A(r){const n=[];let e=null;for(const i of r)(!e||e.title!==i.title)&&(e={title:i.title,names:[]},n.push(e)),e.names.push(i.name);return n.map(i=>`
      ${i.title?`<div class="irr-confirm-sec-hd">${i.title}</div>`:""}
      ${i.names.map(l=>`<div class="irr-confirm-parcel">· ${l}</div>`).join("")}
    `).join("")}const k=E.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${A(x)}
      ${M.length?`
        <details class="irr-confirm-more">
          <summary>${M.length} parcelle${M.length>1?"s":""} de plus</summary>
          ${A(M)}
        </details>`:""}
    </div>`,t=B(C(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <div style="width:60px"></div>
        <span class="irr-header-title">${o.includes("aison")?"Saison":o.includes("rrigations")?"Enregistrées":"Enregistrée"}</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body irr-confirm-body">
      <div class="irr-confirm-icon-wrap">
        <div class="irr-confirm-icon">✓</div>
      </div>
      <div class="irr-confirm-title">${o}</div>
      <div class="irr-confirm-params">${$}</div>
      ${k}
      <div class="irr-confirm-options">
        <div class="irr-confirm-opt" id="conf-edit">
          <div class="irr-confirm-opt-icon" style="background:#F5F4F0">✎</div>
          <div>
            <div class="irr-confirm-opt-title">Modifier</div>
            <div class="irr-confirm-opt-sub">Corriger une erreur de saisie</div>
          </div>
        </div>
        <div class="irr-confirm-opt irr-confirm-opt--primary" id="conf-calendar">
          <div class="irr-confirm-opt-icon" style="background:#E6F1FB">📅</div>
          <div>
            <div class="irr-confirm-opt-title">Voir les irrigations</div>
            <div class="irr-confirm-opt-sub">Irrigations effectuées et planifiées</div>
          </div>
        </div>
        <div class="irr-confirm-opt" id="conf-back">
          <div class="irr-confirm-opt-icon" style="background:#F5F4F0">↩</div>
          <div>
            <div class="irr-confirm-opt-title">Retour au tableau de bord</div>
            <div class="irr-confirm-opt-sub">Continuer la navigation</div>
          </div>
        </div>
      </div>
    </div>
  `));t.querySelector("#conf-edit").addEventListener("click",()=>{c>0&&L.splice(L.length-c,c),z()}),t.querySelector("#conf-back").addEventListener("click",()=>{for(let r=0;r<=v;r++)z()}),t.querySelector("#conf-calendar").addEventListener("click",()=>{le(g,m)})}const L=[{iso:"2026-04-21",mm:18,real:!0,label:"Maïs · Pivot",fromStrategy:!0},{iso:"2026-04-28",mm:22,real:!0,label:"Maïs · Aspersion",fromStrategy:!0},{iso:"2026-05-04",mm:20,real:!0,label:"Maïs · Pivot",fromStrategy:!0},{iso:"2026-05-07",mm:25,real:!0,label:"Maïs · Pivot",fromStrategy:!0},{iso:"2026-05-11",mm:30,real:!0,label:"Maïs · Pivot",fromStrategy:!0},{iso:"2026-05-13",mm:22,real:!1,label:"Maïs · Aspersion",fromStrategy:!0},{iso:"2026-05-18",mm:30,real:!1,label:"Maïs · Pivot",fromStrategy:!0},{iso:"2026-05-21",mm:25,real:!1,label:"Maïs · Pivot",fromStrategy:!0},{iso:"2026-05-24",mm:18,real:!1,label:"Maïs · Aspersion",fromStrategy:!0},{iso:"2026-05-28",mm:30,real:!1,label:"Maïs · Pivot",fromStrategy:!0},{iso:"2026-06-04",mm:25,real:!1,label:"Maïs · Pivot",fromStrategy:!0},{iso:"2026-06-11",mm:30,real:!1,label:"Maïs · Pivot",fromStrategy:!0},{iso:"2026-06-18",mm:25,real:!1,label:"Maïs · Aspersion",fromStrategy:!0}];function le(o,p){const s=H(o);let a=p||"";function g(t,r,n){if(!t)return null;const e=r.find(l=>l.label===t);if(e)return{ids:e.ids,label:e.label};const i=n.find(l=>String(l.id)===String(t));return i?{ids:[i.id],label:i.name}:null}function m(){if(!a||a==="all")return L;const t=s.find(n=>n.label===a);if(t)return L.filter(n=>n.label===t.label);const r=o.find(n=>String(n.id)===String(a));if(r){const n=new Set(s.filter(e=>e.ids.includes(r.id)).map(e=>e.label));return L.filter(e=>e.label===r.name||n.has(e.label))}return L}function c(t){const r=t.filter(l=>l.real),n=t.filter(l=>!l.real),e=r.reduce((l,d)=>l+d.mm,0),i=n.reduce((l,d)=>l+d.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${e} mm</div>
        <div class="irr-cumul-count">${r.length} irrigation${r.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${i} mm</div>
        <div class="irr-cumul-count">${n.length} irrigation${n.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${e+i} mm</div>
        <div class="irr-cumul-count">${r.length+n.length} irrigations</div>
      </div>
    </div>`}function v(t){if(t.length<2)return"";const r=[...t].sort((w,T)=>w.iso<T.iso?-1:1);for(let w=1;w<r.length;w++)if((new Date(r[w].iso)-new Date(r[w-1].iso))/864e5<1)return"";const n=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],e=new Date(r[0].iso),i=new Date(r[r.length-1].iso),l=Math.max(i-e,1),d=300,u=26,h=5,b=5,S=u-b-4,f=S-b-3,q=u+h+13,j=q+2,F=w=>Math.round((w-e)/l*d),N=w=>{const[,T,O]=w.split("-");return`${parseInt(O)}/${parseInt(T)}`},G=[],P=new Date(e.getFullYear(),e.getMonth()+1,1);for(;P<=i;)G.push(new Date(P)),P.setMonth(P.getMonth()+1);const ie=G.map(w=>`<line x1="${F(w)}" y1="${u-6}" x2="${F(w)}" y2="${u+h+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),V=[e,...G,i],te=V.slice(0,-1).map((w,T)=>{const O=F(w),Y=F(V[T+1]);return Y-O<16?"":`<text x="${Math.round((O+Y)/2)}" y="${f}" font-size="8" fill="#B0AEA8" text-anchor="middle">${n[w.getMonth()]}</text>`}).join(""),re=r.map(w=>{const T=w.real?"#FF8500":"#FFB705";return`<circle cx="${F(new Date(w.iso))}" cy="${S}" r="${b}" fill="${T}" stroke="#fff" stroke-width="1.5"/>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${d}" height="${j}" viewBox="0 0 ${d} ${j}" style="width:100%;display:block">
        ${te}
        <rect x="0" y="${u}" width="${d}" height="${h}" rx="${h/2}" fill="#E0DED8"/>
        ${ie}
        ${re}
        <text x="1" y="${q}" font-size="9" fill="#B0AEA8">${N(r[0].iso)}</text>
        <text x="${d-1}" y="${q}" font-size="9" fill="#B0AEA8" text-anchor="end">${N(r[r.length-1].iso)}</text>
      </svg>
    </div>`}function $(t,r,n){var b,S;const i=H(o).find(f=>f.label===t.label),l=document.createElement("div");let d="single",u=t.iso,h=t.mm;l.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${t.iso}" />
          <div id="edit-date-hint">${R(t.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${t.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>
      ${i&&i.ids.length>1?`
      <div class="irr-scope-box">
        <div class="irr-scope-lbl">Appliquer à…</div>
        <div class="irr-scope-btns">
          <button class="irr-scope-btn irr-scope-btn--on" id="scope-single">Cette occurrence</button>
          <button class="irr-scope-btn" id="scope-group">Tout le groupe (${i.ids.length})</button>
        </div>
      </div>`:""}`,l.querySelector("#edit-date").addEventListener("change",f=>{u=f.target.value,l.querySelector("#edit-date-hint").innerHTML=R(u)}),l.querySelector("#edit-qty").addEventListener("input",f=>{const q=parseInt(f.target.value);q>0&&(h=q)}),i&&((b=l.querySelector("#scope-single"))==null||b.addEventListener("click",f=>{d="single",l.querySelectorAll(".irr-scope-btn").forEach(q=>q.classList.remove("irr-scope-btn--on")),f.target.classList.add("irr-scope-btn--on")}),(S=l.querySelector("#scope-group"))==null||S.addEventListener("click",f=>{d="group",l.querySelectorAll(".irr-scope-btn").forEach(q=>q.classList.remove("irr-scope-btn--on")),f.target.classList.add("irr-scope-btn--on")})),X({title:t.real?"Modifier l'irrigation réalisée":"Modifier l'irrigation planifiée",body:l,saveLabel:"Enregistrer",onSave:()=>{t.iso=u,t.mm=h,t.real=u<=D,d==="group"&&i&&L.filter(f=>f.label===t.label).forEach(f=>{f.mm=h}),x(n)},onDelete:()=>{const f=L.indexOf(t);f>-1&&L.splice(f,1),x(n)}})}function y(t,r){const n=document.createElement("div");let e=!1,i=!1;function l(){var d,u,h,b,S,f,q;n.innerHTML=`
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
            <div class="irr-strat-opt-title" style="color:#8B1A1A">Arrêter la saison</div>
            <div class="irr-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations futures planifiées</div>
          </div>
        </div>
        <div class="irr-strat-opt irr-strat-opt--danger" id="strat-delete">
          <div class="irr-strat-opt-icon" style="background:#FDECEC">🗑</div>
          <div>
            <div class="irr-strat-opt-title" style="color:#8B1A1A">Supprimer la saison</div>
            <div class="irr-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations, effectuées et planifiées</div>
          </div>
        </div>
        ${e?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>`:""}
        ${i?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Supprimer toutes les irrigations de cette saison ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(d=n.querySelector("#strat-modify"))==null||d.addEventListener("click",()=>{var F;(F=document.querySelector(".irr-sheet-overlay"))==null||F.remove();const j=g(t,s,o);Z(o,()=>x(r),j)}),(u=n.querySelector("#strat-stop"))==null||u.addEventListener("click",()=>{e=!0,i=!1,l()}),(h=n.querySelector("#strat-delete"))==null||h.addEventListener("click",()=>{i=!0,e=!1,l()}),(b=n.querySelector("#stop-cancel"))==null||b.addEventListener("click",()=>{e=!1,l()}),(S=n.querySelector("#stop-confirm"))==null||S.addEventListener("click",()=>{var j;L.splice(0,L.length,...L.filter(F=>!(F.label===t&&!F.real))),(j=document.querySelector(".irr-sheet-overlay"))==null||j.remove(),x(r)}),(f=n.querySelector("#delete-cancel"))==null||f.addEventListener("click",()=>{i=!1,l()}),(q=n.querySelector("#delete-confirm"))==null||q.addEventListener("click",()=>{var j;L.splice(0,L.length,...L.filter(F=>F.label!==t)),(j=document.querySelector(".irr-sheet-overlay"))==null||j.remove(),x(r)})}l(),X({title:"Gérer la saison",body:n,saveLabel:"Fermer",onSave:()=>{}})}function E(t){if(!t.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const r=[...t].filter(i=>!i.real).sort((i,l)=>i.iso<l.iso?-1:1),n=[...t].filter(i=>i.real).sort((i,l)=>i.iso>l.iso?-1:1);function e(i){const l=i.real?"#FF8500":"#FFB705",d=L.indexOf(i);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${I(i.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${l};white-space:nowrap;margin-right:4px">${i.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${d}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${d}" title="Supprimer">🗑</button>
      </div>`}return`
      ${n.length?`
        <details class="irr-section-details" data-section="effectuees">
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${n.length}</span></summary>
          ${n.map(e).join("")}
        </details>`:""}
      ${r.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${r.length}</span></summary>
          ${r.map(e).join("")}
        </details>`:""}
    `}function x(t){var d,u,h;const r=t.querySelector(".irr-cal-body");if(!a){r.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const n={};if(r.querySelectorAll("details[data-section]").forEach(b=>{n[b.dataset.section]=b.open}),a==="all"){const b={};for(const f of L)b[f.label]||(b[f.label]=[]),b[f.label].push(f);const S=Object.keys(b);if(!S.length){r.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}r.innerHTML=S.map(f=>{const q=b[f],j=q.some(F=>F.fromStrategy);return`<div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#1c1c1e;margin-bottom:6px">${f}</div>
          ${c(q)}
          ${v(q)}
          ${j?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-label="${f}">Modifier la saison ↗</button>
          </div>`:""}
        </div>`}).join(""),r.querySelectorAll("[data-strat-label]").forEach(f=>{f.addEventListener("click",()=>y(f.dataset.stratLabel,t))});return}const e=m(),l=e.some(b=>b.fromStrategy)?`<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
         </div>`;r.innerHTML=`
      ${c(e)}
      ${v(e)}
      ${l}
      ${E(e)}
    `,r.querySelectorAll("details[data-section]").forEach(b=>{const S=b.dataset.section;S in n&&(b.open=n[S])}),r.querySelectorAll(".irr-edit-btn").forEach(b=>{b.addEventListener("click",S=>{S.stopPropagation();const f=L[+b.dataset.iidx];f&&$(f,e,t)})}),r.querySelectorAll(".irr-del-btn").forEach(b=>{b.addEventListener("click",S=>{S.stopPropagation();const f=+b.dataset.iidx;f>=0&&(L.splice(f,1),x(t))})}),(d=r.querySelector("#open-strat-edit"))==null||d.addEventListener("click",()=>{y(a,t)}),(u=r.querySelector("#cal-add-irrig"))==null||u.addEventListener("click",()=>{ne(o,()=>x(t),g(a,s,o))}),(h=r.querySelector("#cal-add-strat"))==null||h.addEventListener("click",()=>{Z(o,()=>x(t),g(a,s,o))})}const M=s.map(t=>`<option value="${t.label}"${t.label===a?" selected":""}>⬡ ${t.label}</option>`).join(""),A=o.map(t=>`<option value="${t.id}"${String(t.id)===String(a)?" selected":""}>${t.name}</option>`).join(""),k=B(C(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="cal-back"><i class="bi bi-chevron-left"></i> Retour</button>
        <span class="irr-header-title">Irrigations</span>
        <div style="width:60px"></div>
      </div>
      <div style="padding:4px 14px 10px">
        <div style="font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Parcelle ou groupe</div>
        <select class="irr-cal-select" id="cal-filter-sel">
          <option value="" disabled ${a?"":"selected"}>— Sélectionner —</option>
          <option value="all"${a==="all"?" selected":""}>Toutes les parcelles</option>
          ${s.length?`<optgroup label="Groupes auto-détectés">${M}</optgroup>`:""}
          <optgroup label="Parcelles">${A}</optgroup>
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `));k.querySelector("#cal-back").addEventListener("click",z),k.querySelector("#cal-filter-sel").addEventListener("change",t=>{a=t.target.value,x(k)}),x(k)}export{le as openCalendar,ne as openIrrigationSaisie,Z as openIrrigationStrategie};
