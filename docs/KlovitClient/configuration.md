---
sidebar_position: 3
---

# Configuration
This page goes over the `settings.json` configuration and setting up the Nginx webserver for KlovitClient.

## Configuring your Settings
Because the `Settings.json` file is so large, this page will break down and explain each individual section.

```json
{
  "version": "0.4",
  "name": "KlovitClient",
  "logo": "https://zexade.com/KlovitClient%20Logo.png",
  "discord": "",
  "description": "The best modern Pterodactyl Client Area",
  "defaulttheme": "default",
  "timezone": "Asia/Kolkata",
  "resources": {
    "_note": "Options: MB, GB. This is only used on the user side, admin will use GB.",
    "type": "GB"
  },
```

The start of the settings file; The `name` is the name of the Organisation/Host running KlovitClient. `discord` is the URL of the Discord Server of the Organisation/Host running KlovitClient. The `description` is the Description of your dashboard. The `timezone` is the TimeZone which you want the dashboard's time to sync with. The `resources` is the Type of resources you want the users to see, Admin's end will always use GB.
```json
  "website": {
      "port": 24000,
      "secret": "Default Secret (Change this to any string you want)"
  },
  "pterodactyl": {
    "domain": "Your Pterodactyl Panel Domain",
    "key": "Your Pterodactyl Panel API Key"
  },
  "ads": {
    "enabled": true,
    "note": "Enable this to use ad providers like Evadav, Monetag, Adsterra, etc.",
    "note-2": "put scripts in ./themes/default/components/ads.ejs"
  },

```

The start of second part, the `port` is the port on which you want the KlovitCLient instance to be running on. The `secret` is a randomly genererated password that you must keep secret as it it is what the dashboards sessions are encrypted with. `domain` is the URL of the Pterodactyl Instance. The `key` is the Admin API Key of your Pterodactyl Instance. The Ads - `enabled` is the option where you want the ADs to be enabled or not, if you choose to enable it then you will have to modify the `ads.ejs` file present in the `./themes/default/components` directory.
```json
  "linkvertise": {
    "enabled": true,
    "userid": "243856",
    "coins": 2,
    "dailyLimit": "null",
    "minTimeToComplete": "null",
    "timeToExpire": "null",
    "cooldown": "null"
  },
  "atglinks": {
    "enabled": true,
    "apikey": "785159b542f060cb98b55b27a09b2034df506bff",
    "coins": 2,
    "dailyLimit": "null",
    "minTimeToComplete": "null",
    "timeToExpire": "null",
    "cooldown": "null"
  },
  "linkpays": {
    "enabled": true,
    "apikey": "d159f15a31bf7d11cb1d7b3886b174e778acd31b",
    "coins": 2,
    "dailyLimit": "null",
    "minTimeToComplete": "null",
    "timeToExpire": "null",
    "cooldown": "null"
  },
  "exeio": {
    "enabled": true,
    "apikey": "c47725e9a61f5984b64ea13df6d4eb6d927435b5",
    "coins": 2,
    "dailyLimit": "null",
    "minTimeToComplete": "null",
    "timeToExpire": "null",
    "cooldown": "null"
  },
  "storelimits": {
    "ram": "8192",
    "disk": "10240",
    "cpu": "400",
    "servers": "8"
  },
```

The start of third part, the `linkvertise` is a Link Shortener which pays you per impression and when users complete this they get a mount of coins configured in the settings, you can find the `apikey` on their respective dashboard the `minTimeToComplete` is in seconds, the configuration goes for the other shorteners. The `storelimits` are limits of the resources that can buy, this system uses MB to configure.
```json
   "stripe": {
    "enabled": false,
    "note": "The key is the stripe API key and the coins is the amount per £1. If the stripe API key is invalid and stripe purchases are enabled, KlovitClient will crash when attempting to do transactions.",
    "key": "100000000000000",
    "coins": 100
  },
  "note": "The database is located in the 'databases' folder.",
  "database": "database.sqlite",
  "api": {
    "client": {
      "api": {
        "enabled": false,
        "code": "Default API Key (Change this to any string you want)"
      },
      "j4r": {
        "enabled": false,
        "ads": [
          {
            "name": "Example server 1",
            "invite": "https://discord.gg/example",
            "id": "000000000000000000",
            "coins": 100
          },
          {
            "name": "Example server 2",
            "invite": "https://discord.gg/example",
            "id": "000000000000000000",
            "coins": 200
          }
        ]
      },
      "bot": {
        "token": "Discord bot token here",
        "joinguild": {
          "_comment": "The Discord bot must be in these servers and have invite permissions. Automatic guild joining will not work unless role packages are configured correctly. You can always just set it to a random role & package so that only this works.",
          "enabled": false,
          "guildid": [
            "Guild ID 1"
          ]
        },
        "giverole":{
          "_comment": "Both the bot and the user must be on the server, give the specify role on registering",
          "enabled": true,
          "guildid": "000000000000000000",
          "roleid": "000000000000000000"
        }
      },

 
```

The start of fourth part, The `stripe` is set to false by default, it is useful if you want to use KlovitClient as a billing dashboard aswell, the rate is 1€ per decided amount of coins. The `api` is set to false by default, if you want to make external applications linked to KlovitClient, you can set it to true. The `j4r` is a feature from which the users have to join a specific servet to get some coins, the servers can be configured. The `token` is required if you want the users who login to join the Discord Server, the `guildid` is the ID of the Discord Server, it can contain multiple IDs. The `giverole` function gives roles to users when registered on the dashboard.
```json
        "passwordgenerator": {
        "signup": true,
        "note": "Use this to disable signups",
        "length": 16
      },
      "allow": {
        "newusers": true,
        "regen": true,
        "server": {
          "create": true,
          "modify": true,
          "delete": true
        },
        "overresourcessuspend": false
      },
      "oauth2": {
        "_comment": "Go to https://discord.dev/ and create an application to set these up.",
        "id": "Your Discord Oauth2 ID",
        "secret": "Your Discord Oauth2 Secret",
        "link": "Your Client Panel's URL",
        "callbackpath": "/callback",
        "prompt": true,
        "ip": {
          "trust x-forwarded-for": true,
          "block": [],
          "duplicate check": false
        }
      },
```

The start of fifth part, the `passwordgenerator` functions generates a password of the given length, by default it generates on signup and this can be disabled. The `allow` functions decides to allow the following things - `newusers`, `regen`(Password regeneration), `server-create`, `server-modify`, `server-delete` and decides whether to suspend users using over resources or not. The `oauth2` is the Authentication function of KlovitClient, it uses Discord OAuth2 to authenticate, the `id` is the ID of the Discord OAuth2 Application, the `secret` is the Secret of the Discord OAuth2 Application, the `link` is the Link of your KlovitClient instance with `https://` is using ssl or `http://` is using without ssl, the `block` feature blocks the given IP Addresses from accessing the dashboard, the `duplicate check` feature checks for duplicate IP addresses and blocks the duplicate ones (Useful for preventing alt accounts).
```json
      "ratelimits": {
        "/callback": 2,
        "/create": 1,
        "/delete": 1,
        "/modify": 1,
        "/updateinfo": 1,
        "/setplan": 2,
        "/admin": 1,
        "/regen": 1,
        "/renew": 1,
        "/api/userinfo": 1
      },
      "packages": {
        "default": "default",
        "list": {
          "default": {
            "ram": 5120,
            "disk": 8192,
            "cpu": 150,
            "servers": 1
          }
        },
        "rolePackages": {
          "note": "This allows you to set a different plan to people who have a specific role however this requires the Discord bot to be configured and functioning. This is mainly used for Boost rewards",
          "roleServer": "Server ID",
          "roles": {
            "Role ID": "Package Name"
          }
        }
      },
      "locations": {
        "1": {
          "name": "Default Location 1",
          "package": null
        },
        "2": {
          "name": "Default Location 2",
          "package": null
        }
      },
```

The start of sixth part, the `ratelimits` are the ratelimits for the given endpoints. The `packages` feature decides the resources of users with the assigned packages. The `rolepackages` is a function to automatically assign packages to users which have a certain role, the `roleid` should be replaced the ID of the special role you want to configure, the `Package Name` should be replaced with the specific package you want to automatically assign to the user with specific role. The `locations` is the feature to decide the available locations to deploy servers, the `1` is the ID of the location on the Pterodactyl Instance, the `name` is the identifier visible to users to deploy, the `package` is the name of the package which is allowed to deploy this location (`null` means that users with any package can deploy to this location.).
```json
 "eggs": {
          "klovitegg": {
            "display": "MultiEgg | KlovitEgg",
            "minimum": {
              "ram": 1024,
              "disk": 1024,
              "cpu": 80
            },
            "maximum": {
              "ram": null,
              "disk": null,
              "cpu": null
            },
            "info": {
              "egg": 16,
              "docker_image": "ghcr.io/pterodactyl/yolks:java_17",
              "startup": "bash install.sh && curl -Os \"https://raw.githubusercontent.com/BeastGamer81/klovitegg/main/install.sh\"",
              "environment": {
                "MINECRAFT_VERSION": "latest",
                "PMMP_VERSION": "PM5",
                "NODE_MAIN_FILE": "index.js"
              },
              "feature_limits": {
                "databases": 4,
                "backups": 4,
                "allocations": 2
              }
            }
          }
      },
      "gift": {
        "enabled": false
      },
      "misc": {
        "purger":{
          "note": "PURGER IS IN BETA CURRENTLY, WILL WORK PARTIALLY. (IT'S SAFE TO USE PURGER CURRENTLY)",
          "enabled": false
        },
        "getip": {
          "enabled": false
        }
      },
      "coins": {
        "enabled": true,
        "leaderboard": {
          "note": "LEADERBOARD IS IN BETA CURRENTLY, MAY NOT WORK",
          "enabled": false
        },
```

The start of seventh part, the `eggs` are the Eggs from the Pterodactyl Panel, the `minimum` is the minimum resources required to make a server using this egg, the `maximum` is the maximum resources that can be alloted to a server using this egg, the required information to fill the `info` section can be found on the Egg's settings on the Pterodactyl Panel. The `gift` is a feature that allows users to gift their extra resources and coins, by default this is set to false, you can set it to true anytime. The `misc` is the section for miscellaneous admmin commands that are disabled by default but, can be enabled from the `settings.json`, these commands include - `purger` to purge the servers which do not have a specific keyword, `getip` this feature allows admins to get IP of any user. The `coins` feature decides that the virtual currency is enabled or not. The `leaderboard` is the Leaderbord for the top 5 richest users on the dashboard, this feature is problematic sometimes.
```json
        "store": {
          "_comment": "The cost and per is not intended to used with 0. This is not intended to sell resources for coins. Make sure coins are enabled too, or else there can be errors.",
          "enabled": true,
          "ram": {
            "cost": 1000,
            "per": 1024
          },
          "disk": {
            "cost": 1000,
            "per": 1024
          },
          "cpu": {
            "cost": 1000,
            "per": 100
          },
          "servers": {
            "cost": 100,
            "per": 1
          }
        }
      }
  }
 },
  "whitelist": {
    "note": "This allows only specific people to be able to use the dashboard",
    "status": false,
    "users": [
      "User ID"
    ]
  },
  "servercreation": {
    "note": "You can set how much it should cost to create a server here, the default price is free",
    "cost": 0
  },
  "renewals": {
    "note": "The cost is the amount of coins required to renew, and the delay is the amount of days before they need to renew. New servers after the 1st one will also cost the renewal amount.",
    "status": false,
    "cost": 0,
    "delay": 14
  },
```

The start of eighth part, the `store` is the place where users can buy resources for coins, the Per is is in MB, the coins should be enabled for store to work. The `whitelist` feature allows you to make sure that only specific people can access the dashboard, this is disabled by default, their ID should be inserted properly. The `servercreation` is the cost of coins that users should pay to create a server, default price is `0` (free). The `renewals` is a feature which requires users to renew the servers for an amount of decided coins at the delay of the given time (Note: The time is in DAYS), by default this is set to false and the fee is `0` (free). 
```json
  "logging": {
    "status": false,
    "webhook": "Webhook URL",
    "actions": {
      "user": {
        "signup": true,
        "create server": true,
        "gifted coins": true,
        "modify server": true,
        "buy servers": true,
        "buy ram": true,
        "buy cpu": true,
        "buy disk": true
      }, 
      "admin": {
        "set coins": true,
        "add coins": true,
        "set resources": true,
        "set plan": true,
        "create coupon": true,
        "revoke coupon": true,
        "remove account": true,
        "view ip": true,
        "purge": true
      }
    }
  },
  "antivpn": {
    "note": "For antivpn to work, generate an apikey on https://proxycheck.io/. If you don't put a key, KlovitClient will disable antivpn.",
    "status": false,
    "APIKey": "Proxycheck APIKey",
    "whitelistedIPs": ["IP address"]
  }
}
```

The start of ninth part, the `logging` is a feature that logs the decided actions by default this is set to false and all actions are enabled, to enable this you have to set the `status` property to `true` and input a Discord Webhook URL. The `antivpn` feature prevents VPN users, by default this is set to false, to enable this, you have to set the `status` property to `true` and input a ProxyCheck APIKEY which can be generated at [their website](https://proxycheck.io), the `whitelistedIPs` property allows you to whitelist certain IPs from the AntiVPN function.


## Setting Up Nginx
The Nginx web server will allow us to use a custom domain name and apply SSL to it.

First, we need to make sure you have `Nginx` and `certbot` installed:
```bash
sudo apt install nginx
sudo apt install certbot
sudo apt install -y python3-certbot-nginx
```

Now you can install your SSL certificate:
```bash
systemctl start nginx
certbot certonly --nginx -d <KLOVITCLIENT_DOMAIN>
```

Make sure to replace `<KLOVITCLIENT_DOMAIN>` with your domain name. If you have done this correctly you should see something similar to the following:
```
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/your.klovitclient.domain/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/your.klovitclient.domain/privkey.pem
   Your cert will expire on date. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```
If what you saw isn't similar to what you saw in your server, we recommend you ask for support on our [Discord Server](https://discord.gg/wwpRNvkMHA).

Next, if everything's going correctly, you need to go to the Nginx sites directory and create a configuration file:
```bash
cd /etc/nginx/sites-available
nano klovitclient.conf
```

Now paste the following into the file. Make sure to replace `<DOMAIN>` and `<PORT>` with your KlovitClient domain and the port KlovitClient is running on.
```conf
server {
  listen 80;
  server_name <DOMAIN>;
  return 301 https://$server_name$request_uri;
}
server {
  listen 443 ssl http2;

  server_name <DOMAIN>;
  ssl_certificate /etc/letsencrypt/live/<DOMAIN>/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/<DOMAIN>/privkey.pem;
  ssl_session_cache shared:SSL:10m;
  ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers  HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers on;

  location / {
    proxy_pass http://localhost:<PORT>/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
    proxy_buffering off;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
```
After we've setup the main config file, we'll need to symlink it to sites-enabled:
```bash
sudo ln -s /etc/nginx/sites-available/klovitclient.conf /etc/nginx/sites-enabled/klovitclient.conf
```

  Once you have edited, saved, and symlinked your configuration file, restart Nginx with `systemctl restart nginx` and restart KlovitClient. You should see it running on that domain with SSL!
  
## Starting KlovitClient

First we need to install pm2:
```
npm install pm2 -g
```
Now you need to go to the dashboard directory and use:
```
pm2 start index.js --name KlovitClient
```

Once you have started KlovitClient, head to the Dashbard URL and login!
