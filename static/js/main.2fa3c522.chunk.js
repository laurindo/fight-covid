(this["webpackJsonpcovid-chart"]=this["webpackJsonpcovid-chart"]||[]).push([[0],{172:function(e,t,a){e.exports=a(220)},177:function(e,t,a){},211:function(e,t){},220:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),i=(a(177),a(153)),l=a(142),u=a(154),s=a(59),m=r.a.createContext(),b=function(e){var t=r.a.useState([]),a=Object(s.a)(t,2),n=a[0],o=a[1],c=r.a.useMemo((function(){return[n,o]}),[n]);return r.a.createElement(m.Provider,Object.assign({value:c},e))},d=a(45),p=a(11),f=a(255),h=a(26),g=a.n(h),v=g()((function(e){return{container:Object(p.a)({height:"100vh",padding:function(e){return e.padding||40},background:"linear-gradient(328deg, rgba(85,26,79,1) 0%, rgba(64,24,78,1) 27%, rgba(32,21,79,1) 77%, rgba(35,22,95,1) 82%, rgba(41,23,113,1) 88%, rgba(48,25,129,1) 95%, rgba(50,23,136,1) 100%)"},e.breakpoints.down("xs"),{padding:function(e){return 10}})}}));var O,j=function(e){var t=e.children,a=Object(d.a)(e,["children"]),n=v(a);return r.a.createElement(f.a,Object.assign({container:!0,className:n.container},a),t)},y=a(109),E=a(16),x=a(268),w=a(9),C={parrotGreen:"#CDDC39",green:"#3AC281",blue:"#38b6f6",red:"#f03855",black:"#08021e",white:"#e7ebf2",primary0:"#5d121d",primary1:"#f7c35a",primary2:"#FFCB71",primary3:"#FFEFD2",primary4:"#FFF8EC",grey0:"#9485aa",grey1:"#c19ff3",grey2:"#d0c2f5",grey3:"#DFDFDF",grey4:"#F7F7F7",dividerColor:"#F2F2F2",hoverColor:"#FFFBF5",transparent:"transparent"},k=(O=["color"],["primary0","primary1","primary2","primary3","primary4","black","grey0","grey1","grey2","grey3","grey4","white","red","blue","green","parrotGreen","flexitarian","dividerColor","hoverColor","transparent"].reduce((function(e,t){return Object(w.a)(Object(p.a)({},t,O.reduce((function(e,a){return Object(w.a)(Object(p.a)({},a,C[t]),e)}),{})),e)}),{})),F=a(30),D=a(32),S=a(31),N=a(256),M=a(20),z=a.n(M),A=a(89),I={fontFamily:"'Nunito', 'Arial', sans-serif"},T={fontFamily:"'Roboto', 'Arial', sans-serif"},R=Object(w.a)(Object(w.a)({},I),{},{fontWeight:"700",margin:"20px auto"}),Y=Object(w.a)(Object(w.a)({},T),{},{fontWeight:"500",margin:"10px 0"}),P=Object(w.a)(Object(w.a)({},R),{},{margin:"10px 0"}),W=Object(w.a)(Object(w.a)({},T),{},{margin:"0 0 10px"}),L=g()(Object(w.a)(Object(w.a)({root:{lineHeight:"1.5em",color:"#08021e"},h1:Object(w.a)(Object(w.a)({},R),{},{fontSize:"4.8rem"}),h2:Object(w.a)(Object(w.a)({},R),{},{fontSize:"3.6rem"}),h3:Object(w.a)(Object(w.a)({},Y),{},{fontSize:"3rem"}),h4:Object(w.a)(Object(w.a)({},Y),{},{fontSize:"2.4rem"}),h5:Object(w.a)(Object(w.a)({},Y),{},{fontSize:"2rem"}),h6:Object(w.a)(Object(w.a)({},Y),{},{fontSize:"1.6rem"}),subtitle1:Object(w.a)(Object(w.a)({},P),{},{fontSize:"3rem"}),subtitle2:Object(w.a)(Object(w.a)({},P),{},{fontSize:"2rem"}),body1:Object(w.a)(Object(w.a)({},W),{},{fontSize:"1.8rem"}),body2:Object(w.a)(Object(w.a)({},W),{},{fontSize:"1.4rem"}),caption:Object(w.a)(Object(w.a)({},W),{},{fontSize:"1.2rem"}),noMargin:{margin:0},nocase:{textTransform:"lowercase"},italic:{fontStyle:"italic"},light:{fontWeight:"300"},bold:{fontWeight:"700"},regular:{fontWeight:"400"},capitalize:{textTransform:"capitalize"}},k),{},{uppercase:{textTransform:"uppercase"},nunito:I,roboto:T}));Object.keys(A.a).map((function(e){return L[e]={color:"".concat(A.a[e]," !important")}}));var B=L;var H=function(e){var t,a=e.roboto,n=e.nunito,o=e.uppercase,c=e.capitalize,i=e.nocase,l=e.light,u=e.regular,s=e.bold,m=e.small,b=e.italic,f=e.children,h=e.className,g=e.grey,v=e.color,O=Object(d.a)(e,["roboto","nunito","uppercase","capitalize","nocase","light","regular","bold","small","italic","children","className","grey","color"]),j=B(e),y=z()((t={},Object(p.a)(t,j.root,!0),Object(p.a)(t,j.nunito,n),Object(p.a)(t,j.roboto,a),Object(p.a)(t,j.uppercase,o),Object(p.a)(t,j.capitalize,c),Object(p.a)(t,j.nocase,i),Object(p.a)(t,j.italic,b),Object(p.a)(t,j.light,l),Object(p.a)(t,j.regular,u),Object(p.a)(t,j.bold,s),Object(p.a)(t,j.small,m),Object(p.a)(t,j[g],g),Object(p.a)(t,j[v],v),Object(p.a)(t,h,h),t));return r.a.createElement(N.a,Object.assign({classes:{h1:z()(j.h1,y),h2:z()(j.h2,y),h3:z()(j.h3,y),h4:z()(j.h4,y),h5:z()(j.h5,y),h6:z()(j.h6,y),subtitle1:z()(j.subtitle1,y),subtitle2:z()(j.subtitle2,y),body1:z()(j.body1,y),body2:z()(j.body2,y),caption:z()(j.caption,y)}},O),f)},U=(n.Component,n.Component,function(e){Object(D.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(F.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){return r.a.createElement(H,Object.assign({variant:"h3"},e.props))},e}return a}(n.Component)),$=(n.Component,function(e){Object(D.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(F.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){return r.a.createElement(H,Object.assign({variant:"h5"},e.props))},e}return a}(n.Component)),G=(n.Component,n.Component,n.Component,n.Component,function(e){Object(D.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(F.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).render=function(){return r.a.createElement(H,Object.assign({variant:"body2"},e.props))},e}return a}(n.Component)),J=(n.Component,g()((function(e){return{container:{color:"#26c4cc"},link:{textDecoration:"none"},name:{color:"#f03855"}}})));var V=Object(x.a)()((function(e){e.children;var t=Object(d.a)(e,["children"]),a=J(t),n=["xs"].includes(t.width),o=n?G:$;return r.a.createElement(j,{padding:0,className:a.container,justify:n?"center":"space-between"},r.a.createElement("a",{href:"/",className:a.link},r.a.createElement(o,{color:"white",nunito:!0,bold:!0},"Fight ",r.a.createElement("span",{className:a.name},"COVID"))))})),q=a(124),K=a(139),Q=a(266),X=a(146),Z=a.n(X),_=a(258),ee=a(262),te=a(261),ae=a(257),ne=a(259),re=a(260),oe=a(57),ce=a.n(oe),ie=function(e){var t=ce()(e).utcOffset(0);return t.set({hour:0,minute:0,second:0,millisecond:0}),t.toISOString()},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM/DD/YYYY";return ce()(e).utcOffset(0).format(t)},ue=function(e){return ie(ce()(e).utcOffset(0).add(1,"d"))},se=Object(q.a)({container:{padding:20,borderRadius:"20px",boxShadow:"#7d50d34a 0px -8px 21px 0px",margin:"50px 20px"},containerNoData:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"200px",margin:"0 auto",color:"#ccc"}});var me=function(e){var t,a=se();return r.a.createElement(f.a,{item:!0,xs:12,className:a.container},r.a.createElement(ae.a,null,r.a.createElement(_.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(ne.a,null,r.a.createElement(re.a,null,e.head.map((function(e,t){return r.a.createElement(te.a,{key:t},e)})))),e.rows&&e.rows.length?r.a.createElement(ee.a,null,e.rows.map((function(t){return r.a.createElement(re.a,{key:t.name},e.head.map((function(e,a){var n=function(e,t){switch(e){case"Date":return ce()(t).format("MMMM, DD YYYY");default:return t}}(e,t[e]);return r.a.createElement(te.a,{key:a},n)})))}))):null),!(null===e||void 0===e||null===(t=e.rows)||void 0===t?void 0:t.length)&&r.a.createElement("div",{className:a.containerNoData},"no data")))},be=a(149),de=a.n(be),pe=a(147),fe=a.n(pe),he=g()((function(e){return{root:{backgroundColor:"#e7ebf2",borderRadius:20,"&& .MuiOutlinedInput-notchedOutline":{border:0},"&& .MuiInputLabel-outlined.MuiInputLabel-shrink":{color:"#e7ebf2",transform:"translate(14px, -25px) scale(0.75)"},"&& .MuiFormLabel-root.Mui-focused":{color:"#e7ebf2",transform:"translate(14px, -25px) scale(0.75)!important"}},input:{width:"100%",maxWidth:"400px"}}}));var ge=function(e){var t=he(e);return r.a.createElement(fe.a,{id:"combo-box-demo",options:e.value,getOptionLabel:function(e){return e.Country},renderOption:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,(t=e.ISO2,"undefined"!==typeof String.fromCodePoint?t.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)})):t),"\xa0"),r.a.createElement("span",null,e.Country));var t},className:t.input,renderInput:function(a){return r.a.createElement(de.a,Object.assign({},a,{classes:{root:t.root,input:t.input},label:e.label,variant:"outlined"}))},onChange:e.onChange})},ve=a(264),Oe=g()((function(e){return{container:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:200,minHeight:100,padding:10,margin:20,boxShadow:"#2b1876 0px 9px 30px 3px",backgroundColor:"#401da5",borderRadius:10}}}));var je=function(e){var t=e.title,a=e.value,n=e.titleProps,o=void 0===n?{}:n,c=e.valueProps,i=void 0===c?{}:c,l=Object(d.a)(e,["title","value","titleProps","valueProps"]),u=Oe(l);return r.a.createElement(ve.a,Object.assign({className:u.container},l),r.a.createElement(G,o,t),r.a.createElement($,Object.assign({nunito:!0,bold:!0},i),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{style:"decimal"};return new Intl.NumberFormat(t,a).format(e)}(a)))},ye=Object(q.a)({container:{padding:"40px 0 0"}});var Ee=function(e){var t,a=e.title,n=e.value,o=e.type,c=ye(),i={};return"rangeDate"===o||"country"===o?i=function(e){var t=e.length?e[e.length-1]:{Confirmed:0,Deaths:0,Recovered:0};return{confirmed:t.Confirmed,deaths:t.Deaths,recovered:t.Recovered}}(n):"date"===o?i=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{confirmed:(null===n||void 0===n||null===(e=n[0])||void 0===e?void 0:e.Confirmed)||0,deaths:(null===n||void 0===n||null===(t=n[0])||void 0===t?void 0:t.Deaths)||0,recovered:(null===n||void 0===n||null===(a=n[0])||void 0===a?void 0:a.Recovered)||0}}(n):"all"===o&&(i={confirmed:(t=n).TotalConfirmed,deaths:t.TotalDeaths,recovered:t.TotalRecovered}),r.a.createElement(f.a,{container:!0,align:"center",justify:"center",className:c.container},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(G,{noMargin:!0,color:"primary1"},a)),[{id:"confirmed",title:"Active",color:"primary1"},{id:"deaths",title:"Deaths",color:"red"},{id:"recovered",title:"Recovered",color:"blue"}].map((function(e,t){return r.a.createElement(je,Object.assign({key:t,titleProps:{color:"white",noMargin:!0,nunito:!0},valueProps:{color:e.color,noMargin:!0},value:i[e.id]},e))})))},xe=function(){return"world/total"},we=function(e,t,a){return"country/".concat(e,"?from=").concat(t,"&to=").concat(a||t)},Ce=a(110),ke=a.n(Ce),Fe=a(150),De=a(155),Se="https://api.covid19api.com",Ne=function(e){return Object(De.a)("".concat(Se,"/").concat(e),function(){var e=Object(Fe.a)(ke.a.mark((function e(t){var a;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},Me=Object(q.a)({container:{minHeight:"400px",backgroundColor:"rgb(255, 255, 255)",borderRadius:"20px",boxShadow:"#29154f4a 0px -8px 21px 0px",margin:"20px 0 50px"},filters:{padding:40},autocomplete:{padding:"40px 0"},chip:{margin:"0 5px"}});var ze=function(e){e.value;var t=e.history,a=Me(),o=new URLSearchParams(Object(E.f)().search),c=Object(n.useState)(!1),i=Object(s.a)(c,2),l=i[0],u=i[1],m=Object(n.useState)(o.get("country")||""),b=Object(s.a)(m,2),d=b[0],p=b[1],h=Object(n.useState)(o.get("from")||""),g=Object(s.a)(h,2),v=g[0],O=g[1],j=Object(n.useState)(o.get("to")||""),y=Object(s.a)(j,2),x=y[0],C=y[1],k=Ne("countries"),F=Ne(we(d,v,x)),D=function(e,a){t.push({search:Z.a.stringify(Object(w.a)({type:"date",country:d},S(e,a)),{allowDots:!0,skipNulls:!0})})},S=function(e,t){return e?{from:e,to:l?t:ue(e)}:{}},N=function(){return{size:"small",color:"primary",className:a.chip}};return r.a.createElement(f.a,{item:!0,xs:12,className:a.container},r.a.createElement(f.a,{container:!0,direction:"column",align:"center",justify:"center",className:a.filters},r.a.createElement(f.a,{className:a.autocomplete},r.a.createElement(ge,{label:"Countries",value:k.data,onChange:function(e,a){return a?(p(a.Country),t.push("?type=country&country=".concat(a.Country))):t.push("/")}})),r.a.createElement(f.a,null,r.a.createElement(Q.a,{label:"From",value:v,onChange:function(e){var t=ie(e),a=ue(t);O(t),D(t,a)}}),r.a.createElement(Q.a,{label:"To",value:x,onChange:function(e){var t=ie(e);C(t),u(!0),D(ie(v),t)}}))),r.a.createElement(f.a,{align:"center",justify:"center"},d&&r.a.createElement(K.a,Object.assign({label:"Country (".concat(d,")"),onDelete:function(){p(""),t.push("/")}},N())),v&&r.a.createElement(K.a,Object.assign({label:"From (".concat(le(v),")"),onDelete:function(){O(""),D()}},N())),x&&l&&r.a.createElement(K.a,Object.assign({label:"To (".concat(le(x),")"),onDelete:function(){u(!1),C(""),D()}},N()))),r.a.createElement(Ee,{title:d,value:(null===F||void 0===F?void 0:F.data)||[],type:l?"rangeDate":v?"date":"country"}),r.a.createElement(me,{head:["Date","Confirmed","Deaths","Recovered"],rows:F.data}))},Ae=a(265),Ie=function(e){return r.a.createElement(f.a,Object.assign({container:!0,align:"center",justify:"center"},e),r.a.createElement(Ae.a,null))},Te=g()((function(e){return{animation:{webkitAnimationDuration:"2.5s",animationDuration:"2.5s",webkitAnimationFillMode:"both",animationFillMode:"both",webkitAnimationTimingFunction:"linear",animationTimingFunction:"linear",animationIterationCount:"infinite",webkitAnimationIterationCount:"infinite"},bounce:{webkitAnimationName:"$bounce",animationName:"$bounce"},"@-webkit-keyframes bounce":{"0%, 100%":{webkitTransform:"translateY(0)"},"50%":{webkitTransform:"translateY(-25px), scale(1.01)"}},"@keyframes bounce":{"0%, 100%":{transform:"translateY(0)"},"50%":{transform:"translateY(-25px) scale(1.03)"}}}}));var Re=function(e){var t=e.children,a=Object(d.a)(e,["children"]),n=Te(a);return r.a.createElement(f.a,Object.assign({container:!0,className:z()(n.animation,n.bounce)},a),t)},Ye=Object(q.a)((function(e){var t;return t={},Object(p.a)(t,e.breakpoints.down("md"),{covid:{width:"50%"}}),Object(p.a)(t,e.breakpoints.down("xs"),{covid:{width:"80%"}}),t}));var Pe=function(e){var t=Ye(),a=Ne(xe());return r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0,md:12,lg:8},r.a.createElement(f.a,{container:!0,align:"center",justify:"center"},r.a.createElement(U,{nunito:!0,capitalize:!0,noMargin:!0,color:"white"},"let's help recover the earth, starts from us"),r.a.createElement(G,{color:"primary1"},"The outbreak of the coronavirus issue or called Covid-19 makes the Earth grieve.")),a.data?r.a.createElement(Ee,{title:"All Cases",value:a.data,type:"all"}):r.a.createElement(Ie,null)),r.a.createElement(f.a,{item:!0,md:12,lg:4},r.a.createElement(Re,{justify:"center",align:"center"},r.a.createElement("img",{src:"https://res.cloudinary.com/luneswallet/image/upload/v1594393884/react-examples/virus.svg",alt:"covid",className:t.covid}))),r.a.createElement(ze,e))},We=function(e){return r.a.createElement(y.a,{history:e.history},r.a.createElement(E.c,null,r.a.createElement(E.a,{component:V})),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",component:Pe})))},Le=Object(u.a)();var Be=function(){return r.a.createElement(i.b,{utils:l.a},r.a.createElement(j,null,r.a.createElement(b,null,r.a.createElement(We,{history:Le}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.2fa3c522.chunk.js.map