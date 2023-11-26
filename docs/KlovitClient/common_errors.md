---
sidebar_position: 5
---

# Common Errors

This is a list of common errors you might come across when using KlovitClient.

## Invalid oauth2 redirect_uri

The reason you are getting `invalid oauth2 redirect_uri` is because you haven't set the `application_url` key in the settings collection in the database, or it is not set correctly. It MUST be set like the following below. __Make sure there is not a trailing `/` at the end!__

