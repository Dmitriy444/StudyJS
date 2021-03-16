(()=>{"use strict";(function(e){let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");function a(){let e=function(){let e=(new Date("18 march 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:o,seconds:t}}();e.timeRemaining>0?(t.textContent=e.hours,o.textContent=e.minutes,n.textContent=e.seconds):e.timeRemaining<=0&&(clearInterval(r),t.textContent=0,o.textContent=0,n.textContent=0),t.textContent<10&&(t.textContent="0"+t.textContent),o.textContent<10&&(o.textContent="0"+o.textContent),n.textContent<10&&(n.textContent="0"+n.textContent)}a();let r=setInterval(a,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu");document.querySelector(".close-btn"),document.querySelectorAll(".active-menu"),t.addEventListener("click",(e=>{let o=e.target;o.classList.contains("close-btn")?t.classList.remove("active-menu"):(o=o.closest("a"),o&&t.classList.remove("active-menu"))})),e.addEventListener("click",(()=>{t.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-content");let n=0,a=()=>{n++,n<60&&screen.width>768&&(o.style.top=n+"px",setTimeout(a))},r=()=>{n--,n>0&&(o.style.top=n+"px",setTimeout(r))};e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?(e.style.display="none",r()):(o=o.closest(".popup-content"),o||(e.style.display="none"))})),t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",a()}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach(((e,a)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(a)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content")),o=document.querySelector(".portfolio-dots");let n,a=0;(()=>{for(let t=0;t<e.length;t++){const e=document.createElement("li");e.classList.add("dot"),o.append(e)}})();const r=document.querySelectorAll(".dot");r[0].classList.add("dot-active");const c=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{c(e,a,"portfolio-item-active"),c(r,a,"dot-active"),a++,a>=e.length&&(a=0),l(e,a,"portfolio-item-active"),l(r,a,"dot-active")},u=(e=2e3)=>{n=setInterval(s,e)};t.addEventListener("click",(t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(c(e,a,"portfolio-item-active"),c(r,a,"dot-active"),o.matches("#arrow-right")?a++:o.matches("#arrow-left")?a--:o.matches(".dot")&&r.forEach(((e,t)=>{e===o&&(a=t)})),a>=e.length&&(a=0),a<0&&(a=e.length-1),l(e,a,"portfolio-item-active"),l(r,a,"dot-active"))})),t.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),t.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(1500)})(),(()=>{let e=document.querySelector(".command");e.addEventListener("mouseover",(e=>{let t=e.target;const o=e.target.src;t.closest(".command__photo")&&(e.target.src=e.target.dataset.img,e.target.dataset.img=o)})),e.addEventListener("mouseout",(e=>{let t=e.target;const o=e.target.src;t.closest(".command__photo")&&(e.target.src=e.target.dataset.img,e.target.dataset.img=o)}))})(),((e=100)=>{const t=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),a=document.querySelector(".calc-type"),r=document.querySelector(".calc-count"),c=document.querySelector(".calc-block"),l=document.getElementById("total");c.addEventListener("change",(o=>{const c=o.target;(c.matches("select")||c.matches("input"))&&(()=>{let o=0,c=1,s=1;const u=a.options[a.selectedIndex].value,m=+t.value;r.value>1&&(c+=(r.value-1)/10),n.value&&n.value<5?s*=2:n.value&&n.value<10&&(s*=1.5),u&&m&&(o=e*u*m*c*s),l.textContent=o})()})),c.addEventListener("input",(e=>{let a=e.target;a===t?a.value=t.value.replace(/\D/g,""):a===o?o.value=o.value.replace(/\D/g,""):a===n&&(n.value=n.value.replace(/\D/g,""))}))})(100),(()=>{let e=document.querySelector("body");e.addEventListener("input",(e=>{let t=e.target;t.matches('input[name = "user_phone"]')?t.value=t.value.replace(/[^+0-9 ]$/,""):t.matches('input[name = "user_message"]')?t.value=t.value.replace(/[^?!:;",.а-яА-ЯёЁ0-9\s]+$/,""):t.matches('input[name = "user_name"]')?t.value=t.value.replace(/[^а-яА-ЯёЁ0-9 ]/,""):t.matches('input[name = "user_email"]')&&(t.value=t.value.replace(/[^A-Za-z0-9/!~.*@'_-]/,""))}),!0),e.addEventListener("blur",(e=>{let t=e.target;t.matches('input[name = "user_name"]')&&(t.value=t.value.replace(/ +/g," ").trim(),t.value=t.value.replace(/([А-ЯЁ])/g,(e=>e.toLowerCase())),t.value=t.value.replace(/(( |^)[а-яё])(?=[а-яё])/g,(e=>e.toUpperCase())))}),!0)})(),(()=>{const e=document.querySelector("body"),t=document.createElement("div");let o=document.getElementById("form2-message");t.style.cssText="font-size: 2rem;\n    color: white;",e.addEventListener("submit",(e=>{let a=e.target;a.matches("form1")||a.matches("form3")?(formName=a.querySelector('input[name = "user_name"]'),formEmail=a.querySelector('input[name = "user_email"]'),formPhone=a.querySelector('input[name = "user_phone"]')):a.matches("form2")&&(formName=a.querySelector('input[name = "user_name"]'),formEmail=a.querySelector('input[name = "user_email"]'),formPhone=a.querySelector('input[name = "user_phone"]'),formMessage2=a.querySelector('input[name = "user_message"]')),e.preventDefault(),a.append(t),t.textContent="Загрузка...";const r=new FormData(a);let c={};r.forEach(((e,t)=>{c[t]=e})),n(c).then((e=>{if(200!==e.status)throw new Error("Status network not 200.");t.textContent="Спасибо! Мы скоро с вами свяжемся."})).catch((e=>{t.textContent="Что то пошло не так...",console.error(e)})),a.querySelector('input[name = "user_name"]').value="",a.querySelector('input[name = "user_email"]').value="",a.querySelector('input[name = "user_phone"]').value="",""!==o.value&&(a.querySelector('input[name = "user_message"]').value="")}));const n=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})()})();