"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[11649],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,g=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2057:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>l,frontMatter:()=>o,toc:()=>s});var n=r(7896),a=(r(2784),r(30876));const o={},i=void 0,s=[{value:"Serenity/JS Protractor",id:"serenityjs-protractor",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage with Cucumber.js",id:"usage-with-cucumberjs",level:4},{value:"Usage with Jasmine",id:"usage-with-jasmine",level:4},{value:"Usage with Mocha",id:"usage-with-mocha",level:4},{value:"Configuring Protractor",id:"configuring-protractor",level:3},{value:"Interacting with websites and web apps",id:"interacting-with-websites-and-web-apps",level:3},{value:"Template Repositories",id:"template-repositories",level:3}],p={toc:s},c="wrapper";function l(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org"},"Serenity/JS")," is an innovative framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."),(0,a.kt)("p",null,"To get started, check out the comprehensive ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook"},"Serenity/JS Handbook"),", ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/core"},"API documentation"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/getting-started#serenityjs-project-templates"},"Serenity/JS project templates on GitHub"),"."),(0,a.kt)("p",null,"If you have any questions or just want to say hello, join the ",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community Chat"),"."),(0,a.kt)("h2",{id:"serenityjs-protractor"},"Serenity/JS Protractor"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/modules/protractor/"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/protractor"))," module is a ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/thinking-in-serenity-js/screenplay-pattern.html"},"Screenplay Pattern"),"-style adapter\nfor ",(0,a.kt)("a",{parentName:"p",href:"https://www.protractortest.org/"},"Protractor framework"),", that helps with testing Angular, React, Vue\nand other frontend web apps."),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/integration/serenityjs-and-protractor.html"},"integrating Serenity/JS with Protractor"),"."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To install this module, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm install --save-dev @serenity-js/{core,protractor}\n")),(0,a.kt)("p",null,"Next, install one of the below test runner adapters."),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/integration/serenityjs-and-protractor.html"},"integrating Serenity/JS with Protractor"),"."),(0,a.kt)("h4",{id:"usage-with-cucumberjs"},"Usage with Cucumber.js"),(0,a.kt)("p",null,"To use Serenity/JS Protractor with Cucumber.js, install the following adapter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm install --save-dev @serenity-js/cucumber\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please note")," that Serenity/JS Protractor / Cucumber integration supports both ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/reporting/index.html"},"Serenity/JS reporting services")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js/blob/main/docs/cli.md#built-in-formatters"},"native Cucumber.js reporters"),", so you can use this module as a drop-in replacement of ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/protractor-cucumber-framework"},(0,a.kt)("inlineCode",{parentName:"a"},"protractor-cucumber-framework")),"."),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/integration/serenityjs-and-protractor.html#integrating-protractor-with-serenity-js-and-cucumber"},"integrating Serenity/JS Protractor with Cucumber"),"."),(0,a.kt)("h4",{id:"usage-with-jasmine"},"Usage with Jasmine"),(0,a.kt)("p",null,"To use Serenity/JS Protractor with Jasmine, install the following adapter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm install --save-dev @serenity-js/jasmine\n")),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/integration/serenityjs-and-protractor.html#integrating-protractor-with-serenity-js-and-jasmine"},"integrating Serenity/JS Protractor with Cucumber"),"."),(0,a.kt)("h4",{id:"usage-with-mocha"},"Usage with Mocha"),(0,a.kt)("p",null,"To use Serenity/JS Protractor with Mocha, install the following adapter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm install --save-dev @serenity-js/mocha\n")),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/integration/serenityjs-and-protractor.html#integrating-protractor-with-serenity-js-and-mocha"},"integrating Serenity/JS Protractor with Cucumber"),"."),(0,a.kt)("h3",{id:"configuring-protractor"},"Configuring Protractor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// protractor.conf.js\n\n// Import the Serenity/JS reporting services, a.k.a. the \"Stage Crew Members\"\nconst\n    { ArtifactArchiver } = require('@serenity-js/core'),\n    { ConsoleReporter } = require('@serenity-js/console-reporter'),\n    { Photographer, TakePhotosOfFailures, TakePhotosOfInteractions } = require('@serenity-js/protractor'),\n    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd');\n\nexports.config = {\n    // Tell Protractor to use the Serenity/JS framework Protractor Adapter\n    framework:      'custom',\n    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),\n  \n    // Configure Serenity/JS to use an appropriate test runner\n    // and the Stage Crew Members we've imported at the top of this file\n    serenity: {\n        runner: 'jasmine',\n        // runner: 'cucumber',\n        // runner: 'mocha',\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: './target/site/serenity' } ],\n            [ '@serenity-js/web:Photographer', {\n                strategy: 'TakePhotosOfFailures', // or: 'TakePhotosOfInteractions'\n            } ],\n        ]\n    },\n\n    // configure Cucumber runner\n    cucumberOpts: {\n        // see the Cucumber configuration options below\n    },\n\n    // or configure Jasmine runner\n    jasmineNodeOpts: {\n        // see the Jasmine configuration options below\n    },\n\n    // or configure Mocha runner\n    mochaOpts: {\n        // see the Mocha configuration options below\n    },\n\n    // ... other Protractor-specific configuration   \n};\n")),(0,a.kt)("p",null,"Learn more about:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/modules/cucumber/class/src/cli/CucumberConfig.ts~CucumberConfig.html"},"Cucumber configuration options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/modules/jasmine/class/src/adapter/JasmineConfig.ts~JasmineConfig.html"},"Jasmine configuration options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/modules/mocha/class/src/adapter/MochaConfig.ts~MochaConfig.html"},"Mocha configuration options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/angular/protractor/blob/master/lib/config.ts"},"Protractor configuration file"),".")),(0,a.kt)("h3",{id:"interacting-with-websites-and-web-apps"},"Interacting with websites and web apps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled } from '@serenity-js/core';\nimport { Ensure, equals } from '@serenity-js/assertions';\nimport { By, Navigate, Target, Text } from '@serenity-js/web';\nimport { BrowseTheWebWithProtractor } from '@serenity-js/protractor';\nimport { protractor } from 'protractor';\n\n// example Lean Page Object describing a widget we interact with in the test\nclass SerenityJSWebsite {\n    static header = () =>\n        PageElement.located(By.css('h1'))   // selector to identify the interactable element\n            .describedAs('header');         // description to be used in reports\n}\n\n// example Jasmine test\ndescribe('Serenity/JS', () => {\n    \n    it('works with Protractor and Jasmine', async () => {\n        await actorCalled('Priya')\n            .whoCan(\n                BrowseTheWebWithProtractor.using(protractor.browser)\n            )\n            .attemptsTo(\n                Navigate.to('https://serenity-js.org'),\n                Ensure.that(\n                    Text.of(SerenityJSWebsite.header()), \n                    equals('Next generation acceptance testing')\n                ),\n            )\n    })\n})\n")),(0,a.kt)("h3",{id:"template-repositories"},"Template Repositories"),(0,a.kt)("p",null,"The easiest way for you to start writing web-based acceptance tests using Serenity/JS, Protractor and either ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js"},"Cucumber")," or ",(0,a.kt)("a",{parentName:"p",href:"https://jasmine.github.io/"},"Jasmine")," is by using one of the below template repositories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js-mocha-protractor-template"},"Serenity/JS, Mocha, and Protractor template")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js-cucumber-protractor-template"},"Serenity/JS, Cucumber, and Protractor template")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js-jasmine-protractor-template"},"Serenity/JS, Jasmine, and Protractor template"))))}l.isMDXComponent=!0}}]);