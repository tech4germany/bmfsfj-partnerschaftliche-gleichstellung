(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{365:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return f}));var n=r(7),o=(r(46),r(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}function f(t){var e=Object(o.k)([]);return Object(o.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}},366:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return f}));var n=r(6),o=r(365),c=Object(n.m)("$content",!1),f=function(t){var e=c();return Object(o.b)((function(){return e(Object(n.i)(t)).fetch()}))}},369:function(t,e,r){"use strict";r.d(e,"a",(function(){return N})),r.d(e,"b",(function(){return A})),r.d(e,"d",(function(){return C})),r.d(e,"c",(function(){return B}));r(29),r(23),r(35),r(31),r(40);var n=r(12),o=r(63),c=r(15),f=r(7),d=(r(46),r(34),r(390),r(391),r(47),r(85),r(51),r(104),r(251),r(0)),l=r(489),v=r(486),O=r(490),m=r(491),j=r(492),h=r(250),w=(r(38),r(105),"todos");function x(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)&&"recommendedDateFromExpectedBirth"in content}(content))throw new Error("Non task content document: ".concat(JSON.stringify(content)));return{document:content,id:content.id,title:content.title,modules:content.modules,recommendedDateFromExpectedBirth:content.recommendedDateFromExpectedBirth}}function y(t,e){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(w,{deep:!0}).where({id:r}).limit(1).fetch();case 2:if(n=t.sent,Array.isArray(n)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===n.length){t.next=7;break}throw new Error("Found no task with the id ".concat(r));case 7:return t.abrupt("return",x(n[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t){return E.apply(this,arguments)}function E(){return E=Object(f.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:{},n=c.length>2&&void 0!==c[2]?c[2]:null,t.next=4,e(w,{deep:!0}).without("data").where(r).search(n).fetch();case 4:if(o=t.sent,Array.isArray(o)){t.next=7;break}throw new Error("Expected array of task contents");case 7:return t.abrupt("return",o.map((function(content){return x(content)})));case 8:case"end":return t.stop()}}),t)}))),E.apply(this,arguments)}function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function F(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function N(t,e,r){return _.apply(this,arguments)}function _(){return(_=Object(f.a)(regeneratorRuntime.mark((function t(e,r,n){var o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Object(d.p)(Object(h.getTask)(e,n)),t.next=3,y(r,n);case 3:return c=t.sent,t.abrupt("return",Object(d.j)(F(F({},o),c)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(t,e){return P.apply(this,arguments)}function P(){return P=Object(f.a)(regeneratorRuntime.mark((function t(e,r){var n,o,c,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=f.length>2&&void 0!==f[2]?f[2]:{},o=f.length>3&&void 0!==f[3]?f[3]:null,t.next=4,R(r,n,o);case 4:if(c=t.sent.map((function(t){return Object(d.j)(F(F({},t),Object(d.p)(Object(h.getTask)(e,t.id))))})),""!==o){t.next=7;break}return t.abrupt("return",c.sort(S(new Date)));case 7:return t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}function C(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}function S(t){return function(e,r){return Object(l.a)(Object(v.a)(e.recommendedDateFromExpectedBirth)(t))(Object(v.a)(r.recommendedDateFromExpectedBirth)(t))}}var $=[{months:-12},{months:-9},{months:-6},{months:-3},{weeks:-2},{weeks:-1},{days:-1},{days:1},{weeks:1},{months:1}];function B(t,e){var r=function(t){return $.map((function(e){return Object(v.a)(e)(t)}))}(e),f=function(t){return function(e){var r;return null!==(r=t.find((function(t){return Object(O.a)(t)(e)})))&&void 0!==r?r:t[0]}}(r),d=t.reduce((function(t,r){var n,d=Object(v.a)(r.recommendedDateFromExpectedBirth)(e),l=f(d).getTime(),O=Object(m.a)(Number.isNaN(l)?0:l);return F(F({},t),{},Object(c.a)({},O,[].concat(Object(o.a)(null!==(n=t[O])&&void 0!==n?n:[]),[r])))}),{});return Object.entries(d).map((function(t){var e=Object(n.a)(t,2),r=e[0],o=e[1];return{group:Object(j.a)(r),todos:o}}))}},372:function(t,e,r){"use strict";r.d(e,"c",(function(){return m})),r.d(e,"a",(function(){return j})),r.d(e,"b",(function(){return h}));r(47),r(85),r(34);var n=r(0),o=r(369),c=r(373),f=r(7);r(46);function d(){return(d=Object(f.a)(regeneratorRuntime.mark((function t(e){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("modules").fetch();case 2:if(content=t.sent,!Array.isArray(content)){t.next=5;break}throw new TypeError("Unexpected array for modules");case 5:return t.abrupt("return",content.body);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l=r(366),v=r(365);function O(){var t=Object(l.a)();return Object(v.a)((function(){return function(t){return d.apply(this,arguments)}(t)}))}function m(){var t=O();return Object(n.a)((function(){return t.value.map((function(t){return t.id}))}))}function j(t){var e=O();return Object(n.a)((function(){return Object(n.q)(e).find((function(e){return e.id===Object(n.q)(t)}))}))}function h(t){var e=function(t){return Object(c.b)(Object(n.q)(t))}(t);return Object(n.a)((function(){return Object(o.d)(Object(n.q)(e))}))}},373:function(t,e,r){"use strict";r.d(e,"a",(function(){return O})),r.d(e,"b",(function(){return m}));var n=r(7),o=(r(46),r(34),r(0)),c=r(366),f=r(369),d=r(365),l=r(250);function v(){return{store:Object(l.useTodosStore)(),$content:Object(c.a)()}}var O=function(t){var e=v(),r=e.store,n=e.$content;return Object(d.b)((function(){return Object(f.a)(r,n,Object(o.q)(t))}))};function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=v(),O=l.store,m=l.$content;return Object(d.a)(Object(n.a)(regeneratorRuntime.mark((function n(){var d,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d=Object(o.q)(t)?{modules:{$contains:Object(o.q)(t)}}:{},n.next=3,Object(f.b)(O,m,d,Object(o.q)(e));case 3:return l=n.sent,n.abrupt("return",l.filter((function(t){return null==Object(o.q)(r)||!0===t.assignees[Object(o.q)(r)]})).filter((function(t){return null==Object(o.q)(c)||!Object(o.q)(c)||t.finished})));case 5:case"end":return n.stop()}}),n)}))))}},396:function(t,e,r){var content=r(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("32027697",content,!0,{sourceMap:!1})},407:function(t,e,r){"use strict";var n=r(3),o=r(77),c=r(408),f=r(255),d=r(8),l=1..toFixed,v=Math.floor,O=function(t,e,r){return 0===e?r:e%2==1?O(t,e-1,r*t):O(t*t,e/2,r)},m=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=v(n/1e7)},j=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=v(r/t),r=r%t*1e7},h=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+f.call("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){l.call({})}))},{toFixed:function(t){var e,r,n,d,l=c(this),v=o(t),data=[0,0,0,0,0,0],w="",x="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(w="-",l=-l),l>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(l*O(2,69,1))-69)<0?l*O(2,-e,1):l/O(2,e,1),r*=4503599627370496,(e=52-e)>0){for(m(data,0,r),n=v;n>=7;)m(data,1e7,0),n-=7;for(m(data,O(10,n,1),0),n=e-1;n>=23;)j(data,1<<23),n-=23;j(data,1<<n),m(data,1,1),j(data,2),x=h(data)}else m(data,0,r),m(data,1<<-e,0),x=h(data)+f.call("0",v);return x=v>0?w+((d=x.length)<=v?"0."+f.call("0",v-d)+x:x.slice(0,d-v)+"."+x.slice(d-v)):w+x}})},408:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},409:function(t,e,r){"use strict";r(396)},410:function(t,e,r){var n=r(61)((function(i){return i[1]}));n.push([t.i,'.category-card[data-v-1a15b376]{position:relative;height:6rem;border-radius:0.75rem;border-width:3px;border-color:var(--border-color)}.growing-background[data-v-1a15b376]{display:flex;height:100%;width:100%}.growing-background *[data-v-1a15b376]{z-index:1}.growing-background[data-v-1a15b376]:before{border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem;content:"";position:absolute;top:0;left:0;width:var(--background-width);height:100%;z-index:0;background-color:var(--color)}',""]),n.locals={},t.exports=n},421:function(t,e,r){"use strict";r.r(e);r(407);var n=r(6),o=r(372),c=Object(n.b)({props:{module:{default:"beruf",type:String}},setup:function(t){var e=Object(n.g)(t,"module"),r=Object(o.a)(e),c=Object(o.b)(e);return{color:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.color)&&void 0!==e?e:"#0f0"})),borderColor:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.color2)&&void 0!==e?e:"#0f0"})),icon:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.icon)&&void 0!==e?e:"euro-sign"})),percentDone:Object(n.a)((function(){return Object(n.i)(c).toFixed(0)}))}}}),f=c,d=(r(409),r(37)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{attrs:{to:t.localeRoute("/tasks?module="+t.module)}},[r("div",{staticClass:"category-card text-black",style:"--border-color: "+t.borderColor+"; --color: "+t.color+";"},[r("div",{staticClass:"growing-background gap-4 text-1.5xl px-4 align-middle",style:"--background-width: "+t.percentDone+"%;"},[r("font-awesome-icon",{staticClass:"my-auto",attrs:{icon:t.icon}}),t._v(" "),r("span",{staticClass:"flex-grow my-auto"},[t._v("\n        "+t._s(t.$t("modules."+t.module))+"\n      ")]),t._v(" "),r("span",{staticClass:"my-auto"},[t._v(t._s(t.percentDone)+"%")])],1)])])}),[],!1,null,"1a15b376",null);e.default=component.exports}}]);