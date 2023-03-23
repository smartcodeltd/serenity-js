"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[53676],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var s=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=s.createContext({}),l=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=l(e.components);return s.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||h[u]||i;return r?s.createElement(f,n(n({ref:t},c),{},{components:r})):s.createElement(f,n({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,n[1]=o;for(var l=2;l<i;l++)n[l]=r[l];return s.createElement.apply(null,n)}return s.createElement.apply(null,r)}u.displayName="MDXCreateElement"},77840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=r(7896),a=(r(2784),r(30876));const i={date:"2022-07-11T19:00",title:"3.0.0-rc.20",tags:["core","playwright","protractor","web","webdriverio"]},n="3.0.0-rc.20",o={permalink:"/changelog/3.0.0-rc.20",source:"@site/changelog/source/3.0.0-rc.20.md",title:"3.0.0-rc.20",description:"Summary",date:"2022-07-11T19:00:00.000Z",formattedDate:"July 11, 2022",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"playwright",permalink:"/changelog/tags/playwright"},{label:"protractor",permalink:"/changelog/tags/protractor"},{label:"web",permalink:"/changelog/tags/web"},{label:"webdriverio",permalink:"/changelog/tags/webdriverio"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-07-11T19:00",title:"3.0.0-rc.20",tags:["core","playwright","protractor","web","webdriverio"]},prevItem:{title:"3.0.0-rc.21",permalink:"/changelog/3.0.0-rc.21"},nextItem:{title:"3.0.0-rc.19",permalink:"/changelog/3.0.0-rc.19"},listPageLink:"/changelog/page/27"},p={authorsImageUrls:[]},l=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],c={toc:l},m="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This release addresses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/493"},"#493"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/563"},"#563"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/911"},"#911"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1035"},"#1035"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1156"},"#1156"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/core"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/playwright"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/playwright"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/protractor"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/protractor"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/web"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/web"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/webdriverio"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")))),(0,a.kt)("p",null,"Related external tickets: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/issues/2481"},"puppeteer/puppeteer#2481")),(0,a.kt)("p",null,"View detailed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.19...v3.0.0-rc.20"},"code diff")," on GitHub"),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"core:")," corrected Wait so that polling stops when the timeout expires (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/60677e700269f03fd08e2cd58c06df0ec9c71f6f"},"60677e7"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"protractor:")," isVisible check for ProtractorPageElement returns false for non-existent elements (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e64eee377af32909f25e7c1d88f45a484abb1514"},"e64eee3"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"webdriverio:")," improved resiliency of the WebdriverIOPuppeteerModalDialogHandler (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/5e56edf875a6d21cabbe02505179e98d05bc89b7"},"5e56edf"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"webdriverio:")," updated WebdriverIO dependencies (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0833a3cb804bf800645c564877277c8498412ef2"},"0833a3c"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"web:")," improved JavaScript dialog-related error handling when taking screenshots (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3cd1149ed74df95da17f1054cd4da93b095a4eed"},"3cd1149"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/issues/2481"},"puppeteer/puppeteer#2481")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1156"},"#1156")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"web:")," removed dependency on is-plain-object (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/cbe76a6e36f3ccc4a012e81244aa108a040b2d45"},"cbe76a6"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"web:")," renamed PagesContext to BrowsingSession to make the name more descriptive (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/6b4e9984d80f8f349f367e59bd0e615cd01703ec"},"6b4e998"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236"))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"core:")," interaction to Wait stops upon errors (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/56ff3ebd5366064f89be8ad3eefa53114ad12e85"},"56ff3eb"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1035"},"#1035")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"core:")," interactions to Wait.for and Wait.until are now browser-independent (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/d1151427bed96c1ebd0d1dcc4159c6aeedc605de"},"d115142"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1035"},"#1035")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"core:")," minimum timeout and polling interval guards for Wait (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/fd53d81f5211eca18ba91729088d07883f2f9956"},"fd53d81"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1035"},"#1035")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright:")," configurable navigation and interaction timeouts for BrowseTheWebWithPlaywright (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/142b78ed5c3ede1f61f5a1c5ae72d785c3fe70a9"},"142b78e"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright:")," configurable navigation waitUntil timeout (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/2458fcb22c946da41ab59cb21ac0d4cc48012da7"},"2458fcb"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright:")," initial support for Playwright (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/87e88a16cdc06477ed25eb83f9597fd370fdc109"},"87e88a1"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/493"},"#493")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/563"},"#563")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/911"},"#911")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright:")," interaction to Select option(s) from a ","<","select /",">"," dropdown (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/009041d83e22ddf3fef14670e0e5fd6d11cdfc73"},"009041d"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright:")," interactions to Scroll, Press, and TakeScreenshot (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1c039d2027057f074f3d9be9685489b1512ac63c"},"1c039d2"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/493"},"#493")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/563"},"#563")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/911"},"#911")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright:")," isActive check for PlaywrightPageElement (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/dbf44eb7a8bfbeb45e03d9269d8c454e951c11b2"},"dbf44eb"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright:")," support for executing in-browser JavaScript (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/630beddbf6f782a85e1a15c0b8b57637498dbd91"},"630bedd"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/493"},"#493")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/563"},"#563")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/911"},"#911")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright:")," support for isClickable (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/afc8587a2ee2af6a4151512dc621473a3a892b7e"},"afc8587"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright:")," support for isVisible, plus consistent visibility checks across the board (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/2c5c929802f894f9fe59438a01f08b1b7bec3318"},"2c5c929"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright:")," support for working with cookies (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1215a8f0d2aabd99bdda8be4e136e0c4f6687803"},"1215a8f"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1237"},"#1237")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright:")," support for working with frames (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/89d46212073a342fe812a3ad2638a2ad0c39b620"},"89d4621"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"web:")," introduced PagesContext and implemented PlaywrightPage (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0045a726d540871333f644928218aed00bcd372c"},"0045a72"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"web:")," new portable APIs to handle ModalDialog windows (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/c94d0ec43d2bc8aa39f8824f5d0f1e1cbcf137a1"},"c94d0ec"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1236"},"#1236")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1156"},"#1156")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"web:")," standardised support for deep CSS selectors across the Web integration modules (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e9e3f281191fc5c891841b6c8aab41213da3b0f5"},"e9e3f28"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1238"},"#1238"))))}h.isMDXComponent=!0}}]);