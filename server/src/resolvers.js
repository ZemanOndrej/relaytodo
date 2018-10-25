const ramda = require('ramda');
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
  },
  Mutation: {
    addAuthor: (_, { name }) => database.addAuthor({ name }),
    addTodo: (_, { authorId, text }) => database.addTodo({ authorId, text }),
    updateTodo: (_, args) => database.updateTodo(ramda.pick(['id', 'text', 'isDone'], args)),
  },
};

module.exports = resolvers;
