> PART 3

- [ ] Node.js and Express
- [ ] Deploying app to internet
- [ ] Saving data to MongoDB
- [ ] Validation and ESLint



> a Node.js and Express

Use express to make http requests

```
 npm install express
```

```
const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})
```
you can check package.json in the "dependencies" object need to show "express" : "^4.xx.x" 

- Nodemon


We can use this tool to hotreload the server when some changes are done.

nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will atomatically restart your code application.


```
npm install --save-dev nodemon
```


- What is Express? 

functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the app,lication's request-response cycle. The next middleware function is commonly denote by a variable names next.

Middleware functions can perform the following tasks 

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cyclle.
- Call the next middleware functions in the stack.

An Express application can use the following types of middleware:

Application-level middleware
Router-level middleware
Error-handling middleware
Built-in middleware
Third-party middleware


Middleware is a function that receives three parameters.

```
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
```


see more: https://expressjs.com/en/guide/using-middleware.html

