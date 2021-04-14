const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

server
  .listen({ port: 3000 })
  .then(({ url }) => console.log(`Server is running on ${url}`));
