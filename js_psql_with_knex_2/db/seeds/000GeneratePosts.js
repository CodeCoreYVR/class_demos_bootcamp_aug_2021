const faker = require('faker'); //npm i -D faker
// To generate this file we used following commnad (to generate seed file)
// knex seed:make 000GeneratePosts
//seed files run in alphabetical order, so if you want certain files
//to run first, add numbers in front of the file name like 000

//Seeds don't make changes to the db
//It fills our db with mock data for testing purposes
//This will only be available to our local development db

// to run seed we use following command:
// knex seed:run
exports.seed = function(knex) {
  // Deletes ALL existing entries - delete all the previous records first to start a clean slate
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      const posts=Array.from({length: 1000}).map( //map returns a new array
        () => {
          return{
            //we don't need to id because we have an auto incremented id
            title: faker.company.catchPhrase(),
            content: faker.lorem.paragraph(),
            imageUrl: faker.image.imageUrl(),
            createdAt: faker.date.past()
          }
        }
      )
      return knex('posts').insert(posts)
    });
};

//to run this seed file and insert the records in the database,
//we do: knex seed:run
