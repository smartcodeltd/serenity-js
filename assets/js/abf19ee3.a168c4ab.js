"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[2085],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const i={sidebar_position:5},o="Debugging",s={unversionedId:"design/debugging",id:"design/debugging",title:"Debugging",description:"Serenity/JS helps you model your test scenarios from the perspective of actors performing activities to accomplish their goals.",source:"@site/docs/design/debugging.mdx",sourceDirName:"design",slug:"/design/debugging",permalink:"/handbook/design/debugging",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/design/debugging.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/handbook/design/logging"},next:{title:"Control flow",permalink:"/handbook/design/control-flow"}},l={},p=[{value:"Error handling",id:"error-handling",level:2},{value:"Embedding in Tasks",id:"embedding-in-tasks",level:2},{value:"Exploring Playwright locators",id:"exploring-playwright-locators",level:2}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"Serenity/JS helps you model your test scenarios from the perspective of ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Actor"},"actors")," performing ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Activity"},"activities")," to accomplish their goals.\nDebugging follows this same consistent approach, with any debug statements expressed using the interaction to ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Debug"},(0,a.kt)("inlineCode",{parentName:"a"},"Debug")),"."),(0,a.kt)("p",null,"The interaction to ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Debug"},(0,a.kt)("inlineCode",{parentName:"a"},"Debug"))," accepts a ",(0,a.kt)("inlineCode",{parentName:"p"},"debuggerFunction")," and any number of arguments, including dynamic values such as ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Question"},"questions"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/api/core#QuestionAdapter"},"question adapters"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled, Debug } from '@serenity-js/core'\nimport { Navigate, Page, PageElement, By } from '@serenity-js/web'\n\nawait actorCalled('Debbie').attemptsTo(\n    Navigate.to('https://serenity-js.org'),\n    Debug.values(\n        // debuggerFunction:\n        (results, url, tagline) => {\n            // set a breakpoint anywhere inside the function to view:\n            // - `results`, which evaluates to Array<DebuggingResult>\n            // - `url`, which evaluates to 'https://serenity-js.org'\n            // - `tagline`, which evaluates to text content of the h1 element\n        },\n\n        // values to inspect (any number of values, to be evaluated one by one):\n        Page.current().url(),\n        Text.of(PageElement.located(By.css('h1')).describedAs('tagline'))\n    ),\n);\n")),(0,a.kt)("p",null,"When the actor reaches the interaction to ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Debug"},(0,a.kt)("inlineCode",{parentName:"a"},"Debug"))," in their workflow, the interaction:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"instructs the actor to attempt to resolve provided arguments one by one,"),(0,a.kt)("li",{parentName:"ul"},"passes them to your ",(0,a.kt)("inlineCode",{parentName:"li"},"debuggerFunction")," as an array of ",(0,a.kt)("a",{parentName:"li",href:"/api/core/interface/DebuggingResult"},(0,a.kt)("inlineCode",{parentName:"a"},"DebuggingResults")),", as well as individual values so that they're easier to inspect and interact with in your debugger,"),(0,a.kt)("li",{parentName:"ul"},"makes the actor ",(0,a.kt)("a",{parentName:"li",href:"/api/core/class/Actor#collect"},"collect")," data artifacts with the results of the evaluation and emit collected artifacts as ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/domain-events"},"domain events"),"\nto all the registered ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/"},"Serenity/JS reporting services")," so that they're included in your test reports.")),(0,a.kt)("h2",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"When resolving provided argument results in an error, the interaction to ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Debug"},(0,a.kt)("inlineCode",{parentName:"a"},"Debug"))," will still pass,\nbut the ",(0,a.kt)("inlineCode",{parentName:"p"},"results")," parameter will contain the details of the error so that you can debug it in your IDE:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled, Debug, Question } from '@serenity-js/core'\n\nconst throws = () =>\n    Question.about('argument that throws an error', actor => {\n        throw new Error('example error')\n    })\n\nawait actorCalled('Debbie').attemptsTo(\n    Debug.values(\n        // debuggerFunction:\n        (results, value) => {\n            // set a breakpoint anywhere inside the function to view:\n            // - `value`, which will be `undefined` since resolving it resulted in an error\n            // - `results`, which will contain one entry:\n            //   [{\n            //     description: `argument that throws an error`,    <- description of the Question\n            //     value: undefined,\n            //     error: Error                                     <- Error thrown during resolution\n            //   }]\n        },\n        throws(),\n    ),\n);\n")),(0,a.kt)("p",null,"When resolving more than one argument results in an error, ",(0,a.kt)("inlineCode",{parentName:"p"},"results")," array provides details of all the errors."),(0,a.kt)("h2",{id:"embedding-in-tasks"},"Embedding in Tasks"),(0,a.kt)("p",null,"Note that the interaction to ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Debug"},(0,a.kt)("inlineCode",{parentName:"a"},"Debug"))," can be embedded in other ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Task"},"tasks"),",\nto help with debugging nested workflows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled, Debug, Task } from '@serenity-js/core'\nimport { Navigate, PageElement, By, Text } from '@serenity-js/web'\n\nconst browseSerenityDocs = () =>\n    Task.where(`#actor browses Serenity/JS documentation`,\n        Navigate.to('https://serenity-js.org'),\n        Debug.values(\n            // debuggerFunction:\n            (results, tagline) => {\n                // set a breakpoint anywhere inside this function\n            },\n            Text.of(PageElement.located(By.css('h1')).describedAs('tagline'))\n        ),\n    )\n\nawait actorCalled('Debbie').attemptsTo(\n    browseSerenityDocs(),\n);\n")),(0,a.kt)("h2",{id:"exploring-playwright-locators"},"Exploring Playwright locators"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright"},"Playwright Test for VSCode"),"\nprovides features that allow for ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright#tune-locators"},"experimenting with web UI locators"),"\nwhile the test is paused at breakpoint."),(0,a.kt)("p",null,"Since this functionality is specific to ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright"},"Playwright"),", you can use it by passing ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright/class/PlaywrightPage"},(0,a.kt)("inlineCode",{parentName:"a"},"PlaywrightPage.current().nativePage()")),"\nas one of the arguments. You must also name the evaluated value ",(0,a.kt)("inlineCode",{parentName:"p"},"page"),", as this is the variable name that the Playwright VSCode extension looks for:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled, Debug } from '@serenity-js/core'\nimport { PlaywrightPage } from '@serenity-js/playwright'\nimport { Navigate } from '@serenity-js/web'\n\nawait actorCalled('Debbie').attemptsTo(\n    Navigate.to('https://serenity-js.org'),\n    Debug.values((results, page) => {\n        // set a breakpoint here to use Playwright locator debugging features\n        page.locator('h1')\n        // note that you can change this selector while having the test paused at breakpoint\n    }, PlaywrightPage.current().nativePage()),\n);\n")))}g.isMDXComponent=!0}}]);