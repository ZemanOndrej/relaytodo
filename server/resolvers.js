const database = require('./database');
// author = ({ id }) => database.getAuthor(id);
// todo = ({ id }) => database.getAuthor(id);
// todos = (args, ...more) => {
//   console.log(args, more);
// }


const resolvers = {
  author: ({ id }, context, parent) => {
    return database.getAuthor(id);
  },
  todos: () => {
    console.log('====================================');
    console.log('shit');
    console.log('====================================');
    return { text: 'fsdfsd' }
  },
  // Query: {

  // },
  Author: {
    name: (root) => root.name,
    id: (root) => root.id
  },
  Todo: {
    name: (root) => root.name,
    id: (root) => root.id,
    text: (root) => root.text,

  }
}

module.exports = { ...resolvers }
