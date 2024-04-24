---
sidebar_position: 3
---
<head>
  <title>KlovitClient | Configuration</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="The Next-Gen Developers" />
  <meta name="keywords" content="KlovitClient, Klovit," />
  <meta name="author" content="Klovit" />
  <meta name="copyright" content="Klovit" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Klovit" />
  <meta property="og:description" content="The Next-Gen Developers." />
  <meta property="og:image" content="https://docs.klovit.tech/img/Klovit%20Logo.png" />
  <meta name="twitter:card" content="https://docs.klovit.tech/img/Klovit%20Logo.png" />
  <meta name="twitter:title" content="Klovit" />
  <meta name="twitter:description" content="The Next-Gen Developers." />
  <meta name="twitter:image" content="https://docs.klovit.tech/img/Klovit%20Logo.png" />
  <meta name="twitter:image:src" content="https://docs.klovit.tech/img/Klovit%20Logo.png" />
</head>
# Configuration
This page goes over the `config.yml` configuration and setting up the Nginx webserver for KlovitClient.

## Configuring your Settings
Because the `config.yml` file is so large, this page will break down and explain each individual section.

```yml
---
version: '0.5.2' # Version of the KlovitClient instance
name: KlovitClient # Your Host's name
resource_type: 'GB' # This can be either GB or MB, NOTE:- If you have chosen GB then 100% cpu will be 1 thread, if you have chosen MB then 1 thread will be 100% cpu
website: 
  secret: "Website secret" # Randomize this as this will be the secret of the website for the session and middleware cookie
  url:  'https://localhost' # URL of the dashboard
  port: '8081' # The port on which this KlovitClient instance will run
  description: The most reliable hosting # The description for your Hosting
  icon: https://docs.klovit.tech/img/Klovit%20Logo.png # Logo of your hosting
```

The start of the settings file; The `name` is the name of the Organisation/Host running KlovitClient. `resource_type` is the unit of resource you want to use, valid options are - GB / MB. The `secret` is a randomly genererated password that you must keep secret as it it is what the dashboards sessions are encrypted with. The `url` is the URL of the dashboard, this is important for the authentication to work. The `port` is the port on which you want the KlovitCLient instance to be running on. The `description` is the Description of your dashboard. The `icon` is the logo of the Organisation/Host.
```yml
pterodactyl:
  url: 'http://localhost' # Your Pterodactyl Panel URL with "http://" or "https://"
  api: 'ptla_Hr0TVGzDe3PIgHL11uKtrQtbqflQSW9Cjw3RzaDAK2p' # Your Pterodactyl Panel Admin API Key
packages:
  default: default
  list:
    default:
      ram: 100 # Formatted according to "resource_type"
      disk: 200
      cpu: 200 # NOTE - If you have selected GB as resource_type, then 100% cpu is 1. If you have selected MB as resource_type then 100% cpu is 100
      servers: 100
auth:
  supabase: # REQUIRED
    supabase_url: '' # URL of your SupaBase Project
    supabase_anon_key: '' # Anon/API Key of your SupaBase Project
    oauth2:
      google:
        enabled: false
      github:
        enabled: false
      discord:
        enabled: false
```

The start of second part, `url` is the URL of the Pterodactyl Instance. The `api` is the Admin API Key of your Pterodactyl Instance. In the packages section, the `list` is the list of the packages. The `default` is the default package for every end-user.
In the packages list you use the format given for the default packageor else you might run into errors. Here is a conversion of resources, `1` GB is `1024` MB and `1` Thread is `100`% CPU. The unit will be based on the value of the `resource_type` option.
In the auth section, you have to enter the URL of your Supabase project in the `supabase_url` field. You have to enter the anon key of your SupaBase project in the `supabase_anon_key` field. In the next part, you decide which OAuth provider you want to enable. After enabling a OAuth provider, you have to configure it in SupaBase Project's settings
```yml
database:
  type: 'sqlite' # Available types are 'sqlite' and 'mysql'
  sqlite: # ONLY CONFIGURE IS YOU HAVE DATABASE TYPE AS 'sqlite'
    sqlite_db_name: 'database.sqlite' # The database will be stored in './database/' directory
  mysql: # ONLY CONFIGURE IS YOU HAVE DATABASE TYPE AS 'mysql'
    mysql_db_name: 'klovitclient' # Your MYSQL DB name
    mysql_db_host: 'localhost' # Your MYSQL DB HOST
    mysql_db_port: '3306' # Your MYSQL DB PORT
    mysql_db_username: 'klovitclient' # Your MYSQL Username
    mysql_db_password:  'password@123' # You MYSQL password
locations:
  "1": # ID of the location on the pterodactyl panel
    name: Default Location 1 # Display name for the location
```

The start of third part, the `database` is the configuration settings of the database which will be used to store dashboard side's information, **NOTE - User credentials and other authentication info will be stored on SupaBase's end.** First of all, you'll have to decide the type of the database in the `type` field, whether you want to use `mysql` or `sqlite`. If you have chosen SQLite as the type then, you have to set the name of the database in the `sqlite_db_name` section. The rest of the fields are for MySQL database configuration and the fields have comments on what to fill in there.
```yml
eggs:
  klovitegg: # KlovitClient's identifier of the egg
    display: MultiEgg | KlovitEgg # Display name of the egg
    limits: # formatted according to "resource_type"
      minimum: # The minimum resources a user can use while deploying a server
        ram: 1 
        disk: 1
        cpu: 1
      maximum: # The maximum resources a user can use while deploying a server
        ram: null
        disk: null
        cpu: null
      feature: # The limits on the following features
        databases: 1
        backups: 1
        allocations: 1
    info: # All this information can be found on the Egg's information page.
      egg: 16 # ID of the egg
      docker_image: ghcr.io/beastgamer81/klovitegg:latest # Docker image of the egg
      startup: ./install.sh" # Startup command of the egg 
      environment: # Environment variables of the egg
        NODE_VERSION: latest
        PMMP_VERSION: PM5
        NODE_MAIN_FILE: index.js
```

The start of fourth part, the egg configuration. You should use KlovitEgg or fill in the fields according to your chosen egg, the environment field is for variables.
```yml
coins: # Coins, the virtual currency of the host.
  enabled: true # Must enable coins if you need the following things - Store, Link shorteners.
  earn: # Earning of coins via various methods
    enabled: true # Whether enable earning of coins or not. Coins must be enabled aswell or else the API Endpoints will throw errors
    links: # Earning of coins via link shorteners
      atglinks: # Earning of coins via ATGLinks
        api: '785159b542f060cb98b55b27a09b2034df506bff' # Your ATGLinks API Key
        amount: '5' # Amount of coins per link
        dailylimit: null # Daily limit for users
        minimumTime: '100' # Minimum time a user has to spend completing the link. (in seconds)
  store: # The cost and per is not intended to used with 0. This is not intended to sell resources for coins. Make sure coins are enabled too, or else there can be errors.
    enabled: false
    ram:
      cost: 1000 # Cost of the resource in coins
      per: 1 # Will be in the format according to "resource_type"
    disk:
      cost: 1000
      per: 1
    cpu:
      cost: 1000
      per: 1
    servers:
      cost: 100
      per: 1
```

The start of fifth part, the `coins` field decides whether the virtual currency is enabled or not. In the earn part, you can decide whether you want the users to earn coins by completing links, etc. You must configure the API key and the remmaining values.
In the store section, the `enabled` field decides whether store is enabled or not, **NOTE:- COINS MUST BE ENABLED FOR STORE TO WORK.** Now, we'll do the cost and quantity configuration. Again the cost is in coins and the quantity is decided as per the value of `resource_type`.



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
  listen [::]:80;
  server_name <DOMAIN>;
  return 301 https://$server_name$request_uri;
}
server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;

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

First we need to install pm2 and Astro:
```
npm install astro -g
npm install pm2 -g
```
Now you need to go to the dashboard directory and use:
```
astro build
pm2 start ./dist/server/entry.mjs --name KlovitClient
```

Once you have started KlovitClient, head to the Dashbard URL and login!
