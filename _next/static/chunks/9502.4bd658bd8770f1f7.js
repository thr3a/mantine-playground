"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9502],{6289:function(e,t,r){r.d(t,{M:function(){return l}});var n=r(7294),o=r(129);let i=()=>`mantine-${Math.random().toString(36).slice(2,11)}`,a=n["useId".toString()]||(()=>void 0);function l(e){return"string"==typeof e?e:function(){let e=a();return e?`mantine-${e.replace(/:/g,"")}`:""}()||function(){let[e,t]=(0,n.useState)("");return(0,o.Y)(()=>{t(i())},[]),e}()}},9502:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var n=r(5893),o=r(7294),i=r(4761),a=r(6289),l=r(6817),s=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(f)for(var r of f(t))p.call(t,r)&&m(e,r,t[r]);return e},b=(e,t)=>c(e,d(t)),h=(0,l.k)((e,{color:t,radius:r,variant:n})=>({root:g(b(g({},e.fn.fontStyles()),{position:"relative",overflow:"hidden",padding:`${e.spacing.sm}px ${e.spacing.md}px`,borderRadius:e.fn.radius(r),border:"1px solid transparent"}),function({variant:e,color:t,theme:r}){if("filled"===e){let n=r.fn.variant({variant:"filled",color:t});return{backgroundColor:n.background,color:r.white}}if("outline"===e){let o=r.fn.variant({variant:"outline",color:t});return{color:o.color,borderColor:o.border,backgroundColor:"dark"===r.colorScheme?r.colors.dark[6]:r.white}}let i=r.fn.variant({variant:"light",color:t});return{backgroundColor:i.background,color:i.color}}({variant:n,color:t,theme:e})),wrapper:{display:"flex"},body:{flex:1},title:{boxSizing:"border-box",margin:0,marginBottom:7,display:"flex",alignItems:"center",justifyContent:"space-between",lineHeight:e.lineHeight,fontSize:e.fontSizes.sm,fontWeight:700,"&[data-with-close-button]":{paddingRight:e.spacing.md}},label:{display:"block",overflow:"hidden",textOverflow:"ellipsis"},icon:{lineHeight:1,width:20,height:20,display:"flex",alignItems:"center",justifyContent:"flex-start",marginRight:e.spacing.md,marginTop:1},message:b(g({},e.fn.fontStyles()),{lineHeight:e.lineHeight,textOverflow:"ellipsis",overflow:"hidden",fontSize:e.fontSizes.sm,color:"filled"===n?e.white:"dark"===e.colorScheme?"light"===n?e.white:e.colors.dark[0]:e.black}),closeButton:{position:"absolute",top:e.spacing.sm,right:e.spacing.sm,color:"inherit"}})),v=r(4459),y=r(971),w=Object.defineProperty,$=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,S=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&S(e,r,t[r]);if($)for(var r of $(t))x.call(t,r)&&S(e,r,t[r]);return e},_=(e,t)=>{var r={};for(var n in e)k.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&$)for(var n of $(e))0>t.indexOf(n)&&x.call(e,n)&&(r[n]=e[n]);return r};let E={variant:"light"},C=(0,o.forwardRef)((e,t)=>{let r=(0,i.N4)("Alert",E,e),{id:n,className:l,title:s,variant:c,children:d,color:f,classNames:u,icon:p,styles:m,onClose:g,radius:b,withCloseButton:w,closeButtonLabel:$,unstyled:k}=r,x=_(r,["id","className","title","variant","children","color","classNames","icon","styles","onClose","radius","withCloseButton","closeButtonLabel","unstyled"]),{classes:S,cx:C}=h({color:f,radius:b,variant:c},{classNames:u,styles:m,unstyled:k,name:"Alert"}),O=(0,a.M)(n),P=s&&`${O}-title`,z=`${O}-body`;return o.createElement(v.x,N({id:O,role:"alert","aria-labelledby":P,"aria-describedby":z,className:C(S.root,S[c],l),ref:t},x),o.createElement("div",{className:S.wrapper},p&&o.createElement("div",{className:S.icon},p),o.createElement("div",{className:S.body},s&&o.createElement("div",{className:S.title,"data-with-close-button":w||void 0},o.createElement("span",{id:P,className:S.label},s)),w&&o.createElement(y.P,{className:S.closeButton,onClick:g,variant:"transparent",size:16,iconSize:16,"aria-label":$}),o.createElement("div",{id:z,className:S.message},d))))});C.displayName="@mantine/core/Alert";var O=r(3991);function P(){return(0,n.jsx)(C,{icon:(0,n.jsx)(O.Ldj,{size:16}),title:"Bummer!",color:"red",children:"Something terrible happened! You made a mistake and there is no going back, your data was lost forever!"})}}}]);