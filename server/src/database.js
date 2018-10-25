const authors = [{ id: '1', name: 'Ondrej' }, { id: '2', name: 'Martin' }];
const todos = [
  {
    id: '1',
    text: 'learn graphql and stuff',
    isDone: false,
    authorId: '1',
  },
  {
    id: '2',
    text: 'get to kiwi',
    isDone: false,
    authorId: '1',
  },
  {
    id: '3',
    text: 'get to kiwi',
    isDone: false,
    authorId: '2',
  },
];

function makeNewId(arr) {
  const newId = arr.reduce(
    (biggestId, { id }) => (biggestId > parseInt(id, 10) ? biggestId : id),
    0,
  );
  return (parseInt(newId, 10) + 1).toString();
}

function getAuthor(id) {
  return authors.find(a => a.id === id);
}

function getAuthors() {
  return authors;
}

function getTodo(id) {
  return todos.find(t => t.id === id);
}

function getTodosForAuthor(authorId) {
  return todos.filter(t => t.authorId === authorId);
}

function addTodo(todo) {
  const newTodo = { ...todo, id: makeNewId(todos), isDone: false };
  todos.push(newTodo);
  return newTodo;
}

function addAuthor(author) {
  const newAuthor = { ...author, id: makeNewId(authors) };
  authors.push(newAuthor);
  return newAuthor;
}

function updateTodo(todo) {
  const index = todos.findIndex(t => t.id === todo.id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...todo };
    return todos[index];
  }
  return null;
}

module.exports = {
  getAuthor,
  getAuthors,
  getTodo,
  getTodosForAuthor,
  addAuthor,
  updateTodo,
  addTodo,
};
