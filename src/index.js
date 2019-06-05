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
import { GET_USERS } from './graphql/queries';

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
      transferEthBalance: (_, { fromId, toId }, { cache }) => {
        const fromUser = cache.data.get(`User:${fromId}`);
        const toUser = cache.data.get(`User:${toId}`);
        const data = client.readQuery({
          query: GET_USERS,
        });
        const fromDataUser = data.users.find(user => user.id === fromId);
        const toDataUser = data.users.find(user => user.id === toId);

        toDataUser.ethBalance = fromDataUser.ethBalance + toDataUser.ethBalance;

        fromDataUser.txs.push({
          ethAmount: fromDataUser.ethBalance,
          user: toId,
          __typename: 'Transaction',
        });

        toDataUser.txs.push({
          ethAmount: 0,
          user: fromId,
          __typename: 'Transaction',
        });

        fromDataUser.ethBalance = 0;

        cache.data.set(`User:${toId}`, {
          ...toUser,
          ethBalance: toUser.ethBalance + fromUser.ethBalance,
        });

        cache.data.set(`User:${fromId}`, {
          ...fromUser,
          ethBalance: 0,
        });

        client.writeQuery({
          query: GET_USERS,
          data,
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
