//The knex module itself is a function that takes in a 
//configuration object and returns a fully configured 
//database client. 

//require knex module
const knex = require('knex');
//takes configuration object from the knexfile
//in this case the development config object
const developmentConfig=require('../knexfile').development;
//which returns the database client
const client=knex(developmentConfig);

//now we can import this file using require anywhere in our
//project to begin querying the database with our knex client
module.exports=client;
