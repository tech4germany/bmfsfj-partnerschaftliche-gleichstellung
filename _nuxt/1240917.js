(window.webpackJsonp=window.webpackJsonp||[]).push([[22,2,3,4,7,8,13],{352:function(t,e,n){"use strict";n.d(e,"b",(function(){return C})),n.d(e,"a",(function(){return A})),n.d(e,"c",(function(){return P})),n.d(e,"d",(function(){return E})),n.d(e,"e",(function(){return T}));n(33),n(22),n(44),n(35),n(34),n(52);var r=n(20),o=(n(57),n(6)),l=(n(43),n(13),n(247),n(21),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(23),n(47),n(31),n(103),n(42),n(0)),c=n(353);function d(content){if(!function(content){return"id"in content&&"string"==typeof content.id&&"title"in content&&"string"==typeof content.title&&"modules"in content&&Array.isArray(content.modules)}(content))throw new Error("Non task content document");return{document:content,id:content.id,title:content.title,modules:content.modules}}var f=n(264);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function y(t,e){return t("tasks",{deep:!0}).where({id:e,task:!0}).limit(1)}function m(t,e){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e,n).only("dir").fetch();case 2:if(r=t.sent,Array.isArray(r)){t.next=5;break}throw new TypeError("Expected an array");case 5:return t.abrupt("return",r[0].dir);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t,e,n){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(n,"/").concat(r)).fetch();case 2:if(o=t.sent,!Array.isArray(o)){t.next=5;break}throw new TypeError("Unexpected array");case 5:if(null!=o){t.next=7;break}throw new Error("Found no task page at ".concat(n,"/").concat(r));case 7:return t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e,n).fetch();case 2:if(r=t.sent,Array.isArray(r)){t.next=5;break}throw new TypeError("Expected an array");case 5:if(1===r.length){t.next=7;break}throw new Error("Found no task with the id ".concat(n));case 7:return t.abrupt("return",d(r[0]));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){return k.apply(this,arguments)}function k(){return k=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:{},r=l.length>2&&void 0!==l[2]?l[2]:null,t.next=4,e("tasks",{deep:!0}).without("data").where(v({task:{$eq:!0}},n)).search(r).fetch();case 4:if(o=t.sent,Array.isArray(o)){t.next=7;break}throw new Error("Expected array of task contents");case 7:return t.abrupt("return",o.map((function(content){return d(content)})));case 8:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}function C(t){var e=Object(l.k)(null);return Object(l.s)(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function A(t){var e=Object(l.k)([]);return Object(l.s)(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))),e}function $(t,e){var n=Object(c.a)();return C((function(){return t(n,Object(l.q)(e))}))}var P=function(t,e){var n=Object(c.a)(),r=function(t){return $(m,t)}(t);return C(Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(null==t.value||null==r.value){o.next=2;break}return o.abrupt("return",_(n,r.value,e.value));case 2:return o.next=4,null;case 4:return o.abrupt("return",o.sent);case 5:case"end":return o.stop()}}),o)}))))};function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(c.a)();return A((function(){return S(n,Object(l.q)(t),Object(l.q)(e))}))}function T(t){var e=function(t){return $(x,t)}(t),n=Object(f.useTodosStore)();return{task:e,modules:Object(l.a)((function(){var t,n;return null!==(n=null===(t=e.value)||void 0===t?void 0:t.modules)&&void 0!==n?n:[]})),title:Object(l.a)((function(){var t;return null===(t=e.value)||void 0===t?void 0:t.title})),document:Object(l.a)((function(){var t;return e.value&&"document"in e.value?null===(t=e.value)||void 0===t?void 0:t.document:null})),finished:Object(l.a)((function(){var e;return null===(e=n.todos[Object(l.q)(t)])||void 0===e?void 0:e.finished})),updateFinished:function(e){return n.updateTodoFinished({todoId:Object(l.q)(t),finished:e})}}}},353:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));var r=n(18),o=n(352),l=Object(r.l)("$content",!1),c=function(t){var e=l();return Object(o.b)((function(){return e(Object(r.h)(t)).fetch()}))}},354:function(t,e,n){"use strict";n.r(e);var r=n(41),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border-2 border-primary-500 rounded-lg"},[n("header",{staticClass:"bg-primary-500 text-white pl-4 p-2"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"m-2"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("08fa8d46",content,!0,{sourceMap:!1})},356:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(104),l=Object(r.d)({inheritAttrs:!1,props:{label:{type:String,default:""},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var n=e.attrs,l=Object(r.o)(t,"value");return{attrs:n,checkboxIcon:Object(r.a)((function(){return null==Object(r.q)(l)?o.c:Object(r.q)(l)?o.b:o.e}))}}}),c=n(41),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex flex-row items-center space-x-1"},[n("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",icon:t.checkboxIcon}}),t._v(" "),n("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),n("span",[t._v(t._s(t.label))])],1)])}),[],!1,null,null,null);e.default=component.exports},358:function(t,e,n){"use strict";n.r(e),n.d(e,"useLocalRoute",(function(){return l}));var r=n(18),o=n(0),l=Object(r.l)("localeRoute",!1),c=Object(o.d)({props:{todo:{type:String,default:null},page:{type:String,default:null}},setup:function(t){var e=t.todo,n=t.page,r=l();return{to:Object(o.a)((function(){return r(null==n?{name:"tasks-task",params:{task:e}}:{name:"tasks-task-page",params:{page:n}})}))}}}),d=n(41),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{attrs:{to:t.to}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},359:function(t,e,n){"use strict";n(355)},360:function(t,e,n){var r=n(68)((function(i){return i[1]}));r.push([t.i,"button[data-v-4ec7d6ea]{border-radius:0.25rem;border-width:2px;--tw-border-opacity:1;border-color:rgba(0, 121, 127, var(--tw-border-opacity));padding:0.5rem}button.checked[data-v-4ec7d6ea]{--tw-bg-opacity:1;background-color:rgba(0, 121, 127, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},361:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),l=(n(359),n(41)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,"4ec7d6ea",null);e.default=component.exports},366:function(t,e,n){var content=n(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("4cd72b7c",content,!0,{sourceMap:!1})},370:function(t,e,n){"use strict";n.r(e);var r=n(18),o=n(352),l=Object(r.b)({props:{task:{default:"mutterschaftsgeld-beantragen",type:String,required:!0}},setup:function(t){var e=Object(r.f)(t,"task"),n=Object(o.e)(e),title=n.title;return{taskId:e,modules:n.modules,title:title,document:n.document,finished:n.finished,updateFinished:n.updateFinished}}}),c=n(41),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-card",{staticClass:"my-2",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"flex dark flex-row"},[n("bmfsfj-checkbox",{attrs:{value:t.finished,label:t.title},on:{input:t.updateFinished}})],1)]},proxy:!0}])},[t._v(" "),n("todo-link",{attrs:{todo:t.taskId}},[t._v("Go!")]),t._v(" "),n("span",t._l(t.modules,(function(e){return n("li",{key:e},[t._v(t._s(t.$t("modules."+e)))])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjCheckbox:n(356).default,TodoLink:n(358).default,BmfsfjCard:n(354).default})},373:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return h}));var r=n(6),o=(n(43),n(42),n(0)),l=n(353),c=n(352);function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(e){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("modules").fetch();case 2:if(content=t.sent,!Array.isArray(content)){t.next=5;break}throw new TypeError("Unexpected array for modules");case 5:return t.abrupt("return",content.body);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){var t=Object(l.a)();return Object(c.a)((function(){return function(t){return d.apply(this,arguments)}(t)}))}function h(){var t=f();return Object(o.a)((function(){return t.value.map((function(t){return t.id}))}))}},374:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){var r=n(4),i=n(5),s=n(6);t.exports=function(t){return r(t)||i(t)||s()}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";var r=n(2);n.n(r).a},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),s=n(1),o=n.n(s),a=n(3),l=n.n(a),c={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()},open:function(t){var e=this;this.autoscroll&&t&&this.$nextTick((function(){return e.maybeAdjustScroll()}))}},methods:{maybeAdjustScroll:function(){var t,e=(null===(t=this.$refs.dropdownMenu)||void 0===t?void 0:t.children[this.typeAheadPointer])||!1;if(e){var n=this.getDropdownViewport(),r=e.getBoundingClientRect(),i=r.top,s=r.bottom,o=r.height;if(i<n.top)return this.$refs.dropdownMenu.scrollTop=e.offsetTop;if(s>n.bottom)return this.$refs.dropdownMenu.scrollTop=e.offsetTop-(n.height-o)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},u={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var t=0;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}}},methods:{typeAheadUp:function(){for(var t=this.typeAheadPointer-1;t>=0;t--)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadDown:function(){for(var t=this.typeAheadPointer+1;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadSelect:function(){var t=this.filteredOptions[this.typeAheadPointer];t&&this.select(t)}}},p={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(t){this.mutableLoading=t}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==t?!this.mutableLoading:t}}};function d(t,e,n,r,i,s,o,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}var f={Deselect:d({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[e("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:d({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[e("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports},h={inserted:function(t,e,n){var r=n.context;if(r.appendToBody){var i=r.$refs.toggle.getBoundingClientRect(),s=i.height,o=i.top,a=i.left,l=i.width,c=window.scrollX||window.pageXOffset,u=window.scrollY||window.pageYOffset;t.unbindPosition=r.calculatePosition(t,r,{width:l+"px",left:c+a+"px",top:u+o+s+"px"}),document.body.appendChild(t)}},unbind:function(t,e,n){n.context.appendToBody&&(t.unbindPosition&&"function"==typeof t.unbindPosition&&t.unbindPosition(),t.parentNode&&t.parentNode.removeChild(t))}},v=function(t){var e={};return Object.keys(t).sort().forEach((function(n){e[n]=t[n]})),JSON.stringify(e)},b=0,y=function(){return++b};function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={components:m({},f),directives:{appendToBody:h},mixins:[c,u,p],props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(t){return t}},selectable:{type:Function,default:function(t){return!0}},getOptionLabel:{type:Function,default:function(t){return"object"===o()(t)?t.hasOwnProperty(this.label)?t[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(t),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):t}},getOptionKey:{type:Function,default:function(t){if("object"!==o()(t))return t;try{return t.hasOwnProperty("id")?t.id:v(t)}catch(e){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",t,e)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(t,e,n){return(e||"").toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1}},filter:{type:Function,default:function(t,e){var n=this;return t.filter((function(t){var r=n.getOptionLabel(t);return"number"==typeof r&&(r=r.toString()),n.filterBy(t,r,e)}))}},createOption:{type:Function,default:function(t){return"object"===o()(this.optionList[0])?l()({},this.label,t):t}},resetOnOptionsChange:{default:!1,validator:function(t){return["function","boolean"].includes(o()(t))}},clearSearchOnBlur:{type:Function,default:function(t){var e=t.clearSearchOnSelect,n=t.multiple;return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(t,e){return t}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(t,e,n){var r=n.width,i=n.top,s=n.left;t.style.top=i,t.style.left=s,t.style.width=r}},dropdownShouldOpen:{type:Function,default:function(t){var e=t.noDrop,n=t.open,r=t.mutableLoading;return!e&&n&&!r}}},data:function(){return{uid:y(),search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var t=this.value;return this.isTrackingValues&&(t=this.$data._value),t?[].concat(t):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var t=this,e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:m({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return t.isComposing=!0},compositionend:function(){return t.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(e){return t.search=e.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:m({},e,{deselect:this.deselect}),footer:m({},e,{deselect:this.deselect})}},childComponents:function(){return m({},f,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions:function(){var t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;var e=this.search.length?this.filter(t,this.search,this):t;if(this.taggable&&this.search.length){var n=this.createOption(this.search);this.optionExists(n)||e.unshift(n)}return e},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options:function(t,e){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(t,e,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:function(t){this.isTrackingValues&&this.setInternalValueFromOptions(t)},multiple:function(){this.clearSelection()},open:function(t){this.$emit(t?"open":"close")}},created:function(){this.mutableLoading=this.loading,void 0!==this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value),this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(t){var e=this;Array.isArray(t)?this.$data._value=t.map((function(t){return e.findOptionFromReducedValue(t)})):this.$data._value=this.findOptionFromReducedValue(t)},select:function(t){this.$emit("option:selecting",t),this.isOptionSelected(t)||(this.taggable&&!this.optionExists(t)&&this.$emit("option:created",t),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t),this.$emit("option:selected",t)),this.onAfterSelect(t)},deselect:function(t){var e=this;this.$emit("option:deselecting",t),this.updateValue(this.selectedValue.filter((function(n){return!e.optionComparator(n,t)}))),this.$emit("option:deselected",t)},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(t){var e=this;void 0===this.value&&(this.$data._value=t),null!==t&&(t=Array.isArray(t)?t.map((function(t){return e.reduce(t)})):this.reduce(t)),this.$emit("input",t)},toggleDropdown:function(t){var e=t.target!==this.searchEl;e&&t.preventDefault();var n=[].concat(i()(this.$refs.deselectButtons||[]),i()([this.$refs.clearButton]||!1));void 0===this.searchEl||n.filter(Boolean).some((function(e){return e.contains(t.target)||e===t.target}))?t.preventDefault():this.open&&e?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(t){var e=this;return this.selectedValue.some((function(n){return e.optionComparator(n,t)}))},optionComparator:function(t,e){return this.getOptionKey(t)===this.getOptionKey(e)},findOptionFromReducedValue:function(t){var e=this,n=[].concat(i()(this.options),i()(this.pushedTags)).filter((function(n){return JSON.stringify(e.reduce(n))===JSON.stringify(t)}));return 1===n.length?n[0]:n.find((function(t){return e.optionComparator(t,e.$data._value)}))||t},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var t=null;this.multiple&&(t=i()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(t)}},optionExists:function(t){var e=this;return this.optionList.some((function(n){return e.optionComparator(n,t)}))},normalizeOptionForSlot:function(t){return"object"===o()(t)?t:l()({},this.label,t)},pushTag:function(t){this.pushedTags.push(t)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var t=this.clearSearchOnSelect,e=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:t,multiple:e})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(t){var e=this,n=function(t){return t.preventDefault(),!e.isComposing&&e.typeAheadSelect()},r={8:function(t){return e.maybeDeleteValue()},9:function(t){return e.onTab()},27:function(t){return e.onEscape()},38:function(t){return t.preventDefault(),e.typeAheadUp()},40:function(t){return t.preventDefault(),e.typeAheadDown()}};this.selectOnKeyCodes.forEach((function(t){return r[t]=n}));var i=this.mapKeydown(r,this);if("function"==typeof i[t.keyCode])return i[t.keyCode](t)}}},_=(n(7),d(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-select",class:t.stateClasses,attrs:{dir:t.dir}},[t._t("header",null,null,t.scope.header),t._v(" "),n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:"vs"+t.uid+"__combobox",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":"vs"+t.uid+"__listbox","aria-label":"Search for option"},on:{mousedown:function(e){return t.toggleDropdown(e)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[t._l(t.selectedValue,(function(e){return t._t("selected-option-container",[n("span",{key:t.getOptionKey(e),staticClass:"vs__selected"},[t._t("selected-option",[t._v("\n            "+t._s(t.getOptionLabel(e))+"\n          ")],null,t.normalizeOptionForSlot(e)),t._v(" "),t.multiple?n("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:t.disabled,type:"button",title:"Deselect "+t.getOptionLabel(e),"aria-label":"Deselect "+t.getOptionLabel(e)},on:{click:function(n){return t.deselect(e)}}},[n(t.childComponents.Deselect,{tag:"component"})],1):t._e()],2)],{option:t.normalizeOptionForSlot(e),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})})),t._v(" "),t._t("search",[n("input",t._g(t._b({staticClass:"vs__search"},"input",t.scope.search.attributes,!1),t.scope.search.events))],null,t.scope.search)],2),t._v(" "),n("div",{ref:"actions",staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:t.disabled,type:"button",title:"Clear Selected","aria-label":"Clear Selected"},on:{click:t.clearSelection}},[n(t.childComponents.Deselect,{tag:"component"})],1),t._v(" "),t._t("open-indicator",[t.noDrop?t._e():n(t.childComponents.OpenIndicator,t._b({tag:"component"},"component",t.scope.openIndicator.attributes,!1))],null,t.scope.openIndicator),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[t._v("Loading...")])],null,t.scope.spinner)],2)]),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],key:"vs"+t.uid+"__listbox",ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs"+t.uid+"__listbox",role:"listbox",tabindex:"-1"},on:{mousedown:function(e){return e.preventDefault(),t.onMousedown(e)},mouseup:t.onMouseUp}},[t._t("list-header",null,null,t.scope.listHeader),t._v(" "),t._l(t.filteredOptions,(function(e,r){return n("li",{key:t.getOptionKey(e),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--selected":t.isOptionSelected(e),"vs__dropdown-option--highlight":r===t.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(e)},attrs:{id:"vs"+t.uid+"__option-"+r,role:"option","aria-selected":r===t.typeAheadPointer||null},on:{mouseover:function(n){t.selectable(e)&&(t.typeAheadPointer=r)},click:function(n){n.preventDefault(),n.stopPropagation(),t.selectable(e)&&t.select(e)}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,t.normalizeOptionForSlot(e))],2)})),t._v(" "),0===t.filteredOptions.length?n("li",{staticClass:"vs__no-options"},[t._t("no-options",[t._v("Sorry, no matching options.")],null,t.scope.noOptions)],2):t._e(),t._v(" "),t._t("list-footer",null,null,t.scope.listFooter)],2):n("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs"+t.uid+"__listbox",role:"listbox"}})]),t._v(" "),t._t("footer",null,null,t.scope.footer)],2)}),[],!1,null,null,null).exports),w={ajax:p,pointer:u,pointerScroll:c};n.d(e,"VueSelect",(function(){return _})),n.d(e,"mixins",(function(){return w})),e.default=_}])},375:function(t,e,n){"use strict";n(366)},376:function(t,e,n){var r=n(68)((function(i){return i[1]}));r.push([t.i,".vs__dropdown-toggle{border:unset;border-radius:unset}",""]),r.locals={},t.exports=r},378:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(104),l=n(374),c=n.n(l),d=Object(r.d)({components:{vSelect:c.a},inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},value:{type:null,default:null}},setup:function(t,e){var n=e.attrs,r=e.emit;return{attrs:n,onInput:function(t){r("input",t)},unselect:function(){r("input",null)},faTimesCircle:o.f,faAngleDown:o.a}}}),f=(n(375),n(41)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row border-2 border-primary-500 rounded-full"},[null!=t.value?n("button",{staticClass:"ml-2",on:{click:t.unselect}},[n("font-awesome-icon",{staticClass:"text-primary-500",attrs:{icon:t.faTimesCircle}})],1):t._e(),t._v(" "),n("v-select",t._b({staticClass:"flex-grow",attrs:{options:t.items,clearable:!1,searchable:!1,value:t.value},on:{input:t.onInput}},"v-select",t.attrs,!1))],1)}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,n){"use strict";n.r(e);n(31),n(103),n(13),n(70);var r=n(18),o=n(352),l=n(373),c=Object(r.b)({setup:function(){var t=Object(r.d)(),e=Object(r.i)(),n=Object(r.a)((function(){var t,n,r;return null!==(r=null===(n=null===(t=e.value.query)||void 0===t?void 0:t.search)||void 0===n?void 0:n.toString())&&void 0!==r?r:""})),c=Object(o.d)(Object(r.a)((function(){return null!=t.value?{modules:{$contains:t.value}}:{}})),n),d=Object(l.a)();return{selectedCategory:t,selectCategory:function(e){t.value=e},tasks:c,categories:d}}}),d=n(41),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex w-full gap-2"},[n("bmfjfs-chip-select",{staticClass:"flex-grow",attrs:{placeholder:"Modul",items:t.categories,value:t.selectedCategory},on:{input:t.selectCategory},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[t._v(t._s(t.$t("modules."+n)))]}}])}),t._v(" "),n("bmfsfj-toggle-button",{staticClass:"rounded-full",attrs:{value:!1}},[t._v("Zeitlich")]),t._v(" "),n("bmfsfj-toggle-button",{staticClass:"rounded-full",attrs:{value:!0}},[t._v("Meine Todos")])],1),t._v(" "),t._l(t.tasks,(function(t){return n("bmfsfj-task",{key:t.id,attrs:{task:t.id}})}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfjfsChipSelect:n(378).default,BmfsfjToggleButton:n(361).default,BmfsfjTask:n(370).default})}}]);