(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n,a=c(8),r=c.n(a),s=c(7),i=c(17),o=c(6),l=c(15),d=c(16),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(4);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(n||(n={}));var f=function(e){return{type:"query/SET",payload:e}},m=function(e){return{type:"status/SET",payload:e}},O={query:"",status:n.All},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"query/SET":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"status/SET":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},p=function(e){return{type:"todos/SET",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},y=Object(o.combineReducers)({currentTodo:b,filter:x,todos:v}),N=Object(o.createStore)(y,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),g=c(9),T=c(3),w=c(5),E=c.n(w),k=c(0),S=(c(26),c(27),c(11)),C=c.n(S),q=s.b,A=s.c,_=c(1),F=function(){var e=A((function(e){return e.filter.status})),t=A((function(e){return e.filter.query})),c=q(),a=A((function(e){return e.todos})),r=A((function(e){return e.currentTodo})),s=Object(k.useState)(a),i=Object(T.a)(s,2),o=i[0],l=i[1];return Object(k.useEffect)((function(){var c=function(e,t){switch(t){case n.All:return e;case n.Active:return e.filter((function(e){return!e.completed}));case n.Completed:return e.filter((function(e){return e.completed}));default:return e}}(a,e);c=function(e,t){var c=t.toLowerCase().trim();return e.filter((function(e){return e.title.toLowerCase().includes(c)}))}(c,t),l(c)}),[a,e,t]),Object(_.jsx)(_.Fragment,{children:o.length?Object(_.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"#"}),Object(_.jsx)("th",{children:Object(_.jsx)("span",{className:"icon",children:Object(_.jsx)("i",{className:"fas fa-check"})})}),Object(_.jsx)("th",{children:"Title"}),Object(_.jsx)("th",{children:" "})]})}),Object(_.jsx)("tbody",{children:o.map((function(e){var t=e.id,n=e.completed,a=e.title;return Object(_.jsxs)("tr",{"data-cy":"todo",className:C()({"has-background-info-light":(null===r||void 0===r?void 0:r.id)===t}),children:[Object(_.jsx)("td",{className:"is-vcentered",children:t}),Object(_.jsx)("td",{className:"is-vcentered",children:n&&Object(_.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(_.jsx)("i",{className:"fas fa-check"})})}),Object(_.jsx)("td",{className:"is-vcentered is-expanded",children:Object(_.jsx)("p",{className:C()({"has-text-success":n,"has-text-danger":!n}),children:a})}),Object(_.jsx)("td",{className:"has-text-right is-vcentered",children:Object(_.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(u(e))},children:Object(_.jsx)("span",{className:"icon",children:Object(_.jsx)("i",{className:C()({"far fa-eye":(null===r||void 0===r?void 0:r.id)!==t,"far fa-eye-slash":null===r||void 0===r?void 0:r.id})})})})})]},t)}))})]}):Object(_.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},I=function(){var e=q(),t=A((function(e){return e.filter.query}));return Object(_.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(_.jsx)("p",{className:"control",children:Object(_.jsx)("span",{className:"select",children:Object(_.jsx)("select",{"data-cy":"statusSelect",onChange:function(t){e(m(t.target.value))},children:Object.entries(n).map((function(e){var t=Object(T.a)(e,2),c=t[0],n=t[1];return Object(_.jsx)("option",{value:n,children:c},c)}))})})}),Object(_.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(_.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(t){e(f(t.target.value))}}),Object(_.jsx)("span",{className:"icon is-left",children:Object(_.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(_.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(_.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"clear search",onClick:function(){e(f(""))}})})]})]})},L=(c(29),function(){return Object(_.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(_.jsx)("div",{className:"Loader__content"})})});function B(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var D=function(){var e=q(),t=A((function(e){return e.currentTodo})),c=Object(k.useState)(null),n=Object(T.a)(c,2),a=n[0],r=n[1],s=function(){var e=Object(g.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t&&void 0!==t&&t.userId){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.t0=r,e.next=6,c=null===t||void 0===t?void 0:t.userId,B("/users/".concat(c));case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 10:throw e.prev=10,e.t2=e.catch(2),new Error("Failed to load user");case 13:case"end":return e.stop()}var c}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(k.useEffect)((function(){s()}),[]),Object(_.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(_.jsx)("div",{className:"modal-background"}),a?Object(_.jsxs)("div",{className:"modal-card",children:[Object(_.jsxs)("header",{className:"modal-card-head",children:[Object(_.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(_.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return e(j())}})]}),Object(_.jsxs)("div",{className:"modal-card-body",children:[Object(_.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(_.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(_.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(_.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(_.jsx)("a",{href:"mailto:".concat(a.email),children:a.name})]})]})]}):Object(_.jsx)(L,{})]})},M=function(){var e=Object(k.useState)(!1),t=Object(T.a)(e,2),c=t[0],n=t[1],a=q(),r=null!==A((function(e){return e.currentTodo})),s=function(){var e=Object(g.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,B("/todos");case 4:t=e.sent,n(!1),a(p(t)),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Failed to load todos");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(k.useEffect)((function(){s()}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"section",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"box",children:[Object(_.jsx)("h1",{className:"title",children:"Todos:"}),Object(_.jsx)("div",{className:"block",children:Object(_.jsx)(I,{})}),Object(_.jsx)("div",{className:"block",children:c?Object(_.jsx)(L,{}):Object(_.jsx)(F,{})})]})})}),r&&Object(_.jsx)(D,{})]})},R=function(){return Object(_.jsx)(s.a,{store:N,children:Object(_.jsx)(i.a,{children:Object(_.jsx)(M,{})})})};r.a.render(Object(_.jsx)(R,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.f3aca371.chunk.js.map