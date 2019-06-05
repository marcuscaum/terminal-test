/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { List, Typography } from '@material-ui/core';

import UserTransactionsListItem from './UserTransactionsListItem';


const UserTransactionsList = ({ transactions }) => {
  if (transactions.length) {
    return (
      <List>
        {transactions.map(transaction => (
          <UserTransactionsListItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </List>
    );
  }

  return (
    <Typography variant="caption" paragraph>
      This user has no transactions :(
    </Typography>
  );
};


UserTransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default React.memo(UserTransactionsList);
