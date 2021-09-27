const faker = require("faker")
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      const posts = [];
      for (let i = 0; i < 100; i++) {
        posts.push(
          {
            title: faker.name.firstName(),
            content: faker.company.catchPhrase(),
            imageUrl: faker.image.imageUrl()
          }
        )
      }
      return knex('posts').insert(posts);
    });
};
