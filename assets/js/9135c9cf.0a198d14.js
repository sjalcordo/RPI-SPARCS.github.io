"use strict";(self.webpackChunkcampfire_docs=self.webpackChunkcampfire_docs||[]).push([[3982],{7897:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=t(4848),n=t(8453);const i={},d="Mouse Wrangler",o={id:"scripts/helpers/mouseWrangler",title:"Mouse Wrangler",description:"The Mouse Wrangler component moves the cursor smoothly between the different displays instead of needing to move the mouse to the right and left borders to swap displays.",source:"@site/docs/scripts/helpers/mouseWrangler.md",sourceDirName:"scripts/helpers",slug:"/scripts/helpers/mouseWrangler",permalink:"/RPI-SPARCS.github.io/docs/scripts/helpers/mouseWrangler",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripts/helpers/mouseWrangler.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Launcher Item",permalink:"/RPI-SPARCS.github.io/docs/scripts/helpers/launcherItem"},next:{title:"Run Server",permalink:"/RPI-SPARCS.github.io/docs/scripts/helpers/runServer"}},l={},h=[{value:"Properties",id:"properties",level:2},{value:"Unity Messages",id:"unity-messages",level:2},{value:"Private Methods",id:"private-methods",level:2},{value:"Public Methods",id:"public-methods",level:2},{value:"Coroutines",id:"coroutines",level:2}];function c(e){const s={h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"mouse-wrangler",children:"Mouse Wrangler"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"Mouse Wrangler"})," component moves the cursor smoothly between the different displays instead of needing to move the mouse to the right and left borders to swap displays."]}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property:"}),(0,r.jsx)(s.th,{children:"Function:"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Enable Wrangling"}),(0,r.jsx)(s.td,{children:"Enable the use of the mouse wrangler."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Epsilon"}),(0,r.jsx)(s.td,{children:"Specifies the warp zone on edges of screen in pixels."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Rotation"}),(0,r.jsx)(s.td,{children:"Rotation of the mouse position."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Radius"}),(0,r.jsx)(s.td,{children:"Radius of the floor screen in pixels."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Center"}),(0,r.jsx)(s.td,{children:"Center of the floor screen."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Floor"}),(0,r.jsx)(s.td,{children:"The display corresponding to the floor."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Wall"}),(0,r.jsx)(s.td,{children:"The display corresponding to the wall."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Momentum"}),(0,r.jsx)(s.td,{children:"Momentum used for switching screens."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Last Mouse Axis"}),(0,r.jsx)(s.td,{children:"The axis used for momentum."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"unity-messages",children:"Unity Messages"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Message:"}),(0,r.jsx)(s.th,{children:"Description:"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Start"}),(0,r.jsx)(s.td,{children:"Set the displays and variables needed for the floor and wall."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Update"}),(0,r.jsx)(s.td,{children:"Warp cursor if it approaches an edge."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"private-methods",children:"Private Methods"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Method:"}),(0,r.jsx)(s.th,{children:"Description:"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Calculate Epsilon"}),(0,r.jsx)(s.td,{children:"Calculates the epsilon given the percent deadzone."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Momentum Needed"}),(0,r.jsx)(s.td,{children:"Checks if momentum is needed based on if the cursor jumps between the wall to floor or vice versa. It is not needed if going from floor to floor or wall to wall."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"public-methods",children:"Public Methods"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Method:"}),(0,r.jsx)(s.th,{children:"Description:"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Is Wall Display"}),(0,r.jsx)(s.td,{children:"Checks if position is on the wall."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Bottom of Screen"}),(0,r.jsx)(s.td,{children:"Checks if position is within epsilon of the bottom of the screen."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Left of Screen"}),(0,r.jsx)(s.td,{children:"Checks if position is within epsilon of the left of the screen."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Right of Screen"}),(0,r.jsx)(s.td,{children:"Checks if position is within epsilon of the right of the screen."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ring of Floor"}),(0,r.jsx)(s.td,{children:"Checks if position is within epsilon of the edge of the ring of the floor."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"coroutines",children:"Coroutines"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Coroutine:"}),(0,r.jsx)(s.th,{children:"Description:"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Use Momentum"}),(0,r.jsx)(s.td,{children:"Moves the cursor with momentum for 0.15 seconds."})]})})]})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>o});var r=t(6540);const n={},i=r.createContext(n);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);