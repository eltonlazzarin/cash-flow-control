exports.up = function (knex) {
  return knex.schema.createTable('categories', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();

    table.string('transactions_id').references('id').inTable('categories');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('categories');
};
