import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { CircularProgress, Typography, List } from '@material-ui/core';

import UserTransactionsListItem from './UserTransactionsListItem';
import { GET_USER_TRANSACTIONS } from '../graphql/queries';


const UserTransactionsList = ({ user }) => (
  <Query
    query={GET_USER_TRANSACTIONS}
    variables={{ user }}
  >
    {({ loading, error, data }) => {
      if (loading) return <CircularProgress />;
      if (error) return `Error! ${error.message}`;
      if (!data.transactions.length) {
        return (
          <Typography variant="caption" paragraph>
           This user has no transactions :(
          </Typography>
        );
      }
      return (
        <List>
          {
            data.transactions.map(transaction => (
              <UserTransactionsListItem key={transaction.id} transaction={transaction} />
            ))
          }
        </List>
      );
    }}
  </Query>
);

UserTransactionsList.propTypes = {
  user: PropTypes.string.isRequired,
};

export default React.memo(UserTransactionsList);
