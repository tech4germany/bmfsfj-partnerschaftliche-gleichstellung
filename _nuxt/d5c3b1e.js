(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9,11,22],{365:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(7),o=(n(46),n(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(o.k)([]);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},367:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return x}));var r=n(7),o=n(63),c=(n(46),n(51),n(38),n(18),n(29),n(40),n(25),n(23),n(41),n(42),n(26),n(6)),l=n(368),f=n(365);function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m=Object(c.m)("$content",!1),x=function(t){var e=m(),n=Object(l.a)();return Object(f.b)((function(){return j(e,Object(c.i)(t),[n.locale].concat(Object(o.a)(n.fallbackLocale)))}))},j=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,l,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=d(r),t.prev=1,o.s();case 3:if((c=o.n()).done){t.next=18;break}return l=c.value,t.prev=5,t.next=8,e("".concat(l,"/").concat(n)).fetch();case 8:if(!(content=t.sent)){t.next=11;break}return t.abrupt("return",content);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),console.warn("No translation for ".concat(n," in ").concat(l,"."));case 16:t.next=3;break;case 18:t.next=23;break;case 20:t.prev=20,t.t1=t.catch(1),o.e(t.t1);case 23:return t.prev=23,o.f(),t.finish(23);case 26:throw new Error("Page not found in any fitting translation: ".concat(n,", tried locales: ").concat(r));case 27:case"end":return t.stop()}}),t,null,[[1,20,23,26],[5,13]])})));return function(e,n,r){return t.apply(this,arguments)}}()},368:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(6),o=Object(r.m)("$i18n",!1),c=Object(r.m)("switchLocalePath",!1)},370:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("79cc6d62",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(21),c=n(367),l=n(165);var f=Object(r.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1}},setup:function(t){var e=Object(r.h)(t),n=e.nextLocation,f=function(t){var e=Object(r.e)(!1),n=Object(c.b)(Object(r.a)((function(){return"questions/".concat(Object(r.i)(t))})));return{toggleMoreInfos:function(){e.value=!e.value},moreInfosVisible:e,moreInfos:n}}(e.questionId),d=f.moreInfosVisible,v=f.moreInfos,m=f.toggleMoreInfos,x=Object(l.b)();return{nextQuestion:Object(r.a)((function(){return x(Object(r.i)(n))})),toggleMoreInfos:m,moreInfosVisible:d,moreInfos:v,faArrowRight:o.d,faInfoCircle:o.s}}}),d=n(37),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col h-full"},[n("h2",{staticClass:"text-xl mt-12 mx-1"},[t._t("header",(function(){return[t._v(t._s(t.$t("intro."+t.questionId+".question")))]}))],2),t._v(" "),n("div",{staticClass:"flex-grow flex"},[n("div",{staticClass:"my-auto w-full"},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"gap-4 flex flex-col mb-2"},[n("button",{on:{click:t.toggleMoreInfos}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:t.faInfoCircle}})],1),t._v(" "),t.hasSelection?t._e():n("nuxt-link",{staticClass:"text-primary-500 self-center text-center text-xl",attrs:{to:t.localeRoute(t.nextLocation)}},[t._v(t._s(t.$t("intro.skip-question")))])],1),t._v(" "),t.moreInfosVisible?n("nuxt-content",{attrs:{document:t.moreInfos}}):t._e(),t._v(" "),t.hasSelection?n("div",{staticClass:"mb-2 flex flex-row-reverse mr-2 mt-2"},[n("nuxt-link",{attrs:{to:t.localeRoute(t.nextLocation)}},[n("font-awesome-icon",{staticClass:"fa-3x text-primary-500",attrs:{icon:t.faArrowRight}})],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,n){"use strict";n(370)},379:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".checked[data-v-5f7598e7]{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},382:function(t,e,n){"use strict";n.r(e);var r=n(21),o=n(380),c=n(0),l=Object(c.d)({inheritAttrs:!1,props:{value:{type:Boolean},multi:{type:Boolean,default:!1}},setup:function(t,e){var n=e.attrs,l=e.listeners,f=Object(c.p)(t),d=f.value,v=f.multi;return{attrs:n,listeners:l,checkboxIcon:Object(c.a)((function(){return null==Object(c.q)(d)?r.x:Object(c.q)(v)?Object(c.q)(d)?r.j:o.c:Object(c.q)(d)?o.b:o.a}))}}}),f=(n(378),n(37)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-toggle-button",t._g(t._b({staticClass:"py-3 px-2 border-primary-500 text-xl flex gap-2 text-primary-500 border-2 rounded-xl",class:{checked:t.value}},"bmfsfj-toggle-button",t.attrs,!1),t.listeners),[n("font-awesome-icon",{attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),n("div",{staticClass:"flex-grow text-left"},[t._t("default")],2)],1)}),[],!1,null,"5f7598e7",null);e.default=component.exports;installComponents(component,{BmfsfjToggleButton:n(371).default})},403:function(t,e,n){"use strict";n.r(e);var r=n(6),o=Object(r.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1},isSelected:{type:Function,required:!0},multi:{type:Boolean,default:!1},types:{type:Array,default:function(){return[]}}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-intro-question",{attrs:{"question-id":t.questionId,"next-location":t.nextLocation,"has-selection":t.hasSelection}},[n("div",{staticClass:"flex flex-col gap-2"},t._l(t.types,(function(e){return n("bmfsfj-intro-toggle-button",{key:e,staticClass:"w-full",attrs:{value:t.isSelected(e),multi:t.multi},on:{input:function(n){return t.$emit("input",e)}}},[t._v(t._s(t.$t(t.questionId+"."+e)))])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjIntroToggleButton:n(382).default,BmfsfjIntroQuestion:n(372).default})}}]);