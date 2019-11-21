"use strict";

const { ApolloServer } = require("apollo-server-azure-functions");
const { typeDefs, resolvers } = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

module.exports.graphqlHandler = server.createHandler();
