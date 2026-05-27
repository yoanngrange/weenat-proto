import{p as P,a as z,c as J}from"./mobile-CNBMRn0S.js";import{b as O,I as L,s as C}from"./irrigations-MeXOpmvP.js";import{e as ce}from"./store-DRCbE3kB.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./plots-urzhAbT6.js";import"./sensors-DDe0aa9W.js";import"./orgs-Cx4wNzLL.js";import"./network-YzWdS0n_.js";import"./members-C_ssoUx1.js";function R(n){return n.style.display="flex",n.style.flexDirection="column",n.style.overflowY="hidden",n}const I=new Date().toISOString().split("T")[0];function H(n){const h=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[s,l,p]=n.split("-");return`${parseInt(p)} ${h[parseInt(l)-1]} ${s}`}function K(n,h,s,l){if(s){const t=s.ids.map(a=>{var y;return(y=h.find($=>$.id===a))==null?void 0:y.name}).filter(Boolean);return[{title:`Groupe "${s.label}"`,names:t}]}const p=new Set(n),b=[];for(const t of l)if(t.ids.length>=2&&t.ids.every(a=>n.has(a))){const a=t.ids.map(y=>{var $;return($=h.find(x=>x.id===y))==null?void 0:$.name}).filter(Boolean);b.push({title:`Groupe "${t.label}"`,names:a}),t.ids.forEach(y=>p.delete(y))}if(p.size>0){const t=[...p].map(a=>{var y;return(y=h.find($=>$.id===a))==null?void 0:y.name}).filter(Boolean);b.push({title:b.length>0?"Autres parcelles":null,names:t})}return b}function Z(n){const h=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,s,l]=n.split("-");return`${parseInt(l)} ${h[parseInt(s)-1]}`}function Y(n){return!n||n===I?"":n<I?'<span class="irr-pill irr-pill--past">Passée · Réalisée</span>':'<span class="irr-pill irr-pill--future">Future · Planifiée</span>'}function V(n,h){return n?'<div class="irr-chk irr-chk--on"></div>':h?'<div class="irr-chk irr-chk--partial">−</div>':'<div class="irr-chk"></div>'}function ee(n,h,s){const l=[],p=new Set(n);for(const b of h){const t=b.ids.filter(a=>n.has(a));t.length&&(t.length===b.ids.length?(l.push(b.label),b.ids.forEach(a=>p.delete(a))):t.forEach(a=>{const y=s.find($=>$.id===a);y&&(l.push(y.name),p.delete(a))}))}for(const b of p){const t=s.find(a=>a.id===b);t&&l.push(t.name)}return l}function ie(n,h,s){const l=h.filter(t=>!n.some(a=>a.ids.includes(t.id))),p=n.map(t=>{const a=t.ids.every(x=>s.has(x)),y=t.ids.some(x=>s.has(x)),$=t.ids.map(x=>h.find(E=>E.id===x)).filter(Boolean).map(x=>{const E=s.has(x.id);return`<div class="irr-plot-row irr-plot-row--child${E?" irr-plot-row--sel":""}" data-pid="${x.id}">
          <div class="irr-plot-name">${x.name}</div>
          ${V(E,!1)}
        </div>`}).join("");return`<div class="irr-group-card${a?" irr-group-card--sel":""}" data-gids="${t.ids.join(",")}">
      <div class="irr-group-info">
        <div class="irr-group-name">${t.label}</div>
        <div class="irr-group-meta">${t.ids.length} parcelle${t.ids.length>1?"s":""}</div>
      </div>
      ${V(a,y)}
    </div>${$}`}).join(""),b=l.map(t=>{const a=s.has(t.id);return`<div class="irr-plot-row${a?" irr-plot-row--sel":""}" data-pid="${t.id}">
      <div><div class="irr-plot-name">${t.name}</div>${ue(t)}</div>
      ${V(a,!1)}
    </div>`}).join("");return p+(l.length?`${n.length?'<div class="irr-section-lbl" style="margin-top:10px">Autres parcelles</div>':""}${b}`:"")}function Q({title:n,body:h,onSave:s,onDelete:l,saveLabel:p="Enregistrer"}){var y,$;const b=document.getElementById("phone-screen");(y=document.querySelector(".irr-sheet-overlay"))==null||y.remove();const t=document.createElement("div");t.className="irr-sheet-overlay",t.innerHTML=`
    <div class="irr-sheet">
      <div class="irr-sheet-handle"></div>
      <div class="irr-sheet-title">${n}</div>
      <div class="irr-sheet-body"></div>
      <div class="irr-sheet-actions">
        ${l?'<button class="irr-sheet-del" id="iss-del">Supprimer</button>':""}
        <button class="irr-sheet-save" id="iss-save">${p}</button>
      </div>
    </div>`,t.querySelector(".irr-sheet-body").appendChild(typeof h=="string"?Object.assign(document.createElement("div"),{innerHTML:h}):h),b.appendChild(t),requestAnimationFrame(()=>t.classList.add("irr-sheet-overlay--open"));const a=()=>{t.classList.remove("irr-sheet-overlay--open"),setTimeout(()=>t.remove(),280)};return t.addEventListener("click",x=>{x.target===t&&a()}),($=t.querySelector("#iss-del"))==null||$.addEventListener("click",()=>{l==null||l(),a()}),t.querySelector("#iss-save").addEventListener("click",()=>{s==null||s(),a()}),t}const de=["Pivot","Enrouleur","Rampe","Goutte à goutte","Goutte à goutte enterré","Micro aspersion","Couverture intégrale","Gravitaire","Aspersion"];function te(n,h,s){const l=h.filter(a=>n.has(a.id)&&(!a.irrigation||a.irrigation==="Non irrigué"));if(!l.length){s();return}const p=document.createElement("div");p.innerHTML=`
    <p style="font-size:13px;color:#636366;margin:0 0 12px">
      ${l.length===1?`<strong>${l[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${l.length} parcelles n'ont pas de type d'irrigation renseigné.`}
    </p>
    <select id="irr-type-ask" style="width:100%;padding:12px;border-radius:10px;border:1px solid #E0DED8;font-size:15px;font-family:inherit;background:#fff;color:#1c1c1e">
      <option value="">— Choisir un type —</option>
      ${de.map(a=>`<option value="${a}">${a}</option>`).join("")}
    </select>`;const t=Q({title:"Type d'irrigation",body:p,saveLabel:"Confirmer",onDelete:()=>s(),onSave:()=>{const a=p.querySelector("#irr-type-ask").value;a&&l.forEach(y=>{y.irrigation=a,ce(y.id,{irrigation:a})}),s()}}).querySelector("#iss-del");t&&(t.textContent="Passer",t.style.cssText+=";background:#F5F4F0;border-color:#E0DED8;color:#636366")}function ue(n){const h=n.crop,s=n.irrigation||null,l=n.substrate?"substrat : "+n.substrate:n.texture||null,p=[h,s||"<em>type irrigation non renseigné</em>",l].filter(Boolean);return!h&&!s?'<span class="irr-plot-info irr-plot-info--miss">Non renseigné</span>':`<span class="irr-plot-info">${p.join(" · ")}</span>`}function ve(n,h,s=null){let l=new Set((s==null?void 0:s.ids)??[]),p=I,b=10;const t=O(n);function a(){return ie(t,n,l)}function y(m){m.querySelector("#irr-date-hint").innerHTML=Y(p)}function $(m){const u=l.size,e=m.querySelector(".irr-summary"),i=m.querySelector(".irr-save-btn");!e||!i||(s?(e.textContent="",i.disabled=!1,i.textContent="Enregistrer"):(e.textContent=u===0?"":`${u} parcelle${u>1?"s":""} · ${b} mm`,i.disabled=u===0,i.textContent="Enregistrer"))}function x(m){m.querySelectorAll(".irr-group-card").forEach(u=>{u.addEventListener("click",()=>{const e=u.dataset.gids.split(",").map(Number),i=e.every(r=>l.has(r));e.forEach(r=>i?l.delete(r):l.add(r)),m.querySelector("#irr-sel-list").innerHTML=a(),x(m),$(m)})}),m.querySelectorAll(".irr-plot-row").forEach(u=>{u.addEventListener("click",()=>{const e=+u.dataset.pid;l.has(e)?l.delete(e):l.add(e),m.querySelector("#irr-sel-list").innerHTML=a(),x(m),$(m)})})}const E=s?n.filter(m=>s.ids.includes(m.id)):[],A=s?`<div class="irr-presel-banner">
         <i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
         <span>${s.label} <span style="color:#9E9D98;font-weight:400">· ${s.ids.length} parcelle${s.ids.length>1?"s":""}</span></span>
       </div>
       ${E.map(m=>`<div style="font-size:13px;color:#636366;padding:2px 4px">· ${m.name}</div>`).join("")}`:`<div id="irr-sel-list">${a()}</div>`,q=R(P(`
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
            <input type="date" class="irr-date-input" id="irr-date" value="${p}" />
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
      ${A}
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" ${s?"":"disabled"}>Enregistrer</button>
    </div>
  `));q.dataset.dirty="true",s||x(q),$(q),q.querySelector("#irr-back").addEventListener("click",z),q.querySelector("#irr-date").addEventListener("change",m=>{p=m.target.value,y(q),$(q)}),q.querySelector("#irr-qty").addEventListener("input",m=>{b=parseInt(m.target.value)||1,$(q)}),q.querySelector(".irr-save-btn").addEventListener("click",()=>{const m=s?new Set(s.ids):l;te(m,n,()=>{const u=p>I,e=s?[s.label]:ee(m,t,n);e.forEach(d=>{L.push({iso:p,mm:b,real:!u,label:d,fromStrategy:!1})}),C();const i=e.length===1?e[0]:"all",r=K(m,n,s,t),o=r.reduce((d,v)=>d+v.names.length,0);J(),re({title:o>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:H(p)},{label:"Quantité",value:`${b} mm`}],parcelSections:r,isFut:u,plots:n,calFilter:i,addedCount:e.length,stackDepth:1})})})}function U(n,h,s=null,l=null){let p=new Set((s==null?void 0:s.ids)??[]),b=I,t=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],a=10,y=7;const $=O(n);function x(){if(!b||!t||y<=0)return[];const u=[],e=new Date(t);let i=new Date(b);for(;i<=e&&u.length<100;)u.push(new Date(i)),i.setDate(i.getDate()+y);return u}function E(){const u=x();p.size;const e=u.length>0?`<span class="irr-preview-ok">↗ ${u.length} irrigations · ${u.length*a} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>';return`
      <div class="irr-section-lbl" style="margin-top:0">Récurrence</div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Début</div>
          <input type="date" class="irr-date-input" id="strat-debut" value="${b}" />
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fin</div>
          <input type="date" class="irr-date-input" id="strat-fin" value="${t}" />
        </div>
      </div>
      <div class="irr-fields-row">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="strat-qty" value="${a}" min="1" />
          <div class="irr-field-hint">par parcelle</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Fréquence <span class="irr-unit">(jours)</span></div>
          <input type="number" class="irr-qty-input" id="strat-freq" value="${y}" min="1" max="30" />
        </div>
      </div>
      <div class="irr-preview-box" id="strat-preview">${e}</div>
      ${s?`<div class="irr-presel-banner"><i class="bi bi-geo-alt-fill" style="color:#185FA5;flex-shrink:0"></i>
             <span>${s.label} <span style="color:#9E9D98;font-weight:400">· ${s.ids.length} parcelle${s.ids.length>1?"s":""}</span></span>
           </div>`:ie($,n,p)}
      <div class="irr-bottom-spacer"></div>
    `}function A(u){const e=p.size,i=x(),r=u.querySelector(".irr-save-btn"),o=u.querySelector(".irr-summary");!r||!o||(r.disabled=e===0||i.length===0,o.textContent=e===0?"":`${e} parcelle${e>1?"s":""} · ${i.length} occurrences`,r.textContent="Voir l'aperçu →")}function q(u){var r,o,d,v;const e=u.querySelector(".irr-scroll-body");e.querySelectorAll(".irr-group-card").forEach(c=>{c.addEventListener("click",()=>{const S=c.dataset.gids.split(",").map(Number),w=S.every(g=>p.has(g));S.forEach(g=>w?p.delete(g):p.add(g)),e.innerHTML=E(),q(u),A(u)})}),e.querySelectorAll(".irr-plot-row").forEach(c=>{c.addEventListener("click",()=>{const S=+c.dataset.pid;p.has(S)?p.delete(S):p.add(S),e.innerHTML=E(),q(u),A(u)})});const i=()=>{const c=x(),S=e.querySelector("#strat-preview");S&&(S.innerHTML=c.length>0?`<span class="irr-preview-ok">↗ ${c.length} irrigations · ${c.length*a} mm au total</span>`:'<span style="color:#8e8e93">Ajustez les dates et la fréquence</span>'),A(u)};(r=e.querySelector("#strat-debut"))==null||r.addEventListener("change",c=>{b=c.target.value,i()}),(o=e.querySelector("#strat-fin"))==null||o.addEventListener("change",c=>{t=c.target.value,i()}),(d=e.querySelector("#strat-qty"))==null||d.addEventListener("input",c=>{a=parseInt(c.target.value)||1,i()}),(v=e.querySelector("#strat-freq"))==null||v.addEventListener("input",c=>{y=parseInt(c.target.value)||1,i()})}const m=R(P(`
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
  `));m.dataset.dirty="true",q(m),A(m),m.querySelector("#strat-back").addEventListener("click",z),m.querySelector(".irr-save-btn").addEventListener("click",()=>{const u=x();pe(m,n,p,b,t,a,y,u,h,s,l)})}function pe(n,h,s,l,p,b,t,a,y,$,x=null){var v;const E=s.size,A=5;a.length-A;function q(c){const w=c.toISOString().slice(0,10)>=I?"#FFB705":"#FF8500",g=c.toISOString().slice(0,10);return`<div class="irr-occ-row">
      <span style="flex:1;font-size:13px;color:#1c1c1e">${H(g)}</span>
      <span style="font-size:13px;font-weight:700;color:${w}">${b} mm</span>
    </div>`}const m=a.filter(c=>c.toISOString().slice(0,10)<I),u=a.filter(c=>c.toISOString().slice(0,10)>=I),e=u.slice(0,A),i=u.slice(A),r=m.length?`
    <div class="irr-section-lbl" style="margin-top:0;margin-bottom:4px">Irrigations effectuées</div>
    ${m.map(q).join("")}`:"",o=u.length?`
    <div class="irr-section-lbl" style="margin-top:${m.length?"12px":"0"};margin-bottom:4px">Irrigations planifiées</div>
    ${e.map(q).join("")}
    ${i.length?`
      <div id="apercu-rest" style="display:none">${i.map(q).join("")}</div>
      <button class="irr-more-label" id="apercu-show-more">... et ${i.length} irrigation${i.length>1?"s":""} de plus</button>
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
          <div class="irr-apercu-big">${a.length} irrigations</div>
          <div class="irr-apercu-sub">${Z(l)} → ${Z(p)} · tous les ${t}j</div>
        </div>
        <div style="text-align:right">
          <div class="irr-apercu-big">${a.length*b} mm</div>
          <div class="irr-apercu-sub">${E} parcelle${E>1?"s":""} · ${b} mm/irrig.</div>
        </div>
      </div>
      <div class="irr-apercu-list">
        ${r}
        ${o}
        ${!m.length&&!u.length?'<div style="font-size:13px;color:#8e8e93;text-align:center;padding:8px 0">Aucune irrigation</div>':""}
      </div>
      <div class="irr-bottom-spacer"></div>
    </div>
    <div class="irr-bottom-bar">
      <div class="irr-summary"></div>
      <button class="irr-save-btn" id="apercu-confirm">Confirmer la saison</button>
    </div>
  `));d.dataset.dirty="true",d.querySelector("#apercu-back").addEventListener("click",z),(v=d.querySelector("#apercu-show-more"))==null||v.addEventListener("click",c=>{d.querySelector("#apercu-rest").style.display="",c.target.remove()}),d.querySelector("#apercu-confirm").addEventListener("click",()=>{const c=O(h),S=$?new Set($.ids):s;te(S,h,()=>{const w=$?[$.label]:ee(S,c,h),g=w.length===1?w[0]:"all",k=K(S,h,$,c);x&&L.splice(0,L.length,...L.filter(f=>!(w.includes(f.label)&&f.fromStrategy&&!f.real))),a.forEach(f=>{const F=f.toISOString().slice(0,10);w.forEach(j=>{L.push({iso:F,mm:b,real:F<=I,label:j,fromStrategy:!0})})}),C(),J(),re({title:"Saison enregistrée",params:[{label:"Début",value:H(l)},{label:"Fin",value:H(p)},{label:"Quantité",value:`${b} mm/irrig.`},{label:"Fréquence",value:`tous les ${t} jours`},{label:"Irrigations générées",value:`${a.length*w.length}`}],parcelSections:k,isFut:!0,plots:h,calFilter:g,addedCount:a.length*w.length,stackDepth:2})})})}function re({title:n,params:h,parcelSections:s=[],isFut:l,plots:p,calFilter:b,addedCount:t=0,stackDepth:a=3}){const y=(h||[]).map(e=>`
    <div class="irr-confirm-param">
      <span class="irr-confirm-param-lbl">${e.label}</span>
      <span class="irr-confirm-param-val">${e.value}</span>
    </div>`).join(""),$=3,x=s.flatMap(e=>e.names.map(i=>({title:e.title,name:i}))),E=x.slice(0,$),A=x.slice($);function q(e){const i=[];let r=null;for(const o of e)(!r||r.title!==o.title)&&(r={title:o.title,names:[]},i.push(r)),r.names.push(o.name);return i.map(o=>`
      ${o.title?`<div class="irr-confirm-sec-hd">${o.title}</div>`:""}
      ${o.names.map(d=>`<div class="irr-confirm-parcel">· ${d}</div>`).join("")}
    `).join("")}const m=x.length===0?"":`
    <div style="width:100%;max-width:280px;margin:0 auto 4px;font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;text-align:left">Parcelles</div>
    <div class="irr-confirm-parcels">
      ${q(E)}
      ${A.length?`
        <details class="irr-confirm-more">
          <summary>${A.length} parcelle${A.length>1?"s":""} de plus</summary>
          ${q(A)}
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
      <div class="irr-confirm-params">${y}</div>
      ${m}
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
  `));u.querySelector("#conf-edit").addEventListener("click",()=>{t>0&&L.splice(L.length-t,t),z()}),u.querySelector("#conf-back").addEventListener("click",()=>{for(let e=0;e<=a;e++)z()}),u.querySelector("#conf-calendar").addEventListener("click",()=>{me(p,b)})}const fe=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function me(n,h){const s=O(n);let l=h||"";function p(e,i,r){if(!e)return null;const o=i.find(v=>v.label===e);if(o)return{ids:o.ids,label:o.label};const d=r.find(v=>String(v.id)===String(e))??r.find(v=>v.name===e);return d?{ids:[d.id],label:d.name}:null}function b(){if(!l||l==="all")return L;const e=s.find(r=>r.label===l);if(e)return L.filter(r=>r.label===e.label);const i=n.find(r=>String(r.id)===String(l));if(i){const r=new Set(s.filter(o=>o.ids.includes(i.id)).map(o=>o.label));return L.filter(o=>o.label===i.name||r.has(o.label))}return L}function t(e){const i=e.filter(v=>v.real),r=e.filter(v=>!v.real),o=i.reduce((v,c)=>v+c.mm,0),d=r.reduce((v,c)=>v+c.mm,0);return`<div class="irr-cumuls-bar">
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Effectuées</div>
        <div class="irr-cumul-val" style="color:#FF8500">${o} mm</div>
        <div class="irr-cumul-count">${i.length} irrigation${i.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Planifiées</div>
        <div class="irr-cumul-val" style="color:#FFB705">${d} mm</div>
        <div class="irr-cumul-count">${r.length} irrigation${r.length!==1?"s":""}</div>
      </div>
      <div class="irr-cumul-sep"></div>
      <div class="irr-cumul-block">
        <div class="irr-cumul-lbl">Total saison</div>
        <div class="irr-cumul-val">${o+d} mm</div>
        <div class="irr-cumul-count">${i.length+r.length} irrigations</div>
      </div>
    </div>`}function a(e){if(e.length<2)return"";const i=[...e].sort((M,T)=>M.iso<T.iso?-1:1),r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],o=new Date(i[0].iso),d=new Date(i[i.length-1].iso),v=Math.max(d-o,1),c=300,S=26,w=5,g=5,k=S-g-4,f=k-g-3,F=S+w+13,j=F+2,D=M=>Math.round((M-o)/v*c),W=M=>{const[,T,B]=M.split("-");return`${parseInt(B)}/${parseInt(T)}`},N=[],_=new Date(o.getFullYear(),o.getMonth()+1,1);for(;_<=d;)N.push(new Date(_)),_.setMonth(_.getMonth()+1);const se=N.map(M=>`<line x1="${D(M)}" y1="${S-6}" x2="${D(M)}" y2="${S+w+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),X=[o,...N,d],ne=X.slice(0,-1).map((M,T)=>{const B=D(M),G=D(X[T+1]);return G-B<16?"":`<text x="${Math.round((B+G)/2)}" y="${f}" font-size="8" fill="#B0AEA8" text-anchor="middle">${r[M.getMonth()]}</text>`}).join(""),ae=i.map(M=>{const T=M.real?"#FF8500":"#FFB705",B=D(new Date(M.iso)),[,G,le]=M.iso.split("-"),oe=`${parseInt(le)} ${fe[parseInt(G)-1]} · ${M.mm} mm`;return`<circle cx="${B}" cy="${k}" r="${g}" fill="${T}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
      <circle cx="${B}" cy="${k}" r="${g+6}" fill="transparent" pointer-events="all"><title>${oe}</title></circle>`}).join("");return`<div style="padding:4px 0 8px">
      <svg width="${c}" height="${j}" viewBox="0 0 ${c} ${j}" style="width:100%;display:block">
        ${ne}
        <rect x="0" y="${S}" width="${c}" height="${w}" rx="${w/2}" fill="#E0DED8"/>
        ${se}
        ${ae}
        <text x="1" y="${F}" font-size="9" fill="#B0AEA8">${W(i[0].iso)}</text>
        <text x="${c-1}" y="${F}" font-size="9" fill="#B0AEA8" text-anchor="end">${W(i[i.length-1].iso)}</text>
      </svg>
    </div>`}function y(e,i,r){var g,k;const d=O(n).find(f=>f.label===e.label),v=document.createElement("div");let c="single",S=e.iso,w=e.mm;v.innerHTML=`
      <div class="irr-fields-row" style="margin-bottom:10px">
        <div class="irr-field-card">
          <div class="irr-field-lbl">Date</div>
          <input type="date" class="irr-date-input" id="edit-date" value="${e.iso}" />
          <div id="edit-date-hint">${Y(e.iso)}</div>
        </div>
        <div class="irr-field-card">
          <div class="irr-field-lbl">Quantité <span class="irr-unit">(mm)</span></div>
          <input type="number" class="irr-qty-input" id="edit-qty" value="${e.mm}" min="1" />
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
      </div>`:""}`,v.querySelector("#edit-date").addEventListener("change",f=>{S=f.target.value,v.querySelector("#edit-date-hint").innerHTML=Y(S)}),v.querySelector("#edit-qty").addEventListener("input",f=>{const F=parseInt(f.target.value);F>0&&(w=F)}),d&&((g=v.querySelector("#scope-single"))==null||g.addEventListener("click",f=>{c="single",v.querySelectorAll(".irr-scope-btn").forEach(F=>F.classList.remove("irr-scope-btn--on")),f.target.classList.add("irr-scope-btn--on")}),(k=v.querySelector("#scope-group"))==null||k.addEventListener("click",f=>{c="group",v.querySelectorAll(".irr-scope-btn").forEach(F=>F.classList.remove("irr-scope-btn--on")),f.target.classList.add("irr-scope-btn--on")})),Q({title:e.real?"Modifier l'irrigation réalisée":"Modifier l'irrigation planifiée",body:v,saveLabel:"Enregistrer",onSave:()=>{e.iso=S,e.mm=w,e.real=S<=I,c==="group"&&d&&L.filter(f=>f.label===e.label).forEach(f=>{f.mm=w}),C(),E(r)},onDelete:()=>{const f=L.indexOf(e);f>-1&&L.splice(f,1),C(),E(r)}})}function $(e,i){const r=document.createElement("div");let o=!1,d=!1;function v(){var c,S,w,g,k,f,F;r.innerHTML=`
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
        ${o?`
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
        </div>`:""}`,(c=r.querySelector("#strat-modify"))==null||c.addEventListener("click",()=>{var D;(D=document.querySelector(".irr-sheet-overlay"))==null||D.remove();const j=p(e,s,n);U(n,()=>E(i),j,(j==null?void 0:j.label)??e)}),(S=r.querySelector("#strat-stop"))==null||S.addEventListener("click",()=>{o=!0,d=!1,v()}),(w=r.querySelector("#strat-delete"))==null||w.addEventListener("click",()=>{d=!0,o=!1,v()}),(g=r.querySelector("#stop-cancel"))==null||g.addEventListener("click",()=>{o=!1,v()}),(k=r.querySelector("#stop-confirm"))==null||k.addEventListener("click",()=>{var j;L.splice(0,L.length,...L.filter(D=>!(D.label===e&&!D.real))),C(),(j=document.querySelector(".irr-sheet-overlay"))==null||j.remove(),E(i)}),(f=r.querySelector("#delete-cancel"))==null||f.addEventListener("click",()=>{d=!1,v()}),(F=r.querySelector("#delete-confirm"))==null||F.addEventListener("click",()=>{var j;L.splice(0,L.length,...L.filter(D=>D.label!==e)),C(),(j=document.querySelector(".irr-sheet-overlay"))==null||j.remove(),E(i)})}v(),Q({title:"Gérer la saison",body:r,saveLabel:"Fermer",onSave:()=>{}})}function x(e){if(!e.length)return'<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';const i=[...e].filter(d=>!d.real).sort((d,v)=>d.iso<v.iso?-1:1),r=[...e].filter(d=>d.real).sort((d,v)=>d.iso>v.iso?-1:1);function o(d){const v=d.real?"#FF8500":"#FFB705",c=L.indexOf(d);return`<div class="irr-list-item">
        <span style="flex:1;font-size:13px;color:#1c1c1e">${H(d.iso)}</span>
        <span style="font-size:13px;font-weight:700;color:${v};white-space:nowrap;margin-right:4px">${d.mm} mm</span>
        <button class="irr-edit-btn" data-iidx="${c}" title="Modifier">✎</button>
        <button class="irr-del-btn"  data-iidx="${c}" title="Supprimer">🗑</button>
      </div>`}return`
      ${r.length?`
        <details class="irr-section-details" data-section="effectuees">
          <summary class="irr-section-summary">Effectuées <span class="irr-section-count">${r.length}</span></summary>
          ${r.map(o).join("")}
        </details>`:""}
      ${i.length?`
        <details class="irr-section-details" data-section="planifiees" open>
          <summary class="irr-section-summary">Planifiées <span class="irr-section-count">${i.length}</span></summary>
          ${i.map(o).join("")}
        </details>`:""}
    `}function E(e){var c,S,w;const i=e.querySelector(".irr-cal-body");if(!l){i.innerHTML='<div class="irr-cal-empty"><i class="bi bi-calendar3" style="font-size:32px;opacity:.2"></i><div>Sélectionnez une parcelle ou un groupe pour visualiser les irrigations</div></div>';return}const r={};if(i.querySelectorAll("details[data-section]").forEach(g=>{r[g.dataset.section]=g.open}),l==="all"){const g={};for(const f of L)g[f.label]||(g[f.label]=[]),g[f.label].push(f);const k=Object.keys(g);if(!k.length){i.innerHTML='<div style="text-align:center;padding:32px;font-size:13px;color:#9E9D98">Aucune irrigation enregistrée</div>';return}i.innerHTML=k.map(f=>{const F=g[f],j=F.some(D=>D.fromStrategy);return`<div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#1c1c1e;margin-bottom:6px">${f}</div>
          ${t(F)}
          ${a(F)}
          ${j?`<div style="display:flex;justify-content:flex-end;margin-top:4px">
            <button class="irr-cal-strat-btn" data-strat-label="${f}">Modifier la saison ↗</button>
          </div>`:""}
        </div>`}).join(""),i.querySelectorAll("[data-strat-label]").forEach(f=>{f.addEventListener("click",()=>$(f.dataset.stratLabel,e))});return}const o=b(),v=o.some(g=>g.fromStrategy)?`<div style="display:flex;justify-content:flex-end;margin-bottom:4px">
           <button class="irr-cal-strat-btn" id="open-strat-edit">Modifier la saison ↗</button>
         </div>`:`<div class="irr-cal-add-bar">
           <button class="irr-cal-add-btn" id="cal-add-irrig"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="irr-cal-add-btn irr-cal-add-btn--sec" id="cal-add-strat"><i class="bi bi-arrow-repeat"></i> Ajouter une saison d'irrigation</button>
         </div>`;i.innerHTML=`
      ${t(o)}
      ${a(o)}
      ${v}
      ${x(o)}
    `,i.querySelectorAll("details[data-section]").forEach(g=>{const k=g.dataset.section;k in r&&(g.open=r[k])}),i.querySelectorAll(".irr-edit-btn").forEach(g=>{g.addEventListener("click",k=>{k.stopPropagation();const f=L[+g.dataset.iidx];f&&y(f,o,e)})}),i.querySelectorAll(".irr-del-btn").forEach(g=>{g.addEventListener("click",k=>{k.stopPropagation();const f=+g.dataset.iidx;f>=0&&(L.splice(f,1),C(),E(e))})}),(c=i.querySelector("#open-strat-edit"))==null||c.addEventListener("click",()=>{$(l,e)}),(S=i.querySelector("#cal-add-irrig"))==null||S.addEventListener("click",()=>{ve(n,()=>E(e),p(l,s,n))}),(w=i.querySelector("#cal-add-strat"))==null||w.addEventListener("click",()=>{U(n,()=>E(e),p(l,s,n))})}const A=n.filter(e=>!s.some(i=>i.ids.includes(e.id))),q=s.map(e=>{const i=e.ids.map(r=>n.find(o=>o.id===r)).filter(Boolean).map(r=>`<option value="${r.id}"${String(r.id)===String(l)?" selected":""}>- ${r.name}</option>`).join("");return`<optgroup label="${e.label} (${e.ids.length} parcelles)">
      <option value="${e.label}"${e.label===l?" selected":""}>GROUPE : ${e.label}</option>
      ${i}
    </optgroup>`}).join(""),m=A.length?`<optgroup label="Autres parcelles">${A.map(e=>`<option value="${e.id}"${String(e.id)===String(l)?" selected":""}>${e.name}</option>`).join("")}</optgroup>`:"",u=R(P(`
    <div class="irr-detail-header">
      <div class="irr-header-row">
        <button class="irr-back" id="cal-back"><i class="bi bi-chevron-left"></i> Retour</button>
        <span class="irr-header-title">Irrigations</span>
        <div style="width:60px"></div>
      </div>
      <div style="padding:4px 14px 10px">
        <div style="font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">Parcelle ou groupe</div>
        <select class="irr-cal-select" id="cal-filter-sel">
          <option value="" disabled ${l?"":"selected"}>— Sélectionner —</option>
          <option value="all"${l==="all"?" selected":""}>Toutes les parcelles</option>
          ${q}
          ${m}
        </select>
      </div>
    </div>
    <div class="irr-scroll-body irr-cal-body"></div>
  `));u.querySelector("#cal-back").addEventListener("click",z),u.querySelector("#cal-filter-sel").addEventListener("change",e=>{l=e.target.value,E(u)}),E(u)}export{me as openCalendar,ve as openIrrigationSaisie,U as openIrrigationStrategie};
