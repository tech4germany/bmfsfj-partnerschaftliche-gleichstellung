(window.webpackJsonp=window.webpackJsonp||[]).push([[22,9,11,12,25,28],{377:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("30050e06",content,!0,{sourceMap:!1})},379:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));n(253);var r=n(0),o=n(251);function c(){var t=Object(o.useUsersStore)();return Object(r.a)((function(){return Object.values(t.users)}))}function l(t){var e=Object(o.useUsersStore)();return Object(r.a)((function(){return null!=Object(r.t)(t)?e.users[Object(r.t)(t)]:null}))}},384:function(t,e,n){"use strict";n.r(e);n(29);var r=n(0),o=n(379),c=Object(r.d)({props:{userId:{type:String,required:!0}},setup:function(t){var e=Object(r.s)(t).userId,n=Object(o.a)(e);return{name:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.t)(n))||void 0===t?void 0:t.name)&&void 0!==e?e:""}))}}}),l=n(37),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    bg-primary-500\n    flex\n    text-white\n    border-2 border-primary-500\n    w-8\n    h-8\n    rounded-full\n  "},[n("span",{staticClass:"m-auto"},[t._v(t._s(t.name.toUpperCase().substring(0,2)))])])}),[],!1,null,null,null);e.default=component.exports},388:function(t,e,n){"use strict";n(377)},389:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".module-icon[data-v-b3ef14ec]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));background-color:var(--color)}",""]),r.locals={},t.exports=r},390:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(386),c=Object(r.d)({props:{moduleId:{type:String,required:!0}},setup:function(t){var e=Object(r.s)(t).moduleId,n=Object(o.a)(e);return{icon:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.t)(n))||void 0===t?void 0:t.icon)&&void 0!==e?e:"question"})),color:Object(r.a)((function(){var t,e;return null!==(e=null===(t=Object(r.t)(n))||void 0===t?void 0:t.color2)&&void 0!==e?e:""}))}}}),l=c,f=(n(388),n(37)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"module-icon flex",style:"--color: "+t.color},[n("font-awesome-icon",{staticStyle:{margin:"auto"},attrs:{"fixed-width":"",icon:t.icon}})],1)}),[],!1,null,"b3ef14ec",null);e.default=component.exports},391:function(t,e,n){var content=n(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("2b8d0774",content,!0,{sourceMap:!1})},393:function(t,e,n){"use strict";var r=n(3),o=n(77).findIndex,c=n(132),l="findIndex",f=!0;l in[]&&Array(1).findIndex((function(){f=!1})),r({target:"Array",proto:!0,forced:f},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},400:function(t,e,n){n(3)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},401:function(t,e,n){"use strict";var r=n(30),o=n(10),c=n(104),l=n(43),f=n(27),d=n(78),v=n(166),j=n(133),m=n(252),O=n(9),h=n(65),x=n(85).f,w=n(55).f,_=n(35).f,y=n(255).trim,I="Number",N=o.Number,C=N.prototype,k=d(h(C))==I,E=function(t){if(j(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,c,l,f,code,d=m(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=y(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c(I,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var S,A=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof A&&(k?O((function(){C.valueOf.call(n)})):d(n)!=I)?v(new N(E(e)),n,A):E(e)},T=r?x(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;T.length>M;M++)f(N,S=T[M])&&!f(A,S)&&_(A,S,w(N,S));A.prototype=C,C.constructor=A,l(o,I,A)}},403:function(t,e,n){"use strict";n(391)},404:function(t,e,n){var r=n(61)((function(i){return i[1]}));r.push([t.i,".module-icon[data-v-f72f70c6]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));background-color:var(--color)}",""]),r.locals={},t.exports=r},406:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(20),c=n(396),l=Object(r.d)({inheritAttrs:!1,props:{label:{type:String,default:null},value:{type:Boolean,default:null}},emits:["input"],setup:function(t,e){var n=e.attrs,l=Object(r.r)(t,"value");return{attrs:n,checkboxIcon:Object(r.a)((function(){return null==Object(r.t)(l)?o.A:Object(r.t)(l)?o.j:c.a}))}}}),f=n(37),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex flex-row items-center"},[n("font-awesome-icon",{staticClass:"text-primary-500 dark:text-white dark:bg-primary-500",attrs:{"fixed-width":"",size:"lg",icon:t.checkboxIcon}}),t._v(" "),n("input",t._b({ref:"checkbox",staticClass:"appearance-none",attrs:{type:"checkbox",name:t.label},domProps:{checked:t.value},on:{input:function(e){return t.$emit("input",e.target.checked)}}},"input",t.attrs,!1)),t._v(" "),t._t("default",(function(){return[n("span",{staticClass:"ml-1"},[t._v(t._s(t.label))])]}))],2)])}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.d)({props:{moduleIds:{type:Array,default:function(){return[]}}}}),c=(n(403),n(37)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"module-icon-wrapper w-8 flex flex-col overflow-hidden"},t._l(t.moduleIds,(function(t){return n("bmfsfj-icon-module",{key:t,staticClass:"w-8 h-8",attrs:{"module-id":t}})})),1)}),[],!1,null,"f72f70c6",null);e.default=component.exports;installComponents(component,{BmfsfjIconModule:n(390).default})},408:function(t,e,n){"use strict";var r=n(368),o=n(366),c=n(365);function l(t,e){Object(c.a)(2,arguments);var n=Object(o.a)(t),l=Object(r.a)(e);return isNaN(l)?new Date(NaN):l?(n.setDate(n.getDate()+l),n):n}function f(t,e){Object(c.a)(2,arguments);var n=Object(o.a)(t),l=Object(r.a)(e);if(isNaN(l))return new Date(NaN);if(!l)return n;var f=n.getDate(),d=new Date(n.getTime());d.setMonth(n.getMonth()+l+1,0);var v=d.getDate();return f>=v?d:(n.setFullYear(d.getFullYear(),d.getMonth(),f),n)}var d=n(370),v=Object(d.a)((function(t,e){if(Object(c.a)(2,arguments),!e||"object"!=typeof e)return new Date(NaN);var n=e.years?Object(r.a)(e.years):0,d=e.months?Object(r.a)(e.months):0,v=e.weeks?Object(r.a)(e.weeks):0,j=e.days?Object(r.a)(e.days):0,m=e.hours?Object(r.a)(e.hours):0,O=e.minutes?Object(r.a)(e.minutes):0,h=e.seconds?Object(r.a)(e.seconds):0,x=Object(o.a)(t),w=d||n?f(x,d+12*n):x,_=j||v?l(w,j+7*v):w,y=O+60*m,I=h+60*y,N=1e3*I,C=new Date(_.getTime()+N);return C}),2);e.a=v},409:function(t,e,n){"use strict";var r=n(366),o=n(365);var c=n(370),l=Object(c.a)((function(t,e){Object(o.a)(2,arguments);var n=Object(r.a)(t),c=Object(r.a)(e),l=n.getTime()-c.getTime();return l>0?-1:l<0?1:l}),2);e.a=l},410:function(t,e,n){"use strict";var r=n(366),o=n(365);var c=n(370),l=Object(c.a)((function(t,e){Object(o.a)(2,arguments);var n=Object(r.a)(t),c=Object(r.a)(e);return n.getTime()>c.getTime()}),2);e.a=l},422:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(165),c=Object(r.b)({props:{todo:{type:String,default:null}},setup:function(t){var e=t.todo,n=Object(o.b)();return{to:Object(r.a)((function(){return n({name:"todos-todo",params:{todo:e}})}))}}}),l=n(37),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{attrs:{to:t.to}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},449:function(t,e,n){"use strict";n.r(e);var r=n(12),o=(n(47),n(34),n(106),n(6)),c=n(20),l=n(384),f=n(254),d=n(405),v=Object(o.b)({components:{BmfsfjUserIcon:l.default},props:{todoId:{default:"mutterschaftsgeld-beantragen",type:String,required:!0}},setup:function(t){var e=Object(o.k)(t).todoId,n=Object(d.a)(e),l=Object(f.useTodosStore)(),v=Object(o.a)((function(){var t,e;return Object.entries(null!==(e=null===(t=Object(o.l)(n))||void 0===t?void 0:t.assignees)&&void 0!==e?e:{}).filter((function(t){var e=Object(r.a)(t,2);e[0];return e[1]})).map((function(t){return Object(r.a)(t,1)[0]}))}));return{title:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.title})),finished:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.finished})),date:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.recommendedDateFromExpectedBirth})),modules:Object(o.a)((function(){var t;return null===(t=Object(o.l)(n))||void 0===t?void 0:t.modules})),assignees:v,updateFinished:function(t){return l.updateTodoFinished({todoId:Object(o.l)(e),finished:t})},faChevronRight:c.l}}}),j=n(37),component=Object(j.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",{staticClass:"flex"},[n("bmfsfj-checkbox",{staticClass:"m-auto",attrs:{value:t.finished},on:{input:t.updateFinished}})],1),t._v(" "),n("bmfsfj-todo-link",{staticClass:"flex h-24 bg-background-300 rounded-xl flex-grow",attrs:{todo:t.todoId}},[n("bmfsfj-icon-bar-module",{staticClass:"rounded-l-xl min-w-max",attrs:{"module-ids":t.modules}}),t._v(" "),n("div",{staticClass:"flex-grow px-2 py-1 flex flex-col overflow-y-auto"},[n("h4",{staticClass:"flex-grow",staticStyle:{"word-break":"break-word"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-row gap-1"},t._l(t.assignees,(function(t){return n("bmfsfj-user-icon",{key:t,attrs:{"user-id":t}})})),1)]),t._v(" "),n("div",{staticClass:"w-12 min-w-min flex h-full",staticStyle:{"min-width":"3rem"}},[n("font-awesome-icon",{staticStyle:{margin:"auto"},attrs:{size:"lg","fixed-width":"",icon:t.faChevronRight}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BmfsfjCheckbox:n(406).default,BmfsfjIconBarModule:n(407).default,BmfsfjUserIcon:n(384).default,BmfsfjTodoLink:n(422).default})}}]);