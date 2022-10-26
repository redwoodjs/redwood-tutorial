export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    user: User!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }
`
