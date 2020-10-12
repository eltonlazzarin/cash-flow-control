<h3 align="center">
  Cash Flow Control backend built with Node.js
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/eltonlazzarin/cash-flow-control">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/eltonlazzarin/cash-flow-control">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/eltonlazzarin/cash-flow-control">

  <img alt="GitHub issues" src="https://img.shields.io/github/issues/eltonlazzarin/cash-flow-control">

  <img alt="GitHub" src="https://img.shields.io/github/license/eltonlazzarin/cash-flow-control">
</p>

<p align="center">
  <a href="#-about-the-project">About The Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-backend-technologies">Backend Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-backend-getting-started">Backend Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute-backend">How To Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-backend-license">Backend License</a>
</p>

## 👨🏻‍💻 About the project

<p>
This API is a product that was created in order to help in the cash management of a store, where it is possible to create cash movements, with transactions of accounts payable and receivable. At the end of the day, the store cashier will know the total money received and the amount that came out of the cashier to maintain the life of a store.</p>

## 🚀 Backend Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en)
- [Cors](https://github.com/expressjs/cors)
- [Express](https://github.com/expressjs/express)
- [Swagger-Autogen](https://www.npmjs.com/package/swagger-autogen)
- [Swagger-UI-Express](https://www.npmjs.com/package/swagger-ui-express)
- [Knex](https://github.com/knex/knex)
- [UUID](https://github.com/uuidjs/uuid)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [Supertest](https://www.npmjs.com/package/supertest)
- [pg](https://node-postgres.com)
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [VS Code](https://code.visualstudio.com) with [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) and [Prettier RC](https://github.com/prettier/prettier)

## 💻 Backend getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli)
- [Docker-Compose CLI](https://docs.docker.com/compose/reference/overview)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/eltonlazzarin/cash-flow-control.git

$ cd cash-flow-control
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn
```

**Creating Docker environment with postgres DB**

```bash
$ docker-compose up
```

**Run Knex Migrates**

```bash
$ yarn knex:migrate
```

**Run the API**

```bash
$ yarn dev
```

**To access the API**
Go to your browser and acess http://localhost:3333/cashiers

**To view the API documentation**
Go to your browser and access http://localhost:3000/doc

**To run tests**

Before do that, please delete all rows of categories and transactions tables.

```bash
# Run the API
$ yarn test
```

## 🤔 How to contribute backend

**Follow the steps below**

```bash
# Clone your fork
$ git clone https://github.com/eltonlazzarin/cash-flow-control.git

$ cd cash-flow-control

# Create a branch with your feature
$ git checkout -b your-feature

# Make the commit with your changes
$ git commit -m 'feat: Your new feature'

# Send the code to your remote branch
$ git push origin your-feature
```

After your pull request is merged, you can delete your branch

## 📝 Backend License

This project is under the MIT license. See the [LICENSE](https://github.com/eltonlazzarin/cash-flow-control/blob/master/LICENSE) for more information.

---

Made with ♥ by Elton Lazzarin :wave: [Get in touch!](https://www.linkedin.com/in/eltonlazzarin/)
