import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

// defaults to /graphql as uri
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql'
  }),
});

import App from './components/App.jsx';
import './assets/styles/styles.css';

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
