---
sidebar_position: 2
---
<head>
  <title>KlovitClient | Installation</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="The Next-Gen Developers" />
  <meta name="keywords" content="KlovitClient, Klovit," />
  <meta name="author" content="Klovit" />
  <meta name="copyright" content="Klovit" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Klovit" />
  <meta property="og:description" content="The Next-Gen Developers." />
  <meta property="og:image" content="https://zexade.com/KlovitClient%20Logo.png" />
  <meta name="twitter:card" content="https://zexade.com/KlovitClient%20Logo.png" />
  <meta name="twitter:title" content="Klovit" />
  <meta name="twitter:description" content="The Next-Gen Developers." />
  <meta name="twitter:image" content="https://zexade.com/KlovitClient%20Logo.png" />
  <meta name="twitter:image:src" content="https://zexade.com/KlovitClient%20Logo.png" />
</head>
# Installation

:::warning READ BEFORE PROCEEDING!
You're supposed to have at least basic Linux knowledge, and you're also supposed to understand what commands you're running.
:::

## Supported Operating Systems
|    Name     |   Versions    |
|-------------|---------------|
|   [Ubuntu](#ubuntu-and-debian)    |    >=22.04    |
|   [Debian](#ubuntu-and-debian)    |    >=10       |
|   [Windows](#windows)   |    >=10       |

Suggested VPS hosting: [Klovit.com](https://portal.klovit.com)


Before you begin installation, make sure you have NodeJS v16 or above, git CLI, and Node Package Manager (NPM) v8.x or above installed.

## Ubuntu and Debian
Firstly, make sure that you have all the prerequisites above installed (if you do you can skip this part).

```bash
sudo apt update && sudo apt upgrade

# installing git CLI
sudo apt install git

# installing NPM
sudo apt install npm

# installing NodeJS
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -
sudo apt install nodejs
```

You can check the versions with the following commands:
```bash
git --version
npm -v
node -v
```

Now to install KlovitClient, its dependencies:
```bash
git clone https://github.com/Klovit/KlovitClient.git
cd KlovitClient && npm install
```

After installing KlovitClient, edit the settings.json for your dashboard using our configuration guide.
```bash
nano settings.json
```

## Windows
First, make sure you have all the prerequisites listed at the top of the page (if you do you can skip this part).

- Git CLI: https://git-scm.com/download/win
- NPM and NodeJS: https://nodejs.org/en/

You can check the versions with the following commands:
```bat
git --version
npm -v
node -v
```

Now to install KlovitClient & its dependencies:
```bash
git clone https://github.com/Klovit/KlovitClient.git
cd KlovitClient && npm install
```

After installing KlovitClient, edit the settings.json for your dashboard using our configuration guide.
```bat
start settings.json
```
