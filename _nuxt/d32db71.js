(window.webpackJsonp=window.webpackJsonp||[]).push([[17,8,15],{361:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(6),o=(n(46),n(0));function c(t){var e=Object(o.k)(null);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function l(t){var e=Object(o.k)([]);return Object(o.s)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}},362:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(7),o=n(361),c=Object(r.m)("$content",!1),l=function(t){var e=c();return Object(o.b)((function(){return e(Object(r.i)(t)).fetch()}))}},365:function(t,e,n){"use strict";n.d(e,"a",(function(){return A})),n.d(e,"b",(function(){return E})),n.d(e,"d",(function(){return B})),n.d(e,"c",(function(){return L}));n(29),n(22),n(35),n(31),n(39);var r=n(12),o=n(61),c=n(15),l=n(6),d=(n(46),n(34),n(386),n(387),n(47),n(85),n(51),n(105),n(250),n(0)),f=n(486),h=n(483),v=n(487),m=n(488),y=n(489),O=n(249),w=(n(37),n(104),"todos");function _(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)&&"recommendedDateFromExpectedBirth"in content}(content))throw new Error("Non todo content document: ".concat(JSON.stringify(content)));return{document:content,id:content.id,title:content.title,modules:content.modules,recommendedDateFromExpectedBirth:content.recommendedDateFromExpectedBirth}}function j(t,e){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(w,{deep:!0}).where({id:n}).limit(1).fetch();case 2:if(r=t.sent,Array.isArray(r)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===r.length){t.next=7;break}throw new Error("Found no todo with the id ".concat(n));case 7:return t.abrupt("return",_(r[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){return C.apply(this,arguments)}function C(){return C=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},r=c.length>2&&void 0!==c[2]?c[2]:null,t.next=4,e(w,{deep:!0}).without("data").where(n).search(r).fetch();case 4:if(o=t.sent,Array.isArray(o)){t.next=7;break}throw new Error("Expected array of todo contents");case 7:return t.abrupt("return",o.map((function(content){return _(content)})));case 8:case"end":return t.stop()}}),t)}))),C.apply(this,arguments)}function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function A(t,e,n){return $.apply(this,arguments)}function $(){return($=Object(l.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Object(d.p)(Object(O.getTodo)(e,r)),t.next=3,j(n,r);case 3:return c=t.sent,t.abrupt("return",Object(d.j)(P(P({},o),c)));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t,e){return D.apply(this,arguments)}function D(){return D=Object(l.a)(regeneratorRuntime.mark((function t(e,n){var r,o,c,l=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>2&&void 0!==l[2]?l[2]:{},o=l.length>3&&void 0!==l[3]?l[3]:null,t.next=4,S(n,r,o);case 4:if(c=t.sent.map((function(t){return Object(d.j)(P(P({},t),Object(d.p)(Object(O.getTodo)(e,t.id))))})),""!==o){t.next=7;break}return t.abrupt("return",c.sort(T(new Date)));case 7:return t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)}))),D.apply(this,arguments)}function B(t){var e=function(t){return t.filter((function(t){return t.finished})).length}(t)/t.length*100;return Number.isNaN(e)?100:e}function T(t){return function(e,n){return Object(f.a)(Object(h.a)(e.recommendedDateFromExpectedBirth)(t))(Object(h.a)(n.recommendedDateFromExpectedBirth)(t))}}var V=[{months:-12},{months:-9},{months:-6},{months:-3},{weeks:-2},{weeks:-1},{days:-1},{days:1},{weeks:1},{months:1}];function L(t,e){var n=function(t){return V.map((function(e){return Object(h.a)(e)(t)}))}(e),l=function(t){return function(e){var n;return null!==(n=t.find((function(t){return Object(v.a)(t)(e)})))&&void 0!==n?n:t[0]}}(n),d=t.reduce((function(t,n){var r,d=Object(h.a)(n.recommendedDateFromExpectedBirth)(e),f=l(d).getTime(),v=Object(m.a)(Number.isNaN(f)?0:f);return P(P({},t),{},Object(c.a)({},v,[].concat(Object(o.a)(null!==(r=t[v])&&void 0!==r?r:[]),[n])))}),{});return Object.entries(d).map((function(t){var e=Object(r.a)(t,2),n=e[0],o=e[1];return{group:Object(y.a)(n),todos:o}}))}},368:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return m}));var r=n(6),o=(n(46),n(34),n(0)),c=n(362),l=n(365),d=n(361),f=n(249);function h(){return{store:Object(f.useTodosStore)(),$content:Object(c.a)()}}var v=function(t){var e=h(),n=e.store,r=e.$content;return Object(d.b)((function(){return Object(l.a)(n,r,Object(o.q)(t))}))};function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,f=h(),v=f.store,m=f.$content;return Object(d.a)(Object(r.a)(regeneratorRuntime.mark((function r(){var d,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d=Object(o.q)(t)?{modules:{$contains:Object(o.q)(t)}}:{},r.next=3,Object(l.b)(v,m,d,Object(o.q)(e));case 3:return f=r.sent,r.abrupt("return",f.filter((function(t){return null==Object(o.q)(n)||!0===t.assignees[Object(o.q)(n)]})).filter((function(t){return null==Object(o.q)(c)||!Object(o.q)(c)||t.finished})));case 5:case"end":return r.stop()}}),r)}))))}},370:function(t,e,n){"use strict";n.d(e,"c",(function(){return m})),n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return O}));n(47),n(85),n(34);var r=n(0),o=n(365),c=n(368),l=n(6);n(46);function d(){return(d=Object(l.a)(regeneratorRuntime.mark((function t(e){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("modules").fetch();case 2:if(content=t.sent,!Array.isArray(content)){t.next=5;break}throw new TypeError("Unexpected array for modules");case 5:return t.abrupt("return",content.body);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var f=n(362),h=n(361);function v(){var t=Object(f.a)();return Object(h.a)((function(){return function(t){return d.apply(this,arguments)}(t)}))}function m(){var t=v();return Object(r.a)((function(){return t.value.map((function(t){return t.id}))}))}function y(t){var e=v();return Object(r.a)((function(){return Object(r.q)(e).find((function(e){return e.id===Object(r.q)(t)}))}))}function O(t){var e=function(t){return Object(c.b)(Object(r.q)(t))}(t);return Object(r.a)((function(){return Object(o.d)(Object(r.q)(e))}))}},372:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("25d71212",content,!0,{sourceMap:!1})},375:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("4d9b9242",content,!0,{sourceMap:!1})},379:function(t,e,n){"use strict";n(372)},380:function(t,e,n){var r=n(63)((function(i){return i[1]}));r.push([t.i,".module-icon[data-v-61d8feb8]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));background-color:var(--color)}",""]),r.locals={},t.exports=r},382:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(370),c=Object(r.d)({props:{moduleId:{type:String,required:!0}},setup:function(t){var e=Object(r.p)(t).moduleId,n=Object(o.a)(e);return{icon:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.q)(n))||void 0===t?void 0:t.icon)&&void 0!==e?e:""})),color:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.q)(n))||void 0===t?void 0:t.color2)&&void 0!==e?e:""}))}}}),l=c,d=(n(379),n(45)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"module-icon flex",style:"--color: "+t.color},[n("font-awesome-icon",{staticStyle:{margin:"auto"},attrs:{"fixed-width":"",icon:t.icon}})],1)}),[],!1,null,"61d8feb8",null);e.default=component.exports},385:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(23),c=n(388),l=n.n(c),d=Object(r.d)({components:{vSelect:l.a},inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},value:{type:null,default:null}},setup:function(t,e){var n=e.attrs,r=e.emit;return{attrs:n,onInput:function(t){r("input",t)},unselect:function(){r("input",null)},faTimesCircle:o.z,faAngleDown:o.a}}}),f=(n(389),n(45)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row border-2 border-primary-500 rounded-full"},[null!=t.value?n("button",{staticClass:"ml-2",on:{click:t.unselect}},[n("font-awesome-icon",{staticClass:"text-primary-500",attrs:{icon:t.faTimesCircle}})],1):t._e(),t._v(" "),n("v-select",t._b({staticClass:"flex-grow",attrs:{options:t.items,clearable:!1,searchable:!1,value:t.value},on:{input:t.onInput},scopedSlots:t._u([t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(e){return[t._t(n,null,null,e)]}}}))],null,!0)},"v-select",t.attrs,!1))],1)}),[],!1,null,null,null);e.default=component.exports},388:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){var r=n(4),i=n(5),s=n(6);t.exports=function(t){return r(t)||i(t)||s()}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";var r=n(2);n.n(r).a},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),s=n(1),o=n.n(s),a=n(3),c=n.n(a),l={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()},open:function(t){var e=this;this.autoscroll&&t&&this.$nextTick((function(){return e.maybeAdjustScroll()}))}},methods:{maybeAdjustScroll:function(){var t,e=(null===(t=this.$refs.dropdownMenu)||void 0===t?void 0:t.children[this.typeAheadPointer])||!1;if(e){var n=this.getDropdownViewport(),r=e.getBoundingClientRect(),i=r.top,s=r.bottom,o=r.height;if(i<n.top)return this.$refs.dropdownMenu.scrollTop=e.offsetTop;if(s>n.bottom)return this.$refs.dropdownMenu.scrollTop=e.offsetTop-(n.height-o)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},u={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var t=0;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}}},methods:{typeAheadUp:function(){for(var t=this.typeAheadPointer-1;t>=0;t--)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadDown:function(){for(var t=this.typeAheadPointer+1;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadSelect:function(){var t=this.filteredOptions[this.typeAheadPointer];t&&this.select(t)}}},p={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(t){this.mutableLoading=t}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==t?!this.mutableLoading:t}}};function d(t,e,n,r,i,s,o,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}var f={Deselect:d({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[e("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:d({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[e("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports},h={inserted:function(t,e,n){var r=n.context;if(r.appendToBody){var i=r.$refs.toggle.getBoundingClientRect(),s=i.height,o=i.top,a=i.left,c=i.width,l=window.scrollX||window.pageXOffset,u=window.scrollY||window.pageYOffset;t.unbindPosition=r.calculatePosition(t,r,{width:c+"px",left:l+a+"px",top:u+o+s+"px"}),document.body.appendChild(t)}},unbind:function(t,e,n){n.context.appendToBody&&(t.unbindPosition&&"function"==typeof t.unbindPosition&&t.unbindPosition(),t.parentNode&&t.parentNode.removeChild(t))}},v=function(t){var e={};return Object.keys(t).sort().forEach((function(n){e[n]=t[n]})),JSON.stringify(e)},b=0,m=function(){return++b};function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={components:y({},f),directives:{appendToBody:h},mixins:[l,u,p],props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(t){return t}},selectable:{type:Function,default:function(t){return!0}},getOptionLabel:{type:Function,default:function(t){return"object"===o()(t)?t.hasOwnProperty(this.label)?t[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(t),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):t}},getOptionKey:{type:Function,default:function(t){if("object"!==o()(t))return t;try{return t.hasOwnProperty("id")?t.id:v(t)}catch(e){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",t,e)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(t,e,n){return(e||"").toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1}},filter:{type:Function,default:function(t,e){var n=this;return t.filter((function(t){var r=n.getOptionLabel(t);return"number"==typeof r&&(r=r.toString()),n.filterBy(t,r,e)}))}},createOption:{type:Function,default:function(t){return"object"===o()(this.optionList[0])?c()({},this.label,t):t}},resetOnOptionsChange:{default:!1,validator:function(t){return["function","boolean"].includes(o()(t))}},clearSearchOnBlur:{type:Function,default:function(t){var e=t.clearSearchOnSelect,n=t.multiple;return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(t,e){return t}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(t,e,n){var r=n.width,i=n.top,s=n.left;t.style.top=i,t.style.left=s,t.style.width=r}},dropdownShouldOpen:{type:Function,default:function(t){var e=t.noDrop,n=t.open,r=t.mutableLoading;return!e&&n&&!r}}},data:function(){return{uid:m(),search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var t=this.value;return this.isTrackingValues&&(t=this.$data._value),t?[].concat(t):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var t=this,e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:y({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return t.isComposing=!0},compositionend:function(){return t.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(e){return t.search=e.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:y({},e,{deselect:this.deselect}),footer:y({},e,{deselect:this.deselect})}},childComponents:function(){return y({},f,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions:function(){var t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;var e=this.search.length?this.filter(t,this.search,this):t;if(this.taggable&&this.search.length){var n=this.createOption(this.search);this.optionExists(n)||e.unshift(n)}return e},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options:function(t,e){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(t,e,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:function(t){this.isTrackingValues&&this.setInternalValueFromOptions(t)},multiple:function(){this.clearSelection()},open:function(t){this.$emit(t?"open":"close")}},created:function(){this.mutableLoading=this.loading,void 0!==this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value),this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(t){var e=this;Array.isArray(t)?this.$data._value=t.map((function(t){return e.findOptionFromReducedValue(t)})):this.$data._value=this.findOptionFromReducedValue(t)},select:function(t){this.$emit("option:selecting",t),this.isOptionSelected(t)||(this.taggable&&!this.optionExists(t)&&this.$emit("option:created",t),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t),this.$emit("option:selected",t)),this.onAfterSelect(t)},deselect:function(t){var e=this;this.$emit("option:deselecting",t),this.updateValue(this.selectedValue.filter((function(n){return!e.optionComparator(n,t)}))),this.$emit("option:deselected",t)},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(t){var e=this;void 0===this.value&&(this.$data._value=t),null!==t&&(t=Array.isArray(t)?t.map((function(t){return e.reduce(t)})):this.reduce(t)),this.$emit("input",t)},toggleDropdown:function(t){var e=t.target!==this.searchEl;e&&t.preventDefault();var n=[].concat(i()(this.$refs.deselectButtons||[]),i()([this.$refs.clearButton]||!1));void 0===this.searchEl||n.filter(Boolean).some((function(e){return e.contains(t.target)||e===t.target}))?t.preventDefault():this.open&&e?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(t){var e=this;return this.selectedValue.some((function(n){return e.optionComparator(n,t)}))},optionComparator:function(t,e){return this.getOptionKey(t)===this.getOptionKey(e)},findOptionFromReducedValue:function(t){var e=this,n=[].concat(i()(this.options),i()(this.pushedTags)).filter((function(n){return JSON.stringify(e.reduce(n))===JSON.stringify(t)}));return 1===n.length?n[0]:n.find((function(t){return e.optionComparator(t,e.$data._value)}))||t},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var t=null;this.multiple&&(t=i()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(t)}},optionExists:function(t){var e=this;return this.optionList.some((function(n){return e.optionComparator(n,t)}))},normalizeOptionForSlot:function(t){return"object"===o()(t)?t:c()({},this.label,t)},pushTag:function(t){this.pushedTags.push(t)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var t=this.clearSearchOnSelect,e=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:t,multiple:e})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(t){var e=this,n=function(t){return t.preventDefault(),!e.isComposing&&e.typeAheadSelect()},r={8:function(t){return e.maybeDeleteValue()},9:function(t){return e.onTab()},27:function(t){return e.onEscape()},38:function(t){return t.preventDefault(),e.typeAheadUp()},40:function(t){return t.preventDefault(),e.typeAheadDown()}};this.selectOnKeyCodes.forEach((function(t){return r[t]=n}));var i=this.mapKeydown(r,this);if("function"==typeof i[t.keyCode])return i[t.keyCode](t)}}},w=(n(7),d(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-select",class:t.stateClasses,attrs:{dir:t.dir}},[t._t("header",null,null,t.scope.header),t._v(" "),n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:"vs"+t.uid+"__combobox",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":"vs"+t.uid+"__listbox","aria-label":"Search for option"},on:{mousedown:function(e){return t.toggleDropdown(e)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[t._l(t.selectedValue,(function(e){return t._t("selected-option-container",[n("span",{key:t.getOptionKey(e),staticClass:"vs__selected"},[t._t("selected-option",[t._v("\n            "+t._s(t.getOptionLabel(e))+"\n          ")],null,t.normalizeOptionForSlot(e)),t._v(" "),t.multiple?n("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:t.disabled,type:"button",title:"Deselect "+t.getOptionLabel(e),"aria-label":"Deselect "+t.getOptionLabel(e)},on:{click:function(n){return t.deselect(e)}}},[n(t.childComponents.Deselect,{tag:"component"})],1):t._e()],2)],{option:t.normalizeOptionForSlot(e),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})})),t._v(" "),t._t("search",[n("input",t._g(t._b({staticClass:"vs__search"},"input",t.scope.search.attributes,!1),t.scope.search.events))],null,t.scope.search)],2),t._v(" "),n("div",{ref:"actions",staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:t.disabled,type:"button",title:"Clear Selected","aria-label":"Clear Selected"},on:{click:t.clearSelection}},[n(t.childComponents.Deselect,{tag:"component"})],1),t._v(" "),t._t("open-indicator",[t.noDrop?t._e():n(t.childComponents.OpenIndicator,t._b({tag:"component"},"component",t.scope.openIndicator.attributes,!1))],null,t.scope.openIndicator),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[t._v("Loading...")])],null,t.scope.spinner)],2)]),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],key:"vs"+t.uid+"__listbox",ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs"+t.uid+"__listbox",role:"listbox",tabindex:"-1"},on:{mousedown:function(e){return e.preventDefault(),t.onMousedown(e)},mouseup:t.onMouseUp}},[t._t("list-header",null,null,t.scope.listHeader),t._v(" "),t._l(t.filteredOptions,(function(e,r){return n("li",{key:t.getOptionKey(e),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--selected":t.isOptionSelected(e),"vs__dropdown-option--highlight":r===t.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(e)},attrs:{id:"vs"+t.uid+"__option-"+r,role:"option","aria-selected":r===t.typeAheadPointer||null},on:{mouseover:function(n){t.selectable(e)&&(t.typeAheadPointer=r)},click:function(n){n.preventDefault(),n.stopPropagation(),t.selectable(e)&&t.select(e)}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,t.normalizeOptionForSlot(e))],2)})),t._v(" "),0===t.filteredOptions.length?n("li",{staticClass:"vs__no-options"},[t._t("no-options",[t._v("Sorry, no matching options.")],null,t.scope.noOptions)],2):t._e(),t._v(" "),t._t("list-footer",null,null,t.scope.listFooter)],2):n("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs"+t.uid+"__listbox",role:"listbox"}})]),t._v(" "),t._t("footer",null,null,t.scope.footer)],2)}),[],!1,null,null,null).exports),_={ajax:p,pointer:u,pointerScroll:l};n.d(e,"VueSelect",(function(){return w})),n.d(e,"mixins",(function(){return _})),e.default=w}])},389:function(t,e,n){"use strict";n(375)},390:function(t,e,n){var r=n(63)((function(i){return i[1]}));r.push([t.i,".vs__dropdown-toggle{border:unset;border-radius:unset;flex-grow:1}.v-select{display:flex;flex-direction:column}.vs__dropdown-menu .vs__dropdown-option--highlight, .vs__dropdown-menu .vs__dropdown-option--selected{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},414:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(370),c=Object(r.b)({props:{value:{type:String,default:null}},setup:function(t,e){var n=e.emit;return{selectModule:function(t){n("input",t)},modules:Object(o.c)()}}}),l=c,d=n(45),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-select-chip",{staticClass:"w-1/3 h-10 rounded-xl",attrs:{placeholder:"Modul",items:t.modules,value:t.value},on:{input:t.selectModule},scopedSlots:t._u([{key:"option",fn:function(e){var label=e.label;return[t._v(t._s(t.$t("modules."+label)))]}},{key:"selected-option",fn:function(t){var label=t.label;return[n("bmfsfj-icon-module",{staticClass:"w-6 h-6 text-xs rounded-full",attrs:{"module-id":label}})]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjIconModule:n(382).default,BmfsfjSelectChip:n(385).default})}}]);