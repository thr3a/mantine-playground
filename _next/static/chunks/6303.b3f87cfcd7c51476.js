"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6303],{7092:function(e,r,n){n.d(r,{X:function(){return H}});var t=n(7294),o=n(4761),a=n(9983),l=n(6289),i=n(6183),c=n(5851),s=n(1270);let u=(0,t.createContext)(null),f=u.Provider,p=()=>(0,t.useContext)(u);var d=n(6720),$=Object.defineProperty,m=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,r,n)=>r in e?$(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,b=(e,r)=>{for(var n in r||(r={}))y.call(r,n)&&v(e,n,r[n]);if(m)for(var n of m(r))g.call(r,n)&&v(e,n,r[n]);return e},h=(e,r)=>{var n={};for(var t in e)y.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&m)for(var t of m(e))0>r.indexOf(t)&&g.call(e,t)&&(n[t]=e[t]);return n};let k={orientation:"horizontal",spacing:"lg",size:"sm",offset:"xs"},w=(0,t.forwardRef)((e,r)=>{let n=(0,o.N4)("CheckboxGroup",k,e),{children:a,value:l,defaultValue:i,onChange:u,orientation:p,spacing:$,size:m,wrapperProps:y,offset:g}=n,v=h(n,["children","value","defaultValue","onChange","orientation","spacing","size","wrapperProps","offset"]),[w,x]=(0,c.C)({value:l,defaultValue:i,finalValue:[],onChange:u}),_=e=>{let r=e.currentTarget.value;x(w.includes(r)?w.filter(e=>e!==r):[...w,r])};return t.createElement(f,{value:{value:w,onChange:_,size:m}},t.createElement(d.I.Wrapper,b(b({labelElement:"div",size:m,__staticSelector:"CheckboxGroup",ref:r},y),v),t.createElement(s.K,{spacing:$,orientation:p,offset:g},a)))});w.displayName="@mantine/core/CheckboxGroup";var x=n(6817),_=Object.defineProperty,C=Object.defineProperties,E=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,O=(e,r,n)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,N=(e,r)=>{for(var n in r||(r={}))S.call(r,n)&&O(e,n,r[n]);if(P)for(var n of P(r))z.call(r,n)&&O(e,n,r[n]);return e},I=(e,r)=>C(e,E(r));let R={xs:16,sm:20,md:24,lg:30,xl:36},D={xs:8,sm:10,md:14,lg:16,xl:20};var T=(0,x.k)((e,{size:r,radius:n,color:t,transitionDuration:o},a)=>{let l=e.fn.size({size:r,sizes:R}),i=e.fn.variant({variant:"filled",color:t});return{icon:{ref:a("icon"),color:e.white,transform:"translateY(5px) scale(0.5)",opacity:0,transitionProperty:"opacity, transform",transitionTimingFunction:"ease",transitionDuration:`${o}ms`,pointerEvents:"none",width:e.fn.size({size:r,sizes:D}),position:"absolute",zIndex:1,top:0,bottom:0,left:0,right:0,margin:"auto","@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":void 0}},root:{display:"flex",alignItems:"center"},inner:{position:"relative",width:l,height:l},label:I(N({},e.fn.fontStyles()),{WebkitTapHighlightColor:"transparent",paddingLeft:e.spacing.sm,fontSize:e.fn.size({size:r,sizes:e.fontSizes}),lineHeight:`${l}px`,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,cursor:e.cursorType}),input:I(N({},e.fn.focusStyles()),{appearance:"none",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,border:`1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,width:l,height:l,borderRadius:e.fn.radius(n),padding:0,display:"block",margin:0,transition:`border-color ${o}ms ease, background-color ${o}ms ease`,cursor:e.cursorType,"&:checked":{backgroundColor:i.background,borderColor:i.background,[`& + .${a("icon")}`]:{opacity:1,transform:"translateY(0) scale(1)"}},"&:disabled":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],borderColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[3],cursor:"not-allowed",[`& + .${a("icon")}`]:{color:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[5]}}})}}),j=n(4459),G=Object.defineProperty,K=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,Y=(e,r,n)=>r in e?G(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,A=(e,r)=>{for(var n in r||(r={}))M.call(r,n)&&Y(e,n,r[n]);if(K)for(var n of K(r))L.call(r,n)&&Y(e,n,r[n]);return e},B=(e,r)=>{var n={};for(var t in e)M.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&K)for(var t of K(e))0>r.indexOf(t)&&L.call(e,t)&&(n[t]=e[t]);return n};let F={size:"sm",transitionDuration:100,icon:i.P},H=(0,t.forwardRef)((e,r)=>{let n=(0,o.N4)("Checkbox",F,e),{className:i,style:c,sx:s,checked:u,color:f,label:d,indeterminate:$,id:m,size:y,radius:g,wrapperProps:v,children:b,classNames:h,styles:k,transitionDuration:w,icon:x,unstyled:_}=n,C=B(n,["className","style","sx","checked","color","label","indeterminate","id","size","radius","wrapperProps","children","classNames","styles","transitionDuration","icon","unstyled"]),E=p(),P=(0,l.M)(m),{systemStyles:S,rest:z}=(0,a.x)(C),{classes:O,cx:N}=T({size:(null==E?void 0:E.size)||y,radius:g,color:f,transitionDuration:w},{name:"Checkbox",classNames:h,styles:k,unstyled:_}),I=E?{checked:E.value.includes(z.value),onChange:E.onChange}:{};return t.createElement(j.x,A(A({className:N(O.root,i),style:c,sx:s},S),v),t.createElement("div",{className:O.inner},t.createElement("input",A(A({id:P,ref:r,type:"checkbox",className:O.input,checked:$||u},z),I)),t.createElement(x,{indeterminate:$,className:O.icon})),d&&t.createElement("label",{className:O.label,htmlFor:P},d))});H.displayName="@mantine/core/Checkbox",H.Group=w},1270:function(e,r,n){n.d(r,{K:function(){return l}});var t=n(7294),o=n(1232),a=n(7564);function l({spacing:e,offset:r,orientation:n,children:l,role:i,unstyled:c}){return"horizontal"===n?t.createElement(o.Z,{pt:r,spacing:e,role:i,unstyled:c},l):t.createElement(a.K,{pt:r,spacing:e,role:i,unstyled:c},l)}},6183:function(e,r,n){n.d(r,{P:function(){return p},n:function(){return f}});var t=n(7294),o=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,s=(e,r)=>{for(var n in r||(r={}))l.call(r,n)&&c(e,n,r[n]);if(a)for(var n of a(r))i.call(r,n)&&c(e,n,r[n]);return e},u=(e,r)=>{var n={};for(var t in e)l.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&a)for(var t of a(e))0>r.indexOf(t)&&i.call(e,t)&&(n[t]=e[t]);return n};function f(e){return t.createElement("svg",s({viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),t.createElement("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function p(e){var r=e,{indeterminate:n}=r,o=u(r,["indeterminate"]);return n?t.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6"},o),t.createElement("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})):t.createElement(f,s({},o))}},7564:function(e,r,n){n.d(r,{K:function(){return m}});var t=n(7294),o=n(4761),a=(0,n(6817).k)((e,{spacing:r,align:n,justify:t})=>({root:{display:"flex",flexDirection:"column",alignItems:n,justifyContent:t,gap:e.fn.size({size:r,sizes:e.spacing})}})),l=n(4459),i=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,r,n)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,p=(e,r)=>{for(var n in r||(r={}))s.call(r,n)&&f(e,n,r[n]);if(c)for(var n of c(r))u.call(r,n)&&f(e,n,r[n]);return e},d=(e,r)=>{var n={};for(var t in e)s.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&c)for(var t of c(e))0>r.indexOf(t)&&u.call(e,t)&&(n[t]=e[t]);return n};let $={spacing:"md",align:"stretch",justify:"top"},m=(0,t.forwardRef)((e,r)=>{let n=(0,o.N4)("Stack",$,e),{spacing:i,className:c,align:s,justify:u,unstyled:f}=n,m=d(n,["spacing","className","align","justify","unstyled"]),{classes:y,cx:g}=a({spacing:i,align:s,justify:u},{name:"Stack",unstyled:f});return t.createElement(l.x,p({className:g(y.root,c),ref:r},m))});m.displayName="@mantine/core/Stack"},6289:function(e,r,n){n.d(r,{M:function(){return i}});var t=n(7294),o=n(129);let a=()=>`mantine-${Math.random().toString(36).slice(2,11)}`,l=t["useId".toString()]||(()=>void 0);function i(e){return"string"==typeof e?e:function(){let e=l();return e?`mantine-${e.replace(/:/g,"")}`:""}()||function(){let[e,r]=(0,t.useState)("");return(0,o.Y)(()=>{r(a())},[]),e}()}},5851:function(e,r,n){n.d(r,{C:function(){return o}});var t=n(7294);function o({value:e,defaultValue:r,finalValue:n,onChange:o=()=>{}}){let[a,l]=(0,t.useState)(void 0!==r?r:n),i=e=>{l(e),null==o||o(e)};return void 0!==e?[e,o,!0]:[a,i,!1]}},6303:function(e,r,n){n.r(r),n.d(r,{default:function(){return a}});var t=n(5893),o=n(7092);function a(){return(0,t.jsx)(o.X,{label:"I agree to sell my privacy"})}}}]);