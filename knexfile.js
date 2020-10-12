const path = require('path');

module.exports = {
  test: {
    client: 'pg',
    connection: {
      database: 'vcaixa_db_tests',
      user: 'postgres',
      password: 'docker',
    },
  },
  development: {
    client: 'pg',
    connection: {
      database: 'vcaixa_db',
      user: 'postgres',
      password: 'docker',
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },
};
