const { gql } = require("apollo-server-azure-functions");

const { helloWorld } = require("./helloWorld");

const typeDefs = gql`
  type Query {
    helloWorld: String
  }

  type Greeting {
    response: String
  }

  type Mutation {
    greeter(name: String!): Greeting
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => helloWorld()
  },
  Mutation: {
    greeter: (_, { name }, context) => {
      return {
        response: `Hey there ${name}!`
      };
    }
  }
};

module.exports = { typeDefs, resolvers };
