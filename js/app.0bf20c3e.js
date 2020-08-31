(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/stack/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},6425:function(e,t,n){"use strict";n("ddb0")},ba8c:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ba8c");var r=n("7a23"),c={id:"app",class:"m-4 font-sans text-darkblue"},o={class:"max-w-screen-md"};function a(e,t){var n=Object(r["m"])("StackItem");return Object(r["i"])(),Object(r["d"])("div",c,[Object(r["e"])("div",o,[Object(r["e"])("input",{autofocus:"",ref:"input",class:"w-full max-w-screen-sm bg-white\n      rounded-md text-gray-500 hover:text-darkblue focus:text-darkblue\n      border-current transition-colors duration-150 ease-out border px-2 py-1\n      shadow-local flex items-center focus:outline-none mb-4",type:"text",onKeydown:t[1]||(t[1]=Object(r["p"])((function(){return e.add.apply(e,arguments)}),["enter"]))},null,544),(Object(r["i"])(!0),Object(r["d"])(r["a"],null,Object(r["l"])(e.itemIds,(function(e){return Object(r["i"])(),Object(r["d"])(n,{key:e,itemId:e},null,8,["itemId"])})),128))])])}var i,u,s=n("5502"),l=(n("a4d3"),n("e01a"),n("c740"),n("d3b7"),n("07ac"),n("25f0"),n("2ca0"),n("ade3")),d=(n("96cf"),n("1da1")),f=n("bc3a"),b=n.n(f),p=n("6e0c"),O=n.n(p),v=n("dea0"),m=n.n(v),j=n("c6fe"),h=n.n(j),g=n("ec26");(function(e){e["ADD"]="ADD",e["REMOVE"]="REMOVE"})(u||(u={}));var w=(i={},Object(l["a"])(i,u.ADD,(function(e,t){t.id&&(e.items[t.id]=t)})),Object(l["a"])(i,u.REMOVE,(function(e,t){delete e.items[t]})),i),x={items:{}};function y(){var e=window.localStorage.getItem("store");return e?JSON.parse(e):null}function k(e){window.localStorage.setItem("store",JSON.stringify(e))}var D,E,I=y()||x;(function(e){e["ADD"]="ADD",e["REMOVE"]="REMOVE"})(E||(E={}));var S=(D={},Object(l["a"])(D,E.ADD,(function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,c,o,a,i,s,l,d,f,p,v,j;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,c=e.state,!(Object.values(c.items).findIndex((function(e){return e.content===t}))>-1)){n.next=3;break}return n.abrupt("return");case 3:if(o=Object(g["a"])(),a=Date.now().toString(),i={},!t.startsWith("http")){n.next=26;break}return s=O()([m()(),h()()]),l="https://thingproxy.freeboard.io/fetch/",n.prev=9,n.next=12,b.a.get(l+t);case 12:return d=n.sent,f=d.data,p=t,n.next=17,s({html:f,url:p});case 17:v=n.sent,console.log(v),i.title=v.title,i.description=v.description,n.next=26;break;case 23:n.prev=23,n.t0=n["catch"](9),console.log(n.t0);case 26:j={id:o,created:a,content:t,metadata:i},r(u.ADD,j),k(c);case 29:case"end":return n.stop()}}),n,null,[[9,23]])})))()})),Object(l["a"])(D,E.REMOVE,(function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,c=e.state,r(u.REMOVE,t),k(c);case 3:case"end":return n.stop()}}),n)})))()})),D),M=(n("d81d"),n("b64b"),{itemIds:function(e){return Object.keys(e.items)},itemIdsSortedByCreatedDesc:function(e){return Object.values(e.items).sort((function(e,t){return e.created>t.created?-1:1})).map((function(e){return e.id}))},item:function(e){return function(t){return e.items[t]}}}),L=Object(s["a"])({strict:!1,state:I,mutations:w,getters:M,actions:S,modules:{}});function R(){return L}var A={class:"flex flex-col w-full overflow-x-hidden"},V={class:"text-xs font-bold whitespace-no-wrap"},_={class:"text-xs text-gray-500 whitespace-no-wrap"},P={key:1,class:"text-xs font-bold"},C=Object(r["e"])("svg",{width:"12",height:"12",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(r["e"])("path",{d:"M8.63605 10.4138L14.8583 16.636L16.636 14.8583L10.4138 8.63606L16.636 2.41386L14.8583 0.636084L8.63605 6.85828L2.41381 0.636047L0.636037 2.41382L6.85827 8.63606L0.636032 14.8583L2.41381 16.6361L8.63605 10.4138Z",fill:"currentColor"})],-1);function J(e,t){return Object(r["i"])(),Object(r["d"])("a",{href:e.href,target:e.target,rel:"noopener noreferrer",class:"flex items-center px-2 py-1 mb-1 ease-out bg-white border border-current rounded-md cursor-pointer select-none hover:bg-green-200 shadow-local"},[Object(r["e"])("div",A,[e.metadata.title?(Object(r["i"])(),Object(r["d"])(r["a"],{key:0},[Object(r["e"])("div",V,Object(r["n"])(e.metadata.title),1),Object(r["e"])("div",_,Object(r["n"])(e.content),1)],64)):(Object(r["i"])(),Object(r["d"])("div",P,Object(r["n"])(e.content),1))]),Object(r["e"])("button",{class:"ml-2 focus:outline-none",onClick:t[1]||(t[1]=Object(r["q"])((function(){return e.remove.apply(e,arguments)}),["prevent"]))},[C])],8,["href","target"])}var B=n("5530"),T=Object(r["f"])({props:{itemId:{default:""}},setup:function(e){var t=R(),n=Object(r["b"])((function(){return t.getters.item(e.itemId)})),c=Object(r["b"])((function(){if(n.value.content.startsWith("http"))return n.value.content})),o=Object(r["b"])((function(){return n.value.content.startsWith("http")?"_blank":"_self"}));function a(){t.dispatch(E.REMOVE,e.itemId)}return Object(B["a"])({href:c,target:o,remove:a},n.value)}});T.render=J;var W=T,N=Object(r["f"])({components:{StackItem:W},setup:function(){var e=R(),t=Object(r["b"])((function(){return e.getters.itemIdsSortedByCreatedDesc}));function n(t){var n=t.currentTarget;if(n.value){var r=n.value;e.dispatch(E.ADD,r),n.value=""}}var c=Object(r["k"])(null);return Object(r["h"])((function(){var e;return null===(e=c.value)||void 0===e?void 0:e.focus()})),{input:c,itemIds:t,add:n}}});n("6425");N.render=a;var q=N;Object(r["c"])(q).use(L).mount("#app")},ddb0:function(e,t,n){}});
//# sourceMappingURL=app.0bf20c3e.js.map