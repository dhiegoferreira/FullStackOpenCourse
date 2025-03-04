# Debbuging

In this module we learned remove data hardcode for backend to a no relational database like MongoDB. For this, we first need create a cluster on mongoDB, get the credentials and the URL connection. After this, create an enviornment variable with these values including the connection port.

Then, we need to test as following:

- node mongo.js yourpassword param1 param2 to create data and send directly for mongoDB cluster
- run the backend and validate all endpoints of the service.


https://fullstackopen.com/en/part3/saving_data_to_mongo_db#debugging-node-applications


```bash
node --inpect index.js
```


> Command-line database


```bash
node mongo.js yourpassword param1 param2 param...
```



> Error Handling

The order of middleware loading
The execution order of middleware is the same as the order that they are loaded into Express with the app.use function. For this reason, it is important to be careful when defining middleware.

The correct order is the following:

app.use(express.static('dist'))
app.use(express.json())
app.use(requestLogger)

app.post('/api/notes', (request, response) => {
  const body = request.body
  // ...
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  // ...
}

// handler of requests with result to errors
app.use(errorHandler)copy
The json-parser middleware should be among the very first middleware loaded into Express. If the order was the following:

app.use(requestLogger) // request.body is undefined!

app.post('/api/notes', (request, response) => {
  // request.body is undefined!
  const body = request.body
  // ...
})

app.use(express.json())copy
Then the JSON data sent with the HTTP requests would not be available for the logger middleware or the POST route handler, since the request.body would be undefined at that point.

It's also important that the middleware for handling unsupported routes is next to the last middleware that is loaded into Express, just before the error handler.

For example, the following loading order would cause an issue:

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

app.get('/api/notes', (request, response) => {
  // ...
})copy
Now the handling of unknown endpoints is ordered before the HTTP request handler. Since the unknown endpoint handler responds to all requests with 404 unknown endpoint, no routes or middleware will be called after the response has been sent by unknown endpoint middleware. The only exception to this is the error handler which needs to come at the very end, after the unknown endpoints handler.


- I will have my browser developer console open all the time
- I will use the network tab of the browser dev tools to ensure that frontend and backend are communicating as I expect
- I will constantly keep an eye on the state of the server to make sure that the data sent there by the frontend is saved there as I expect
- I will keep an eye on the database: does the backend save data there in the right format
- I progress with small steps
- I will write lots of console.log statements to make sure I understand how the code behaves and to help pinpoint problems
- if my code does not work, I will not write more code. Instead, I start deleting the code until it works or just return to a state when everything was still working