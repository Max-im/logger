"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[256],{6256:function(e,r,t){t.r(r),t.d(r,{default:function(){return Re}});var n=t(2791),o=t(4554),a=t(5527),i=t(890),c=t(4721),s=t(8660),l=t(9439),u=t(6151),d=t(5391),p=t(7462),f=t(3366),h=t(8182),m=t(4419),j=t(6248),v=t(6934),x=t(1402),Z=t(292),_=t(4527),w=t(8029),g=t(4925),b=t(8096),P=t(4942),y=t(6147),C=t(2930),R=t(4036),N=t(5878),F=t(1217);function k(e){return(0,F.Z)("MuiFormHelperText",e)}var T,z=(0,N.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),S=t(184),M=["children","className","component","disabled","error","filled","focused","margin","required","variant"],q=(0,v.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.size&&r["size".concat((0,R.Z)(t.size))],t.contained&&r.contained,t.filled&&r.filled]}})((function(e){var r,t=e.theme,n=e.ownerState;return(0,p.Z)({color:(t.vars||t).palette.text.secondary},t.typography.caption,(r={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,P.Z)(r,"&.".concat(z.disabled),{color:(t.vars||t).palette.text.disabled}),(0,P.Z)(r,"&.".concat(z.error),{color:(t.vars||t).palette.error.main}),r),"small"===n.size&&{marginTop:4},n.contained&&{marginLeft:14,marginRight:14})})),I=n.forwardRef((function(e,r){var t=(0,x.Z)({props:e,name:"MuiFormHelperText"}),n=t.children,o=t.className,a=t.component,i=void 0===a?"p":a,c=(0,f.Z)(t,M),s=(0,C.Z)(),l=(0,y.Z)({props:t,muiFormControl:s,states:["variant","size","disabled","error","filled","focused","required"]}),u=(0,p.Z)({},t,{component:i,contained:"filled"===l.variant||"outlined"===l.variant,variant:l.variant,size:l.size,disabled:l.disabled,error:l.error,filled:l.filled,focused:l.focused,required:l.required}),d=function(e){var r=e.classes,t=e.contained,n=e.size,o=e.disabled,a=e.error,i=e.filled,c=e.focused,s=e.required,l={root:["root",o&&"disabled",a&&"error",n&&"size".concat((0,R.Z)(n)),t&&"contained",c&&"focused",i&&"filled",s&&"required"]};return(0,m.Z)(l,k,r)}(u);return(0,S.jsx)(q,(0,p.Z)({as:i,ownerState:u,className:(0,h.Z)(d.root,o),ref:r},c,{children:" "===n?T||(T=(0,S.jsx)("span",{className:"notranslate",children:"\u200b"})):n}))})),D=t(7198);function H(e){return(0,F.Z)("MuiTextField",e)}(0,N.Z)("MuiTextField",["root"]);var W=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],V={standard:Z.Z,filled:_.Z,outlined:w.Z},B=(0,v.ZP)(b.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),E=n.forwardRef((function(e,r){var t=(0,x.Z)({props:e,name:"MuiTextField"}),n=t.autoComplete,o=t.autoFocus,a=void 0!==o&&o,i=t.children,c=t.className,s=t.color,l=void 0===s?"primary":s,u=t.defaultValue,d=t.disabled,v=void 0!==d&&d,Z=t.error,_=void 0!==Z&&Z,w=t.FormHelperTextProps,b=t.fullWidth,P=void 0!==b&&b,y=t.helperText,C=t.id,R=t.InputLabelProps,N=t.inputProps,F=t.InputProps,k=t.inputRef,T=t.label,z=t.maxRows,M=t.minRows,q=t.multiline,E=void 0!==q&&q,L=t.name,Y=t.onBlur,O=t.onChange,U=t.onClick,A=t.onFocus,J=t.placeholder,K=t.required,Q=void 0!==K&&K,X=t.rows,G=t.select,$=void 0!==G&&G,ee=t.SelectProps,re=t.type,te=t.value,ne=t.variant,oe=void 0===ne?"outlined":ne,ae=(0,f.Z)(t,W),ie=(0,p.Z)({},t,{autoFocus:a,color:l,disabled:v,error:_,fullWidth:P,multiline:E,required:Q,select:$,variant:oe}),ce=function(e){var r=e.classes;return(0,m.Z)({root:["root"]},H,r)}(ie);var se={};"outlined"===oe&&(R&&"undefined"!==typeof R.shrink&&(se.notched=R.shrink),se.label=T),$&&(ee&&ee.native||(se.id=void 0),se["aria-describedby"]=void 0);var le=(0,j.Z)(C),ue=y&&le?"".concat(le,"-helper-text"):void 0,de=T&&le?"".concat(le,"-label"):void 0,pe=V[oe],fe=(0,S.jsx)(pe,(0,p.Z)({"aria-describedby":ue,autoComplete:n,autoFocus:a,defaultValue:u,fullWidth:P,multiline:E,name:L,rows:X,maxRows:z,minRows:M,type:re,value:te,id:le,inputRef:k,onBlur:Y,onChange:O,onFocus:A,onClick:U,placeholder:J,inputProps:N},se,F));return(0,S.jsxs)(B,(0,p.Z)({className:(0,h.Z)(ce.root,c),disabled:v,error:_,fullWidth:P,ref:r,required:Q,color:l,variant:oe,ownerState:ie},ae,{children:[null!=T&&""!==T&&(0,S.jsx)(g.Z,(0,p.Z)({htmlFor:le,id:de},R,{children:T})),$?(0,S.jsx)(D.Z,(0,p.Z)({"aria-describedby":ue,id:le,labelId:de,value:te,input:fe},ee,{children:i})):fe,y&&(0,S.jsx)(I,(0,p.Z)({id:ue},w,{children:y}))]}))})),L=t(4165),Y=t(5861),O=t(6790),U=t(4423),A=t(3079),J=t(9744),K=t(3577),Q="CreateProject_createProject__modal__jyYwE",X=t(2690);function G(){var e=(0,s.T)(),r=(0,n.useState)(!1),t=(0,l.Z)(r,2),a=t[0],c=t[1],p=(0,n.useState)(""),f=(0,l.Z)(p,2),h=f[0],m=f[1],j=(0,n.useState)(null),v=(0,l.Z)(j,2),x=v[0],Z=v[1],_=function(){return c(!1)},w=function(e){e?Z(e):(m(""),_())};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u.Z,{variant:"contained",onClick:function(){return c(!0)},children:"Create Project"}),(0,S.jsx)(d.Z,{open:a,onClose:_,children:(0,S.jsxs)(o.Z,{sx:{bgcolor:"background.paper"},className:Q,children:[(0,S.jsxs)("form",{onSubmit:function(r){r.preventDefault(),e(function(e,r){return function(){var t=(0,Y.Z)((0,L.Z)().mark((function t(n){var o;return(0,L.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.Z.post(U.gw,{title:e});case 3:o=t.sent,n(A.y.actions.add([o.data.project])),r(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r((0,K.W)(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(h,w))},children:[(0,S.jsx)(i.Z,{variant:"h6",component:"h2",children:"Create Project"}),(0,S.jsx)(o.Z,{sx:{mt:1,mb:1},children:(0,S.jsx)(E,{label:"Title",onChange:function(e){m(e.target.value)},size:"small",variant:"filled"})}),(0,S.jsx)(u.Z,{type:"submit",variant:"contained",children:"Create Project"})]}),(0,S.jsx)(X.Z,{error:x})]})})]})}var $="ProjectsPage_projects__wrapper__81+MF",ee="ProjectsPage_projects__main__fxzp-",re="ProjectsPage_projects__aside__legVB",te="ProjectsPage_projects__divider__lBCxY",ne=t(493),oe=t(5021),ae=t(9900),ie=t(7689),ce=t(1087),se=t(6278),le=t(3543),ue=t(4358),de=t(1141),pe=t(7247),fe=t(7122),he=t(7143),me="ProjectRow_row__item__7t3kT",je="ProjectRow_row__title__Wx9ae",ve="ProjectRow_row__control__nXyQb",xe="ProjectRow_link__3lkD-",Ze="ProjectRow_row__titleWrap__gcM9E",_e="ProjectRow_row__controlItem__SECwl",we="ProjectRow_row__controlIcon__V1pnR",ge="ProjectRow_modal__Nwpju",be=function(e){var r=e.project,t=(0,s.T)(),a=(0,ie.s0)(),u=(0,n.useState)(!1),d=(0,l.Z)(u,2),p=d[0],f=d[1],h=(0,n.useState)(null),m=(0,l.Z)(h,2),j=m[0],v=m[1],x=function(e){e&&v(e)},Z=function(e,r){e.preventDefault(),t(function(e,r){return function(){var t=(0,Y.Z)((0,L.Z)().mark((function t(n){var o;return(0,L.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.Z.delete("".concat(U.gw,"/").concat(e));case 3:n(A.y.actions.delete(e)),n((0,J.z3)()),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),o=t.t0.message||U.JD,r(o);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(r,x))},_={"&:hover":{color:"secondary.main"}};return(0,S.jsxs)(ce.rU,{to:"".concat(he.ww.url,"/").concat(r.id),className:xe,children:[(0,S.jsxs)(oe.ZP,{disablePadding:!0,className:me,children:[(0,S.jsx)(se.Z,{children:(0,S.jsx)(ae.Z,{primary:(0,S.jsx)(o.Z,{className:Ze,children:(0,S.jsx)(i.Z,{color:"text.primary",className:je,children:r.title})}),secondary:(0,S.jsxs)(o.Z,{className:ve,children:[(0,S.jsxs)(i.Z,{sx:_,className:_e,onClick:function(e){return Z(e,r.id)},children:["Delete",(0,S.jsx)(pe.Z,{className:we})]}),(0,S.jsxs)(i.Z,{sx:_,className:_e,onClick:function(e){return function(e,r){e.preventDefault(),a("".concat(he.ww.url,"/settings/").concat(r))}(e,r.id)},children:["Settings",(0,S.jsx)(fe.Z,{className:we})]}),(0,S.jsxs)(i.Z,{sx:_,className:_e,onClick:function(e){return function(e,r){e.preventDefault(),navigator.clipboard.writeText(r),f(!0)}(e,r.id)},children:["Copy Key",(0,S.jsx)(de.Z,{className:we})]})]})})}),(0,S.jsx)(X.Z,{error:j})]}),(0,S.jsx)(c.Z,{}),(0,S.jsx)(le.Z,{open:p,autoHideDuration:3e3,onClose:function(){f(!1)},className:ge,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,S.jsx)(ue.Z,{severity:"success",children:"Id copied"})})]})},Pe=function(e){var r=e.projects;return(0,S.jsxs)(S.Fragment,{children:[r.length>0&&(0,S.jsxs)(ne.Z,{children:[(0,S.jsx)(oe.ZP,{disablePadding:!0,children:(0,S.jsx)(ae.Z,{primary:"Projects list"})}),r.map((function(e){return(0,S.jsx)(be,{project:e},e.id)}))]}),0===r.length&&(0,S.jsx)(i.Z,{variant:"subtitle1",children:"You dont have projects yet, please Create new"})]})},ye=t(1918),Ce=function(e){var r=e.projectsThreshold,t=e.current;return(0,S.jsxs)(S.Fragment,{children:[t>=r&&(0,S.jsxs)(i.Z,{variant:"body1",children:["You currently have a limit of"," ",(0,S.jsx)(ye.Z,{label:r,size:"small",component:"span",color:"secondary"}),"projects under your current plan. To create additional projects, please consider upgrading your",(0,S.jsx)(ce.rU,{to:he.Og.url,children:(0,S.jsx)(i.Z,{color:"primary",children:"plan"})})]}),t<r&&(0,S.jsxs)(i.Z,{mb:2,variant:"subtitle2",children:["You have access to"," ",(0,S.jsx)(ye.Z,{label:r,size:"small",color:"secondary"})," ","projects within the scope of your current plan."]})]})},Re=function(){var e=(0,s.T)(),r=(0,s.C)((function(e){return e.projectReducer})),t=r.projects,l=r.error,u=(0,s.C)((function(e){return e.userReducer})).user,d=(0,s.C)((function(e){return e.planReducer})).plans,p=0;return u&&d.length&&(p=d.find((function(e){return e.id===u.planId})).projectsNum),(0,n.useEffect)((function(){e(function(){var e=(0,Y.Z)((0,L.Z)().mark((function e(r){var t,n;return(0,L.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.Z.get(U.gw);case 3:t=e.sent,r(A.y.actions.add(t.data.projects)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=(0,K.W)(e.t0),r(A.y.actions.onError(n));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}())}),[e]),(0,S.jsxs)(o.Z,{className:$,children:[(0,S.jsxs)(a.Z,{className:"container ".concat(ee),component:"div",children:[!l&&(0,S.jsx)(Pe,{projects:t}),(0,S.jsx)(X.Z,{error:l})]}),(0,S.jsx)(o.Z,{p:1}),(0,S.jsx)(a.Z,{className:"container ".concat(re),children:!l&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(i.Z,{variant:"subtitle1",children:"Projects Info"}),(0,S.jsx)(c.Z,{className:te}),(0,S.jsx)(Ce,{projectsThreshold:p,current:t.length}),t.length<p&&(0,S.jsx)(G,{})]})})]})}},7247:function(e,r,t){var n=t(4836);r.Z=void 0;var o=n(t(5649)),a=t(184),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");r.Z=i},7122:function(e,r,t){var n=t(4836);r.Z=void 0;var o=n(t(5649)),a=t(184),i=(0,o.default)((0,a.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");r.Z=i}}]);
//# sourceMappingURL=256.06b6e6c0.chunk.js.map