const request = require("supertest");
const app = require("../app");
//const connection = require("../database/connection");

//beforeEach(async () => {
  //await connection.migrate.rollback();
  //await connection.migrate.latest();
//});

//afterAll(async () => {
  //await connection.destroy();
//});

describe("Create transaction", () => {
  it('Should be able to create a transactions', async () => {
    const response = await request(app).post('/transactions').send({
      transaction: [
        {
          type: "income",
          value: 2230.83,
          description: "SCustomer payment",
          category: {
            name: "Sales"
          }
        }
      ]
    });

    expect(response.body).toMatchObject({ message: 'Transaction successfully completed!' });
 });
});

describe("List transactions", () => {
  it('Should be able to list transactions', async () => {
    const response = await request(app).get('/transactions');

    expect(response.body).toHaveLength(1);
 });
});

describe("List balance values", () => {
  it('Should be able to show total balance', async () => {
    const response = await request(app).get('/cashiers');

    expect(response.body.transactions).toHaveLength(1);
    expect(response.body).toMatchObject({
      income: 2230.83,
      outcome: 0,
      total_balance: 2230.83,
   });
 });
});






