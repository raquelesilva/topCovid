(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/topCovid/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0078":function(e,t,r){e.exports=r.p+"img/confirmed.3cf91e94.png"},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"16c4":function(e,t,r){e.exports=r.p+"img/recovered.599cce71.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:"https://covid19api.com/assets/images/image06.png?v19509205981951"}}),r("covid",{attrs:{msg:"New Confirmed New Recovered New Deaths"}})],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("div",{staticClass:"container",staticStyle:{}},[r("div",{staticClass:"row"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.facets,expression:"facets"}],staticStyle:{width:"200px"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.facets=t.target.multiple?r:r[0]}}},[r("option",{attrs:{selected:"",value:"NewConfirmed"}},[e._v("New Confirmed")]),r("option",{attrs:{value:"NewRecovered"}},[e._v("New Recovered")]),r("option",{attrs:{value:"NewDeaths"}},[e._v("New Deaths")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"number",min:"1",max:"10"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}})]),r("topCards",{attrs:{facets:this.facets,nCountries:this.number}})],1)])},i=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"card",staticStyle:{width:"18rem"}},[r("img",{staticClass:"card-img-top",attrs:{src:e.img,alt:"Card image cap"}}),r("div",{staticClass:"card-body"},[r("h3",{staticClass:"card-title"},[e._v(e._s(this.facets))]),r("h5",{staticClass:"card-title"},[e._v(e._s(this.covid[0].Date))]),r("table",{staticClass:"table"},[r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[e._v(e._s(this.facets))]),r("th",{attrs:{scope:"col"}},[e._v("Country")])])]),"NewConfirmed"==this.facets?r("tbody",e._l(this.filterCountries,(function(t){return r("tr",{key:t.Country},[r("td",[e._v(e._s(t.NewConfirmed))]),r("td",[e._v(e._s(t.Country))])])})),0):e._e(),"NewDeaths"==this.facets?r("tbody",e._l(this.filterCountries,(function(t){return r("tr",{key:t.Country},[r("td",[e._v(e._s(t.NewDeaths))]),r("td",[e._v(e._s(t.Country))])])})),0):e._e(),"NewRecovered"==this.facets?r("tbody",e._l(this.filterCountries,(function(t){return r("tr",{key:t.Country},[r("td",[e._v(e._s(t.NewRecovered))]),r("td",[e._v(e._s(t.Country))])])})),0):e._e()])])])])},u=[],l=(r("fb6a"),r("a9e3"),r("d3b7"),r("96cf"),r("1da1")),d={name:"covid",data:function(){return{covid:[]}},props:{facets:String,nCountries:Number},created:function(){this.getAllCases()},methods:{getAllCases:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.covid19api.com/summary");case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,e.covid=o.Countries,console.log(e.covid),"NewConfirmed"==e.facets&&(e.covid.sort(e.compareCases),e.img=r("0078")),"NewDeaths"==e.facets&&(e.covid.sort(e.compareDeaths),e.img=r("8e75")),"NewRecovered"==e.facets&&(e.covid.sort(e.compareRecovered),e.img=r("16c4"));case 11:case"end":return t.stop()}}),t)})))()},compareCases:function(e,t){return e.NewConfirmed>t.NewConfirmed?-1:e.NewConfirmed<t.NewConfirmed?1:0},compareDeaths:function(e,t){return e.NewDeaths>t.NewDeaths?-1:e.NewDeaths<t.NewDeaths?1:0},compareRecovered:function(e,t){return e.NewRecovered>t.NewRecovered?-1:e.NewRecovered<t.NewRecovered?1:0}},updated:function(){this.getAllCases()},computed:{filterCountries:function(){return this.covid.slice(0,this.nCountries)}}},f=d,p=r("2877"),v=Object(p["a"])(f,c,u,!1,null,null,null),m=v.exports,h={name:"covid",components:{topCards:m},data:function(){return{covid:[],countries:[],selectedCountry:"Portugal",facets:"NewConfirmed",number:4}}},w=h,C=Object(p["a"])(w,s,i,!1,null,null,null),g=C.exports,_={name:"App",components:{covid:g}},b=_,y=(r("034f"),Object(p["a"])(b,o,a,!1,null,null,null)),N=y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(N)}}).$mount("#app")},"85ec":function(e,t,r){},"8e75":function(e,t,r){e.exports=r.p+"img/deaths.bd5aa802.jpg"}});
//# sourceMappingURL=app.82b070b9.js.map