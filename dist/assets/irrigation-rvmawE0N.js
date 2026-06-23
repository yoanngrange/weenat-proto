import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{I as m,R as ve,g as Ze,s as U}from"./irrigations-C22Dtsoo.js";import{I as et}from"./constants-CJpDUNiw.js";import{p as Ee}from"./plots-DhtWL7s_.js";import{s as yt}from"./sensors-CRadjF8G.js";import{o as tt}from"./orgs-DnFmvGlp.js";import{u as ht}from"./breadcrumb-CzFWtd6d.js";import{d as we,e as Ge,c as rt,f as it}from"./store-CX9wca99.js";import"./irrigation-web-9Pu0RyDl.js";const $t=["CHP-15/30","CHP-30/60","CHP-60/90"],st=1,qe=(localStorage.getItem("menuRole")||"admin-reseau")==="admin-reseau";let ne=null,_=qe?Ee:Ee.filter(e=>e.orgId===st);const x=new Date().toISOString().split("T")[0];let W=null,Ce=!1,ie=0,oe=!1,Le=!1,ae=!1,Ne=!1,ke=!1;const Ie={},lt={};let Pe=!0,Be=!0,$e=!0,Re=!0,je=!0,xe=!0,me=!0,Z=null;function X(e,t){const i=new Date(e);return i.setDate(i.getDate()+t),i.toISOString().split("T")[0]}function G(e){const t=["jan.","fév.","mar.","avr.","mai","jun.","jul.","aoû.","sep.","oct.","nov.","déc."],[,i,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(i)-1]} ${e.split("-")[0]}`}function ce(e){const t=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],[,i,s]=e.split("-");return`${parseInt(s)} ${t[parseInt(i)-1]}`}function xt(e){const[,t,i]=e.split("-");return`${i}/${t}`}const St=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];function Ke(e){const[t,i,s]=e.split("-").map(Number);return new Date(Date.UTC(t,i-1,s)).getUTCDay()}function Ve(e){const[t,i,s]=e.split("-").map(Number),n=new Date(Date.UTC(t,i-1,s)),l=n.getUTCDay()||7;n.setUTCDate(n.getUTCDate()+4-l);const o=new Date(Date.UTC(n.getUTCFullYear(),0,1));return Math.ceil(((n-o)/864e5+1)/7)}function wt(e){return[e.name+(e.area?` (${e.area} ha)`:""),e.crop,e.irrigation].filter(Boolean).join(" — ")}const _e=new Set(["Non irrigué","Non renseigné",""]);function nt(e){return!!e.irrigation&&!_e.has(e.irrigation)}function se(e,t){return Math.round(e*(t??0)*10)}function Q(e){return e.toLocaleString("fr-FR")+" m³"}function at(e){const t=Math.floor(e),i=Math.round((e-t)*60);return t<=0?`${i} min`:i>0?`${t} h ${String(i).padStart(2,"0")} min`:`${t} h`}function Et(e){var i;const t=it(e).volumeMax;return t!==void 0?t:((i=tt.find(s=>s.id===e))==null?void 0:i.volumeMax)??null}function qt(e){const t=it(e).prixM3;return t!==void 0?t:.37}function ze(e){return e.toLocaleString("fr-FR",{maximumFractionDigits:0})+" €"}function ot(e){return rt(e).volumeMaxM3??null}function fe(e){return rt(e).debitM3h??null}function Lt(e){const t=fe(e),i=_.find(s=>s.id===e);document.querySelectorAll(`tr[data-row-plot="${e}"] .irr-gl-irrig`).forEach(s=>{var o;(o=s.querySelector(".irr-gl-dur-i"))==null||o.remove();const n=+s.dataset.mm;if(!t||!n||!me)return;const l=document.createElement("span");l.className="irr-gl-dur-i",l.dataset.tip=`Durée estimée : ${at(se(n,i==null?void 0:i.area)/t)}`,l.textContent="i",s.appendChild(l)})}function kt(){const e=document.querySelector(".irr-gl-legend");if(!e)return;const t=_.some(s=>fe(s.id)),i=e.querySelector('.irr-gl-filter[data-filter="duration"]');if(t&&!i){const s=document.createElement("label");s.className="irr-gl-filter-item",s.innerHTML='<input type="checkbox" class="irr-gl-filter" data-filter="duration" checked><span class="irr-gl-dur-i">i</span>&nbsp;Durées',e.appendChild(s),s.querySelector(".irr-gl-filter").addEventListener("change",n=>{me=n.target.checked,N()})}else!t&&i&&i.closest(".irr-gl-filter-item").remove()}function Me(){return[..._].sort((e,t)=>e.name.localeCompare(t.name,"fr"))}function dt(e){return e.id%3===2}function ct(e){return 25+e.id*7%20}function It(e){return e.id%9===2}function Mt(e,t){const[,i,s]=t.split("-").map(Number);return Math.min(65,Math.max(5,30+(e.id*7+i*3+s*2)%30))}function Dt(e){const t=(e.irrigation||"").toLowerCase();return["rampe","pivot","enrouleur"].some(i=>t.includes(i))}function At(e){return yt.some(t=>(t.parcelIds||[]).includes(e.id)&&(t.model.startsWith("CAPA-")||$t.includes(t.model)))}function Ft(e){return!!e.crop}function Tt(e){return m.some(t=>t.plotId===e.id&&t.fromStrategy)}function Ct(e){const t=new Date(x).getFullYear(),i=new Date(t,2,21),s=47,n=new Date(i);return n.setDate(n.getDate()+e.id*13%s),n.toISOString().split("T")[0]}function Pt(e){return At(e)&&Ft(e)&&!Tt(e)}function Bt(e){if(!Dt(e))return[];const t=[];let i=e.id*17,s=new Date(X(x,-45));const n=new Date(X(x,-1));for(;s<=n;){const l=s.toISOString().split("T")[0],o=i%7-3;i=(i*31+17)%1e3,t.push({iso:l,mm:Math.max(8,15+o),real:!0,plotId:e.id,fromDetector:!0}),s.setDate(s.getDate()+5+i%3),i=(i*31+17)%1e3}return t}function Oe(e,t={}){const{allBtn:i=!1}=t,s=Me().map(n=>`
    <label class="irr-msel-item">
      <input type="checkbox" class="irr-msel-cb" value="${n.id}" />
      <span class="irr-msel-name">${wt(n)}</span>
    </label>`).join("");return`<div class="irr-msel" id="${e}">
    <input type="text" class="irr-msel-search" placeholder="Rechercher…" />
    <div class="irr-msel-list">${s}</div>
    <div class="irr-msel-footer">
      <span class="irr-msel-count">0 sélectionnée(s)</span>
      ${i?'<button class="irr-msel-all-btn" type="button">Tout sélectionner</button>':""}
    </div>
  </div>`}function He(e,t){const i=e.querySelector(`#${t}`);if(!i)return;const s=i.querySelector(".irr-msel-search"),n=i.querySelector(".irr-msel-count"),l=i.querySelector(".irr-msel-all-btn"),o=()=>{const a=i.querySelectorAll(".irr-msel-cb:checked").length;n.textContent=`${a} sélectionnée${a!==1?"s":""}`};s.addEventListener("input",()=>{const a=s.value.toLowerCase();i.querySelectorAll(".irr-msel-item").forEach($=>{$.style.display=$.querySelector(".irr-msel-name").textContent.toLowerCase().includes(a)?"":"none"})}),i.querySelectorAll(".irr-msel-cb").forEach(a=>a.addEventListener("change",o)),l==null||l.addEventListener("click",()=>{const a=[...i.querySelectorAll(".irr-msel-cb")].filter(S=>S.closest(".irr-msel-item").style.display!=="none"),$=a.some(S=>!S.checked);a.forEach(S=>{S.checked=$}),o()})}function Se(e,t){const i=e.querySelector(`#${t}`);return i?[...i.querySelectorAll(".irr-msel-cb:checked")].map(s=>+s.value):[]}function de(e,t){var n;(n=document.querySelector(".irr-save-confirm"))==null||n.remove();const i=document.createElement("div");i.className="irr-save-confirm",i.innerHTML=`
    <div class="irr-save-confirm-box">
      <div class="irr-save-confirm-icon">✓</div>
      <div class="irr-save-confirm-title">${e}</div>
      <div class="irr-save-confirm-lines">${t.map(l=>`<div>${l}</div>`).join("")}</div>
      <button class="irr-pm-btn irr-pm-btn--pri" id="irr-confirm-close">Fermer</button>
    </div>`,document.body.appendChild(i);const s=()=>{i.remove(),N(!0)};i.addEventListener("click",l=>{l.target===i&&s()}),i.querySelector("#irr-confirm-close").addEventListener("click",s)}function Xe(e,t,i){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
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
    </div>`,document.body.appendChild(s);const n=()=>s.remove();s.addEventListener("click",o=>{o.target===s&&n()}),s.querySelector("#irr-cf-close").addEventListener("click",n),s.querySelector("#irr-cf-cancel").addEventListener("click",n),s.querySelector("#irr-cf-overwrite").addEventListener("click",()=>{s.remove(),i()})}function Rt(e,t,i){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const s=document.createElement("div");s.className="irr-edit-overlay",s.innerHTML=`
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
    </div>`,document.body.appendChild(s),s.addEventListener("click",l=>{l.target===s&&s.remove()}),s.querySelector("#irr-dc-close").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#irr-dc-ok").addEventListener("click",()=>{s.remove(),i()})}function jt(e){if(e.length<2)return"";const t=[...e].sort((v,w)=>v.iso<w.iso?-1:1),i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],s=new Date(t[0].iso),n=new Date(t[t.length-1].iso),l=Math.max(n-s,1),o=500,a=24,$=5,S=5,F=a-S-4,h=F-S-3,b=a+$+13,O=b+2,j=S+2,z=v=>Math.round(j+(v-s)/l*(o-2*j)),T=v=>{const[,w,q]=v.split("-");return`${parseInt(q)}/${parseInt(w)}`},f=[],L=new Date(s.getFullYear(),s.getMonth()+1,1);for(;L<=n;)f.push(new Date(L)),L.setMonth(L.getMonth()+1);const A=f.map(v=>`<line x1="${z(v)}" y1="${a-6}" x2="${z(v)}" y2="${a+$+6}" stroke="#C0BEB8" stroke-width="1"/>`).join(""),c=[s,...f,n],g=c.slice(0,-1).map((v,w)=>{const q=z(v),I=z(c[w+1]);return I-q<16?"":`<text x="${Math.round((q+I)/2)}" y="${h}" font-size="9" fill="#B0AEA8" text-anchor="middle">${i[v.getMonth()]}</text>`}).join(""),u=t.map(v=>{const w=v.real?"#FF8500":"#FFB705",q=z(new Date(v.iso)),I=`${ce(v.iso)} · ${v.mm} mm`;return`<circle cx="${q}" cy="${F}" r="${S}" fill="${w}" stroke="#fff" stroke-width="1.5" pointer-events="none"/>
    <circle cx="${q}" cy="${F}" r="${S+6}" fill="transparent" pointer-events="all" data-tip="${I}"/>`}).join("");return`<div class="irr-pg-timeline">
    <svg width="${o}" height="${O}" viewBox="0 0 ${o} ${O}" style="width:100%;display:block">
      ${g}<rect x="0" y="${a}" width="${o}" height="${$}" rx="${$/2}" fill="#E0DED8"/>${A}${u}
      <text x="1" y="${b}" font-size="9" fill="#B0AEA8">${T(t[0].iso)}</text>
      <text x="${o-1}" y="${b}" font-size="9" fill="#B0AEA8" text-anchor="end">${T(t[t.length-1].iso)}</text>
    </svg>
    <div class="irr-pg-tl-legend">
      <span><span class="irr-pg-dot" style="background:#FF8500"></span>Effectuée</span>
      <span><span class="irr-pg-dot" style="background:#FFB705"></span>Planifiée</span>
    </div>
  </div>`}function zt(e){const t=e.filter(l=>l.real),i=e.filter(l=>!l.real),s=t.reduce((l,o)=>l+o.mm,0),n=i.reduce((l,o)=>l+o.mm,0);return`<div class="irr-pr-cumuls">
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Effectuées</div><div class="irr-pr-cumul-val" style="color:#FF8500">${s} mm</div><div class="irr-pr-cumul-ct">${t.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Planifiées</div><div class="irr-pr-cumul-val" style="color:#FFB705">${n} mm</div><div class="irr-pr-cumul-ct">${i.length} irrig.</div></div>
    <div class="irr-pr-sep"></div>
    <div class="irr-pr-cumul"><div class="irr-pr-cumul-lbl">Total</div><div class="irr-pr-cumul-val">${s+n} mm</div><div class="irr-pr-cumul-ct">${e.length} irrig.</div></div>
  </div>`}function De(){var z,T;const e=document.getElementById("irr-vol-banner-wrap");if(!e)return;const t=qe?ne:st;if(!t){e.innerHTML="";return}const i=new Set(_.filter(f=>f.orgId===t).map(f=>f.id));qe||_.forEach(f=>i.add(f.id));const s=new Map(_.map(f=>[f.id,f])),n=m.filter(f=>i.has(f.plotId)&&f.real).reduce((f,L)=>{var A;return f+se(L.mm,((A=s.get(L.plotId))==null?void 0:A.area)??0)},0),l=m.filter(f=>i.has(f.plotId)&&!f.real).reduce((f,L)=>{var A;return f+se(L.mm,((A=s.get(L.plotId))==null?void 0:A.area)??0)},0),o=n+l,a=Et(t),$=a?Math.min(100,Math.round(n/a*100)):0,S=a?Math.min(100-$,Math.round(l/a*100)):0,F=$+S,h=qt(t),b=h?n*h:0,O=h?l*h:0,j=f=>f!=null?f.toLocaleString("fr-FR"):"";e.innerHTML=`
    <div class="irr-vol-banner">
      <div class="irr-vol-main">
        <div class="irr-vol-title">Volume irrigation</div>
        <div class="irr-vol-total">${Q(o)}${a?` <span style="font-size:11px;font-weight:400;color:var(--txt3)">/ ${Q(a)}</span>`:""}</div>
        <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${Q(n)}</span> effectués · <span style="color:#FFB705">▪ ${Q(l)}</span> planifiés</div>
        <div class="irr-vol-ctrl-row" style="margin-top:6px">
          <span class="irr-vol-ctrl-lbl">Volume limité :</span>
          <input class="irr-vol-input" id="irr-vol-max-inp" type="text" inputmode="numeric" placeholder="—" value="${j(a)}" />
          <span class="irr-vol-ctrl-lbl">m³</span>
        </div>
      </div>
      <div class="irr-vol-bar-wrap">
        <div class="irr-vol-bar-label">Consommation d'eau sur mon exploitation</div>
        ${a?"":'<div class="irr-vol-bar-nomax">Définissez un volume limité →</div>'}
        <div class="irr-vol-bar-bg">
          <div class="irr-vol-bar-real" style="width:${$}%"></div>
          <div class="irr-vol-bar-plan" style="width:${S}%"></div>
        </div>
        ${a?(()=>{const f=o-a;return f>0?`<div class="irr-vol-bar-pct" style="color:#E05252">Dépassement ${Q(f)}</div>`:`<div class="irr-vol-bar-pct">${F}% consommé${F>=90?" ⚠":""}</div>`})():""}
      </div>
      <div class="irr-vol-controls">
        <div class="irr-vol-title">Budget saison</div>
        ${h?`<div class="irr-vol-total">${ze(b+O)}</div>
             <div class="irr-vol-sub"><span style="color:#FF8500">▪ ${ze(b)}</span> effectués · <span style="color:#FFB705">▪ ${ze(O)}</span> planifiés</div>`:'<div class="irr-vol-bar-nomax">Définissez un prix du m³ →</div>'}
        <div class="irr-vol-ctrl-row" style="margin-top:6px">
          <span class="irr-vol-ctrl-lbl">Prix du m³ :</span>
          <input class="irr-vol-input" id="irr-prix-m3-inp" type="text" inputmode="numeric" placeholder="—" value="${j(h)}" />
          <span class="irr-vol-ctrl-lbl">€</span>
        </div>
      </div>
    </div>`,(z=e.querySelector("#irr-vol-max-inp"))==null||z.addEventListener("change",f=>{const L=f.target.value.replace(/\s/g,"").replace(/\./g,"").replace(/,/g,""),A=L!==""?parseInt(L):null;A!==null&&(f.target.value=A.toLocaleString("fr-FR")),Ge(t,{volumeMax:A}),De()}),(T=e.querySelector("#irr-prix-m3-inp"))==null||T.addEventListener("change",f=>{const L=f.target.value.replace(/\s/g,"").replace(",","."),A=L!==""?parseFloat(L):null;A!==null&&(f.target.value=A.toLocaleString("fr-FR",{maximumFractionDigits:2})),Ge(t,{prixM3:A}),De()})}function N(e=!1){var w,q,I;De();const t=document.getElementById("irr-right"),i=X(x,60),s=[...m.map(r=>r.iso),...ve.filter(r=>r.iso<=i).map(r=>r.iso),...ae?[X(x,-45)]:[],...ke?[`${new Date(x).getFullYear()}-03-21`]:[],X(x,-1),i];if(!m.length&&!ve.length){t.innerHTML=`<div class="irr-pr-empty" style="padding-top:60px"><i class="bi bi-table"></i><p>Il manque des données de pluie ou d'irrigations sur au moins une parcelle pour afficher cette vue</p></div>`;return}const n=[...s].sort()[0],l=m.length?[...m].map(r=>r.iso).sort().at(-1):null,o=l&&l>i?l:i,a=new Date(o);a.setMonth(a.getMonth()+ie);const $=a.toISOString().split("T")[0],S=e?null:((w=t.querySelector("#irr-gl-body"))==null?void 0:w.scrollLeft)??null,F=[];let h=new Date(n);const b=new Date($);for(;h<=b;)F.push(h.toISOString().split("T")[0]),h.setDate(h.getDate()+1);const O={};for(const r of ve)O[r.iso]=r.mm;function j(r){if(r<=x||r>X(x,13))return 0;const[,y,E]=r.split("-").map(Number),M=(y*17+E*13)%100;return M<65?0:3+M%9}function z(r,y,E){const M=`${r}_${y}`;if(Ie[M]!==void 0)return Ie[M];if(!E)return 0;const[,P,D]=y.split("-").map(Number);if((r*13+P*7+D*3)%100<12)return 0;const H=.75+(r*11+D*5)%50/100;return Math.round(E*H)}const T=X(x,7);let f="",L="",A=0,c=null;for(const r of F){const y=r===x,E=Ke(r),M=E===0,P=M?" irr-gl-th--week-end":"";c===null&&(c=Ve(r)),A++;const D=oe&&r>x&&r<=T;f+=`<th class="irr-gl-th${y?" irr-gl-th--today":""}${P}${D?" irr-gl-th--advisor-range":""}"><span class="irr-gl-day-name">${St[E]}</span>${xt(r)}</th>`;const V=r===F[F.length-1];(M||V)&&(L+=`<th class="irr-gl-week-hd${M?" irr-gl-th--week-end":""}" colspan="${A}">S${c}</th>`,A=0,c=null),oe&&r===T&&(f+='<th class="irr-gl-th irr-gl-th--advisor">Reco J+7</th>',L+='<th class="irr-gl-week-hd"></th>')}function g(r){const y=ae?Bt(r):[],E=oe&&dt(r),M=Le&&It(r),P=ke&&Pt(r)?Ct(r):null;let D="";for(const p of F){const B=p===x,J=m.filter(R=>R.iso===p&&R.plotId===r.id),K=J.length===0?y.filter(R=>R.iso===p):[],C=J.filter(R=>!R.detectorDismissed).filter(R=>R.detectorConfirmed?ae&&je:R.real?Pe:Be),Y=Re?K:[],ge=[...C,...Y],be=ge.reduce((R,te)=>R+te.mm,0),pt=ge.some(R=>R.real),vt=(r.id*7+3)%3-1,Ye=X(p,vt),ue=z(r.id,p,O[Ye]??j(Ye)),mt=`${r.id}_${p}`;let We="";if(ue&&$e){const R=lt[mt]?'<span class="irr-gl-rain-corr-badge" title="Irrigation détectée corrigée en pluie">C</span>':"";We=p<=x?`<span class="irr-gl-rain irr-gl-rain--edit" data-rain-plotid="${r.id}" data-rain-iso="${p}" data-rain-mm="${ue}" title="Modifier la pluie">${ue} mm${R}</span>`:`<span class="irr-gl-rain">${ue} mm${R}</span>`}const Je=P===p?`<i class="bi bi-star-fill irr-gl-star" data-tip="Démarrage recommandé de votre saison d'irrigation"></i>`:"";let Ae="";if(be){const R=pt?"#E07820":"#FFB705",te=C.map(le=>m.indexOf(le)).filter(le=>le>=0).join(","),he=Y.length?'<span class="irr-gl-det-badge" title="Détecté automatiquement">D</span>':C.some(le=>le.detectorConfirmed)?'<span class="irr-gl-conf-badge" title="Irrigation confirmée">C</span>':"",Fe=Y.reduce((le,bt)=>le+bt.mm,0),re=fe(r.id),Te=re&&me?`<span class="irr-gl-dur-i" data-tip="Durée estimée : ${at(se(be,r.area)/re)}">i</span>`:"";Ae=`<span class="irr-gl-val irr-gl-irrig" style="color:${R};cursor:pointer" data-mm="${be}"${te?` draggable="true" data-plot-id="${r.id}"`:""}${te?` data-idxs="${te}" data-iso="${p}"`:` data-det-plotid="${r.id}" data-det-plotname="${r.name}" data-det-iso="${p}" data-det-mm="${Fe}" data-det-rain="${ue}"`}>${be} mm${he}${Te}</span>${Je}`}else Ae=`<button class="irr-gl-add" data-plot-id="${r.id}" data-plot-name="${r.name}" data-iso="${p}">+</button>${Je}`;let Qe="";M&&xe&&p<x&&(Qe=`<span class="irr-gl-res">${Mt(r,p)} mm</span>`);let ye="";$e&&(ye+=`<div class="irr-gl-slot">${We}</div>`),ye+=`<div class="irr-gl-slot">${Ae}</div>`,M&&xe&&(ye+=`<div class="irr-gl-slot">${Qe}</div>`);const ft=Ke(p)===0,gt=E&&p>x&&p<=T;if(D+=`<td class="irr-gl-td${B?" irr-gl-td--today":""}${ft?" irr-gl-td--week-end":""}${gt?" irr-gl-td--advisor-range":""}" data-iso="${p}" data-plot-id="${r.id}">${ye}</td>`,oe&&p===T){let R="";if(E){const te=ct(r),he=m.filter(re=>re.plotId===r.id&&re.iso>x&&re.iso<=T).reduce((re,Te)=>re+Te.mm,0),Fe=he>=te?"#24B066":"#E05252";R=`<span class="irr-gl-advisor">${te} mm</span><span style="display:block;font-size:10px;font-weight:600;color:${Fe}">${he} mm planifié</span>`}D+=`<td class="irr-gl-td irr-gl-td--advisor">${R}</td>`}}const V=[r.crop,r.irrigation].filter(Boolean).join(" · "),H=r.area?`<span class="irr-gl-plot-area">(${r.area} ha)</span>`:"";let k="";const d=ot(r.id);if(d){const p=r.area??0,B=m.filter(C=>C.plotId===r.id&&C.real).reduce((C,Y)=>C+se(Y.mm,p),0),J=m.filter(C=>C.plotId===r.id&&!C.real).reduce((C,Y)=>C+se(Y.mm,p),0),K=B+J;if(K>0)if(K>d)k=`<span class="irr-gl-plot-deficit">Dépassement ${Q(K-d)}</span>`;else{const C=Math.round(B/d*100),Y=Math.min(100-C,Math.round(J/d*100));k=`<span class="irr-gl-plot-mini-bar"><span class="irr-gl-plot-mini-r" style="width:${C}%"></span><span class="irr-gl-plot-mini-p" style="width:${Y}%"></span></span>`}}return`<tr data-row-plot="${r.id}"><td class="irr-gl-plot"><span class="irr-gl-plot-link" data-plot-id="${r.id}">${r.name}</span>${H}${V?`<span class="irr-gl-plot-sub">${V}</span>`:""}${k}</td>${D}</tr>`}const u=Me().map(g).join(""),v=_.some(r=>fe(r.id));t.innerHTML=`
    <div class="irr-gl-outer">
      <div class="irr-gl-sticky-hd" id="irr-gl-sticky-hd">
        <div class="irr-gl-legend">
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="real-irrig" ${Pe?"checked":""}><span class="irr-gl-dot" style="background:#E07820"></span>Irrig. effectuée</label>
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="plan-irrig" ${Be?"checked":""}><span class="irr-gl-dot" style="background:#FFB705"></span>Irrig. planifiée</label>
          ${ae?`<label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="detected" ${Re?"checked":""}><span class="irr-gl-det-badge">D</span>&nbsp;Irrig. détectée</label><label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="confirmed" ${je?"checked":""}><span class="irr-gl-conf-badge">C</span>&nbsp;Irrig. corrigée</label>`:""}
          <label class="irr-gl-filter-item"><input type="checkbox" class="irr-gl-filter" data-filter="rain" ${$e?"checked":""}><span class="irr-gl-dot" style="background:#3A7FC1"></span>Pluie</label>
          ${ae?'<span class="irr-gl-filter-item"><span class="irr-gl-rain-corr-badge" style="margin-left:0">C</span>&nbsp;Pluie corrigée (ex-irrig. détectée)</span>':""}
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
    </div>`,requestAnimationFrame(()=>{var P;const r=t.querySelector("#irr-gl-body"),y=t.querySelector("#irr-gl-table"),E=t.querySelector("#irr-gl-scroll-top"),M=t.querySelector("#irr-gl-scroll-inner");if(!(!r||!y||!E||!M))if(M.style.width=y.offsetWidth+"px",E.addEventListener("scroll",()=>{r.scrollLeft=E.scrollLeft}),r.addEventListener("scroll",()=>{E.scrollLeft=r.scrollLeft}),S!==null)r.scrollLeft=S,E.scrollLeft=S;else{const D=t.querySelector(".irr-gl-th--today");if(D){const H=D.previousElementSibling??D,k=((P=t.querySelector(".irr-gl-plot-hd"))==null?void 0:P.offsetWidth)??120,d=H.offsetLeft-k;r.scrollLeft=d,E.scrollLeft=d}}}),(q=t.querySelector("#irr-gl-prev-month"))==null||q.addEventListener("click",()=>{ie>0&&(ie--,N())}),(I=t.querySelector("#irr-gl-next-month"))==null||I.addEventListener("click",()=>{ie++,N()}),t.querySelectorAll(".irr-gl-filter").forEach(r=>{r.addEventListener("change",()=>{const y=r.dataset.filter;y==="real-irrig"?Pe=r.checked:y==="plan-irrig"?Be=r.checked:y==="rain"?$e=r.checked:y==="detected"?Re=r.checked:y==="confirmed"?je=r.checked:y==="reservoir"?xe=r.checked:y==="duration"&&(me=r.checked),N()})}),t.querySelectorAll(".irr-gl-irrig").forEach(r=>{r.addEventListener("click",()=>{r.dataset.idxs?Ot(r.dataset.idxs.split(",").map(Number),r.dataset.iso):r.dataset.detPlotid&&Nt(+r.dataset.detPlotid,r.dataset.detPlotname,r.dataset.detIso,+r.dataset.detMm,+r.dataset.detRain)})}),t.querySelectorAll(".irr-gl-rain--edit").forEach(r=>{r.addEventListener("click",()=>{Ht(+r.dataset.rainPlotid,r.dataset.rainIso,+r.dataset.rainMm)})}),t.querySelectorAll(".irr-gl-add").forEach(r=>{r.addEventListener("click",()=>{Jt(r.dataset.plotId,r.dataset.plotName,r.dataset.iso)})}),t.querySelectorAll('.irr-gl-irrig[draggable="true"]').forEach(r=>{r.addEventListener("dragstart",y=>{var E;Z={idxs:r.dataset.idxs.split(",").map(Number),iso:r.dataset.iso,plotId:+r.dataset.plotId},(E=r.closest(".irr-gl-td"))==null||E.classList.add("irr-gl-td--dragging"),y.dataTransfer.effectAllowed="move"}),r.addEventListener("dragend",()=>{var y;(y=r.closest(".irr-gl-td"))==null||y.classList.remove("irr-gl-td--dragging"),t.querySelectorAll(".irr-gl-td--dragover").forEach(E=>E.classList.remove("irr-gl-td--dragover")),Z=null})}),t.querySelectorAll(".irr-gl-td[data-iso]").forEach(r=>{r.addEventListener("dragover",y=>{Z&&(+r.dataset.plotId!==Z.plotId||r.dataset.iso===Z.iso||(y.preventDefault(),r.classList.add("irr-gl-td--dragover")))}),r.addEventListener("dragleave",()=>r.classList.remove("irr-gl-td--dragover")),r.addEventListener("drop",y=>{if(!Z||+r.dataset.plotId!==Z.plotId||r.dataset.iso===Z.iso)return;y.preventDefault();const{idxs:E,iso:M}=Z;E.forEach(P=>{m[P]&&(m[P].iso=r.dataset.iso)}),U(),de("Irrigation déplacée",[`${ce(M)} → ${ce(r.dataset.iso)}`]),N()})}),t.querySelectorAll(".irr-gl-plot-link").forEach(r=>{r.addEventListener("click",()=>{const y=_.find(E=>String(E.id)===r.dataset.plotId);y&&ut(y)})})}function Ot(e,t){var n;(n=document.querySelector(".irr-edit-overlay"))==null||n.remove();const i=document.createElement("div");i.className="irr-edit-overlay";const s=e.map(l=>m[l]).filter(Boolean);i.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier l'irrigation du ${G(t)}</span>
        <button class="irr-edit-close" id="irr-edit-close">×</button>
      </div>
      <div class="irr-edit-body">
        ${s.map((l,o)=>{const a=_.find(S=>S.id===l.plotId);return`<div class="irr-edit-row">
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
    </div>`,document.body.appendChild(i),i.addEventListener("click",l=>{l.target===i&&i.remove()}),i.querySelector("#irr-edit-close").addEventListener("click",()=>i.remove()),i.querySelector("#irr-edit-cancel").addEventListener("click",()=>i.remove()),i.querySelectorAll(".irr-edit-del").forEach(l=>{l.addEventListener("click",()=>{const o=s[+l.dataset.i],a=m.indexOf(o);a>=0&&(m.splice(a,1),U()),i.remove()})}),i.querySelector("#irr-edit-save").addEventListener("click",()=>{i.querySelectorAll(".irr-edit-qty").forEach(l=>{const o=s[+l.dataset.i],a=parseInt(l.value);o&&a>0&&(o.mm=a,o.real=t<=x)}),U(),i.remove()})}function Ht(e,t,i){var o;(o=document.querySelector(".irr-edit-overlay"))==null||o.remove();const s=_.find(a=>a.id===e),n=s?s.name:`Parcelle ${e}`,l=document.createElement("div");l.className="irr-edit-overlay",l.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Modifier la pluie — ${G(t)}</span>
        <button class="irr-edit-close" id="irr-rain-close">×</button>
      </div>
      <div class="irr-edit-body">
        <div class="irr-edit-row">
          <span class="irr-edit-label">${n}</span>
          <input type="number" id="irr-rain-qty" value="${i}" min="0" style="width:64px" />
          <span>mm</span>
        </div>
      </div>
      <div class="irr-edit-ft">
        <button class="iw-btn iw-btn--sec" id="irr-rain-cancel">Annuler</button>
        <button class="iw-btn iw-btn--pri" id="irr-rain-save">Enregistrer</button>
      </div>
    </div>`,document.body.appendChild(l),l.addEventListener("click",a=>{a.target===l&&l.remove()}),l.querySelector("#irr-rain-close").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#irr-rain-save").addEventListener("click",()=>{const a=parseInt(l.querySelector("#irr-rain-qty").value);!isNaN(a)&&a>=0&&(Ie[`${e}_${t}`]=a),l.remove(),N()})}function Nt(e,t,i,s,n=0){var a;(a=document.querySelector(".irr-edit-overlay"))==null||a.remove();let l=s;const o=document.createElement("div");o.className="irr-edit-overlay",o.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Irrigation détectée — ${G(i)}</span>
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
    </div>`,document.body.appendChild(o),o.querySelector("#irr-det-ed-qty").addEventListener("input",$=>{const S=parseInt($.target.value);S>0&&(l=S)}),o.addEventListener("click",$=>{$.target===o&&o.remove()}),o.querySelector("#irr-det-ed-close").addEventListener("click",()=>o.remove()),o.querySelector("#irr-det-ed-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#irr-det-ed-del").addEventListener("click",()=>{m.push({iso:i,mm:0,real:!0,plotId:e,detectorDismissed:!0}),U(),o.remove(),N()}),o.querySelector("#irr-det-ed-rain").addEventListener("click",()=>{m.push({iso:i,mm:0,real:!0,plotId:e,detectorDismissed:!0}),Ie[`${e}_${i}`]=n+l,lt[`${e}_${i}`]=!0,U(),o.remove(),N()}),o.querySelector("#irr-det-ed-save").addEventListener("click",()=>{m.push({iso:i,mm:l,real:i<=x,plotId:e,detectorConfirmed:!0}),U(),o.remove(),N()})}function Vt(e,t){var l;(l=document.querySelector(".irr-edit-overlay"))==null||l.remove();let i=e.iso,s=e.mm;const n=document.createElement("div");n.className="irr-edit-overlay",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),n.addEventListener("click",o=>{o.target===n&&n.remove()}),n.querySelector("#irr-di-close").addEventListener("click",()=>n.remove()),n.querySelector("#irr-di-cancel").addEventListener("click",()=>n.remove()),n.querySelector("#irr-di-date").addEventListener("change",o=>{i=o.target.value}),n.querySelector("#irr-di-qty").addEventListener("input",o=>{const a=parseInt(o.target.value);a>0&&(s=a)}),n.querySelector("#irr-di-del").addEventListener("click",()=>{const o=m.indexOf(e);o>=0&&m.splice(o,1),U(),n.remove(),t()}),n.querySelector("#irr-di-save").addEventListener("click",()=>{e.iso=i,e.mm=s,e.real=i<=x,U(),n.remove(),t()})}function _t(e,t){var L,A,c,g;const i=m.filter(u=>u.plotId===e&&u.fromStrategy&&u.seasonId),s=[...i].sort((u,v)=>u.iso<v.iso?-1:1),n=new Set(i.map(u=>u.seasonId));let l=((L=s[0])==null?void 0:L.iso)||x,o=((A=s[s.length-1])==null?void 0:A.iso)||X(x,90),a=((c=s[0])==null?void 0:c.mm)||10,$=s.length>=2?Math.max(1,Math.round((new Date(s[s.length-1].iso)-new Date(s[0].iso))/864e5/(s.length-1))):7;const S=l,F=o;let h="form";(g=document.querySelector(".irr-edit-overlay"))==null||g.remove();const b=document.createElement("div");b.className="irr-edit-overlay";function O(){if(!l||!o||$<=0)return[];const u=[],v=new Date(o);let w=new Date(l);for(;w<=v&&u.length<200;)u.push(w.toISOString().split("T")[0]),w.setDate(w.getDate()+$);return u}function j(){const u=O(),v=u.filter(w=>w>x).length;b.querySelector("#irr-ms-preview").textContent=u.length>0?`↗ ${u.length} irrigations · ${u.length*a} mm · dont ${v} à venir`:"Ajustez les dates et la fréquence"}function z(){return`
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
      </div>`}function T(){const u=l!==S||o!==F,v=O();return`
      <div class="irr-edit-body">
        <div style="font-size:13px;color:var(--txt2);line-height:1.5;background:#FEF6E6;border:1px solid #F5D98B;border-radius:8px;padding:10px 12px">
          ${u?"Les dates de la saison ont été modifiées : ces changements s'appliqueront à <strong>toute la saison</strong>, y compris les irrigations déjà effectuées.":"La quantité et/ou la fréquence ont été modifiées sans changer les dates : ces changements ne s'appliqueront <strong>qu'aux irrigations à partir de demain</strong>. Les irrigations déjà effectuées ou prévues jusqu'à aujourd'hui restent inchangées."}
        </div>
        <div style="margin-top:12px;font-size:12px;color:var(--txt3)">
          ${G(l)} → ${G(o)} · ${a} mm tous les ${$} jours · ${v.length} irrigations
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
        ${h==="form"?z():T()}
      </div>`,b.querySelector("#irr-ms-close").addEventListener("click",()=>b.remove()),h==="form"?(j(),b.querySelector("#irr-ms-cancel").addEventListener("click",()=>b.remove()),b.querySelector("#irr-ms-debut").addEventListener("change",u=>{l=u.target.value,j()}),b.querySelector("#irr-ms-fin").addEventListener("change",u=>{o=u.target.value,j()}),b.querySelector("#irr-ms-qty").addEventListener("input",u=>{const v=parseInt(u.target.value);v>0&&(a=v,j())}),b.querySelector("#irr-ms-freq").addEventListener("input",u=>{const v=parseInt(u.target.value);v>0&&($=v,j())}),b.querySelector("#irr-ms-save").addEventListener("click",()=>{h="confirm",f()})):(b.querySelector("#irr-ms-back").addEventListener("click",()=>{h="form",f()}),b.querySelector("#irr-ms-confirm").addEventListener("click",()=>{const u=l!==S||o!==F,v=O(),w=u?v:v.filter(r=>r>x),q=m.filter(r=>!(r.plotId===e&&n.has(r.seasonId)&&(u||r.iso>x)));m.splice(0,m.length,...q);const I=Ze();for(const r of w)m.push({iso:r,mm:a,real:r<=x,plotId:e,fromStrategy:!0,seasonId:I});U(),b.remove(),de("Saison modifiée",[`Début : ${G(l)} · Fin : ${G(o)}`,`${v.length} irrigations · ${a} mm · tous les ${$} j`,u?"Modifications appliquées à toute la saison.":"Modifications appliquées à partir de demain."]),t==null||t()}))}document.body.appendChild(b),f(),b.addEventListener("click",u=>{u.target===b&&b.remove()})}function Ue(e){var i;const t=document.getElementById("irr-right");t&&(t.querySelectorAll("[data-row-plot]").forEach(s=>s.classList.remove("irr-gl-row--active")),e&&((i=t.querySelector(`[data-row-plot="${e}"]`))==null||i.classList.add("irr-gl-row--active")))}function ut(e){const t=document.getElementById("irr-page"),i=document.getElementById("irr-detail");if(!(!t||!i)){if(i.dataset.plotId===String(e.id)&&t.classList.contains("irr-has-detail")){t.classList.remove("irr-has-detail"),i.style.display="none",i.dataset.plotId="";return}i.dataset.plotId=String(e.id),i.style.display="",t.classList.add("irr-has-detail"),Ue(String(e.id)),ee(e)}}const Ut=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"],Yt=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];function Wt(e){const t=Ve(x),i=x.slice(0,4),s=x.slice(0,7),n=e.filter(a=>a.iso.slice(0,4)===i&&Ve(a.iso)===t).reduce((a,$)=>a+$.mm,0),l=e.filter(a=>a.iso.slice(0,7)===s).reduce((a,$)=>a+$.mm,0),o=Yt[parseInt(x.slice(5,7),10)-1];return`<div class="irr-pr-planned-totals">
    <div class="irr-pr-planned-hd">Total planifiées :</div>
    <div class="irr-pr-planned-row">· Semaine S${t} : <strong>${n} mm</strong></div>
    <div class="irr-pr-planned-row">· Mois ${o} : <strong>${l} mm</strong></div>
  </div>`}function ee(e){var w,q,I,r,y,E,M,P,D,V,H,k;const t=document.getElementById("irr-detail");if(!t)return;const i=((w=t.querySelector(".irr-pr-details"))==null?void 0:w.open)??!1;if(!nt(e)){t.style.display="",t.dataset.plotId=String(e.id),t.innerHTML=`
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
            ${et.map(d=>`<option value="${d}"${d===(e.irrigation||"Non renseigné")?" selected":""}>${d}</option>`).join("")}
          </select>
          <button id="irr-det-type-save" class="btn-primary" style="margin-top:10px;width:100%;justify-content:center">Enregistrer</button>
        </div>
      </div>`,(q=t.querySelector("#irr-det-close"))==null||q.addEventListener("click",()=>{var d;(d=document.getElementById("irr-page"))==null||d.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Ue(null)}),(I=t.querySelector("#irr-det-type-save"))==null||I.addEventListener("click",()=>{const d=t.querySelector("#irr-det-type-sel").value;we(e.id,{irrigation:d}),e.irrigation=d,ee(e),N(!0)});return}const s=m.filter(d=>d.plotId===e.id),n=s.some(d=>d.fromStrategy&&d.seasonId),l=s.filter(d=>d.fromStrategy).sort((d,p)=>d.iso<p.iso?-1:1),o=(r=l[0])==null?void 0:r.iso,a=(y=l[l.length-1])==null?void 0:y.iso,$=new Set(s.filter(d=>d.fromStrategy&&d.seasonId).map(d=>d.seasonId)),S=o&&a?`<div><strong>Saison :</strong> ${ce(o)} → ${ce(a)}</div>`:'<div style="color:var(--txt3)">Pas de saison enregistrée</div>',F=s.filter(d=>d.real).sort((d,p)=>d.iso<p.iso?-1:1),h=s.filter(d=>!d.real).sort((d,p)=>d.iso<p.iso?-1:1),b=e.area??0,O=F.reduce((d,p)=>d+se(p.mm,b),0),j=h.reduce((d,p)=>d+se(p.mm,b),0),z=O+j,T=ot(e.id),f=T&&b?Math.min(100,Math.round(O/T*100)):0,L=T&&b?Math.min(100-f,Math.round(j/T*100)):0,A=f+L,c=`
    <div class="irr-det-vol">
      <div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--bdr2)">
        <div class="irr-det-vol-row">
          <span class="irr-det-vol-lbl">Volume saison :</span>
          <strong style="font-size:13px">${Q(z)}</strong>
        </div>
        ${b?`<div class="irr-det-vol-row" style="gap:8px;margin-top:3px">
          <span style="color:#FF8500;font-size:11px">▪ ${Q(O)} effectués</span>
          <span style="color:#FFB705;font-size:11px">▪ ${Q(j)} planifiés</span>
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
        <div style="width:${L}%;background:#FFB705;height:100%"></div>
      </div>
      ${z>T?`<div class="irr-det-vol-note" style="color:#E05252">Dépassement ${Q(z-T)}</div>`:`<div class="irr-det-vol-note">${A}% · ${Q(T-z)} restants</div>`}`:""}
      <div class="irr-det-vol-row" style="margin-top:8px">
        <span class="irr-det-vol-lbl">Débit :</span>
        <input class="irr-det-vol-input" id="irr-det-debit-input" type="number" min="0" step="0.1" placeholder="—" value="${fe(e.id)??""}" />
        <span class="irr-det-vol-lbl">m³/h</span>
      </div>
      ${Ne?'<button class="irr-det-irrelis-sync-btn" id="irr-det-irrelis-sync"><i class="bi bi-arrow-repeat"></i> Synchroniser pluies et irrigations sur Irré-LIS</button>':""}
    </div>`,g=d=>{const p=m.indexOf(d),B=d.real?"#FF8500":"#FFB705",[,J,K]=d.iso.split("-"),C=`${parseInt(K)} ${Ut[parseInt(J)-1]}`,Y=d.real?"Effectuée":"Planifiée",ge=d.detectorConfirmed?'<span class="irr-pr-det-tag">Détectée &amp; corrigée</span>':"";return`<div class="irr-pr-item">
      <div class="irr-pr-stripe" style="background:${B}"></div>
      <div class="irr-pr-date" style="color:${B};min-width:52px;font-size:13px;font-weight:600">${C}</div>
      <div class="irr-pr-info">
        <div class="irr-pr-status" style="color:${B}">${Y}</div>
        ${ge}
      </div>
      <div class="irr-pr-mm" style="color:${B}">${d.mm} mm</div>
      <button class="irr-pr-edit" data-idx="${p}" title="Modifier">✎</button>
      <button class="irr-pr-del"  data-idx="${p}" title="Supprimer">🗑</button>
    </div>`},u=n?`
    <div class="irr-det-strat-bar">
      <button class="irr-det-strat-btn" id="irr-det-strat-toggle">Modifier la saison ▾</button>
      <div class="irr-det-strat-opts" id="irr-det-strat-opts" style="display:none">
        <button class="irr-det-strat-opt" id="irr-det-modify"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/></svg><div>Modifier la saison <span>début, fin, quantité, fréquence</span></div></button>
        <button class="irr-det-strat-opt" id="irr-det-stop"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Arrêter la saison<span>supprime les irrigations futures de cette parcelle</span></div></button>
        <button class="irr-det-strat-opt irr-det-strat-opt--del" id="irr-det-del-all"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="flex-shrink:0"><path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg><div>Supprimer la saison<span>supprime toutes les irrigations de cette parcelle</span></div></button>
      </div>
    </div>`:"",v=oe&&dt(e)?`<div style="margin:16px 16px 16px;padding:12px;background:#FFF4E6;border-radius:8px;border-left:3px solid #E07820">
         <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#E07820;margin-bottom:4px">Recommandations d'irrigation sur les 7 prochains jours</div>
         <div style="font-size:22px;font-weight:700;color:#E07820">${ct(e)} mm</div>
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
        ${zt(s)}
        ${Wt(h)}
        ${jt(s)}
        ${c}
      </div>
    </div>
    <div class="irr-det-scroll">
      ${F.length?`
        <details class="irr-pr-details"${i||!h.length?" open":""}>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Effectuées <span class="irr-pr-details-sub">${F.length}</span></summary>
          <div>${F.map(g).join("")}</div>
        </details>`:""}
      ${v}
      ${h.length?`
        <details class="irr-pr-details" open>
          <summary class="irr-pr-details-sum"><i class="bi bi-chevron-right irr-pr-caret"></i>Planifiées <span class="irr-pr-details-sub">${h.length}</span></summary>
          <div>${h.map(g).join("")}</div>
        </details>`:""}
      ${s.length?"":'<div class="irr-pr-empty" style="padding:24px"><i class="bi bi-calendar3"></i><p>Aucune irrigation</p></div>'}
    </div>`,(E=t.querySelector("#irr-det-strat-toggle"))==null||E.addEventListener("click",()=>{const d=t.querySelector("#irr-det-strat-opts");d.style.display=d.style.display==="none"?"":"none"}),(M=t.querySelector("#irr-det-modify"))==null||M.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none",_t(e.id,()=>{ee(e),N(!0)})}),(P=t.querySelector("#irr-det-stop"))==null||P.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const d=m.filter(p=>p.plotId===e.id&&$.has(p.seasonId)&&!p.real&&p.iso>x);m.splice(0,m.length,...m.filter(p=>!d.includes(p))),U(),de("Saison arrêtée",[`${d.length} irrigation${d.length!==1?"s":""} future${d.length!==1?"s":""} supprimée${d.length!==1?"s":""}`,`Parcelle : ${e.name}`])}),(D=t.querySelector("#irr-det-del-all"))==null||D.addEventListener("click",()=>{t.querySelector("#irr-det-strat-opts").style.display="none";const d=m.filter(B=>B.plotId===e.id);if(!d.length)return;const p=d.some(B=>!B.fromStrategy);Rt(`Supprimer toutes les irrigations de "${e.name}" ?`,`${d.length} irrigation${d.length!==1?"s":""} seront supprimées (passées et futures).`+(p?"<br><br>Les irrigations saisies de manière ponctuelle sur cette parcelle seront elles aussi supprimées.":""),()=>{m.splice(0,m.length,...m.filter(B=>!d.includes(B))),U(),de("Saison supprimée",[`${d.length} irrigation${d.length!==1?"s":""} supprimée${d.length!==1?"s":""}`,`Parcelle : ${e.name}`])})}),t.querySelectorAll(".irr-pr-edit").forEach(d=>{d.addEventListener("click",()=>{const p=m[+d.dataset.idx];p&&Vt(p,()=>{ee(e),N(!0)})})}),t.querySelectorAll(".irr-pr-del").forEach(d=>{d.addEventListener("click",()=>{const p=+d.dataset.idx;p>=0&&(m.splice(p,1),U(),ee(e))})}),(V=t.querySelector("#irr-det-vol-input"))==null||V.addEventListener("change",d=>{const p=d.target.value!==""?parseInt(d.target.value):null;we(e.id,{volumeMaxM3:p}),ee(e),De()}),(H=t.querySelector("#irr-det-debit-input"))==null||H.addEventListener("change",d=>{const p=d.target.value!==""?parseFloat(d.target.value):null;we(e.id,{debitM3h:p}),ee(e),Lt(e.id),kt()}),(k=t.querySelector("#irr-det-irrelis-sync"))==null||k.addEventListener("click",()=>{de("Synchronisation Irré-LIS",[`Pluies et irrigations synchronisées pour « ${e.name} »`])}),t.querySelector("#irr-det-close").addEventListener("click",()=>{var d;(d=document.getElementById("irr-page"))==null||d.classList.remove("irr-has-detail"),t.style.display="none",t.dataset.plotId="",Ue(null)})}function Jt(e,t,i,s=10){var F;(F=document.querySelector(".irr-edit-overlay"))==null||F.remove();const n=_.find(h=>h.id===+e),l=n&&!nt(n),o=l?`
    <div class="irr-edit-row">
      <span class="irr-edit-label">Type d'irrigation</span>
      <select id="irr-qa-type-sel" style="flex:1;padding:6px;border:1px solid var(--bdr);border-radius:6px;font-size:13px">
        ${et.map(h=>`<option value="${h}"${h===(n.irrigation||"Non renseigné")?" selected":""}>${h}</option>`).join("")}
      </select>
    </div>`:"",a=document.createElement("div");a.className="irr-edit-overlay",a.innerHTML=`
    <div class="irr-edit-modal">
      <div class="irr-edit-hd">
        <span>Saisir une irrigation — ${G(i)}</span>
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
    </div>`,document.body.appendChild(a),a.addEventListener("click",h=>{h.target===a&&a.remove()}),a.querySelector("#irr-qa-close").addEventListener("click",()=>a.remove()),a.querySelector("#irr-qa-cancel").addEventListener("click",()=>a.remove());const $=a.querySelector("#irr-qa-save"),S=a.querySelector("#irr-qa-type-sel");if(S){const h=()=>{$.disabled=_e.has(S.value)};h(),S.addEventListener("change",h)}$.addEventListener("click",()=>{if(S){const b=S.value;if(_e.has(b))return;we(n.id,{irrigation:b}),n.irrigation=b}const h=parseInt(a.querySelector("#irr-qa-qty").value)||10;m.push({iso:i,mm:h,real:i<=x,plotId:+e,fromStrategy:!1}),U(),a.remove(),N(!0)})}function pe(){var o,a,$,S,F,h,b,O,j,z,T,f,L,A;const e=document.getElementById("irr-left"),t=[...tt].filter(c=>c.id!==100).sort((c,g)=>c.name.localeCompare(g.name)),i=qe?`
    <div class="irr-lc-org-wrap">
      <label class="irr-lc-lbl" style="margin-bottom:4px;display:block">Organisation</label>
      <select class="irr-lc-select" id="irr-org-select">
        <option value=""${ne===null?" selected":""}>Toutes les organisations</option>
        <option value="100"${ne===100?" selected":""}>Breiz'Agri Conseil</option>
        <optgroup label="Adhérents">
          ${t.map(c=>`<option value="${c.id}"${c.id===ne?" selected":""}>${c.name}</option>`).join("")}
        </optgroup>
      </select>
    </div>`:"",s=document.getElementById("irr-page");if(Ce){s==null||s.classList.add("irr-left-collapsed"),e.innerHTML=`
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Déplier le panneau">›</button>`,e.querySelector("#irr-left-toggle").addEventListener("click",()=>{Ce=!1,pe()});return}s==null||s.classList.remove("irr-left-collapsed"),e.innerHTML=`
    <div class="irr-lc-collapse-bar">
      <button class="irr-lc-collapse-btn" id="irr-left-toggle" title="Réduire le panneau">‹</button>
    </div>
    <div class="irr-lc-scroll">
    ${i}

    <button class="irr-lc-btn${W==="saisie"?" irr-lc-btn--active":""}" data-action="saisie">
      <i class="bi bi-droplet"></i><span>Saisir une irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${W==="saisie"?"":" irr-lc-form--hidden"}" id="irr-form-saisie">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${Oe("irr-s-scope",{allBtn:!0})}
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

    <button class="irr-lc-btn${W==="saison"?" irr-lc-btn--active":""}" data-action="saison">
      <i class="bi bi-arrow-repeat"></i><span>Saisir une saison d'irrigation</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${W==="saison"?"":" irr-lc-form--hidden"}" id="irr-form-saison">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${Oe("irr-sa-scope",{allBtn:!0})}
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

    <button class="irr-lc-btn${W==="export"?" irr-lc-btn--active":""}" data-action="export">
      <i class="bi bi-download"></i><span>Exporter les irrigations</span>
      <i class="bi bi-chevron-down irr-lc-chev"></i>
    </button>
    <div class="irr-lc-form${W==="export"?"":" irr-lc-form--hidden"}" id="irr-form-export">
      <div class="irr-lc-field">
        <label class="irr-lc-lbl">Parcelles</label>
        ${Oe("irr-ex-scope",{allBtn:!0})}
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
        <input type="checkbox" id="irr-feat-detector" ${ae?"checked":""} />
        <span>Irrigation Detector</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-irrelis" ${Ne?"checked":""} />
        <span>Irré-LIS</span>
      </label>
      <label class="irr-lc-cb-row">
        <input type="checkbox" id="irr-feat-premier-apport" ${ke?"checked":""} />
        <span>Premier apport</span>
      </label>
    </div>
  `,(o=e.querySelector("#irr-left-toggle"))==null||o.addEventListener("click",()=>{Ce=!0,pe()}),W==="saisie"&&He(e,"irr-s-scope"),W==="saison"&&He(e,"irr-sa-scope"),W==="export"&&He(e,"irr-ex-scope"),(a=e.querySelector("#irr-org-select"))==null||a.addEventListener("change",c=>{const g=c.target.value;ne=g===""?null:parseInt(g),_=ne===null?Ee:Ee.filter(u=>u.orgId===ne),ie=0,pe(),N()}),e.querySelectorAll(".irr-lc-btn").forEach(c=>{c.addEventListener("click",()=>{const g=c.dataset.action;W=W===g?null:g,pe()})});function n(){var y,E,M,P;const c=(y=e.querySelector("#irr-sa-debut"))==null?void 0:y.value,g=(E=e.querySelector("#irr-sa-fin"))==null?void 0:E.value,u=parseInt((M=e.querySelector("#irr-sa-qty"))==null?void 0:M.value)||0,v=parseInt((P=e.querySelector("#irr-sa-freq"))==null?void 0:P.value)||0,w=e.querySelector("#irr-sa-preview");if(!w)return;if(!c||!g||v<=0){w.textContent="—";return}let q=0,I=new Date(c),r=new Date(g);for(;I<=r&&q<200;)q++,I.setDate(I.getDate()+v);if(q>0){const V=Se(e,"irr-sa-scope").reduce((d,p)=>{const B=Me().find(J=>J.id===p);return d+((B==null?void 0:B.area)??0)},0),H=V>0?Math.round(q*u*V*10):0,k=H>0?` · ${H.toLocaleString("fr-FR")} m³`:"";w.innerHTML=`<span style="color:var(--pri);font-weight:600">↗ ${q} irrigations · ${q*u} mm${k}</span>`}else w.innerHTML='<span style="color:var(--txt3)">Ajustez les paramètres</span>'}W==="saison"&&(n(),($=e.querySelector("#irr-sa-debut"))==null||$.addEventListener("change",n),(S=e.querySelector("#irr-sa-fin"))==null||S.addEventListener("change",n),(F=e.querySelector("#irr-sa-qty"))==null||F.addEventListener("input",n),(h=e.querySelector("#irr-sa-freq"))==null||h.addEventListener("input",n)),(b=e.querySelector("#irr-ex-dl"))==null||b.addEventListener("click",()=>{const c=e.querySelector("#irr-ex-start").value,g=e.querySelector("#irr-ex-end").value,u=e.querySelector("#irr-ex-irrig").checked,v=e.querySelector("#irr-ex-rain").checked,w=Se(e,"irr-ex-scope"),q=w.length>0?_.filter(k=>w.includes(k.id)):Me(),I=new Set;if(u)for(const k of m)k.iso>=c&&k.iso<=g&&I.add(k.iso);if(v)for(const k of ve)k.iso>=c&&k.iso<=g&&I.add(k.iso);const r=[...I].sort(),y={};if(v)for(const k of ve)y[k.iso]=k.mm;const E=["Date",...q.map(k=>k.name+(v?" (irrig.)":""))].join(";"),M=r.map(k=>{const d=q.map(p=>{const B=u?m.filter(C=>C.iso===k&&C.plotId===p.id).reduce((C,Y)=>C+Y.mm,0):0,J=v?y[k]??0:0,K=B+J;return K>0?K:""});return[k,...d].join(";")}),P=[E,...M].join(`
`),D=new Blob([P],{type:"text/csv;charset=utf-8;"}),V=URL.createObjectURL(D),H=Object.assign(document.createElement("a"),{href:V,download:`irrigations_${c}_${g}.csv`});document.body.appendChild(H),H.click(),setTimeout(()=>{URL.revokeObjectURL(V),H.remove()},100)}),(O=e.querySelector("#irr-s-save"))==null||O.addEventListener("click",()=>{const c=Se(e,"irr-s-scope"),g=e.querySelector("#irr-s-date").value,u=parseInt(e.querySelector("#irr-s-qty").value)||0,v=e.querySelector("#irr-s-err");if(!c.length||!g||!u){v&&(v.style.display="");return}v&&(v.style.display="none");const w=g>x,q=()=>{c.forEach(r=>{m.push({iso:g,mm:u,real:!w,plotId:r,fromStrategy:!1})}),U(),de("Irrigation enregistrée",[`Date : ${G(g)}`,`Quantité : ${u} mm`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},I=m.filter(r=>c.includes(r.plotId)&&r.iso===g);if(I.length){Xe(I.length,`${c.length} parcelle(s)`,()=>{m.splice(0,m.length,...m.filter(r=>!(c.includes(r.plotId)&&r.iso===g))),q()});return}q()});const l=()=>{N();const c=document.getElementById("irr-detail"),g=c==null?void 0:c.dataset.plotId;if(g){const u=_.find(v=>String(v.id)===g);u&&ee(u)}};(j=e.querySelector("#irr-feat-advisor"))==null||j.addEventListener("change",c=>{oe=c.target.checked,l()}),(z=e.querySelector("#irr-feat-reservoir"))==null||z.addEventListener("change",c=>{Le=c.target.checked,l()}),(T=e.querySelector("#irr-feat-detector"))==null||T.addEventListener("change",c=>{ae=c.target.checked,l()}),(f=e.querySelector("#irr-feat-irrelis"))==null||f.addEventListener("change",c=>{Ne=c.target.checked,l()}),(L=e.querySelector("#irr-feat-premier-apport"))==null||L.addEventListener("change",c=>{ke=c.target.checked,l()}),(A=e.querySelector("#irr-sa-save"))==null||A.addEventListener("click",()=>{const c=Se(e,"irr-sa-scope"),g=e.querySelector("#irr-sa-debut").value,u=e.querySelector("#irr-sa-fin").value,v=parseInt(e.querySelector("#irr-sa-qty").value)||10,w=parseInt(e.querySelector("#irr-sa-freq").value)||7,q=e.querySelector("#irr-sa-err");if(!c.length||!g||!u){q&&(q.style.display="");return}q&&(q.style.display="none");const I=[];let r=new Date(g),y=new Date(u);for(;r<=y&&I.length<200;)I.push(new Date(r)),r.setDate(r.getDate()+w);const E=Ze(),M=()=>{c.forEach(D=>{I.forEach(V=>{const H=V.toISOString().slice(0,10);m.push({iso:H,mm:v,real:H<=x,plotId:D,fromStrategy:!0,seasonId:E})})}),U(),de("Saison enregistrée",[`Début : ${G(g)} · Fin : ${G(u)}`,`${I.length} irrigations · ${v} mm · tous les ${w} j`,`Parcelles : ${c.length} sélectionnée${c.length>1?"s":""}`])},P=m.filter(D=>c.includes(D.plotId)&&D.iso>=g&&D.iso<=u);if(P.length){Xe(P.length,`${c.length} parcelle(s)`,()=>{m.splice(0,m.length,...m.filter(D=>!(c.includes(D.plotId)&&D.iso>=g&&D.iso<=u))),M()});return}M()})}function Qt(){const e=Object.assign(document.createElement("div"),{id:"irr-data-tip",className:"irr-data-tip"});document.body.appendChild(e),document.addEventListener("mouseover",t=>{const i=t.target.closest("[data-tip]");if(!i){e.style.opacity="0";return}e.textContent=i.dataset.tip,e.style.opacity="1"}),document.addEventListener("mousemove",t=>{e.style.left=t.clientX+14+"px",e.style.top=t.clientY-36+"px"}),document.addEventListener("mouseout",t=>{var i;(i=t.relatedTarget)!=null&&i.closest("[data-tip]")||(e.style.opacity="0")})}document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search),t=e.get("plot"),i=e.get("action");if((i==="saisie"||i==="saison")&&(W=i),ht(),Qt(),pe(),N(),window.addEventListener("irrig-updated",()=>{N();const s=document.getElementById("irr-detail"),n=s==null?void 0:s.dataset.plotId;if(!n)return;const l=_.find(o=>String(o.id)===n);l&&ee(l)}),t){const s=_.find(n=>n.id===+t);s&&(ut(s),(i==="saisie"||i==="saison")&&setTimeout(()=>{const n=i==="saisie"?"irr-s-scope":"irr-sa-scope",l=document.querySelector(`#${n} input[value="${t}"]`);l&&(l.checked=!0,l.dispatchEvent(new Event("change")))},50))}});
