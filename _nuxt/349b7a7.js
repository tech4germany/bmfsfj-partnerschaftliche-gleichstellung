(window.webpackJsonp=window.webpackJsonp||[]).push([[33,10,13,16],{367:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("fe05d4ac",content,!0,{sourceMap:!1})},369:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return x})),n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return w}));var r=n(63),o=(n(51),n(6)),c=n(478),l=n(498),f=n(475),d=n(479),v=n(469),m=(n(473),Object(o.q)("$i18n",!1)),x=Object(o.q)("switchLocalePath",!1),h=function(){var t=m();return[t.locale].concat(Object(r.a)(t.fallbackLocale))},y={de:c.a,en:l.a,ru:f.a,tr:d.a},w=function(){var t=m();return Object(v.a)({locale:y[t.locale]})("PP")}},371:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(7),o=(n(46),n(0));function c(t){var e=Object(o.n)(null);return Object(o.v)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(o.n)([]);return Object(o.v)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},372:function(t,e,n){"use strict";n(367)},373:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".content-area[data-v-32f34346] .nuxt-content{display:flex;flex-direction:column;gap:10px}.content-area[data-v-32f34346] .nuxt-content h1, h2[data-v-32f34346], h3[data-v-32f34346]{font-weight:700}.content-area[data-v-32f34346] .nuxt-content a{--tw-text-opacity:1;color:rgba(0, 67, 119, var(--tw-text-opacity))}.content-area[data-v-32f34346] .nuxt-content ul{list-style-position:inside;list-style-type:disc}.content-area[data-v-32f34346] .nuxt-content ol{list-style-position:inside;list-style-type:decimal}.content-area[data-v-32f34346] .nuxt-content li{display:list-item}",""]),r.locals={},t.exports=r},374:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(38),n(18),n(29),n(40),n(25),n(23),n(41),n(42),n(26);var r=n(7);n(46),n(51);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var c,l,f,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=o(r),t.prev=1,c.s();case 3:if((l=c.n()).done){t.next=19;break}return f=l.value,t.prev=5,t.next=8,e("".concat(f,"/").concat(n));case 8:if(!(content=t.sent)||!(null==content.length||content.length>0)){t.next=11;break}return t.abrupt("return",content);case 11:throw new Error("No translation for ".concat(n," in ").concat(f));case 14:t.prev=14,t.t0=t.catch(5),console.warn("No translation for ".concat(n," in ").concat(f,"."));case 17:t.next=3;break;case 19:t.next=24;break;case 21:t.prev=21,t.t1=t.catch(1),c.e(t.t1);case 24:return t.prev=24,c.f(),t.finish(24);case 27:throw new Error("Page not found in any fitting translation: ".concat(n,", tried locales: ").concat(r));case 28:case"end":return t.stop()}}),t,null,[[1,21,24,27],[5,14]])})));return function(e,n,r){return t.apply(this,arguments)}}()},375:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d}));var r=n(6),o=n(374),c=n(369),l=n(371),f=Object(r.q)("$content",!1),d=function(t){var e=f(),n=Object(c.c)();return Object(l.b)((function(){return Object(o.a)((function(t){return e(t).fetch()}),Object(r.l)(t),n)}))}},376:function(t,e,n){"use strict";n.r(e);n(372);var r=n(37),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"content-area"},[t._t("default")],2)}),[],!1,null,"32f34346",null);e.default=component.exports},381:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({props:{open:{type:Boolean,default:!1}},setup:function(){}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute top-0 left-0 md:bg-background-300 h-screen w-full md:py-3 bg-white opacity-95",class:{hidden:!t.open},on:{click:function(e){return t.$emit("close")}}},[n("div",{staticClass:"\n      flex flex-col\n      h-full\n      bg-white\n      md:max-h-full md:rounded-lg md:overflow-auto md:max-w-xl md:mx-auto\n    "},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(20),c=n(375),l=n(165);var f=Object(r.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1}},setup:function(t){var e=Object(r.k)(t),n=e.nextLocation,f=function(t){var e=Object(r.h)(!1),n=Object(c.b)(Object(r.a)((function(){return"questions/".concat(Object(r.l)(t))})));return{toggleMoreInfos:function(){e.value=!e.value},moreInfosVisible:e,moreInfos:n}}(e.questionId),d=f.moreInfosVisible,v=f.moreInfos,m=f.toggleMoreInfos,x=Object(l.b)();return{nextQuestion:Object(r.a)((function(){return x(Object(r.l)(n))})),toggleMoreInfos:m,moreInfosVisible:d,moreInfos:v,faArrowRight:o.d,faInfoCircle:o.u,faTimes:o.C}}}),d=n(37),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col h-full"},[n("h2",{staticClass:"text-xl mt-2 mx-1 font-bold"},[t._t("header",(function(){return[t._v(t._s(t.$t("intro."+t.questionId+".question")))]}))],2),t._v(" "),n("div",{staticClass:"flex-grow flex flex-shrink overflow-auto mt-3"},[n("div",{staticClass:"my-auto w-full"},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"gap-4 flex flex-col my-2"},[n("button",{staticClass:"mx-auto",on:{click:t.toggleMoreInfos}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:t.faInfoCircle}})],1),t._v(" "),t.hasSelection?t._e():n("nuxt-link",{staticClass:"text-primary-500 self-center text-center text-xl",attrs:{to:t.localeRoute(t.nextLocation)}},[t._v(t._s(t.$t("intro.skip-question")))])],1),t._v(" "),n("bmfsfj-overlay",{attrs:{open:t.moreInfosVisible},on:{close:t.toggleMoreInfos}},[n("div",{staticClass:"flex flex-col h-full ml-3"},[n("header",{staticClass:"flex flex-row"},[n("h1",{staticClass:"text-3xl text-primary-500 mt-20 flex-grow flex-shrink font-bold"},[t._v(t._s(t.$t("intro."+t.questionId+".question")))]),t._v(" "),n("button",{staticClass:"w-10 h-10 rounded-full m-1 text-primary-500 border-2 border-primary-500",staticStyle:{"min-width":"2.5rem"}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{"fixed-width":"",icon:t.faTimes}})],1)]),t._v(" "),n("div",{staticClass:"flex-grow flex mt-3 mb-2 mr-3"},[n("bmfsfj-content-area",{staticClass:"w-full"},[n("nuxt-content",{attrs:{document:t.moreInfos}})],1)],1)])]),t._v(" "),t.hasSelection?n("div",{staticClass:"mb-2 flex flex-row-reverse mr-2 mt-2"},[n("nuxt-link",{attrs:{to:t.localeRoute(t.nextLocation)}},[n("font-awesome-icon",{staticClass:"fa-3x text-primary-500",attrs:{icon:t.faArrowRight}})],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjContentArea:n(376).default,BmfsfjOverlay:n(381).default})},484:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(20),c=n(474),l=n(470),f=n(250),d=Object(r.b)({layout:"intro",setup:function(){var t=Object(f.useUserStore)(),e=Object(c.a)(new Date)("yyyy-MM-dd");return{nextLocation:"intro-11-finished",faArrowRight:o.d,birthday:Object(r.a)((function(){return t.expectedBirthday&&new Date(t.expectedBirthday)?Object(l.a)("yyyy-MM-dd")(new Date(t.expectedBirthday)):""})),updateBirthday:function(n){return r=n.target.value,void t.setExpectedBirthday(e(r).getTime());var r}}}}),v=n(37),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-intro-question",{attrs:{"next-location":t.nextLocation,"question-id":"birthday","has-selection":""!=t.birthday}},[n("input",{staticClass:"w-full border-primary-500 p-2 border-2 rounded",attrs:{placeholder:t.$t("intro.birthday.placeholder"),type:"date"},domProps:{value:t.birthday},on:{change:t.updateBirthday}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjIntroQuestion:n(385).default})}}]);