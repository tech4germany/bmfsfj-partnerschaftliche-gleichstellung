(window.webpackJsonp=window.webpackJsonp||[]).push([[40,5,6,8],{365:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return l}));var r=n(7),c=(n(46),n(0));function o(t){var e=Object(c.k)(null);return Object(c.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(c.k)([]);return Object(c.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},366:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var r=n(6),c=n(365),o=Object(r.m)("$content",!1),l=function(t){var e=o();return Object(c.b)((function(){return e(Object(r.i)(t)).fetch()}))}},372:function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return k})),n.d(e,"c",(function(){return N}));n(29),n(23),n(35),n(31),n(40);var r=n(15),c=n(7),o=(n(46),n(34),n(378),n(379),n(47),n(0)),l=n(250),f=(n(38),n(104),"todos");function d(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)}(content))throw new Error("Non task content document");return{document:content,id:content.id,title:content.title,modules:content.modules}}function v(t,e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(f,{deep:!0}).where({id:n}).limit(1).fetch();case 2:if(r=t.sent,Array.isArray(r)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===r.length){t.next=7;break}throw new Error("Found no task with the id ".concat(n));case 7:return t.abrupt("return",d(r[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return j.apply(this,arguments)}function j(){return j=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},r=o.length>2&&void 0!==o[2]?o[2]:null,t.next=4,e(f,{deep:!0}).without("data").where(n).search(r).fetch();case 4:if(c=t.sent,Array.isArray(c)){t.next=7;break}throw new Error("Expected array of task contents");case 7:return t.abrupt("return",c.map((function(content){return d(content)})));case 8:case"end":return t.stop()}}),t)}))),j.apply(this,arguments)}function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function x(t,e,n){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(regeneratorRuntime.mark((function t(e,n,r){var c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(o.p)(Object(l.getTask)(e,r)),t.next=3,v(n,r);case 3:return f=t.sent,t.abrupt("return",Object(o.j)(y(y({},c),f)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){return _.apply(this,arguments)}function _(){return _=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r,c,f,d=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=d.length>2&&void 0!==d[2]?d[2]:{},c=d.length>3&&void 0!==d[3]?d[3]:null,t.next=4,h(n,r,c);case 4:return f=t.sent,t.abrupt("return",f.map((function(t){return Object(o.j)(y(y({},t),Object(o.p)(Object(l.getTask)(e,t.id))))})));case 6:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}function N(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}},373:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return m}));var r=n(0),c=n(366),o=n(372),l=n(365),f=n(250);function d(){return{store:Object(f.useTodosStore)(),$content:Object(c.a)()}}var v=function(t){var e=d(),n=e.store,c=e.$content;return Object(l.b)((function(){return Object(o.a)(n,c,Object(r.q)(t))}))};function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=d(),c=n.store,f=n.$content;return Object(l.a)((function(){return Object(o.b)(c,f,Object(r.q)(t),Object(r.q)(e))}))}},375:function(t,e,n){"use strict";n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return O})),n.d(e,"d",(function(){return y}));n(47),n(85),n(34);var r=n(0),c=n(372),o=n(373),l=n(7);n(46);function f(){return(f=Object(l.a)(regeneratorRuntime.mark((function t(e){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("modules").fetch();case 2:if(content=t.sent,!Array.isArray(content)){t.next=5;break}throw new TypeError("Unexpected array for modules");case 5:return t.abrupt("return",content.body);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=n(366),v=n(365);function m(){var t=Object(d.a)();return Object(v.a)((function(){return function(t){return f.apply(this,arguments)}(t)}))}function h(){var t=m();return Object(r.a)((function(){return t.value.map((function(t){return t.id}))}))}function j(t){var e=m();return Object(r.a)((function(){return Object(r.q)(e).find((function(e){return e.id===Object(r.q)(t)}))}))}function O(t){var e=function(t){return Object(o.b)({modules:{$contains:Object(r.q)(t)}})}(t);return Object(r.a)((function(){return Object(c.c)(Object(r.q)(e))}))}function y(t){var e=m();return Object(r.a)((function(){if(null===t.value)return[];var n=t.value.modules;return e.value.filter((function(t){return null!=n.find((function(e){return e===t.id}))}))}))}},377:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("4da23c95",content,!0,{sourceMap:!1})},378:function(t,e,n){n(3)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},379:function(t,e,n){"use strict";var r=n(32),c=n(9),o=n(105),l=n(41),f=n(25),d=n(77),v=n(166),m=n(132),h=n(252),j=n(8),O=n(65),y=n(86).f,x=n(55).f,w=n(36).f,k=n(255).trim,_="Number",N=c.Number,E=N.prototype,I=d(O(E))==_,A=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,c,o,l,f,code,d=h(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=k(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+d}for(l=(o=d.slice(2)).length,f=0;f<l;f++)if((code=o.charCodeAt(f))<48||code>c)return NaN;return parseInt(o,r)}return+d};if(o(_,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var C,R=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof R&&(I?j((function(){E.valueOf.call(n)})):d(n)!=_)?v(new N(A(e)),n,R):A(e)},S=r?y(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;S.length>T;T++)f(N,C=S[T])&&!f(R,C)&&w(R,C,x(N,C));R.prototype=E,E.constructor=R,l(c,_,R)}},380:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(21),o=n(388),l=Object(r.d)({inheritAttrs:!1,props:{label:{type:String,default:null},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var n=e.attrs,l=Object(r.o)(t,"value");return{attrs:n,checkboxIcon:Object(r.a)((function(){return null==Object(r.q)(l)?c.x:Object(r.q)(l)?c.j:o.a}))}}}),f=n(37),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex flex-row items-center"},[n("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),n("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),t._t("default",(function(){return[n("span",{staticClass:"ml-1"},[t._v(t._s(t.label))])]}))],2)])}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,n){"use strict";n(377)},382:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".module-icon[data-v-da5f1d12]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));background-color:var(--color)}",""]),r.locals={},t.exports=r},386:function(t,e,n){"use strict";n.r(e);var r=n(0),c=Object(r.d)({props:{modules:{type:Array,default:function(){return[]}}}}),o=(n(381),n(37)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"module-icon-wrapper w-8 flex flex-col overflow-hidden"},t._l(t.modules,(function(t){return n("div",{key:t.id,staticClass:"module-icon w-8 h-8 flex",style:"--color: "+t.color2},[n("font-awesome-icon",{staticStyle:{margin:"auto"},attrs:{"fixed-width":"",icon:t.icon}})],1)})),0)}),[],!1,null,"da5f1d12",null);e.default=component.exports},407:function(t,e,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("3642c16e",content,!0,{sourceMap:!1})},412:function(t,e,n){"use strict";n.r(e);var r=n(37),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border-2 border-primary-500 rounded-lg"},[n("header",{staticClass:"border-b-2 border-primary-500"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"mx-2 mt-1 mb-2"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},413:function(t,e,n){"use strict";n(407)},414:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".nuxt-content{display:flex;flex-direction:column;gap:10px}.nuxt-content a{--tw-text-opacity:1;color:rgba(0, 67, 119, var(--tw-text-opacity))}.nuxt-content ul{list-style-position:inside;list-style-type:disc}.nuxt-content li{display:list-item}",""]),r.locals={},t.exports=r},441:function(t,e,n){"use strict";n.r(e);var r=n(6),c=n(21),o=n(250),l=n(373),f=n(375),d=Object(r.b)({setup:function(){var t=Object(r.j)(),e=Object(r.a)((function(){return t.value.params.task})),n=Object(l.a)(e),d=Object(o.useTodosStore)();return{taskId:e,title:Object(r.a)((function(){var t;return null===(t=Object(r.i)(n))||void 0===t?void 0:t.title})),document:Object(r.a)((function(){var t;return null===(t=Object(r.i)(n))||void 0===t?void 0:t.document})),finished:Object(r.a)((function(){var t;return null===(t=Object(r.i)(n))||void 0===t?void 0:t.finished})),modules:Object(f.d)(n),updateFinished:function(t){return d.updateTodoFinished({todoId:Object(r.i)(e),finished:t})},faArrowLeft:c.c}}}),v=(n(413),n(37)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-card",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"w-full flex h-24"},[n("bmfsfj-modul-icon-bar",{staticClass:"rounded-tl",attrs:{modules:t.modules}}),t._v(" "),n("bmfsfj-checkbox",{staticClass:"py-1 px-2 my-auto flex-grow",attrs:{value:t.finished},on:{input:t.updateFinished}},[n("h2",{staticClass:"text-xl ml-1 my-auto"},[t._v(t._s(t.title))])])],1)]},proxy:!0}])},[t._v(" "),n("nuxt-content",{staticClass:"mx-auto",attrs:{document:t.document}}),t._v(" "),n("nuxt-link",{attrs:{to:t.localeRoute("/tasks")}},[n("font-awesome-icon",{staticClass:"self-center mt-2 text-primary-500",attrs:{"fixed-width":"",size:"2x",icon:t.faArrowLeft}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjModulIconBar:n(386).default,BmfsfjCheckbox:n(380).default,BmfsfjCard:n(412).default})}}]);