(window.webpackJsonp=window.webpackJsonp||[]).push([[28,12,14,15],{365:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var o=n(7),r=(n(44),n(0));function c(t){var e=Object(r.k)(null);return Object(r.s)(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(r.k)([]);return Object(r.s)(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},366:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var o=n(6),r=n(365),c=Object(o.m)("$content",!1),l=function(t){var e=c();return Object(r.b)((function(){return e(Object(o.i)(t)).fetch()}))}},367:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("6b029677",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n(54),c=n(366),l=n(165);var f=Object(o.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1}},setup:function(t){var e=Object(o.h)(t),n=e.nextLocation,f=function(t){var e=Object(o.e)(!1),n=Object(c.b)(Object(o.a)((function(){return"questions/".concat(Object(o.i)(t))})));return{toggleMoreInfos:function(){e.value=!e.value},moreInfosVisible:e,moreInfos:n}}(e.questionId),d=f.moreInfosVisible,v=f.moreInfos,x=f.toggleMoreInfos,m=Object(l.b)();return{nextQuestion:Object(o.a)((function(){return m(Object(o.i)(n))})),toggleMoreInfos:x,moreInfosVisible:d,moreInfos:v,faArrowRight:r.c,faInfoCircle:r.h}}}),d=n(35),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center flex flex-col h-full"},[n("h2",{staticClass:"text-2xl mt-12"},[t._t("header",(function(){return[t._v(t._s(t.$t("intro."+t.questionId+".question")))]}))],2),t._v(" "),n("div",{staticClass:"flex-grow mt-12"},[t._t("default")],2),t._v(" "),t.hasSelection?t._e():n("div",{staticClass:"mb-12 gap-2 flex flex-col"},[n("button",{on:{click:t.toggleMoreInfos}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:t.faInfoCircle}})],1),t._v(" "),n("nuxt-link",{attrs:{to:t.localeRoute(t.nextLocation)}},[t._v("Überspringen")])],1),t._v(" "),t.moreInfosVisible?n("nuxt-content",{attrs:{document:t.moreInfos}}):t._e(),t._v(" "),n("div"),t._v(" "),t.hasSelection?n("nuxt-link",{staticClass:"mb-12",attrs:{to:t.localeRoute(t.nextLocation)}},[n("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:t.faArrowRight}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},369:function(t,e,n){"use strict";n(367)},370:function(t,e,n){var o=n(61)((function(i){return i[1]}));o.push([t.i,"button.checked[data-v-4bee5f16]{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},371:function(t,e,n){"use strict";n.r(e);var o=n(0),r=Object(o.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),c=(n(369),n(35)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({staticClass:"p-1 border-primary-500 border-2 rounded-xl",class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,"4bee5f16",null);e.default=component.exports},385:function(t,e,n){"use strict";n.r(e);var o=n(6),r=Object(o.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1},isSelected:{type:Function,required:!0},types:{type:Array,default:function(){return[]}}}}),c=n(35),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("intro-question",{attrs:{"question-id":t.questionId,"next-location":t.nextLocation,"has-selection":t.hasSelection}},[n("div",{staticClass:"flex flex-col gap-2"},t._l(t.types,(function(e){return n("bmfsfj-toggle-button",{key:e,staticClass:"w-full",attrs:{value:t.isSelected(e)},on:{input:function(n){return t.$emit("input",e)}}},[t._v(t._s(t.$t(t.questionId+"."+e)))])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjToggleButton:n(371).default,IntroQuestion:n(368).default})},425:function(t,e,n){"use strict";n.r(e);n(30);var o=n(6),r=n(251),c=Object(o.b)({layout:"intro",setup:function(){var t=Object(r.useUserStore)();return{types:Object.keys(r.WorkSituation),select:t.setWorkSituation,isSelected:function(e){return t.workSituation===e},hasSelection:Object(o.a)((function(){return null!=t.workSituation}))}}}),l=n(35),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("intro-question-select",{attrs:{"question-id":"work","next-location":"intro-5-healthInsurance","has-selection":t.hasSelection,"is-selected":t.isSelected,types:t.types},on:{input:function(e){return t.select(e)}}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IntroQuestionSelect:n(385).default})}}]);