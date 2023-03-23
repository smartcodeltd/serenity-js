"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[4526],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||s;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(7896),n=(r(2784),r(30876));const s={date:"2022-06-11T20:00",title:"3.0.0-rc.19",tags:["core","deps","rest"]},o="3.0.0-rc.19",i={permalink:"/changelog/3.0.0-rc.19",source:"@site/changelog/source/3.0.0-rc.19.md",title:"3.0.0-rc.19",description:"Summary",date:"2022-06-11T20:00:00.000Z",formattedDate:"June 11, 2022",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"rest",permalink:"/changelog/tags/rest"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-06-11T20:00",title:"3.0.0-rc.19",tags:["core","deps","rest"]},prevItem:{title:"3.0.0-rc.20",permalink:"/changelog/3.0.0-rc.20"},nextItem:{title:"3.0.0-rc.18",permalink:"/changelog/3.0.0-rc.18"},listPageLink:"/changelog/page/28"},c={authorsImageUrls:[]},l=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This release introduces improvements to\nthe following Serenity/JS modules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/core"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/rest"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/rest")))),(0,n.kt)("p",null,"View detailed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.18...v3.0.0-rc.19"},"code diff")," on GitHub"),(0,n.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:"),' upgraded "error-stack-parser" to 2.1.4 and removed dependency on "stackframe" (',(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/8d445631c015887a608c3a62079d47bbec22794c"},"8d44563"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/stacktracejs/error-stack-parser/issues/75"},"stacktracejs/error-stack-parser#75")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/stacktracejs/error-stack-parser/issues/80"},"stacktracejs/error-stack-parser#80")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rest:")," updated Axios to 0.27.2 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b54694ba3dd2b8e0316d94c44381f51b1ab79ad0"},"b54694b"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/axios/axios/issues/4124"},"axios/axios#4124")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1223"},"#1223"))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," Question.fromObject() generates questions from plain objects with nested Answerables (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3113f20ed5c86cb4bcf11479855d4ceaa5696970"},"3113f20"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1219"},"#1219"))))}m.isMDXComponent=!0}}]);