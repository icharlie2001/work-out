"use strict";(self["webpackChunkworkout"]=self["webpackChunkworkout"]||[]).push([[544],{8544:function(e,t,o){o.r(t),o.d(t,{startFocusVisible:function(){return c}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s="ion-focused",n="ion-focusable",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=e=>{let t=[],o=!0;const c=e?e.shadowRoot:document,i=e||document.body,d=e=>{t.forEach((e=>e.classList.remove(s))),e.forEach((e=>e.classList.add(s))),t=e},u=()=>{o=!1,d([])},a=e=>{o=r.includes(e.key),o||d([])},v=e=>{if(o&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));d(t)}},f=()=>{c.activeElement===i&&d([])};c.addEventListener("keydown",a),c.addEventListener("focusin",v),c.addEventListener("focusout",f),c.addEventListener("touchstart",u),c.addEventListener("mousedown",u);const E=()=>{c.removeEventListener("keydown",a),c.removeEventListener("focusin",v),c.removeEventListener("focusout",f),c.removeEventListener("touchstart",u),c.removeEventListener("mousedown",u)};return{destroy:E,setFocus:d}}}}]);
//# sourceMappingURL=544.f27ab601.js.map