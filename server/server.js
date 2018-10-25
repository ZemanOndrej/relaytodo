const express = require('express');
const { graphql, } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const fs = require('fs')
const graphqlHTTP = require('express-graphql')
const resolvers = require('./resolvers');
const app = express();
const PORT = 4000;

const schema = makeExecutableSchema({
  typeDefs: fs.readFileSync('./schema.js').toString(),
  resolvers
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(PORT);
console.log(`server is listening at ${PORT} port`);
