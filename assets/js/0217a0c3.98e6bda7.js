(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[42399],{4150:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(7896),r=a(2784),s=a(6277),c=a(22376),l=a(57374),i=a(40597);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_fF9Z",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_Yh18"};function u(e){let{as:t,id:a,...u}=e;const{navbar:{hideOnScroll:d}}=(0,l.L)();if("h1"===t||!a)return r.createElement(t,(0,n.Z)({},u,{id:void 0}));const m=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:a});return r.createElement(t,(0,n.Z)({},u,{className:(0,s.Z)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,u.className),id:a}),u.children,r.createElement(i.default,{className:"hash-link",to:`#${a}`,"aria-label":m,title:m},"\u200b"))}},80923:(e,t,a)=>{"use strict";a.d(t,{F:()=>l});var n=a(2784),r=a(92078);const s={attributes:!0,characterData:!0,childList:!0,subtree:!0};function c(e,t){const[a,c]=(0,n.useState)(),l=(0,n.useCallback)((()=>{c(e.current?.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,n.useEffect)((()=>{l()}),[l]),function(e,t,a){void 0===a&&(a=s);const c=(0,r.zX)(t),l=(0,r.Ql)(a);(0,n.useEffect)((()=>{const t=new MutationObserver(c);return e&&t.observe(e,l),()=>t.disconnect()}),[e,c,l])}(a,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function l(){const[e,t]=(0,n.useState)(!1),[a,r]=(0,n.useState)(!1),s=(0,n.useRef)(null),l=(0,n.useCallback)((()=>{const a=s.current.querySelector("code");e?a.removeAttribute("style"):(a.style.whiteSpace="pre-wrap",a.style.overflowWrap="anywhere"),t((e=>!e))}),[s,e]),i=(0,n.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=s.current,a=e>t||s.current.querySelector("code").hasAttribute("style");r(a)}),[s]);return c(s,i),(0,n.useEffect)((()=>{i()}),[e,i]),(0,n.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:a,toggle:l}}},13078:(e,t,a)=>{"use strict";a.d(t,{p:()=>s});var n=a(72493),r=a(57374);function s(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,n.I)(),a=e.theme,s=e.darkTheme||a;return"dark"===t?s:a}},19614:(e,t,a)=>{"use strict";a.d(t,{QC:()=>f,Vo:()=>d,bc:()=>o,nZ:()=>m,nt:()=>u});var n=a(84501),r=a.n(n);const s=/title=(?<quote>["'])(?<title>.*?)\1/,c=/\{(?<range>[\d,-]+)\}/,l={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function i(e,t){const a=e.map((e=>{const{start:a,end:n}=l[e];return`(?:${a}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)}function o(e){return e?.match(s)?.groups.title??""}function u(e){return Boolean(e?.includes("showLineNumbers"))}function d(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function m(e,t){let a=e.replace(/\n$/,"");const{language:n,magicComments:s,metastring:o}=t;if(o&&c.test(o)){const e=o.match(c).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,n=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(n),code:a}}if(void 0===n)return{lineClassNames:{},code:a};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return i(["js","jsBlock"],t);case"jsx":case"tsx":return i(["js","jsBlock","jsx"],t);case"html":return i(["js","jsBlock","html"],t);case"python":case"py":case"bash":return i(["bash"],t);case"markdown":case"md":return i(["html","jsx","bash"],t);default:return i(Object.keys(l),t)}}(n,s),d=a.split("\n"),m=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),f=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:a}=e;return[a,t]}))),h=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:a}=e;return[a.start,t]}))),p=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:a}=e;return[a.end,t]})));for(let r=0;r<d.length;){const e=d[r].match(u);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));f[t]?m[f[t]].range+=`${r},`:h[t]?m[h[t]].start=r:p[t]&&(m[p[t]].range+=`${m[p[t]].start}-${r-1},`),d.splice(r,1)}a=d.join("\n");const b={};return Object.entries(m).forEach((e=>{let[t,{range:a}]=e;r()(a).forEach((e=>{b[e]??=[],b[e].push(t)}))})),{lineClassNames:b,code:a}}function f(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},a={};return Object.entries(e.plain).forEach((e=>{let[n,r]=e;const s=t[n];s&&"string"==typeof r&&(a[s]=r)})),a}},37058:(e,t,a)=>{"use strict";const n=a(2784),r=a(40597),s=a(73635),c=a(69673),l=a(4150),i=a(85211),o=a(8),u=a(91475),d=e=>e&&e.__esModule?e:{default:e},m=d(n),f=d(r),h=d(l);function p(e,t,a){if(!e.match(/api\/([\d.]+)/)&&!e.includes("api/next")&&a&&a.name!==t.version){const t="current"===a.name?"next":a.name;return e.endsWith("/api")?`${e}/${t}`:e.replace("/api/",`/api/${t}/`)}return e}e.exports=function(e){let{options:t,packages:a,history:r}=e;const l=c.useDocsVersion(),d=s.useDocsPreferredVersion(l.pluginId).preferredVersion;return n.useEffect((()=>{1===a.length?r.replace(p(a[0].entryPoints[0].reflection.permalink,l,d)):d&&r.replace(p(r.location.pathname,l,d))}),[a,r,l,d]),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col apiItemCol"},t.banner&&m.default.createElement("div",{className:"alert alert--info margin-bottom--md",role:"alert"},m.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.banner}})),m.default.createElement(u.VersionBanner,null),m.default.createElement("div",{className:"apiItemContainer"},m.default.createElement("article",null,m.default.createElement("div",{className:"markdown"},m.default.createElement("header",null,m.default.createElement(h.default,{as:"h1"},"API")),m.default.createElement("section",{className:"tsd-panel"},m.default.createElement("h3",{className:"tsd-panel-header"},"Packages"),m.default.createElement("div",{className:"tsd-panel-content"},m.default.createElement("ul",{className:"tsd-index-list"},a.map((e=>m.default.createElement("li",{key:e.packageName,className:"tsd-truncate"},m.default.createElement(f.default,{className:"tsd-kind-icon",to:e.entryPoints[0].reflection.permalink},m.default.createElement("span",{className:"tsd-signature-symbol"},"v",e.packageVersion)," ",m.default.createElement("span",null,i.removeScopes(e.packageName,t.scopes)))))))))),m.default.createElement(o.Footer,null)))))}},85211:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeScopes=function(e,t){return 0===t.length?e:t.reduce(((e,t)=>e.replace(new RegExp(`^(${t}-|@${t}/)`),"")),e)}},84501:(e,t)=>{function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,s]=t;if(n&&s){n=parseInt(n),s=parseInt(s);const e=n<s?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(s+=e);for(let t=n;t!==s;t+=e)a.push(t)}}return a}t.default=a,e.exports=a}}]);