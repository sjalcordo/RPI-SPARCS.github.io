"use strict";(self.webpackChunkcampfire_docs=self.webpackChunkcampfire_docs||[]).push([[6173],{6293:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var s=t(4848),a=t(8453);const i={sidebar_position:2},n="Campfire Camera Manager",d={id:"scripts/camera/campfireCameraManager",title:"Campfire Camera Manager",description:"The Campfire Camera Manager manages the cameras and their displays, as well as easy setup in the inspector to create cameras as needed.",source:"@site/docs/scripts/camera/campfireCameraManager.md",sourceDirName:"scripts/camera",slug:"/scripts/camera/campfireCameraManager",permalink:"/RPI-SPARCS.github.io/docs/scripts/camera/campfireCameraManager",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripts/camera/campfireCameraManager.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Campfire Camera",permalink:"/RPI-SPARCS.github.io/docs/scripts/camera/campfireCamera"},next:{title:"ZF Find Slice",permalink:"/RPI-SPARCS.github.io/docs/scripts/camera/ZFFindSlice"}},c={},h=[{value:"Enumerators",id:"enumerators",level:2},{value:"Properties",id:"properties",level:2},{value:"Public Methods",id:"public-methods",level:2},{value:"Private Methods",id:"private-methods",level:2}];function l(e){const r={h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"campfire-camera-manager",children:"Campfire Camera Manager"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.strong,{children:"Campfire Camera Manager"})," manages the cameras and their displays, as well as easy setup in the inspector to create cameras as needed."]}),"\n",(0,s.jsx)(r.h2,{id:"enumerators",children:"Enumerators"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"ECameraType"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Value:"}),(0,s.jsx)(r.th,{children:"Description:"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Sectioned"}),(0,s.jsx)(r.td,{children:"The wall camera is divided into sections which may be divided into several cameras."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Single"}),(0,s.jsx)(r.td,{children:"The wall camera is made up of a single camera."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property:"}),(0,s.jsx)(r.th,{children:"Function:"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Aspect Ratio"}),(0,s.jsx)(r.td,{children:"The aspect ratio of the wall."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Camera Type"}),(0,s.jsx)(r.td,{children:"Whether or not the wall camera is sectioned or single."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Sections"}),(0,s.jsx)(r.td,{children:"The amount of sections the wall camera will be divided into."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Cameras per Section"}),(0,s.jsx)(r.td,{children:"The amount of cameras that each section will be divided into."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Aux Displays"}),(0,s.jsx)(r.td,{children:"The amount of auxiliary displays."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"public-methods",children:"Public Methods"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method:"}),(0,s.jsx)(r.th,{children:"Description:"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Setup Parameters"}),(0,s.jsx)(r.td,{children:"Allows the parameters to be edited by another script."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Setup Cameras"}),(0,s.jsx)(r.td,{children:"Sets up the cameras with the given parameters."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"private-methods",children:"Private Methods"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method:"}),(0,s.jsx)(r.th,{children:"Description:"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Clear Children"}),(0,s.jsx)(r.td,{children:"Destroys all children of this object."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Instantiate Cameras"}),(0,s.jsx)(r.td,{children:"Goes through each camera type and instantiates them given the floor count, wall count, and auxilary count."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Instantiate Camera Loop"}),(0,s.jsx)(r.td,{children:"Loops through a specific type with the given count and type."})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>d});var s=t(6540);const a={},i=s.createContext(a);function n(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);