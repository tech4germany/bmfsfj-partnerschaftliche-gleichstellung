(window.webpackJsonp=window.webpackJsonp||[]).push([[36,5,6],{365:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return l}));var r=n(7),c=(n(45),n(0));function o(t){var e=Object(c.k)(null);return Object(c.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(c.k)([]);return Object(c.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},366:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var r=n(6),c=n(365),o=Object(r.m)("$content",!1),l=function(t){var e=o();return Object(c.b)((function(){return e(Object(r.i)(t)).fetch()}))}},372:function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return k})),n.d(e,"c",(function(){return N}));n(32),n(23),n(34),n(33),n(47);var r=n(20),c=n(7),o=(n(45),n(37),n(375),n(376),n(46),n(0)),l=n(250),f=(n(38),n(104),"todos");function d(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)}(content))throw new Error("Non task content document");return{document:content,id:content.id,title:content.title,modules:content.modules}}function h(t,e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(f,{deep:!0}).where({id:n}).limit(1).fetch();case 2:if(r=t.sent,Array.isArray(r)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===r.length){t.next=7;break}throw new Error("Found no task with the id ".concat(n));case 7:return t.abrupt("return",d(r[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return O.apply(this,arguments)}function O(){return O=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},r=o.length>2&&void 0!==o[2]?o[2]:null,t.next=4,e(f,{deep:!0}).without("data").where(n).search(r).fetch();case 4:if(c=t.sent,Array.isArray(c)){t.next=7;break}throw new Error("Expected array of task contents");case 7:return t.abrupt("return",c.map((function(content){return d(content)})));case 8:case"end":return t.stop()}}),t)}))),O.apply(this,arguments)}function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function y(t,e,n){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(regeneratorRuntime.mark((function t(e,n,r){var c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(o.p)(Object(l.getTask)(e,r)),t.next=3,h(n,r);case 3:return f=t.sent,t.abrupt("return",Object(o.j)(x(x({},c),f)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){return _.apply(this,arguments)}function _(){return _=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r,c,f,d=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=d.length>2&&void 0!==d[2]?d[2]:{},c=d.length>3&&void 0!==d[3]?d[3]:null,t.next=4,v(n,r,c);case 4:return f=t.sent,t.abrupt("return",f.map((function(t){return Object(o.j)(x(x({},t),Object(o.p)(Object(l.getTask)(e,t.id))))})));case 6:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}function N(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}},373:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return m}));var r=n(0),c=n(366),o=n(372),l=n(365),f=n(250);function d(){return{store:Object(f.useTodosStore)(),$content:Object(c.a)()}}var h=function(t){var e=d(),n=e.store,c=e.$content;return Object(l.b)((function(){return Object(o.a)(n,c,Object(r.q)(t))}))};function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=d(),c=n.store,f=n.$content;return Object(l.a)((function(){return Object(o.b)(c,f,Object(r.q)(t),Object(r.q)(e))}))}},375:function(t,e,n){n(3)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},376:function(t,e,n){"use strict";var r=n(30),c=n(9),o=n(105),l=n(40),f=n(25),d=n(77),h=n(166),m=n(132),v=n(252),O=n(8),j=n(65),x=n(86).f,y=n(55).f,w=n(35).f,k=n(253).trim,_="Number",N=c.Number,E=N.prototype,I=d(j(E))==_,A=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,c,o,l,f,code,d=v(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=k(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+d}for(l=(o=d.slice(2)).length,f=0;f<l;f++)if((code=o.charCodeAt(f))<48||code>c)return NaN;return parseInt(o,r)}return+d};if(o(_,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var C,R=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof R&&(I?O((function(){E.valueOf.call(n)})):d(n)!=_)?h(new N(A(e)),n,R):A(e)},S=r?x(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;S.length>T;T++)f(N,C=S[T])&&!f(R,C)&&w(R,C,y(N,C));R.prototype=E,E.constructor=R,l(c,_,R)}},377:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(21),o=n(382),l=Object(r.d)({inheritAttrs:!1,props:{label:{type:String,default:null},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var n=e.attrs,l=Object(r.o)(t,"value");return{attrs:n,checkboxIcon:Object(r.a)((function(){return null==Object(r.q)(l)?c.x:Object(r.q)(l)?c.j:o.a}))}}}),f=n(36),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex flex-row items-center"},[n("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),n("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),t._t("default",(function(){return[n("span",{staticClass:"ml-1"},[t._v(t._s(t.label))])]}))],2)])}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){var content=n(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("3642c16e",content,!0,{sourceMap:!1})},407:function(t,e,n){"use strict";n.r(e);var r=n(36),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border-2 border-primary-500 rounded-lg"},[n("header",{staticClass:"border-b-2 border-primary-500"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"mx-2 mt-1 mb-2"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},408:function(t,e,n){"use strict";n(403)},409:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".nuxt-content{display:flex;flex-direction:column;gap:10px}.nuxt-content a{--tw-text-opacity:1;color:rgba(0, 67, 119, var(--tw-text-opacity))}.nuxt-content ul{list-style-position:inside;list-style-type:disc}.nuxt-content li{display:list-item}",""]),r.locals={},t.exports=r},434:function(t,e,n){"use strict";n.r(e);var r=n(6),c=n(21),o=n(250),l=n(373),f=Object(r.b)({setup:function(){var t=Object(r.j)(),e=Object(r.a)((function(){return t.value.params.task})),n=Object(l.a)(e),f=Object(o.useTodosStore)();return{taskId:e,title:Object(r.a)((function(){var t;return null===(t=Object(r.i)(n))||void 0===t?void 0:t.title})),document:Object(r.a)((function(){var t;return null===(t=Object(r.i)(n))||void 0===t?void 0:t.document})),finished:Object(r.a)((function(){var t;return null===(t=Object(r.i)(n))||void 0===t?void 0:t.finished})),updateFinished:function(t){return f.updateTodoFinished({todoId:Object(r.i)(e),finished:t})},faArrowLeft:c.c}}}),d=(n(408),n(36)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-card",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"w-full flex py-1 px-2"},[n("bmfsfj-checkbox",{staticClass:"my-auto",attrs:{value:t.finished},on:{input:t.updateFinished}},[n("h2",{staticClass:"text-xl ml-1 my-auto"},[t._v(t._s(t.title))])])],1)]},proxy:!0}])},[t._v(" "),n("nuxt-content",{staticClass:"mx-auto",attrs:{document:t.document}}),t._v(" "),n("nuxt-link",{attrs:{to:t.localeRoute("/tasks")}},[n("font-awesome-icon",{staticClass:"self-center mt-2 text-primary-500",attrs:{"fixed-width":"",size:"2x",icon:t.faArrowLeft}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjCheckbox:n(377).default,BmfsfjCard:n(407).default})}}]);