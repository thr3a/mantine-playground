"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1890],{2615:function(e,t,r){r.d(t,{g:function(){return I}});var n=r(7294),i=r(7462),o=r(3366),a=n.useLayoutEffect,u=function(e){var t=n.useRef(e);return a(function(){t.current=e}),t},d=function(e,t){if("function"==typeof e){e(t);return}e.current=t},c=function(e,t){var r=(0,n.useRef)();return(0,n.useCallback)(function(n){e.current=n,r.current&&d(r.current,null),r.current=t,t&&d(t,n)},[t])},l={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},s=function(e){Object.keys(l).forEach(function(t){e.style.setProperty(t,l[t],"important")})},f=null,p=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},g=function(){},h=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],m=!!document.documentElement.currentStyle,$=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r,n,i=(r=h,n=t,r.reduce(function(e,t){return e[t]=n[t],e},{})),o=i.boxSizing;if(""===o)return null;m&&"border-box"===o&&(i.width=parseFloat(i.width)+parseFloat(i.borderRightWidth)+parseFloat(i.borderLeftWidth)+parseFloat(i.paddingRight)+parseFloat(i.paddingLeft)+"px");var a=parseFloat(i.paddingBottom)+parseFloat(i.paddingTop),u=parseFloat(i.borderBottomWidth)+parseFloat(i.borderTopWidth);return{sizingStyle:i,paddingSize:a,borderSize:u}},b=function(e){var t=u(e);(0,n.useLayoutEffect)(function(){var e=function(e){t.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[])},v=function(e,t){var r=e.cacheMeasurements,a=e.maxRows,u=e.minRows,d=e.onChange,l=void 0===d?g:d,h=e.onHeightChange,m=void 0===h?g:h,v=(0,o.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),x=void 0!==v.value,y=(0,n.useRef)(null),S=c(y,t),w=(0,n.useRef)(0),z=(0,n.useRef)(),R=function(){var e,t,n,i,o,d,c,l,g,h,b,v,x=y.current,S=r&&z.current?z.current:$(x);if(S){z.current=S;var R=(e=S,t=x.value||x.placeholder||"x",n=u,i=a,void 0===n&&(n=1),void 0===i&&(i=1/0),f||((f=document.createElement("textarea")).setAttribute("tabindex","-1"),f.setAttribute("aria-hidden","true"),s(f)),null===f.parentNode&&document.body.appendChild(f),o=e.paddingSize,d=e.borderSize,l=(c=e.sizingStyle).boxSizing,Object.keys(c).forEach(function(e){var t=e;f.style[t]=c[t]}),s(f),f.value=t,g=p(f,e),f.value="x",b=(h=f.scrollHeight-o)*n,"border-box"===l&&(b=b+o+d),g=Math.max(b,g),v=h*i,"border-box"===l&&(v=v+o+d),[g=Math.min(v,g),h]),E=R[0],_=R[1];w.current!==E&&(w.current=E,x.style.setProperty("height",E+"px","important"),m(E,{rowHeight:_}))}},E=function(e){x||R(),l(e)};return(0,n.useLayoutEffect)(R),b(R),(0,n.createElement)("textarea",(0,i.Z)({},v,{onChange:E,ref:S}))},x=(0,n.forwardRef)(v),y=r(6289),S=r(4761),w=r(9983),z=(0,r(6817).k)(e=>({input:{paddingTop:e.spacing.xs,paddingBottom:e.spacing.xs}})),R=r(6720),E=Object.defineProperty,_=Object.defineProperties,k=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&L(e,r,t[r]);if(C)for(var r of C(t))W.call(t,r)&&L(e,r,t[r]);return e},N=(e,t)=>_(e,k(t)),B=(e,t)=>{var r={};for(var n in e)P.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&C)for(var n of C(e))0>t.indexOf(n)&&W.call(e,n)&&(r[n]=e[n]);return r};let H={autosize:!1,size:"sm",__staticSelector:"Textarea"},I=(0,n.forwardRef)((e,t)=>{let r=(0,S.N4)("Textarea",H,e),{autosize:i,maxRows:o,minRows:a,label:u,error:d,description:c,id:l,className:s,required:f,style:p,wrapperProps:g,classNames:h,styles:m,size:$,__staticSelector:b,sx:v,errorProps:E,descriptionProps:_,labelProps:k,inputWrapperOrder:C,inputContainer:P,unstyled:W,withAsterisk:L}=r,I=B(r,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled","withAsterisk"]),O=(0,y.M)(l),{classes:A,cx:M}=z(),{systemStyles:Y,rest:Z}=(0,w.x)(I),j=T({required:f,ref:t,invalid:!!d,id:O,classNames:N(T({},h),{input:M(A.input,null==h?void 0:h.input)}),styles:m,__staticSelector:b,size:$,multiline:!0,unstyled:W},Z);return n.createElement(R.I.Wrapper,T(T({label:u,error:d,id:O,description:c,required:f,style:p,className:s,classNames:h,styles:m,size:$,__staticSelector:b,sx:v,errorProps:E,labelProps:k,descriptionProps:_,inputContainer:P,inputWrapperOrder:C,unstyled:W,withAsterisk:L},Y),g),i?n.createElement(R.I,N(T({},j),{component:x,maxRows:o,minRows:a})):n.createElement(R.I,N(T({},j),{component:"textarea",rows:a})))});I.displayName="@mantine/core/Textarea"},6289:function(e,t,r){r.d(t,{M:function(){return u}});var n=r(7294),i=r(129);let o=()=>`mantine-${Math.random().toString(36).slice(2,11)}`,a=n["useId".toString()]||(()=>void 0);function u(e){return"string"==typeof e?e:function(){let e=a();return e?`mantine-${e.replace(/:/g,"")}`:""}()||function(){let[e,t]=(0,n.useState)("");return(0,i.Y)(()=>{t(o())},[]),e}()}},1890:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(5893),i=r(2615);function o(){return(0,n.jsx)(i.g,{placeholder:"Your comment",label:"Your comment",withAsterisk:!0})}}}]);