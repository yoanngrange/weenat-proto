import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as v,R as de,g as _e,s as V}from"./irrigations-C22Dtsoo.js";import{I as Ue}from"./constants-CJpDUNiw.js";import{p as he}from"./plots-DhtWL7s_.js";import{o as Ye}from"./orgs-DnFmvGlp.js";import{u as dt}from"./breadcrumb-CzFWtd6d.js";import{d as ye,e as ct,c as Qe,f as ut}from"./store-c0FlIf2T.js";import"./irrigation-web-DoUwVeyV.js";const We=1,$e=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let le=null,O=$e?he:he.filter(e=>e.orgId===We);const E=new Date().toISOString().split("T")[0];let _=null,Ie=!1,ee=0,ne=!1,xe=!1,te=!1;const Se={},Ge={};let Me=!0,De=!0,fe=!0,Ae=!0,Te=!0,ge=!0;function K(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}function G(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]} ${e.split("-")[0]}`}function we(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,r,i]=e.split("-");return`${parseInt(i)} ${t[parseInt(r)-1]}`}function pt(e){const[,t,r]=e.split("-");return`${r}/${t}`}const vt=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function Ve(e){const[t,r,i]=e.split("-").map(Number);return new Date(Date.UTC(t,r-1,i)).getUTCDay()}function mt(e){const[t,r,i]=e.split("-").map(Number),o=new Date(Date.UTC(t,r-1,i)),l=o.getUTCDay()||7;o.setUTCDate(o.getUTCDate()+4-l);const a=new Date(Date.UTC(o.getUTCFullYear(),0,1));return Math.ceil(((o-a)/864e5+1)/7)}function ft(e){return[e.name+(e.area?` (${e.area} ha)`:""),e.crop,e.irrigation].filter(Boolean).join(" — ")}const Be=new Set(["Non irrigué","Non renseigné",""]);function Je(e){return!!e.irrigation&&!Be.has(e.irrigation)}function re(e,t){return Math.round(e*(t??0)*10)}function W(e){return e.toLocaleString("fr-FR")+" m³"}function Ke(e){const t=Math.floor(e),r=Math.round((e-t)*60);return t<=0?`${r} min`:r>0?`${t} h ${String(r).padStart(2,"0")} min`:`${t} h`}function gt(e){var r;const t=ut(e).volumeMax;return t!==void 0?t:((r=Ye.find(i=>i.id===e))==null?void 0:r.volumeMax)??null}function Xe(e){return Qe(e).volumeMaxM3??null}function Re(e){return Qe(e).debitM3h??null}function bt(e){const t=Re(e),r=O.find(i=>i.id===e);document.querySelectorAll(`tr[data-row-plot="${e}"] .irr-gl-irrig`).forEach(i=>{var a;(a=i.querySelector(".irr-gl-dur-i"))==null||a.remove();const o=+i.dataset.mm;if(!t||!o)return;const l=document.createElement("span");l.className="irr-gl-dur-i",l.dataset.tip=`Durée estimée : ${Ke(re(o,r==null?void 0:r.area)/t)}`,l.textContent="i",i.appendChild(l)})}function qe(){return[...O].sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function Ze(e){return e.id%3===2}function et(e){return 25+e.id*7%20}function yt(e){return e.id%9===2}function ht(e,t){const[,r,i]=t.split("-").map(Number);return Math.min(65,Math.max(5,30+(e.id*7+r*3+i*2)%30))}function tt(e){const t=(e.irrigation||"").toLowerCase();return["rampe","pivot","enrouleur"].some(r=>t.includes(r))}function $t(e){if(!tt(e))return[];const t=[];let r=e.id*17,i=new Date(K(E,-45));const o=new Date(K(E,-1));for(;i<=o;){const l=i.toISOString().split("T")[0],a=r%7-3;r=(r*31+17)%1e3,t.push({iso:l,mm:Math.max(8,15+a),real:!0,plotId:e.id,fromDetector:!0}),i.setDate(i.getDate()+5+r%3),r=(r*31+17)%1e3}return t}function Ce(e,t={}){const{allBtn:r=!1}=t,i=qe().map(o=>`
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${o.id}" />
      <span class="irr-msel-name">${ft(o)}</span>
    </label>`).join("");return`<div class="irr-msel" id="${e}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${i}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${r?'<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>':""}
    </div>
  </div>`}function Fe(e,t){const r=e.querySelector(`#${t}`);if(!r)return;const i=r.querySelector(".irr-msel-search"),o=r.querySelector(".irr-msel-count"),l=r.querySelector(".irr-msel-all-btn"),a=()=>{const d=r.querySelectorAll(".irr-msel-cb:checked").length;o.textContent=`${d} sélectionnée${d!==1?"s":""}`};i.addEventListener("input",()=>{const d=i.value.toLowerCase();r.querySelectorAll(".irr-msel-item").forEach(x=>{x.style.display=x.querySelector(".irr-msel-name").textContent.toLowerCase().includes(d)?"":"none"})}),r.querySelectorAll(".irr-msel-cb").forEach(d=>d.addEventListener("change",a)),l==null||l.addEventListener("click",()=>{const d=[...r.querySelectorAll(".irr-msel-cb")].filter($=>$.closest(".irr-msel-item").style.display!=="none"),x=d.some($=>!$.checked);d.forEach($=>{$.checked=x}),a()})}function be(e,t){const r=e.querySelector(`#${t}`);return r?[...r.querySelectorAll(".irr-msel-cb:checked")].map(i=>+i.value):[]}function ce(e,t){var o;(o=document.querySelector(".irr-save-confirm"))==null||o.remove();const r=document.createElement("div");r.className="irr-save-confirm",r.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(l=>`<div>${l}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(r);const i=()=>{r.remove(),N(!0)};r.addEventListener("click",l=>{l.target===r&&i()}),r.querySelector("#irr-confirm-close").addEventListener("click",i)}function Oe(e,t,r){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
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
    </div>`,document.body.appendChild(i);const o=()=>i.remove();i.addEventListener("click",a=>{a.target===i&&o()}),i.querySelector("#irr-cf-close").addEventListener("click",o),i.querySelector("#irr-cf-cancel").addEventListener("click",o),i.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{i.remove(),r()})}function xt(e,t,r){var o;(o=document.querySelector(".irr-edit-overlay"))==null||o.remove();const i=document.createElement("div");i.className="irr-edit-overlay",i.innerHTML=`
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
    </div>`,document.body.appendChild(i),i.addEventListener("click",l=>{l.target===i&&i.remove()}),i.querySelector("#irr-dc-close").addEventListener("click",()=>i.remove()),i.querySelector("#irr-dc-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#irr-dc-ok").addEventListener("click",()=>{i.remove(),r()})}function St(e){if(e.length<2)return"";const t=[...e].sort((u,h)=>u.iso<h.iso?-1:1),r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],i=new Date(t[0].iso),o=new Date(t[t.length-1].iso),l=Math.max(o-i,1),a=500,d=24,x=5,$=5,D=d-$-4,S=D-$-3,b=d+x+13,f=b+2,A=$+2,I=u=>Math.round(A+(u-i)/l*(a-2*A)),F=u=>{const[,h,q]=u.split("-");return`${parseInt(q)}/${parseInt(h)}`},H=[],c=new Date(i.getFullYear(),i.getMonth()+1,1);for(;c<=o;)H.push(new Date(c)),c.setMonth(c.getMonth()+1);const g=H.map(u=>`<line x1="${I(u)}" y1="${d-6}" x2="${I(u)}" y2="${d+x+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),w=[i,...H,o],M=w.slice(0,-1).map((u,h)=>{const q=I(u),s=I(w[h+1]);return s-q<16?"":`<text x="${Math.round((q+s)/2)}" y="${S}" font-size="9" fill="#B0AEA8" text-anchor="middle">${r[u.getMonth()]}</text>`}).join(""),m=t.map(u=>{const h=u.real?"#FF8500":"#FFB705",q=I(new Date(u.iso)),s=`${we(u.iso)} · ${u.mm} mm`;return`<circle cx="${q}" cy="${D}" r="${$}" fill="${h}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${q}" cy="${D}" r="${$+6}" fill="transparent" pointer-events="all" data-tip="${s}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${a}" height="${f}" viewBox="0 0 ${a} ${f}" style="width:100%;display:block">
      ${M}<rect x="0" y="${d}" width="${a}" height="${x}" rx="${x/2}" fill="#E0DED8"/>${g}${m}
      <text x="1" y="${b}" font-size="9" fill="#B0AEA8">${F(t[0].iso)}</text>
      <text x="${a-1}" y="${b}" font-size="9" fill="#B0AEA8" text-anchor="end">${F(t[t.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function wt(e){const t=e.filter(l=>l.real),r=e.filter(l=>!l.real),i=t.reduce((l,a)=>l+a.mm,0),o=r.reduce((l,a)=>l+a.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${i} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${o} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${i+o} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function je(){var b;const e=document.getElementById("irr-vol-banner-wrap");if(!e)return;const t=$e?le:We;if(!t){e.innerHTML="";return}const r=new Set(O.filter(f=>f.orgId===t).map(f=>f.id));$e||O.forEach(f=>r.add(f.id));const i=new Map(O.map(f=>[f.id,f])),o=v.filter(f=>r.has(f.plotId)&&f.real).reduce((f,A)=>{var I;return f+re(A.mm,((I=i.get(A.plotId))==null?void 0:I.area)??0)},0),l=v.filter(f=>r.has(f.plotId)&&!f.real).reduce((f,A)=>{var I;return f+re(A.mm,((I=i.get(A.plotId))==null?void 0:I.area)??0)},0),a=o+l,d=gt(t),x=d?Math.min(100,Math.round(o/d*100)):0,$=d?Math.min(100-x,Math.round(l/d*100)):0,D=x+$,S=f=>f!=null?f.toLocaleString("fr-FR"):"";e.innerHTML=`
    <div class="irr-vol-banner">
      <div class="irr-vol-main">
        <div class="irr-vol-title">Volume irrigation</div>
        <div class="irr-vol-total">${W(a)}${d?` <span style="font-size:11px;font-weight:400;color:var(--txt3)">/ ${W(d)}</span>`:""}</div>
        <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${W(o)}</span> effectués · <span style="color:#FFB705">▪ ${W(l)}</span> planifiés</div>
      </div>
      <div class="irr-vol-bar-wrap">
        <div class="irr-vol-bar-label">Consommation d'eau sur mon exploitation</div>
        ${d?"":'<div class="irr-vol-bar-nomax">Définissez un volume limité →</div>'}
        <div class="irr-vol-bar-bg">
          <div class="irr-vol-bar-real" style="width:${x}%"></div>
          <div class="irr-vol-bar-plan" style="width:${$}%"></div>
        </div>
        ${d?(()=>{const f=a-d;return f>0?`<div class="irr-vol-bar-pct" style="color:#E05252">Dépassement ${W(f)}</div>`:`<div class="irr-vol-bar-pct">${D}% consommé${D>=90?" ⚠":""}</div>`})():""}
      </div>
      <div class="irr-vol-controls">
        <div class="irr-vol-ctrl-row">
          <span class="irr-vol-ctrl-lbl">Volume limité :</span>
          <input class="irr-vol-input" id="irr-vol-max-inp" type="text" inputmode="numeric" placeholder="—" value="${S(d)}" />
          <span class="irr-vol-ctrl-lbl">m³</span>
        </div>
      </div>
    </div>`,(b=e.querySelector("#irr-vol-max-inp"))==null||b.addEventListener("change",f=>{const A=f.target.value.replace(/\s/g,"").replace(/\./g,"").replace(/,/g,""),I=A!==""?parseInt(A):null;I!==null&&(f.target.value=I.toLocaleString("fr-FR")),ct(t,{volumeMax:I}),je()})}function N(e=!1){var u,h,q;je();const t=document.getElementById("irr-right"),r=K(E,60),i=[...v.map(s=>s.iso),...de.filter(s=>s.iso<=r).map(s=>s.iso),...te?[K(E,-45)]:[],K(E,-1),r];if(!v.length&&!de.length){t.innerHTML=`<div class="irr-pr-empty" style="padding-top:60px"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const o=[...i].sort()[0],l=v.length?[...v].map(s=>s.iso).sort().at(-1):null,a=l&&l>r?l:r,d=new Date(a);d.setMonth(d.getMonth()+ee);const x=d.toISOString().split("T")[0],$=e?null:((u=t.querySelector("#irr-gl-body"))==null?void 0:u.scrollLeft)??null,D=[];let S=new Date(o);const b=new Date(x);for(;S<=b;)D.push(S.toISOString().split("T")[0]),S.setDate(S.getDate()+1);const f={};for(const s of de)f[s.iso]=s.mm;function A(s){if(s<=E||s>K(E,13))return 0;const[,y,L]=s.split("-").map(Number),T=(y*17+L*13)%100;return T<65?0:3+T%9}function I(s,y,L){const T=`${s}_${y}`;if(Se[T]!==void 0)return Se[T];if(!L)return 0;const[,C,B]=y.split("-").map(Number);if((s*13+C*7+B*3)%100<12)return 0;const k=.75+(s*11+B*5)%50/100;return Math.round(L*k)}const F=K(E,7);let H="",c="",g=0,w=null;for(const s of D){const y=s===E,L=Ve(s),T=L===0,C=T?" irr-gl-th--week-end":"";w===null&&(w=mt(s)),g++;const B=ne&&s>E&&s<=F;H+=`<th class="irr-gl-th${y?" irr-gl-th--today":""}${C}${B?" irr-gl-th--advisor-range":""}"><span class="irr-gl-day-name">${vt[L]}</span>${pt(s)}</th>`;const j=s===D[D.length-1];(T||j)&&(c+=`<th class="irr-gl-week-hd${T?" irr-gl-th--week-end":""}" colspan="${g}">S${w}</th>`,g=0,w=null),ne&&s===F&&(H+='<th class="irr-gl-th irr-gl-th--advisor">Reco J+7</th>',c+='<th class="irr-gl-week-hd"></th>')}function M(s){const y=te?$t(s):[],L=ne&&Ze(s),T=xe&&yt(s),C=tt(s);let B="";for(const p of D){const z=p===E,J=v.filter(R=>R.iso===p&&R.plotId===s.id),Y=J.length===0?y.filter(R=>R.iso===p):[],P=J.filter(R=>!R.detectorDismissed).filter(R=>R.detectorConfirmed?te&&Te:R.real?Me:De),Q=Ae?Y:[],ue=[...P,...Q],pe=ue.reduce((R,ie)=>R+ie.mm,0),it=ue.some(R=>R.real),st=(s.id*7+3)%3-1,ze=K(p,st),ae=I(s.id,p,f[ze]??A(ze)),lt=`${s.id}_${p}`;let He="";if(ae&&fe){const R=Ge[lt]?'<span class="irr-gl-rain-corr-badge" title="Irrigation détectée corrigée en pluie">C</span>':"";He=te&&C?`<span class="irr-gl-rain irr-gl-rain--edit" data-rain-plotid="${s.id}" data-rain-iso="${p}" data-rain-mm="${ae}">${ae} mm${R}</span>`:`<span class="irr-gl-rain">${ae} mm${R}</span>`}let Ee="";if(pe){const R=it?"#E07820":"#FFB705",ie=P.map(se=>v.indexOf(se)).filter(se=>se>=0).join(","),me=Q.length?'<span class="irr-gl-det-badge" title="Détecté automatiquement">D</span>':P.some(se=>se.detectorConfirmed)?'<span class="irr-gl-conf-badge" title="Irrigation confirmée">C</span>':"",Le=Q.reduce((se,ot)=>se+ot.mm,0),Z=Re(s.id),ke=Z?`<span class="irr-gl-dur-i" data-tip="Durée estimée : ${Ke(re(pe,s.area)/Z)}">i</span>`:"";Ee=`<span class="irr-gl-val irr-gl-irrig" style="color:${R};cursor:pointer" data-mm="${pe}"${ie?` data-idxs="${ie}" data-iso="${p}"`:` data-det-plotid="${s.id}" data-det-plotname="${s.name}" data-det-iso="${p}" data-det-mm="${Le}" data-det-rain="${ae}"`}>${pe} mm${me}${ke}</span>`}else Ee=`<button class="irr-gl-add" data-plot-id="${s.id}" data-plot-name="${s.name}" data-iso="${p}">+</button>`;let Ne="";T&&ge&&p<E&&(Ne=`<span class="irr-gl-res">${ht(s,p)} mm</span>`);let ve="";fe&&(ve+=`<div class="irr-gl-slot">${He}</div>`),ve+=`<div class="irr-gl-slot">${Ee}</div>`,T&&ge&&(ve+=`<div class="irr-gl-slot">${Ne}</div>`);const nt=Ve(p)===0,at=L&&p>E&&p<=F;if(B+=`<td class="irr-gl-td${z?" irr-gl-td--today":""}${nt?" irr-gl-td--week-end":""}${at?" irr-gl-td--advisor-range":""}">${ve}</td>`,ne&&p===F){let R="";if(L){const ie=et(s),me=v.filter(Z=>Z.plotId===s.id&&Z.iso>E&&Z.iso<=F).reduce((Z,ke)=>Z+ke.mm,0),Le=me>=ie?"#24B066":"#E05252";R=`<span class="irr-gl-advisor">${ie} mm</span><span style="display:block;font-size:10px;font-weight:600;color:${Le}">${me} mm planifié</span>`}B+=`<td class="irr-gl-td irr-gl-td--advisor">${R}</td>`}}const j=[s.crop,s.irrigation].filter(Boolean).join(" · "),k=s.area?`<span class="irr-gl-plot-area">(${s.area} ha)</span>`:"";let U="";const n=Xe(s.id);if(n){const p=s.area??0,z=v.filter(P=>P.plotId===s.id&&P.real).reduce((P,Q)=>P+re(Q.mm,p),0),J=v.filter(P=>P.plotId===s.id&&!P.real).reduce((P,Q)=>P+re(Q.mm,p),0),Y=z+J;if(Y>0)if(Y>n)U=`<span class="irr-gl-plot-deficit">Dépassement ${W(Y-n)}</span>`;else{const P=Math.round(z/n*100),Q=Math.min(100-P,Math.round(J/n*100));U=`<span class="irr-gl-plot-mini-bar"><span class="irr-gl-plot-mini-r" style="width:${P}%"></span><span class="irr-gl-plot-mini-p" style="width:${Q}%"></span></span>`}}return`<tr data-row-plot="${s.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${s.id}">${s.name}</span>${k}${j?`<span class="irr-gl-plot-sub">${j}</span>`:""}${U}</td>${B}</tr>`}const m=qe().map(M).join("");t.innerHTML=`
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-gl-legend">
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="real-irrig" ${Me?"checked":""}><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. effectuée</label>
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="plan-irrig" ${De?"checked":""}><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</label>
          ${te?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="detected" ${Ae?"checked":""}><span class="irr-gl-det-badge">D</span>&nbsp;Irrig. détectée</label><label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="confirmed" ${Te?"checked":""}><span class="irr-gl-conf-badge">C</span>&nbsp;Irrig. corrigée</label>`:""}
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="rain" ${fe?"checked":""}><span class="irr-gl-dot" style="background:#3A7FC1"></span>Pluie</label>
          ${te?'<span class="irr-gl-filter-item"><span class="irr-gl-rain-corr-badge" style="margin-left:0">C</span>&nbsp;Pluie corrigée (ex-irrig. détectée)</span>':""}
          ${xe?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="reservoir" ${ge?"checked":""}><span class="irr-gl-dot" style="background:#9E9E9E"></span>Réservoir</label>`:""}
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
          <tbody>${m}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${ee===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${ee>0?`+${ee} mois au-delà de la saison`:`Fin de saison : ${we(a)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var C;const s=t.querySelector("#irr-gl-body"),y=t.querySelector("#irr-gl-table"),L=t.querySelector("#irr-gl-scroll-top"),T=t.querySelector("#irr-gl-scroll-inner");if(!(!s||!y||!L||!T))if(T.style.width=y.offsetWidth+"px",L.addEventListener("scroll",()=>{s.scrollLeft=L.scrollLeft}),s.addEventListener("scroll",()=>{L.scrollLeft=s.scrollLeft}),$!==null)s.scrollLeft=$,L.scrollLeft=$;else{const B=t.querySelector(".irr-gl-th--today");if(B){const k=B.previousElementSibling??B,U=((C=t.querySelector(".irr-gl-plot-hd"))==null?void 0:C.offsetWidth)??120,n=k.offsetLeft-U;s.scrollLeft=n,L.scrollLeft=n}}}),(h=t.querySelector("#irr-gl-prev-month"))==null||h.addEventListener("click",()=>{ee>0&&(ee--,N())}),(q=t.querySelector("#irr-gl-next-month"))==null||q.addEventListener("click",()=>{ee++,N()}),t.querySelectorAll(".irr-gl-filter").forEach(s=>{s.addEventListener("change",()=>{const y=s.dataset.filter;y==="real-irrig"?Me=s.checked:y==="plan-irrig"?De=s.checked:y==="rain"?fe=s.checked:y==="detected"?Ae=s.checked:y==="confirmed"?Te=s.checked:y==="reservoir"&&(ge=s.checked),N()})}),t.querySelectorAll(".irr-gl-irrig").forEach(s=>{s.addEventListener("click",()=>{s.dataset.idxs?qt(s.dataset.idxs.split(",").map(Number),s.dataset.iso):s.dataset.detPlotid&&Lt(+s.dataset.detPlotid,s.dataset.detPlotname,s.dataset.detIso,+s.dataset.detMm,+s.dataset.detRain)})}),t.querySelectorAll(".irr-gl-rain--edit").forEach(s=>{s.addEventListener("click",()=>{Et(+s.dataset.rainPlotid,s.dataset.rainIso,+s.dataset.rainMm)})}),t.querySelectorAll(".irr-gl-add").forEach(s=>{s.addEventListener("click",()=>{Dt(s.dataset.plotId,s.dataset.plotName,s.dataset.iso)})}),t.querySelectorAll(".irr-gl-plot-link").forEach(s=>{s.addEventListener("click",()=>{const y=O.find(L=>String(L.id)===s.dataset.plotId);y&&rt(y)})})}function qt(e,t){var o;(o=document.querySelector(".irr-edit-overlay"))==null||o.remove();const r=document.createElement("div");r.className="irr-edit-overlay";const i=e.map(l=>v[l]).filter(Boolean);r.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${G(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${i.map((l,a)=>{const d=O.find($=>$.id===l.plotId);return`<div class="irr-edit-row">
            <span class="irr-edit-label">${d?d.name:`Parcelle ${l.plotId}`}</span>
            <input type="number" class="irr-edit-qty" data-i="${a}" value="${l.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${a}">🗑</button>
          </div>`}).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#irr-edit-close").addEventListener("click",()=>r.remove()),r.querySelector("#irr-edit-cancel").addEventListener("click",()=>r.remove()),r.querySelectorAll(".irr-edit-del").forEach(l=>{l.addEventListener("click",()=>{const a=i[+l.dataset.i],d=v.indexOf(a);d>=0&&(v.splice(d,1),V()),r.remove()})}),r.querySelector("#irr-edit-save").addEventListener("click",()=>{r.querySelectorAll(".irr-edit-qty").forEach(l=>{const a=i[+l.dataset.i],d=parseInt(l.value);a&&d>0&&(a.mm=d,a.real=t<=E)}),V(),r.remove()})}function Et(e,t,r){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const i=O.find(d=>d.id===e),o=i?i.name:`Parcelle ${e}`,l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier la pluie — ${G(t)}</span>
        <button class="irr-edit-close" id="irr-rain-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${o}</span>
          <input type="number" id="irr-rain-qty" value="${r}" min="0" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-rain-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-rain-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(l),l.addEventListener("click",d=>{d.target===l&&l.remove()}),l.querySelector("#irr-rain-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-save").addEventListener("click",()=>{const d=parseInt(l.querySelector("#irr-rain-qty").value);!isNaN(d)&&d>=0&&(Se[`${e}_${t}`]=d),l.remove(),N()})}function Lt(e,t,r,i,o=0){var d;(d=document.querySelector(".irr-edit-overlay"))==null||d.remove();let l=i;const a=document.createElement("div");a.className="irr-edit-overlay",a.innerHTML=`
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
    </div>`,document.body.appendChild(a),a.querySelector("#irr-det-ed-qty").addEventListener("input",x=>{const $=parseInt(x.target.value);$>0&&(l=$)}),a.addEventListener("click",x=>{x.target===a&&a.remove()}),a.querySelector("#irr-det-ed-close").addEventListener("click",()=>a.remove()),a.querySelector("#irr-det-ed-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#irr-det-ed-del").addEventListener("click",()=>{v.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),V(),a.remove(),N()}),a.querySelector("#irr-det-ed-rain").addEventListener("click",()=>{v.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),Se[`${e}_${r}`]=o+l,Ge[`${e}_${r}`]=!0,V(),a.remove(),N()}),a.querySelector("#irr-det-ed-save").addEventListener("click",()=>{v.push({iso:r,mm:l,real:r<=E,plotId:e,detectorConfirmed:!0}),V(),a.remove(),N()})}function kt(e,t){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();let r=e.iso,i=e.mm;const o=document.createElement("div");o.className="irr-edit-overlay",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),o.addEventListener("click",a=>{a.target===o&&o.remove()}),o.querySelector("#irr-di-close").addEventListener("click",()=>o.remove()),o.querySelector("#irr-di-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#irr-di-date").addEventListener("change",a=>{r=a.target.value}),o.querySelector("#irr-di-qty").addEventListener("input",a=>{const d=parseInt(a.target.value);d>0&&(i=d)}),o.querySelector("#irr-di-del").addEventListener("click",()=>{const a=v.indexOf(e);a>=0&&v.splice(a,1),V(),o.remove(),t()}),o.querySelector("#irr-di-save").addEventListener("click",()=>{e.iso=r,e.mm=i,e.real=r<=E,V(),o.remove(),t()})}function It(e,t){var c,g,w,M;const r=v.filter(m=>m.plotId===e&&m.fromStrategy&&m.seasonId),i=[...r].sort((m,u)=>m.iso<u.iso?-1:1),o=new Set(r.map(m=>m.seasonId));let l=((c=i[0])==null?void 0:c.iso)||E,a=((g=i[i.length-1])==null?void 0:g.iso)||K(E,90),d=((w=i[0])==null?void 0:w.mm)||10,x=i.length>=2?Math.max(1,Math.round((new Date(i[i.length-1].iso)-new Date(i[0].iso))/864e5/(i.length-1))):7;const $=l,D=a;let S="form";(M=document.querySelector(".irr-edit-overlay"))==null||M.remove();const b=document.createElement("div");b.className="irr-edit-overlay";function f(){if(!l||!a||x<=0)return[];const m=[],u=new Date(a);let h=new Date(l);for(;h<=u&&m.length<200;)m.push(h.toISOString().split("T")[0]),h.setDate(h.getDate()+x);return m}function A(){const m=f(),u=m.filter(h=>h>E).length;b.querySelector("#irr-ms-preview").textContent=m.length>0?`↗ ${m.length} irrigations · ${m.length*d} mm · dont ${u} à venir`:"Ajustez les dates et la fréquence"}function I(){return`
      <div class="irr-edit-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Début</label>
            <input type="date" id="irr-ms-debut" value="${l}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fin</label>
            <input type="date" id="irr-ms-fin" value="${a}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Quantité (mm/irrig.)</label>
            <input type="number" id="irr-ms-qty" value="${d}" min="1" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fréquence (jours)</label>
            <input type="number" id="irr-ms-freq" value="${x}" min="1" max="30" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
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
      </div>`}function F(){const m=l!==$||a!==D,u=f();return`
      <div class="irr-edit-body">
        <div style="font-size:13px;color:var(--txt2);line-height:1.5;background:#FEF6E6;border:1px solid #F5D98B;border-radius:8px;padding:10px 12px">
          ${m?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées."}
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--txt3)">
          ${G(l)} → ${G(a)} · ${d} mm tous les ${x} jours · ${u.length} irrigations
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-ms-back">Retour</button>
        <button class="iw-btn iw-btn--pri" id="irr-ms-confirm">Confirmer la modification</button>
      </div>`}function H(){b.innerHTML=`
      <div class="irr-edit-modal" style="max-width:460px">
        <div class="irr-edit-hd">
          <span>Modifier la saison</span>
          <button class="irr-edit-close" id="irr-ms-close">×</button>
        </div>
        ${S==="form"?I():F()}
      </div>`,b.querySelector("#irr-ms-close").addEventListener("click",()=>b.remove()),S==="form"?(A(),b.querySelector("#irr-ms-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#irr-ms-debut").addEventListener("change",m=>{l=m.target.value,A()}),b.querySelector("#irr-ms-fin").addEventListener("change",m=>{a=m.target.value,A()}),b.querySelector("#irr-ms-qty").addEventListener("input",m=>{const u=parseInt(m.target.value);u>0&&(d=u,A())}),b.querySelector("#irr-ms-freq").addEventListener("input",m=>{const u=parseInt(m.target.value);u>0&&(x=u,A())}),b.querySelector("#irr-ms-save").addEventListener("click",()=>{S="confirm",H()})):(b.querySelector("#irr-ms-back").addEventListener("click",()=>{S="form",H()}),b.querySelector("#irr-ms-confirm").addEventListener("click",()=>{const m=l!==$||a!==D,u=f(),h=m?u:u.filter(y=>y>E),q=v.filter(y=>!(y.plotId===e&&o.has(y.seasonId)&&(m||y.iso>E)));v.splice(0,v.length,...q);const s=_e();for(const y of h)v.push({iso:y,mm:d,real:y<=E,plotId:e,fromStrategy:!0,seasonId:s});V(),b.remove(),ce("Saison modifiée",[`Début : ${G(l)} · Fin : ${G(a)}`,`${u.length} irrigations · ${d} mm · tous les ${x} j`,m?"Modifications appliquées à toute la saison.":"Modifications appliquées à partir de demain."]),t==null||t()}))}document.body.appendChild(b),H(),b.addEventListener("click",m=>{m.target===b&&b.remove()})}function Pe(e){var r;const t=document.getElementById("irr-right");t&&(t.querySelectorAll("[data-row-plot]").forEach(i=>i.classList.remove("irr-gl-row--active")),e&&((r=t.querySelector(`[data-row-plot="${e}"]`))==null||r.classList.add("irr-gl-row--active")))}function rt(e){const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!(!t||!r)){if(r.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=String(e.id),r.style.display="",t.classList.add("irr-has-detail"),Pe(String(e.id)),X(e)}}const Mt=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];function X(e){var h,q,s,y,L,T,C,B,j,k,U;const t=document.getElementById("irr-detail");if(!t)return;const r=((h=t.querySelector(".irr-pr-details"))==null?void 0:h.open)??!1;if(!Je(e)){t.style.display="",t.dataset.plotId=String(e.id),t.innerHTML=`
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
            ${Ue.map(n=>`<option value="${n}"${n===(e.irrigation||"Non renseigné")?" selected":""}>${n}</option>`).join("")}
          </select>
          <button id="irr-det-type-save" class="btn-primary" style="margin-top:10px;width:100%;justify-content:center">Enregistrer</button>
        </div>
      </div>`,(q=t.querySelector("#irr-det-close"))==null||q.addEventListener("click",()=>{var n;(n=document.getElementById("irr-page"))==null||n.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Pe(null)}),(s=t.querySelector("#irr-det-type-save"))==null||s.addEventListener("click",()=>{const n=t.querySelector("#irr-det-type-sel").value;ye(e.id,{irrigation:n}),e.irrigation=n,X(e),N(!0)});return}const i=v.filter(n=>n.plotId===e.id),o=i.some(n=>n.fromStrategy&&n.seasonId),l=i.filter(n=>n.fromStrategy).sort((n,p)=>n.iso<p.iso?-1:1),a=(y=l[0])==null?void 0:y.iso,d=(L=l[l.length-1])==null?void 0:L.iso,x=new Set(i.filter(n=>n.fromStrategy&&n.seasonId).map(n=>n.seasonId)),$=a&&d?`<div><strong>Saison :</strong> ${we(a)} → ${we(d)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',D=i.filter(n=>n.real).sort((n,p)=>n.iso<p.iso?-1:1),S=i.filter(n=>!n.real).sort((n,p)=>n.iso<p.iso?-1:1),b=e.area??0,f=D.reduce((n,p)=>n+re(p.mm,b),0),A=S.reduce((n,p)=>n+re(p.mm,b),0),I=f+A,F=Xe(e.id),H=F&&b?Math.min(100,Math.round(f/F*100)):0,c=F&&b?Math.min(100-H,Math.round(A/F*100)):0,g=H+c,w=`
    <div class="irr-det-vol">
      <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--bdr2)">
        <div class="irr-det-vol-row">
          <span class="irr-det-vol-lbl">Volume saison :</span>
          <strong style="font-size:13px">${W(I)}</strong>
        </div>
        ${b?`<div class="irr-det-vol-row" style="gap:8px;margin-top:3px">
          <span style="color:#FF8500;font-size:11px">▪ ${W(f)} effectués</span>
          <span style="color:#FFB705;font-size:11px">▪ ${W(A)} planifiés</span>
        </div>`:'<div class="irr-det-vol-lbl" style="color:var(--txt3);margin-top:3px">surface non renseignée</div>'}
      </div>
      <div class="irr-det-vol-row">
        <span class="irr-det-vol-lbl">Volume limité :</span>
        <input class="irr-det-vol-input" id="irr-det-vol-input" type="number" min="0" placeholder="—" value="${F??""}" />
        <span class="irr-det-vol-lbl">m³</span>
      </div>
      ${F&&b?`
      <div class="irr-det-vol-bar">
        <div style="width:${H}%;background:#FF8500;height:100%"></div>
        <div style="width:${c}%;background:#FFB705;height:100%"></div>
      </div>
      ${I>F?`<div class="irr-det-vol-note" style="color:#E05252">Dépassement ${W(I-F)}</div>`:`<div class="irr-det-vol-note">${g}% · ${W(F-I)} restants</div>`}`:""}
      <div class="irr-det-vol-row" style="margin-top:8px">
        <span class="irr-det-vol-lbl">Débit :</span>
        <input class="irr-det-vol-input" id="irr-det-debit-input" type="number" min="0" step="0.1" placeholder="—" value="${Re(e.id)??""}" />
        <span class="irr-det-vol-lbl">m³/h</span>
      </div>
    </div>`,M=n=>{const p=v.indexOf(n),z=n.real?"#FF8500":"#FFB705",[,J,Y]=n.iso.split("-"),P=`${parseInt(Y)} ${Mt[parseInt(J)-1]}`,Q=n.real?"Effectuée":"Planifiée",ue=n.detectorConfirmed?'<span class="irr-pr-det-tag">Détectée &amp; corrigée</span>':"";return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${z}"></div>
      <div class="irr-pr-date" style="color:${z};min-width:52px;font-size:13px;font-weight:600">${P}</div>
      <div class="irr-pr-info">
        <div class="irr-pr-status" style="color:${z}">${Q}</div>
        ${ue}
      </div>
      <div class="irr-pr-mm" style="color:${z}">${n.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${p}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${p}" title="Supprimer">🗑</button>
    </div>`},m=o?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
      </div>
    </div>`:"",u=ne&&Ze(e)?`<div style="margin:16px 16px 16px;padding:12px;background:#FFF4E6;border-radius:8px;border-left:3px solid #E07820">
         <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#E07820;margin-bottom:4px">Recommandations d'irrigation sur les 7 prochains jours</div>
         <div style="font-size:22px;font-weight:700;color:#E07820">${et(e)} mm</div>
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
        ${m}
        ${wt(i)}
        ${St(i)}
        ${w}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${D.length?`
        <details class="irr-pr-details"${r||!S.length?" open":""}>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${D.length}</span></summary>
          <div>${D.map(M).join("")}</div>
        </details>`:""}
      ${u}
      ${S.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${S.length}</span></summary>
          <div>${S.map(M).join("")}</div>
        </details>`:""}
      ${i.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(T=t.querySelector("#irr-det-strat-toggle"))==null||T.addEventListener("click",()=>{const n=t.querySelector("#irr-det-strat-opts");n.style.display=n.style.display==="none"?"":"none"}),(C=t.querySelector("#irr-det-modify"))==null||C.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none",It(e.id,()=>{X(e),N(!0)})}),(B=t.querySelector("#irr-det-stop"))==null||B.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const n=v.filter(p=>p.plotId===e.id&&x.has(p.seasonId)&&!p.real&&p.iso>E);v.splice(0,v.length,...v.filter(p=>!n.includes(p))),V(),ce("Saison arrêtée",[`${n.length} irrigation${n.length!==1?"s":""} future${n.length!==1?"s":""} supprimée${n.length!==1?"s":""}`,`Parcelle : ${e.name}`])}),(j=t.querySelector("#irr-det-del-all"))==null||j.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const n=v.filter(z=>z.plotId===e.id);if(!n.length)return;const p=n.some(z=>!z.fromStrategy);xt(`Supprimer toutes les irrigations de "${e.name}" ?`,`${n.length} irrigation${n.length!==1?"s":""} seront supprimées (passées et futures).`+(p?"<br><br>Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.":""),()=>{v.splice(0,v.length,...v.filter(z=>!n.includes(z))),V(),ce("Saison supprimée",[`${n.length} irrigation${n.length!==1?"s":""} supprimée${n.length!==1?"s":""}`,`Parcelle : ${e.name}`])})}),t.querySelectorAll(".irr-pr-edit").forEach(n=>{n.addEventListener("click",()=>{const p=v[+n.dataset.idx];p&&kt(p,()=>{X(e),N(!0)})})}),t.querySelectorAll(".irr-pr-del").forEach(n=>{n.addEventListener("click",()=>{const p=+n.dataset.idx;p>=0&&(v.splice(p,1),V(),X(e))})}),(k=t.querySelector("#irr-det-vol-input"))==null||k.addEventListener("change",n=>{const p=n.target.value!==""?parseInt(n.target.value):null;ye(e.id,{volumeMaxM3:p}),X(e),je()}),(U=t.querySelector("#irr-det-debit-input"))==null||U.addEventListener("change",n=>{const p=n.target.value!==""?parseFloat(n.target.value):null;ye(e.id,{debitM3h:p}),X(e),bt(e.id)}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var n;(n=document.getElementById("irr-page"))==null||n.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Pe(null)})}function Dt(e,t,r,i=10){var D;(D=document.querySelector(".irr-edit-overlay"))==null||D.remove();const o=O.find(S=>S.id===+e),l=o&&!Je(o),a=l?`
    <div class="irr-edit-row">
      <span class="irr-edit-label">Type d'irrigation</span>
      <select id="irr-qa-type-sel" style="flex:1;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
        ${Ue.map(S=>`<option value="${S}"${S===(o.irrigation||"Non renseigné")?" selected":""}>${S}</option>`).join("")}
      </select>
    </div>`:"",d=document.createElement("div");d.className="irr-edit-overlay",d.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${G(r)}</span>
        <button class="irr-edit-close" id="irr-qa-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${l?`<p style="font-size:12px;color:var(--txt2);margin:0 0 10px">Précisez le type d'irrigation de cette parcelle pour pouvoir saisir une irrigation.</p>`:""}
        ${a}
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
    </div>`,document.body.appendChild(d),d.addEventListener("click",S=>{S.target===d&&d.remove()}),d.querySelector("#irr-qa-close").addEventListener("click",()=>d.remove()),d.querySelector("#irr-qa-cancel").addEventListener("click",()=>d.remove());const x=d.querySelector("#irr-qa-save"),$=d.querySelector("#irr-qa-type-sel");if($){const S=()=>{x.disabled=Be.has($.value)};S(),$.addEventListener("change",S)}x.addEventListener("click",()=>{if($){const b=$.value;if(Be.has(b))return;ye(o.id,{irrigation:b}),o.irrigation=b}const S=parseInt(d.querySelector("#irr-qa-qty").value)||10;v.push({iso:r,mm:S,real:r<=E,plotId:+e,fromStrategy:!1}),V(),d.remove(),N(!0)})}function oe(){var a,d,x,$,D,S,b,f,A,I,F,H;const e=document.getElementById("irr-left"),t=[...Ye].filter(c=>c.id!==100).sort((c,g)=>c.name.localeCompare(g.name)),r=$e?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${le===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${le===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${t.map(c=>`<option value="${c.id}"${c.id===le?" selected":""}>${c.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"",i=document.getElementById("irr-page");if(Ie){i==null||i.classList.add("irr-left-collapsed"),e.innerHTML=`
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Déplier le panneau">›</button>`,e.querySelector("#irr-left-toggle").addEventListener("click",()=>{Ie=!1,oe()});return}i==null||i.classList.remove("irr-left-collapsed"),e.innerHTML=`
    <div class="irr-lc-collapse-bar">
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Réduire le panneau">‹</button>
    </div>
    <div class="irr-lc-scroll">
    ${r}

    <button class="irr-lc-btn${_==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${_==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${Ce("irr-s-scope",{allBtn:!0})}
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

    <button class="irr-lc-btn${_==="saison"?" irr-lc-btn--active":""}" data-action="saison">
      <i class="bi bi-arrow-repeat"></i><span>Saisir une saison d'irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${_==="saison"?"":" irr-lc-form--hidden"}" id="irr-form-saison">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${Ce("irr-sa-scope",{allBtn:!0})}
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

    <button class="irr-lc-btn${_==="export"?" irr-lc-btn--active":""}" data-action="export">
      <i class="bi bi-download"></i><span>Exporter les irrigations</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${_==="export"?"":" irr-lc-form--hidden"}" id="irr-form-export">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${Ce("irr-ex-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Du</label>
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${v.length?[...v].sort((c,g)=>c.iso<g.iso?-1:1)[0].iso:E}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${v.length?[...v].sort((c,g)=>c.iso>g.iso?-1:1)[0].iso:E}" />
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
        <input type="checkbox" id="irr-feat-advisor" ${ne?"checked":""} />
        <span>Irrigation Advisor</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-reservoir" ${xe?"checked":""} />
        <span>Reservoir Sensorless</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-detector" ${te?"checked":""} />
        <span>Irrigation Detector</span>
      </label>
    </div>
  `,(a=e.querySelector("#irr-left-toggle"))==null||a.addEventListener("click",()=>{Ie=!0,oe()}),_==="saisie"&&Fe(e,"irr-s-scope"),_==="saison"&&Fe(e,"irr-sa-scope"),_==="export"&&Fe(e,"irr-ex-scope"),(d=e.querySelector("#irr-org-select"))==null||d.addEventListener("change",c=>{const g=c.target.value;le=g===""?null:parseInt(g),O=le===null?he:he.filter(w=>w.orgId===le),ee=0,oe(),N()}),e.querySelectorAll(".irr-lc-btn").forEach(c=>{c.addEventListener("click",()=>{const g=c.dataset.action;_=_===g?null:g,oe()})});function o(){var s,y,L,T;const c=(s=e.querySelector("#irr-sa-debut"))==null?void 0:s.value,g=(y=e.querySelector("#irr-sa-fin"))==null?void 0:y.value,w=parseInt((L=e.querySelector("#irr-sa-qty"))==null?void 0:L.value)||0,M=parseInt((T=e.querySelector("#irr-sa-freq"))==null?void 0:T.value)||0,m=e.querySelector("#irr-sa-preview");if(!m)return;if(!c||!g||M<=0){m.textContent="—";return}let u=0,h=new Date(c),q=new Date(g);for(;h<=q&&u<200;)u++,h.setDate(h.getDate()+M);if(u>0){const B=be(e,"irr-sa-scope").reduce((U,n)=>{const p=qe().find(z=>z.id===n);return U+((p==null?void 0:p.area)??0)},0),j=B>0?Math.round(u*w*B*10):0,k=j>0?` · ${j.toLocaleString("fr-FR")} m³`:"";m.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${u} irrigations · ${u*w} mm${k}</span>`}else m.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'}_==="saison"&&(o(),(x=e.querySelector("#irr-sa-debut"))==null||x.addEventListener("change",o),($=e.querySelector("#irr-sa-fin"))==null||$.addEventListener("change",o),(D=e.querySelector("#irr-sa-qty"))==null||D.addEventListener("input",o),(S=e.querySelector("#irr-sa-freq"))==null||S.addEventListener("input",o)),(b=e.querySelector("#irr-ex-dl"))==null||b.addEventListener("click",()=>{const c=e.querySelector("#irr-ex-start").value,g=e.querySelector("#irr-ex-end").value,w=e.querySelector("#irr-ex-irrig").checked,M=e.querySelector("#irr-ex-rain").checked,m=be(e,"irr-ex-scope"),u=m.length>0?O.filter(k=>m.includes(k.id)):qe(),h=new Set;if(w)for(const k of v)k.iso>=c&&k.iso<=g&&h.add(k.iso);if(M)for(const k of de)k.iso>=c&&k.iso<=g&&h.add(k.iso);const q=[...h].sort(),s={};if(M)for(const k of de)s[k.iso]=k.mm;const y=["Date",...u.map(k=>k.name+(M?" (irrig.)":""))].join(";"),L=q.map(k=>{const U=u.map(n=>{const p=w?v.filter(Y=>Y.iso===k&&Y.plotId===n.id).reduce((Y,P)=>Y+P.mm,0):0,z=M?s[k]??0:0,J=p+z;return J>0?J:""});return[k,...U].join(";")}),T=[y,...L].join(`
`),C=new Blob([T],{type:"text/csv;charset=utf-8;"}),B=URL.createObjectURL(C),j=Object.assign(document.createElement("a"),{href:B,download:`irrigations_${c}_${g}.csv`});document.body.appendChild(j),j.click(),setTimeout(()=>{URL.revokeObjectURL(B),j.remove()},100)}),(f=e.querySelector("#irr-s-save"))==null||f.addEventListener("click",()=>{const c=be(e,"irr-s-scope"),g=e.querySelector("#irr-s-date").value,w=parseInt(e.querySelector("#irr-s-qty").value)||0,M=e.querySelector("#irr-s-err");if(!c.length||!g||!w){M&&(M.style.display="");return}M&&(M.style.display="none");const m=g>E,u=()=>{c.forEach(q=>{v.push({iso:g,mm:w,real:!m,plotId:q,fromStrategy:!1})}),V(),ce("Irrigation enregistrée",[`Date : ${G(g)}`,`Quantité : ${w} mm`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},h=v.filter(q=>c.includes(q.plotId)&&q.iso===g);if(h.length){Oe(h.length,`${c.length} parcelle(s)`,()=>{v.splice(0,v.length,...v.filter(q=>!(c.includes(q.plotId)&&q.iso===g))),u()});return}u()});const l=()=>{N();const c=document.getElementById("irr-detail"),g=c==null?void 0:c.dataset.plotId;if(g){const w=O.find(M=>String(M.id)===g);w&&X(w)}};(A=e.querySelector("#irr-feat-advisor"))==null||A.addEventListener("change",c=>{ne=c.target.checked,l()}),(I=e.querySelector("#irr-feat-reservoir"))==null||I.addEventListener("change",c=>{xe=c.target.checked,l()}),(F=e.querySelector("#irr-feat-detector"))==null||F.addEventListener("change",c=>{te=c.target.checked,l()}),(H=e.querySelector("#irr-sa-save"))==null||H.addEventListener("click",()=>{const c=be(e,"irr-sa-scope"),g=e.querySelector("#irr-sa-debut").value,w=e.querySelector("#irr-sa-fin").value,M=parseInt(e.querySelector("#irr-sa-qty").value)||10,m=parseInt(e.querySelector("#irr-sa-freq").value)||7,u=e.querySelector("#irr-sa-err");if(!c.length||!g||!w){u&&(u.style.display="");return}u&&(u.style.display="none");const h=[];let q=new Date(g),s=new Date(w);for(;q<=s&&h.length<200;)h.push(new Date(q)),q.setDate(q.getDate()+m);const y=_e(),L=()=>{c.forEach(C=>{h.forEach(B=>{const j=B.toISOString().slice(0,10);v.push({iso:j,mm:M,real:j<=E,plotId:C,fromStrategy:!0,seasonId:y})})}),V(),ce("Saison enregistrée",[`Début : ${G(g)} · Fin : ${G(w)}`,`${h.length} irrigations · ${M} mm · tous les ${m} j`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},T=v.filter(C=>c.includes(C.plotId)&&C.iso>=g&&C.iso<=w);if(T.length){Oe(T.length,`${c.length} parcelle(s)`,()=>{v.splice(0,v.length,...v.filter(C=>!(c.includes(C.plotId)&&C.iso>=g&&C.iso<=w))),L()});return}L()})}function At(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const r=t.target.closest("[data-tip]");if(!r){e.style.opacity="0";return}e.textContent=r.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var r;(r=t.relatedTarget)!=null&&r.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search),t=e.get("plot"),r=e.get("action");if((r==="saisie"||r==="saison")&&(_=r),dt(),At(),oe(),N(),window.addEventListener("irrig-updated",()=>{N();const i=document.getElementById("irr-detail"),o=i==null?void 0:i.dataset.plotId;if(!o)return;const l=O.find(a=>String(a.id)===o);l&&X(l)}),t){const i=O.find(o=>o.id===+t);i&&(rt(i),(r==="saisie"||r==="saison")&&setTimeout(()=>{const o=r==="saisie"?"irr-s-scope":"irr-sa-scope",l=document.querySelector(`#${o} input[value="${t}"]`);l&&(l.checked=!0,l.dispatchEvent(new Event("change")))},50))}});
