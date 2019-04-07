import React from 'react';
import { render } from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// import components
import App from './app';

// const of container HTML
const app =  document.getElementById('app');

// apollo-client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

const AppAll = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

render(<AppAll />, app );