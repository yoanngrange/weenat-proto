import"./main-D8PRhBvj.js";import{u as o}from"./breadcrumb-CD3EeVEY.js";import{p as s}from"./plots-CEyFXpqF.js";const l=1;document.addEventListener("DOMContentLoaded",()=>{o();const e=(localStorage.getItem("menuRole")||"admin-reseau")==="adherent-reseau";m(e)});function c(r){const e=r.id,n=+((e*2.3+7)%32).toFixed(1),a=+((e*1.1+14)%14+10).toFixed(1),d=Math.round(r.reserveHydrique*.55+e%7*4),t=+((e*.6+1)%6).toFixed(1),i=Math.max(0,+(a+t-n).toFixed(1));return{pluie7j:n,etp7j:a,teneurEau:d,drainage7j:t,irrig:i}}function m(r){const e=document.getElementById("tdb-parcels");if(!e)return;const a=(r?s.filter(d=>d.orgId===l):s).map(d=>{const t=c(d);return`<tr>
      <td><a href="parcelle-detail.html?id=${d.id}" class="tdb-plot-link">${d.name}</a></td>
      <td class="tdb-num">${d.area.toFixed(1)}</td>
      <td>${d.crop}</td>
      <td class="tdb-num">${t.pluie7j}</td>
      <td class="tdb-num">${t.etp7j}</td>
      <td class="tdb-num">${t.teneurEau}</td>
      <td class="tdb-num">${t.drainage7j}</td>
      <td class="tdb-num ${t.irrig>0?"tdb-irrig-needed":"tdb-irrig-ok"}">${t.irrig>0?t.irrig:"—"}</td>
    </tr>`}).join("");e.innerHTML=`<table class="tdb-parcels-table">
    <thead>
      <tr>
        <th>Parcelle</th>
        <th class="tdb-num">Surface (ha)</th>
        <th>Culture</th>
        <th class="tdb-num">Pluie 7j (mm)</th>
        <th class="tdb-num">ETP 7j (mm)</th>
        <th class="tdb-num">Eau sol (mm)</th>
        <th class="tdb-num">Drainage 7j (mm)</th>
        <th class="tdb-num">Irrigation (mm)</th>
      </tr>
    </thead>
    <tbody>${a}</tbody>
  </table>
  <div class="tdb-parcels-formula">Déficit = pluies + irrigations − ETP − drainage</div>`}
