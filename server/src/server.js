const express = require('express');
const { makeExecutableSchema } = require('graphql-tools');
const fs = require('fs');
const graphqlHTTP = require('express-graphql');
const resolvers = require('./resolvers');

const app = express();
const PORT = process.env.PORT || 4000;

const schema = makeExecutableSchema({
  typeDefs: fs.readFileSync('./src/schema.sdl').toString(),
  resolvers,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT} port`); // eslint-disable-line no-console
});
