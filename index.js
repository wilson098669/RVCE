/* This code snippet is setting up a basic server using Node.js with the Express framework. Here's a
breakdown of what it does: */
/* This part of the code snippet is importing the necessary modules for setting up a basic server using
Node.js with the Express framework. Here's a breakdown: */
const express=require('express'),
http=require('http')
const hostname='localhost'
const port=8080;
const app=express();

/* This part of the code snippet is defining the behavior of the server when a request is made. */
app.use((req, res)=>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Typr', 'text/html');
    res.end('<html><body><h1>This is a test server</h1></body></html>');
     });
    /* The code snippet `const sample_server = http.createServer(app); sample_server.listen(port,
    hostname, () => { console.log(`Server running at http://:/`); });` is creating
    a server instance using Node.js's `http` module and Express framework. */
    const sample_server=http.createServer(app);
    sample_server.listen(port, hostname,()=>{
        console.log(`Server running at http://${hostname}:${port}/`)});
