var frontCommon=frontCommon||{};function frontCommonResize(){window.addEventListener("resize",()=>{var e=document.getElementById("header");document.querySelector(".modal.show")&&e.classList.add("regular")})}function frontCommonScroll(){window.addEventListener("scroll",()=>{})}function lenis(){let o=new Lenis;requestAnimationFrame(function e(t){o.raf(t),requestAnimationFrame(e)});let t=document.getElementById("header"),e=t.querySelector(".site-navi");var s=t.querySelector(".btn.menu-header"),i=document.querySelector('[data-bs-toggle="modal"]');let r=document.querySelectorAll(".modal");if(window.addEventListener("scroll",()=>{-1==o.direction?(t.classList.add("up-color"),t.classList.remove("regular"),t.classList.remove("regular-focus"),e.classList.remove("close"),o.animatedScroll<5&&t.classList.remove("up-color")):(e.classList.add("close"),document.activeElement.closest(".depth1-item")||t.classList.contains("hover")?(t.classList.add("regular-focus"),t.classList.remove("regular"),o.animatedScroll<5&&t.classList.remove("regular-focus")):t.classList.contains("open")||(t.classList.add("regular"),t.classList.remove("regular-focus"),o.animatedScroll<5&&(t.classList.remove("up-color"),t.classList.remove("regular"))))}),o.animatedScroll<window.innerHeight?(t.classList.remove("regular"),t.classList.remove("regular-focus")):t.classList.add("regular"),s.addEventListener("click",function(){var e=document.getElementById("wrap");t.classList.contains("open")?o=new Lenis:(e.removeAttribute("style"),o.destroy())}),window.addEventListener("resize",()=>{1024<=window.innerWidth&&r&&r.forEach(e=>{e.classList.contains("show")||(o=new Lenis)})}),i&&i.addEventListener("click",function(){t.style.top="-7.2rem",r.forEach(e=>{e&&e.classList.contains("show")&&o.destroy()})}),r.forEach(e=>{e&&e.querySelector(".modal-close").addEventListener("click",function(){o=new Lenis,t.removeAttribute("style")})}),document.getElementById("main").classList.contains("sk-main")){let e=document.querySelector(".section.media"),t=e.querySelector(".press-media"),s=e.querySelector(".sns-media");e&&s&&gsap.to(t,{scrollTrigger:{trigger:s,start:"top bottom",end:"top bottom",onEnter:function(){1024<=window.innerWidth&&(t.style.top=window.innerHeight-t.offsetHeight+"px")},onLeave:function(){1024<=window.innerWidth&&(o.stop(),e.classList.add("active2"),t=e.querySelector(".press-media"),s.style.marginTop=-t.offsetHeight+"px",setTimeout(()=>{o.start()},1e3))},onEnterBack:function(){1024<=window.innerWidth&&(o.stop(),e.classList.remove("active2"),s.style.marginTop="0",t.style.top=window.innerHeight-t.offsetHeight+"px",setTimeout(()=>{o.start()},1e3))}}})}document.addEventListener("keydown",s=>{"Tab"===s.key&&setTimeout(()=>{var e,t=document.activeElement;media&&(e=media.querySelector(".press-media"),t.closest(".press-media")&&window.scrollTo(0,media.offsetTop+e.style.getPropertyValue(top)),t.classList.contains("newest-link"))&&!s.shiftKey&&window.scrollTo(0,e.offsetTop-e.offsetHeight+300)},0)})}function localAnimations(){$header=$("header"),$breadcrumb=$(".data-list.breadcrumb"),$('[data-local-animation="case-1"]').each(function(){($this=$(this)).addClass("active"),$breadcrumb.removeClass("case1").addClass("case2")})}function header(){let r=document.querySelector("body"),a=document.getElementById("header"),n=a.querySelectorAll(".depth1-item"),c=document.querySelectorAll(".depth1"),l=document.querySelectorAll(".depth2-wrap"),d=a.querySelector(".site-navi");window.innerWidth;if(a){function u(){let t=document.querySelector("body");1200<=window.innerWidth?n.forEach(e=>{e=e.querySelector(".depth2-list");7<e.querySelectorAll(".depth2-item").length&&(e.style.flexWrap="wrap",t.classList.contains("en")?e.style.maxWidth="83.6rem":e.style.maxWidth="74rem")}):n.forEach(e=>{e=e.querySelector(".depth2-list");7<e.querySelectorAll(".depth2-item").length&&e.removeAttribute("style")})}window.addEventListener("resize",()=>{if(1200<=window.innerWidth){a.classList.remove("open"),a.removeAttribute("style");for(var e of c)e.classList.remove("active");for(var t of l)t.removeAttribute("style");r.style.overflow="auto"}u()}),u(),document.addEventListener("keydown",e=>{"Tab"===e.key&&setTimeout(()=>{var e=document.activeElement,t=(n.forEach(e=>{e.classList.remove("active")}),e.closest(".depth1-item"));t&&(d.classList.remove("close"),t.classList.add("active")),e.closest(".site-navi")||d.classList.add("close")},0)}),a.querySelectorAll("*").forEach(e=>{e.addEventListener("mouseenter",e=>{n.forEach(e=>{e.classList.remove("active")});var t=e.target.closest(".depth1-item");t&&(d.classList.remove("close"),t.classList.add("active")),e.target.closest(".site-navi")||d.classList.add("close")})});var m=document.getElementById("lang"),v=m.querySelector(".selected");let e=m.querySelector(".option-area"),t=(v.addEventListener("click",function(){e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}),a.addEventListener("mouseenter",()=>{a.classList.add("hover")}),a.addEventListener("mouseleave",()=>{a.classList.remove("hover")}),document.addEventListener("focusin",function(e){e=e.target;e.closest(".dark")||e.closest(".transparent")?a.classList.add("hover"):a.classList.remove("hover")}),a.querySelector(".site-navi")),s=a.querySelector(".site-util");var h,m=a.querySelector(".btn.menu-header");let o=m.querySelector(".btn-text"),i=1;for(h of n)h.style.animationDelay=.15*i+"s",i++;m.addEventListener("click",function(){a.classList.contains("open")?(r.style.overflow="auto",o.innerHTML="메뉴 열기",a.style.height="5.8rem",setTimeout(()=>{a.classList.remove("open");for(var e of c)e.classList.remove("active");for(var t of l)t.classList.remove("active"),$(".depth2-wrap").slideUp(300)},300)):(r.style.overflow="hidden",o.innerHTML="메뉴 닫기",t.style.display="block",s.style.display="flex",a.style.height="100%",setTimeout(()=>{a.classList.add("open")},300))}),document.addEventListener("click",function(e){var t=e.target;t.classList.contains("depth1")&&window.innerWidth<1200&&(e.preventDefault(),t.classList.contains("active")?(t.classList.remove("active"),$(".depth2-wrap").slideUp(300)):($(".depth2-wrap").slideUp(300),c.forEach(e=>{e.classList.remove("active")}),t.classList.add("active"),$(".depth1.active ~.depth2-wrap").slideDown(300)))})}}function Tab(){var e=document.querySelectorAll(".tab-display");e.forEach(e=>{var t=e.querySelector(".tab-item:first-child");t.classList.add("active"),t.querySelector(".tab-text").setAttribute("aria-selected","true"),e.querySelector(".tab-list").addEventListener("keydown",function(e){var t=(e=event||window.event).keyCode||e.which;e.shiftKey||9!==t||(this.querySelectorAll(".tab-item").forEach(e=>{var t;e.classList.contains("active")?((t=e.querySelector(".tab-text")).setAttribute("tabindex","0"),t.setAttribute("aria-selected","true")):((t=e.querySelector(".tab-text")).setAttribute("tabindex","-1"),t.setAttribute("aria-selected","false"))}),document.querySelectorAll(".panel-item.hidden").forEach(e=>{}))});let s=e.querySelectorAll(".tab-text");s.forEach(e=>{e.addEventListener("keydown",function(e){switch((e=event||window.event).keyCode||e.which){case 37:this.closest(".tab-item").previousElementSibling&&(this.setAttribute("tabindex","-1"),this.closest(".tab-item").previousElementSibling.querySelector(".tab-text").setAttribute("tabindex","0"),this.closest(".tab-item").previousElementSibling.querySelector(".tab-text").focus());break;case 39:this.closest(".tab-item").nextElementSibling&&(this.setAttribute("tabindex","-1"),this.closest(".tab-item").nextElementSibling.querySelector(".tab-text").setAttribute("tabindex","0"),this.closest(".tab-item").nextElementSibling.querySelector(".tab-text").focus());break;case 32:case 13:this&&(s.forEach(e=>{e.setAttribute("aria-selected","false")}),this.setAttribute("aria-selected","true"))}})})});let r=document.querySelectorAll(".panel-display");r.forEach(e=>{e.querySelectorAll(".panel-item").forEach((e,t)=>{0!=t&&e.classList.add("hidden")})}),e.forEach((e,o)=>{let i=e.querySelectorAll(".tab-item");i.forEach((e,s)=>{let t=e.querySelector(".tab-text");t.addEventListener("click",()=>{var e=t.closest(".tab-item");i.forEach(e=>{e.classList.remove("active"),e.querySelector(".tab-text").setAttribute("tabindex","-1"),e.querySelector(".tab-text").setAttribute("aria-selected","false")}),e.classList.add("active"),t.setAttribute("tabindex","0"),t.setAttribute("aria-selected","true"),r.forEach((e,t)=>{o==t&&e.querySelectorAll(".panel-item").forEach((e,t)=>{e.classList.add("hidden"),s==t&&e.classList.remove("hidden")})})})})}),new Swiper(".tab-wrap",{slidesPerView:"auto",freeMode:!0})}function input(){document.querySelectorAll(".form").forEach(s=>{if(s.classList.contains("input")||s.classList.contains("search")){let t=s.querySelector(".remove");t&&(s.addEventListener("keyup",()=>{var e=s.querySelector(".input-elem").value;t.style.display=e?"block":"none"}),t.addEventListener("click",()=>{s.querySelector(".input-elem").value=null,t.style.display="none"})),s.classList.contains("disabled")&&s.querySelector(".input-elem").setAttribute("disabled","")}})}function select(){let r=document.querySelectorAll(".form.select.design1");for(let i of r)if(i){let s=i.querySelector("select"),o=i.querySelector(".arrow .blind");s.addEventListener("keydown",function(e){var t=document.querySelector("body");13!==e.keyCode&&(32!=e.keyCode||i.classList.contains("open"))||document.activeElement!==s||i.classList.toggle("open"),i.classList.contains("open")?t.classList.contains("en")?o.innerHTML="Open":o.innerHTML="열림":t.classList.contains("en")?o.innerHTML="Close":o.innerHTML="닫힘"}),i.addEventListener("click",()=>{var e=document.querySelector("body");i.classList.toggle("open"),i.classList.contains("open")?e.classList.contains("en")?o.innerHTML="Open":o.innerHTML="열림":e.classList.contains("en")?o.innerHTML="Close":o.innerHTML="닫힘"}),document.addEventListener("click",e=>{var t=document.querySelector("body"),e=e.target;if(e.closest(".form.select")){if(e.closest(".form.select.open")){for(let e of r)e.classList.remove("open");e.closest(".form.select").classList.add("open")}}else for(let e of r)e.classList.remove("open");i.classList.contains("open")?t.classList.contains("en")?o.innerHTML="Open":o.innerHTML="열림":t.classList.contains("en")?o.innerHTML="Close":o.innerHTML="닫힘"})}}function Accordion(){document.querySelectorAll(".accordion-display").forEach(function(e){var t=e.querySelectorAll(".accordion-item");function s(e,t){e.querySelectorAll(".accordion-head + *").forEach(e=>{e.style.height=t?e.scrollHeight+"px":null})}t.forEach(function(t){var e=t.querySelector(".btn");e.addEventListener("click",function(){var e=this.getAttribute("aria-label");"열림"===e?this.setAttribute("aria-label","닫힘"):"닫힘"===e?this.setAttribute("aria-label","열림"):"open"===e?this.setAttribute("aria-label","close"):"close"===e&&this.setAttribute("aria-label","open")}.bind(e)),t.querySelectorAll(".accordion-head").forEach(e=>{e.addEventListener("click",function(){t.classList.toggle("active");var e=this.nextElementSibling;e.style.height?e.style.height=null:e.style.height=e.scrollHeight+"px"})})}),e.classList.contains("collapse")?t.forEach(e=>s(e,!0)):t.forEach(e=>s(e,!1))})}function localAnimations_Case01(){function e(){var e=window.scrollY;0<e&&e<200&&gsap.to(".local-util",{y:e,duration:0})}$('[data-local-animation="case-1"]').each(function(){$this=$(this),$breadcrumb=$this.prev(".local-info").find(".data-list.breadcrumb"),setTimeout(function(){$breadcrumb.addClass("active1"),$this.addClass("active1")},500)}),gsap.utils.toArray('[data-local-animation="case-1"]').forEach((t,e)=>{var s=$(t).closest(".main").prev("header"),o=$(t).closest(".main").find(".local-info .data-list.breadcrumb");gsap.to(t,{scrollTrigger:{trigger:t,start:"101% bottom",end:"top bottom",scrub:.001,onEnter:function(e){s.removeClass("light").addClass("transparent"),o.removeClass("dark").addClass("light"),t.classList.add("active2"),gsap.to(".local-util",{opacity:0,duration:.2})},onEnterBack:function(e){gsap.to(".local-util",{opacity:1,duration:.2})}}})}),e(),document.addEventListener("scroll",e),window.addEventListener("resize",e)}function localAnimations_Case02(){let s=$(".data-list.breadcrumb"),o=$(".local-figure"),i=$(".local-subject");var e=$(".local-subject .local-name");let r=$(".local-aside"),a=$(".local-util");gsap.to(e,{duration:1,opacity:1,y:"0%"}),gsap.to(o,{duration:1,delay:.5,opacity:1,y:"0%"}),gsap.utils.toArray('[data-local-animation="case-2"]').forEach((e,t)=>{gsap.timeline({scrollTrigger:{trigger:e,start:"top top",end:"bottom bottom",scrub:.001}}).fromTo(s,{y:"0vh"},{y:"40vh",opacity:0},0).fromTo(i,{y:"0vh"},{y:"40vh",opacity:0},0).fromTo(o,{width:()=>"90vw",x:"-50%"},{width:()=>"100vw",x:"-50%"},0).to(o,{"background-color":"rgba(0, 0, 0, 0.5)"},0).fromTo(r,{y:"-30vh"},{y:"0%"},0).fromTo(r,{opacity:0},{opacity:1,delay:.5},0).fromTo(a,{opacity:1,y:"0"},{opacity:0,y:"0%"},0)})}function footer(){let e=document.querySelector(".family-site");var t=e.querySelector(".btn-family");e.querySelector(".site-area");t.addEventListener("click",function(){e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")})}function business_Interaction(){if(document.querySelector(".main").classList.contains("business")){let t=document.querySelector(".article.intro"),s=document.querySelector(".article.major"),o=document.querySelector(".article.hico"),i=document.querySelector(".article.history"),r=document.querySelector(".section.portfolio");t&&new IntersectionObserver(e=>{e.forEach(e=>{.1<e.intersectionRatio&&t.classList.add("active")})},{threshold:[.1]}).observe(t.querySelector(".article-body")),s&&new IntersectionObserver(e=>{e.forEach(e=>{.1<e.intersectionRatio&&s.classList.add("active")})},{threshold:[.1]}).observe(s),o&&(new IntersectionObserver(e=>{e.forEach(e=>{.4<e.intersectionRatio&&o.classList.add("active1")})},{threshold:[.4]}).observe(o.querySelector(".article-head")),new IntersectionObserver(e=>{e.forEach(e=>{.6<e.intersectionRatio&&o.classList.add("active2")})},{threshold:[.6]}).observe(o.querySelector(".article-body"))),i&&new IntersectionObserver(e=>{e.forEach(e=>{.2<e.intersectionRatio&&i.classList.add("active")})},{threshold:[.2]}).observe(i),r&&(new IntersectionObserver(e=>{e.forEach(e=>{.2<e.intersectionRatio&&r.classList.add("active1")})},{threshold:[.2]}).observe(r.querySelector(".investment")),new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&r.classList.add("active2")})},{threshold:[.01]}).observe(r.querySelector(".article-body")))}}function quickScrollTopBtn(){var e=$(".btn-to-top .top-btn");e.on("click",function(){$("html, body").animate({scrollTop:0},500)})}function scrollTopBtn(){$(window).scroll(function(){var e=$(window),t=e.scrollTop(),s=$(".btn-to-top"),o=.05*parseInt($("#wrap").innerHeight()),e=$("#main").innerHeight()-e.innerHeight();o<=t?s.addClass("active"):s.removeClass("active"),e<=t?s.addClass("fixed"):s.removeClass("fixed")})}frontCommon.Html=function(){var e=null;return e=e||{reset:function(){frontCommonResize(),header(),footer(),localAnimations(),lenis(),business_Interaction(),quickScrollTopBtn(),scrollTopBtn()}}}();