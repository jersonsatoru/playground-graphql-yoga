const { GraphQLServer } = require('graphql-yoga');
const { resolve } = require('path');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');

mongoose.connect('mongodb://localhost:27017/graphqlnode', {
  useNewUrlParser: true,
});

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema.graphql'),
  resolvers,
});

server.start();
