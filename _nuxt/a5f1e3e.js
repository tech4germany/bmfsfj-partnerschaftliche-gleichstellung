(window.webpackJsonp=window.webpackJsonp||[]).push([[22,9,11,25,28],{380:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));n(253);var r=n(0),o=n(252);function l(){var t=Object(o.useUsersStore)();return Object(r.a)((function(){return Object.values(t.users)}))}function c(t){var e=Object(o.useUsersStore)();return Object(r.a)((function(){return null!=Object(r.t)(t)?e.users[Object(r.t)(t)]:null}))}},384:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("2b8d0774",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n.r(e);n(29);var r=n(0),o=n(380),l=Object(r.d)({props:{userId:{type:String,required:!0}},setup:function(t){var e=Object(r.s)(t).userId,n=Object(o.a)(e);return{name:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.t)(n))||void 0===t?void 0:t.name)&&void 0!==e?e:""}))}}}),c=n(37),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    bg-primary-500\n    flex\n    text-white\n    border-2 border-primary-500\n    w-8\n    h-8\n    rounded-full\n  "},[n("span",{staticClass:"m-auto"},[t._v(t._s(t.name.toUpperCase().substring(0,2)))])])}),[],!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";n(384)},398:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".module-icon[data-v-f72f70c6]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));background-color:var(--color)}",""]),r.locals={},t.exports=r},400:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(20),l=n(388),c=Object(r.d)({inheritAttrs:!1,props:{label:{type:String,default:null},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var n=e.attrs,c=Object(r.r)(t,"value");return{attrs:n,checkboxIcon:Object(r.a)((function(){return null==Object(r.t)(c)?o.z:Object(r.t)(c)?o.j:l.a}))}}}),d=n(37),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex flex-row items-center"},[n("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),n("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),t._t("default",(function(){return[n("span",{staticClass:"ml-1"},[t._v(t._s(t.label))])]}))],2)])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({props:{moduleIds:{type:Array,default:function(){return[]}}}}),l=(n(397),n(37)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"module-icon-wrapper w-8 flex flex-col overflow-hidden"},t._l(t.moduleIds,(function(t){return n("bmfsfj-icon-module",{key:t,staticClass:"w-8 h-8",attrs:{"module-id":t}})})),1)}),[],!1,null,"f72f70c6",null);e.default=component.exports;installComponents(component,{BmfsfjIconModule:n(392).default})},425:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(165),l=Object(r.b)({props:{todo:{type:String,default:null}},setup:function(t){var e=t.todo,n=Object(o.b)();return{to:Object(r.a)((function(){return n({name:"todos-todo",params:{todo:e}})}))}}}),c=n(37),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{attrs:{to:t.to}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},441:function(t,e,n){"use strict";n.r(e);var r=n(12),o=(n(47),n(34),n(105),n(6)),l=n(20),c=n(385),d=n(250),f=n(387),v=Object(o.b)({components:{BmfsfjUserIcon:c.default},props:{todoId:{default:"mutterschaftsgeld-beantragen",type:String,required:!0}},setup:function(t){var e=Object(o.k)(t).todoId,n=Object(f.a)(e),c=Object(d.useTodosStore)(),v=Object(o.a)((function(){var t,e;return Object.entries(null!==(e=null===(t=Object(o.l)(n))||void 0===t?void 0:t.assignees)&&void 0!==e?e:{}).filter((function(t){var e=Object(r.a)(t,2);e[0];return e[1]})).map((function(t){return Object(r.a)(t,1)[0]}))}));return{title:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.title})),finished:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.finished})),date:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.recommendedDateFromExpectedBirth})),modules:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.modules})),assignees:v,updateFinished:function(t){return c.updateTodoFinished({todoId:Object(o.l)(e),finished:t})},faChevronRight:l.l}}}),m=n(37),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",{staticClass:"flex"},[n("bmfsfj-checkbox",{staticClass:"m-auto",attrs:{value:t.finished},on:{input:t.updateFinished}})],1),t._v(" "),n("bmfsfj-todo-link",{staticClass:"flex h-24 bg-background-300 rounded-xl flex-grow",attrs:{todo:t.todoId}},[n("bmfsfj-icon-bar-module",{staticClass:"rounded-l-xl min-w-max",attrs:{"module-ids":t.modules}}),t._v(" "),n("div",{staticClass:"flex-grow px-2 py-1 flex flex-col"},[n("h4",{staticClass:"flex-grow"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-row gap-1"},t._l(t.assignees,(function(t){return n("bmfsfj-user-icon",{key:t,attrs:{"user-id":t}})})),1)]),t._v(" "),n("div",{staticClass:"w-12 flex h-full"},[n("font-awesome-icon",{staticStyle:{margin:"auto"},attrs:{size:"lg","fixed-width":"",icon:t.faChevronRight}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjCheckbox:n(400).default,BmfsfjIconBarModule:n(401).default,BmfsfjUserIcon:n(385).default,BmfsfjTodoLink:n(425).default})}}]);