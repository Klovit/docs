"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[261],{7195:function(n,e,t){t.r(e),t.d(e,{assets:function(){return r},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return d}});var i=t(5893),s=t(1151);const o={sidebar_position:2},l="Installation",a={id:"KlovitClient/installation",title:"Installation",description:"You're supposed to at least have basic linux knowledge, and you're also supposed to understand what commands you're running.",source:"@site/docs/KlovitClient/installation.md",sourceDirName:"KlovitClient",slug:"/KlovitClient/installation",permalink:"/docs/KlovitClient/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/Klovit/docs/blob/main/docs/KlovitClient/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/KlovitClient/Introduction"},next:{title:"Configuration",permalink:"/docs/KlovitClient/configuration"}},r={},d=[{value:"Supported Operating Systems",id:"supported-operating-systems",level:2},{value:"Ubuntu and Debian",id:"ubuntu-and-debian",level:2},{value:"Windows",id:"windows",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(e.admonition,{title:"READ BEFORE PROCEEDING!",type:"warning",children:(0,i.jsx)(e.p,{children:"You're supposed to at least have basic linux knowledge, and you're also supposed to understand what commands you're running."})}),"\n",(0,i.jsx)(e.h2,{id:"supported-operating-systems",children:"Supported Operating Systems"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Versions"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"#ubuntu-and-debian",children:"Ubuntu"})}),(0,i.jsx)(e.td,{children:">=22.04"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"#ubuntu-and-debian",children:"Debian"})}),(0,i.jsx)(e.td,{children:">=10"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"#windows",children:"Windows"})}),(0,i.jsx)(e.td,{children:">=10"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["Suggested VPS hosting: ",(0,i.jsx)(e.a,{href:"https://geo-vm.net",children:"Geo-VM"})]}),"\n",(0,i.jsx)(e.p,{children:"Before you begin installation, make sure you have NodeJS v16 or above, git CLI, and Node Package Manager (NPM) v8.x or above installed."}),"\n",(0,i.jsx)(e.h2,{id:"ubuntu-and-debian",children:"Ubuntu and Debian"}),"\n",(0,i.jsx)(e.p,{children:"Firstly, make sure that you have all the prerequisites above installed (if you do you can skip this part)."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt update && sudo apt upgrade\n\n# installing git CLI\nsudo apt install git\n\n# installing NPM\nsudo apt install npm\n\n# installing NodeJS\ncurl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -\nsudo apt install nodejs\n"})}),"\n",(0,i.jsx)(e.p,{children:"You can check the versions with the following commands:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"git --version\nnpm -v\nnode -v\n"})}),"\n",(0,i.jsx)(e.p,{children:"Now to install KlovitClient, its dependencies:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/Klovit/KlovitClient.git\ncd KlovitClient && npm install\n"})}),"\n",(0,i.jsx)(e.p,{children:"After installing KlovitClient, edit the settings.json for your dashboard using our configuration guide."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"nano settings.json\n"})}),"\n",(0,i.jsx)(e.h2,{id:"windows",children:"Windows"}),"\n",(0,i.jsx)(e.p,{children:"First, make sure you have all the prerequisites listed at the top of the page (if you do you can skip this part)."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Git CLI: ",(0,i.jsx)(e.a,{href:"https://git-scm.com/download/win",children:"https://git-scm.com/download/win"})]}),"\n",(0,i.jsxs)(e.li,{children:["NPM and NodeJS: ",(0,i.jsx)(e.a,{href:"https://nodejs.org/en/",children:"https://nodejs.org/en/"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"You can check the versions with the following commands:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bat",children:"git --version\nnpm -v\nnode -v\n"})}),"\n",(0,i.jsx)(e.p,{children:"Now to install KlovitClient, its dependencies & build the frontend:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/Klovit/KlovitClient.git --branch stable\ncd KlovitClient && npm install\n"})}),"\n",(0,i.jsx)(e.p,{children:"After installing KlovitClient, edit the settings.json for your dashboard using our configuration guide."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bat",children:"start settings.json\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},1151:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return l}});var i=t(7294);const s={},o=i.createContext(s);function l(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);