function headerBackChange(){const e=document.getElementById("head"),t=document.getElementById("guide-list");t.addEventListener("scroll",()=>{0<t.scrollTop?e.classList.add("back-white"):e.classList.remove("back-white")})}function asideToggleActive(){document.getElementById("guide-list").classList.toggle("open-aside")}function Tab(){var e=document.querySelectorAll(".tab-display");e.forEach(e=>{var t=e.querySelector(".tab-item:first-child");t.classList.add("active"),t.querySelector(".tab-text").setAttribute("aria-selected","true"),e.querySelector(".tab-list").addEventListener("keydown",function(e){var t=(e=event||window.event).keyCode||e.which;e.shiftKey||9!==t||(this.querySelectorAll(".tab-item").forEach(e=>{var t;e.classList.contains("active")?((t=e.querySelector(".tab-text")).setAttribute("tabindex","0"),t.setAttribute("aria-selected","true")):((t=e.querySelector(".tab-text")).setAttribute("tabindex","-1"),t.setAttribute("aria-selected","false"))}),document.querySelectorAll(".panel-item.hidden").forEach(e=>{e.tabIndex="-1"}))});const i=e.querySelectorAll(".tab-text");i.forEach(e=>{e.addEventListener("keydown",function(e){switch((e=event||window.event).keyCode||e.which){case 37:this.closest(".tab-item").previousElementSibling&&(this.setAttribute("tabindex","-1"),this.closest(".tab-item").previousElementSibling.querySelector(".tab-text").setAttribute("tabindex","0"),this.closest(".tab-item").previousElementSibling.querySelector(".tab-text").focus());break;case 39:this.closest(".tab-item").nextElementSibling&&(this.setAttribute("tabindex","-1"),this.closest(".tab-item").nextElementSibling.querySelector(".tab-text").setAttribute("tabindex","0"),this.closest(".tab-item").nextElementSibling.querySelector(".tab-text").focus());break;case 32:case 13:this&&(i.forEach(e=>{e.setAttribute("aria-selected","false")}),this.setAttribute("aria-selected","true"))}})})});const n=document.querySelectorAll(".panel-display");n.forEach(e=>{e.querySelectorAll(".panel-item").forEach((e,t)=>{0!=t&&e.classList.add("hidden")})}),e.forEach((e,s)=>{const l=e.querySelectorAll(".tab-item");l.forEach((e,i)=>{const t=e.querySelector(".tab-text");t.addEventListener("click",()=>{var e=t.closest(".tab-item");l.forEach(e=>{e.classList.remove("active"),e.querySelector(".tab-text").setAttribute("tabindex","-1"),e.querySelector(".tab-text").setAttribute("aria-selected","false")}),e.classList.add("active"),t.setAttribute("tabindex","0"),t.setAttribute("aria-selected","true"),n.forEach((e,t)=>{s==t&&e.querySelectorAll(".panel-item").forEach((e,t)=>{e.classList.add("hidden"),i==t&&e.classList.remove("hidden")})})})})}),new Swiper(".tab-wrap",{slidesPerView:"auto",freeMode:!0})}function input(){document.querySelectorAll(".form").forEach(t=>{if(t.classList.contains("input")||t.classList.contains("search")){const i=t.querySelector(".remove");i&&(t.addEventListener("keyup",()=>{var e=t.querySelector(".input-elem").value;i.style.display=e?"block":"none"}),i.addEventListener("click",()=>{t.querySelector(".input-elem").value=null,i.style.display="none"})),t.classList.contains("disabled")&&t.querySelector(".input-elem").setAttribute("disabled","")}})}function select(){const t=document.querySelectorAll(".form.select.design1");for(const i of t)if(i){const s=i.querySelector("select"),l=i.querySelector(".arrow .blind");s.addEventListener("keydown",function(e){13!==e.keyCode&&(32!=e.keyCode||i.classList.contains("open"))||document.activeElement!==s||i.classList.toggle("open"),i.classList.contains("open")?l.innerHTML="열림":l.innerHTML="닫힘"}),i.addEventListener("click",()=>{i.classList.toggle("open"),i.classList.contains("open")?l.innerHTML="열림":l.innerHTML="닫힘"}),document.addEventListener("click",e=>{e=e.target;if(e.closest(".form.select")){if(e.closest(".form.select.open")){for(const i of t)i.classList.remove("open");e.closest(".form.select").classList.add("open")}}else for(const i of t)i.classList.remove("open");i.classList.contains("open")?l.innerHTML="열림":l.innerHTML="닫힘"})}}function swiperDesign1(){var e=new Swiper(".sync1",{slidesPerView:1,loopAdditionalSlides:1,effect:"fade",loop:!0,controller:{control:void 0}}),t=new Swiper(".sync2",{slidesPerView:1,loopAdditionalSlides:1,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},controller:{control:e}});(e.controller.control=t).controller.control=e}function Accordion(){function i(e,t){e.querySelectorAll(".accordion-head + *").forEach(e=>{e.style.maxHeight=t?e.scrollHeight+"px":null})}document.querySelectorAll(".accordion-display").forEach(function(e){const t=e.querySelector("button");t.addEventListener("click",function(){var e="열림"===t.getAttribute("aria-label");t.setAttribute("aria-label",e?"닫힘":"열림")}),e.querySelectorAll(".accordion-head").forEach(e=>{e.addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})}),e.classList.contains("collapse")?i(e,!0):i(e,!1)})}