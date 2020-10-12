const knex = require('knex');

const connection = knex({
  client: 'pg',
  connection: {
    database: 'vcaixa_db',
    user: 'postgres',
    password: 'docker',
  },
});

module.exports = connection;
