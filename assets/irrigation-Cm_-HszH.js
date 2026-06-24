import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as m,R as ve,g as et,s as Y}from"./irrigations-C22Dtsoo.js";import{I as tt}from"./constants-Dur9W-JX.js";import{p as Ee}from"./plots-DhtWL7s_.js";import{s as ht}from"./sensors-CRadjF8G.js";import{o as rt}from"./orgs-DnFmvGlp.js";import{u as $t}from"./breadcrumb-CzFWtd6d.js";import{d as we,e as Ke,c as it,f as st}from"./store-CX9wca99.js";import"./irrigation-web-It7neldm.js";const xt=["CHP-15/30","CHP-30/60","CHP-60/90"],lt=1,qe=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let ae=null,_=qe?Ee:Ee.filter(e=>e.orgId===lt);const x=new Date().toISOString().split("T")[0];let U=null,Ce=!1;const St=[{id:"mesparcelles",label:"MesParcelles",authType:"apikey"},{id:"smag",label:"Smag",authType:"apikey"},{id:"geofolia",label:"Geofolia",authType:"credentials"},{id:"mympls",label:"My MPS",authType:"credentials"}],Pe={};let ie=0,oe=!1,Le=!1,ne=!1,Ve=!1,ke=!1;const Ie={},at={};let Be=!0,Re=!0,$e=!0,je=!0,ze=!0,xe=!0,me=!0,Z=null;function X(e,t){const i=new Date(e);return i.setDate(i.getDate()+t),i.toISOString().split("T")[0]}function Q(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,i,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(i)-1]} ${e.split("-")[0]}`}function ce(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,i,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(i)-1]}`}function wt(e){const[,t,i]=e.split("-");return`${i}/${t}`}const Et=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function Xe(e){const[t,i,s]=e.split("-").map(Number);return new Date(Date.UTC(t,i-1,s)).getUTCDay()}function _e(e){const[t,i,s]=e.split("-").map(Number),a=new Date(Date.UTC(t,i-1,s)),l=a.getUTCDay()||7;a.setUTCDate(a.getUTCDate()+4-l);const o=new Date(Date.UTC(a.getUTCFullYear(),0,1));return Math.ceil(((a-o)/864e5+1)/7)}function qt(e){return[e.name+(e.area?` (${e.area} ha)`:""),e.crop,e.irrigation].filter(Boolean).join(" — ")}const Ue=new Set(["Non irrigué","Non renseigné",""]);function nt(e){return!!e.irrigation&&!Ue.has(e.irrigation)}function se(e,t){return Math.round(e*(t??0)*10)}function J(e){return e.toLocaleString("fr-FR")+" m³"}function ot(e){const t=Math.floor(e),i=Math.round((e-t)*60);return t<=0?`${i} min`:i>0?`${t} h ${String(i).padStart(2,"0")} min`:`${t} h`}function Lt(e){var i;const t=st(e).volumeMax;return t!==void 0?t:((i=rt.find(s=>s.id===e))==null?void 0:i.volumeMax)??null}function kt(e){const t=st(e).prixM3;return t!==void 0?t:.37}function Oe(e){return e.toLocaleString("fr-FR",{maximumFractionDigits:0})+" €"}function dt(e){return it(e).volumeMaxM3??null}function fe(e){return it(e).debitM3h??null}function It(e){const t=fe(e),i=_.find(s=>s.id===e);document.querySelectorAll(`tr[data-row-plot="${e}"] .irr-gl-irrig`).forEach(s=>{var o;(o=s.querySelector(".irr-gl-dur-i"))==null||o.remove();const a=+s.dataset.mm;if(!t||!a||!me)return;const l=document.createElement("span");l.className="irr-gl-dur-i",l.dataset.tip=`Durée estimée : ${ot(se(a,i==null?void 0:i.area)/t)}`,l.textContent="i",s.appendChild(l)})}function Mt(){const e=document.querySelector(".irr-gl-legend");if(!e)return;const t=_.some(s=>fe(s.id)),i=e.querySelector('.irr-gl-filter[data-filter="duration"]');if(t&&!i){const s=document.createElement("label");s.className="irr-gl-filter-item",s.innerHTML='<input type="checkbox" class="irr-gl-filter" data-filter="duration" checked><span class="irr-gl-dur-i">i</span>&nbsp;Durées',e.appendChild(s),s.querySelector(".irr-gl-filter").addEventListener("change",a=>{me=a.target.checked,H()})}else!t&&i&&i.closest(".irr-gl-filter-item").remove()}function Me(){return[..._].sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function ct(e){return e.id%3===2}function ut(e){return 25+e.id*7%20}function Dt(e){return e.id%9===2}function Tt(e,t){const[,i,s]=t.split("-").map(Number);return Math.min(65,Math.max(5,30+(e.id*7+i*3+s*2)%30))}function At(e){const t=(e.irrigation||"").toLowerCase();return["rampe","pivot","enrouleur"].some(i=>t.includes(i))}function Ft(e){return ht.some(t=>(t.parcelIds||[]).includes(e.id)&&(t.model.startsWith("CAPA-")||xt.includes(t.model)))}function Ct(e){return!!e.crop}function Pt(e){return m.some(t=>t.plotId===e.id&&t.fromStrategy)}function Bt(e){const t=new Date(x).getFullYear(),i=new Date(t,2,21),s=47,a=new Date(i);return a.setDate(a.getDate()+e.id*13%s),a.toISOString().split("T")[0]}function Rt(e){return Ft(e)&&Ct(e)&&!Pt(e)}function jt(e){if(!At(e))return[];const t=[];let i=e.id*17,s=new Date(X(x,-45));const a=new Date(X(x,-1));for(;s<=a;){const l=s.toISOString().split("T")[0],o=i%7-3;i=(i*31+17)%1e3,t.push({iso:l,mm:Math.max(8,15+o),real:!0,plotId:e.id,fromDetector:!0}),s.setDate(s.getDate()+5+i%3),i=(i*31+17)%1e3}return t}function Ne(e,t={}){const{allBtn:i=!1}=t,s=Me().map(a=>`
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${a.id}" />
      <span class="irr-msel-name">${qt(a)}</span>
    </label>`).join("");return`<div class="irr-msel" id="${e}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${s}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${i?'<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>':""}
    </div>
  </div>`}function He(e,t){const i=e.querySelector(`#${t}`);if(!i)return;const s=i.querySelector(".irr-msel-search"),a=i.querySelector(".irr-msel-count"),l=i.querySelector(".irr-msel-all-btn"),o=()=>{const n=i.querySelectorAll(".irr-msel-cb:checked").length;a.textContent=`${n} sélectionnée${n!==1?"s":""}`};s.addEventListener("input",()=>{const n=s.value.toLowerCase();i.querySelectorAll(".irr-msel-item").forEach($=>{$.style.display=$.querySelector(".irr-msel-name").textContent.toLowerCase().includes(n)?"":"none"})}),i.querySelectorAll(".irr-msel-cb").forEach(n=>n.addEventListener("change",o)),l==null||l.addEventListener("click",()=>{const n=[...i.querySelectorAll(".irr-msel-cb")].filter(S=>S.closest(".irr-msel-item").style.display!=="none"),$=n.some(S=>!S.checked);n.forEach(S=>{S.checked=$}),o()})}function Se(e,t){const i=e.querySelector(`#${t}`);return i?[...i.querySelectorAll(".irr-msel-cb:checked")].map(s=>+s.value):[]}function de(e,t){var a;(a=document.querySelector(".irr-save-confirm"))==null||a.remove();const i=document.createElement("div");i.className="irr-save-confirm",i.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(l=>`<div>${l}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(i);const s=()=>{i.remove(),H(!0)};i.addEventListener("click",l=>{l.target===i&&s()}),i.querySelector("#irr-confirm-close").addEventListener("click",s)}function Ze(e,t,i){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
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
    </div>`,document.body.appendChild(s);const a=()=>s.remove();s.addEventListener("click",o=>{o.target===s&&a()}),s.querySelector("#irr-cf-close").addEventListener("click",a),s.querySelector("#irr-cf-cancel").addEventListener("click",a),s.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{s.remove(),i()})}function zt(e,t,i){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
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
    </div>`,document.body.appendChild(s),s.addEventListener("click",l=>{l.target===s&&s.remove()}),s.querySelector("#irr-dc-close").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-ok").addEventListener("click",()=>{s.remove(),i()})}function Ot(e){if(e.length<2)return"";const t=[...e].sort((v,w)=>v.iso<w.iso?-1:1),i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=new Date(t[0].iso),a=new Date(t[t.length-1].iso),l=Math.max(a-s,1),o=500,n=24,$=5,S=5,A=n-S-4,h=A-S-3,b=n+$+13,O=b+2,j=S+2,z=v=>Math.round(j+(v-s)/l*(o-2*j)),F=v=>{const[,w,q]=v.split("-");return`${parseInt(q)}/${parseInt(w)}`},f=[],L=new Date(s.getFullYear(),s.getMonth()+1,1);for(;L<=a;)f.push(new Date(L)),L.setMonth(L.getMonth()+1);const T=f.map(v=>`<line x1="${z(v)}" y1="${n-6}" x2="${z(v)}" y2="${n+$+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),c=[s,...f,a],g=c.slice(0,-1).map((v,w)=>{const q=z(v),I=z(c[w+1]);return I-q<16?"":`<text x="${Math.round((q+I)/2)}" y="${h}" font-size="9" fill="#B0AEA8" text-anchor="middle">${i[v.getMonth()]}</text>`}).join(""),u=t.map(v=>{const w=v.real?"#FF8500":"#FFB705",q=z(new Date(v.iso)),I=`${ce(v.iso)} · ${v.mm} mm`;return`<circle cx="${q}" cy="${A}" r="${S}" fill="${w}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${q}" cy="${A}" r="${S+6}" fill="transparent" pointer-events="all" data-tip="${I}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${o}" height="${O}" viewBox="0 0 ${o} ${O}" style="width:100%;display:block">
      ${g}<rect x="0" y="${n}" width="${o}" height="${$}" rx="${$/2}" fill="#E0DED8"/>${T}${u}
      <text x="1" y="${b}" font-size="9" fill="#B0AEA8">${F(t[0].iso)}</text>
      <text x="${o-1}" y="${b}" font-size="9" fill="#B0AEA8" text-anchor="end">${F(t[t.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function Nt(e){const t=e.filter(l=>l.real),i=e.filter(l=>!l.real),s=t.reduce((l,o)=>l+o.mm,0),a=i.reduce((l,o)=>l+o.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${s} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${a} mm</div><div class="irr-pr-cumul-ct">${i.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${s+a} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function De(){var z,F;const e=document.getElementById("irr-vol-banner-wrap");if(!e)return;const t=qe?ae:lt;if(!t){e.innerHTML="";return}const i=new Set(_.filter(f=>f.orgId===t).map(f=>f.id));qe||_.forEach(f=>i.add(f.id));const s=new Map(_.map(f=>[f.id,f])),a=m.filter(f=>i.has(f.plotId)&&f.real).reduce((f,L)=>{var T;return f+se(L.mm,((T=s.get(L.plotId))==null?void 0:T.area)??0)},0),l=m.filter(f=>i.has(f.plotId)&&!f.real).reduce((f,L)=>{var T;return f+se(L.mm,((T=s.get(L.plotId))==null?void 0:T.area)??0)},0),o=a+l,n=Lt(t),$=n?Math.min(100,Math.round(a/n*100)):0,S=n?Math.min(100-$,Math.round(l/n*100)):0,A=$+S,h=kt(t),b=h?a*h:0,O=h?l*h:0,j=f=>f!=null?f.toLocaleString("fr-FR"):"";e.innerHTML=`
    <div class="irr-vol-banner">
      <div class="irr-vol-main">
        <div class="irr-vol-title">Volume irrigation</div>
        <div class="irr-vol-total">${J(o)}${n?` <span style="font-size:11px;font-weight:400;color:var(--txt3)">/ ${J(n)}</span>`:""}</div>
        <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${J(a)}</span> effectués · <span style="color:#FFB705">▪ ${J(l)}</span> planifiés</div>
        <div class="irr-vol-ctrl-row" style="margin-top:6px">
          <span class="irr-vol-ctrl-lbl">Volume limité :</span>
          <input class="irr-vol-input" id="irr-vol-max-inp" type="text" inputmode="numeric" placeholder="—" value="${j(n)}" />
          <span class="irr-vol-ctrl-lbl">m³</span>
        </div>
      </div>
      <div class="irr-vol-bar-wrap">
        <div class="irr-vol-bar-label">Consommation d'eau sur mon exploitation</div>
        ${n?"":'<div class="irr-vol-bar-nomax">Définissez un volume limité →</div>'}
        <div class="irr-vol-bar-bg">
          <div class="irr-vol-bar-real" style="width:${$}%"></div>
          <div class="irr-vol-bar-plan" style="width:${S}%"></div>
        </div>
        ${n?(()=>{const f=o-n;return f>0?`<div class="irr-vol-bar-pct" style="color:#E05252">Dépassement ${J(f)}</div>`:`<div class="irr-vol-bar-pct">${A}% consommé${A>=90?" ⚠":""}</div>`})():""}
      </div>
      <div class="irr-vol-controls">
        <div class="irr-vol-title">Budget saison</div>
        ${h?`<div class="irr-vol-total">${Oe(b+O)}</div>
             <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${Oe(b)}</span> effectués · <span style="color:#FFB705">▪ ${Oe(O)}</span> planifiés</div>`:'<div class="irr-vol-bar-nomax">Définissez un prix du m³ →</div>'}
        <div class="irr-vol-ctrl-row" style="margin-top:6px">
          <span class="irr-vol-ctrl-lbl">Prix du m³ :</span>
          <input class="irr-vol-input" id="irr-prix-m3-inp" type="text" inputmode="numeric" placeholder="—" value="${j(h)}" />
          <span class="irr-vol-ctrl-lbl">€</span>
        </div>
      </div>
    </div>`,(z=e.querySelector("#irr-vol-max-inp"))==null||z.addEventListener("change",f=>{const L=f.target.value.replace(/\s/g,"").replace(/\./g,"").replace(/,/g,""),T=L!==""?parseInt(L):null;T!==null&&(f.target.value=T.toLocaleString("fr-FR")),Ke(t,{volumeMax:T}),De()}),(F=e.querySelector("#irr-prix-m3-inp"))==null||F.addEventListener("change",f=>{const L=f.target.value.replace(/\s/g,"").replace(",","."),T=L!==""?parseFloat(L):null;T!==null&&(f.target.value=T.toLocaleString("fr-FR",{maximumFractionDigits:2})),Ke(t,{prixM3:T}),De()})}function H(e=!1){var w,q,I;De();const t=document.getElementById("irr-right"),i=X(x,60),s=[...m.map(r=>r.iso),...ve.filter(r=>r.iso<=i).map(r=>r.iso),...ne?[X(x,-45)]:[],...ke?[`${new Date(x).getFullYear()}-03-21`]:[],X(x,-1),i];if(!m.length&&!ve.length){t.innerHTML=`<div class="irr-pr-empty" style="padding-top:60px"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const a=[...s].sort()[0],l=m.length?[...m].map(r=>r.iso).sort().at(-1):null,o=l&&l>i?l:i,n=new Date(o);n.setMonth(n.getMonth()+ie);const $=n.toISOString().split("T")[0],S=e?null:((w=t.querySelector("#irr-gl-body"))==null?void 0:w.scrollLeft)??null,A=[];let h=new Date(a);const b=new Date($);for(;h<=b;)A.push(h.toISOString().split("T")[0]),h.setDate(h.getDate()+1);const O={};for(const r of ve)O[r.iso]=r.mm;function j(r){if(r<=x||r>X(x,13))return 0;const[,y,E]=r.split("-").map(Number),M=(y*17+E*13)%100;return M<65?0:3+M%9}function z(r,y,E){const M=`${r}_${y}`;if(Ie[M]!==void 0)return Ie[M];if(!E)return 0;const[,P,D]=y.split("-").map(Number);if((r*13+P*7+D*3)%100<12)return 0;const N=.75+(r*11+D*5)%50/100;return Math.round(E*N)}const F=X(x,7);let f="",L="",T=0,c=null;for(const r of A){const y=r===x,E=Xe(r),M=E===0,P=M?" irr-gl-th--week-end":"";c===null&&(c=_e(r)),T++;const D=oe&&r>x&&r<=F;f+=`<th class="irr-gl-th${y?" irr-gl-th--today":""}${P}${D?" irr-gl-th--advisor-range":""}"><span class="irr-gl-day-name">${Et[E]}</span>${wt(r)}</th>`;const V=r===A[A.length-1];(M||V)&&(L+=`<th class="irr-gl-week-hd${M?" irr-gl-th--week-end":""}" colspan="${T}">S${c}</th>`,T=0,c=null),oe&&r===F&&(f+='<th class="irr-gl-th irr-gl-th--advisor">Reco J+7</th>',L+='<th class="irr-gl-week-hd"></th>')}function g(r){const y=ne?jt(r):[],E=oe&&ct(r),M=Le&&Dt(r),P=ke&&Rt(r)?Bt(r):null;let D="";for(const p of A){const B=p===x,G=m.filter(R=>R.iso===p&&R.plotId===r.id),K=G.length===0?y.filter(R=>R.iso===p):[],C=G.filter(R=>!R.detectorDismissed).filter(R=>R.detectorConfirmed?ne&&ze:R.real?Be:Re),W=je?K:[],ge=[...C,...W],be=ge.reduce((R,te)=>R+te.mm,0),vt=ge.some(R=>R.real),mt=(r.id*7+3)%3-1,We=X(p,mt),ue=z(r.id,p,O[We]??j(We)),ft=`${r.id}_${p}`;let Ge="";if(ue&&$e){const R=at[ft]?'<span class="irr-gl-rain-corr-badge" title="Irrigation détectée corrigée en pluie">C</span>':"";Ge=p<=x?`<span class="irr-gl-rain irr-gl-rain--edit" data-rain-plotid="${r.id}" data-rain-iso="${p}" data-rain-mm="${ue}" title="Modifier la pluie">${ue} mm${R}</span>`:`<span class="irr-gl-rain">${ue} mm${R}</span>`}const Je=P===p?`<i class="bi bi-star-fill irr-gl-star" data-tip="Démarrage recommandé de votre saison d'irrigation"></i>`:"";let Te="";if(be){const R=vt?"#E07820":"#FFB705",te=C.map(le=>m.indexOf(le)).filter(le=>le>=0).join(","),he=W.length?'<span class="irr-gl-det-badge" title="Détecté automatiquement">D</span>':C.some(le=>le.detectorConfirmed)?'<span class="irr-gl-conf-badge" title="Irrigation confirmée">C</span>':"",Ae=W.reduce((le,yt)=>le+yt.mm,0),re=fe(r.id),Fe=re&&me?`<span class="irr-gl-dur-i" data-tip="Durée estimée : ${ot(se(be,r.area)/re)}">i</span>`:"";Te=`<span class="irr-gl-val irr-gl-irrig" style="color:${R};cursor:pointer" data-mm="${be}"${te?` draggable="true" data-plot-id="${r.id}"`:""}${te?` data-idxs="${te}" data-iso="${p}"`:` data-det-plotid="${r.id}" data-det-plotname="${r.name}" data-det-iso="${p}" data-det-mm="${Ae}" data-det-rain="${ue}"`}>${be} mm${he}${Fe}</span>${Je}`}else Te=`<button class="irr-gl-add" data-plot-id="${r.id}" data-plot-name="${r.name}" data-iso="${p}">+</button>${Je}`;let Qe="";M&&xe&&p<x&&(Qe=`<span class="irr-gl-res">${Tt(r,p)} mm</span>`);let ye="";$e&&(ye+=`<div class="irr-gl-slot">${Ge}</div>`),ye+=`<div class="irr-gl-slot">${Te}</div>`,M&&xe&&(ye+=`<div class="irr-gl-slot">${Qe}</div>`);const gt=Xe(p)===0,bt=E&&p>x&&p<=F;if(D+=`<td class="irr-gl-td${B?" irr-gl-td--today":""}${gt?" irr-gl-td--week-end":""}${bt?" irr-gl-td--advisor-range":""}" data-iso="${p}" data-plot-id="${r.id}">${ye}</td>`,oe&&p===F){let R="";if(E){const te=ut(r),he=m.filter(re=>re.plotId===r.id&&re.iso>x&&re.iso<=F).reduce((re,Fe)=>re+Fe.mm,0),Ae=he>=te?"#24B066":"#E05252";R=`<span class="irr-gl-advisor">${te} mm</span><span style="display:block;font-size:10px;font-weight:600;color:${Ae}">${he} mm planifié</span>`}D+=`<td class="irr-gl-td irr-gl-td--advisor">${R}</td>`}}const V=[r.crop,r.irrigation].filter(Boolean).join(" · "),N=r.area?`<span class="irr-gl-plot-area">(${r.area} ha)</span>`:"";let k="";const d=dt(r.id);if(d){const p=r.area??0,B=m.filter(C=>C.plotId===r.id&&C.real).reduce((C,W)=>C+se(W.mm,p),0),G=m.filter(C=>C.plotId===r.id&&!C.real).reduce((C,W)=>C+se(W.mm,p),0),K=B+G;if(K>0)if(K>d)k=`<span class="irr-gl-plot-deficit">Dépassement ${J(K-d)}</span>`;else{const C=Math.round(B/d*100),W=Math.min(100-C,Math.round(G/d*100));k=`<span class="irr-gl-plot-mini-bar"><span class="irr-gl-plot-mini-r" style="width:${C}%"></span><span class="irr-gl-plot-mini-p" style="width:${W}%"></span></span>`}}return`<tr data-row-plot="${r.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${r.id}">${r.name}</span>${N}${V?`<span class="irr-gl-plot-sub">${V}</span>`:""}${k}</td>${D}</tr>`}const u=Me().map(g).join(""),v=_.some(r=>fe(r.id));t.innerHTML=`
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-gl-legend">
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="real-irrig" ${Be?"checked":""}><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. effectuée</label>
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="plan-irrig" ${Re?"checked":""}><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</label>
          ${ne?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="detected" ${je?"checked":""}><span class="irr-gl-det-badge">D</span>&nbsp;Irrig. détectée</label><label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="confirmed" ${ze?"checked":""}><span class="irr-gl-conf-badge">C</span>&nbsp;Irrig. corrigée</label>`:""}
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="rain" ${$e?"checked":""}><span class="irr-gl-dot" style="background:#3A7FC1"></span>Pluie</label>
          ${ne?'<span class="irr-gl-filter-item"><span class="irr-gl-rain-corr-badge" style="margin-left:0">C</span>&nbsp;Pluie corrigée (ex-irrig. détectée)</span>':""}
          ${Le?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="reservoir" ${xe?"checked":""}><span class="irr-gl-dot" style="background:#9E9E9E"></span>Réservoir</label>`:""}
          ${v?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="duration" ${me?"checked":""}><span class="irr-gl-dur-i">i</span>&nbsp;Durées</label>`:""}
        </div>
        <div class="irr-gl-scroll-top" id="irr-gl-scroll-top">
          <div class="irr-gl-scroll-inner" id="irr-gl-scroll-inner"></div>
        </div>
      </div>
      <div class="irr-gl-body" id="irr-gl-body">
        <table class="irr-gl-table" id="irr-gl-table">
          <thead id="irr-gl-thead">
            <tr><th class="irr-gl-plot-hd irr-gl-week-corner"></th>${L}</tr>
            <tr><th class="irr-gl-plot-hd">Parcelles</th>${f}</tr>
          </thead>
          <tbody>${u}</tbody>
        </table>
      </div>
      <div class="irr-gl-nav-bar">
        <button class="irr-gl-nav-btn" id="irr-gl-prev-month" ${ie===0?"disabled":""}>‹ Mois précédent</button>
        <span class="irr-gl-nav-info">${ie>0?`+${ie} mois au-delà de la saison`:`Fin de saison : ${ce(o)}`}</span>
        <button class="irr-gl-nav-btn" id="irr-gl-next-month">Mois suivant ›</button>
      </div>
    </div>`,requestAnimationFrame(()=>{var P;const r=t.querySelector("#irr-gl-body"),y=t.querySelector("#irr-gl-table"),E=t.querySelector("#irr-gl-scroll-top"),M=t.querySelector("#irr-gl-scroll-inner");if(!(!r||!y||!E||!M))if(M.style.width=y.offsetWidth+"px",E.addEventListener("scroll",()=>{r.scrollLeft=E.scrollLeft}),r.addEventListener("scroll",()=>{E.scrollLeft=r.scrollLeft}),S!==null)r.scrollLeft=S,E.scrollLeft=S;else{const D=t.querySelector(".irr-gl-th--today");if(D){const N=D.previousElementSibling??D,k=((P=t.querySelector(".irr-gl-plot-hd"))==null?void 0:P.offsetWidth)??120,d=N.offsetLeft-k;r.scrollLeft=d,E.scrollLeft=d}}}),(q=t.querySelector("#irr-gl-prev-month"))==null||q.addEventListener("click",()=>{ie>0&&(ie--,H())}),(I=t.querySelector("#irr-gl-next-month"))==null||I.addEventListener("click",()=>{ie++,H()}),t.querySelectorAll(".irr-gl-filter").forEach(r=>{r.addEventListener("change",()=>{const y=r.dataset.filter;y==="real-irrig"?Be=r.checked:y==="plan-irrig"?Re=r.checked:y==="rain"?$e=r.checked:y==="detected"?je=r.checked:y==="confirmed"?ze=r.checked:y==="reservoir"?xe=r.checked:y==="duration"&&(me=r.checked),H()})}),t.querySelectorAll(".irr-gl-irrig").forEach(r=>{r.addEventListener("click",()=>{r.dataset.idxs?Ht(r.dataset.idxs.split(",").map(Number),r.dataset.iso):r.dataset.detPlotid&&_t(+r.dataset.detPlotid,r.dataset.detPlotname,r.dataset.detIso,+r.dataset.detMm,+r.dataset.detRain)})}),t.querySelectorAll(".irr-gl-rain--edit").forEach(r=>{r.addEventListener("click",()=>{Vt(+r.dataset.rainPlotid,r.dataset.rainIso,+r.dataset.rainMm)})}),t.querySelectorAll(".irr-gl-add").forEach(r=>{r.addEventListener("click",()=>{Qt(r.dataset.plotId,r.dataset.plotName,r.dataset.iso)})}),t.querySelectorAll('.irr-gl-irrig[draggable="true"]').forEach(r=>{r.addEventListener("dragstart",y=>{var E;Z={idxs:r.dataset.idxs.split(",").map(Number),iso:r.dataset.iso,plotId:+r.dataset.plotId},(E=r.closest(".irr-gl-td"))==null||E.classList.add("irr-gl-td--dragging"),y.dataTransfer.effectAllowed="move"}),r.addEventListener("dragend",()=>{var y;(y=r.closest(".irr-gl-td"))==null||y.classList.remove("irr-gl-td--dragging"),t.querySelectorAll(".irr-gl-td--dragover").forEach(E=>E.classList.remove("irr-gl-td--dragover")),Z=null})}),t.querySelectorAll(".irr-gl-td[data-iso]").forEach(r=>{r.addEventListener("dragover",y=>{Z&&(+r.dataset.plotId!==Z.plotId||r.dataset.iso===Z.iso||(y.preventDefault(),r.classList.add("irr-gl-td--dragover")))}),r.addEventListener("dragleave",()=>r.classList.remove("irr-gl-td--dragover")),r.addEventListener("drop",y=>{if(!Z||+r.dataset.plotId!==Z.plotId||r.dataset.iso===Z.iso)return;y.preventDefault();const{idxs:E,iso:M}=Z;E.forEach(P=>{m[P]&&(m[P].iso=r.dataset.iso)}),Y(),de("Irrigation déplacée",[`${ce(M)} → ${ce(r.dataset.iso)}`]),H()})}),t.querySelectorAll(".irr-gl-plot-link").forEach(r=>{r.addEventListener("click",()=>{const y=_.find(E=>String(E.id)===r.dataset.plotId);y&&pt(y)})})}function Ht(e,t){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();const i=document.createElement("div");i.className="irr-edit-overlay";const s=e.map(l=>m[l]).filter(Boolean);i.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${Q(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${s.map((l,o)=>{const n=_.find(S=>S.id===l.plotId);return`<div class="irr-edit-row">
            <span class="irr-edit-label">${n?n.name:`Parcelle ${l.plotId}`}</span>
            <input type="number" class="irr-edit-qty" data-i="${o}" value="${l.mm}" min="1" style="width:64px" />
            <span>mm</span>
            <button class="irr-edit-del" data-i="${o}">🗑</button>
          </div>`}).join("")}
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-edit-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-edit-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(i),i.addEventListener("click",l=>{l.target===i&&i.remove()}),i.querySelector("#irr-edit-close").addEventListener("click",()=>i.remove()),i.querySelector("#irr-edit-cancel").addEventListener("click",()=>i.remove()),i.querySelectorAll(".irr-edit-del").forEach(l=>{l.addEventListener("click",()=>{const o=s[+l.dataset.i],n=m.indexOf(o);n>=0&&(m.splice(n,1),Y()),i.remove()})}),i.querySelector("#irr-edit-save").addEventListener("click",()=>{i.querySelectorAll(".irr-edit-qty").forEach(l=>{const o=s[+l.dataset.i],n=parseInt(l.value);o&&n>0&&(o.mm=n,o.real=t<=x)}),Y(),i.remove()})}function Vt(e,t,i){var o;(o=document.querySelector(".irr-edit-overlay"))==null||o.remove();const s=_.find(n=>n.id===e),a=s?s.name:`Parcelle ${e}`,l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier la pluie — ${Q(t)}</span>
        <button class="irr-edit-close" id="irr-rain-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${a}</span>
          <input type="number" id="irr-rain-qty" value="${i}" min="0" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-rain-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-rain-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(l),l.addEventListener("click",n=>{n.target===l&&l.remove()}),l.querySelector("#irr-rain-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-save").addEventListener("click",()=>{const n=parseInt(l.querySelector("#irr-rain-qty").value);!isNaN(n)&&n>=0&&(Ie[`${e}_${t}`]=n),l.remove(),H()})}function _t(e,t,i,s,a=0){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();let l=s;const o=document.createElement("div");o.className="irr-edit-overlay",o.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigation détectée — ${Q(i)}</span>
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
    </div>`,document.body.appendChild(o),o.querySelector("#irr-det-ed-qty").addEventListener("input",$=>{const S=parseInt($.target.value);S>0&&(l=S)}),o.addEventListener("click",$=>{$.target===o&&o.remove()}),o.querySelector("#irr-det-ed-close").addEventListener("click",()=>o.remove()),o.querySelector("#irr-det-ed-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#irr-det-ed-del").addEventListener("click",()=>{m.push({iso:i,mm:0,real:!0,plotId:e,detectorDismissed:!0}),Y(),o.remove(),H()}),o.querySelector("#irr-det-ed-rain").addEventListener("click",()=>{m.push({iso:i,mm:0,real:!0,plotId:e,detectorDismissed:!0}),Ie[`${e}_${i}`]=a+l,at[`${e}_${i}`]=!0,Y(),o.remove(),H()}),o.querySelector("#irr-det-ed-save").addEventListener("click",()=>{m.push({iso:i,mm:l,real:i<=x,plotId:e,detectorConfirmed:!0}),Y(),o.remove(),H()})}function Ut(e,t){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();let i=e.iso,s=e.mm;const a=document.createElement("div");a.className="irr-edit-overlay",a.innerHTML=`
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
    </div>`,document.body.appendChild(a),a.addEventListener("click",o=>{o.target===a&&a.remove()}),a.querySelector("#irr-di-close").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#irr-di-date").addEventListener("change",o=>{i=o.target.value}),a.querySelector("#irr-di-qty").addEventListener("input",o=>{const n=parseInt(o.target.value);n>0&&(s=n)}),a.querySelector("#irr-di-del").addEventListener("click",()=>{const o=m.indexOf(e);o>=0&&m.splice(o,1),Y(),a.remove(),t()}),a.querySelector("#irr-di-save").addEventListener("click",()=>{e.iso=i,e.mm=s,e.real=i<=x,Y(),a.remove(),t()})}function Yt(e,t){var L,T,c,g;const i=m.filter(u=>u.plotId===e&&u.fromStrategy&&u.seasonId),s=[...i].sort((u,v)=>u.iso<v.iso?-1:1),a=new Set(i.map(u=>u.seasonId));let l=((L=s[0])==null?void 0:L.iso)||x,o=((T=s[s.length-1])==null?void 0:T.iso)||X(x,90),n=((c=s[0])==null?void 0:c.mm)||10,$=s.length>=2?Math.max(1,Math.round((new Date(s[s.length-1].iso)-new Date(s[0].iso))/864e5/(s.length-1))):7;const S=l,A=o;let h="form";(g=document.querySelector(".irr-edit-overlay"))==null||g.remove();const b=document.createElement("div");b.className="irr-edit-overlay";function O(){if(!l||!o||$<=0)return[];const u=[],v=new Date(o);let w=new Date(l);for(;w<=v&&u.length<200;)u.push(w.toISOString().split("T")[0]),w.setDate(w.getDate()+$);return u}function j(){const u=O(),v=u.filter(w=>w>x).length;b.querySelector("#irr-ms-preview").textContent=u.length>0?`↗ ${u.length} irrigations · ${u.length*n} mm · dont ${v} à venir`:"Ajustez les dates et la fréquence"}function z(){return`
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
            <input type="number" id="irr-ms-qty" value="${n}" min="1" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
          </div>
          <div>
            <label style="font-size:12px;color:var(--txt3);display:block;margin-bottom:4px">Fréquence (jours)</label>
            <input type="number" id="irr-ms-freq" value="${$}" min="1" max="30" style="width:100%;padding:6px;border:1px solid var(--bdr2);border-radius:6px;font-size:13px">
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
      </div>`}function F(){const u=l!==S||o!==A,v=O();return`
      <div class="irr-edit-body">
        <div style="font-size:13px;color:var(--txt2);line-height:1.5;background:#FEF6E6;border:1px solid #F5D98B;border-radius:8px;padding:10px 12px">
          ${u?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées."}
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--txt3)">
          ${Q(l)} → ${Q(o)} · ${n} mm tous les ${$} jours · ${v.length} irrigations
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
        ${h==="form"?z():F()}
      </div>`,b.querySelector("#irr-ms-close").addEventListener("click",()=>b.remove()),h==="form"?(j(),b.querySelector("#irr-ms-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#irr-ms-debut").addEventListener("change",u=>{l=u.target.value,j()}),b.querySelector("#irr-ms-fin").addEventListener("change",u=>{o=u.target.value,j()}),b.querySelector("#irr-ms-qty").addEventListener("input",u=>{const v=parseInt(u.target.value);v>0&&(n=v,j())}),b.querySelector("#irr-ms-freq").addEventListener("input",u=>{const v=parseInt(u.target.value);v>0&&($=v,j())}),b.querySelector("#irr-ms-save").addEventListener("click",()=>{h="confirm",f()})):(b.querySelector("#irr-ms-back").addEventListener("click",()=>{h="form",f()}),b.querySelector("#irr-ms-confirm").addEventListener("click",()=>{const u=l!==S||o!==A,v=O(),w=u?v:v.filter(r=>r>x),q=m.filter(r=>!(r.plotId===e&&a.has(r.seasonId)&&(u||r.iso>x)));m.splice(0,m.length,...q);const I=et();for(const r of w)m.push({iso:r,mm:n,real:r<=x,plotId:e,fromStrategy:!0,seasonId:I});Y(),b.remove(),de("Saison modifiée",[`Début : ${Q(l)} · Fin : ${Q(o)}`,`${v.length} irrigations · ${n} mm · tous les ${$} j`,u?"Modifications appliquées à toute la saison.":"Modifications appliquées à partir de demain."]),t==null||t()}))}document.body.appendChild(b),f(),b.addEventListener("click",u=>{u.target===b&&b.remove()})}function Ye(e){var i;const t=document.getElementById("irr-right");t&&(t.querySelectorAll("[data-row-plot]").forEach(s=>s.classList.remove("irr-gl-row--active")),e&&((i=t.querySelector(`[data-row-plot="${e}"]`))==null||i.classList.add("irr-gl-row--active")))}function pt(e){const t=document.getElementById("irr-page"),i=document.getElementById("irr-detail");if(!(!t||!i)){if(i.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),i.style.display="none",i.dataset.plotId="";return}i.dataset.plotId=String(e.id),i.style.display="",t.classList.add("irr-has-detail"),Ye(String(e.id)),ee(e)}}const Wt=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],Gt=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];function Jt(e){const t=_e(x),i=x.slice(0,4),s=x.slice(0,7),a=e.filter(n=>n.iso.slice(0,4)===i&&_e(n.iso)===t).reduce((n,$)=>n+$.mm,0),l=e.filter(n=>n.iso.slice(0,7)===s).reduce((n,$)=>n+$.mm,0),o=Gt[parseInt(x.slice(5,7),10)-1];return`<div class="irr-pr-planned-totals">
    <div class="irr-pr-planned-hd">Total planifiées :</div>
    <div class="irr-pr-planned-row">· Semaine S${t} : <strong>${a} mm</strong></div>
    <div class="irr-pr-planned-row">· Mois ${o} : <strong>${l} mm</strong></div>
  </div>`}function ee(e){var w,q,I,r,y,E,M,P,D,V,N,k;const t=document.getElementById("irr-detail");if(!t)return;const i=((w=t.querySelector(".irr-pr-details"))==null?void 0:w.open)??!1;if(!nt(e)){t.style.display="",t.dataset.plotId=String(e.id),t.innerHTML=`
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
            ${tt.map(d=>`<option value="${d}"${d===(e.irrigation||"Non renseigné")?" selected":""}>${d}</option>`).join("")}
          </select>
          <button id="irr-det-type-save" class="btn-primary" style="margin-top:10px;width:100%;justify-content:center">Enregistrer</button>
        </div>
      </div>`,(q=t.querySelector("#irr-det-close"))==null||q.addEventListener("click",()=>{var d;(d=document.getElementById("irr-page"))==null||d.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Ye(null)}),(I=t.querySelector("#irr-det-type-save"))==null||I.addEventListener("click",()=>{const d=t.querySelector("#irr-det-type-sel").value;we(e.id,{irrigation:d}),e.irrigation=d,ee(e),H(!0)});return}const s=m.filter(d=>d.plotId===e.id),a=s.some(d=>d.fromStrategy&&d.seasonId),l=s.filter(d=>d.fromStrategy).sort((d,p)=>d.iso<p.iso?-1:1),o=(r=l[0])==null?void 0:r.iso,n=(y=l[l.length-1])==null?void 0:y.iso,$=new Set(s.filter(d=>d.fromStrategy&&d.seasonId).map(d=>d.seasonId)),S=o&&n?`<div><strong>Saison :</strong> ${ce(o)} → ${ce(n)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',A=s.filter(d=>d.real).sort((d,p)=>d.iso<p.iso?-1:1),h=s.filter(d=>!d.real).sort((d,p)=>d.iso<p.iso?-1:1),b=e.area??0,O=A.reduce((d,p)=>d+se(p.mm,b),0),j=h.reduce((d,p)=>d+se(p.mm,b),0),z=O+j,F=dt(e.id),f=F&&b?Math.min(100,Math.round(O/F*100)):0,L=F&&b?Math.min(100-f,Math.round(j/F*100)):0,T=f+L,c=`
    <div class="irr-det-vol">
      <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--bdr2)">
        <div class="irr-det-vol-row">
          <span class="irr-det-vol-lbl">Volume saison :</span>
          <strong style="font-size:13px">${J(z)}</strong>
        </div>
        ${b?`<div class="irr-det-vol-row" style="gap:8px;margin-top:3px">
          <span style="color:#FF8500;font-size:11px">▪ ${J(O)} effectués</span>
          <span style="color:#FFB705;font-size:11px">▪ ${J(j)} planifiés</span>
        </div>`:'<div class="irr-det-vol-lbl" style="color:var(--txt3);margin-top:3px">surface non renseignée</div>'}
      </div>
      <div class="irr-det-vol-row">
        <span class="irr-det-vol-lbl">Volume limité :</span>
        <input class="irr-det-vol-input" id="irr-det-vol-input" type="number" min="0" placeholder="—" value="${F??""}" />
        <span class="irr-det-vol-lbl">m³</span>
      </div>
      ${F&&b?`
      <div class="irr-det-vol-bar">
        <div style="width:${f}%;background:#FF8500;height:100%"></div>
        <div style="width:${L}%;background:#FFB705;height:100%"></div>
      </div>
      ${z>F?`<div class="irr-det-vol-note" style="color:#E05252">Dépassement ${J(z-F)}</div>`:`<div class="irr-det-vol-note">${T}% · ${J(F-z)} restants</div>`}`:""}
      <div class="irr-det-vol-row" style="margin-top:8px">
        <span class="irr-det-vol-lbl">Débit :</span>
        <input class="irr-det-vol-input" id="irr-det-debit-input" type="number" min="0" step="0.1" placeholder="—" value="${fe(e.id)??""}" />
        <span class="irr-det-vol-lbl">m³/h</span>
      </div>
      ${Ve?'<button class="irr-det-irrelis-sync-btn" id="irr-det-irrelis-sync"><i class="bi bi-arrow-repeat"></i> Synchroniser pluies et irrigations sur Irré-LIS</button>':""}
    </div>`,g=d=>{const p=m.indexOf(d),B=d.real?"#FF8500":"#FFB705",[,G,K]=d.iso.split("-"),C=`${parseInt(K)} ${Wt[parseInt(G)-1]}`,W=d.real?"Effectuée":"Planifiée",ge=d.detectorConfirmed?'<span class="irr-pr-det-tag">Détectée &amp; corrigée</span>':"";return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${B}"></div>
      <div class="irr-pr-date" style="color:${B};min-width:52px;font-size:13px;font-weight:600">${C}</div>
      <div class="irr-pr-info">
        <div class="irr-pr-status" style="color:${B}">${W}</div>
        ${ge}
      </div>
      <div class="irr-pr-mm" style="color:${B}">${d.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${p}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${p}" title="Supprimer">🗑</button>
    </div>`},u=a?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
      </div>
    </div>`:"",v=oe&&ct(e)?`<div style="margin:16px 16px 16px;padding:12px;background:#FFF4E6;border-radius:8px;border-left:3px solid #E07820">
         <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#E07820;margin-bottom:4px">Recommandations d'irrigation sur les 7 prochains jours</div>
         <div style="font-size:22px;font-weight:700;color:#E07820">${ut(e)} mm</div>
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
        ${Nt(s)}
        ${Jt(h)}
        ${Ot(s)}
        ${c}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${A.length?`
        <details class="irr-pr-details"${i||!h.length?" open":""}>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${A.length}</span></summary>
          <div>${A.map(g).join("")}</div>
        </details>`:""}
      ${v}
      ${h.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${h.length}</span></summary>
          <div>${h.map(g).join("")}</div>
        </details>`:""}
      ${s.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(E=t.querySelector("#irr-det-strat-toggle"))==null||E.addEventListener("click",()=>{const d=t.querySelector("#irr-det-strat-opts");d.style.display=d.style.display==="none"?"":"none"}),(M=t.querySelector("#irr-det-modify"))==null||M.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none",Yt(e.id,()=>{ee(e),H(!0)})}),(P=t.querySelector("#irr-det-stop"))==null||P.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const d=m.filter(p=>p.plotId===e.id&&$.has(p.seasonId)&&!p.real&&p.iso>x);m.splice(0,m.length,...m.filter(p=>!d.includes(p))),Y(),de("Saison arrêtée",[`${d.length} irrigation${d.length!==1?"s":""} future${d.length!==1?"s":""} supprimée${d.length!==1?"s":""}`,`Parcelle : ${e.name}`])}),(D=t.querySelector("#irr-det-del-all"))==null||D.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const d=m.filter(B=>B.plotId===e.id);if(!d.length)return;const p=d.some(B=>!B.fromStrategy);zt(`Supprimer toutes les irrigations de "${e.name}" ?`,`${d.length} irrigation${d.length!==1?"s":""} seront supprimées (passées et futures).`+(p?"<br><br>Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.":""),()=>{m.splice(0,m.length,...m.filter(B=>!d.includes(B))),Y(),de("Saison supprimée",[`${d.length} irrigation${d.length!==1?"s":""} supprimée${d.length!==1?"s":""}`,`Parcelle : ${e.name}`])})}),t.querySelectorAll(".irr-pr-edit").forEach(d=>{d.addEventListener("click",()=>{const p=m[+d.dataset.idx];p&&Ut(p,()=>{ee(e),H(!0)})})}),t.querySelectorAll(".irr-pr-del").forEach(d=>{d.addEventListener("click",()=>{const p=+d.dataset.idx;p>=0&&(m.splice(p,1),Y(),ee(e))})}),(V=t.querySelector("#irr-det-vol-input"))==null||V.addEventListener("change",d=>{const p=d.target.value!==""?parseInt(d.target.value):null;we(e.id,{volumeMaxM3:p}),ee(e),De()}),(N=t.querySelector("#irr-det-debit-input"))==null||N.addEventListener("change",d=>{const p=d.target.value!==""?parseFloat(d.target.value):null;we(e.id,{debitM3h:p}),ee(e),It(e.id),Mt()}),(k=t.querySelector("#irr-det-irrelis-sync"))==null||k.addEventListener("click",()=>{de("Synchronisation Irré-LIS",[`Pluies et irrigations synchronisées pour « ${e.name} »`])}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var d;(d=document.getElementById("irr-page"))==null||d.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Ye(null)})}function Qt(e,t,i,s=10){var A;(A=document.querySelector(".irr-edit-overlay"))==null||A.remove();const a=_.find(h=>h.id===+e),l=a&&!nt(a),o=l?`
    <div class="irr-edit-row">
      <span class="irr-edit-label">Type d'irrigation</span>
      <select id="irr-qa-type-sel" style="flex:1;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
        ${tt.map(h=>`<option value="${h}"${h===(a.irrigation||"Non renseigné")?" selected":""}>${h}</option>`).join("")}
      </select>
    </div>`:"",n=document.createElement("div");n.className="irr-edit-overlay",n.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${Q(i)}</span>
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
    </div>`,document.body.appendChild(n),n.addEventListener("click",h=>{h.target===n&&n.remove()}),n.querySelector("#irr-qa-close").addEventListener("click",()=>n.remove()),n.querySelector("#irr-qa-cancel").addEventListener("click",()=>n.remove());const $=n.querySelector("#irr-qa-save"),S=n.querySelector("#irr-qa-type-sel");if(S){const h=()=>{$.disabled=Ue.has(S.value)};h(),S.addEventListener("change",h)}$.addEventListener("click",()=>{if(S){const b=S.value;if(Ue.has(b))return;we(a.id,{irrigation:b}),a.irrigation=b}const h=parseInt(n.querySelector("#irr-qa-qty").value)||10;m.push({iso:i,mm:h,real:i<=x,plotId:+e,fromStrategy:!1}),Y(),n.remove(),H(!0)})}function pe(){var o,n,$,S,A,h,b,O,j,z,F,f,L,T;const e=document.getElementById("irr-left"),t=[...rt].filter(c=>c.id!==100).sort((c,g)=>c.name.localeCompare(g.name)),i=qe?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${ae===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${ae===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${t.map(c=>`<option value="${c.id}"${c.id===ae?" selected":""}>${c.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"",s=document.getElementById("irr-page");if(Ce){s==null||s.classList.add("irr-left-collapsed"),e.innerHTML=`
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Déplier le panneau">›</button>`,e.querySelector("#irr-left-toggle").addEventListener("click",()=>{Ce=!1,pe()});return}s==null||s.classList.remove("irr-left-collapsed"),e.innerHTML=`
    <div class="irr-lc-collapse-bar">
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Réduire le panneau">‹</button>
    </div>
    <div class="irr-lc-scroll">
    ${i}

    <button class="irr-lc-btn${U==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${U==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${Ne("irr-s-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Date</label>
        <input type="date" class="irr-lc-input" id="irr-s-date" value="${x}" />
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
        ${Ne("irr-sa-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Début</label>
        <input type="date" class="irr-lc-input" id="irr-sa-debut" value="${x}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Fin</label>
        <input type="date" class="irr-lc-input" id="irr-sa-fin" value="${X(x,120)}" />
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
        ${Ne("irr-ex-scope",{allBtn:!0})}
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Du</label>
        <input type="date" class="irr-lc-input" id="irr-ex-start" value="${m.length?[...m].sort((c,g)=>c.iso<g.iso?-1:1)[0].iso:x}" />
      </div>
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Au</label>
        <input type="date" class="irr-lc-input" id="irr-ex-end" value="${m.length?[...m].sort((c,g)=>c.iso>g.iso?-1:1)[0].iso:x}" />
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

    <button class="irr-lc-btn${U==="sync"?" irr-lc-btn--active":""}" data-action="sync">
      <i class="bi bi-arrow-left-right"></i><span>Synchroniser les irrigations</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${U==="sync"?"":" irr-lc-form--hidden"}" id="irr-form-sync">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Outils tiers</label>
        <div class="irr-sync-list">
          ${St.map(c=>`
            <label class="irr-lc-cb-row">
              <input type="checkbox" class="irr-sync-cb" data-tool="${c.id}"${Pe[c.id]?" checked":""} />
              <span>${c.label}</span>
            </label>
            <div class="irr-sync-creds" id="irr-sync-creds-${c.id}" style="${Pe[c.id]?"":"display:none"}">
              ${c.authType==="apikey"?`<input type="text" class="irr-lc-input" placeholder="Clé d'API">`:`<input type="text" class="irr-lc-input" placeholder="Identifiant" style="margin-bottom:6px">
                   <input type="password" class="irr-lc-input" placeholder="Mot de passe">`}
            </div>
          `).join("")}
        </div>
      </div>
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
        <input type="checkbox" id="irr-feat-detector" ${ne?"checked":""} />
        <span>Irrigation Detector</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-irrelis" ${Ve?"checked":""} />
        <span>Irré-LIS</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-premier-apport" ${ke?"checked":""} />
        <span>Premier apport</span>
      </label>
    </div>
  `,(o=e.querySelector("#irr-left-toggle"))==null||o.addEventListener("click",()=>{Ce=!0,pe()}),U==="saisie"&&He(e,"irr-s-scope"),U==="saison"&&He(e,"irr-sa-scope"),U==="export"&&He(e,"irr-ex-scope"),(n=e.querySelector("#irr-org-select"))==null||n.addEventListener("change",c=>{const g=c.target.value;ae=g===""?null:parseInt(g),_=ae===null?Ee:Ee.filter(u=>u.orgId===ae),ie=0,pe(),H()}),e.querySelectorAll(".irr-lc-btn").forEach(c=>{c.addEventListener("click",()=>{const g=c.dataset.action;U=U===g?null:g,pe()})}),e.querySelectorAll(".irr-sync-cb").forEach(c=>{c.addEventListener("change",()=>{const g=c.dataset.tool;Pe[g]=c.checked;const u=e.querySelector(`#irr-sync-creds-${g}`);u&&(u.style.display=c.checked?"":"none")})});function a(){var y,E,M,P;const c=(y=e.querySelector("#irr-sa-debut"))==null?void 0:y.value,g=(E=e.querySelector("#irr-sa-fin"))==null?void 0:E.value,u=parseInt((M=e.querySelector("#irr-sa-qty"))==null?void 0:M.value)||0,v=parseInt((P=e.querySelector("#irr-sa-freq"))==null?void 0:P.value)||0,w=e.querySelector("#irr-sa-preview");if(!w)return;if(!c||!g||v<=0){w.textContent="—";return}let q=0,I=new Date(c),r=new Date(g);for(;I<=r&&q<200;)q++,I.setDate(I.getDate()+v);if(q>0){const V=Se(e,"irr-sa-scope").reduce((d,p)=>{const B=Me().find(G=>G.id===p);return d+((B==null?void 0:B.area)??0)},0),N=V>0?Math.round(q*u*V*10):0,k=N>0?` · ${N.toLocaleString("fr-FR")} m³`:"";w.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${q} irrigations · ${q*u} mm${k}</span>`}else w.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'}U==="saison"&&(a(),($=e.querySelector("#irr-sa-debut"))==null||$.addEventListener("change",a),(S=e.querySelector("#irr-sa-fin"))==null||S.addEventListener("change",a),(A=e.querySelector("#irr-sa-qty"))==null||A.addEventListener("input",a),(h=e.querySelector("#irr-sa-freq"))==null||h.addEventListener("input",a)),(b=e.querySelector("#irr-ex-dl"))==null||b.addEventListener("click",()=>{const c=e.querySelector("#irr-ex-start").value,g=e.querySelector("#irr-ex-end").value,u=e.querySelector("#irr-ex-irrig").checked,v=e.querySelector("#irr-ex-rain").checked,w=Se(e,"irr-ex-scope"),q=w.length>0?_.filter(k=>w.includes(k.id)):Me(),I=new Set;if(u)for(const k of m)k.iso>=c&&k.iso<=g&&I.add(k.iso);if(v)for(const k of ve)k.iso>=c&&k.iso<=g&&I.add(k.iso);const r=[...I].sort(),y={};if(v)for(const k of ve)y[k.iso]=k.mm;const E=["Date",...q.map(k=>k.name+(v?" (irrig.)":""))].join(";"),M=r.map(k=>{const d=q.map(p=>{const B=u?m.filter(C=>C.iso===k&&C.plotId===p.id).reduce((C,W)=>C+W.mm,0):0,G=v?y[k]??0:0,K=B+G;return K>0?K:""});return[k,...d].join(";")}),P=[E,...M].join(`
`),D=new Blob([P],{type:"text/csv;charset=utf-8;"}),V=URL.createObjectURL(D),N=Object.assign(document.createElement("a"),{href:V,download:`irrigations_${c}_${g}.csv`});document.body.appendChild(N),N.click(),setTimeout(()=>{URL.revokeObjectURL(V),N.remove()},100)}),(O=e.querySelector("#irr-s-save"))==null||O.addEventListener("click",()=>{const c=Se(e,"irr-s-scope"),g=e.querySelector("#irr-s-date").value,u=parseInt(e.querySelector("#irr-s-qty").value)||0,v=e.querySelector("#irr-s-err");if(!c.length||!g||!u){v&&(v.style.display="");return}v&&(v.style.display="none");const w=g>x,q=()=>{c.forEach(r=>{m.push({iso:g,mm:u,real:!w,plotId:r,fromStrategy:!1})}),Y(),de("Irrigation enregistrée",[`Date : ${Q(g)}`,`Quantité : ${u} mm`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},I=m.filter(r=>c.includes(r.plotId)&&r.iso===g);if(I.length){Ze(I.length,`${c.length} parcelle(s)`,()=>{m.splice(0,m.length,...m.filter(r=>!(c.includes(r.plotId)&&r.iso===g))),q()});return}q()});const l=()=>{H();const c=document.getElementById("irr-detail"),g=c==null?void 0:c.dataset.plotId;if(g){const u=_.find(v=>String(v.id)===g);u&&ee(u)}};(j=e.querySelector("#irr-feat-advisor"))==null||j.addEventListener("change",c=>{oe=c.target.checked,l()}),(z=e.querySelector("#irr-feat-reservoir"))==null||z.addEventListener("change",c=>{Le=c.target.checked,l()}),(F=e.querySelector("#irr-feat-detector"))==null||F.addEventListener("change",c=>{ne=c.target.checked,l()}),(f=e.querySelector("#irr-feat-irrelis"))==null||f.addEventListener("change",c=>{Ve=c.target.checked,l()}),(L=e.querySelector("#irr-feat-premier-apport"))==null||L.addEventListener("change",c=>{ke=c.target.checked,l()}),(T=e.querySelector("#irr-sa-save"))==null||T.addEventListener("click",()=>{const c=Se(e,"irr-sa-scope"),g=e.querySelector("#irr-sa-debut").value,u=e.querySelector("#irr-sa-fin").value,v=parseInt(e.querySelector("#irr-sa-qty").value)||10,w=parseInt(e.querySelector("#irr-sa-freq").value)||7,q=e.querySelector("#irr-sa-err");if(!c.length||!g||!u){q&&(q.style.display="");return}q&&(q.style.display="none");const I=[];let r=new Date(g),y=new Date(u);for(;r<=y&&I.length<200;)I.push(new Date(r)),r.setDate(r.getDate()+w);const E=et(),M=()=>{c.forEach(D=>{I.forEach(V=>{const N=V.toISOString().slice(0,10);m.push({iso:N,mm:v,real:N<=x,plotId:D,fromStrategy:!0,seasonId:E})})}),Y(),de("Saison enregistrée",[`Début : ${Q(g)} · Fin : ${Q(u)}`,`${I.length} irrigations · ${v} mm · tous les ${w} j`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},P=m.filter(D=>c.includes(D.plotId)&&D.iso>=g&&D.iso<=u);if(P.length){Ze(P.length,`${c.length} parcelle(s)`,()=>{m.splice(0,m.length,...m.filter(D=>!(c.includes(D.plotId)&&D.iso>=g&&D.iso<=u))),M()});return}M()})}function Kt(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const i=t.target.closest("[data-tip]");if(!i){e.style.opacity="0";return}e.textContent=i.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var i;(i=t.relatedTarget)!=null&&i.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search),t=e.get("plot"),i=e.get("action");if((i==="saisie"||i==="saison")&&(U=i),$t(),Kt(),pe(),H(),window.addEventListener("irrig-updated",()=>{H();const s=document.getElementById("irr-detail"),a=s==null?void 0:s.dataset.plotId;if(!a)return;const l=_.find(o=>String(o.id)===a);l&&ee(l)}),t){const s=_.find(a=>a.id===+t);s&&(pt(s),setTimeout(()=>{var a;(a=document.querySelector(`[data-row-plot="${t}"]`))==null||a.scrollIntoView({behavior:"auto",block:"center"})},50),(i==="saisie"||i==="saison")&&setTimeout(()=>{const a=i==="saisie"?"irr-s-scope":"irr-sa-scope",l=document.querySelector(`#${a} input[value="${t}"]`);l&&(l.checked=!0,l.dispatchEvent(new Event("change")))},50))}});
