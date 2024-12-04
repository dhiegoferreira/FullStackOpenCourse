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