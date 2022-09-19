"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8310],{7092:function(e,r,t){t.d(r,{X:function(){return K}});var n=t(7294),o=t(4761),l=t(9983),a=t(6289),i=t(6183),s=t(5851),c=t(1270);let u=(0,n.createContext)(null),f=u.Provider,p=()=>(0,n.useContext)(u);var d=t(6720),_=Object.defineProperty,$=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,r,t)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))m.call(r,t)&&h(e,t,r[t]);if($)for(var t of $(r))g.call(r,t)&&h(e,t,r[t]);return e},v=(e,r)=>{var t={};for(var n in e)m.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&$)for(var n of $(e))0>r.indexOf(n)&&g.call(e,n)&&(t[n]=e[n]);return t};let b={orientation:"horizontal",spacing:"lg",size:"sm",offset:"xs"},w=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("CheckboxGroup",b,e),{children:l,value:a,defaultValue:i,onChange:u,orientation:p,spacing:_,size:$,wrapperProps:m,offset:g}=t,h=v(t,["children","value","defaultValue","onChange","orientation","spacing","size","wrapperProps","offset"]),[w,x]=(0,s.C)({value:a,defaultValue:i,finalValue:[],onChange:u}),k=e=>{let r=e.currentTarget.value;x(w.includes(r)?w.filter(e=>e!==r):[...w,r])};return n.createElement(f,{value:{value:w,onChange:k,size:$}},n.createElement(d.I.Wrapper,y(y({labelElement:"div",size:$,__staticSelector:"CheckboxGroup",ref:r},m),h),n.createElement(c.K,{spacing:_,orientation:p,offset:g},l)))});w.displayName="@mantine/core/CheckboxGroup";var x=t(6817),k=Object.defineProperty,E=Object.defineProperties,C=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,S=(e,r,t)=>r in e?k(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,z=(e,r)=>{for(var t in r||(r={}))L.call(r,t)&&S(e,t,r[t]);if(P)for(var t of P(r))O.call(r,t)&&S(e,t,r[t]);return e},N=(e,r)=>E(e,C(r));let I={xs:16,sm:20,md:24,lg:30,xl:36},R={xs:8,sm:10,md:14,lg:16,xl:20};var T=(0,x.k)((e,{size:r,radius:t,color:n,transitionDuration:o},l)=>{let a=e.fn.size({size:r,sizes:I}),i=e.fn.variant({variant:"filled",color:n});return{icon:{ref:l("icon"),color:e.white,transform:"translateY(5px) scale(0.5)",opacity:0,transitionProperty:"opacity, transform",transitionTimingFunction:"ease",transitionDuration:`${o}ms`,pointerEvents:"none",width:e.fn.size({size:r,sizes:R}),position:"absolute",zIndex:1,top:0,bottom:0,left:0,right:0,margin:"auto","@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":void 0}},root:{display:"flex",alignItems:"center"},inner:{position:"relative",width:a,height:a},label:N(z({},e.fn.fontStyles()),{WebkitTapHighlightColor:"transparent",paddingLeft:e.spacing.sm,fontSize:e.fn.size({size:r,sizes:e.fontSizes}),lineHeight:`${a}px`,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,cursor:e.cursorType}),input:N(z({},e.fn.focusStyles()),{appearance:"none",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,border:`1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,width:a,height:a,borderRadius:e.fn.radius(t),padding:0,display:"block",margin:0,transition:`border-color ${o}ms ease, background-color ${o}ms ease`,cursor:e.cursorType,"&:checked":{backgroundColor:i.background,borderColor:i.background,[`& + .${l("icon")}`]:{opacity:1,transform:"translateY(0) scale(1)"}},"&:disabled":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],borderColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[3],cursor:"not-allowed",[`& + .${l("icon")}`]:{color:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[5]}}})}}),M=t(4459),W=Object.defineProperty,D=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,H=(e,r,t)=>r in e?W(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,F=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&H(e,t,r[t]);if(D)for(var t of D(r))B.call(r,t)&&H(e,t,r[t]);return e},G=(e,r)=>{var t={};for(var n in e)A.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&D)for(var n of D(e))0>r.indexOf(n)&&B.call(e,n)&&(t[n]=e[n]);return t};let j={size:"sm",transitionDuration:100,icon:i.P},K=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("Checkbox",j,e),{className:i,style:s,sx:c,checked:u,color:f,label:d,indeterminate:_,id:$,size:m,radius:g,wrapperProps:h,children:y,classNames:v,styles:b,transitionDuration:w,icon:x,unstyled:k}=t,E=G(t,["className","style","sx","checked","color","label","indeterminate","id","size","radius","wrapperProps","children","classNames","styles","transitionDuration","icon","unstyled"]),C=p(),P=(0,a.M)($),{systemStyles:L,rest:O}=(0,l.x)(E),{classes:S,cx:z}=T({size:(null==C?void 0:C.size)||m,radius:g,color:f,transitionDuration:w},{name:"Checkbox",classNames:v,styles:b,unstyled:k}),N=C?{checked:C.value.includes(O.value),onChange:C.onChange}:{};return n.createElement(M.x,F(F({className:z(S.root,i),style:s,sx:c},L),h),n.createElement("div",{className:S.inner},n.createElement("input",F(F({id:P,ref:r,type:"checkbox",className:S.input,checked:_||u},O),N)),n.createElement(x,{indeterminate:_,className:S.icon})),d&&n.createElement("label",{className:S.label,htmlFor:P},d))});K.displayName="@mantine/core/Checkbox",K.Group=w},1270:function(e,r,t){t.d(r,{K:function(){return a}});var n=t(7294),o=t(1232),l=t(7564);function a({spacing:e,offset:r,orientation:t,children:a,role:i,unstyled:s}){return"horizontal"===t?n.createElement(o.Z,{pt:r,spacing:e,role:i,unstyled:s},a):n.createElement(l.K,{pt:r,spacing:e,role:i,unstyled:s},a)}},6183:function(e,r,t){t.d(r,{P:function(){return p},n:function(){return f}});var n=t(7294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))i.call(r,t)&&s(e,t,r[t]);return e},u=(e,r)=>{var t={};for(var n in e)a.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))0>r.indexOf(n)&&i.call(e,n)&&(t[n]=e[n]);return t};function f(e){return n.createElement("svg",c({viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function p(e){var r=e,{indeterminate:t}=r,o=u(r,["indeterminate"]);return t?n.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6"},o),n.createElement("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})):n.createElement(f,c({},o))}},6261:function(e,r,t){t.d(r,{k:function(){return m}});var n=t(4761),o=t(9983),l=t(6289),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))f.call(r,t)&&p(e,t,r[t]);return e},_=(e,r)=>i(e,s(r)),$=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))0>r.indexOf(n)&&f.call(e,n)&&(t[n]=e[n]);return t};function m(e,r,t){let a=(0,n.N4)(e,r,t),{label:i,description:s,error:c,required:u,classNames:f,styles:p,className:m,unstyled:g,__staticSelector:h,sx:y,errorProps:v,labelProps:b,descriptionProps:w,wrapperProps:x,id:k,size:E,style:C,inputContainer:P,inputWrapperOrder:L,withAsterisk:O}=a,S=$(a,["label","description","error","required","classNames","styles","className","unstyled","__staticSelector","sx","errorProps","labelProps","descriptionProps","wrapperProps","id","size","style","inputContainer","inputWrapperOrder","withAsterisk"]),z=(0,l.M)(k),{systemStyles:N,rest:I}=(0,o.x)(S);return _(d({},I),{classNames:f,styles:p,unstyled:g,wrapperProps:d(d({label:i,description:s,error:c,required:u,classNames:f,className:m,__staticSelector:h,sx:y,errorProps:v,labelProps:b,descriptionProps:w,unstyled:g,styles:p,id:z,size:E,style:C,inputContainer:P,inputWrapperOrder:L,withAsterisk:O},x),N),inputProps:{required:u,classNames:f,styles:p,unstyled:g,id:z,size:E,__staticSelector:h,invalid:!!c}})}},4144:function(e,r,t){t.d(r,{O:function(){return u}});var n=t(7294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))i.call(r,t)&&s(e,t,r[t]);return e};function u(e){return n.createElement("svg",c({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",fill:"currentColor"}))}},8175:function(e,r,t){t.d(r,{O:function(){return u}});var n=t(7294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))i.call(r,t)&&s(e,t,r[t]);return e};function u(e){return n.createElement("svg",c({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",fill:"currentColor"}))}},9144:function(e,r,t){t.d(r,{N:function(){return u}});var n=t(7294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))i.call(r,t)&&s(e,t,r[t]);return e};function u(e){return n.createElement("svg",c({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z",fill:"currentColor"}))}},9500:function(e,r,t){t.d(r,{g:function(){return u}});var n=t(7294),o=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))a.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))i.call(r,t)&&s(e,t,r[t]);return e};function u(e){return n.createElement("svg",c({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z",fill:"currentColor"}))}},7664:function(e,r,t){t.d(r,{r:function(){return $}});var n=t(7294),o=t(3723),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&f(e,t,r[t]);if(s)for(var t of s(r))u.call(r,t)&&f(e,t,r[t]);return e},d=(e,r)=>a(e,i(r)),_=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))0>r.indexOf(n)&&u.call(e,n)&&(t[n]=e[n]);return t};let $=(0,n.forwardRef)((e,r)=>{var t=e,{style:l}=t,a=_(t,["style"]);return n.createElement(o.x,d(p({},a),{style:p({width:"100%"},l),viewportRef:r}),a.children)});$.displayName="@mantine/core/SelectScrollArea"},9469:function(e,r,t){t.d(r,{M:function(){return x}});var n=t(7294),o=t(4761),l=t(6817),a=t(3687),i=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&f(e,t,r[t]);if(s)for(var t of s(r))u.call(r,t)&&f(e,t,r[t]);return e},d=(0,l.k)((e,{spacing:r,breakpoints:t,cols:n,verticalSpacing:o})=>{let l=null!=o,i=(0,a.I)(e,t).reduce((t,n)=>{let a="maxWidth"in n?"max-width":"min-width",i=e.fn.size({size:"max-width"===a?n.maxWidth:n.minWidth,sizes:e.breakpoints});return t[`@media (${a}: ${i+("max-width"===a?0:1)}px)`]={gridTemplateColumns:`repeat(${n.cols}, minmax(0, 1fr))`,gap:`${e.fn.size({size:n.verticalSpacing||(l?o:r),sizes:e.spacing})}px ${e.fn.size({size:n.spacing||r,sizes:e.spacing})}px`},t},{});return{root:p({boxSizing:"border-box",display:"grid",gridTemplateColumns:`repeat(${n}, minmax(0, 1fr))`,gap:`${e.fn.size({size:l?o:r,sizes:e.spacing})}px ${e.fn.size({size:r,sizes:e.spacing})}px`},i)}}),_=t(4459),$=Object.defineProperty,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,y=(e,r,t)=>r in e?$(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,v=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&y(e,t,r[t]);if(m)for(var t of m(r))h.call(r,t)&&y(e,t,r[t]);return e},b=(e,r)=>{var t={};for(var n in e)g.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&m)for(var n of m(e))0>r.indexOf(n)&&h.call(e,n)&&(t[n]=e[n]);return t};let w={breakpoints:[],cols:1,spacing:"md"},x=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("SimpleGrid",w,e),{className:l,breakpoints:a,cols:i,spacing:s,verticalSpacing:c,children:u,unstyled:f}=t,p=b(t,["className","breakpoints","cols","spacing","verticalSpacing","children","unstyled"]),{classes:$,cx:m}=d({breakpoints:a,cols:i,spacing:s,verticalSpacing:c},{unstyled:f,name:"SimpleGrid"});return n.createElement(_.x,v({className:m($.root,l),ref:r},p),u)});x.displayName="@mantine/core/SimpleGrid"},3687:function(e,r,t){t.d(r,{I:function(){return n}});function n(e,r){if(0===r.length)return r;let t="maxWidth"in r[0]?"maxWidth":"minWidth",n=[...r].sort((r,n)=>e.fn.size({size:n[t],sizes:e.breakpoints})-e.fn.size({size:r[t],sizes:e.breakpoints}));return"minWidth"===t?n.reverse():n}},7564:function(e,r,t){t.d(r,{K:function(){return $}});var n=t(7294),o=t(4761),l=(0,t(6817).k)((e,{spacing:r,align:t,justify:n})=>({root:{display:"flex",flexDirection:"column",alignItems:t,justifyContent:n,gap:e.fn.size({size:r,sizes:e.spacing})}})),a=t(4459),i=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&f(e,t,r[t]);if(s)for(var t of s(r))u.call(r,t)&&f(e,t,r[t]);return e},d=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))0>r.indexOf(n)&&u.call(e,n)&&(t[n]=e[n]);return t};let _={spacing:"md",align:"stretch",justify:"top"},$=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("Stack",_,e),{spacing:i,className:s,align:c,justify:u,unstyled:f}=t,$=d(t,["spacing","className","align","justify","unstyled"]),{classes:m,cx:g}=l({spacing:i,align:c,justify:u},{name:"Stack",unstyled:f});return n.createElement(a.x,p({className:g(m.root,s),ref:r},$))});$.displayName="@mantine/core/Stack"},61:function(e,r,t){t.d(r,{o:function(){return g}});var n=t(7294),o=t(6261),l=t(6720),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))f.call(r,t)&&p(e,t,r[t]);return e},_=(e,r)=>i(e,s(r)),$=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))0>r.indexOf(n)&&f.call(e,n)&&(t[n]=e[n]);return t};let m={type:"text",size:"sm",__staticSelector:"TextInput"},g=(0,n.forwardRef)((e,r)=>{let t=(0,o.k)("TextInput",m,e),{inputProps:a,wrapperProps:i}=t,s=$(t,["inputProps","wrapperProps"]);return n.createElement(l.I.Wrapper,d({},i),n.createElement(l.I,_(d(d({},a),s),{ref:r})))});g.displayName="@mantine/core/TextInput"},8310:function(e,r,t){t.d(r,{J:function(){return M}});var n,o=t(7294),l=t(4761),a=t(6344),i=t(5053),s=t(7664),c=t(4777),u=(0,t(6817).k)((e,{reversed:r,native:t,radius:n})=>({transferList:{flex:1,display:"flex",flexDirection:"column"},transferListItem:{display:"block",width:"calc(100% - 14px)",padding:7,marginLeft:`calc(${e.spacing.sm}px - 7px)`,marginRight:`calc(${e.spacing.sm}px - 7px)`,borderRadius:e.fn.radius(n),"&:first-of-type":{marginTop:`calc(${e.spacing.sm}px - 7px)`},"&:last-of-type":{marginBottom:`calc(${e.spacing.sm}px - 7px)`}},transferListItemHovered:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},transferListItems:{overflow:t?"auto":"hidden"},transferListHeader:{display:"flex",flexDirection:r?"row-reverse":"row"},transferListBody:{flex:1,borderRadius:e.fn.radius(n),backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,border:`1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`},transferListTitle:{marginBottom:5},transferListSearch:{borderTopWidth:0,borderRightWidth:0,borderLeftWidth:0,borderTopLeftRadius:r?0:`calc(${e.fn.radius(n)}px - 1px)`,borderTopRightRadius:r?`calc(${e.fn.radius(n)}px - 1px)`:0,display:"block",borderBottomColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]},transferListControl:{borderTop:0,borderRightWidth:r?void 0:0,borderLeftWidth:r?0:void 0,borderColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4],"&:last-of-type":{borderTopLeftRadius:r?`calc(${e.fn.radius(n)}px - 1px)`:0,borderTopRightRadius:r?0:`calc(${e.fn.radius(n)}px - 1px)`},"&:disabled":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:"transparent",borderColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}},separator:{boxSizing:"border-box",textAlign:"left",width:"100%",padding:"7px 12px"},separatorLabel:{color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]}})),f=t(4736),p=t(5117),d=t(61),_=t(9834),$=t(9500),m=t(9144),g=t(4144),h=t(8175);let y={Prev:$.g,Next:m.N,First:g.O,Last:h.O},v={Next:$.g,Prev:m.N,Last:g.O,First:h.O};function b({className:e,data:r,onSelect:t,selection:n,itemComponent:l,listComponent:$,searchPlaceholder:m,filter:g,nothingFound:h,title:b,showTransferAll:w,reversed:x,onMoveAll:k,onMove:E,height:C,radius:P,classNames:L,styles:O,limit:S,unstyled:z}){let{classes:N,cx:I,theme:R}=u({reversed:x,native:$!==s.r,radius:P},{name:"TransferList",classNames:L,styles:O,unstyled:z}),T=[],M=[],[W,D]=(0,o.useState)(""),[A,B]=(0,o.useState)(-1),H=r.filter(e=>g(W,e)).slice(0,S),F="rtl"===R.dir?v:y,G=(0,o.useRef)({}),j=(0,i.j)({data:H}),{scrollIntoView:K,targetRef:Z,scrollableRef:X}=(0,a.g)({duration:0,offset:5,cancelable:!1,isList:!0}),Y=null;j.forEach((e,r)=>{let a=o.createElement(f.k,{unstyled:z,tabIndex:-1,onClick:()=>t(e.value),key:e.value,onMouseEnter:()=>B(r),className:I(N.transferListItem,{[N.transferListItemHovered]:r===A}),ref(r){G&&G.current&&(G.current[e.value]=r)}},o.createElement(l,{data:e,selected:n.includes(e.value),radius:P}));e.group?(Y!==e.group&&(Y=e.group,M.push(o.createElement("div",{className:N.separator,key:Y},o.createElement(c.i,{classNames:{label:N.separatorLabel},label:Y})))),M.push(a)):T.push(a)}),M.length>0&&T.length>0&&T.unshift(o.createElement("div",{className:N.separator},o.createElement(c.i,{unstyled:z,classNames:{label:N.separatorLabel}})));let J=e=>{switch(e.key){case"Enter":e.preventDefault(),H[A]&&t(H[A].value);break;case"ArrowDown":e.preventDefault(),B(e=>{var r;let t=e<H.length-1?e+1:e;return Z.current=G.current[null==(r=H[t])?void 0:r.value],K({alignment:"end"}),t});break;case"ArrowUp":e.preventDefault(),B(e=>{var r;let t=e>0?e-1:e;return Z.current=G.current[null==(r=H[t])?void 0:r.value],K({alignment:"start"}),t})}};return o.createElement("div",{className:I(N.transferList,e)},b&&o.createElement(p.x,{weight:500,unstyled:z,className:N.transferListTitle},b),o.createElement("div",{className:N.transferListBody},o.createElement("div",{className:N.transferListHeader},o.createElement(d.o,{unstyled:z,value:W,onChange(e){D(e.currentTarget.value),B(0)},onFocus:()=>B(0),onBlur:()=>B(-1),placeholder:m,radius:0,onKeyDown:J,sx:{flex:1},classNames:{input:N.transferListSearch}}),o.createElement(_.A,{variant:"default",size:36,radius:0,className:N.transferListControl,disabled:0===n.length,onClick:E,unstyled:z},x?o.createElement(F.Prev,null):o.createElement(F.Next,null)),w&&o.createElement(_.A,{variant:"default",size:36,radius:0,className:N.transferListControl,disabled:0===r.length,onClick:k,unstyled:z},x?o.createElement(F.First,null):o.createElement(F.Last,null))),o.createElement($||"div",{ref:X,onMouseLeave:()=>B(-1),className:N.transferListItems,style:{height:C,position:"relative",overflowX:"hidden"}},M.length>0||T.length>0?o.createElement(o.Fragment,null,M,T):o.createElement(p.x,{color:"dimmed",unstyled:z,size:"sm",align:"center",mt:"sm"},h))))}b.displayName="@mantine/core/RenderList";var w=t(7092);let x=o.memo(({data:e,selected:r,radius:t})=>o.createElement(w.X,{checked:r,onChange(){},label:e.label,tabIndex:-1,radius:t,sx:{pointerEvents:"none"}}));var k=t(9469),E=Object.defineProperty,C=Object.defineProperties,P=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,z=(e,r,t)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,N=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&z(e,t,r[t]);if(L)for(var t of L(r))S.call(r,t)&&z(e,t,r[t]);return e},I=(e,r)=>C(e,P(r)),R=(e,r)=>{var t={};for(var n in e)O.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&L)for(var n of L(e))0>r.indexOf(n)&&S.call(e,n)&&(t[n]=e[n]);return t};let T={itemComponent:x,filter:function(e,r){return r.label.toLowerCase().trim().includes(e.toLowerCase().trim())},titles:[null,null],listHeight:150,listComponent:s.r,showTransferAll:!0,limit:1/0},M=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("TransferList",T,e),{value:n,onChange:a,itemComponent:i,searchPlaceholder:s,filter:c,nothingFound:u,titles:f,initialSelection:p,listHeight:d,listComponent:_,showTransferAll:$,breakpoint:m,radius:g,classNames:h,styles:y,limit:v,unstyled:w}=t,x=R(t,["value","onChange","itemComponent","searchPlaceholder","filter","nothingFound","titles","initialSelection","listHeight","listComponent","showTransferAll","breakpoint","radius","classNames","styles","limit","unstyled"]),[E,C]=function(e=[[],[]]){let[r,t]=(0,o.useState)(e),n=(e,r)=>t(t=>{let n=t[e],o=n;"string"==typeof r&&(o=n.includes(r)?n.filter(e=>e!==r):[...n,r]);let l=[...t];return l[e]=o,l}),l=(e,r)=>t(t=>{let n=[...t];return n[e]=t[e].filter(e=>!r.includes(e)),n}),a=e=>t(r=>{let t=[...r];return t[e]=[],t});return[r,{select:n,deselect:l,deselectAll:a}]}(p),P=e=>{let r=[,,],t=0===e?1:0;r[e]=[],r[t]=[...n[t],...n[e]],a(r),C.deselectAll(e)},L=e=>{let r=0===e?1:0,t=[,,],o=n[e].reduce((r,t)=>(E[e].includes(t.value)?r.current.push(t):r.filtered.push(t),r),{filtered:[],current:[]});t[e]=o.filtered,t[r]=[...o.current,...n[r]],a(t),C.deselectAll(e)},O={itemComponent:i,listComponent:_,searchPlaceholder:s,filter:c,nothingFound:u,height:d,showTransferAll:$,classNames:h,styles:y,limit:v,radius:g};return o.createElement(k.M,N({cols:2,spacing:"xl",breakpoints:m?[{maxWidth:m,cols:1}]:[],ref:r,unstyled:w},x),o.createElement(b,I(N({},O),{data:n[0],selection:E[0],onSelect:e=>C.select(0,e),onMoveAll:()=>P(0),onMove:()=>L(0),title:f[0],unstyled:w})),o.createElement(b,I(N({},O),{data:n[1],selection:E[1],onSelect:e=>C.select(1,e),onMoveAll:()=>P(1),onMove:()=>L(1),title:f[1],reversed:!0,unstyled:w})))});M.displayName="@mantine/core/TransferList"},6289:function(e,r,t){t.d(r,{M:function(){return i}});var n=t(7294),o=t(129);let l=()=>`mantine-${Math.random().toString(36).slice(2,11)}`,a=n["useId".toString()]||(()=>void 0);function i(e){return"string"==typeof e?e:function(){let e=a();return e?`mantine-${e.replace(/:/g,"")}`:""}()||function(){let[e,r]=(0,n.useState)("");return(0,o.Y)(()=>{r(l())},[]),e}()}},6344:function(e,r,t){t.d(r,{g:function(){return u}});var n=t(7294),o=t(3524);function l(e,r,t){(0,n.useEffect)(()=>(window.addEventListener(e,r,t),()=>window.removeEventListener(e,r,t)),[])}let a=e=>e<.5?2*e*e:-1+(4-2*e)*e,i=({axis:e,target:r,parent:t,alignment:n,offset:o,isList:l})=>{if(!r||!t&&"undefined"==typeof document)return 0;let a=!!t,i=t||document.body,s=i.getBoundingClientRect(),c=r.getBoundingClientRect(),u=e=>c[e]-s[e];if("y"===e){let f=u("top");if(0===f)return 0;if("start"===n){let p=f-o,d=p<=c.height*(l?0:1)||!l;return d?p:0}let _=a?s.height:window.innerHeight;if("end"===n){let $=f+o-_+c.height,m=$>=-c.height*(l?0:1)||!l;return m?$:0}return"center"===n?f-_/2+c.height/2:0}if("x"===e){let g=u("left");if(0===g)return 0;if("start"===n){let h=g-o,y=h<=c.width||!l;return y?h:0}let v=a?s.width:window.innerWidth;if("end"===n){let b=g+o-v+c.width,w=b>=-c.width||!l;return w?b:0}if("center"===n)return g-v/2+c.width/2}return 0},s=({axis:e,parent:r})=>{if(!r&&"undefined"==typeof document)return 0;let t="y"===e?"scrollTop":"scrollLeft";if(r)return r[t];let{body:n,documentElement:o}=document;return n[t]+o[t]},c=({axis:e,parent:r,distance:t})=>{if(!r&&"undefined"==typeof document)return;let n="y"===e?"scrollTop":"scrollLeft";if(r)r[n]=t;else{let{body:o,documentElement:l}=document;o[n]=t,l[n]=t}};function u({duration:e=1250,axis:r="y",onScrollFinish:t,easing:u=a,offset:f=0,cancelable:p=!0,isList:d=!1}={}){let _=(0,n.useRef)(0),$=(0,n.useRef)(0),m=(0,n.useRef)(!1),g=(0,n.useRef)(null),h=(0,n.useRef)(null),y=(0,o.J)(),v=()=>{_.current&&cancelAnimationFrame(_.current)},b=(0,n.useCallback)(({alignment:n="start"}={})=>{var o;m.current=!1,_.current&&v();let l=null!=(o=s({parent:g.current,axis:r}))?o:0,a=i({parent:g.current,target:h.current,axis:r,alignment:n,offset:f,isList:d})-(g.current?0:l);!function n(){0===$.current&&($.current=performance.now());let o=performance.now(),i=o-$.current,s=y||0===e?1:i/e,f=l+a*u(s);c({parent:g.current,axis:r,distance:f}),!m.current&&s<1?_.current=requestAnimationFrame(n):("function"==typeof t&&t(),$.current=0,_.current=0,v())}()},[g.current]),w=()=>{p&&(m.current=!0)};return l("wheel",w,{passive:!0}),l("touchmove",w,{passive:!0}),(0,n.useEffect)(()=>v,[]),{scrollableRef:g,targetRef:h,scrollIntoView:b,cancel:v}}},5851:function(e,r,t){t.d(r,{C:function(){return o}});var n=t(7294);function o({value:e,defaultValue:r,finalValue:t,onChange:o=()=>{}}){let[l,a]=(0,n.useState)(void 0!==r?r:t),i=e=>{a(e),null==o||o(e)};return void 0!==e?[e,o,!0]:[l,i,!1]}},5053:function(e,r,t){function n({data:e}){let r=[],t=[],n=e.reduce((e,r,n)=>(r.group?e[r.group]?e[r.group].push(n):e[r.group]=[n]:t.push(n),e),{});return Object.keys(n).forEach(t=>{r.push(...n[t].map(r=>e[r]))}),r.push(...t.map(r=>e[r])),r}function o(e){let r=n({data:e}),t=[],o=[],l=null;return r.forEach((e,r)=>{e.group?(l!==e.group&&(l=e.group,o.push({type:"label",label:l})),o.push({type:"item",item:e,index:r})):t.push({type:"item",item:e,index:r})}),{grouped:o,unGrouped:t,items:[...o,...t],hasItems:o.length>0||t.length>0}}t.d(r,{O:function(){return o},j:function(){return n}})}}]);