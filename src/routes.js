const express = require('express');

const TransactionController = require('./controllers/TransactionController');
const CategoryController = require('./controllers/CategoryController');
const CashierController = require('./controllers/CashierController');

const routes = express.Router();

routes.get('/cashiers', CashierController.index);

routes.post('/transactions', TransactionController.create);
routes.get('/transactions', TransactionController.index);
routes.get('/transactions/:id', TransactionController.show);
routes.delete('/transactions/:id', TransactionController.delete);

routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', CategoryController.update);
routes.get('/categories/:id', CategoryController.show);
routes.delete('/categories/:id', CategoryController.delete);

module.exports = routes;
