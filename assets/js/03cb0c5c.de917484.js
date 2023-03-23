"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[87696],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),m=a,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={sidebar_position:4},i="Logging",s={unversionedId:"design/logging",id:"design/logging",title:"Logging",description:"Serenity/JS helps you model your test scenarios from the perspective of actors performing activities to accomplish their goals.",source:"@site/docs/design/logging.mdx",sourceDirName:"design",slug:"/design/logging",permalink:"/handbook/design/logging",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/design/logging.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Waiting and synchronisation",permalink:"/handbook/design/waiting-and-synchronisation"},next:{title:"Debugging",permalink:"/handbook/design/debugging"}},c={},l=[],p={toc:l},g="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logging"},"Logging"),(0,a.kt)("p",null,"Serenity/JS helps you model your test scenarios from the perspective of ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Actor"},"actors")," performing ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Activity"},"activities")," to accomplish their goals.\nLogging follows this same consistent approach, with any log statements expressed using the interaction to ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Log"},(0,a.kt)("inlineCode",{parentName:"a"},"Log")),"."),(0,a.kt)("p",null,"The interaction to ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Log"},(0,a.kt)("inlineCode",{parentName:"a"},"Log"))," accepts any number of arguments, including dynamic values such as ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Question"},"questions"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/api/core#QuestionAdapter"},"question adapters"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled, Log } from '@serenity-js/core'\nimport { Page } from '@serenity-js/web'\n\nawait actorCalled('Laura').attemptsTo(\n  Log.the('Current page', Page.current().title(), Page.current().url().href),\n  //  static value --^        question --^          question adapter --^\n)\n")),(0,a.kt)("p",null,"When the actor reaches the interaction to ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Log"},(0,a.kt)("inlineCode",{parentName:"a"},"Log"))," in their workflow, the interaction:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"evaluates the arguments in the context of the given actor,"),(0,a.kt)("li",{parentName:"ul"},"makes the actor ",(0,a.kt)("a",{parentName:"li",href:"/api/core/class/Actor#collect"},"collect")," data artifacts with the results of the evaluation,"),(0,a.kt)("li",{parentName:"ul"},"the actor emits collected artifacts as ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/domain-events"},"domain events"),","),(0,a.kt)("li",{parentName:"ul"},"domain events are announced to all the registered ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/"},"Serenity/JS reporting services"),".")),(0,a.kt)("p",null,"Since the interaction to ",(0,a.kt)("inlineCode",{parentName:"p"},"Log")," relies on Serenity/JS domain events to propagate the information,\nall the registered reporting services receive the exact same information and can include it in their respective reports."))}u.isMDXComponent=!0}}]);