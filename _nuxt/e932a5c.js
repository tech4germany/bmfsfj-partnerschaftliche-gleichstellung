(window.webpackJsonp=window.webpackJsonp||[]).push([[34,13,16,17],{365:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var o=n(7),r=(n(46),n(0));function c(t){var e=Object(r.k)(null);return Object(r.s)(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(r.k)([]);return Object(r.s)(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},366:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var o=n(6),r=n(365),c=Object(o.m)("$content",!1),l=function(t){var e=c();return Object(r.b)((function(){return e(Object(o.i)(t)).fetch()}))}},367:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("255f667d",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n.r(e);var o=n(0),r=Object(o.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),c=n(37),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},369:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n(21),c=n(366),l=n(165);var f=Object(o.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1}},setup:function(t){var e=Object(o.h)(t),n=e.nextLocation,f=function(t){var e=Object(o.e)(!1),n=Object(c.b)(Object(o.a)((function(){return"questions/".concat(Object(o.i)(t))})));return{toggleMoreInfos:function(){e.value=!e.value},moreInfosVisible:e,moreInfos:n}}(e.questionId),v=f.moreInfosVisible,d=f.moreInfos,x=f.toggleMoreInfos,m=Object(l.b)();return{nextQuestion:Object(o.a)((function(){return m(Object(o.i)(n))})),toggleMoreInfos:x,moreInfosVisible:v,moreInfos:d,faArrowRight:r.d,faInfoCircle:r.s}}}),v=n(37),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col h-full"},[n("h2",{staticClass:"text-xl mt-12 mx-1"},[t._t("header",(function(){return[t._v(t._s(t.$t("intro."+t.questionId+".question")))]}))],2),t._v(" "),n("div",{staticClass:"flex-grow flex"},[n("div",{staticClass:"my-auto w-full"},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"gap-4 flex flex-col mb-2"},[n("button",{on:{click:t.toggleMoreInfos}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:t.faInfoCircle}})],1),t._v(" "),t.hasSelection?t._e():n("nuxt-link",{staticClass:"text-primary-500 self-center text-center text-xl",attrs:{to:t.localeRoute(t.nextLocation)}},[t._v(t._s(t.$t("intro.skip-question")))])],1),t._v(" "),t.moreInfosVisible?n("nuxt-content",{attrs:{document:t.moreInfos}}):t._e(),t._v(" "),t.hasSelection?n("div",{staticClass:"mb-2 flex flex-row-reverse mr-2 mt-2"},[n("nuxt-link",{attrs:{to:t.localeRoute(t.nextLocation)}},[n("font-awesome-icon",{staticClass:"fa-3x text-primary-500",attrs:{icon:t.faArrowRight}})],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,n){"use strict";n(367)},371:function(t,e,n){var o=n(61)((function(i){return i[1]}));o.push([t.i,".checked[data-v-b7362bce]{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},374:function(t,e,n){"use strict";n.r(e);var o=n(21),r=n(375),c=n(0),l=Object(c.d)({inheritAttrs:!1,props:{value:{type:Boolean},multi:{type:Boolean,default:!1}},setup:function(t,e){var n=e.attrs,l=e.listeners,f=Object(c.p)(t),v=f.value,d=f.multi;return{attrs:n,listeners:l,checkboxIcon:Object(c.a)((function(){return null==Object(c.q)(v)?o.x:Object(c.q)(d)?Object(c.q)(v)?o.j:r.c:Object(c.q)(v)?r.b:r.a}))}}}),f=(n(370),n(37)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("custom-toggle-button",t._g(t._b({staticClass:"py-3 px-2 border-primary-500 text-xl flex gap-2 text-primary-500 border-2 rounded-xl",class:{checked:t.value}},"custom-toggle-button",t.attrs,!1),t.listeners),[n("font-awesome-icon",{attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),n("div",{staticClass:"flex-grow text-left"},[t._t("default")],2)],1)}),[],!1,null,"b7362bce",null);e.default=component.exports;installComponents(component,{CustomToggleButton:n(368).default})},437:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n(254),c=Object(o.b)({layout:"intro",setup:function(){var t=Object(o.a)((function(){return n.relationship})),e=Object(o.a)((function(){return Object(o.i)(t)?"intro-7-partner-name":"intro-9-baby"})),n=Object(r.useUserStore)();return{questionId:"relationship",nextLocation:e,yes:function(){n.setRelationship(!0)},no:function(){n.setRelationship(!1)},relationship:Object(o.a)((function(){return n.relationship})),hasSelection:Object(o.a)((function(){return null!=n.relationship}))}}}),l=n(37),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("intro-question",{attrs:{"question-id":t.questionId,"next-location":t.nextLocation,"has-selection":t.hasSelection}},[n("bmfsfj-toggle-button",{staticClass:"w-full my-1",attrs:{value:!0===t.relationship},on:{input:t.yes}},[t._v(t._s(t.$t("yes")))]),t._v(" "),n("bmfsfj-toggle-button",{staticClass:"w-full my-1",attrs:{value:!1===t.relationship},on:{input:t.no}},[t._v(t._s(t.$t("no")))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjToggleButton:n(374).default,IntroQuestion:n(369).default})}}]);