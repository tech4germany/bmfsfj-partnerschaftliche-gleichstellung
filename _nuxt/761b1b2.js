(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8,10],{360:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(7),o=(n(44),n(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(o.k)([]);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},361:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(6),o=n(360),c=Object(r.m)("$content",!1),l=function(t){var e=c();return Object(o.b)((function(){return e(Object(r.i)(t)).fetch()}))}},362:function(t,e,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("08fa8d46",content,!0,{sourceMap:!1})},363:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(54),c=n(361),l=n(165);var f=Object(r.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1}},setup:function(t){var e=Object(r.h)(t),n=e.nextLocation,f=function(t){var e=Object(r.e)(!1),n=Object(c.b)(Object(r.a)((function(){return"questions/".concat(Object(r.i)(t))})));return{toggleMoreInfos:function(){e.value=!e.value},moreInfosVisible:e,moreInfos:n}}(e.questionId),d=f.moreInfosVisible,v=f.moreInfos,x=f.toggleMoreInfos,m=Object(l.b)();return{nextQuestion:Object(r.a)((function(){return m(Object(r.i)(n))})),toggleMoreInfos:x,moreInfosVisible:d,moreInfos:v,faArrowRight:o.c,faInfoCircle:o.g}}}),d=n(35),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center flex flex-col h-full"},[n("h2",{staticClass:"text-2xl mt-24"},[t._t("header",(function(){return[t._v(t._s(t.$t("intro."+t.questionId+".question")))]}))],2),t._v(" "),n("div",{staticClass:"flex-grow mt-24"},[t._t("default")],2),t._v(" "),t.hasSelection?t._e():n("div",{staticClass:"mb-12 gap-2 flex flex-col"},[n("button",{on:{click:t.toggleMoreInfos}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:t.faInfoCircle}})],1),t._v(" "),n("nuxt-link",{attrs:{to:t.localeRoute(t.nextLocation)}},[t._v("Überspringen")])],1),t._v(" "),t.moreInfosVisible?n("nuxt-content",{attrs:{document:t.moreInfos}}):t._e(),t._v(" "),n("div"),t._v(" "),t.hasSelection?n("nuxt-link",{staticClass:"mb-12",attrs:{to:t.localeRoute(t.nextLocation)}},[n("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:t.faArrowRight}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,n){"use strict";n(362)},365:function(t,e,n){var r=n(63)((function(i){return i[1]}));r.push([t.i,"button[data-v-4ec7d6ea]{border-radius:0.25rem;border-width:2px;--tw-border-opacity:1;border-color:rgba(0, 129, 54, var(--tw-border-opacity));padding:0.5rem}button.checked[data-v-4ec7d6ea]{--tw-bg-opacity:1;background-color:rgba(0, 129, 54, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},366:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),c=(n(364),n(35)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,"4ec7d6ea",null);e.default=component.exports},377:function(t,e,n){"use strict";n.r(e);var r=n(6),o=Object(r.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1},isSelected:{type:Function,required:!0},types:{type:Array,default:function(){return[]}}}}),c=n(35),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("intro-question",{attrs:{"question-id":t.questionId,"next-location":t.nextLocation,"has-selection":t.hasSelection}},[n("div",{staticClass:"flex flex-col gap-2"},t._l(t.types,(function(e){return n("bmfsfj-toggle-button",{key:e,staticClass:"w-full",attrs:{value:t.isSelected(e)},on:{input:function(n){return t.$emit("input",e)}}},[t._v(t._s(t.$t(t.questionId+"."+e)))])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjToggleButton:n(366).default,IntroQuestion:n(363).default})}}]);