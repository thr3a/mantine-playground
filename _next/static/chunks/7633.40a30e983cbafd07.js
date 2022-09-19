"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7633],{7841:function(e,r,o){o.d(r,{z:function(){return F}});var t=o(7294),n=o(4761),i=o(8427),a=o(6817),l=(0,a.k)((e,{orientation:r,buttonBorderWidth:o})=>({root:{display:"flex",flexDirection:"vertical"===r?"column":"row","& [data-button]":{"&:first-of-type":{borderBottomRightRadius:0,["vertical"===r?"borderBottomLeftRadius":"borderTopRightRadius"]:0,["vertical"===r?"borderBottomWidth":"borderRightWidth"]:o/2},"&:last-of-type":{borderTopLeftRadius:0,["vertical"===r?"borderTopRightRadius":"borderBottomLeftRadius"]:0,["vertical"===r?"borderTopWidth":"borderLeftWidth"]:o/2},"&:not(:first-of-type):not(:last-of-type)":{borderRadius:0,["vertical"===r?"borderTopWidth":"borderLeftWidth"]:o/2,["vertical"===r?"borderBottomWidth":"borderRightWidth"]:o/2},"& + [data-button]":{["vertical"===r?"marginTop":"marginLeft"]:-o,"@media (min-resolution: 192dpi)":{["vertical"===r?"marginTop":"marginLeft"]:0}}}}})),d=o(4459),c=Object.defineProperty,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,o)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,g=(e,r)=>{for(var o in r||(r={}))f.call(r,o)&&u(e,o,r[o]);if(s)for(var o of s(r))p.call(r,o)&&u(e,o,r[o]);return e},h=(e,r)=>{var o={};for(var t in e)f.call(e,t)&&0>r.indexOf(t)&&(o[t]=e[t]);if(null!=e&&s)for(var t of s(e))0>r.indexOf(t)&&p.call(e,t)&&(o[t]=e[t]);return o};let b={orientation:"horizontal",buttonBorderWidth:1},m=(0,t.forwardRef)((e,r)=>{let o=(0,n.N4)("ButtonGroup",b,e),{className:i,orientation:a,buttonBorderWidth:c,unstyled:s}=o,f=h(o,["className","orientation","buttonBorderWidth","unstyled"]),{classes:p,cx:u}=l({orientation:a,buttonBorderWidth:c},{name:"ButtonGroup",unstyled:s});return t.createElement(d.x,g({className:u(p.root,i),ref:r},f))});m.displayName="@mantine/core/ButtonGroup";var $=o(5227),y=Object.defineProperty,v=Object.defineProperties,k=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,S=(e,r,o)=>r in e?y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,R=(e,r)=>{for(var o in r||(r={}))x.call(r,o)&&S(e,o,r[o]);if(w)for(var o of w(r))_.call(r,o)&&S(e,o,r[o]);return e},C=(e,r)=>v(e,k(r));let z={xs:{height:$.J.xs,paddingLeft:14,paddingRight:14},sm:{height:$.J.sm,paddingLeft:18,paddingRight:18},md:{height:$.J.md,paddingLeft:22,paddingRight:22},lg:{height:$.J.lg,paddingLeft:26,paddingRight:26},xl:{height:$.J.xl,paddingLeft:32,paddingRight:32},"compact-xs":{height:22,paddingLeft:7,paddingRight:7},"compact-sm":{height:26,paddingLeft:8,paddingRight:8},"compact-md":{height:30,paddingLeft:10,paddingRight:10},"compact-lg":{height:34,paddingLeft:12,paddingRight:12},"compact-xl":{height:40,paddingLeft:14,paddingRight:14}},P=e=>({display:e?"block":"inline-block",width:e?"100%":"auto"});var O=(0,a.k)((e,{color:r,size:o,radius:t,fullWidth:n,compact:i,gradient:a,variant:l,withLeftIcon:d,withRightIcon:c})=>({root:C(R(C(R(R(R(R({},function({compact:e,size:r,withLeftIcon:o,withRightIcon:t}){if(e)return z[`compact-${r}`];let n=z[r];return C(R({},n),{paddingLeft:o?n.paddingLeft/1.5:n.paddingLeft,paddingRight:t?n.paddingRight/1.5:n.paddingRight})}({compact:i,size:o,withLeftIcon:d,withRightIcon:c})),e.fn.fontStyles()),e.fn.focusStyles()),P(n)),{borderRadius:e.fn.radius(t),fontWeight:600,position:"relative",lineHeight:1,fontSize:e.fn.size({size:o,sizes:e.fontSizes}),userSelect:"none",cursor:"pointer"}),function({variant:e,theme:r,color:o,gradient:t}){let n=r.fn.variant({color:o,variant:e,gradient:t});return"gradient"===e?{border:0,backgroundImage:n.background,color:n.color,"&:hover":r.fn.hover({backgroundSize:"200%"})}:R({border:`1px solid ${n.border}`,backgroundColor:n.background,color:n.color},r.fn.hover({backgroundColor:n.hover}))}({variant:l,theme:e,color:r,gradient:a})),{"&:active":e.activeStyles,"&:disabled, &[data-disabled]":{borderColor:"transparent",backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],color:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[5],cursor:"not-allowed",backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(t),cursor:"not-allowed"}}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"}})),E=o(966),L=o(4736),I=Object.defineProperty,N=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,W=(e,r,o)=>r in e?I(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,j=(e,r)=>{for(var o in r||(r={}))T.call(r,o)&&W(e,o,r[o]);if(N)for(var o of N(r))B.call(r,o)&&W(e,o,r[o]);return e},D=(e,r)=>{var o={};for(var t in e)T.call(e,t)&&0>r.indexOf(t)&&(o[t]=e[t]);if(null!=e&&N)for(var t of N(e))0>r.indexOf(t)&&B.call(e,t)&&(o[t]=e[t]);return o};let H={size:"sm",type:"button",variant:"filled",loaderPosition:"left"},J=(0,t.forwardRef)((e,r)=>{let o=(0,n.N4)("Button",H,e),{className:i,size:a,color:l,type:d,disabled:c,children:s,leftIcon:f,rightIcon:p,fullWidth:u,variant:g,radius:h,uppercase:b,compact:m,loading:$,loaderPosition:y,loaderProps:v,gradient:k,classNames:w,styles:x,unstyled:_}=o,S=D(o,["className","size","color","type","disabled","children","leftIcon","rightIcon","fullWidth","variant","radius","uppercase","compact","loading","loaderPosition","loaderProps","gradient","classNames","styles","unstyled"]),{classes:R,cx:C,theme:P}=O({radius:h,color:l,size:a,fullWidth:u,compact:m,gradient:k,variant:g,withLeftIcon:!!f,withRightIcon:!!p},{name:"Button",unstyled:_,classNames:w,styles:x}),I=P.fn.variant({color:l,variant:g}),N=t.createElement(E.a,j({color:I.color,size:P.fn.size({size:a,sizes:z}).height/2},v));return t.createElement(L.k,j({className:C(R.root,i),type:d,disabled:c||$,"data-button":!0,"data-disabled":c||void 0,"data-loading":$||void 0,ref:r,unstyled:_},S),t.createElement("div",{className:R.inner},(f||$&&"left"===y)&&t.createElement("span",{className:C(R.icon,R.leftIcon)},$&&"left"===y?N:f),t.createElement("span",{className:R.label,style:{textTransform:b?"uppercase":void 0}},s),(p||$&&"right"===y)&&t.createElement("span",{className:C(R.icon,R.rightIcon)},$&&"right"===y?N:p)))});J.displayName="@mantine/core/Button",J.Group=m;let F=(0,i.F)(J)},1003:function(e,r,o){o.d(r,{U:function(){return E}});var t=o(7294),n=o(3524),i=o(4761),a=o(9983),l=o(3935),d=o(7048),c=o(665),s=Object.defineProperty,f=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,r,o)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,m=(e,r)=>{for(var o in r||(r={}))g.call(r,o)&&b(e,o,r[o]);if(u)for(var o of u(r))h.call(r,o)&&b(e,o,r[o]);return e},$=(e,r)=>f(e,p(r)),y=(e,r)=>{var o={};for(var t in e)g.call(e,t)&&0>r.indexOf(t)&&(o[t]=e[t]);if(null!=e&&u)for(var t of u(e))0>r.indexOf(t)&&h.call(e,t)&&(o[t]=e[t]);return o};function v(e){return(null==e?void 0:e.current)?e.current.scrollHeight:"auto"}let k="undefined"!=typeof window&&window.requestAnimationFrame;var w=o(4459),x=Object.defineProperty,_=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,C=(e,r,o)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,z=(e,r)=>{for(var o in r||(r={}))S.call(r,o)&&C(e,o,r[o]);if(_)for(var o of _(r))R.call(r,o)&&C(e,o,r[o]);return e},P=(e,r)=>{var o={};for(var t in e)S.call(e,t)&&0>r.indexOf(t)&&(o[t]=e[t]);if(null!=e&&_)for(var t of _(e))0>r.indexOf(t)&&R.call(e,t)&&(o[t]=e[t]);return o};let O={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},E=(0,t.forwardRef)((e,r)=>{let o=(0,i.N4)("Collapse",O,e),{children:s,in:f,transitionDuration:p,transitionTimingFunction:u,style:g,onTransitionEnd:h,animateOpacity:b}=o,x=P(o,["children","in","transitionDuration","transitionTimingFunction","style","onTransitionEnd","animateOpacity"]),_=(0,i.rZ)(),S=(0,n.J)(),R=!!_.respectReducedMotion&&S,C=R?0:p,{systemStyles:E,rest:L}=(0,a.x)(x),I=function({transitionDuration:e,transitionTimingFunction:r="ease",onTransitionEnd:o=()=>{},opened:n}){let i=(0,t.useRef)(null),a={display:"none",height:"0px",overflow:"hidden"},[s,f]=(0,t.useState)(n?{}:a),p=e=>{(0,l.flushSync)(()=>f(e))},u=e=>{p(r=>m(m({},r),e))};function g(o){let t=e||function(e){if(!e||"string"==typeof e)return 0;let r=e/36;return Math.round((4+15*r**.25+r/5)*10)}(o);return{transition:`height ${t}ms ${r}`}}(0,d.l)(()=>{n?k(()=>{u({willChange:"height",display:"block",overflow:"hidden"}),k(()=>{let e=v(i);u($(m({},g(e)),{height:e}))})}):k(()=>{let e=v(i);u($(m({},g(e)),{willChange:"height",height:e})),k(()=>u({height:"0px",overflow:"hidden"}))})},[n]);let h=e=>{if(e.target===i.current&&"height"===e.propertyName){if(n){let r=v(i);r===s.height?p({}):u({height:r}),o()}else"0px"===s.height&&(p(a),o())}};return function(e={}){var r=e,{style:o={},refKey:t="ref"}=r,a=y(r,["style","refKey"]);let l=a[t];return $(m({"aria-hidden":!n},a),{[t]:(0,c.l)(i,l),onTransitionEnd:h,style:m(m({boxSizing:"border-box"},o),s)})}}({opened:f,transitionDuration:C,transitionTimingFunction:u,onTransitionEnd:h});return 0===C?f?t.createElement(w.x,z({},L),s):null:t.createElement(w.x,z({},I(z(z({style:g,ref:r},L),E))),t.createElement("div",{style:{opacity:f||!b?1:0,transition:b?`opacity ${C}ms ${u}`:"none"}},s))});E.displayName="@mantine/core/Collapse"},5227:function(e,r,o){o.d(r,{J:function(){return u}});var t=o(6817),n=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,o)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,f=(e,r)=>{for(var o in r||(r={}))d.call(r,o)&&s(e,o,r[o]);if(l)for(var o of l(r))c.call(r,o)&&s(e,o,r[o]);return e},p=(e,r)=>i(e,a(r));let u={xs:30,sm:36,md:42,lg:50,xl:60};var g=(0,t.k)((e,{size:r,multiline:o,radius:t,variant:n,invalid:i,rightSectionWidth:a,withRightSection:l,iconWidth:d,offsetBottom:c,offsetTop:s,pointer:g})=>{let h=e.fn.variant({variant:"filled",color:"red"}).background,b="default"===n||"filled"===n?{minHeight:e.fn.size({size:r,sizes:u}),paddingLeft:e.fn.size({size:r,sizes:u})/3,paddingRight:l?a:e.fn.size({size:r,sizes:u})/3,borderRadius:e.fn.radius(t)}:null;return{wrapper:{position:"relative",marginTop:s?`calc(${e.spacing.xs}px / 2)`:void 0,marginBottom:c?`calc(${e.spacing.xs}px / 2)`:void 0},input:f(p(f(p(f({},e.fn.fontStyles()),{height:o?"unstyled"===n?void 0:"auto":e.fn.size({size:r,sizes:u}),WebkitTapHighlightColor:"transparent",lineHeight:o?e.lineHeight:`${e.fn.size({size:r,sizes:u})-2}px`,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:e.fn.size({size:r,sizes:e.fontSizes}),width:"100%",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,display:"block",textAlign:"left",cursor:g?"pointer":void 0}),b),{"&:disabled":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:e.colors.dark[2]}},"&::placeholder":{opacity:1,userSelect:"none",color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),function({theme:e,variant:r}){return"default"===r?{border:`1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,transition:"border-color 100ms ease","&:focus, &:focus-within":{outline:"none",borderColor:e.colors[e.primaryColor][e.fn.primaryShade()]}}:"filled"===r?{border:"1px solid transparent",backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1],"&:focus, &:focus-within":{outline:"none",borderColor:`${e.colors[e.primaryColor][e.fn.primaryShade()]} !important`}}:{borderWidth:0,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"transparent",minHeight:28,outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}}}({theme:e,variant:n})),withIcon:{paddingLeft:"number"==typeof d?d:e.fn.size({size:r,sizes:u})},invalid:{color:h,borderColor:h,"&::placeholder":{opacity:1,color:h}},disabled:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:e.colors.dark[2]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:"number"==typeof d?d:e.fn.size({size:r,sizes:u}),color:i?e.colors.red["dark"===e.colorScheme?6:7]:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[5]},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:a}}});r.Z=g},665:function(e,r,o){o.d(r,{Y:function(){return a},l:function(){return i}});var t=o(7294),n=o(3979);function i(...e){return r=>{e.forEach(e=>(0,n.k)(e,r))}}function a(...e){return(0,t.useCallback)(i(...e),e)}},3979:function(e,r,o){o.d(r,{k:function(){return t}});function t(e,r){"function"==typeof e?e(r):"object"==typeof e&&null!==e&&"current"in e&&(e.current=r)}},7633:function(e,r,o){o.r(r),o.d(r,{default:function(){return l}});var t=o(5893),n=o(7294),i=o(7841),a=o(1003);function l(){var e=(0,n.useState)(!1),r=e[0],o=e[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.z,{onClick:function(){return o(function(e){return!e})},children:"Toggle content"}),(0,t.jsx)(a.U,{in:r})]})}}}]);