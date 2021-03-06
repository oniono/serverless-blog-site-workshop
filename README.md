# blog-site-workshop

## Setup

- Sign-up to [Thundra Console](https://console.thundra.io) and get your API key
- Set your API key to `thundraApiKey` property under `custom` section in `serverless.yml`
- Install Thundra Serverless framework async monitoring plugin by `npm install serverless-plugin-thundra-lambda-adapters-cw`
- Deploy serverless application stack by `sls deploy`
- Record created endpoints which are printed in the output of deploy:
```
...
Serverless: Stack update finished...
Service Information
service: blog-site
...
endpoints:
  POST - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/post
  POST - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/review/{blogPostId}
  POST - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/publish/{blogPostId}
  DELETE - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/{blogPostId}
  GET - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/{blogPostId}
  GET - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/search
...
```

Note that `<api-id>` part of the endpoints is unique to every one and created API.

## Endpoints

### Send blog post
This is the endpoint for sending blog post which is shown as 
`POST - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/post/{blogPostId}` 
in the deploy output as shown in the `Install` section above. 
- Its HTTP method type is `POST`.
- It gets blog post information in the request body in JSON format as shown below:
```json
{
    "title": "<title of the blog post>",
    "post": "<content of the blog post>",
    "username": "<username of the person who sends blog post or author in other words>",
    "phoneNumber": "<phone number to interact over SMS about blog post acceptance status>"
}
```
**Note:** `phoneNumber` is optional.

### Review blog post
This is the endpoint for reviewing blog post which is shown as 
`POST - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/review` 
in the deploy output as shown in the `Install` section above. 
- Its HTTP method type is `POST`.
- It gets blog post id to be reviewed as path parameter:
```
https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/review/1234-5678-90
```
- It gets reviewed blog post content in the request body in String format as shown below:
```
"<reviewed content of the blog post>"
```

### Publish blog post
This is the endpoint for publishing blog post which is shown as 
`POST - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/publish` 
in the deploy output as shown in the `Install` section above. 
- Its HTTP method type is `POST`.
- It gets blog post id to be published as path parameter:
```
https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/publish/1234-5678-90
```

### Search blog post
This is the endpoint for searching according to given criteria in the blog posts which is shown as  
`GET - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/search`
in the deploy output as shown in the `Install` section above. 
- Its HTTP method type is `GET`.
- It gets `username`, `keyword`, `start-time` and `end-time` query parameters as search criteria.
  * `username`: Name of the user who sent blog post
  * `keyword`: Keyword must be exist in the either blog post title or context
  * `start-time`: Time that blog post must be sent after
  * `end-time`: Time that blog post must be sent before
- Parameters are optional and at least one of them must be specified
- It gets query parameters shown below:
```
https://<api-id>.eu-west-2.amazonaws.com/dev/blog/search?username=<username>&keyword=<keyword>&start-timestamp=<startTimestamp>&end-timestamp=<endTimestamp>
```

### Get blog post
This is the endpoint for getting blog post by id which is shown as 
`GET - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/{blogPostId}`
in the deploy output as shown in the `Install` section above. 
- Its HTTP method type is `GET`.
- It gets blog post id to be retrieved as path parameter:
```
https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/1234-5678-90
```

### Delete blog post
This is the endpoint for deleting blog post by id which is shown as 
`DELETE - https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/{blogPostId}`
in the deploy output as shown in the `Install` section above. 
- Its HTTP method type is `DELETE`.
- It gets blog post id to be deleted as path parameter:
```
https://<api-id>.execute-api.eu-west-2.amazonaws.com/dev/blog/1234-5678-90
```

## Web Application

Blog site application is available at [blog-site-app.thundra.io](https://blog-site-app.thundra.io). 
You can set your base URL (`https://<api-id>.eu-west-2.amazonaws.com/dev/blog`) to be used/consumed by the frontend application.
