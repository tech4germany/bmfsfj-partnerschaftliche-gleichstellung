(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{365:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(87),l=Object(c.d)({inheritAttrs:!1,props:{label:{type:String,default:""},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var n=e.attrs,l=Object(c.o)(t,"value");return{attrs:n,checkboxIcon:Object(c.a)((function(){return null==Object(c.q)(l)?r.d:Object(c.q)(l)?r.c:r.f}))}}}),o=n(41),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex flex-row items-center space-x-1"},[n("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",icon:t.checkboxIcon}}),t._v(" "),n("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),n("span",[t._v(t._s(t.label))])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);