(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LiveDemo"],{"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),o=n("6821"),a=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=o(t),e=a(e,!0),s)try{return u(t,e)}catch(n){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},"32a6":function(t,e,n){var r=n("241e"),i=n("c3a1");n("ce7e")("keys",function(){return function(t){return i(r(t))}})},"4f37":function(t,e,n){"use strict";n("aa77")("trim",function(t){return function(){return t(this,3)}})},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},a4bb:function(t,e,n){t.exports=n("8aae")},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),o=n("79e5"),a=n("fdef"),c="["+a+"]",s="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t,e,n){var i={},c=o(function(){return!!a[t]()||s[t]()!=s}),u=i[t]=c?e(d):a[t];n&&(i[n]=u),r(r.P+r.F*c,"String",i)},d=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("2d95"),a=n("5dbc"),c=n("6a99"),s=n("79e5"),u=n("9093").f,l=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,p="Number",h=r[p],m=h,v=h.prototype,b=o(n("2aeb")(v))==p,y="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():d(e,3);var n,r,i,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,s=e.slice(2),u=0,l=s.length;u<l;u++)if(a=s.charCodeAt(u),a<48||a>i)return NaN;return parseInt(s,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(b?s(function(){v.valueOf.call(n)}):o(n)!=p)?a(new m(_(e)),n,h):_(e)};for(var g,O=n("9e1e")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;O.length>N;N++)i(m,g=O[N])&&!i(h,g)&&f(h,g,l(m,g));h.prototype=v,v.constructor=h,n("2aba")(r,p,h)}},ce7e:function(t,e,n){var r=n("63b6"),i=n("584a"),o=n("294c");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},d25f:function(t,e,n){"use strict";var r=n("5ca1"),i=n("0a49")(2);r(r.P+r.F*!n("2f21")([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},e065:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-demo"},[t.title?n("h1",{staticClass:"title is-3",attrs:{id:t.id}},[t._v(t._s(t.title))]):t._e(),n("div",[n("div",{staticClass:"tabs is-marginless"},[n("ul",[t._l(t.tabsWithContent,function(e){return n("li",{key:e,class:{"is-active":t.currentTab===e&&!t.demoOnly},on:{click:function(n){t.currentTab=e,t.demoOnly=!1}}},[n("a",[t._v(t._s(e))])])}),n("li",{class:{"is-active":t.demoOnly},on:{click:function(e){t.demoOnly=!0,t.currentTab=null}}},[n("a",[t._v("Demo Only")])])],2)]),n("div",{staticClass:"columns is-gapless live-demo__content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.demoOnly,expression:"!demoOnly"}],staticClass:"column is-two-thirds"},[t._l(t.tabsWithContent,function(e){return[n("keep-alive",{key:e},[e===t.currentTab?n("pre",{key:e,staticClass:"live-demo__code",attrs:{lang:e}},[n("code",{domProps:{innerHTML:t._s(t.code[e])}})]):t._e()])]})],2),n("div",{ref:"result",staticClass:"column is-inline-block live-demo__result"})])])])},i=[],o=n("774e"),a=n.n(o),c=(n("4f37"),n("d25f"),n("a4bb")),s=n.n(c),u=(n("c5f6"),n("2b0e")),l=n("c197"),f=n.n(l),d=u["a"].extend({props:{demoHtml:String,id:String,removeNext:Number},data:function(){var t={JS:"",HTML:"",CSS:""},e=s()(t);return{code:t,tabs:e,currentTab:null,title:"",htmlResult:"",demoOnly:!1}},computed:{tabsWithContent:function(){var t=this;return this.tabs.filter(function(e){return!!t.code[e]})}},methods:{parseDemo:function(){var t=(new DOMParser).parseFromString(this.demoHtml,"text/html"),e=t.querySelector("body"),n=t.querySelector("style"),r=t.querySelector("script");n&&this.$el.appendChild(n),r&&r.remove();for(var i=0,o=a()(e.childNodes);i<o.length;i++){var c=o[i];this.$refs.result.appendChild(c)}if(this.code={JS:r&&f.a.highlight(r.innerHTML.trim(),f.a.languages.javascript),CSS:n&&f.a.highlight(n.innerHTML.trim(),f.a.languages.css),HTML:e&&f.a.highlight(e.innerHTML.trim(),f.a.languages.markup)},this.title=t.title,this.currentTab=this.tabsWithContent[0],r){r.remove();var s=function(){try{r&&new Function(r.textContent)()}catch(t){console.error("livedemo failed to execute a javascript code block"),console.log({script:r,error:t})}};/interactive|complete/.test(document.readyState)?s():document.addEventListener("DOMContentLoaded",s)}}},watch:{demoHtml:function(){this.parseDemo()}},mounted:function(){this.parseDemo();for(var t=0;t<this.removeNext;t++)this.$el.nextElementSibling.remove();window.innerWidth<=570&&(this.demoOnly=!0)}}),p=d,h=n("2877"),m=Object(h["a"])(p,r,i,!1,null,null,null);e["default"]=m.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=LiveDemo.14d8ee51.js.map