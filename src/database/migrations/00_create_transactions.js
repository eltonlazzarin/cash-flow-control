exports.up = function (knex) {
  return knex.schema.createTable('transactions', (table) => {
    table.string('id').primary();
    table.string('date').notNullable();
    table.string('type').notNullable();
    table.decimal('value').notNullable();
    table.string('description').notNullable();

    table.string('categories_id').references('id').inTable('transactions');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('transactions');
};
