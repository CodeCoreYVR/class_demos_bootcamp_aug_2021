const knex = require("./client");

// console.log(knex.insert({
//     title: "Top 10 Bugs", //inserting an object with key:value pairs
//     content: "Spider, ants, moth, etc."
// }).into("posts").toString())

//the above alone does not insert anything into the db yet
//Knex will take the code above and turn it into an sql query
//In order to see this happen, we can append a .toString()
//to it and run it to see the sql query

//the knex queries return a promise that needs to be handled
//whatever knex provides will always be promises 
//with .then
//any queries you make to the db is inherently async
knex
.insert([
    {title: 'Top 5 Schools', content:'Hogwarts, cordcore, etc'},
    {title: 'Top 3 rocks', content:'Diamond, ruby, amethyst'},
    {title: 'Top 3 Programming Languaged', content:'JS, ruby, PHP'},
])
.into('posts')
.then((n) => { //n represents the number of records inserted
    console.log('inserted into posts:', n);
    knex.destroy(); // tells knex to disconnect from the db
  }).catch((err) => { //handle error in case of reject
    console.log(err);
})

//Right now with no constraints, if you keep running same insert.js
//command, the same record will be added to the db as duplicate
//NOTE: This is not a migration, so we can't rollback

//Another way to write an insert like the original example at the top
//without using the "into" method:

// knex('posts').insert({
//     title: "Top 10 Bugs",
//     content: "Spider, ant, moth, etc."
// })
// .then((n) => { //n represents the number of records inserted
// console.log('inserted into posts:', n);
// knex.destroy(); // tells knex to disconnect from the db
// }).catch((err) => { //handle error in case of reject
// console.log(err);
// })

