- Simple Web Server and Express

There is a built-in http web server in Node.js that we can use like that:

```Node

const http = require('http')

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

```


But remeber that it is cumbersome, specially once the application grows in size.



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




- Use morgan to logging your http requests

https://github.com/expressjs/morgan


JSON.stringify() - to convert js value to json string 

```
console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}'

```