(window.webpackJsonp=window.webpackJsonp||[]).push([[43,7,17,20,22,23],{371:function(t,e,n){"use strict";n.r(e);var r=n(0),l=Object(r.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),o=n(37),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,n){"use strict";n.r(e);n(29);var r=n(0),l=n(376),o=Object(r.d)({props:{userId:{type:String,required:!0}},setup:function(t){var e=Object(r.p)(t).userId,n=Object(l.a)(e);return{name:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.q)(n))||void 0===t?void 0:t.name)&&void 0!==e?e:""}))}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    bg-primary-500\n    flex\n    text-white\n    border-2 border-primary-500\n    w-8\n    h-8\n    rounded-full\n  "},[n("span",{staticClass:"m-auto"},[t._v(t._s(t.name.toUpperCase().substring(0,2)))])])}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));n(253);var r=n(0),l=n(251);function o(){var t=Object(l.useUsersStore)();return Object(r.a)((function(){return Object.values(t.users)}))}function c(t){var e=Object(l.useUsersStore)();return Object(r.a)((function(){return e.users[Object(r.q)(t)]}))}},381:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("4d9b9242",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(21),o=n(380),c=Object(r.d)({inheritAttrs:!1,props:{label:{type:String,default:null},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var n=e.attrs,c=Object(r.o)(t,"value");return{attrs:n,checkboxIcon:Object(r.a)((function(){return null==Object(r.q)(c)?l.x:Object(r.q)(c)?l.j:o.a}))}}}),d=n(37),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex flex-row items-center"},[n("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),n("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),t._t("default",(function(){return[n("span",{staticClass:"ml-1"},[t._v(t._s(t.label))])]}))],2)])}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(21),o=n(388),c=n.n(o),d=Object(r.d)({components:{vSelect:c.a},inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},value:{type:null,default:null}},setup:function(t,e){var n=e.attrs,r=e.emit;return{attrs:n,onInput:function(t){r("input",t)},unselect:function(){r("input",null)},faTimesCircle:l.z,faAngleDown:l.a}}}),f=(n(389),n(37)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row border-2 border-primary-500 rounded-full"},[null!=t.value?n("button",{staticClass:"ml-2",on:{click:t.unselect}},[n("font-awesome-icon",{staticClass:"text-primary-500",attrs:{icon:t.faTimesCircle}})],1):t._e(),t._v(" "),n("v-select",t._b({staticClass:"flex-grow",attrs:{options:t.items,clearable:!1,searchable:!1,value:t.value},on:{input:t.onInput},scopedSlots:t._u([t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(e){return[t._t(n,null,null,e)]}}}))],null,!0)},"v-select",t.attrs,!1))],1)}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,n){"use strict";n(381)},390:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".vs__dropdown-toggle{border:unset;border-radius:unset;flex-grow:1}.v-select{display:flex;flex-direction:column}.vs__dropdown-menu .vs__dropdown-option--highlight, .vs__dropdown-menu .vs__dropdown-option--selected{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},402:function(t,e,n){"use strict";n.r(e);var r=n(6),l=n(165),o=Object(r.b)({props:{todo:{type:String,default:null},page:{type:String,default:null}},setup:function(t){var e=t.todo,n=t.page,o=Object(l.b)();return{to:Object(r.a)((function(){return o(null==n?{name:"todos-todo",params:{todo:e}}:{name:"todos-todo-page",params:{page:n}})}))}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{attrs:{to:t.to}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,n){var content=n(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("7ba9ee86",content,!0,{sourceMap:!1})},407:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(39),n(105),n(18),n(73);var r=n(6);function l(){var t,e=(t=Object(r.j)(),Object(r.a)((function(){return t.value.query})));return{search:Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.i)(e).search)||void 0===t?void 0:t.toString())&&void 0!==n?n:""})),module:Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.i)(e).module)||void 0===t?void 0:t.toString())&&void 0!==n?n:null})),user:Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.i)(e).user)||void 0===t?void 0:t.toString())&&void 0!==n?n:null})),done:Object(r.a)((function(){return null!=Object(r.i)(e).done}))}}},414:function(t,e,n){"use strict";n.r(e);var r=n(12),l=(n(47),n(34),n(104),n(6)),o=n(21),c=n(374),d=n(250),f=n(377),v=Object(l.b)({components:{BmfsfjUserIcon:c.default},props:{todoId:{default:"mutterschaftsgeld-beantragen",type:String,required:!0}},setup:function(t){var e=Object(l.h)(t).todoId,n=Object(f.a)(e),c=Object(d.useTodosStore)(),v=Object(l.a)((function(){var t,e;return Object.entries(null!==(e=null===(t=Object(l.i)(n))||void 0===t?void 0:t.assignees)&&void 0!==e?e:{}).filter((function(t){var e=Object(r.a)(t,2);e[0];return e[1]})).map((function(t){return Object(r.a)(t,1)[0]}))}));return{title:Object(l.a)((function(){var t;return null===(t=Object(l.i)(n))||void 0===t?void 0:t.title})),finished:Object(l.a)((function(){var t;return null===(t=Object(l.i)(n))||void 0===t?void 0:t.finished})),date:Object(l.a)((function(){var t;return null===(t=Object(l.i)(n))||void 0===t?void 0:t.recommendedDateFromExpectedBirth})),modules:Object(l.a)((function(){var t;return null===(t=Object(l.i)(n))||void 0===t?void 0:t.modules})),assignees:v,updateFinished:function(t){return c.updateTodoFinished({todoId:Object(l.i)(e),finished:t})},faChevronRight:o.l}}}),j=n(37),component=Object(j.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",{staticClass:"flex"},[n("bmfsfj-checkbox",{staticClass:"m-auto",attrs:{value:t.finished},on:{input:t.updateFinished}})],1),t._v(" "),n("bmfsfj-todo-link",{staticClass:"flex h-24 bg-gray-200 rounded-xl flex-grow",attrs:{todo:t.todoId}},[n("bmfsfj-icon-bar-module",{staticClass:"rounded-l-xl min-w-max",attrs:{"module-ids":t.modules}}),t._v(" "),n("div",{staticClass:"flex-grow px-2 py-1 flex flex-col"},[n("h4",{staticClass:"flex-grow"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-row gap-1"},t._l(t.assignees,(function(t){return n("bmfsfj-user-icon",{key:t,attrs:{"user-id":t}})})),1)]),t._v(" "),n("div",{staticClass:"w-12 flex h-full"},[n("font-awesome-icon",{staticStyle:{margin:"auto"},attrs:{size:"lg","fixed-width":"",icon:t.faChevronRight}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjCheckbox:n(385).default,BmfsfjIconBarModule:n(415).default,BmfsfjUserIcon:n(374).default,BmfsfjTodoLink:n(402).default})},416:function(t,e,n){"use strict";n.r(e);var r=n(6),l=n(383),o=Object(r.b)({props:{value:{type:String,default:null}},setup:function(t,e){var n=e.emit;return{attrs:e.attrs,selectModule:function(t){n("input",t)},modules:Object(l.c)()}}}),c=o,d=n(37),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-select-chip",t._b({staticClass:"w-1/3 h-10 rounded-xl",attrs:{items:t.modules,value:t.value},on:{input:t.selectModule},scopedSlots:t._u([{key:"option",fn:function(e){var label=e.label;return[t._v(t._s(t.$t("modules."+label)))]}},{key:"selected-option",fn:function(t){var label=t.label;return[n("bmfsfj-icon-module",{staticClass:"w-6 h-6 text-xs rounded-full",attrs:{"module-id":label}})]}}])},"bmfsfj-select-chip",t.attrs,!1))}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjIconModule:n(395).default,BmfsfjSelectChip:n(387).default})},417:function(t,e,n){"use strict";n.r(e);n(29),n(47);var r=n(6),l=n(374),o=n(376),c=Object(r.b)({components:{BmfsfjUserIcon:l.default},props:{value:{type:String,default:null}},setup:function(t,e){var n=e.emit,l=e.attrs,c=Object(o.b)();return{attrs:l,selectUser:function(t){n("input",null==t?void 0:t.value)},userName:function(t){var e=Object(o.a)(t);return Object(r.a)((function(){var t,n;return null!==(n=null===(t=Object(r.i)(e))||void 0===t?void 0:t.name)&&void 0!==n?n:""}))},users:Object(r.a)((function(){return Object(r.i)(c).map((function(t){return{value:t.id,label:t.name}}))}))}}}),d=n(37),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bmfsfj-select-chip",t._b({staticClass:"w-1/3 rounded-xl",attrs:{items:t.users,value:t.value},on:{input:t.selectUser},scopedSlots:t._u([{key:"option",fn:function(e){var label=e.label;return[t._v(t._s(label))]}},{key:"selected-option",fn:function(t){var label=t.label;return[n("bmfsfj-user-icon",{staticClass:"w-6 h-6 text-xs",attrs:{"user-id":label}})]}}])},"bmfsfj-select-chip",t.attrs,!1))}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjUserIcon:n(374).default,BmfsfjSelectChip:n(387).default})},420:function(t,e,n){"use strict";n(404)},421:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".checked[data-v-77493a49]{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},432:function(t,e,n){"use strict";n.r(e);var r=n(6),l=n(407),o=(n(30),n(23),n(34),n(35),n(31),n(43),n(15)),c=n(165);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(r.b)({setup:function(){var t,e,n,o=(t=Object(r.k)(),e=Object(r.j)(),n=Object(c.a)(),function(l){var o=n({query:f(f({},Object(r.i)(e).query),l)});null!=o&&t.push(o)}),d=Object(l.a)(),v=d.module,j=d.user;return{selectedModule:v,selectModule:function(t){var e;o({module:null!==(e=Object(r.i)(t))&&void 0!==e?e:void 0})},doneFilter:d.done,updateDoneFilter:function(t){o({done:t?"true":void 0})},selectedUser:j,selectUser:function(t){var e;o({user:null!==(e=Object(r.i)(t))&&void 0!==e?e:void 0})}}}}),j=(n(420),n(37)),component=Object(j.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row w-full gap-1"},[n("bmfsfj-select-module",{staticClass:"w-1/3 rounded-xl",attrs:{value:t.selectedModule,placeholder:t.todos.filter.module},on:{input:t.selectModule}}),t._v(" "),n("bmfsfj-select-user",{staticClass:"w-1/3 rounded-xl",attrs:{value:t.selectedUser,placeholder:t.todos.filter.assignee},on:{input:t.selectUser}}),t._v(" "),n("bmfsfj-toggle-button",{staticClass:"w-1/3 rounded-xl border-2 border-primary-500",class:{checked:t.doneFilter},attrs:{value:t.doneFilter},on:{input:t.updateDoneFilter}},[t._v(t._s(t.$t("todos.filter.done")))])],1)}),[],!1,null,"77493a49",null);e.default=component.exports;installComponents(component,{BmfsfjSelectModule:n(416).default,BmfsfjSelectUser:n(417).default,BmfsfjToggleButton:n(371).default})},466:function(t,e,n){"use strict";n.r(e);n(39),n(105);var r=n(6),l=n(458),o=n(492),c=n(461),d=n(491),f=n(459),tr=n(462),v=n(375),j=n(377),m=n(383),O=n(407),_=n(252),h=n(368),x={de:c.a,en:d.a,ru:f.a,tr:tr.a},y=Object(r.b)({setup:function(){var t=Object(h.a)(),e=Object(O.a)(),n=e.search,c=e.module,d=e.user,f=e.done,y=Object(j.b)(c,n,d,f),w=Object(m.c)(),C=Object(_.useUserStore)(),k=Object(r.a)((function(){var t;return Object(v.c)(y.value,new Date(null!==(t=C.expectedBirthday)&&void 0!==t?t:0))}));return{selectedModule:c,todos:y,groupedTodos:k,modules:w,formatDistance:Object(l.a)({locale:x[t.locale]})(new Date),isInFuture:Object(o.a)(new Date)}}}),w=n(37),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("bmfsfj-todos-filter"),t._v(" "),n("div",{staticClass:"flex flex-col"},t._l(t.groupedTodos,(function(e){return n("div",{key:e.group.getTime(),staticClass:"flex flex-col"},[t.isInFuture(e.group)?n("span",{staticClass:"mt-1"},[t._v("in "+t._s(t.formatDistance(e.group)))]):t._e(),t._v(" "),t._l(e.todos,(function(t){return n("bmfsfj-todo",{key:t.id,staticClass:"mt-2",attrs:{"todo-id":t.id}})}))],2)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjTodosFilter:n(432).default,BmfsfjTodo:n(414).default})}}]);