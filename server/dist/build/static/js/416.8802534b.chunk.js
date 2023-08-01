/*! For license information please see 416.8802534b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[416],{4416:function(e,t,r){r.r(t),r.d(t,{default:function(){return te}});var o=r(2791),a=r(7689),c=r(1087),n=r(4554),i=r(5527),l=r(890),s=r(4721),d=r(6151),u=r(7122),p=r(8660),f=r(7143),v=r(1413),h=r(9439),m=r(4942),g=r(3366),j=r(7462),b=(r(8457),r(8182)),Z=r(4419),y=r(6934),x=r(1402),_=r(4036);function C(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var R=r(5878),S=r(1217);function w(e){return(0,S.Z)("MuiToggleButtonGroup",e)}var z=(0,R.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),T=r(184),k=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],O=(0,y.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,m.Z)({},"& .".concat(z.grouped),t.grouped),(0,m.Z)({},"& .".concat(z.grouped),t["grouped".concat((0,_.Z)(r.orientation))]),t.root,"vertical"===r.orientation&&t.vertical,r.fullWidth&&t.fullWidth]}})((function(e){var t=e.ownerState,r=e.theme;return(0,j.Z)({display:"inline-flex",borderRadius:(r.vars||r).shape.borderRadius},"vertical"===t.orientation&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},(0,m.Z)({},"& .".concat(z.grouped),(0,j.Z)({},"horizontal"===t.orientation?(0,m.Z)({"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&.".concat(z.selected," + .").concat(z.grouped,".").concat(z.selected),{borderLeft:0,marginLeft:0}):(0,m.Z)({"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}},"&.".concat(z.selected," + .").concat(z.grouped,".").concat(z.selected),{borderTop:0,marginTop:0}))))})),P=o.forwardRef((function(e,t){var r=(0,x.Z)({props:e,name:"MuiToggleButtonGroup"}),a=r.children,c=r.className,n=r.color,i=void 0===n?"standard":n,l=r.disabled,s=void 0!==l&&l,d=r.exclusive,u=void 0!==d&&d,p=r.fullWidth,f=void 0!==p&&p,v=r.onChange,h=r.orientation,m=void 0===h?"horizontal":h,y=r.size,R=void 0===y?"medium":y,S=r.value,z=(0,g.Z)(r,k),P=(0,j.Z)({},r,{disabled:s,fullWidth:f,orientation:m,size:R}),W=function(e){var t=e.classes,r=e.orientation,o=e.fullWidth,a=e.disabled,c={root:["root","vertical"===r&&"vertical",o&&"fullWidth"],grouped:["grouped","grouped".concat((0,_.Z)(r)),a&&"disabled"]};return(0,Z.Z)(c,w,t)}(P),B=function(e,t){if(v){var r,o=S&&S.indexOf(t);S&&o>=0?(r=S.slice()).splice(o,1):r=S?S.concat(t):[t],v(e,r)}},N=function(e,t){v&&v(e,S===t?null:t)};return(0,T.jsx)(O,(0,j.Z)({role:"group",className:(0,b.Z)(W.root,c),ref:t,ownerState:P},z,{children:o.Children.map(a,(function(e){return o.isValidElement(e)?o.cloneElement(e,{className:(0,b.Z)(W.grouped,e.props.className),onChange:u?N:B,selected:void 0===e.props.selected?C(e.props.value,S):e.props.selected,size:e.props.size||R,fullWidth:f,color:e.props.color||i,disabled:e.props.disabled||s}):null}))}))})),W=r(2065),B=r(335);function N(e){return(0,S.Z)("MuiToggleButton",e)}var L=(0,R.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),M=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],F=(0,y.ZP)(B.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["size".concat((0,_.Z)(r.size))]]}})((function(e){var t,r,o=e.theme,a=e.ownerState,c="standard"===a.color?o.palette.text.primary:o.palette[a.color].main;return o.vars&&(c="standard"===a.color?o.vars.palette.text.primary:o.vars.palette[a.color].main,r="standard"===a.color?o.vars.palette.text.primaryChannel:o.vars.palette[a.color].mainChannel),(0,j.Z)({},o.typography.button,{borderRadius:(o.vars||o).shape.borderRadius,padding:11,border:"1px solid ".concat((o.vars||o).palette.divider),color:(o.vars||o).palette.action.active},a.fullWidth&&{width:"100%"},(t={},(0,m.Z)(t,"&.".concat(L.disabled),{color:(o.vars||o).palette.action.disabled,border:"1px solid ".concat((o.vars||o).palette.action.disabledBackground)}),(0,m.Z)(t,"&:hover",{textDecoration:"none",backgroundColor:o.vars?"rgba(".concat(o.vars.palette.text.primaryChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,W.Fq)(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,m.Z)(t,"&.".concat(L.selected),{color:c,backgroundColor:o.vars?"rgba(".concat(r," / ").concat(o.vars.palette.action.selectedOpacity,")"):(0,W.Fq)(c,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?"rgba(".concat(r," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.hoverOpacity,"))"):(0,W.Fq)(c,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?"rgba(".concat(r," / ").concat(o.vars.palette.action.selectedOpacity,")"):(0,W.Fq)(c,o.palette.action.selectedOpacity)}}}),t),"small"===a.size&&{padding:7,fontSize:o.typography.pxToRem(13)},"large"===a.size&&{padding:15,fontSize:o.typography.pxToRem(15)})})),G=o.forwardRef((function(e,t){var r=(0,x.Z)({props:e,name:"MuiToggleButton"}),o=r.children,a=r.className,c=r.color,n=void 0===c?"standard":c,i=r.disabled,l=void 0!==i&&i,s=r.disableFocusRipple,d=void 0!==s&&s,u=r.fullWidth,p=void 0!==u&&u,f=r.onChange,v=r.onClick,h=r.selected,m=r.size,y=void 0===m?"medium":m,C=r.value,R=(0,g.Z)(r,M),S=(0,j.Z)({},r,{color:n,disabled:l,disableFocusRipple:d,fullWidth:p,size:y}),w=function(e){var t=e.classes,r=e.fullWidth,o=e.selected,a=e.disabled,c=e.size,n=e.color,i={root:["root",o&&"selected",a&&"disabled",r&&"fullWidth","size".concat((0,_.Z)(c)),n]};return(0,Z.Z)(i,N,t)}(S);return(0,T.jsx)(F,(0,j.Z)({className:(0,b.Z)(w.root,a),disabled:l,focusRipple:!d,ref:t,onClick:function(e){v&&(v(e,C),e.defaultPrevented)||f&&f(e,C)},onChange:f,value:C,ownerState:S,"aria-pressed":h},R,{children:o}))})),E=r(3768),q=r(1895),D=r(9744),I=function(){var e=(0,a.s0)(),t=(0,q.Z)(),r=(0,p.C)((function(e){return e.logReducer})).logs,c=(0,a.TH)().pathname,i=(0,p.T)(),l=t.get("filter"),s=l?l.split(","):[],d=Object.keys(D.d5).filter((function(e){return!s.includes(e)})),u=o.useState((function(){return d})),f=(0,h.Z)(u,2),m=f[0],g=f[1],j=Object.keys(r).length,b={width:20,height:20},Z=function(e){var t=D.d5[e],r={};return t&&(r={bgcolor:t.bg,border:"1px solid ".concat(t.color)}),r};return(0,T.jsx)(n.Z,{children:Boolean(j)&&(0,T.jsx)(n.Z,{sx:{mt:2},children:(0,T.jsx)(P,{value:m,onChange:function(t,r){g(r);var o=Object.keys(D.d5).filter((function(e){return!r.includes(e)})).join(",");e({pathname:c,search:"?filter=".concat(o)}),i((0,D.yG)())},children:Object.keys(D.d5)&&Object.keys(D.d5).map((function(e){return(0,T.jsx)(G,{value:e,children:(0,T.jsx)(E.Z,{title:e,children:(0,T.jsx)(n.Z,{sx:(0,v.Z)((0,v.Z)({},b),Z(e))})})},e)}))})})})},$=r(9531),H=r(4165),V=r(5861),A=r(6790),U=r(4423),Y=r(7762),J=(0,r(6382).oM)({name:"project",initialState:{projects:[],ids:{},currentProject:null,error:null},reducers:{add:function(e,t){var r,o=(0,Y.Z)(t.payload);try{for(o.s();!(r=o.n()).done;){var a=r.value;e.ids[a.id]||(e.ids[a.id]=!0,e.projects.push(a))}}catch(c){o.e(c)}finally{o.f()}},create:function(e,t){e.projects.push(t.payload)},delete:function(e,t){e.projects=e.projects.filter((function(e){return e.id!==t.payload}))},setCurrent:function(e,t){e.currentProject=t.payload},clearCurrent:function(e){e.currentProject=null},onError:function(e,t){e.error=t.payload}}}),K=(J.reducer,r(3577)),Q=function(e){return function(){var t=(0,V.Z)((0,H.Z)().mark((function t(r){var o,a;return(0,H.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.Z.get("".concat(U.gw,"/").concat(e));case 3:o=t.sent,r(J.actions.setCurrent(o.data.project)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),a=(0,K.W)(t.t0),r(J.actions.onError(a));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},X={project__wrapper:"ProjectPage_project__wrapper__LrGZ8",project__main:"ProjectPage_project__main__p5v6H",project__aside:"ProjectPage_project__aside__1Vkea",project__divider:"ProjectPage_project__divider__DiDnF",project__asideContent:"ProjectPage_project__asideContent__fLO0w"},ee=r(2690);function te(){var e=(0,p.T)(),t=(0,a.UO)().projectId,r=(0,p.C)((function(e){return e.projectReducer})),v=r.currentProject,h=r.error;return(0,o.useEffect)((function(){return e(Q(t)),function(){e((0,D.z3)())}}),[e,t]),(0,T.jsx)(n.Z,{children:(0,T.jsxs)(n.Z,{className:X.project__wrapper,children:[(0,T.jsxs)(i.Z,{className:"container ".concat(X.project__main),children:[v&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(l.Z,{variant:"subtitle1",children:v.title}),(0,T.jsx)(s.Z,{className:X.project__divider}),(0,T.jsx)(D.vY,{projectId:t})]}),(0,T.jsx)(ee.Z,{error:h})]}),(0,T.jsx)(n.Z,{mr:2}),(0,T.jsx)(i.Z,{className:"container ".concat(X.project__aside),children:v&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(n.Z,{children:[(0,T.jsx)(l.Z,{variant:"subtitle1",children:"Project Info"}),(0,T.jsx)(s.Z,{className:X.project__divider})]}),(0,T.jsxs)(n.Z,{className:X.project__asideContent,children:[(0,T.jsxs)(n.Z,{children:[(0,T.jsx)(D.Tn,{}),(0,T.jsx)(I,{})]}),(0,T.jsx)(n.Z,{flexGrow:1}),(0,T.jsxs)(n.Z,{children:[(0,T.jsx)(c.rU,{to:"".concat(f.ww.url,"/settings/").concat(v.id),children:(0,T.jsx)(d.Z,{sx:{mt:2},startIcon:(0,T.jsx)(u.Z,{}),children:(0,T.jsx)(l.Z,{color:"text.primary",children:"Project Settings"})})}),(0,T.jsx)($.Z,{id:v.id}),(0,T.jsx)(D.rC,{})]})]})]})})]})})}},7122:function(e,t,r){var o=r(4836);t.Z=void 0;var a=o(r(5649)),c=r(184),n=(0,a.default)((0,c.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.Z=n},6532:function(e,t){var r,o=Symbol.for("react.element"),a=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case c:case i:case n:case p:case f:return e;default:switch(e=e&&e.$$typeof){case d:case s:case u:case h:case v:case l:return e;default:return t}}case a:return t}}}r=Symbol.for("react.module.reference")},8457:function(e,t,r){r(6532)}}]);
//# sourceMappingURL=416.8802534b.chunk.js.map