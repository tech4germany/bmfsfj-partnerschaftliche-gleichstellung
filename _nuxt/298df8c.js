(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{367:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return f})),r.d(e,"b",(function(){return l}));var n=r(63),o=(r(51),r(6)),c=Object(o.m)("$i18n",!1),f=Object(o.m)("switchLocalePath",!1),l=function(){var t=c();return[t.locale].concat(Object(n.a)(t.fallbackLocale))}},369:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return f}));var n=r(7),o=(r(46),r(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}function f(t){var e=Object(o.k)([]);return Object(o.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}},370:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d}));var n=r(6),o=r(371),c=r(367),f=r(369),l=Object(n.m)("$content",!1),d=function(t){var e=l(),r=Object(c.b)();return Object(f.b)((function(){return Object(o.a)((function(t){return e(t).fetch()}),Object(n.i)(t),r)}))}},371:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));r(38),r(18),r(29),r(40),r(25),r(23),r(41),r(42),r(26);var n=r(7);r(46),r(51);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,f=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return f=t.done,t},e:function(t){l=!0,o=t},f:function(){try{f||null==r.return||r.return()}finally{if(l)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r,n){var c,f,l,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=o(n),t.prev=1,c.s();case 3:if((f=c.n()).done){t.next=19;break}return l=f.value,t.prev=5,t.next=8,e("".concat(l,"/").concat(r));case 8:if(!(content=t.sent)||!(null==content.length||content.length>0)){t.next=11;break}return t.abrupt("return",content);case 11:throw new Error("No translation for ".concat(r," in ").concat(l));case 14:t.prev=14,t.t0=t.catch(5),console.warn("No translation for ".concat(r," in ").concat(l,"."));case 17:t.next=3;break;case 19:t.next=24;break;case 21:t.prev=21,t.t1=t.catch(1),c.e(t.t1);case 24:return t.prev=24,c.f(),t.finish(24);case 27:throw new Error("Page not found in any fitting translation: ".concat(r,", tried locales: ").concat(n));case 28:case"end":return t.stop()}}),t,null,[[1,21,24,27],[5,14]])})));return function(e,r,n){return t.apply(this,arguments)}}()},389:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return O}));var n=r(7),o=(r(46),r(34),r(0)),c=r(370),f=r(367),l=r(400),d=r(369),v=r(250);function h(){return{store:Object(v.useTodosStore)(),$content:Object(c.a)()}}var m=function(t){var e=h(),r=e.store,n=e.$content,c=Object(f.b)();return Object(d.b)((function(){return Object(l.a)(r,n,Object(o.q)(t),c)}))};function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,v=h(),m=v.store,O=v.$content,j=Object(f.b)();return Object(d.a)(Object(n.a)(regeneratorRuntime.mark((function n(){var f,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f=Object(o.q)(t)?{modules:{$contains:Object(o.q)(t)}}:{},n.next=3,Object(l.b)(m,O,f,Object(o.q)(e),j);case 3:return d=n.sent,n.abrupt("return",d.filter((function(t){return null==Object(o.q)(r)||!0===t.assignees[Object(o.q)(r)]})).filter((function(t){return null==Object(o.q)(c)||!Object(o.q)(c)||t.finished})));case 5:case"end":return n.stop()}}),n)}))))}},399:function(t,e,r){"use strict";r.d(e,"c",(function(){return m})),r.d(e,"a",(function(){return O})),r.d(e,"b",(function(){return j}));r(47),r(85),r(34);var n=r(0),o=r(400),c=r(389),f=r(7);r(46);function l(){return(l=Object(f.a)(regeneratorRuntime.mark((function t(e){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("modules").fetch();case 2:if(content=t.sent,!Array.isArray(content)){t.next=5;break}throw new TypeError("Unexpected array for modules");case 5:return t.abrupt("return",content.body);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=r(370),v=r(369);function h(){var t=Object(d.a)();return Object(v.a)((function(){return function(t){return l.apply(this,arguments)}(t)}))}function m(){var t=h();return Object(n.a)((function(){return t.value.map((function(t){return t.id}))}))}function O(t){var e=h();return Object(n.a)((function(){return Object(n.q)(e).find((function(e){return e.id===Object(n.q)(t)}))}))}function j(t){var e=function(t){return Object(c.b)(Object(n.q)(t))}(t);return Object(n.a)((function(){return Object(o.d)(Object(n.q)(e))}))}},400:function(t,e,r){"use strict";r.d(e,"a",(function(){return _})),r.d(e,"b",(function(){return T})),r.d(e,"d",(function(){return B})),r.d(e,"c",(function(){return U}));r(30),r(23),r(35),r(31),r(43);var n=r(12),o=r(63),c=r(15),f=r(7),l=(r(46),r(34),r(423),r(424),r(47),r(85),r(51),r(104),r(254),r(0)),d=r(490),v=r(487),h=r(491),m=r(492),O=r(493),j=r(250),y=(r(39),r(105),r(166),r(18),r(25),r(167),r(168),r(169),r(170),r(171),r(172),r(173),r(174),r(175),r(176),r(177),r(178),r(179),r(26),r(38),r(29),r(40),r(41),r(42),r(371));function w(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(f)throw o}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var k="todos";function R(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)&&"recommendedDateFromExpectedBirth"in content}(content))throw new Error("Non todo content document: ".concat(JSON.stringify(content)));return{document:content,id:content.id,title:content.title,modules:content.modules,recommendedDateFromExpectedBirth:content.recommendedDateFromExpectedBirth}}function E(t,e,r){return A.apply(this,arguments)}function A(){return(A=Object(f.a)(regeneratorRuntime.mark((function t(e,r,n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.a)((function(t){return e(t,{deep:!0}).where({id:r}).limit(1).fetch()}),k,n);case 2:if(o=t.sent,Array.isArray(o)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===o.length){t.next=7;break}throw new Error("Found no todo with the id ".concat(r));case 7:return t.abrupt("return",R(o[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){return D.apply(this,arguments)}function D(){return D=Object(f.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,f,l=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},n=l.length>2&&void 0!==l[2]?l[2]:null,o=l.length>3?l[3]:void 0,c="".concat(o,"/").concat(k),t.prev=4,t.next=7,e(c,{deep:!0}).without("data").where(r).search(n).fetch();case 7:if(f=t.sent,Array.isArray(f)){t.next=10;break}throw new Error("Expected array of todo contents");case 10:return t.abrupt("return",f.map((function(content){return R(content)})));case 13:return t.prev=13,t.t0=t.catch(4),console.warn("No translation for ".concat(c," in ").concat(o,".")),t.abrupt("return",[]);case 17:case"end":return t.stop()}}),t,null,[[4,13]])}))),D.apply(this,arguments)}function F(t){return N.apply(this,arguments)}function N(){return N=Object(f.a)(regeneratorRuntime.mark((function t(e){var r,n,c,f,l,d,v,h,m,O,j=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=j.length>1&&void 0!==j[1]?j[1]:{},n=j.length>2&&void 0!==j[2]?j[2]:null,c=j.length>3?j[3]:void 0,f=new Map,l=w(c.reverse()),t.prev=5,l.s();case 7:if((d=l.n()).done){t.next=17;break}return v=d.value,t.t0=w,t.next=12,S(e,r,n,v);case 12:t.t1=t.sent,h=(0,t.t0)(t.t1);try{for(h.s();!(m=h.n()).done;)O=m.value,f.set(O.id,O)}catch(t){h.e(t)}finally{h.f()}case 15:t.next=7;break;case 17:t.next=22;break;case 19:t.prev=19,t.t2=t.catch(5),l.e(t.t2);case 22:return t.prev=22,l.f(),t.finish(22);case 25:return t.abrupt("return",Object(o.a)(f.values()));case 26:case"end":return t.stop()}}),t,null,[[5,19,22,25]])}))),N.apply(this,arguments)}function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function _(t,e,r,n){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(regeneratorRuntime.mark((function t(e,r,n,o){var c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(l.p)(Object(j.getTodo)(e,n)),t.next=3,E(r,n,o);case 3:return f=t.sent,t.abrupt("return",Object(l.j)($($({},c),f)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t,e){return I.apply(this,arguments)}function I(){return I=Object(f.a)(regeneratorRuntime.mark((function t(e,r){var n,o,c,f,d=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.length>2&&void 0!==d[2]?d[2]:{},o=d.length>3&&void 0!==d[3]?d[3]:null,c=d.length>4?d[4]:void 0,t.next=5,F(r,n,o,c);case 5:if(f=t.sent.map((function(t){return Object(l.j)($($({},t),Object(l.p)(Object(j.getTodo)(e,t.id))))})),""!==o){t.next=8;break}return t.abrupt("return",f.sort(M(new Date)));case 8:return t.abrupt("return",f);case 9:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}function B(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}function M(t){return function(e,r){return Object(d.a)(Object(v.a)(e.recommendedDateFromExpectedBirth)(t))(Object(v.a)(r.recommendedDateFromExpectedBirth)(t))}}var J=[{months:-12},{months:-9},{months:-6},{months:-3},{weeks:-2},{weeks:-1},{days:-1},{days:1},{weeks:1},{months:1}];function U(t,e){var r=function(t){return J.map((function(e){return Object(v.a)(e)(t)}))}(e),f=function(t){return function(e){var r;return null!==(r=t.find((function(t){return Object(h.a)(t)(e)})))&&void 0!==r?r:t[0]}}(r),l=t.reduce((function(t,r){var n,l=Object(v.a)(r.recommendedDateFromExpectedBirth)(e),d=f(l).getTime(),h=Object(m.a)(Number.isNaN(d)?0:d);return $($({},t),{},Object(c.a)({},h,[].concat(Object(o.a)(null!==(n=t[h])&&void 0!==n?n:[]),[r])))}),{});return Object.entries(l).map((function(t){var e=Object(n.a)(t,2),r=e[0],o=e[1];return{group:Object(O.a)(r),todos:o}}))}},431:function(t,e,r){var content=r(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("95f479dc",content,!0,{sourceMap:!1})},445:function(t,e,r){"use strict";var n=r(3),o=r(78),c=r(446),f=r(256),l=r(8),d=1..toFixed,v=Math.floor,h=function(t,e,r){return 0===e?r:e%2==1?h(t,e-1,r*t):h(t*t,e/2,r)},m=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=v(n/1e7)},O=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=v(r/t),r=r%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+f.call("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){d.call({})}))},{toFixed:function(t){var e,r,n,l,d=c(this),v=o(t),data=[0,0,0,0,0,0],y="",w="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(y="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*h(2,69,1))-69)<0?d*h(2,-e,1):d/h(2,e,1),r*=4503599627370496,(e=52-e)>0){for(m(data,0,r),n=v;n>=7;)m(data,1e7,0),n-=7;for(m(data,h(10,n,1),0),n=e-1;n>=23;)O(data,1<<23),n-=23;O(data,1<<n),m(data,1,1),O(data,2),w=j(data)}else m(data,0,r),m(data,1<<-e,0),w=j(data)+f.call("0",v);return w=v>0?y+((l=w.length)<=v?"0."+f.call("0",v-l)+w:w.slice(0,l-v)+"."+w.slice(l-v)):y+w}})},446:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},447:function(t,e,r){"use strict";r(431)},448:function(t,e,r){var n=r(61)((function(i){return i[1]}));n.push([t.i,'.bmfsfj-module-card[data-v-74d69d38]{position:relative;height:6rem;border-radius:0.75rem;border-width:3px;border-color:var(--border-color)}.growing-background[data-v-74d69d38]{display:flex;height:100%;width:100%}.growing-background *[data-v-74d69d38]{z-index:1}.growing-background[data-v-74d69d38]:before{border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem;content:"";position:absolute;top:0;left:0;width:var(--background-width);height:100%;z-index:0;background-color:var(--color)}',""]),n.locals={},t.exports=n},457:function(t,e,r){"use strict";r.r(e);r(445);var n=r(6),o=r(399),c=Object(n.b)({props:{module:{default:"beruf",type:String}},setup:function(t){var e=Object(n.g)(t,"module"),r=Object(o.a)(e),c=Object(o.b)(e);return{color:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.color)&&void 0!==e?e:"#0f0"})),borderColor:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.color2)&&void 0!==e?e:"#0f0"})),icon:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.icon)&&void 0!==e?e:"euro-sign"})),percentDone:Object(n.a)((function(){return Object(n.i)(c).toFixed(0)}))}}}),f=c,l=(r(447),r(37)),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{attrs:{to:t.localeRoute("/todos?module="+t.module)}},[r("div",{staticClass:"bmfsfj-module-card text-black",style:"--border-color: "+t.borderColor+"; --color: "+t.color+";"},[r("div",{staticClass:"growing-background gap-4 text-1.5xl px-4 align-middle",style:"--background-width: "+t.percentDone+"%;"},[r("font-awesome-icon",{staticClass:"my-auto",attrs:{icon:t.icon}}),t._v(" "),r("span",{staticClass:"flex-grow my-auto"},[t._v("\n        "+t._s(t.$t("modules."+t.module))+"\n      ")]),t._v(" "),r("span",{staticClass:"my-auto"},[t._v(t._s(t.percentDone)+"%")])],1)])])}),[],!1,null,"74d69d38",null);e.default=component.exports}}]);