(window.webpackJsonp=window.webpackJsonp||[]).push([[23,8,10],{360:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var o=n(7),r=(n(44),n(0));function c(t){var e=Object(r.k)(null);return Object(r.s)(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(r.k)([]);return Object(r.s)(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},361:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var o=n(6),r=n(360),c=Object(o.m)("$content",!1),l=function(t){var e=c();return Object(r.b)((function(){return e(Object(o.i)(t)).fetch()}))}},362:function(t,e,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("08fa8d46",content,!0,{sourceMap:!1})},363:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n(54),c=n(361),l=Object(o.m)("localeLocation",!1);var f=Object(o.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1}},setup:function(t){var e=Object(o.h)(t),n=e.nextLocation,f=e.questionId,d=function(t){var e=Object(o.k)(),n=l(),r=Object(o.a)((function(){return n(Object(o.i)(t))}));return{goToNextQuestion:function(){if(!r.value)throw new Error("Unknown location '".concat(Object(o.i)(t),"'"));e.push(r.value)}}}(n),v=d.goToNextQuestion,m=function(t){var e=Object(o.e)(!1),n=Object(c.b)(Object(o.a)((function(){return"questions/".concat(Object(o.i)(t))})));return{toggleMoreInfos:function(){e.value=!e.value},moreInfosVisible:e,moreInfos:n}}(f),x=m.moreInfosVisible,j=m.moreInfos;return{goToNextQuestion:v,toggleMoreInfos:m.toggleMoreInfos,moreInfosVisible:x,moreInfos:j,faArrowRight:r.c,faInfoCircle:r.g}}}),d=n(35),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center flex flex-col h-full"},[n("h2",{staticClass:"text-2xl mt-24"},[t._t("header",(function(){return[t._v(t._s(t.$t("intro."+t.questionId+".question")))]}))],2),t._v(" "),n("div",{staticClass:"flex-grow mt-24"},[t._t("default")],2),t._v(" "),t.hasSelection?t._e():n("div",{staticClass:"mb-12 gap-2 flex flex-col"},[n("button",{on:{click:t.toggleMoreInfos}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:t.faInfoCircle}})],1),t._v(" "),n("nuxt-link",{attrs:{to:t.localeRoute(t.nextLocation)}},[t._v("Überspringen")])],1),t._v(" "),t.moreInfosVisible?n("nuxt-content",{attrs:{document:t.moreInfos}}):t._e(),t._v(" "),n("div"),t._v(" "),t.hasSelection?n("nuxt-link",{staticClass:"mb-12",attrs:{to:t.localeRoute(t.nextLocation)}},[n("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:t.faArrowRight}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,n){"use strict";n(362)},365:function(t,e,n){var o=n(63)((function(i){return i[1]}));o.push([t.i,"button[data-v-4ec7d6ea]{border-radius:0.25rem;border-width:2px;--tw-border-opacity:1;border-color:rgba(0, 129, 54, var(--tw-border-opacity));padding:0.5rem}button.checked[data-v-4ec7d6ea]{--tw-bg-opacity:1;background-color:rgba(0, 129, 54, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},368:function(t,e,n){"use strict";n.r(e);var o=n(0),r=Object(o.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),c=(n(364),n(35)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,"4ec7d6ea",null);e.default=component.exports},412:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n(251),c=Object(o.b)({layout:"intro",setup:function(){var t=Object(r.useUserStore)();return{nextLocation:"intro-5-healthInsurance",questionId:"work",types:r.WorkSituation,select:function(e){t.setWorkSituation(e)},isSelected:function(e){return t.workSituation===e},hasSelection:Object(o.a)((function(){return null!=t.workSituation}))}}}),l=n(35),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("intro-question",{attrs:{"question-id":t.questionId,"next-location":t.nextLocation,"has-selection":t.hasSelection}},t._l(t.types,(function(e){return n("bmfsfj-toggle-button",{key:e,staticClass:"w-full my-1",attrs:{value:t.isSelected(e)},on:{input:function(n){return t.select(e)}}},[t._v(t._s(t.$t(t.questionId+"."+e)))])})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjToggleButton:n(368).default,IntroQuestion:n(363).default})}}]);