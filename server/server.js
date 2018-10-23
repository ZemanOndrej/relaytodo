const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql, buildSchema } = require('graphql')
const fs = require('fs')
const app = express();
const PORT = 4000;

const database = require('./database');
const schema = buildSchema(fs.readFileSync('./schema.js').toString());

console.log(database);


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  // rootValue: database
}));

app.listen(PORT);
console.log(`server is listening at ${PORT} port`);
