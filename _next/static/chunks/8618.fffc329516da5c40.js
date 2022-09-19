"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8618],{1380:function(e,r,a){a.d(r,{b:function(){return O}});var o=a(7294),t=a(4761),n=a(8427),i=a(6817),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,$=(e,r,a)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,f=(e,r)=>{for(var a in r||(r={}))d.call(r,a)&&$(e,a,r[a]);if(p)for(var a of p(r))u.call(r,a)&&$(e,a,r[a]);return e},y=(e,r)=>s(e,c(r)),h=(0,i.k)((e,{size:r,radius:a})=>{let o="dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3];return{root:y(f({},e.fn.focusStyles()),{width:r,height:r,WebkitTapHighlightColor:"transparent",border:0,borderRadius:e.fn.size({size:a,sizes:e.radius}),appearance:"none",WebkitAppearance:"none",padding:0,position:"relative",overflow:"hidden"}),overlay:{position:"absolute",borderRadius:e.fn.size({size:a,sizes:e.radius}),top:0,left:0,right:0,bottom:0},children:{display:"inline-flex",justifyContent:"center",alignItems:"center"},shadowOverlay:{boxShadow:"rgba(0, 0, 0, .1) 0px 0px 0px 1px inset, rgb(0, 0, 0, .15) 0px 0px 4px inset",zIndex:1},alphaOverlay:{backgroundImage:`linear-gradient(45deg, ${o} 25%, transparent 25%), linear-gradient(-45deg, ${o} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${o} 75%), linear-gradient(-45deg, ${"dark"===e.colorScheme?e.colors.dark[7]:e.white} 75%, ${o} 75%)`,backgroundSize:"8px 8px",backgroundPosition:"0 0, 0 4px, 4px -4px, -4px 0px"}}}),b=a(4459),g=Object.defineProperty,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,x=(e,r,a)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,k=(e,r)=>{for(var a in r||(r={}))v.call(r,a)&&x(e,a,r[a]);if(m)for(var a of m(r))w.call(r,a)&&x(e,a,r[a]);return e},S=(e,r)=>{var a={};for(var o in e)v.call(e,o)&&0>r.indexOf(o)&&(a[o]=e[o]);if(null!=e&&m)for(var o of m(e))0>r.indexOf(o)&&w.call(e,o)&&(a[o]=e[o]);return a};let _={size:25,radius:25,withShadow:!0},N=(0,o.forwardRef)((e,r)=>{let a=(0,t.N4)("ColorSwatch",_,e),{color:n,size:i,radius:l,className:s,children:c,classNames:p,styles:d,unstyled:u,withShadow:$}=a,f=S(a,["color","size","radius","className","children","classNames","styles","unstyled","withShadow"]),{classes:y,cx:g}=h({radius:l,size:i},{classNames:p,styles:d,unstyled:u,name:"ColorSwatch"});return o.createElement(b.x,k({className:g(y.root,s),ref:r},f),o.createElement("div",{className:g(y.alphaOverlay,y.overlay)}),$&&o.createElement("div",{className:g(y.shadowOverlay,y.overlay)}),o.createElement("div",{className:y.overlay,style:{backgroundColor:n}}),o.createElement("div",{className:g(y.children,y.overlay)},c))});N.displayName="@mantine/core/ColorSwatch";let O=(0,n.F)(N)},8618:function(e,r,a){a.r(r),a.d(r,{default:function(){return l}});var o=a(5893),t=a(4761),n=a(1380),i=a(1232);function l(){var e=(0,t.rZ)(),r=Object.keys(e.colors).map(function(r){return(0,o.jsx)(n.b,{color:e.colors[r][6]},r)});return(0,o.jsx)(i.Z,{position:"center",spacing:"xs",children:r})}}}]);