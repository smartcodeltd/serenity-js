"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[43821],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15433:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,toc:()=>s});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s=[{value:"Serenity BDD",id:"serenity-bdd",level:2},{value:"Installation",id:"installation",level:3},{value:"SerenityBDDReporter",id:"serenitybddreporter",level:3},{value:"Usage with Playwright Test",id:"usage-with-playwright-test",level:4},{value:"Usage with WebdriverIO",id:"usage-with-webdriverio",level:4},{value:"Usage with Protractor",id:"usage-with-protractor",level:4},{value:"Programmatic configuration",id:"programmatic-configuration",level:4},{value:"Serenity BDD Living Documentation",id:"serenity-bdd-living-documentation",level:3},{value:"Configuring Serenity BDD reporting CLI",id:"configuring-serenity-bdd-reporting-cli",level:4},{value:"Downloading the Serenity BDD reporting CLI",id:"downloading-the-serenity-bdd-reporting-cli",level:4},{value:"Downloading through a proxy",id:"downloading-through-a-proxy",level:5},{value:"Use NPM config (Linux, macOS, Windows)",id:"use-npm-config-linux-macos-windows",level:6},{value:"Environment variables on Linux or macOS",id:"environment-variables-on-linux-or-macos",level:6},{value:"Environment variables on Windows",id:"environment-variables-on-windows",level:6},{value:"Use a specific User-Agent",id:"use-a-specific-user-agent",level:5},{value:"Ignore SSL checks",id:"ignore-ssl-checks",level:5},{value:"Producing the Serenity BDD test report",id:"producing-the-serenity-bdd-test-report",level:4},{value:"Using NPM scripts",id:"using-npm-scripts",level:3}],p={toc:s},l="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org"},"Serenity/JS")," is an innovative framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."),(0,a.kt)("p",null,"To get started, check out the comprehensive ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook"},"Serenity/JS Handbook"),", ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/core"},"API documentation"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/getting-started#serenityjs-project-templates"},"Serenity/JS project templates on GitHub"),"."),(0,a.kt)("p",null,"If you have any questions or just want to say hello, join the ",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community Chat"),"."),(0,a.kt)("h2",{id:"serenity-bdd"},"Serenity BDD"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/modules/serenity-bdd/"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/serenity-bdd"))," module integrates Serenity/JS and the Serenity BDD reporting CLI."),(0,a.kt)("p",null,"This integration enables your Serenity/JS tests to produce interim JSON reports, which the Serenity BDD reporting CLI\ncan then turn into world-class, illustrated test reports and living documentation. Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/reporting/index.html"},"Serenity/JS reporting"),"."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To install this module, run the following command in your computer terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm install --save-dev @serenity-js/{core,serenity-bdd}\n")),(0,a.kt)("h3",{id:"serenitybddreporter"},"SerenityBDDReporter"),(0,a.kt)("p",null,"To allow Serenity/JS to produce Serenity BDD-standard JSON reports, assign the ",(0,a.kt)("inlineCode",{parentName:"p"},"SerenityBDDReporter")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stage"),"\nand configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"ArtifactArchiver")," to store the reports at the location where Serenity BDD expects to find them."),(0,a.kt)("p",null,"This can be done:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"via ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright.config.ts"),", if you're using Serenity/JS with ",(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/api/playwright-test"},"Playwright Test")),(0,a.kt)("li",{parentName:"ul"},"via ",(0,a.kt)("inlineCode",{parentName:"li"},"wdio.conf.ts"),", if you're using Serenity/JS with ",(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/api/playwright-test"},"WebdriverIO")),(0,a.kt)("li",{parentName:"ul"},"via ",(0,a.kt)("inlineCode",{parentName:"li"},"protractor.conf.js"),", if you're using Serenity/JS with ",(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/api/protractor"},"Protractor")),(0,a.kt)("li",{parentName:"ul"},"or programmatically.")),(0,a.kt)("h4",{id:"usage-with-playwright-test"},"Usage with Playwright Test"),(0,a.kt)("p",null,"Learn more about using ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/playwright-test"},"Serenity/JS with Playwright Test"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@serenity-js/playwright-test';\n\nconst config: PlaywrightTestConfig = {\n    reporter: [\n        [ '@serenity-js/playwright-test', {\n            crew: [\n                '@serenity-js/serenity-bdd',\n                [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            ]\n        }]\n    ],\n\n    // Other configuration omitted for brevity\n    // For details, see https://playwright.dev/docs/test-configuration    \n};\n\nexport default config;\n")),(0,a.kt)("h4",{id:"usage-with-webdriverio"},"Usage with WebdriverIO"),(0,a.kt)("p",null,"Learn more about using ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/webdriverio"},"Serenity/JS with WebdriverIO"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// wdio.conf.ts\n\nimport { WebdriverIOConfig } from '@serenity-js/webdriverio';\n\nexport const config: WebdriverIOConfig = {\n\n    framework: '@serenity-js/webdriverio',\n\n    serenity: {\n        crew: [\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n        ]\n    },\n\n    // Other configuration omitted for brevity\n    // For details, see https://webdriver.io/docs/options\n};\n")),(0,a.kt)("h4",{id:"usage-with-protractor"},"Usage with Protractor"),(0,a.kt)("p",null,"Learn more about using ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/protractor"},"Serenity/JS with Protractor"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// protractor.conf.js\n\nexports.config = {\n\n    framework:      'custom',\n    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),\n\n    serenity: {\n        crew: [\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n        ]\n    },\n\n    // ...\n}\n")),(0,a.kt)("h4",{id:"programmatic-configuration"},"Programmatic configuration"),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/core/class/SerenityConfig"},"configuring Serenity/JS programmatically"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ArtifactArchiver, configure } from '@serenity-js/core';\nimport { SerenityBDDReporter } from '@serenity-js/serenity-bdd';\n\nconfigure({\n    crew: [\n        ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),\n        new SerenityBDDReporter()\n    ],\n});\n")),(0,a.kt)("h3",{id:"serenity-bdd-living-documentation"},"Serenity BDD Living Documentation"),(0,a.kt)("p",null,"To turn the Serenity BDD-standard JSON reports produced by the ",(0,a.kt)("inlineCode",{parentName:"p"},"SerenityBDDReporter")," into Serenity BDD test reports,\nyou need the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-bdd/serenity-cli"},"Serenity BDD reporting CLI"),"."),(0,a.kt)("p",null,"The Serenity BDD reporting CLI is a Java program, distributed as an executable ",(0,a.kt)("inlineCode",{parentName:"p"},".jar")," file and ",(0,a.kt)("a",{parentName:"p",href:"https://bintray.com/serenity/maven/serenity-cli"},"available on Bintray"),"."),(0,a.kt)("p",null,"This module ships with a ",(0,a.kt)("inlineCode",{parentName:"p"},"serenity-bdd")," CLI wrapper that makes downloading and running the Serenity BDD reporting CLI easy."),(0,a.kt)("p",null,"To learn more about the usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"serenity-bdd")," wrapper, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npx serenity-bdd --help\n")),(0,a.kt)("h4",{id:"configuring-serenity-bdd-reporting-cli"},"Configuring Serenity BDD reporting CLI"),(0,a.kt)("p",null,"To configure the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-bdd/serenity-cli"},"Serenity BDD reporting CLI"),", place a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"serenity.properties"),"\nin your project root directory. "),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# serenity.properties\nserenity.project.name=My awesome project\n")),(0,a.kt)("p",null,"Please note that the reporting CLI considers only those properties that are related to producing test reports.\nLearn more about configuring ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-bdd.github.io/docs/reference/serenity-properties"},(0,a.kt)("inlineCode",{parentName:"a"},"serenity.properties")),"."),(0,a.kt)("h4",{id:"downloading-the-serenity-bdd-reporting-cli"},"Downloading the Serenity BDD reporting CLI"),(0,a.kt)("p",null,"To download the Serenity BDD reporting CLI or to update it, use the update command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npx serenity-bdd update\n")),(0,a.kt)("p",null,"You can also tell it to download the Serenity BDD reporting CLI jar from your company's artifact repository if you can't use the official Bintray one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx serenity-bdd update --repository https://artifactory.example.org/\n")),(0,a.kt)("p",null,"To learn more about the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," command, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx serenity-bdd --help update\n")),(0,a.kt)("p",null,"Please note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," command will try to download the ",(0,a.kt)("inlineCode",{parentName:"p"},".jar")," only if you don't have it cached already, or when the one you have is not up to date. Otherwise, no outbound network calls are made."),(0,a.kt)("h5",{id:"downloading-through-a-proxy"},"Downloading through a proxy"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," command will pick up your proxy configuration automatically from your ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/commands/npm-config"},"NPM config"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/configuring-npm/npmrc"},(0,a.kt)("inlineCode",{parentName:"a"},".npmrc")," file"),", or environment variables. "),(0,a.kt)("p",null,"Please note that you only need to use one of those configuration mechanisms."),(0,a.kt)("h6",{id:"use-npm-config-linux-macos-windows"},"Use NPM config (Linux, macOS, Windows)"),(0,a.kt)("p",null,"To use NPM-level configuration, run the following commands in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm config set proxy http://[user:pwd]@domain.tld:port\nnpm config set https-proxy http://[user:pwd]@domain.tld:port\n")),(0,a.kt)("p",null,"If your proxy requires a certificate file, you can provide a path to it as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm config set cafile /path/to/root-ca.pem\n")),(0,a.kt)("p",null,"The above can also be accomplished by placing an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/configuring-npm/npmrc"},(0,a.kt)("inlineCode",{parentName:"a"},".npmrc")," file")," with following contents in your home directory or your project root:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# ~/.npmrc\nproxy = http://[user:pwd]@domain.tld:port\nhttps-proxy = http://[user:pwd]@domain.tld:port\n\ncafile = /path/to/root-ca.pem          # optional\nnoproxy = localhost,mycompany.com      # optional\n")),(0,a.kt)("h6",{id:"environment-variables-on-linux-or-macos"},"Environment variables on Linux or macOS"),(0,a.kt)("p",null,"To set your proxy on Linux or macOS, run the following commands in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"export HTTP_PROXY=http://[user:pwd]@domain.tld:port\nexport HTTPS_PROXY=http://[user:pwd]@domain.tld:port\n")),(0,a.kt)("p",null,"If needed, you can also set a ",(0,a.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," variable to a comma-separated list of domains that don't require a proxy, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"export NO_PROXY=localhost,mycompany.com\n")),(0,a.kt)("p",null,"Please note that you can add the above commands to your shell's ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.profile"),", so that they're executed whenever you open a new terminal."),(0,a.kt)("h6",{id:"environment-variables-on-windows"},"Environment variables on Windows"),(0,a.kt)("p",null,"To configure a proxy on Windows, run the following commands in Command Prompt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"set HTTP_PROXY=http://[user:pwd]@domain.tld:port\nset HTTPS_PROXY=http://[user:pwd]@domain.tld:port\n")),(0,a.kt)("p",null,"If you're using Powershell, run the following commands instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$env:HTTP_PROXY = http://[user:pwd]@domain.tld:port\n$env:HTTPS_PROXY = http://[user:pwd]@domain.tld:port\n")),(0,a.kt)("h5",{id:"use-a-specific-user-agent"},"Use a specific User-Agent"),(0,a.kt)("p",null,"If your artifact registry requires you to use a specific user agent, you can configure it using NPM config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'npm config set user-agent "Mozilla/5.0 (X11; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0"\n')),(0,a.kt)("h5",{id:"ignore-ssl-checks"},"Ignore SSL checks"),(0,a.kt)("p",null,"You can instruct the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," command to ignore any SSL certificate errors by providing an ",(0,a.kt)("inlineCode",{parentName:"p"},"--ignoreSSL")," flag when running the command:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npx serenity-bdd update --ignoreSSL\n")),(0,a.kt)("p",null,"You can also disable certificate checks at the NPM config level by running: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm config set strict-ssl false\n")),(0,a.kt)("p",null,"Alternative, you can accomplish the same with an ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# ~/.npmrc\nnpm_config_strict-ssl = false\n")),(0,a.kt)("h4",{id:"producing-the-serenity-bdd-test-report"},"Producing the Serenity BDD test report"),(0,a.kt)("p",null,"To produce the Serenity BDD test report and living documentation using default settings, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx serenity-bdd run\n")),(0,a.kt)("p",null,"To learn more about the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," command and how to change the default settings, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx serenity-bdd --help run\n")),(0,a.kt)("h3",{id:"using-npm-scripts"},"Using NPM scripts"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/reporting/serenity-bdd-reporter"},"Serenity BDD reports")," are generated by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-bdd/serenity-core/tree/main/serenity-cli"},"Serenity BDD CLI"),",\na Java program downloaded and managed by the ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/serenity-bdd"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/serenity-bdd"))," module."),(0,a.kt)("p",null,"In general, to produce Serenity BDD reports, your test suite must:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"download the Serenity BDD CLI, by calling ",(0,a.kt)("inlineCode",{parentName:"li"},"serenity-bdd update")),(0,a.kt)("li",{parentName:"ul"},"produce intermediate Serenity BDD ",(0,a.kt)("inlineCode",{parentName:"li"},".json")," reports, by registering ",(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/api/serenity-bdd/class/SerenityBDDReporter"},(0,a.kt)("inlineCode",{parentName:"a"},"SerenityBDDReporter"))),(0,a.kt)("li",{parentName:"ul"},"invoke the Serenity BDD CLI when you want to produce the report, by calling ",(0,a.kt)("inlineCode",{parentName:"li"},"serenity-bdd run"))),(0,a.kt)("p",null,"The pattern used by all the ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/getting-started#serenityjs-project-templates"},"Serenity/JS Project Templates")," relies\non using:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"an NPM ",(0,a.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v9/using-npm/scripts#life-cycle-operation-order"},(0,a.kt)("inlineCode",{parentName:"a"},"postinstall"))," script to download the Serenity BDD CLI"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/npm-failsafe"},(0,a.kt)("inlineCode",{parentName:"a"},"npm-failsafe"))," to run the reporting process even if the test suite itself has failed (which is precisely when you need test reports the most...)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/rimraf"},(0,a.kt)("inlineCode",{parentName:"a"},"rimraf"))," as a convenience method to remove any test reports left over from the previous run")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "scripts": {\n    "postinstall": "serenity-bdd update",\n    "clean": "rimraf target",\n    "test": "failsafe clean test:execute test:report",\n    "test:execute": "cucumber-js",\n    "test:report": "serenity-bdd run --features ./features ",\n  }\n}\n')),(0,a.kt)("p",null,"Note that in the above code sample, you should configure ",(0,a.kt)("inlineCode",{parentName:"p"},"test:execute")," to invoke ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/test-runners/"},"your test runner of choice"),"."))}c.isMDXComponent=!0}}]);