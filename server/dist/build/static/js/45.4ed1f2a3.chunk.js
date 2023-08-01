"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[45],{4045:function(n,r,e){e.r(r),e.d(r,{default:function(){return dn}});var a=e(2791),i=e(152),t=e(4554),c=e(8660),o=e(4165),s=e(5861),l=e(6790),u=e(4423),d=e(9594),p=e(3577),m=e(3433),f=e(4942),v=e(3366),x=e(7462),h=e(8182),_=e(1184),Z=e(8519),g=e(4419),j=e(6934),w=e(1402),b=e(3967);var N=a.createContext(),S=e(5878),k=e(1217);function y(n){return(0,k.Z)("MuiGrid",n)}var M=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],W=(0,S.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,m.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,m.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,m.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,m.Z)(M.map((function(n){return"grid-xs-".concat(n)}))),(0,m.Z)(M.map((function(n){return"grid-sm-".concat(n)}))),(0,m.Z)(M.map((function(n){return"grid-md-".concat(n)}))),(0,m.Z)(M.map((function(n){return"grid-lg-".concat(n)}))),(0,m.Z)(M.map((function(n){return"grid-xl-".concat(n)}))))),z=e(184),C=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function P(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function H(n){var r=n.breakpoints,e=n.values,a="";Object.keys(e).forEach((function(n){""===a&&0!==e[n]&&(a=n)}));var i=Object.keys(r).sort((function(n,e){return r[n]-r[e]}));return i.slice(0,i.indexOf(a))}var E=(0,j.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var e=n.ownerState,a=e.container,i=e.direction,t=e.item,c=e.spacing,o=e.wrap,s=e.zeroMinWidth,l=e.breakpoints,u=[];a&&(u=function(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[e["spacing-xs-".concat(String(n))]];var a=[];return r.forEach((function(r){var i=n[r];Number(i)>0&&a.push(e["spacing-".concat(r,"-").concat(String(i))])})),a}(c,l,r));var d=[];return l.forEach((function(n){var a=e[n];a&&d.push(r["grid-".concat(n,"-").concat(String(a))])})),[r.root,a&&r.container,t&&r.item,s&&r.zeroMinWidth].concat((0,m.Z)(u),["row"!==i&&r["direction-xs-".concat(String(i))],"wrap"!==o&&r["wrap-xs-".concat(String(o))]],d)}})((function(n){var r=n.ownerState;return(0,x.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(n){var r=n.theme,e=n.ownerState,a=(0,_.P$)({values:e.direction,breakpoints:r.breakpoints.values});return(0,_.k9)({theme:r},a,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(W.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,e=n.ownerState,a=e.container,i=e.rowSpacing,t={};if(a&&0!==i){var c,o=(0,_.P$)({values:i,breakpoints:r.breakpoints.values});"object"===typeof o&&(c=H({breakpoints:r.breakpoints.values,values:o})),t=(0,_.k9)({theme:r},o,(function(n,e){var a,i=r.spacing(n);return"0px"!==i?(0,f.Z)({marginTop:"-".concat(P(i))},"& > .".concat(W.item),{paddingTop:P(i)}):null!=(a=c)&&a.includes(e)?{}:(0,f.Z)({marginTop:0},"& > .".concat(W.item),{paddingTop:0})}))}return t}),(function(n){var r=n.theme,e=n.ownerState,a=e.container,i=e.columnSpacing,t={};if(a&&0!==i){var c,o=(0,_.P$)({values:i,breakpoints:r.breakpoints.values});"object"===typeof o&&(c=H({breakpoints:r.breakpoints.values,values:o})),t=(0,_.k9)({theme:r},o,(function(n,e){var a,i=r.spacing(n);return"0px"!==i?(0,f.Z)({width:"calc(100% + ".concat(P(i),")"),marginLeft:"-".concat(P(i))},"& > .".concat(W.item),{paddingLeft:P(i)}):null!=(a=c)&&a.includes(e)?{}:(0,f.Z)({width:"100%",marginLeft:0},"& > .".concat(W.item),{paddingLeft:0})}))}return t}),(function(n){var r,e=n.theme,a=n.ownerState;return e.breakpoints.keys.reduce((function(n,i){var t={};if(a[i]&&(r=a[i]),!r)return n;if(!0===r)t={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)t={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,_.P$)({values:a.columns,breakpoints:e.breakpoints.values}),o="object"===typeof c?c[i]:c;if(void 0===o||null===o)return n;var s="".concat(Math.round(r/o*1e8)/1e6,"%"),l={};if(a.container&&a.item&&0!==a.columnSpacing){var u=e.spacing(a.columnSpacing);if("0px"!==u){var d="calc(".concat(s," + ").concat(P(u),")");l={flexBasis:d,maxWidth:d}}}t=(0,x.Z)({flexBasis:s,flexGrow:0,maxWidth:s},l)}return 0===e.breakpoints.values[i]?Object.assign(n,t):n[e.breakpoints.up(i)]=t,n}),{})}));var L=function(n){var r=n.classes,e=n.container,a=n.direction,i=n.item,t=n.spacing,c=n.wrap,o=n.zeroMinWidth,s=n.breakpoints,l=[];e&&(l=function(n,r){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var e=[];return r.forEach((function(r){var a=n[r];if(Number(a)>0){var i="spacing-".concat(r,"-").concat(String(a));e.push(i)}})),e}(t,s));var u=[];s.forEach((function(r){var e=n[r];e&&u.push("grid-".concat(r,"-").concat(String(e)))}));var d={root:["root",e&&"container",i&&"item",o&&"zeroMinWidth"].concat((0,m.Z)(l),["row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==c&&"wrap-xs-".concat(String(c))],u)};return(0,g.Z)(d,y,r)},T=a.forwardRef((function(n,r){var e=(0,w.Z)({props:n,name:"MuiGrid"}),i=(0,b.Z)().breakpoints,t=(0,Z.Z)(e),c=t.className,o=t.columns,s=t.columnSpacing,l=t.component,u=void 0===l?"div":l,d=t.container,p=void 0!==d&&d,m=t.direction,f=void 0===m?"row":m,_=t.item,g=void 0!==_&&_,j=t.rowSpacing,S=t.spacing,k=void 0===S?0:S,y=t.wrap,M=void 0===y?"wrap":y,W=t.zeroMinWidth,P=void 0!==W&&W,H=(0,v.Z)(t,C),T=j||k,O=s||k,R=a.useContext(N),G=p?o||12:R,D={},A=(0,x.Z)({},H);i.keys.forEach((function(n){null!=H[n]&&(D[n]=H[n],delete A[n])}));var B=(0,x.Z)({},t,{columns:G,container:p,direction:f,item:g,rowSpacing:T,columnSpacing:O,wrap:M,zeroMinWidth:P,spacing:k},D,{breakpoints:i.keys}),V=L(B);return(0,z.jsx)(N.Provider,{value:G,children:(0,z.jsx)(E,(0,x.Z)({ownerState:B,className:(0,h.Z)(V.root,c),as:u,ref:r},A))})})),O=T,R=e(5527),G=e(890),D=e(6314),A=e(819),B=e(5524),V=e(1195),K={container:"HomePros_container__yQUA3",h100:"HomePros_h100__B3Lir",icon:"HomePros_icon__i1wPR"};function F(){return(0,z.jsxs)(O,{container:!0,spacing:2,className:K.container,children:[(0,z.jsx)(O,{item:!0,xs:3,className:K.h100,children:(0,z.jsxs)(R.Z,{className:"container ".concat(K.h100),children:[(0,z.jsx)(D.Z,{className:K.icon,color:"primary"}),(0,z.jsx)(G.Z,{variant:"body2",children:"Start in just few clicks"})]})}),(0,z.jsx)(O,{item:!0,xs:3,children:(0,z.jsxs)(R.Z,{className:"container ".concat(K.h100),children:[(0,z.jsx)(A.Z,{className:K.icon,color:"primary"}),(0,z.jsx)(G.Z,{variant:"body2",children:"Free plan"})]})}),(0,z.jsx)(O,{item:!0,xs:3,children:(0,z.jsxs)(R.Z,{className:"container ".concat(K.h100),children:[(0,z.jsx)(B.Z,{className:K.icon,color:"primary"}),(0,z.jsx)(G.Z,{variant:"body2",children:"Multi projects support"})]})}),(0,z.jsx)(O,{item:!0,xs:3,children:(0,z.jsxs)(R.Z,{className:"container ".concat(K.h100),children:[(0,z.jsx)(V.Z,{className:K.icon,color:"primary"}),(0,z.jsx)(G.Z,{variant:"body2",children:"Notifications"})]})})]})}var U=e(1087),$=e(493),q=e(5021),I=e(7064),Q=e(9900),X=e(6702),Y=e(1141),J=e(9011),nn=e(7143),rn={banner__container:"HomeMain_banner__container__3Uwzp",banner__dots:"HomeMain_banner__dots__TEDXC",banner__subtitle:"HomeMain_banner__subtitle__4OCYN",flow__container:"HomeMain_flow__container__kGXZS",flow__item:"HomeMain_flow__item__KyrrM",flow__iconWrapper:"HomeMain_flow__iconWrapper__ay+WZ",flow__icon:"HomeMain_flow__icon__BnBDT"};function en(){var n={color:"text.primary"};return(0,z.jsxs)(O,{container:!0,spacing:2,mb:2,flexGrow:1,children:[(0,z.jsx)(O,{item:!0,xs:8,children:(0,z.jsxs)(R.Z,{className:"container ".concat(rn.banner__container),children:[(0,z.jsx)(t.Z,{className:rn.banner__dots}),(0,z.jsx)(G.Z,{variant:"h2",children:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_NAME}),(0,z.jsx)(G.Z,{variant:"h3",className:rn.banner__subtitle,color:"secondary",children:"Keep your project on track"})]})}),(0,z.jsx)(O,{item:!0,xs:4,children:(0,z.jsxs)(R.Z,{className:"container ".concat(rn.flow__container),children:[(0,z.jsx)(G.Z,{variant:"h3",className:rn.banner__subtitle,color:"secondary",children:"Start Now"}),(0,z.jsxs)($.Z,{children:[(0,z.jsx)(U.rU,{to:nn.ww.url,children:(0,z.jsxs)(q.ZP,{className:rn.flow__item,children:[(0,z.jsx)(I.Z,{className:rn.flow__iconWrapper,children:(0,z.jsx)(X.Z,{className:rn.flow__icon})}),(0,z.jsx)(Q.Z,{primary:"Create Project",sx:n})]})}),(0,z.jsxs)(q.ZP,{className:rn.flow__item,children:[(0,z.jsx)(I.Z,{className:rn.flow__iconWrapper,children:(0,z.jsx)(Y.Z,{className:rn.flow__icon})}),(0,z.jsx)(Q.Z,{primary:"Copy Key",sx:n})]}),(0,z.jsxs)(q.ZP,{className:rn.flow__item,children:[(0,z.jsx)(I.Z,{className:rn.flow__iconWrapper,children:(0,z.jsx)(V.Z,{className:rn.flow__icon})}),(0,z.jsx)(Q.Z,{primary:"Setup Notifications",sx:n})]}),(0,z.jsxs)(q.ZP,{className:rn.flow__item,children:[(0,z.jsx)(I.Z,{className:rn.flow__iconWrapper,children:(0,z.jsx)(J.Z,{className:rn.flow__icon})}),(0,z.jsx)(Q.Z,{primary:"Plugin to your project",sx:n})]})]})]})})]})}var an=e(3623),tn=e(5036),cn=e(3794),on=e(2690);i.kL.register(i.qi,i.u,i.De);var sn={datasets:[{data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]};var ln=function(){var n=(0,c.C)((function(n){return n.homeReducer})),r=n.loaded,e=n.error,a={height:"100%"};return(0,z.jsxs)(O,{container:!0,spacing:2,sx:{flex:"0 0 200px"},children:[(0,z.jsx)(O,{item:!0,xs:4,children:(0,z.jsx)(R.Z,{className:"container",sx:a,children:(0,z.jsx)(tn.Vb,{})})}),(0,z.jsx)(O,{item:!0,xs:4,children:(0,z.jsxs)(R.Z,{className:"container",sx:a,children:[r&&!e&&(0,z.jsx)(an.$I,{data:sn}),(0,z.jsx)(on.Z,{error:e})]})}),(0,z.jsx)(O,{item:!0,xs:4,children:(0,z.jsx)(R.Z,{className:"container",sx:a,children:(0,z.jsx)(cn.A,{})})})]})},un="Home_home__wrapper__KrQb+";i.kL.register(i.qi,i.u,i.De);var dn=function(){var n=(0,c.T)();return(0,a.useEffect)((function(){n(function(){var n=(0,s.Z)((0,o.Z)().mark((function n(r){var e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.Z.get(u.a3);case 3:e=n.sent,r(d.c.actions.init(e.data)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),r(d.c.actions.onError((0,p.W)(n.t0)));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}())}),[n]),(0,z.jsxs)(t.Z,{className:un,children:[(0,z.jsx)(F,{}),(0,z.jsx)(en,{}),(0,z.jsx)(ln,{})]})}},819:function(n,r,e){var a=e(4836);r.Z=void 0;var i=a(e(5649)),t=e(184),c=(0,i.default)((0,t.jsx)("path",{d:"M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"}),"CardGiftcard");r.Z=c},6702:function(n,r,e){var a=e(4836);r.Z=void 0;var i=a(e(5649)),t=e(184),c=(0,i.default)((0,t.jsx)("path",{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"}),"CreateNewFolder");r.Z=c},1195:function(n,r,e){var a=e(4836);r.Z=void 0;var i=a(e(5649)),t=e(184),c=(0,i.default)((0,t.jsx)("path",{d:"M7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}),"NotificationsActive");r.Z=c},9011:function(n,r,e){var a=e(4836);r.Z=void 0;var i=a(e(5649)),t=e(184),c=(0,i.default)((0,t.jsx)("path",{d:"M16.01 7 16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"}),"Power");r.Z=c},6314:function(n,r,e){var a=e(4836);r.Z=void 0;var i=a(e(5649)),t=e(184),c=(0,i.default)((0,t.jsx)("path",{d:"M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"}),"RocketLaunch");r.Z=c}}]);
//# sourceMappingURL=45.4ed1f2a3.chunk.js.map