"use strict";(self.webpackChunkklovit=self.webpackChunkklovit||[]).push([[261],{7195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(5893),s=n(1151);const o={sidebar_position:2},a="Installation",l={id:"KlovitClient/installation",title:"installation",description:"KlovitClient | Installation",source:"@site/docs/KlovitClient/installation.md",sourceDirName:"KlovitClient",slug:"/KlovitClient/installation",permalink:"/docs/KlovitClient/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/KlovitClient/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/KlovitClient/Introduction"},next:{title:"configuration",permalink:"/docs/KlovitClient/configuration"}},r={},d=[{value:"Supported Operating Systems",id:"supported-operating-systems",level:2},{value:"Ubuntu and Debian",id:"ubuntu-and-debian",level:2},{value:"Windows",id:"windows",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n,{children:[(0,i.jsx)("title",{children:"KlovitClient | Installation"}),(0,i.jsx)("meta",{charset:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,i.jsx)("meta",{name:"description",content:"The Next-Gen Developers"}),(0,i.jsx)("meta",{name:"keywords",content:"KlovitClient, Klovit,"}),(0,i.jsx)("meta",{name:"author",content:"Klovit"}),(0,i.jsx)("meta",{name:"copyright",content:"Klovit"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"Klovit"}),(0,i.jsx)("meta",{property:"og:description",content:"The Next-Gen Developers."}),(0,i.jsx)("meta",{property:"og:image",content:"https://zexade.com/KlovitClient%20Logo.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"https://zexade.com/KlovitClient%20Logo.png"}),(0,i.jsx)("meta",{name:"twitter:title",content:"Klovit"}),(0,i.jsx)("meta",{name:"twitter:description",content:"The Next-Gen Developers."}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://zexade.com/KlovitClient%20Logo.png"}),(0,i.jsx)("meta",{name:"twitter:image:src",content:"https://zexade.com/KlovitClient%20Logo.png"})]}),"\n",(0,i.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.admonition,{title:"READ BEFORE PROCEEDING!",type:"warning",children:(0,i.jsx)(t.p,{children:"You're supposed to have at least basic Linux knowledge, and you're also supposed to understand what commands you're running."})}),"\n",(0,i.jsx)(t.h2,{id:"supported-operating-systems",children:"Supported Operating Systems"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Versions"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#ubuntu-and-debian",children:"Ubuntu"})}),(0,i.jsx)(t.td,{children:">=22.04"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#ubuntu-and-debian",children:"Debian"})}),(0,i.jsx)(t.td,{children:">=10"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#windows",children:"Windows"})}),(0,i.jsx)(t.td,{children:">=10"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Suggested VPS hosting: ",(0,i.jsx)(t.a,{href:"https://geo-vm.net",children:"Geo-VM"})]}),"\n",(0,i.jsx)(t.p,{children:"Before you begin installation, make sure you have NodeJS v16 or above, git CLI, and Node Package Manager (NPM) v8.x or above installed."}),"\n",(0,i.jsx)(t.h2,{id:"ubuntu-and-debian",children:"Ubuntu and Debian"}),"\n",(0,i.jsx)(t.p,{children:"Firstly, make sure that you have all the prerequisites above installed (if you do you can skip this part)."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"sudo apt update && sudo apt upgrade\n\n# installing git CLI\nsudo apt install git\n\n# installing NPM\nsudo apt install npm\n\n# installing NodeJS\ncurl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -\nsudo apt install nodejs\n"})}),"\n",(0,i.jsx)(t.p,{children:"You can check the versions with the following commands:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"git --version\nnpm -v\nnode -v\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now to install KlovitClient, its dependencies:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/Klovit/KlovitClient.git\ncd KlovitClient && npm install\n"})}),"\n",(0,i.jsx)(t.p,{children:"After installing KlovitClient, edit the settings.json for your dashboard using our configuration guide."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"nano settings.json\n"})}),"\n",(0,i.jsx)(t.h2,{id:"windows",children:"Windows"}),"\n",(0,i.jsx)(t.p,{children:"First, make sure you have all the prerequisites listed at the top of the page (if you do you can skip this part)."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Git CLI: ",(0,i.jsx)(t.a,{href:"https://git-scm.com/download/win",children:"https://git-scm.com/download/win"})]}),"\n",(0,i.jsxs)(t.li,{children:["NPM and NodeJS: ",(0,i.jsx)(t.a,{href:"https://nodejs.org/en/",children:"https://nodejs.org/en/"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You can check the versions with the following commands:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bat",children:"git --version\nnpm -v\nnode -v\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now to install KlovitClient, its dependencies & build the frontend:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/Klovit/KlovitClient.git --branch stable\ncd KlovitClient && npm install\n"})}),"\n",(0,i.jsx)(t.p,{children:"After installing KlovitClient, edit the settings.json for your dashboard using our configuration guide."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bat",children:"start settings.json\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var i=n(7294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);