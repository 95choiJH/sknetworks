var frontCommon=frontCommon||{};function frontCommonResize(){window.addEventListener("resize",()=>{})}function frontCommonScroll(){window.addEventListener("scroll",()=>{})}function lenis(){const s=new Lenis;requestAnimationFrame(function e(t){s.raf(t),requestAnimationFrame(e)})}function localAnimations(){$header=$("header"),$breadcrumb=$(".data-list.breadcrumb"),$('[local-animation="case-1"]').each(function(){($this=$(this)).addClass("active"),$breadcrumb.removeClass("case1").addClass("case2")})}function header(){const s=document.querySelector("body"),a=document.getElementById("header");var t=a.querySelectorAll(".depth1-item");const i=document.querySelectorAll(".depth1"),o=document.querySelectorAll(".depth2-wrap");if(a){window.addEventListener("resize",()=>{if(1024<=window.innerWidth){a.classList.remove("open"),a.removeAttribute("style");for(const e of i)e.classList.remove("active");for(const t of o)t.removeAttribute("style");s.style.overflow="auto"}}),t.forEach(e=>{e=e.querySelector(".depth2-list");7<e.querySelectorAll(".depth2-item").length&&(e.style.maxWidth="73.6rem",e.style.flexWrap="wrap")});var n=document.getElementById("lang"),r=n.querySelector(".selected");const c=n.querySelector(".option-area"),l=(r.addEventListener("click",function(){c.classList.contains("active")?c.classList.remove("active"):c.classList.add("active")}),a.addEventListener("mouseenter",()=>{(a.classList.contains("dark")||a.classList.contains("transparent"))&&a.classList.add("hover")}),a.addEventListener("mouseleave",()=>{(a.classList.contains("dark")||a.classList.contains("transparent"))&&a.classList.remove("hover")}),document.addEventListener("focusin",function(e){e=e.target;e.closest(".dark")||e.closest(".transparent")?a.classList.add("hover"):a.classList.remove("hover")}),a.querySelector(".site-navi")),d=a.querySelector(".site-util");n=a.querySelector(".btn.menu-header");const u=n.querySelector(".btn-text");let e=1;for(const m of t)m.style.animationDelay=.15*e+"s",e++;n.addEventListener("click",function(){a.classList.contains("open")?(s.style.overflow="auto",u.innerHTML="메뉴 열기",a.style.height="5.8rem",setTimeout(()=>{a.classList.remove("open");for(const e of i)e.classList.remove("active");for(const t of o)t.style.height="0"},300)):(s.style.overflow="hidden",u.innerHTML="메뉴 닫기",l.style.display="block",d.style.display="flex",a.style.height="100%",setTimeout(()=>{a.classList.add("open")},300))}),document.addEventListener("click",function(e){var t,s,e=e.target;e.classList.contains("depth1")&&(s=(t=e.closest(".depth1-item").querySelector(".depth2-wrap")).querySelector(".depth2-list").offsetHeight,window.innerWidth<1024)&&(e.classList.contains("active")?(e.classList.remove("active"),t.style.height="0"):(i.forEach(e=>{e.classList.remove("active")}),o.forEach(e=>{e.style.height="0"}),e.classList.add("active"),t.style.height=s+"px"))})}}function Tab(){var e=document.querySelectorAll(".tab-display");e.forEach(e=>{var t=e.querySelector(".tab-item:first-child");t.classList.add("active"),t.querySelector(".tab-text").setAttribute("aria-selected","true"),e.querySelector(".tab-list").addEventListener("keydown",function(e){var t=(e=event||window.event).keyCode||e.which;e.shiftKey||9!==t||(this.querySelectorAll(".tab-item").forEach(e=>{var t;e.classList.contains("active")?((t=e.querySelector(".tab-text")).setAttribute("tabindex","0"),t.setAttribute("aria-selected","true")):((t=e.querySelector(".tab-text")).setAttribute("tabindex","-1"),t.setAttribute("aria-selected","false"))}),document.querySelectorAll(".panel-item.hidden").forEach(e=>{e.tabIndex="-1"}))});const s=e.querySelectorAll(".tab-text");s.forEach(e=>{e.addEventListener("keydown",function(e){switch((e=event||window.event).keyCode||e.which){case 37:this.closest(".tab-item").previousElementSibling&&(this.setAttribute("tabindex","-1"),this.closest(".tab-item").previousElementSibling.querySelector(".tab-text").setAttribute("tabindex","0"),this.closest(".tab-item").previousElementSibling.querySelector(".tab-text").focus());break;case 39:this.closest(".tab-item").nextElementSibling&&(this.setAttribute("tabindex","-1"),this.closest(".tab-item").nextElementSibling.querySelector(".tab-text").setAttribute("tabindex","0"),this.closest(".tab-item").nextElementSibling.querySelector(".tab-text").focus());break;case 32:case 13:this&&(s.forEach(e=>{e.setAttribute("aria-selected","false")}),this.setAttribute("aria-selected","true"))}})})});const o=document.querySelectorAll(".panel-display");o.forEach(e=>{e.querySelectorAll(".panel-item").forEach((e,t)=>{0!=t&&e.classList.add("hidden")})}),e.forEach((e,a)=>{const i=e.querySelectorAll(".tab-item");i.forEach((e,s)=>{const t=e.querySelector(".tab-text");t.addEventListener("click",()=>{var e=t.closest(".tab-item");i.forEach(e=>{e.classList.remove("active"),e.querySelector(".tab-text").setAttribute("tabindex","-1"),e.querySelector(".tab-text").setAttribute("aria-selected","false")}),e.classList.add("active"),t.setAttribute("tabindex","0"),t.setAttribute("aria-selected","true"),o.forEach((e,t)=>{a==t&&e.querySelectorAll(".panel-item").forEach((e,t)=>{e.classList.add("hidden"),s==t&&e.classList.remove("hidden")})})})})}),new Swiper(".tab-wrap",{slidesPerView:"auto",freeMode:!0})}function input(){document.querySelectorAll(".form").forEach(t=>{if(t.classList.contains("input")||t.classList.contains("search")){const s=t.querySelector(".remove");s&&(t.addEventListener("keyup",()=>{var e=t.querySelector(".input-elem").value;s.style.display=e?"block":"none"}),s.addEventListener("click",()=>{t.querySelector(".input-elem").value=null,s.style.display="none"})),t.classList.contains("disabled")&&t.querySelector(".input-elem").setAttribute("disabled","")}})}function select(){const t=document.querySelectorAll(".form.select.design1");for(const s of t)if(s){const a=s.querySelector("select"),i=s.querySelector(".arrow .blind");a.addEventListener("keydown",function(e){13!==e.keyCode&&(32!=e.keyCode||s.classList.contains("open"))||document.activeElement!==a||s.classList.toggle("open"),s.classList.contains("open")?i.innerHTML="열림":i.innerHTML="닫힘"}),s.addEventListener("click",()=>{s.classList.toggle("open"),s.classList.contains("open")?i.innerHTML="열림":i.innerHTML="닫힘"}),document.addEventListener("click",e=>{e=e.target;if(e.closest(".form.select")){if(e.closest(".form.select.open")){for(const s of t)s.classList.remove("open");e.closest(".form.select").classList.add("open")}}else for(const s of t)s.classList.remove("open");s.classList.contains("open")?i.innerHTML="열림":i.innerHTML="닫힘"})}}function swiperDesign1(){var e=new Swiper(".sync1",{slidesPerView:1,loopAdditionalSlides:1,effect:"fade",loop:!0,controller:{control:void 0}}),t=new Swiper(".sync2",{slidesPerView:1,loopAdditionalSlides:1,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},controller:{control:e}});(e.controller.control=t).controller.control=e}function Accordion(){function s(e,t){e.querySelectorAll(".accordion-head + *").forEach(e=>{e.style.maxHeight=t?e.scrollHeight+"px":null})}document.querySelectorAll(".accordion-display").forEach(function(e){const t=e.querySelector("button");t.addEventListener("click",function(){var e="열림"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",e?"닫힘":"열림")}),e.querySelectorAll(".accordion-head").forEach(e=>{e.addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})}),e.classList.contains("collapse")?s(e,!0):s(e,!1)})}function localAnimations_Case01(){$('[local-animation="case-1"]').each(function(){$this=$(this),($breadcrumb=$this.prev(".local-info").find(".data-list.breadcrumb")).removeClass("case1").addClass("case2"),setTimeout(function(){$breadcrumb.addClass("active1"),$this.addClass("active1")},500)}),gsap.utils.toArray('[local-animation="case-1"]').forEach((t,e)=>{var s=$(t).closest(".main").prev("header"),a=$(t).closest(".main").find(".local-info .data-list.breadcrumb");gsap.to(t,{scrollTrigger:{trigger:t,start:"105% bottom",end:"top bottom",onEnter:function(e){s.removeClass("light").addClass("transparent"),a.removeClass("dark").addClass("light"),t.classList.add("active2")}}})})}function localAnimations_Case02(){$('[local-animation="case-2"]').each(function(){$header=$("header"),$this=$(this),$breadcrumb=$this.prev(".local-info").find(".data-list.breadcrumb"),$main=$this.parents(".main"),$breadcrumb.removeClass("case1").addClass("case2"),setTimeout(function(){$breadcrumb.addClass("active1"),$this.addClass("active1")},500),setTimeout(function(){$breadcrumb.addClass("active2"),$this.addClass("active2"),$header.removeClass("light").addClass("transparent"),$breadcrumb.removeClass("dark").addClass("light"),setTimeout(function(){main.classList.add("active1")},1e3)},1500)}),gsap.utils.toArray('[local-animation="case-2"]').forEach((t,e)=>{gsap.to(t,{scrollTrigger:{trigger:t,start:"102% bottom",end:"top bottom",onEnter:function(e){t.classList.add("active3")},onLeaveBack:function(e){t.classList.remove("active3")}}})})}frontCommon.Html=function(){var e=null;return e=e||{reset:function(){frontCommonResize(),frontCommonScroll(),header(),localAnimations(),lenis()}}}();