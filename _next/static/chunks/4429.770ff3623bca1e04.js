"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4429],{4685:function(e,r,n){n.d(r,{e:function(){return b}});var t=n(7294),a=n(4761),l=n(8427),o=n(5117),i=(0,n(6817).k)(()=>({root:{backgroundColor:"transparent",cursor:"pointer",padding:0,border:0}})),s=Object.defineProperty,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,r,n)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,m=(e,r)=>{for(var n in r||(r={}))u.call(r,n)&&f(e,n,r[n]);if(c)for(var n of c(r))p.call(r,n)&&f(e,n,r[n]);return e},d=(e,r)=>{var n={};for(var t in e)u.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&c)for(var t of c(e))0>r.indexOf(t)&&p.call(e,t)&&(n[t]=e[t]);return n};let y={},h=(0,t.forwardRef)((e,r)=>{let n=(0,a.N4)("Anchor",y,e),{component:l,className:s,unstyled:c}=n,u=d(n,["component","className","unstyled"]),{classes:p,cx:f}=i(null,{name:"Anchor",unstyled:c});return t.createElement(o.x,m(m({component:l||"a",variant:"link",ref:r,className:f(p.root,s)},"button"===l?{type:"button"}:null),u))});h.displayName="@mantine/core/Anchor";let b=(0,l.F)(h)},4241:function(e,r,n){n.d(r,{k:function(){return a}});var t=n(7294);function a(e){return!Array.isArray(e)&&null!==e&&"object"==typeof e&&e.type!==t.Fragment}},4429:function(e,r,n){n.r(r),n.d(r,{default:function(){return k}});var t=n(5893),a=n(4685),l=n(7294),o=n(4761),i=n(4241),s=(0,n(6817).k)(e=>({root:{display:"flex",alignItems:"center"},breadcrumb:{lineHeight:1,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"},separator:{marginLeft:e.spacing.xs,marginRight:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"}})),c=n(5117),u=n(4459),p=Object.defineProperty,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=(e,r,n)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,h=(e,r)=>{for(var n in r||(r={}))m.call(r,n)&&y(e,n,r[n]);if(f)for(var n of f(r))d.call(r,n)&&y(e,n,r[n]);return e},b=(e,r)=>{var n={};for(var t in e)m.call(e,t)&&0>r.indexOf(t)&&(n[t]=e[t]);if(null!=e&&f)for(var t of f(e))0>r.indexOf(t)&&d.call(e,t)&&(n[t]=e[t]);return n};let $={separator:"/"},g=(0,l.forwardRef)((e,r)=>{let n=(0,o.N4)("Breadcrumbs",$,e),{className:t,children:a,separator:p,classNames:f,styles:m,unstyled:d}=n,y=b(n,["className","children","separator","classNames","styles","unstyled"]),{classes:g,cx:v}=s(null,{classNames:f,styles:m,unstyled:d,name:"Breadcrumbs"}),k=l.Children.toArray(a).reduce((e,r,n,t)=>{var a;let o=(0,i.k)(r)?l.cloneElement(r,{className:v(g.breadcrumb,null==(a=r.props)?void 0:a.className),key:n}):l.createElement("div",{className:g.breadcrumb,key:n},r);return e.push(o),n!==t.length-1&&e.push(l.createElement(c.x,{size:"sm",className:g.separator,key:`separator-${n}`},p)),e},[]);return l.createElement(u.x,h({className:v(g.root,t),ref:r},y),k)});g.displayName="@mantine/core/Breadcrumbs";var v=[{title:"Mantine",href:"#"},{title:"Mantine hooks",href:"#"},{title:"use-id",href:"#"},].map(function(e,r){return(0,t.jsxs)(a.e,{href:e.href,children:["    ",e.title,"  "]},r)});function k(){return(0,t.jsxs)(t.Fragment,{children:["      ",(0,t.jsx)(g,{children:v}),"      ",(0,t.jsx)(g,{separator:"→",children:v}),"    "]})}}}]);