(window.webpackJsonp=window.webpackJsonp||[]).push([[15,11],{361:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("135b5274",content,!0,{sourceMap:!1})},362:function(t,e,n){"use strict";n.d(e,"c",(function(){return w})),n.d(e,"a",(function(){return C})),n.d(e,"b",(function(){return h}));n(43),n(85);var r=n(0),o=n(355),c=n(356),l=n(6);n(42);function d(){return(d=Object(l.a)(regeneratorRuntime.mark((function t(e){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("modules").fetch();case 2:if(content=t.sent,!Array.isArray(content)){t.next=5;break}throw new TypeError("Unexpected array for modules");case 5:return t.abrupt("return",content.body);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var f=n(354),v=n(353);function m(){var t=Object(f.a)();return Object(v.a)((function(){return function(t){return d.apply(this,arguments)}(t)}))}function w(){var t=m();return Object(r.a)((function(){return t.value.map((function(t){return t.id}))}))}function C(t){var e=m();return Object(r.a)((function(){return Object(r.q)(e).find((function(e){return e.id===Object(r.q)(t)}))}))}function h(t){var e=function(t){return Object(c.c)({modules:{$contains:Object(r.q)(t)}})}(t);return Object(r.a)((function(){return Object(o.e)(Object(r.q)(e))}))}},367:function(t,e,n){var content=n(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("36b4ae02",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n(361)},369:function(t,e,n){var r=n(68)((function(i){return i[1]}));r.push([t.i,'.category-card[data-v-22945c8b]{position:relative;border-radius:0.75rem;border-width:4px;font-weight:700;border-color:var(--color)}.growing-background[data-v-22945c8b]{display:flex;width:100%}.growing-background[data-v-22945c8b]:before{content:"";position:absolute;top:0;left:0;width:var(--background-width);height:100%;background-color:var(--color)}.growing-background span[data-v-22945c8b]{color:var(--color)}.growing-background[data-v-22945c8b],.growing-background[data-v-22945c8b]:before{filter:invert()}.growing-background span[data-v-22945c8b]{mix-blend-mode:difference;filter:invert()}',""]),r.locals={},t.exports=r},373:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(362),c=Object(r.b)({props:{module:{default:"beruf",type:String}},setup:function(t){var e=Object(r.g)(t,"module"),n=Object(o.a)(e),c=Object(o.b)(e);return{color:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.i)(n))||void 0===t?void 0:t.color)&&void 0!==e?e:"#0f0"})),percentDone:c}}}),l=c,d=(n(368),n(41)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category-card",style:"--color: "+t.color+";"},[n("div",{staticClass:"growing-background-parent"},[n("div",{staticClass:"growing-background",style:"--background-width: "+t.percentDone+"%;"},[n("span",{staticClass:"flex-grow m-2"},[t._v(t._s(t.$t("modules."+t.module)))]),t._v(" "),n("span",{staticClass:"m-2"},[t._v(t._s(t.percentDone)+"%")])])])])}),[],!1,null,"22945c8b",null);e.default=component.exports},375:function(t,e,n){"use strict";n(367)},376:function(t,e,n){var r=n(68)((function(i){return i[1]}));r.push([t.i,".nuxt-logo{height:180px}",""]),r.locals={},t.exports=r},383:function(t,e,n){"use strict";n.r(e);n(375);var r=n(41),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"nuxt-logo",attrs:{viewBox:"0 0 45 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z",fill:"#00DC82"}})])}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(354),c=Object(r.b)({setup:function(t){return{content:Object(o.b)("hello"),task:Object(r.e)("mutterschaftsgeld")}}}),l=n(41),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLogo"),t._v(" "),n("div",[t._v("TEST")]),t._v(" "),n("CategoryCard",{attrs:{name:"hello world"}}),t._v(" "),n("h2",[t._v(" "+t._s(null!=t.content?t.content.title:"")+" ")]),t._v(" "),n("div",{staticClass:"mx-2"},[n("bmfsfj-checkbox",{attrs:{label:"TEST 1",value:!1}}),t._v(" "),n("nuxt-content",{attrs:{document:t.content}})],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],attrs:{type:"text"},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}}),t._v(" "),n("bmfsfj-task",{attrs:{task:t.task}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NuxtLogo:n(383).default,CategoryCard:n(373).default,BmfsfjCheckbox:n(365).default,BmfsfjTask:n(380).default})}}]);