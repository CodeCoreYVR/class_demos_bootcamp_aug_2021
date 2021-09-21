
exports.up = function(knex) {
  return knex.schema.table('posts', table => {
      table.string('imageUrl');
  })
};

exports.down = function(knex) {
    return knex.schema.table('posts', table => {
        table.dropColumn('imageUrl');
    })  
};
