(window.webpackJsonp=window.webpackJsonp||[]).push([[27,21,28,29],{378:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));n(253);var r=n(0),l=n(251);function o(){var t=Object(l.useUsersStore)();return Object(r.a)((function(){return Object.values(t.users)}))}function c(t){var e=Object(l.useUsersStore)();return Object(r.a)((function(){return null!=Object(r.t)(t)?e.users[Object(r.t)(t)]:null}))}},379:function(t,e,n){"use strict";n.r(e);var r=n(0),l=Object(r.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),o=n(37),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("4d9b9242",content,!0,{sourceMap:!1})},384:function(t,e,n){"use strict";n.r(e);n(29);var r=n(0),l=n(378),o=Object(r.d)({props:{userId:{type:String,required:!0}},setup:function(t){var e=Object(r.s)(t).userId,n=Object(l.a)(e);return{name:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.t)(n))||void 0===t?void 0:t.name)&&void 0!==e?e:""}))}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    bg-primary-500\n    flex\n    text-white\n    border-2 border-primary-500\n    w-8\n    h-8\n    rounded-full\n  "},[n("span",{staticClass:"m-auto"},[t._v(t._s(t.name.toUpperCase().substring(0,2)))])])}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(20),o=n(399),c=n.n(o),f=Object(r.d)({components:{vSelect:c.a},inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},value:{type:null,default:null}},setup:function(t,e){var n=e.attrs,r=e.emit;return{attrs:n,onInput:function(t){r("input",t)},unselect:function(){r("input",null)},faTimesCircle:l.C,faAngleDown:l.a}}}),d=(n(388),n(37)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row border-2 border-primary-500 rounded-full"},[null!=t.value?n("button",{staticClass:"ml-0.5",on:{click:t.unselect}},[n("font-awesome-icon",{staticClass:"text-primary-500",attrs:{icon:t.faTimesCircle}})],1):t._e(),t._v(" "),n("v-select",t._b({staticClass:"flex-grow",attrs:{options:t.items,clearable:!1,searchable:!1,value:t.value},on:{input:t.onInput},scopedSlots:t._u([t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(e){return[t._t(n,null,null,e)]}}}))],null,!0)},"v-select",t.attrs,!1))],1)}),[],!1,null,null,null);e.default=component.exports},388:function(t,e,n){"use strict";n(382)},389:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".vs__dropdown-toggle{border:unset;border-radius:unset;flex-grow:1}.v-select{display:flex;flex-direction:column}.vs__search{padding:0px;text-align:center}.vs__dropdown-menu .vs__dropdown-option--highlight, .vs__dropdown-menu .vs__dropdown-option--selected{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},409:function(t,e,n){var content=n(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("0d9fc2ed",content,!0,{sourceMap:!1})},419:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(39),n(105),n(18),n(73);var r=n(6);function l(){var t,e=(t=Object(r.m)(),Object(r.a)((function(){return t.value.query})));return{search:Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.l)(e).search)||void 0===t?void 0:t.toString())&&void 0!==n?n:""})),module:Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.l)(e).module)||void 0===t?void 0:t.toString())&&void 0!==n?n:null})),user:Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.l)(e).user)||void 0===t?void 0:t.toString())&&void 0!==n?n:null})),done:Object(r.a)((function(){return null!=Object(r.l)(e).done}))}}},420:function(t,e,n){"use strict";n.r(e);var r=n(6),l=n(396),o=Object(r.b)({props:{value:{type:String,default:null}},setup:function(t,e){var n=e.emit;return{attrs:e.attrs,selectModule:function(t){n("input",t)},modules:Object(l.c)()}}}),c=o,f=n(37),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-select-chip",t._b({staticClass:"w-1/3 h-11 rounded-xl",attrs:{items:t.modules,value:t.value},on:{input:t.selectModule},scopedSlots:t._u([{key:"option",fn:function(e){var label=e.label;return[t._v(t._s(t.$t("modules."+label)))]}},{key:"selected-option",fn:function(t){var label=t.label;return[n("bmfsfj-icon-module",{staticClass:"w-3 h-3 text-xs rounded-full",attrs:{"module-id":label}})]}}])},"bmfsfj-select-chip",t.attrs,!1))}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjIconModule:n(402).default,BmfsfjSelectChip:n(387).default})},421:function(t,e,n){"use strict";n.r(e);n(29),n(47);var r=n(6),l=n(384),o=n(378),c=Object(r.b)({components:{BmfsfjUserIcon:l.default},props:{value:{type:String,default:null}},setup:function(t,e){var n=e.emit,l=e.attrs,c=Object(o.b)();return{attrs:l,selectUser:function(t){n("input",null==t?void 0:t.value)},userName:function(t){var e=Object(o.a)(t);return Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.l)(e))||void 0===t?void 0:t.name)&&void 0!==n?n:""}))},users:Object(r.a)((function(){return Object(r.l)(c).map((function(t){return{value:t.id,label:t.name}}))}))}}}),f=n(37),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-select-chip",t._b({staticClass:"w-1/3 rounded-xl",attrs:{items:t.users,value:t.value},on:{input:t.selectUser},scopedSlots:t._u([{key:"option",fn:function(e){var label=e.label;return[t._v(t._s(label))]}},{key:"selected-option",fn:function(t){var label=t.label;return[n("bmfsfj-user-icon",{staticClass:"w-3 h-3 text-xs",attrs:{"user-id":label}})]}}])},"bmfsfj-select-chip",t.attrs,!1))}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjUserIcon:n(384).default,BmfsfjSelectChip:n(387).default})},426:function(t,e,n){"use strict";n(409)},427:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".checked[data-v-8cc39bae]{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},443:function(t,e,n){"use strict";n.r(e);var r=n(6),l=n(419),o=(n(30),n(23),n(34),n(36),n(32),n(44),n(16)),c=n(165);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(r.b)({setup:function(){var t,e,n,o=(t=Object(r.n)(),e=Object(r.m)(),n=Object(c.a)(),function(l){var o=n({query:d(d({},Object(r.l)(e).query),l)});null!=o&&t.push(o)}),f=Object(l.a)(),v=f.module,j=f.user;return{selectedModule:v,selectModule:function(t){var e;o({module:null!==(e=Object(r.l)(t))&&void 0!==e?e:void 0})},doneFilter:f.done,updateDoneFilter:function(t){o({done:t?"true":void 0})},selectedUser:j,selectUser:function(t){var e;o({user:null!==(e=Object(r.l)(t))&&void 0!==e?e:void 0})}}}}),j=(n(426),n(37)),component=Object(j.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row w-full gap-1"},[n("bmfsfj-select-module",{staticClass:"w-1/3 rounded-xl",attrs:{value:t.selectedModule,placeholder:t.$t("todos.filter.module")},on:{input:t.selectModule}}),t._v(" "),n("bmfsfj-select-user",{staticClass:"w-1/3 rounded-xl",attrs:{value:t.selectedUser,placeholder:t.$t("todos.filter.assignee")},on:{input:t.selectUser}}),t._v(" "),n("bmfsfj-toggle-button",{staticClass:"w-1/3 rounded-xl border-2 border-primary-500",class:{checked:t.doneFilter},attrs:{value:t.doneFilter},on:{input:t.updateDoneFilter}},[t._v(t._s(t.$t("todos.filter.done")))])],1)}),[],!1,null,"8cc39bae",null);e.default=component.exports;installComponents(component,{BmfsfjSelectModule:n(420).default,BmfsfjSelectUser:n(421).default,BmfsfjToggleButton:n(379).default})}}]);