(window.webpackJsonp=window.webpackJsonp||[]).push([[30,9],{365:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return f}));var n=r(7),o=(r(44),r(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}function f(t){var e=Object(o.k)([]);return Object(o.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}},366:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return f}));var n=r(6),o=r(365),c=Object(n.m)("$content",!1),f=function(t){var e=c();return Object(o.b)((function(){return e(Object(n.i)(t)).fetch()}))}},372:function(t,e,r){"use strict";r.d(e,"a",(function(){return y})),r.d(e,"b",(function(){return k})),r.d(e,"c",(function(){return E}));r(30),r(21),r(32),r(31),r(46);var n=r(19),o=r(7),c=(r(44),r(36),r(375),r(376),r(45),r(0)),f=r(250),l=(r(37),r(104),"todos");function d(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)}(content))throw new Error("Non task content document");return{document:content,id:content.id,title:content.title,modules:content.modules}}function v(t,e){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(l,{deep:!0}).where({id:r}).limit(1).fetch();case 2:if(n=t.sent,Array.isArray(n)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===n.length){t.next=7;break}throw new Error("Found no task with the id ".concat(r));case 7:return t.abrupt("return",d(n[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return j.apply(this,arguments)}function j(){return j=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:{},n=c.length>2&&void 0!==c[2]?c[2]:null,t.next=4,e(l,{deep:!0}).without("data").where(r).search(n).fetch();case 4:if(o=t.sent,Array.isArray(o)){t.next=7;break}throw new Error("Expected array of task contents");case 7:return t.abrupt("return",o.map((function(content){return d(content)})));case 8:case"end":return t.stop()}}),t)}))),j.apply(this,arguments)}function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function y(t,e,r){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(regeneratorRuntime.mark((function t(e,r,n){var o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Object(c.p)(Object(f.getTask)(e,n)),t.next=3,v(r,n);case 3:return l=t.sent,t.abrupt("return",Object(c.j)(w(w({},o),l)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){return N.apply(this,arguments)}function N(){return N=Object(o.a)(regeneratorRuntime.mark((function t(e,r){var n,o,l,d=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.length>2&&void 0!==d[2]?d[2]:{},o=d.length>3&&void 0!==d[3]?d[3]:null,t.next=4,h(r,n,o);case 4:return l=t.sent,t.abrupt("return",l.map((function(t){return Object(c.j)(w(w({},t),Object(c.p)(Object(f.getTask)(e,t.id))))})));case 6:case"end":return t.stop()}}),t)}))),N.apply(this,arguments)}function E(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}},373:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"b",(function(){return O}));var n=r(0),o=r(366),c=r(372),f=r(365),l=r(250);function d(){return{store:Object(l.useTodosStore)(),$content:Object(o.a)()}}var v=function(t){var e=d(),r=e.store,o=e.$content;return Object(f.b)((function(){return Object(c.a)(r,o,Object(n.q)(t))}))};function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=d(),o=r.store,l=r.$content;return Object(f.a)((function(){return Object(c.b)(o,l,Object(n.q)(t),Object(n.q)(e))}))}},374:function(t,e,r){"use strict";r.d(e,"d",(function(){return O})),r.d(e,"c",(function(){return h})),r.d(e,"a",(function(){return j})),r.d(e,"b",(function(){return m}));r(45),r(85);var n=r(0),o=r(372),c=r(373),f=r(7);r(44);function l(){return(l=Object(f.a)(regeneratorRuntime.mark((function t(e){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("modules").fetch();case 2:if(content=t.sent,!Array.isArray(content)){t.next=5;break}throw new TypeError("Unexpected array for modules");case 5:return t.abrupt("return",content.body);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=r(366),v=r(365);function O(){var t=Object(d.a)();return Object(v.a)((function(){return function(t){return l.apply(this,arguments)}(t)}))}function h(){var t=O();return Object(n.a)((function(){return t.value.map((function(t){return t.id}))}))}function j(t){var e=O();return Object(n.a)((function(){return Object(n.q)(e).find((function(e){return e.id===Object(n.q)(t)}))}))}function m(t){var e=function(t){return Object(c.b)({modules:{$contains:Object(n.q)(t)}})}(t);return Object(n.a)((function(){return Object(o.c)(Object(n.q)(e))}))}},375:function(t,e,r){r(3)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},376:function(t,e,r){"use strict";var n=r(27),o=r(9),c=r(105),f=r(39),l=r(23),d=r(77),v=r(166),O=r(132),h=r(252),j=r(8),m=r(65),w=r(86).f,y=r(55).f,x=r(33).f,k=r(253).trim,N="Number",E=o.Number,_=E.prototype,I=d(m(_))==N,A=function(t){if(O(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,o,c,f,l,code,d=h(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=k(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(f=(c=d.slice(2)).length,l=0;l<f;l++)if((code=c.charCodeAt(l))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c(N,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var R,C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(I?j((function(){_.valueOf.call(r)})):d(r)!=N)?v(new E(A(e)),r,C):A(e)},F=n?w(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;F.length>S;S++)l(E,R=F[S])&&!l(C,R)&&x(C,R,y(E,R));C.prototype=_,_.constructor=C,f(o,N,C)}},377:function(t,e,r){var content=r(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("7908ca4c",content,!0,{sourceMap:!1})},384:function(t,e,r){"use strict";var n=r(3),o=r(78),c=r(385),f=r(254),l=r(8),d=1..toFixed,v=Math.floor,O=function(t,e,r){return 0===e?r:e%2==1?O(t,e-1,r*t):O(t*t,e/2,r)},h=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=v(n/1e7)},j=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=v(r/t),r=r%t*1e7},m=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+f.call("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){d.call({})}))},{toFixed:function(t){var e,r,n,l,d=c(this),v=o(t),data=[0,0,0,0,0,0],w="",y="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(w="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*O(2,69,1))-69)<0?d*O(2,-e,1):d/O(2,e,1),r*=4503599627370496,(e=52-e)>0){for(h(data,0,r),n=v;n>=7;)h(data,1e7,0),n-=7;for(h(data,O(10,n,1),0),n=e-1;n>=23;)j(data,1<<23),n-=23;j(data,1<<n),h(data,1,1),j(data,2),y=m(data)}else h(data,0,r),h(data,1<<-e,0),y=m(data)+f.call("0",v);return y=v>0?w+((l=y.length)<=v?"0."+f.call("0",v-l)+y:y.slice(0,l-v)+"."+y.slice(l-v)):w+y}})},385:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},386:function(t,e,r){"use strict";r(377)},387:function(t,e,r){var n=r(61)((function(i){return i[1]}));n.push([t.i,'.category-card[data-v-64fa5841]{position:relative;height:6rem;border-radius:0.75rem;border-width:3px;border-color:var(--border-color)}.growing-background[data-v-64fa5841]{display:flex;height:100%;width:100%}.growing-background[data-v-64fa5841]:before{border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem;content:"";position:absolute;top:0;left:0;width:var(--background-width);height:100%;z-index:-1;background-color:var(--color)}',""]),n.locals={},t.exports=n},391:function(t,e,r){"use strict";r.r(e);r(384);var n=r(6),o=r(374),c=Object(n.b)({props:{module:{default:"beruf",type:String}},setup:function(t){var e=Object(n.g)(t,"module"),r=Object(o.a)(e),c=Object(o.b)(e);return{color:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.color)&&void 0!==e?e:"#0f0"})),borderColor:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.color2)&&void 0!==e?e:"#0f0"})),icon:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.icon)&&void 0!==e?e:"euro-sign"})),percentDone:Object(n.a)((function(){return Object(n.i)(c).toFixed(0)}))}}}),f=c,l=(r(386),r(35)),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{attrs:{to:t.localeRoute("/tasks?module="+t.module)}},[r("div",{staticClass:"category-card text-black",style:"--border-color: "+t.borderColor+"; --color: "+t.color+";"},[r("div",{staticClass:"growing-background gap-4 text-1.5xl px-4 align-middle",style:"--background-width: "+t.percentDone+"%;"},[r("font-awesome-icon",{staticClass:"my-auto",attrs:{icon:t.icon}}),t._v(" "),r("span",{staticClass:"flex-grow my-auto"},[t._v("\n        "+t._s(t.$t("modules."+t.module))+"\n      ")]),t._v(" "),r("span",{staticClass:"my-auto"},[t._v(t._s(t.percentDone)+"%")])],1)])])}),[],!1,null,"64fa5841",null);e.default=component.exports},412:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(374),c=Object(n.b)({setup:function(t){return{modules:Object(o.c)()}}}),f=r(35),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col gap-2 overflow-auto"},t._l(t.modules,(function(t){return r("category-card",{key:t,attrs:{module:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategoryCard:r(391).default})}}]);