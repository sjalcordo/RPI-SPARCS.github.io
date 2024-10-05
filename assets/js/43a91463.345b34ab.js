"use strict";(self.webpackChunkcampfire_docs=self.webpackChunkcampfire_docs||[]).push([[9348],{6780:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var s=t(4848),n=t(8453);const d={sidebar_position:6},i="Wrappable Browser",a={id:"scripts/browsers/wrappableBrowser",title:"Wrappable Browser",description:"The Wrappable Browser component creates a duplicate browser using the DupePointer class that allows for a browser to wrap around the wall display of the campfire.",source:"@site/docs/scripts/browsers/wrappableBrowser.md",sourceDirName:"scripts/browsers",slug:"/scripts/browsers/wrappableBrowser",permalink:"/docs/scripts/browsers/wrappableBrowser",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripts/browsers/wrappableBrowser.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Toggle Browser",permalink:"/docs/scripts/browsers/toggleBrowser"},next:{title:"Camera",permalink:"/docs/category/camera"}},o={},c=[{value:"Properties",id:"properties",level:2},{value:"Public Methods",id:"public-methods",level:2},{value:"Private Methods",id:"private-methods",level:2}];function l(e){const r={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"wrappable-browser",children:"Wrappable Browser"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.strong,{children:"Wrappable Browser"})," component creates a duplicate browser using the ",(0,s.jsx)(r.a,{href:"dupePointer",children:"DupePointer"})," class that allows for a browser to wrap around the wall display of the campfire."]}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property:"}),(0,s.jsx)(r.th,{children:"Function:"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Canvas Manager"}),(0,s.jsxs)(r.td,{children:["The ",(0,s.jsx)(r.a,{href:"../canvas/canvasManager",children:"Canvas Manager"})," that handles this browser."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Dupe"}),(0,s.jsxs)(r.td,{children:["The ",(0,s.jsx)(r.a,{href:"dupePointer",children:"Dupe Pointer"})," that will be duplicating this browser."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Image"}),(0,s.jsx)(r.td,{children:"The RawImage component of the browser that acts as the display."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Rect Transform"}),(0,s.jsx)(r.td,{children:"The RectTransform component of the browser."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Pointer UI"}),(0,s.jsx)(r.td,{children:"The Pointer UI component of the browser that handles input."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Parent Canvas"}),(0,s.jsx)(r.td,{children:"The parent Unity Engine Canvas, used to define distances and width."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Parent Canvas Min World X"}),(0,s.jsx)(r.td,{children:"Used in math calculations to find where to place duplicate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Parent Canvas Max World X"}),(0,s.jsx)(r.td,{children:"Used in math calculations to find where to place duplicate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Parent Canvas World Center X"}),(0,s.jsx)(r.td,{children:"Used in math calculations to find where to place duplicate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Parent Canvas World Width"}),(0,s.jsx)(r.td,{children:"Used in math calculations to find where to place duplicate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"World Half Width"}),(0,s.jsx)(r.td,{children:"Used in math calculations to find where to place duplicate."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"public-methods",children:"Public Methods"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method:"}),(0,s.jsx)(r.th,{children:"Description:"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MousedOver"}),(0,s.jsxs)(r.td,{children:["Used by the ",(0,s.jsx)(r.a,{href:"dupePointer",children:"Dupe Pointer"})," to tell this browser the duplicate has been moused over. This will swap their positions."]})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"private-methods",children:"Private Methods"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method:"}),(0,s.jsx)(r.th,{children:"Description:"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"RecursiveFindParentCanvas"}),(0,s.jsx)(r.td,{children:"Recurses through this transform's parents to find the Unity Engine Canvas that holds this browser."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CreateDupe"}),(0,s.jsx)(r.td,{children:"Creates a new game object and sets up the scripts needed for the duplicate."})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var s=t(6540);const n={},d=s.createContext(n);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);