"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[93313],{82247:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>d});var r=n(14041);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},65213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(89575),a=(n(14041),n(82247));const o={sidebar_position:1},i="Domain Events",s={unversionedId:"reporting/domain-events",id:"reporting/domain-events",title:"Domain Events",description:"Serenity/JS domain events represent all the important things that happen during the execution of your test suite.",source:"@site/docs/reporting/domain-events.mdx",sourceDirName:"reporting",slug:"/reporting/domain-events",permalink:"/handbook/reporting/domain-events",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/reporting/domain-events.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reporting",permalink:"/handbook/reporting/"},next:{title:"Console Reporter",permalink:"/handbook/reporting/console-reporter"}},p={},c=[],l={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"domain-events"},"Domain Events"),(0,a.yg)("p",null,"Serenity/JS ",(0,a.yg)("a",{parentName:"p",href:"/api/core-events/class/DomainEvent"},"domain events")," represent all the important things that happen during the execution of your test suite.\nThey are a critical part of the Serenity/JS messaging infrastructure\nthat enables the ",(0,a.yg)("a",{parentName:"p",href:"/handbook/getting-started/architecture/"},"loosely coupled, modular architecture"),"\nof the framework, and ensure that all the registered ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"reporting services"),"\nhave the same, consistent picture of your test scenarios."),(0,a.yg)("p",null,"Serenity/JS domain events are produced when ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Actor"},"actors")," perform their ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Activity"},"activities"),"\nand when ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/"},"test runner adapters")," translate information about your test runner lifecycle events.\nDomain events are then propagated via the ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Stage"},"stage")," and consumed by all\nthe registered ",(0,a.yg)("a",{parentName:"p",href:"/api/core/interface/StageCrewMember"},"stage crew members")," for reporting purposes."),(0,a.yg)("figure",null,(0,a.yg)("mermaid",{value:'flowchart TB\n    Developer["\ud83d\udcbb You"]\n    TestCode["Your Test Code"]\n    SerenityModules["Serenity/JS Modules"]\n    TestReports["Test Execution Reports"]\n    Stage\n\n    subgraph TestRunner["Test Runner"]\n    direction TB\n    TestRunnerAdapter["Serenity/JS Test Runner Adapter"]\n    end\n\n    subgraph ReportingServices["Serenity/JS Reporting Services"]\n    direction TB\n    StageCrewMember["StageCrewMember"]\n    end\n\n    Developer -- invoke --\x3e TestRunner\n\n    TestCode -- uses --\x3e SerenityModules\n    TestRunner -- executes --\x3e TestCode\n    TestRunnerAdapter --\x3e |emits DomainEvents| Stage\n    SerenityModules --\x3e |emit DomainEvents| Stage\n    Stage --\x3e |forwards DomainEvents| ReportingServices\n    ReportingServices --\x3e |produce| TestReports'}),(0,a.yg)("figcaption",null,"Serenity/JS Reporting Services integration diagram")),(0,a.yg)("p",null,"You'll typically only need to learn about Serenity/JS domain events when implementing custom reporting services. In this case, you should study:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the ",(0,a.yg)("a",{parentName:"li",href:"/api/core-events/class/DomainEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/core/lib/events"))," package, to see what domain events are available,"),(0,a.yg)("li",{parentName:"ul"},"built-in implementations of the ",(0,a.yg)("a",{parentName:"li",href:"/api/core/interface/StageCrewMember"},(0,a.yg)("inlineCode",{parentName:"a"},"StageCrewMember"))," interface, to see examples of how to work with events.")))}m.isMDXComponent=!0}}]);