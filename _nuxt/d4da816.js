(window.webpackJsonp=window.webpackJsonp||[]).push([[19,10],{360:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(7),o=(n(44),n(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(o.k)([]);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},361:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(6),o=n(360),c=Object(r.m)("$content",!1),l=function(t){var e=c();return Object(o.b)((function(){return e(Object(r.i)(t)).fetch()}))}},363:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(54),c=n(361),l=Object(r.m)("localeLocation",!1);var f=Object(r.b)({props:{questionId:{type:String,required:!0},nextLocation:{type:String,required:!0},hasSelection:{type:Boolean,default:!1}},setup:function(t){var e=Object(r.h)(t),n=e.nextLocation,f=e.questionId,d=function(t){var e=Object(r.k)(),n=l(),o=Object(r.a)((function(){return n(Object(r.i)(t))}));return{goToNextQuestion:function(){if(!o.value)throw new Error("Unknown location '".concat(Object(r.i)(t),"'"));e.push(o.value)}}}(n),v=d.goToNextQuestion,h=function(t){var e=Object(r.e)(!1),n=Object(c.b)(Object(r.a)((function(){return"questions/".concat(Object(r.i)(t))})));return{toggleMoreInfos:function(){e.value=!e.value},moreInfosVisible:e,moreInfos:n}}(f),x=h.moreInfosVisible,m=h.moreInfos;return{goToNextQuestion:v,toggleMoreInfos:h.toggleMoreInfos,moreInfosVisible:x,moreInfos:m,faArrowRight:o.c,faInfoCircle:o.g}}}),d=n(35),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center flex flex-col h-full"},[n("h2",{staticClass:"text-2xl mt-24"},[t._t("header",(function(){return[t._v(t._s(t.$t("intro."+t.questionId+".question")))]}))],2),t._v(" "),n("div",{staticClass:"flex-grow mt-24"},[t._t("default")],2),t._v(" "),t.hasSelection?t._e():n("div",{staticClass:"mb-12 gap-2 flex flex-col"},[n("button",{on:{click:t.toggleMoreInfos}},[n("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:t.faInfoCircle}})],1),t._v(" "),n("nuxt-link",{attrs:{to:t.localeRoute(t.nextLocation)}},[t._v("Überspringen")])],1),t._v(" "),t.moreInfosVisible?n("nuxt-content",{attrs:{document:t.moreInfos}}):t._e(),t._v(" "),n("div"),t._v(" "),t.hasSelection?n("nuxt-link",{staticClass:"mb-12",attrs:{to:t.localeRoute(t.nextLocation)}},[n("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:t.faArrowRight}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},408:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(54),c=n(251),l=Object(r.b)({layout:"intro",setup:function(){var t=Object(c.useUserStore)();return{nextLocation:"intro-11-finished",faArrowRight:o.c,birthday:Object(r.a)((function(){return t.expectedBirthday})),updateBirthday:function(e){return n=e.target.value,void t.setExpectedBirthday(n);var n}}}}),f=n(35),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("intro-question",{attrs:{"next-location":t.nextLocation,"question-id":"birthday","has-selection":null!=t.birthday}},[n("input",{staticClass:"w-full border-primary-500 p-2 border-2 rounded",attrs:{placeholder:"Geburtstag",type:"date"},domProps:{value:t.birthday},on:{input:t.help,change:t.updateBirthday}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IntroQuestion:n(363).default})}}]);