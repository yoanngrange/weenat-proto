import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as v,R as ve,g as Ke,s as _}from"./irrigations-C22Dtsoo.js";import{I as Xe}from"./constants-CJpDUNiw.js";import{p as Ee}from"./plots-DhtWL7s_.js";import{o as Ze}from"./orgs-DnFmvGlp.js";import{u as bt}from"./breadcrumb-CzFWtd6d.js";import{d as we,e as Je,c as et,f as tt}from"./store-c0FlIf2T.js";import"./irrigation-web-DoUwVeyV.js";const rt=1,qe=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let ae=null,V=qe?Ee:Ee.filter(e=>e.orgId===rt);const E=new Date().toISOString().split("T")[0];let U=null,Te=!1,ie=0,oe=!1,Le=!1,se=!1,He=!1;const ke={},it={};let Ce=!0,Be=!0,$e=!0,Pe=!0,Re=!0,xe=!0,me=!0,Z=null;function X(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}function G(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,r,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(r)-1]} ${e.split("-")[0]}`}function ce(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,r,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(r)-1]}`}function yt(e){const[,t,r]=e.split("-");return`${r}/${t}`}const ht=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function Qe(e){const[t,r,s]=e.split("-").map(Number);return new Date(Date.UTC(t,r-1,s)).getUTCDay()}function Oe(e){const[t,r,s]=e.split("-").map(Number),n=new Date(Date.UTC(t,r-1,s)),l=n.getUTCDay()||7;n.setUTCDate(n.getUTCDate()+4-l);const o=new Date(Date.UTC(n.getUTCFullYear(),0,1));return Math.ceil(((n-o)/864e5+1)/7)}function $t(e){return[e.name+(e.area?` (${e.area} ha)`:""),e.crop,e.irrigation].filter(Boolean).join(" — ")}const Ve=new Set(["Non irrigué","Non renseigné",""]);function st(e){return!!e.irrigation&&!Ve.has(e.irrigation)}function le(e,t){return Math.round(e*(t??0)*10)}function Q(e){return e.toLocaleString("fr-FR")+" m³"}function lt(e){const t=Math.floor(e),r=Math.round((e-t)*60);return t<=0?`${r} min`:r>0?`${t} h ${String(r).padStart(2,"0")} min`:`${t} h`}function xt(e){var r;const t=tt(e).volumeMax;return t!==void 0?t:((r=Ze.find(s=>s.id===e))==null?void 0:r.volumeMax)??null}function St(e){const t=tt(e).prixM3;return t!==void 0?t:null}function je(e){return e.toLocaleString("fr-FR",{maximumFractionDigits:0})+" €"}function nt(e){return et(e).volumeMaxM3??null}function fe(e){return et(e).debitM3h??null}function wt(e){const t=fe(e),r=V.find(s=>s.id===e);document.querySelectorAll(`tr[data-row-plot="${e}"] .irr-gl-irrig`).forEach(s=>{var o;(o=s.querySelector(".irr-gl-dur-i"))==null||o.remove();const n=+s.dataset.mm;if(!t||!n||!me)return;const l=document.createElement("span");l.className="irr-gl-dur-i",l.dataset.tip=`Durée estimée : ${lt(le(n,r==null?void 0:r.area)/t)}`,l.textContent="i",s.appendChild(l)})}function Et(){const e=document.querySelector(".irr-gl-legend");if(!e)return;const t=V.some(s=>fe(s.id)),r=e.querySelector('.irr-gl-filter[data-filter="duration"]');if(t&&!r){const s=document.createElement("label");s.className="irr-gl-filter-item",s.innerHTML='<input type="checkbox" class="irr-gl-filter" data-filter="duration" checked><span class="irr-gl-dur-i">i</span>&nbsp;Durées',e.appendChild(s),s.querySelector(".irr-gl-filter").addEventListener("change",n=>{me=n.target.checked,O()})}else!t&&r&&r.closest(".irr-gl-filter-item").remove()}function Ie(){return[...V].sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function at(e){return e.id%3===2}function ot(e){return 25+e.id*7%20}function qt(e){return e.id%9===2}function Lt(e,t){const[,r,s]=t.split("-").map(Number);return Math.min(65,Math.max(5,30+(e.id*7+r*3+s*2)%30))}function dt(e){const t=(e.irrigation||"").toLowerCase();return["rampe","pivot","enrouleur"].some(r=>t.includes(r))}function kt(e){if(!dt(e))return[];const t=[];let r=e.id*17,s=new Date(X(E,-45));const n=new Date(X(E,-1));for(;s<=n;){const l=s.toISOString().split("T")[0],o=r%7-3;r=(r*31+17)%1e3,t.push({iso:l,mm:Math.max(8,15+o),real:!0,plotId:e.id,fromDetector:!0}),s.setDate(s.getDate()+5+r%3),r=(r*31+17)%1e3}return t}function ze(e,t={}){const{allBtn:r=!1}=t,s=Ie().map(n=>`
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${n.id}" />
      <span class="irr-msel-name">${$t(n)}</span>
    </label>`).join("");return`<div class="irr-msel" id="${e}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${s}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${r?'<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>':""}
    </div>
  </div>`}function Ne(e,t){const r=e.querySelector(`#${t}`);if(!r)return;const s=r.querySelector(".irr-msel-search"),n=r.querySelector(".irr-msel-count"),l=r.querySelector(".irr-msel-all-btn"),o=()=>{const a=r.querySelectorAll(".irr-msel-cb:checked").length;n.textContent=`${a} sélectionnée${a!==1?"s":""}`};s.addEventListener("input",()=>{const a=s.value.toLowerCase();r.querySelectorAll(".irr-msel-item").forEach(x=>{x.style.display=x.querySelector(".irr-msel-name").textContent.toLowerCase().includes(a)?"":"none"})}),r.querySelectorAll(".irr-msel-cb").forEach(a=>a.addEventListener("change",o)),l==null||l.addEventListener("click",()=>{const a=[...r.querySelectorAll(".irr-msel-cb")].filter(S=>S.closest(".irr-msel-item").style.display!=="none"),x=a.some(S=>!S.checked);a.forEach(S=>{S.checked=x}),o()})}function Se(e,t){const r=e.querySelector(`#${t}`);return r?[...r.querySelectorAll(".irr-msel-cb:checked")].map(s=>+s.value):[]}function de(e,t){var n;(n=document.querySelector(".irr-save-confirm"))==null||n.remove();const r=document.createElement("div");r.className="irr-save-confirm",r.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(l=>`<div>${l}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(r);const s=()=>{r.remove(),O(!0)};r.addEventListener("click",l=>{l.target===r&&s()}),r.querySelector("#irr-confirm-close").addEventListener("click",s)}function Ge(e,t,r){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
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
    </div>`,document.body.appendChild(s);const n=()=>s.remove();s.addEventListener("click",o=>{o.target===s&&n()}),s.querySelector("#irr-cf-close").addEventListener("click",n),s.querySelector("#irr-cf-cancel").addEventListener("click",n),s.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{s.remove(),r()})}function It(e,t,r){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
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
    </div>`,document.body.appendChild(s),s.addEventListener("click",l=>{l.target===s&&s.remove()}),s.querySelector("#irr-dc-close").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-ok").addEventListener("click",()=>{s.remove(),r()})}function Mt(e){if(e.length<2)return"";const t=[...e].sort((m,h)=>m.iso<h.iso?-1:1),r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=new Date(t[0].iso),n=new Date(t[t.length-1].iso),l=Math.max(n-s,1),o=500,a=24,x=5,S=5,A=a-S-4,y=A-S-3,b=a+x+13,z=b+2,R=S+2,j=m=>Math.round(R+(m-s)/l*(o-2*R)),T=m=>{const[,h,q]=m.split("-");return`${parseInt(q)}/${parseInt(h)}`},f=[],k=new Date(s.getFullYear(),s.getMonth()+1,1);for(;k<=n;)f.push(new Date(k)),k.setMonth(k.getMonth()+1);const c=f.map(m=>`<line x1="${j(m)}" y1="${a-6}" x2="${j(m)}" y2="${a+x+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),g=[s,...f,n],L=g.slice(0,-1).map((m,h)=>{const q=j(m),I=j(g[h+1]);return I-q<16?"":`<text x="${Math.round((q+I)/2)}" y="${y}" font-size="9" fill="#B0AEA8" text-anchor="middle">${r[m.getMonth()]}</text>`}).join(""),p=t.map(m=>{const h=m.real?"#FF8500":"#FFB705",q=j(new Date(m.iso)),I=`${ce(m.iso)} · ${m.mm} mm`;return`<circle cx="${q}" cy="${A}" r="${S}" fill="${h}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${q}" cy="${A}" r="${S+6}" fill="transparent" pointer-events="all" data-tip="${I}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${o}" height="${z}" viewBox="0 0 ${o} ${z}" style="width:100%;display:block">
      ${L}<rect x="0" y="${a}" width="${o}" height="${x}" rx="${x/2}" fill="#E0DED8"/>${c}${p}
      <text x="1" y="${b}" font-size="9" fill="#B0AEA8">${T(t[0].iso)}</text>
      <text x="${o-1}" y="${b}" font-size="9" fill="#B0AEA8" text-anchor="end">${T(t[t.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function Dt(e){const t=e.filter(l=>l.real),r=e.filter(l=>!l.real),s=t.reduce((l,o)=>l+o.mm,0),n=r.reduce((l,o)=>l+o.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${s} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${n} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${s+n} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function Me(){var j,T;const e=document.getElementById("irr-vol-banner-wrap");if(!e)return;const t=qe?ae:rt;if(!t){e.innerHTML="";return}const r=new Set(V.filter(f=>f.orgId===t).map(f=>f.id));qe||V.forEach(f=>r.add(f.id));const s=new Map(V.map(f=>[f.id,f])),n=v.filter(f=>r.has(f.plotId)&&f.real).reduce((f,k)=>{var c;return f+le(k.mm,((c=s.get(k.plotId))==null?void 0:c.area)??0)},0),l=v.filter(f=>r.has(f.plotId)&&!f.real).reduce((f,k)=>{var c;return f+le(k.mm,((c=s.get(k.plotId))==null?void 0:c.area)??0)},0),o=n+l,a=xt(t),x=a?Math.min(100,Math.round(n/a*100)):0,S=a?Math.min(100-x,Math.round(l/a*100)):0,A=x+S,y=St(t),b=y?n*y:0,z=y?l*y:0,R=f=>f!=null?f.toLocaleString("fr-FR"):"";e.innerHTML=`
    <div class="irr-vol-banner">
      <div class="irr-vol-main">
        <div class="irr-vol-title">Volume irrigation</div>
        <div class="irr-vol-total">${Q(o)}${a?` <span style="font-size:11px;font-weight:400;color:var(--txt3)">/ ${Q(a)}</span>`:""}</div>
        <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${Q(n)}</span> effectués · <span style="color:#FFB705">▪ ${Q(l)}</span> planifiés</div>
        <div class="irr-vol-ctrl-row" style="margin-top:6px">
          <span class="irr-vol-ctrl-lbl">Volume limité :</span>
          <input class="irr-vol-input" id="irr-vol-max-inp" type="text" inputmode="numeric" placeholder="—" value="${R(a)}" />
          <span class="irr-vol-ctrl-lbl">m³</span>
        </div>
      </div>
      <div class="irr-vol-bar-wrap">
        <div class="irr-vol-bar-label">Consommation d'eau sur mon exploitation</div>
        ${a?"":'<div class="irr-vol-bar-nomax">Définissez un volume limité →</div>'}
        <div class="irr-vol-bar-bg">
          <div class="irr-vol-bar-real" style="width:${x}%"></div>
          <div class="irr-vol-bar-plan" style="width:${S}%"></div>
        </div>
        ${a?(()=>{const f=o-a;return f>0?`<div class="irr-vol-bar-pct" style="color:#E05252">Dépassement ${Q(f)}</div>`:`<div class="irr-vol-bar-pct">${A}% consommé${A>=90?" ⚠":""}</div>`})():""}
      </div>
      <div class="irr-vol-controls">
        <div class="irr-vol-title">Budget saison</div>
        ${y?`<div class="irr-vol-total">${je(b+z)}</div>
             <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${je(b)}</span> effectués · <span style="color:#FFB705">▪ ${je(z)}</span> planifiés</div>`:'<div class="irr-vol-bar-nomax">Définissez un prix du m³ →</div>'}
        <div class="irr-vol-ctrl-row" style="margin-top:6px">
          <span class="irr-vol-ctrl-lbl">Prix du m³ :</span>
          <input class="irr-vol-input" id="irr-prix-m3-inp" type="text" inputmode="numeric" placeholder="—" value="${R(y)}" />
          <span class="irr-vol-ctrl-lbl">€</span>
        </div>
      </div>
    </div>`,(j=e.querySelector("#irr-vol-max-inp"))==null||j.addEventListener("change",f=>{const k=f.target.value.replace(/\s/g,"").replace(/\./g,"").replace(/,/g,""),c=k!==""?parseInt(k):null;c!==null&&(f.target.value=c.toLocaleString("fr-FR")),Je(t,{volumeMax:c}),Me()}),(T=e.querySelector("#irr-prix-m3-inp"))==null||T.addEventListener("change",f=>{const k=f.target.value.replace(/\s/g,"").replace(",","."),c=k!==""?parseFloat(k):null;c!==null&&(f.target.value=c.toLocaleString("fr-FR",{maximumFractionDigits:2})),Je(t,{prixM3:c}),Me()})}function O(e=!1){var h,q,I;Me();const t=document.getElementById("irr-right"),r=X(E,60),s=[...v.map(i=>i.iso),...ve.filter(i=>i.iso<=r).map(i=>i.iso),...se?[X(E,-45)]:[],X(E,-1),r];if(!v.length&&!ve.length){t.innerHTML=`<div class="irr-pr-empty" style="padding-top:60px"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const n=[...s].sort()[0],l=v.length?[...v].map(i=>i.iso).sort().at(-1):null,o=l&&l>r?l:r,a=new Date(o);a.setMonth(a.getMonth()+ie);const x=a.toISOString().split("T")[0],S=e?null:((h=t.querySelector("#irr-gl-body"))==null?void 0:h.scrollLeft)??null,A=[];let y=new Date(n);const b=new Date(x);for(;y<=b;)A.push(y.toISOString().split("T")[0]),y.setDate(y.getDate()+1);const z={};for(const i of ve)z[i.iso]=i.mm;function R(i){if(i<=E||i>X(E,13))return 0;const[,$,w]=i.split("-").map(Number),D=($*17+w*13)%100;return D<65?0:3+D%9}function j(i,$,w){const D=`${i}_${$}`;if(ke[D]!==void 0)return ke[D];if(!w)return 0;const[,F,C]=$.split("-").map(Number);if((i*13+F*7+C*3)%100<12)return 0;const M=.75+(i*11+C*5)%50/100;return Math.round(w*M)}const T=X(E,7);let f="",k="",c=0,g=null;for(const i of A){const $=i===E,w=Qe(i),D=w===0,F=D?" irr-gl-th--week-end":"";g===null&&(g=Oe(i)),c++;const C=oe&&i>E&&i<=T;f+=`<th class="irr-gl-th${$?" irr-gl-th--today":""}${F}${C?" irr-gl-th--advisor-range":""}"><span class="irr-gl-day-name">${ht[w]}</span>${yt(i)}</th>`;const N=i===A[A.length-1];(D||N)&&(k+=`<th class="irr-gl-week-hd${D?" irr-gl-th--week-end":""}" colspan="${c}">S${g}</th>`,c=0,g=null),oe&&i===T&&(f+='<th class="irr-gl-th irr-gl-th--advisor">Reco J+7</th>',k+='<th class="irr-gl-week-hd"></th>')}function L(i){const $=se?kt(i):[],w=oe&&at(i),D=Le&&qt(i),F=dt(i);let C="";for(const u of A){const H=u===E,K=v.filter(P=>P.iso===u&&P.plotId===i.id),W=K.length===0?$.filter(P=>P.iso===u):[],B=K.filter(P=>!P.detectorDismissed).filter(P=>P.detectorConfirmed?se&&Re:P.real?Ce:Be),J=Pe?W:[],ge=[...B,...J],be=ge.reduce((P,te)=>P+te.mm,0),ut=ge.some(P=>P.real),pt=(i.id*7+3)%3-1,Ue=X(u,pt),ue=j(i.id,u,z[Ue]??R(Ue)),vt=`${i.id}_${u}`;let Ye="";if(ue&&$e){const P=it[vt]?'<span class="irr-gl-rain-corr-badge" title="Irrigation détectée corrigée en pluie">C</span>':"";Ye=se&&F?`<span class="irr-gl-rain irr-gl-rain--edit" data-rain-plotid="${i.id}" data-rain-iso="${u}" data-rain-mm="${ue}">${ue} mm${P}</span>`:`<span class="irr-gl-rain">${ue} mm${P}</span>`}let De="";if(be){const P=ut?"#E07820":"#FFB705",te=B.map(ne=>v.indexOf(ne)).filter(ne=>ne>=0).join(","),he=J.length?'<span class="irr-gl-det-badge" title="Détecté automatiquement">D</span>':B.some(ne=>ne.detectorConfirmed)?'<span class="irr-gl-conf-badge" title="Irrigation confirmée">C</span>':"",Fe=J.reduce((ne,gt)=>ne+gt.mm,0),re=fe(i.id),Ae=re&&me?`<span class="irr-gl-dur-i" data-tip="Durée estimée : ${lt(le(be,i.area)/re)}">i</span>`:"";De=`<span class="irr-gl-val irr-gl-irrig" style="color:${P};cursor:pointer" data-mm="${be}"${te?` draggable="true" data-plot-id="${i.id}"`:""}${te?` data-idxs="${te}" data-iso="${u}"`:` data-det-plotid="${i.id}" data-det-plotname="${i.name}" data-det-iso="${u}" data-det-mm="${Fe}" data-det-rain="${ue}"`}>${be} mm${he}${Ae}</span>`}else De=`<button class="irr-gl-add" data-plot-id="${i.id}" data-plot-name="${i.name}" data-iso="${u}">+</button>`;let We="";D&&xe&&u<E&&(We=`<span class="irr-gl-res">${Lt(i,u)} mm</span>`);let ye="";$e&&(ye+=`<div class="irr-gl-slot">${Ye}</div>`),ye+=`<div class="irr-gl-slot">${De}</div>`,D&&xe&&(ye+=`<div class="irr-gl-slot">${We}</div>`);const mt=Qe(u)===0,ft=w&&u>E&&u<=T;if(C+=`<td class="irr-gl-td${H?" irr-gl-td--today":""}${mt?" irr-gl-td--week-end":""}${ft?" irr-gl-td--advisor-range":""}" data-iso="${u}" data-plot-id="${i.id}">${ye}</td>`,oe&&u===T){let P="";if(w){const te=ot(i),he=v.filter(re=>re.plotId===i.id&&re.iso>E&&re.iso<=T).reduce((re,Ae)=>re+Ae.mm,0),Fe=he>=te?"#24B066":"#E05252";P=`<span class="irr-gl-advisor">${te} mm</span><span style="display:block;font-size:10px;font-weight:600;color:${Fe}">${he} mm planifié</span>`}C+=`<td class="irr-gl-td irr-gl-td--advisor">${P}</td>`}}const N=[i.crop,i.irrigation].filter(Boolean).join(" · "),M=i.area?`<span class="irr-gl-plot-area">(${i.area} ha)</span>`:"";let Y="";const d=nt(i.id);if(d){const u=i.area??0,H=v.filter(B=>B.plotId===i.id&&B.real).reduce((B,J)=>B+le(J.mm,u),0),K=v.filter(B=>B.plotId===i.id&&!B.real).reduce((B,J)=>B+le(J.mm,u),0),W=H+K;if(W>0)if(W>d)Y=`<span class="irr-gl-plot-deficit">Dépassement ${Q(W-d)}</span>`;else{const B=Math.round(H/d*100),J=Math.min(100-B,Math.round(K/d*100));Y=`<span class="irr-gl-plot-mini-bar"><span class="irr-gl-plot-mini-r" style="width:${B}%"></span><span class="irr-gl-plot-mini-p" style="width:${J}%"></span></span>`}}return`<tr data-row-plot="${i.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${i.id}">${i.name}</span>${M}${N?`<span class="irr-gl-plot-sub">${N}</span>`:""}${Y}</td>${C}</tr>`}const p=Ie().map(L).join(""),m=V.some(i=>fe(i.id));t.innerHTML=`
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-gl-legend">
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="real-irrig" ${Ce?"checked":""}><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. effectuée</label>
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="plan-irrig" ${Be?"checked":""}><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</label>
          ${se?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="detected" ${Pe?"checked":""}><span class="irr-gl-det-badge">D</span>&nbsp;Irrig. détectée</label><label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="confirmed" ${Re?"checked":""}><span class="irr-gl-conf-badge">C</span>&nbsp;Irrig. corrigée</label>`:""}
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="rain" ${$e?"checked":""}><span class="irr-gl-dot" style="background:#3A7FC1"></span>Pluie</label>
          ${se?'<span class="irr-gl-filter-item"><span class="irr-gl-rain-corr-badge" style="margin-left:0">C</span>&nbsp;Pluie corrigée (ex-irrig. détectée)</span>':""}
          ${Le?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="reservoir" ${xe?"checked":""}><span class="irr-gl-dot" style="background:#9E9E9E"></span>Réservoir</label>`:""}
          ${m?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="duration" ${me?"checked":""}><span class="irr-gl-dur-i">i</span>&nbsp;Durées</label>`:""}
        </div>
        <div class="irr-gl-scroll-top" id="irr-gl-scroll-top">
          <div class="irr-gl-scroll-inner" id="irr-gl-scroll-inner"></div>
        </div>
      </div>
      <div class="irr-gl-body" id="irr-gl-body">
        <table class="irr-gl-table" id="irr-gl-table">
          <thead id="irr-gl-thead">
            <tr><th class="irr-gl-plot-hd irr-gl-week-corner"></th>${k}</tr>
            <tr><th class="irr-gl-plot-hd">Parcelles</th>${f}</tr>
          </thead>
          <tbody>${p}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${ie===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${ie>0?`+${ie} mois au-delà de la saison`:`Fin de saison : ${ce(o)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var F;const i=t.querySelector("#irr-gl-body"),$=t.querySelector("#irr-gl-table"),w=t.querySelector("#irr-gl-scroll-top"),D=t.querySelector("#irr-gl-scroll-inner");if(!(!i||!$||!w||!D))if(D.style.width=$.offsetWidth+"px",w.addEventListener("scroll",()=>{i.scrollLeft=w.scrollLeft}),i.addEventListener("scroll",()=>{w.scrollLeft=i.scrollLeft}),S!==null)i.scrollLeft=S,w.scrollLeft=S;else{const C=t.querySelector(".irr-gl-th--today");if(C){const M=C.previousElementSibling??C,Y=((F=t.querySelector(".irr-gl-plot-hd"))==null?void 0:F.offsetWidth)??120,d=M.offsetLeft-Y;i.scrollLeft=d,w.scrollLeft=d}}}),(q=t.querySelector("#irr-gl-prev-month"))==null||q.addEventListener("click",()=>{ie>0&&(ie--,O())}),(I=t.querySelector("#irr-gl-next-month"))==null||I.addEventListener("click",()=>{ie++,O()}),t.querySelectorAll(".irr-gl-filter").forEach(i=>{i.addEventListener("change",()=>{const $=i.dataset.filter;$==="real-irrig"?Ce=i.checked:$==="plan-irrig"?Be=i.checked:$==="rain"?$e=i.checked:$==="detected"?Pe=i.checked:$==="confirmed"?Re=i.checked:$==="reservoir"?xe=i.checked:$==="duration"&&(me=i.checked),O()})}),t.querySelectorAll(".irr-gl-irrig").forEach(i=>{i.addEventListener("click",()=>{i.dataset.idxs?Ft(i.dataset.idxs.split(",").map(Number),i.dataset.iso):i.dataset.detPlotid&&Tt(+i.dataset.detPlotid,i.dataset.detPlotname,i.dataset.detIso,+i.dataset.detMm,+i.dataset.detRain)})}),t.querySelectorAll(".irr-gl-rain--edit").forEach(i=>{i.addEventListener("click",()=>{At(+i.dataset.rainPlotid,i.dataset.rainIso,+i.dataset.rainMm)})}),t.querySelectorAll(".irr-gl-add").forEach(i=>{i.addEventListener("click",()=>{zt(i.dataset.plotId,i.dataset.plotName,i.dataset.iso)})}),t.querySelectorAll('.irr-gl-irrig[draggable="true"]').forEach(i=>{i.addEventListener("dragstart",$=>{var w;Z={idxs:i.dataset.idxs.split(",").map(Number),iso:i.dataset.iso,plotId:+i.dataset.plotId},(w=i.closest(".irr-gl-td"))==null||w.classList.add("irr-gl-td--dragging"),$.dataTransfer.effectAllowed="move"}),i.addEventListener("dragend",()=>{var $;($=i.closest(".irr-gl-td"))==null||$.classList.remove("irr-gl-td--dragging"),t.querySelectorAll(".irr-gl-td--dragover").forEach(w=>w.classList.remove("irr-gl-td--dragover")),Z=null})}),t.querySelectorAll(".irr-gl-td[data-iso]").forEach(i=>{i.addEventListener("dragover",$=>{Z&&(+i.dataset.plotId!==Z.plotId||i.dataset.iso===Z.iso||($.preventDefault(),i.classList.add("irr-gl-td--dragover")))}),i.addEventListener("dragleave",()=>i.classList.remove("irr-gl-td--dragover")),i.addEventListener("drop",$=>{if(!Z||+i.dataset.plotId!==Z.plotId||i.dataset.iso===Z.iso)return;$.preventDefault();const{idxs:w,iso:D}=Z;w.forEach(F=>{v[F]&&(v[F].iso=i.dataset.iso)}),_(),de("Irrigation déplacée",[`${ce(D)} → ${ce(i.dataset.iso)}`]),O()})}),t.querySelectorAll(".irr-gl-plot-link").forEach(i=>{i.addEventListener("click",()=>{const $=V.find(w=>String(w.id)===i.dataset.plotId);$&&ct($)})})}function Ft(e,t){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const r=document.createElement("div");r.className="irr-edit-overlay";const s=e.map(l=>v[l]).filter(Boolean);r.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${G(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${s.map((l,o)=>{const a=V.find(S=>S.id===l.plotId);return`<div class="irr-edit-row">
            <span class="irr-edit-label">${a?a.name:`Parcelle ${l.plotId}`}</span>
            <input type="number" class="irr-edit-qty" data-i="${o}" value="${l.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${o}">🗑</button>
          </div>`}).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#irr-edit-close").addEventListener("click",()=>r.remove()),r.querySelector("#irr-edit-cancel").addEventListener("click",()=>r.remove()),r.querySelectorAll(".irr-edit-del").forEach(l=>{l.addEventListener("click",()=>{const o=s[+l.dataset.i],a=v.indexOf(o);a>=0&&(v.splice(a,1),_()),r.remove()})}),r.querySelector("#irr-edit-save").addEventListener("click",()=>{r.querySelectorAll(".irr-edit-qty").forEach(l=>{const o=s[+l.dataset.i],a=parseInt(l.value);o&&a>0&&(o.mm=a,o.real=t<=E)}),_(),r.remove()})}function At(e,t,r){var o;(o=document.querySelector(".irr-edit-overlay"))==null||o.remove();const s=V.find(a=>a.id===e),n=s?s.name:`Parcelle ${e}`,l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
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
    </div>`,document.body.appendChild(l),l.addEventListener("click",a=>{a.target===l&&l.remove()}),l.querySelector("#irr-rain-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-save").addEventListener("click",()=>{const a=parseInt(l.querySelector("#irr-rain-qty").value);!isNaN(a)&&a>=0&&(ke[`${e}_${t}`]=a),l.remove(),O()})}function Tt(e,t,r,s,n=0){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();let l=s;const o=document.createElement("div");o.className="irr-edit-overlay",o.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigation détectée — ${G(r)}</span>
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
    </div>`,document.body.appendChild(o),o.querySelector("#irr-det-ed-qty").addEventListener("input",x=>{const S=parseInt(x.target.value);S>0&&(l=S)}),o.addEventListener("click",x=>{x.target===o&&o.remove()}),o.querySelector("#irr-det-ed-close").addEventListener("click",()=>o.remove()),o.querySelector("#irr-det-ed-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#irr-det-ed-del").addEventListener("click",()=>{v.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),_(),o.remove(),O()}),o.querySelector("#irr-det-ed-rain").addEventListener("click",()=>{v.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),ke[`${e}_${r}`]=n+l,it[`${e}_${r}`]=!0,_(),o.remove(),O()}),o.querySelector("#irr-det-ed-save").addEventListener("click",()=>{v.push({iso:r,mm:l,real:r<=E,plotId:e,detectorConfirmed:!0}),_(),o.remove(),O()})}function Ct(e,t){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();let r=e.iso,s=e.mm;const n=document.createElement("div");n.className="irr-edit-overlay",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),n.addEventListener("click",o=>{o.target===n&&n.remove()}),n.querySelector("#irr-di-close").addEventListener("click",()=>n.remove()),n.querySelector("#irr-di-cancel").addEventListener("click",()=>n.remove()),n.querySelector("#irr-di-date").addEventListener("change",o=>{r=o.target.value}),n.querySelector("#irr-di-qty").addEventListener("input",o=>{const a=parseInt(o.target.value);a>0&&(s=a)}),n.querySelector("#irr-di-del").addEventListener("click",()=>{const o=v.indexOf(e);o>=0&&v.splice(o,1),_(),n.remove(),t()}),n.querySelector("#irr-di-save").addEventListener("click",()=>{e.iso=r,e.mm=s,e.real=r<=E,_(),n.remove(),t()})}function Bt(e,t){var k,c,g,L;const r=v.filter(p=>p.plotId===e&&p.fromStrategy&&p.seasonId),s=[...r].sort((p,m)=>p.iso<m.iso?-1:1),n=new Set(r.map(p=>p.seasonId));let l=((k=s[0])==null?void 0:k.iso)||E,o=((c=s[s.length-1])==null?void 0:c.iso)||X(E,90),a=((g=s[0])==null?void 0:g.mm)||10,x=s.length>=2?Math.max(1,Math.round((new Date(s[s.length-1].iso)-new Date(s[0].iso))/864e5/(s.length-1))):7;const S=l,A=o;let y="form";(L=document.querySelector(".irr-edit-overlay"))==null||L.remove();const b=document.createElement("div");b.className="irr-edit-overlay";function z(){if(!l||!o||x<=0)return[];const p=[],m=new Date(o);let h=new Date(l);for(;h<=m&&p.length<200;)p.push(h.toISOString().split("T")[0]),h.setDate(h.getDate()+x);return p}function R(){const p=z(),m=p.filter(h=>h>E).length;b.querySelector("#irr-ms-preview").textContent=p.length>0?`↗ ${p.length} irrigations · ${p.length*a} mm · dont ${m} à venir`:"Ajustez les dates et la fréquence"}function j(){return`
      <div class="irr-edit-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Début</label>
            <input type="date" id="irr-ms-debut" value="${l}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fin</label>
            <input type="date" id="irr-ms-fin" value="${o}" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Quantité (mm/irrig.)</label>
            <input type="number" id="irr-ms-qty" value="${a}" min="1" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
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
      </div>`}function T(){const p=l!==S||o!==A,m=z();return`
      <div class="irr-edit-body">
        <div style="font-size:13px;color:var(--txt2);line-height:1.5;background:#FEF6E6;border:1px solid #F5D98B;border-radius:8px;padding:10px 12px">
          ${p?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées."}
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--txt3)">
          ${G(l)} → ${G(o)} · ${a} mm tous les ${x} jours · ${m.length} irrigations
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-ms-back">Retour</button>
        <button class="iw-btn iw-btn--pri" id="irr-ms-confirm">Confirmer la modification</button>
      </div>`}function f(){b.innerHTML=`
      <div class="irr-edit-modal" style="max-width:460px">
        <div class="irr-edit-hd">
          <span>Modifier la saison</span>
          <button class="irr-edit-close" id="irr-ms-close">×</button>
        </div>
        ${y==="form"?j():T()}
      </div>`,b.querySelector("#irr-ms-close").addEventListener("click",()=>b.remove()),y==="form"?(R(),b.querySelector("#irr-ms-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#irr-ms-debut").addEventListener("change",p=>{l=p.target.value,R()}),b.querySelector("#irr-ms-fin").addEventListener("change",p=>{o=p.target.value,R()}),b.querySelector("#irr-ms-qty").addEventListener("input",p=>{const m=parseInt(p.target.value);m>0&&(a=m,R())}),b.querySelector("#irr-ms-freq").addEventListener("input",p=>{const m=parseInt(p.target.value);m>0&&(x=m,R())}),b.querySelector("#irr-ms-save").addEventListener("click",()=>{y="confirm",f()})):(b.querySelector("#irr-ms-back").addEventListener("click",()=>{y="form",f()}),b.querySelector("#irr-ms-confirm").addEventListener("click",()=>{const p=l!==S||o!==A,m=z(),h=p?m:m.filter(i=>i>E),q=v.filter(i=>!(i.plotId===e&&n.has(i.seasonId)&&(p||i.iso>E)));v.splice(0,v.length,...q);const I=Ke();for(const i of h)v.push({iso:i,mm:a,real:i<=E,plotId:e,fromStrategy:!0,seasonId:I});_(),b.remove(),de("Saison modifiée",[`Début : ${G(l)} · Fin : ${G(o)}`,`${m.length} irrigations · ${a} mm · tous les ${x} j`,p?"Modifications appliquées à toute la saison.":"Modifications appliquées à partir de demain."]),t==null||t()}))}document.body.appendChild(b),f(),b.addEventListener("click",p=>{p.target===b&&b.remove()})}function _e(e){var r;const t=document.getElementById("irr-right");t&&(t.querySelectorAll("[data-row-plot]").forEach(s=>s.classList.remove("irr-gl-row--active")),e&&((r=t.querySelector(`[data-row-plot="${e}"]`))==null||r.classList.add("irr-gl-row--active")))}function ct(e){const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!(!t||!r)){if(r.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=String(e.id),r.style.display="",t.classList.add("irr-has-detail"),_e(String(e.id)),ee(e)}}const Pt=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],Rt=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];function jt(e){const t=Oe(E),r=E.slice(0,4),s=E.slice(0,7),n=e.filter(a=>a.iso.slice(0,4)===r&&Oe(a.iso)===t).reduce((a,x)=>a+x.mm,0),l=e.filter(a=>a.iso.slice(0,7)===s).reduce((a,x)=>a+x.mm,0),o=Rt[parseInt(E.slice(5,7),10)-1];return`<div class="irr-pr-planned-totals">
    <div class="irr-pr-planned-hd">Total planifiées :</div>
    <div class="irr-pr-planned-row">· Semaine S${t} : <strong>${n} mm</strong></div>
    <div class="irr-pr-planned-row">· Mois ${o} : <strong>${l} mm</strong></div>
  </div>`}function ee(e){var h,q,I,i,$,w,D,F,C,N,M,Y;const t=document.getElementById("irr-detail");if(!t)return;const r=((h=t.querySelector(".irr-pr-details"))==null?void 0:h.open)??!1;if(!st(e)){t.style.display="",t.dataset.plotId=String(e.id),t.innerHTML=`
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
            ${Xe.map(d=>`<option value="${d}"${d===(e.irrigation||"Non renseigné")?" selected":""}>${d}</option>`).join("")}
          </select>
          <button id="irr-det-type-save" class="btn-primary" style="margin-top:10px;width:100%;justify-content:center">Enregistrer</button>
        </div>
      </div>`,(q=t.querySelector("#irr-det-close"))==null||q.addEventListener("click",()=>{var d;(d=document.getElementById("irr-page"))==null||d.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",_e(null)}),(I=t.querySelector("#irr-det-type-save"))==null||I.addEventListener("click",()=>{const d=t.querySelector("#irr-det-type-sel").value;we(e.id,{irrigation:d}),e.irrigation=d,ee(e),O(!0)});return}const s=v.filter(d=>d.plotId===e.id),n=s.some(d=>d.fromStrategy&&d.seasonId),l=s.filter(d=>d.fromStrategy).sort((d,u)=>d.iso<u.iso?-1:1),o=(i=l[0])==null?void 0:i.iso,a=($=l[l.length-1])==null?void 0:$.iso,x=new Set(s.filter(d=>d.fromStrategy&&d.seasonId).map(d=>d.seasonId)),S=o&&a?`<div><strong>Saison :</strong> ${ce(o)} → ${ce(a)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',A=s.filter(d=>d.real).sort((d,u)=>d.iso<u.iso?-1:1),y=s.filter(d=>!d.real).sort((d,u)=>d.iso<u.iso?-1:1),b=e.area??0,z=A.reduce((d,u)=>d+le(u.mm,b),0),R=y.reduce((d,u)=>d+le(u.mm,b),0),j=z+R,T=nt(e.id),f=T&&b?Math.min(100,Math.round(z/T*100)):0,k=T&&b?Math.min(100-f,Math.round(R/T*100)):0,c=f+k,g=`
    <div class="irr-det-vol">
      <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--bdr2)">
        <div class="irr-det-vol-row">
          <span class="irr-det-vol-lbl">Volume saison :</span>
          <strong style="font-size:13px">${Q(j)}</strong>
        </div>
        ${b?`<div class="irr-det-vol-row" style="gap:8px;margin-top:3px">
          <span style="color:#FF8500;font-size:11px">▪ ${Q(z)} effectués</span>
          <span style="color:#FFB705;font-size:11px">▪ ${Q(R)} planifiés</span>
        </div>`:'<div class="irr-det-vol-lbl" style="color:var(--txt3);margin-top:3px">surface non renseignée</div>'}
      </div>
      <div class="irr-det-vol-row">
        <span class="irr-det-vol-lbl">Volume limité :</span>
        <input class="irr-det-vol-input" id="irr-det-vol-input" type="number" min="0" placeholder="—" value="${T??""}" />
        <span class="irr-det-vol-lbl">m³</span>
      </div>
      ${T&&b?`
      <div class="irr-det-vol-bar">
        <div style="width:${f}%;background:#FF8500;height:100%"></div>
        <div style="width:${k}%;background:#FFB705;height:100%"></div>
      </div>
      ${j>T?`<div class="irr-det-vol-note" style="color:#E05252">Dépassement ${Q(j-T)}</div>`:`<div class="irr-det-vol-note">${c}% · ${Q(T-j)} restants</div>`}`:""}
      <div class="irr-det-vol-row" style="margin-top:8px">
        <span class="irr-det-vol-lbl">Débit :</span>
        <input class="irr-det-vol-input" id="irr-det-debit-input" type="number" min="0" step="0.1" placeholder="—" value="${fe(e.id)??""}" />
        <span class="irr-det-vol-lbl">m³/h</span>
      </div>
      ${He?'<button class="irr-det-irrelis-sync-btn" id="irr-det-irrelis-sync"><i class="bi bi-arrow-repeat"></i> Synchroniser pluies et irrigations sur Irré-LIS</button>':""}
    </div>`,L=d=>{const u=v.indexOf(d),H=d.real?"#FF8500":"#FFB705",[,K,W]=d.iso.split("-"),B=`${parseInt(W)} ${Pt[parseInt(K)-1]}`,J=d.real?"Effectuée":"Planifiée",ge=d.detectorConfirmed?'<span class="irr-pr-det-tag">Détectée &amp; corrigée</span>':"";return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${H}"></div>
      <div class="irr-pr-date" style="color:${H};min-width:52px;font-size:13px;font-weight:600">${B}</div>
      <div class="irr-pr-info">
        <div class="irr-pr-status" style="color:${H}">${J}</div>
        ${ge}
      </div>
      <div class="irr-pr-mm" style="color:${H}">${d.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${u}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${u}" title="Supprimer">🗑</button>
    </div>`},p=n?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
      </div>
    </div>`:"",m=oe&&at(e)?`<div style="margin:16px 16px 16px;padding:12px;background:#FFF4E6;border-radius:8px;border-left:3px solid #E07820">
         <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#E07820;margin-bottom:4px">Recommandations d'irrigation sur les 7 prochains jours</div>
         <div style="font-size:22px;font-weight:700;color:#E07820">${ot(e)} mm</div>
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
        <div class="irr-det-meta">${S}</div>
        ${p}
        ${Dt(s)}
        ${jt(y)}
        ${Mt(s)}
        ${g}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${A.length?`
        <details class="irr-pr-details"${r||!y.length?" open":""}>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${A.length}</span></summary>
          <div>${A.map(L).join("")}</div>
        </details>`:""}
      ${m}
      ${y.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${y.length}</span></summary>
          <div>${y.map(L).join("")}</div>
        </details>`:""}
      ${s.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(w=t.querySelector("#irr-det-strat-toggle"))==null||w.addEventListener("click",()=>{const d=t.querySelector("#irr-det-strat-opts");d.style.display=d.style.display==="none"?"":"none"}),(D=t.querySelector("#irr-det-modify"))==null||D.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none",Bt(e.id,()=>{ee(e),O(!0)})}),(F=t.querySelector("#irr-det-stop"))==null||F.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const d=v.filter(u=>u.plotId===e.id&&x.has(u.seasonId)&&!u.real&&u.iso>E);v.splice(0,v.length,...v.filter(u=>!d.includes(u))),_(),de("Saison arrêtée",[`${d.length} irrigation${d.length!==1?"s":""} future${d.length!==1?"s":""} supprimée${d.length!==1?"s":""}`,`Parcelle : ${e.name}`])}),(C=t.querySelector("#irr-det-del-all"))==null||C.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const d=v.filter(H=>H.plotId===e.id);if(!d.length)return;const u=d.some(H=>!H.fromStrategy);It(`Supprimer toutes les irrigations de "${e.name}" ?`,`${d.length} irrigation${d.length!==1?"s":""} seront supprimées (passées et futures).`+(u?"<br><br>Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.":""),()=>{v.splice(0,v.length,...v.filter(H=>!d.includes(H))),_(),de("Saison supprimée",[`${d.length} irrigation${d.length!==1?"s":""} supprimée${d.length!==1?"s":""}`,`Parcelle : ${e.name}`])})}),t.querySelectorAll(".irr-pr-edit").forEach(d=>{d.addEventListener("click",()=>{const u=v[+d.dataset.idx];u&&Ct(u,()=>{ee(e),O(!0)})})}),t.querySelectorAll(".irr-pr-del").forEach(d=>{d.addEventListener("click",()=>{const u=+d.dataset.idx;u>=0&&(v.splice(u,1),_(),ee(e))})}),(N=t.querySelector("#irr-det-vol-input"))==null||N.addEventListener("change",d=>{const u=d.target.value!==""?parseInt(d.target.value):null;we(e.id,{volumeMaxM3:u}),ee(e),Me()}),(M=t.querySelector("#irr-det-debit-input"))==null||M.addEventListener("change",d=>{const u=d.target.value!==""?parseFloat(d.target.value):null;we(e.id,{debitM3h:u}),ee(e),wt(e.id),Et()}),(Y=t.querySelector("#irr-det-irrelis-sync"))==null||Y.addEventListener("click",()=>{de("Synchronisation Irré-LIS",[`Pluies et irrigations synchronisées pour « ${e.name} »`])}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var d;(d=document.getElementById("irr-page"))==null||d.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",_e(null)})}function zt(e,t,r,s=10){var A;(A=document.querySelector(".irr-edit-overlay"))==null||A.remove();const n=V.find(y=>y.id===+e),l=n&&!st(n),o=l?`
    <div class="irr-edit-row">
      <span class="irr-edit-label">Type d'irrigation</span>
      <select id="irr-qa-type-sel" style="flex:1;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
        ${Xe.map(y=>`<option value="${y}"${y===(n.irrigation||"Non renseigné")?" selected":""}>${y}</option>`).join("")}
      </select>
    </div>`:"",a=document.createElement("div");a.className="irr-edit-overlay",a.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${G(r)}</span>
        <button class="irr-edit-close" id="irr-qa-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${l?`<p style="font-size:12px;color:var(--txt2);margin:0 0 10px">Précisez le type d'irrigation de cette parcelle pour pouvoir saisir une irrigation.</p>`:""}
        ${o}
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
    </div>`,document.body.appendChild(a),a.addEventListener("click",y=>{y.target===a&&a.remove()}),a.querySelector("#irr-qa-close").addEventListener("click",()=>a.remove()),a.querySelector("#irr-qa-cancel").addEventListener("click",()=>a.remove());const x=a.querySelector("#irr-qa-save"),S=a.querySelector("#irr-qa-type-sel");if(S){const y=()=>{x.disabled=Ve.has(S.value)};y(),S.addEventListener("change",y)}x.addEventListener("click",()=>{if(S){const b=S.value;if(Ve.has(b))return;we(n.id,{irrigation:b}),n.irrigation=b}const y=parseInt(a.querySelector("#irr-qa-qty").value)||10;v.push({iso:r,mm:y,real:r<=E,plotId:+e,fromStrategy:!1}),_(),a.remove(),O(!0)})}function pe(){var o,a,x,S,A,y,b,z,R,j,T,f,k;const e=document.getElementById("irr-left"),t=[...Ze].filter(c=>c.id!==100).sort((c,g)=>c.name.localeCompare(g.name)),r=qe?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${ae===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${ae===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${t.map(c=>`<option value="${c.id}"${c.id===ae?" selected":""}>${c.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"",s=document.getElementById("irr-page");if(Te){s==null||s.classList.add("irr-left-collapsed"),e.innerHTML=`
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Déplier le panneau">›</button>`,e.querySelector("#irr-left-toggle").addEventListener("click",()=>{Te=!1,pe()});return}s==null||s.classList.remove("irr-left-collapsed"),e.innerHTML=`
    <div class="irr-lc-collapse-bar">
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Réduire le panneau">‹</button>
    </div>
    <div class="irr-lc-scroll">
    ${r}

    <button class="irr-lc-btn${U==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${U==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${ze("irr-s-scope",{allBtn:!0})}
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

    <button class="irr-lc-btn${U==="saison"?" irr-lc-btn--active":""}" data-action="saison">
      <i class="bi bi-arrow-repeat"></i><span>Saisir une saison d'irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${U==="saison"?"":" irr-lc-form--hidden"}" id="irr-form-saison">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${ze("irr-sa-scope",{allBtn:!0})}
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

    <button class="irr-lc-btn${U==="export"?" irr-lc-btn--active":""}" data-action="export">
      <i class="bi bi-download"></i><span>Exporter les irrigations</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${U==="export"?"":" irr-lc-form--hidden"}" id="irr-form-export">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${ze("irr-ex-scope",{allBtn:!0})}
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
        <input type="checkbox" id="irr-feat-advisor" ${oe?"checked":""} />
        <span>Irrigation Advisor</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-reservoir" ${Le?"checked":""} />
        <span>Reservoir Sensorless</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-detector" ${se?"checked":""} />
        <span>Irrigation Detector</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-irrelis" ${He?"checked":""} />
        <span>Irré-LIS</span>
      </label>
    </div>
  `,(o=e.querySelector("#irr-left-toggle"))==null||o.addEventListener("click",()=>{Te=!0,pe()}),U==="saisie"&&Ne(e,"irr-s-scope"),U==="saison"&&Ne(e,"irr-sa-scope"),U==="export"&&Ne(e,"irr-ex-scope"),(a=e.querySelector("#irr-org-select"))==null||a.addEventListener("change",c=>{const g=c.target.value;ae=g===""?null:parseInt(g),V=ae===null?Ee:Ee.filter(L=>L.orgId===ae),ie=0,pe(),O()}),e.querySelectorAll(".irr-lc-btn").forEach(c=>{c.addEventListener("click",()=>{const g=c.dataset.action;U=U===g?null:g,pe()})});function n(){var i,$,w,D;const c=(i=e.querySelector("#irr-sa-debut"))==null?void 0:i.value,g=($=e.querySelector("#irr-sa-fin"))==null?void 0:$.value,L=parseInt((w=e.querySelector("#irr-sa-qty"))==null?void 0:w.value)||0,p=parseInt((D=e.querySelector("#irr-sa-freq"))==null?void 0:D.value)||0,m=e.querySelector("#irr-sa-preview");if(!m)return;if(!c||!g||p<=0){m.textContent="—";return}let h=0,q=new Date(c),I=new Date(g);for(;q<=I&&h<200;)h++,q.setDate(q.getDate()+p);if(h>0){const C=Se(e,"irr-sa-scope").reduce((Y,d)=>{const u=Ie().find(H=>H.id===d);return Y+((u==null?void 0:u.area)??0)},0),N=C>0?Math.round(h*L*C*10):0,M=N>0?` · ${N.toLocaleString("fr-FR")} m³`:"";m.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${h} irrigations · ${h*L} mm${M}</span>`}else m.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'}U==="saison"&&(n(),(x=e.querySelector("#irr-sa-debut"))==null||x.addEventListener("change",n),(S=e.querySelector("#irr-sa-fin"))==null||S.addEventListener("change",n),(A=e.querySelector("#irr-sa-qty"))==null||A.addEventListener("input",n),(y=e.querySelector("#irr-sa-freq"))==null||y.addEventListener("input",n)),(b=e.querySelector("#irr-ex-dl"))==null||b.addEventListener("click",()=>{const c=e.querySelector("#irr-ex-start").value,g=e.querySelector("#irr-ex-end").value,L=e.querySelector("#irr-ex-irrig").checked,p=e.querySelector("#irr-ex-rain").checked,m=Se(e,"irr-ex-scope"),h=m.length>0?V.filter(M=>m.includes(M.id)):Ie(),q=new Set;if(L)for(const M of v)M.iso>=c&&M.iso<=g&&q.add(M.iso);if(p)for(const M of ve)M.iso>=c&&M.iso<=g&&q.add(M.iso);const I=[...q].sort(),i={};if(p)for(const M of ve)i[M.iso]=M.mm;const $=["Date",...h.map(M=>M.name+(p?" (irrig.)":""))].join(";"),w=I.map(M=>{const Y=h.map(d=>{const u=L?v.filter(W=>W.iso===M&&W.plotId===d.id).reduce((W,B)=>W+B.mm,0):0,H=p?i[M]??0:0,K=u+H;return K>0?K:""});return[M,...Y].join(";")}),D=[$,...w].join(`
`),F=new Blob([D],{type:"text/csv;charset=utf-8;"}),C=URL.createObjectURL(F),N=Object.assign(document.createElement("a"),{href:C,download:`irrigations_${c}_${g}.csv`});document.body.appendChild(N),N.click(),setTimeout(()=>{URL.revokeObjectURL(C),N.remove()},100)}),(z=e.querySelector("#irr-s-save"))==null||z.addEventListener("click",()=>{const c=Se(e,"irr-s-scope"),g=e.querySelector("#irr-s-date").value,L=parseInt(e.querySelector("#irr-s-qty").value)||0,p=e.querySelector("#irr-s-err");if(!c.length||!g||!L){p&&(p.style.display="");return}p&&(p.style.display="none");const m=g>E,h=()=>{c.forEach(I=>{v.push({iso:g,mm:L,real:!m,plotId:I,fromStrategy:!1})}),_(),de("Irrigation enregistrée",[`Date : ${G(g)}`,`Quantité : ${L} mm`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},q=v.filter(I=>c.includes(I.plotId)&&I.iso===g);if(q.length){Ge(q.length,`${c.length} parcelle(s)`,()=>{v.splice(0,v.length,...v.filter(I=>!(c.includes(I.plotId)&&I.iso===g))),h()});return}h()});const l=()=>{O();const c=document.getElementById("irr-detail"),g=c==null?void 0:c.dataset.plotId;if(g){const L=V.find(p=>String(p.id)===g);L&&ee(L)}};(R=e.querySelector("#irr-feat-advisor"))==null||R.addEventListener("change",c=>{oe=c.target.checked,l()}),(j=e.querySelector("#irr-feat-reservoir"))==null||j.addEventListener("change",c=>{Le=c.target.checked,l()}),(T=e.querySelector("#irr-feat-detector"))==null||T.addEventListener("change",c=>{se=c.target.checked,l()}),(f=e.querySelector("#irr-feat-irrelis"))==null||f.addEventListener("change",c=>{He=c.target.checked,l()}),(k=e.querySelector("#irr-sa-save"))==null||k.addEventListener("click",()=>{const c=Se(e,"irr-sa-scope"),g=e.querySelector("#irr-sa-debut").value,L=e.querySelector("#irr-sa-fin").value,p=parseInt(e.querySelector("#irr-sa-qty").value)||10,m=parseInt(e.querySelector("#irr-sa-freq").value)||7,h=e.querySelector("#irr-sa-err");if(!c.length||!g||!L){h&&(h.style.display="");return}h&&(h.style.display="none");const q=[];let I=new Date(g),i=new Date(L);for(;I<=i&&q.length<200;)q.push(new Date(I)),I.setDate(I.getDate()+m);const $=Ke(),w=()=>{c.forEach(F=>{q.forEach(C=>{const N=C.toISOString().slice(0,10);v.push({iso:N,mm:p,real:N<=E,plotId:F,fromStrategy:!0,seasonId:$})})}),_(),de("Saison enregistrée",[`Début : ${G(g)} · Fin : ${G(L)}`,`${q.length} irrigations · ${p} mm · tous les ${m} j`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},D=v.filter(F=>c.includes(F.plotId)&&F.iso>=g&&F.iso<=L);if(D.length){Ge(D.length,`${c.length} parcelle(s)`,()=>{v.splice(0,v.length,...v.filter(F=>!(c.includes(F.plotId)&&F.iso>=g&&F.iso<=L))),w()});return}w()})}function Nt(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const r=t.target.closest("[data-tip]");if(!r){e.style.opacity="0";return}e.textContent=r.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var r;(r=t.relatedTarget)!=null&&r.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search),t=e.get("plot"),r=e.get("action");if((r==="saisie"||r==="saison")&&(U=r),bt(),Nt(),pe(),O(),window.addEventListener("irrig-updated",()=>{O();const s=document.getElementById("irr-detail"),n=s==null?void 0:s.dataset.plotId;if(!n)return;const l=V.find(o=>String(o.id)===n);l&&ee(l)}),t){const s=V.find(n=>n.id===+t);s&&(ct(s),(r==="saisie"||r==="saison")&&setTimeout(()=>{const n=r==="saisie"?"irr-s-scope":"irr-sa-scope",l=document.querySelector(`#${n} input[value="${t}"]`);l&&(l.checked=!0,l.dispatchEvent(new Event("change")))},50))}});
