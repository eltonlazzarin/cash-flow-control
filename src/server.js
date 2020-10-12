const app1 = require('express')();
const http = require('http');
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');
const app = require('./app');

require('../endpoints');

app1.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile));

http.createServer(app1).listen(3000);
console.log('API Documentation 👉', 'Server is up at http://localhost:3000/doc');

app.listen(3333, () => {
  console.log('API 👉', 'Server is up at http://localhost:3333/cashier');
});
