(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3,4,7,9,11,13],{352:function(t,e,r){"use strict";r.d(e,"a",(function(){return L})),r.d(e,"c",(function(){return S})),r.d(e,"b",(function(){return T})),r.d(e,"d",(function(){return P})),r.d(e,"e",(function(){return F})),r.d(e,"f",(function(){return B}));r(33),r(22),r(44),r(35),r(34),r(52);var n=r(20),c=r(57),o=r(6),l=(r(43),r(13),r(247),r(21),r(248),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(23),r(47),r(31),r(103),r(42),r(0)),f=r(353);function d(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"categories"in content&&Array.isArray(content.categories)}(content))throw new Error("Non task content document");return{document:content,id:content.id,title:content.title,categories:content.categories}}var v=r(264);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function j(t,e){return t("tasks",{deep:!0}).where({id:e,task:!0}).limit(1)}function O(t,e){return k.apply(this,arguments)}function k(){return(k=Object(o.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e,r).only("dir").fetch();case 2:if(n=t.sent,Array.isArray(n)){t.next=5;break}throw new TypeError("Expected an array");case 5:return t.abrupt("return",n[0].dir);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e,r){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(regeneratorRuntime.mark((function t(e,r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(r,"/").concat(n)).fetch();case 2:if(c=t.sent,!Array.isArray(c)){t.next=5;break}throw new TypeError("Unexpected array");case 5:if(null!=c){t.next=7;break}throw new Error("Found no task page at ".concat(r,"/").concat(n));case 7:return t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e,r).fetch();case 2:if(n=t.sent,Array.isArray(n)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===n.length){t.next=7;break}throw new Error("Found no task with the id ".concat(r));case 7:return t.abrupt("return",d(n[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return E.apply(this,arguments)}function E(){return E=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,c,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},n=o.length>2&&void 0!==o[2]?o[2]:null,t.next=4,e("tasks",{deep:!0}).without("data").where(m({task:{$eq:!0}},r)).search(n).fetch();case 4:if(c=t.sent,Array.isArray(c)){t.next=7;break}throw new Error("Expected array of task contents");case 7:return t.abrupt("return",c.map((function(content){return d(content)})));case 8:case"end":return t.stop()}}),t)}))),E.apply(this,arguments)}function R(){var t;return Object(c.a)(new Set((t=[]).concat.apply(t,arguments)))}function L(t){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("tasks",{deep:!0}).only("categories").where({task:{$eq:!0}}).fetch();case 2:if(r=t.sent,Array.isArray(r)){t.next=5;break}throw new Error("Expected array of task contents");case 5:return t.abrupt("return",R.apply(void 0,Object(c.a)(r.map((function(content){return content.categories})))));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){var e=Object(l.k)(null);return Object(l.s)(Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}function T(t){var e=Object(l.k)([]);return Object(l.s)(Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}function $(t,e){var r=Object(f.a)();return S((function(){return t(r,Object(l.q)(e))}))}var P=function(t,e){var r=Object(f.a)(),n=function(t){return $(O,t)}(t);return S(Object(o.a)(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(null==t.value||null==n.value){c.next=2;break}return c.abrupt("return",x(r,n.value,e.value));case 2:return c.next=4,null;case 4:return c.abrupt("return",c.sent);case 5:case"end":return c.stop()}}),c)}))))};function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=Object(f.a)();return T((function(){return C(r,Object(l.q)(t),Object(l.q)(e))}))}function B(t){var e=function(t){return $(w,t)}(t),r=Object(v.useTodosStore)();return{task:e,categories:Object(l.a)((function(){var t,r;return null!==(r=null===(t=e.value)||void 0===t?void 0:t.categories)&&void 0!==r?r:[]})),title:Object(l.a)((function(){var t;return null===(t=e.value)||void 0===t?void 0:t.title})),document:Object(l.a)((function(){var t;return e.value&&"document"in e.value?null===(t=e.value)||void 0===t?void 0:t.document:null})),finished:Object(l.a)((function(){var e;return null===(e=r.todos[Object(l.q)(t)])||void 0===e?void 0:e.finished})),updateFinished:function(e){return r.updateTodoFinished({todoId:Object(l.q)(t),finished:e})}}}},353:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l}));var n=r(18),c=r(352),o=Object(n.l)("$content",!1),l=function(t){var e=o();return Object(c.c)((function(){return e(Object(n.h)(t)).fetch()}))}},354:function(t,e,r){"use strict";r.r(e);var n=r(41),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"border-2 border-primary-500 rounded-lg"},[r("header",{staticClass:"bg-primary-500 text-white pl-4 p-2"},[t._t("header")],2),t._v(" "),r("div",{staticClass:"m-2"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,r){"use strict";r.r(e);var n=r(0),c=r(104),o=Object(n.d)({inheritAttrs:!1,props:{label:{type:String,default:""},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var r=e.attrs,o=Object(n.o)(t,"value");return{attrs:r,checkboxIcon:Object(n.a)((function(){return null==Object(n.q)(o)?c.c:Object(n.q)(o)?c.b:c.e}))}}}),l=r(41),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{staticClass:"flex flex-row items-center space-x-1"},[r("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",icon:t.checkboxIcon}}),t._v(" "),r("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),r("span",[t._v(t._s(t.label))])],1)])}),[],!1,null,null,null);e.default=component.exports},357:function(t,e,r){"use strict";r.r(e),r.d(e,"useLocalRoute",(function(){return o}));var n=r(18),c=r(0),o=Object(n.l)("localeRoute",!1),l=Object(c.d)({props:{todo:{type:String,default:null},page:{type:String,default:null}},setup:function(t){var e=t.todo,r=t.page,n=o();return{to:Object(c.a)((function(){return n(null==r?{name:"tasks-task",params:{task:e}}:{name:"tasks-task-page",params:{page:r}})}))}}}),f=r(41),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{attrs:{to:t.to}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},358:function(t,e,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("36b4ae02",content,!0,{sourceMap:!1})},363:function(t,e,r){"use strict";r.r(e);var n=r(18),c=r(352),o=Object(n.b)({props:{task:{default:"mutterschaftsgeld-beantragen",type:String,required:!0}},setup:function(t){var e=Object(n.f)(t,"task"),r=Object(c.f)(e),title=r.title;return{taskId:e,categories:r.categories,title:title,document:r.document,finished:r.finished,updateFinished:r.updateFinished}}}),l=r(41),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("bmfsfj-card",{staticClass:"my-2",scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"flex dark flex-row"},[r("bmfsfj-checkbox",{attrs:{value:t.finished,label:t.title},on:{input:t.updateFinished}})],1)]},proxy:!0}])},[t._v(" "),r("todo-link",{attrs:{todo:t.taskId}},[t._v("Go!")]),t._v(" "),r("span",t._l(t.categories,(function(e){return r("li",{key:e},[t._v(t._s(e))])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjCheckbox:r(355).default,TodoLink:r(357).default,BmfsfjCard:r(354).default})},365:function(t,e,r){"use strict";r(358)},366:function(t,e,r){var n=r(68)((function(i){return i[1]}));n.push([t.i,".nuxt-logo{height:180px}",""]),n.locals={},t.exports=n},368:function(t,e,r){"use strict";r.r(e);var n=r(18),c=Object(n.b)({props:{name:{default:"test",type:String}},setup:function(t){var e=Object(n.d)(0);return{counter:e,increment:function(){e.value++}}}}),o=r(41),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{on:{click:t.increment}},[t._v(t._s(t.name)+" - "+t._s(t.counter))])])}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,r){"use strict";r.r(e);r(365);var n=r(41),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"nuxt-logo",attrs:{viewBox:"0 0 45 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z",fill:"#00DC82"}})])}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,r){"use strict";r.r(e);var n=r(18),c=r(353),o=Object(n.b)({setup:function(t){return{content:Object(c.b)("hello"),task:Object(n.d)("mutterschaftsgeld")}}}),l=r(41),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtLogo"),t._v(" "),r("div",[t._v("TEST")]),t._v(" "),r("CategoryCard",{attrs:{name:"hello world"}}),t._v(" "),r("h2",[t._v(" "+t._s(null!=t.content?t.content.title:"")+" ")]),t._v(" "),r("div",{staticClass:"mx-2"},[r("bmfsfj-checkbox",{attrs:{label:"TEST 1",value:!1}}),t._v(" "),r("nuxt-content",{attrs:{document:t.content}})],1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],attrs:{type:"text"},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}}),t._v(" "),r("bmfsfj-task",{attrs:{task:t.task}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NuxtLogo:r(370).default,CategoryCard:r(368).default,BmfsfjCheckbox:r(355).default,BmfsfjTask:r(363).default})}}]);