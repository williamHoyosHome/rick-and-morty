import React from 'react';
import { render } from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

// component
import Home from './app';

// container
const home =  document.getElementById('app');

// apollo client
const client = new ApolloClient({
	clientState:{
		cache
	},
	uri: "http://localhost:4000"
})

// apollo provider
const App = () => (
	<ApolloProvider client={client}>
		<Home />
	</ApolloProvider>
)

render(<App />, home);
