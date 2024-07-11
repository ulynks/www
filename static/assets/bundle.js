/*! For license information please see bundle.js.LICENSE.txt */
(()=>{const t="uLynks";function e(t,e){const r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&e(r.status<400)},r.open("HEAD",t),r.send()}$((function(){console.info("This site was generated by",$("meta[name='generator']").attr("content"));const r=new URL(window.location.href).pathname;$(".nav-link").each((function(){$(this).removeClass("active").removeAttr("aria-current");let t=$(this).text().trim();t=DOMPurify.sanitize(t),t=new RegExp(t,"gi"),r.match(t)&&$(this).addClass("active").attr("aria-current","page")})),$('a[href^="mailto:"]').on("click",(function(){let e=$(this).attr("href").trim();e=DOMPurify.sanitize(e),e=e.replace(/mailto:/g,"");let r="mailto:"+encodeURIComponent(e);return r+="?subject="+encodeURIComponent(`Sent From ${t} Website`),r+="&body="+encodeURIComponent(`Dear ${t} Team,\n\n...\n\nKind Regards,\n`),window.location=r,!1})),$("a[href^='http']").each((function(){let t=$(this).attr("rel");t=DOMPurify.sanitize(t),t="noopener noreferrer"+(t&&!t.match("noopener noreferrer")?" "+t:""),$(this).attr({target:"_blank",rel:t})})),$("body").tooltip({selector:'[data-bs-toggle="tooltip"]'}),$(".img-hover").on("mouseenter",(function(){!function(t){let r=t.attr("data-hover")||!1;if(r)return r=DOMPurify.sanitize(r),void t.attr({src:r});const a=t.attr("src"),n=a.replace(/([^.]+).([^.]+)$/,"$1-hover");for(const r of["gif","jpg","png","svg"]){const o=n+"."+r;e(o,(function(e){e&&t.attr({src:o,"data-hover":o,"data-src":a})}))}t.attr("data-hover")||t.attr({src:a,"data-hover":a})}($(this))})).on("mouseleave",(function(){let t=$(this).attr("data-src")||$(this).attr("src");t=DOMPurify.sanitize(t),$(this).attr({src:t})}))}))})(),(()=>{function t(t="dark"){"auto"!==t&&null!==t||(t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");let e="dark"==t?"light":"dark";document.querySelectorAll("img").forEach((r=>{let a=r.getAttribute("src");if(null===a.match("/"+e+"/"))return;let n=a.replace("/"+e+"/","/"+t+"/");n=DOMPurify.sanitize(n),r.setAttribute("src",n)}))}(()=>{"use strict";const e=()=>localStorage.getItem("theme"),r=()=>e()||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),a=t=>{"auto"===t?document.documentElement.setAttribute("data-bs-theme",window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):document.documentElement.setAttribute("data-bs-theme",t)};a(r()),t(e());const n=(t,e=!1)=>{const r=document.querySelector("#bd-theme");if(!r)return;const a=document.querySelector("#bd-theme-text"),n=document.querySelector(".theme-icon-active use"),o=document.querySelector(`[data-bs-theme-value="${t}"]`),i=o.querySelector("svg use").getAttribute("href");document.querySelectorAll("[data-bs-theme-value]").forEach((t=>{t.classList.remove("active"),t.setAttribute("aria-pressed","false")})),o.classList.add("active"),o.setAttribute("aria-pressed","true"),n.setAttribute("href",i);const s=`${a.textContent} (${o.dataset.bsThemeValue})`;r.setAttribute("aria-label",s),e&&r.focus()};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(()=>{const t=e();"light"!==t&&"dark"!==t&&a(r())})),window.addEventListener("DOMContentLoaded",(()=>{n(r()),document.querySelectorAll("[data-bs-theme-value]").forEach((e=>{e.addEventListener("click",(()=>{let r=e.getAttribute("data-bs-theme-value");r=DOMPurify.sanitize(r),(t=>{localStorage.setItem("theme",t)})(r),a(r),n(r,!0),t(r)}))}))}))})()})();