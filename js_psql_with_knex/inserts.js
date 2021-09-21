const knex = require('./client');

// Using Knex query builder https://knexjs.org/#Builder
knex('posts').insert({
    title: 'our first post',
    content: 'inserting records using Knexjs',
    imageUrl: 'http://google.ca'
}).then((n) => {
    console.log('inserted into posts:', n);
    knex.destroy();
}).catch((err) => {
    console.log(err);
})


// Another way to write the same thing
knex.insert({
    title: 'our first post',
    content: 'inserting records using knexjs',
    imageUrl: 'http://google.ca'
}).then((n) => {
    console.log('inserted into posts:', n);
    knex.destroy(); // tells knex to disconnect from the db
}).catch((err) => {
    console.log(err);
})

// call .toString() on any Knex query to see the SQL code
// console.log(knex('posts').insert({
//     title: 'our first post',
//     content: 'inserting records using Knexjs',
//     imageUrl: 'http://google.ca'
// }).toString());