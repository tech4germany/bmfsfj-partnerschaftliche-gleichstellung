(window.webpackJsonp=window.webpackJsonp||[]).push([[19,23],{361:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return f}));var n=r(6),o=(r(46),r(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}function f(t){var e=Object(o.k)([]);return Object(o.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}},362:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return f}));var n=r(7),o=r(361),c=Object(n.m)("$content",!1),f=function(t){var e=c();return Object(o.b)((function(){return e(Object(n.i)(t)).fetch()}))}},365:function(t,e,r){"use strict";r.d(e,"a",(function(){return _})),r.d(e,"b",(function(){return N})),r.d(e,"d",(function(){return S})),r.d(e,"c",(function(){return F}));r(29),r(22),r(35),r(31),r(39);var n=r(12),o=r(61),c=r(15),f=r(6),d=(r(46),r(34),r(386),r(387),r(47),r(85),r(51),r(105),r(250),r(0)),l=r(486),O=r(483),j=r(487),v=r(488),m=r(489),h=r(249),w=(r(37),r(104),"todos");function y(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)&&"recommendedDateFromExpectedBirth"in content}(content))throw new Error("Non todo content document: ".concat(JSON.stringify(content)));return{document:content,id:content.id,title:content.title,modules:content.modules,recommendedDateFromExpectedBirth:content.recommendedDateFromExpectedBirth}}function x(t,e){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(w,{deep:!0}).where({id:r}).limit(1).fetch();case 2:if(n=t.sent,Array.isArray(n)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===n.length){t.next=7;break}throw new Error("Found no todo with the id ".concat(r));case 7:return t.abrupt("return",y(n[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){return R.apply(this,arguments)}function R(){return R=Object(f.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:{},n=c.length>2&&void 0!==c[2]?c[2]:null,t.next=4,e(w,{deep:!0}).without("data").where(r).search(n).fetch();case 4:if(o=t.sent,Array.isArray(o)){t.next=7;break}throw new Error("Expected array of todo contents");case 7:return t.abrupt("return",o.map((function(content){return y(content)})));case 8:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function _(t,e,r){return B.apply(this,arguments)}function B(){return(B=Object(f.a)(regeneratorRuntime.mark((function t(e,r,n){var o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Object(d.p)(Object(h.getTodo)(e,n)),t.next=3,x(r,n);case 3:return c=t.sent,t.abrupt("return",Object(d.j)(D(D({},o),c)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t,e){return P.apply(this,arguments)}function P(){return P=Object(f.a)(regeneratorRuntime.mark((function t(e,r){var n,o,c,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=f.length>2&&void 0!==f[2]?f[2]:{},o=f.length>3&&void 0!==f[3]?f[3]:null,t.next=4,E(r,n,o);case 4:if(c=t.sent.map((function(t){return Object(d.j)(D(D({},t),Object(d.p)(Object(h.getTodo)(e,t.id))))})),""!==o){t.next=7;break}return t.abrupt("return",c.sort(T(new Date)));case 7:return t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}function S(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}function T(t){return function(e,r){return Object(l.a)(Object(O.a)(e.recommendedDateFromExpectedBirth)(t))(Object(O.a)(r.recommendedDateFromExpectedBirth)(t))}}var $=[{months:-12},{months:-9},{months:-6},{months:-3},{weeks:-2},{weeks:-1},{days:-1},{days:1},{weeks:1},{months:1}];function F(t,e){var r=function(t){return $.map((function(e){return Object(O.a)(e)(t)}))}(e),f=function(t){return function(e){var r;return null!==(r=t.find((function(t){return Object(j.a)(t)(e)})))&&void 0!==r?r:t[0]}}(r),d=t.reduce((function(t,r){var n,d=Object(O.a)(r.recommendedDateFromExpectedBirth)(e),l=f(d).getTime(),j=Object(v.a)(Number.isNaN(l)?0:l);return D(D({},t),{},Object(c.a)({},j,[].concat(Object(o.a)(null!==(n=t[j])&&void 0!==n?n:[]),[r])))}),{});return Object.entries(d).map((function(t){var e=Object(n.a)(t,2),r=e[0],o=e[1];return{group:Object(m.a)(r),todos:o}}))}},367:function(t,e,r){"use strict";r.r(e);var n=r(0),o=Object(n.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),c=r(45),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,r){"use strict";r.d(e,"a",(function(){return j})),r.d(e,"b",(function(){return v}));var n=r(6),o=(r(46),r(34),r(0)),c=r(362),f=r(365),d=r(361),l=r(249);function O(){return{store:Object(l.useTodosStore)(),$content:Object(c.a)()}}var j=function(t){var e=O(),r=e.store,n=e.$content;return Object(d.b)((function(){return Object(f.a)(r,n,Object(o.q)(t))}))};function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=O(),j=l.store,v=l.$content;return Object(d.a)(Object(n.a)(regeneratorRuntime.mark((function n(){var d,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d=Object(o.q)(t)?{modules:{$contains:Object(o.q)(t)}}:{},n.next=3,Object(f.b)(j,v,d,Object(o.q)(e));case 3:return l=n.sent,n.abrupt("return",l.filter((function(t){return null==Object(o.q)(r)||!0===t.assignees[Object(o.q)(r)]})).filter((function(t){return null==Object(o.q)(c)||!Object(o.q)(c)||t.finished})));case 5:case"end":return n.stop()}}),n)}))))}},378:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return f}));r(253);var n=r(0),o=r(252);function c(){var t=Object(o.useUsersStore)();return Object(n.a)((function(){return Object.values(t.users)}))}function f(t){var e=Object(o.useUsersStore)();return Object(n.a)((function(){return e.users[Object(n.q)(t)]}))}},431:function(t,e,r){var content=r(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("64aa1020",content,!0,{sourceMap:!1})},443:function(t,e,r){"use strict";r(431)},444:function(t,e,r){var n=r(63)((function(i){return i[1]}));n.push([t.i,".user-icon[data-v-315885ba]{border-width:2px;--tw-border-opacity:1;border-color:rgba(0, 67, 119, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(0, 67, 119, var(--tw-text-opacity))}.user-icon.checked[data-v-315885ba]{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),n.locals={},t.exports=n},478:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r(249),c=r(368),f=r(378),d=Object(n.b)({props:{todoId:{type:String,default:null}},setup:function(t){var e=Object(n.h)(t).todoId,r=Object(c.a)(e),d=Object(o.useTodosStore)(),l=Object(f.b)(),O=Object(n.a)((function(){var t;return null===(t=Object(n.i)(r))||void 0===t?void 0:t.assignees}));return{users:l,isAssigned:function(t){var e,r;return null!==(r=null===(e=Object(n.i)(O))||void 0===e?void 0:e[t])&&void 0!==r&&r},toggleAssigned:function(t){d.toggleTodoAssignee({todoId:Object(n.i)(e),userId:t})}}}}),l=(r(443),r(45)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-row gap-1"},t._l(t.users,(function(e){return r("bmfsfj-toggle-button",{key:e.id,staticClass:"user-icon w-10 h-10 rounded-full",class:{checked:t.isAssigned(e.id)},attrs:{value:t.isAssigned(e.id)},on:{input:function(r){return t.toggleAssigned(e.id)}}},[t._v("\n    "+t._s(e.name.toUpperCase().substring(0,2))+"\n  ")])})),1)}),[],!1,null,"315885ba",null);e.default=component.exports;installComponents(component,{BmfsfjToggleButton:r(367).default})}}]);