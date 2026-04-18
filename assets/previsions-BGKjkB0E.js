import"./main-CTHWNdRj.js";import{p as $}from"./plots-CEyFXpqF.js";import{s as L}from"./sensors-BafoiuOm.js";import{u as S}from"./breadcrumb-DEBQjfiD.js";let h=0;document.addEventListener("DOMContentLoaded",()=>{S(),T(),g(),u(0)});function T(){const a=document.getElementById("location-select");if(!a)return;const t=document.createElement("optgroup");t.label="Parcelles",$.forEach(e=>{const s=document.createElement("option");s.value=`parcel-${e.id}`,s.textContent=`${e.name} (${e.crop})`,t.appendChild(s)}),a.appendChild(t);const i=document.createElement("optgroup");i.label="Capteurs",L.forEach(e=>{const s=$.find(d=>d.id===e.parcelId),n=document.createElement("option");n.value=`sensor-${e.id}`,n.textContent=`${e.serial} — ${e.model}${s?` (${s.name})`:""}`,i.appendChild(n)}),a.appendChild(i),a.addEventListener("change",()=>{h=0,g(),u(0)})}const F=["N","NE","E","SE","S","SO","O","NO"];function v(a){return`<span style="display:inline-block;transform:rotate(${a}deg);font-size:14px">↑</span>`}function x(a){const t=Math.round(a/45)%8;return F[t]}function y(a){let t=a;return()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295)}function w(a){const t=y(a*137+42);return{rain:t()>.5?Math.floor(t()*12):0,etp:parseFloat((t()*4+.5).toFixed(1)),tempMin:Math.floor(t()*8)+8,tempMax:Math.floor(t()*8)+8+Math.floor(t()*10)+4,tempMinTime:`${6+Math.floor(t()*3)}h`,tempMaxTime:`${13+Math.floor(t()*4)}h`,humMin:Math.floor(t()*20)+40,humMax:Math.floor(t()*25)+65,windDir:Math.floor(t()*360),windAvg:Math.floor(t()*25)+5}}function g(){const a=document.getElementById("forecast");if(!a)return;a.innerHTML="";const t=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],i=["jan","fév","mar","avr","mai","jun","jul","aoû","sep","oct","nov","déc"];for(let e=0;e<7;e++){const s=new Date;s.setDate(s.getDate()+e);const n=t[s.getDay()],d=s.getDate(),l=i[s.getMonth()],o=w(e),r=I(o.rain,o.tempMin,o.tempMax,o.etp),c=document.createElement("div");c.className=`forecast-day${e===h?" forecast-day--active":""}`,c.dataset.dayIndex=e,c.innerHTML=`
      <div class="fc-date">${n} ${d} ${l}</div>
      <div class="fc-atmogram">${r}</div>
      <div class="fc-rows">
        <div class="fc-row">
          <i class="bi bi-cloud-rain" style="color:#45b7d1"></i>
          <span class="fc-val">${o.rain} <span class="fc-unit">mm</span></span>
        </div>
        <div class="fc-row">
          <i class="bi bi-thermometer-high" style="color:#e07050"></i>
          <span class="fc-val">
            <span class="fc-temp-max">${o.tempMax}°</span>
            <span class="fc-temp-time">${o.tempMaxTime}</span>
          </span>
        </div>
        <div class="fc-row">
          <i class="bi bi-thermometer-low" style="color:#6eb4d4"></i>
          <span class="fc-val">
            <span class="fc-temp-min">${o.tempMin}°</span>
            <span class="fc-temp-time">${o.tempMinTime}</span>
          </span>
        </div>
        <div class="fc-row">
          <i class="bi bi-droplet" style="color:#4ecdc4"></i>
          <span class="fc-val">${o.humMin}–${o.humMax} <span class="fc-unit">%</span></span>
        </div>
        <div class="fc-row">
          <i class="bi bi-sun" style="color:#c090e0"></i>
          <span class="fc-val">${o.etp} <span class="fc-unit">mm</span></span>
        </div>
        <div class="fc-row">
          ${v(o.windDir)}
          <span class="fc-val">${o.windAvg} <span class="fc-unit">km/h</span> ${x(o.windDir)}</span>
        </div>
      </div>
    `,c.addEventListener("click",()=>{h=e,document.querySelectorAll(".forecast-day").forEach(m=>m.classList.remove("forecast-day--active")),c.classList.add("forecast-day--active"),u(e)}),a.appendChild(c)}}function I(a,t,i,e){const d=Math.min(46,a*3),l=50-d,o=30,r=50-i/o*50,c=50-t/o*50;return`<svg width="80" height="50" viewBox="0 0 80 50">
    <rect x="4" y="${l}" width="16" height="${d}" fill="#45b7d1" opacity="0.7" rx="2"/>
    <rect x="24" y="${50-e*4}" width="8" height="${e*4}" fill="#c090e0" opacity="0.7" rx="2"/>
    <rect x="52" y="${r.toFixed(1)}" width="8" height="${(c-r).toFixed(1)}" fill="#e07050" opacity="0.4" rx="2"/>
    <circle cx="56" cy="${r.toFixed(1)}" r="3" fill="#e07050"/>
    <circle cx="56" cy="${c.toFixed(1)}" r="3" fill="#6eb4d4"/>
    <text x="12" y="50" font-size="8" fill="var(--txt3)" text-anchor="middle">${a}mm</text>
  </svg>`}function u(a=0){const t=document.querySelector("#hourly-table tbody");if(!t)return;t.innerHTML="";const i=document.querySelector("#hourly-table thead tr");if(i&&!i.querySelector('[data-col="winddir"]')){const n=document.createElement("th");n.dataset.col="winddir",n.textContent="Dir. vent";const d=i.children[5];d?d.after(n):i.appendChild(n)}const e=w(a),s=e.windDir;for(let n=0;n<24;n++){const d=n<10?"0"+n:""+n,l=Math.max(0,Math.sin(Math.PI*(n-6)/12)),o=.5+.5*Math.sin(2*Math.PI*(n-4)/24-Math.PI/2),r=y(a*1e3+n*13),c=n>=8&&n<=14&&r()>.75?Math.floor(r()*4+1):0,m=Math.round(e.tempMin+o*(e.tempMax-e.tempMin)),b=Math.round(Math.max(40,Math.min(95,70+(1-o)*20))),D=Math.round(5+l*e.windAvg+r()*5),M=(s+(r()-.5)*40+360)%360,E=parseFloat(Math.max(0,l*1.5*(1+o*.5)).toFixed(2)),p=Math.round(l*700+(r()-.5)*80),H=Math.round(Math.max(0,Math.min(100,40+(r()-.5)*60))),C=c>0?"🌧":p>400?"☀️":p>150?"⛅":"🌑",f=document.createElement("tr");a===0&&n===new Date().getHours()&&(f.style.fontWeight="600"),f.innerHTML=`
      <td>${d}:00</td>
      <td>${C}</td>
      <td>${c>0?c+" mm":"—"}</td>
      <td style="color:${m>20?"#e07050":m<8?"#6eb4d4":"inherit"}">${m}°C</td>
      <td>${b}%</td>
      <td>${D} km/h</td>
      <td>${v(M)} ${x(M)}</td>
      <td>${E} kPa</td>
      <td>${p>0?p+" W/m²":"—"}</td>
      <td>${H}%</td>
    `,t.appendChild(f)}}
