const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));


app.set('view engine', 'ejs');
// here we are telling express to render templates using ejs
app.set('views', 'views');
// let express know that should find the templates inside views folder

//#region 
// require('express') returns a function that returns an instance of an express app.
// The app variable referenced in index.js is an object with 
// methods to configure ur app:
// app.use(): to initialize middleware
// app.engine() to set the view engine of express
// app.listen() to start the express server

// app.get() to listen for the GET requests
// app.post() to listen for the POST requests
// app.put() to listen for the PUT requests
// app.patch() to listen for the PATCH requests
// app.delete() to listen for the DELETE requests

// app.method: method is just a generic variable for any of the HTTP request types
// supported by express, this includes app.get, app.post, so on.
// app.set() used to set application variables. Mainly used to configure application
// wide variables like the path to Views directory or path to static files.

//#endregion

app.get('/', (request, response) => {
    response.render('welcome', {
        title: 'Welcome To Meme Page',
        memes: [
            "https://www.probytes.net/wp-content/uploads/2018/01/2.jpg",
            "https://www.probytes.net/wp-content/uploads/2018/01/20.png",
            "https://www.probytes.net/wp-content/uploads/2018/01/r_389776_tqMPa-1.jpg",
        ]
    })
})

app.get('/hello_world', (request, response) => {
    // response.send('Hello World');
    response.render('hello_world');
})

app.get('/survey', (req, res) => {
    res.render('survey');
})

app.get('/thank_you', (req, res) => {
    console.log(req.query);
    res.render('thank_you', {
        name: req.query.fullName,
        message: req.query.message
    })
})

const PORT = 3000;
const DOMAIN = "localhost"; //127.0.0.1

app.listen(PORT, DOMAIN, () => {
    console.log(`Server listening on http://${DOMAIN}:${PORT}`);
})

// Create an npm porject
// npm init -y 
// Add git ignore
// https://www.toptal.com/developers/gitignore copy the content to .gitignore
// Install Nodemon
// npm i -D nodemon
// Create a main file
// touch index.js
// Install Express
// npm i express

// npm start (have to add "start" script in package.json)

// Use middleware
// const logger = require('morgan');
// app.use(logger('dev'));

// Rendering HTML with templating language
// npm i ejs
// app.set('view engine', 'ejs');
// app.set('views', 'views');
