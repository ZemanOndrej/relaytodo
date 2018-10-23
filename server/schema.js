type Todo{
  id: ID!
  text: String!
  isDone: Boolean!
  authorId: ID!
}

type Author{
  id: ID!
  name: String!
  todos: [Todo!]
}

type Query{
  author(id: ID!): Author
  authors(): [Author]
}