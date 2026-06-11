import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as f,R as ae,g as Oe,s as _}from"./irrigations-C22Dtsoo.js";import{I as _e}from"./constants-DfU_DrBB.js";import{p as fe}from"./plots-DHZTuoR0.js";import{o as Ue}from"./orgs-DnFmvGlp.js";import{u as st}from"./breadcrumb-CzFWtd6d.js";import{d as Ae,e as Ye,f as He,c as lt}from"./store-Cvb9jQ9w.js";import"./irrigation-web-BXGIk_I6.js";const Qe=1,ge=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let te=null,U=ge?fe:fe.filter(e=>e.orgId===Qe);const E=new Date().toISOString().split("T")[0];let O=null,Ee=!1,Z=0,ie=!1,be=!1,re=!1;const Te={};let qe=!0,Le=!0,pe=!0,ke=!0,Ie=!0,ve=!0;function J(e,r){const t=new Date(e);return t.setDate(t.getDate()+r),t.toISOString().split("T")[0]}function K(e){const r=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,t,s]=e.split("-");return`${parseInt(s)} ${r[parseInt(t)-1]} ${e.split("-")[0]}`}function ye(e){const r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,t,s]=e.split("-");return`${parseInt(s)} ${r[parseInt(t)-1]}`}function nt(e){const[,r,t]=e.split("-");return`${t}/${r}`}const at=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function Ne(e){const[r,t,s]=e.split("-").map(Number);return new Date(Date.UTC(r,t-1,s)).getUTCDay()}function ot(e){const[r,t,s]=e.split("-").map(Number),a=new Date(Date.UTC(r,t-1,s)),l=a.getUTCDay()||7;a.setUTCDate(a.getUTCDate()+4-l);const c=new Date(Date.UTC(a.getUTCFullYear(),0,1));return Math.ceil(((a-c)/864e5+1)/7)}function dt(e){return[e.name+(e.area?` (${e.area} ha)`:""),e.crop,e.irrigation].filter(Boolean).join(" — ")}const Fe=new Set(["Non irrigué","Non renseigné",""]);function We(e){return!!e.irrigation&&!Fe.has(e.irrigation)}function le(e,r){return Math.round(e*(r??0)*10)}function Q(e){return e.toLocaleString("fr-FR")+" m³"}function ct(e){var t;const r=Ye(e).volumeMax;return r!==void 0?r:((t=Ue.find(s=>s.id===e))==null?void 0:t.volumeMax)??null}function Ge(e){return lt(e).volumeMaxM3??null}function he(){return[...U].sort((e,r)=>e.name.localeCompare(r.name,"fr"))}function Je(e){return e.id%3===2}function Xe(e){return 25+e.id*7%20}function ut(e){return e.id%9===2}function pt(e,r){const[,t,s]=r.split("-").map(Number);return Math.min(65,Math.max(5,30+(e.id*7+t*3+s*2)%30))}function Ke(e){const r=(e.irrigation||"").toLowerCase();return["rampe","pivot","enrouleur"].some(t=>r.includes(t))}function vt(e){if(!Ke(e))return[];const r=[];let t=e.id*17,s=new Date(J(E,-45));const a=new Date(J(E,-1));for(;s<=a;){const l=s.toISOString().split("T")[0],c=t%7-3;t=(t*31+17)%1e3,r.push({iso:l,mm:Math.max(8,15+c),real:!0,plotId:e.id,fromDetector:!0}),s.setDate(s.getDate()+5+t%3),t=(t*31+17)%1e3}return r}function Me(e,r={}){const{allBtn:t=!1}=r,s=he().map(a=>`
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${a.id}" />
      <span class="irr-msel-name">${dt(a)}</span>
    </label>`).join("");return`<div class="irr-msel" id="${e}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${s}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${t?'<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>':""}
    </div>
  </div>`}function De(e,r){const t=e.querySelector(`#${r}`);if(!t)return;const s=t.querySelector(".irr-msel-search"),a=t.querySelector(".irr-msel-count"),l=t.querySelector(".irr-msel-all-btn"),c=()=>{const o=t.querySelectorAll(".irr-msel-cb:checked").length;a.textContent=`${o} sélectionnée${o!==1?"s":""}`};s.addEventListener("input",()=>{const o=s.value.toLowerCase();t.querySelectorAll(".irr-msel-item").forEach(h=>{h.style.display=h.querySelector(".irr-msel-name").textContent.toLowerCase().includes(o)?"":"none"})}),t.querySelectorAll(".irr-msel-cb").forEach(o=>o.addEventListener("change",c)),l==null||l.addEventListener("click",()=>{const o=[...t.querySelectorAll(".irr-msel-cb")].filter(m=>m.closest(".irr-msel-item").style.display!=="none"),h=o.some(m=>!m.checked);o.forEach(m=>{m.checked=h}),c()})}function me(e,r){const t=e.querySelector(`#${r}`);return t?[...t.querySelectorAll(".irr-msel-cb:checked")].map(s=>+s.value):[]}function oe(e,r){var a;(a=document.querySelector(".irr-save-confirm"))==null||a.remove();const t=document.createElement("div");t.className="irr-save-confirm",t.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${r.map(l=>`<div>${l}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(t);const s=()=>{t.remove(),N(!0)};t.addEventListener("click",l=>{l.target===t&&s()}),t.querySelector("#irr-confirm-close").addEventListener("click",s)}function Ve(e,r,t){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigations existantes</span>
        <button class="irr-edit-close" id="irr-cf-close">×</button>
      </div>
      <div class="irr-edit-body" style="font-size:13px;color:var(--txt);line-height:1.5">
        <p style="margin:0"><strong>${e} irrigation${e>1?"s":""}</strong> déjà enregistrée${e>1?"s":""} pour <strong>${r}</strong>.</p>
        <p style="margin:8px 0 0;color:var(--txt2)">Voulez-vous les écraser avec la nouvelle saisie ?</p>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-cf-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-cf-overwrite">Écraser</button>
      </div>
    </div>`,document.body.appendChild(s);const a=()=>s.remove();s.addEventListener("click",c=>{c.target===s&&a()}),s.querySelector("#irr-cf-close").addEventListener("click",a),s.querySelector("#irr-cf-cancel").addEventListener("click",a),s.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{s.remove(),t()})}function mt(e,r,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>${e}</span>
        <button class="irr-edit-close" id="irr-dc-close">×</button>
      </div>
      <div class="irr-edit-body" style="font-size:13px;color:var(--txt);line-height:1.5">
        <p style="margin:0;color:var(--txt2)">${r}</p>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-dc-cancel">Annuler</button>
        <button class="iw-btn iw-btn--danger" id="irr-dc-ok">Supprimer</button>
      </div>
    </div>`,document.body.appendChild(s),s.addEventListener("click",l=>{l.target===s&&s.remove()}),s.querySelector("#irr-dc-close").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-ok").addEventListener("click",()=>{s.remove(),t()})}function ft(e){if(e.length<2)return"";const r=[...e].sort((b,q)=>b.iso<q.iso?-1:1),t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=new Date(r[0].iso),a=new Date(r[r.length-1].iso),l=Math.max(a-s,1),c=500,o=24,h=5,m=5,L=o-m-4,y=L-m-3,F=o+h+13,P=F+2,j=m+2,k=b=>Math.round(j+(b-s)/l*(c-2*j)),g=b=>{const[,q,S]=b.split("-");return`${parseInt(S)}/${parseInt(q)}`},u=[],d=new Date(s.getFullYear(),s.getMonth()+1,1);for(;d<=a;)u.push(new Date(d)),d.setMonth(d.getMonth()+1);const v=u.map(b=>`<line x1="${k(b)}" y1="${o-6}" x2="${k(b)}" y2="${o+h+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),$=[s,...u,a],A=$.slice(0,-1).map((b,q)=>{const S=k(b),i=k($[q+1]);return i-S<16?"":`<text x="${Math.round((S+i)/2)}" y="${y}" font-size="9" fill="#B0AEA8" text-anchor="middle">${t[b.getMonth()]}</text>`}).join(""),B=r.map(b=>{const q=b.real?"#FF8500":"#FFB705",S=k(new Date(b.iso)),i=`${ye(b.iso)} · ${b.mm} mm`;return`<circle cx="${S}" cy="${L}" r="${m}" fill="${q}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${S}" cy="${L}" r="${m+6}" fill="transparent" pointer-events="all" data-tip="${i}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${c}" height="${P}" viewBox="0 0 ${c} ${P}" style="width:100%;display:block">
      ${A}<rect x="0" y="${o}" width="${c}" height="${h}" rx="${h/2}" fill="#E0DED8"/>${v}${B}
      <text x="1" y="${F}" font-size="9" fill="#B0AEA8">${g(r[0].iso)}</text>
      <text x="${c-1}" y="${F}" font-size="9" fill="#B0AEA8" text-anchor="end">${g(r[r.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function gt(e){const r=e.filter(l=>l.real),t=e.filter(l=>!l.real),s=r.reduce((l,c)=>l+c.mm,0),a=t.reduce((l,c)=>l+c.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${s} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${a} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${s+a} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function $e(){var k,g;const e=document.getElementById("irr-vol-banner-wrap");if(!e)return;const r=ge?te:Qe;if(!r){e.innerHTML="";return}const t=new Set(U.filter(u=>u.orgId===r).map(u=>u.id));ge||U.forEach(u=>t.add(u.id));const s=new Map(U.map(u=>[u.id,u])),a=f.filter(u=>t.has(u.plotId)&&u.real).reduce((u,d)=>{var v;return u+le(d.mm,((v=s.get(d.plotId))==null?void 0:v.area)??0)},0),l=f.filter(u=>t.has(u.plotId)&&!u.real).reduce((u,d)=>{var v;return u+le(d.mm,((v=s.get(d.plotId))==null?void 0:v.area)??0)},0),c=a+l,o=ct(r),h=o?Math.min(100,Math.round(a/o*100)):0,m=o?Math.min(100-h,Math.round(l/o*100)):0,L=h+m,y=Ye(r).pricePerM3,F=y!=null&&!isNaN(y)?y:.37,P=c?(c*F).toLocaleString("fr-FR",{maximumFractionDigits:0})+" €":"",j=u=>u!=null?u.toLocaleString("fr-FR"):"";e.innerHTML=`
    <div class="irr-vol-banner">
      <div class="irr-vol-main">
        <div class="irr-vol-title">Volume irrigation</div>
        <div class="irr-vol-total">${Q(c)}${o?` <span style="font-size:11px;font-weight:400;color:var(--txt3)">/ ${Q(o)}</span>`:""}</div>
        <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${Q(a)}</span> effectués · <span style="color:#FFB705">▪ ${Q(l)}</span> planifiés</div>
      </div>
      <div class="irr-vol-bar-wrap">
        <div class="irr-vol-bar-label">Consommation d'eau sur mon exploitation</div>
        ${o?"":'<div class="irr-vol-bar-nomax">Définissez un volume limité →</div>'}
        <div class="irr-vol-bar-bg">
          <div class="irr-vol-bar-real" style="width:${h}%"></div>
          <div class="irr-vol-bar-plan" style="width:${m}%"></div>
        </div>
        ${o?(()=>{const u=c-o;return u>0?`<div class="irr-vol-bar-pct" style="color:#E05252">Dépassement ${Q(u)}</div>`:`<div class="irr-vol-bar-pct">${L}% consommé${L>=90?" ⚠":""}</div>`})():""}
      </div>
      <div class="irr-vol-controls">
        <div class="irr-vol-ctrl-row">
          <span class="irr-vol-ctrl-lbl">Volume limité :</span>
          <input class="irr-vol-input" id="irr-vol-max-inp" type="text" inputmode="numeric" placeholder="—" value="${j(o)}" />
          <span class="irr-vol-ctrl-lbl">m³</span>
        </div>
        <div class="irr-vol-ctrl-row">
          <span class="irr-vol-ctrl-lbl" title="Coût eau + énergie + amortissement">Coût/m³ :</span>
          <input class="irr-vol-input" id="irr-vol-price-inp" type="number" min="0" step="0.001" value="${F}" style="width:65px" />
          <span class="irr-vol-ctrl-lbl">€${P?`<span class="irr-vol-cost"> → ${P}</span>`:""}</span>
        </div>
      </div>
    </div>`,(k=e.querySelector("#irr-vol-max-inp"))==null||k.addEventListener("change",u=>{const d=u.target.value.replace(/\s/g,"").replace(/\./g,"").replace(/,/g,""),v=d!==""?parseInt(d):null;v!==null&&(u.target.value=v.toLocaleString("fr-FR")),He(r,{volumeMax:v}),$e()}),(g=e.querySelector("#irr-vol-price-inp"))==null||g.addEventListener("change",u=>{const d=u.target.value!==""?parseFloat(u.target.value):.37;He(r,{pricePerM3:d}),$e()})}function N(e=!1){var b,q,S;$e();const r=document.getElementById("irr-right"),t=J(E,60),s=[...f.map(i=>i.iso),...ae.filter(i=>i.iso<=t).map(i=>i.iso),...re?[J(E,-45)]:[],J(E,-1),t];if(!f.length&&!ae.length){r.innerHTML=`<div class="irr-pr-empty" style="padding-top:60px"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const a=[...s].sort()[0],l=f.length?[...f].map(i=>i.iso).sort().at(-1):null,c=l&&l>t?l:t,o=new Date(c);o.setMonth(o.getMonth()+Z);const h=o.toISOString().split("T")[0],m=e?null:((b=r.querySelector("#irr-gl-body"))==null?void 0:b.scrollLeft)??null,L=[];let y=new Date(a);const F=new Date(h);for(;y<=F;)L.push(y.toISOString().split("T")[0]),y.setDate(y.getDate()+1);const P={};for(const i of ae)P[i.iso]=i.mm;function j(i){if(i<=E||i>J(E,13))return 0;const[,x,w]=i.split("-").map(Number),I=(x*17+w*13)%100;return I<65?0:3+I%9}function k(i,x,w){const I=`${i}_${x}`;if(Te[I]!==void 0)return Te[I];if(!w)return 0;const[,D,T]=x.split("-").map(Number);if((i*13+D*7+T*3)%100<12)return 0;const p=.75+(i*11+T*5)%50/100;return Math.round(w*p)}const g=J(E,7);let u="",d="",v=0,$=null;for(const i of L){const x=i===E,w=Ne(i),I=w===0,D=I?" irr-gl-th--week-end":"";$===null&&($=ot(i)),v++;const T=ie&&i>E&&i<=g;u+=`<th class="irr-gl-th${x?" irr-gl-th--today":""}${D}${T?" irr-gl-th--advisor-range":""}"><span class="irr-gl-day-name">${at[w]}</span>${nt(i)}</th>`;const n=i===L[L.length-1];(I||n)&&(d+=`<th class="irr-gl-week-hd${I?" irr-gl-th--week-end":""}" colspan="${v}">S${$}</th>`,v=0,$=null),ie&&i===g&&(u+='<th class="irr-gl-th irr-gl-th--advisor">Reco J+7</th>',d+='<th class="irr-gl-week-hd"></th>')}function A(i){const x=re?vt(i):[],w=ie&&Je(i),I=be&&ut(i),D=Ke(i);let T="";for(const M of L){const W=M===E,G=f.filter(R=>R.iso===M&&R.plotId===i.id),Y=G.length===0?x.filter(R=>R.iso===M):[],C=G.filter(R=>!R.detectorDismissed).filter(R=>R.detectorConfirmed?re&&Ie:R.real?qe:Le),X=ke?Y:[],Pe=[...C,...X],Be=Pe.reduce((R,ee)=>R+ee.mm,0),et=Pe.some(R=>R.real),tt=(i.id*7+3)%3-1,Re=J(M,tt),de=k(i.id,M,P[Re]??j(Re));let je="";de&&pe&&(je=re&&D?`<span class="irr-gl-rain irr-gl-rain--edit" data-rain-plotid="${i.id}" data-rain-iso="${M}" data-rain-mm="${de}">${de} mm</span>`:`<span class="irr-gl-rain">${de} mm</span>`);let xe="";if(Be){const R=et?"#E07820":"#FFB705",ee=C.map(V=>f.indexOf(V)).filter(V=>V>=0).join(","),ue=X.length?'<span class="irr-gl-det-badge" title="Détecté automatiquement">D</span>':C.some(V=>V.detectorConfirmed)?'<span class="irr-gl-conf-badge" title="Irrigation confirmée">C</span>':"",Se=X.reduce((V,we)=>V+we.mm,0);xe=`<span class="irr-gl-val irr-gl-irrig" style="color:${R};cursor:pointer"${ee?` data-idxs="${ee}" data-iso="${M}"`:` data-det-plotid="${i.id}" data-det-plotname="${i.name}" data-det-iso="${M}" data-det-mm="${Se}"`}>${Be} mm${ue}</span>`}else xe=`<button class="irr-gl-add" data-plot-id="${i.id}" data-plot-name="${i.name}" data-iso="${M}">+</button>`;let ze="";I&&ve&&M<E&&(ze=`<span class="irr-gl-res">${pt(i,M)} mm</span>`);let ce="";pe&&(ce+=`<div class="irr-gl-slot">${je}</div>`),ce+=`<div class="irr-gl-slot">${xe}</div>`,I&&ve&&(ce+=`<div class="irr-gl-slot">${ze}</div>`);const rt=Ne(M)===0,it=w&&M>E&&M<=g;if(T+=`<td class="irr-gl-td${W?" irr-gl-td--today":""}${rt?" irr-gl-td--week-end":""}${it?" irr-gl-td--advisor-range":""}">${ce}</td>`,ie&&M===g){let R="";if(w){const ee=Xe(i),ue=f.filter(V=>V.plotId===i.id&&V.iso>E&&V.iso<=g).reduce((V,we)=>V+we.mm,0),Se=ue>=ee?"#24B066":"#E05252";R=`<span class="irr-gl-advisor">${ee} mm</span><span style="display:block;font-size:10px;font-weight:600;color:${Se}">${ue} mm planifié</span>`}T+=`<td class="irr-gl-td irr-gl-td--advisor">${R}</td>`}}const n=[i.crop,i.irrigation].filter(Boolean).join(" · "),p=i.area?`<span class="irr-gl-plot-area">(${i.area} ha)</span>`:"";let z="";const H=Ge(i.id);if(H){const M=i.area??0,W=f.filter(C=>C.plotId===i.id&&C.real).reduce((C,X)=>C+le(X.mm,M),0),G=f.filter(C=>C.plotId===i.id&&!C.real).reduce((C,X)=>C+le(X.mm,M),0),Y=W+G;if(Y>0)if(Y>H)z=`<span class="irr-gl-plot-deficit">Dépassement ${Q(Y-H)}</span>`;else{const C=Math.round(W/H*100),X=Math.min(100-C,Math.round(G/H*100));z=`<span class="irr-gl-plot-mini-bar"><span class="irr-gl-plot-mini-r" style="width:${C}%"></span><span class="irr-gl-plot-mini-p" style="width:${X}%"></span></span>`}}return`<tr data-row-plot="${i.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${i.id}">${i.name}</span>${p}${n?`<span class="irr-gl-plot-sub">${n}</span>`:""}${z}</td>${T}</tr>`}const B=he().map(A).join("");r.innerHTML=`
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-gl-legend">
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="real-irrig" ${qe?"checked":""}><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. effectuée</label>
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="plan-irrig" ${Le?"checked":""}><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</label>
          ${re?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="detected" ${ke?"checked":""}><span class="irr-gl-det-badge">D</span>&nbsp;Irrig. détectée</label><label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="confirmed" ${Ie?"checked":""}><span class="irr-gl-conf-badge">C</span>&nbsp;Irrig. corrigée</label>`:""}
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
            <tr><th class="irr-gl-plot-hd">Parcelles</th>${u}</tr>
          </thead>
          <tbody>${B}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${Z===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${Z>0?`+${Z} mois au-delà de la saison`:`Fin de saison : ${ye(c)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var D;const i=r.querySelector("#irr-gl-body"),x=r.querySelector("#irr-gl-table"),w=r.querySelector("#irr-gl-scroll-top"),I=r.querySelector("#irr-gl-scroll-inner");if(!(!i||!x||!w||!I))if(I.style.width=x.offsetWidth+"px",w.addEventListener("scroll",()=>{i.scrollLeft=w.scrollLeft}),i.addEventListener("scroll",()=>{w.scrollLeft=i.scrollLeft}),m!==null)i.scrollLeft=m,w.scrollLeft=m;else{const T=r.querySelector(".irr-gl-th--today");if(T){const p=T.previousElementSibling??T,z=((D=r.querySelector(".irr-gl-plot-hd"))==null?void 0:D.offsetWidth)??120,H=p.offsetLeft-z;i.scrollLeft=H,w.scrollLeft=H}}}),(q=r.querySelector("#irr-gl-prev-month"))==null||q.addEventListener("click",()=>{Z>0&&(Z--,N())}),(S=r.querySelector("#irr-gl-next-month"))==null||S.addEventListener("click",()=>{Z++,N()}),r.querySelectorAll(".irr-gl-filter").forEach(i=>{i.addEventListener("change",()=>{const x=i.dataset.filter;x==="real-irrig"?qe=i.checked:x==="plan-irrig"?Le=i.checked:x==="rain"?pe=i.checked:x==="detected"?ke=i.checked:x==="confirmed"?Ie=i.checked:x==="reservoir"&&(ve=i.checked),N()})}),r.querySelectorAll(".irr-gl-irrig").forEach(i=>{i.addEventListener("click",()=>{i.dataset.idxs?bt(i.dataset.idxs.split(",").map(Number),i.dataset.iso):i.dataset.detPlotid&&ht(+i.dataset.detPlotid,i.dataset.detPlotname,i.dataset.detIso,+i.dataset.detMm)})}),r.querySelectorAll(".irr-gl-rain--edit").forEach(i=>{i.addEventListener("click",()=>{yt(+i.dataset.rainPlotid,i.dataset.rainIso,+i.dataset.rainMm)})}),r.querySelectorAll(".irr-gl-add").forEach(i=>{i.addEventListener("click",()=>{wt(i.dataset.plotId,i.dataset.plotName,i.dataset.iso)})}),r.querySelectorAll(".irr-gl-plot-link").forEach(i=>{i.addEventListener("click",()=>{const x=U.find(w=>String(w.id)===i.dataset.plotId);x&&Ze(x)})})}function bt(e,r){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const t=document.createElement("div");t.className="irr-edit-overlay";const s=e.map(l=>f[l]).filter(Boolean);t.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${K(r)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${s.map((l,c)=>{const o=U.find(m=>m.id===l.plotId);return`<div class="irr-edit-row">
            <span class="irr-edit-label">${o?o.name:`Parcelle ${l.plotId}`}</span>
            <input type="number" class="irr-edit-qty" data-i="${c}" value="${l.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${c}">🗑</button>
          </div>`}).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",l=>{l.target===t&&t.remove()}),t.querySelector("#irr-edit-close").addEventListener("click",()=>t.remove()),t.querySelector("#irr-edit-cancel").addEventListener("click",()=>t.remove()),t.querySelectorAll(".irr-edit-del").forEach(l=>{l.addEventListener("click",()=>{const c=s[+l.dataset.i],o=f.indexOf(c);o>=0&&(f.splice(o,1),_()),t.remove()})}),t.querySelector("#irr-edit-save").addEventListener("click",()=>{t.querySelectorAll(".irr-edit-qty").forEach(l=>{const c=s[+l.dataset.i],o=parseInt(l.value);c&&o>0&&(c.mm=o,c.real=r<=E)}),_(),t.remove()})}function yt(e,r,t){var c;(c=document.querySelector(".irr-edit-overlay"))==null||c.remove();const s=U.find(o=>o.id===e),a=s?s.name:`Parcelle ${e}`,l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier la pluie — ${K(r)}</span>
        <button class="irr-edit-close" id="irr-rain-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${a}</span>
          <input type="number" id="irr-rain-qty" value="${t}" min="0" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-rain-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-rain-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(l),l.addEventListener("click",o=>{o.target===l&&l.remove()}),l.querySelector("#irr-rain-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-save").addEventListener("click",()=>{const o=parseInt(l.querySelector("#irr-rain-qty").value);!isNaN(o)&&o>=0&&(Te[`${e}_${r}`]=o),l.remove(),N()})}function ht(e,r,t,s){var c;(c=document.querySelector(".irr-edit-overlay"))==null||c.remove();let a=s;const l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigation détectée — ${K(t)}</span>
        <button class="irr-edit-close" id="irr-det-ed-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${r}</span>
          <input type="number" id="irr-det-ed-qty" value="${s}" min="1" style="width:64px" />
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
    </div>`,document.body.appendChild(l),l.querySelector("#irr-det-ed-qty").addEventListener("input",o=>{const h=parseInt(o.target.value);h>0&&(a=h)}),l.addEventListener("click",o=>{o.target===l&&l.remove()}),l.querySelector("#irr-det-ed-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-det-ed-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-det-ed-del").addEventListener("click",()=>{f.push({iso:t,mm:0,real:!0,plotId:e,detectorDismissed:!0}),_(),l.remove(),N()}),l.querySelector("#irr-det-ed-save").addEventListener("click",()=>{f.push({iso:t,mm:a,real:t<=E,plotId:e,detectorConfirmed:!0}),_(),l.remove(),N()})}function $t(e,r){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();let t=e.iso,s=e.mm;const a=document.createElement("div");a.className="irr-edit-overlay",a.innerHTML=`
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
    </div>`,document.body.appendChild(a),a.addEventListener("click",c=>{c.target===a&&a.remove()}),a.querySelector("#irr-di-close").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-date").addEventListener("change",c=>{t=c.target.value}),a.querySelector("#irr-di-qty").addEventListener("input",c=>{const o=parseInt(c.target.value);o>0&&(s=o)}),a.querySelector("#irr-di-del").addEventListener("click",()=>{const c=f.indexOf(e);c>=0&&f.splice(c,1),_(),a.remove(),r()}),a.querySelector("#irr-di-save").addEventListener("click",()=>{e.iso=t,e.mm=s,e.real=t<=E,_(),a.remove(),r()})}function xt(e,r){var F,P,j,k;const t=f.filter(g=>g.plotId===e&&g.fromStrategy&&g.seasonId),s=[...t].sort((g,u)=>g.iso<u.iso?-1:1),a=new Set(t.map(g=>g.seasonId));let l=((F=s[0])==null?void 0:F.iso)||E,c=((P=s[s.length-1])==null?void 0:P.iso)||J(E,90),o=((j=s[0])==null?void 0:j.mm)||10,h=s.length>=2?Math.max(1,Math.round((new Date(s[s.length-1].iso)-new Date(s[0].iso))/864e5/(s.length-1))):7;(k=document.querySelector(".irr-edit-overlay"))==null||k.remove();const m=document.createElement("div");m.className="irr-edit-overlay";function L(){if(!l||!c||h<=0)return[];const g=[],u=new Date(c);let d=new Date(l);for(;d<=u&&g.length<200;)g.push(d.toISOString().split("T")[0]),d.setDate(d.getDate()+h);return g}function y(){const g=L(),u=g.filter(d=>d>E).length;m.querySelector("#irr-ms-preview").textContent=g.length>0?`↗ ${g.length} irrigations · ${g.length*o} mm · dont ${u} à venir`:"Ajustez les dates et la fréquence"}m.innerHTML=`
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
            <input type="number" id="irr-ms-qty" value="${o}" min="1" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
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
    </div>`,document.body.appendChild(m),y(),m.addEventListener("click",g=>{g.target===m&&m.remove()}),m.querySelector("#irr-ms-close").addEventListener("click",()=>m.remove()),m.querySelector("#irr-ms-cancel").addEventListener("click",()=>m.remove()),m.querySelector("#irr-ms-debut").addEventListener("change",g=>{l=g.target.value,y()}),m.querySelector("#irr-ms-fin").addEventListener("change",g=>{c=g.target.value,y()}),m.querySelector("#irr-ms-qty").addEventListener("input",g=>{const u=parseInt(g.target.value);u>0&&(o=u,y())}),m.querySelector("#irr-ms-freq").addEventListener("input",g=>{const u=parseInt(g.target.value);u>0&&(h=u,y())}),m.querySelector("#irr-ms-save").addEventListener("click",()=>{const g=f.filter(v=>!(v.plotId===e&&a.has(v.seasonId)));f.splice(0,f.length,...g);const u=Oe(),d=L();for(const v of d)f.push({iso:v,mm:o,real:v<=E,plotId:e,fromStrategy:!0,seasonId:u});_(),m.remove(),oe("Saison modifiée",[`Début : ${K(l)} · Fin : ${K(c)}`,`${d.length} irrigations · ${o} mm · tous les ${h} j`])})}function Ce(e){var t;const r=document.getElementById("irr-right");r&&(r.querySelectorAll("[data-row-plot]").forEach(s=>s.classList.remove("irr-gl-row--active")),e&&((t=r.querySelector(`[data-row-plot="${e}"]`))==null||t.classList.add("irr-gl-row--active")))}function Ze(e){const r=document.getElementById("irr-page"),t=document.getElementById("irr-detail");if(!(!r||!t)){if(t.dataset.plotId===String(e.id)&&r.classList.contains("irr-has-detail")){r.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="";return}t.dataset.plotId=String(e.id),t.style.display="",r.classList.add("irr-has-detail"),Ce(String(e.id)),se(e)}}const St=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function se(e){var b,q,S,i,x,w,I,D,T;const r=document.getElementById("irr-detail");if(!r)return;if(!We(e)){r.style.display="",r.dataset.plotId=String(e.id),r.innerHTML=`
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
            ${_e.map(n=>`<option value="${n}"${n===(e.irrigation||"Non renseigné")?" selected":""}>${n}</option>`).join("")}
          </select>
          <button id="irr-det-type-save" class="btn-primary" style="margin-top:10px;width:100%;justify-content:center">Enregistrer</button>
        </div>
      </div>`,(b=r.querySelector("#irr-det-close"))==null||b.addEventListener("click",()=>{var n;(n=document.getElementById("irr-page"))==null||n.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="",Ce(null)}),(q=r.querySelector("#irr-det-type-save"))==null||q.addEventListener("click",()=>{const n=r.querySelector("#irr-det-type-sel").value;Ae(e.id,{irrigation:n}),e.irrigation=n,se(e),N(!0)});return}const t=f.filter(n=>n.plotId===e.id),s=t.some(n=>n.fromStrategy&&n.seasonId),a=t.filter(n=>n.fromStrategy).sort((n,p)=>n.iso<p.iso?-1:1),l=(S=a[0])==null?void 0:S.iso,c=(i=a[a.length-1])==null?void 0:i.iso,o=new Set(t.filter(n=>n.fromStrategy&&n.seasonId).map(n=>n.seasonId)),h=l&&c?`<div><strong>Saison :</strong> ${ye(l)} → ${ye(c)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',m=t.filter(n=>n.real).sort((n,p)=>n.iso<p.iso?-1:1),L=t.filter(n=>!n.real).sort((n,p)=>n.iso<p.iso?-1:1),y=e.area??0,F=m.reduce((n,p)=>n+le(p.mm,y),0),P=L.reduce((n,p)=>n+le(p.mm,y),0),j=F+P,k=Ge(e.id),g=k&&y?Math.min(100,Math.round(F/k*100)):0,u=k&&y?Math.min(100-g,Math.round(P/k*100)):0,d=g+u,v=`
    <div class="irr-det-vol">
      <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--bdr2)">
        <div class="irr-det-vol-row">
          <span class="irr-det-vol-lbl">Volume saison :</span>
          <strong style="font-size:13px">${Q(j)}</strong>
        </div>
        ${y?`<div class="irr-det-vol-row" style="gap:8px;margin-top:3px">
          <span style="color:#FF8500;font-size:11px">▪ ${Q(F)} effectués</span>
          <span style="color:#FFB705;font-size:11px">▪ ${Q(P)} planifiés</span>
        </div>`:'<div class="irr-det-vol-lbl" style="color:var(--txt3);margin-top:3px">surface non renseignée</div>'}
      </div>
      <div class="irr-det-vol-row">
        <span class="irr-det-vol-lbl">Volume limité :</span>
        <input class="irr-det-vol-input" id="irr-det-vol-input" type="number" min="0" placeholder="—" value="${k??""}" />
        <span class="irr-det-vol-lbl">m³</span>
      </div>
      ${k&&y?`
      <div class="irr-det-vol-bar">
        <div style="width:${g}%;background:#FF8500;height:100%"></div>
        <div style="width:${u}%;background:#FFB705;height:100%"></div>
      </div>
      ${j>k?`<div class="irr-det-vol-note" style="color:#E05252">Dépassement ${Q(j-k)}</div>`:`<div class="irr-det-vol-note">${d}% · ${Q(k-j)} restants</div>`}`:""}
    </div>`,$=n=>{const p=f.indexOf(n),z=n.real?"#FF8500":"#FFB705",[,H,M]=n.iso.split("-"),W=`${parseInt(M)} ${St[parseInt(H)-1]}`,G=n.real?"Effectuée":"Planifiée",Y=n.detectorConfirmed?'<span class="irr-pr-det-tag">Détectée &amp; corrigée</span>':"";return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${z}"></div>
      <div class="irr-pr-date" style="color:${z};min-width:52px;font-size:13px;font-weight:600">${W}</div>
      <div class="irr-pr-info">
        <div class="irr-pr-status" style="color:${z}">${G}</div>
        ${Y}
      </div>
      <div class="irr-pr-mm" style="color:${z}">${n.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${p}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${p}" title="Supprimer">🗑</button>
    </div>`},A=s?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
      </div>
    </div>`:"",B=ie&&Je(e)?`<div style="margin:16px 16px 16px;padding:12px;background:#FFF4E6;border-radius:8px;border-left:3px solid #E07820">
         <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#E07820;margin-bottom:4px">Recommandations d'irrigation sur les 7 prochains jours</div>
         <div style="font-size:22px;font-weight:700;color:#E07820">${Xe(e)} mm</div>
       </div>`:"";r.innerHTML=`
    <div class="irr-det-sticky">
      <div class="irr-det-hd">
        <div style="flex:1;min-width:0">
          <div class="irr-det-name">${e.name}</div>
          <a class="irr-det-link" href="parcelle-detail.html?id=${e.id}">Voir la parcelle →</a>
        </div>
        <button class="irr-det-close" id="irr-det-close">×</button>
      </div>
      <div class="irr-det-body">
        <div class="irr-det-meta">${h}</div>
        ${A}
        ${gt(t)}
        ${ft(t)}
        ${v}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${m.length?`
        <details class="irr-pr-details">
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${m.length}</span></summary>
          <div>${m.map($).join("")}</div>
        </details>`:""}
      ${B}
      ${L.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${L.length}</span></summary>
          <div>${L.map($).join("")}</div>
        </details>`:""}
      ${t.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(x=r.querySelector("#irr-det-strat-toggle"))==null||x.addEventListener("click",()=>{const n=r.querySelector("#irr-det-strat-opts");n.style.display=n.style.display==="none"?"":"none"}),(w=r.querySelector("#irr-det-modify"))==null||w.addEventListener("click",()=>{r.querySelector("#irr-det-strat-opts").style.display="none",xt(e.id)}),(I=r.querySelector("#irr-det-stop"))==null||I.addEventListener("click",()=>{r.querySelector("#irr-det-strat-opts").style.display="none";const n=f.filter(p=>p.plotId===e.id&&o.has(p.seasonId)&&!p.real&&p.iso>E);f.splice(0,f.length,...f.filter(p=>!n.includes(p))),_(),oe("Saison arrêtée",[`${n.length} irrigation${n.length!==1?"s":""} future${n.length!==1?"s":""} supprimée${n.length!==1?"s":""}`,`Parcelle : ${e.name}`])}),(D=r.querySelector("#irr-det-del-all"))==null||D.addEventListener("click",()=>{r.querySelector("#irr-det-strat-opts").style.display="none";const n=f.filter(p=>p.plotId===e.id&&o.has(p.seasonId));n.length&&mt(`Supprimer toutes les irrigations de "${e.name}" ?`,`${n.length} irrigation${n.length!==1?"s":""} seront supprimées (passées et futures).`,()=>{f.splice(0,f.length,...f.filter(p=>!n.includes(p))),_(),oe("Saison supprimée",[`${n.length} irrigation${n.length!==1?"s":""} supprimée${n.length!==1?"s":""}`,`Parcelle : ${e.name}`])})}),r.querySelectorAll(".irr-pr-edit").forEach(n=>{n.addEventListener("click",()=>{const p=f[+n.dataset.idx];p&&$t(p,()=>{se(e),N(!0)})})}),r.querySelectorAll(".irr-pr-del").forEach(n=>{n.addEventListener("click",()=>{const p=+n.dataset.idx;p>=0&&(f.splice(p,1),_(),se(e))})}),(T=r.querySelector("#irr-det-vol-input"))==null||T.addEventListener("change",n=>{const p=n.target.value!==""?parseInt(n.target.value):null;Ae(e.id,{volumeMaxM3:p}),se(e),$e()}),r.querySelector("#irr-det-close").addEventListener("click",()=>{var n;(n=document.getElementById("irr-page"))==null||n.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="",Ce(null)})}function wt(e,r,t,s=10){var L;(L=document.querySelector(".irr-edit-overlay"))==null||L.remove();const a=U.find(y=>y.id===+e),l=a&&!We(a),c=l?`
    <div class="irr-edit-row">
      <span class="irr-edit-label">Type d'irrigation</span>
      <select id="irr-qa-type-sel" style="flex:1;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
        ${_e.map(y=>`<option value="${y}"${y===(a.irrigation||"Non renseigné")?" selected":""}>${y}</option>`).join("")}
      </select>
    </div>`:"",o=document.createElement("div");o.className="irr-edit-overlay",o.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${K(t)}</span>
        <button class="irr-edit-close" id="irr-qa-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${l?`<p style="font-size:12px;color:var(--txt2);margin:0 0 10px">Précisez le type d'irrigation de cette parcelle pour pouvoir saisir une irrigation.</p>`:""}
        ${c}
        <div class="irr-edit-row">
          <span class="irr-edit-label">${r}</span>
          <input type="number" class="irr-edit-qty" id="irr-qa-qty" value="${s}" min="1" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-qa-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-qa-save"${l?" disabled":""}>Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(o),o.addEventListener("click",y=>{y.target===o&&o.remove()}),o.querySelector("#irr-qa-close").addEventListener("click",()=>o.remove()),o.querySelector("#irr-qa-cancel").addEventListener("click",()=>o.remove());const h=o.querySelector("#irr-qa-save"),m=o.querySelector("#irr-qa-type-sel");if(m){const y=()=>{h.disabled=Fe.has(m.value)};y(),m.addEventListener("change",y)}h.addEventListener("click",()=>{if(m){const F=m.value;if(Fe.has(F))return;Ae(a.id,{irrigation:F}),a.irrigation=F}const y=parseInt(o.querySelector("#irr-qa-qty").value)||10;f.push({iso:t,mm:y,real:t<=E,plotId:+e,fromStrategy:!1}),_(),o.remove(),N(!0)})}function ne(){var c,o,h,m,L,y,F,P,j,k,g,u;const e=document.getElementById("irr-left"),r=[...Ue].filter(d=>d.id!==100).sort((d,v)=>d.name.localeCompare(v.name)),t=ge?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${te===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${te===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${r.map(d=>`<option value="${d.id}"${d.id===te?" selected":""}>${d.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"",s=document.getElementById("irr-page");if(Ee){s==null||s.classList.add("irr-left-collapsed"),e.innerHTML=`
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Déplier le panneau">›</button>`,e.querySelector("#irr-left-toggle").addEventListener("click",()=>{Ee=!1,ne()});return}s==null||s.classList.remove("irr-left-collapsed"),e.innerHTML=`
    <div class="irr-lc-collapse-bar">
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Réduire le panneau">‹</button>
    </div>
    <div class="irr-lc-scroll">
    ${t}

    <button class="irr-lc-btn${O==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${O==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${Me("irr-s-scope",{allBtn:!0})}
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
        ${Me("irr-sa-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Début</label>
        <input type="date" class="irr-lc-input" id="irr-sa-debut" value="${E}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Fin</label>
        <input type="date" class="irr-lc-input" id="irr-sa-fin" value="${J(E,120)}" />
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
        ${Me("irr-ex-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Du</label>
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${f.length?[...f].sort((d,v)=>d.iso<v.iso?-1:1)[0].iso:E}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${f.length?[...f].sort((d,v)=>d.iso>v.iso?-1:1)[0].iso:E}" />
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
  `,(c=e.querySelector("#irr-left-toggle"))==null||c.addEventListener("click",()=>{Ee=!0,ne()}),O==="saisie"&&De(e,"irr-s-scope"),O==="saison"&&De(e,"irr-sa-scope"),O==="export"&&De(e,"irr-ex-scope"),(o=e.querySelector("#irr-org-select"))==null||o.addEventListener("change",d=>{const v=d.target.value;te=v===""?null:parseInt(v),U=te===null?fe:fe.filter($=>$.orgId===te),Z=0,ne(),N()}),e.querySelectorAll(".irr-lc-btn").forEach(d=>{d.addEventListener("click",()=>{const v=d.dataset.action;O=O===v?null:v,ne()})});function a(){var i,x,w,I;const d=(i=e.querySelector("#irr-sa-debut"))==null?void 0:i.value,v=(x=e.querySelector("#irr-sa-fin"))==null?void 0:x.value,$=parseInt((w=e.querySelector("#irr-sa-qty"))==null?void 0:w.value)||0,A=parseInt((I=e.querySelector("#irr-sa-freq"))==null?void 0:I.value)||0,B=e.querySelector("#irr-sa-preview");if(!B)return;if(!d||!v||A<=0){B.textContent="—";return}let b=0,q=new Date(d),S=new Date(v);for(;q<=S&&b<200;)b++,q.setDate(q.getDate()+A);if(b>0){const T=me(e,"irr-sa-scope").reduce((z,H)=>{const M=he().find(W=>W.id===H);return z+((M==null?void 0:M.area)??0)},0),n=T>0?Math.round(b*$*T*10):0,p=n>0?` · ${n.toLocaleString("fr-FR")} m³`:"";B.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${b} irrigations · ${b*$} mm${p}</span>`}else B.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'}O==="saison"&&(a(),(h=e.querySelector("#irr-sa-debut"))==null||h.addEventListener("change",a),(m=e.querySelector("#irr-sa-fin"))==null||m.addEventListener("change",a),(L=e.querySelector("#irr-sa-qty"))==null||L.addEventListener("input",a),(y=e.querySelector("#irr-sa-freq"))==null||y.addEventListener("input",a)),(F=e.querySelector("#irr-ex-dl"))==null||F.addEventListener("click",()=>{const d=e.querySelector("#irr-ex-start").value,v=e.querySelector("#irr-ex-end").value,$=e.querySelector("#irr-ex-irrig").checked,A=e.querySelector("#irr-ex-rain").checked,B=me(e,"irr-ex-scope"),b=B.length>0?U.filter(p=>B.includes(p.id)):he(),q=new Set;if($)for(const p of f)p.iso>=d&&p.iso<=v&&q.add(p.iso);if(A)for(const p of ae)p.iso>=d&&p.iso<=v&&q.add(p.iso);const S=[...q].sort(),i={};if(A)for(const p of ae)i[p.iso]=p.mm;const x=["Date",...b.map(p=>p.name+(A?" (irrig.)":""))].join(";"),w=S.map(p=>{const z=b.map(H=>{const M=$?f.filter(Y=>Y.iso===p&&Y.plotId===H.id).reduce((Y,C)=>Y+C.mm,0):0,W=A?i[p]??0:0,G=M+W;return G>0?G:""});return[p,...z].join(";")}),I=[x,...w].join(`
`),D=new Blob([I],{type:"text/csv;charset=utf-8;"}),T=URL.createObjectURL(D),n=Object.assign(document.createElement("a"),{href:T,download:`irrigations_${d}_${v}.csv`});document.body.appendChild(n),n.click(),setTimeout(()=>{URL.revokeObjectURL(T),n.remove()},100)}),(P=e.querySelector("#irr-s-save"))==null||P.addEventListener("click",()=>{const d=me(e,"irr-s-scope"),v=e.querySelector("#irr-s-date").value,$=parseInt(e.querySelector("#irr-s-qty").value)||0,A=e.querySelector("#irr-s-err");if(!d.length||!v||!$){A&&(A.style.display="");return}A&&(A.style.display="none");const B=v>E,b=()=>{d.forEach(S=>{f.push({iso:v,mm:$,real:!B,plotId:S,fromStrategy:!1})}),_(),oe("Irrigation enregistrée",[`Date : ${K(v)}`,`Quantité : ${$} mm`,`Parcelles : ${d.length} sélectionnée${d.length>1?"s":""}`])},q=f.filter(S=>d.includes(S.plotId)&&S.iso===v);if(q.length){Ve(q.length,`${d.length} parcelle(s)`,()=>{f.splice(0,f.length,...f.filter(S=>!(d.includes(S.plotId)&&S.iso===v))),b()});return}b()});const l=()=>{N();const d=document.getElementById("irr-detail"),v=d==null?void 0:d.dataset.plotId;if(v){const $=U.find(A=>String(A.id)===v);$&&se($)}};(j=e.querySelector("#irr-feat-advisor"))==null||j.addEventListener("change",d=>{ie=d.target.checked,l()}),(k=e.querySelector("#irr-feat-reservoir"))==null||k.addEventListener("change",d=>{be=d.target.checked,l()}),(g=e.querySelector("#irr-feat-detector"))==null||g.addEventListener("change",d=>{re=d.target.checked,l()}),(u=e.querySelector("#irr-sa-save"))==null||u.addEventListener("click",()=>{const d=me(e,"irr-sa-scope"),v=e.querySelector("#irr-sa-debut").value,$=e.querySelector("#irr-sa-fin").value,A=parseInt(e.querySelector("#irr-sa-qty").value)||10,B=parseInt(e.querySelector("#irr-sa-freq").value)||7,b=e.querySelector("#irr-sa-err");if(!d.length||!v||!$){b&&(b.style.display="");return}b&&(b.style.display="none");const q=[];let S=new Date(v),i=new Date($);for(;S<=i&&q.length<200;)q.push(new Date(S)),S.setDate(S.getDate()+B);const x=Oe(),w=()=>{d.forEach(D=>{q.forEach(T=>{const n=T.toISOString().slice(0,10);f.push({iso:n,mm:A,real:n<=E,plotId:D,fromStrategy:!0,seasonId:x})})}),_(),oe("Saison enregistrée",[`Début : ${K(v)} · Fin : ${K($)}`,`${q.length} irrigations · ${A} mm · tous les ${B} j`,`Parcelles : ${d.length} sélectionnée${d.length>1?"s":""}`])},I=f.filter(D=>d.includes(D.plotId)&&D.iso>=v&&D.iso<=$);if(I.length){Ve(I.length,`${d.length} parcelle(s)`,()=>{f.splice(0,f.length,...f.filter(D=>!(d.includes(D.plotId)&&D.iso>=v&&D.iso<=$))),w()});return}w()})}function Et(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",r=>{const t=r.target.closest("[data-tip]");if(!t){e.style.opacity="0";return}e.textContent=t.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",r=>{e.style.left=r.clientX+14+"px",e.style.top=r.clientY-36+"px"}),document.addEventListener("mouseout",r=>{var t;(t=r.relatedTarget)!=null&&t.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search),r=e.get("plot"),t=e.get("action");if((t==="saisie"||t==="saison")&&(O=t),st(),Et(),ne(),N(),window.addEventListener("irrig-updated",()=>{N();const s=document.getElementById("irr-detail"),a=s==null?void 0:s.dataset.plotId;if(!a)return;const l=U.find(c=>String(c.id)===a);l&&se(l)}),r){const s=U.find(a=>a.id===+r);s&&(Ze(s),(t==="saisie"||t==="saison")&&setTimeout(()=>{const a=t==="saisie"?"irr-s-scope":"irr-sa-scope",l=document.querySelector(`#${a} input[value="${r}"]`);l&&(l.checked=!0,l.dispatchEvent(new Event("change")))},50))}});
