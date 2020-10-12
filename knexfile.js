const path = require('path');

module.exports = {
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
    useNullAsDefault: true,
  },
};
