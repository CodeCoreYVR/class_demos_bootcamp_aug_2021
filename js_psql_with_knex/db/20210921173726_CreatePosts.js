// Will generate SQL code that inserts a table
exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
        table.bigIncrements('id'); // creates a column called id with type of SERIAL
        table.string('title'); // creates a column called title with type of VARCHAR
        table.text('content'); // creates a column called content with type of TEXT
        table.timestamp('createdAt').defaultTo(knex.fn.now()); // creates a column called createdAt with type of timestamp which also defaults to the machine time (current time)
    }) 
};
// used to undo the changes made in the up function
exports.down = function(knex) {
    return knex.schema.dropTable('posts'); 
};
