const { ApolloServer, gql } = require('apollo-server');

const schema = require('./schema');

const server = new ApolloServer({ 
	schema 
});

const PORT = process.env.PORT || 4000;

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});