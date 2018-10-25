type Todo{
  id: ID!
  text: String!
  isDone: Boolean!
  author: Author!
}

type Author{
  id: ID!
  name: String!
  todos: [Todo!]
}

type Query{
  author(id: ID!): Author
  todo(id: ID!): Todo
  authors: [Author!]
}