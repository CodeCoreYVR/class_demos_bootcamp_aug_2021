
exports.up = function (knex) {
    return knex.schema.table("posts", table => {
        table.text("imageUrl");
    })
};

exports.down = function (knex) {
    return knex.schema.table("posts", table => {
        table.dropColumn("imageUrl");
    })
};
