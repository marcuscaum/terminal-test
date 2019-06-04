import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { from } from 'apollo-boost';
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
`;

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/graphprotocol/uniswap',
  typeDefs,
  resolvers: {
    User: {
      ethBalance: () => Math.random() * 100,
    },
    Mutation: {
      transferEthBalance: async (_, { fromId, toId }, { cache }) => {
        const fromUser = cache.data.get(`User:${fromId}`);
        const toUser = cache.data.get(`User:${toId}`);

        await cache.data.set(`User:${toId}`, {
          ...toUser,
          ethBalance: toUser.ethBalance + fromUser.ethBalance,
        });

        await cache.data.set(`User:${fromId}`, {
          ...fromUser,
          ethBalance: 0,
        });

        client.cache.broadcastWatches();
      },
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
