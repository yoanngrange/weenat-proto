import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as p,R as ve,g as Ge,s as _}from"./irrigations-C22Dtsoo.js";import{I as Ke}from"./constants-CJpDUNiw.js";import{p as we}from"./plots-DhtWL7s_.js";import{o as Xe}from"./orgs-DnFmvGlp.js";import{u as ft}from"./breadcrumb-CzFWtd6d.js";import{d as Se,e as We,c as Ze,f as et}from"./store-CX9wca99.js";import"./irrigation-web-9Pu0RyDl.js";const tt=1,Ee=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let le=null,V=Ee?we:we.filter(e=>e.orgId===tt);const E=new Date().toISOString().split("T")[0];let W=null,Ae=!1,re=0,ae=!1,qe=!1,ne=!1,Ne=!1;const Le={},rt={};let Te=!0,Ce=!0,he=!0,Be=!0,Pe=!0,$e=!0,me=!0,X=null;function K(e,t){const r=new Date(e);return r.setDate(r.getDate()+t),r.toISOString().split("T")[0]}function Q(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,r,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(r)-1]} ${e.split("-")[0]}`}function ce(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,r,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(r)-1]}`}function gt(e){const[,t,r]=e.split("-");return`${r}/${t}`}const bt=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function Je(e){const[t,r,s]=e.split("-").map(Number);return new Date(Date.UTC(t,r-1,s)).getUTCDay()}function He(e){const[t,r,s]=e.split("-").map(Number),a=new Date(Date.UTC(t,r-1,s)),l=a.getUTCDay()||7;a.setUTCDate(a.getUTCDate()+4-l);const d=new Date(Date.UTC(a.getUTCFullYear(),0,1));return Math.ceil(((a-d)/864e5+1)/7)}function yt(e){return[e.name+(e.area?` (${e.area} ha)`:""),e.crop,e.irrigation].filter(Boolean).join(" — ")}const Oe=new Set(["Non irrigué","Non renseigné",""]);function it(e){return!!e.irrigation&&!Oe.has(e.irrigation)}function ie(e,t){return Math.round(e*(t??0)*10)}function J(e){return e.toLocaleString("fr-FR")+" m³"}function st(e){const t=Math.floor(e),r=Math.round((e-t)*60);return t<=0?`${r} min`:r>0?`${t} h ${String(r).padStart(2,"0")} min`:`${t} h`}function ht(e){var r;const t=et(e).volumeMax;return t!==void 0?t:((r=Xe.find(s=>s.id===e))==null?void 0:r.volumeMax)??null}function $t(e){const t=et(e).prixM3;return t!==void 0?t:.37}function Re(e){return e.toLocaleString("fr-FR",{maximumFractionDigits:0})+" €"}function lt(e){return Ze(e).volumeMaxM3??null}function fe(e){return Ze(e).debitM3h??null}function xt(e){const t=fe(e),r=V.find(s=>s.id===e);document.querySelectorAll(`tr[data-row-plot="${e}"] .irr-gl-irrig`).forEach(s=>{var d;(d=s.querySelector(".irr-gl-dur-i"))==null||d.remove();const a=+s.dataset.mm;if(!t||!a||!me)return;const l=document.createElement("span");l.className="irr-gl-dur-i",l.dataset.tip=`Durée estimée : ${st(ie(a,r==null?void 0:r.area)/t)}`,l.textContent="i",s.appendChild(l)})}function St(){const e=document.querySelector(".irr-gl-legend");if(!e)return;const t=V.some(s=>fe(s.id)),r=e.querySelector('.irr-gl-filter[data-filter="duration"]');if(t&&!r){const s=document.createElement("label");s.className="irr-gl-filter-item",s.innerHTML='<input type="checkbox" class="irr-gl-filter" data-filter="duration" checked><span class="irr-gl-dur-i">i</span>&nbsp;Durées',e.appendChild(s),s.querySelector(".irr-gl-filter").addEventListener("change",a=>{me=a.target.checked,O()})}else!t&&r&&r.closest(".irr-gl-filter-item").remove()}function ke(){return[...V].sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function nt(e){return e.id%3===2}function at(e){return 25+e.id*7%20}function wt(e){return e.id%9===2}function Et(e,t){const[,r,s]=t.split("-").map(Number);return Math.min(65,Math.max(5,30+(e.id*7+r*3+s*2)%30))}function qt(e){const t=(e.irrigation||"").toLowerCase();return["rampe","pivot","enrouleur"].some(r=>t.includes(r))}function Lt(e){if(!qt(e))return[];const t=[];let r=e.id*17,s=new Date(K(E,-45));const a=new Date(K(E,-1));for(;s<=a;){const l=s.toISOString().split("T")[0],d=r%7-3;r=(r*31+17)%1e3,t.push({iso:l,mm:Math.max(8,15+d),real:!0,plotId:e.id,fromDetector:!0}),s.setDate(s.getDate()+5+r%3),r=(r*31+17)%1e3}return t}function je(e,t={}){const{allBtn:r=!1}=t,s=ke().map(a=>`
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${a.id}" />
      <span class="irr-msel-name">${yt(a)}</span>
    </label>`).join("");return`<div class="irr-msel" id="${e}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${s}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${r?'<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>':""}
    </div>
  </div>`}function ze(e,t){const r=e.querySelector(`#${t}`);if(!r)return;const s=r.querySelector(".irr-msel-search"),a=r.querySelector(".irr-msel-count"),l=r.querySelector(".irr-msel-all-btn"),d=()=>{const o=r.querySelectorAll(".irr-msel-cb:checked").length;a.textContent=`${o} sélectionnée${o!==1?"s":""}`};s.addEventListener("input",()=>{const o=s.value.toLowerCase();r.querySelectorAll(".irr-msel-item").forEach(x=>{x.style.display=x.querySelector(".irr-msel-name").textContent.toLowerCase().includes(o)?"":"none"})}),r.querySelectorAll(".irr-msel-cb").forEach(o=>o.addEventListener("change",d)),l==null||l.addEventListener("click",()=>{const o=[...r.querySelectorAll(".irr-msel-cb")].filter(S=>S.closest(".irr-msel-item").style.display!=="none"),x=o.some(S=>!S.checked);o.forEach(S=>{S.checked=x}),d()})}function xe(e,t){const r=e.querySelector(`#${t}`);return r?[...r.querySelectorAll(".irr-msel-cb:checked")].map(s=>+s.value):[]}function oe(e,t){var a;(a=document.querySelector(".irr-save-confirm"))==null||a.remove();const r=document.createElement("div");r.className="irr-save-confirm",r.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(l=>`<div>${l}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(r);const s=()=>{r.remove(),O(!0)};r.addEventListener("click",l=>{l.target===r&&s()}),r.querySelector("#irr-confirm-close").addEventListener("click",s)}function Qe(e,t,r){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
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
    </div>`,document.body.appendChild(s);const a=()=>s.remove();s.addEventListener("click",d=>{d.target===s&&a()}),s.querySelector("#irr-cf-close").addEventListener("click",a),s.querySelector("#irr-cf-cancel").addEventListener("click",a),s.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{s.remove(),r()})}function kt(e,t,r){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
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
    </div>`,document.body.appendChild(s),s.addEventListener("click",l=>{l.target===s&&s.remove()}),s.querySelector("#irr-dc-close").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-ok").addEventListener("click",()=>{s.remove(),r()})}function It(e){if(e.length<2)return"";const t=[...e].sort((v,h)=>v.iso<h.iso?-1:1),r=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=new Date(t[0].iso),a=new Date(t[t.length-1].iso),l=Math.max(a-s,1),d=500,o=24,x=5,S=5,A=o-S-4,y=A-S-3,g=o+x+13,N=g+2,R=S+2,j=v=>Math.round(R+(v-s)/l*(d-2*R)),T=v=>{const[,h,q]=v.split("-");return`${parseInt(q)}/${parseInt(h)}`},m=[],I=new Date(s.getFullYear(),s.getMonth()+1,1);for(;I<=a;)m.push(new Date(I)),I.setMonth(I.getMonth()+1);const c=m.map(v=>`<line x1="${j(v)}" y1="${o-6}" x2="${j(v)}" y2="${o+x+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),f=[s,...m,a],k=f.slice(0,-1).map((v,h)=>{const q=j(v),M=j(f[h+1]);return M-q<16?"":`<text x="${Math.round((q+M)/2)}" y="${y}" font-size="9" fill="#B0AEA8" text-anchor="middle">${r[v.getMonth()]}</text>`}).join(""),u=t.map(v=>{const h=v.real?"#FF8500":"#FFB705",q=j(new Date(v.iso)),M=`${ce(v.iso)} · ${v.mm} mm`;return`<circle cx="${q}" cy="${A}" r="${S}" fill="${h}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${q}" cy="${A}" r="${S+6}" fill="transparent" pointer-events="all" data-tip="${M}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${d}" height="${N}" viewBox="0 0 ${d} ${N}" style="width:100%;display:block">
      ${k}<rect x="0" y="${o}" width="${d}" height="${x}" rx="${x/2}" fill="#E0DED8"/>${c}${u}
      <text x="1" y="${g}" font-size="9" fill="#B0AEA8">${T(t[0].iso)}</text>
      <text x="${d-1}" y="${g}" font-size="9" fill="#B0AEA8" text-anchor="end">${T(t[t.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function Mt(e){const t=e.filter(l=>l.real),r=e.filter(l=>!l.real),s=t.reduce((l,d)=>l+d.mm,0),a=r.reduce((l,d)=>l+d.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${s} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${a} mm</div><div class="irr-pr-cumul-ct">${r.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${s+a} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function Ie(){var j,T;const e=document.getElementById("irr-vol-banner-wrap");if(!e)return;const t=Ee?le:tt;if(!t){e.innerHTML="";return}const r=new Set(V.filter(m=>m.orgId===t).map(m=>m.id));Ee||V.forEach(m=>r.add(m.id));const s=new Map(V.map(m=>[m.id,m])),a=p.filter(m=>r.has(m.plotId)&&m.real).reduce((m,I)=>{var c;return m+ie(I.mm,((c=s.get(I.plotId))==null?void 0:c.area)??0)},0),l=p.filter(m=>r.has(m.plotId)&&!m.real).reduce((m,I)=>{var c;return m+ie(I.mm,((c=s.get(I.plotId))==null?void 0:c.area)??0)},0),d=a+l,o=ht(t),x=o?Math.min(100,Math.round(a/o*100)):0,S=o?Math.min(100-x,Math.round(l/o*100)):0,A=x+S,y=$t(t),g=y?a*y:0,N=y?l*y:0,R=m=>m!=null?m.toLocaleString("fr-FR"):"";e.innerHTML=`
    <div class="irr-vol-banner">
      <div class="irr-vol-main">
        <div class="irr-vol-title">Volume irrigation</div>
        <div class="irr-vol-total">${J(d)}${o?` <span style="font-size:11px;font-weight:400;color:var(--txt3)">/ ${J(o)}</span>`:""}</div>
        <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${J(a)}</span> effectués · <span style="color:#FFB705">▪ ${J(l)}</span> planifiés</div>
        <div class="irr-vol-ctrl-row" style="margin-top:6px">
          <span class="irr-vol-ctrl-lbl">Volume limité :</span>
          <input class="irr-vol-input" id="irr-vol-max-inp" type="text" inputmode="numeric" placeholder="—" value="${R(o)}" />
          <span class="irr-vol-ctrl-lbl">m³</span>
        </div>
      </div>
      <div class="irr-vol-bar-wrap">
        <div class="irr-vol-bar-label">Consommation d'eau sur mon exploitation</div>
        ${o?"":'<div class="irr-vol-bar-nomax">Définissez un volume limité →</div>'}
        <div class="irr-vol-bar-bg">
          <div class="irr-vol-bar-real" style="width:${x}%"></div>
          <div class="irr-vol-bar-plan" style="width:${S}%"></div>
        </div>
        ${o?(()=>{const m=d-o;return m>0?`<div class="irr-vol-bar-pct" style="color:#E05252">Dépassement ${J(m)}</div>`:`<div class="irr-vol-bar-pct">${A}% consommé${A>=90?" ⚠":""}</div>`})():""}
      </div>
      <div class="irr-vol-controls">
        <div class="irr-vol-title">Budget saison</div>
        ${y?`<div class="irr-vol-total">${Re(g+N)}</div>
             <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${Re(g)}</span> effectués · <span style="color:#FFB705">▪ ${Re(N)}</span> planifiés</div>`:'<div class="irr-vol-bar-nomax">Définissez un prix du m³ →</div>'}
        <div class="irr-vol-ctrl-row" style="margin-top:6px">
          <span class="irr-vol-ctrl-lbl">Prix du m³ :</span>
          <input class="irr-vol-input" id="irr-prix-m3-inp" type="text" inputmode="numeric" placeholder="—" value="${R(y)}" />
          <span class="irr-vol-ctrl-lbl">€</span>
        </div>
      </div>
    </div>`,(j=e.querySelector("#irr-vol-max-inp"))==null||j.addEventListener("change",m=>{const I=m.target.value.replace(/\s/g,"").replace(/\./g,"").replace(/,/g,""),c=I!==""?parseInt(I):null;c!==null&&(m.target.value=c.toLocaleString("fr-FR")),We(t,{volumeMax:c}),Ie()}),(T=e.querySelector("#irr-prix-m3-inp"))==null||T.addEventListener("change",m=>{const I=m.target.value.replace(/\s/g,"").replace(",","."),c=I!==""?parseFloat(I):null;c!==null&&(m.target.value=c.toLocaleString("fr-FR",{maximumFractionDigits:2})),We(t,{prixM3:c}),Ie()})}function O(e=!1){var h,q,M;Ie();const t=document.getElementById("irr-right"),r=K(E,60),s=[...p.map(i=>i.iso),...ve.filter(i=>i.iso<=r).map(i=>i.iso),...ne?[K(E,-45)]:[],K(E,-1),r];if(!p.length&&!ve.length){t.innerHTML=`<div class="irr-pr-empty" style="padding-top:60px"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const a=[...s].sort()[0],l=p.length?[...p].map(i=>i.iso).sort().at(-1):null,d=l&&l>r?l:r,o=new Date(d);o.setMonth(o.getMonth()+re);const x=o.toISOString().split("T")[0],S=e?null:((h=t.querySelector("#irr-gl-body"))==null?void 0:h.scrollLeft)??null,A=[];let y=new Date(a);const g=new Date(x);for(;y<=g;)A.push(y.toISOString().split("T")[0]),y.setDate(y.getDate()+1);const N={};for(const i of ve)N[i.iso]=i.mm;function R(i){if(i<=E||i>K(E,13))return 0;const[,$,w]=i.split("-").map(Number),F=($*17+w*13)%100;return F<65?0:3+F%9}function j(i,$,w){const F=`${i}_${$}`;if(Le[F]!==void 0)return Le[F];if(!w)return 0;const[,D,B]=$.split("-").map(Number);if((i*13+D*7+B*3)%100<12)return 0;const L=.75+(i*11+B*5)%50/100;return Math.round(w*L)}const T=K(E,7);let m="",I="",c=0,f=null;for(const i of A){const $=i===E,w=Je(i),F=w===0,D=F?" irr-gl-th--week-end":"";f===null&&(f=He(i)),c++;const B=ae&&i>E&&i<=T;m+=`<th class="irr-gl-th${$?" irr-gl-th--today":""}${D}${B?" irr-gl-th--advisor-range":""}"><span class="irr-gl-day-name">${bt[w]}</span>${gt(i)}</th>`;const H=i===A[A.length-1];(F||H)&&(I+=`<th class="irr-gl-week-hd${F?" irr-gl-th--week-end":""}" colspan="${c}">S${f}</th>`,c=0,f=null),ae&&i===T&&(m+='<th class="irr-gl-th irr-gl-th--advisor">Reco J+7</th>',I+='<th class="irr-gl-week-hd"></th>')}function k(i){const $=ne?Lt(i):[],w=ae&&nt(i),F=qe&&wt(i);let D="";for(const n of A){const b=n===E,z=p.filter(P=>P.iso===n&&P.plotId===i.id),G=z.length===0?$.filter(P=>P.iso===n):[],C=z.filter(P=>!P.detectorDismissed).filter(P=>P.detectorConfirmed?ne&&Pe:P.real?Te:Ce),Y=Be?G:[],ge=[...C,...Y],de=ge.reduce((P,ee)=>P+ee.mm,0),dt=ge.some(P=>P.real),ct=(i.id*7+3)%3-1,_e=K(n,ct),ue=j(i.id,n,N[_e]??R(_e)),ut=`${i.id}_${n}`;let Ue="";if(ue&&he){const P=rt[ut]?'<span class="irr-gl-rain-corr-badge" title="Irrigation détectée corrigée en pluie">C</span>':"";Ue=n<=E?`<span class="irr-gl-rain irr-gl-rain--edit" data-rain-plotid="${i.id}" data-rain-iso="${n}" data-rain-mm="${ue}" title="Modifier la pluie">${ue} mm${P}</span>`:`<span class="irr-gl-rain">${ue} mm${P}</span>`}let Me="";if(de){const P=dt?"#E07820":"#FFB705",ee=C.map(se=>p.indexOf(se)).filter(se=>se>=0).join(","),ye=Y.length?'<span class="irr-gl-det-badge" title="Détecté automatiquement">D</span>':C.some(se=>se.detectorConfirmed)?'<span class="irr-gl-conf-badge" title="Irrigation confirmée">C</span>':"",De=Y.reduce((se,mt)=>se+mt.mm,0),te=fe(i.id),Fe=te&&me?`<span class="irr-gl-dur-i" data-tip="Durée estimée : ${st(ie(de,i.area)/te)}">i</span>`:"";Me=`<span class="irr-gl-val irr-gl-irrig" style="color:${P};cursor:pointer" data-mm="${de}"${ee?` draggable="true" data-plot-id="${i.id}"`:""}${ee?` data-idxs="${ee}" data-iso="${n}"`:` data-det-plotid="${i.id}" data-det-plotname="${i.name}" data-det-iso="${n}" data-det-mm="${De}" data-det-rain="${ue}"`}>${de} mm${ye}${Fe}</span>`}else Me=`<button class="irr-gl-add" data-plot-id="${i.id}" data-plot-name="${i.name}" data-iso="${n}">+</button>`;let Ye="";F&&$e&&n<E&&(Ye=`<span class="irr-gl-res">${Et(i,n)} mm</span>`);let be="";he&&(be+=`<div class="irr-gl-slot">${Ue}</div>`),be+=`<div class="irr-gl-slot">${Me}</div>`,F&&$e&&(be+=`<div class="irr-gl-slot">${Ye}</div>`);const pt=Je(n)===0,vt=w&&n>E&&n<=T;if(D+=`<td class="irr-gl-td${b?" irr-gl-td--today":""}${pt?" irr-gl-td--week-end":""}${vt?" irr-gl-td--advisor-range":""}" data-iso="${n}" data-plot-id="${i.id}">${be}</td>`,ae&&n===T){let P="";if(w){const ee=at(i),ye=p.filter(te=>te.plotId===i.id&&te.iso>E&&te.iso<=T).reduce((te,Fe)=>te+Fe.mm,0),De=ye>=ee?"#24B066":"#E05252";P=`<span class="irr-gl-advisor">${ee} mm</span><span style="display:block;font-size:10px;font-weight:600;color:${De}">${ye} mm planifié</span>`}D+=`<td class="irr-gl-td irr-gl-td--advisor">${P}</td>`}}const B=[i.crop,i.irrigation].filter(Boolean).join(" · "),H=i.area?`<span class="irr-gl-plot-area">(${i.area} ha)</span>`:"";let L="";const U=lt(i.id);if(U){const n=i.area??0,b=p.filter(C=>C.plotId===i.id&&C.real).reduce((C,Y)=>C+ie(Y.mm,n),0),z=p.filter(C=>C.plotId===i.id&&!C.real).reduce((C,Y)=>C+ie(Y.mm,n),0),G=b+z;if(G>0)if(G>U)L=`<span class="irr-gl-plot-deficit">Dépassement ${J(G-U)}</span>`;else{const C=Math.round(b/U*100),Y=Math.min(100-C,Math.round(z/U*100));L=`<span class="irr-gl-plot-mini-bar"><span class="irr-gl-plot-mini-r" style="width:${C}%"></span><span class="irr-gl-plot-mini-p" style="width:${Y}%"></span></span>`}}return`<tr data-row-plot="${i.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${i.id}">${i.name}</span>${H}${B?`<span class="irr-gl-plot-sub">${B}</span>`:""}${L}</td>${D}</tr>`}const u=ke().map(k).join(""),v=V.some(i=>fe(i.id));t.innerHTML=`
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-gl-legend">
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="real-irrig" ${Te?"checked":""}><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. effectuée</label>
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="plan-irrig" ${Ce?"checked":""}><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</label>
          ${ne?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="detected" ${Be?"checked":""}><span class="irr-gl-det-badge">D</span>&nbsp;Irrig. détectée</label><label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="confirmed" ${Pe?"checked":""}><span class="irr-gl-conf-badge">C</span>&nbsp;Irrig. corrigée</label>`:""}
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="rain" ${he?"checked":""}><span class="irr-gl-dot" style="background:#3A7FC1"></span>Pluie</label>
          ${ne?'<span class="irr-gl-filter-item"><span class="irr-gl-rain-corr-badge" style="margin-left:0">C</span>&nbsp;Pluie corrigée (ex-irrig. détectée)</span>':""}
          ${qe?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="reservoir" ${$e?"checked":""}><span class="irr-gl-dot" style="background:#9E9E9E"></span>Réservoir</label>`:""}
          ${v?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="duration" ${me?"checked":""}><span class="irr-gl-dur-i">i</span>&nbsp;Durées</label>`:""}
        </div>
        <div class="irr-gl-scroll-top" id="irr-gl-scroll-top">
          <div class="irr-gl-scroll-inner" id="irr-gl-scroll-inner"></div>
        </div>
      </div>
      <div class="irr-gl-body" id="irr-gl-body">
        <table class="irr-gl-table" id="irr-gl-table">
          <thead id="irr-gl-thead">
            <tr><th class="irr-gl-plot-hd irr-gl-week-corner"></th>${I}</tr>
            <tr><th class="irr-gl-plot-hd">Parcelles</th>${m}</tr>
          </thead>
          <tbody>${u}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${re===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${re>0?`+${re} mois au-delà de la saison`:`Fin de saison : ${ce(d)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var D;const i=t.querySelector("#irr-gl-body"),$=t.querySelector("#irr-gl-table"),w=t.querySelector("#irr-gl-scroll-top"),F=t.querySelector("#irr-gl-scroll-inner");if(!(!i||!$||!w||!F))if(F.style.width=$.offsetWidth+"px",w.addEventListener("scroll",()=>{i.scrollLeft=w.scrollLeft}),i.addEventListener("scroll",()=>{w.scrollLeft=i.scrollLeft}),S!==null)i.scrollLeft=S,w.scrollLeft=S;else{const B=t.querySelector(".irr-gl-th--today");if(B){const L=B.previousElementSibling??B,U=((D=t.querySelector(".irr-gl-plot-hd"))==null?void 0:D.offsetWidth)??120,n=L.offsetLeft-U;i.scrollLeft=n,w.scrollLeft=n}}}),(q=t.querySelector("#irr-gl-prev-month"))==null||q.addEventListener("click",()=>{re>0&&(re--,O())}),(M=t.querySelector("#irr-gl-next-month"))==null||M.addEventListener("click",()=>{re++,O()}),t.querySelectorAll(".irr-gl-filter").forEach(i=>{i.addEventListener("change",()=>{const $=i.dataset.filter;$==="real-irrig"?Te=i.checked:$==="plan-irrig"?Ce=i.checked:$==="rain"?he=i.checked:$==="detected"?Be=i.checked:$==="confirmed"?Pe=i.checked:$==="reservoir"?$e=i.checked:$==="duration"&&(me=i.checked),O()})}),t.querySelectorAll(".irr-gl-irrig").forEach(i=>{i.addEventListener("click",()=>{i.dataset.idxs?Dt(i.dataset.idxs.split(",").map(Number),i.dataset.iso):i.dataset.detPlotid&&At(+i.dataset.detPlotid,i.dataset.detPlotname,i.dataset.detIso,+i.dataset.detMm,+i.dataset.detRain)})}),t.querySelectorAll(".irr-gl-rain--edit").forEach(i=>{i.addEventListener("click",()=>{Ft(+i.dataset.rainPlotid,i.dataset.rainIso,+i.dataset.rainMm)})}),t.querySelectorAll(".irr-gl-add").forEach(i=>{i.addEventListener("click",()=>{jt(i.dataset.plotId,i.dataset.plotName,i.dataset.iso)})}),t.querySelectorAll('.irr-gl-irrig[draggable="true"]').forEach(i=>{i.addEventListener("dragstart",$=>{var w;X={idxs:i.dataset.idxs.split(",").map(Number),iso:i.dataset.iso,plotId:+i.dataset.plotId},(w=i.closest(".irr-gl-td"))==null||w.classList.add("irr-gl-td--dragging"),$.dataTransfer.effectAllowed="move"}),i.addEventListener("dragend",()=>{var $;($=i.closest(".irr-gl-td"))==null||$.classList.remove("irr-gl-td--dragging"),t.querySelectorAll(".irr-gl-td--dragover").forEach(w=>w.classList.remove("irr-gl-td--dragover")),X=null})}),t.querySelectorAll(".irr-gl-td[data-iso]").forEach(i=>{i.addEventListener("dragover",$=>{X&&(+i.dataset.plotId!==X.plotId||i.dataset.iso===X.iso||($.preventDefault(),i.classList.add("irr-gl-td--dragover")))}),i.addEventListener("dragleave",()=>i.classList.remove("irr-gl-td--dragover")),i.addEventListener("drop",$=>{if(!X||+i.dataset.plotId!==X.plotId||i.dataset.iso===X.iso)return;$.preventDefault();const{idxs:w,iso:F}=X;w.forEach(D=>{p[D]&&(p[D].iso=i.dataset.iso)}),_(),oe("Irrigation déplacée",[`${ce(F)} → ${ce(i.dataset.iso)}`]),O()})}),t.querySelectorAll(".irr-gl-plot-link").forEach(i=>{i.addEventListener("click",()=>{const $=V.find(w=>String(w.id)===i.dataset.plotId);$&&ot($)})})}function Dt(e,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const r=document.createElement("div");r.className="irr-edit-overlay";const s=e.map(l=>p[l]).filter(Boolean);r.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${Q(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${s.map((l,d)=>{const o=V.find(S=>S.id===l.plotId);return`<div class="irr-edit-row">
            <span class="irr-edit-label">${o?o.name:`Parcelle ${l.plotId}`}</span>
            <input type="number" class="irr-edit-qty" data-i="${d}" value="${l.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${d}">🗑</button>
          </div>`}).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(r),r.addEventListener("click",l=>{l.target===r&&r.remove()}),r.querySelector("#irr-edit-close").addEventListener("click",()=>r.remove()),r.querySelector("#irr-edit-cancel").addEventListener("click",()=>r.remove()),r.querySelectorAll(".irr-edit-del").forEach(l=>{l.addEventListener("click",()=>{const d=s[+l.dataset.i],o=p.indexOf(d);o>=0&&(p.splice(o,1),_()),r.remove()})}),r.querySelector("#irr-edit-save").addEventListener("click",()=>{r.querySelectorAll(".irr-edit-qty").forEach(l=>{const d=s[+l.dataset.i],o=parseInt(l.value);d&&o>0&&(d.mm=o,d.real=t<=E)}),_(),r.remove()})}function Ft(e,t,r){var d;(d=document.querySelector(".irr-edit-overlay"))==null||d.remove();const s=V.find(o=>o.id===e),a=s?s.name:`Parcelle ${e}`,l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier la pluie — ${Q(t)}</span>
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
    </div>`,document.body.appendChild(l),l.addEventListener("click",o=>{o.target===l&&l.remove()}),l.querySelector("#irr-rain-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-save").addEventListener("click",()=>{const o=parseInt(l.querySelector("#irr-rain-qty").value);!isNaN(o)&&o>=0&&(Le[`${e}_${t}`]=o),l.remove(),O()})}function At(e,t,r,s,a=0){var o;(o=document.querySelector(".irr-edit-overlay"))==null||o.remove();let l=s;const d=document.createElement("div");d.className="irr-edit-overlay",d.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigation détectée — ${Q(r)}</span>
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
    </div>`,document.body.appendChild(d),d.querySelector("#irr-det-ed-qty").addEventListener("input",x=>{const S=parseInt(x.target.value);S>0&&(l=S)}),d.addEventListener("click",x=>{x.target===d&&d.remove()}),d.querySelector("#irr-det-ed-close").addEventListener("click",()=>d.remove()),d.querySelector("#irr-det-ed-cancel").addEventListener("click",()=>d.remove()),d.querySelector("#irr-det-ed-del").addEventListener("click",()=>{p.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),_(),d.remove(),O()}),d.querySelector("#irr-det-ed-rain").addEventListener("click",()=>{p.push({iso:r,mm:0,real:!0,plotId:e,detectorDismissed:!0}),Le[`${e}_${r}`]=a+l,rt[`${e}_${r}`]=!0,_(),d.remove(),O()}),d.querySelector("#irr-det-ed-save").addEventListener("click",()=>{p.push({iso:r,mm:l,real:r<=E,plotId:e,detectorConfirmed:!0}),_(),d.remove(),O()})}function Tt(e,t){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();let r=e.iso,s=e.mm;const a=document.createElement("div");a.className="irr-edit-overlay",a.innerHTML=`
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
    </div>`,document.body.appendChild(a),a.addEventListener("click",d=>{d.target===a&&a.remove()}),a.querySelector("#irr-di-close").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-date").addEventListener("change",d=>{r=d.target.value}),a.querySelector("#irr-di-qty").addEventListener("input",d=>{const o=parseInt(d.target.value);o>0&&(s=o)}),a.querySelector("#irr-di-del").addEventListener("click",()=>{const d=p.indexOf(e);d>=0&&p.splice(d,1),_(),a.remove(),t()}),a.querySelector("#irr-di-save").addEventListener("click",()=>{e.iso=r,e.mm=s,e.real=r<=E,_(),a.remove(),t()})}function Ct(e,t){var I,c,f,k;const r=p.filter(u=>u.plotId===e&&u.fromStrategy&&u.seasonId),s=[...r].sort((u,v)=>u.iso<v.iso?-1:1),a=new Set(r.map(u=>u.seasonId));let l=((I=s[0])==null?void 0:I.iso)||E,d=((c=s[s.length-1])==null?void 0:c.iso)||K(E,90),o=((f=s[0])==null?void 0:f.mm)||10,x=s.length>=2?Math.max(1,Math.round((new Date(s[s.length-1].iso)-new Date(s[0].iso))/864e5/(s.length-1))):7;const S=l,A=d;let y="form";(k=document.querySelector(".irr-edit-overlay"))==null||k.remove();const g=document.createElement("div");g.className="irr-edit-overlay";function N(){if(!l||!d||x<=0)return[];const u=[],v=new Date(d);let h=new Date(l);for(;h<=v&&u.length<200;)u.push(h.toISOString().split("T")[0]),h.setDate(h.getDate()+x);return u}function R(){const u=N(),v=u.filter(h=>h>E).length;g.querySelector("#irr-ms-preview").textContent=u.length>0?`↗ ${u.length} irrigations · ${u.length*o} mm · dont ${v} à venir`:"Ajustez les dates et la fréquence"}function j(){return`
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
            <input type="number" id="irr-ms-qty" value="${o}" min="1" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
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
      </div>`}function T(){const u=l!==S||d!==A,v=N();return`
      <div class="irr-edit-body">
        <div style="font-size:13px;color:var(--txt2);line-height:1.5;background:#FEF6E6;border:1px solid #F5D98B;border-radius:8px;padding:10px 12px">
          ${u?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées."}
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--txt3)">
          ${Q(l)} → ${Q(d)} · ${o} mm tous les ${x} jours · ${v.length} irrigations
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-ms-back">Retour</button>
        <button class="iw-btn iw-btn--pri" id="irr-ms-confirm">Confirmer la modification</button>
      </div>`}function m(){g.innerHTML=`
      <div class="irr-edit-modal" style="max-width:460px">
        <div class="irr-edit-hd">
          <span>Modifier la saison</span>
          <button class="irr-edit-close" id="irr-ms-close">×</button>
        </div>
        ${y==="form"?j():T()}
      </div>`,g.querySelector("#irr-ms-close").addEventListener("click",()=>g.remove()),y==="form"?(R(),g.querySelector("#irr-ms-cancel").addEventListener("click",()=>g.remove()),g.querySelector("#irr-ms-debut").addEventListener("change",u=>{l=u.target.value,R()}),g.querySelector("#irr-ms-fin").addEventListener("change",u=>{d=u.target.value,R()}),g.querySelector("#irr-ms-qty").addEventListener("input",u=>{const v=parseInt(u.target.value);v>0&&(o=v,R())}),g.querySelector("#irr-ms-freq").addEventListener("input",u=>{const v=parseInt(u.target.value);v>0&&(x=v,R())}),g.querySelector("#irr-ms-save").addEventListener("click",()=>{y="confirm",m()})):(g.querySelector("#irr-ms-back").addEventListener("click",()=>{y="form",m()}),g.querySelector("#irr-ms-confirm").addEventListener("click",()=>{const u=l!==S||d!==A,v=N(),h=u?v:v.filter(i=>i>E),q=p.filter(i=>!(i.plotId===e&&a.has(i.seasonId)&&(u||i.iso>E)));p.splice(0,p.length,...q);const M=Ge();for(const i of h)p.push({iso:i,mm:o,real:i<=E,plotId:e,fromStrategy:!0,seasonId:M});_(),g.remove(),oe("Saison modifiée",[`Début : ${Q(l)} · Fin : ${Q(d)}`,`${v.length} irrigations · ${o} mm · tous les ${x} j`,u?"Modifications appliquées à toute la saison.":"Modifications appliquées à partir de demain."]),t==null||t()}))}document.body.appendChild(g),m(),g.addEventListener("click",u=>{u.target===g&&g.remove()})}function Ve(e){var r;const t=document.getElementById("irr-right");t&&(t.querySelectorAll("[data-row-plot]").forEach(s=>s.classList.remove("irr-gl-row--active")),e&&((r=t.querySelector(`[data-row-plot="${e}"]`))==null||r.classList.add("irr-gl-row--active")))}function ot(e){const t=document.getElementById("irr-page"),r=document.getElementById("irr-detail");if(!(!t||!r)){if(r.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),r.style.display="none",r.dataset.plotId="";return}r.dataset.plotId=String(e.id),r.style.display="",t.classList.add("irr-has-detail"),Ve(String(e.id)),Z(e)}}const Bt=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],Pt=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];function Rt(e){const t=He(E),r=E.slice(0,4),s=E.slice(0,7),a=e.filter(o=>o.iso.slice(0,4)===r&&He(o.iso)===t).reduce((o,x)=>o+x.mm,0),l=e.filter(o=>o.iso.slice(0,7)===s).reduce((o,x)=>o+x.mm,0),d=Pt[parseInt(E.slice(5,7),10)-1];return`<div class="irr-pr-planned-totals">
    <div class="irr-pr-planned-hd">Total planifiées :</div>
    <div class="irr-pr-planned-row">· Semaine S${t} : <strong>${a} mm</strong></div>
    <div class="irr-pr-planned-row">· Mois ${d} : <strong>${l} mm</strong></div>
  </div>`}function Z(e){var h,q,M,i,$,w,F,D,B,H,L,U;const t=document.getElementById("irr-detail");if(!t)return;const r=((h=t.querySelector(".irr-pr-details"))==null?void 0:h.open)??!1;if(!it(e)){t.style.display="",t.dataset.plotId=String(e.id),t.innerHTML=`
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
            ${Ke.map(n=>`<option value="${n}"${n===(e.irrigation||"Non renseigné")?" selected":""}>${n}</option>`).join("")}
          </select>
          <button id="irr-det-type-save" class="btn-primary" style="margin-top:10px;width:100%;justify-content:center">Enregistrer</button>
        </div>
      </div>`,(q=t.querySelector("#irr-det-close"))==null||q.addEventListener("click",()=>{var n;(n=document.getElementById("irr-page"))==null||n.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Ve(null)}),(M=t.querySelector("#irr-det-type-save"))==null||M.addEventListener("click",()=>{const n=t.querySelector("#irr-det-type-sel").value;Se(e.id,{irrigation:n}),e.irrigation=n,Z(e),O(!0)});return}const s=p.filter(n=>n.plotId===e.id),a=s.some(n=>n.fromStrategy&&n.seasonId),l=s.filter(n=>n.fromStrategy).sort((n,b)=>n.iso<b.iso?-1:1),d=(i=l[0])==null?void 0:i.iso,o=($=l[l.length-1])==null?void 0:$.iso,x=new Set(s.filter(n=>n.fromStrategy&&n.seasonId).map(n=>n.seasonId)),S=d&&o?`<div><strong>Saison :</strong> ${ce(d)} → ${ce(o)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',A=s.filter(n=>n.real).sort((n,b)=>n.iso<b.iso?-1:1),y=s.filter(n=>!n.real).sort((n,b)=>n.iso<b.iso?-1:1),g=e.area??0,N=A.reduce((n,b)=>n+ie(b.mm,g),0),R=y.reduce((n,b)=>n+ie(b.mm,g),0),j=N+R,T=lt(e.id),m=T&&g?Math.min(100,Math.round(N/T*100)):0,I=T&&g?Math.min(100-m,Math.round(R/T*100)):0,c=m+I,f=`
    <div class="irr-det-vol">
      <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--bdr2)">
        <div class="irr-det-vol-row">
          <span class="irr-det-vol-lbl">Volume saison :</span>
          <strong style="font-size:13px">${J(j)}</strong>
        </div>
        ${g?`<div class="irr-det-vol-row" style="gap:8px;margin-top:3px">
          <span style="color:#FF8500;font-size:11px">▪ ${J(N)} effectués</span>
          <span style="color:#FFB705;font-size:11px">▪ ${J(R)} planifiés</span>
        </div>`:'<div class="irr-det-vol-lbl" style="color:var(--txt3);margin-top:3px">surface non renseignée</div>'}
      </div>
      <div class="irr-det-vol-row">
        <span class="irr-det-vol-lbl">Volume limité :</span>
        <input class="irr-det-vol-input" id="irr-det-vol-input" type="number" min="0" placeholder="—" value="${T??""}" />
        <span class="irr-det-vol-lbl">m³</span>
      </div>
      ${T&&g?`
      <div class="irr-det-vol-bar">
        <div style="width:${m}%;background:#FF8500;height:100%"></div>
        <div style="width:${I}%;background:#FFB705;height:100%"></div>
      </div>
      ${j>T?`<div class="irr-det-vol-note" style="color:#E05252">Dépassement ${J(j-T)}</div>`:`<div class="irr-det-vol-note">${c}% · ${J(T-j)} restants</div>`}`:""}
      <div class="irr-det-vol-row" style="margin-top:8px">
        <span class="irr-det-vol-lbl">Débit :</span>
        <input class="irr-det-vol-input" id="irr-det-debit-input" type="number" min="0" step="0.1" placeholder="—" value="${fe(e.id)??""}" />
        <span class="irr-det-vol-lbl">m³/h</span>
      </div>
      ${Ne?'<button class="irr-det-irrelis-sync-btn" id="irr-det-irrelis-sync"><i class="bi bi-arrow-repeat"></i> Synchroniser pluies et irrigations sur Irré-LIS</button>':""}
    </div>`,k=n=>{const b=p.indexOf(n),z=n.real?"#FF8500":"#FFB705",[,G,C]=n.iso.split("-"),Y=`${parseInt(C)} ${Bt[parseInt(G)-1]}`,ge=n.real?"Effectuée":"Planifiée",de=n.detectorConfirmed?'<span class="irr-pr-det-tag">Détectée &amp; corrigée</span>':"";return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${z}"></div>
      <div class="irr-pr-date" style="color:${z};min-width:52px;font-size:13px;font-weight:600">${Y}</div>
      <div class="irr-pr-info">
        <div class="irr-pr-status" style="color:${z}">${ge}</div>
        ${de}
      </div>
      <div class="irr-pr-mm" style="color:${z}">${n.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${b}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${b}" title="Supprimer">🗑</button>
    </div>`},u=a?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
      </div>
    </div>`:"",v=ae&&nt(e)?`<div style="margin:16px 16px 16px;padding:12px;background:#FFF4E6;border-radius:8px;border-left:3px solid #E07820">
         <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#E07820;margin-bottom:4px">Recommandations d'irrigation sur les 7 prochains jours</div>
         <div style="font-size:22px;font-weight:700;color:#E07820">${at(e)} mm</div>
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
        ${u}
        ${Mt(s)}
        ${Rt(y)}
        ${It(s)}
        ${f}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${A.length?`
        <details class="irr-pr-details"${r||!y.length?" open":""}>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${A.length}</span></summary>
          <div>${A.map(k).join("")}</div>
        </details>`:""}
      ${v}
      ${y.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${y.length}</span></summary>
          <div>${y.map(k).join("")}</div>
        </details>`:""}
      ${s.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(w=t.querySelector("#irr-det-strat-toggle"))==null||w.addEventListener("click",()=>{const n=t.querySelector("#irr-det-strat-opts");n.style.display=n.style.display==="none"?"":"none"}),(F=t.querySelector("#irr-det-modify"))==null||F.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none",Ct(e.id,()=>{Z(e),O(!0)})}),(D=t.querySelector("#irr-det-stop"))==null||D.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const n=p.filter(b=>b.plotId===e.id&&x.has(b.seasonId)&&!b.real&&b.iso>E);p.splice(0,p.length,...p.filter(b=>!n.includes(b))),_(),oe("Saison arrêtée",[`${n.length} irrigation${n.length!==1?"s":""} future${n.length!==1?"s":""} supprimée${n.length!==1?"s":""}`,`Parcelle : ${e.name}`])}),(B=t.querySelector("#irr-det-del-all"))==null||B.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const n=p.filter(z=>z.plotId===e.id);if(!n.length)return;const b=n.some(z=>!z.fromStrategy);kt(`Supprimer toutes les irrigations de "${e.name}" ?`,`${n.length} irrigation${n.length!==1?"s":""} seront supprimées (passées et futures).`+(b?"<br><br>Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.":""),()=>{p.splice(0,p.length,...p.filter(z=>!n.includes(z))),_(),oe("Saison supprimée",[`${n.length} irrigation${n.length!==1?"s":""} supprimée${n.length!==1?"s":""}`,`Parcelle : ${e.name}`])})}),t.querySelectorAll(".irr-pr-edit").forEach(n=>{n.addEventListener("click",()=>{const b=p[+n.dataset.idx];b&&Tt(b,()=>{Z(e),O(!0)})})}),t.querySelectorAll(".irr-pr-del").forEach(n=>{n.addEventListener("click",()=>{const b=+n.dataset.idx;b>=0&&(p.splice(b,1),_(),Z(e))})}),(H=t.querySelector("#irr-det-vol-input"))==null||H.addEventListener("change",n=>{const b=n.target.value!==""?parseInt(n.target.value):null;Se(e.id,{volumeMaxM3:b}),Z(e),Ie()}),(L=t.querySelector("#irr-det-debit-input"))==null||L.addEventListener("change",n=>{const b=n.target.value!==""?parseFloat(n.target.value):null;Se(e.id,{debitM3h:b}),Z(e),xt(e.id),St()}),(U=t.querySelector("#irr-det-irrelis-sync"))==null||U.addEventListener("click",()=>{oe("Synchronisation Irré-LIS",[`Pluies et irrigations synchronisées pour « ${e.name} »`])}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var n;(n=document.getElementById("irr-page"))==null||n.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Ve(null)})}function jt(e,t,r,s=10){var A;(A=document.querySelector(".irr-edit-overlay"))==null||A.remove();const a=V.find(y=>y.id===+e),l=a&&!it(a),d=l?`
    <div class="irr-edit-row">
      <span class="irr-edit-label">Type d'irrigation</span>
      <select id="irr-qa-type-sel" style="flex:1;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
        ${Ke.map(y=>`<option value="${y}"${y===(a.irrigation||"Non renseigné")?" selected":""}>${y}</option>`).join("")}
      </select>
    </div>`:"",o=document.createElement("div");o.className="irr-edit-overlay",o.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${Q(r)}</span>
        <button class="irr-edit-close" id="irr-qa-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${l?`<p style="font-size:12px;color:var(--txt2);margin:0 0 10px">Précisez le type d'irrigation de cette parcelle pour pouvoir saisir une irrigation.</p>`:""}
        ${d}
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
    </div>`,document.body.appendChild(o),o.addEventListener("click",y=>{y.target===o&&o.remove()}),o.querySelector("#irr-qa-close").addEventListener("click",()=>o.remove()),o.querySelector("#irr-qa-cancel").addEventListener("click",()=>o.remove());const x=o.querySelector("#irr-qa-save"),S=o.querySelector("#irr-qa-type-sel");if(S){const y=()=>{x.disabled=Oe.has(S.value)};y(),S.addEventListener("change",y)}x.addEventListener("click",()=>{if(S){const g=S.value;if(Oe.has(g))return;Se(a.id,{irrigation:g}),a.irrigation=g}const y=parseInt(o.querySelector("#irr-qa-qty").value)||10;p.push({iso:r,mm:y,real:r<=E,plotId:+e,fromStrategy:!1}),_(),o.remove(),O(!0)})}function pe(){var d,o,x,S,A,y,g,N,R,j,T,m,I;const e=document.getElementById("irr-left"),t=[...Xe].filter(c=>c.id!==100).sort((c,f)=>c.name.localeCompare(f.name)),r=Ee?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${le===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${le===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${t.map(c=>`<option value="${c.id}"${c.id===le?" selected":""}>${c.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"",s=document.getElementById("irr-page");if(Ae){s==null||s.classList.add("irr-left-collapsed"),e.innerHTML=`
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Déplier le panneau">›</button>`,e.querySelector("#irr-left-toggle").addEventListener("click",()=>{Ae=!1,pe()});return}s==null||s.classList.remove("irr-left-collapsed"),e.innerHTML=`
    <div class="irr-lc-collapse-bar">
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Réduire le panneau">‹</button>
    </div>
    <div class="irr-lc-scroll">
    ${r}

    <button class="irr-lc-btn${W==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${W==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${je("irr-s-scope",{allBtn:!0})}
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

    <button class="irr-lc-btn${W==="saison"?" irr-lc-btn--active":""}" data-action="saison">
      <i class="bi bi-arrow-repeat"></i><span>Saisir une saison d'irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${W==="saison"?"":" irr-lc-form--hidden"}" id="irr-form-saison">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${je("irr-sa-scope",{allBtn:!0})}
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

    <button class="irr-lc-btn${W==="export"?" irr-lc-btn--active":""}" data-action="export">
      <i class="bi bi-download"></i><span>Exporter les irrigations</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${W==="export"?"":" irr-lc-form--hidden"}" id="irr-form-export">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${je("irr-ex-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Du</label>
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${p.length?[...p].sort((c,f)=>c.iso<f.iso?-1:1)[0].iso:E}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${p.length?[...p].sort((c,f)=>c.iso>f.iso?-1:1)[0].iso:E}" />
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
        <input type="checkbox" id="irr-feat-advisor" ${ae?"checked":""} />
        <span>Irrigation Advisor</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-reservoir" ${qe?"checked":""} />
        <span>Reservoir Sensorless</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-detector" ${ne?"checked":""} />
        <span>Irrigation Detector</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-irrelis" ${Ne?"checked":""} />
        <span>Irré-LIS</span>
      </label>
    </div>
  `,(d=e.querySelector("#irr-left-toggle"))==null||d.addEventListener("click",()=>{Ae=!0,pe()}),W==="saisie"&&ze(e,"irr-s-scope"),W==="saison"&&ze(e,"irr-sa-scope"),W==="export"&&ze(e,"irr-ex-scope"),(o=e.querySelector("#irr-org-select"))==null||o.addEventListener("change",c=>{const f=c.target.value;le=f===""?null:parseInt(f),V=le===null?we:we.filter(k=>k.orgId===le),re=0,pe(),O()}),e.querySelectorAll(".irr-lc-btn").forEach(c=>{c.addEventListener("click",()=>{const f=c.dataset.action;W=W===f?null:f,pe()})});function a(){var i,$,w,F;const c=(i=e.querySelector("#irr-sa-debut"))==null?void 0:i.value,f=($=e.querySelector("#irr-sa-fin"))==null?void 0:$.value,k=parseInt((w=e.querySelector("#irr-sa-qty"))==null?void 0:w.value)||0,u=parseInt((F=e.querySelector("#irr-sa-freq"))==null?void 0:F.value)||0,v=e.querySelector("#irr-sa-preview");if(!v)return;if(!c||!f||u<=0){v.textContent="—";return}let h=0,q=new Date(c),M=new Date(f);for(;q<=M&&h<200;)h++,q.setDate(q.getDate()+u);if(h>0){const B=xe(e,"irr-sa-scope").reduce((U,n)=>{const b=ke().find(z=>z.id===n);return U+((b==null?void 0:b.area)??0)},0),H=B>0?Math.round(h*k*B*10):0,L=H>0?` · ${H.toLocaleString("fr-FR")} m³`:"";v.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${h} irrigations · ${h*k} mm${L}</span>`}else v.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'}W==="saison"&&(a(),(x=e.querySelector("#irr-sa-debut"))==null||x.addEventListener("change",a),(S=e.querySelector("#irr-sa-fin"))==null||S.addEventListener("change",a),(A=e.querySelector("#irr-sa-qty"))==null||A.addEventListener("input",a),(y=e.querySelector("#irr-sa-freq"))==null||y.addEventListener("input",a)),(g=e.querySelector("#irr-ex-dl"))==null||g.addEventListener("click",()=>{const c=e.querySelector("#irr-ex-start").value,f=e.querySelector("#irr-ex-end").value,k=e.querySelector("#irr-ex-irrig").checked,u=e.querySelector("#irr-ex-rain").checked,v=xe(e,"irr-ex-scope"),h=v.length>0?V.filter(L=>v.includes(L.id)):ke(),q=new Set;if(k)for(const L of p)L.iso>=c&&L.iso<=f&&q.add(L.iso);if(u)for(const L of ve)L.iso>=c&&L.iso<=f&&q.add(L.iso);const M=[...q].sort(),i={};if(u)for(const L of ve)i[L.iso]=L.mm;const $=["Date",...h.map(L=>L.name+(u?" (irrig.)":""))].join(";"),w=M.map(L=>{const U=h.map(n=>{const b=k?p.filter(C=>C.iso===L&&C.plotId===n.id).reduce((C,Y)=>C+Y.mm,0):0,z=u?i[L]??0:0,G=b+z;return G>0?G:""});return[L,...U].join(";")}),F=[$,...w].join(`
`),D=new Blob([F],{type:"text/csv;charset=utf-8;"}),B=URL.createObjectURL(D),H=Object.assign(document.createElement("a"),{href:B,download:`irrigations_${c}_${f}.csv`});document.body.appendChild(H),H.click(),setTimeout(()=>{URL.revokeObjectURL(B),H.remove()},100)}),(N=e.querySelector("#irr-s-save"))==null||N.addEventListener("click",()=>{const c=xe(e,"irr-s-scope"),f=e.querySelector("#irr-s-date").value,k=parseInt(e.querySelector("#irr-s-qty").value)||0,u=e.querySelector("#irr-s-err");if(!c.length||!f||!k){u&&(u.style.display="");return}u&&(u.style.display="none");const v=f>E,h=()=>{c.forEach(M=>{p.push({iso:f,mm:k,real:!v,plotId:M,fromStrategy:!1})}),_(),oe("Irrigation enregistrée",[`Date : ${Q(f)}`,`Quantité : ${k} mm`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},q=p.filter(M=>c.includes(M.plotId)&&M.iso===f);if(q.length){Qe(q.length,`${c.length} parcelle(s)`,()=>{p.splice(0,p.length,...p.filter(M=>!(c.includes(M.plotId)&&M.iso===f))),h()});return}h()});const l=()=>{O();const c=document.getElementById("irr-detail"),f=c==null?void 0:c.dataset.plotId;if(f){const k=V.find(u=>String(u.id)===f);k&&Z(k)}};(R=e.querySelector("#irr-feat-advisor"))==null||R.addEventListener("change",c=>{ae=c.target.checked,l()}),(j=e.querySelector("#irr-feat-reservoir"))==null||j.addEventListener("change",c=>{qe=c.target.checked,l()}),(T=e.querySelector("#irr-feat-detector"))==null||T.addEventListener("change",c=>{ne=c.target.checked,l()}),(m=e.querySelector("#irr-feat-irrelis"))==null||m.addEventListener("change",c=>{Ne=c.target.checked,l()}),(I=e.querySelector("#irr-sa-save"))==null||I.addEventListener("click",()=>{const c=xe(e,"irr-sa-scope"),f=e.querySelector("#irr-sa-debut").value,k=e.querySelector("#irr-sa-fin").value,u=parseInt(e.querySelector("#irr-sa-qty").value)||10,v=parseInt(e.querySelector("#irr-sa-freq").value)||7,h=e.querySelector("#irr-sa-err");if(!c.length||!f||!k){h&&(h.style.display="");return}h&&(h.style.display="none");const q=[];let M=new Date(f),i=new Date(k);for(;M<=i&&q.length<200;)q.push(new Date(M)),M.setDate(M.getDate()+v);const $=Ge(),w=()=>{c.forEach(D=>{q.forEach(B=>{const H=B.toISOString().slice(0,10);p.push({iso:H,mm:u,real:H<=E,plotId:D,fromStrategy:!0,seasonId:$})})}),_(),oe("Saison enregistrée",[`Début : ${Q(f)} · Fin : ${Q(k)}`,`${q.length} irrigations · ${u} mm · tous les ${v} j`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},F=p.filter(D=>c.includes(D.plotId)&&D.iso>=f&&D.iso<=k);if(F.length){Qe(F.length,`${c.length} parcelle(s)`,()=>{p.splice(0,p.length,...p.filter(D=>!(c.includes(D.plotId)&&D.iso>=f&&D.iso<=k))),w()});return}w()})}function zt(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const r=t.target.closest("[data-tip]");if(!r){e.style.opacity="0";return}e.textContent=r.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var r;(r=t.relatedTarget)!=null&&r.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search),t=e.get("plot"),r=e.get("action");if((r==="saisie"||r==="saison")&&(W=r),ft(),zt(),pe(),O(),window.addEventListener("irrig-updated",()=>{O();const s=document.getElementById("irr-detail"),a=s==null?void 0:s.dataset.plotId;if(!a)return;const l=V.find(d=>String(d.id)===a);l&&Z(l)}),t){const s=V.find(a=>a.id===+t);s&&(ot(s),(r==="saisie"||r==="saison")&&setTimeout(()=>{const a=r==="saisie"?"irr-s-scope":"irr-sa-scope",l=document.querySelector(`#${a} input[value="${t}"]`);l&&(l.checked=!0,l.dispatchEvent(new Event("change")))},50))}});
