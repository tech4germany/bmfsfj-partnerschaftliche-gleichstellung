(window.webpackJsonp=window.webpackJsonp||[]).push([[46,2,9,11,12,22,25,27,28],{366:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f}));var r=n(63),o=(n(51),n(6)),c=Object(o.q)("$i18n",!1),l=Object(o.q)("switchLocalePath",!1),f=function(){var t=c();return[t.locale].concat(Object(r.a)(t.fallbackLocale))}},367:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(7),o=(n(46),n(0));function c(t){var e=Object(o.n)(null);return Object(o.v)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(o.n)([]);return Object(o.v)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},369:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(38),n(18),n(29),n(41),n(25),n(23),n(40),n(42),n(26);var r=n(7);n(46),n(51);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var c,l,f,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=o(r),t.prev=1,c.s();case 3:if((l=c.n()).done){t.next=19;break}return f=l.value,t.prev=5,t.next=8,e("".concat(f,"/").concat(n));case 8:if(!(content=t.sent)||!(null==content.length||content.length>0)){t.next=11;break}return t.abrupt("return",content);case 11:throw new Error("No translation for ".concat(n," in ").concat(f));case 14:t.prev=14,t.t0=t.catch(5),console.warn("No translation for ".concat(n," in ").concat(f,"."));case 17:t.next=3;break;case 19:t.next=24;break;case 21:t.prev=21,t.t1=t.catch(1),c.e(t.t1);case 24:return t.prev=24,c.f(),t.finish(24);case 27:throw new Error("Page not found in any fitting translation: ".concat(n,", tried locales: ").concat(r));case 28:case"end":return t.stop()}}),t,null,[[1,21,24,27],[5,14]])})));return function(e,n,r){return t.apply(this,arguments)}}()},370:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d}));var r=n(6),o=n(369),c=n(366),l=n(367),f=Object(r.q)("$content",!1),d=function(t){var e=f(),n=Object(c.b)();return Object(l.b)((function(){return Object(o.a)((function(t){return e(t).fetch()}),Object(r.l)(t),n)}))}},376:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("4d9b9242",content,!0,{sourceMap:!1})},383:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));n(253);var r=n(0),o=n(252);function c(){var t=Object(o.useUsersStore)();return Object(r.a)((function(){return Object.values(t.users)}))}function l(t){var e=Object(o.useUsersStore)();return Object(r.a)((function(){return e.users[Object(r.t)(t)]}))}},384:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("2b8d0774",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n.r(e);n(29);var r=n(0),o=n(383),c=Object(r.d)({props:{userId:{type:String,required:!0}},setup:function(t){var e=Object(r.s)(t).userId,n=Object(o.a)(e);return{name:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.t)(n))||void 0===t?void 0:t.name)&&void 0!==e?e:""}))}}}),l=n(37),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    bg-primary-500\n    flex\n    text-white\n    border-2 border-primary-500\n    w-8\n    h-8\n    rounded-full\n  "},[n("span",{staticClass:"m-auto"},[t._v(t._s(t.name.toUpperCase().substring(0,2)))])])}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,n){"use strict";n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return O}));var r=n(7),o=(n(46),n(18),n(34),n(0)),c=n(370),l=n(366),f=n(390),d=n(367),v=n(250);function m(){return{store:Object(v.useTodosStore)(),$content:Object(c.a)()}}var j=function(t){var e=m(),n=e.store,r=e.$content,c=Object(l.b)();return Object(d.b)((function(){return null!=Object(o.t)(t)?Object(f.a)(n,r,Object(o.t)(t),c):Promise.resolve(null)}))};function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,v=m(),j=v.store,O=v.$content,h=Object(l.b)();return Object(d.a)(Object(r.a)(regeneratorRuntime.mark((function r(){var l,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l=Object(o.t)(t)?{modules:{$contains:Object(o.t)(t)}}:{},r.next=3,Object(f.b)(j,O,l,Object(o.t)(e),h);case 3:return d=r.sent,r.abrupt("return",d.filter((function(t){return null==Object(o.t)(n)||!0===t.assignees[Object(o.t)(n)]})).filter((function(t){return null==Object(o.t)(c)||Object(o.t)(c)&&t.finished||!Object(o.t)(c)&&!t.finished})));case 5:case"end":return r.stop()}}),r)}))))}},389:function(t,e,n){"use strict";n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return h}));n(47),n(85),n(34);var r=n(0),o=n(390),c=n(387),l=n(7);n(46);function f(){return(f=Object(l.a)(regeneratorRuntime.mark((function t(e){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("modules").fetch();case 2:if(content=t.sent,!Array.isArray(content)){t.next=5;break}throw new TypeError("Unexpected array for modules");case 5:return t.abrupt("return",content.body);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=n(370),v=n(367);function m(){var t=Object(d.a)();return Object(v.a)((function(){return function(t){return f.apply(this,arguments)}(t)}))}function j(){var t=m();return Object(r.a)((function(){return t.value.map((function(t){return t.id}))}))}function O(t){var e=m();return Object(r.a)((function(){return Object(r.t)(e).find((function(e){return e.id===Object(r.t)(t)}))}))}function h(t){var e=function(t){return Object(c.b)(Object(r.t)(t))}(t);return Object(r.a)((function(){return Object(o.d)(Object(r.t)(e))}))}},390:function(t,e,n){"use strict";n.d(e,"a",(function(){return P})),n.d(e,"b",(function(){return R})),n.d(e,"d",(function(){return T})),n.d(e,"c",(function(){return z}));n(30),n(23),n(35),n(31),n(43);var r=n(12),o=n(63),c=n(16),l=n(7),f=(n(46),n(34),n(413),n(414),n(47),n(85),n(51),n(105),n(254),n(0)),d=n(492),v=n(491),m=n(493),j=n(494),O=n(495),h=n(250),y=(n(39),n(104),n(166),n(18),n(25),n(167),n(168),n(169),n(170),n(171),n(172),n(173),n(174),n(175),n(176),n(177),n(178),n(179),n(26),n(38),n(29),n(41),n(40),n(42),n(369));function x(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var _="todos";function k(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)&&"recommendedDateFromExpectedBirth"in content}(content))throw new Error("Non todo content document: ".concat(JSON.stringify(content)));return{document:content,id:content.id,title:content.title,modules:content.modules,recommendedDateFromExpectedBirth:content.recommendedDateFromExpectedBirth}}function C(t,e,n){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.a)((function(t){return e(t,{deep:!0}).where({id:n}).limit(1).fetch()}),_,r);case 2:if(o=t.sent,Array.isArray(o)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===o.length){t.next=7;break}throw new Error("Found no todo with the id ".concat(n));case 7:return t.abrupt("return",k(o[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){return I.apply(this,arguments)}function I(){return I=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c,l,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},r=f.length>2&&void 0!==f[2]?f[2]:null,o=f.length>3?f[3]:void 0,c="".concat(o,"/").concat(_),t.prev=4,t.next=7,e(c,{deep:!0}).without("data").where(n).search(r).fetch();case 7:if(l=t.sent,Array.isArray(l)){t.next=10;break}throw new Error("Expected array of todo contents");case 10:return t.abrupt("return",l.map((function(content){return k(content)})));case 13:return t.prev=13,t.t0=t.catch(4),console.warn("No translation for ".concat(c," in ").concat(o,".")),t.abrupt("return",[]);case 17:case"end":return t.stop()}}),t,null,[[4,13]])}))),I.apply(this,arguments)}function B(t){return $.apply(this,arguments)}function $(){return $=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,c,l,f,d,v,m,j,O,h=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=h.length>1&&void 0!==h[1]?h[1]:{},r=h.length>2&&void 0!==h[2]?h[2]:null,c=h.length>3?h[3]:void 0,l=new Map,f=x(c.reverse()),t.prev=5,f.s();case 7:if((d=f.n()).done){t.next=17;break}return v=d.value,t.t0=x,t.next=12,E(e,n,r,v);case 12:t.t1=t.sent,m=(0,t.t0)(t.t1);try{for(m.s();!(j=m.n()).done;)O=j.value,l.set(O.id,O)}catch(t){m.e(t)}finally{m.f()}case 15:t.next=7;break;case 17:t.next=22;break;case 19:t.prev=19,t.t2=t.catch(5),f.e(t.t2);case 22:return t.prev=22,f.f(),t.finish(22);case 25:return t.abrupt("return",Object(o.a)(l.values()));case 26:case"end":return t.stop()}}),t,null,[[5,19,22,25]])}))),$.apply(this,arguments)}function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function P(t,e,n,r){return M.apply(this,arguments)}function M(){return(M=Object(l.a)(regeneratorRuntime.mark((function t(e,n,r,o){var c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(f.s)(Object(h.getTodo)(e,r)),t.next=3,C(n,r,o);case 3:return l=t.sent,t.abrupt("return",Object(f.l)(D(D({},c),l)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,e){return F.apply(this,arguments)}function F(){return F=Object(l.a)(regeneratorRuntime.mark((function t(e,n){var r,o,c,l,d=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=d.length>2&&void 0!==d[2]?d[2]:{},o=d.length>3&&void 0!==d[3]?d[3]:null,c=d.length>4?d[4]:void 0,t.next=5,B(n,r,o,c);case 5:if(l=t.sent.map((function(t){return Object(f.l)(D(D({},t),Object(f.s)(Object(h.getTodo)(e,t.id))))})),""!==o){t.next=8;break}return t.abrupt("return",l.sort(U(new Date)));case 8:return t.abrupt("return",l);case 9:case"end":return t.stop()}}),t)}))),F.apply(this,arguments)}function T(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}function U(t){return function(e,n){return Object(d.a)(Object(v.a)(e.recommendedDateFromExpectedBirth)(t))(Object(v.a)(n.recommendedDateFromExpectedBirth)(t))}}var N=[{months:-12},{months:-9},{months:-6},{months:-3},{weeks:-2},{weeks:-1},{days:-1},{days:1},{weeks:1},{months:1}];function z(t,e){var n=function(t){return N.map((function(e){return Object(v.a)(e)(t)}))}(e),l=function(t){return function(e){var n;return null!==(n=t.find((function(t){return Object(m.a)(t)(e)})))&&void 0!==n?n:t[0]}}(n),f=t.reduce((function(t,n){var r,f=Object(v.a)(n.recommendedDateFromExpectedBirth)(e),d=l(f).getTime(),m=Object(j.a)(Number.isNaN(d)?0:d);return D(D({},t),{},Object(c.a)({},m,[].concat(Object(o.a)(null!==(r=t[m])&&void 0!==r?r:[]),[n])))}),{});return Object.entries(f).map((function(t){var e=Object(r.a)(t,2),n=e[0],o=e[1];return{group:Object(O.a)(n),todos:o}}))}},392:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(389),c=Object(r.d)({props:{moduleId:{type:String,required:!0}},setup:function(t){var e=Object(r.s)(t).moduleId,n=Object(o.a)(e);return{icon:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.t)(n))||void 0===t?void 0:t.icon)&&void 0!==e?e:"question"})),color:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.t)(n))||void 0===t?void 0:t.color2)&&void 0!==e?e:""}))}}}),l=c,f=(n(411),n(37)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"module-icon flex",style:"--color: "+t.color},[n("font-awesome-icon",{staticStyle:{margin:"auto"},attrs:{"fixed-width":"",icon:t.icon}})],1)}),[],!1,null,"b3ef14ec",null);e.default=component.exports},393:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(20),c=n(394),l=n.n(c),f=Object(r.d)({components:{vSelect:l.a},inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},value:{type:null,default:null}},setup:function(t,e){var n=e.attrs,r=e.emit;return{attrs:n,onInput:function(t){r("input",t)},unselect:function(){r("input",null)},faTimesCircle:o.C,faAngleDown:o.a}}}),d=(n(395),n(37)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row border-2 border-primary-500 rounded-full"},[null!=t.value?n("button",{staticClass:"ml-0.5",on:{click:t.unselect}},[n("font-awesome-icon",{staticClass:"text-primary-500",attrs:{icon:t.faTimesCircle}})],1):t._e(),t._v(" "),n("v-select",t._b({staticClass:"flex-grow",attrs:{options:t.items,clearable:!1,searchable:!1,value:t.value},on:{input:t.onInput},scopedSlots:t._u([t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(e){return[t._t(n,null,null,e)]}}}))],null,!0)},"v-select",t.attrs,!1))],1)}),[],!1,null,null,null);e.default=component.exports},395:function(t,e,n){"use strict";n(382)},396:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".vs__dropdown-toggle{border:unset;border-radius:unset;flex-grow:1}.v-select{display:flex;flex-direction:column}.vs__search{padding:0px;text-align:center}.vs__dropdown-menu .vs__dropdown-option--highlight, .vs__dropdown-menu .vs__dropdown-option--selected{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},397:function(t,e,n){"use strict";n(384)},398:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".module-icon[data-v-f72f70c6]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));background-color:var(--color)}",""]),r.locals={},t.exports=r},399:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("30050e06",content,!0,{sourceMap:!1})},400:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(20),c=n(388),l=Object(r.d)({inheritAttrs:!1,props:{label:{type:String,default:null},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var n=e.attrs,l=Object(r.r)(t,"value");return{attrs:n,checkboxIcon:Object(r.a)((function(){return null==Object(r.t)(l)?o.z:Object(r.t)(l)?o.j:c.a}))}}}),f=n(37),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex flex-row items-center"},[n("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),n("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),t._t("default",(function(){return[n("span",{staticClass:"ml-1"},[t._v(t._s(t.label))])]}))],2)])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({props:{moduleIds:{type:Array,default:function(){return[]}}}}),c=(n(397),n(37)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"module-icon-wrapper w-8 flex flex-col overflow-hidden"},t._l(t.moduleIds,(function(t){return n("bmfsfj-icon-module",{key:t,staticClass:"w-8 h-8",attrs:{"module-id":t}})})),1)}),[],!1,null,"f72f70c6",null);e.default=component.exports;installComponents(component,{BmfsfjIconModule:n(392).default})},410:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("0d9fc2ed",content,!0,{sourceMap:!1})},411:function(t,e,n){"use strict";n(399)},412:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".module-icon[data-v-b3ef14ec]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));background-color:var(--color)}",""]),r.locals={},t.exports=r},422:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(39),n(104),n(18),n(73);var r=n(6);function o(){var t,e=(t=Object(r.m)(),Object(r.a)((function(){return t.value.query})));return{search:Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.l)(e).search)||void 0===t?void 0:t.toString())&&void 0!==n?n:""})),module:Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.l)(e).module)||void 0===t?void 0:t.toString())&&void 0!==n?n:null})),user:Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.l)(e).user)||void 0===t?void 0:t.toString())&&void 0!==n?n:null})),done:Object(r.a)((function(){return null!=Object(r.l)(e).done}))}}},423:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(389),c=Object(r.b)({props:{value:{type:String,default:null}},setup:function(t,e){var n=e.emit;return{attrs:e.attrs,selectModule:function(t){n("input",t)},modules:Object(o.c)()}}}),l=c,f=n(37),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-select-chip",t._b({staticClass:"w-1/3 h-11 rounded-xl",attrs:{items:t.modules,value:t.value},on:{input:t.selectModule},scopedSlots:t._u([{key:"option",fn:function(e){var label=e.label;return[t._v(t._s(t.$t("modules."+label)))]}},{key:"selected-option",fn:function(t){var label=t.label;return[n("bmfsfj-icon-module",{staticClass:"w-3 h-3 text-xs rounded-full",attrs:{"module-id":label}})]}}])},"bmfsfj-select-chip",t.attrs,!1))}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjIconModule:n(392).default,BmfsfjSelectChip:n(393).default})},424:function(t,e,n){"use strict";n.r(e);n(29),n(47);var r=n(6),o=n(385),c=n(383),l=Object(r.b)({components:{BmfsfjUserIcon:o.default},props:{value:{type:String,default:null}},setup:function(t,e){var n=e.emit,o=e.attrs,l=Object(c.b)();return{attrs:o,selectUser:function(t){n("input",null==t?void 0:t.value)},userName:function(t){var e=Object(c.a)(t);return Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.l)(e))||void 0===t?void 0:t.name)&&void 0!==n?n:""}))},users:Object(r.a)((function(){return Object(r.l)(l).map((function(t){return{value:t.id,label:t.name}}))}))}}}),f=n(37),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-select-chip",t._b({staticClass:"w-1/3 rounded-xl",attrs:{items:t.users,value:t.value},on:{input:t.selectUser},scopedSlots:t._u([{key:"option",fn:function(e){var label=e.label;return[t._v(t._s(label))]}},{key:"selected-option",fn:function(t){var label=t.label;return[n("bmfsfj-user-icon",{staticClass:"w-3 h-3 text-xs",attrs:{"user-id":label}})]}}])},"bmfsfj-select-chip",t.attrs,!1))}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjUserIcon:n(385).default,BmfsfjSelectChip:n(393).default})},425:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(165),c=Object(r.b)({props:{todo:{type:String,default:null}},setup:function(t){var e=t.todo,n=Object(o.b)();return{to:Object(r.a)((function(){return n({name:"todos-todo",params:{todo:e}})}))}}}),l=n(37),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{attrs:{to:t.to}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){"use strict";n(410)},430:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".checked[data-v-8cc39bae]{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},439:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(422),c=(n(30),n(23),n(34),n(35),n(31),n(43),n(16)),l=n(165);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(r.b)({setup:function(){var t,e,n,c=(t=Object(r.n)(),e=Object(r.m)(),n=Object(l.a)(),function(o){var c=n({query:d(d({},Object(r.l)(e).query),o)});null!=c&&t.push(c)}),f=Object(o.a)(),v=f.module,m=f.user;return{selectedModule:v,selectModule:function(t){var e;c({module:null!==(e=Object(r.l)(t))&&void 0!==e?e:void 0})},doneFilter:f.done,updateDoneFilter:function(t){c({done:t?"true":void 0})},selectedUser:m,selectUser:function(t){var e;c({user:null!==(e=Object(r.l)(t))&&void 0!==e?e:void 0})}}}}),m=(n(429),n(37)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row w-full gap-1"},[n("bmfsfj-select-module",{staticClass:"w-1/3 rounded-xl",attrs:{value:t.selectedModule,placeholder:t.$t("todos.filter.module")},on:{input:t.selectModule}}),t._v(" "),n("bmfsfj-select-user",{staticClass:"w-1/3 rounded-xl",attrs:{value:t.selectedUser,placeholder:t.$t("todos.filter.assignee")},on:{input:t.selectUser}}),t._v(" "),n("bmfsfj-toggle-button",{staticClass:"w-1/3 rounded-xl border-2 border-primary-500",class:{checked:t.doneFilter},attrs:{value:t.doneFilter},on:{input:t.updateDoneFilter}},[t._v(t._s(t.$t("todos.filter.done")))])],1)}),[],!1,null,"8cc39bae",null);e.default=component.exports;installComponents(component,{BmfsfjSelectModule:n(423).default,BmfsfjSelectUser:n(424).default,BmfsfjToggleButton:n(376).default})},441:function(t,e,n){"use strict";n.r(e);var r=n(12),o=(n(47),n(34),n(105),n(6)),c=n(20),l=n(385),f=n(250),d=n(387),v=Object(o.b)({components:{BmfsfjUserIcon:l.default},props:{todoId:{default:"mutterschaftsgeld-beantragen",type:String,required:!0}},setup:function(t){var e=Object(o.k)(t).todoId,n=Object(d.a)(e),l=Object(f.useTodosStore)(),v=Object(o.a)((function(){var t,e;return Object.entries(null!==(e=null===(t=Object(o.l)(n))||void 0===t?void 0:t.assignees)&&void 0!==e?e:{}).filter((function(t){var e=Object(r.a)(t,2);e[0];return e[1]})).map((function(t){return Object(r.a)(t,1)[0]}))}));return{title:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.title})),finished:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.finished})),date:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.recommendedDateFromExpectedBirth})),modules:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.modules})),assignees:v,updateFinished:function(t){return l.updateTodoFinished({todoId:Object(o.l)(e),finished:t})},faChevronRight:c.l}}}),m=n(37),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",{staticClass:"flex"},[n("bmfsfj-checkbox",{staticClass:"m-auto",attrs:{value:t.finished},on:{input:t.updateFinished}})],1),t._v(" "),n("bmfsfj-todo-link",{staticClass:"flex h-24 bg-background-300 rounded-xl flex-grow",attrs:{todo:t.todoId}},[n("bmfsfj-icon-bar-module",{staticClass:"rounded-l-xl min-w-max",attrs:{"module-ids":t.modules}}),t._v(" "),n("div",{staticClass:"flex-grow px-2 py-1 flex flex-col"},[n("h4",{staticClass:"flex-grow"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-row gap-1"},t._l(t.assignees,(function(t){return n("bmfsfj-user-icon",{key:t,attrs:{"user-id":t}})})),1)]),t._v(" "),n("div",{staticClass:"w-12 flex h-full"},[n("font-awesome-icon",{staticStyle:{margin:"auto"},attrs:{size:"lg","fixed-width":"",icon:t.faChevronRight}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjCheckbox:n(400).default,BmfsfjIconBarModule:n(401).default,BmfsfjUserIcon:n(385).default,BmfsfjTodoLink:n(425).default})},474:function(t,e,n){"use strict";n.r(e);n(39),n(104);var r=n(6),o=n(466),c=n(497),l=n(471),f=n(496),d=n(467),tr=n(472),v=n(20),m=n(390),j=n(387),O=n(389),h=n(422),y=n(251),x=n(366),w={de:l.a,en:f.a,ru:d.a,tr:tr.a},_=Object(r.b)({setup:function(){var t=Object(x.a)(),e=Object(h.a)(),n=e.search,l=e.module,f=e.user,d=e.done,_=Object(j.b)(l,n,f,d),k=Object(O.c)(),C=Object(y.useUserStore)(),S=Object(r.a)((function(){var t;return Object(m.c)(_.value,new Date(null!==(t=C.expectedBirthday)&&void 0!==t?t:0))}));return{selectedModule:l,todos:_,groupedTodos:S,modules:k,faPlus:v.x,formatDistance:Object(o.a)({locale:w[t.locale]})(new Date),notImplemented:function(){return alert("Diese funktion hat es leider nicht in den Prototypen geschafft :(")},isInFuture:Object(c.a)(new Date)}}}),k=n(37),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("bmfsfj-todos-filter"),t._v(" "),n("div",{staticClass:"flex flex-col"},t._l(t.groupedTodos,(function(e){return n("div",{key:e.group.getTime(),staticClass:"flex flex-col"},[t.isInFuture(e.group)?n("span",{staticClass:"mt-1"},[t._v("in "+t._s(t.formatDistance(e.group)))]):t._e(),t._v(" "),t._l(e.todos,(function(t){return n("bmfsfj-todo",{key:t.id,staticClass:"mt-2",attrs:{"todo-id":t.id}})}))],2)})),0),t._v(" "),n("button",{staticClass:"absolute shadow-lg bottom-3 w-5 h-5 rounded-full bg-primary-500",staticStyle:{left:"calc(50% - 25px)"},on:{click:t.notImplemented}},[n("font-awesome-icon",{staticClass:"fa-lg text-white",attrs:{icon:t.faPlus}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjTodosFilter:n(439).default,BmfsfjTodo:n(441).default})}}]);