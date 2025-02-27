- When we run the backend part 2 notes 3001/notes and frontend localhost:5173 and when frontend tries to get data from 3001 we get the CORS error.

![alt text](/part3/resources/CORS.png)


localhost/:1 Access to XMLHttpRequest at 'http://localhost:3001/api/notes/' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.


Same origin policy and CORS

The issue lies with a thing called same origin policy. A URL's origin is defined by the combination of protocol (AKA scheme), hostname, and port.

```
http://example.com:80/index.html
  
protocol: http
host: example.com
port: 80
```

When you visit a website (e.g. http://example.com), the browser issues a request to the server on which the website (example.com) is hosted. The response sent by the server is an HTML file that may contain one or more references to external assets/resources hosted either on the same server that example.com is hosted on or a different website. When the browser sees reference(s) to a URL in the source HTML, it issues a request. If the request is issued using the URL that the source HTML was fetched from, then the browser processes the response without any issues. However, if the resource is fetched using a URL that doesn't share the same origin(scheme, host, port) as the source HTML, the browser will have to check the Access-Control-Allow-origin response header. If it contains * on the URL of the source HTML, the browser will process the response, otherwise the browser will refuse to process it and throws an error.



Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy.



![alt text](/part3/resources/SetupApp.png)



> Frontend Production build

When the application is deployed, we must create a production build or a version of the application that is optimized for production.

Since we are using vite:

```bash
npm run build

```

Will generate a Minified version of our application's javaScript.

Serving static files from the backend
One option for deploying the frontend is to copy the production build (the dist directory) to the root of the backend repository and configure the backend to show the frontend's main page (the file dist/index.html) as its main page.

We begin by copying the production build of the frontend to the root of the backend. With a Mac or Linux computer, the copying can be done from the frontend directory with the command

- To make Express show static content, the page index.html and the JavaScript, etc., it fetches, we need a built-in middleware from Express called static.

add this to index.js for your backend

```bash
app.use(express.static('dist'))
```

