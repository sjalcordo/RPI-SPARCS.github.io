"use strict";(self.webpackChunkcampfire_docs=self.webpackChunkcampfire_docs||[]).push([[8106],{8802:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>h,toc:()=>l});var r=s(4848),n=s(8453);const d={},i="Launcher",h={id:"scripts/helpers/launcher",title:"Launcher",description:"The Launcher component is a helper class that sets up and creates the buttons required to launch the different demos read from a JSON file found in StreamingAssets.",source:"@site/docs/scripts/helpers/launcher.md",sourceDirName:"scripts/helpers",slug:"/scripts/helpers/launcher",permalink:"/RPI-SPARCS.github.io/docs/scripts/helpers/launcher",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scripts/helpers/launcher.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Follow Player Rotation",permalink:"/RPI-SPARCS.github.io/docs/scripts/helpers/followPlayerRotation"},next:{title:"Launcher Item",permalink:"/RPI-SPARCS.github.io/docs/scripts/helpers/launcherItem"}},c={},l=[{value:"Enumerators",id:"enumerators",level:2},{value:"Custom Classes",id:"custom-classes",level:2},{value:"Properties",id:"properties",level:2},{value:"Unity Methods",id:"unity-methods",level:2},{value:"Public Methods",id:"public-methods",level:2},{value:"Private Methods",id:"private-methods",level:2}];function o(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"launcher",children:"Launcher"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Launcher"})," component is a helper class that sets up and creates the buttons required to launch the different demos read from a JSON file found in StreamingAssets."]}),"\n",(0,r.jsx)(t.h2,{id:"enumerators",children:"Enumerators"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"EFileMethod"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Value:"}),(0,r.jsx)(t.th,{children:"Description:"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AllInDirectory"}),(0,r.jsx)(t.td,{children:"Looks for all of the .json files within the given directory."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ByName"}),(0,r.jsx)(t.td,{children:"Looks for a specific .json file within the directory."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"custom-classes",children:"Custom Classes"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"ColorTagWrapper"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property:"}),(0,r.jsx)(t.th,{children:"Description:"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tag"}),(0,r.jsx)(t.td,{children:"The tag to associate with the given color."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Color"}),(0,r.jsx)(t.td,{children:"The color for the associated tag."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property:"}),(0,r.jsx)(t.th,{children:"Function:"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Browser Prefab"}),(0,r.jsx)(t.td,{children:"Prefab of the browser placed in the scene."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Launcher Item Prefab"}),(0,r.jsx)(t.td,{children:"Prefab of a launcher item to be placed within the list."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"File Method"}),(0,r.jsx)(t.td,{children:"The method to find JSON files as defined above in EFileMethod."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Filename"}),(0,r.jsx)(t.td,{children:"The name of the file to be found if using the ByName method."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Content"}),(0,r.jsx)(t.td,{children:"The transform of the vertical scroll's content."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Colors By Tag"}),(0,r.jsx)(t.td,{children:"The list of all of the tags and their colors."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Flat Cam Scene Name"}),(0,r.jsx)(t.td,{children:"The name of the default camera scene."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Backgrounds"}),(0,r.jsx)(t.td,{children:"The backgrounds to be used when the launcher is active to block off the cameras."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Canvas Manager"}),(0,r.jsx)(t.td,{children:"The canvas manager of the launcher."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Demos"}),(0,r.jsx)(t.td,{children:"The demos that have been read."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Opened Demo"}),(0,r.jsx)(t.td,{children:"The last demo to have been opened."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Launcher Active"}),(0,r.jsx)(t.td,{children:"Keeps track if the launcher is currently open."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Demos Initialized"}),(0,r.jsx)(t.td,{children:"Keeps track of the demos have been read from the JSON file(s)."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"unity-methods",children:"Unity Methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method:"}),(0,r.jsx)(t.th,{children:"Description:"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Awake"}),(0,r.jsx)(t.td,{children:"Reads and sets up the demos and launcher items."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Start"}),(0,r.jsx)(t.td,{children:"Sets launcher active to true."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Update"}),(0,r.jsx)(t.td,{children:"Waits for input to return to the launcher screen."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"public-methods",children:"Public Methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method:"}),(0,r.jsx)(t.th,{children:"Description:"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Return To Launcher"}),(0,r.jsx)(t.td,{children:"Returns to the launcher scene and clears all of the current canvases."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Open Demo By Index"}),(0,r.jsx)(t.td,{children:"Opens a demo by the given index."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"private-methods",children:"Private Methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method:"}),(0,r.jsx)(t.th,{children:"Description:"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Get Color From Tag"}),(0,r.jsx)(t.td,{children:"Attempts to find and return the color based on the tag given. If the tag cannot be found, the first color is returned instead."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Open Demo"}),(0,r.jsx)(t.td,{children:"Opens and sets up the demo from the given demo object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Read JSON From Directory"}),(0,r.jsx)(t.td,{children:"From a given directory and a list of DemoObjects, read all the JSON files within the directory and add it to the list."})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>h});var r=s(6540);const n={},d=r.createContext(n);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);