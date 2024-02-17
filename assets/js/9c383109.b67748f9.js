"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[44935],{82247:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(14041);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||y[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(89575),a=(r(14041),r(82247));const i={date:"2024-02-17T20:00",title:"3.18.0",tags:["deps","web"]},o="3.18.0",l={permalink:"/changelog/3.18.0",source:"@site/changelog/source/3.18.0.md",title:"3.18.0",description:"Summary",date:"2024-02-17T20:00:00.000Z",formattedDate:"February 17, 2024",tags:[{label:"deps",permalink:"/changelog/tags/deps"},{label:"web",permalink:"/changelog/tags/web"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2024-02-17T20:00",title:"3.18.0",tags:["deps","web"]},nextItem:{title:"3.17.0",permalink:"/changelog/3.17.0"},listPageLink:"/changelog/"},s={authorsImageUrls:[]},c=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"This release introduces improvements to\nthe following Serenity/JS modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/web"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/web")))),(0,a.yg)("p",null,"View detailed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.17.0...v3.18.0"},"code diff")," on GitHub"),(0,a.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"deps:")," update dependency diff to v5.2.0 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/17f5a2e61576bae958f1f30490da8b24351d08f8"},"17f5a2e"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"deps:")," update dependency http-proxy-agent to v7.0.2 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/cd46c66baf22538a0d2d8c30c3569bc9a5a15e53"},"cd46c66"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7.0.4 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a9f02f61186d635821515d756507f0f9f04227f8"},"a9f02f6"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"deps:")," update dependency typedoc-plugin-mdn-links to v3.1.16 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0563d11850a8d148171128afbda616ec46cebd04"},"0563d11"),")")),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"web:")," actors can now check if an HTML element attribute is present (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3ce115ab5c27b05b970f529ee0e97c89d46bbde4"},"3ce115a"),")")))}y.isMDXComponent=!0}}]);