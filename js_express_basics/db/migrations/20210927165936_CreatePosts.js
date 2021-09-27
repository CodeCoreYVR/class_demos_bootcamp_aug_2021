
exports.up = function (knex) {
    return knex.schema.createTable("posts", table => {
        table.increments("id");
        table.string('title');// varchar 255
        table.text('content');// text
        table.integer("viewCount");
        table.string("tags");
        table.timestamp("createdAt").defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("posts");
};
