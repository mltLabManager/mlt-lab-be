(this["webpackJsonpmitchashvim-frontend"]=this["webpackJsonpmitchashvim-frontend"]||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/computer.6421602d.png"},104:function(e,t,a){e.exports=a.p+"static/media/city.0de1cfcd.png"},106:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAABHNCSVQICAgIfAhkiAAAAv5JREFUSEu9lk160lAUhr8TokAYtF2BdAWlA4WZuIKmgmPpCswOpCsoOygdC49xBaWzoANxBWUHZUICGvL53EAKD0JC7E+muee+5/c7V/AfX6XuVQmeCFACUFVXkByJyACQHnxcOXZ+uO1qScNUMICfCR4LYQeArYk2ur8jQJEaTQFOQLYx0843wXeGluuuJcAFwPOJb7QGtixha55XTK9InS2Qb0W0U6eT760e2QlarrktCBuBvKj++PJysGt2Ku+9BjReBuTp927BjuwSocqQWtBKC1SAksn9nDYx1+1jocoom3FvCZyterpLpK8//C5pwZ/r6cw4zGa8pgiOnI7xTtnGQiv1cROQqtMxwg5N+5Xrri3A3sTPn2Z1dyjQTFXfeGjNHQaglTbKyLkwU7o7VKXRAr8h4L7TLTS2QlUHQuftxM8fxHVqUvSV2rhNyIigivCy3y0cbIfOZ7L5v6mNnFl0cGPi582c7t05HUO2QhdzaT4YGqpXcNHvFI4rdZcz0Y+3Qt/UxqYmYj0GNMqYgsKXw/j0kpdO1zhMqlvcf5Uxpc/ii6V6JDa94WDr3p3yLE68kxwq18YDiLQlkBElsPrdQil2ZOZzxoHTKTSTLt/0f76NAnvqG8Wc7tkAe+quBHFYGqUdmzBTGe8nhFeA1gN4HWUtWXvrbg/krdMtnKWJdl4e11IbKau716Dc9LuGqm+8DEairVQFkGa/Y7TSgNVZVSKQRVXLxC0z3y48EsqACFoQiBBfd414IYHXIGQ6M6qr5dmY3lC6BCYobRF8UosbvtZmJrAFsqeinsxy3zbVeS6f+EgGFkRupn6+sX7uH2gEjPbnujKFsiZsQvAKgKr3EKINSZYgLApEpfFGObb+YtiY3nVgVBMhR2o7rNYz3Jf0q2pzLN9I2hABeklzfR/pJuB8Q6C0XpO0zbR+PoQ+JzAcGfU6IGCtvoGeKsL7mirlX32tPTVwEelScZ4DGEIXL76eiByR/PXYTbOp6Zbda3rFpFZ/aNdG9n8BYSHfgOlfX/oAAAAASUVORK5CYII="},129:function(e,t,a){e.exports=a(159)},138:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=a(9),i=a(47),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;default:return e}},u=a(76),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COMPUTERS":return t.payload;case"CHANGE_COMPUTER":var a=e.findIndex((function(e){return e.id===t.payload.id}));return[].concat(Object(u.a)(e.slice(0,a)),[t.payload],Object(u.a)(e.slice(a+1)));default:return e}},d=a(77),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1,text:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH":return t.payload;case"TOGGLE_SEARCH":return Object(d.a)(Object(d.a)({},e),{},{isOpen:!e.isOpen});default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SYSTEM_DATA":return t.payload;default:return e}},E=Object(i.b)({userId:s,computers:m,search:p,systemData:f}),g=(a(138),a(21)),b=a.n(g),v=a(35),A=a(22),h=a(188),x=a(16),y=a(36),O=a(161),j=a(202),N=a(210),w=a(191),k=a(209),C=a(198),S=a(208),H=a(97),B=a.n(H),F=a(193),P=a(98),U=a.n(P),D=a(60),R=a.n(D),Q=Object(h.a)({root:{backgroundColor:"white"},images:{width:"100%"},description:{color:"#3955F6",fontWeight:"bold",fontSize:"30px"}});var T=function(){var e,t=Q();switch(Object(x.g)().pathname){case"/computers":e=r.a.createElement(w.a,{className:t.description},'\u05d3\u05d5"\u05d7 \u05de\u05d7\u05e9\u05d1\u05d9\u05dd');break;default:e=r.a.createElement("img",{className:t.images,src:R.a,alt:"Logo"})}return r.a.createElement(F.a,{id:"cover",container:!0,className:t.root},r.a.createElement(F.a,{item:!0,xs:5},r.a.createElement("img",{className:t.images,src:U.a,alt:"Industry"})),r.a.createElement(F.a,{item:!0,xs:7,style:{display:"flex",alignItems:"center"}},e))},z=Object(h.a)({rounded:{"& div":{borderRadius:"50px"}},id:{color:"#3955F6",fontWeight:"bold"},input:{backgroundColor:"white",width:"100%",borderRadius:"50px","& div":{borderRadius:"50px"}},button:{backgroundColor:"#3955F6",color:"white",border:"1px solid transparent",borderRadius:"40px"},person:{width:"100%",bottom:0}}),V={userActions:{setUser:function(e){return{type:"SET_USER",payload:e}}},computersActions:{setComputers:function(e){return{type:"SET_COMPUTERS",payload:e}},changeComputer:function(e){return{type:"CHANGE_COMPUTER",payload:e}}},searchActions:{setSearch:function(e){return{type:"SET_SEARCH",payload:e}},toggleSearch:function(){return{type:"TOGGLE_SEARCH"}}},systemDataActions:{setSystemData:function(e){return{type:"SET_SYSTEM_DATA",payload:e}}}};var G=function(){var e=z(),t=Object(x.f)(),a=Object(o.c)((function(e){return e.userId})),n=Object(o.b)(),c=r.a.useState(a),l=Object(A.a)(c,2),i=l[0],s=l[1],u=r.a.useState(!1),m=Object(A.a)(u,2),d=m[0],p=m[1];return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement("div",{style:{margin:"40px"}},r.a.createElement(w.a,{className:e.id},"\u05ea\u05e2\u05d5\u05d3\u05ea \u05d6\u05d4\u05d5\u05ea"),r.a.createElement(k.a,{className:e.input,variant:"outlined",margin:"dense",value:i,onChange:function(e){s(e.target.value)},inputProps:{inputMode:"numeric"}}),r.a.createElement("div",{style:{width:"100%",justifyContent:"center",display:"flex",marginTop:"10px"}},r.a.createElement(C.a,{variant:"contained",disableElevation:!0,className:e.button,onClick:function(){(9===i.length&&Number(i)||(p(!0),0))&&(n(V.userActions.setUser(i)),t.push("/computers"))}},"\u05db\u05e0\u05d9\u05e1\u05d4"))),r.a.createElement("img",{src:B.a,alt:"Person",className:e.person}),r.a.createElement(N.a,{open:d,autoHideDuration:6e3,onClose:function(){return p(!1)}},r.a.createElement(S.a,{severity:"error"},"\u05d0\u05d5\u05e4\u05e1! \u05ea\u05e2\u05d5\u05d3\u05ea \u05d4\u05d6\u05d4\u05d5\u05ea \u05e9\u05d4\u05d5\u05db\u05e0\u05e1\u05d4 \u05d0\u05d9\u05e0\u05d4 \u05ea\u05e7\u05d9\u05e0\u05d4")))},I=Object(h.a)({root:{backgroundColor:"#0F7D6A"},text:{textAlign:"center",color:"white"},image:{position:"absolute",bottom:0,width:"100%",zIndex:-1}}),Z=Object(h.a)({root:{backgroundColor:"white",marginBottom:"2px"},text:{textAlign:"center"}});var X=function(e){var t,a,n=e.data,c=Z(),l=Object(x.f)(),i=Object(o.b)(),s=Object(o.c)((function(e){return e.search})),u=Object(o.c)((function(e){return e.systemData}));return r.a.createElement(F.a,{container:!0,className:c.root,onClick:function(){i(V.searchActions.setSearch(Object.assign({},s,{isOpen:!1}))),l.push("/computers/".concat(n.id))}},r.a.createElement(F.a,{item:!0,xs:3},r.a.createElement(w.a,{className:c.text},n.id)),r.a.createElement(F.a,{item:!0,xs:3},r.a.createElement(w.a,{className:c.text},n.provider)),r.a.createElement(F.a,{item:!0,xs:3},r.a.createElement(w.a,{className:c.text},null===(t=u.find((function(e){return n.currentLocation===e.id})))||void 0===t?void 0:t.value)),r.a.createElement(F.a,{item:!0,xs:2},r.a.createElement(w.a,{className:c.text},null===(a=u.find((function(e){return n.currentStatus===e.id})))||void 0===a?void 0:a.value)),r.a.createElement(F.a,{item:!0,xs:1},r.a.createElement(w.a,{className:c.text,style:{color:"#3955F6"}},">")))},Y=Object(h.a)({root:{backgroundColor:"#0F7D6A"},text:{textAlign:"center",color:"white"}});var M=function(){var e=Y();return r.a.createElement(F.a,{id:"TitleList",container:!0,className:e.root},r.a.createElement(F.a,{item:!0,xs:3},r.a.createElement(w.a,{className:e.text},"\u05de\u05e1\u05e4\u05e8 \u05e1\u05d9\u05d3\u05d5\u05e8\u05d9")),r.a.createElement(F.a,{item:!0,xs:3},r.a.createElement(w.a,{className:e.text},"\u05d9\u05e6\u05e8\u05df")),r.a.createElement(F.a,{item:!0,xs:3},r.a.createElement(w.a,{className:e.text},"\u05de\u05d9\u05e7\u05d5\u05dd")),r.a.createElement(F.a,{item:!0,xs:2},r.a.createElement(w.a,{className:e.text},"\u05e1\u05d8\u05d8\u05d5\u05e1")),r.a.createElement(F.a,{item:!0,xs:1}))},W=Object(h.a)({list:{overflowY:"scroll"}});var J=function(){Object(o.b)();var e=W(),t=Object(o.c)((function(e){return e.search})),a=r.a.useState(0),n=Object(A.a)(a,2),c=n[0],l=n[1];return r.a.useEffect((function(){l(document.getElementById("TitleList")?document.getElementById("navbar").offsetHeight+document.getElementById("cover").offsetHeight+document.getElementById("TitleList").offsetHeight:0)})),r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement("div",{style:{height:window.innerHeight-c},className:e.list},Object(o.c)((function(e){return e.computers})).filter((function(e){return e.id.toString().includes(t.text)||e.oldId.toString().includes(t.text)})).map((function(e){return r.a.createElement(X,{key:e.id,data:e})}))))},L=a(103),K=a.n(L);var q=function(){var e=I(),t=(Object(o.b)(),Object(x.f)());return""===Object(o.c)((function(e){return e.userId}))&&t.push("/"),r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(J,null),r.a.createElement("img",{src:K.a,alt:"Computer",className:e.image}))},_=Object(h.a)({root:{backgroundColor:"white",margin:"10px",border:"1px solid #3955F6",borderRadius:"40px"},title:{textAlign:"center",color:"#3955F6",fontSize:"24px",fontWeight:"bold"},image:{position:"absolute",bottom:0,width:"100%",zIndex:-1},inputHolder:{display:"grid",alignItems:"center",justifyContent:"center"},inputTitle:{textAlign:"center",color:"#3955F6"},secondTitle:{textAlign:"center",color:"#3955F6",fontSize:"18px",fontWeight:"bold"},button:{backgroundColor:"#3955F6",color:"white",border:"1px solid transparent",borderRadius:"40px"},textField:{margin:"15px",marginTop:"0px","& input":{textAlign:"center"},borderRadius:"50px","& div":{borderRadius:"50px"}},switchBase:{"&$checked":{color:"#0F7D6A !important","& + $track":{backgroundColor:"white !important",opacity:1,border:"1px solid #0F7D6A"}}},thumb:{},track:{},checked:{},focusVisible:{},backdrop:{zIndex:1,color:"#fff"}}),$=a(213),ee=a(107),te=a(19),ae=a(206),ne=a(104),re=a.n(ne),ce=a(201),le=Object(h.a)({root:{backgroundColor:"white",border:"1px solid #3955F6",borderRadius:"20px",width:"100%"},title:{backgroundColor:"white",textAlign:"center",color:"#3955F6",fontSize:"24px",fontWeight:"bold",position:"sticky",top:0}}),oe=a(200),ie=Object(h.a)({inputHolder:{display:"flex",justifyContent:"center"},inputTitle:{color:"#3955F6"}});function se(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[n,a,r].join(".")}var ue=function(e){var t,a,n=e.userId,c=e.date,l=e.from,i=e.to,s=e.showDivider,u=ie(),m=Object(o.c)((function(e){return e.systemData}));return r.a.createElement(F.a,{container:!0},r.a.createElement(F.a,{className:u.inputHolder,item:!0,xs:6},r.a.createElement(w.a,{className:u.inputTitle},"\u05ea.\u05d6.")),r.a.createElement(F.a,{className:u.inputHolder,item:!0,xs:6},r.a.createElement(w.a,{className:u.inputTitle},"\u05ea\u05d0\u05e8\u05d9\u05da \u05d1\u05d9\u05e6\u05d5\u05e2")),r.a.createElement(F.a,{className:u.inputHolder,item:!0,xs:6},r.a.createElement(w.a,null,n)),r.a.createElement(F.a,{className:u.inputHolder,item:!0,xs:6},r.a.createElement(w.a,null,se(c))),r.a.createElement("div",{style:{margin:"10px",display:"flex",width:"100%"}},r.a.createElement(F.a,{className:u.inputHolder,item:!0,xs:4},r.a.createElement(w.a,null,null===(t=m.find((function(e){return l===e.id})))||void 0===t?void 0:t.value)),r.a.createElement(F.a,{className:u.inputHolder,item:!0,xs:4},r.a.createElement(w.a,null,"->")),r.a.createElement(F.a,{className:u.inputHolder,item:!0,xs:4},r.a.createElement(w.a,null,null===(a=m.find((function(e){return i===e.id})))||void 0===a?void 0:a.value))),s?r.a.createElement(F.a,{item:!0,xs:12},r.a.createElement(oe.a,{style:{margin:"10px",backgroundColor:"#3955F6"}})):null)};var me=function(e){var t=e.data,a=e.isOpen,n=e.setIsOpen,c=le();return r.a.createElement(ce.a,{onClose:function(){return n(!1)},open:a,classes:{paper:c.root}},r.a.createElement(w.a,{className:c.title},"\u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9\u05d4"),t.map((function(e,a){return r.a.createElement(ue,{key:a,userId:e.changedBy,date:e.lastChangedAt,from:e.from,to:e.to,showDivider:a!==t.length-1})})))},de=a(196),pe=a(207),fe=a(212),Ee=Object(h.a)({root:{borderRadius:"50px","& div":{borderRadius:"50px"}}});var ge=function(e){var t=e.type,a=e.value,n=e.setValue,c=Object(o.c)((function(e){return e.systemData})).filter((function(e){return e.key===t.toString()})),l=Ee();return r.a.createElement(de.a,{variant:"outlined",margin:"dense",className:l.root},r.a.createElement(pe.a,{value:null==a?"":a,onChange:function(e){return n(e.target.value)},label:"Age"},c.map((function(e){return r.a.createElement(fe.a,{key:e.id,value:e.id},e.value)}))))},be=a(69),ve=a(70),Ae=a(105),he={baseURL:"/backend/",url:"/backend/"},xe=a.n(Ae).a.create(he),ye=function(){function e(){Object(be.a)(this,e)}return Object(ve.a)(e,null,[{key:"getComputersData",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.get("computerData");case 3:t=e.sent,e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.t0;case 10:return e.abrupt("return",t.data);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"updateComputerData",value:function(){var e=Object(v.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.put("computerData/:".concat(a),t);case 3:n=e.sent,e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.t0;case 10:return e.abrupt("return",n.data);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()}]),e}();var Oe=function(){var e=_(),t=Object(o.b)(),a=Object(x.h)().computerId,n=Object(x.f)(),c=r.a.useState(!1),l=Object(A.a)(c,2),i=l[0],s=l[1],u=r.a.useState({}),m=Object(A.a)(u,2),d=m[0],p=m[1],f=r.a.useState(!1),E=Object(A.a)(f,2),g=E[0],h=E[1],y=r.a.useState(!1),H=Object(A.a)(y,2),B=H[0],P=H[1],U=r.a.useState(!1),D=Object(A.a)(U,2),R=D[0],Q=D[1],T=Object(o.c)((function(e){return e.computers})).find((function(e){return e.id.toString()===a.toString()})),z=Object(o.c)((function(e){return e.userId}));null==T&&n.push("/computers");var G=function(){var e=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Q(!0),ye.updateComputerData(d,z).then((function(e){t(V.computersActions.changeComputer(e)),h(!0),Q(!1)})).catch((function(e){P(!0),console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){p(T)}),[T]),r.a.createElement("div",null,null!=T&&d.id?r.a.createElement("div",{className:e.root},r.a.createElement(C.a,{variant:"contained",disableElevation:!0,style:{position:"absolute",margin:"10px"},className:e.button,onClick:function(){s(!0)}},"\u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9\u05d4"),r.a.createElement(w.a,{className:e.title},"\u05de\u05d7\u05e9\u05d1 ",T.id),r.a.createElement(w.a,{style:{textAlign:"center"}},"\u05de\u05e1\u05e4\u05e8 \u05d9\u05e9\u05df ",T.oldId),r.a.createElement(F.a,{container:!0},r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"\u05de\u05d9\u05e7\u05d5\u05dd"),r.a.createElement(ge,{type:1,value:d.currentLocation,setValue:function(e){p(Object.assign({},d,{currentLocation:e}))}})),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"\u05ea\u05d0\u05e8\u05d9\u05da \u05e2\u05d3\u05db\u05d5\u05df"),r.a.createElement(w.a,{className:e.textField},se(d.lastUpdateDate))),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"\u05e1\u05d8\u05d8\u05d5\u05e1"),r.a.createElement(ge,{type:2,value:d.currentStatus,setValue:function(e){p(Object.assign({},d,{currentStatus:e}))}})),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"\u05e1\u05d5\u05d2 \u05de\u05d7\u05e9\u05d1"),r.a.createElement(ge,{type:3,value:d.computerType,setValue:function(e){p(Object.assign({},d,{computerType:e}))}})),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"\u05d9\u05e6\u05e8\u05df"),r.a.createElement(k.a,{className:e.textField,variant:"outlined",size:"small",value:d.provider,onChange:function(e){return p(Object.assign({},d,{provider:e.target.value}))}})),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"\u05de\u05d5\u05d3\u05dc"),r.a.createElement(k.a,{className:e.textField,variant:"outlined",size:"small",value:d.computerModel,onChange:function(e){return p(Object.assign({},d,{computerModel:e.target.value}))}})),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},'\u05e0\u05ea\u05e8\u05dd \u05e2"\u05d9'),r.a.createElement(k.a,{className:e.textField,variant:"outlined",size:"small",value:d.donatedBy,onChange:function(e){return p(Object.assign({},d,{donatedBy:e.target.value}))}})),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"\u05ea\u05d0\u05e8\u05d9\u05da \u05e7\u05dc\u05d9\u05d8\u05d4"),r.a.createElement(w.a,{className:e.textField},se(d.entryDate))),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"\u05d9\u05e2\u05d3"),r.a.createElement(k.a,{className:e.textField,variant:"outlined",size:"small",value:d.destination,onChange:function(e){return p(Object.assign({},d,{destination:e.target.value}))}})),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"\u05ea\u05d0\u05e8\u05d9\u05da \u05e9\u05dc\u05d9\u05d7\u05d4"),r.a.createElement(te.a,{utils:ee.a},r.a.createElement(ae.a,{className:e.textField,value:d.deliveryDate,onChange:function(e){return p(Object.assign({},d,{deliveryDate:e}))},format:"dd.MM.yyyy",minDate:d.entryDate})))),r.a.createElement(w.a,{className:e.secondTitle},"\u05e8\u05db\u05d9\u05d1\u05d9\u05dd \u05d1\u05de\u05d7\u05e9\u05d1"),r.a.createElement(F.a,{container:!0,className:e.root,style:{width:"auto"}},r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"CPU")),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(ge,{type:4,value:d.cpu,setValue:function(e){p(Object.assign({},d,{cpu:e}))}})),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"\u05d6\u05d9\u05db\u05e8\u05d5\u05df RAM")),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(ge,{type:5,value:d.ram,setValue:function(e){p(Object.assign({},d,{ram:e}))}})),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"SDD")),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(ge,{type:6,value:d.sdd,setValue:function(e){p(Object.assign({},d,{sdd:e}))}})),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement(w.a,{className:e.inputTitle},"\u05d4\u05ea\u05e7\u05e0\u05ea \u05d0\u05d9\u05de\u05d2'")),r.a.createElement(F.a,{item:!0,xs:6,className:e.inputHolder},r.a.createElement($.a,{classes:{switchBase:e.switchBase,thumb:e.thumb,track:e.track,checked:e.checked},checked:d.isImageInstalled,onChange:function(e){return p(Object.assign({},d,{isImageInstalled:e.target.checked}))},name:"checkedA",inputProps:{"aria-label":"secondary checkbox"}}))),r.a.createElement("div",{style:{width:"100%",justifyContent:"center",display:"flex",margin:"10px"}},r.a.createElement(C.a,{variant:"contained",disableElevation:!0,className:e.button,onClick:G},"\u05e9\u05de\u05d9\u05e8\u05d4"))):null,r.a.createElement("img",{src:re.a,alt:"City",className:e.image}),i?r.a.createElement(me,{data:T.compuetrHistorys,isOpen:i,setIsOpen:s}):null,r.a.createElement(N.a,{open:g,autoHideDuration:6e3,onClose:function(){return h(!1)}},r.a.createElement(S.a,{severity:"success"},"\u05e4\u05e8\u05d8\u05d9 \u05d4\u05de\u05d7\u05e9\u05d1 \u05e2\u05d5\u05d3\u05db\u05e0\u05d5 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4")),r.a.createElement(N.a,{open:B,autoHideDuration:6e3,onClose:function(){return P(!1)}},r.a.createElement(S.a,{severity:"error"},"\u05d0\u05d5\u05e4\u05e1! \u05d7\u05dc\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4 \u05d1\u05e2\u05d3\u05db\u05d5\u05df \u05e4\u05e8\u05d8\u05d9 \u05d4\u05de\u05d7\u05e9\u05d1")),r.a.createElement(O.a,{className:e.backdrop,open:R},r.a.createElement(j.a,{color:"inherit"})))},je=[{path:"/",page:r.a.createElement(G,null)},{path:"/computers",page:r.a.createElement(q,null)},{path:"/computers/:computerId",page:r.a.createElement(Oe,null)}],Ne=a(204),we=a(203),ke=Object(h.a)({navbar:{backgroundColor:"white"}}),Ce=a(106),Se=a.n(Ce),He=Object(h.a)({root:{borderRadius:"50px","& div":{borderRadius:"50px"}}});var Be=function(){var e=He(),t=Object(o.c)((function(e){return e.search})),a=Object(o.b)();return r.a.createElement(F.a,{container:!0,style:{backgroundColor:"#f9d452"}},r.a.createElement(F.a,{item:!0,xs:6,style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(w.a,{style:{color:"#3955F6"}},"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05dc\u05e4\u05d9 \u05de\u05e1\u05e4\u05e8 \u05e1\u05d9\u05d3\u05d5\u05e8\u05d9")),r.a.createElement(F.a,{item:!0,xs:6},r.a.createElement(k.a,{className:e.root,style:{margin:"15px",backgroundColor:"white",border:"1px solid #3955F6"},variant:"outlined",margin:"dense",value:t.text,onChange:function(e){return a(V.searchActions.setSearch(Object.assign({},t,{text:e.target.value})))}})))};var Fe=function(){var e=ke(),t=Object(x.g)().pathname,a=Object(x.f)(),n=Object(o.b)(),c=Object(o.c)((function(e){return e.search}));return r.a.createElement(Ne.a,{position:"sticky",className:e.navbar,elevation:0,id:"navbar"},"/"!==t?r.a.createElement(we.a,{style:{justifyContent:"center"}},r.a.createElement("img",{src:R.a,alt:"Logo",onClick:function(){a.push("/computers")}}),r.a.createElement("img",{style:{position:"absolute",left:0,margin:"20px"},src:Se.a,alt:"Search",onClick:function(){n(V.searchActions.toggleSearch()),a.push("/computers")}})):null,c.isOpen?r.a.createElement(Be,null):null)},Pe=(a(158),function(){function e(){Object(be.a)(this,e)}return Object(ve.a)(e,null,[{key:"getSystemData",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.get("systemData");case 3:t=e.sent,e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.t0;case 10:return e.abrupt("return",t.data);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()}]),e}()),Ue=Object(h.a)({backdrop:{zIndex:1,color:"#fff"}});var De=function(){var e=Object(o.b)(),t=Ue(),a=r.a.useState(!1),n=Object(A.a)(a,2),c=n[0],l=n[1],i=r.a.useState(!1),s=Object(A.a)(i,2),u=s[0],m=s[1],d=je.map((function(e){return r.a.createElement(x.a,{key:e.path,exact:!0,path:e.path},e.page)})),p=function(){var t=Object(v.a)(b.a.mark((function t(){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=Pe.getSystemData(),n=ye.getComputersData(),Promise.all([a,n]).then((function(t){e(V.systemDataActions.setSystemData(t[0])),e(V.computersActions.setComputers(t[1])),l(!1)})).catch((function(e){console.log(e),l(!1),m(!0)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.useEffect((function(){l(!0),p()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(y.a,null,r.a.createElement(Fe,null),r.a.createElement(x.c,null,d)),r.a.createElement(O.a,{className:t.backdrop,open:c},r.a.createElement(j.a,{color:"inherit"})),r.a.createElement(N.a,{open:u,autoHideDuration:6e3,onClose:function(){return m(!1)}},r.a.createElement(S.a,{severity:"error"},"\u05d0\u05d5\u05e4\u05e1! \u05d7\u05dc\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4 \u05d1\u05d8\u05e2\u05d9\u05e0\u05ea \u05d4\u05e0\u05ea\u05d5\u05e0\u05d9\u05dd")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=a(108),Qe=a(205),Te=Object(i.c)(E),ze=Object(Re.a)({typography:{fontFamily:"Arimo"}});l.a.render(r.a.createElement(o.a,{store:Te},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Qe.a,{theme:ze},r.a.createElement(De,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t){e.exports="data:image/png;base64,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"},97:function(e,t,a){e.exports=a.p+"static/media/person.ed3a8819.png"},98:function(e,t,a){e.exports=a.p+"static/media/industry.61e5ad16.png"}},[[129,1,2]]]);
//# sourceMappingURL=main.e8bc224f.chunk.js.map