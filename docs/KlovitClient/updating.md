---
sidebar_position: 6
---
<head>
  <title>KlovitClient | Updating</title>
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
# Updating 

From older KlovitClient release to a newer KlovitClient release:
#### SQLite database
1. Store certain things such as your api keys, etc in a somewhere
2. Download `database-name`.sqlite from databases folder
3. Delete all files off the server (or delete and remake the folder if done in ssh)
4. Upload the latest KlovitClient release and unzip it
5. Upload `database-name`.sqlite to databases folder and reconfigure config.yml
#### MySQL database
1. Store certain things such as your api keys, etc in a somewhere
2. Delete all files off the server (or delete and remake the folder if done in ssh)
4. Upload the latest KlovitClient release and unzip it
3. Reconfigure config.yml