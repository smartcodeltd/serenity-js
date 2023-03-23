"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[56851],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),y=o,h=m["".concat(p,".").concat(y)]||m[y]||u[y]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},93430:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,toc:()=>s});var n=r(7896),o=(r(2784),r(30876));const a={},i=void 0,s=[{value:"Serenity/JS Core",id:"serenityjs-core",level:2},{value:"Installation",id:"installation",level:3}],p={toc:s},l="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://serenity-js.org"},"Serenity/JS")," is an innovative framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."),(0,o.kt)("p",null,"To get started, check out the comprehensive ",(0,o.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook"},"Serenity/JS Handbook"),", ",(0,o.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/core"},"API documentation"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/getting-started#serenityjs-project-templates"},"Serenity/JS project templates on GitHub"),". "),(0,o.kt)("p",null,"If you have any questions or just want to say hello, join the ",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community Chat"),"."),(0,o.kt)("h2",{id:"serenityjs-core"},"Serenity/JS Core"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://serenity-js.org/modules/core/"},(0,o.kt)("inlineCode",{parentName:"a"},"@serenity-js/core"))," is the heart of the ",(0,o.kt)("a",{parentName:"p",href:"https://serenity-js.org"},"Serenity/JS")," framework.\nIt enables you to configure the framework, manage actors, and provides basic building blocks\nto help you design high-quality acceptance tests."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install this module, run the following command in your computer terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save-dev @serenity-js/core\n")))}c.isMDXComponent=!0}}]);