"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[564],{1564:function(e,t,a){a.r(t),a.d(t,{default:function(){return ne}});var n=a(2791),r=a(5527),s=a(890),i=a(4554),o=a(6151);var c=a.p+"static/media/patreon-svgrepo-com.5d5c7b26577ee7e8fd77792007d5421d.svg",l="Donate_container__Nb7J8",d="Donate_list__eXPz7",u="Donate_title__Kix8-",p="Donate_tile__we0UZ",m="Donate_icon__pwIeR",v="Donate_icon__el__sHfAK",h="Donate_btn__WVKMv",f=a(184),Z=function(e){var t=e.title;return(0,f.jsx)(s.Z,{variant:"h3",className:u,color:"secondary",children:t})},b=function(){return(0,f.jsxs)(i.Z,{className:p,children:[(0,f.jsx)(Z,{title:"Support us on Patreon"}),(0,f.jsx)(i.Z,{className:m,children:(0,f.jsx)("img",{className:v,src:c,alt:"Icon"})}),(0,f.jsx)("a",{href:"https://www.patreon.com/max_im",target:"_blank",rel:"noreferrer",children:(0,f.jsx)(o.Z,{variant:"outlined",className:h,children:"Support"})})]})},x=a(1413),g=a(4165),y=a(5861),j=a(9439),_=a(8096),w=a(4925),C=a(4942),N=a(3366),k=a(7462),O=a(8182),S=a(4419),I=a(2065),M=a(6934),D=a(1402),F=a(6199),V=a(335),B=a(162),G=a(2071),q=a(133),P=a(6014),R=a(9849),$=a(5878),z=a(1217);function T(e){return(0,z.Z)("MuiMenuItem",e)}var H=(0,$.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),W=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],A=(0,M.ZP)(V.Z,{shouldForwardProp:function(e){return(0,M.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,k.Z)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,C.Z)(t,"&.".concat(H.selected),(0,C.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,I.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(H.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,I.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,C.Z)(t,"&.".concat(H.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,I.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,I.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,C.Z)(t,"&.".concat(H.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,C.Z)(t,"&.".concat(H.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),(0,C.Z)(t,"& + .".concat(q.Z.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),(0,C.Z)(t,"& + .".concat(q.Z.inset),{marginLeft:52}),(0,C.Z)(t,"& .".concat(R.Z.root),{marginTop:0,marginBottom:0}),(0,C.Z)(t,"& .".concat(R.Z.inset),{paddingLeft:36}),(0,C.Z)(t,"& .".concat(P.Z.root),{minWidth:36}),t),!n.dense&&(0,C.Z)({},a.breakpoints.up("sm"),{minHeight:"auto"}),n.dense&&(0,k.Z)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,(0,C.Z)({},"& .".concat(P.Z.root," svg"),{fontSize:"1.25rem"})))})),K=n.forwardRef((function(e,t){var a=(0,D.Z)({props:e,name:"MuiMenuItem"}),r=a.autoFocus,s=void 0!==r&&r,i=a.component,o=void 0===i?"li":i,c=a.dense,l=void 0!==c&&c,d=a.divider,u=void 0!==d&&d,p=a.disableGutters,m=void 0!==p&&p,v=a.focusVisibleClassName,h=a.role,Z=void 0===h?"menuitem":h,b=a.tabIndex,x=a.className,g=(0,N.Z)(a,W),y=n.useContext(F.Z),j=n.useMemo((function(){return{dense:l||y.dense||!1,disableGutters:m}}),[y.dense,l,m]),_=n.useRef(null);(0,B.Z)((function(){s&&_.current&&_.current.focus()}),[s]);var w,C=(0,k.Z)({},a,{dense:j.dense,divider:u,disableGutters:m}),I=function(e){var t=e.disabled,a=e.dense,n=e.divider,r=e.disableGutters,s=e.selected,i=e.classes,o={root:["root",a&&"dense",t&&"disabled",!r&&"gutters",n&&"divider",s&&"selected"]},c=(0,S.Z)(o,T,i);return(0,k.Z)({},i,c)}(a),M=(0,G.Z)(_,t);return a.disabled||(w=void 0!==b?b:-1),(0,f.jsx)(F.Z.Provider,{value:j,children:(0,f.jsx)(A,(0,k.Z)({ref:M,role:Z,tabIndex:w,component:o,focusVisibleClassName:(0,O.Z)(I.focusVisible,v),className:(0,O.Z)(I.root,x)},g,{ownerState:C,classes:I}))})})),L=a(7198),J=a(6790),Q=a(4423),U=a(3577),X=function(){var e=(0,y.Z)((0,g.Z)().mark((function e(t){var a;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.Z.get("".concat(Q.qQ,"/").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),(0,U.W)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();var E=a.p+"static/media/card.7c621daa45265160602e9ac860b95a8f.svg",Y=a(2690),ee=function(){var e=n.useState(""),t=(0,j.Z)(e,2),a=t[0],r=t[1],s=n.useState(null),c=(0,j.Z)(s,2),l=c[0],d=c[1],u=n.useState({data:"",signature:""}),b=(0,j.Z)(u,2),C=b[0],N=b[1],k=function(){var e=(0,y.Z)((0,g.Z)().mark((function e(t){var a,n;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,e.prev=1,e.next=4,X(a);case 4:n=e.sent,r(a),N(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),d(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),O=a?{}:{disabled:!0};return(0,f.jsxs)(i.Z,{className:p,children:[(0,f.jsx)(Z,{title:"Support us by card"}),(0,f.jsx)(i.Z,{className:m,children:(0,f.jsx)("img",{className:v,src:E,alt:"Icon"})}),(0,f.jsxs)("form",{method:"POST",action:"https://www.liqpay.ua/api/3/checkout",acceptCharset:"utf-8",children:[(0,f.jsxs)(_.Z,{fullWidth:!0,children:[(0,f.jsx)(w.Z,{size:"small",id:"amount",children:"Amount $"}),(0,f.jsxs)(L.Z,{size:"small",labelId:"amount",value:a,label:"Amount",onChange:k,children:[(0,f.jsx)(K,{value:1,children:"$ 1.00"}),(0,f.jsx)(K,{value:3,children:"$ 3.00"}),(0,f.jsx)(K,{value:5,children:"$ 5.00"}),(0,f.jsx)(K,{value:10,children:"$ 10.00"}),(0,f.jsx)(K,{value:15,children:"$ 15.00"})]})]}),(0,f.jsx)("input",{type:"hidden",name:"data",value:C.data}),(0,f.jsx)("input",{type:"hidden",name:"signature",value:C.signature}),(0,f.jsx)(Y.Z,{error:l}),(0,f.jsx)(o.Z,(0,x.Z)((0,x.Z)({variant:"outlined"},O),{},{type:"submit",className:h,children:"Support"}))]})]})};var te=a.p+"static/media/coffee.9048a1b494d0607b77ab63706ce9f702.svg",ae=function(){return(0,f.jsxs)(i.Z,{className:p,children:[(0,f.jsx)(Z,{title:"Buy Me a Coffee"}),(0,f.jsx)(i.Z,{className:m,children:(0,f.jsx)("img",{className:v,src:te,alt:"Icon"})}),(0,f.jsx)("a",{href:"https://www.buymeacoffee.com/pogidaevmo8",target:"_blank",rel:"noreferrer",children:(0,f.jsx)(o.Z,{variant:"outlined",className:h,children:"Buy me a coffee"})})]})},ne=function(){return(0,f.jsxs)(r.Z,{className:"container ".concat(l),children:[(0,f.jsx)(s.Z,{mb:2,variant:"h5",children:"Select Convinient variant"}),(0,f.jsxs)(i.Z,{className:d,children:[(0,f.jsx)(b,{}),(0,f.jsx)(ae,{}),(0,f.jsx)(ee,{})]})]})}}}]);
//# sourceMappingURL=564.30db0f57.chunk.js.map