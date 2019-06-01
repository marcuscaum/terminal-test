import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import useStyles from './styles';
import theme from './theme';
import App from './pages/App';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/graphprotocol/uniswap',
});

const Root = () => {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App classes={classes} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);
