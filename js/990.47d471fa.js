"use strict";(self["webpackChunkworkout"]=self["webpackChunkworkout"]||[]).push([[990],{8990:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return c}});var r=n(6587),o=n(545),i=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(t,e,n,c,s)=>{const a=t.ownerDocument.defaultView,u=(0,o.i)(t),h=t=>{const e=50,{startX:n}=t;return u?n>=a.innerWidth-e:n<=e},l=t=>u?-t.deltaX:t.deltaX,d=t=>u?-t.velocityX:t.velocityX,k=t=>h(t)&&e(),w=t=>{const e=l(t),n=e/a.innerWidth;c(n)},f=t=>{const e=l(t),n=a.innerWidth,o=e/n,i=d(t),c=n/2,u=i>=0&&(i>.2||e>c),h=u?1-o:o,k=h*n;let w=0;if(k>5){const t=k/Math.abs(i);w=Math.min(t,540)}s(u,o<=0?.01:(0,r.h)(0,o,.9999),w)};return(0,i.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:k,onStart:n,onMove:w,onEnd:f})}}}]);
//# sourceMappingURL=990.47d471fa.js.map