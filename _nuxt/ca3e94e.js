(window.webpackJsonp=window.webpackJsonp||[]).push([[19,17],{369:function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return w}));var r=n(63),c=(n(51),n(6)),l=n(473),o=n(493),f=n(470),v=n(474),d=n(464),j=(n(468),Object(c.q)("$i18n",!1)),m=Object(c.q)("switchLocalePath",!1),O=function(){var t=j();return[t.locale].concat(Object(r.a)(t.fallbackLocale))},h={de:l.a,en:o.a,ru:f.a,tr:v.a},w=function(){var t=j();return Object(d.a)({locale:h[t.locale]})("PP")}},450:function(t,e,n){"use strict";n.r(e);var r=n(0),c=Object(r.d)({inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},value:{type:null,default:null}},setup:function(t,e){var n=e.attrs,r=e.emit;return{attrs:n,onInput:function(t){r("input",t.target.value)}}}}),l=n(37),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",t._b({domProps:{value:t.value},on:{input:t.onInput}},"select",t.attrs,!1),t._l(t.items,(function(e){return n("option",{key:e.value||e,domProps:{value:e.value||e}},[t._t("default",(function(){return[t._v(t._s(e.label))]}),{item:e})],2)})),0)}),[],!1,null,null,null);e.default=component.exports},491:function(t,e,n){"use strict";n.r(e);n(47),n(29);var r=n(6),c=n(0),l=n(369),o=Object(c.d)({inheritAttrs:!1,setup:function(t,e){var n=e.attrs,o=Object(l.b)(),f=Object(r.n)(),v=Object(l.d)();return{attrs:n,currentLocale:Object(c.a)((function(){return o.locale})),availableLocales:Object(c.a)((function(){return o.locales.map((function(a){return{label:a.name,value:a.code}}))})),switchLocale:function(t){return f.push(v(t))}}}}),f=n(37),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("bmfsfj-select",{attrs:{items:t.availableLocales,value:t.currentLocale},on:{input:t.switchLocale}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjSelect:n(450).default})}}]);