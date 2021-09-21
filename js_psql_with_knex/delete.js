const knex = require('./client');

knex('posts')
    .where('id', 4)
    .del()
    .then(n => {
        console.log('deleted n posts', n);
        knex.destroy();
    })
    .catch((err) => {
        console.log(err);
    })