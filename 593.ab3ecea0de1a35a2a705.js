"use strict";(self.webpackJsonpRuntime=self.webpackJsonpRuntime||[]).push([[593],{7593:(e,t,o)=>{o.r(t),o.d(t,{closeMegaMenus:()=>g,handleBodyScrollWithMegaMenu:()=>f,openMegaMenu:()=>p,registerMegaMenu:()=>d});var n=o(7174),c=o(5976),s=o(3848);const l="open",r="--flex-header-height";function u(e){e.scrollTop=0}function d(){const e=document.querySelectorAll(n.m),t=document.querySelector(c.pM);let o;e.forEach((e=>{const n=e.getAttribute("data-target-page-alias").split(":")[1],c=document.querySelector(`[data-flex-id="${n}"]`);c&&(e.addEventListener("mouseenter",(()=>{(0,s.OK)()||(clearTimeout(o),i(),h(t),a(c),f(n),u(t))})),e.addEventListener("mouseleave",(()=>{(0,s.OK)()||(o=setTimeout((()=>{e.matches(":hover")||c.matches(":hover")||t.matches(":hover")||(y(t),m(c),f(n))}),500))})),c.addEventListener("mouseleave",(()=>{(0,s.OK)()||c.matches(":focus-within")||(y(t),m(c),f(n))})))}))}function i(){const e=document.querySelector(c.pM);document.querySelectorAll(`${c.pM} [data-flex-id].${l}`).forEach((e=>{m(e)})),y(e)}function a(e){e.classList.add(l),window.dispatchEvent(new Event("resize"))}function m(e){e.classList.remove(l)}function h(e){if(!e)return;const t=`${document.getElementById(c.a$).offsetHeight}px`;e.style.top=t,e.style.setProperty(r,t),e.classList.add(l)}function y(e){e&&(e.style.top="",e.style.removeProperty(r),e.classList.remove(l))}function f(e){const t=document.querySelector(`[data-flex-id="${e}"]`),o=document.querySelector(c.pM),n=document.getElementById(c.a$)?.getAttribute("data-sticky"),s=t.clientHeight>o.clientHeight;n&&s?(document.body.style.height="100vh",document.body.style.overflow="hidden"):(document.body.style.height="",document.body.style.overflow="")}function p(e){const t=document.querySelector(c.pM),o=document.querySelector(`[data-flex-id="${e}"]`);o.closest(c.pM)?o.matches(`.${l}`)||(i(),h(t),a(o),f(e),u(t)):i()}function g(){i()}}}]);