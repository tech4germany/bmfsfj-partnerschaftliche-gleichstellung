(window.webpackJsonp=window.webpackJsonp||[]).push([[41,6,14,16],{391:function(t,e,n){"use strict";n.r(e);var r=n(0),l=Object(r.d)({inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},value:{type:null,default:null}},setup:function(t,e){var n=e.attrs,r=e.emit;return{attrs:n,onInput:function(t){r("input",t.target.value)}}}}),c=n(45),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",t._b({domProps:{value:t.value},on:{input:t.onInput}},"select",t.attrs,!1),t._l(t.items,(function(e){return n("option",{key:e.value||e,domProps:{value:e.value||e}},[t._t("default",(function(){return[t._v(t._s(e.label))]}),{item:e})],2)})),0)}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(23),c=n(377),o=Object(r.d)({inheritAttrs:!1,props:{label:{type:String,default:null},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var n=e.attrs,o=Object(r.o)(t,"value");return{attrs:n,checkboxIcon:Object(r.a)((function(){return null==Object(r.q)(o)?l.x:Object(r.q)(o)?l.j:c.a}))}}}),f=n(45),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex flex-row items-center"},[n("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),n("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),t._t("default",(function(){return[n("span",{staticClass:"ml-1"},[t._v(t._s(t.label))])]}))],2)])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){"use strict";n.r(e),n.d(e,"useI18n",(function(){return c})),n.d(e,"useSwitchLocalePath",(function(){return o}));n(47),n(30);var r=n(7),l=n(0),c=Object(r.m)("$i18n",!1),o=Object(r.m)("switchLocalePath",!1),f=Object(l.d)({inheritAttrs:!1,setup:function(t,e){var n=e.attrs,f=c(),d=Object(r.k)(),h=o();return{attrs:n,currentLocale:Object(l.a)((function(){return f.locale})),availableLocales:Object(l.a)((function(){return f.locales.map((function(a){return{label:a.name,value:a.code}}))})),switchLocale:function(t){return d.push(h(t))}}}}),d=n(45),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("bmfsfj-select",{attrs:{items:t.availableLocales,value:t.currentLocale},on:{input:t.switchLocale}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjSelect:n(391).default})},463:function(t,e,n){"use strict";n.r(e);n(29);var r=n(7),l=n(251),c=Object(r.b)({setup:function(t){var e=Object(l.useUserStore)();return{married:Object(r.a)((function(){return e.married})),setMarried:e.setMarried,healthInsurances:Object.keys(l.HealthInsurance),healthInsurance:Object(r.a)((function(){return e.healthInsurance})),setHealthInsurance:e.setHealthInsurance}}}),o=n(45),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{staticClass:"block w-full",attrs:{to:t.localeRoute("/intro/0-willkommen")}},[t._v("Restart Intro")]),t._v(" "),n("bmfsfj-select-language"),t._v(" "),n("bmfsfj-checkbox",{attrs:{label:"Verheiratet",value:t.married},on:{input:t.setMarried}}),t._v(" "),n("h4",[t._v("Krankenversicherung")]),t._v(" "),n("bmfsfj-select",{staticClass:"border-primary-500 border-2 rounded",attrs:{items:t.healthInsurances,value:t.healthInsurance},on:{input:t.setHealthInsurance},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.$t("healthInsurance."+n))+"\n    ")]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjSelectLanguage:n(399).default,BmfsfjCheckbox:n(394).default,BmfsfjSelect:n(391).default})}}]);