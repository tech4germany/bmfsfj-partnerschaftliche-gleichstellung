(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{435:function(t,e,n){"use strict";n.r(e);var l=n(6),c=n(21),o=Object(l.b)({props:{initalValue:{type:Boolean,default:!1},title:{type:String,default:""},icon:{type:String,default:""}},setup:function(t){var e=t.initalValue,n=Object(l.e)(e);return{extended:n,toggle:function(){n.value=!Object(l.i)(n)},toggleIcon:Object(l.a)((function(){return Object(l.i)(n)?c.m:c.k}))}}}),r=n(36),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-lg flex w-full",on:{click:t.toggle}},[n("div",{staticClass:"flex-grow"},[t._t("title",(function(){return[n("font-awesome-icon",{staticClass:"self-center mr-1 text-primary-500",attrs:{"fixed-width":"",icon:t.icon}}),t._v(" "),n("span",[t._v(t._s(t.title))])]}))],2),t._v(" "),n("button",[n("font-awesome-icon",{staticClass:"self-center mr-1 text-primary-500",attrs:{"fixed-width":"",icon:t.toggleIcon}})],1)]),t._v(" "),n("div",{staticClass:"extension mt-1 mb-1",attrs:{hidden:!t.extended}},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports}}]);