const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "vCaixa API",
        description: "vCaixa API is a product that was created in order to help in the cash management of a store, where it is possible to create cash movements, with transactions of accounts payable and receivable. At the end of the day, the store cashier will know the total money received and the amount that came out of the cashier to maintain the life of a store."
    },
    host: "localhost:3333",
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['.//src/routes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
