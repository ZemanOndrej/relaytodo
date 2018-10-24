const authors = [
  { id: '1', name: 'Ondrej' },
  { id: '2', name: 'Martin' },
]
const todos = [
  { id: '1', text: "learn graphql and stuff", isDone: false, authorId: 1 },
  { id: '2', text: 'get to kiwi', isDone: false, authorId: 1 },
]

let getAuthor = id => authors.find(a => a.id === id);
let getAuthors = () => [...authors];
let getTodo = id => todos.filter(t => t.id === id);
let getTodoForAuthor = authorId => todos.filter(t => t.authorId === authorId);

module.exports = {
  getAuthor, getAuthors, getTodo, getTodoForAuthor
}