(window.webpackJsonp=window.webpackJsonp||[]).push([[19,5,6,8,10],{360:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(7),o=(n(44),n(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(o.k)([]);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},361:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(6),o=n(360),c=Object(r.m)("$content",!1),l=function(t){var e=c();return Object(o.b)((function(){return e(Object(r.i)(t)).fetch()}))}},362:function(t,e,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("08fa8d46",content,!0,{sourceMap:!1})},363:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(54),c=n(361),l=n(165);var f=Object(r.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1}},setup:function(t){var e=Object(r.h)(t),n=e.nextLocation,f=function(t){var e=Object(r.e)(!1),n=Object(c.b)(Object(r.a)((function(){return"questions/".concat(Object(r.i)(t))})));return{toggleMoreInfos:function(){e.value=!e.value},moreInfosVisible:e,moreInfos:n}}(e.questionId),d=f.moreInfosVisible,v=f.moreInfos,m=f.toggleMoreInfos,_=Object(l.b)();return{nextQuestion:Object(r.a)((function(){return _(Object(r.i)(n))})),toggleMoreInfos:m,moreInfosVisible:d,moreInfos:v,faArrowRight:o.c,faInfoCircle:o.g}}}),d=n(35),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center flex flex-col h-full"},[n("h2",{staticClass:"text-2xl mt-24"},[t._t("header",(function(){return[t._v(t._s(t.$t("intro."+t.questionId+".question")))]}))],2),t._v(" "),n("div",{staticClass:"flex-grow mt-24"},[t._t("default")],2),t._v(" "),t.hasSelection?t._e():n("div",{staticClass:"mb-12 gap-2 flex flex-col"},[n("button",{on:{click:t.toggleMoreInfos}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:t.faInfoCircle}})],1),t._v(" "),n("nuxt-link",{attrs:{to:t.localeRoute(t.nextLocation)}},[t._v("Überspringen")])],1),t._v(" "),t.moreInfosVisible?n("nuxt-content",{attrs:{document:t.moreInfos}}):t._e(),t._v(" "),n("div"),t._v(" "),t.hasSelection?n("nuxt-link",{staticClass:"mb-12",attrs:{to:t.localeRoute(t.nextLocation)}},[n("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:t.faArrowRight}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,n){"use strict";n(362)},365:function(t,e,n){var r=n(63)((function(i){return i[1]}));r.push([t.i,"button[data-v-4ec7d6ea]{border-radius:0.25rem;border-width:2px;--tw-border-opacity:1;border-color:rgba(0, 129, 54, var(--tw-border-opacity));padding:0.5rem}button.checked[data-v-4ec7d6ea]{--tw-bg-opacity:1;background-color:rgba(0, 129, 54, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},366:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),c=(n(364),n(35)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,"4ec7d6ea",null);e.default=component.exports},375:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},value:{type:null,default:null}},setup:function(t,e){var n=e.attrs,r=e.emit;return{attrs:n,onInput:function(t){r("input",t.target.value)}}}}),c=n(35),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",t._b({domProps:{value:t.value},on:{input:t.onInput}},"select",t.attrs,!1),t._l(t.items,(function(e){return n("option",{key:e.value||e,domProps:{value:e.value||e}},[t._t("default",(function(){return[t._v(t._s(e.label))]}),{item:e})],2)})),0)}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,n){"use strict";n.r(e),n.d(e,"useI18n",(function(){return c})),n.d(e,"useSwitchLocalePath",(function(){return l}));n(45),n(28);var r=n(6),o=n(0),c=Object(r.m)("$i18n",!1),l=Object(r.m)("switchLocalePath",!1),f=Object(o.d)({inheritAttrs:!1,setup:function(t,e){var n=e.attrs,f=c(),d=Object(r.k)(),v=l();return{attrs:n,currentLocale:Object(o.a)((function(){return f.locale})),availableLocales:Object(o.a)((function(){return f.locales.map((function(a){return{label:a.name,value:a.code}}))})),switchLocale:function(t){return d.push(v(t))}}}}),d=n(35),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("bmfsfj-select",{attrs:{items:t.availableLocales,value:t.currentLocale},on:{input:t.switchLocale}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjSelect:n(375).default})},408:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(54),c=n(386),l=Object(r.b)({layout:"intro",setup:function(){var t=Object(c.useI18n)(),e=Object(r.k)(),n=Object(c.useSwitchLocalePath)();return{nextLocation:"intro-2-note",faArrowRight:o.c,currentLocale:Object(r.a)((function(){return t.locale})),availableLocales:Object(r.a)((function(){return t.locales})),isSelected:function(e){return e===t.locale},select:function(t){return e.push(n(t))}}}}),f=n(35),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("intro-question",{attrs:{"next-location":t.nextLocation,"question-id":"language","has-selection":""},scopedSlots:t._u([{key:"header",fn:function(){return[n("span",{staticClass:"block"},[t._v(t._s(t.$t("intro.language.question")))]),t._v(" "),n("span",{staticClass:"block text-gray-600 text-xl"},[t._v("\n      "+t._s(t.$t("intro.language.question","en"===t.currentLocale?"de":"en"))+"\n    ")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"flex flex-col gap-2 w-full"},t._l(t.availableLocales,(function(e){return n("bmfsfj-toggle-button",{key:e.value,staticClass:"w-full",attrs:{value:t.isSelected(e.code)},on:{input:function(n){return t.select(e.code)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjToggleButton:n(366).default,IntroQuestion:n(363).default})}}]);