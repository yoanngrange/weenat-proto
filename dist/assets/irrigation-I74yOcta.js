import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as p,R as ae,g as Ne,s as _}from"./irrigations-C22Dtsoo.js";import{I as Oe}from"./constants-D_Yu58_o.js";import{p as fe}from"./plots-Bejh2i72.js";import{o as _e}from"./orgs-DnFmvGlp.js";import{u as rt}from"./breadcrumb-CzFWtd6d.js";import{d as De,e as it,c as st,f as lt}from"./store-Bgo0c0M9.js";import"./irrigation-web-ZE5oFFnl.js";const Ue=1,ge=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let re=null,U=ge?fe:fe.filter(e=>e.orgId===Ue);const L=new Date().toISOString().split("T")[0];let O=null,we=!1,Z=0,se=!1,be=!1,ie=!1;const Ae={};let qe=!0,Ee=!0,pe=!0,Le=!0,ke=!0,ve=!0;function K(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}function G(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]} ${e.split("-")[0]}`}function ye(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]}`}function nt(e){const[,t,r]=e.split("-");return`${r}/${t}`}const at=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function He(e){const[t,r,i]=e.split("-").map(Number);return new Date(Date.UTC(t,r-1,i)).getUTCDay()}function ot(e){const[t,r,i]=e.split("-").map(Number),n=new Date(Date.UTC(t,r-1,i)),l=n.getUTCDay()||7;n.setUTCDate(n.getUTCDate()+4-l);const d=new Date(Date.UTC(n.getUTCFullYear(),0,1));return Math.ceil(((n-d)/864e5+1)/7)}function dt(e){return[e.name+(e.area?` (${e.area} ha)`:""),e.crop,e.irrigation].filter(Boolean).join(" — ")}const Te=new Set(["Non irrigué","Non renseigné",""]);function Ye(e){return!!e.irrigation&&!Te.has(e.irrigation)}function le(e,t){return Math.round(e*(t??0)*10)}function W(e){return e.toLocaleString("fr-FR")+" m³"}function ct(e){var r;const t=lt(e).volumeMax;return t!==void 0?t:((r=_e.find(i=>i.id===e))==null?void 0:r.volumeMax)??null}function Qe(e){return st(e).volumeMaxM3??null}function he(){return[...U].sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function We(e){return e.id%3===2}function Ge(e){return 25+e.id*7%20}function ut(e){return e.id%9===2}function pt(e,t){const[,r,i]=t.split("-").map(Number);return Math.min(65,Math.max(5,30+(e.id*7+r*3+i*2)%30))}function Je(e){const t=(e.irrigation||"").toLowerCase();return["rampe","pivot","enrouleur"].some(r=>t.includes(r))}function vt(e){if(!Je(e))return[];const t=[];let r=e.id*17,i=new Date(K(L,-45));const n=new Date(K(L,-1));for(;i<=n;){const l=i.toISOString().split("T")[0],d=r%7-3;r=(r*31+17)%1e3,t.push({iso:l,mm:Math.max(8,15+d),real:!0,plotId:e.id,fromDetector:!0}),i.setDate(i.getDate()+5+r%3),r=(r*31+17)%1e3}return t}function Ie(e,t={}){const{allBtn:r=!1}=t,i=he().map(n=>`
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
  </div>`}function Me(e,t){const r=e.querySelector(`#${t}`);if(!r)return;const i=r.querySelector(".irr-msel-search"),n=r.querySelector(".irr-msel-count"),l=r.querySelector(".irr-msel-all-btn"),d=()=>{const a=r.querySelectorAll(".irr-msel-cb:checked").length;n.textContent=`${a} sélectionnée${a!==1?"s":""}`};i.addEventListener("input",()=>{const a=i.value.toLowerCase();r.querySelectorAll(".irr-msel-item").forEach(S=>{S.style.display=S.querySelector(".irr-msel-name").textContent.toLowerCase().includes(a)?"":"none"})}),r.querySelectorAll(".irr-msel-cb").forEach(a=>a.addEventListener("change",d)),l==null||l.addEventListener("click",()=>{const a=[...r.querySelectorAll(".irr-msel-cb")].filter(w=>w.closest(".irr-msel-item").style.display!=="none"),S=a.some(w=>!w.checked);a.forEach(w=>{w.checked=S}),d()})}function me(e,t){const r=e.querySelector(`#${t}`);return r?[...r.querySelectorAll(".irr-msel-cb:checked")].map(i=>+i.value):[]}function oe(e,t){var n;(n=document.querySelector(".irr-save-confirm"))==null||n.remove();const r=document.createElement("div");r.className="irr-save-confirm",r.innerHTML=`
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
    </div>`,document.body.appendChild(i);const n=()=>i.remove();i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelector("#irr-cf-close").addEventListener("click",n),i.querySelector("#irr-cf-cancel").addEventListener("click",n),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),r()})}function mt(e,t,r){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
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
    </div>`,document.body.appendChild(i),i.addEventListener("click",l=>{l.target===i&&i.remove()}),i.querySelector("#irr-dc-close").addEventListener("click",()=>i.remove()),i.querySelector("#irr-dc-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#irr-dc-ok").addEventListener("click",()=>{i.remove(),r()})}function ft(e){if(e.length<2)return"";const t=[...e].sort((u,h)=>u.iso<h.iso?-1:1),r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],i=new Date(t[0].iso),n=new Date(t[t.length-1].iso),l=Math.max(n-i,1),d=500,a=24,S=5,w=5,A=a-w-4,$=A-w-3,g=a+S+13,m=g+2,T=w+2,M=u=>Math.round(T+(u-i)/l*(d-2*T)),B=u=>{const[,h,E]=u.split("-");return`${parseInt(E)}/${parseInt(h)}`},z=[],c=new Date(i.getFullYear(),i.getMonth()+1,1);for(;c<=n;)z.push(new Date(c)),c.setMonth(c.getMonth()+1);const f=z.map(u=>`<line x1="${M(u)}" y1="${a-6}" x2="${M(u)}" y2="${a+S+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),q=[i,...z,n],D=q.slice(0,-1).map((u,h)=>{const E=M(u),s=M(q[h+1]);return s-E<16?"":`<text x="${Math.round((E+s)/2)}" y="${$}" font-size="9" fill="#B0AEA8" text-anchor="middle">${r[u.getMonth()]}</text>`}).join(""),v=t.map(u=>{const h=u.real?"#FF8500":"#FFB705",E=M(new Date(u.iso)),s=`${ye(u.iso)} · ${u.mm} mm`;return`<circle cx="${E}" cy="${A}" r="${w}" fill="${h}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${E}" cy="${A}" r="${w+6}" fill="transparent" pointer-events="all" data-tip="${s}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${d}" height="${m}" viewBox="0 0 ${d} ${m}" style="width:100%;display:block">
      ${D}<rect x="0" y="${a}" width="${d}" height="${S}" rx="${S/2}" fill="#E0DED8"/>${f}${v}
      <text x="1" y="${g}" font-size="9" fill="#B0AEA8">${B(t[0].iso)}</text>
      <text x="${d-1}" y="${g}" font-size="9" fill="#B0AEA8" text-anchor="end">${B(t[t.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function gt(e){const t=e.filter(l=>l.real),r=e.filter(l=>!l.real),i=t.reduce((l,d)=>l+d.mm,0),n=r.reduce((l,d)=>l+d.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${i} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${n} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${i+n} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function Ce(){var g;const e=document.getElementById("irr-vol-banner-wrap");if(!e)return;const t=ge?re:Ue;if(!t){e.innerHTML="";return}const r=new Set(U.filter(m=>m.orgId===t).map(m=>m.id));ge||U.forEach(m=>r.add(m.id));const i=new Map(U.map(m=>[m.id,m])),n=p.filter(m=>r.has(m.plotId)&&m.real).reduce((m,T)=>{var M;return m+le(T.mm,((M=i.get(T.plotId))==null?void 0:M.area)??0)},0),l=p.filter(m=>r.has(m.plotId)&&!m.real).reduce((m,T)=>{var M;return m+le(T.mm,((M=i.get(T.plotId))==null?void 0:M.area)??0)},0),d=n+l,a=ct(t),S=a?Math.min(100,Math.round(n/a*100)):0,w=a?Math.min(100-S,Math.round(l/a*100)):0,A=S+w,$=m=>m!=null?m.toLocaleString("fr-FR"):"";e.innerHTML=`
    <div class="irr-vol-banner">
      <div class="irr-vol-main">
        <div class="irr-vol-title">Volume irrigation</div>
        <div class="irr-vol-total">${W(d)}${a?` <span style="font-size:11px;font-weight:400;color:var(--txt3)">/ ${W(a)}</span>`:""}</div>
        <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${W(n)}</span> effectués · <span style="color:#FFB705">▪ ${W(l)}</span> planifiés</div>
      </div>
      <div class="irr-vol-bar-wrap">
        <div class="irr-vol-bar-label">Consommation d'eau sur mon exploitation</div>
        ${a?"":'<div class="irr-vol-bar-nomax">Définissez un volume limité →</div>'}
        <div class="irr-vol-bar-bg">
          <div class="irr-vol-bar-real" style="width:${S}%"></div>
          <div class="irr-vol-bar-plan" style="width:${w}%"></div>
        </div>
        ${a?(()=>{const m=d-a;return m>0?`<div class="irr-vol-bar-pct" style="color:#E05252">Dépassement ${W(m)}</div>`:`<div class="irr-vol-bar-pct">${A}% consommé${A>=90?" ⚠":""}</div>`})():""}
      </div>
      <div class="irr-vol-controls">
        <div class="irr-vol-ctrl-row">
          <span class="irr-vol-ctrl-lbl">Volume limité :</span>
          <input class="irr-vol-input" id="irr-vol-max-inp" type="text" inputmode="numeric" placeholder="—" value="${$(a)}" />
          <span class="irr-vol-ctrl-lbl">m³</span>
        </div>
      </div>
    </div>`,(g=e.querySelector("#irr-vol-max-inp"))==null||g.addEventListener("change",m=>{const T=m.target.value.replace(/\s/g,"").replace(/\./g,"").replace(/,/g,""),M=T!==""?parseInt(T):null;M!==null&&(m.target.value=M.toLocaleString("fr-FR")),it(t,{volumeMax:M}),Ce()})}function V(e=!1){var u,h,E;Ce();const t=document.getElementById("irr-right"),r=K(L,60),i=[...p.map(s=>s.iso),...ae.filter(s=>s.iso<=r).map(s=>s.iso),...ie?[K(L,-45)]:[],K(L,-1),r];if(!p.length&&!ae.length){t.innerHTML=`<div class="irr-pr-empty" style="padding-top:60px"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const n=[...i].sort()[0],l=p.length?[...p].map(s=>s.iso).sort().at(-1):null,d=l&&l>r?l:r,a=new Date(d);a.setMonth(a.getMonth()+Z);const S=a.toISOString().split("T")[0],w=e?null:((u=t.querySelector("#irr-gl-body"))==null?void 0:u.scrollLeft)??null,A=[];let $=new Date(n);const g=new Date(S);for(;$<=g;)A.push($.toISOString().split("T")[0]),$.setDate($.getDate()+1);const m={};for(const s of ae)m[s.iso]=s.mm;function T(s){if(s<=L||s>K(L,13))return 0;const[,y,k]=s.split("-").map(Number),F=(y*17+k*13)%100;return F<65?0:3+F%9}function M(s,y,k){const F=`${s}_${y}`;if(Ae[F]!==void 0)return Ae[F];if(!k)return 0;const[,C,j]=y.split("-").map(Number);if((s*13+C*7+j*3)%100<12)return 0;const I=.75+(s*11+j*5)%50/100;return Math.round(k*I)}const B=K(L,7);let z="",c="",f=0,q=null;for(const s of A){const y=s===L,k=He(s),F=k===0,C=F?" irr-gl-th--week-end":"";q===null&&(q=ot(s)),f++;const j=se&&s>L&&s<=B;z+=`<th class="irr-gl-th${y?" irr-gl-th--today":""}${C}${j?" irr-gl-th--advisor-range":""}"><span class="irr-gl-day-name">${at[k]}</span>${nt(s)}</th>`;const R=s===A[A.length-1];(F||R)&&(c+=`<th class="irr-gl-week-hd${F?" irr-gl-th--week-end":""}" colspan="${f}">S${q}</th>`,f=0,q=null),se&&s===B&&(z+='<th class="irr-gl-th irr-gl-th--advisor">Reco J+7</th>',c+='<th class="irr-gl-week-hd"></th>')}function D(s){const y=ie?vt(s):[],k=se&&We(s),F=be&&ut(s),C=Je(s);let j="";for(const x of A){const J=x===L,X=p.filter(H=>H.iso===x&&H.plotId===s.id),Y=X.length===0?y.filter(H=>H.iso===x):[],P=X.filter(H=>!H.detectorDismissed).filter(H=>H.detectorConfirmed?ie&&ke:H.real?qe:Ee),Q=Le?Y:[],Be=[...P,...Q],je=Be.reduce((H,te)=>H+te.mm,0),Ke=Be.some(H=>H.real),Ze=(s.id*7+3)%3-1,Pe=K(x,Ze),de=M(s.id,x,m[Pe]??T(Pe));let Re="";de&&pe&&(Re=ie&&C?`<span class="irr-gl-rain irr-gl-rain--edit" data-rain-plotid="${s.id}" data-rain-iso="${x}" data-rain-mm="${de}">${de} mm</span>`:`<span class="irr-gl-rain">${de} mm</span>`);let $e="";if(je){const H=Ke?"#E07820":"#FFB705",te=P.map(N=>p.indexOf(N)).filter(N=>N>=0).join(","),ue=Q.length?'<span class="irr-gl-det-badge" title="Détecté automatiquement">D</span>':P.some(N=>N.detectorConfirmed)?'<span class="irr-gl-conf-badge" title="Irrigation confirmée">C</span>':"",xe=Q.reduce((N,Se)=>N+Se.mm,0);$e=`<span class="irr-gl-val irr-gl-irrig" style="color:${H};cursor:pointer"${te?` data-idxs="${te}" data-iso="${x}"`:` data-det-plotid="${s.id}" data-det-plotname="${s.name}" data-det-iso="${x}" data-det-mm="${xe}"`}>${je} mm${ue}</span>`}else $e=`<button class="irr-gl-add" data-plot-id="${s.id}" data-plot-name="${s.name}" data-iso="${x}">+</button>`;let ze="";F&&ve&&x<L&&(ze=`<span class="irr-gl-res">${pt(s,x)} mm</span>`);let ce="";pe&&(ce+=`<div class="irr-gl-slot">${Re}</div>`),ce+=`<div class="irr-gl-slot">${$e}</div>`,F&&ve&&(ce+=`<div class="irr-gl-slot">${ze}</div>`);const et=He(x)===0,tt=k&&x>L&&x<=B;if(j+=`<td class="irr-gl-td${J?" irr-gl-td--today":""}${et?" irr-gl-td--week-end":""}${tt?" irr-gl-td--advisor-range":""}">${ce}</td>`,se&&x===B){let H="";if(k){const te=Ge(s),ue=p.filter(N=>N.plotId===s.id&&N.iso>L&&N.iso<=B).reduce((N,Se)=>N+Se.mm,0),xe=ue>=te?"#24B066":"#E05252";H=`<span class="irr-gl-advisor">${te} mm</span><span style="display:block;font-size:10px;font-weight:600;color:${xe}">${ue} mm planifié</span>`}j+=`<td class="irr-gl-td irr-gl-td--advisor">${H}</td>`}}const R=[s.crop,s.irrigation].filter(Boolean).join(" · "),I=s.area?`<span class="irr-gl-plot-area">(${s.area} ha)</span>`:"";let o="";const b=Qe(s.id);if(b){const x=s.area??0,J=p.filter(P=>P.plotId===s.id&&P.real).reduce((P,Q)=>P+le(Q.mm,x),0),X=p.filter(P=>P.plotId===s.id&&!P.real).reduce((P,Q)=>P+le(Q.mm,x),0),Y=J+X;if(Y>0)if(Y>b)o=`<span class="irr-gl-plot-deficit">Dépassement ${W(Y-b)}</span>`;else{const P=Math.round(J/b*100),Q=Math.min(100-P,Math.round(X/b*100));o=`<span class="irr-gl-plot-mini-bar"><span class="irr-gl-plot-mini-r" style="width:${P}%"></span><span class="irr-gl-plot-mini-p" style="width:${Q}%"></span></span>`}}return`<tr data-row-plot="${s.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${s.id}">${s.name}</span>${I}${R?`<span class="irr-gl-plot-sub">${R}</span>`:""}${o}</td>${j}</tr>`}const v=he().map(D).join("");t.innerHTML=`
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-gl-legend">
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="real-irrig" ${qe?"checked":""}><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. effectuée</label>
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="plan-irrig" ${Ee?"checked":""}><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</label>
          ${ie?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="detected" ${Le?"checked":""}><span class="irr-gl-det-badge">D</span>&nbsp;Irrig. détectée</label><label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="confirmed" ${ke?"checked":""}><span class="irr-gl-conf-badge">C</span>&nbsp;Irrig. corrigée</label>`:""}
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
            <tr><th class="irr-gl-plot-hd irr-gl-week-corner"></th>${c}</tr>
            <tr><th class="irr-gl-plot-hd">Parcelles</th>${z}</tr>
          </thead>
          <tbody>${v}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${Z===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${Z>0?`+${Z} mois au-delà de la saison`:`Fin de saison : ${ye(d)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var C;const s=t.querySelector("#irr-gl-body"),y=t.querySelector("#irr-gl-table"),k=t.querySelector("#irr-gl-scroll-top"),F=t.querySelector("#irr-gl-scroll-inner");if(!(!s||!y||!k||!F))if(F.style.width=y.offsetWidth+"px",k.addEventListener("scroll",()=>{s.scrollLeft=k.scrollLeft}),s.addEventListener("scroll",()=>{k.scrollLeft=s.scrollLeft}),w!==null)s.scrollLeft=w,k.scrollLeft=w;else{const j=t.querySelector(".irr-gl-th--today");if(j){const I=j.previousElementSibling??j,o=((C=t.querySelector(".irr-gl-plot-hd"))==null?void 0:C.offsetWidth)??120,b=I.offsetLeft-o;s.scrollLeft=b,k.scrollLeft=b}}}),(h=t.querySelector("#irr-gl-prev-month"))==null||h.addEventListener("click",()=>{Z>0&&(Z--,V())}),(E=t.querySelector("#irr-gl-next-month"))==null||E.addEventListener("click",()=>{Z++,V()}),t.querySelectorAll(".irr-gl-filter").forEach(s=>{s.addEventListener("change",()=>{const y=s.dataset.filter;y==="real-irrig"?qe=s.checked:y==="plan-irrig"?Ee=s.checked:y==="rain"?pe=s.checked:y==="detected"?Le=s.checked:y==="confirmed"?ke=s.checked:y==="reservoir"&&(ve=s.checked),V()})}),t.querySelectorAll(".irr-gl-irrig").forEach(s=>{s.addEventListener("click",()=>{s.dataset.idxs?bt(s.dataset.idxs.split(",").map(Number),s.dataset.iso):s.dataset.detPlotid&&ht(+s.dataset.detPlotid,s.dataset.detPlotname,s.dataset.detIso,+s.dataset.detMm)})}),t.querySelectorAll(".irr-gl-rain--edit").forEach(s=>{s.addEventListener("click",()=>{yt(+s.dataset.rainPlotid,s.dataset.rainIso,+s.dataset.rainMm)})}),t.querySelectorAll(".irr-gl-add").forEach(s=>{s.addEventListener("click",()=>{wt(s.dataset.plotId,s.dataset.plotName,s.dataset.iso)})}),t.querySelectorAll(".irr-gl-plot-link").forEach(s=>{s.addEventListener("click",()=>{const y=U.find(k=>String(k.id)===s.dataset.plotId);y&&Xe(y)})})}function bt(e,t){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const r=document.createElement("div");r.className="irr-edit-overlay";const i=e.map(l=>p[l]).filter(Boolean);r.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${G(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${i.map((l,d)=>{const a=U.find(w=>w.id===l.plotId);return`<div class="irr-edit-row">
            <span class="irr-edit-label">${a?a.name:`Parcelle ${l.plotId}`}</span>
            <input type="number" class="irr-edit-qty" data-i="${d}" value="${l.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${d}">🗑</button>
          </div>`}).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#irr-edit-close").addEventListener("click",()=>r.remove()),r.querySelector("#irr-edit-cancel").addEventListener("click",()=>r.remove()),r.querySelectorAll(".irr-edit-del").forEach(l=>{l.addEventListener("click",()=>{const d=i[+l.dataset.i],a=p.indexOf(d);a>=0&&(p.splice(a,1),_()),r.remove()})}),r.querySelector("#irr-edit-save").addEventListener("click",()=>{r.querySelectorAll(".irr-edit-qty").forEach(l=>{const d=i[+l.dataset.i],a=parseInt(l.value);d&&a>0&&(d.mm=a,d.real=t<=L)}),_(),r.remove()})}function yt(e,t,r){var d;(d=document.querySelector(".irr-edit-overlay"))==null||d.remove();const i=U.find(a=>a.id===e),n=i?i.name:`Parcelle ${e}`,l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier la pluie — ${G(t)}</span>
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
    </div>`,document.body.appendChild(l),l.addEventListener("click",a=>{a.target===l&&l.remove()}),l.querySelector("#irr-rain-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-save").addEventListener("click",()=>{const a=parseInt(l.querySelector("#irr-rain-qty").value);!isNaN(a)&&a>=0&&(Ae[`${e}_${t}`]=a),l.remove(),V()})}function ht(e,t,r,i){var d;(d=document.querySelector(".irr-edit-overlay"))==null||d.remove();let n=i;const l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigation détectée — ${G(r)}</span>
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
    </div>`,document.body.appendChild(l),l.querySelector("#irr-det-ed-qty").addEventListener("input",a=>{const S=parseInt(a.target.value);S>0&&(n=S)}),l.addEventListener("click",a=>{a.target===l&&l.remove()}),l.querySelector("#irr-det-ed-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-det-ed-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-det-ed-del").addEventListener("click",()=>{p.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),_(),l.remove(),V()}),l.querySelector("#irr-det-ed-save").addEventListener("click",()=>{p.push({iso:r,mm:n,real:r<=L,plotId:e,detectorConfirmed:!0}),_(),l.remove(),V()})}function $t(e,t){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();let r=e.iso,i=e.mm;const n=document.createElement("div");n.className="irr-edit-overlay",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),n.addEventListener("click",d=>{d.target===n&&n.remove()}),n.querySelector("#irr-di-close").addEventListener("click",()=>n.remove()),n.querySelector("#irr-di-cancel").addEventListener("click",()=>n.remove()),n.querySelector("#irr-di-date").addEventListener("change",d=>{r=d.target.value}),n.querySelector("#irr-di-qty").addEventListener("input",d=>{const a=parseInt(d.target.value);a>0&&(i=a)}),n.querySelector("#irr-di-del").addEventListener("click",()=>{const d=p.indexOf(e);d>=0&&p.splice(d,1),_(),n.remove(),t()}),n.querySelector("#irr-di-save").addEventListener("click",()=>{e.iso=r,e.mm=i,e.real=r<=L,_(),n.remove(),t()})}function xt(e,t){var c,f,q,D;const r=p.filter(v=>v.plotId===e&&v.fromStrategy&&v.seasonId),i=[...r].sort((v,u)=>v.iso<u.iso?-1:1),n=new Set(r.map(v=>v.seasonId));let l=((c=i[0])==null?void 0:c.iso)||L,d=((f=i[i.length-1])==null?void 0:f.iso)||K(L,90),a=((q=i[0])==null?void 0:q.mm)||10,S=i.length>=2?Math.max(1,Math.round((new Date(i[i.length-1].iso)-new Date(i[0].iso))/864e5/(i.length-1))):7;const w=l,A=d;let $="form";(D=document.querySelector(".irr-edit-overlay"))==null||D.remove();const g=document.createElement("div");g.className="irr-edit-overlay";function m(){if(!l||!d||S<=0)return[];const v=[],u=new Date(d);let h=new Date(l);for(;h<=u&&v.length<200;)v.push(h.toISOString().split("T")[0]),h.setDate(h.getDate()+S);return v}function T(){const v=m(),u=v.filter(h=>h>L).length;g.querySelector("#irr-ms-preview").textContent=v.length>0?`↗ ${v.length} irrigations · ${v.length*a} mm · dont ${u} à venir`:"Ajustez les dates et la fréquence"}function M(){return`
      <div class="irr-edit-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Début</label>
            <input type="date" id="irr-ms-debut" value="${l}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fin</label>
            <input type="date" id="irr-ms-fin" value="${d}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Quantité (mm/irrig.)</label>
            <input type="number" id="irr-ms-qty" value="${a}" min="1" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fréquence (jours)</label>
            <input type="number" id="irr-ms-freq" value="${S}" min="1" max="30" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
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
      </div>`}function B(){const v=l!==w||d!==A,u=m();return`
      <div class="irr-edit-body">
        <div style="font-size:13px;color:var(--txt2);line-height:1.5;background:#FEF6E6;border:1px solid #F5D98B;border-radius:8px;padding:10px 12px">
          ${v?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées."}
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--txt3)">
          ${G(l)} → ${G(d)} · ${a} mm tous les ${S} jours · ${u.length} irrigations
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-ms-back">Retour</button>
        <button class="iw-btn iw-btn--pri" id="irr-ms-confirm">Confirmer la modification</button>
      </div>`}function z(){g.innerHTML=`
      <div class="irr-edit-modal" style="max-width:460px">
        <div class="irr-edit-hd">
          <span>Modifier la saison</span>
          <button class="irr-edit-close" id="irr-ms-close">×</button>
        </div>
        ${$==="form"?M():B()}
      </div>`,g.querySelector("#irr-ms-close").addEventListener("click",()=>g.remove()),$==="form"?(T(),g.querySelector("#irr-ms-cancel").addEventListener("click",()=>g.remove()),g.querySelector("#irr-ms-debut").addEventListener("change",v=>{l=v.target.value,T()}),g.querySelector("#irr-ms-fin").addEventListener("change",v=>{d=v.target.value,T()}),g.querySelector("#irr-ms-qty").addEventListener("input",v=>{const u=parseInt(v.target.value);u>0&&(a=u,T())}),g.querySelector("#irr-ms-freq").addEventListener("input",v=>{const u=parseInt(v.target.value);u>0&&(S=u,T())}),g.querySelector("#irr-ms-save").addEventListener("click",()=>{$="confirm",z()})):(g.querySelector("#irr-ms-back").addEventListener("click",()=>{$="form",z()}),g.querySelector("#irr-ms-confirm").addEventListener("click",()=>{const v=l!==w||d!==A,u=m(),h=v?u:u.filter(y=>y>L),E=p.filter(y=>!(y.plotId===e&&n.has(y.seasonId)&&(v||y.iso>L)));p.splice(0,p.length,...E);const s=Ne();for(const y of h)p.push({iso:y,mm:a,real:y<=L,plotId:e,fromStrategy:!0,seasonId:s});_(),g.remove(),oe("Saison modifiée",[`Début : ${G(l)} · Fin : ${G(d)}`,`${u.length} irrigations · ${a} mm · tous les ${S} j`,v?"Modifications appliquées à toute la saison.":"Modifications appliquées à partir de demain."]),t==null||t()}))}document.body.appendChild(g),z(),g.addEventListener("click",v=>{v.target===g&&g.remove()})}function Fe(e){var r;const t=document.getElementById("irr-right");t&&(t.querySelectorAll("[data-row-plot]").forEach(i=>i.classList.remove("irr-gl-row--active")),e&&((r=t.querySelector(`[data-row-plot="${e}"]`))==null||r.classList.add("irr-gl-row--active")))}function Xe(e){const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!(!t||!r)){if(r.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=String(e.id),r.style.display="",t.classList.add("irr-has-detail"),Fe(String(e.id)),ee(e)}}const St=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function ee(e){var h,E,s,y,k,F,C,j,R,I;const t=document.getElementById("irr-detail");if(!t)return;const r=((h=t.querySelector(".irr-pr-details"))==null?void 0:h.open)??!1;if(!Ye(e)){t.style.display="",t.dataset.plotId=String(e.id),t.innerHTML=`
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
      </div>`,(E=t.querySelector("#irr-det-close"))==null||E.addEventListener("click",()=>{var o;(o=document.getElementById("irr-page"))==null||o.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Fe(null)}),(s=t.querySelector("#irr-det-type-save"))==null||s.addEventListener("click",()=>{const o=t.querySelector("#irr-det-type-sel").value;De(e.id,{irrigation:o}),e.irrigation=o,ee(e),V(!0)});return}const i=p.filter(o=>o.plotId===e.id),n=i.some(o=>o.fromStrategy&&o.seasonId),l=i.filter(o=>o.fromStrategy).sort((o,b)=>o.iso<b.iso?-1:1),d=(y=l[0])==null?void 0:y.iso,a=(k=l[l.length-1])==null?void 0:k.iso,S=new Set(i.filter(o=>o.fromStrategy&&o.seasonId).map(o=>o.seasonId)),w=d&&a?`<div><strong>Saison :</strong> ${ye(d)} → ${ye(a)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',A=i.filter(o=>o.real).sort((o,b)=>o.iso<b.iso?-1:1),$=i.filter(o=>!o.real).sort((o,b)=>o.iso<b.iso?-1:1),g=e.area??0,m=A.reduce((o,b)=>o+le(b.mm,g),0),T=$.reduce((o,b)=>o+le(b.mm,g),0),M=m+T,B=Qe(e.id),z=B&&g?Math.min(100,Math.round(m/B*100)):0,c=B&&g?Math.min(100-z,Math.round(T/B*100)):0,f=z+c,q=`
    <div class="irr-det-vol">
      <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--bdr2)">
        <div class="irr-det-vol-row">
          <span class="irr-det-vol-lbl">Volume saison :</span>
          <strong style="font-size:13px">${W(M)}</strong>
        </div>
        ${g?`<div class="irr-det-vol-row" style="gap:8px;margin-top:3px">
          <span style="color:#FF8500;font-size:11px">▪ ${W(m)} effectués</span>
          <span style="color:#FFB705;font-size:11px">▪ ${W(T)} planifiés</span>
        </div>`:'<div class="irr-det-vol-lbl" style="color:var(--txt3);margin-top:3px">surface non renseignée</div>'}
      </div>
      <div class="irr-det-vol-row">
        <span class="irr-det-vol-lbl">Volume limité :</span>
        <input class="irr-det-vol-input" id="irr-det-vol-input" type="number" min="0" placeholder="—" value="${B??""}" />
        <span class="irr-det-vol-lbl">m³</span>
      </div>
      ${B&&g?`
      <div class="irr-det-vol-bar">
        <div style="width:${z}%;background:#FF8500;height:100%"></div>
        <div style="width:${c}%;background:#FFB705;height:100%"></div>
      </div>
      ${M>B?`<div class="irr-det-vol-note" style="color:#E05252">Dépassement ${W(M-B)}</div>`:`<div class="irr-det-vol-note">${f}% · ${W(B-M)} restants</div>`}`:""}
    </div>`,D=o=>{const b=p.indexOf(o),x=o.real?"#FF8500":"#FFB705",[,J,X]=o.iso.split("-"),Y=`${parseInt(X)} ${St[parseInt(J)-1]}`,P=o.real?"Effectuée":"Planifiée",Q=o.detectorConfirmed?'<span class="irr-pr-det-tag">Détectée &amp; corrigée</span>':"";return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${x}"></div>
      <div class="irr-pr-date" style="color:${x};min-width:52px;font-size:13px;font-weight:600">${Y}</div>
      <div class="irr-pr-info">
        <div class="irr-pr-status" style="color:${x}">${P}</div>
        ${Q}
      </div>
      <div class="irr-pr-mm" style="color:${x}">${o.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${b}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${b}" title="Supprimer">🗑</button>
    </div>`},v=n?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
      </div>
    </div>`:"",u=se&&We(e)?`<div style="margin:16px 16px 16px;padding:12px;background:#FFF4E6;border-radius:8px;border-left:3px solid #E07820">
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
        <div class="irr-det-meta">${w}</div>
        ${v}
        ${gt(i)}
        ${ft(i)}
        ${q}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${A.length?`
        <details class="irr-pr-details"${r||!$.length?" open":""}>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${A.length}</span></summary>
          <div>${A.map(D).join("")}</div>
        </details>`:""}
      ${u}
      ${$.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${$.length}</span></summary>
          <div>${$.map(D).join("")}</div>
        </details>`:""}
      ${i.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(F=t.querySelector("#irr-det-strat-toggle"))==null||F.addEventListener("click",()=>{const o=t.querySelector("#irr-det-strat-opts");o.style.display=o.style.display==="none"?"":"none"}),(C=t.querySelector("#irr-det-modify"))==null||C.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none",xt(e.id,()=>{ee(e),V(!0)})}),(j=t.querySelector("#irr-det-stop"))==null||j.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const o=p.filter(b=>b.plotId===e.id&&S.has(b.seasonId)&&!b.real&&b.iso>L);p.splice(0,p.length,...p.filter(b=>!o.includes(b))),_(),oe("Saison arrêtée",[`${o.length} irrigation${o.length!==1?"s":""} future${o.length!==1?"s":""} supprimée${o.length!==1?"s":""}`,`Parcelle : ${e.name}`])}),(R=t.querySelector("#irr-det-del-all"))==null||R.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const o=p.filter(x=>x.plotId===e.id);if(!o.length)return;const b=o.some(x=>!x.fromStrategy);mt(`Supprimer toutes les irrigations de "${e.name}" ?`,`${o.length} irrigation${o.length!==1?"s":""} seront supprimées (passées et futures).`+(b?"<br><br>Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.":""),()=>{p.splice(0,p.length,...p.filter(x=>!o.includes(x))),_(),oe("Saison supprimée",[`${o.length} irrigation${o.length!==1?"s":""} supprimée${o.length!==1?"s":""}`,`Parcelle : ${e.name}`])})}),t.querySelectorAll(".irr-pr-edit").forEach(o=>{o.addEventListener("click",()=>{const b=p[+o.dataset.idx];b&&$t(b,()=>{ee(e),V(!0)})})}),t.querySelectorAll(".irr-pr-del").forEach(o=>{o.addEventListener("click",()=>{const b=+o.dataset.idx;b>=0&&(p.splice(b,1),_(),ee(e))})}),(I=t.querySelector("#irr-det-vol-input"))==null||I.addEventListener("change",o=>{const b=o.target.value!==""?parseInt(o.target.value):null;De(e.id,{volumeMaxM3:b}),ee(e),Ce()}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var o;(o=document.getElementById("irr-page"))==null||o.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Fe(null)})}function wt(e,t,r,i=10){var A;(A=document.querySelector(".irr-edit-overlay"))==null||A.remove();const n=U.find($=>$.id===+e),l=n&&!Ye(n),d=l?`
    <div class="irr-edit-row">
      <span class="irr-edit-label">Type d'irrigation</span>
      <select id="irr-qa-type-sel" style="flex:1;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
        ${Oe.map($=>`<option value="${$}"${$===(n.irrigation||"Non renseigné")?" selected":""}>${$}</option>`).join("")}
      </select>
    </div>`:"",a=document.createElement("div");a.className="irr-edit-overlay",a.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${G(r)}</span>
        <button class="irr-edit-close" id="irr-qa-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${l?`<p style="font-size:12px;color:var(--txt2);margin:0 0 10px">Précisez le type d'irrigation de cette parcelle pour pouvoir saisir une irrigation.</p>`:""}
        ${d}
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
    </div>`,document.body.appendChild(a),a.addEventListener("click",$=>{$.target===a&&a.remove()}),a.querySelector("#irr-qa-close").addEventListener("click",()=>a.remove()),a.querySelector("#irr-qa-cancel").addEventListener("click",()=>a.remove());const S=a.querySelector("#irr-qa-save"),w=a.querySelector("#irr-qa-type-sel");if(w){const $=()=>{S.disabled=Te.has(w.value)};$(),w.addEventListener("change",$)}S.addEventListener("click",()=>{if(w){const g=w.value;if(Te.has(g))return;De(n.id,{irrigation:g}),n.irrigation=g}const $=parseInt(a.querySelector("#irr-qa-qty").value)||10;p.push({iso:r,mm:$,real:r<=L,plotId:+e,fromStrategy:!1}),_(),a.remove(),V(!0)})}function ne(){var d,a,S,w,A,$,g,m,T,M,B,z;const e=document.getElementById("irr-left"),t=[..._e].filter(c=>c.id!==100).sort((c,f)=>c.name.localeCompare(f.name)),r=ge?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${re===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${re===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${t.map(c=>`<option value="${c.id}"${c.id===re?" selected":""}>${c.name}</option>`).join("")}
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
        <input type="date" class="irr-lc-input" id="irr-s-date" value="${L}" />
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
        <input type="date" class="irr-lc-input" id="irr-sa-debut" value="${L}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Fin</label>
        <input type="date" class="irr-lc-input" id="irr-sa-fin" value="${K(L,120)}" />
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
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${p.length?[...p].sort((c,f)=>c.iso<f.iso?-1:1)[0].iso:L}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${p.length?[...p].sort((c,f)=>c.iso>f.iso?-1:1)[0].iso:L}" />
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
        <input type="checkbox" id="irr-feat-advisor" ${se?"checked":""} />
        <span>Irrigation Advisor</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-reservoir" ${be?"checked":""} />
        <span>Reservoir Sensorless</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-detector" ${ie?"checked":""} />
        <span>Irrigation Detector</span>
      </label>
    </div>
  `,(d=e.querySelector("#irr-left-toggle"))==null||d.addEventListener("click",()=>{we=!0,ne()}),O==="saisie"&&Me(e,"irr-s-scope"),O==="saison"&&Me(e,"irr-sa-scope"),O==="export"&&Me(e,"irr-ex-scope"),(a=e.querySelector("#irr-org-select"))==null||a.addEventListener("change",c=>{const f=c.target.value;re=f===""?null:parseInt(f),U=re===null?fe:fe.filter(q=>q.orgId===re),Z=0,ne(),V()}),e.querySelectorAll(".irr-lc-btn").forEach(c=>{c.addEventListener("click",()=>{const f=c.dataset.action;O=O===f?null:f,ne()})});function n(){var s,y,k,F;const c=(s=e.querySelector("#irr-sa-debut"))==null?void 0:s.value,f=(y=e.querySelector("#irr-sa-fin"))==null?void 0:y.value,q=parseInt((k=e.querySelector("#irr-sa-qty"))==null?void 0:k.value)||0,D=parseInt((F=e.querySelector("#irr-sa-freq"))==null?void 0:F.value)||0,v=e.querySelector("#irr-sa-preview");if(!v)return;if(!c||!f||D<=0){v.textContent="—";return}let u=0,h=new Date(c),E=new Date(f);for(;h<=E&&u<200;)u++,h.setDate(h.getDate()+D);if(u>0){const j=me(e,"irr-sa-scope").reduce((o,b)=>{const x=he().find(J=>J.id===b);return o+((x==null?void 0:x.area)??0)},0),R=j>0?Math.round(u*q*j*10):0,I=R>0?` · ${R.toLocaleString("fr-FR")} m³`:"";v.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${u} irrigations · ${u*q} mm${I}</span>`}else v.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'}O==="saison"&&(n(),(S=e.querySelector("#irr-sa-debut"))==null||S.addEventListener("change",n),(w=e.querySelector("#irr-sa-fin"))==null||w.addEventListener("change",n),(A=e.querySelector("#irr-sa-qty"))==null||A.addEventListener("input",n),($=e.querySelector("#irr-sa-freq"))==null||$.addEventListener("input",n)),(g=e.querySelector("#irr-ex-dl"))==null||g.addEventListener("click",()=>{const c=e.querySelector("#irr-ex-start").value,f=e.querySelector("#irr-ex-end").value,q=e.querySelector("#irr-ex-irrig").checked,D=e.querySelector("#irr-ex-rain").checked,v=me(e,"irr-ex-scope"),u=v.length>0?U.filter(I=>v.includes(I.id)):he(),h=new Set;if(q)for(const I of p)I.iso>=c&&I.iso<=f&&h.add(I.iso);if(D)for(const I of ae)I.iso>=c&&I.iso<=f&&h.add(I.iso);const E=[...h].sort(),s={};if(D)for(const I of ae)s[I.iso]=I.mm;const y=["Date",...u.map(I=>I.name+(D?" (irrig.)":""))].join(";"),k=E.map(I=>{const o=u.map(b=>{const x=q?p.filter(Y=>Y.iso===I&&Y.plotId===b.id).reduce((Y,P)=>Y+P.mm,0):0,J=D?s[I]??0:0,X=x+J;return X>0?X:""});return[I,...o].join(";")}),F=[y,...k].join(`
`),C=new Blob([F],{type:"text/csv;charset=utf-8;"}),j=URL.createObjectURL(C),R=Object.assign(document.createElement("a"),{href:j,download:`irrigations_${c}_${f}.csv`});document.body.appendChild(R),R.click(),setTimeout(()=>{URL.revokeObjectURL(j),R.remove()},100)}),(m=e.querySelector("#irr-s-save"))==null||m.addEventListener("click",()=>{const c=me(e,"irr-s-scope"),f=e.querySelector("#irr-s-date").value,q=parseInt(e.querySelector("#irr-s-qty").value)||0,D=e.querySelector("#irr-s-err");if(!c.length||!f||!q){D&&(D.style.display="");return}D&&(D.style.display="none");const v=f>L,u=()=>{c.forEach(E=>{p.push({iso:f,mm:q,real:!v,plotId:E,fromStrategy:!1})}),_(),oe("Irrigation enregistrée",[`Date : ${G(f)}`,`Quantité : ${q} mm`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},h=p.filter(E=>c.includes(E.plotId)&&E.iso===f);if(h.length){Ve(h.length,`${c.length} parcelle(s)`,()=>{p.splice(0,p.length,...p.filter(E=>!(c.includes(E.plotId)&&E.iso===f))),u()});return}u()});const l=()=>{V();const c=document.getElementById("irr-detail"),f=c==null?void 0:c.dataset.plotId;if(f){const q=U.find(D=>String(D.id)===f);q&&ee(q)}};(T=e.querySelector("#irr-feat-advisor"))==null||T.addEventListener("change",c=>{se=c.target.checked,l()}),(M=e.querySelector("#irr-feat-reservoir"))==null||M.addEventListener("change",c=>{be=c.target.checked,l()}),(B=e.querySelector("#irr-feat-detector"))==null||B.addEventListener("change",c=>{ie=c.target.checked,l()}),(z=e.querySelector("#irr-sa-save"))==null||z.addEventListener("click",()=>{const c=me(e,"irr-sa-scope"),f=e.querySelector("#irr-sa-debut").value,q=e.querySelector("#irr-sa-fin").value,D=parseInt(e.querySelector("#irr-sa-qty").value)||10,v=parseInt(e.querySelector("#irr-sa-freq").value)||7,u=e.querySelector("#irr-sa-err");if(!c.length||!f||!q){u&&(u.style.display="");return}u&&(u.style.display="none");const h=[];let E=new Date(f),s=new Date(q);for(;E<=s&&h.length<200;)h.push(new Date(E)),E.setDate(E.getDate()+v);const y=Ne(),k=()=>{c.forEach(C=>{h.forEach(j=>{const R=j.toISOString().slice(0,10);p.push({iso:R,mm:D,real:R<=L,plotId:C,fromStrategy:!0,seasonId:y})})}),_(),oe("Saison enregistrée",[`Début : ${G(f)} · Fin : ${G(q)}`,`${h.length} irrigations · ${D} mm · tous les ${v} j`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},F=p.filter(C=>c.includes(C.plotId)&&C.iso>=f&&C.iso<=q);if(F.length){Ve(F.length,`${c.length} parcelle(s)`,()=>{p.splice(0,p.length,...p.filter(C=>!(c.includes(C.plotId)&&C.iso>=f&&C.iso<=q))),k()});return}k()})}function qt(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const r=t.target.closest("[data-tip]");if(!r){e.style.opacity="0";return}e.textContent=r.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var r;(r=t.relatedTarget)!=null&&r.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search),t=e.get("plot"),r=e.get("action");if((r==="saisie"||r==="saison")&&(O=r),rt(),qt(),ne(),V(),window.addEventListener("irrig-updated",()=>{V();const i=document.getElementById("irr-detail"),n=i==null?void 0:i.dataset.plotId;if(!n)return;const l=U.find(d=>String(d.id)===n);l&&ee(l)}),t){const i=U.find(n=>n.id===+t);i&&(Xe(i),(r==="saisie"||r==="saison")&&setTimeout(()=>{const n=r==="saisie"?"irr-s-scope":"irr-sa-scope",l=document.querySelector(`#${n} input[value="${t}"]`);l&&(l.checked=!0,l.dispatchEvent(new Event("change")))},50))}});
