import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as u,R as ae,g as Ne,s as _}from"./irrigations-C22Dtsoo.js";import{I as Oe}from"./constants-D_Yu58_o.js";import{p as fe}from"./plots-DHZTuoR0.js";import{o as _e}from"./orgs-DnFmvGlp.js";import{u as rt}from"./breadcrumb-CzFWtd6d.js";import{d as De,e as it,c as st,f as lt}from"./store-BGemiHCf.js";import"./irrigation-web-DGWI0Jez.js";const Ue=1,ge=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let te=null,U=ge?fe:fe.filter(e=>e.orgId===Ue);const E=new Date().toISOString().split("T")[0];let O=null,we=!1,Z=0,ie=!1,be=!1,re=!1;const Ae={};let Ee=!0,qe=!0,pe=!0,Le=!0,ke=!0,ve=!0;function X(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}function K(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]} ${e.split("-")[0]}`}function ye(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]}`}function nt(e){const[,t,r]=e.split("-");return`${r}/${t}`}const at=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function He(e){const[t,r,i]=e.split("-").map(Number);return new Date(Date.UTC(t,r-1,i)).getUTCDay()}function ot(e){const[t,r,i]=e.split("-").map(Number),n=new Date(Date.UTC(t,r-1,i)),l=n.getUTCDay()||7;n.setUTCDate(n.getUTCDate()+4-l);const c=new Date(Date.UTC(n.getUTCFullYear(),0,1));return Math.ceil(((n-c)/864e5+1)/7)}function dt(e){return[e.name+(e.area?` (${e.area} ha)`:""),e.crop,e.irrigation].filter(Boolean).join(" — ")}const Te=new Set(["Non irrigué","Non renseigné",""]);function Ye(e){return!!e.irrigation&&!Te.has(e.irrigation)}function le(e,t){return Math.round(e*(t??0)*10)}function W(e){return e.toLocaleString("fr-FR")+" m³"}function ct(e){var r;const t=lt(e).volumeMax;return t!==void 0?t:((r=_e.find(i=>i.id===e))==null?void 0:r.volumeMax)??null}function Qe(e){return st(e).volumeMaxM3??null}function he(){return[...U].sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function We(e){return e.id%3===2}function Ge(e){return 25+e.id*7%20}function ut(e){return e.id%9===2}function pt(e,t){const[,r,i]=t.split("-").map(Number);return Math.min(65,Math.max(5,30+(e.id*7+r*3+i*2)%30))}function Je(e){const t=(e.irrigation||"").toLowerCase();return["rampe","pivot","enrouleur"].some(r=>t.includes(r))}function vt(e){if(!Je(e))return[];const t=[];let r=e.id*17,i=new Date(X(E,-45));const n=new Date(X(E,-1));for(;i<=n;){const l=i.toISOString().split("T")[0],c=r%7-3;r=(r*31+17)%1e3,t.push({iso:l,mm:Math.max(8,15+c),real:!0,plotId:e.id,fromDetector:!0}),i.setDate(i.getDate()+5+r%3),r=(r*31+17)%1e3}return t}function Ie(e,t={}){const{allBtn:r=!1}=t,i=he().map(n=>`
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${n.id}" />
      <span class="irr-msel-name">${dt(n)}</span>
    </label>`).join("");return`<div class="irr-msel" id="${e}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${i}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${r?'<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>':""}
    </div>
  </div>`}function Me(e,t){const r=e.querySelector(`#${t}`);if(!r)return;const i=r.querySelector(".irr-msel-search"),n=r.querySelector(".irr-msel-count"),l=r.querySelector(".irr-msel-all-btn"),c=()=>{const a=r.querySelectorAll(".irr-msel-cb:checked").length;n.textContent=`${a} sélectionnée${a!==1?"s":""}`};i.addEventListener("input",()=>{const a=i.value.toLowerCase();r.querySelectorAll(".irr-msel-item").forEach(h=>{h.style.display=h.querySelector(".irr-msel-name").textContent.toLowerCase().includes(a)?"":"none"})}),r.querySelectorAll(".irr-msel-cb").forEach(a=>a.addEventListener("change",c)),l==null||l.addEventListener("click",()=>{const a=[...r.querySelectorAll(".irr-msel-cb")].filter(v=>v.closest(".irr-msel-item").style.display!=="none"),h=a.some(v=>!v.checked);a.forEach(v=>{v.checked=h}),c()})}function me(e,t){const r=e.querySelector(`#${t}`);return r?[...r.querySelectorAll(".irr-msel-cb:checked")].map(i=>+i.value):[]}function oe(e,t){var n;(n=document.querySelector(".irr-save-confirm"))==null||n.remove();const r=document.createElement("div");r.className="irr-save-confirm",r.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(l=>`<div>${l}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(r);const i=()=>{r.remove(),V(!0)};r.addEventListener("click",l=>{l.target===r&&i()}),r.querySelector("#irr-confirm-close").addEventListener("click",i)}function Ve(e,t,r){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
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
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",c=>{c.target===i&&n()}),i.querySelector("#irr-cf-close").addEventListener("click",n),i.querySelector("#irr-cf-cancel").addEventListener("click",n),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),r()})}function mt(e,t,r){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>${e}</span>
        <button class="irr-edit-close" id="irr-dc-close">×</button>
      </div>
      <div class="irr-edit-body" style="font-size:13px;color:var(--txt);line-height:1.5">
        <p style="margin:0;color:var(--txt2)">${t}</p>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-dc-cancel">Annuler</button>
        <button class="iw-btn iw-btn--danger" id="irr-dc-ok">Supprimer</button>
      </div>
    </div>`,document.body.appendChild(i),i.addEventListener("click",l=>{l.target===i&&i.remove()}),i.querySelector("#irr-dc-close").addEventListener("click",()=>i.remove()),i.querySelector("#irr-dc-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#irr-dc-ok").addEventListener("click",()=>{i.remove(),r()})}function ft(e){if(e.length<2)return"";const t=[...e].sort((b,q)=>b.iso<q.iso?-1:1),r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],i=new Date(t[0].iso),n=new Date(t[t.length-1].iso),l=Math.max(n-i,1),c=500,a=24,h=5,v=5,D=a-v-4,y=D-v-3,T=a+h+13,g=T+2,B=v+2,I=b=>Math.round(B+(b-i)/l*(c-2*B)),p=b=>{const[,q,S]=b.split("-");return`${parseInt(S)}/${parseInt(q)}`},M=[],d=new Date(i.getFullYear(),i.getMonth()+1,1);for(;d<=n;)M.push(new Date(d)),d.setMonth(d.getMonth()+1);const m=M.map(b=>`<line x1="${I(b)}" y1="${a-6}" x2="${I(b)}" y2="${a+h+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),x=[i,...M,n],F=x.slice(0,-1).map((b,q)=>{const S=I(b),s=I(x[q+1]);return s-S<16?"":`<text x="${Math.round((S+s)/2)}" y="${y}" font-size="9" fill="#B0AEA8" text-anchor="middle">${r[b.getMonth()]}</text>`}).join(""),z=t.map(b=>{const q=b.real?"#FF8500":"#FFB705",S=I(new Date(b.iso)),s=`${ye(b.iso)} · ${b.mm} mm`;return`<circle cx="${S}" cy="${D}" r="${v}" fill="${q}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${S}" cy="${D}" r="${v+6}" fill="transparent" pointer-events="all" data-tip="${s}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${c}" height="${g}" viewBox="0 0 ${c} ${g}" style="width:100%;display:block">
      ${F}<rect x="0" y="${a}" width="${c}" height="${h}" rx="${h/2}" fill="#E0DED8"/>${m}${z}
      <text x="1" y="${T}" font-size="9" fill="#B0AEA8">${p(t[0].iso)}</text>
      <text x="${c-1}" y="${T}" font-size="9" fill="#B0AEA8" text-anchor="end">${p(t[t.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function gt(e){const t=e.filter(l=>l.real),r=e.filter(l=>!l.real),i=t.reduce((l,c)=>l+c.mm,0),n=r.reduce((l,c)=>l+c.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${i} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${n} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${i+n} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function Ce(){var T;const e=document.getElementById("irr-vol-banner-wrap");if(!e)return;const t=ge?te:Ue;if(!t){e.innerHTML="";return}const r=new Set(U.filter(g=>g.orgId===t).map(g=>g.id));ge||U.forEach(g=>r.add(g.id));const i=new Map(U.map(g=>[g.id,g])),n=u.filter(g=>r.has(g.plotId)&&g.real).reduce((g,B)=>{var I;return g+le(B.mm,((I=i.get(B.plotId))==null?void 0:I.area)??0)},0),l=u.filter(g=>r.has(g.plotId)&&!g.real).reduce((g,B)=>{var I;return g+le(B.mm,((I=i.get(B.plotId))==null?void 0:I.area)??0)},0),c=n+l,a=ct(t),h=a?Math.min(100,Math.round(n/a*100)):0,v=a?Math.min(100-h,Math.round(l/a*100)):0,D=h+v,y=g=>g!=null?g.toLocaleString("fr-FR"):"";e.innerHTML=`
    <div class="irr-vol-banner">
      <div class="irr-vol-main">
        <div class="irr-vol-title">Volume irrigation</div>
        <div class="irr-vol-total">${W(c)}${a?` <span style="font-size:11px;font-weight:400;color:var(--txt3)">/ ${W(a)}</span>`:""}</div>
        <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${W(n)}</span> effectués · <span style="color:#FFB705">▪ ${W(l)}</span> planifiés</div>
      </div>
      <div class="irr-vol-bar-wrap">
        <div class="irr-vol-bar-label">Consommation d'eau sur mon exploitation</div>
        ${a?"":'<div class="irr-vol-bar-nomax">Définissez un volume limité →</div>'}
        <div class="irr-vol-bar-bg">
          <div class="irr-vol-bar-real" style="width:${h}%"></div>
          <div class="irr-vol-bar-plan" style="width:${v}%"></div>
        </div>
        ${a?(()=>{const g=c-a;return g>0?`<div class="irr-vol-bar-pct" style="color:#E05252">Dépassement ${W(g)}</div>`:`<div class="irr-vol-bar-pct">${D}% consommé${D>=90?" ⚠":""}</div>`})():""}
      </div>
      <div class="irr-vol-controls">
        <div class="irr-vol-ctrl-row">
          <span class="irr-vol-ctrl-lbl">Volume limité :</span>
          <input class="irr-vol-input" id="irr-vol-max-inp" type="text" inputmode="numeric" placeholder="—" value="${y(a)}" />
          <span class="irr-vol-ctrl-lbl">m³</span>
        </div>
      </div>
    </div>`,(T=e.querySelector("#irr-vol-max-inp"))==null||T.addEventListener("change",g=>{const B=g.target.value.replace(/\s/g,"").replace(/\./g,"").replace(/,/g,""),I=B!==""?parseInt(B):null;I!==null&&(g.target.value=I.toLocaleString("fr-FR")),it(t,{volumeMax:I}),Ce()})}function V(e=!1){var b,q,S;Ce();const t=document.getElementById("irr-right"),r=X(E,60),i=[...u.map(s=>s.iso),...ae.filter(s=>s.iso<=r).map(s=>s.iso),...re?[X(E,-45)]:[],X(E,-1),r];if(!u.length&&!ae.length){t.innerHTML=`<div class="irr-pr-empty" style="padding-top:60px"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const n=[...i].sort()[0],l=u.length?[...u].map(s=>s.iso).sort().at(-1):null,c=l&&l>r?l:r,a=new Date(c);a.setMonth(a.getMonth()+Z);const h=a.toISOString().split("T")[0],v=e?null:((b=t.querySelector("#irr-gl-body"))==null?void 0:b.scrollLeft)??null,D=[];let y=new Date(n);const T=new Date(h);for(;y<=T;)D.push(y.toISOString().split("T")[0]),y.setDate(y.getDate()+1);const g={};for(const s of ae)g[s.iso]=s.mm;function B(s){if(s<=E||s>X(E,13))return 0;const[,$,w]=s.split("-").map(Number),A=($*17+w*13)%100;return A<65?0:3+A%9}function I(s,$,w){const A=`${s}_${$}`;if(Ae[A]!==void 0)return Ae[A];if(!w)return 0;const[,C,P]=$.split("-").map(Number);if((s*13+C*7+P*3)%100<12)return 0;const L=.75+(s*11+P*5)%50/100;return Math.round(w*L)}const p=X(E,7);let M="",d="",m=0,x=null;for(const s of D){const $=s===E,w=He(s),A=w===0,C=A?" irr-gl-th--week-end":"";x===null&&(x=ot(s)),m++;const P=ie&&s>E&&s<=p;M+=`<th class="irr-gl-th${$?" irr-gl-th--today":""}${C}${P?" irr-gl-th--advisor-range":""}"><span class="irr-gl-day-name">${at[w]}</span>${nt(s)}</th>`;const j=s===D[D.length-1];(A||j)&&(d+=`<th class="irr-gl-week-hd${A?" irr-gl-th--week-end":""}" colspan="${m}">S${x}</th>`,m=0,x=null),ie&&s===p&&(M+='<th class="irr-gl-th irr-gl-th--advisor">Reco J+7</th>',d+='<th class="irr-gl-week-hd"></th>')}function F(s){const $=re?vt(s):[],w=ie&&We(s),A=be&&ut(s),C=Je(s);let P="";for(const k of D){const G=k===E,J=u.filter(H=>H.iso===k&&H.plotId===s.id),Y=J.length===0?$.filter(H=>H.iso===k):[],R=J.filter(H=>!H.detectorDismissed).filter(H=>H.detectorConfirmed?re&&ke:H.real?Ee:qe),Q=Le?Y:[],Be=[...R,...Q],Pe=Be.reduce((H,ee)=>H+ee.mm,0),Ke=Be.some(H=>H.real),Ze=(s.id*7+3)%3-1,Re=X(k,Ze),de=I(s.id,k,g[Re]??B(Re));let je="";de&&pe&&(je=re&&C?`<span class="irr-gl-rain irr-gl-rain--edit" data-rain-plotid="${s.id}" data-rain-iso="${k}" data-rain-mm="${de}">${de} mm</span>`:`<span class="irr-gl-rain">${de} mm</span>`);let $e="";if(Pe){const H=Ke?"#E07820":"#FFB705",ee=R.map(N=>u.indexOf(N)).filter(N=>N>=0).join(","),ue=Q.length?'<span class="irr-gl-det-badge" title="Détecté automatiquement">D</span>':R.some(N=>N.detectorConfirmed)?'<span class="irr-gl-conf-badge" title="Irrigation confirmée">C</span>':"",xe=Q.reduce((N,Se)=>N+Se.mm,0);$e=`<span class="irr-gl-val irr-gl-irrig" style="color:${H};cursor:pointer"${ee?` data-idxs="${ee}" data-iso="${k}"`:` data-det-plotid="${s.id}" data-det-plotname="${s.name}" data-det-iso="${k}" data-det-mm="${xe}"`}>${Pe} mm${ue}</span>`}else $e=`<button class="irr-gl-add" data-plot-id="${s.id}" data-plot-name="${s.name}" data-iso="${k}">+</button>`;let ze="";A&&ve&&k<E&&(ze=`<span class="irr-gl-res">${pt(s,k)} mm</span>`);let ce="";pe&&(ce+=`<div class="irr-gl-slot">${je}</div>`),ce+=`<div class="irr-gl-slot">${$e}</div>`,A&&ve&&(ce+=`<div class="irr-gl-slot">${ze}</div>`);const et=He(k)===0,tt=w&&k>E&&k<=p;if(P+=`<td class="irr-gl-td${G?" irr-gl-td--today":""}${et?" irr-gl-td--week-end":""}${tt?" irr-gl-td--advisor-range":""}">${ce}</td>`,ie&&k===p){let H="";if(w){const ee=Ge(s),ue=u.filter(N=>N.plotId===s.id&&N.iso>E&&N.iso<=p).reduce((N,Se)=>N+Se.mm,0),xe=ue>=ee?"#24B066":"#E05252";H=`<span class="irr-gl-advisor">${ee} mm</span><span style="display:block;font-size:10px;font-weight:600;color:${xe}">${ue} mm planifié</span>`}P+=`<td class="irr-gl-td irr-gl-td--advisor">${H}</td>`}}const j=[s.crop,s.irrigation].filter(Boolean).join(" · "),L=s.area?`<span class="irr-gl-plot-area">(${s.area} ha)</span>`:"";let o="";const f=Qe(s.id);if(f){const k=s.area??0,G=u.filter(R=>R.plotId===s.id&&R.real).reduce((R,Q)=>R+le(Q.mm,k),0),J=u.filter(R=>R.plotId===s.id&&!R.real).reduce((R,Q)=>R+le(Q.mm,k),0),Y=G+J;if(Y>0)if(Y>f)o=`<span class="irr-gl-plot-deficit">Dépassement ${W(Y-f)}</span>`;else{const R=Math.round(G/f*100),Q=Math.min(100-R,Math.round(J/f*100));o=`<span class="irr-gl-plot-mini-bar"><span class="irr-gl-plot-mini-r" style="width:${R}%"></span><span class="irr-gl-plot-mini-p" style="width:${Q}%"></span></span>`}}return`<tr data-row-plot="${s.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${s.id}">${s.name}</span>${L}${j?`<span class="irr-gl-plot-sub">${j}</span>`:""}${o}</td>${P}</tr>`}const z=he().map(F).join("");t.innerHTML=`
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-gl-legend">
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="real-irrig" ${Ee?"checked":""}><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. effectuée</label>
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="plan-irrig" ${qe?"checked":""}><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</label>
          ${re?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="detected" ${Le?"checked":""}><span class="irr-gl-det-badge">D</span>&nbsp;Irrig. détectée</label><label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="confirmed" ${ke?"checked":""}><span class="irr-gl-conf-badge">C</span>&nbsp;Irrig. corrigée</label>`:""}
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="rain" ${pe?"checked":""}><span class="irr-gl-dot" style="background:#3A7FC1"></span>Pluie</label>
          ${be?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="reservoir" ${ve?"checked":""}><span class="irr-gl-dot" style="background:#9E9E9E"></span>Réservoir</label>`:""}
        </div>
        <div class="irr-gl-scroll-top" id="irr-gl-scroll-top">
          <div class="irr-gl-scroll-inner" id="irr-gl-scroll-inner"></div>
        </div>
      </div>
      <div class="irr-gl-body" id="irr-gl-body">
        <table class="irr-gl-table" id="irr-gl-table">
          <thead id="irr-gl-thead">
            <tr><th class="irr-gl-plot-hd irr-gl-week-corner"></th>${d}</tr>
            <tr><th class="irr-gl-plot-hd">Parcelles</th>${M}</tr>
          </thead>
          <tbody>${z}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${Z===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${Z>0?`+${Z} mois au-delà de la saison`:`Fin de saison : ${ye(c)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var C;const s=t.querySelector("#irr-gl-body"),$=t.querySelector("#irr-gl-table"),w=t.querySelector("#irr-gl-scroll-top"),A=t.querySelector("#irr-gl-scroll-inner");if(!(!s||!$||!w||!A))if(A.style.width=$.offsetWidth+"px",w.addEventListener("scroll",()=>{s.scrollLeft=w.scrollLeft}),s.addEventListener("scroll",()=>{w.scrollLeft=s.scrollLeft}),v!==null)s.scrollLeft=v,w.scrollLeft=v;else{const P=t.querySelector(".irr-gl-th--today");if(P){const L=P.previousElementSibling??P,o=((C=t.querySelector(".irr-gl-plot-hd"))==null?void 0:C.offsetWidth)??120,f=L.offsetLeft-o;s.scrollLeft=f,w.scrollLeft=f}}}),(q=t.querySelector("#irr-gl-prev-month"))==null||q.addEventListener("click",()=>{Z>0&&(Z--,V())}),(S=t.querySelector("#irr-gl-next-month"))==null||S.addEventListener("click",()=>{Z++,V()}),t.querySelectorAll(".irr-gl-filter").forEach(s=>{s.addEventListener("change",()=>{const $=s.dataset.filter;$==="real-irrig"?Ee=s.checked:$==="plan-irrig"?qe=s.checked:$==="rain"?pe=s.checked:$==="detected"?Le=s.checked:$==="confirmed"?ke=s.checked:$==="reservoir"&&(ve=s.checked),V()})}),t.querySelectorAll(".irr-gl-irrig").forEach(s=>{s.addEventListener("click",()=>{s.dataset.idxs?bt(s.dataset.idxs.split(",").map(Number),s.dataset.iso):s.dataset.detPlotid&&ht(+s.dataset.detPlotid,s.dataset.detPlotname,s.dataset.detIso,+s.dataset.detMm)})}),t.querySelectorAll(".irr-gl-rain--edit").forEach(s=>{s.addEventListener("click",()=>{yt(+s.dataset.rainPlotid,s.dataset.rainIso,+s.dataset.rainMm)})}),t.querySelectorAll(".irr-gl-add").forEach(s=>{s.addEventListener("click",()=>{wt(s.dataset.plotId,s.dataset.plotName,s.dataset.iso)})}),t.querySelectorAll(".irr-gl-plot-link").forEach(s=>{s.addEventListener("click",()=>{const $=U.find(w=>String(w.id)===s.dataset.plotId);$&&Xe($)})})}function bt(e,t){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const r=document.createElement("div");r.className="irr-edit-overlay";const i=e.map(l=>u[l]).filter(Boolean);r.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${K(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${i.map((l,c)=>{const a=U.find(v=>v.id===l.plotId);return`<div class="irr-edit-row">
            <span class="irr-edit-label">${a?a.name:`Parcelle ${l.plotId}`}</span>
            <input type="number" class="irr-edit-qty" data-i="${c}" value="${l.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${c}">🗑</button>
          </div>`}).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#irr-edit-close").addEventListener("click",()=>r.remove()),r.querySelector("#irr-edit-cancel").addEventListener("click",()=>r.remove()),r.querySelectorAll(".irr-edit-del").forEach(l=>{l.addEventListener("click",()=>{const c=i[+l.dataset.i],a=u.indexOf(c);a>=0&&(u.splice(a,1),_()),r.remove()})}),r.querySelector("#irr-edit-save").addEventListener("click",()=>{r.querySelectorAll(".irr-edit-qty").forEach(l=>{const c=i[+l.dataset.i],a=parseInt(l.value);c&&a>0&&(c.mm=a,c.real=t<=E)}),_(),r.remove()})}function yt(e,t,r){var c;(c=document.querySelector(".irr-edit-overlay"))==null||c.remove();const i=U.find(a=>a.id===e),n=i?i.name:`Parcelle ${e}`,l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier la pluie — ${K(t)}</span>
        <button class="irr-edit-close" id="irr-rain-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${n}</span>
          <input type="number" id="irr-rain-qty" value="${r}" min="0" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-rain-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-rain-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(l),l.addEventListener("click",a=>{a.target===l&&l.remove()}),l.querySelector("#irr-rain-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-save").addEventListener("click",()=>{const a=parseInt(l.querySelector("#irr-rain-qty").value);!isNaN(a)&&a>=0&&(Ae[`${e}_${t}`]=a),l.remove(),V()})}function ht(e,t,r,i){var c;(c=document.querySelector(".irr-edit-overlay"))==null||c.remove();let n=i;const l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigation détectée — ${K(r)}</span>
        <button class="irr-edit-close" id="irr-det-ed-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${t}</span>
          <input type="number" id="irr-det-ed-qty" value="${i}" min="1" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--danger" id="irr-det-ed-del">Supprimer</button>
        <div style="display:flex;gap:8px">
          <button class="iw-btn iw-btn--sec" id="irr-det-ed-cancel">Annuler</button>
          <button class="iw-btn iw-btn--pri" id="irr-det-ed-save">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(l),l.querySelector("#irr-det-ed-qty").addEventListener("input",a=>{const h=parseInt(a.target.value);h>0&&(n=h)}),l.addEventListener("click",a=>{a.target===l&&l.remove()}),l.querySelector("#irr-det-ed-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-det-ed-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-det-ed-del").addEventListener("click",()=>{u.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),_(),l.remove(),V()}),l.querySelector("#irr-det-ed-save").addEventListener("click",()=>{u.push({iso:r,mm:n,real:r<=E,plotId:e,detectorConfirmed:!0}),_(),l.remove(),V()})}function $t(e,t){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();let r=e.iso,i=e.mm;const n=document.createElement("div");n.className="irr-edit-overlay",n.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>${e.real?"Modifier l'irrigation effectuée":"Modifier l'irrigation planifiée"}</span>
        <button class="irr-edit-close" id="irr-di-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row" style="flex-direction:column;align-items:flex-start;gap:6px">
          <label style="font-size:12px;color:var(--txt3)">Date</label>
          <input type="date" id="irr-di-date" value="${e.iso}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
        </div>
        <div class="irr-edit-row" style="margin-top:10px">
          <span class="irr-edit-label">Quantité</span>
          <input type="number" id="irr-di-qty" value="${e.mm}" min="1" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--danger" id="irr-di-del">Supprimer</button>
        <div style="display:flex;gap:8px">
          <button class="iw-btn iw-btn--sec" id="irr-di-cancel">Annuler</button>
          <button class="iw-btn iw-btn--pri" id="irr-di-save">Enregistrer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n),n.addEventListener("click",c=>{c.target===n&&n.remove()}),n.querySelector("#irr-di-close").addEventListener("click",()=>n.remove()),n.querySelector("#irr-di-cancel").addEventListener("click",()=>n.remove()),n.querySelector("#irr-di-date").addEventListener("change",c=>{r=c.target.value}),n.querySelector("#irr-di-qty").addEventListener("input",c=>{const a=parseInt(c.target.value);a>0&&(i=a)}),n.querySelector("#irr-di-del").addEventListener("click",()=>{const c=u.indexOf(e);c>=0&&u.splice(c,1),_(),n.remove(),t()}),n.querySelector("#irr-di-save").addEventListener("click",()=>{e.iso=r,e.mm=i,e.real=r<=E,_(),n.remove(),t()})}function xt(e,t){var T,g,B,I;const r=u.filter(p=>p.plotId===e&&p.fromStrategy&&p.seasonId),i=[...r].sort((p,M)=>p.iso<M.iso?-1:1),n=new Set(r.map(p=>p.seasonId));let l=((T=i[0])==null?void 0:T.iso)||E,c=((g=i[i.length-1])==null?void 0:g.iso)||X(E,90),a=((B=i[0])==null?void 0:B.mm)||10,h=i.length>=2?Math.max(1,Math.round((new Date(i[i.length-1].iso)-new Date(i[0].iso))/864e5/(i.length-1))):7;(I=document.querySelector(".irr-edit-overlay"))==null||I.remove();const v=document.createElement("div");v.className="irr-edit-overlay";function D(){if(!l||!c||h<=0)return[];const p=[],M=new Date(c);let d=new Date(l);for(;d<=M&&p.length<200;)p.push(d.toISOString().split("T")[0]),d.setDate(d.getDate()+h);return p}function y(){const p=D(),M=p.filter(d=>d>E).length;v.querySelector("#irr-ms-preview").textContent=p.length>0?`↗ ${p.length} irrigations · ${p.length*a} mm · dont ${M} à venir`:"Ajustez les dates et la fréquence"}v.innerHTML=`
    <div class="irr-edit-modal" style="max-width:460px">
      <div class="irr-edit-hd">
        <span>Modifier la saison</span>
        <button class="irr-edit-close" id="irr-ms-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Début</label>
            <input type="date" id="irr-ms-debut" value="${l}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fin</label>
            <input type="date" id="irr-ms-fin" value="${c}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Quantité (mm/irrig.)</label>
            <input type="number" id="irr-ms-qty" value="${a}" min="1" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fréquence (jours)</label>
            <input type="number" id="irr-ms-freq" value="${h}" min="1" max="30" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
        </div>
        <div id="irr-ms-preview" style="margin-top:12px;font-size:12px;color:var(--txt3)"></div>
        <div style="margin-top:10px;font-size:11px;color:var(--txt3);line-height:1.4">
          Les irrigations déjà effectuées sont conservées. Les irrigations futures sont recalculées.
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-ms-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-ms-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(v),y(),v.addEventListener("click",p=>{p.target===v&&v.remove()}),v.querySelector("#irr-ms-close").addEventListener("click",()=>v.remove()),v.querySelector("#irr-ms-cancel").addEventListener("click",()=>v.remove()),v.querySelector("#irr-ms-debut").addEventListener("change",p=>{l=p.target.value,y()}),v.querySelector("#irr-ms-fin").addEventListener("change",p=>{c=p.target.value,y()}),v.querySelector("#irr-ms-qty").addEventListener("input",p=>{const M=parseInt(p.target.value);M>0&&(a=M,y())}),v.querySelector("#irr-ms-freq").addEventListener("input",p=>{const M=parseInt(p.target.value);M>0&&(h=M,y())}),v.querySelector("#irr-ms-save").addEventListener("click",()=>{const p=u.filter(m=>!(m.plotId===e&&n.has(m.seasonId)));u.splice(0,u.length,...p);const M=Ne(),d=D();for(const m of d)u.push({iso:m,mm:a,real:m<=E,plotId:e,fromStrategy:!0,seasonId:M});_(),v.remove(),oe("Saison modifiée",[`Début : ${K(l)} · Fin : ${K(c)}`,`${d.length} irrigations · ${a} mm · tous les ${h} j`])})}function Fe(e){var r;const t=document.getElementById("irr-right");t&&(t.querySelectorAll("[data-row-plot]").forEach(i=>i.classList.remove("irr-gl-row--active")),e&&((r=t.querySelector(`[data-row-plot="${e}"]`))==null||r.classList.add("irr-gl-row--active")))}function Xe(e){const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!(!t||!r)){if(r.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=String(e.id),r.style.display="",t.classList.add("irr-has-detail"),Fe(String(e.id)),se(e)}}const St=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function se(e){var q,S,s,$,w,A,C,P,j,L;const t=document.getElementById("irr-detail");if(!t)return;const r=((q=t.querySelector(".irr-pr-details"))==null?void 0:q.open)??!1;if(!Ye(e)){t.style.display="",t.dataset.plotId=String(e.id),t.innerHTML=`
      <div class="irr-det-sticky">
        <div class="irr-det-hd">
          <div style="flex:1;min-width:0">
            <div class="irr-det-name">${e.name}</div>
            <a class="irr-det-link" href="parcelle-detail.html?id=${e.id}">Voir la parcelle →</a>
          </div>
          <button class="irr-det-close" id="irr-det-close">×</button>
        </div>
        <div class="irr-det-body" style="padding:16px">
          <p style="font-size:13px;color:var(--txt2);margin:0 0 12px">Précisez le type d'irrigation sur cette parcelle</p>
          <select id="irr-det-type-sel" style="width:100%;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
            ${Oe.map(o=>`<option value="${o}"${o===(e.irrigation||"Non renseigné")?" selected":""}>${o}</option>`).join("")}
          </select>
          <button id="irr-det-type-save" class="btn-primary" style="margin-top:10px;width:100%;justify-content:center">Enregistrer</button>
        </div>
      </div>`,(S=t.querySelector("#irr-det-close"))==null||S.addEventListener("click",()=>{var o;(o=document.getElementById("irr-page"))==null||o.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Fe(null)}),(s=t.querySelector("#irr-det-type-save"))==null||s.addEventListener("click",()=>{const o=t.querySelector("#irr-det-type-sel").value;De(e.id,{irrigation:o}),e.irrigation=o,se(e),V(!0)});return}const i=u.filter(o=>o.plotId===e.id),n=i.some(o=>o.fromStrategy&&o.seasonId),l=i.filter(o=>o.fromStrategy).sort((o,f)=>o.iso<f.iso?-1:1),c=($=l[0])==null?void 0:$.iso,a=(w=l[l.length-1])==null?void 0:w.iso,h=new Set(i.filter(o=>o.fromStrategy&&o.seasonId).map(o=>o.seasonId)),v=c&&a?`<div><strong>Saison :</strong> ${ye(c)} → ${ye(a)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',D=i.filter(o=>o.real).sort((o,f)=>o.iso<f.iso?-1:1),y=i.filter(o=>!o.real).sort((o,f)=>o.iso<f.iso?-1:1),T=e.area??0,g=D.reduce((o,f)=>o+le(f.mm,T),0),B=y.reduce((o,f)=>o+le(f.mm,T),0),I=g+B,p=Qe(e.id),M=p&&T?Math.min(100,Math.round(g/p*100)):0,d=p&&T?Math.min(100-M,Math.round(B/p*100)):0,m=M+d,x=`
    <div class="irr-det-vol">
      <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--bdr2)">
        <div class="irr-det-vol-row">
          <span class="irr-det-vol-lbl">Volume saison :</span>
          <strong style="font-size:13px">${W(I)}</strong>
        </div>
        ${T?`<div class="irr-det-vol-row" style="gap:8px;margin-top:3px">
          <span style="color:#FF8500;font-size:11px">▪ ${W(g)} effectués</span>
          <span style="color:#FFB705;font-size:11px">▪ ${W(B)} planifiés</span>
        </div>`:'<div class="irr-det-vol-lbl" style="color:var(--txt3);margin-top:3px">surface non renseignée</div>'}
      </div>
      <div class="irr-det-vol-row">
        <span class="irr-det-vol-lbl">Volume limité :</span>
        <input class="irr-det-vol-input" id="irr-det-vol-input" type="number" min="0" placeholder="—" value="${p??""}" />
        <span class="irr-det-vol-lbl">m³</span>
      </div>
      ${p&&T?`
      <div class="irr-det-vol-bar">
        <div style="width:${M}%;background:#FF8500;height:100%"></div>
        <div style="width:${d}%;background:#FFB705;height:100%"></div>
      </div>
      ${I>p?`<div class="irr-det-vol-note" style="color:#E05252">Dépassement ${W(I-p)}</div>`:`<div class="irr-det-vol-note">${m}% · ${W(p-I)} restants</div>`}`:""}
    </div>`,F=o=>{const f=u.indexOf(o),k=o.real?"#FF8500":"#FFB705",[,G,J]=o.iso.split("-"),Y=`${parseInt(J)} ${St[parseInt(G)-1]}`,R=o.real?"Effectuée":"Planifiée",Q=o.detectorConfirmed?'<span class="irr-pr-det-tag">Détectée &amp; corrigée</span>':"";return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${k}"></div>
      <div class="irr-pr-date" style="color:${k};min-width:52px;font-size:13px;font-weight:600">${Y}</div>
      <div class="irr-pr-info">
        <div class="irr-pr-status" style="color:${k}">${R}</div>
        ${Q}
      </div>
      <div class="irr-pr-mm" style="color:${k}">${o.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${f}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${f}" title="Supprimer">🗑</button>
    </div>`},z=n?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
      </div>
    </div>`:"",b=ie&&We(e)?`<div style="margin:16px 16px 16px;padding:12px;background:#FFF4E6;border-radius:8px;border-left:3px solid #E07820">
         <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#E07820;margin-bottom:4px">Recommandations d'irrigation sur les 7 prochains jours</div>
         <div style="font-size:22px;font-weight:700;color:#E07820">${Ge(e)} mm</div>
       </div>`:"";t.innerHTML=`
    <div class="irr-det-sticky">
      <div class="irr-det-hd">
        <div style="flex:1;min-width:0">
          <div class="irr-det-name">${e.name}</div>
          <a class="irr-det-link" href="parcelle-detail.html?id=${e.id}">Voir la parcelle →</a>
        </div>
        <button class="irr-det-close" id="irr-det-close">×</button>
      </div>
      <div class="irr-det-body">
        <div class="irr-det-meta">${v}</div>
        ${z}
        ${gt(i)}
        ${ft(i)}
        ${x}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${D.length?`
        <details class="irr-pr-details"${r?" open":""}>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${D.length}</span></summary>
          <div>${D.map(F).join("")}</div>
        </details>`:""}
      ${b}
      ${y.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${y.length}</span></summary>
          <div>${y.map(F).join("")}</div>
        </details>`:""}
      ${i.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(A=t.querySelector("#irr-det-strat-toggle"))==null||A.addEventListener("click",()=>{const o=t.querySelector("#irr-det-strat-opts");o.style.display=o.style.display==="none"?"":"none"}),(C=t.querySelector("#irr-det-modify"))==null||C.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none",xt(e.id)}),(P=t.querySelector("#irr-det-stop"))==null||P.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const o=u.filter(f=>f.plotId===e.id&&h.has(f.seasonId)&&!f.real&&f.iso>E);u.splice(0,u.length,...u.filter(f=>!o.includes(f))),_(),oe("Saison arrêtée",[`${o.length} irrigation${o.length!==1?"s":""} future${o.length!==1?"s":""} supprimée${o.length!==1?"s":""}`,`Parcelle : ${e.name}`])}),(j=t.querySelector("#irr-det-del-all"))==null||j.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const o=u.filter(f=>f.plotId===e.id&&h.has(f.seasonId));o.length&&mt(`Supprimer toutes les irrigations de "${e.name}" ?`,`${o.length} irrigation${o.length!==1?"s":""} seront supprimées (passées et futures).`,()=>{u.splice(0,u.length,...u.filter(f=>!o.includes(f))),_(),oe("Saison supprimée",[`${o.length} irrigation${o.length!==1?"s":""} supprimée${o.length!==1?"s":""}`,`Parcelle : ${e.name}`])})}),t.querySelectorAll(".irr-pr-edit").forEach(o=>{o.addEventListener("click",()=>{const f=u[+o.dataset.idx];f&&$t(f,()=>{se(e),V(!0)})})}),t.querySelectorAll(".irr-pr-del").forEach(o=>{o.addEventListener("click",()=>{const f=+o.dataset.idx;f>=0&&(u.splice(f,1),_(),se(e))})}),(L=t.querySelector("#irr-det-vol-input"))==null||L.addEventListener("change",o=>{const f=o.target.value!==""?parseInt(o.target.value):null;De(e.id,{volumeMaxM3:f}),se(e),Ce()}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var o;(o=document.getElementById("irr-page"))==null||o.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Fe(null)})}function wt(e,t,r,i=10){var D;(D=document.querySelector(".irr-edit-overlay"))==null||D.remove();const n=U.find(y=>y.id===+e),l=n&&!Ye(n),c=l?`
    <div class="irr-edit-row">
      <span class="irr-edit-label">Type d'irrigation</span>
      <select id="irr-qa-type-sel" style="flex:1;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
        ${Oe.map(y=>`<option value="${y}"${y===(n.irrigation||"Non renseigné")?" selected":""}>${y}</option>`).join("")}
      </select>
    </div>`:"",a=document.createElement("div");a.className="irr-edit-overlay",a.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${K(r)}</span>
        <button class="irr-edit-close" id="irr-qa-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${l?`<p style="font-size:12px;color:var(--txt2);margin:0 0 10px">Précisez le type d'irrigation de cette parcelle pour pouvoir saisir une irrigation.</p>`:""}
        ${c}
        <div class="irr-edit-row">
          <span class="irr-edit-label">${t}</span>
          <input type="number" class="irr-edit-qty" id="irr-qa-qty" value="${i}" min="1" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-qa-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-qa-save"${l?" disabled":""}>Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(a),a.addEventListener("click",y=>{y.target===a&&a.remove()}),a.querySelector("#irr-qa-close").addEventListener("click",()=>a.remove()),a.querySelector("#irr-qa-cancel").addEventListener("click",()=>a.remove());const h=a.querySelector("#irr-qa-save"),v=a.querySelector("#irr-qa-type-sel");if(v){const y=()=>{h.disabled=Te.has(v.value)};y(),v.addEventListener("change",y)}h.addEventListener("click",()=>{if(v){const T=v.value;if(Te.has(T))return;De(n.id,{irrigation:T}),n.irrigation=T}const y=parseInt(a.querySelector("#irr-qa-qty").value)||10;u.push({iso:r,mm:y,real:r<=E,plotId:+e,fromStrategy:!1}),_(),a.remove(),V(!0)})}function ne(){var c,a,h,v,D,y,T,g,B,I,p,M;const e=document.getElementById("irr-left"),t=[..._e].filter(d=>d.id!==100).sort((d,m)=>d.name.localeCompare(m.name)),r=ge?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${te===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${te===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${t.map(d=>`<option value="${d.id}"${d.id===te?" selected":""}>${d.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"",i=document.getElementById("irr-page");if(we){i==null||i.classList.add("irr-left-collapsed"),e.innerHTML=`
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Déplier le panneau">›</button>`,e.querySelector("#irr-left-toggle").addEventListener("click",()=>{we=!1,ne()});return}i==null||i.classList.remove("irr-left-collapsed"),e.innerHTML=`
    <div class="irr-lc-collapse-bar">
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Réduire le panneau">‹</button>
    </div>
    <div class="irr-lc-scroll">
    ${r}

    <button class="irr-lc-btn${O==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${O==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${Ie("irr-s-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Date</label>
        <input type="date" class="irr-lc-input" id="irr-s-date" value="${E}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Quantité <span class="irr-lc-unit">(mm par parcelle)</span></label>
        <input type="number" class="irr-lc-input" id="irr-s-qty" value="10" min="1" />
      </div>
      <div class="irr-lc-err" id="irr-s-err" style="display:none">Veuillez sélectionner au moins une parcelle et renseigner tous les champs.</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-s-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${O==="saison"?" irr-lc-btn--active":""}" data-action="saison">
      <i class="bi bi-arrow-repeat"></i><span>Saisir une saison d'irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${O==="saison"?"":" irr-lc-form--hidden"}" id="irr-form-saison">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${Ie("irr-sa-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Début</label>
        <input type="date" class="irr-lc-input" id="irr-sa-debut" value="${E}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Fin</label>
        <input type="date" class="irr-lc-input" id="irr-sa-fin" value="${X(E,120)}" />
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
      <div class="irr-lc-err" id="irr-sa-err" style="display:none">Veuillez sélectionner au moins une parcelle et renseigner tous les champs.</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-sa-save">Enregistrer</button>
    </div>

    <button class="irr-lc-btn${O==="export"?" irr-lc-btn--active":""}" data-action="export">
      <i class="bi bi-download"></i><span>Exporter les irrigations</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${O==="export"?"":" irr-lc-form--hidden"}" id="irr-form-export">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${Ie("irr-ex-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Du</label>
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${u.length?[...u].sort((d,m)=>d.iso<m.iso?-1:1)[0].iso:E}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${u.length?[...u].sort((d,m)=>d.iso>m.iso?-1:1)[0].iso:E}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Données à inclure</label>
        <div class="irr-ef-checks">
          <label><input type="checkbox" id="irr-ex-irrig" checked /> Irrigations</label>
          <label><input type="checkbox" id="irr-ex-rain" checked /> Pluie</label>
        </div>
      </div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-ex-dl"><i class="bi bi-download"></i> Télécharger CSV</button>
    </div>
    </div>
    </div>

    <div class="irr-lc-features">
      <div class="irr-lc-features-title">Fonctionnalités</div>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-advisor" ${ie?"checked":""} />
        <span>Irrigation Advisor</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-reservoir" ${be?"checked":""} />
        <span>Reservoir Sensorless</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-detector" ${re?"checked":""} />
        <span>Irrigation Detector</span>
      </label>
    </div>
  `,(c=e.querySelector("#irr-left-toggle"))==null||c.addEventListener("click",()=>{we=!0,ne()}),O==="saisie"&&Me(e,"irr-s-scope"),O==="saison"&&Me(e,"irr-sa-scope"),O==="export"&&Me(e,"irr-ex-scope"),(a=e.querySelector("#irr-org-select"))==null||a.addEventListener("change",d=>{const m=d.target.value;te=m===""?null:parseInt(m),U=te===null?fe:fe.filter(x=>x.orgId===te),Z=0,ne(),V()}),e.querySelectorAll(".irr-lc-btn").forEach(d=>{d.addEventListener("click",()=>{const m=d.dataset.action;O=O===m?null:m,ne()})});function n(){var s,$,w,A;const d=(s=e.querySelector("#irr-sa-debut"))==null?void 0:s.value,m=($=e.querySelector("#irr-sa-fin"))==null?void 0:$.value,x=parseInt((w=e.querySelector("#irr-sa-qty"))==null?void 0:w.value)||0,F=parseInt((A=e.querySelector("#irr-sa-freq"))==null?void 0:A.value)||0,z=e.querySelector("#irr-sa-preview");if(!z)return;if(!d||!m||F<=0){z.textContent="—";return}let b=0,q=new Date(d),S=new Date(m);for(;q<=S&&b<200;)b++,q.setDate(q.getDate()+F);if(b>0){const P=me(e,"irr-sa-scope").reduce((o,f)=>{const k=he().find(G=>G.id===f);return o+((k==null?void 0:k.area)??0)},0),j=P>0?Math.round(b*x*P*10):0,L=j>0?` · ${j.toLocaleString("fr-FR")} m³`:"";z.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${b} irrigations · ${b*x} mm${L}</span>`}else z.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'}O==="saison"&&(n(),(h=e.querySelector("#irr-sa-debut"))==null||h.addEventListener("change",n),(v=e.querySelector("#irr-sa-fin"))==null||v.addEventListener("change",n),(D=e.querySelector("#irr-sa-qty"))==null||D.addEventListener("input",n),(y=e.querySelector("#irr-sa-freq"))==null||y.addEventListener("input",n)),(T=e.querySelector("#irr-ex-dl"))==null||T.addEventListener("click",()=>{const d=e.querySelector("#irr-ex-start").value,m=e.querySelector("#irr-ex-end").value,x=e.querySelector("#irr-ex-irrig").checked,F=e.querySelector("#irr-ex-rain").checked,z=me(e,"irr-ex-scope"),b=z.length>0?U.filter(L=>z.includes(L.id)):he(),q=new Set;if(x)for(const L of u)L.iso>=d&&L.iso<=m&&q.add(L.iso);if(F)for(const L of ae)L.iso>=d&&L.iso<=m&&q.add(L.iso);const S=[...q].sort(),s={};if(F)for(const L of ae)s[L.iso]=L.mm;const $=["Date",...b.map(L=>L.name+(F?" (irrig.)":""))].join(";"),w=S.map(L=>{const o=b.map(f=>{const k=x?u.filter(Y=>Y.iso===L&&Y.plotId===f.id).reduce((Y,R)=>Y+R.mm,0):0,G=F?s[L]??0:0,J=k+G;return J>0?J:""});return[L,...o].join(";")}),A=[$,...w].join(`
`),C=new Blob([A],{type:"text/csv;charset=utf-8;"}),P=URL.createObjectURL(C),j=Object.assign(document.createElement("a"),{href:P,download:`irrigations_${d}_${m}.csv`});document.body.appendChild(j),j.click(),setTimeout(()=>{URL.revokeObjectURL(P),j.remove()},100)}),(g=e.querySelector("#irr-s-save"))==null||g.addEventListener("click",()=>{const d=me(e,"irr-s-scope"),m=e.querySelector("#irr-s-date").value,x=parseInt(e.querySelector("#irr-s-qty").value)||0,F=e.querySelector("#irr-s-err");if(!d.length||!m||!x){F&&(F.style.display="");return}F&&(F.style.display="none");const z=m>E,b=()=>{d.forEach(S=>{u.push({iso:m,mm:x,real:!z,plotId:S,fromStrategy:!1})}),_(),oe("Irrigation enregistrée",[`Date : ${K(m)}`,`Quantité : ${x} mm`,`Parcelles : ${d.length} sélectionnée${d.length>1?"s":""}`])},q=u.filter(S=>d.includes(S.plotId)&&S.iso===m);if(q.length){Ve(q.length,`${d.length} parcelle(s)`,()=>{u.splice(0,u.length,...u.filter(S=>!(d.includes(S.plotId)&&S.iso===m))),b()});return}b()});const l=()=>{V();const d=document.getElementById("irr-detail"),m=d==null?void 0:d.dataset.plotId;if(m){const x=U.find(F=>String(F.id)===m);x&&se(x)}};(B=e.querySelector("#irr-feat-advisor"))==null||B.addEventListener("change",d=>{ie=d.target.checked,l()}),(I=e.querySelector("#irr-feat-reservoir"))==null||I.addEventListener("change",d=>{be=d.target.checked,l()}),(p=e.querySelector("#irr-feat-detector"))==null||p.addEventListener("change",d=>{re=d.target.checked,l()}),(M=e.querySelector("#irr-sa-save"))==null||M.addEventListener("click",()=>{const d=me(e,"irr-sa-scope"),m=e.querySelector("#irr-sa-debut").value,x=e.querySelector("#irr-sa-fin").value,F=parseInt(e.querySelector("#irr-sa-qty").value)||10,z=parseInt(e.querySelector("#irr-sa-freq").value)||7,b=e.querySelector("#irr-sa-err");if(!d.length||!m||!x){b&&(b.style.display="");return}b&&(b.style.display="none");const q=[];let S=new Date(m),s=new Date(x);for(;S<=s&&q.length<200;)q.push(new Date(S)),S.setDate(S.getDate()+z);const $=Ne(),w=()=>{d.forEach(C=>{q.forEach(P=>{const j=P.toISOString().slice(0,10);u.push({iso:j,mm:F,real:j<=E,plotId:C,fromStrategy:!0,seasonId:$})})}),_(),oe("Saison enregistrée",[`Début : ${K(m)} · Fin : ${K(x)}`,`${q.length} irrigations · ${F} mm · tous les ${z} j`,`Parcelles : ${d.length} sélectionnée${d.length>1?"s":""}`])},A=u.filter(C=>d.includes(C.plotId)&&C.iso>=m&&C.iso<=x);if(A.length){Ve(A.length,`${d.length} parcelle(s)`,()=>{u.splice(0,u.length,...u.filter(C=>!(d.includes(C.plotId)&&C.iso>=m&&C.iso<=x))),w()});return}w()})}function Et(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const r=t.target.closest("[data-tip]");if(!r){e.style.opacity="0";return}e.textContent=r.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var r;(r=t.relatedTarget)!=null&&r.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search),t=e.get("plot"),r=e.get("action");if((r==="saisie"||r==="saison")&&(O=r),rt(),Et(),ne(),V(),window.addEventListener("irrig-updated",()=>{V();const i=document.getElementById("irr-detail"),n=i==null?void 0:i.dataset.plotId;if(!n)return;const l=U.find(c=>String(c.id)===n);l&&se(l)}),t){const i=U.find(n=>n.id===+t);i&&(Xe(i),(r==="saisie"||r==="saison")&&setTimeout(()=>{const n=r==="saisie"?"irr-s-scope":"irr-sa-scope",l=document.querySelector(`#${n} input[value="${t}"]`);l&&(l.checked=!0,l.dispatchEvent(new Event("change")))},50))}});
