const createError = require('http-errors'); 
const express = require('express'); //*
const path = require('path'); //*
const cookieParser = require('cookie-parser'); //*
const logger = require('morgan'); //*

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express(); //*

// view engine setup
app.set('views', path.join(__dirname, 'views')); //*
app.set('view engine', 'ejs'); //* but installed ejs and uninstalled jade

app.use(logger('dev')); //*
app.use(express.json());

//urlencoded decodes POST requests coming from HTML forms
//This middleware comes with express and you call it on express
//You can pass in an object with options
//When "extended" is set to "true", it allows forms to POST data
//as arrays and objects. If set to false, it will only accept strings
app.use(express.urlencoded({ extended: true })); //*
app.use(cookieParser()); //* 
//above adds a property called 'cookies' to the req object
app.use(express.static(path.join(__dirname, 'public'))); //*

//Custom middleware to create and store todo cookies:
app.use((req,res, next) => {
  const todos = req.cookies.todos || [];
  res.locals.todos = todos;
  next();
})

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/newTodo', (req, res) => {
  res.render('newTodo')
})

app.post('/todos', (req, res) => {
  const todo = req.body
  //const title = req.body.title;
  //const content = req.body.content;
  // const todo = {
  //   title: title,
  //   conent: conent
  // }

  const todos = req.cookies.todos || [];
  res.cookie('todos', [todo].concat(todos));
  res.redirect('todos');
})

app.get('/todos', (req,res) => {
  res.render('todos');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//Add server Domain and Host:
const PORT = 4545;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
  console.log(`The server is listening at ${HOST}:${PORT}`)
})

module.exports = app;
