(window.webpackJsonp=window.webpackJsonp||[]).push([[21,6,10,13,16,19],{365:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return l}));var n=r(7),o=(r(45),r(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}function l(t){var e=Object(o.k)([]);return Object(o.s)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t();case 2:e.value=r.sent;case 3:case"end":return r.stop()}}),r)})))),e}},366:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l}));var n=r(6),o=r(365),c=Object(n.m)("$content",!1),l=function(t){var e=c();return Object(o.b)((function(){return e(Object(n.i)(t)).fetch()}))}},372:function(t,e,r){"use strict";r.d(e,"a",(function(){return w})),r.d(e,"b",(function(){return k})),r.d(e,"c",(function(){return _}));r(32),r(23),r(34),r(33),r(47);var n=r(20),o=r(7),c=(r(45),r(37),r(375),r(376),r(46),r(0)),l=r(250),f=(r(38),r(104),"todos");function d(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)}(content))throw new Error("Non task content document");return{document:content,id:content.id,title:content.title,modules:content.modules}}function v(t,e){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(f,{deep:!0}).where({id:r}).limit(1).fetch();case 2:if(n=t.sent,Array.isArray(n)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===n.length){t.next=7;break}throw new Error("Found no task with the id ".concat(r));case 7:return t.abrupt("return",d(n[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return O.apply(this,arguments)}function O(){return O=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:{},n=c.length>2&&void 0!==c[2]?c[2]:null,t.next=4,e(f,{deep:!0}).without("data").where(r).search(n).fetch();case 4:if(o=t.sent,Array.isArray(o)){t.next=7;break}throw new Error("Expected array of task contents");case 7:return t.abrupt("return",o.map((function(content){return d(content)})));case 8:case"end":return t.stop()}}),t)}))),O.apply(this,arguments)}function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function w(t,e,r){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(regeneratorRuntime.mark((function t(e,r,n){var o,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Object(c.p)(Object(l.getTask)(e,n)),t.next=3,v(r,n);case 3:return f=t.sent,t.abrupt("return",Object(c.j)(x(x({},o),f)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){return C.apply(this,arguments)}function C(){return C=Object(o.a)(regeneratorRuntime.mark((function t(e,r){var n,o,f,d=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.length>2&&void 0!==d[2]?d[2]:{},o=d.length>3&&void 0!==d[3]?d[3]:null,t.next=4,m(r,n,o);case 4:return f=t.sent,t.abrupt("return",f.map((function(t){return Object(c.j)(x(x({},t),Object(c.p)(Object(l.getTask)(e,t.id))))})));case 6:case"end":return t.stop()}}),t)}))),C.apply(this,arguments)}function _(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}},373:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"b",(function(){return h}));var n=r(0),o=r(366),c=r(372),l=r(365),f=r(250);function d(){return{store:Object(f.useTodosStore)(),$content:Object(o.a)()}}var v=function(t){var e=d(),r=e.store,o=e.$content;return Object(l.b)((function(){return Object(c.a)(r,o,Object(n.q)(t))}))};function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=d(),o=r.store,f=r.$content;return Object(l.a)((function(){return Object(c.b)(o,f,Object(n.q)(t),Object(n.q)(e))}))}},374:function(t,e,r){"use strict";r.d(e,"d",(function(){return h})),r.d(e,"c",(function(){return m})),r.d(e,"a",(function(){return O})),r.d(e,"b",(function(){return j}));r(46),r(85);var n=r(0),o=r(372),c=r(373),l=r(7);r(45);function f(){return(f=Object(l.a)(regeneratorRuntime.mark((function t(e){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("modules").fetch();case 2:if(content=t.sent,!Array.isArray(content)){t.next=5;break}throw new TypeError("Unexpected array for modules");case 5:return t.abrupt("return",content.body);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=r(366),v=r(365);function h(){var t=Object(d.a)();return Object(v.a)((function(){return function(t){return f.apply(this,arguments)}(t)}))}function m(){var t=h();return Object(n.a)((function(){return t.value.map((function(t){return t.id}))}))}function O(t){var e=h();return Object(n.a)((function(){return Object(n.q)(e).find((function(e){return e.id===Object(n.q)(t)}))}))}function j(t){var e=function(t){return Object(c.b)({modules:{$contains:Object(n.q)(t)}})}(t);return Object(n.a)((function(){return Object(o.c)(Object(n.q)(e))}))}},375:function(t,e,r){r(3)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},376:function(t,e,r){"use strict";var n=r(30),o=r(9),c=r(105),l=r(40),f=r(25),d=r(77),v=r(166),h=r(132),m=r(252),O=r(8),j=r(65),x=r(86).f,w=r(55).f,y=r(35).f,k=r(253).trim,C="Number",_=o.Number,N=_.prototype,E=d(j(N))==C,I=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,o,c,l,f,code,d=m(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=k(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c(C,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var S,A=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof A&&(E?O((function(){N.valueOf.call(r)})):d(r)!=C)?v(new _(I(e)),r,A):I(e)},R=n?x(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;R.length>T;T++)f(_,S=R[T])&&!f(A,S)&&y(A,S,w(_,S));A.prototype=N,N.constructor=A,l(o,C,A)}},377:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(21),c=r(382),l=Object(n.d)({inheritAttrs:!1,props:{label:{type:String,default:null},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var r=e.attrs,l=Object(n.o)(t,"value");return{attrs:r,checkboxIcon:Object(n.a)((function(){return null==Object(n.q)(l)?o.x:Object(n.q)(l)?o.j:c.a}))}}}),f=r(36),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{staticClass:"flex flex-row items-center"},[r("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),r("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),t._t("default",(function(){return[r("span",{staticClass:"ml-1"},[t._v(t._s(t.label))])]}))],2)])}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,r){var content=r(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("7908ca4c",content,!0,{sourceMap:!1})},379:function(t,e,r){var content=r(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("440debd6",content,!0,{sourceMap:!1})},383:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(165),c=Object(n.b)({props:{todo:{type:String,default:null},page:{type:String,default:null}},setup:function(t){var e=t.todo,r=t.page,c=Object(o.b)();return{to:Object(n.a)((function(){return c(null==r?{name:"tasks-task",params:{task:e}}:{name:"tasks-task-page",params:{page:r}})}))}}}),l=r(36),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{attrs:{to:t.to}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,r){var content=r(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("36b4ae02",content,!0,{sourceMap:!1})},387:function(t,e,r){"use strict";var n=r(3),o=r(78),c=r(388),l=r(255),f=r(8),d=1..toFixed,v=Math.floor,h=function(t,e,r){return 0===e?r:e%2==1?h(t,e-1,r*t):h(t*t,e/2,r)},m=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=v(n/1e7)},O=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=v(r/t),r=r%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+l.call("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f((function(){d.call({})}))},{toFixed:function(t){var e,r,n,f,d=c(this),v=o(t),data=[0,0,0,0,0,0],x="",w="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(x="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*h(2,69,1))-69)<0?d*h(2,-e,1):d/h(2,e,1),r*=4503599627370496,(e=52-e)>0){for(m(data,0,r),n=v;n>=7;)m(data,1e7,0),n-=7;for(m(data,h(10,n,1),0),n=e-1;n>=23;)O(data,1<<23),n-=23;O(data,1<<n),m(data,1,1),O(data,2),w=j(data)}else m(data,0,r),m(data,1<<-e,0),w=j(data)+l.call("0",v);return w=v>0?x+((f=w.length)<=v?"0."+l.call("0",v-f)+w:w.slice(0,f-v)+"."+w.slice(f-v)):x+w}})},388:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},389:function(t,e,r){"use strict";r(378)},390:function(t,e,r){var n=r(61)((function(i){return i[1]}));n.push([t.i,'.category-card[data-v-64fa5841]{position:relative;height:6rem;border-radius:0.75rem;border-width:3px;border-color:var(--border-color)}.growing-background[data-v-64fa5841]{display:flex;height:100%;width:100%}.growing-background[data-v-64fa5841]:before{border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem;content:"";position:absolute;top:0;left:0;width:var(--background-width);height:100%;z-index:-1;background-color:var(--color)}',""]),n.locals={},t.exports=n},391:function(t,e,r){"use strict";r(379)},392:function(t,e,r){var n=r(61)((function(i){return i[1]}));n.push([t.i,".module-icon[data-v-4f7fac32]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));background-color:var(--color)}.module-icon[data-v-4f7fac32]:nth-child(3){border-bottom-left-radius:0.75rem}",""]),n.locals={},t.exports=n},397:function(t,e,r){"use strict";r.r(e);r(387);var n=r(6),o=r(374),c=Object(n.b)({props:{module:{default:"beruf",type:String}},setup:function(t){var e=Object(n.g)(t,"module"),r=Object(o.a)(e),c=Object(o.b)(e);return{color:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.color)&&void 0!==e?e:"#0f0"})),borderColor:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.color2)&&void 0!==e?e:"#0f0"})),icon:Object(n.a)((function(){var t,e;return null!==(e=null===(t=Object(n.i)(r))||void 0===t?void 0:t.icon)&&void 0!==e?e:"euro-sign"})),percentDone:Object(n.a)((function(){return Object(n.i)(c).toFixed(0)}))}}}),l=c,f=(r(389),r(36)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{attrs:{to:t.localeRoute("/tasks?module="+t.module)}},[r("div",{staticClass:"category-card text-black",style:"--border-color: "+t.borderColor+"; --color: "+t.color+";"},[r("div",{staticClass:"growing-background gap-4 text-1.5xl px-4 align-middle",style:"--background-width: "+t.percentDone+"%;"},[r("font-awesome-icon",{staticClass:"my-auto",attrs:{icon:t.icon}}),t._v(" "),r("span",{staticClass:"flex-grow my-auto"},[t._v("\n        "+t._s(t.$t("modules."+t.module))+"\n      ")]),t._v(" "),r("span",{staticClass:"my-auto"},[t._v(t._s(t.percentDone)+"%")])],1)])])}),[],!1,null,"64fa5841",null);e.default=component.exports},398:function(t,e,r){"use strict";r.r(e);r(37),r(85);var n=r(6),o=r(21),c=r(250),l=r(374),f=r(373);function d(t){var e=Object(l.d)();return Object(n.a)((function(){if(null===t.value)return[];var r=t.value.modules;return e.value.filter((function(t){return null!=r.find((function(e){return e===t.id}))}))}))}var v=Object(n.b)({props:{task:{default:"mutterschaftsgeld-beantragen",type:String,required:!0}},setup:function(t){var e=Object(n.g)(t,"task"),r=Object(f.a)(e),l=Object(c.useTodosStore)();return{taskId:e,title:Object(n.a)((function(){var t;return null===(t=Object(n.i)(r))||void 0===t?void 0:t.title})),finished:Object(n.a)((function(){var t;return null===(t=Object(n.i)(r))||void 0===t?void 0:t.finished})),modules:d(r),updateFinished:function(t){return l.updateTodoFinished({todoId:Object(n.i)(e),finished:t})},faChevronRight:o.l}}}),h=(r(391),r(36)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex"},[r("div",{staticClass:"flex"},[r("bmfsfj-checkbox",{staticClass:"m-auto",attrs:{value:t.finished},on:{input:t.updateFinished}})],1),t._v(" "),r("todo-link",{staticClass:"flex h-24 bg-gray-200 rounded-xl flex-grow",attrs:{todo:t.taskId}},[r("div",{staticClass:"module-icon-wrapper w-8 flex flex-col "},t._l(t.modules,(function(t){return r("div",{key:t.id,staticClass:"module-icon w-8 h-8 flex first:rounded-tl-xl",style:"--color: "+t.color2},[r("font-awesome-icon",{staticStyle:{margin:"auto"},attrs:{"fixed-width":"",icon:t.icon}})],1)})),0),t._v(" "),r("div",{staticClass:"flex-grow p-2"},[r("h4",[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),r("div",{staticClass:"w-12 flex h-full"},[r("font-awesome-icon",{staticStyle:{margin:"auto"},attrs:{size:"lg","fixed-width":"",icon:t.faChevronRight}})],1)])],1)}),[],!1,null,"4f7fac32",null);e.default=component.exports;installComponents(component,{BmfsfjCheckbox:r(377).default,TodoLink:r(383).default})},400:function(t,e,r){"use strict";r(386)},401:function(t,e,r){var n=r(61)((function(i){return i[1]}));n.push([t.i,".nuxt-logo{height:180px}",""]),n.locals={},t.exports=n},406:function(t,e,r){"use strict";r.r(e);r(400);var n=r(36),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"nuxt-logo",attrs:{viewBox:"0 0 45 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z",fill:"#00DC82"}})])}),[],!1,null,null,null);e.default=component.exports},418:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(366),c=Object(n.b)({setup:function(t){return{content:Object(o.b)("hello"),task:Object(n.e)("mutterschaftsgeld")}}}),l=r(36),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtLogo"),t._v(" "),r("div",[t._v("TEST")]),t._v(" "),r("CategoryCard",{attrs:{name:"hello world"}}),t._v(" "),r("h2",[t._v(" "+t._s(null!=t.content?t.content.title:"")+" ")]),t._v(" "),r("div",{staticClass:"mx-2"},[r("bmfsfj-checkbox",{attrs:{label:"TEST 1",value:!1}}),t._v(" "),r("nuxt-content",{attrs:{document:t.content}})],1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],attrs:{type:"text"},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}}),t._v(" "),r("bmfsfj-task",{attrs:{task:t.task}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NuxtLogo:r(406).default,CategoryCard:r(397).default,BmfsfjCheckbox:r(377).default,BmfsfjTask:r(398).default})}}]);