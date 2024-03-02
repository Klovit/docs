"use strict";(self.webpackChunkklovit=self.webpackChunkklovit||[]).push([[699],{2427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(5893),i=t(1151);const o={sidebar_position:3},r="Configuration",a={id:"KlovitClient/configuration",title:"configuration",description:"KlovitClient | Configuration",source:"@site/docs/KlovitClient/configuration.md",sourceDirName:"KlovitClient",slug:"/KlovitClient/configuration",permalink:"/docs/KlovitClient/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/Klovit/docs/blob/main/docs/KlovitClient/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"installation",permalink:"/docs/KlovitClient/installation"},next:{title:"congratulations",permalink:"/docs/KlovitClient/congratulations"}},l={},c=[{value:"Configuring your Settings",id:"configuring-your-settings",level:2},{value:"Setting Up Nginx",id:"setting-up-nginx",level:2},{value:"Starting KlovitClient",id:"starting-klovitclient",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t,{children:[(0,s.jsx)("title",{children:"KlovitClient | Configuration"}),(0,s.jsx)("meta",{charset:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,s.jsx)("meta",{name:"description",content:"The Next-Gen Developers"}),(0,s.jsx)("meta",{name:"keywords",content:"KlovitClient, Klovit,"}),(0,s.jsx)("meta",{name:"author",content:"Klovit"}),(0,s.jsx)("meta",{name:"copyright",content:"Klovit"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:"Klovit"}),(0,s.jsx)("meta",{property:"og:description",content:"The Next-Gen Developers."}),(0,s.jsx)("meta",{property:"og:image",content:"https://zexade.com/KlovitClient%20Logo.png"}),(0,s.jsx)("meta",{name:"twitter:card",content:"https://zexade.com/KlovitClient%20Logo.png"}),(0,s.jsx)("meta",{name:"twitter:title",content:"Klovit"}),(0,s.jsx)("meta",{name:"twitter:description",content:"The Next-Gen Developers."}),(0,s.jsx)("meta",{name:"twitter:image",content:"https://zexade.com/KlovitClient%20Logo.png"}),(0,s.jsx)("meta",{name:"twitter:image:src",content:"https://zexade.com/KlovitClient%20Logo.png"})]}),"\n",(0,s.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["This page goes over the ",(0,s.jsx)(n.code,{children:"settings.json"})," configuration and setting up the Nginx webserver for KlovitClient."]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-your-settings",children:"Configuring your Settings"}),"\n",(0,s.jsxs)(n.p,{children:["Because the ",(0,s.jsx)(n.code,{children:"Settings.json"})," file is so large, this page will break down and explain each individual section."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.4",\n  "name": "KlovitClient",\n  "logo": "https://zexade.com/KlovitClient%20Logo.png",\n  "discord": "",\n  "description": "The best modern Pterodactyl Client Area",\n  "defaulttheme": "default",\n  "timezone": "Asia/Kolkata",\n  "resources": {\n    "_note": "Options: MB, GB. This is only used on the user side, admin will use GB.",\n    "type": "GB"\n  },\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The start of the settings file; The ",(0,s.jsx)(n.code,{children:"name"})," is the name of the Organisation/Host running KlovitClient. ",(0,s.jsx)(n.code,{children:"discord"})," is the URL of the Discord Server of the Organisation/Host running KlovitClient. The ",(0,s.jsx)(n.code,{children:"description"})," is the Description of your dashboard. The ",(0,s.jsx)(n.code,{children:"timezone"})," is the TimeZone which you want the dashboard's time to sync with. The ",(0,s.jsx)(n.code,{children:"resources"})," is the Type of resources you want the users to see, Admin's end will always use GB."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  "website": {\n      "port": 24000,\n      "secret": "Default Secret (Change this to any string you want)"\n  },\n  "pterodactyl": {\n    "domain": "Your Pterodactyl Panel Domain",\n    "key": "Your Pterodactyl Panel API Key"\n  },\n  "ads": {\n    "enabled": true,\n    "note": "Enable this to use ad providers like Evadav, Monetag, Adsterra, etc.",\n    "note-2": "put scripts in ./themes/default/components/ads.ejs"\n  },\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The start of second part, the ",(0,s.jsx)(n.code,{children:"port"})," is the port on which you want the KlovitCLient instance to be running on. The ",(0,s.jsx)(n.code,{children:"secret"})," is a randomly genererated password that you must keep secret as it it is what the dashboards sessions are encrypted with. ",(0,s.jsx)(n.code,{children:"domain"})," is the URL of the Pterodactyl Instance. The ",(0,s.jsx)(n.code,{children:"key"})," is the Admin API Key of your Pterodactyl Instance. The Ads - ",(0,s.jsx)(n.code,{children:"enabled"})," is the option where you want the ADs to be enabled or not, if you choose to enable it then you will have to modify the ",(0,s.jsx)(n.code,{children:"ads.ejs"})," file present in the ",(0,s.jsx)(n.code,{children:"./themes/default/components"})," directory."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  "linkvertise": {\n    "enabled": true,\n    "userid": "243856",\n    "coins": 2,\n    "dailyLimit": "null",\n    "minTimeToComplete": "null",\n    "timeToExpire": "null",\n    "cooldown": "null"\n  },\n  "atglinks": {\n    "enabled": true,\n    "apikey": "785159b542f060cb98b55b27a09b2034df506bff",\n    "coins": 2,\n    "dailyLimit": "null",\n    "minTimeToComplete": "null",\n    "timeToExpire": "null",\n    "cooldown": "null"\n  },\n  "linkpays": {\n    "enabled": true,\n    "apikey": "d159f15a31bf7d11cb1d7b3886b174e778acd31b",\n    "coins": 2,\n    "dailyLimit": "null",\n    "minTimeToComplete": "null",\n    "timeToExpire": "null",\n    "cooldown": "null"\n  },\n  "exeio": {\n    "enabled": true,\n    "apikey": "c47725e9a61f5984b64ea13df6d4eb6d927435b5",\n    "coins": 2,\n    "dailyLimit": "null",\n    "minTimeToComplete": "null",\n    "timeToExpire": "null",\n    "cooldown": "null"\n  },\n  "storelimits": {\n    "ram": "8192",\n    "disk": "10240",\n    "cpu": "400",\n    "servers": "8"\n  },\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The start of third part, the ",(0,s.jsx)(n.code,{children:"linkvertise"})," is a Link Shortener which pays you per impression and when users complete this they get a mount of coins configured in the settings, you can find the ",(0,s.jsx)(n.code,{children:"apikey"})," on their respective dashboard the ",(0,s.jsx)(n.code,{children:"minTimeToComplete"})," is in seconds, the configuration goes for the other shorteners. The ",(0,s.jsx)(n.code,{children:"storelimits"})," are limits of the resources that can buy, this system uses MB to configure."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'   "stripe": {\n    "enabled": false,\n    "note": "The key is the stripe API key and the coins is the amount per \xa31. If the stripe API key is invalid and stripe purchases are enabled, KlovitClient will crash when attempting to do transactions.",\n    "key": "100000000000000",\n    "coins": 100\n  },\n  "note": "The database is located in the \'databases\' folder.",\n  "database": "database.sqlite",\n  "api": {\n    "client": {\n      "api": {\n        "enabled": false,\n        "code": "Default API Key (Change this to any string you want)"\n      },\n      "j4r": {\n        "enabled": false,\n        "ads": [\n          {\n            "name": "Example server 1",\n            "invite": "https://discord.gg/example",\n            "id": "000000000000000000",\n            "coins": 100\n          },\n          {\n            "name": "Example server 2",\n            "invite": "https://discord.gg/example",\n            "id": "000000000000000000",\n            "coins": 200\n          }\n        ]\n      },\n      "bot": {\n        "token": "Discord bot token here",\n        "joinguild": {\n          "_comment": "The Discord bot must be in these servers and have invite permissions. Automatic guild joining will not work unless role packages are configured correctly. You can always just set it to a random role & package so that only this works.",\n          "enabled": false,\n          "guildid": [\n            "Guild ID 1"\n          ]\n        },\n        "giverole":{\n          "_comment": "Both the bot and the user must be on the server, give the specify role on registering",\n          "enabled": true,\n          "guildid": "000000000000000000",\n          "roleid": "000000000000000000"\n        }\n      },\n\n \n'})}),"\n",(0,s.jsxs)(n.p,{children:["The start of fourth part, The ",(0,s.jsx)(n.code,{children:"stripe"})," is set to false by default, it is useful if you want to use KlovitClient as a billing dashboard aswell, the rate is 1\u20ac per decided amount of coins. The ",(0,s.jsx)(n.code,{children:"api"})," is set to false by default, if you want to make external applications linked to KlovitClient, you can set it to true. The ",(0,s.jsx)(n.code,{children:"j4r"})," is a feature from which the users have to join a specific servet to get some coins, the servers can be configured. The ",(0,s.jsx)(n.code,{children:"token"})," is required if you want the users who login to join the Discord Server, the ",(0,s.jsx)(n.code,{children:"guildid"})," is the ID of the Discord Server, it can contain multiple IDs. The ",(0,s.jsx)(n.code,{children:"giverole"})," function gives roles to users when registered on the dashboard."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'        "passwordgenerator": {\n        "signup": true,\n        "note": "Use this to disable signups",\n        "length": 16\n      },\n      "allow": {\n        "newusers": true,\n        "regen": true,\n        "server": {\n          "create": true,\n          "modify": true,\n          "delete": true\n        },\n        "overresourcessuspend": false\n      },\n      "oauth2": {\n        "_comment": "Go to https://discord.dev/ and create an application to set these up.",\n        "id": "Your Discord Oauth2 ID",\n        "secret": "Your Discord Oauth2 Secret",\n        "link": "Your Client Panel\'s URL",\n        "callbackpath": "/callback",\n        "prompt": true,\n        "ip": {\n          "trust x-forwarded-for": true,\n          "block": [],\n          "duplicate check": false\n        }\n      },\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The start of fifth part, the ",(0,s.jsx)(n.code,{children:"passwordgenerator"})," functions generates a password of the given length, by default it generates on signup and this can be disabled. The ",(0,s.jsx)(n.code,{children:"allow"})," functions decides to allow the following things - ",(0,s.jsx)(n.code,{children:"newusers"}),", ",(0,s.jsx)(n.code,{children:"regen"}),"(Password regeneration), ",(0,s.jsx)(n.code,{children:"server-create"}),", ",(0,s.jsx)(n.code,{children:"server-modify"}),", ",(0,s.jsx)(n.code,{children:"server-delete"})," and decides whether to suspend users using over resources or not. The ",(0,s.jsx)(n.code,{children:"oauth2"})," is the Authentication function of KlovitClient, it uses Discord OAuth2 to authenticate, the ",(0,s.jsx)(n.code,{children:"id"})," is the ID of the Discord OAuth2 Application, the ",(0,s.jsx)(n.code,{children:"secret"})," is the Secret of the Discord OAuth2 Application, the ",(0,s.jsx)(n.code,{children:"link"})," is the Link of your KlovitClient instance with ",(0,s.jsx)(n.code,{children:"https://"})," is using ssl or ",(0,s.jsx)(n.code,{children:"http://"})," is using without ssl, the ",(0,s.jsx)(n.code,{children:"block"})," feature blocks the given IP Addresses from accessing the dashboard, the ",(0,s.jsx)(n.code,{children:"duplicate check"})," feature checks for duplicate IP addresses and blocks the duplicate ones (Useful for preventing alt accounts)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'      "ratelimits": {\n        "/callback": 2,\n        "/create": 1,\n        "/delete": 1,\n        "/modify": 1,\n        "/updateinfo": 1,\n        "/setplan": 2,\n        "/admin": 1,\n        "/regen": 1,\n        "/renew": 1,\n        "/api/userinfo": 1\n      },\n      "packages": {\n        "default": "default",\n        "list": {\n          "default": {\n            "ram": 5120,\n            "disk": 8192,\n            "cpu": 150,\n            "servers": 1\n          }\n        },\n        "rolePackages": {\n          "note": "This allows you to set a different plan to people who have a specific role however this requires the Discord bot to be configured and functioning. This is mainly used for Boost rewards",\n          "roleServer": "Server ID",\n          "roles": {\n            "Role ID": "Package Name"\n          }\n        }\n      },\n      "locations": {\n        "1": {\n          "name": "Default Location 1",\n          "package": null\n        },\n        "2": {\n          "name": "Default Location 2",\n          "package": null\n        }\n      },\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The start of sixth part, the ",(0,s.jsx)(n.code,{children:"ratelimits"})," are the ratelimits for the given endpoints. The ",(0,s.jsx)(n.code,{children:"packages"})," feature decides the resources of users with the assigned packages. The ",(0,s.jsx)(n.code,{children:"rolepackages"})," is a function to automatically assign packages to users which have a certain role, the ",(0,s.jsx)(n.code,{children:"roleid"})," should be replaced the ID of the special role you want to configure, the ",(0,s.jsx)(n.code,{children:"Package Name"})," should be replaced with the specific package you want to automatically assign to the user with specific role. The ",(0,s.jsx)(n.code,{children:"locations"})," is the feature to decide the available locations to deploy servers, the ",(0,s.jsx)(n.code,{children:"1"})," is the ID of the location on the Pterodactyl Instance, the ",(0,s.jsx)(n.code,{children:"name"})," is the identifier visible to users to deploy, the ",(0,s.jsx)(n.code,{children:"package"})," is the name of the package which is allowed to deploy this location (",(0,s.jsx)(n.code,{children:"null"})," means that users with any package can deploy to this location.)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:' "eggs": {\n          "klovitegg": {\n            "display": "MultiEgg | KlovitEgg",\n            "minimum": {\n              "ram": 1024,\n              "disk": 1024,\n              "cpu": 80\n            },\n            "maximum": {\n              "ram": null,\n              "disk": null,\n              "cpu": null\n            },\n            "info": {\n              "egg": 16,\n              "docker_image": "ghcr.io/pterodactyl/yolks:java_17",\n              "startup": "bash install.sh && curl -Os \\"https://raw.githubusercontent.com/BeastGamer81/klovitegg/main/install.sh\\"",\n              "environment": {\n                "MINECRAFT_VERSION": "latest",\n                "PMMP_VERSION": "PM5",\n                "NODE_MAIN_FILE": "index.js"\n              },\n              "feature_limits": {\n                "databases": 4,\n                "backups": 4,\n                "allocations": 2\n              }\n            }\n          }\n      },\n      "gift": {\n        "enabled": false\n      },\n      "misc": {\n        "purger":{\n          "note": "PURGER IS IN BETA CURRENTLY, WILL WORK PARTIALLY. (IT\'S SAFE TO USE PURGER CURRENTLY)",\n          "enabled": false\n        },\n        "getip": {\n          "enabled": false\n        }\n      },\n      "coins": {\n        "enabled": true,\n        "leaderboard": {\n          "note": "LEADERBOARD IS IN BETA CURRENTLY, MAY NOT WORK",\n          "enabled": false\n        },\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The start of seventh part, the ",(0,s.jsx)(n.code,{children:"eggs"})," are the Eggs from the Pterodactyl Panel, the ",(0,s.jsx)(n.code,{children:"minimum"})," is the minimum resources required to make a server using this egg, the ",(0,s.jsx)(n.code,{children:"maximum"})," is the maximum resources that can be alloted to a server using this egg, the required information to fill the ",(0,s.jsx)(n.code,{children:"info"})," section can be found on the Egg's settings on the Pterodactyl Panel. The ",(0,s.jsx)(n.code,{children:"gift"})," is a feature that allows users to gift their extra resources and coins, by default this is set to false, you can set it to true anytime. The ",(0,s.jsx)(n.code,{children:"misc"})," is the section for miscellaneous admmin commands that are disabled by default but, can be enabled from the ",(0,s.jsx)(n.code,{children:"settings.json"}),", these commands include - ",(0,s.jsx)(n.code,{children:"purger"})," to purge the servers which do not have a specific keyword, ",(0,s.jsx)(n.code,{children:"getip"})," this feature allows admins to get IP of any user. The ",(0,s.jsx)(n.code,{children:"coins"})," feature decides that the virtual currency is enabled or not. The ",(0,s.jsx)(n.code,{children:"leaderboard"})," is the Leaderbord for the top 5 richest users on the dashboard, this feature is problematic sometimes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'        "store": {\n          "_comment": "The cost and per is not intended to used with 0. This is not intended to sell resources for coins. Make sure coins are enabled too, or else there can be errors.",\n          "enabled": true,\n          "ram": {\n            "cost": 1000,\n            "per": 1024\n          },\n          "disk": {\n            "cost": 1000,\n            "per": 1024\n          },\n          "cpu": {\n            "cost": 1000,\n            "per": 100\n          },\n          "servers": {\n            "cost": 100,\n            "per": 1\n          }\n        }\n      }\n  }\n },\n  "whitelist": {\n    "note": "This allows only specific people to be able to use the dashboard",\n    "status": false,\n    "users": [\n      "User ID"\n    ]\n  },\n  "servercreation": {\n    "note": "You can set how much it should cost to create a server here, the default price is free",\n    "cost": 0\n  },\n  "renewals": {\n    "note": "The cost is the amount of coins required to renew, and the delay is the amount of days before they need to renew. New servers after the 1st one will also cost the renewal amount.",\n    "status": false,\n    "cost": 0,\n    "delay": 14\n  },\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The start of eighth part, the ",(0,s.jsx)(n.code,{children:"store"})," is the place where users can buy resources for coins, the Per is is in MB, the coins should be enabled for store to work. The ",(0,s.jsx)(n.code,{children:"whitelist"})," feature allows you to make sure that only specific people can access the dashboard, this is disabled by default, their ID should be inserted properly. The ",(0,s.jsx)(n.code,{children:"servercreation"})," is the cost of coins that users should pay to create a server, default price is ",(0,s.jsx)(n.code,{children:"0"})," (free). The ",(0,s.jsx)(n.code,{children:"renewals"})," is a feature which requires users to renew the servers for an amount of decided coins at the delay of the given time (Note: The time is in DAYS), by default this is set to false and the fee is ",(0,s.jsx)(n.code,{children:"0"})," (free)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  "logging": {\n    "status": false,\n    "webhook": "Webhook URL",\n    "actions": {\n      "user": {\n        "signup": true,\n        "create server": true,\n        "gifted coins": true,\n        "modify server": true,\n        "buy servers": true,\n        "buy ram": true,\n        "buy cpu": true,\n        "buy disk": true\n      }, \n      "admin": {\n        "set coins": true,\n        "add coins": true,\n        "set resources": true,\n        "set plan": true,\n        "create coupon": true,\n        "revoke coupon": true,\n        "remove account": true,\n        "view ip": true,\n        "purge": true\n      }\n    }\n  },\n  "antivpn": {\n    "note": "For antivpn to work, generate an apikey on https://proxycheck.io/. If you don\'t put a key, KlovitClient will disable antivpn.",\n    "status": false,\n    "APIKey": "Proxycheck APIKey",\n    "whitelistedIPs": ["IP address"]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The start of ninth part, the ",(0,s.jsx)(n.code,{children:"logging"})," is a feature that logs the decided actions by default this is set to false and all actions are enabled, to enable this you have to set the ",(0,s.jsx)(n.code,{children:"status"})," property to ",(0,s.jsx)(n.code,{children:"true"})," and input a Discord Webhook URL. The ",(0,s.jsx)(n.code,{children:"antivpn"})," feature prevents VPN users, by default this is set to false, to enable this, you have to set the ",(0,s.jsx)(n.code,{children:"status"})," property to ",(0,s.jsx)(n.code,{children:"true"})," and input a ProxyCheck APIKEY which can be generated at ",(0,s.jsx)(n.a,{href:"https://proxycheck.io",children:"their website"}),", the ",(0,s.jsx)(n.code,{children:"whitelistedIPs"})," property allows you to whitelist certain IPs from the AntiVPN function."]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-nginx",children:"Setting Up Nginx"}),"\n",(0,s.jsx)(n.p,{children:"The Nginx web server will allow us to use a custom domain name and apply SSL to it."}),"\n",(0,s.jsxs)(n.p,{children:["First, we need to make sure you have ",(0,s.jsx)(n.code,{children:"Nginx"})," and ",(0,s.jsx)(n.code,{children:"certbot"})," installed:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install nginx\nsudo apt install certbot\nsudo apt install -y python3-certbot-nginx\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now you can install your SSL certificate:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl start nginx\ncertbot certonly --nginx -d <KLOVITCLIENT_DOMAIN>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure to replace ",(0,s.jsx)(n.code,{children:"<KLOVITCLIENT_DOMAIN>"})," with your domain name. If you have done this correctly you should see something similar to the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'IMPORTANT NOTES:\n - Congratulations! Your certificate and chain have been saved at:\n   /etc/letsencrypt/live/your.klovitclient.domain/fullchain.pem\n   Your key file has been saved at:\n   /etc/letsencrypt/live/your.klovitclient.domain/privkey.pem\n   Your cert will expire on date. To obtain a new or tweaked\n   version of this certificate in the future, simply run certbot\n   again. To non-interactively renew *all* of your certificates, run\n   "certbot renew"\n - If you like Certbot, please consider supporting our work by:\n\n   Donating to ISRG / Let\'s Encrypt:   https://letsencrypt.org/donate\n   Donating to EFF:                    https://eff.org/donate-le\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If what you saw isn't similar to what you saw in your server, we recommend you ask for support on our ",(0,s.jsx)(n.a,{href:"https://discord.gg/wwpRNvkMHA",children:"Discord Server"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Next, if everything's going correctly, you need to go to the Nginx sites directory and create a configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /etc/nginx/sites-available\nnano klovitclient.conf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now paste the following into the file. Make sure to replace ",(0,s.jsx)(n.code,{children:"<DOMAIN>"})," and ",(0,s.jsx)(n.code,{children:"<PORT>"})," with your KlovitClient domain and the port KlovitClient is running on."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",children:'server {\n  listen 80;\n  server_name <DOMAIN>;\n  return 301 https://$server_name$request_uri;\n}\nserver {\n  listen 443 ssl http2;\n\n  server_name <DOMAIN>;\n  ssl_certificate /etc/letsencrypt/live/<DOMAIN>/fullchain.pem;\n  ssl_certificate_key /etc/letsencrypt/live/<DOMAIN>/privkey.pem;\n  ssl_session_cache shared:SSL:10m;\n  ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n  ssl_ciphers  HIGH:!aNULL:!MD5;\n  ssl_prefer_server_ciphers on;\n\n  location / {\n    proxy_pass http://localhost:<PORT>/;\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection "Upgrade";\n    proxy_set_header Host $host;\n    proxy_buffering off;\n    proxy_set_header X-Real-IP $remote_addr;\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"After we've setup the main config file, we'll need to symlink it to sites-enabled:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ln -s /etc/nginx/sites-available/klovitclient.conf /etc/nginx/sites-enabled/klovitclient.conf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once you have edited, saved, and symlinked your configuration file, restart Nginx with ",(0,s.jsx)(n.code,{children:"systemctl restart nginx"})," and restart KlovitClient. You should see it running on that domain with SSL!"]}),"\n",(0,s.jsx)(n.h2,{id:"starting-klovitclient",children:"Starting KlovitClient"}),"\n",(0,s.jsx)(n.p,{children:"First we need to install pm2:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm install pm2 -g\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now you need to go to the dashboard directory and use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pm2 start index.js --name KlovitClient\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once you have started KlovitClient, head to the Dashbard URL and login!"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);