const { v4: uuid } = require('uuid');
const db = require('../database/connection');

class TransactionController {
  async create(request, response) {
    const { transaction } = request.body;

    const id = uuid();
    const trx = await db.transaction();

    try {
      const currentDay = new Date().toLocaleDateString('pt-BR');

      const transactionInsert = transaction.map((transactionsItem) => {
        if (!['income', 'outcome'].includes(transactionsItem.type)) {
          return response.status(400).json({ error: 'Transaction type is not valid.' });
        }

        return {
          id,
          date: currentDay,
          type: transactionsItem.type,
          value: parseFloat(transactionsItem.value),
          description: transactionsItem.description,
          categories_id: id,
        };
      });

      await trx('transactions').insert(transactionInsert);

      const transactionCategory = transaction.map((item) => {
        const { name } = item.category;

        return {
          id,
          name,
          transactions_id: id,
        };
      });

      await trx('categories').insert(transactionCategory);

      await trx.commit();

      return response.status(201).json({ message: 'Transaction successfully completed!' });
    } catch (err) {
      console.log(err);

      await trx.rollback();

      return response.status(400).json({ error: 'Unexpected error while creating new transaction.' });
    }
  }

  async index(request, response) {
    const items = await db('transactions').join('categories', 'transactions.categories_id', '=', 'categories.id').select('transactions.*', 'categories.*');

    const serializedTransactions = items.map((item) => ({
      id: item.id,
      date: item.date,
      type: item.type,
      value: parseFloat(item.value),
      description: item.description,
      category: {
        id: item.categories_id,
        name: item.name,
      },
    }));

    return response.json(serializedTransactions);
  }

  async show(request, response) {
    const { id } = request.params;

    const transaction = await db('transactions').join('categories', 'transactions.categories_id', '=', 'categories.id').where('transactions.id', id).select('transactions.*', 'categories.*');

    const serializedTransactions = transaction.map((item) => ({
      id: item.id,
      date: item.date,
      type: item.type,
      value: parseFloat(item.value),
      description: item.description,
      category: {
        id: item.categories_id,
        name: item.name,
      },
    }));

    const transactionId = transaction.find((item) => item.id === id);

    if (!transactionId) {
      return response.status(400).json({ message: 'Transaction not found.' });
    }

    return response.status(200).json(serializedTransactions);
  }

  async delete(request, response) {
    const { id } = request.params;

    const transaction = await db('transactions').where('transactions.id', id).select('*');

    const transactionId = transaction.find((item) => item.id);

    if (!transactionId) {
      return response.status(400).json({ message: 'transaction not found.' });
    }

    await db('transactions')
      .where('id', id)
      .delete();

    return response.status(204).send();
  }
}

module.exports = new TransactionController();
