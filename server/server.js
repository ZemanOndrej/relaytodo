const express = require('express');
const { graphql, buildSchema } = require('graphql')
const fs = require('fs')
const app = express();
const PORT = 4000;

const schema = buildSchema(fs.readFileSync('./schema.js').toString());
const resolvers = require('./resolvers');

console.log(resolvers);


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  rootValue: resolvers,
  
}));

app.listen(PORT);
console.log(`server is listening at ${PORT} port`);
