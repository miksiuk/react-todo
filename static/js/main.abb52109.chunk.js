(this["webpackJsonpreact-posts"]=this["webpackJsonpreact-posts"]||[]).push([[0],{22:function(e,t,n){e.exports=n(32)},27:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(8),c=n.n(r),l=(n(27),n(11)),i=n(6);n(28);var u=n(20);function d(e){var t=Object(o.useState)(e.todo.name),n=Object(i.a)(t,2),r=n[0],c=n[1],l=Object(o.useState)(!1),d=Object(i.a)(l,2),m=d[0],s=d[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{disabled:e.first||m,onClick:function(){return e.todoUp(e.todo)}},"\u25b2"),a.a.createElement("button",{disabled:e.last||m,onClick:function(){return e.todoDown(e.todo)}},"\u25bc"),m?a.a.createElement("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)}}):a.a.createElement("span",null,e.todo.done?a.a.createElement("font",{color:"green"}," \u2713 ",a.a.createElement("s",null,e.todo.name)):a.a.createElement("span",null,"\xa0\xa0\xa0\xa0\xa0",e.todo.name)),a.a.createElement("button",{disabled:m,onClick:function(){return e.todoChangeStatus(e.todo)}},e.todo.done?"resume":"done"),m?a.a.createElement("button",{onClick:function(){return function(){var t=Object(u.a)({},e.todo,{name:r});e.todoChangeName(t),s(!1)}()}},"submit"):a.a.createElement("button",{onClick:function(){return s(!0),void c(e.todo.name)}},"edit"),a.a.createElement("button",{disabled:m,onClick:function(){return e.openModal(e.todo)}},"delete"))}function m(e){var t=e.addTodo,n=Object(o.useState)(""),r=Object(i.a)(n,2),c=r[0],l=r[1];return a.a.createElement("div",null,a.a.createElement("input",{type:"text",value:c,onChange:function(e){return l(e.target.value)}}),a.a.createElement("button",{disabled:""===c,onClick:function(){return t(c),void l("")}},"Add Todo"))}var s=n(35);function f(e){var t=Object(o.useState)(),n=Object(i.a)(t,2),r=n[0],c=n[1];return a.a.createElement(s.a,Object.assign({},e,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0}),a.a.createElement(s.a.Header,null,a.a.createElement(s.a.Title,null,"Delete Confirmation")),a.a.createElement(s.a.Body,null,a.a.createElement("div",null,"Enter ",a.a.createElement("strong",null,'"',e.todo.name,'"')," to remove ToDo"),a.a.createElement("input",{type:"text",class:"form-control",id:"nameToDo",value:r,onChange:function(e){return c(e.target.value)}})),a.a.createElement(s.a.Footer,null,a.a.createElement("button",{className:"btn btn-danger",disabled:r!==e.todo.name,onClick:function(){e.todo.name===r?(c(""),e.closeModal(),e.todoRemove(e.todo)):c("")}},"Delete"),a.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.closeModal()}},"Close")))}var b=function(){var e=Object(o.useState)([{id:1,name:"toDo1",done:!1},{id:2,name:"toDo2",done:!1}]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(!1),u=Object(i.a)(c,2),s=u[0],b=u[1],v=Object(o.useState)({}),E=Object(i.a)(v,2),p=E[0],g=E[1],j=function(e){var t=Object(l.a)(n);t.find((function(t){return t.id===e.id})).done=!e.done,r(t)},O=function(e){var t=Object(l.a)(n);t.find((function(t){return t.id===e.id})).name=e.name,r(t)},h=function(e){g(e),b(!0)},C=function(e){var t=Object(l.a)(n),o=t.findIndex((function(t){return t.id===e.id})),a=t[o-1];t[o-1]=e,t[o]=a,r(t)},k=function(e){var t=Object(l.a)(n),o=t.findIndex((function(t){return t.id===e.id})),a=t[o+1];t[o+1]=e,t[o]=a,r(t)};return a.a.createElement("div",{className:"App"},a.a.createElement("ul",null,n.map((function(e,t){return a.a.createElement("li",null,a.a.createElement(d,{key:e.id,todo:e,todoChangeStatus:j,todoUp:C,todoDown:k,openModal:h,todoChangeName:O,first:0===t,last:t===n.length-1}))}))),a.a.createElement(m,{addTodo:function(e){var t=[].concat(Object(l.a)(n),[{id:n.length+1,name:e,done:!1}]);r(t)}}),a.a.createElement(f,{show:s,closeModal:function(){g({}),b(!1)},todo:p,todoRemove:function(e){var t=Object(l.a)(n).filter((function(t){return t.id!==e.id}));r(t),g({}),b(!1)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(31);c.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.abb52109.chunk.js.map