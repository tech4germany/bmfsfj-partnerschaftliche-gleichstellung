(window.webpackJsonp=window.webpackJsonp||[]).push([[23,27],{379:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));n(253);var r=n(0),o=n(251);function c(){var t=Object(o.useUsersStore)();return Object(r.a)((function(){return Object.values(t.users)}))}function l(t){var e=Object(o.useUsersStore)();return Object(r.a)((function(){return null!=Object(r.t)(t)?e.users[Object(r.t)(t)]:null}))}},380:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({inheritAttrs:!1,props:{value:{type:Boolean}},emits:["input"],setup:function(t,e){return{attrs:e.attrs}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:{checked:t.value},attrs:{"aria-pressed":t.value},on:{click:function(e){return t.$emit("input",!t.value)}}},"button",t.attrs,!1),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},445:function(t,e,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("6a595442",content,!0,{sourceMap:!1})},461:function(t,e,n){"use strict";n(445)},462:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".user-icon[data-v-483273f6]{border-width:2px;--tw-border-opacity:1;border-color:rgba(0, 67, 119, var(--tw-border-opacity));background-color:transparent;--tw-text-opacity:1;color:rgba(0, 67, 119, var(--tw-text-opacity))}.user-icon.checked[data-v-483273f6]{--tw-bg-opacity:1;background-color:rgba(0, 67, 119, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},494:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(468),c=n(254),l=n(405),d=n(379),f=Object(r.b)({props:{todoId:{type:String,default:null}},setup:function(t){var e=Object(r.j)(t,"todoId"),n=Object(r.d)(o.todoIdInjectionKey,null),f=Object(r.a)((function(){var t;return null!==(t=e.value)&&void 0!==t?t:n.value})),v=Object(l.a)(f),j=Object(c.useTodosStore)(),O=Object(d.b)(),w=Object(r.a)((function(){var t;return null===(t=Object(r.l)(v))||void 0===t?void 0:t.assignees}));return{users:O,isAssigned:function(t){var e,n;return null!==(n=null===(e=Object(r.l)(w))||void 0===e?void 0:e[t])&&void 0!==n&&n},toggleAssigned:function(t){j.toggleTodoAssignee({todoId:Object(r.l)(f),userId:t})}}}}),v=(n(461),n(37)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.users.length>0?n("div",{staticClass:"flex flex-row gap-1 my-1"},t._l(t.users,(function(e){return n("bmfsfj-toggle-button",{key:e.id,staticClass:"user-icon w-10 h-10 rounded-full",class:{checked:t.isAssigned(e.id)},attrs:{value:t.isAssigned(e.id)},on:{input:function(n){return t.toggleAssigned(e.id)}}},[t._v("\n      "+t._s(e.name.toUpperCase().substring(0,2))+"\n    ")])})),1):n("div",{staticClass:"my-1"},[t._v("\n    "+t._s(t.$t("assignees.no-users"))+"\n  ")])])}),[],!1,null,"483273f6",null);e.default=component.exports;installComponents(component,{BmfsfjToggleButton:n(380).default})}}]);