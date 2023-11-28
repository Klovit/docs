---
sidebar_position: 5
---
<head>
  <title>KlovitClient | Common Errors</title>
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
# Common Errors

This is a list of common errors you might come across when using KlovitClient.

## Invalid oauth2 redirect_uri

The reason you are getting `invalid oauth2 redirect_uri` is because you haven't set the `application_url` key in the settings collection in the database, or it is not set correctly. It MUST be set like the following below. __Make sure there is not a trailing `/` at the end!__

