(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},57:function(e,n,t){},59:function(e,n,t){},60:function(e,n,t){},61:function(e,n,t){},62:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),c=t(32),r=t.n(c),s=(t(50),t(51),t(52),t(28)),i=t(39),u=t.n(i),m=(t(55),t(56),t(57),t(2));var l=function(e){var n,t=e.items,o=e.changeRoom,a=0;return Object(m.jsx)(u.a,(n={className:"owl-theme carousel",loop:!0,margin:10,items:10},Object(s.a)(n,"loop",!1),Object(s.a)(n,"dots",!0),Object(s.a)(n,"children",function(){var e=[],n=function(n){var a=t[n].id;e.push(Object(m.jsx)("button",{className:"owl-theme__items items",onClick:function(){o(a)},children:a},a))};for(var c in t)n(c);return a=e.length,e}()),n),a)},d=t(27);t(59);var j=function(e){var n=e.joinToRoom,t=e.createRoom,a=Object(o.useState)(0),c=Object(d.a)(a,2),r=c[0],s=c[1];return Object(m.jsxs)("div",{className:"room-join-panel",children:[Object(m.jsx)("p",{className:"room-join-panel__header",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043c\u043d\u0430\u0442\u0443 \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"}),Object(m.jsx)("input",{className:"room-join-panel__room-input",type:"number",onChange:function(e){s(e.target.value)},value:r}),Object(m.jsx)("button",{className:"room-join-panel__join-button",onClick:function(){console.log("join "+r),n(r)},children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f"}),Object(m.jsx)("button",{className:"room-join-panel__create-room-button",onClick:t,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e"})]})};t(60);var b=function(e){var n=e.messages,t=e.userId;return console.log(n),Object(m.jsx)("div",{className:"message-container",children:n.length?n.map((function(e,n){return Object(m.jsxs)("div",{className:t==e.username?"message-container_message self-message":"message-container_message",children:[Object(m.jsx)("p",{className:"message-container_message_text",children:e.text}),Object(m.jsxs)("p",{className:"message-container_message_info",children:[e.username," - ",e.date]})]},n)})):Object(m.jsx)(m.Fragment,{})})};t(61);var f=function(e){var n=e.sendMessage,t=Object(o.useState)(""),a=Object(d.a)(t,2),c=a[0],r=a[1];return Object(m.jsxs)("div",{className:"chat-input",children:[Object(m.jsx)("input",{className:"chat-input__input",type:"text",onChange:function(e){r(e.target.value)},value:c}),Object(m.jsx)("button",{className:"chang-input__send",onClick:function(){c.length>0&&(n(c),r(""))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})};t(62);var p=function(e){var n=e.setUsername,t=Object(o.useState)(""),a=Object(d.a)(t,2),c=a[0],r=a[1];return Object(m.jsx)("div",{className:"authorization-body",children:Object(m.jsxs)("div",{className:"authorization-body__pop-up",children:[Object(m.jsx)("p",{className:"authorization-body__pop-up-header",children:"\u0412\u0445\u043e\u0434 \u0432 \u0447\u0430\u0442"}),Object(m.jsx)("p",{className:"authorization-body__pop-up-login",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 username"}),Object(m.jsx)("input",{className:"authorization-body__pop-up__username-input",type:"text",onChange:function(e){r(e.target.value)},value:c}),Object(m.jsx)("button",{className:"authorization-body__pop-up__authorization-button",onClick:function(){n(c)},children:"\u0412\u043e\u0439\u0442\u0438"})]})})},h=t(35),g=t(44),_=t(22),O=t(45),x=Object(_.b)({name:"authorized",initialState:{authorized:!1,userId:null},reducers:{logIn:function(e,n){var t=n.payload.username;e.authorized=!0,e.userId=t},logOut:function(e){e.authorized=!1,e.userId=null}}}),v=x.reducer,N=x.actions,y=Object(_.b)({name:"chatRooms",initialState:{rooms:{},currentRoom:null},reducers:{addRoom:function(e,n){console.log(R);var t=n.payload,o=t.room,a=t.id;e.rooms[a]=o},changeRoom:function(e,n){var t=n.payload.id;e.currentRoomId=t},setNewMessage:function(e,n){var t=n.payload,o=t.id,a=t.message;e.rooms[o].messages.push(a)}}}),w=y.reducer,R=y.actions,k=Object(_.b)({name:"loading",initialState:{loading:!1,error:!1,errorMessage:null},reducers:{startLoading:function(e){e.loading=!0,e.errorMessage=null},finishLoading:function(e){e.loading=!1,e.errorMessage=null},loadingError:function(e,n){var t=n.payload.errMsg;e.error=!0,e.errorMessage=t}}}),z=k.reducer,I=k.actions,C=t(16),M=t.n(C),q=t(20),S=M.a.mark(E),F=M.a.mark(J),L=M.a.mark(P),T=M.a.mark(U),A=M.a.mark(D),B=function(e){return e.chatRooms};function E(){var e,n,t,o=arguments;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:for(e=o.length,n=new Array(e),t=0;t<e;t++)n[t]=o[t];console.log(n);case 2:case"end":return a.stop()}}),S)}function J(e){var n,t;return M.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(n=e.data).status){o.next=9;break}return o.next=4,Object(q.b)(B);case 4:if(t=o.sent,console.log(n.room),void 0!=t.rooms["".concat(n.room.id)]){o.next=9;break}return o.next=9,Object(q.a)(W.addRoom({room:n.room,id:n.room.id}));case 9:case"end":return o.stop()}}),F)}function P(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.data,console.log(n),!n.status){t.next=5;break}return t.next=5,Object(q.a)(W.setNewMessage({id:n.id,message:n.message}));case 5:case"end":return t.stop()}}),L)}function U(e){var n,t,o;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=e.data,t=n.status,o=n.username,!t){a.next=7;break}return a.next=4,Object(q.a)(W.finishLoading());case 4:return console.log(W.logIn({username:o})),a.next=7,Object(q.a)(W.logIn({username:o}));case 7:case"end":return a.stop()}}),T)}function D(e){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.c)("queries/accept_create_room",E);case 2:return e.next=4,Object(q.c)("queries/accept_join_to_room",J);case 4:return e.next=6,Object(q.c)("queries/new_room_message",P);case 6:return e.next=8,Object(q.c)("queries/accept_set_username",U);case 8:case"end":return e.stop()}}),A)}var H=D,G={chatRooms:w,authorization:v,loading:z},K=Object(O.a)(),Q=[].concat(Object(g.a)(Object(_.c)({thunk:!1,serializableCheck:!1})),[K]),V=Object(_.a)({reducer:G,middleware:Q});K.run(H);var W=Object(h.a)(Object(h.a)(Object(h.a)({},N),I),R),X=V,Y=t(23),Z=t(43),$=Object(Z.a)();var ee=function(e){return function(n,t){e.emit("add_new_message",{id:n,message:t})}}($),ne=function(e){return function(n){e.emit("set_username",{username:n})}}($),te=function(e){return function(){e.emit("create_room")}}($),oe=function(e){return function(n){e.emit("join_to_room",{id:n})}}($);!function(e){return function(n){e.on("accept_create_room",(function(e){n(e)}))}}($)((function(e){X.dispatch({type:"queries/accept_create_room",data:e})})),function(e){return function(n){e.on("accept_join_to_room",(function(e){n(e)}))}}($)((function(e){X.dispatch({type:"queries/accept_join_to_room",data:e})})),function(e){return function(n){e.on("new_room_message",(function(e){n(e)}))}}($)((function(e){X.dispatch({type:"queries/new_room_message",data:e})})),function(e){return function(n){e.on("accept_set_username",(function(e){console.log("accept_set_username"),n(e)}))}}($)((function(e){X.dispatch({type:"queries/accept_set_username",data:e})}));t(73);var ae=function(e){var n=Object(Y.c)((function(e){return e.chatRooms})),t=Object(Y.c)((function(e){return e.authorization})),o=(Object(Y.c)((function(e){return e.loading})),Object(Y.b)());return Object(m.jsxs)("div",{className:"chat-body",children:[Object(m.jsx)("p",{className:"chat-body__header",children:"CHAT"}),Object(m.jsx)("div",{className:"chat-body__content",children:t.authorized?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l,{items:n.rooms,changeRoom:function(e){return o(W.changeRoom({id:e}))}}),Object(m.jsx)(j,{joinToRoom:oe,createRoom:te}),Object(m.jsx)(b,{messages:n.currentRoomId?n.rooms[n.currentRoomId].messages:[],userId:t.userId}),Object(m.jsx)(f,{sendMessage:function(e){ee(n.currentRoomId,e)}})]}):Object(m.jsx)(p,{setUsername:ne})})]})};var ce=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(Y.a,{store:X,children:Object(m.jsx)(ae,{})})})},re=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,75)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),o(e),a(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(ce,{})}),document.getElementById("root")),re()}},[[74,1,2]]]);
//# sourceMappingURL=main.2fa6e51a.chunk.js.map