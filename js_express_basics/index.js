//-------------------Require the express library---------------------->
const express = require('express');
const app = express();

//-------------------STATIC ASSETS--------------------->
const path = require('path')
const methodOverride = require('method-override');
//Use 'path.join' to combine string arguments into a path
//path.join('/','users','bob'); -> '/users/bob'

//The below line connects our public directory to express so that it can
//serve the browser those images, css files, browser-side JS, sounds, etc
//We need to set up a public directory for these files to reside in
//__dirname is a global variable available to us through node that has the value of the path to your root directory
//__dirname represents http://localhost:3000/ in our case
app.use(express.static(path.join(__dirname, 'public'))) //http://localhost:3000/public

//-------------------------------COOKIES------------------------------------->
//To be able to use data from a POST HTTP request, like filling out a form and submitting
//Add a body parser. We don't need to install the module body parser anymore
//because express has a new method called urlencoded that we'll us einstead
//to parse in x-www-urlencoded format
//This middleware will decode (parse out) the data that was submitted from the form
//using the "POST" HTTP Verb

//When "extended" option is "true", it will allow the data to take the form of an array or object
//without it, you will only get a string back
//urlencoded puts all the info on req.body
app.use(express.urlencoded({ extended: true }))
//it will modify the request object given routes by adding a property to it named body
//So request.body will be an object containing the data from our form

//-------------------Cookie Parser--------------------->
//install: npm i --save cookie-parser
//require cookieParser
const cookieParser = require('cookie-parser')

app.use(cookieParser()); //will parse cookies and put them on request.cookies available as express properties (see express docs)
//you can still require cookies without cookieParser, but in the backend it's hard for us to read
//every time we make request to the browser, in the header somewhere there's a cookie header that holds all the info for that cookie
//Cookie parser reads the headers for us and it will parse ou the cookie
//it will read it in whatever format it is, and it will turn it into a nice usable JS object for us

//-------------------------Custom Middleware-------------------------------->
//Remember, order matters! So make sure this is under the urlencoded and cookie-parser
//because it will depend on it to work properly


app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        // it changes the request to that method name
        // then this request can reach the correct route
        return method;
    }
}))

app.use((req, res, next) => {
    const middleWareUsername = req.cookies.username

    //properties set on res.locals become accessible in any views
    //almost like a global variable
    res.locals.username = "";
    if (middleWareUsername) {
        res.locals.username = middleWareUsername;
        console.log(`Signed in as ${username}`)
    }
    next();
    //next() is an optional function available to middleware
    //what it does is tell express that it's done with 
    //this particular middleware 
    //Without it, this middleware will just be in limbo
    //Installed middleware often have next alreay working in the background
    //But custom middleware needs to include next();
})

//-------------------Logging Middleware-------------------------------->
//install morgan in our npm project: npm i morgan
//Now require it:
const logger = require('morgan');
//initialize middleware:
app.use(logger('dev'));

//Set view engine to be able to create ejs templates---------------------->
//First npm i ejs to add ejs as a dependency of your project
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
// CRUD
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

//-----------------------------HTTP VERBS---------------------------------->
//GET -> to retreive info from our server (generalization)
//POST -> req to either add or change to our server's data
//PATCH -> Update data
//DELETE -> Remove data

//--------------------------ROUTERS------------------------------------------------>

//-----------Welcome Page------------------------------------------->
app.get('/', (request, response) => {
    //add a cookie to our home page
    //convention is to expirre a cookie at max age
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24; //a day in milliseconds
    response.cookie('hello', 'world', { maxAge: COOKIE_MAX_AGE })
    //key="hello",value="world"
    //once this cookie is set in the home page, it
    //will now be available on all the other pages/paths inside the domain
    response.render('welcome', {
        title: 'Welcome To Meme Page',
        memes: [
            "https://www.probytes.net/wp-content/uploads/2018/01/2.jpg",
            "https://www.probytes.net/wp-content/uploads/2018/01/20.png",
            "https://www.probytes.net/wp-content/uploads/2018/01/r_389776_tqMPa-1.jpg",
            "https://www.loginradius.com/blog/async/static/ce430bf1882a235044353d4b4d098275/e85cb/12.png",
            "https://res.cloudinary.com/practicaldev/image/fetch/s--MOKp0Jew--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.probytes.net/wp-content/uploads/2018/01/4-1.png"
        ]
    })
})

//-----------DEMO hello_world path---------------------------------->
//first arg: path
//second arg: request handler
app.get('/hello_world', (request, response) => {
    // response.send('Hello World');
    response.render('hello_world');
})

//----------Survey page------------------------>
app.get('/survey', (req, res) => {
    console.log('Cookies:', req.cookies) //this will show what my cookie is
    res.render('survey');
})

//--------------------------Sign In POST request------------------------------>
app.post('/sign_in', (req, res) => {
    // res.send(req.body)
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24; //a day in milliseconds
    const username = req.body.username;
    res.cookie('username', username, { magAge: COOKIE_MAX_AGE })
    res.redirect('/')
})

//---------------------------Sign Out POST request------------------------------>
app.post('/sign_out', (req, res) => {
    res.clearCookie('username')
    res.redirect('/')
})

//---------Create submit for form/ thank you route---------------->
app.get('/thank_you', (req, res) => {
    console.log(req.query);
    res.render('thank_you', {
        name: req.query.fullName,
        message: req.query.message,
        colour: req.query.favouriteColour,
        day: req.query.favouriteDay
    })
})
// import the routes from post.js
const postRouter = require('./routes/posts');

// use those routes by app.use function
// if you put '/posts' for the first argument,
// then in the posts.js file, all the routes there, you don't need to add /posts
// app.use(postRouter);
app.use('/posts', postRouter);
//---------------------------SERVER----------------------------------------------->
//--------------Start listening on our server------------------------------------->
const PORT = 3000;
const DOMAIN = "localhost"; //127.0.0.1

app.listen(PORT, DOMAIN, () => {
    console.log(`Server listening on http://${DOMAIN}:${PORT}`);
})

// Create an npm project
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
