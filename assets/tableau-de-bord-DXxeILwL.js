import"./main-5C_gURf8.js";import{u as T}from"./breadcrumb-CD3EeVEY.js";import{p}from"./plots-CEyFXpqF.js";import{s as $}from"./sensors-BafoiuOm.js";import{m as b}from"./members-U142UPu4.js";import{o as m}from"./orgs-b3kLTQ0f.js";import{i as g}from"./integrations-BOxU0_7l.js";const h=1,R=new Set(["irre-lis-mono","cropwise-protector","abelio"]),A="tdb-favorites",D=3;document.addEventListener("DOMContentLoaded",()=>{T();const i=(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau";I(),N(i)});function E(){try{return JSON.parse(localStorage.getItem(A))||[]}catch{return[]}}function y(a){localStorage.setItem(A,JSON.stringify(a))}function I(){const a=document.getElementById("tdb-favorites");if(!a)return;const i=E();a.innerHTML=Array.from({length:D},(s,t)=>{const n=i[t];return n?`<div class="tdb-fav-slot tdb-fav-filled" data-idx="${t}">
           <div class="tdb-fav-label">${n.label}</div>
           <div class="tdb-fav-value">${n.value}</div>
           <button class="tdb-fav-remove" data-idx="${t}" title="Retirer"><i class="bi bi-x"></i></button>
         </div>`:`<div class="tdb-fav-slot tdb-fav-empty" data-idx="${t}">
           <i class="bi bi-plus-circle"></i>
           <span>Ajouter un indicateur</span>
         </div>`}).join(""),a.querySelectorAll(".tdb-fav-empty").forEach(s=>{s.addEventListener("click",()=>F(parseInt(s.dataset.idx)))}),a.querySelectorAll(".tdb-fav-remove").forEach(s=>{s.addEventListener("click",t=>{t.stopPropagation();const n=parseInt(s.dataset.idx),l=E();l.splice(n,1),y(l),I()})})}function F(a){const i=document.getElementById("tdb-picker-modal");i&&i.remove();const t=(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau",n=P(t),l=document.createElement("div");l.id="tdb-picker-modal",l.className="modal tdb-picker-modal",l.innerHTML=`
    <div class="tdb-picker-content">
      <div class="tdb-picker-header">
        <span>Choisir un indicateur</span>
        <button class="add-modal-close">×</button>
      </div>
      <div class="tdb-picker-grid">
        ${n.map(r=>`
          <div class="tdb-picker-item" data-label="${r.label}" data-value="${r.value}">
            <div class="tdb-picker-item-label">${r.label}</div>
            <div class="tdb-picker-item-value">${r.value}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `,l.addEventListener("click",r=>{r.target===l&&l.remove()}),l.querySelector(".add-modal-close").addEventListener("click",()=>l.remove()),l.querySelectorAll(".tdb-picker-item").forEach(r=>{r.addEventListener("click",()=>{const u=E();for(;u.length<=a;)u.push(null);u[a]={label:r.dataset.label,value:r.dataset.value},y(u.filter(Boolean)),I(),l.remove()})}),document.body.appendChild(l)}function N(a){const i=document.getElementById("tdb-sections");if(!i)return;i.innerHTML="",k(a).forEach(t=>{const n=document.createElement("div");n.className="tdb-section",n.innerHTML=`
      <div class="tdb-section-hd">
        <i class="bi ${t.icon}"></i> ${t.title}
        <a href="${t.href}" class="tdb-section-link">Voir <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="tdb-section-cards">
        ${t.cards.map(l=>`
          <div class="stat-card${l.warn?" warn":""}">
            <div class="stat-label">${l.label}</div>
            <div class="stat-value">${l.value}</div>
          </div>
        `).join("")}
      </div>
    `,i.appendChild(n)})}function k(a){const i=a?p.filter(e=>e.orgId===h):p,s=a?$.filter(e=>{const o=p.find(v=>v.id===e.parcelId);return o&&o.orgId===h}):$;a?b.filter(e=>e.orgId===h||!e.orgId):b;const t=[],n=i.reduce((e,o)=>e+o.area,0),l=i.filter(e=>s.some(o=>o.parcelId===e.id)).length,r=new Set(i.map(e=>e.crop)).size,u=i.filter(e=>(e.integrations||[]).length>0).length;t.push({title:"Parcelles",icon:"bi-geo-alt",href:"parcelles.html",cards:[{label:"Parcelles",value:i.length},{label:"Surface totale",value:`${n.toFixed(1)} ha`},{label:"Cultures",value:r},{label:"Avec capteur",value:l},{label:"Avec intégration",value:u},{label:"Sans capteur",value:i.length-l,warn:i.length-l>0}]});const S=s.filter(e=>e.event).length,w=s.length?(s.reduce((e,o)=>e+o.networkQuality,0)/s.length).toFixed(1):"—",M=[...new Set(s.map(e=>e.model))].length;if(t.push({title:"Capteurs",icon:"bi-broadcast",href:"capteurs.html",cards:[{label:"Capteurs",value:s.length},{label:"Modèles différents",value:M},{label:"Avec événement",value:S,warn:S>0},{label:"Qualité réseau moy.",value:`${w} %`}]}),a)t.push({title:"Intégrations",icon:"bi-plug",href:"integrations.html",cards:[{label:"Mes intégrations actives",value:R.size},{label:"Disponibles",value:g.length}]});else{const e=g.filter(c=>c.connected).length,o=p.filter(c=>c.orgId!==1),v=new Set(o.flatMap(c=>c.integrations||[])),f=g.filter(c=>v.has(c.name)).length;t.push({title:"Intégrations",icon:"bi-plug",href:"integrations.html",cards:[{label:"Actives exploitation",value:e},{label:"Actives adhérents",value:f},{label:"Disponibles",value:g.length}]})}const x=a?2:b.length,L=a?1:b.filter(e=>e.role==="propriétaire").length,C=a?1:b.filter(e=>e.role==="admin").length;if(t.push({title:"Membres",icon:"bi-people",href:"membres.html",cards:[{label:"Membres",value:x},{label:"Propriétaires",value:L},{label:"Admins",value:C}]}),!a){const e=m.length,o=m.filter(d=>["actif","actif en essai"].includes(d.statut)).length,v=m.filter(d=>["en essai","actif en essai"].includes(d.statut)).length,f=m.filter(d=>["invité","invitation en attente"].includes(d.statut)).length,c=m.filter(d=>["inactif","désactivé"].includes(d.statut)).length;t.push({title:"Adhérents",icon:"bi-person-plus",href:"adherents.html",cards:[{label:"Adhérents",value:e},{label:"Actifs",value:o},{label:"En essai",value:v},{label:"Invités",value:f,warn:f>0},{label:"Inactifs",value:c,warn:c>0}]})}return t}function P(a){return k(a).flatMap(s=>s.cards.map(t=>({label:`${s.title} — ${t.label}`,value:t.value})))}
