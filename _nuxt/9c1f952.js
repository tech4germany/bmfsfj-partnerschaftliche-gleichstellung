(window.webpackJsonp=window.webpackJsonp||[]).push([[0,4,5,13],{353:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return f}));var n=r(6),c=(r(43),r(0));function o(t){var e=Object(c.k)(null);return Object(c.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}function f(t){var e=Object(c.k)([]);return Object(c.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}},354:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return f}));var n=r(7),c=r(353),o=Object(n.m)("$content",!1),f=function(t){var e=o();return Object(c.b)((function(){return e(Object(n.i)(t)).fetch()}))}},355:function(t,e,r){"use strict";r.d(e,"a",(function(){return I})),r.d(e,"d",(function(){return R})),r.d(e,"e",(function(){return S})),r.d(e,"b",(function(){return j})),r.d(e,"c",(function(){return m}));r(31),r(20),r(33),r(32),r(47);var n=r(19),c=r(6),o=(r(43),r(36),r(359),r(360),r(44),r(0)),f=r(248);r(48),r(34),r(104);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function O(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)}(content))throw new Error("Non task content document");return{document:content,id:content.id,title:content.title,modules:content.modules}}function h(t,e){return t("tasks",{deep:!0}).where({id:e,task:!0}).limit(1)}function j(t,e){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e,r).only("dir").fetch();case 2:if(n=t.sent,Array.isArray(n)){t.next=5;break}throw new TypeError("Expected an array");case 5:return t.abrupt("return",n[0].dir);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,e,r){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(regeneratorRuntime.mark((function t(e,r,n){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(r,"/").concat(n)).fetch();case 2:if(c=t.sent,!Array.isArray(c)){t.next=5;break}throw new TypeError("Unexpected array");case 5:if(null!=c){t.next=7;break}throw new Error("Found no task page at ".concat(r,"/").concat(n));case 7:return t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e,r).fetch();case 2:if(n=t.sent,Array.isArray(n)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===n.length){t.next=7;break}throw new Error("Found no task with the id ".concat(r));case 7:return t.abrupt("return",O(n[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return _.apply(this,arguments)}function _(){return _=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,n,c,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},n=o.length>2&&void 0!==o[2]?o[2]:null,t.next=4,e("tasks",{deep:!0}).without("data").where(d({task:{$eq:!0}},r)).search(n).fetch();case 4:if(c=t.sent,Array.isArray(c)){t.next=7;break}throw new Error("Expected array of task contents");case 7:return t.abrupt("return",c.map((function(content){return O(content)})));case 8:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function N(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function I(t,e,r){return A.apply(this,arguments)}function A(){return(A=Object(c.a)(regeneratorRuntime.mark((function t(e,r,n){var c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(o.p)(Object(f.getTask)(e,n)),t.next=3,w(r,n);case 3:return l=t.sent,t.abrupt("return",Object(o.j)(N(N({},c),l)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,e){return P.apply(this,arguments)}function P(){return P=Object(c.a)(regeneratorRuntime.mark((function t(e,r){var n,c,l,d=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.length>2&&void 0!==d[2]?d[2]:{},c=d.length>3&&void 0!==d[3]?d[3]:null,t.next=4,x(r,n,c);case 4:return l=t.sent,t.abrupt("return",l.map((function(t){return Object(o.j)(N(N({},t),Object(o.p)(Object(f.getTask)(e,t.id))))})));case 6:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}function S(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}},356:function(t,e,r){"use strict";r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return j})),r.d(e,"c",(function(){return v}));var n=r(6),c=(r(43),r(0)),o=r(354),f=r(355),l=r(353),d=r(248);function O(){return{store:Object(d.useTodosStore)(),$content:Object(o.a)()}}var h=function(t){var e=O(),r=e.store,n=e.$content;return Object(l.b)((function(){return Object(f.a)(r,n,Object(c.q)(t))}))},j=function(t,e){var r=Object(o.a)(),d=function(t){var e=Object(o.a)();return Object(l.b)((function(){return Object(f.b)(e,Object(c.q)(t))}))}(t);return Object(l.b)(Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t.value||null==d.value){n.next=2;break}return n.abrupt("return",Object(f.c)(r,d.value,e.value));case 2:return n.next=4,null;case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)}))))};function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=O(),n=r.store,o=r.$content;return Object(l.a)((function(){return Object(f.d)(n,o,Object(c.q)(t),Object(c.q)(e))}))}},357:function(t,e,r){"use strict";r.r(e);var n=r(42),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"border-2 border-primary-500 rounded-lg"},[r("header",{staticClass:"bg-primary-500 text-white pl-4 p-2"},[t._t("header")],2),t._v(" "),r("div",{staticClass:"m-2"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},359:function(t,e,r){r(2)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},360:function(t,e,r){"use strict";var n=r(27),c=r(9),o=r(105),f=r(37),l=r(22),d=r(74),O=r(165),h=r(131),j=r(249),v=r(8),m=r(60),y=r(86).f,w=r(53).f,k=r(30).f,x=r(250).trim,_="Number",E=c.Number,N=E.prototype,I=d(m(N))==_,A=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,c,o,f,l,code,d=j(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=x(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+d}for(f=(o=d.slice(2)).length,l=0;l<f;l++)if((code=o.charCodeAt(l))<48||code>c)return NaN;return parseInt(o,n)}return+d};if(o(_,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var R,P=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof P&&(I?v((function(){N.valueOf.call(r)})):d(r)!=_)?O(new E(A(e)),r,P):A(e)},S=n?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;S.length>C;C++)l(E,R=S[C])&&!l(P,R)&&k(P,R,w(E,R));P.prototype=N,N.constructor=P,f(c,_,P)}},365:function(t,e,r){"use strict";r.r(e);var n=r(0),c=r(87),o=Object(n.d)({inheritAttrs:!1,props:{label:{type:String,default:""},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var r=e.attrs,o=Object(n.o)(t,"value");return{attrs:r,checkboxIcon:Object(n.a)((function(){return null==Object(n.q)(o)?c.d:Object(n.q)(o)?c.c:c.f}))}}}),f=r(42),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{staticClass:"flex flex-row items-center space-x-1"},[r("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",icon:t.checkboxIcon}}),t._v(" "),r("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),r("span",[t._v(t._s(t.label))])],1)])}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,r){"use strict";r.r(e);var n=r(7),c=r(166),o=Object(n.b)({props:{todo:{type:String,default:null},page:{type:String,default:null}},setup:function(t){var e=t.todo,r=t.page,o=Object(c.b)();return{to:Object(n.a)((function(){return o(null==r?{name:"tasks-task",params:{task:e}}:{name:"tasks-task-page",params:{page:r}})}))}}}),f=r(42),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{attrs:{to:t.to}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,r){"use strict";r.r(e);var n=r(7),c=r(248),o=r(356),f=Object(n.b)({props:{task:{default:"mutterschaftsgeld-beantragen",type:String,required:!0}},setup:function(t){var e=Object(n.g)(t,"task"),r=Object(o.a)(e),f=Object(c.useTodosStore)();return{taskId:e,title:Object(n.a)((function(){var t;return null===(t=Object(n.i)(r))||void 0===t?void 0:t.title})),finished:Object(n.a)((function(){var t;return null===(t=Object(n.i)(r))||void 0===t?void 0:t.finished})),modules:Object(n.a)((function(){var t;return null===(t=Object(n.i)(r))||void 0===t?void 0:t.modules})),updateFinished:function(t){return f.updateTodoFinished({todoId:Object(n.i)(e),finished:t})}}}}),l=r(42),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("bmfsfj-card",{staticClass:"my-2",scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"flex dark flex-row"},[r("bmfsfj-checkbox",{attrs:{value:t.finished,label:t.title},on:{input:t.updateFinished}})],1)]},proxy:!0}])},[t._v(" "),r("todo-link",{attrs:{todo:t.taskId}},[t._v("Go!")]),t._v(" "),r("span",t._l(t.modules,(function(e){return r("li",{key:e},[t._v(t._s(t.$t("modules."+e)))])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjCheckbox:r(365).default,TodoLink:r(374).default,BmfsfjCard:r(357).default})}}]);