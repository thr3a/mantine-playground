"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6601],{2615:function(e,t,r){r.d(t,{g:function(){return L}});var n=r(7294),i=r(7462),o=r(3366),a=n.useLayoutEffect,u=function(e){var t=n.useRef(e);return a(function(){t.current=e}),t},l=function(e,t){if("function"==typeof e){e(t);return}e.current=t},s=function(e,t){var r=(0,n.useRef)();return(0,n.useCallback)(function(n){e.current=n,r.current&&l(r.current,null),r.current=t,t&&l(t,n)},[t])},c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},d=function(e){Object.keys(c).forEach(function(t){e.style.setProperty(t,c[t],"important")})},f=null,p=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},g=function(){},$=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],m=!!document.documentElement.currentStyle,h=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r,n,i=(r=$,n=t,r.reduce(function(e,t){return e[t]=n[t],e},{})),o=i.boxSizing;if(""===o)return null;m&&"border-box"===o&&(i.width=parseFloat(i.width)+parseFloat(i.borderRightWidth)+parseFloat(i.borderLeftWidth)+parseFloat(i.paddingRight)+parseFloat(i.paddingLeft)+"px");var a=parseFloat(i.paddingBottom)+parseFloat(i.paddingTop),u=parseFloat(i.borderBottomWidth)+parseFloat(i.borderTopWidth);return{sizingStyle:i,paddingSize:a,borderSize:u}},v=function(e){var t=u(e);(0,n.useLayoutEffect)(function(){var e=function(e){t.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[])},y=function(e,t){var r=e.cacheMeasurements,a=e.maxRows,u=e.minRows,l=e.onChange,c=void 0===l?g:l,$=e.onHeightChange,m=void 0===$?g:$,y=(0,o.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),b=void 0!==y.value,x=(0,n.useRef)(null),S=s(x,t),w=(0,n.useRef)(0),z=(0,n.useRef)(),_=function(){var e,t,n,i,o,l,s,c,g,$,v,y,b=x.current,S=r&&z.current?z.current:h(b);if(S){z.current=S;var _=(e=S,t=b.value||b.placeholder||"x",n=u,i=a,void 0===n&&(n=1),void 0===i&&(i=1/0),f||((f=document.createElement("textarea")).setAttribute("tabindex","-1"),f.setAttribute("aria-hidden","true"),d(f)),null===f.parentNode&&document.body.appendChild(f),o=e.paddingSize,l=e.borderSize,c=(s=e.sizingStyle).boxSizing,Object.keys(s).forEach(function(e){var t=e;f.style[t]=s[t]}),d(f),f.value=t,g=p(f,e),f.value="x",v=($=f.scrollHeight-o)*n,"border-box"===c&&(v=v+o+l),g=Math.max(v,g),y=$*i,"border-box"===c&&(y=y+o+l),[g=Math.min(y,g),$]),E=_[0],R=_[1];w.current!==E&&(w.current=E,b.style.setProperty("height",E+"px","important"),m(E,{rowHeight:R}))}},E=function(e){b||_(),c(e)};return(0,n.useLayoutEffect)(_),v(_),(0,n.createElement)("textarea",(0,i.Z)({},y,{onChange:E,ref:S}))},b=(0,n.forwardRef)(y),x=r(6289),S=r(4761),w=r(9983),z=(0,r(6817).k)(e=>({input:{paddingTop:e.spacing.xs,paddingBottom:e.spacing.xs}})),_=r(6720),E=Object.defineProperty,R=Object.defineProperties,C=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&k(e,r,t[r]);if(P)for(var r of P(t))T.call(t,r)&&k(e,r,t[r]);return e},N=(e,t)=>R(e,C(t)),B=(e,t)=>{var r={};for(var n in e)O.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&P)for(var n of P(e))0>t.indexOf(n)&&T.call(e,n)&&(r[n]=e[n]);return r};let W={autosize:!1,size:"sm",__staticSelector:"Textarea"},L=(0,n.forwardRef)((e,t)=>{let r=(0,S.N4)("Textarea",W,e),{autosize:i,maxRows:o,minRows:a,label:u,error:l,description:s,id:c,className:d,required:f,style:p,wrapperProps:g,classNames:$,styles:m,size:h,__staticSelector:v,sx:y,errorProps:E,descriptionProps:R,labelProps:C,inputWrapperOrder:P,inputContainer:O,unstyled:T,withAsterisk:k}=r,L=B(r,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled","withAsterisk"]),H=(0,x.M)(c),{classes:F,cx:M}=z(),{systemStyles:J,rest:j}=(0,w.x)(L),A=I({required:f,ref:t,invalid:!!l,id:H,classNames:N(I({},$),{input:M(F.input,null==$?void 0:$.input)}),styles:m,__staticSelector:v,size:h,multiline:!0,unstyled:T},j);return n.createElement(_.I.Wrapper,I(I({label:u,error:l,id:H,description:s,required:f,style:p,className:d,classNames:$,styles:m,size:h,__staticSelector:v,sx:y,errorProps:E,labelProps:C,descriptionProps:R,inputContainer:O,inputWrapperOrder:P,unstyled:T,withAsterisk:k},J),g),i?n.createElement(_.I,N(I({},A),{component:b,maxRows:o,minRows:a})):n.createElement(_.I,N(I({},A),{component:"textarea",rows:a})))});L.displayName="@mantine/core/Textarea"},6289:function(e,t,r){r.d(t,{M:function(){return u}});var n=r(7294),i=r(129);let o=()=>`mantine-${Math.random().toString(36).slice(2,11)}`,a=n["useId".toString()]||(()=>void 0);function u(e){return"string"==typeof e?e:function(){let e=a();return e?`mantine-${e.replace(/:/g,"")}`:""}()||function(){let[e,t]=(0,n.useState)("");return(0,i.Y)(()=>{t(o())},[]),e}()}},5851:function(e,t,r){r.d(t,{C:function(){return i}});var n=r(7294);function i({value:e,defaultValue:t,finalValue:r,onChange:i=()=>{}}){let[o,a]=(0,n.useState)(void 0!==t?t:r),u=e=>{a(e),null==i||i(e)};return void 0!==e?[e,i,!0]:[o,u,!1]}},6601:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(5893),i=r(7294),o=r(5851),a=r(4761);function u(e){if("string"==typeof e&&0===e.trim().length)return!0;try{return JSON.parse(e),!0}catch(t){return!1}}var l=(0,r(6817).k)((e,{size:t})=>({input:{fontFamily:e.fontFamilyMonospace,fontSize:e.fn.size({size:t,sizes:e.fontSizes})-2}})),s=r(2615),c=Object.defineProperty,d=Object.defineProperties,f=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))$.call(t,r)&&m(e,r,t[r]);return e},v=(e,t)=>d(e,f(t)),y=(e,t)=>{var r={};for(var n in e)g.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))0>t.indexOf(n)&&$.call(e,n)&&(r[n]=e[n]);return r};let b={formatOnBlur:!1,size:"sm"},x=(0,i.forwardRef)((e,t)=>{let r=(0,a.N4)("JsonInput",b,e),{value:n,defaultValue:c,onChange:d,onFocus:f,onBlur:p,error:g,formatOnBlur:$,size:m,validationError:x,classNames:S,unstyled:w}=r,z=y(r,["value","defaultValue","onChange","onFocus","onBlur","error","formatOnBlur","size","validationError","classNames","unstyled"]),{classes:_,cx:E}=l({size:m},{name:"JsonInput",unstyled:w}),[R,C]=(0,o.C)({value:n,defaultValue:c,finalValue:"",onChange:d}),[P,O]=(0,i.useState)(u(R)),T=e=>{"function"==typeof f&&f(e),O(!0)},k=e=>{"function"==typeof p&&p(e);let t=u(e.currentTarget.value);$&&t&&""!==e.currentTarget.value.trim()&&C(JSON.stringify(JSON.parse(e.currentTarget.value),null,2)),O(t)};return i.createElement(s.g,h({value:R,onChange:e=>C(e.currentTarget.value),onFocus:T,onBlur:k,error:P?g:x||!0,__staticSelector:"JsonInput",classNames:v(h({},S),{input:E(_.input,null==S?void 0:S.input)}),autoComplete:"nope",ref:t,unstyled:w},z))});function S(){return(0,n.jsx)(x,{label:"Your package.json",placeholder:"Textarea will autosize to fit the content",validationError:"Invalid json",formatOnBlur:!0,autosize:!0,minRows:4})}x.displayName="@mantine/core/JsonInput"}}]);