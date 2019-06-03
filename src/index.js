import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import gql from 'graphql-tag';

import theme from './theme';
import App from './pages/App';

const typeDefs = gql`
  extend type User {
    ethBalance: Number!
  }

  type MoreUser {
    users: [User]
    cursor: String
  }
`;

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/graphprotocol/uniswap',
  typeDefs,
  resolvers: {
    User: {
      ethBalance: () => Math.random() * 100, // In case we want some fictional values
    },
  },
});


const Root = () => (
  <ApolloProvider client={client}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <App />
      </StyledComponentsThemeProvider>
    </ThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);
