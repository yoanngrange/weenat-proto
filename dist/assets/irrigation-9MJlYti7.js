import{p as P,a as O,c as J}from"./mobile-zuc0b_yz.js";import{b as z,I as L,s as C}from"./irrigations-B9z3zJvy.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./plots-2gWiFi4a.js";import"./sensors-DDe0aa9W.js";import"./orgs-Cx4wNzLL.js";import"./network-YzWdS0n_.js";import"./members-DEd9yWse.js";function R(n){return n.style.display="flex",n.style.flexDirection="column",n.style.overflowY="hidden",n}const I=new Date().toISOString().split("T")[0];function H(n){const h=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[r,c,m]=n.split("-");return`${parseInt(m)} ${h[parseInt(c)-1]} ${r}`}function K(n,h,r,c){if(r){const s=r.ids.map(l=>{var $;return($=h.find(y=>y.id===l))==null?void 0:$.name}).filter(Boolean);return[{title:`Groupe "${r.label}"`,names:s}]}const m=new Set(n),b=[];for(const s of c)if(s.ids.length>=2&&s.ids.every(l=>n.has(l))){const l=s.ids.map($=>{var y;return(y=h.find(S=>S.id===$))==null?void 0:y.name}).filter(Boolean);b.push({title:`Groupe "${s.label}"`,names:l}),s.ids.forEach($=>m.delete($))}if(m.size>0){const s=[...m].map(l=>{var $;return($=h.find(y=>y.id===l))==null?void 0:$.name}).filter(Boolean);b.push({title:b.length>0?"Autres parcelles":null,names:s})}return b}function X(n){const h=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,r,c]=n.split("-");return`${parseInt(c)} ${h[parseInt(r)-1]}`}function Y(n){return!n||n===I?"":n<I?'<span class="irr-pill irr-pill--past">Passée · Réalisée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function V(n,h){return n?'<div class="irr-chk irr-chk--on"></div>':h?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function ii(n,h,r){const c=[],m=new Set(n);for(const b of h){const s=b.ids.filter(l=>n.has(l));s.length&&(s.length===b.ids.length?(c.push(b.label),b.ids.forEach(l=>m.delete(l))):s.forEach(l=>{const $=r.find(y=>y.id===l);$&&(c.push($.name),m.delete(l))}))}for(const b of m){const s=r.find(l=>l.id===b);s&&c.push(s.name)}return c}function ei(n,h,r){const c=h.filter(s=>!n.some(l=>l.ids.includes(s.id))),m=n.map(s=>{const l=s.ids.every(S=>r.has(S)),$=s.ids.some(S=>r.has(S)),y=s.ids.map(S=>h.find(E=>E.id===S)).filter(Boolean).map(S=>{const E=r.has(S.id);return`<div class="irr-plot-row irr-plot-row--child${E?" irr-plot-row--sel":""}" data-pid="${S.id}">
          <div class="irr-plot-name">${S.name}</div>
          ${V(E,!1)}
        </div>`}).join("");return`<div class="irr-group-card${l?" irr-group-card--sel":""}" data-gids="${s.ids.join(",")}">
      <div class="irr-group-info">
        <div class="irr-group-name">${s.label}</div>
        <div class="irr-group-meta">${s.ids.length} parcelle${s.ids.length>1?"s":""}</div>
      </div>
      ${V(l,$)}
    </div>${y}`}).join(""),b=c.map(s=>{const l=r.has(s.id);return`<div class="irr-plot-row${l?" irr-plot-row--sel":""}" data-pid="${s.id}">
      <div><div class="irr-plot-name">${s.name}</div>${oi(s)}</div>
      ${V(l,!1)}
    </div>`}).join("");return m+(c.length?`${n.length?'<div class="irr-section-lbl" style="margin-top:10px">Autres parcelles</div>':""}${b}`:"")}function Z({title:n,body:h,onSave:r,onDelete:c,saveLabel:m="Enregistrer"}){var $,y;const b=document.getElementById("phone-screen");($=document.querySelector(".irr-sheet-overlay"))==null||$.remove();const s=document.createElement("div");s.className="irr-sheet-overlay",s.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${n}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${c?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${m}</button>
      </div>
    </div>`,s.querySelector(".irr-sheet-body").appendChild(typeof h=="string"?Object.assign(document.createElement("div"),{innerHTML:h}):h),b.appendChild(s),requestAnimationFrame(()=>s.classList.add("irr-sheet-overlay--open"));const l=()=>{s.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>s.remove(),280)};return s.addEventListener("click",S=>{S.target===s&&l()}),(y=s.querySelector("#iss-del"))==null||y.addEventListener("click",()=>{c==null||c(),l()}),s.querySelector("#iss-save").addEventListener("click",()=>{r==null||r(),l()}),s}function oi(n){const h=n.crop,r=n.irrigation&&n.irrigation!=="Pas d'irrigation"?n.irrigation:null;return h&&r?`<span class="irr-plot-info">${h} · ${r}</span>`:h?`<span class="irr-plot-info">${h} · <em>type d'irrigation non renseigné</em></span>`:r?`<span class="irr-plot-info"><em>Culture non renseignée</em> · ${r}</span>`:'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>'}function ci(n,h,r=null){let c=new Set((r==null?void 0:r.ids)??[]),m=I,b=10;const s=z(n);function l(){return ei(s,n,c)}function $(f){f.querySelector("#irr-date-hint").innerHTML=Y(m)}function y(f){const u=c.size,i=f.querySelector(".irr-summary"),e=f.querySelector(".irr-save-btn");!i||!e||(r?(i.textContent="",e.disabled=!1,e.textContent="Enregistrer"):(i.textContent=u===0?"":`${u} parcelle${u>1?"s":""} · ${b} mm`,e.disabled=u===0,e.textContent="Enregistrer"))}function S(f){f.querySelectorAll(".irr-group-card").forEach(u=>{u.addEventListener("click",()=>{const i=u.dataset.gids.split(",").map(Number),e=i.every(t=>c.has(t));i.forEach(t=>e?c.delete(t):c.add(t)),f.querySelector("#irr-sel-list").innerHTML=l(),S(f),y(f)})}),f.querySelectorAll(".irr-plot-row").forEach(u=>{u.addEventListener("click",()=>{const i=+u.dataset.pid;c.has(i)?c.delete(i):c.add(i),f.querySelector("#irr-sel-list").innerHTML=l(),S(f),y(f)})})}const E=r?n.filter(f=>r.ids.includes(f.id)):[],F=r?`<div class="irr-presel-banner">
         <i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
         <span>${r.label} <span style="color:#9E9D98;font-weight:400">· ${r.ids.length} parcelle${r.ids.length>1?"s":""}</span></span>
       </div>
       ${E.map(f=>`<div style="font-size:13px;color:#636366;padding:2px 4px">· ${f.name}</div>`).join("")}`:`<div id="irr-sel-list">${l()}</div>`,q=R(P(`
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
            <input type="number" class="irr-qty-input" id="irr-qty" value="${b}" min="1" />
            <div class="irr-field-hint">par parcelle</div>
          </div>
        </div>
      </div>
    </div>
    <div class="irr-scroll-body">
      ${F}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${r?"":"disabled"}>Enregistrer</button>
    </div>
  `));q.dataset.dirty="true",r||S(q),y(q),q.querySelector("#irr-back").addEventListener("click",O),q.querySelector("#irr-date").addEventListener("change",f=>{m=f.target.value,$(q),y(q)}),q.querySelector("#irr-qty").addEventListener("input",f=>{b=parseInt(f.target.value)||1,y(q)}),q.querySelector(".irr-save-btn").addEventListener("click",()=>{const f=m>I,u=r?new Set(r.ids):c,i=r?[r.label]:ii(u,s,n);i.forEach(d=>{L.push({iso:m,mm:b,real:!f,label:d,fromStrategy:!1})}),C();const e=i.length===1?i[0]:"all",t=K(u,n,r,s),a=t.reduce((d,v)=>d+v.names.length,0);J(),ti({title:a>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:H(m)},{label:"Quantité",value:`${b} mm`}],parcelSections:t,isFut:f,plots:n,calFilter:e,addedCount:i.length,stackDepth:1})})}function U(n,h,r=null,c=null){let m=new Set((r==null?void 0:r.ids)??[]),b=I,s=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],l=10,$=7;const y=z(n);function S(){if(!b||!s||$<=0)return[];const u=[],i=new Date(s);let e=new Date(b);for(;e<=i&&u.length<100;)u.push(new Date(e)),e.setDate(e.getDate()+$);return u}function E(){const u=S();m.size;const i=u.length>0?`<span class="irr-preview-ok">↗ ${u.length} irrigations · ${u.length*l} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${b}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${s}" />
        </div>
      </div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="strat-qty" value="${l}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence <span class="irr-unit">(jours)</span></div>
          <input type="number" class="irr-qty-input" id="strat-freq" value="${$}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${i}</div>
      ${r?`<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${r.label} <span style="color:#9E9D98;font-weight:400">· ${r.ids.length} parcelle${r.ids.length>1?"s":""}</span></span>
           </div>`:ei(y,n,m)}
      <div class="irr-bottom-spacer"></div>
    `}function F(u){const i=m.size,e=S(),t=u.querySelector(".irr-save-btn"),a=u.querySelector(".irr-summary");!t||!a||(t.disabled=i===0||e.length===0,a.textContent=i===0?"":`${i} parcelle${i>1?"s":""} · ${e.length} occurrences`,t.textContent="Voir l'aperçu →")}function q(u){var t,a,d,v;const i=u.querySelector(".irr-scroll-body");i.querySelectorAll(".irr-group-card").forEach(o=>{o.addEventListener("click",()=>{const x=o.dataset.gids.split(",").map(Number),w=x.every(g=>m.has(g));x.forEach(g=>w?m.delete(g):m.add(g)),i.innerHTML=E(),q(u),F(u)})}),i.querySelectorAll(".irr-plot-row").forEach(o=>{o.addEventListener("click",()=>{const x=+o.dataset.pid;m.has(x)?m.delete(x):m.add(x),i.innerHTML=E(),q(u),F(u)})});const e=()=>{const o=S(),x=i.querySelector("#strat-preview");x&&(x.innerHTML=o.length>0?`<span class="irr-preview-ok">↗ ${o.length} irrigations · ${o.length*l} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),F(u)};(t=i.querySelector("#strat-debut"))==null||t.addEventListener("change",o=>{b=o.target.value,e()}),(a=i.querySelector("#strat-fin"))==null||a.addEventListener("change",o=>{s=o.target.value,e()}),(d=i.querySelector("#strat-qty"))==null||d.addEventListener("input",o=>{l=parseInt(o.target.value)||1,e()}),(v=i.querySelector("#strat-freq"))==null||v.addEventListener("input",o=>{$=parseInt(o.target.value)||1,e()})}const f=R(P(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="strat-back"><i class="bi bi-chevron-left"></i> Annuler</button>
        <span class="irr-header-title">Saison d'irrigation</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body">${E()}</div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" disabled>Voir l'aperçu →</button>
    </div>
  `));f.dataset.dirty="true",q(f),F(f),f.querySelector("#strat-back").addEventListener("click",O),f.querySelector(".irr-save-btn").addEventListener("click",()=>{const u=S();di(f,n,m,b,s,l,$,u,h,r,c)})}function di(n,h,r,c,m,b,s,l,$,y,S=null){var v;const E=r.size,F=5;l.length-F;function q(o){const w=o.toISOString().slice(0,10)>=I?"#FFB705":"#FF8500",g=o.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${H(g)}</span>
      <span style="font-size:13px;font-weight:700;color:${w}">${b} mm</span>
    </div>`}const f=l.filter(o=>o.toISOString().slice(0,10)<I),u=l.filter(o=>o.toISOString().slice(0,10)>=I),i=u.slice(0,F),e=u.slice(F),t=f.length?`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${f.map(q).join("")}`:"",a=u.length?`
    <div class="irr-section-lbl" style="margin-top:${f.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${i.map(q).join("")}
    ${e.length?`
      <div id="apercu-rest" style="display:none">${e.map(q).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${e.length} irrigation${e.length>1?"s":""} de plus</button>
    `:""}`:"",d=R(P(`
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
          <div class="irr-apercu-big">${l.length} irrigations</div>
          <div class="irr-apercu-sub">${X(c)} → ${X(m)} · tous les ${s}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${l.length*b} mm</div>
          <div class="irr-apercu-sub">${E} parcelle${E>1?"s":""} · ${b} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${t}
        ${a}
        ${!f.length&&!u.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `));d.dataset.dirty="true",d.querySelector("#apercu-back").addEventListener("click",O),(v=d.querySelector("#apercu-show-more"))==null||v.addEventListener("click",o=>{d.querySelector("#apercu-rest").style.display="",o.target.remove()}),d.querySelector("#apercu-confirm").addEventListener("click",()=>{const o=z(h),x=y?new Set(y.ids):r,w=y?[y.label]:ii(x,o,h),g=w.length===1?w[0]:"all",k=K(x,h,y,o);S&&L.splice(0,L.length,...L.filter(p=>!(w.includes(p.label)&&p.fromStrategy&&!p.real))),l.forEach(p=>{const A=p.toISOString().slice(0,10);w.forEach(j=>{L.push({iso:A,mm:b,real:A<=I,label:j,fromStrategy:!0})})}),C(),J(),ti({title:"Saison enregistrée",params:[{label:"Début",value:H(c)},{label:"Fin",value:H(m)},{label:"Quantité",value:`${b} mm/irrig.`},{label:"Fréquence",value:`tous les ${s} jours`},{label:"Irrigations générées",value:`${l.length*w.length}`}],parcelSections:k,isFut:!0,plots:h,calFilter:g,addedCount:l.length*w.length,stackDepth:2})})}function ti({title:n,params:h,parcelSections:r=[],isFut:c,plots:m,calFilter:b,addedCount:s=0,stackDepth:l=3}){const $=(h||[]).map(i=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${i.label}</span>
      <span class="irr-confirm-param-val">${i.value}</span>
    </div>`).join(""),y=3,S=r.flatMap(i=>i.names.map(e=>({title:i.title,name:e}))),E=S.slice(0,y),F=S.slice(y);function q(i){const e=[];let t=null;for(const a of i)(!t||t.title!==a.title)&&(t={title:a.title,names:[]},e.push(t)),t.names.push(a.name);return e.map(a=>`
      ${a.title?`<div class="irr-confirm-sec-hd">${a.title}</div>`:""}
      ${a.names.map(d=>`<div class="irr-confirm-parcel">· ${d}</div>`).join("")}
    `).join("")}const f=S.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${q(E)}
      ${F.length?`
        <details class="irr-confirm-more">
          <summary>${F.length} parcelle${F.length>1?"s":""} de plus</summary>
          ${q(F)}
        </details>`:""}
    </div>`,u=R(P(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <div style="width:60px"></div>
        <span class="irr-header-title">${n.includes("aison")?"Saison":n.includes("rrigations")?"Enregistrées":"Enregistrée"}</span>
        <div style="width:60px"></div>
      </div>
    </div>
    <div class="irr-scroll-body irr-confirm-body">
      <div class="irr-confirm-icon-wrap">
        <div class="irr-confirm-icon">✓</div>
      </div>
      <div class="irr-confirm-title">${n}</div>
      <div class="irr-confirm-params">${$}</div>
      ${f}
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
  `));u.querySelector("#conf-edit").addEventListener("click",()=>{s>0&&L.splice(L.length-s,s),O()}),u.querySelector("#conf-back").addEventListener("click",()=>{for(let i=0;i<=l;i++)O()}),u.querySelector("#conf-calendar").addEventListener("click",()=>{vi(m,b)})}const ui=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function vi(n,h){const r=z(n);let c=h||"";function m(i,e,t){if(!i)return null;const a=e.find(v=>v.label===i);if(a)return{ids:a.ids,label:a.label};const d=t.find(v=>String(v.id)===String(i))??t.find(v=>v.name===i);return d?{ids:[d.id],label:d.name}:null}function b(){if(!c||c==="all")return L;const i=r.find(t=>t.label===c);if(i)return L.filter(t=>t.label===i.label);const e=n.find(t=>String(t.id)===String(c));if(e){const t=new Set(r.filter(a=>a.ids.includes(e.id)).map(a=>a.label));return L.filter(a=>a.label===e.name||t.has(a.label))}return L}function s(i){const e=i.filter(v=>v.real),t=i.filter(v=>!v.real),a=e.reduce((v,o)=>v+o.mm,0),d=t.reduce((v,o)=>v+o.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${a} mm</div>
        <div class="irr-cumul-count">${e.length} irrigation${e.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${d} mm</div>
        <div class="irr-cumul-count">${t.length} irrigation${t.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${a+d} mm</div>
        <div class="irr-cumul-count">${e.length+t.length} irrigations</div>
      </div>
    </div>`}function l(i){if(i.length<2)return"";const e=[...i].sort((M,T)=>M.iso<T.iso?-1:1),t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],a=new Date(e[0].iso),d=new Date(e[e.length-1].iso),v=Math.max(d-a,1),o=300,x=26,w=5,g=5,k=x-g-4,p=k-g-3,A=x+w+13,j=A+2,D=M=>Math.round((M-a)/v*o),Q=M=>{const[,T,B]=M.split("-");return`${parseInt(B)}/${parseInt(T)}`},N=[],_=new Date(a.getFullYear(),a.getMonth()+1,1);for(;_<=d;)N.push(new Date(_)),_.setMonth(_.getMonth()+1);const ri=N.map(M=>`<line x1="${D(M)}" y1="${x-6}" x2="${D(M)}" y2="${x+w+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),W=[a,...N,d],si=W.slice(0,-1).map((M,T)=>{const B=D(M),G=D(W[T+1]);return G-B<16?"":`<text x="${Math.round((B+G)/2)}" y="${p}" font-size="8" fill="#B0AEA8" text-anchor="middle">${t[M.getMonth()]}</text>`}).join(""),ni=e.map(M=>{const T=M.real?"#FF8500":"#FFB705",B=D(new Date(M.iso)),[,G,ai]=M.iso.split("-"),li=`${parseInt(ai)} ${ui[parseInt(G)-1]} · ${M.mm} mm`;return`<circle cx="${B}" cy="${k}" r="${g}" fill="${T}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${B}" cy="${k}" r="${g+6}" fill="transparent" pointer-events="all"><title>${li}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${o}" height="${j}" viewBox="0 0 ${o} ${j}" style="width:100%;display:block">
        ${si}
        <rect x="0" y="${x}" width="${o}" height="${w}" rx="${w/2}" fill="#E0DED8"/>
        ${ri}
        ${ni}
        <text x="1" y="${A}" font-size="9" fill="#B0AEA8">${Q(e[0].iso)}</text>
        <text x="${o-1}" y="${A}" font-size="9" fill="#B0AEA8" text-anchor="end">${Q(e[e.length-1].iso)}</text>
      </svg>
    </div>`}function $(i,e,t){var g,k;const d=z(n).find(p=>p.label===i.label),v=document.createElement("div");let o="single",x=i.iso,w=i.mm;v.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${i.iso}" />
          <div id="edit-date-hint">${Y(i.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${i.mm}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
      </div>
      ${d&&d.ids.length>1?`
      <div class="irr-scope-box">
        <div class="irr-scope-lbl">Appliquer à…</div>
        <div class="irr-scope-btns">
          <button class="irr-scope-btn irr-scope-btn--on" id="scope-single">Cette occurrence</button>
          <button class="irr-scope-btn" id="scope-group">Tout le groupe (${d.ids.length})</button>
        </div>
      </div>`:""}`,v.querySelector("#edit-date").addEventListener("change",p=>{x=p.target.value,v.querySelector("#edit-date-hint").innerHTML=Y(x)}),v.querySelector("#edit-qty").addEventListener("input",p=>{const A=parseInt(p.target.value);A>0&&(w=A)}),d&&((g=v.querySelector("#scope-single"))==null||g.addEventListener("click",p=>{o="single",v.querySelectorAll(".irr-scope-btn").forEach(A=>A.classList.remove("irr-scope-btn--on")),p.target.classList.add("irr-scope-btn--on")}),(k=v.querySelector("#scope-group"))==null||k.addEventListener("click",p=>{o="group",v.querySelectorAll(".irr-scope-btn").forEach(A=>A.classList.remove("irr-scope-btn--on")),p.target.classList.add("irr-scope-btn--on")})),Z({title:i.real?"Modifier l'irrigation réalisée":"Modifier l'irrigation planifiée",body:v,saveLabel:"Enregistrer",onSave:()=>{i.iso=x,i.mm=w,i.real=x<=I,o==="group"&&d&&L.filter(p=>p.label===i.label).forEach(p=>{p.mm=w}),C(),E(t)},onDelete:()=>{const p=L.indexOf(i);p>-1&&L.splice(p,1),C(),E(t)}})}function y(i,e){const t=document.createElement("div");let a=!1,d=!1;function v(){var o,x,w,g,k,p,A;t.innerHTML=`
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
        ${a?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Confirmer la suppression des occurrences futures ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="stop-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="stop-confirm">Confirmer</button>
          </div>
        </div>`:""}
        ${d?`
        <div class="irr-stop-confirm">
          <div style="font-size:12px;font-weight:600;color:#7A3A00;margin-bottom:8px">Supprimer toutes les irrigations de cette saison ?</div>
          <div style="display:flex;gap:8px">
            <button class="irr-scope-btn" id="delete-cancel">Annuler</button>
            <button class="irr-scope-btn irr-scope-btn--danger" id="delete-confirm">Supprimer tout</button>
          </div>
        </div>`:""}`,(o=t.querySelector("#strat-modify"))==null||o.addEventListener("click",()=>{var D;(D=document.querySelector(".irr-sheet-overlay"))==null||D.remove();const j=m(i,r,n);U(n,()=>E(e),j,(j==null?void 0:j.label)??i)}),(x=t.querySelector("#strat-stop"))==null||x.addEventListener("click",()=>{a=!0,d=!1,v()}),(w=t.querySelector("#strat-delete"))==null||w.addEventListener("click",()=>{d=!0,a=!1,v()}),(g=t.querySelector("#stop-cancel"))==null||g.addEventListener("click",()=>{a=!1,v()}),(k=t.querySelector("#stop-confirm"))==null||k.addEventListener("click",()=>{var j;L.splice(0,L.length,...L.filter(D=>!(D.label===i&&!D.real))),C(),(j=document.querySelector(".irr-sheet-overlay"))==null||j.remove(),E(e)}),(p=t.querySelector("#delete-cancel"))==null||p.addEventListener("click",()=>{d=!1,v()}),(A=t.querySelector("#delete-confirm"))==null||A.addEventListener("click",()=>{var j;L.splice(0,L.length,...L.filter(D=>D.label!==i)),C(),(j=document.querySelector(".irr-sheet-overlay"))==null||j.remove(),E(e)})}v(),Z({title:"Gérer la saison",body:t,saveLabel:"Fermer",onSave:()=>{}})}function S(i){if(!i.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const e=[...i].filter(d=>!d.real).sort((d,v)=>d.iso<v.iso?-1:1),t=[...i].filter(d=>d.real).sort((d,v)=>d.iso>v.iso?-1:1);function a(d){const v=d.real?"#FF8500":"#FFB705",o=L.indexOf(d);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${H(d.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${v};white-space:nowrap;margin-right:4px">${d.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${o}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${o}" title="Supprimer">🗑</button>
      </div>`}return`
      ${t.length?`
        <details class="irr-section-details" data-section="effectuees">
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${t.length}</span></summary>
          ${t.map(a).join("")}
        </details>`:""}
      ${e.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${e.length}</span></summary>
          ${e.map(a).join("")}
        </details>`:""}
    `}function E(i){var o,x,w;const e=i.querySelector(".irr-cal-body");if(!c){e.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const t={};if(e.querySelectorAll("details[data-section]").forEach(g=>{t[g.dataset.section]=g.open}),c==="all"){const g={};for(const p of L)g[p.label]||(g[p.label]=[]),g[p.label].push(p);const k=Object.keys(g);if(!k.length){e.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}e.innerHTML=k.map(p=>{const A=g[p],j=A.some(D=>D.fromStrategy);return`<div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#1c1c1e;margin-bottom:6px">${p}</div>
          ${s(A)}
          ${l(A)}
          ${j?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-label="${p}">Modifier la saison ↗</button>
          </div>`:""}
        </div>`}).join(""),e.querySelectorAll("[data-strat-label]").forEach(p=>{p.addEventListener("click",()=>y(p.dataset.stratLabel,i))});return}const a=b(),v=a.some(g=>g.fromStrategy)?`<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
         </div>`;e.innerHTML=`
      ${s(a)}
      ${l(a)}
      ${v}
      ${S(a)}
    `,e.querySelectorAll("details[data-section]").forEach(g=>{const k=g.dataset.section;k in t&&(g.open=t[k])}),e.querySelectorAll(".irr-edit-btn").forEach(g=>{g.addEventListener("click",k=>{k.stopPropagation();const p=L[+g.dataset.iidx];p&&$(p,a,i)})}),e.querySelectorAll(".irr-del-btn").forEach(g=>{g.addEventListener("click",k=>{k.stopPropagation();const p=+g.dataset.iidx;p>=0&&(L.splice(p,1),C(),E(i))})}),(o=e.querySelector("#open-strat-edit"))==null||o.addEventListener("click",()=>{y(c,i)}),(x=e.querySelector("#cal-add-irrig"))==null||x.addEventListener("click",()=>{ci(n,()=>E(i),m(c,r,n))}),(w=e.querySelector("#cal-add-strat"))==null||w.addEventListener("click",()=>{U(n,()=>E(i),m(c,r,n))})}const F=n.filter(i=>!r.some(e=>e.ids.includes(i.id))),q=r.map(i=>{const e=i.ids.map(t=>n.find(a=>a.id===t)).filter(Boolean).map(t=>`<option value="${t.id}"${String(t.id)===String(c)?" selected":""}>- ${t.name}</option>`).join("");return`<optgroup label="${i.label} (${i.ids.length} parcelles)">
      <option value="${i.label}"${i.label===c?" selected":""}>GROUPE : ${i.label}</option>
      ${e}
    </optgroup>`}).join(""),f=F.length?`<optgroup label="Autres parcelles">${F.map(i=>`<option value="${i.id}"${String(i.id)===String(c)?" selected":""}>${i.name}</option>`).join("")}</optgroup>`:"",u=R(P(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="cal-back"><i class="bi bi-chevron-left"></i> Retour</button>
        <span class="irr-header-title">Irrigations</span>
        <div style="width:60px"></div>
      </div>
      <div style="padding:4px 14px 10px">
        <div style="font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Parcelle ou groupe</div>
        <select class="irr-cal-select" id="cal-filter-sel">
          <option value="" disabled ${c?"":"selected"}>— Sélectionner —</option>
          <option value="all"${c==="all"?" selected":""}>Toutes les parcelles</option>
          ${q}
          ${f}
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `));u.querySelector("#cal-back").addEventListener("click",O),u.querySelector("#cal-filter-sel").addEventListener("change",i=>{c=i.target.value,E(u)}),E(u)}export{vi as openCalendar,ci as openIrrigationSaisie,U as openIrrigationStrategie};
