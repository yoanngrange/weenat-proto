import{p as B,a as z,c as K}from"./mobile-CQdrkQQ3.js";import{b as C,s as I,I as L}from"./irrigations-CvzZm74y.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./plots-BEtOZiNT.js";import"./sensors-DDe0aa9W.js";import"./network-YzWdS0n_.js";import"./orgs-Cx4wNzLL.js";import"./members-DEd9yWse.js";function W(o){o.querySelectorAll(".irr-zone").forEach(f=>{const n=f.querySelector(".irr-zone-inner");if(!n)return;if(!f.querySelector(".irr-fake-track")){const g=document.createElement("div");g.className="irr-fake-track",f.appendChild(g)}let a=f.querySelector(".irr-fake-thumb");a||(a=document.createElement("div"),a.className="irr-fake-thumb",f.appendChild(a));const m=()=>{const{scrollTop:g,scrollHeight:c,clientHeight:v}=n;if(c<=v){a.style.opacity="0";return}const $=Math.max(28,v/c*v),y=c-v,E=y>0?g/y*(v-$):0;a.style.height=`${$}px`,a.style.top=`${E}px`,a.style.opacity="1"};n._fakeScrollHandler&&n.removeEventListener("scroll",n._fakeScrollHandler),n._fakeScrollHandler=m,n.addEventListener("scroll",m),setTimeout(m,30)})}function O(o){return o.style.display="flex",o.style.flexDirection="column",o.style.overflowY="hidden",o}const D=new Date().toISOString().split("T")[0];function H(o){const f=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[n,a,m]=o.split("-");return`${parseInt(m)} ${f[parseInt(a)-1]} ${n}`}function U(o,f,n,a=[]){if(n&&n.ids.length>1)return{text:n.label,count:n.ids.length};const m=o.size;if(m===1){const c=f.find(v=>v.id===[...o][0]);return{text:(c==null?void 0:c.name)??"Parcelle",count:null}}const g=a.find(c=>c.ids.length===m&&c.ids.every(v=>o.has(v)));return g?{text:g.label,count:g.ids.length}:{text:`${m} parcelles`,count:null}}function ii(o,f,n,a){if(n){const c=n.ids.map(v=>{var $;return($=f.find(y=>y.id===v))==null?void 0:$.name}).filter(Boolean);return[{title:`Groupe "${n.label}"`,names:c}]}const m=new Set(o),g=[];for(const c of a)if(c.ids.length>=2&&c.ids.every(v=>o.has(v))){const v=c.ids.map($=>{var y;return(y=f.find(E=>E.id===$))==null?void 0:y.name}).filter(Boolean);g.push({title:`Groupe "${c.label}"`,names:v}),c.ids.forEach($=>m.delete($))}if(m.size>0){const c=[...m].map(v=>{var $;return($=f.find(y=>y.id===v))==null?void 0:$.name}).filter(Boolean);g.push({title:g.length>0?"Autres parcelles":null,names:c})}return g}function X(o){const f=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,n,a]=o.split("-");return`${parseInt(a)} ${f[parseInt(n)-1]}`}function N(o){return!o||o===D?"":o<D?'<span class="irr-pill irr-pill--past">Passée · Réalisée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function G(o,f){return o?'<div class="irr-chk irr-chk--on"></div>':f?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function Z({title:o,body:f,onSave:n,onDelete:a,saveLabel:m="Enregistrer"}){var $,y;const g=document.getElementById("phone-screen");($=document.querySelector(".irr-sheet-overlay"))==null||$.remove();const c=document.createElement("div");c.className="irr-sheet-overlay",c.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${o}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${a?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${m}</button>
      </div>
    </div>`,c.querySelector(".irr-sheet-body").appendChild(typeof f=="string"?Object.assign(document.createElement("div"),{innerHTML:f}):f),g.appendChild(c),requestAnimationFrame(()=>c.classList.add("irr-sheet-overlay--open"));const v=()=>{c.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>c.remove(),280)};return c.addEventListener("click",E=>{E.target===c&&v()}),(y=c.querySelector("#iss-del"))==null||y.addEventListener("click",()=>{a==null||a(),v()}),c.querySelector("#iss-save").addEventListener("click",()=>{n==null||n(),v()}),c}function ni(o){const f=o.crop,n=o.irrigation&&o.irrigation!=="Pas d'irrigation"?o.irrigation:null;return f&&n?`<span class="irr-plot-info">${f} · ${n}</span>`:f?`<span class="irr-plot-info">${f} · <em>type non renseigné</em></span>`:n?`<span class="irr-plot-info"><em>Culture non renseignée</em> · ${n}</span>`:'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>'}function ai(o,f,n=null){let a=new Set((n==null?void 0:n.ids)??[]),m=D,g=10;const c=C(o);function v(){return c.map(i=>{const e=i.ids.every(d=>a.has(d)),l=i.ids.some(d=>a.has(d));return`<div class="irr-group-card${e?" irr-group-card--sel":""}" data-gids="${i.ids.join(",")}">
        <div class="irr-group-info">
          <div class="irr-group-name">${i.label}</div>
          <div class="irr-group-meta">${i.ids.length} parcelle${i.ids.length>1?"s":""}</div>
        </div>
        ${G(e,l)}
      </div>`}).join("")}function $(){return o.map(i=>{const e=a.has(i.id);return`<div class="irr-plot-row${e?" irr-plot-row--sel":""}" data-pid="${i.id}">
        <div><div class="irr-plot-name">${i.name}</div>${ni(i)}</div>
        ${G(e,!1)}
      </div>`}).join("")}function y(i){i.querySelector("#irr-date-hint").innerHTML=N(m)}function E(i){const e=a.size,l=i.querySelector(".irr-summary"),d=i.querySelector(".irr-save-btn");!l||!d||(n?(l.textContent="",d.disabled=!1,d.textContent="Enregistrer"):(l.textContent=e===0?"":`${e} parcelle${e>1?"s":""} · ${g} mm`,d.disabled=e===0,d.textContent="Enregistrer"))}function x(i){i.querySelectorAll(".irr-group-card").forEach(e=>{e.addEventListener("click",()=>{const l=e.dataset.gids.split(",").map(Number),d=l.every(u=>a.has(u));l.forEach(u=>d?a.delete(u):a.add(u)),i.querySelector("#groups-inner").innerHTML=v(),i.querySelector("#plots-inner").innerHTML=$(),x(i),E(i)})}),i.querySelectorAll(".irr-plot-row").forEach(e=>{e.addEventListener("click",()=>{const l=+e.dataset.pid;a.has(l)?a.delete(l):a.add(l),i.querySelector("#groups-inner").innerHTML=v(),i.querySelector("#plots-inner").innerHTML=$(),x(i),E(i)})}),W(i)}const F=n?n.label.split(" · "):[],A=F[0]||"",k=F[1]||"",t=n?o.filter(i=>n.ids.includes(i.id)):[],r=n?`<div style="padding:14px 14px;overflow-y:auto">
         <div style="font-size:16px;font-weight:700;color:#1c1c1e">${A}</div>
         ${k?`<div style="font-size:13px;color:#636366;margin-top:2px">${k}</div>`:""}
         <div style="font-size:12px;color:#8e8e93;margin-top:6px;margin-bottom:8px">${t.length} parcelle${t.length>1?"s":""}</div>
         ${t.map(i=>`<div style="font-size:13px;color:#1c1c1e;padding:2px 0">· ${i.name}</div>`).join("")}
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
       </div>`,s=O(B(`
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
            <input type="date" class="irr-date-input" id="irr-date" value="${m}" />
            <div id="irr-date-hint" style="min-height:14px"></div>
          </div>
          <div class="irr-field-card">
            <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
            <input type="number" class="irr-qty-input" id="irr-qty" value="${g}" min="1" />
            <div class="irr-field-hint">par parcelle</div>
          </div>
        </div>
      </div>
    </div>
    <div class="irr-scroll-body" style="${n?"overflow-y:auto":"overflow-y:hidden;display:flex;flex-direction:column"}">
      ${r}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${n?"":"disabled"}>Enregistrer</button>
    </div>
  `));s.dataset.dirty="true",n?W(s):x(s),E(s),s.querySelector("#irr-back").addEventListener("click",z),s.querySelector("#irr-date").addEventListener("change",i=>{m=i.target.value,y(s),E(s)}),s.querySelector("#irr-qty").addEventListener("input",i=>{g=parseInt(i.target.value)||1,E(s)}),s.querySelector(".irr-save-btn").addEventListener("click",()=>{const i=m>D,e=U(a,o,n,c),l=e.text,d=e.count?e.text:a.size===1?String([...a][0]):"",u=ii(a,o,n,c),h=u.reduce((b,S)=>b+S.names.length,0);L.push({iso:m,mm:g,real:!i,label:l,fromStrategy:!1}),I(),K(),ei({title:h>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:H(m)},{label:"Quantité",value:`${g} mm`}],parcelSections:u,isFut:i,plots:o,calFilter:d,addedCount:1,stackDepth:1})})}function J(o,f,n=null){let a=new Set((n==null?void 0:n.ids)??[]),m=D,g=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],c=10,v=7;const $=C(o);function y(){if(!m||!g||v<=0)return[];const t=[],r=new Date(g);let s=new Date(m);for(;s<=r&&t.length<100;)t.push(new Date(s)),s.setDate(s.getDate()+v);return t}function E(t){const r=t.crop,s=t.irrigation&&t.irrigation!=="Pas d'irrigation"?t.irrigation:null;return r&&s?`<span class="irr-plot-info">${r} · ${s}</span>`:r?`<span class="irr-plot-info">${r}</span>`:s?`<span class="irr-plot-info">${s}</span>`:'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>'}function x(){const t=y();a.size;const r=$.map(e=>{const l=e.ids.every(u=>a.has(u)),d=e.ids.some(u=>a.has(u));return`<div class="irr-group-card${l?" irr-group-card--sel":""}" data-gids="${e.ids.join(",")}">
        <div class="irr-group-info">
          <div class="irr-group-name">${e.label}</div>
          <div class="irr-group-meta">${e.ids.length} parcelle${e.ids.length>1?"s":""}</div>
        </div>
        ${G(l,d)}
      </div>`}).join(""),s=o.map(e=>{const l=a.has(e.id);return`<div class="irr-plot-row${l?" irr-plot-row--sel":""}" data-pid="${e.id}">
        <div>
          <div class="irr-plot-name">${e.name}</div>
          ${E(e)}
        </div>
        ${G(l,!1)}
      </div>`}).join(""),i=t.length>0?`<span class="irr-preview-ok">↗ ${t.length} irrigations · ${t.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${m}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${g}" />
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
      <div class="irr-preview-box" id="strat-preview">${i}</div>
      ${n?`<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${n.label} <span style="color:#9E9D98;font-weight:400">· ${n.ids.length} parcelle${n.ids.length>1?"s":""}</span></span>
           </div>`:`<div class="irr-section-lbl">Parcelles</div>
           ${$.length?`<div class="irr-group-hint">Groupes suggérés</div>${r}<div class="irr-divider"></div>`:""}
           ${s}`}
      <div class="irr-bottom-spacer"></div>
    `}function F(t){const r=a.size,s=y(),i=t.querySelector(".irr-save-btn"),e=t.querySelector(".irr-summary");!i||!e||(i.disabled=r===0||s.length===0,e.textContent=r===0?"":`${r} parcelle${r>1?"s":""} · ${s.length} occurrences`,i.textContent="Voir l'aperçu →")}function A(t){var i,e,l,d;const r=t.querySelector(".irr-scroll-body");r.querySelectorAll(".irr-group-card").forEach(u=>{u.addEventListener("click",()=>{const h=u.dataset.gids.split(",").map(Number),b=h.every(S=>a.has(S));h.forEach(S=>b?a.delete(S):a.add(S)),r.innerHTML=x(),A(t),F(t)})}),r.querySelectorAll(".irr-plot-row").forEach(u=>{u.addEventListener("click",()=>{const h=+u.dataset.pid;a.has(h)?a.delete(h):a.add(h),r.innerHTML=x(),A(t),F(t)})});const s=()=>{const u=y(),h=r.querySelector("#strat-preview");h&&(h.innerHTML=u.length>0?`<span class="irr-preview-ok">↗ ${u.length} irrigations · ${u.length*c} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),F(t)};(i=r.querySelector("#strat-debut"))==null||i.addEventListener("change",u=>{m=u.target.value,s()}),(e=r.querySelector("#strat-fin"))==null||e.addEventListener("change",u=>{g=u.target.value,s()}),(l=r.querySelector("#strat-qty"))==null||l.addEventListener("input",u=>{c=parseInt(u.target.value)||1,s()}),(d=r.querySelector("#strat-freq"))==null||d.addEventListener("input",u=>{v=parseInt(u.target.value)||1,s()})}const k=O(B(`
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
  `));k.dataset.dirty="true",A(k),F(k),k.querySelector("#strat-back").addEventListener("click",z),k.querySelector(".irr-save-btn").addEventListener("click",()=>{const t=y();li(k,o,a,m,g,c,v,t,f,n)})}function li(o,f,n,a,m,g,c,v,$,y){var l;const E=n.size,x=5;v.length-x;function F(d){const h=d.toISOString().slice(0,10)>=D?"#FFB705":"#FF8500",b=d.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${H(b)}</span>
      <span style="font-size:13px;font-weight:700;color:${h}">${g} mm</span>
    </div>`}const A=v.filter(d=>d.toISOString().slice(0,10)<D),k=v.filter(d=>d.toISOString().slice(0,10)>=D),t=k.slice(0,x),r=k.slice(x),s=A.length?`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${A.map(F).join("")}`:"",i=k.length?`
    <div class="irr-section-lbl" style="margin-top:${A.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${t.map(F).join("")}
    ${r.length?`
      <div id="apercu-rest" style="display:none">${r.map(F).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${r.length} irrigation${r.length>1?"s":""} de plus</button>
    `:""}`:"",e=O(B(`
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
          <div class="irr-apercu-sub">${X(a)} → ${X(m)} · tous les ${c}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big" style="color:#185FA5">${v.length*g} mm</div>
          <div class="irr-apercu-sub">${E} parcelle${E>1?"s":""} · ${g} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${s}
        ${i}
        ${!A.length&&!k.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `));e.dataset.dirty="true",e.querySelector("#apercu-back").addEventListener("click",z),(l=e.querySelector("#apercu-show-more"))==null||l.addEventListener("click",d=>{e.querySelector("#apercu-rest").style.display="",d.target.remove()}),e.querySelector("#apercu-confirm").addEventListener("click",()=>{const d=C(f),u=U(n,f,y,d),h=u.text,b=u.count?u.text:n.size===1?String([...n][0]):"",S=ii(n,f,y,d);v.forEach(p=>{const q=p.toISOString().slice(0,10);L.push({iso:q,mm:g,real:q<=D,label:h,fromStrategy:!0})}),I(),K(),ei({title:"Saison enregistrée",params:[{label:"Début",value:H(a)},{label:"Fin",value:H(m)},{label:"Quantité",value:`${g} mm/irrig.`},{label:"Fréquence",value:`tous les ${c} jours`},{label:"Irrigations générées",value:`${v.length}`}],parcelSections:S,isFut:!0,plots:f,calFilter:b,addedCount:v.length,stackDepth:2})})}function ei({title:o,params:f,parcelSections:n=[],isFut:a,plots:m,calFilter:g,addedCount:c=0,stackDepth:v=3}){const $=(f||[]).map(r=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${r.label}</span>
      <span class="irr-confirm-param-val">${r.value}</span>
    </div>`).join(""),y=3,E=n.flatMap(r=>r.names.map(s=>({title:r.title,name:s}))),x=E.slice(0,y),F=E.slice(y);function A(r){const s=[];let i=null;for(const e of r)(!i||i.title!==e.title)&&(i={title:e.title,names:[]},s.push(i)),i.names.push(e.name);return s.map(e=>`
      ${e.title?`<div class="irr-confirm-sec-hd">${e.title}</div>`:""}
      ${e.names.map(l=>`<div class="irr-confirm-parcel">· ${l}</div>`).join("")}
    `).join("")}const k=E.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${A(x)}
      ${F.length?`
        <details class="irr-confirm-more">
          <summary>${F.length} parcelle${F.length>1?"s":""} de plus</summary>
          ${A(F)}
        </details>`:""}
    </div>`,t=O(B(`
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
  `));t.querySelector("#conf-edit").addEventListener("click",()=>{c>0&&L.splice(L.length-c,c),z()}),t.querySelector("#conf-back").addEventListener("click",()=>{for(let r=0;r<=v;r++)z()}),t.querySelector("#conf-calendar").addEventListener("click",()=>{oi(m,g)})}function oi(o,f){const n=C(o);let a=f||"";function m(t,r,s){if(!t)return null;const i=r.find(l=>l.label===t);if(i)return{ids:i.ids,label:i.label};const e=s.find(l=>String(l.id)===String(t));return e?{ids:[e.id],label:e.name}:null}function g(){if(!a||a==="all")return L;const t=n.find(s=>s.label===a);if(t)return L.filter(s=>s.label===t.label);const r=o.find(s=>String(s.id)===String(a));if(r){const s=new Set(n.filter(i=>i.ids.includes(r.id)).map(i=>i.label));return L.filter(i=>i.label===r.name||s.has(i.label))}return L}function c(t){const r=t.filter(l=>l.real),s=t.filter(l=>!l.real),i=r.reduce((l,d)=>l+d.mm,0),e=s.reduce((l,d)=>l+d.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${i} mm</div>
        <div class="irr-cumul-count">${r.length} irrigation${r.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${e} mm</div>
        <div class="irr-cumul-count">${s.length} irrigation${s.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${i+e} mm</div>
        <div class="irr-cumul-count">${r.length+s.length} irrigations</div>
      </div>
    </div>`}function v(t){if(t.length<2)return"";const r=[...t].sort((w,T)=>w.iso<T.iso?-1:1);for(let w=1;w<r.length;w++)if((new Date(r[w].iso)-new Date(r[w-1].iso))/864e5<1)return"";const s=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],i=new Date(r[0].iso),e=new Date(r[r.length-1].iso),l=Math.max(e-i,1),d=300,u=26,h=5,b=5,S=u-b-4,p=S-b-3,q=u+h+13,j=q+2,M=w=>Math.round((w-i)/l*d),V=w=>{const[,T,_]=w.split("-");return`${parseInt(_)}/${parseInt(T)}`},R=[],P=new Date(i.getFullYear(),i.getMonth()+1,1);for(;P<=e;)R.push(new Date(P)),P.setMonth(P.getMonth()+1);const ti=R.map(w=>`<line x1="${M(w)}" y1="${u-6}" x2="${M(w)}" y2="${u+h+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),Y=[i,...R,e],ri=Y.slice(0,-1).map((w,T)=>{const _=M(w),Q=M(Y[T+1]);return Q-_<16?"":`<text x="${Math.round((_+Q)/2)}" y="${p}" font-size="8" fill="#B0AEA8" text-anchor="middle">${s[w.getMonth()]}</text>`}).join(""),si=r.map(w=>{const T=w.real?"#FF8500":"#FFB705";return`<circle cx="${M(new Date(w.iso))}" cy="${S}" r="${b}" fill="${T}" stroke="#fff" stroke-width="1.5"/>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${d}" height="${j}" viewBox="0 0 ${d} ${j}" style="width:100%;display:block">
        ${ri}
        <rect x="0" y="${u}" width="${d}" height="${h}" rx="${h/2}" fill="#E0DED8"/>
        ${ti}
        ${si}
        <text x="1" y="${q}" font-size="9" fill="#B0AEA8">${V(r[0].iso)}</text>
        <text x="${d-1}" y="${q}" font-size="9" fill="#B0AEA8" text-anchor="end">${V(r[r.length-1].iso)}</text>
      </svg>
    </div>`}function $(t,r,s){var b,S;const e=C(o).find(p=>p.label===t.label),l=document.createElement("div");let d="single",u=t.iso,h=t.mm;l.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${t.iso}" />
          <div id="edit-date-hint">${N(t.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${t.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>
      ${e&&e.ids.length>1?`
      <div class="irr-scope-box">
        <div class="irr-scope-lbl">Appliquer à…</div>
        <div class="irr-scope-btns">
          <button class="irr-scope-btn irr-scope-btn--on" id="scope-single">Cette occurrence</button>
          <button class="irr-scope-btn" id="scope-group">Tout le groupe (${e.ids.length})</button>
        </div>
      </div>`:""}`,l.querySelector("#edit-date").addEventListener("change",p=>{u=p.target.value,l.querySelector("#edit-date-hint").innerHTML=N(u)}),l.querySelector("#edit-qty").addEventListener("input",p=>{const q=parseInt(p.target.value);q>0&&(h=q)}),e&&((b=l.querySelector("#scope-single"))==null||b.addEventListener("click",p=>{d="single",l.querySelectorAll(".irr-scope-btn").forEach(q=>q.classList.remove("irr-scope-btn--on")),p.target.classList.add("irr-scope-btn--on")}),(S=l.querySelector("#scope-group"))==null||S.addEventListener("click",p=>{d="group",l.querySelectorAll(".irr-scope-btn").forEach(q=>q.classList.remove("irr-scope-btn--on")),p.target.classList.add("irr-scope-btn--on")})),Z({title:t.real?"Modifier l'irrigation réalisée":"Modifier l'irrigation planifiée",body:l,saveLabel:"Enregistrer",onSave:()=>{t.iso=u,t.mm=h,t.real=u<=D,d==="group"&&e&&L.filter(p=>p.label===t.label).forEach(p=>{p.mm=h}),I(),x(s)},onDelete:()=>{const p=L.indexOf(t);p>-1&&L.splice(p,1),I(),x(s)}})}function y(t,r){const s=document.createElement("div");let i=!1,e=!1;function l(){var d,u,h,b,S,p,q;s.innerHTML=`
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
        ${i?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>`:""}
        ${e?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Supprimer toutes les irrigations de cette saison ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(d=s.querySelector("#strat-modify"))==null||d.addEventListener("click",()=>{var M;(M=document.querySelector(".irr-sheet-overlay"))==null||M.remove();const j=m(t,n,o);J(o,()=>x(r),j)}),(u=s.querySelector("#strat-stop"))==null||u.addEventListener("click",()=>{i=!0,e=!1,l()}),(h=s.querySelector("#strat-delete"))==null||h.addEventListener("click",()=>{e=!0,i=!1,l()}),(b=s.querySelector("#stop-cancel"))==null||b.addEventListener("click",()=>{i=!1,l()}),(S=s.querySelector("#stop-confirm"))==null||S.addEventListener("click",()=>{var j;L.splice(0,L.length,...L.filter(M=>!(M.label===t&&!M.real))),I(),(j=document.querySelector(".irr-sheet-overlay"))==null||j.remove(),x(r)}),(p=s.querySelector("#delete-cancel"))==null||p.addEventListener("click",()=>{e=!1,l()}),(q=s.querySelector("#delete-confirm"))==null||q.addEventListener("click",()=>{var j;L.splice(0,L.length,...L.filter(M=>M.label!==t)),I(),(j=document.querySelector(".irr-sheet-overlay"))==null||j.remove(),x(r)})}l(),Z({title:"Gérer la saison",body:s,saveLabel:"Fermer",onSave:()=>{}})}function E(t){if(!t.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const r=[...t].filter(e=>!e.real).sort((e,l)=>e.iso<l.iso?-1:1),s=[...t].filter(e=>e.real).sort((e,l)=>e.iso>l.iso?-1:1);function i(e){const l=e.real?"#FF8500":"#FFB705",d=L.indexOf(e);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${H(e.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${l};white-space:nowrap;margin-right:4px">${e.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${d}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${d}" title="Supprimer">🗑</button>
      </div>`}return`
      ${s.length?`
        <details class="irr-section-details" data-section="effectuees">
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${s.length}</span></summary>
          ${s.map(i).join("")}
        </details>`:""}
      ${r.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${r.length}</span></summary>
          ${r.map(i).join("")}
        </details>`:""}
    `}function x(t){var d,u,h;const r=t.querySelector(".irr-cal-body");if(!a){r.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const s={};if(r.querySelectorAll("details[data-section]").forEach(b=>{s[b.dataset.section]=b.open}),a==="all"){const b={};for(const p of L)b[p.label]||(b[p.label]=[]),b[p.label].push(p);const S=Object.keys(b);if(!S.length){r.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}r.innerHTML=S.map(p=>{const q=b[p],j=q.some(M=>M.fromStrategy);return`<div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#1c1c1e;margin-bottom:6px">${p}</div>
          ${c(q)}
          ${v(q)}
          ${j?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-label="${p}">Modifier la saison ↗</button>
          </div>`:""}
        </div>`}).join(""),r.querySelectorAll("[data-strat-label]").forEach(p=>{p.addEventListener("click",()=>y(p.dataset.stratLabel,t))});return}const i=g(),l=i.some(b=>b.fromStrategy)?`<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
         </div>`;r.innerHTML=`
      ${c(i)}
      ${v(i)}
      ${l}
      ${E(i)}
    `,r.querySelectorAll("details[data-section]").forEach(b=>{const S=b.dataset.section;S in s&&(b.open=s[S])}),r.querySelectorAll(".irr-edit-btn").forEach(b=>{b.addEventListener("click",S=>{S.stopPropagation();const p=L[+b.dataset.iidx];p&&$(p,i,t)})}),r.querySelectorAll(".irr-del-btn").forEach(b=>{b.addEventListener("click",S=>{S.stopPropagation();const p=+b.dataset.iidx;p>=0&&(L.splice(p,1),I(),x(t))})}),(d=r.querySelector("#open-strat-edit"))==null||d.addEventListener("click",()=>{y(a,t)}),(u=r.querySelector("#cal-add-irrig"))==null||u.addEventListener("click",()=>{ai(o,()=>x(t),m(a,n,o))}),(h=r.querySelector("#cal-add-strat"))==null||h.addEventListener("click",()=>{J(o,()=>x(t),m(a,n,o))})}const F=n.map(t=>`<option value="${t.label}"${t.label===a?" selected":""}>⬡ ${t.label}</option>`).join(""),A=o.map(t=>`<option value="${t.id}"${String(t.id)===String(a)?" selected":""}>${t.name}</option>`).join(""),k=O(B(`
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
          ${n.length?`<optgroup label="Groupes auto-détectés">${F}</optgroup>`:""}
          <optgroup label="Parcelles">${A}</optgroup>
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `));k.querySelector("#cal-back").addEventListener("click",z),k.querySelector("#cal-filter-sel").addEventListener("change",t=>{a=t.target.value,x(k)}),x(k)}export{oi as openCalendar,ai as openIrrigationSaisie,J as openIrrigationStrategie};
