(this["webpackJsonpmy-horoscope-app"]=this["webpackJsonpmy-horoscope-app"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),n=c(4),r=c.n(n),s=(c(9),c(10),c(11),c(2)),o=(c(12),c.p+"static/media/logo.396e61c4.jpeg"),l=c.p+"static/media/aquarius.73a3393f.png",u=c.p+"static/media/aries.34231516.png",d=c.p+"static/media/cancer.cc83b3ac.png",p=c.p+"static/media/capricorn.f569bb31.png",b=c.p+"static/media/gemini.1705ecac.png",m=c.p+"static/media/leo.e5a2fa99.png",j=c.p+"static/media/libra.965766ea.png",g=c.p+"static/media/pisces.31900cf6.png",w=c.p+"static/media/sagittarius.217b4a25.png",h=c.p+"static/media/scorpio.e3588db3.png",O=c.p+"static/media/taurus.3c510cbf.png",x=c.p+"static/media/virgo.5064731e.png",y=c(0);function f(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)("dd-mm-yyyy"),r=Object(s.a)(n,2),f=r[0],v=r[1],N=Object(a.useState)(!0),S=Object(s.a)(N,2),k=S[0],T=S[1],C=Object(a.useState)(!1),z=Object(s.a)(C,2),I=z[0],L=z[1],q=Object(a.useState)(!1),D=Object(s.a)(q,2),F=D[0],P=D[1],A=Object(a.useState)(!1),B=Object(s.a)(A,2),E=B[0],J=B[1],M=Object(a.useState)({zodiacSign:"",compatibility:"",color:"",luckyNum:"",luckyTime:"",mood:"",description:""}),_=Object(s.a)(M,2),R=_[0],Y=_[1],G={aquarius:l,aries:u,cancer:d,capricorn:p,gemini:b,leo:m,libra:j,pisces:g,sagittarius:w,scorpio:h,taurus:O,virgo:x},H=function(e){var t=parseInt(e.substr(8),10);switch(parseInt(e.substr(5,7),10)){case 1:return t<=19?"capricorn":"aquarius";case 2:return t<=17?"aquarius":"pisces";case 3:return t<=19?"pisces":"aries";case 4:return t<=19?"aries":"taurus";case 5:return t<=20?"taurus":"gemini";case 6:return t<=20?"gemini":"cancer";case 7:return t<=22?"cancer":"leo";case 8:return t<=22?"leo":"virgo";case 9:return t<=22?"virgo":"libra";case 10:return t<=22?"libra":"scorpio";case 11:return t<=21?"scorpio":"sagittarius";case 12:return t<=21?"sagittarius":"capricorn";default:return"not found"}},K=Object(y.jsx)("div",{className:"w3-center",children:Object(y.jsx)("i",{className:"fa fa-spinner w3-spin",style:{fontSize:"64px"}})}),Q=Object(y.jsxs)("div",{className:"w3-card w3-margin w3-border-blue w3-topbar w3-leftbar w3-rightbar w3-bottombar w3-animate-bottom w3-padding w3-round-xlarge",id:"searchResult",style:{backgroundColor:"#dbdce0"},children:[Object(y.jsxs)("div",{className:"w3-center",children:[Object(y.jsx)("img",{src:G[R.zodiacSign],width:"100px",alt:"zodiac-sign-logo"}),Object(y.jsxs)("b",{children:[" ",Object(y.jsx)("h3",{className:"w3-center",style:{color:"blue"},children:R.zodiacSign})]})]}),Object(y.jsx)("h3",{children:"Dear ".concat(c,",")}),Object(y.jsx)("p",{children:R.description}),Object(y.jsxs)("ul",{style:{listStyleType:"none",margin:"0",padding:"0"},children:[Object(y.jsx)("li",{children:"Color: ".concat(R.color)}),Object(y.jsx)("li",{children:"Compatibility: ".concat(R.compatibility)}),Object(y.jsx)("li",{children:"Lucky Number: ".concat(R.luckyNum)}),Object(y.jsx)("li",{children:"Lucky Time: ".concat(R.luckyTime)}),Object(y.jsx)("li",{children:"Mood: ".concat(R.mood)})]})]}),U=I?F?Q:K:"";return Object(y.jsxs)("div",{className:"myDesign",children:[Object(y.jsx)("div",{className:"w3-center w3-margin w3-padding",children:Object(y.jsx)("img",{src:o,width:"200px",className:"w3-round-xlarge",alt:"Astroscopy Logo"})}),Object(y.jsx)("div",{className:"w3-card w3-blue w3-padding w3-margin w3-round-xlarge w3-row",children:Object(y.jsxs)("form",{onSubmit:function(e){J(!1),e.preventDefault(),0===c.length||"dd-mm-yyyy"===f?(T(!1),setTimeout((function(){T(!0)}),3e3)):J(!0),L(!0),P(!1),function(e){var t="https://aztro.sameerkumar.website/?sign=".concat(e,"&day=today");fetch(t,{method:"POST"}).then((function(e){return e.json()})).then((function(t){Y({zodiacSign:e,compatibility:t.compatibility,color:t.color,luckyNum:t.lucky_number,luckyTime:t.lucky_time,mood:t.mood,description:t.description}),P(!0)}))}(H(f))},children:[Object(y.jsxs)("div",{className:"w3-col s10 w3-left-align",children:[Object(y.jsx)("input",{type:"text",className:"w3-margin w3-padding",placeholder:"Your Name",onChange:function(e){i(e.target.value)},value:c}),Object(y.jsx)("input",{type:"date",className:"w3-margin w3-padding",onChange:function(e){v(e.target.value)},value:f})]}),Object(y.jsx)("div",{className:"w3-col s2 w3-right-align",children:Object(y.jsx)("input",{type:"submit",value:"Search",className:"w3-button w3-round-xlarge w3-blue w3-padding w3-margin"})})]})}),k?"":Object(y.jsx)("p",{className:"w3-card w3-red w3-round-xlarge w3-padding w3-margin",children:"Enter valid Input ...."}),E?U:""]})}var v=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(f,{})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),i(e),n(e),r(e)}))};r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(v,{})}),document.getElementById("root")),N()}],[[14,1,2]]]);
//# sourceMappingURL=main.35016c8d.chunk.js.map