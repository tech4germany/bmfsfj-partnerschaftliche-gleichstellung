(window.webpackJsonp=window.webpackJsonp||[]).push([[18,13,16,17],{365:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(7),o=(n(46),n(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(o.k)([]);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},366:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(6),o=n(365),c=Object(r.m)("$content",!1),l=function(t){var e=c();return Object(o.b)((function(){return e(Object(r.i)(t)).fetch()}))}},367:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("255f667d",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},369:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(21),c=n(366),l=n(165);var f=Object(r.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1}},setup:function(t){var e=Object(r.h)(t),n=e.nextLocation,f=function(t){var e=Object(r.e)(!1),n=Object(c.b)(Object(r.a)((function(){return"questions/".concat(Object(r.i)(t))})));return{toggleMoreInfos:function(){e.value=!e.value},moreInfosVisible:e,moreInfos:n}}(e.questionId),d=f.moreInfosVisible,x=f.moreInfos,v=f.toggleMoreInfos,m=Object(l.b)();return{nextQuestion:Object(r.a)((function(){return m(Object(r.i)(n))})),toggleMoreInfos:v,moreInfosVisible:d,moreInfos:x,faArrowRight:o.d,faInfoCircle:o.s}}}),d=n(37),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col h-full"},[n("h2",{staticClass:"text-xl mt-12 mx-1"},[t._t("header",(function(){return[t._v(t._s(t.$t("intro."+t.questionId+".question")))]}))],2),t._v(" "),n("div",{staticClass:"flex-grow flex"},[n("div",{staticClass:"my-auto w-full"},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"gap-4 flex flex-col mb-2"},[n("button",{on:{click:t.toggleMoreInfos}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:t.faInfoCircle}})],1),t._v(" "),t.hasSelection?t._e():n("nuxt-link",{staticClass:"text-primary-500 self-center text-center text-xl",attrs:{to:t.localeRoute(t.nextLocation)}},[t._v(t._s(t.$t("intro.skip-question")))])],1),t._v(" "),t.moreInfosVisible?n("nuxt-content",{attrs:{document:t.moreInfos}}):t._e(),t._v(" "),t.hasSelection?n("div",{staticClass:"mb-2 flex flex-row-reverse mr-2 mt-2"},[n("nuxt-link",{attrs:{to:t.localeRoute(t.nextLocation)}},[n("font-awesome-icon",{staticClass:"fa-3x text-primary-500",attrs:{icon:t.faArrowRight}})],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,n){"use strict";n(367)},371:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".checked[data-v-b7362bce]{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},374:function(t,e,n){"use strict";n.r(e);var r=n(21),o=n(375),c=n(0),l=Object(c.d)({inheritAttrs:!1,props:{value:{type:Boolean},multi:{type:Boolean,default:!1}},setup:function(t,e){var n=e.attrs,l=e.listeners,f=Object(c.p)(t),d=f.value,x=f.multi;return{attrs:n,listeners:l,checkboxIcon:Object(c.a)((function(){return null==Object(c.q)(d)?r.x:Object(c.q)(x)?Object(c.q)(d)?r.j:o.c:Object(c.q)(d)?o.b:o.a}))}}}),f=(n(370),n(37)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("custom-toggle-button",t._g(t._b({staticClass:"py-3 px-2 border-primary-500 text-xl flex gap-2 text-primary-500 border-2 rounded-xl",class:{checked:t.value}},"custom-toggle-button",t.attrs,!1),t.listeners),[n("font-awesome-icon",{attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),n("div",{staticClass:"flex-grow text-left"},[t._t("default")],2)],1)}),[],!1,null,"b7362bce",null);e.default=component.exports;installComponents(component,{CustomToggleButton:n(368).default})},391:function(t,e,n){"use strict";n.r(e);var r=n(6),o=Object(r.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1},isSelected:{type:Function,required:!0},multi:{type:Boolean,default:!1},types:{type:Array,default:function(){return[]}}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("intro-question",{attrs:{"question-id":t.questionId,"next-location":t.nextLocation,"has-selection":t.hasSelection}},[n("div",{staticClass:"flex flex-col gap-2"},t._l(t.types,(function(e){return n("bmfsfj-toggle-button",{key:e,staticClass:"w-full",attrs:{value:t.isSelected(e),multi:t.multi},on:{input:function(n){return t.$emit("input",e)}}},[t._v(t._s(t.$t(t.questionId+"."+e)))])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjToggleButton:n(374).default,IntroQuestion:n(369).default})}}]);