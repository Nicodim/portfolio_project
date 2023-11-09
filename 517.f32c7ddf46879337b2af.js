"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[517],{8791:function(e,a,r){r.d(a,{I:function(){return l}});var t=r(7294),s=r(3007),n={InputWrapper:"p_6dRLUG",placeholder:"uWIRRz2O",input:"Z6IBiNl_",caretWrapper:"tDY7ayAp",caret:"Y3U88xm_",blink:"nAPg6J3a",readonly:"sFcbjx23"},o=r(5893);const l=(0,t.memo)((e=>{const{className:a,value:r,onChange:l,placeholder:c,autoFocus:d,type:u="text",readonly:i,...p}=e,h=(0,t.useRef)(null),[m,x]=(0,t.useState)(!1),[f,g]=(0,t.useState)(0),v=m&&!i;(0,t.useEffect)((()=>{d&&(x(!0),h.current?.focus())}),[d]);const j={[n.readonly]:i};return(0,o.jsxs)("div",{className:(0,s.A)(n.InputWrapper,j,[a]),children:[c&&(0,o.jsx)("div",{className:n.Placeholder,children:`${c}>`}),(0,o.jsxs)("div",{className:n.caretWrapper,children:[(0,o.jsx)("input",{ref:h,type:u,value:r,onChange:e=>{l?.(e.target.value),g(e.target.value.length)},className:n.input,onFocus:()=>{x(!0)},onBlur:()=>{x(!1)},onSelect:e=>{g(e?.target?.selectionStart||0)},readOnly:i,...p}),v&&(0,o.jsx)("span",{className:n.caret,style:{left:9*f+"px"}})]})]})}))},169:function(e,a,r){r.d(a,{I:function(){return d}});var t=r(7294),s=r(3007),n=r(6452),o=r(8969),l={InputWrapper:"ZyI7rxIe",s:"mKldd7L_",m:"IyQiG8hL",l:"j7JcqtN4",addonLeft:"OqwwYwm8",addonRight:"o_xLYaZC",withAddonLeft:"zVArqqw4",withAddonRight:"HxXya_r8",focused:"jUzuVRdk",input:"L2BiQ3jT",readonly:"xspqW3a0"},c=r(5893);const d=(0,t.memo)((e=>{const{className:a,value:r,onChange:d,type:u="text",placeholder:i,autofocus:p,readonly:h,addonLeft:m,addonRight:x,label:f,size:g="m",...v}=e,j=(0,t.useRef)(null),[y,N]=(0,t.useState)(!1);(0,t.useEffect)((()=>{p&&(N(!0),j.current?.focus())}),[p]);const w={[l.readonly]:h,[l.focused]:y,[l.withAddonLeft]:Boolean(m),[l.withAddonRight]:Boolean(x)},I=(0,c.jsxs)("div",{className:(0,s.A)(l.InputWrapper,w,[a,l[g]]),children:[(0,c.jsx)("div",{className:l.addonLeft,children:m}),(0,c.jsx)("input",{ref:j,type:u,value:r,onChange:e=>{d?.(e.target.value)},className:l.input,onFocus:()=>{N(!0)},onBlur:()=>{N(!1)},readOnly:h,placeholder:i,...v}),(0,c.jsx)("div",{className:l.addonRight,children:x})]});return f?(0,c.jsxs)(n.U,{max:!0,gap:"8",children:[(0,c.jsx)(o.x,{text:f}),I]}):I}))},2517:function(e,a,r){r.r(a),r.d(a,{default:function(){return S}});var t=r(7294),s=r(2327),n=r(743),o=r(3007),l=r(9864),c=r(7499),d=r(5401),u=r(877),i=r(7702),p=r(8791),h=r(526),m=r(8190),x=r(169),f=r(6452),g=r(8969),v="PQPa1eB5",j="Ok_5amJo";const y=e=>e?.loginForm?.error,N=e=>e?.loginForm?.isLoading||!1,w=e=>e?.loginForm?.password||"",I=e=>e?.loginForm?.username||"";var C=r(4268),R=r(2135);const A=(0,C.hg)("login/loginByUsername",(async(e,a)=>{const{extra:r,dispatch:t,rejectWithValue:s}=a;try{const a=await r.api.post("/login",e);if(!a.data)throw new Error;return t(R.hI.setAuthData(a.data)),a.data}catch(e){return console.log(e),s("Error")}})),E=(0,C.oM)({name:"login",initialState:{isLoading:!1,password:"",username:""},reducers:{setUsername:(e,a)=>{e.username=a.payload},setPassword:(e,a)=>{e.password=a.payload}},extraReducers:e=>{e.addCase(A.pending,(e=>{e.error=void 0,e.isLoading=!0})).addCase(A.fulfilled,((e,a)=>{e.isLoading=!1})).addCase(A.rejected,((e,a)=>{e.isLoading=!1,e.error=a.payload}))}}),{actions:L}=E,{reducer:b}=E;var k=r(5893);const F={loginForm:b};var S=(0,t.memo)((e=>{let{className:a,onSuccess:r}=e;const{t:C}=(0,s.$)(),R=(0,d.T)(),E=(0,n.v9)(I),b=(0,n.v9)(w),S=(0,n.v9)(N),W=(0,n.v9)(y),O=(0,u.N)(),U=(0,t.useCallback)((e=>{R(L.setUsername(e))}),[R]),B=(0,t.useCallback)((e=>{R(L.setPassword(e))}),[R]),z=(0,t.useCallback)((async()=>{"fulfilled"===(await R(A({username:E,password:b}))).meta.requestStatus&&(r(),O())}),[R,O,r,b,E]);return(0,k.jsx)(l.W,{removeAfterUnmount:!0,reducers:F,children:(0,k.jsx)(c.zJ,{feature:"isAppRedesigned",on:(0,k.jsxs)(f.g,{gap:"16",children:[(0,k.jsx)(g.x,{title:C("Auth form")}),W&&(0,k.jsx)(g.x,{variant:"error",text:C("The password or username you entered is not correct")}),(0,k.jsx)(x.I,{type:"text",className:v,placeholder:C("Enter username"),autoFocus:!0,onChange:U,value:E}),(0,k.jsx)(x.I,{type:"text",className:v,placeholder:C("Enter password"),onChange:B,value:b}),(0,k.jsx)(m.z,{className:j,variant:"outline",onClick:z,disabled:S,children:C("Sing in")})]}),off:(0,k.jsxs)("div",{className:(0,o.A)("xYNEfcE9",{},[a]),children:[(0,k.jsx)(h.xv,{title:C("Auth form")}),W&&(0,k.jsx)(h.xv,{theme:h.lg.ERROR,text:C("The password or username you entered is not correct")}),(0,k.jsx)(p.I,{type:"text",className:v,placeholder:C("Enter username"),autoFocus:!0,onChange:U,value:E}),(0,k.jsx)(p.I,{type:"text",className:v,placeholder:C("Enter password"),onChange:B,value:b}),(0,k.jsx)(i.zx,{className:j,theme:i.bn.OUTLINE,onClick:z,disabled:S,children:C("Sing in")})]})})})}))},9864:function(e,a,r){r.d(a,{W:function(){return o}});var t=r(7294),s=r(743),n=r(5893);const o=e=>{const{children:a,reducers:r,removeAfterUnmount:o=!0}=e,l=(0,s.oR)(),c=(0,s.I0)();return(0,t.useEffect)((()=>{const e=l.reducerManager.getMountedReducers();return Object.entries(r).forEach((a=>{let[r,t]=a;e[r]||(l.reducerManager.add(r,t),c({type:`@INIT ${r} reducer`}))})),()=>{o&&Object.entries(r).forEach((e=>{let[a,r]=e;l.reducerManager.remove(a),c({type:`@DESTROY ${a} reducer`})}))}}),[]),(0,n.jsx)(n.Fragment,{children:a})}}}]);