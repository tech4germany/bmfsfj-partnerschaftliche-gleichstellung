(window.webpackJsonp=window.webpackJsonp||[]).push([[23,18],{365:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return f}));var n=r(7),c=(r(46),r(0));function o(t){var e=Object(c.k)(null);return Object(c.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}function f(t){var e=Object(c.k)([]);return Object(c.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}},366:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return f}));var n=r(6),c=r(365),o=Object(n.m)("$content",!1),f=function(t){var e=o();return Object(c.b)((function(){return e(Object(n.i)(t)).fetch()}))}},369:function(t,e,r){"use strict";r.d(e,"a",(function(){return _})),r.d(e,"b",(function(){return N})),r.d(e,"d",(function(){return S})),r.d(e,"c",(function(){return F}));r(29),r(23),r(35),r(31),r(40);var n=r(12),c=r(63),o=r(15),f=r(7),d=(r(46),r(34),r(390),r(391),r(47),r(85),r(51),r(104),r(251),r(0)),l=r(489),O=r(486),j=r(490),v=r(491),m=r(492),h=r(250),w=(r(38),r(105),"todos");function y(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)&&"recommendedDateFromExpectedBirth"in content}(content))throw new Error("Non task content document: ".concat(JSON.stringify(content)));return{document:content,id:content.id,title:content.title,modules:content.modules,recommendedDateFromExpectedBirth:content.recommendedDateFromExpectedBirth}}function x(t,e){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(w,{deep:!0}).where({id:r}).limit(1).fetch();case 2:if(n=t.sent,Array.isArray(n)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===n.length){t.next=7;break}throw new Error("Found no task with the id ".concat(r));case 7:return t.abrupt("return",y(n[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){return R.apply(this,arguments)}function R(){return R=Object(f.a)(regeneratorRuntime.mark((function t(e){var r,n,c,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},n=o.length>2&&void 0!==o[2]?o[2]:null,t.next=4,e(w,{deep:!0}).without("data").where(r).search(n).fetch();case 4:if(c=t.sent,Array.isArray(c)){t.next=7;break}throw new Error("Expected array of task contents");case 7:return t.abrupt("return",c.map((function(content){return y(content)})));case 8:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function _(t,e,r){return B.apply(this,arguments)}function B(){return(B=Object(f.a)(regeneratorRuntime.mark((function t(e,r,n){var c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(d.p)(Object(h.getTask)(e,n)),t.next=3,x(r,n);case 3:return o=t.sent,t.abrupt("return",Object(d.j)(D(D({},c),o)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t,e){return P.apply(this,arguments)}function P(){return P=Object(f.a)(regeneratorRuntime.mark((function t(e,r){var n,c,o,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=f.length>2&&void 0!==f[2]?f[2]:{},c=f.length>3&&void 0!==f[3]?f[3]:null,t.next=4,E(r,n,c);case 4:if(o=t.sent.map((function(t){return Object(d.j)(D(D({},t),Object(d.p)(Object(h.getTask)(e,t.id))))})),""!==c){t.next=7;break}return t.abrupt("return",o.sort(T(new Date)));case 7:return t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}function S(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}function T(t){return function(e,r){return Object(l.a)(Object(O.a)(e.recommendedDateFromExpectedBirth)(t))(Object(O.a)(r.recommendedDateFromExpectedBirth)(t))}}var $=[{months:-12},{months:-9},{months:-6},{months:-3},{weeks:-2},{weeks:-1},{days:-1},{days:1},{weeks:1},{months:1}];function F(t,e){var r=function(t){return $.map((function(e){return Object(O.a)(e)(t)}))}(e),f=function(t){return function(e){var r;return null!==(r=t.find((function(t){return Object(j.a)(t)(e)})))&&void 0!==r?r:t[0]}}(r),d=t.reduce((function(t,r){var n,d=Object(O.a)(r.recommendedDateFromExpectedBirth)(e),l=f(d).getTime(),j=Object(v.a)(Number.isNaN(l)?0:l);return D(D({},t),{},Object(o.a)({},j,[].concat(Object(c.a)(null!==(n=t[j])&&void 0!==n?n:[]),[r])))}),{});return Object.entries(d).map((function(t){var e=Object(n.a)(t,2),r=e[0],c=e[1];return{group:Object(m.a)(r),todos:c}}))}},371:function(t,e,r){"use strict";r.r(e);var n=r(0),c=Object(n.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),o=r(37),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,r){"use strict";r.d(e,"a",(function(){return j})),r.d(e,"b",(function(){return v}));var n=r(7),c=(r(46),r(34),r(0)),o=r(366),f=r(369),d=r(365),l=r(250);function O(){return{store:Object(l.useTodosStore)(),$content:Object(o.a)()}}var j=function(t){var e=O(),r=e.store,n=e.$content;return Object(d.b)((function(){return Object(f.a)(r,n,Object(c.q)(t))}))};function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=O(),j=l.store,v=l.$content;return Object(d.a)(Object(n.a)(regeneratorRuntime.mark((function n(){var d,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d=Object(c.q)(t)?{modules:{$contains:Object(c.q)(t)}}:{},n.next=3,Object(f.b)(j,v,d,Object(c.q)(e));case 3:return l=n.sent,n.abrupt("return",l.filter((function(t){return null==Object(c.q)(r)||!0===t.assignees[Object(c.q)(r)]})).filter((function(t){return null==Object(c.q)(o)||!Object(c.q)(o)||t.finished})));case 5:case"end":return n.stop()}}),n)}))))}},382:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return f}));r(254);var n=r(0),c=r(253);function o(){var t=Object(c.useUsersStore)();return Object(n.a)((function(){return Object.values(t.users)}))}function f(t){var e=Object(c.useUsersStore)();return Object(n.a)((function(){return e.users[Object(n.q)(t)]}))}},438:function(t,e,r){var content=r(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("07f084ee",content,!0,{sourceMap:!1})},449:function(t,e,r){"use strict";r(438)},450:function(t,e,r){var n=r(61)((function(i){return i[1]}));n.push([t.i,".user-icon[data-v-48a8e04d]{border-width:2px;--tw-border-opacity:1;border-color:rgba(0, 67, 119, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(0, 67, 119, var(--tw-text-opacity))}.user-icon.checked[data-v-48a8e04d]{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),n.locals={},t.exports=n},482:function(t,e,r){"use strict";r.r(e);var n=r(6),c=r(250),o=r(373),f=r(382),d=Object(n.b)({props:{todo:{type:String,default:null}},setup:function(t){var e=Object(n.h)(t).todo,r=Object(o.a)(e),d=Object(c.useTodosStore)(),l=Object(f.b)(),O=Object(n.a)((function(){var t;return null===(t=Object(n.i)(r))||void 0===t?void 0:t.assignees}));return{users:l,isAssigned:function(t){var e,r;return null!==(r=null===(e=Object(n.i)(O))||void 0===e?void 0:e[t])&&void 0!==r&&r},toggleAssigned:function(t){d.toggleTodoAssignee({todoId:Object(n.i)(e),userId:t})}}}}),l=(r(449),r(37)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-row gap-1"},t._l(t.users,(function(e){return r("custom-toggle-button",{key:e.id,staticClass:"user-icon w-10 h-10 rounded-full",class:{checked:t.isAssigned(e.id)},attrs:{value:t.isAssigned(e.id)},on:{input:function(r){return t.toggleAssigned(e.id)}}},[t._v("\n    "+t._s(e.name.toUpperCase().substring(0,2))+"\n  ")])})),1)}),[],!1,null,"48a8e04d",null);e.default=component.exports;installComponents(component,{CustomToggleButton:r(371).default})}}]);