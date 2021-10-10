
const {gql} = require ("apollo-server-express")
const typeDefs = gql`
  type Car {
    _id: ID
    make: String
    model: String
    year: String
  }
type Auth {
  token:ID!
  me:User
}
  type Query {
    cars: [Car]
    car(make: String!): Car

  }
  
  type Mutation {
    login (email:String!, password: String!): Auth
    addUser (username:String!, email: String!, password: String!): Auth
  }

  type User {
    _id:ID!
    username: String!
    email: String!
  }
`;

module.exports = typeDefs;

