import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as p,R as de,g as Oe,s as N}from"./irrigations-C22Dtsoo.js";import{I as _e}from"./constants-D_Yu58_o.js";import{p as ge}from"./plots-DhtWL7s_.js";import{o as Ue}from"./orgs-DnFmvGlp.js";import{u as at}from"./breadcrumb-CzFWtd6d.js";import{d as Ce,e as ot,c as Ye,f as dt}from"./store-c0FlIf2T.js";import"./irrigation-web-SENfFSMR.js";const Qe=1,be=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let se=null,_=be?ge:ge.filter(e=>e.orgId===Qe);const L=new Date().toISOString().split("T")[0];let O=null,Le=!1,Z=0,le=!1,ye=!1,ee=!1;const he={},We={};let ke=!0,Ie=!0,ve=!0,Me=!0,De=!0,me=!0;function K(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}function W(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,r,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(r)-1]} ${e.split("-")[0]}`}function $e(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,r,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(r)-1]}`}function ct(e){const[,t,r]=e.split("-");return`${r}/${t}`}const ut=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function Ve(e){const[t,r,s]=e.split("-").map(Number);return new Date(Date.UTC(t,r-1,s)).getUTCDay()}function pt(e){const[t,r,s]=e.split("-").map(Number),a=new Date(Date.UTC(t,r-1,s)),l=a.getUTCDay()||7;a.setUTCDate(a.getUTCDate()+4-l);const n=new Date(Date.UTC(a.getUTCFullYear(),0,1));return Math.ceil(((a-n)/864e5+1)/7)}function vt(e){return[e.name+(e.area?` (${e.area} ha)`:""),e.crop,e.irrigation].filter(Boolean).join(" — ")}const Fe=new Set(["Non irrigué","Non renseigné",""]);function Ge(e){return!!e.irrigation&&!Fe.has(e.irrigation)}function ne(e,t){return Math.round(e*(t??0)*10)}function Q(e){return e.toLocaleString("fr-FR")+" m³"}function mt(e){const t=Math.floor(e),r=Math.round((e-t)*60);return t<=0?`${r} min`:r>0?`${t} h ${String(r).padStart(2,"0")} min`:`${t} h`}function ft(e){var r;const t=dt(e).volumeMax;return t!==void 0?t:((r=Ue.find(s=>s.id===e))==null?void 0:r.volumeMax)??null}function Je(e){return Ye(e).volumeMaxM3??null}function gt(e){return Ye(e).debitM3h??null}function xe(){return[..._].sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function Ke(e){return e.id%3===2}function Xe(e){return 25+e.id*7%20}function bt(e){return e.id%9===2}function yt(e,t){const[,r,s]=t.split("-").map(Number);return Math.min(65,Math.max(5,30+(e.id*7+r*3+s*2)%30))}function Ze(e){const t=(e.irrigation||"").toLowerCase();return["rampe","pivot","enrouleur"].some(r=>t.includes(r))}function ht(e){if(!Ze(e))return[];const t=[];let r=e.id*17,s=new Date(K(L,-45));const a=new Date(K(L,-1));for(;s<=a;){const l=s.toISOString().split("T")[0],n=r%7-3;r=(r*31+17)%1e3,t.push({iso:l,mm:Math.max(8,15+n),real:!0,plotId:e.id,fromDetector:!0}),s.setDate(s.getDate()+5+r%3),r=(r*31+17)%1e3}return t}function Te(e,t={}){const{allBtn:r=!1}=t,s=xe().map(a=>`
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${a.id}" />
      <span class="irr-msel-name">${vt(a)}</span>
    </label>`).join("");return`<div class="irr-msel" id="${e}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${s}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${r?'<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>':""}
    </div>
  </div>`}function Ae(e,t){const r=e.querySelector(`#${t}`);if(!r)return;const s=r.querySelector(".irr-msel-search"),a=r.querySelector(".irr-msel-count"),l=r.querySelector(".irr-msel-all-btn"),n=()=>{const d=r.querySelectorAll(".irr-msel-cb:checked").length;a.textContent=`${d} sélectionnée${d!==1?"s":""}`};s.addEventListener("input",()=>{const d=s.value.toLowerCase();r.querySelectorAll(".irr-msel-item").forEach(S=>{S.style.display=S.querySelector(".irr-msel-name").textContent.toLowerCase().includes(d)?"":"none"})}),r.querySelectorAll(".irr-msel-cb").forEach(d=>d.addEventListener("change",n)),l==null||l.addEventListener("click",()=>{const d=[...r.querySelectorAll(".irr-msel-cb")].filter($=>$.closest(".irr-msel-item").style.display!=="none"),S=d.some($=>!$.checked);d.forEach($=>{$.checked=S}),n()})}function fe(e,t){const r=e.querySelector(`#${t}`);return r?[...r.querySelectorAll(".irr-msel-cb:checked")].map(s=>+s.value):[]}function ce(e,t){var a;(a=document.querySelector(".irr-save-confirm"))==null||a.remove();const r=document.createElement("div");r.className="irr-save-confirm",r.innerHTML=`
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
    </div>`,document.body.appendChild(s),s.addEventListener("click",l=>{l.target===s&&s.remove()}),s.querySelector("#irr-dc-close").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-ok").addEventListener("click",()=>{s.remove(),r()})}function xt(e){if(e.length<2)return"";const t=[...e].sort((u,h)=>u.iso<h.iso?-1:1),r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=new Date(t[0].iso),a=new Date(t[t.length-1].iso),l=Math.max(a-s,1),n=500,d=24,S=5,$=5,T=d-$-4,w=T-$-3,g=d+S+13,m=g+2,A=$+2,M=u=>Math.round(A+(u-s)/l*(n-2*A)),B=u=>{const[,h,E]=u.split("-");return`${parseInt(E)}/${parseInt(h)}`},H=[],c=new Date(s.getFullYear(),s.getMonth()+1,1);for(;c<=a;)H.push(new Date(c)),c.setMonth(c.getMonth()+1);const f=H.map(u=>`<line x1="${M(u)}" y1="${d-6}" x2="${M(u)}" y2="${d+S+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),q=[s,...H,a],D=q.slice(0,-1).map((u,h)=>{const E=M(u),i=M(q[h+1]);return i-E<16?"":`<text x="${Math.round((E+i)/2)}" y="${w}" font-size="9" fill="#B0AEA8" text-anchor="middle">${r[u.getMonth()]}</text>`}).join(""),v=t.map(u=>{const h=u.real?"#FF8500":"#FFB705",E=M(new Date(u.iso)),i=`${$e(u.iso)} · ${u.mm} mm`;return`<circle cx="${E}" cy="${T}" r="${$}" fill="${h}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${E}" cy="${T}" r="${$+6}" fill="transparent" pointer-events="all" data-tip="${i}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${n}" height="${m}" viewBox="0 0 ${n} ${m}" style="width:100%;display:block">
      ${D}<rect x="0" y="${d}" width="${n}" height="${S}" rx="${S/2}" fill="#E0DED8"/>${f}${v}
      <text x="1" y="${g}" font-size="9" fill="#B0AEA8">${B(t[0].iso)}</text>
      <text x="${n-1}" y="${g}" font-size="9" fill="#B0AEA8" text-anchor="end">${B(t[t.length-1].iso)}</text>
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
  </div>`}function Pe(){var g;const e=document.getElementById("irr-vol-banner-wrap");if(!e)return;const t=be?se:Qe;if(!t){e.innerHTML="";return}const r=new Set(_.filter(m=>m.orgId===t).map(m=>m.id));be||_.forEach(m=>r.add(m.id));const s=new Map(_.map(m=>[m.id,m])),a=p.filter(m=>r.has(m.plotId)&&m.real).reduce((m,A)=>{var M;return m+ne(A.mm,((M=s.get(A.plotId))==null?void 0:M.area)??0)},0),l=p.filter(m=>r.has(m.plotId)&&!m.real).reduce((m,A)=>{var M;return m+ne(A.mm,((M=s.get(A.plotId))==null?void 0:M.area)??0)},0),n=a+l,d=ft(t),S=d?Math.min(100,Math.round(a/d*100)):0,$=d?Math.min(100-S,Math.round(l/d*100)):0,T=S+$,w=m=>m!=null?m.toLocaleString("fr-FR"):"";e.innerHTML=`
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
          <div class="irr-vol-bar-real" style="width:${S}%"></div>
          <div class="irr-vol-bar-plan" style="width:${$}%"></div>
        </div>
        ${d?(()=>{const m=n-d;return m>0?`<div class="irr-vol-bar-pct" style="color:#E05252">Dépassement ${Q(m)}</div>`:`<div class="irr-vol-bar-pct">${T}% consommé${T>=90?" ⚠":""}</div>`})():""}
      </div>
      <div class="irr-vol-controls">
        <div class="irr-vol-ctrl-row">
          <span class="irr-vol-ctrl-lbl">Volume limité :</span>
          <input class="irr-vol-input" id="irr-vol-max-inp" type="text" inputmode="numeric" placeholder="—" value="${w(d)}" />
          <span class="irr-vol-ctrl-lbl">m³</span>
        </div>
      </div>
    </div>`,(g=e.querySelector("#irr-vol-max-inp"))==null||g.addEventListener("change",m=>{const A=m.target.value.replace(/\s/g,"").replace(/\./g,"").replace(/,/g,""),M=A!==""?parseInt(A):null;M!==null&&(m.target.value=M.toLocaleString("fr-FR")),ot(t,{volumeMax:M}),Pe()})}function V(e=!1){var u,h,E;Pe();const t=document.getElementById("irr-right"),r=K(L,60),s=[...p.map(i=>i.iso),...de.filter(i=>i.iso<=r).map(i=>i.iso),...ee?[K(L,-45)]:[],K(L,-1),r];if(!p.length&&!de.length){t.innerHTML=`<div class="irr-pr-empty" style="padding-top:60px"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const a=[...s].sort()[0],l=p.length?[...p].map(i=>i.iso).sort().at(-1):null,n=l&&l>r?l:r,d=new Date(n);d.setMonth(d.getMonth()+Z);const S=d.toISOString().split("T")[0],$=e?null:((u=t.querySelector("#irr-gl-body"))==null?void 0:u.scrollLeft)??null,T=[];let w=new Date(a);const g=new Date(S);for(;w<=g;)T.push(w.toISOString().split("T")[0]),w.setDate(w.getDate()+1);const m={};for(const i of de)m[i.iso]=i.mm;function A(i){if(i<=L||i>K(L,13))return 0;const[,y,k]=i.split("-").map(Number),C=(y*17+k*13)%100;return C<65?0:3+C%9}function M(i,y,k){const C=`${i}_${y}`;if(he[C]!==void 0)return he[C];if(!k)return 0;const[,F,P]=y.split("-").map(Number);if((i*13+F*7+P*3)%100<12)return 0;const I=.75+(i*11+P*5)%50/100;return Math.round(k*I)}const B=K(L,7);let H="",c="",f=0,q=null;for(const i of T){const y=i===L,k=Ve(i),C=k===0,F=C?" irr-gl-th--week-end":"";q===null&&(q=pt(i)),f++;const P=le&&i>L&&i<=B;H+=`<th class="irr-gl-th${y?" irr-gl-th--today":""}${F}${P?" irr-gl-th--advisor-range":""}"><span class="irr-gl-day-name">${ut[k]}</span>${ct(i)}</th>`;const z=i===T[T.length-1];(C||z)&&(c+=`<th class="irr-gl-week-hd${C?" irr-gl-th--week-end":""}" colspan="${f}">S${q}</th>`,f=0,q=null),le&&i===B&&(H+='<th class="irr-gl-th irr-gl-th--advisor">Reco J+7</th>',c+='<th class="irr-gl-week-hd"></th>')}function D(i){const y=ee?ht(i):[],k=le&&Ke(i),C=ye&&bt(i),F=Ze(i);let P="";for(const x of T){const G=x===L,J=p.filter(j=>j.iso===x&&j.plotId===i.id),U=J.length===0?y.filter(j=>j.iso===x):[],R=J.filter(j=>!j.detectorDismissed).filter(j=>j.detectorConfirmed?ee&&De:j.real?ke:Ie),Y=Me?U:[],Re=[...R,...Y],Se=Re.reduce((j,re)=>j+re.mm,0),tt=Re.some(j=>j.real),rt=(i.id*7+3)%3-1,je=K(x,rt),ae=M(i.id,x,m[je]??A(je)),it=`${i.id}_${x}`;let ze="";if(ae&&ve){const j=We[it]?'<span class="irr-gl-rain-corr-badge" title="Irrigation détectée corrigée en pluie">C</span>':"";ze=ee&&F?`<span class="irr-gl-rain irr-gl-rain--edit" data-rain-plotid="${i.id}" data-rain-iso="${x}" data-rain-mm="${ae}">${ae} mm${j}</span>`:`<span class="irr-gl-rain">${ae} mm${j}</span>`}let we="";if(Se){const j=tt?"#E07820":"#FFB705",re=R.map(ie=>p.indexOf(ie)).filter(ie=>ie>=0).join(","),pe=Y.length?'<span class="irr-gl-det-badge" title="Détecté automatiquement">D</span>':R.some(ie=>ie.detectorConfirmed)?'<span class="irr-gl-conf-badge" title="Irrigation confirmée">C</span>':"",qe=Y.reduce((ie,nt)=>ie+nt.mm,0),X=gt(i.id),Ee=X?` title="Durée estimée : ${mt(ne(Se,i.area)/X)}"`:"";we=`<span class="irr-gl-val irr-gl-irrig" style="color:${j};cursor:pointer"${Ee}${re?` data-idxs="${re}" data-iso="${x}"`:` data-det-plotid="${i.id}" data-det-plotname="${i.name}" data-det-iso="${x}" data-det-mm="${qe}" data-det-rain="${ae}"`}>${Se} mm${pe}</span>`}else we=`<button class="irr-gl-add" data-plot-id="${i.id}" data-plot-name="${i.name}" data-iso="${x}">+</button>`;let He="";C&&me&&x<L&&(He=`<span class="irr-gl-res">${yt(i,x)} mm</span>`);let ue="";ve&&(ue+=`<div class="irr-gl-slot">${ze}</div>`),ue+=`<div class="irr-gl-slot">${we}</div>`,C&&me&&(ue+=`<div class="irr-gl-slot">${He}</div>`);const st=Ve(x)===0,lt=k&&x>L&&x<=B;if(P+=`<td class="irr-gl-td${G?" irr-gl-td--today":""}${st?" irr-gl-td--week-end":""}${lt?" irr-gl-td--advisor-range":""}">${ue}</td>`,le&&x===B){let j="";if(k){const re=Xe(i),pe=p.filter(X=>X.plotId===i.id&&X.iso>L&&X.iso<=B).reduce((X,Ee)=>X+Ee.mm,0),qe=pe>=re?"#24B066":"#E05252";j=`<span class="irr-gl-advisor">${re} mm</span><span style="display:block;font-size:10px;font-weight:600;color:${qe}">${pe} mm planifié</span>`}P+=`<td class="irr-gl-td irr-gl-td--advisor">${j}</td>`}}const z=[i.crop,i.irrigation].filter(Boolean).join(" · "),I=i.area?`<span class="irr-gl-plot-area">(${i.area} ha)</span>`:"";let o="";const b=Je(i.id);if(b){const x=i.area??0,G=p.filter(R=>R.plotId===i.id&&R.real).reduce((R,Y)=>R+ne(Y.mm,x),0),J=p.filter(R=>R.plotId===i.id&&!R.real).reduce((R,Y)=>R+ne(Y.mm,x),0),U=G+J;if(U>0)if(U>b)o=`<span class="irr-gl-plot-deficit">Dépassement ${Q(U-b)}</span>`;else{const R=Math.round(G/b*100),Y=Math.min(100-R,Math.round(J/b*100));o=`<span class="irr-gl-plot-mini-bar"><span class="irr-gl-plot-mini-r" style="width:${R}%"></span><span class="irr-gl-plot-mini-p" style="width:${Y}%"></span></span>`}}return`<tr data-row-plot="${i.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${i.id}">${i.name}</span>${I}${z?`<span class="irr-gl-plot-sub">${z}</span>`:""}${o}</td>${P}</tr>`}const v=xe().map(D).join("");t.innerHTML=`
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-gl-legend">
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="real-irrig" ${ke?"checked":""}><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. effectuée</label>
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="plan-irrig" ${Ie?"checked":""}><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</label>
          ${ee?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="detected" ${Me?"checked":""}><span class="irr-gl-det-badge">D</span>&nbsp;Irrig. détectée</label><label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="confirmed" ${De?"checked":""}><span class="irr-gl-conf-badge">C</span>&nbsp;Irrig. corrigée</label>`:""}
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="rain" ${ve?"checked":""}><span class="irr-gl-dot" style="background:#3A7FC1"></span>Pluie</label>
          ${ee?'<span class="irr-gl-filter-item"><span class="irr-gl-rain-corr-badge" style="margin-left:0">C</span>&nbsp;Pluie corrigée (ex-irrig. détectée)</span>':""}
          ${ye?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="reservoir" ${me?"checked":""}><span class="irr-gl-dot" style="background:#9E9E9E"></span>Réservoir</label>`:""}
        </div>
        <div class="irr-gl-scroll-top" id="irr-gl-scroll-top">
          <div class="irr-gl-scroll-inner" id="irr-gl-scroll-inner"></div>
        </div>
      </div>
      <div class="irr-gl-body" id="irr-gl-body">
        <table class="irr-gl-table" id="irr-gl-table">
          <thead id="irr-gl-thead">
            <tr><th class="irr-gl-plot-hd irr-gl-week-corner"></th>${c}</tr>
            <tr><th class="irr-gl-plot-hd">Parcelles</th>${H}</tr>
          </thead>
          <tbody>${v}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${Z===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${Z>0?`+${Z} mois au-delà de la saison`:`Fin de saison : ${$e(n)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var F;const i=t.querySelector("#irr-gl-body"),y=t.querySelector("#irr-gl-table"),k=t.querySelector("#irr-gl-scroll-top"),C=t.querySelector("#irr-gl-scroll-inner");if(!(!i||!y||!k||!C))if(C.style.width=y.offsetWidth+"px",k.addEventListener("scroll",()=>{i.scrollLeft=k.scrollLeft}),i.addEventListener("scroll",()=>{k.scrollLeft=i.scrollLeft}),$!==null)i.scrollLeft=$,k.scrollLeft=$;else{const P=t.querySelector(".irr-gl-th--today");if(P){const I=P.previousElementSibling??P,o=((F=t.querySelector(".irr-gl-plot-hd"))==null?void 0:F.offsetWidth)??120,b=I.offsetLeft-o;i.scrollLeft=b,k.scrollLeft=b}}}),(h=t.querySelector("#irr-gl-prev-month"))==null||h.addEventListener("click",()=>{Z>0&&(Z--,V())}),(E=t.querySelector("#irr-gl-next-month"))==null||E.addEventListener("click",()=>{Z++,V()}),t.querySelectorAll(".irr-gl-filter").forEach(i=>{i.addEventListener("change",()=>{const y=i.dataset.filter;y==="real-irrig"?ke=i.checked:y==="plan-irrig"?Ie=i.checked:y==="rain"?ve=i.checked:y==="detected"?Me=i.checked:y==="confirmed"?De=i.checked:y==="reservoir"&&(me=i.checked),V()})}),t.querySelectorAll(".irr-gl-irrig").forEach(i=>{i.addEventListener("click",()=>{i.dataset.idxs?wt(i.dataset.idxs.split(",").map(Number),i.dataset.iso):i.dataset.detPlotid&&Et(+i.dataset.detPlotid,i.dataset.detPlotname,i.dataset.detIso,+i.dataset.detMm,+i.dataset.detRain)})}),t.querySelectorAll(".irr-gl-rain--edit").forEach(i=>{i.addEventListener("click",()=>{qt(+i.dataset.rainPlotid,i.dataset.rainIso,+i.dataset.rainMm)})}),t.querySelectorAll(".irr-gl-add").forEach(i=>{i.addEventListener("click",()=>{Mt(i.dataset.plotId,i.dataset.plotName,i.dataset.iso)})}),t.querySelectorAll(".irr-gl-plot-link").forEach(i=>{i.addEventListener("click",()=>{const y=_.find(k=>String(k.id)===i.dataset.plotId);y&&et(y)})})}function wt(e,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const r=document.createElement("div");r.className="irr-edit-overlay";const s=e.map(l=>p[l]).filter(Boolean);r.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${W(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${s.map((l,n)=>{const d=_.find($=>$.id===l.plotId);return`<div class="irr-edit-row">
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
    </div>`,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#irr-edit-close").addEventListener("click",()=>r.remove()),r.querySelector("#irr-edit-cancel").addEventListener("click",()=>r.remove()),r.querySelectorAll(".irr-edit-del").forEach(l=>{l.addEventListener("click",()=>{const n=s[+l.dataset.i],d=p.indexOf(n);d>=0&&(p.splice(d,1),N()),r.remove()})}),r.querySelector("#irr-edit-save").addEventListener("click",()=>{r.querySelectorAll(".irr-edit-qty").forEach(l=>{const n=s[+l.dataset.i],d=parseInt(l.value);n&&d>0&&(n.mm=d,n.real=t<=L)}),N(),r.remove()})}function qt(e,t,r){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const s=_.find(d=>d.id===e),a=s?s.name:`Parcelle ${e}`,l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
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
    </div>`,document.body.appendChild(l),l.addEventListener("click",d=>{d.target===l&&l.remove()}),l.querySelector("#irr-rain-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-save").addEventListener("click",()=>{const d=parseInt(l.querySelector("#irr-rain-qty").value);!isNaN(d)&&d>=0&&(he[`${e}_${t}`]=d),l.remove(),V()})}function Et(e,t,r,s,a=0){var d;(d=document.querySelector(".irr-edit-overlay"))==null||d.remove();let l=s;const n=document.createElement("div");n.className="irr-edit-overlay",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),n.querySelector("#irr-det-ed-qty").addEventListener("input",S=>{const $=parseInt(S.target.value);$>0&&(l=$)}),n.addEventListener("click",S=>{S.target===n&&n.remove()}),n.querySelector("#irr-det-ed-close").addEventListener("click",()=>n.remove()),n.querySelector("#irr-det-ed-cancel").addEventListener("click",()=>n.remove()),n.querySelector("#irr-det-ed-del").addEventListener("click",()=>{p.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),N(),n.remove(),V()}),n.querySelector("#irr-det-ed-rain").addEventListener("click",()=>{p.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),he[`${e}_${r}`]=a+l,We[`${e}_${r}`]=!0,N(),n.remove(),V()}),n.querySelector("#irr-det-ed-save").addEventListener("click",()=>{p.push({iso:r,mm:l,real:r<=L,plotId:e,detectorConfirmed:!0}),N(),n.remove(),V()})}function Lt(e,t){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();let r=e.iso,s=e.mm;const a=document.createElement("div");a.className="irr-edit-overlay",a.innerHTML=`
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
    </div>`,document.body.appendChild(a),a.addEventListener("click",n=>{n.target===a&&a.remove()}),a.querySelector("#irr-di-close").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-date").addEventListener("change",n=>{r=n.target.value}),a.querySelector("#irr-di-qty").addEventListener("input",n=>{const d=parseInt(n.target.value);d>0&&(s=d)}),a.querySelector("#irr-di-del").addEventListener("click",()=>{const n=p.indexOf(e);n>=0&&p.splice(n,1),N(),a.remove(),t()}),a.querySelector("#irr-di-save").addEventListener("click",()=>{e.iso=r,e.mm=s,e.real=r<=L,N(),a.remove(),t()})}function kt(e,t){var c,f,q,D;const r=p.filter(v=>v.plotId===e&&v.fromStrategy&&v.seasonId),s=[...r].sort((v,u)=>v.iso<u.iso?-1:1),a=new Set(r.map(v=>v.seasonId));let l=((c=s[0])==null?void 0:c.iso)||L,n=((f=s[s.length-1])==null?void 0:f.iso)||K(L,90),d=((q=s[0])==null?void 0:q.mm)||10,S=s.length>=2?Math.max(1,Math.round((new Date(s[s.length-1].iso)-new Date(s[0].iso))/864e5/(s.length-1))):7;const $=l,T=n;let w="form";(D=document.querySelector(".irr-edit-overlay"))==null||D.remove();const g=document.createElement("div");g.className="irr-edit-overlay";function m(){if(!l||!n||S<=0)return[];const v=[],u=new Date(n);let h=new Date(l);for(;h<=u&&v.length<200;)v.push(h.toISOString().split("T")[0]),h.setDate(h.getDate()+S);return v}function A(){const v=m(),u=v.filter(h=>h>L).length;g.querySelector("#irr-ms-preview").textContent=v.length>0?`↗ ${v.length} irrigations · ${v.length*d} mm · dont ${u} à venir`:"Ajustez les dates et la fréquence"}function M(){return`
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
      </div>`}function B(){const v=l!==$||n!==T,u=m();return`
      <div class="irr-edit-body">
        <div style="font-size:13px;color:var(--txt2);line-height:1.5;background:#FEF6E6;border:1px solid #F5D98B;border-radius:8px;padding:10px 12px">
          ${v?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées."}
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--txt3)">
          ${W(l)} → ${W(n)} · ${d} mm tous les ${S} jours · ${u.length} irrigations
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-ms-back">Retour</button>
        <button class="iw-btn iw-btn--pri" id="irr-ms-confirm">Confirmer la modification</button>
      </div>`}function H(){g.innerHTML=`
      <div class="irr-edit-modal" style="max-width:460px">
        <div class="irr-edit-hd">
          <span>Modifier la saison</span>
          <button class="irr-edit-close" id="irr-ms-close">×</button>
        </div>
        ${w==="form"?M():B()}
      </div>`,g.querySelector("#irr-ms-close").addEventListener("click",()=>g.remove()),w==="form"?(A(),g.querySelector("#irr-ms-cancel").addEventListener("click",()=>g.remove()),g.querySelector("#irr-ms-debut").addEventListener("change",v=>{l=v.target.value,A()}),g.querySelector("#irr-ms-fin").addEventListener("change",v=>{n=v.target.value,A()}),g.querySelector("#irr-ms-qty").addEventListener("input",v=>{const u=parseInt(v.target.value);u>0&&(d=u,A())}),g.querySelector("#irr-ms-freq").addEventListener("input",v=>{const u=parseInt(v.target.value);u>0&&(S=u,A())}),g.querySelector("#irr-ms-save").addEventListener("click",()=>{w="confirm",H()})):(g.querySelector("#irr-ms-back").addEventListener("click",()=>{w="form",H()}),g.querySelector("#irr-ms-confirm").addEventListener("click",()=>{const v=l!==$||n!==T,u=m(),h=v?u:u.filter(y=>y>L),E=p.filter(y=>!(y.plotId===e&&a.has(y.seasonId)&&(v||y.iso>L)));p.splice(0,p.length,...E);const i=Oe();for(const y of h)p.push({iso:y,mm:d,real:y<=L,plotId:e,fromStrategy:!0,seasonId:i});N(),g.remove(),ce("Saison modifiée",[`Début : ${W(l)} · Fin : ${W(n)}`,`${u.length} irrigations · ${d} mm · tous les ${S} j`,v?"Modifications appliquées à toute la saison.":"Modifications appliquées à partir de demain."]),t==null||t()}))}document.body.appendChild(g),H(),g.addEventListener("click",v=>{v.target===g&&g.remove()})}function Be(e){var r;const t=document.getElementById("irr-right");t&&(t.querySelectorAll("[data-row-plot]").forEach(s=>s.classList.remove("irr-gl-row--active")),e&&((r=t.querySelector(`[data-row-plot="${e}"]`))==null||r.classList.add("irr-gl-row--active")))}function et(e){const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!(!t||!r)){if(r.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=String(e.id),r.style.display="",t.classList.add("irr-has-detail"),Be(String(e.id)),te(e)}}const It=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function te(e){var h,E,i,y,k,C,F,P,z,I;const t=document.getElementById("irr-detail");if(!t)return;const r=((h=t.querySelector(".irr-pr-details"))==null?void 0:h.open)??!1;if(!Ge(e)){t.style.display="",t.dataset.plotId=String(e.id),t.innerHTML=`
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
      </div>`,(E=t.querySelector("#irr-det-close"))==null||E.addEventListener("click",()=>{var o;(o=document.getElementById("irr-page"))==null||o.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Be(null)}),(i=t.querySelector("#irr-det-type-save"))==null||i.addEventListener("click",()=>{const o=t.querySelector("#irr-det-type-sel").value;Ce(e.id,{irrigation:o}),e.irrigation=o,te(e),V(!0)});return}const s=p.filter(o=>o.plotId===e.id),a=s.some(o=>o.fromStrategy&&o.seasonId),l=s.filter(o=>o.fromStrategy).sort((o,b)=>o.iso<b.iso?-1:1),n=(y=l[0])==null?void 0:y.iso,d=(k=l[l.length-1])==null?void 0:k.iso,S=new Set(s.filter(o=>o.fromStrategy&&o.seasonId).map(o=>o.seasonId)),$=n&&d?`<div><strong>Saison :</strong> ${$e(n)} → ${$e(d)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',T=s.filter(o=>o.real).sort((o,b)=>o.iso<b.iso?-1:1),w=s.filter(o=>!o.real).sort((o,b)=>o.iso<b.iso?-1:1),g=e.area??0,m=T.reduce((o,b)=>o+ne(b.mm,g),0),A=w.reduce((o,b)=>o+ne(b.mm,g),0),M=m+A,B=Je(e.id),H=B&&g?Math.min(100,Math.round(m/B*100)):0,c=B&&g?Math.min(100-H,Math.round(A/B*100)):0,f=H+c,q=`
    <div class="irr-det-vol">
      <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--bdr2)">
        <div class="irr-det-vol-row">
          <span class="irr-det-vol-lbl">Volume saison :</span>
          <strong style="font-size:13px">${Q(M)}</strong>
        </div>
        ${g?`<div class="irr-det-vol-row" style="gap:8px;margin-top:3px">
          <span style="color:#FF8500;font-size:11px">▪ ${Q(m)} effectués</span>
          <span style="color:#FFB705;font-size:11px">▪ ${Q(A)} planifiés</span>
        </div>`:'<div class="irr-det-vol-lbl" style="color:var(--txt3);margin-top:3px">surface non renseignée</div>'}
      </div>
      <div class="irr-det-vol-row">
        <span class="irr-det-vol-lbl">Volume limité :</span>
        <input class="irr-det-vol-input" id="irr-det-vol-input" type="number" min="0" placeholder="—" value="${B??""}" />
        <span class="irr-det-vol-lbl">m³</span>
      </div>
      ${B&&g?`
      <div class="irr-det-vol-bar">
        <div style="width:${H}%;background:#FF8500;height:100%"></div>
        <div style="width:${c}%;background:#FFB705;height:100%"></div>
      </div>
      ${M>B?`<div class="irr-det-vol-note" style="color:#E05252">Dépassement ${Q(M-B)}</div>`:`<div class="irr-det-vol-note">${f}% · ${Q(B-M)} restants</div>`}`:""}
    </div>`,D=o=>{const b=p.indexOf(o),x=o.real?"#FF8500":"#FFB705",[,G,J]=o.iso.split("-"),U=`${parseInt(J)} ${It[parseInt(G)-1]}`,R=o.real?"Effectuée":"Planifiée",Y=o.detectorConfirmed?'<span class="irr-pr-det-tag">Détectée &amp; corrigée</span>':"";return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${x}"></div>
      <div class="irr-pr-date" style="color:${x};min-width:52px;font-size:13px;font-weight:600">${U}</div>
      <div class="irr-pr-info">
        <div class="irr-pr-status" style="color:${x}">${R}</div>
        ${Y}
      </div>
      <div class="irr-pr-mm" style="color:${x}">${o.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${b}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${b}" title="Supprimer">🗑</button>
    </div>`},v=a?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
      </div>
    </div>`:"",u=le&&Ke(e)?`<div style="margin:16px 16px 16px;padding:12px;background:#FFF4E6;border-radius:8px;border-left:3px solid #E07820">
         <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#E07820;margin-bottom:4px">Recommandations d'irrigation sur les 7 prochains jours</div>
         <div style="font-size:22px;font-weight:700;color:#E07820">${Xe(e)} mm</div>
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
        <div class="irr-det-meta">${$}</div>
        ${v}
        ${St(s)}
        ${xt(s)}
        ${q}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${T.length?`
        <details class="irr-pr-details"${r||!w.length?" open":""}>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${T.length}</span></summary>
          <div>${T.map(D).join("")}</div>
        </details>`:""}
      ${u}
      ${w.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${w.length}</span></summary>
          <div>${w.map(D).join("")}</div>
        </details>`:""}
      ${s.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(C=t.querySelector("#irr-det-strat-toggle"))==null||C.addEventListener("click",()=>{const o=t.querySelector("#irr-det-strat-opts");o.style.display=o.style.display==="none"?"":"none"}),(F=t.querySelector("#irr-det-modify"))==null||F.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none",kt(e.id,()=>{te(e),V(!0)})}),(P=t.querySelector("#irr-det-stop"))==null||P.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const o=p.filter(b=>b.plotId===e.id&&S.has(b.seasonId)&&!b.real&&b.iso>L);p.splice(0,p.length,...p.filter(b=>!o.includes(b))),N(),ce("Saison arrêtée",[`${o.length} irrigation${o.length!==1?"s":""} future${o.length!==1?"s":""} supprimée${o.length!==1?"s":""}`,`Parcelle : ${e.name}`])}),(z=t.querySelector("#irr-det-del-all"))==null||z.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const o=p.filter(x=>x.plotId===e.id);if(!o.length)return;const b=o.some(x=>!x.fromStrategy);$t(`Supprimer toutes les irrigations de "${e.name}" ?`,`${o.length} irrigation${o.length!==1?"s":""} seront supprimées (passées et futures).`+(b?"<br><br>Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.":""),()=>{p.splice(0,p.length,...p.filter(x=>!o.includes(x))),N(),ce("Saison supprimée",[`${o.length} irrigation${o.length!==1?"s":""} supprimée${o.length!==1?"s":""}`,`Parcelle : ${e.name}`])})}),t.querySelectorAll(".irr-pr-edit").forEach(o=>{o.addEventListener("click",()=>{const b=p[+o.dataset.idx];b&&Lt(b,()=>{te(e),V(!0)})})}),t.querySelectorAll(".irr-pr-del").forEach(o=>{o.addEventListener("click",()=>{const b=+o.dataset.idx;b>=0&&(p.splice(b,1),N(),te(e))})}),(I=t.querySelector("#irr-det-vol-input"))==null||I.addEventListener("change",o=>{const b=o.target.value!==""?parseInt(o.target.value):null;Ce(e.id,{volumeMaxM3:b}),te(e),Pe()}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var o;(o=document.getElementById("irr-page"))==null||o.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Be(null)})}function Mt(e,t,r,s=10){var T;(T=document.querySelector(".irr-edit-overlay"))==null||T.remove();const a=_.find(w=>w.id===+e),l=a&&!Ge(a),n=l?`
    <div class="irr-edit-row">
      <span class="irr-edit-label">Type d'irrigation</span>
      <select id="irr-qa-type-sel" style="flex:1;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
        ${_e.map(w=>`<option value="${w}"${w===(a.irrigation||"Non renseigné")?" selected":""}>${w}</option>`).join("")}
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
    </div>`,document.body.appendChild(d),d.addEventListener("click",w=>{w.target===d&&d.remove()}),d.querySelector("#irr-qa-close").addEventListener("click",()=>d.remove()),d.querySelector("#irr-qa-cancel").addEventListener("click",()=>d.remove());const S=d.querySelector("#irr-qa-save"),$=d.querySelector("#irr-qa-type-sel");if($){const w=()=>{S.disabled=Fe.has($.value)};w(),$.addEventListener("change",w)}S.addEventListener("click",()=>{if($){const g=$.value;if(Fe.has(g))return;Ce(a.id,{irrigation:g}),a.irrigation=g}const w=parseInt(d.querySelector("#irr-qa-qty").value)||10;p.push({iso:r,mm:w,real:r<=L,plotId:+e,fromStrategy:!1}),N(),d.remove(),V(!0)})}function oe(){var n,d,S,$,T,w,g,m,A,M,B,H;const e=document.getElementById("irr-left"),t=[...Ue].filter(c=>c.id!==100).sort((c,f)=>c.name.localeCompare(f.name)),r=be?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${se===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${se===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${t.map(c=>`<option value="${c.id}"${c.id===se?" selected":""}>${c.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"",s=document.getElementById("irr-page");if(Le){s==null||s.classList.add("irr-left-collapsed"),e.innerHTML=`
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Déplier le panneau">›</button>`,e.querySelector("#irr-left-toggle").addEventListener("click",()=>{Le=!1,oe()});return}s==null||s.classList.remove("irr-left-collapsed"),e.innerHTML=`
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
        ${Te("irr-s-scope",{allBtn:!0})}
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
        ${Te("irr-sa-scope",{allBtn:!0})}
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
        ${Te("irr-ex-scope",{allBtn:!0})}
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
        <input type="checkbox" id="irr-feat-advisor" ${le?"checked":""} />
        <span>Irrigation Advisor</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-reservoir" ${ye?"checked":""} />
        <span>Reservoir Sensorless</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-detector" ${ee?"checked":""} />
        <span>Irrigation Detector</span>
      </label>
    </div>
  `,(n=e.querySelector("#irr-left-toggle"))==null||n.addEventListener("click",()=>{Le=!0,oe()}),O==="saisie"&&Ae(e,"irr-s-scope"),O==="saison"&&Ae(e,"irr-sa-scope"),O==="export"&&Ae(e,"irr-ex-scope"),(d=e.querySelector("#irr-org-select"))==null||d.addEventListener("change",c=>{const f=c.target.value;se=f===""?null:parseInt(f),_=se===null?ge:ge.filter(q=>q.orgId===se),Z=0,oe(),V()}),e.querySelectorAll(".irr-lc-btn").forEach(c=>{c.addEventListener("click",()=>{const f=c.dataset.action;O=O===f?null:f,oe()})});function a(){var i,y,k,C;const c=(i=e.querySelector("#irr-sa-debut"))==null?void 0:i.value,f=(y=e.querySelector("#irr-sa-fin"))==null?void 0:y.value,q=parseInt((k=e.querySelector("#irr-sa-qty"))==null?void 0:k.value)||0,D=parseInt((C=e.querySelector("#irr-sa-freq"))==null?void 0:C.value)||0,v=e.querySelector("#irr-sa-preview");if(!v)return;if(!c||!f||D<=0){v.textContent="—";return}let u=0,h=new Date(c),E=new Date(f);for(;h<=E&&u<200;)u++,h.setDate(h.getDate()+D);if(u>0){const P=fe(e,"irr-sa-scope").reduce((o,b)=>{const x=xe().find(G=>G.id===b);return o+((x==null?void 0:x.area)??0)},0),z=P>0?Math.round(u*q*P*10):0,I=z>0?` · ${z.toLocaleString("fr-FR")} m³`:"";v.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${u} irrigations · ${u*q} mm${I}</span>`}else v.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'}O==="saison"&&(a(),(S=e.querySelector("#irr-sa-debut"))==null||S.addEventListener("change",a),($=e.querySelector("#irr-sa-fin"))==null||$.addEventListener("change",a),(T=e.querySelector("#irr-sa-qty"))==null||T.addEventListener("input",a),(w=e.querySelector("#irr-sa-freq"))==null||w.addEventListener("input",a)),(g=e.querySelector("#irr-ex-dl"))==null||g.addEventListener("click",()=>{const c=e.querySelector("#irr-ex-start").value,f=e.querySelector("#irr-ex-end").value,q=e.querySelector("#irr-ex-irrig").checked,D=e.querySelector("#irr-ex-rain").checked,v=fe(e,"irr-ex-scope"),u=v.length>0?_.filter(I=>v.includes(I.id)):xe(),h=new Set;if(q)for(const I of p)I.iso>=c&&I.iso<=f&&h.add(I.iso);if(D)for(const I of de)I.iso>=c&&I.iso<=f&&h.add(I.iso);const E=[...h].sort(),i={};if(D)for(const I of de)i[I.iso]=I.mm;const y=["Date",...u.map(I=>I.name+(D?" (irrig.)":""))].join(";"),k=E.map(I=>{const o=u.map(b=>{const x=q?p.filter(U=>U.iso===I&&U.plotId===b.id).reduce((U,R)=>U+R.mm,0):0,G=D?i[I]??0:0,J=x+G;return J>0?J:""});return[I,...o].join(";")}),C=[y,...k].join(`
`),F=new Blob([C],{type:"text/csv;charset=utf-8;"}),P=URL.createObjectURL(F),z=Object.assign(document.createElement("a"),{href:P,download:`irrigations_${c}_${f}.csv`});document.body.appendChild(z),z.click(),setTimeout(()=>{URL.revokeObjectURL(P),z.remove()},100)}),(m=e.querySelector("#irr-s-save"))==null||m.addEventListener("click",()=>{const c=fe(e,"irr-s-scope"),f=e.querySelector("#irr-s-date").value,q=parseInt(e.querySelector("#irr-s-qty").value)||0,D=e.querySelector("#irr-s-err");if(!c.length||!f||!q){D&&(D.style.display="");return}D&&(D.style.display="none");const v=f>L,u=()=>{c.forEach(E=>{p.push({iso:f,mm:q,real:!v,plotId:E,fromStrategy:!1})}),N(),ce("Irrigation enregistrée",[`Date : ${W(f)}`,`Quantité : ${q} mm`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},h=p.filter(E=>c.includes(E.plotId)&&E.iso===f);if(h.length){Ne(h.length,`${c.length} parcelle(s)`,()=>{p.splice(0,p.length,...p.filter(E=>!(c.includes(E.plotId)&&E.iso===f))),u()});return}u()});const l=()=>{V();const c=document.getElementById("irr-detail"),f=c==null?void 0:c.dataset.plotId;if(f){const q=_.find(D=>String(D.id)===f);q&&te(q)}};(A=e.querySelector("#irr-feat-advisor"))==null||A.addEventListener("change",c=>{le=c.target.checked,l()}),(M=e.querySelector("#irr-feat-reservoir"))==null||M.addEventListener("change",c=>{ye=c.target.checked,l()}),(B=e.querySelector("#irr-feat-detector"))==null||B.addEventListener("change",c=>{ee=c.target.checked,l()}),(H=e.querySelector("#irr-sa-save"))==null||H.addEventListener("click",()=>{const c=fe(e,"irr-sa-scope"),f=e.querySelector("#irr-sa-debut").value,q=e.querySelector("#irr-sa-fin").value,D=parseInt(e.querySelector("#irr-sa-qty").value)||10,v=parseInt(e.querySelector("#irr-sa-freq").value)||7,u=e.querySelector("#irr-sa-err");if(!c.length||!f||!q){u&&(u.style.display="");return}u&&(u.style.display="none");const h=[];let E=new Date(f),i=new Date(q);for(;E<=i&&h.length<200;)h.push(new Date(E)),E.setDate(E.getDate()+v);const y=Oe(),k=()=>{c.forEach(F=>{h.forEach(P=>{const z=P.toISOString().slice(0,10);p.push({iso:z,mm:D,real:z<=L,plotId:F,fromStrategy:!0,seasonId:y})})}),N(),ce("Saison enregistrée",[`Début : ${W(f)} · Fin : ${W(q)}`,`${h.length} irrigations · ${D} mm · tous les ${v} j`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},C=p.filter(F=>c.includes(F.plotId)&&F.iso>=f&&F.iso<=q);if(C.length){Ne(C.length,`${c.length} parcelle(s)`,()=>{p.splice(0,p.length,...p.filter(F=>!(c.includes(F.plotId)&&F.iso>=f&&F.iso<=q))),k()});return}k()})}function Dt(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const r=t.target.closest("[data-tip]");if(!r){e.style.opacity="0";return}e.textContent=r.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var r;(r=t.relatedTarget)!=null&&r.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search),t=e.get("plot"),r=e.get("action");if((r==="saisie"||r==="saison")&&(O=r),at(),Dt(),oe(),V(),window.addEventListener("irrig-updated",()=>{V();const s=document.getElementById("irr-detail"),a=s==null?void 0:s.dataset.plotId;if(!a)return;const l=_.find(n=>String(n.id)===a);l&&te(l)}),t){const s=_.find(a=>a.id===+t);s&&(et(s),(r==="saisie"||r==="saison")&&setTimeout(()=>{const a=r==="saisie"?"irr-s-scope":"irr-sa-scope",l=document.querySelector(`#${a} input[value="${t}"]`);l&&(l.checked=!0,l.dispatchEvent(new Event("change")))},50))}});
