(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,4,13],{352:function(e,t,r){"use strict";r.d(t,"a",(function(){return C})),r.d(t,"c",(function(){return S})),r.d(t,"b",(function(){return $})),r.d(t,"d",(function(){return T})),r.d(t,"e",(function(){return I})),r.d(t,"f",(function(){return D}));r(33),r(22),r(44),r(35),r(34),r(52);var n=r(20),c=r(57),o=r(6),l=(r(43),r(13),r(247),r(21),r(248),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(23),r(47),r(31),r(103),r(42),r(0)),f=r(353);function d(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"categories"in content&&Array.isArray(content.categories)}(content))throw new Error("Non task content document");return{document:content,id:content.id,title:content.title,categories:content.categories}}var v=r(264);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function O(e,t){return e("tasks",{deep:!0}).where({id:t,task:!0}).limit(1)}function j(e,t){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,r).only("dir").fetch();case 2:if(n=e.sent,Array.isArray(n)){e.next=5;break}throw new TypeError("Expected an array");case 5:return e.abrupt("return",n[0].dir);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,r){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(regeneratorRuntime.mark((function e(t,r,n){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(r,"/").concat(n)).fetch();case 2:if(c=e.sent,!Array.isArray(c)){e.next=5;break}throw new TypeError("Unexpected array");case 5:if(null!=c){e.next=7;break}throw new Error("Found no task page at ".concat(r,"/").concat(n));case 7:return e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,r).fetch();case 2:if(n=e.sent,Array.isArray(n)){e.next=5;break}throw new TypeError("Expected an array");case 5:if(1===n.length){e.next=7;break}throw new Error("Found no task with the id ".concat(r));case 7:return e.abrupt("return",d(n[0]));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return R.apply(this,arguments)}function R(){return R=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},n=o.length>2&&void 0!==o[2]?o[2]:null,e.next=4,t("tasks",{deep:!0}).without("data").where(m({task:{$eq:!0}},r)).search(n).fetch();case 4:if(c=e.sent,Array.isArray(c)){e.next=7;break}throw new Error("Expected array of task contents");case 7:return e.abrupt("return",c.map((function(content){return d(content)})));case 8:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function A(){var e;return Object(c.a)(new Set((e=[]).concat.apply(e,arguments)))}function C(e){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("tasks",{deep:!0}).only("categories").where({task:{$eq:!0}}).fetch();case 2:if(r=e.sent,Array.isArray(r)){e.next=5;break}throw new Error("Expected array of task contents");case 5:return e.abrupt("return",A.apply(void 0,Object(c.a)(r.map((function(content){return content.categories})))));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){var t=Object(l.k)(null);return Object(l.s)(Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e();case 2:t.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),t}function $(e){var t=Object(l.k)([]);return Object(l.s)(Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e();case 2:t.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),t}function F(e,t){var r=Object(f.a)();return S((function(){return e(r,Object(l.q)(t))}))}var T=function(e,t){var r=Object(f.a)(),n=function(e){return F(j,e)}(e);return S(Object(o.a)(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(null==e.value||null==n.value){c.next=2;break}return c.abrupt("return",k(r,n.value,t.value));case 2:return c.next=4,null;case 4:return c.abrupt("return",c.sent);case 5:case"end":return c.stop()}}),c)}))))};function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=Object(f.a)();return $((function(){return E(r,Object(l.q)(e),Object(l.q)(t))}))}function D(e){var t=function(e){return F(x,e)}(e),r=Object(v.useTodosStore)();return{task:t,categories:Object(l.a)((function(){var e,r;return null!==(r=null===(e=t.value)||void 0===e?void 0:e.categories)&&void 0!==r?r:[]})),title:Object(l.a)((function(){var e;return null===(e=t.value)||void 0===e?void 0:e.title})),document:Object(l.a)((function(){var e;return t.value&&"document"in t.value?null===(e=t.value)||void 0===e?void 0:e.document:null})),finished:Object(l.a)((function(){var t;return null===(t=r.todos[Object(l.q)(e)])||void 0===t?void 0:t.finished})),updateFinished:function(t){return r.updateTodoFinished({todoId:Object(l.q)(e),finished:t})}}}},353:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l}));var n=r(18),c=r(352),o=Object(n.l)("$content",!1),l=function(e){var t=o();return Object(c.c)((function(){return t(Object(n.h)(e)).fetch()}))}},354:function(e,t,r){"use strict";r.r(t);var n=r(41),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"border-2 border-primary-500 rounded-lg"},[r("header",{staticClass:"bg-primary-500 text-white pl-4 p-2"},[e._t("header")],2),e._v(" "),r("div",{staticClass:"m-2"},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},355:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(104),o=Object(n.d)({inheritAttrs:!1,props:{label:{type:String,default:""},value:{type:Boolean,default:null}},emits:["input"],setup:function(e,t){var r=t.attrs,o=Object(n.o)(e,"value");return{attrs:r,checkboxIcon:Object(n.a)((function(){return null==Object(n.q)(o)?c.c:Object(n.q)(o)?c.b:c.e}))}}}),l=r(41),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("label",{staticClass:"flex flex-row items-center space-x-1"},[r("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",icon:e.checkboxIcon}}),e._v(" "),r("input",e._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:e.label},domProps:{checked:e.value},on:{input:function(t){return e.$emit("input",t.target.checked)}}},"input",e.attrs,!1)),e._v(" "),r("span",[e._v(e._s(e.label))])],1)])}),[],!1,null,null,null);t.default=component.exports},357:function(e,t,r){"use strict";r.r(t),r.d(t,"useLocalRoute",(function(){return o}));var n=r(18),c=r(0),o=Object(n.l)("localeRoute",!1),l=Object(c.d)({props:{todo:{type:String,default:null},page:{type:String,default:null}},setup:function(e){var t=e.todo,r=e.page,n=o();return{to:Object(c.a)((function(){return n(null==r?{name:"tasks-task",params:{task:t}}:{name:"tasks-task-page",params:{page:r}})}))}}}),f=r(41),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("nuxt-link",{attrs:{to:e.to}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},363:function(e,t,r){"use strict";r.r(t);var n=r(18),c=r(352),o=Object(n.b)({props:{task:{default:"mutterschaftsgeld-beantragen",type:String,required:!0}},setup:function(e){var t=Object(n.f)(e,"task"),r=Object(c.f)(t),title=r.title;return{taskId:t,categories:r.categories,title:title,document:r.document,finished:r.finished,updateFinished:r.updateFinished}}}),l=r(41),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("bmfsfj-card",{staticClass:"my-2",scopedSlots:e._u([{key:"header",fn:function(){return[r("div",{staticClass:"flex dark flex-row"},[r("bmfsfj-checkbox",{attrs:{value:e.finished,label:e.title},on:{input:e.updateFinished}})],1)]},proxy:!0}])},[e._v(" "),r("todo-link",{attrs:{todo:e.taskId}},[e._v("Go!")]),e._v(" "),r("span",e._l(e.categories,(function(t){return r("li",{key:t},[e._v(e._s(t))])})),0)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BmfsfjCheckbox:r(355).default,TodoLink:r(357).default,BmfsfjCard:r(354).default})}}]);