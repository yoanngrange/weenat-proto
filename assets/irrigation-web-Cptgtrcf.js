import{I as S,s as T,g as U}from"./irrigations-C22Dtsoo.js";import{e as W,d as X}from"./store-InOgbptE.js";import{p as _}from"./plots-BFmvZ9cD.js";import{I as J}from"./constants-C2D4LmLD.js";const j=new Date().toISOString().split("T")[0],K=1;W(_);const I=_.filter(i=>i.orgId===K);function D(i){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,e,l]=i.split("-");return`${parseInt(l)} ${t[parseInt(e)-1]} ${i.split("-")[0]}`}function O(i){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,e,l]=i.split("-");return`${parseInt(l)} ${t[parseInt(e)-1]}`}function N(i,t){return i?'<div class="iw-chk iw-chk--on"><i class="bi bi-check"></i></div>':'<div class="iw-chk"></div>'}function Z(i){const t=i.crop,e=i.irrigation||null,l=i.substrate?"Substrat : "+i.substrate:i.texture||null,s=[t,e,l].filter(Boolean);return s.length?`<span class="iw-plot-info">${s.join(" · ")}</span>`:`<span class="iw-plot-info iw-plot-info--miss">type d'irrigation non renseigné</span>`}function F(){return[...I].sort((i,t)=>i.name.localeCompare(t.name,"fr"))}function ii(i){if(i.length<2)return"";const t=[...i].sort((g,h)=>g.iso<h.iso?-1:1),e=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],l=new Date(t[0].iso),s=new Date(t[t.length-1].iso),a=Math.max(s-l,1),o=600,n=26,c=5,m=5,u=n-m-4,y=u-m-3,$=n+c+13,k=$+2,L=m+2,r=g=>Math.round(L+(g-l)/a*(o-2*L)),v=g=>{const[,h,q]=g.split("-");return`${parseInt(q)}/${parseInt(h)}`},w=[],f=new Date(l.getFullYear(),l.getMonth()+1,1);for(;f<=s;)w.push(new Date(f)),f.setMonth(f.getMonth()+1);const p=w.map(g=>`<line x1="${r(g)}" y1="${n-6}" x2="${r(g)}" y2="${n+c+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),d=[l,...w,s],b=d.slice(0,-1).map((g,h)=>{const q=r(g),M=r(d[h+1]);return M-q<16?"":`<text x="${Math.round((q+M)/2)}" y="${y}" font-size="9" fill="#B0AEA8" text-anchor="middle">${e[g.getMonth()]}</text>`}).join(""),E=g=>{const h=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,q,M]=g.split("-");return`${parseInt(M)} ${h[parseInt(q)-1]}`},x=t.map(g=>{const h=g.real?"#FF8500":"#FFB705",q=r(new Date(g.iso)),M=`${E(g.iso)} · ${g.mm} mm`;return`<circle cx="${q}" cy="${u}" r="${m}" fill="${h}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${q}" cy="${u}" r="${m+6}" fill="transparent" pointer-events="all" data-tip="${M}"/>`}).join("");return`<div class="iw-timeline">
    <svg width="${o}" height="${k}" viewBox="0 0 ${o} ${k}" style="width:100%;display:block">
      ${b}
      <rect x="0" y="${n}" width="${o}" height="${c}" rx="${c/2}" fill="#E0DED8"/>
      ${p}
      ${x}
      <text x="1" y="${$}" font-size="10" fill="#B0AEA8">${v(t[0].iso)}</text>
      <text x="${o-1}" y="${$}" font-size="10" fill="#B0AEA8" text-anchor="end">${v(t[t.length-1].iso)}</text>
    </svg>
    <div class="iw-timeline-legend">
      <span class="iw-leg-item"><span class="iw-leg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span class="iw-leg-item"><span class="iw-leg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function ti(i){const t=i.filter(a=>a.real),e=i.filter(a=>!a.real),l=t.reduce((a,o)=>a+o.mm,0),s=e.reduce((a,o)=>a+o.mm,0);return`<div class="iw-cumuls-bar">
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Effectuées</div>
      <div class="iw-cumul-val" style="color:#FF8500">${l} mm</div>
      <div class="iw-cumul-count">${t.length} irrigation${t.length!==1?"s":""}</div>
    </div>
    <div class="iw-cumul-sep"></div>
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Planifiées</div>
      <div class="iw-cumul-val" style="color:#FFB705">${s} mm</div>
      <div class="iw-cumul-count">${e.length} irrigation${e.length!==1?"s":""}</div>
    </div>
    <div class="iw-cumul-sep"></div>
    <div class="iw-cumul-block">
      <div class="iw-cumul-lbl">Total saison</div>
      <div class="iw-cumul-val">${l+s} mm</div>
      <div class="iw-cumul-count">${t.length+e.length} irrigations</div>
    </div>
  </div>`}function V({title:i,params:t,plotNames:e,addedCount:l,filterPlotId:s}){const{ov:a,close:o}=A(),n=t.map($=>`
    <div class="iw-conf-param">
      <span class="iw-conf-param-lbl">${$.label}</span>
      <span class="iw-conf-param-val">${$.value}</span>
    </div>`).join(""),c=5,m=e.slice(0,c),u=e.slice(c),y=m.map($=>`<span class="iw-apercu-plot-tag">${$}</span>`).join("")+(u.length?`<span class="iw-apercu-plot-more">+ ${u.length} autre${u.length>1?"s":""}</span>`:"");a.innerHTML=`
    <div class="iw-modal iw-modal--confirm">
      <div class="iw-conf-icon">✓</div>
      <div class="iw-conf-title">${i}</div>
      <div class="iw-conf-params">${n}</div>
      <div class="iw-apercu-plots" style="text-align:center;margin-bottom:20px">${y}</div>
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
    </div>`,a.querySelector("#iw-conf-edit").addEventListener("click",()=>{S.splice(S.length-l,l),T(),o()}),a.querySelector("#iw-conf-voir").addEventListener("click",()=>{o(),Q(s??null)}),a.querySelector("#iw-conf-close").addEventListener("click",o)}function ei(i){const t=document.createElement("div");t.className="iw-toast",t.textContent=i,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("iw-toast--in")),setTimeout(()=>{t.classList.remove("iw-toast--in"),setTimeout(()=>t.remove(),400)},3e3)}function Y(i,t){const e=I.filter(o=>i.has(o.id)&&(!o.irrigation||o.irrigation==="Non irrigué"));if(!e.length){t();return}const{ov:l,close:s}=A();l.innerHTML=`
    <div class="iw-modal" style="max-width:400px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Type d'irrigation non renseigné</span>
        <button class="iw-modal-close" id="iw-ask-close">×</button>
      </div>
      <div class="iw-modal-body">
        <p style="font-size:13px;color:#636366;margin:0 0 14px">
          ${e.length===1?`<strong>${e[0].name}</strong> n'a pas de type d'irrigation renseigné.`:`${e.length} parcelles n'ont pas de type d'irrigation renseigné.`}
        </p>
        <div class="iw-field">
          <label class="iw-label">Type d'irrigation</label>
          <select class="iw-input" id="iw-ask-type">
            <option value="">— Choisir un type —</option>
            ${J.map(o=>`<option value="${o}">${o}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-ask-skip">Passer</button>
        <button class="iw-btn iw-btn--pri" id="iw-ask-confirm">Confirmer</button>
      </div>
    </div>`;const a=()=>{const o=l.querySelector("#iw-ask-type").value;o&&e.forEach(n=>{n.irrigation=o,X(n.id,{irrigation:o})}),s(),t()};l.querySelector("#iw-ask-close").addEventListener("click",()=>{s(),t()}),l.querySelector("#iw-ask-skip").addEventListener("click",()=>{s(),t()}),l.querySelector("#iw-ask-confirm").addEventListener("click",a)}function A(){const i=document.createElement("div");i.className="iw-overlay",document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("iw-overlay--in"));const t=()=>{i.classList.remove("iw-overlay--in"),setTimeout(()=>i.remove(),250)};return i.addEventListener("click",e=>{e.target===i&&t()}),{ov:i,close:t}}function B(i){return F().map(t=>{const e=i.has(t.id);return`<div class="iw-plot-row${e?" iw-plot-row--sel":""}" data-pid="${t.id}">
      ${N(e)}
      <div><div class="iw-plot-name">${t.name}</div>${Z(t)}</div>
    </div>`}).join("")}function G(i,t){if(t){const e=I.filter(l=>t.ids.includes(l.id));return`<div class="iw-panel iw-panel--fixed">
      <div class="iw-presel-banner">
        <i class="bi bi-geo-alt-fill" style="color:var(--pri)"></i>
        <span>${t.label} <span class="iw-presel-count">· ${t.ids.length} parcelle${t.ids.length>1?"s":""}</span></span>
      </div>
      ${e.map(l=>`<div class="iw-sel-name">· ${l.name}</div>`).join("")}
    </div>`}return`<div class="iw-panel iw-panel--scroll">
    <div class="iw-sel-toolbar">
      <button class="iw-sel-all-btn" id="iw-sel-all" type="button">Tout sélectionner</button>
    </div>
    <div id="iw-sel-list">${B(i)}</div>
  </div>`}function z(i){const t=i.size;if(t===0)return'<div class="iw-sel-empty">Aucune parcelle sélectionnée</div>';const e=[...i].map(l=>{var s;return(s=I.find(a=>a.id===l))==null?void 0:s.name}).filter(Boolean);return`<div class="iw-sel-summary">
    <div class="iw-sel-title">${t===1?e[0]:`${t} parcelles`}</div>
    ${e.map(l=>`<div class="iw-sel-name">· ${l}</div>`).join("")}
  </div>`}function C(i,t,e){var l;i.querySelectorAll(".iw-plot-row").forEach(s=>{s.addEventListener("click",()=>{const a=+s.dataset.pid;t.has(a)?t.delete(a):t.add(a);const o=i.querySelector("#iw-sel-list");o&&(o.innerHTML=B(t)),C(i,t,e),e()})}),(l=i.querySelector("#iw-sel-all"))==null||l.addEventListener("click",()=>{const s=F(),a=s.some(n=>!t.has(n.id));s.forEach(n=>a?t.add(n.id):t.delete(n.id));const o=i.querySelector("#iw-sel-list");o&&(o.innerHTML=B(t)),i.querySelector("#iw-sel-all").textContent=a?"Tout désélectionner":"Tout sélectionner",C(i,t,e),e()})}function H(i=null){const t=new Set((i==null?void 0:i.ids)??[]);let e=j,l=10;const{ov:s,close:a}=A();s.innerHTML=`
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
              <input type="date" class="iw-input" id="iw-date" value="${e}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Quantité <span class="iw-unit">(mm par parcelle)</span></label>
              <input type="number" class="iw-input" id="iw-qty" value="${l}" min="1" style="width:80px" />
            </div>
            <div class="iw-divider"></div>
            <div class="iw-section-lbl">Sélection</div>
            <div id="iw-sel-sum">${i?"":z(t)}</div>
          </div>
          ${G(t,i)}
        </div>
      </div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="iw-save" ${!i&&t.size===0?"disabled":""}>Enregistrer</button>
      </div>
    </div>`,s.querySelector("#iw-close").addEventListener("click",a),s.querySelector("#iw-cancel").addEventListener("click",a),s.querySelector("#iw-date").addEventListener("change",n=>{e=n.target.value}),s.querySelector("#iw-qty").addEventListener("input",n=>{l=parseInt(n.target.value)||1});function o(){s.querySelector("#iw-save").disabled=!i&&t.size===0;const n=s.querySelector("#iw-sel-sum");n&&(n.innerHTML=z(t))}i||C(s,t,o),s.querySelector("#iw-save").addEventListener("click",()=>{const n=i?new Set(i.ids):t;Y(n,()=>{const c=e>j;n.forEach(u=>{S.push({iso:e,mm:l,real:!c,plotId:u,fromStrategy:!1})});const m=[...n].map(u=>{var y;return(y=I.find($=>$.id===u))==null?void 0:y.name}).filter(Boolean);T(),a(),V({title:n.size>1?"Irrigations enregistrées":"Irrigation enregistrée",params:[{label:"Date",value:D(e)},{label:"Quantité",value:`${l} mm`}],plotNames:m,addedCount:n.size,filterPlotId:n.size===1?[...n][0]:null})})})}function P(i=null){const t=new Set((i==null?void 0:i.ids)??[]);let e=j,l=new Date(new Date().setMonth(new Date().getMonth()+4)).toISOString().split("T")[0],s=10,a=7,o="form";const{ov:n,close:c}=A();function m(){if(!e||!l||a<=0)return[];const r=[],v=new Date(l);let w=new Date(e);for(;w<=v&&r.length<100;)r.push(new Date(w)),w.setDate(w.getDate()+a);return r}function u(){const r=m(),v=r.length>0?`<div class="iw-preview-ok">↗ ${r.length} irrigations · ${r.length*s} mm au total</div>`:'<div class="iw-preview-empty">Ajustez les dates et la fréquence</div>';return`
      <div class="iw-two-col">
        <div class="iw-panel iw-panel--params">
          <div class="iw-section-lbl" style="margin-top:0">Récurrence</div>
          <div class="iw-field-row">
            <div class="iw-field">
              <label class="iw-label">Début</label>
              <input type="date" class="iw-input" id="iw-debut" value="${e}" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Fin</label>
              <input type="date" class="iw-input" id="iw-fin" value="${l}" />
            </div>
          </div>
          <div class="iw-field-row">
            <div class="iw-field">
              <label class="iw-label">Quantité <span class="iw-unit">(mm/irrig.)</span></label>
              <input type="number" class="iw-input" id="iw-qty" value="${s}" min="1" style="width:70px" />
            </div>
            <div class="iw-field">
              <label class="iw-label">Fréquence <span class="iw-unit">(jours)</span></label>
              <input type="number" class="iw-input" id="iw-freq" value="${a}" min="1" max="30" style="width:70px" />
            </div>
          </div>
          ${v}
        </div>
        ${G(t,i)}
      </div>`}function y(){const r=m(),v=r.filter(h=>h.toISOString().slice(0,10)<j),w=r.filter(h=>h.toISOString().slice(0,10)>=j),f=i?i.ids.length:t.size;function p(h){const q=h.toISOString().slice(0,10),M=q>=j?"#FFB705":"#FF8500";return`<div class="iw-occ-row">
        <span>${D(q)}</span>
        <span style="font-weight:700;color:${M}">${s} mm</span>
      </div>`}const d=i?I.filter(h=>i.ids.includes(h.id)):I.filter(h=>t.has(h.id)),b=4,E=d.slice(0,b),x=d.slice(b),g=`
      <div class="iw-apercu-plots">
        <div class="iw-section-lbl">Parcelles concernées</div>
        ${E.map(h=>`<span class="iw-apercu-plot-tag">${h.name}</span>`).join("")}${x.length?`<span class="iw-apercu-plot-more">+ ${x.length} autre${x.length>1?"s":""}</span>`:""}
      </div>`;return`
      <div class="iw-apercu-summary">
        <div>
          <div class="iw-apercu-big">${r.length} irrigations</div>
          <div class="iw-apercu-sub">${O(e)} → ${O(l)} · tous les ${a}j</div>
        </div>
        <div style="text-align:right">
          <div class="iw-apercu-big">${r.length*s} mm</div>
          <div class="iw-apercu-sub">${f} parcelle${f>1?"s":""} · ${s} mm/irrig.</div>
        </div>
      </div>
      ${g}
      ${v.length?`<div class="iw-section-lbl">Irrigations effectuées</div>${v.map(p).join("")}`:""}
      ${w.length?`
        <div class="iw-section-lbl" style="margin-top:${v.length?"12px":"0"}">Irrigations planifiées</div>
        ${w.slice(0,6).map(p).join("")}
        ${w.length>6?`
          <div id="iw-apercu-rest" style="display:none">${w.slice(6).map(p).join("")}</div>
          <button class="iw-occ-more" id="iw-apercu-more">... et ${w.length-6} irrigation${w.length-6>1?"s":""} de plus</button>`:""}`:""}
    `}function $(){const r=i?i.ids.length:t.size,v=m(),w=n.querySelector("#iw-next-btn");w&&(w.disabled=r===0||v.length===0)}function k(){var v,w,f,p;i||C(n,t,$);const r=()=>{const d=m(),b=n.querySelector(".iw-preview-ok, .iw-preview-empty");b&&(b.className=d.length>0?"iw-preview-ok":"iw-preview-empty",b.textContent=d.length>0?`↗ ${d.length} irrigations · ${d.length*s} mm au total`:"Ajustez les dates et la fréquence"),$()};(v=n.querySelector("#iw-debut"))==null||v.addEventListener("change",d=>{e=d.target.value,r()}),(w=n.querySelector("#iw-fin"))==null||w.addEventListener("change",d=>{l=d.target.value,r()}),(f=n.querySelector("#iw-qty"))==null||f.addEventListener("input",d=>{s=parseInt(d.target.value)||1,r()}),(p=n.querySelector("#iw-freq"))==null||p.addEventListener("input",d=>{a=parseInt(d.target.value)||1,r()})}function L(){var v;const r=n.querySelector(".iw-modal");r.querySelector(".iw-modal-body").innerHTML=o==="form"?u():y(),r.querySelector("#iw-back-btn").style.display=o==="form"?"none":"",r.querySelector("#iw-next-btn").style.display=o==="form"?"":"none",r.querySelector("#iw-conf-btn").style.display=o==="form"?"none":"",o==="form"?($(),k()):(v=n.querySelector("#iw-apercu-more"))==null||v.addEventListener("click",w=>{n.querySelector("#iw-apercu-rest").style.display="",w.target.remove()})}n.innerHTML=`
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
    </div>`,n.querySelector("#iw-close").addEventListener("click",c),n.querySelector("#iw-cancel").addEventListener("click",c),n.querySelector("#iw-back-btn").addEventListener("click",()=>{o="form",L()}),n.querySelector("#iw-next-btn").addEventListener("click",()=>{o="apercu",L()}),n.querySelector("#iw-conf-btn").addEventListener("click",()=>{const r=m(),v=i?new Set(i.ids):t;Y(v,()=>{var p,d;const w=U();r.forEach(b=>{const E=b.toISOString().slice(0,10);v.forEach(x=>{S.push({iso:E,mm:s,real:E<=j,plotId:x,fromStrategy:!0,seasonId:w})})});const f=[...v].map(b=>{var E;return(E=I.find(x=>x.id===b))==null?void 0:E.name}).filter(Boolean);T(),c(),V({title:"Saison enregistrée",params:[{label:"Début",value:D(((p=r[0])==null?void 0:p.toISOString().slice(0,10))??"")},{label:"Fin",value:D(((d=r[r.length-1])==null?void 0:d.toISOString().slice(0,10))??"")},{label:"Quantité",value:`${s} mm/irrig.`},{label:"Fréquence",value:`tous les ${a} jours`},{label:"Irrigations générées",value:`${r.length*v.size}`}],plotNames:f,addedCount:r.length*v.size,filterPlotId:v.size===1?[...v][0]:null})})}),L()}function si(i,t){let e=i.iso,l=i.mm;const{ov:s,close:a}=A();s.innerHTML=`
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
      </div>
      <div class="iw-modal-ft iw-modal-ft--spread">
        <button class="iw-btn iw-btn--danger" id="iw-delete">Supprimer</button>
        <div style="display:flex;gap:8px">
          <button class="iw-btn iw-btn--sec" id="iw-cancel">Annuler</button>
          <button class="iw-btn iw-btn--pri" id="iw-save">Enregistrer</button>
        </div>
      </div>
    </div>`,s.querySelector("#iw-close").addEventListener("click",a),s.querySelector("#iw-cancel").addEventListener("click",a),s.querySelector("#iw-edit-date").addEventListener("change",o=>{e=o.target.value}),s.querySelector("#iw-edit-qty").addEventListener("input",o=>{const n=parseInt(o.target.value);n>0&&(l=n)}),s.querySelector("#iw-delete").addEventListener("click",()=>{const o=S.indexOf(i);o>-1&&S.splice(o,1),T(),a(),t()}),s.querySelector("#iw-save").addEventListener("click",()=>{i.iso=e,i.mm=l,i.real=e<=j,T(),a(),t()})}function R(i,t){let e=!1,l=!1;const{ov:s,close:a}=A();function o(){return new Set(S.filter(c=>c.plotId===i&&c.fromStrategy&&c.seasonId).map(c=>c.seasonId))}function n(){var y,$,k,L,r,v,w;const c=s.querySelector(".iw-modal-body");c.innerHTML=`
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
      ${e?`
      <div class="iw-confirm-box">
        <div class="iw-confirm-box-txt">Supprimer toutes les occurrences futures ?</div>
        <div class="iw-confirm-box-btns">
          <button class="iw-btn iw-btn--sec iw-btn--sm" id="stop-cancel">Annuler</button>
          <button class="iw-btn iw-btn--danger iw-btn--sm" id="stop-confirm">Confirmer</button>
        </div>
      </div>`:""}
      ${l?`
      <div class="iw-confirm-box">
        <div class="iw-confirm-box-txt">Supprimer toutes les irrigations de cette saison ?</div>
        <div class="iw-confirm-box-btns">
          <button class="iw-btn iw-btn--sec iw-btn--sm" id="del-cancel">Annuler</button>
          <button class="iw-btn iw-btn--danger iw-btn--sm" id="del-confirm">Supprimer tout</button>
        </div>
      </div>`:""}`;const m=I.find(f=>f.id===i),u=m?{ids:[m.id],label:m.name}:null;(y=c.querySelector("#strat-modify"))==null||y.addEventListener("click",()=>{a(),P(u)}),($=c.querySelector("#strat-stop"))==null||$.addEventListener("click",()=>{e=!0,l=!1,n()}),(k=c.querySelector("#strat-delete"))==null||k.addEventListener("click",()=>{l=!0,e=!1,n()}),(L=c.querySelector("#stop-cancel"))==null||L.addEventListener("click",()=>{e=!1,n()}),(r=c.querySelector("#stop-confirm"))==null||r.addEventListener("click",()=>{const f=o();S.splice(0,S.length,...S.filter(p=>!(p.plotId===i&&f.has(p.seasonId)&&!p.real))),T(),a(),t()}),(v=c.querySelector("#del-cancel"))==null||v.addEventListener("click",()=>{l=!1,n()}),(w=c.querySelector("#del-confirm"))==null||w.addEventListener("click",()=>{const f=o();S.splice(0,S.length,...S.filter(p=>!(p.plotId===i&&f.has(p.seasonId)))),T(),a(),t()})}s.innerHTML=`
    <div class="iw-modal" style="max-width:440px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Gérer la saison</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body"></div>
      <div class="iw-modal-ft">
        <button class="iw-btn iw-btn--sec" id="iw-cancel">Fermer</button>
      </div>
    </div>`,s.querySelector("#iw-close").addEventListener("click",a),s.querySelector("#iw-cancel").addEventListener("click",a),n()}function ni(){var c,m;const i=new Set(I.map(u=>u.id)),t=[...S].sort((u,y)=>u.iso<y.iso?-1:1);let e=((c=t[0])==null?void 0:c.iso)??j,l=((m=t[t.length-1])==null?void 0:m.iso)??j;const{ov:s,close:a}=A();function o(){return F().map(u=>{const y=i.has(u.id);return`<div class="iw-plot-row${y?" iw-plot-row--sel":""}" data-pid="${u.id}">
        ${N(y)}
        <div class="iw-plot-name">${u.name}</div>
      </div>`}).join("")}s.innerHTML=`
    <div class="iw-modal" style="max-width:560px;width:95%">
      <div class="iw-modal-hd">
        <span class="iw-modal-title">Export CSV</span>
        <button class="iw-modal-close" id="iw-close">×</button>
      </div>
      <div class="iw-modal-body">
        <div class="iw-two-col">
          <div class="iw-panel iw-panel--scroll">
            <div class="iw-section-lbl">Parcelles</div>
            <div id="iw-export-plots">${o()}</div>
          </div>
          <div class="iw-panel iw-panel--params">
            <div class="iw-section-lbl" style="margin-top:0">Période</div>
            <div class="iw-field">
              <label class="iw-label">Du</label>
              <input type="date" class="iw-input" id="iw-exp-start" value="${e}" />
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
    </div>`,s.querySelector("#iw-close").addEventListener("click",a),s.querySelector("#iw-cancel").addEventListener("click",a),s.querySelector("#iw-exp-start").addEventListener("change",u=>{e=u.target.value}),s.querySelector("#iw-exp-end").addEventListener("change",u=>{l=u.target.value});function n(){s.querySelectorAll("#iw-export-plots .iw-plot-row").forEach(u=>{u.addEventListener("click",()=>{const y=+u.dataset.pid;i.has(y)?i.delete(y):i.add(y),s.querySelector("#iw-export-plots").innerHTML=o(),n()})})}n(),s.querySelector("#iw-do-export").addEventListener("click",()=>{const u=F().filter(p=>i.has(p.id));if(!u.length){ei("Sélectionnez au moins une parcelle");return}const y=new Set;for(const p of S)p.iso>=e&&p.iso<=l&&y.add(p.iso);const $=[...y].sort(),k=["Date",...u.map(p=>p.name)].join(";"),L=$.map(p=>{const d=u.map(b=>{const E=S.filter(x=>x.iso===p&&x.plotId===b.id).reduce((x,g)=>x+g.mm,0);return E>0?E:""});return[p,...d].join(";")}),r=[k,...L].join(`
`),v=new Blob([r],{type:"text/csv;charset=utf-8;"}),w=URL.createObjectURL(v),f=document.createElement("a");f.href=w,f.download=`irrigations_${e}_${l}.csv`,document.body.appendChild(f),f.click(),setTimeout(()=>{URL.revokeObjectURL(w),f.remove()},100),a()})}function Q(i=null){let t=i?String(i):"all";const{ov:e,close:l}=A();function s(){return t==="all"?S:S.filter(c=>c.plotId===+t)}function a(){if(t==="all")return null;const c=I.find(m=>String(m.id)===t);return c?{ids:[c.id],label:c.name}:null}const o=F().map(c=>`<option value="${c.id}"${String(c.id)===t?" selected":""}>${c.name}</option>`).join("");e.innerHTML=`
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
            ${o}
          </select>
        </div>
        <div class="iw-toolbar-actions">
          <button class="iw-btn iw-btn--sec" id="iw-strat-btn" style="display:none"><i class="bi bi-sliders"></i> Gérer la saison</button>
          <button class="iw-btn iw-btn--sec" id="iw-export-btn"><i class="bi bi-download"></i> Export CSV</button>
        </div>
      </div>
      <div class="iw-full-body" id="iw-full-body"></div>
    </div>`,e.querySelector("#iw-close").addEventListener("click",l),e.querySelector("#iw-filter").addEventListener("change",c=>{t=c.target.value,n()}),e.querySelector("#iw-export-btn").addEventListener("click",ni);function n(){var w,f,p;const c=e.querySelector("#iw-full-body"),m=s(),u=m.some(d=>d.fromStrategy),y=e.querySelector("#iw-strat-btn");if(y.style.display=u&&t!=="all"?"":"none",y.onclick=()=>R(+t,n),!m.length){c.innerHTML=`
        <div class="iw-empty">
          <i class="bi bi-calendar3" style="font-size:36px;opacity:.2"></i>
          <div>Aucune irrigation enregistrée pour cette sélection</div>
          <div class="iw-empty-actions">
            <button class="iw-btn iw-btn--pri" id="iw-add-saisie"><i class="bi bi-droplet-fill"></i> Saisir une irrigation</button>
            <button class="iw-btn iw-btn--sec" id="iw-add-saison"><i class="bi bi-arrow-repeat"></i> Saisir une saison</button>
          </div>
        </div>`,c.querySelector("#iw-add-saisie").addEventListener("click",()=>{l(),H(a())}),c.querySelector("#iw-add-saison").addEventListener("click",()=>{l(),P(a())});return}const $={};c.querySelectorAll("details[data-section]").forEach(d=>{$[d.dataset.section]=d.open});const k=[...m].filter(d=>!d.real).sort((d,b)=>d.iso<b.iso?-1:1),L=[...m].filter(d=>d.real).sort((d,b)=>d.iso>b.iso?-1:1);function r(d){var q;const b=S.indexOf(d),E=d.real?"#FF8500":"#FFB705",[,x,g]=d.iso.split("-"),h=((q=I.find(M=>M.id===d.plotId))==null?void 0:q.name)??"—";return`<div class="iw-list-item">
        <div class="iw-list-stripe" style="background:${E}"></div>
        <div class="iw-list-date"><span style="font-size:15px;font-weight:700;color:${E}">${g}</span><span style="font-size:10px;color:${E}">/${x}</span></div>
        <div style="flex:1">
          <div class="iw-list-label">${h}</div>
          <div class="iw-list-status" style="color:${E}">${d.real?"Réalisée":"Planifiée"}</div>
        </div>
        <div class="iw-list-mm" style="color:${E}">${d.mm} mm</div>
        <button class="iw-edit-btn" data-iidx="${b}">✎</button>
        <button class="iw-del-btn"  data-iidx="${b}">🗑</button>
      </div>`}const v=u&&t!=="all"?`<div style="display:flex;justify-content:flex-end;margin-bottom:10px">
           <button class="iw-strat-inline-btn" id="iw-strat-inline"><i class="bi bi-sliders"></i> Modifier la saison</button>
         </div>`:`<div class="iw-add-bar">
           <button class="iw-btn iw-btn--sec" id="iw-add-saisie"><i class="bi bi-droplet-fill"></i> Ajouter une irrigation</button>
           <button class="iw-btn iw-btn--sec" id="iw-add-saison"><i class="bi bi-arrow-repeat"></i> Ajouter une saison</button>
         </div>`;c.innerHTML=`
      ${ti(m)}
      ${ii(m)}
      ${v}
      ${L.length?`
        <details class="iw-section-details" data-section="effectuees" open>
          <summary class="iw-section-summary">Effectuées <span class="iw-section-count">${L.length}</span></summary>
          <div class="iw-section-body">${L.map(r).join("")}</div>
        </details>`:""}
      ${k.length?`
        <details class="iw-section-details" data-section="planifiees" open>
          <summary class="iw-section-summary">Planifiées <span class="iw-section-count">${k.length}</span></summary>
          <div class="iw-section-body">${k.map(r).join("")}</div>
        </details>`:""}
    `,c.querySelectorAll("details[data-section]").forEach(d=>{const b=d.dataset.section;b in $&&(d.open=$[b])}),c.querySelectorAll(".iw-edit-btn").forEach(d=>{d.addEventListener("click",()=>{const b=S[+d.dataset.iidx];b&&si(b,n)})}),c.querySelectorAll(".iw-del-btn").forEach(d=>{d.addEventListener("click",()=>{const b=+d.dataset.iidx;b>=0&&(S.splice(b,1),T(),n())})}),(w=c.querySelector("#iw-add-saisie"))==null||w.addEventListener("click",()=>{l(),H(a())}),(f=c.querySelector("#iw-add-saison"))==null||f.addEventListener("click",()=>{l(),P(a())}),(p=c.querySelector("#iw-strat-inline"))==null||p.addEventListener("click",()=>R(+t,n))}n()}(()=>{const i=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(i),document.addEventListener("mouseover",t=>{const e=t.target.closest("[data-tip]");if(!e){i.style.opacity="0";return}i.textContent=e.dataset.tip,i.style.opacity="1"}),document.addEventListener("mousemove",t=>{i.style.left=t.clientX+14+"px",i.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var e;(e=t.relatedTarget)!=null&&e.closest("[data-tip]")||(i.style.opacity="0")})})();window.WebIrrig={openSaisie:H,openSaison:P,openVoirIrrigations:Q};
