import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as v,R as de,g as Oe,s as N}from"./irrigations-C22Dtsoo.js";import{I as _e}from"./constants-D_Yu58_o.js";import{p as ge}from"./plots-DhtWL7s_.js";import{o as Ue}from"./orgs-DnFmvGlp.js";import{u as ot}from"./breadcrumb-CzFWtd6d.js";import{d as be,e as dt,c as Ye,f as ct}from"./store-c0FlIf2T.js";import"./irrigation-web-SENfFSMR.js";const Qe=1,ye=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let se=null,_=ye?ge:ge.filter(e=>e.orgId===Qe);const E=new Date().toISOString().split("T")[0];let O=null,ke=!1,Z=0,le=!1,he=!1,ee=!1;const $e={},We={};let Me=!0,Ie=!0,ve=!0,De=!0,Te=!0,me=!0;function K(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}function W(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,r,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(r)-1]} ${e.split("-")[0]}`}function xe(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,r,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(r)-1]}`}function ut(e){const[,t,r]=e.split("-");return`${r}/${t}`}const pt=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function Ve(e){const[t,r,s]=e.split("-").map(Number);return new Date(Date.UTC(t,r-1,s)).getUTCDay()}function vt(e){const[t,r,s]=e.split("-").map(Number),a=new Date(Date.UTC(t,r-1,s)),l=a.getUTCDay()||7;a.setUTCDate(a.getUTCDate()+4-l);const n=new Date(Date.UTC(a.getUTCFullYear(),0,1));return Math.ceil(((a-n)/864e5+1)/7)}function mt(e){return[e.name+(e.area?` (${e.area} ha)`:""),e.crop,e.irrigation].filter(Boolean).join(" — ")}const Ce=new Set(["Non irrigué","Non renseigné",""]);function Ge(e){return!!e.irrigation&&!Ce.has(e.irrigation)}function ne(e,t){return Math.round(e*(t??0)*10)}function Q(e){return e.toLocaleString("fr-FR")+" m³"}function ft(e){const t=Math.floor(e),r=Math.round((e-t)*60);return t<=0?`${r} min`:r>0?`${t} h ${String(r).padStart(2,"0")} min`:`${t} h`}function gt(e){var r;const t=ct(e).volumeMax;return t!==void 0?t:((r=Ue.find(s=>s.id===e))==null?void 0:r.volumeMax)??null}function Je(e){return Ye(e).volumeMaxM3??null}function Ke(e){return Ye(e).debitM3h??null}function Se(){return[..._].sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function Xe(e){return e.id%3===2}function Ze(e){return 25+e.id*7%20}function bt(e){return e.id%9===2}function yt(e,t){const[,r,s]=t.split("-").map(Number);return Math.min(65,Math.max(5,30+(e.id*7+r*3+s*2)%30))}function et(e){const t=(e.irrigation||"").toLowerCase();return["rampe","pivot","enrouleur"].some(r=>t.includes(r))}function ht(e){if(!et(e))return[];const t=[];let r=e.id*17,s=new Date(K(E,-45));const a=new Date(K(E,-1));for(;s<=a;){const l=s.toISOString().split("T")[0],n=r%7-3;r=(r*31+17)%1e3,t.push({iso:l,mm:Math.max(8,15+n),real:!0,plotId:e.id,fromDetector:!0}),s.setDate(s.getDate()+5+r%3),r=(r*31+17)%1e3}return t}function Ae(e,t={}){const{allBtn:r=!1}=t,s=Se().map(a=>`
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${a.id}" />
      <span class="irr-msel-name">${mt(a)}</span>
    </label>`).join("");return`<div class="irr-msel" id="${e}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${s}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${r?'<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>':""}
    </div>
  </div>`}function Fe(e,t){const r=e.querySelector(`#${t}`);if(!r)return;const s=r.querySelector(".irr-msel-search"),a=r.querySelector(".irr-msel-count"),l=r.querySelector(".irr-msel-all-btn"),n=()=>{const d=r.querySelectorAll(".irr-msel-cb:checked").length;a.textContent=`${d} sélectionnée${d!==1?"s":""}`};s.addEventListener("input",()=>{const d=s.value.toLowerCase();r.querySelectorAll(".irr-msel-item").forEach(x=>{x.style.display=x.querySelector(".irr-msel-name").textContent.toLowerCase().includes(d)?"":"none"})}),r.querySelectorAll(".irr-msel-cb").forEach(d=>d.addEventListener("change",n)),l==null||l.addEventListener("click",()=>{const d=[...r.querySelectorAll(".irr-msel-cb")].filter(h=>h.closest(".irr-msel-item").style.display!=="none"),x=d.some(h=>!h.checked);d.forEach(h=>{h.checked=x}),n()})}function fe(e,t){const r=e.querySelector(`#${t}`);return r?[...r.querySelectorAll(".irr-msel-cb:checked")].map(s=>+s.value):[]}function ce(e,t){var a;(a=document.querySelector(".irr-save-confirm"))==null||a.remove();const r=document.createElement("div");r.className="irr-save-confirm",r.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(l=>`<div>${l}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(r);const s=()=>{r.remove(),V(!0)};r.addEventListener("click",l=>{l.target===r&&s()}),r.querySelector("#irr-confirm-close").addEventListener("click",s)}function Ne(e,t,r){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
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
    </div>`,document.body.appendChild(s);const a=()=>s.remove();s.addEventListener("click",n=>{n.target===s&&a()}),s.querySelector("#irr-cf-close").addEventListener("click",a),s.querySelector("#irr-cf-cancel").addEventListener("click",a),s.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{s.remove(),r()})}function $t(e,t,r){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
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
    </div>`,document.body.appendChild(s),s.addEventListener("click",l=>{l.target===s&&s.remove()}),s.querySelector("#irr-dc-close").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-ok").addEventListener("click",()=>{s.remove(),r()})}function xt(e){if(e.length<2)return"";const t=[...e].sort((c,m)=>c.iso<m.iso?-1:1),r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=new Date(t[0].iso),a=new Date(t[t.length-1].iso),l=Math.max(a-s,1),n=500,d=24,x=5,h=5,D=d-h-4,S=D-h-3,M=d+x+13,p=M+2,A=h+2,L=c=>Math.round(A+(c-s)/l*(n-2*A)),C=c=>{const[,m,b]=c.split("-");return`${parseInt(b)}/${parseInt(m)}`},H=[],u=new Date(s.getFullYear(),s.getMonth()+1,1);for(;u<=a;)H.push(new Date(u)),u.setMonth(u.getMonth()+1);const f=H.map(c=>`<line x1="${L(c)}" y1="${d-6}" x2="${L(c)}" y2="${d+x+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),w=[s,...H,a],I=w.slice(0,-1).map((c,m)=>{const b=L(c),i=L(w[m+1]);return i-b<16?"":`<text x="${Math.round((b+i)/2)}" y="${S}" font-size="9" fill="#B0AEA8" text-anchor="middle">${r[c.getMonth()]}</text>`}).join(""),P=t.map(c=>{const m=c.real?"#FF8500":"#FFB705",b=L(new Date(c.iso)),i=`${xe(c.iso)} · ${c.mm} mm`;return`<circle cx="${b}" cy="${D}" r="${h}" fill="${m}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${b}" cy="${D}" r="${h+6}" fill="transparent" pointer-events="all" data-tip="${i}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${n}" height="${p}" viewBox="0 0 ${n} ${p}" style="width:100%;display:block">
      ${I}<rect x="0" y="${d}" width="${n}" height="${x}" rx="${x/2}" fill="#E0DED8"/>${f}${P}
      <text x="1" y="${M}" font-size="9" fill="#B0AEA8">${C(t[0].iso)}</text>
      <text x="${n-1}" y="${M}" font-size="9" fill="#B0AEA8" text-anchor="end">${C(t[t.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function St(e){const t=e.filter(l=>l.real),r=e.filter(l=>!l.real),s=t.reduce((l,n)=>l+n.mm,0),a=r.reduce((l,n)=>l+n.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${s} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${a} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${s+a} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function Pe(){var M;const e=document.getElementById("irr-vol-banner-wrap");if(!e)return;const t=ye?se:Qe;if(!t){e.innerHTML="";return}const r=new Set(_.filter(p=>p.orgId===t).map(p=>p.id));ye||_.forEach(p=>r.add(p.id));const s=new Map(_.map(p=>[p.id,p])),a=v.filter(p=>r.has(p.plotId)&&p.real).reduce((p,A)=>{var L;return p+ne(A.mm,((L=s.get(A.plotId))==null?void 0:L.area)??0)},0),l=v.filter(p=>r.has(p.plotId)&&!p.real).reduce((p,A)=>{var L;return p+ne(A.mm,((L=s.get(A.plotId))==null?void 0:L.area)??0)},0),n=a+l,d=gt(t),x=d?Math.min(100,Math.round(a/d*100)):0,h=d?Math.min(100-x,Math.round(l/d*100)):0,D=x+h,S=p=>p!=null?p.toLocaleString("fr-FR"):"";e.innerHTML=`
    <div class="irr-vol-banner">
      <div class="irr-vol-main">
        <div class="irr-vol-title">Volume irrigation</div>
        <div class="irr-vol-total">${Q(n)}${d?` <span style="font-size:11px;font-weight:400;color:var(--txt3)">/ ${Q(d)}</span>`:""}</div>
        <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${Q(a)}</span> effectués · <span style="color:#FFB705">▪ ${Q(l)}</span> planifiés</div>
      </div>
      <div class="irr-vol-bar-wrap">
        <div class="irr-vol-bar-label">Consommation d'eau sur mon exploitation</div>
        ${d?"":'<div class="irr-vol-bar-nomax">Définissez un volume limité →</div>'}
        <div class="irr-vol-bar-bg">
          <div class="irr-vol-bar-real" style="width:${x}%"></div>
          <div class="irr-vol-bar-plan" style="width:${h}%"></div>
        </div>
        ${d?(()=>{const p=n-d;return p>0?`<div class="irr-vol-bar-pct" style="color:#E05252">Dépassement ${Q(p)}</div>`:`<div class="irr-vol-bar-pct">${D}% consommé${D>=90?" ⚠":""}</div>`})():""}
      </div>
      <div class="irr-vol-controls">
        <div class="irr-vol-ctrl-row">
          <span class="irr-vol-ctrl-lbl">Volume limité :</span>
          <input class="irr-vol-input" id="irr-vol-max-inp" type="text" inputmode="numeric" placeholder="—" value="${S(d)}" />
          <span class="irr-vol-ctrl-lbl">m³</span>
        </div>
      </div>
    </div>`,(M=e.querySelector("#irr-vol-max-inp"))==null||M.addEventListener("change",p=>{const A=p.target.value.replace(/\s/g,"").replace(/\./g,"").replace(/,/g,""),L=A!==""?parseInt(A):null;L!==null&&(p.target.value=L.toLocaleString("fr-FR")),dt(t,{volumeMax:L}),Pe()})}function V(e=!1){var c,m,b;Pe();const t=document.getElementById("irr-right"),r=K(E,60),s=[...v.map(i=>i.iso),...de.filter(i=>i.iso<=r).map(i=>i.iso),...ee?[K(E,-45)]:[],K(E,-1),r];if(!v.length&&!de.length){t.innerHTML=`<div class="irr-pr-empty" style="padding-top:60px"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const a=[...s].sort()[0],l=v.length?[...v].map(i=>i.iso).sort().at(-1):null,n=l&&l>r?l:r,d=new Date(n);d.setMonth(d.getMonth()+Z);const x=d.toISOString().split("T")[0],h=e?null:((c=t.querySelector("#irr-gl-body"))==null?void 0:c.scrollLeft)??null,D=[];let S=new Date(a);const M=new Date(x);for(;S<=M;)D.push(S.toISOString().split("T")[0]),S.setDate(S.getDate()+1);const p={};for(const i of de)p[i.iso]=i.mm;function A(i){if(i<=E||i>K(E,13))return 0;const[,q,y]=i.split("-").map(Number),T=(q*17+y*13)%100;return T<65?0:3+T%9}function L(i,q,y){const T=`${i}_${q}`;if($e[T]!==void 0)return $e[T];if(!y)return 0;const[,F,B]=q.split("-").map(Number);if((i*13+F*7+B*3)%100<12)return 0;const k=.75+(i*11+B*5)%50/100;return Math.round(y*k)}const C=K(E,7);let H="",u="",f=0,w=null;for(const i of D){const q=i===E,y=Ve(i),T=y===0,F=T?" irr-gl-th--week-end":"";w===null&&(w=vt(i)),f++;const B=le&&i>E&&i<=C;H+=`<th class="irr-gl-th${q?" irr-gl-th--today":""}${F}${B?" irr-gl-th--advisor-range":""}"><span class="irr-gl-day-name">${pt[y]}</span>${ut(i)}</th>`;const z=i===D[D.length-1];(T||z)&&(u+=`<th class="irr-gl-week-hd${T?" irr-gl-th--week-end":""}" colspan="${f}">S${w}</th>`,f=0,w=null),le&&i===C&&(H+='<th class="irr-gl-th irr-gl-th--advisor">Reco J+7</th>',u+='<th class="irr-gl-week-hd"></th>')}function I(i){const q=ee?ht(i):[],y=le&&Xe(i),T=he&&bt(i),F=et(i);let B="";for(const $ of D){const G=$===E,J=v.filter(j=>j.iso===$&&j.plotId===i.id),U=J.length===0?q.filter(j=>j.iso===$):[],R=J.filter(j=>!j.detectorDismissed).filter(j=>j.detectorConfirmed?ee&&Te:j.real?Me:Ie),Y=De?U:[],Re=[...R,...Y],we=Re.reduce((j,re)=>j+re.mm,0),rt=Re.some(j=>j.real),it=(i.id*7+3)%3-1,je=K($,it),ae=L(i.id,$,p[je]??A(je)),st=`${i.id}_${$}`;let ze="";if(ae&&ve){const j=We[st]?'<span class="irr-gl-rain-corr-badge" title="Irrigation détectée corrigée en pluie">C</span>':"";ze=ee&&F?`<span class="irr-gl-rain irr-gl-rain--edit" data-rain-plotid="${i.id}" data-rain-iso="${$}" data-rain-mm="${ae}">${ae} mm${j}</span>`:`<span class="irr-gl-rain">${ae} mm${j}</span>`}let qe="";if(we){const j=rt?"#E07820":"#FFB705",re=R.map(ie=>v.indexOf(ie)).filter(ie=>ie>=0).join(","),pe=Y.length?'<span class="irr-gl-det-badge" title="Détecté automatiquement">D</span>':R.some(ie=>ie.detectorConfirmed)?'<span class="irr-gl-conf-badge" title="Irrigation confirmée">C</span>':"",Ee=Y.reduce((ie,at)=>ie+at.mm,0),X=Ke(i.id),Le=X?` title="Durée estimée : ${ft(ne(we,i.area)/X)}"`:"";qe=`<span class="irr-gl-val irr-gl-irrig" style="color:${j};cursor:pointer"${Le}${re?` data-idxs="${re}" data-iso="${$}"`:` data-det-plotid="${i.id}" data-det-plotname="${i.name}" data-det-iso="${$}" data-det-mm="${Ee}" data-det-rain="${ae}"`}>${we} mm${pe}</span>`}else qe=`<button class="irr-gl-add" data-plot-id="${i.id}" data-plot-name="${i.name}" data-iso="${$}">+</button>`;let He="";T&&me&&$<E&&(He=`<span class="irr-gl-res">${yt(i,$)} mm</span>`);let ue="";ve&&(ue+=`<div class="irr-gl-slot">${ze}</div>`),ue+=`<div class="irr-gl-slot">${qe}</div>`,T&&me&&(ue+=`<div class="irr-gl-slot">${He}</div>`);const lt=Ve($)===0,nt=y&&$>E&&$<=C;if(B+=`<td class="irr-gl-td${G?" irr-gl-td--today":""}${lt?" irr-gl-td--week-end":""}${nt?" irr-gl-td--advisor-range":""}">${ue}</td>`,le&&$===C){let j="";if(y){const re=Ze(i),pe=v.filter(X=>X.plotId===i.id&&X.iso>E&&X.iso<=C).reduce((X,Le)=>X+Le.mm,0),Ee=pe>=re?"#24B066":"#E05252";j=`<span class="irr-gl-advisor">${re} mm</span><span style="display:block;font-size:10px;font-weight:600;color:${Ee}">${pe} mm planifié</span>`}B+=`<td class="irr-gl-td irr-gl-td--advisor">${j}</td>`}}const z=[i.crop,i.irrigation].filter(Boolean).join(" · "),k=i.area?`<span class="irr-gl-plot-area">(${i.area} ha)</span>`:"";let o="";const g=Je(i.id);if(g){const $=i.area??0,G=v.filter(R=>R.plotId===i.id&&R.real).reduce((R,Y)=>R+ne(Y.mm,$),0),J=v.filter(R=>R.plotId===i.id&&!R.real).reduce((R,Y)=>R+ne(Y.mm,$),0),U=G+J;if(U>0)if(U>g)o=`<span class="irr-gl-plot-deficit">Dépassement ${Q(U-g)}</span>`;else{const R=Math.round(G/g*100),Y=Math.min(100-R,Math.round(J/g*100));o=`<span class="irr-gl-plot-mini-bar"><span class="irr-gl-plot-mini-r" style="width:${R}%"></span><span class="irr-gl-plot-mini-p" style="width:${Y}%"></span></span>`}}return`<tr data-row-plot="${i.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${i.id}">${i.name}</span>${k}${z?`<span class="irr-gl-plot-sub">${z}</span>`:""}${o}</td>${B}</tr>`}const P=Se().map(I).join("");t.innerHTML=`
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-gl-legend">
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="real-irrig" ${Me?"checked":""}><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. effectuée</label>
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="plan-irrig" ${Ie?"checked":""}><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</label>
          ${ee?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="detected" ${De?"checked":""}><span class="irr-gl-det-badge">D</span>&nbsp;Irrig. détectée</label><label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="confirmed" ${Te?"checked":""}><span class="irr-gl-conf-badge">C</span>&nbsp;Irrig. corrigée</label>`:""}
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="rain" ${ve?"checked":""}><span class="irr-gl-dot" style="background:#3A7FC1"></span>Pluie</label>
          ${ee?'<span class="irr-gl-filter-item"><span class="irr-gl-rain-corr-badge" style="margin-left:0">C</span>&nbsp;Pluie corrigée (ex-irrig. détectée)</span>':""}
          ${he?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="reservoir" ${me?"checked":""}><span class="irr-gl-dot" style="background:#9E9E9E"></span>Réservoir</label>`:""}
        </div>
        <div class="irr-gl-scroll-top" id="irr-gl-scroll-top">
          <div class="irr-gl-scroll-inner" id="irr-gl-scroll-inner"></div>
        </div>
      </div>
      <div class="irr-gl-body" id="irr-gl-body">
        <table class="irr-gl-table" id="irr-gl-table">
          <thead id="irr-gl-thead">
            <tr><th class="irr-gl-plot-hd irr-gl-week-corner"></th>${u}</tr>
            <tr><th class="irr-gl-plot-hd">Parcelles</th>${H}</tr>
          </thead>
          <tbody>${P}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${Z===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${Z>0?`+${Z} mois au-delà de la saison`:`Fin de saison : ${xe(n)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var F;const i=t.querySelector("#irr-gl-body"),q=t.querySelector("#irr-gl-table"),y=t.querySelector("#irr-gl-scroll-top"),T=t.querySelector("#irr-gl-scroll-inner");if(!(!i||!q||!y||!T))if(T.style.width=q.offsetWidth+"px",y.addEventListener("scroll",()=>{i.scrollLeft=y.scrollLeft}),i.addEventListener("scroll",()=>{y.scrollLeft=i.scrollLeft}),h!==null)i.scrollLeft=h,y.scrollLeft=h;else{const B=t.querySelector(".irr-gl-th--today");if(B){const k=B.previousElementSibling??B,o=((F=t.querySelector(".irr-gl-plot-hd"))==null?void 0:F.offsetWidth)??120,g=k.offsetLeft-o;i.scrollLeft=g,y.scrollLeft=g}}}),(m=t.querySelector("#irr-gl-prev-month"))==null||m.addEventListener("click",()=>{Z>0&&(Z--,V())}),(b=t.querySelector("#irr-gl-next-month"))==null||b.addEventListener("click",()=>{Z++,V()}),t.querySelectorAll(".irr-gl-filter").forEach(i=>{i.addEventListener("change",()=>{const q=i.dataset.filter;q==="real-irrig"?Me=i.checked:q==="plan-irrig"?Ie=i.checked:q==="rain"?ve=i.checked:q==="detected"?De=i.checked:q==="confirmed"?Te=i.checked:q==="reservoir"&&(me=i.checked),V()})}),t.querySelectorAll(".irr-gl-irrig").forEach(i=>{i.addEventListener("click",()=>{i.dataset.idxs?wt(i.dataset.idxs.split(",").map(Number),i.dataset.iso):i.dataset.detPlotid&&Et(+i.dataset.detPlotid,i.dataset.detPlotname,i.dataset.detIso,+i.dataset.detMm,+i.dataset.detRain)})}),t.querySelectorAll(".irr-gl-rain--edit").forEach(i=>{i.addEventListener("click",()=>{qt(+i.dataset.rainPlotid,i.dataset.rainIso,+i.dataset.rainMm)})}),t.querySelectorAll(".irr-gl-add").forEach(i=>{i.addEventListener("click",()=>{It(i.dataset.plotId,i.dataset.plotName,i.dataset.iso)})}),t.querySelectorAll(".irr-gl-plot-link").forEach(i=>{i.addEventListener("click",()=>{const q=_.find(y=>String(y.id)===i.dataset.plotId);q&&tt(q)})})}function wt(e,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const r=document.createElement("div");r.className="irr-edit-overlay";const s=e.map(l=>v[l]).filter(Boolean);r.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${W(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${s.map((l,n)=>{const d=_.find(h=>h.id===l.plotId);return`<div class="irr-edit-row">
            <span class="irr-edit-label">${d?d.name:`Parcelle ${l.plotId}`}</span>
            <input type="number" class="irr-edit-qty" data-i="${n}" value="${l.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${n}">🗑</button>
          </div>`}).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#irr-edit-close").addEventListener("click",()=>r.remove()),r.querySelector("#irr-edit-cancel").addEventListener("click",()=>r.remove()),r.querySelectorAll(".irr-edit-del").forEach(l=>{l.addEventListener("click",()=>{const n=s[+l.dataset.i],d=v.indexOf(n);d>=0&&(v.splice(d,1),N()),r.remove()})}),r.querySelector("#irr-edit-save").addEventListener("click",()=>{r.querySelectorAll(".irr-edit-qty").forEach(l=>{const n=s[+l.dataset.i],d=parseInt(l.value);n&&d>0&&(n.mm=d,n.real=t<=E)}),N(),r.remove()})}function qt(e,t,r){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const s=_.find(d=>d.id===e),a=s?s.name:`Parcelle ${e}`,l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier la pluie — ${W(t)}</span>
        <button class="irr-edit-close" id="irr-rain-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${a}</span>
          <input type="number" id="irr-rain-qty" value="${r}" min="0" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-rain-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-rain-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(l),l.addEventListener("click",d=>{d.target===l&&l.remove()}),l.querySelector("#irr-rain-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-save").addEventListener("click",()=>{const d=parseInt(l.querySelector("#irr-rain-qty").value);!isNaN(d)&&d>=0&&($e[`${e}_${t}`]=d),l.remove(),V()})}function Et(e,t,r,s,a=0){var d;(d=document.querySelector(".irr-edit-overlay"))==null||d.remove();let l=s;const n=document.createElement("div");n.className="irr-edit-overlay",n.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigation détectée — ${W(r)}</span>
        <button class="irr-edit-close" id="irr-det-ed-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${t}</span>
          <input type="number" id="irr-det-ed-qty" value="${s}" min="1" style="width:64px" />
          <span>mm</span>
        </div>
        <p style="font-size:12px;color:var(--txt3);margin:8px 0 0">En cas d'erreur de détection, cette irrigation peut être transformée en pluie.</p>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--danger" id="irr-det-ed-del">Supprimer</button>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="iw-btn iw-btn--sec" id="irr-det-ed-cancel">Annuler</button>
          <button class="iw-btn iw-btn--rain" id="irr-det-ed-rain">Transformer en pluie</button>
          <button class="iw-btn iw-btn--pri" id="irr-det-ed-save">Confirmer</button>
        </div>
      </div>
    </div>`,document.body.appendChild(n),n.querySelector("#irr-det-ed-qty").addEventListener("input",x=>{const h=parseInt(x.target.value);h>0&&(l=h)}),n.addEventListener("click",x=>{x.target===n&&n.remove()}),n.querySelector("#irr-det-ed-close").addEventListener("click",()=>n.remove()),n.querySelector("#irr-det-ed-cancel").addEventListener("click",()=>n.remove()),n.querySelector("#irr-det-ed-del").addEventListener("click",()=>{v.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),N(),n.remove(),V()}),n.querySelector("#irr-det-ed-rain").addEventListener("click",()=>{v.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),$e[`${e}_${r}`]=a+l,We[`${e}_${r}`]=!0,N(),n.remove(),V()}),n.querySelector("#irr-det-ed-save").addEventListener("click",()=>{v.push({iso:r,mm:l,real:r<=E,plotId:e,detectorConfirmed:!0}),N(),n.remove(),V()})}function Lt(e,t){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();let r=e.iso,s=e.mm;const a=document.createElement("div");a.className="irr-edit-overlay",a.innerHTML=`
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
    </div>`,document.body.appendChild(a),a.addEventListener("click",n=>{n.target===a&&a.remove()}),a.querySelector("#irr-di-close").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-date").addEventListener("change",n=>{r=n.target.value}),a.querySelector("#irr-di-qty").addEventListener("input",n=>{const d=parseInt(n.target.value);d>0&&(s=d)}),a.querySelector("#irr-di-del").addEventListener("click",()=>{const n=v.indexOf(e);n>=0&&v.splice(n,1),N(),a.remove(),t()}),a.querySelector("#irr-di-save").addEventListener("click",()=>{e.iso=r,e.mm=s,e.real=r<=E,N(),a.remove(),t()})}function kt(e,t){var f,w,I,P;const r=v.filter(c=>c.plotId===e&&c.fromStrategy&&c.seasonId),s=[...r].sort((c,m)=>c.iso<m.iso?-1:1),a=new Set(r.map(c=>c.seasonId));let l=((f=s[0])==null?void 0:f.iso)||E,n=((w=s[s.length-1])==null?void 0:w.iso)||K(E,90),d=((I=s[0])==null?void 0:I.mm)||10,x=s.length>=2?Math.max(1,Math.round((new Date(s[s.length-1].iso)-new Date(s[0].iso))/864e5/(s.length-1))):7,h=Ke(e);const D=l,S=n;let M="form";(P=document.querySelector(".irr-edit-overlay"))==null||P.remove();const p=document.createElement("div");p.className="irr-edit-overlay";function A(){if(!l||!n||x<=0)return[];const c=[],m=new Date(n);let b=new Date(l);for(;b<=m&&c.length<200;)c.push(b.toISOString().split("T")[0]),b.setDate(b.getDate()+x);return c}function L(){const c=A(),m=c.filter(b=>b>E).length;p.querySelector("#irr-ms-preview").textContent=c.length>0?`↗ ${c.length} irrigations · ${c.length*d} mm · dont ${m} à venir`:"Ajustez les dates et la fréquence"}function C(){return`
      <div class="irr-edit-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Début</label>
            <input type="date" id="irr-ms-debut" value="${l}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fin</label>
            <input type="date" id="irr-ms-fin" value="${n}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Quantité (mm/irrig.)</label>
            <input type="number" id="irr-ms-qty" value="${d}" min="1" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fréquence (jours)</label>
            <input type="number" id="irr-ms-freq" value="${x}" min="1" max="30" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div style="grid-column:1 / -1">
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Débit (m³/h) <span style="color:var(--txt3);font-weight:400">— optionnel</span></label>
            <input type="number" id="irr-ms-debit" value="${h??""}" min="0" step="0.1" placeholder="Ex. 12" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
        </div>
        <div id="irr-ms-preview" style="margin-top:12px;font-size:12px;color:var(--txt3)"></div>
        <div style="margin-top:10px;font-size:11px;color:var(--txt3);line-height:1.4">
          Les irrigations déjà effectuées sont conservées. Les irrigations futures sont recalculées.
          Si le débit est renseigné, la durée estimée s'affiche au survol de la quantité dans le calendrier.
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-ms-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-ms-save">Enregistrer</button>
      </div>`}function H(){const c=l!==D||n!==S,m=A();return`
      <div class="irr-edit-body">
        <div style="font-size:13px;color:var(--txt2);line-height:1.5;background:#FEF6E6;border:1px solid #F5D98B;border-radius:8px;padding:10px 12px">
          ${c?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées."}
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--txt3)">
          ${W(l)} → ${W(n)} · ${d} mm tous les ${x} jours · ${m.length} irrigations
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-ms-back">Retour</button>
        <button class="iw-btn iw-btn--pri" id="irr-ms-confirm">Confirmer la modification</button>
      </div>`}function u(){p.innerHTML=`
      <div class="irr-edit-modal" style="max-width:460px">
        <div class="irr-edit-hd">
          <span>Modifier la saison</span>
          <button class="irr-edit-close" id="irr-ms-close">×</button>
        </div>
        ${M==="form"?C():H()}
      </div>`,p.querySelector("#irr-ms-close").addEventListener("click",()=>p.remove()),M==="form"?(L(),p.querySelector("#irr-ms-cancel").addEventListener("click",()=>p.remove()),p.querySelector("#irr-ms-debut").addEventListener("change",c=>{l=c.target.value,L()}),p.querySelector("#irr-ms-fin").addEventListener("change",c=>{n=c.target.value,L()}),p.querySelector("#irr-ms-qty").addEventListener("input",c=>{const m=parseInt(c.target.value);m>0&&(d=m,L())}),p.querySelector("#irr-ms-freq").addEventListener("input",c=>{const m=parseInt(c.target.value);m>0&&(x=m,L())}),p.querySelector("#irr-ms-debit").addEventListener("input",c=>{const m=parseFloat(c.target.value);h=c.target.value!==""&&m>0?m:null}),p.querySelector("#irr-ms-save").addEventListener("click",()=>{M="confirm",u()})):(p.querySelector("#irr-ms-back").addEventListener("click",()=>{M="form",u()}),p.querySelector("#irr-ms-confirm").addEventListener("click",()=>{const c=l!==D||n!==S,m=A(),b=c?m:m.filter(y=>y>E),i=v.filter(y=>!(y.plotId===e&&a.has(y.seasonId)&&(c||y.iso>E)));v.splice(0,v.length,...i);const q=Oe();for(const y of b)v.push({iso:y,mm:d,real:y<=E,plotId:e,fromStrategy:!0,seasonId:q});be(e,{debitM3h:h}),N(),p.remove(),ce("Saison modifiée",[`Début : ${W(l)} · Fin : ${W(n)}`,`${m.length} irrigations · ${d} mm · tous les ${x} j`,c?"Modifications appliquées à toute la saison.":"Modifications appliquées à partir de demain."]),t==null||t()}))}document.body.appendChild(p),u(),p.addEventListener("click",c=>{c.target===p&&p.remove()})}function Be(e){var r;const t=document.getElementById("irr-right");t&&(t.querySelectorAll("[data-row-plot]").forEach(s=>s.classList.remove("irr-gl-row--active")),e&&((r=t.querySelector(`[data-row-plot="${e}"]`))==null||r.classList.add("irr-gl-row--active")))}function tt(e){const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!(!t||!r)){if(r.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=String(e.id),r.style.display="",t.classList.add("irr-has-detail"),Be(String(e.id)),te(e)}}const Mt=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function te(e){var m,b,i,q,y,T,F,B,z,k;const t=document.getElementById("irr-detail");if(!t)return;const r=((m=t.querySelector(".irr-pr-details"))==null?void 0:m.open)??!1;if(!Ge(e)){t.style.display="",t.dataset.plotId=String(e.id),t.innerHTML=`
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
            ${_e.map(o=>`<option value="${o}"${o===(e.irrigation||"Non renseigné")?" selected":""}>${o}</option>`).join("")}
          </select>
          <button id="irr-det-type-save" class="btn-primary" style="margin-top:10px;width:100%;justify-content:center">Enregistrer</button>
        </div>
      </div>`,(b=t.querySelector("#irr-det-close"))==null||b.addEventListener("click",()=>{var o;(o=document.getElementById("irr-page"))==null||o.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Be(null)}),(i=t.querySelector("#irr-det-type-save"))==null||i.addEventListener("click",()=>{const o=t.querySelector("#irr-det-type-sel").value;be(e.id,{irrigation:o}),e.irrigation=o,te(e),V(!0)});return}const s=v.filter(o=>o.plotId===e.id),a=s.some(o=>o.fromStrategy&&o.seasonId),l=s.filter(o=>o.fromStrategy).sort((o,g)=>o.iso<g.iso?-1:1),n=(q=l[0])==null?void 0:q.iso,d=(y=l[l.length-1])==null?void 0:y.iso,x=new Set(s.filter(o=>o.fromStrategy&&o.seasonId).map(o=>o.seasonId)),h=n&&d?`<div><strong>Saison :</strong> ${xe(n)} → ${xe(d)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',D=s.filter(o=>o.real).sort((o,g)=>o.iso<g.iso?-1:1),S=s.filter(o=>!o.real).sort((o,g)=>o.iso<g.iso?-1:1),M=e.area??0,p=D.reduce((o,g)=>o+ne(g.mm,M),0),A=S.reduce((o,g)=>o+ne(g.mm,M),0),L=p+A,C=Je(e.id),H=C&&M?Math.min(100,Math.round(p/C*100)):0,u=C&&M?Math.min(100-H,Math.round(A/C*100)):0,f=H+u,w=`
    <div class="irr-det-vol">
      <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--bdr2)">
        <div class="irr-det-vol-row">
          <span class="irr-det-vol-lbl">Volume saison :</span>
          <strong style="font-size:13px">${Q(L)}</strong>
        </div>
        ${M?`<div class="irr-det-vol-row" style="gap:8px;margin-top:3px">
          <span style="color:#FF8500;font-size:11px">▪ ${Q(p)} effectués</span>
          <span style="color:#FFB705;font-size:11px">▪ ${Q(A)} planifiés</span>
        </div>`:'<div class="irr-det-vol-lbl" style="color:var(--txt3);margin-top:3px">surface non renseignée</div>'}
      </div>
      <div class="irr-det-vol-row">
        <span class="irr-det-vol-lbl">Volume limité :</span>
        <input class="irr-det-vol-input" id="irr-det-vol-input" type="number" min="0" placeholder="—" value="${C??""}" />
        <span class="irr-det-vol-lbl">m³</span>
      </div>
      ${C&&M?`
      <div class="irr-det-vol-bar">
        <div style="width:${H}%;background:#FF8500;height:100%"></div>
        <div style="width:${u}%;background:#FFB705;height:100%"></div>
      </div>
      ${L>C?`<div class="irr-det-vol-note" style="color:#E05252">Dépassement ${Q(L-C)}</div>`:`<div class="irr-det-vol-note">${f}% · ${Q(C-L)} restants</div>`}`:""}
    </div>`,I=o=>{const g=v.indexOf(o),$=o.real?"#FF8500":"#FFB705",[,G,J]=o.iso.split("-"),U=`${parseInt(J)} ${Mt[parseInt(G)-1]}`,R=o.real?"Effectuée":"Planifiée",Y=o.detectorConfirmed?'<span class="irr-pr-det-tag">Détectée &amp; corrigée</span>':"";return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${$}"></div>
      <div class="irr-pr-date" style="color:${$};min-width:52px;font-size:13px;font-weight:600">${U}</div>
      <div class="irr-pr-info">
        <div class="irr-pr-status" style="color:${$}">${R}</div>
        ${Y}
      </div>
      <div class="irr-pr-mm" style="color:${$}">${o.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${g}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${g}" title="Supprimer">🗑</button>
    </div>`},P=a?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
      </div>
    </div>`:"",c=le&&Xe(e)?`<div style="margin:16px 16px 16px;padding:12px;background:#FFF4E6;border-radius:8px;border-left:3px solid #E07820">
         <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#E07820;margin-bottom:4px">Recommandations d'irrigation sur les 7 prochains jours</div>
         <div style="font-size:22px;font-weight:700;color:#E07820">${Ze(e)} mm</div>
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
        <div class="irr-det-meta">${h}</div>
        ${P}
        ${St(s)}
        ${xt(s)}
        ${w}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${D.length?`
        <details class="irr-pr-details"${r||!S.length?" open":""}>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${D.length}</span></summary>
          <div>${D.map(I).join("")}</div>
        </details>`:""}
      ${c}
      ${S.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${S.length}</span></summary>
          <div>${S.map(I).join("")}</div>
        </details>`:""}
      ${s.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(T=t.querySelector("#irr-det-strat-toggle"))==null||T.addEventListener("click",()=>{const o=t.querySelector("#irr-det-strat-opts");o.style.display=o.style.display==="none"?"":"none"}),(F=t.querySelector("#irr-det-modify"))==null||F.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none",kt(e.id,()=>{te(e),V(!0)})}),(B=t.querySelector("#irr-det-stop"))==null||B.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const o=v.filter(g=>g.plotId===e.id&&x.has(g.seasonId)&&!g.real&&g.iso>E);v.splice(0,v.length,...v.filter(g=>!o.includes(g))),N(),ce("Saison arrêtée",[`${o.length} irrigation${o.length!==1?"s":""} future${o.length!==1?"s":""} supprimée${o.length!==1?"s":""}`,`Parcelle : ${e.name}`])}),(z=t.querySelector("#irr-det-del-all"))==null||z.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const o=v.filter($=>$.plotId===e.id);if(!o.length)return;const g=o.some($=>!$.fromStrategy);$t(`Supprimer toutes les irrigations de "${e.name}" ?`,`${o.length} irrigation${o.length!==1?"s":""} seront supprimées (passées et futures).`+(g?"<br><br>Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.":""),()=>{v.splice(0,v.length,...v.filter($=>!o.includes($))),N(),ce("Saison supprimée",[`${o.length} irrigation${o.length!==1?"s":""} supprimée${o.length!==1?"s":""}`,`Parcelle : ${e.name}`])})}),t.querySelectorAll(".irr-pr-edit").forEach(o=>{o.addEventListener("click",()=>{const g=v[+o.dataset.idx];g&&Lt(g,()=>{te(e),V(!0)})})}),t.querySelectorAll(".irr-pr-del").forEach(o=>{o.addEventListener("click",()=>{const g=+o.dataset.idx;g>=0&&(v.splice(g,1),N(),te(e))})}),(k=t.querySelector("#irr-det-vol-input"))==null||k.addEventListener("change",o=>{const g=o.target.value!==""?parseInt(o.target.value):null;be(e.id,{volumeMaxM3:g}),te(e),Pe()}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var o;(o=document.getElementById("irr-page"))==null||o.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Be(null)})}function It(e,t,r,s=10){var D;(D=document.querySelector(".irr-edit-overlay"))==null||D.remove();const a=_.find(S=>S.id===+e),l=a&&!Ge(a),n=l?`
    <div class="irr-edit-row">
      <span class="irr-edit-label">Type d'irrigation</span>
      <select id="irr-qa-type-sel" style="flex:1;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
        ${_e.map(S=>`<option value="${S}"${S===(a.irrigation||"Non renseigné")?" selected":""}>${S}</option>`).join("")}
      </select>
    </div>`:"",d=document.createElement("div");d.className="irr-edit-overlay",d.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${W(r)}</span>
        <button class="irr-edit-close" id="irr-qa-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${l?`<p style="font-size:12px;color:var(--txt2);margin:0 0 10px">Précisez le type d'irrigation de cette parcelle pour pouvoir saisir une irrigation.</p>`:""}
        ${n}
        <div class="irr-edit-row">
          <span class="irr-edit-label">${t}</span>
          <input type="number" class="irr-edit-qty" id="irr-qa-qty" value="${s}" min="1" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-qa-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-qa-save"${l?" disabled":""}>Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(d),d.addEventListener("click",S=>{S.target===d&&d.remove()}),d.querySelector("#irr-qa-close").addEventListener("click",()=>d.remove()),d.querySelector("#irr-qa-cancel").addEventListener("click",()=>d.remove());const x=d.querySelector("#irr-qa-save"),h=d.querySelector("#irr-qa-type-sel");if(h){const S=()=>{x.disabled=Ce.has(h.value)};S(),h.addEventListener("change",S)}x.addEventListener("click",()=>{if(h){const M=h.value;if(Ce.has(M))return;be(a.id,{irrigation:M}),a.irrigation=M}const S=parseInt(d.querySelector("#irr-qa-qty").value)||10;v.push({iso:r,mm:S,real:r<=E,plotId:+e,fromStrategy:!1}),N(),d.remove(),V(!0)})}function oe(){var n,d,x,h,D,S,M,p,A,L,C,H;const e=document.getElementById("irr-left"),t=[...Ue].filter(u=>u.id!==100).sort((u,f)=>u.name.localeCompare(f.name)),r=ye?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${se===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${se===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${t.map(u=>`<option value="${u.id}"${u.id===se?" selected":""}>${u.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"",s=document.getElementById("irr-page");if(ke){s==null||s.classList.add("irr-left-collapsed"),e.innerHTML=`
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Déplier le panneau">›</button>`,e.querySelector("#irr-left-toggle").addEventListener("click",()=>{ke=!1,oe()});return}s==null||s.classList.remove("irr-left-collapsed"),e.innerHTML=`
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
        ${Ae("irr-s-scope",{allBtn:!0})}
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
        ${Ae("irr-sa-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Début</label>
        <input type="date" class="irr-lc-input" id="irr-sa-debut" value="${E}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Fin</label>
        <input type="date" class="irr-lc-input" id="irr-sa-fin" value="${K(E,120)}" />
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
        ${Ae("irr-ex-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Du</label>
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${v.length?[...v].sort((u,f)=>u.iso<f.iso?-1:1)[0].iso:E}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${v.length?[...v].sort((u,f)=>u.iso>f.iso?-1:1)[0].iso:E}" />
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
        <input type="checkbox" id="irr-feat-advisor" ${le?"checked":""} />
        <span>Irrigation Advisor</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-reservoir" ${he?"checked":""} />
        <span>Reservoir Sensorless</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-detector" ${ee?"checked":""} />
        <span>Irrigation Detector</span>
      </label>
    </div>
  `,(n=e.querySelector("#irr-left-toggle"))==null||n.addEventListener("click",()=>{ke=!0,oe()}),O==="saisie"&&Fe(e,"irr-s-scope"),O==="saison"&&Fe(e,"irr-sa-scope"),O==="export"&&Fe(e,"irr-ex-scope"),(d=e.querySelector("#irr-org-select"))==null||d.addEventListener("change",u=>{const f=u.target.value;se=f===""?null:parseInt(f),_=se===null?ge:ge.filter(w=>w.orgId===se),Z=0,oe(),V()}),e.querySelectorAll(".irr-lc-btn").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.action;O=O===f?null:f,oe()})});function a(){var i,q,y,T;const u=(i=e.querySelector("#irr-sa-debut"))==null?void 0:i.value,f=(q=e.querySelector("#irr-sa-fin"))==null?void 0:q.value,w=parseInt((y=e.querySelector("#irr-sa-qty"))==null?void 0:y.value)||0,I=parseInt((T=e.querySelector("#irr-sa-freq"))==null?void 0:T.value)||0,P=e.querySelector("#irr-sa-preview");if(!P)return;if(!u||!f||I<=0){P.textContent="—";return}let c=0,m=new Date(u),b=new Date(f);for(;m<=b&&c<200;)c++,m.setDate(m.getDate()+I);if(c>0){const B=fe(e,"irr-sa-scope").reduce((o,g)=>{const $=Se().find(G=>G.id===g);return o+(($==null?void 0:$.area)??0)},0),z=B>0?Math.round(c*w*B*10):0,k=z>0?` · ${z.toLocaleString("fr-FR")} m³`:"";P.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${c} irrigations · ${c*w} mm${k}</span>`}else P.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'}O==="saison"&&(a(),(x=e.querySelector("#irr-sa-debut"))==null||x.addEventListener("change",a),(h=e.querySelector("#irr-sa-fin"))==null||h.addEventListener("change",a),(D=e.querySelector("#irr-sa-qty"))==null||D.addEventListener("input",a),(S=e.querySelector("#irr-sa-freq"))==null||S.addEventListener("input",a)),(M=e.querySelector("#irr-ex-dl"))==null||M.addEventListener("click",()=>{const u=e.querySelector("#irr-ex-start").value,f=e.querySelector("#irr-ex-end").value,w=e.querySelector("#irr-ex-irrig").checked,I=e.querySelector("#irr-ex-rain").checked,P=fe(e,"irr-ex-scope"),c=P.length>0?_.filter(k=>P.includes(k.id)):Se(),m=new Set;if(w)for(const k of v)k.iso>=u&&k.iso<=f&&m.add(k.iso);if(I)for(const k of de)k.iso>=u&&k.iso<=f&&m.add(k.iso);const b=[...m].sort(),i={};if(I)for(const k of de)i[k.iso]=k.mm;const q=["Date",...c.map(k=>k.name+(I?" (irrig.)":""))].join(";"),y=b.map(k=>{const o=c.map(g=>{const $=w?v.filter(U=>U.iso===k&&U.plotId===g.id).reduce((U,R)=>U+R.mm,0):0,G=I?i[k]??0:0,J=$+G;return J>0?J:""});return[k,...o].join(";")}),T=[q,...y].join(`
`),F=new Blob([T],{type:"text/csv;charset=utf-8;"}),B=URL.createObjectURL(F),z=Object.assign(document.createElement("a"),{href:B,download:`irrigations_${u}_${f}.csv`});document.body.appendChild(z),z.click(),setTimeout(()=>{URL.revokeObjectURL(B),z.remove()},100)}),(p=e.querySelector("#irr-s-save"))==null||p.addEventListener("click",()=>{const u=fe(e,"irr-s-scope"),f=e.querySelector("#irr-s-date").value,w=parseInt(e.querySelector("#irr-s-qty").value)||0,I=e.querySelector("#irr-s-err");if(!u.length||!f||!w){I&&(I.style.display="");return}I&&(I.style.display="none");const P=f>E,c=()=>{u.forEach(b=>{v.push({iso:f,mm:w,real:!P,plotId:b,fromStrategy:!1})}),N(),ce("Irrigation enregistrée",[`Date : ${W(f)}`,`Quantité : ${w} mm`,`Parcelles : ${u.length} sélectionnée${u.length>1?"s":""}`])},m=v.filter(b=>u.includes(b.plotId)&&b.iso===f);if(m.length){Ne(m.length,`${u.length} parcelle(s)`,()=>{v.splice(0,v.length,...v.filter(b=>!(u.includes(b.plotId)&&b.iso===f))),c()});return}c()});const l=()=>{V();const u=document.getElementById("irr-detail"),f=u==null?void 0:u.dataset.plotId;if(f){const w=_.find(I=>String(I.id)===f);w&&te(w)}};(A=e.querySelector("#irr-feat-advisor"))==null||A.addEventListener("change",u=>{le=u.target.checked,l()}),(L=e.querySelector("#irr-feat-reservoir"))==null||L.addEventListener("change",u=>{he=u.target.checked,l()}),(C=e.querySelector("#irr-feat-detector"))==null||C.addEventListener("change",u=>{ee=u.target.checked,l()}),(H=e.querySelector("#irr-sa-save"))==null||H.addEventListener("click",()=>{const u=fe(e,"irr-sa-scope"),f=e.querySelector("#irr-sa-debut").value,w=e.querySelector("#irr-sa-fin").value,I=parseInt(e.querySelector("#irr-sa-qty").value)||10,P=parseInt(e.querySelector("#irr-sa-freq").value)||7,c=e.querySelector("#irr-sa-err");if(!u.length||!f||!w){c&&(c.style.display="");return}c&&(c.style.display="none");const m=[];let b=new Date(f),i=new Date(w);for(;b<=i&&m.length<200;)m.push(new Date(b)),b.setDate(b.getDate()+P);const q=Oe(),y=()=>{u.forEach(F=>{m.forEach(B=>{const z=B.toISOString().slice(0,10);v.push({iso:z,mm:I,real:z<=E,plotId:F,fromStrategy:!0,seasonId:q})})}),N(),ce("Saison enregistrée",[`Début : ${W(f)} · Fin : ${W(w)}`,`${m.length} irrigations · ${I} mm · tous les ${P} j`,`Parcelles : ${u.length} sélectionnée${u.length>1?"s":""}`])},T=v.filter(F=>u.includes(F.plotId)&&F.iso>=f&&F.iso<=w);if(T.length){Ne(T.length,`${u.length} parcelle(s)`,()=>{v.splice(0,v.length,...v.filter(F=>!(u.includes(F.plotId)&&F.iso>=f&&F.iso<=w))),y()});return}y()})}function Dt(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const r=t.target.closest("[data-tip]");if(!r){e.style.opacity="0";return}e.textContent=r.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var r;(r=t.relatedTarget)!=null&&r.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search),t=e.get("plot"),r=e.get("action");if((r==="saisie"||r==="saison")&&(O=r),ot(),Dt(),oe(),V(),window.addEventListener("irrig-updated",()=>{V();const s=document.getElementById("irr-detail"),a=s==null?void 0:s.dataset.plotId;if(!a)return;const l=_.find(n=>String(n.id)===a);l&&te(l)}),t){const s=_.find(a=>a.id===+t);s&&(tt(s),(r==="saisie"||r==="saison")&&setTimeout(()=>{const a=r==="saisie"?"irr-s-scope":"irr-sa-scope",l=document.querySelector(`#${a} input[value="${t}"]`);l&&(l.checked=!0,l.dispatchEvent(new Event("change")))},50))}});
