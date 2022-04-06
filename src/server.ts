const config = require('./config/config');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const testSchema = require('./schema/test-schema');
const fakeData = require('./db/db-queries');

// сам graphql api, реализующий разные резолверы, описанные в type query
// чтобы обрабатывать запросы, нужно описать type query в схеме
const root = {
  getCountries: () => {
    return fakeData;
  }
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: testSchema,
  rootValue: root,
  graphiql: true
}));

app.listen(config.port);
console.log('Running a GraphQL API server at http://localhost:' + config.port + '/graphql');
