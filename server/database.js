const authors = [
  { id: '1', name: 'Ondrej' },
  { id: '2', name: 'Martin' },
]
const todos = [
  { id: '1', text: "learn graphql and stuff", isDone: false, authorId: '1' },
  { id: '2', text: 'get to kiwi', isDone: false, authorId: '1' },
  { id: '3', text: 'get to kiwi', isDone: false, authorId: '2' },
]

let getAuthor = id => authors.find(a => a.id === id);
let getAuthors = () => [...authors];
let getTodo = id => todos.find(t => t.id === id);
let getTodosForAuthor = authorId => todos.filter(t => t.authorId === authorId)

let getAuthorForTodo = id => {
  const authorId = todos.find(t => t.id).authorId;
  return authors.find(a => authorId === a);
}

module.exports = {
  getAuthor, getAuthors, getTodo, getTodosForAuthor, getAuthorForTodo
}