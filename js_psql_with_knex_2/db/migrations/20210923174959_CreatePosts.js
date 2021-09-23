//To create this migration file, we:
//1) setup the migration object configurations in knexfile.js
//2) run: knex migrate:make NameOfMigration

//The up function is used when we 'migrate' a migration file
//It should contain the SQL query to make a change to the database
exports.up = function(knex) {
    //knex.schema is a getter function which contains all the methods 
    //used to create SQL code that changes a database structure
    //All the methods on knex.schema may vary so we'd need to use 
    //KnexJS documentation to figure out how to use every 
    //individual method
    //Most of them however, have some sort of a callback function 
    //with a table parameter. This table is an object with methods 
    //used to manipulate the columns within a table.
  return knex.schema.createTable('posts', table => {
      table.bigIncrements('id'); //creates a column called id which is a number that will auto increment
      table.string('title'); //creates a column called title with type of string
      table.text('content');//creates a columns called content with type of text
      table.timestamp('createdAt').defaultTo(knex.fn.now()) //this will create a column called createdAt with type of timestamp which also will default to whatever the current time is
  })
};

//The down function is used when we "rollback" a migration
//It should contain SQL to undo the "up" query
exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
