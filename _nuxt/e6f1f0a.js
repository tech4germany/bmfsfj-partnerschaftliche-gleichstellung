(window.webpackJsonp=window.webpackJsonp||[]).push([[43,5,6,7,8],{361:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(6),o=(n(46),n(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(o.k)([]);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},362:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(7),o=n(361),c=Object(r.m)("$content",!1),l=function(t){var e=c();return Object(o.b)((function(){return e(Object(r.i)(t)).fetch()}))}},365:function(t,e,n){"use strict";n.d(e,"a",(function(){return A})),n.d(e,"b",(function(){return D})),n.d(e,"d",(function(){return F})),n.d(e,"c",(function(){return S}));n(29),n(22),n(35),n(31),n(39);var r=n(12),o=n(61),c=n(15),l=n(6),f=(n(46),n(34),n(386),n(387),n(47),n(85),n(51),n(105),n(250),n(0)),d=n(486),m=n(483),v=n(487),j=n(488),O=n(489),h=n(249),x=(n(37),n(104),"todos");function y(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)&&"recommendedDateFromExpectedBirth"in content}(content))throw new Error("Non todo content document: ".concat(JSON.stringify(content)));return{document:content,id:content.id,title:content.title,modules:content.modules,recommendedDateFromExpectedBirth:content.recommendedDateFromExpectedBirth}}function w(t,e){return k.apply(this,arguments)}function k(){return(k=Object(l.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(x,{deep:!0}).where({id:n}).limit(1).fetch();case 2:if(r=t.sent,Array.isArray(r)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===r.length){t.next=7;break}throw new Error("Found no todo with the id ".concat(n));case 7:return t.abrupt("return",y(r[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return C.apply(this,arguments)}function C(){return C=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},r=c.length>2&&void 0!==c[2]?c[2]:null,t.next=4,e(x,{deep:!0}).without("data").where(n).search(r).fetch();case 4:if(o=t.sent,Array.isArray(o)){t.next=7;break}throw new Error("Expected array of todo contents");case 7:return t.abrupt("return",o.map((function(content){return y(content)})));case 8:case"end":return t.stop()}}),t)}))),C.apply(this,arguments)}function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function R(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function A(t,e,n){return B.apply(this,arguments)}function B(){return(B=Object(l.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Object(f.p)(Object(h.getTodo)(e,r)),t.next=3,w(n,r);case 3:return c=t.sent,t.abrupt("return",Object(f.j)(R(R({},o),c)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(t,e){return $.apply(this,arguments)}function $(){return $=Object(l.a)(regeneratorRuntime.mark((function t(e,n){var r,o,c,l=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>2&&void 0!==l[2]?l[2]:{},o=l.length>3&&void 0!==l[3]?l[3]:null,t.next=4,_(n,r,o);case 4:if(c=t.sent.map((function(t){return Object(f.j)(R(R({},t),Object(f.p)(Object(h.getTodo)(e,t.id))))})),""!==o){t.next=7;break}return t.abrupt("return",c.sort(I(new Date)));case 7:return t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)}))),$.apply(this,arguments)}function F(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}function I(t){return function(e,n){return Object(d.a)(Object(m.a)(e.recommendedDateFromExpectedBirth)(t))(Object(m.a)(n.recommendedDateFromExpectedBirth)(t))}}var P=[{months:-12},{months:-9},{months:-6},{months:-3},{weeks:-2},{weeks:-1},{days:-1},{days:1},{weeks:1},{months:1}];function S(t,e){var n=function(t){return P.map((function(e){return Object(m.a)(e)(t)}))}(e),l=function(t){return function(e){var n;return null!==(n=t.find((function(t){return Object(v.a)(t)(e)})))&&void 0!==n?n:t[0]}}(n),f=t.reduce((function(t,n){var r,f=Object(m.a)(n.recommendedDateFromExpectedBirth)(e),d=l(f).getTime(),v=Object(j.a)(Number.isNaN(d)?0:d);return R(R({},t),{},Object(c.a)({},v,[].concat(Object(o.a)(null!==(r=t[v])&&void 0!==r?r:[]),[n])))}),{});return Object.entries(f).map((function(t){var e=Object(r.a)(t,2),n=e[0],o=e[1];return{group:Object(O.a)(n),todos:o}}))}},368:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return j}));var r=n(6),o=(n(46),n(34),n(0)),c=n(362),l=n(365),f=n(361),d=n(249);function m(){return{store:Object(d.useTodosStore)(),$content:Object(c.a)()}}var v=function(t){var e=m(),n=e.store,r=e.$content;return Object(f.b)((function(){return Object(l.a)(n,r,Object(o.q)(t))}))};function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,d=m(),v=d.store,j=d.$content;return Object(f.a)(Object(r.a)(regeneratorRuntime.mark((function r(){var f,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return f=Object(o.q)(t)?{modules:{$contains:Object(o.q)(t)}}:{},r.next=3,Object(l.b)(v,j,f,Object(o.q)(e));case 3:return d=r.sent,r.abrupt("return",d.filter((function(t){return null==Object(o.q)(n)||!0===t.assignees[Object(o.q)(n)]})).filter((function(t){return null==Object(o.q)(c)||!Object(o.q)(c)||t.finished})));case 5:case"end":return r.stop()}}),r)}))))}},370:function(t,e,n){"use strict";n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return h}));n(47),n(85),n(34);var r=n(0),o=n(365),c=n(368),l=n(6);n(46);function f(){return(f=Object(l.a)(regeneratorRuntime.mark((function t(e){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("modules").fetch();case 2:if(content=t.sent,!Array.isArray(content)){t.next=5;break}throw new TypeError("Unexpected array for modules");case 5:return t.abrupt("return",content.body);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=n(362),m=n(361);function v(){var t=Object(d.a)();return Object(m.a)((function(){return function(t){return f.apply(this,arguments)}(t)}))}function j(){var t=v();return Object(r.a)((function(){return t.value.map((function(t){return t.id}))}))}function O(t){var e=v();return Object(r.a)((function(){return Object(r.q)(e).find((function(e){return e.id===Object(r.q)(t)}))}))}function h(t){var e=function(t){return Object(c.b)(Object(r.q)(t))}(t);return Object(r.a)((function(){return Object(o.d)(Object(r.q)(e))}))}},372:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("25d71212",content,!0,{sourceMap:!1})},379:function(t,e,n){"use strict";n(372)},380:function(t,e,n){var r=n(63)((function(i){return i[1]}));r.push([t.i,".module-icon[data-v-61d8feb8]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));background-color:var(--color)}",""]),r.locals={},t.exports=r},382:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(370),c=Object(r.d)({props:{moduleId:{type:String,required:!0}},setup:function(t){var e=Object(r.p)(t).moduleId,n=Object(o.a)(e);return{icon:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.q)(n))||void 0===t?void 0:t.icon)&&void 0!==e?e:""})),color:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.q)(n))||void 0===t?void 0:t.color2)&&void 0!==e?e:""}))}}}),l=c,f=(n(379),n(45)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"module-icon flex",style:"--color: "+t.color},[n("font-awesome-icon",{staticStyle:{margin:"auto"},attrs:{"fixed-width":"",icon:t.icon}})],1)}),[],!1,null,"61d8feb8",null);e.default=component.exports},392:function(t,e,n){var content=n(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("2b8d0774",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(23),c=n(377),l=Object(r.d)({inheritAttrs:!1,props:{label:{type:String,default:null},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var n=e.attrs,l=Object(r.o)(t,"value");return{attrs:n,checkboxIcon:Object(r.a)((function(){return null==Object(r.q)(l)?o.x:Object(r.q)(l)?o.j:c.a}))}}}),f=n(45),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex flex-row items-center"},[n("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),n("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),t._t("default",(function(){return[n("span",{staticClass:"ml-1"},[t._v(t._s(t.label))])]}))],2)])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){"use strict";n(392)},402:function(t,e,n){var r=n(63)((function(i){return i[1]}));r.push([t.i,".module-icon[data-v-f72f70c6]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));background-color:var(--color)}",""]),r.locals={},t.exports=r},413:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({props:{moduleIds:{type:Array,default:function(){return[]}}}}),c=(n(401),n(45)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"module-icon-wrapper w-8 flex flex-col overflow-hidden"},t._l(t.moduleIds,(function(t){return n("bmfsfj-icon-module",{key:t,staticClass:"w-8 h-8",attrs:{"module-id":t}})})),1)}),[],!1,null,"f72f70c6",null);e.default=component.exports;installComponents(component,{BmfsfjIconModule:n(382).default})},430:function(t,e,n){var content=n(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("f4891cf0",content,!0,{sourceMap:!1})},437:function(t,e,n){"use strict";n.r(e);var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border-2 border-primary-500 rounded-lg"},[n("header",{staticClass:"border-b-2 border-primary-500"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"mx-2 mt-1 mb-2"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},441:function(t,e,n){"use strict";n(430)},442:function(t,e,n){var r=n(63)((function(i){return i[1]}));r.push([t.i,".nuxt-content{display:flex;flex-direction:column;gap:10px}.nuxt-content a{--tw-text-opacity:1;color:rgba(0, 67, 119, var(--tw-text-opacity))}.nuxt-content ul{list-style-position:inside;list-style-type:disc}.nuxt-content li{display:list-item}",""]),r.locals={},t.exports=r},477:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(23),c=n(249),l=n(368),f=Object(r.b)({setup:function(){var t=Object(r.j)(),e=Object(r.a)((function(){return t.value.params.todo})),n=Object(l.a)(e),f=Object(c.useTodosStore)();return{todoId:e,title:Object(r.a)((function(){var t;return null===(t=Object(r.i)(n))||void 0===t?void 0:t.title})),document:Object(r.a)((function(){var t;return null===(t=Object(r.i)(n))||void 0===t?void 0:t.document})),finished:Object(r.a)((function(){var t;return null===(t=Object(r.i)(n))||void 0===t?void 0:t.finished})),modules:Object(r.a)((function(){var t;return null===(t=Object(r.i)(n))||void 0===t?void 0:t.modules})),updateFinished:function(t){return f.updateTodoFinished({todoId:Object(r.i)(e),finished:t})},faArrowLeft:o.c}}}),d=(n(441),n(45)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-card",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"w-full flex h-24"},[n("bmfsfj-icon-bar-module",{staticClass:"rounded-tl min-w-max",attrs:{"module-ids":t.modules}}),t._v(" "),n("bmfsfj-checkbox",{staticClass:"py-1 px-2 my-auto flex-grow",attrs:{value:t.finished},on:{input:t.updateFinished}},[n("h2",{staticClass:"text-xl ml-1 my-auto"},[t._v(t._s(t.title))])])],1)]},proxy:!0}])},[t._v(" "),n("nuxt-content",{staticClass:"mx-auto",attrs:{document:t.document}}),t._v(" "),n("nuxt-link",{attrs:{to:t.localeRoute("/todos")}},[n("font-awesome-icon",{staticClass:"self-center mt-2 text-primary-500",attrs:{"fixed-width":"",size:"2x",icon:t.faArrowLeft}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjIconBarModule:n(413).default,BmfsfjCheckbox:n(394).default,BmfsfjCard:n(437).default})}}]);