(this["webpackJsonpfrontend-exam"]=this["webpackJsonpfrontend-exam"]||[]).push([[0],{26:function(e,t,n){e.exports=n(51)},51:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(8),i=n.n(o),r=n(12),c=n(15),u="https://img.icons8.com/color/search/0",l="https://img.icons8.com/color/search/1",g=[{answer:"Wow!",suggestions:["That's amaizing","Right","YEP"]},{answer:"Fascinating, please do go on",suggestions:["Sure","Let's start","No way","Are you sure?"]},{answer:"Amazing!",suggestions:["Really?","Got you","Thanx!!!"]},{answer:"If you say so...",suggestions:["Will do It","Any Concerns"]}],f=n(71),d=n(70),h=n(68),m=Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:e.spacing(.5)},chip:{margin:e.spacing(.5)}}})),p=function(e){var t,n=m();return s.a.createElement(d.a,{className:n.root},null===(t=function(e){var t;return null===(t=g.find((function(t){return t.answer===e})))||void 0===t?void 0:t.suggestions}(e.message))||void 0===t?void 0:t.map((function(t,a){return s.a.createElement(f.a,{onClick:function(){console.log("clicked ".concat(t)),e.onAnswerPicked(t)},key:a,label:t,className:n.chip})})))},y=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),f=Object(r.a)(i,2),d=f[0],h=f[1],m=Object(a.useState)(""),y=Object(r.a)(m,2),b=y[0],x=y[1],j=Object(a.useState)(void 0),v=Object(r.a)(j,2),w=v[0],E=v[1];Object(a.useEffect)((function(){var e=n.length&&n[n.length-1];e&&!e.isUser&&h("")}),[n]),Object(a.useEffect)((function(){d&&x("")}),[d]),Object(c.useUserTyping)(n,o,b,d,u);var O=Object(c.useBotTyping)(n,o,d,l);Object(a.useEffect)((function(){if(O){var e=n.length&&n[n.length-1];e&&!e.isUser&&(e.message=g[Math.floor(Math.random()*g.length)].answer,e.isLoading=!1,E(e.message),x(""))}}),[n,O]);return s.a.createElement(c.ChatWindow,{headerAdditionalContent:s.a.createElement("div",{style:{flex:1,display:"flex",justifyContent:"center"}},"HEADER"),content:n,onChange:function(e){return x(e)},onSubmit:function(e){return h(e)},footer:n.length>0&&!n[0].isLoading?s.a.createElement(p,{message:w,onAnswerPicked:function(e){n.push(function(e,t,n){return{isUser:e,message:t,avatar:u,id:"message_".concat(n),isLoading:!1}}(!0,e,n.length)),h(e)}}):void 0})};i.a.render(s.a.createElement((function(){return s.a.createElement("div",{style:{height:"calc(100vh - 40px)",width:"100%",display:"flex",justifyContent:"center"}},s.a.createElement("div",{style:{height:"100%",width:"360px",display:"flex",flexDirection:"column",justifyContent:"center",borderRadius:"10px",boxShadow:"rgba(0,0,0,0.5) 0px 0px 3px 3px"}},s.a.createElement(y,null)))}),null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.473d8b47.chunk.js.map