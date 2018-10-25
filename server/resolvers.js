const database = require('./database');
const resolvers = {
  Query: {
    author: (_, { id }) => database.getAuthor(id),
    todo: (_, { id }) => database.getTodo(id),
    authors: () => database.getAuthors(),
  },
  Author: {
    todos: args => database.getTodosForAuthor(args.id),
  },
  Todo: {
    author: args => database.getAuthor(args.authorId),
  }
}

module.exports = resolvers
