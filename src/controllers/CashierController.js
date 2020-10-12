const db = require('../database/connection');

class CashierController {
  async index(request, response) {
    const transactions = await db('transactions').join('categories', 'transactions.categories_id', '=', 'categories.id').select('transactions.*','categories.*')

    const serializedTransactions = transactions.map((item) => {
      return {
        id: item.id,
        date: item.date,
        type: item.type,
        value: item.value,
        description: item.description,
        category: {
          id: item.categories_id,
          name: item.name
        }
      }
    });

    const {income, outcome} = transactions.reduce((accumulator, transaction) => {
      switch (transaction.type) {
        case 'income':
          accumulator.income += parseFloat(transaction.value);
          break;
        case 'outcome':
          accumulator.outcome += parseFloat(transaction.value);
          break;
        default:
          break;
      }

      return accumulator;
    }, {
      income: 0,
      outcome: 0,
      total_balance: 0,
    });

     const total_balance = income - outcome;

    return response.json({ transactions: serializedTransactions, income, outcome, total_balance });
  }
};

module.exports = new CashierController;
