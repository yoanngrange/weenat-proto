import{I as f,s as D,g as ti}from"./irrigations-C22Dtsoo.js";import{b as ei,d as si}from"./store-c0FlIf2T.js";import{p as U}from"./plots-DhtWL7s_.js";import{I as ni}from"./constants-CJpDUNiw.js";const T=new Date().toISOString().split("T")[0],li=1;ei(U);const I=U.filter(i=>i.orgId===li);function O(i){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,s,n]=i.split("-");return`${parseInt(n)} ${t[parseInt(s)-1]} ${i.split("-")[0]}`}function Y(i){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,s,n]=i.split("-");return`${parseInt(n)} ${t[parseInt(s)-1]}`}function W(i,t){return i?'<div class="iw-chk iw-chk--on"><i class="bi bi-check"></i></div>':'<div class="iw-chk"></div>'}function ai(i){const t=i.crop,s=i.irrigation||null,n=i.substrate?"Substrat : "+i.substrate:i.texture||null,l=[t,s,n].filter(Boolean);return l.length?`<span class="iw-plot-info">${l.join(" · ")}</span>`:`<span class="iw-plot-info iw-plot-info--miss">type d'irrigation non renseigné</span>`}function B(){return[...I].sort((i,t)=>i.name.localeCompare(t.name,"fr"))}function oi(i){if(i.length<2)return"";const t=[...i].sort((p,m)=>p.iso<m.iso?-1:1),s=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],n=new Date(t[0].iso),l=new Date(t[t.length-1].iso),a=Math.max(l-n,1),c=600,r=26,u=5,w=5,o=r-w-4,b=o-w-3,y=r+u+13,q=y+2,L=w+2,x=p=>Math.round(L+(p-n)/a*(c-2*L)),k=p=>{const[,m,h]=p.split("-");return`${parseInt(h)}/${parseInt(m)}`},E=[],S=new Date(n.getFullYear(),n.getMonth()+1,1);for(;S<=l;)E.push(new Date(S)),S.setMonth(S.getMonth()+1);const g=E.map(p=>`<line x1="${x(p)}" y1="${r-6}" x2="${x(p)}" y2="${r+u+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),e=[n,...E,l],d=e.slice(0,-1).map((p,m)=>{const h=x(p),j=x(e[m+1]);return j-h<16?"":`<text x="${Math.round((h+j)/2)}" y="${b}" font-size="9" fill="#B0AEA8" text-anchor="middle">${s[p.getMonth()]}</text>`}).join(""),v=p=>{const m=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,h,j]=p.split("-");return`${parseInt(j)} ${m[parseInt(h)-1]}`},$=t.map(p=>{const m=p.real?"#FF8500":"#FFB705",h=x(new Date(p.iso)),j=`${v(p.iso)} · ${p.mm} mm`;return`<circle cx="${h}" cy="${o}" r="${w}" fill="${m}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${h}" cy="${o}" r="${w+6}" fill="transparent" pointer-events="all" data-tip="${j}"/>`}).join("");return`<div class="iw-timeline">
    <svg width="${c}" height="${q}" viewBox="0 0 ${c} ${q}" style="width:100%;display:block">
      ${d}
      <rect x="0" y="${r}" width="${c}" height="${u}" rx="${u/2}" fill="#E0DED8"/>
      ${g}
      ${$}
      <text x="1" y="${y}" font-size="10" fill="#B0AEA8">${k(t[0].iso)}</text>
      <text x="${c-1}" y="${y}" font-size="10" fill="#B0AEA8" text-anchor="end">${k(t[t.length-1].iso)}</text>
    </svg>
    <div class="iw-timeline-legend">
      <span class="iw-leg-item"><span class="iw-leg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span class="iw-leg-item"><span class="iw-leg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function ci(i){const t=i.filter(a=>a.real),s=i.filter(a=>!a.real),n=t.reduce((a,c)=>a+c.mm,0),l=s.reduce((a,c)=>a+c.mm,0);return`<div class="iw-cumuls-bar">
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Effectuées</div>
      <div class="iw-cumul-val" style="color:#FF8500">${n} mm</div>
      <div class="iw-cumul-count">${t.length} irrigation${t.length!==1?"s":""}</div>
    </div>
    <div class="iw-cumul-sep"></div>
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Planifiées</div>
      <div class="iw-cumul-val" style="color:#FFB705">${l} mm</div>
      <div class="iw-cumul-count">${s.length} irrigation${s.length!==1?"s":""}</div>
    </div>
    <div class="iw-cumul-sep"></div>
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Total saison</div>
      <div class="iw-cumul-val">${n+l} mm</div>
      <div class="iw-cumul-count">${t.length+s.length} irrigations</div>
    </div>
  </div>`}function X({title:i,params:t,plotNames:s,addedCount:n,filterPlotId:l}){const{ov:a,close:c}=F(),r=t.map(y=>`
    <div class="iw-conf-param">
      <span class="iw-conf-param-lbl">${y.label}</span>
      <span class="iw-conf-param-val">${y.value}</span>
    </div>`).join(""),u=5,w=s.slice(0,u),o=s.slice(u),b=w.map(y=>`<span class="iw-apercu-plot-tag">${y}</span>`).join("")+(o.length?`<span class="iw-apercu-plot-more">+ ${o.length} autre${o.length>1?"s":""}</span>`:"");a.innerHTML=`
    <div class="iw-modal iw-modal--confirm">
      <div class="iw-conf-icon">✓</div>
      <div class="iw-conf-title">${i}</div>
      <div class="iw-conf-params">${r}</div>
      <div class="iw-apercu-plots" style="text-align:center;margin-bottom:20px">${b}</div>
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
    </div>`,a.querySelector("#iw-conf-edit").addEventListener("click",()=>{f.splice(f.length-n,n),D(),c()}),a.querySelector("#iw-conf-voir").addEventListener("click",()=>{c(),Z(l??null)}),a.querySelector("#iw-conf-close").addEventListener("click",c)}function ri(i){const t=document.createElement("div");t.className="iw-toast",t.textContent=i,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("iw-toast--in")),setTimeout(()=>{t.classList.remove("iw-toast--in"),setTimeout(()=>t.remove(),400)},3e3)}function J(i,t){const s=I.filter(c=>i.has(c.id)&&(!c.irrigation||c.irrigation==="Non irrigué"));if(!s.length){t();return}const{ov:n,close:l}=F();n.innerHTML=`
    <div class="iw-modal" style="max-width:400px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Type d'irrigation non renseigné</span>
        <button class="iw-modal-close" id="iw-ask-close">×</button>
      </div>
      <div class="iw-modal-body">
        <p style="font-size:13px;color:#636366;margin:0 0 14px">
          ${s.length===1?`<strong>${s[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${s.length} parcelles n'ont pas de type d'irrigation renseigné.`}
        </p>
        <div class="iw-field">
          <label class="iw-label">Type d'irrigation</label>
          <select class="iw-input" id="iw-ask-type">
            <option value="">— Choisir un type —</option>
            ${ni.map(c=>`<option value="${c}">${c}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-ask-skip">Passer</button>
        <button class="iw-btn iw-btn--pri" id="iw-ask-confirm">Confirmer</button>
      </div>
    </div>`;const a=()=>{const c=n.querySelector("#iw-ask-type").value;c&&s.forEach(r=>{r.irrigation=c,si(r.id,{irrigation:c})}),l(),t()};n.querySelector("#iw-ask-close").addEventListener("click",()=>{l(),t()}),n.querySelector("#iw-ask-skip").addEventListener("click",()=>{l(),t()}),n.querySelector("#iw-ask-confirm").addEventListener("click",a)}function F(){const i=document.createElement("div");i.className="iw-overlay",document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("iw-overlay--in"));const t=()=>{i.classList.remove("iw-overlay--in"),setTimeout(()=>i.remove(),250)};return i.addEventListener("click",s=>{s.target===i&&t()}),{ov:i,close:t}}function _(i){return B().map(t=>{const s=i.has(t.id);return`<div class="iw-plot-row${s?" iw-plot-row--sel":""}" data-pid="${t.id}">
      ${W(s)}
      <div><div class="iw-plot-name">${t.name}</div>${ai(t)}</div>
    </div>`}).join("")}function K(i,t){if(t){const s=I.filter(n=>t.ids.includes(n.id));return`<div class="iw-panel iw-panel--fixed">
      <div class="iw-presel-banner">
        <i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i>
        <span>${t.label} <span class="iw-presel-count">· ${t.ids.length} parcelle${t.ids.length>1?"s":""}</span></span>
      </div>
      ${s.map(n=>`<div class="iw-sel-name">· ${n.name}</div>`).join("")}
    </div>`}return`<div class="iw-panel iw-panel--scroll">
    <div class="iw-sel-toolbar">
      <button class="iw-sel-all-btn" id="iw-sel-all" type="button">Tout sélectionner</button>
    </div>
    <div id="iw-sel-list">${_(i)}</div>
  </div>`}function G(i){const t=i.size;if(t===0)return'<div class="iw-sel-empty">Aucune parcelle sélectionnée</div>';const s=[...i].map(n=>{var l;return(l=I.find(a=>a.id===n))==null?void 0:l.name}).filter(Boolean);return`<div class="iw-sel-summary">
    <div class="iw-sel-title">${t===1?s[0]:`${t} parcelles`}</div>
    ${s.map(n=>`<div class="iw-sel-name">· ${n}</div>`).join("")}
  </div>`}function z(i,t,s){var n;i.querySelectorAll(".iw-plot-row").forEach(l=>{l.addEventListener("click",()=>{const a=+l.dataset.pid;t.has(a)?t.delete(a):t.add(a);const c=i.querySelector("#iw-sel-list");c&&(c.innerHTML=_(t)),z(i,t,s),s()})}),(n=i.querySelector("#iw-sel-all"))==null||n.addEventListener("click",()=>{const l=B(),a=l.some(r=>!t.has(r.id));l.forEach(r=>a?t.add(r.id):t.delete(r.id));const c=i.querySelector("#iw-sel-list");c&&(c.innerHTML=_(t)),i.querySelector("#iw-sel-all").textContent=a?"Tout désélectionner":"Tout sélectionner",z(i,t,s),s()})}function N(i=null){const t=new Set((i==null?void 0:i.ids)??[]);let s=T,n=10;const{ov:l,close:a}=F();l.innerHTML=`
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
              <input type="date" class="iw-input" id="iw-date" value="${s}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Quantité <span class="iw-unit">(mm par parcelle)</span></label>
              <input type="number" class="iw-input" id="iw-qty" value="${n}" min="1" style="width:80px" />
            </div>
            <div class="iw-divider"></div>
            <div class="iw-section-lbl">Sélection</div>
            <div id="iw-sel-sum">${i?"":G(t)}</div>
          </div>
          ${K(t,i)}
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="iw-save" ${!i&&t.size===0?"disabled":""}>Enregistrer</button>
      </div>
    </div>`,l.querySelector("#iw-close").addEventListener("click",a),l.querySelector("#iw-cancel").addEventListener("click",a),l.querySelector("#iw-date").addEventListener("change",r=>{s=r.target.value}),l.querySelector("#iw-qty").addEventListener("input",r=>{n=parseInt(r.target.value)||1});function c(){l.querySelector("#iw-save").disabled=!i&&t.size===0;const r=l.querySelector("#iw-sel-sum");r&&(r.innerHTML=G(t))}i||z(l,t,c),l.querySelector("#iw-save").addEventListener("click",()=>{const r=i?new Set(i.ids):t;J(r,()=>{const u=s>T;r.forEach(o=>{f.push({iso:s,mm:n,real:!u,plotId:o,fromStrategy:!1})});const w=[...r].map(o=>{var b;return(b=I.find(y=>y.id===o))==null?void 0:b.name}).filter(Boolean);D(),a(),X({title:r.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:O(s)},{label:"Quantité",value:`${n} mm`}],plotNames:w,addedCount:r.size,filterPlotId:r.size===1?[...r][0]:null})})})}function R(i=null,t=null){const s=new Set((i==null?void 0:i.ids)??[]);let n=T,l=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],a=10,c=7,r="form",u=null,w=null;if(t){const e=f.filter(d=>d.fromStrategy&&t.has(d.seasonId));if(e.length){const d=e.map($=>$.iso).sort();n=d[0],l=d[d.length-1],a=e[0].mm;const v=[...new Set(d)];c=v.length>=2?Math.round((new Date(v[1])-new Date(v[0]))/864e5):7,u=n,w=l}}const{ov:o,close:b}=F();function y(){if(!n||!l||c<=0)return[];const e=[],d=new Date(l);let v=new Date(n);for(;v<=d&&e.length<100;)e.push(new Date(v)),v.setDate(v.getDate()+c);return e}function q(){const e=y(),d=e.length>0?`<div class="iw-preview-ok">↗ ${e.length} irrigations · ${e.length*a} mm au total</div>`:'<div class="iw-preview-empty">Ajustez les dates et la fréquence</div>';return`
      <div class="iw-two-col">
        <div class="iw-panel iw-panel--params">
          <div class="iw-section-lbl" style="margin-top:0">Récurrence</div>
          <div class="iw-field-row">
            <div class="iw-field">
              <label class="iw-label">Début</label>
              <input type="date" class="iw-input" id="iw-debut" value="${n}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Fin</label>
              <input type="date" class="iw-input" id="iw-fin" value="${l}" />
            </div>
          </div>
          <div class="iw-field-row">
            <div class="iw-field">
              <label class="iw-label">Quantité <span class="iw-unit">(mm/irrig.)</span></label>
              <input type="number" class="iw-input" id="iw-qty" value="${a}" min="1" style="width:70px" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Fréquence <span class="iw-unit">(jours)</span></label>
              <input type="number" class="iw-input" id="iw-freq" value="${c}" min="1" max="30" style="width:70px" />
            </div>
          </div>
          ${d}
        </div>
        ${K(s,i)}
      </div>`}function L(){const e=y(),d=e.filter(A=>A.toISOString().slice(0,10)<T),v=e.filter(A=>A.toISOString().slice(0,10)>=T),$=i?i.ids.length:s.size;function p(A){const H=A.toISOString().slice(0,10),ii=H>=T?"#FFB705":"#FF8500";return`<div class="iw-occ-row">
        <span>${O(H)}</span>
        <span style="font-weight:700;color:${ii}">${a} mm</span>
      </div>`}const m=i?I.filter(A=>i.ids.includes(A.id)):I.filter(A=>s.has(A.id)),h=4,j=m.slice(0,h),M=m.slice(h),C=`
      <div class="iw-apercu-plots">
        <div class="iw-section-lbl">Parcelles concernées</div>
        ${j.map(A=>`<span class="iw-apercu-plot-tag">${A.name}</span>`).join("")}${M.length?`<span class="iw-apercu-plot-more">+ ${M.length} autre${M.length>1?"s":""}</span>`:""}
      </div>`,P=m.reduce((A,H)=>A+(H.area??0),0),V=P>0?Math.round(e.length*a*P*10):0;return`
      <div class="iw-apercu-summary">
        <div>
          <div class="iw-apercu-big">${e.length} irrigations</div>
          <div class="iw-apercu-sub">${Y(n)} → ${Y(l)} · tous les ${c}j</div>
        </div>
        <div style="text-align:right">
          <div class="iw-apercu-big">${e.length*a} mm</div>
          <div class="iw-apercu-sub">${$} parcelle${$>1?"s":""} · ${a} mm/irrig.${V>0?` · ${V.toLocaleString("fr-FR")} m³`:""}</div>
        </div>
      </div>
      ${C}
      ${d.length?`<div class="iw-section-lbl">Irrigations effectuées</div>${d.map(p).join("")}`:""}
      ${v.length?`
        <div class="iw-section-lbl" style="margin-top:${d.length?"12px":"0"}">Irrigations planifiées</div>
        ${v.slice(0,6).map(p).join("")}
        ${v.length>6?`
          <div id="iw-apercu-rest" style="display:none">${v.slice(6).map(p).join("")}</div>
          <button class="iw-occ-more" id="iw-apercu-more">... et ${v.length-6} irrigation${v.length-6>1?"s":""} de plus</button>`:""}`:""}
      ${t?`
        <div class="iw-confirm-box" style="margin-top:12px;display:block">
          <div class="iw-confirm-box-txt">${x()?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées."}</div>
          <div class="iw-confirm-box-btns" id="iw-edit-scope-confirm" style="display:none">
            <button class="iw-btn iw-btn--sec iw-btn--sm" id="iw-edit-scope-cancel">Annuler</button>
            <button class="iw-btn iw-btn--danger iw-btn--sm" id="iw-edit-scope-confirm-btn">Confirmer la modification</button>
          </div>
        </div>`:""}
    `}function x(){return!!t&&(n!==u||l!==w)}function k(){const e=i?i.ids.length:s.size,d=y(),v=o.querySelector("#iw-next-btn");v&&(v.disabled=e===0||d.length===0)}function E(){var d,v,$,p;i||z(o,s,k);const e=()=>{const m=y(),h=o.querySelector(".iw-preview-ok, .iw-preview-empty");h&&(h.className=m.length>0?"iw-preview-ok":"iw-preview-empty",h.textContent=m.length>0?`↗ ${m.length} irrigations · ${m.length*a} mm au total`:"Ajustez les dates et la fréquence"),k()};(d=o.querySelector("#iw-debut"))==null||d.addEventListener("change",m=>{n=m.target.value,e()}),(v=o.querySelector("#iw-fin"))==null||v.addEventListener("change",m=>{l=m.target.value,e()}),($=o.querySelector("#iw-qty"))==null||$.addEventListener("input",m=>{a=parseInt(m.target.value)||1,e()}),(p=o.querySelector("#iw-freq"))==null||p.addEventListener("input",m=>{c=parseInt(m.target.value)||1,e()})}function S(){var d,v,$;const e=o.querySelector(".iw-modal");e.querySelector(".iw-modal-body").innerHTML=r==="form"?q():L(),e.querySelector("#iw-back-btn").style.display=r==="form"?"none":"",e.querySelector("#iw-next-btn").style.display=r==="form"?"":"none",e.querySelector("#iw-conf-btn").style.display=r==="form"?"none":"",r==="form"?(k(),E()):((d=o.querySelector("#iw-apercu-more"))==null||d.addEventListener("click",p=>{o.querySelector("#iw-apercu-rest").style.display="",p.target.remove()}),(v=o.querySelector("#iw-edit-scope-cancel"))==null||v.addEventListener("click",()=>{o.querySelector("#iw-edit-scope-confirm").style.display="none"}),($=o.querySelector("#iw-edit-scope-confirm-btn"))==null||$.addEventListener("click",g))}o.innerHTML=`
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
    </div>`,o.querySelector("#iw-close").addEventListener("click",b),o.querySelector("#iw-cancel").addEventListener("click",b),o.querySelector("#iw-back-btn").addEventListener("click",()=>{r="form",S()}),o.querySelector("#iw-next-btn").addEventListener("click",()=>{r="apercu",S()});function g(){const e=y(),d=i?new Set(i.ids):s;J(d,()=>{var h,j;const v=x();t&&f.splice(0,f.length,...f.filter(M=>!(t.has(M.seasonId)&&M.fromStrategy&&(v||M.iso>T))));const $=t&&!v?e.filter(M=>M.toISOString().slice(0,10)>T):e,p=ti();$.forEach(M=>{const C=M.toISOString().slice(0,10);d.forEach(P=>{f.push({iso:C,mm:a,real:C<=T,plotId:P,fromStrategy:!0,seasonId:p})})});const m=[...d].map(M=>{var C;return(C=I.find(P=>P.id===M))==null?void 0:C.name}).filter(Boolean);D(),b(),X({title:"Saison enregistrée",params:[{label:"Début",value:O(((h=e[0])==null?void 0:h.toISOString().slice(0,10))??"")},{label:"Fin",value:O(((j=e[e.length-1])==null?void 0:j.toISOString().slice(0,10))??"")},{label:"Quantité",value:`${a} mm/irrig.`},{label:"Fréquence",value:`tous les ${c} jours`},{label:"Irrigations générées",value:`${e.length*d.size}`}],plotNames:m,addedCount:e.length*d.size,filterPlotId:d.size===1?[...d][0]:null})})}o.querySelector("#iw-conf-btn").addEventListener("click",()=>{if(t){const e=o.querySelector("#iw-edit-scope-confirm");e&&(e.style.display="flex",e.scrollIntoView({behavior:"smooth",block:"center"}));return}g()}),S()}function di(i,t){let s=i.iso,n=i.mm;const{ov:l,close:a}=F();l.innerHTML=`
    <div class="iw-modal" style="max-width:420px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">${i.real?"Modifier l'irrigation effectuée":"Modifier l'irrigation planifiée"}</span>
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
      </div>
      <div class="iw-modal-ft iw-modal-ft--spread">
        <button class="iw-btn iw-btn--danger" id="iw-delete">Supprimer</button>
        <div style="display:flex;gap:8px">
          <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
          <button class="iw-btn iw-btn--pri" id="iw-save">Enregistrer</button>
        </div>
      </div>
    </div>`,l.querySelector("#iw-close").addEventListener("click",a),l.querySelector("#iw-cancel").addEventListener("click",a),l.querySelector("#iw-edit-date").addEventListener("change",c=>{s=c.target.value}),l.querySelector("#iw-edit-qty").addEventListener("input",c=>{const r=parseInt(c.target.value);r>0&&(n=r)}),l.querySelector("#iw-delete").addEventListener("click",()=>{const c=f.indexOf(i);c>-1&&f.splice(c,1),D(),a(),t()}),l.querySelector("#iw-save").addEventListener("click",()=>{i.iso=s,i.mm=n,i.real=s<=T,D(),a(),t()})}function Q(i,t){let s=!1,n=!1;const{ov:l,close:a}=F();function c(){return new Set(f.filter(w=>w.plotId===i&&w.fromStrategy&&w.seasonId).map(w=>w.seasonId))}function r(){return f.some(w=>w.plotId===i&&!w.fromStrategy)}function u(){var y,q,L,x,k,E,S;const w=l.querySelector(".iw-modal-body");w.innerHTML=`
      <div class="iw-strat-opt" id="strat-modify">
        <div class="iw-strat-opt-icon" style="background:#E6F1FB">✎</div>
        <div>
          <div class="iw-strat-opt-title">Modifier la saison</div>
          <div class="iw-strat-opt-sub">Quantité, fréquence, dates · Les irrigations passées sont conservées</div>
        </div>
      </div>
      <div class="iw-strat-opt iw-strat-opt--danger" id="strat-stop">
        <div class="iw-strat-opt-icon" style="background:#FDECEC">✕</div>
        <div>
          <div class="iw-strat-opt-title" style="color:#8B1A1A">Arrêter la saison</div>
          <div class="iw-strat-opt-sub" style="color:#C05050">Supprime les irrigations futures de cette parcelle</div>
        </div>
      </div>
      <div class="iw-strat-opt iw-strat-opt--danger" id="strat-delete">
        <div class="iw-strat-opt-icon" style="background:#FDECEC">🗑</div>
        <div>
          <div class="iw-strat-opt-title" style="color:#8B1A1A">Supprimer la saison</div>
          <div class="iw-strat-opt-sub" style="color:#C05050">Supprime toutes les irrigations de cette parcelle</div>
        </div>
      </div>
      ${s?`
      <div class="iw-confirm-box">
        <div class="iw-confirm-box-txt">Supprimer toutes les occurrences futures ?</div>
        <div class="iw-confirm-box-btns">
          <button class="iw-btn iw-btn--sec iw-btn--sm" id="stop-cancel">Annuler</button>
          <button class="iw-btn iw-btn--danger iw-btn--sm" id="stop-confirm">Confirmer</button>
        </div>
      </div>`:""}
      ${n?`
      <div class="iw-confirm-box">
        <div class="iw-confirm-box-txt">Supprimer toutes les irrigations de cette saison ?</div>
        ${r()?'<div class="iw-confirm-box-txt">Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.</div>':""}
        <div class="iw-confirm-box-btns">
          <button class="iw-btn iw-btn--sec iw-btn--sm" id="del-cancel">Annuler</button>
          <button class="iw-btn iw-btn--danger iw-btn--sm" id="del-confirm">Supprimer tout</button>
        </div>
      </div>`:""}`;const o=I.find(g=>g.id===i),b=o?{ids:[o.id],label:o.name}:null;(y=w.querySelector("#strat-modify"))==null||y.addEventListener("click",()=>{a(),R(b,c())}),(q=w.querySelector("#strat-stop"))==null||q.addEventListener("click",()=>{s=!0,n=!1,u()}),(L=w.querySelector("#strat-delete"))==null||L.addEventListener("click",()=>{n=!0,s=!1,u()}),(x=w.querySelector("#stop-cancel"))==null||x.addEventListener("click",()=>{s=!1,u()}),(k=w.querySelector("#stop-confirm"))==null||k.addEventListener("click",()=>{const g=c();f.splice(0,f.length,...f.filter(e=>!(e.plotId===i&&g.has(e.seasonId)&&!e.real))),D(),a(),t()}),(E=w.querySelector("#del-cancel"))==null||E.addEventListener("click",()=>{n=!1,u()}),(S=w.querySelector("#del-confirm"))==null||S.addEventListener("click",()=>{f.splice(0,f.length,...f.filter(g=>g.plotId!==i)),D(),a(),t()})}l.innerHTML=`
    <div class="iw-modal" style="max-width:440px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Gérer la saison</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body"></div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Fermer</button>
      </div>
    </div>`,l.querySelector("#iw-close").addEventListener("click",a),l.querySelector("#iw-cancel").addEventListener("click",a),u()}function ui(){var u,w;const i=new Set(I.map(o=>o.id)),t=[...f].sort((o,b)=>o.iso<b.iso?-1:1);let s=((u=t[0])==null?void 0:u.iso)??T,n=((w=t[t.length-1])==null?void 0:w.iso)??T;const{ov:l,close:a}=F();function c(){return B().map(o=>{const b=i.has(o.id);return`<div class="iw-plot-row${b?" iw-plot-row--sel":""}" data-pid="${o.id}">
        ${W(b)}
        <div class="iw-plot-name">${o.name}</div>
      </div>`}).join("")}l.innerHTML=`
    <div class="iw-modal" style="max-width:560px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Export CSV</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body">
        <div class="iw-two-col">
          <div class="iw-panel iw-panel--scroll">
            <div class="iw-section-lbl">Parcelles</div>
            <div id="iw-export-plots">${c()}</div>
          </div>
          <div class="iw-panel iw-panel--params">
            <div class="iw-section-lbl" style="margin-top:0">Période</div>
            <div class="iw-field">
              <label class="iw-label">Du</label>
              <input type="date" class="iw-input" id="iw-exp-start" value="${s}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Au</label>
              <input type="date" class="iw-input" id="iw-exp-end" value="${n}" />
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
    </div>`,l.querySelector("#iw-close").addEventListener("click",a),l.querySelector("#iw-cancel").addEventListener("click",a),l.querySelector("#iw-exp-start").addEventListener("change",o=>{s=o.target.value}),l.querySelector("#iw-exp-end").addEventListener("change",o=>{n=o.target.value});function r(){l.querySelectorAll("#iw-export-plots .iw-plot-row").forEach(o=>{o.addEventListener("click",()=>{const b=+o.dataset.pid;i.has(b)?i.delete(b):i.add(b),l.querySelector("#iw-export-plots").innerHTML=c(),r()})})}r(),l.querySelector("#iw-do-export").addEventListener("click",()=>{const o=B().filter(g=>i.has(g.id));if(!o.length){ri("Sélectionnez au moins une parcelle");return}const b=new Set;for(const g of f)g.iso>=s&&g.iso<=n&&b.add(g.iso);const y=[...b].sort(),q=["Date",...o.map(g=>g.name)].join(";"),L=y.map(g=>{const e=o.map(d=>{const v=f.filter($=>$.iso===g&&$.plotId===d.id).reduce(($,p)=>$+p.mm,0);return v>0?v:""});return[g,...e].join(";")}),x=[q,...L].join(`
`),k=new Blob([x],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(k),S=document.createElement("a");S.href=E,S.download=`irrigations_${s}_${n}.csv`,document.body.appendChild(S),S.click(),setTimeout(()=>{URL.revokeObjectURL(E),S.remove()},100),a()})}function Z(i=null){let t=i?String(i):"all";const{ov:s,close:n}=F();function l(){return t==="all"?f:f.filter(u=>u.plotId===+t)}function a(){if(t==="all")return null;const u=I.find(w=>String(w.id)===t);return u?{ids:[u.id],label:u.name}:null}const c=B().map(u=>`<option value="${u.id}"${String(u.id)===t?" selected":""}>${u.name}</option>`).join("");s.innerHTML=`
    <div class="iw-modal iw-modal--full">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Voir les irrigations</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-full-toolbar">
        <div class="iw-filter-wrap">
          <label class="iw-label" style="margin:0 8px 0 0;white-space:nowrap">Parcelle</label>
          <select class="iw-select" id="iw-filter">
            <option value="all"${t==="all"?" selected":""}>Toutes les parcelles</option>
            ${c}
          </select>
        </div>
        <div class="iw-toolbar-actions">
          <button class="iw-btn iw-btn--sec" id="iw-strat-btn" style="display:none"><i class="bi bi-sliders"></i> Gérer la saison</button>
          <button class="iw-btn iw-btn--sec" id="iw-export-btn"><i class="bi bi-download"></i> Export CSV</button>
        </div>
      </div>
      <div class="iw-full-body" id="iw-full-body"></div>
    </div>`,s.querySelector("#iw-close").addEventListener("click",n),s.querySelector("#iw-filter").addEventListener("change",u=>{t=u.target.value,r()}),s.querySelector("#iw-export-btn").addEventListener("click",ui);function r(){var E,S,g;const u=s.querySelector("#iw-full-body"),w=l(),o=w.some(e=>e.fromStrategy),b=s.querySelector("#iw-strat-btn");if(b.style.display=o&&t!=="all"?"":"none",b.onclick=()=>Q(+t,r),!w.length){u.innerHTML=`
        <div class="iw-empty">
          <i class="bi bi-calendar3" style="font-size:36px;opacity:.2"></i>
          <div>Aucune irrigation enregistrée pour cette sélection</div>
          <div class="iw-empty-actions">
            <button class="iw-btn iw-btn--pri" id="iw-add-saisie"><i class="bi bi-droplet-fill"></i> Saisir une irrigation</button>
            <button class="iw-btn iw-btn--sec" id="iw-add-saison"><i class="bi bi-arrow-repeat"></i> Saisir une saison</button>
          </div>
        </div>`,u.querySelector("#iw-add-saisie").addEventListener("click",()=>{n(),N(a())}),u.querySelector("#iw-add-saison").addEventListener("click",()=>{n(),R(a())});return}const y={};u.querySelectorAll("details[data-section]").forEach(e=>{y[e.dataset.section]=e.open});const q=[...w].filter(e=>!e.real).sort((e,d)=>e.iso<d.iso?-1:1),L=[...w].filter(e=>e.real).sort((e,d)=>e.iso>d.iso?-1:1);function x(e){var h;const d=f.indexOf(e),v=e.real?"#FF8500":"#FFB705",[,$,p]=e.iso.split("-"),m=((h=I.find(j=>j.id===e.plotId))==null?void 0:h.name)??"—";return`<div class="iw-list-item">
        <div class="iw-list-stripe" style="background:${v}"></div>
        <div class="iw-list-date"><span style="font-size:15px;font-weight:700;color:${v}">${p}</span><span style="font-size:10px;color:${v}">/${$}</span></div>
        <div style="flex:1">
          <div class="iw-list-label">${m}</div>
          <div class="iw-list-status" style="color:${v}">${e.real?"Effectuée":"Planifiée"}</div>
        </div>
        <div class="iw-list-mm" style="color:${v}">${e.mm} mm</div>
        <button class="iw-edit-btn" data-iidx="${d}">✎</button>
        <button class="iw-del-btn"  data-iidx="${d}">🗑</button>
      </div>`}const k=o&&t!=="all"?`<div style="display:flex;justify-content:flex-end;margin-bottom:10px">
           <button class="iw-strat-inline-btn" id="iw-strat-inline"><i class="bi bi-sliders"></i> Modifier la saison</button>
         </div>`:`<div class="iw-add-bar">
           <button class="iw-btn iw-btn--sec" id="iw-add-saisie"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="iw-btn iw-btn--sec" id="iw-add-saison"><i class="bi bi-arrow-repeat"></i> Ajouter une saison</button>
         </div>`;u.innerHTML=`
      ${ci(w)}
      ${oi(w)}
      ${k}
      ${L.length?`
        <details class="iw-section-details" data-section="effectuees" open>
          <summary class="iw-section-summary">Effectuées <span class="iw-section-count">${L.length}</span></summary>
          <div class="iw-section-body">${L.map(x).join("")}</div>
        </details>`:""}
      ${q.length?`
        <details class="iw-section-details" data-section="planifiees" open>
          <summary class="iw-section-summary">Planifiées <span class="iw-section-count">${q.length}</span></summary>
          <div class="iw-section-body">${q.map(x).join("")}</div>
        </details>`:""}
    `,u.querySelectorAll("details[data-section]").forEach(e=>{const d=e.dataset.section;d in y&&(e.open=y[d])}),u.querySelectorAll(".iw-edit-btn").forEach(e=>{e.addEventListener("click",()=>{const d=f[+e.dataset.iidx];d&&di(d,r)})}),u.querySelectorAll(".iw-del-btn").forEach(e=>{e.addEventListener("click",()=>{const d=+e.dataset.iidx;d>=0&&(f.splice(d,1),D(),r())})}),(E=u.querySelector("#iw-add-saisie"))==null||E.addEventListener("click",()=>{n(),N(a())}),(S=u.querySelector("#iw-add-saison"))==null||S.addEventListener("click",()=>{n(),R(a())}),(g=u.querySelector("#iw-strat-inline"))==null||g.addEventListener("click",()=>Q(+t,r))}r()}(()=>{const i=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(i),document.addEventListener("mouseover",t=>{const s=t.target.closest("[data-tip]");if(!s){i.style.opacity="0";return}i.textContent=s.dataset.tip,i.style.opacity="1"}),document.addEventListener("mousemove",t=>{i.style.left=t.clientX+14+"px",i.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var s;(s=t.relatedTarget)!=null&&s.closest("[data-tip]")||(i.style.opacity="0")})})();window.WebIrrig={openSaisie:N,openSaison:R,openVoirIrrigations:Z};
