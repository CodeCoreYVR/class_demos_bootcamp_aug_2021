//to alter table see knex docs: https://knexjs.org/#Schema-table
exports.up = function(knex) {
  return knex.schema.table('posts', table => {
      //Alter the table 'posts';
      table.string('imageUrl'); //Adds column 'imageUrl' VARCHAR(255)
  })
};

exports.down = function(knex) {
  return knex.schema.table('posts', table => {
      table.dropColumn('imageUrl'); //DROP column 'imageUrl'
  })
};
