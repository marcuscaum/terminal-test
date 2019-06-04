import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Divider } from '@material-ui/core';

import ListItemText from './styles/UserTransactionsListItem.styled';


const UserTransactionsListItem = ({ transaction }) => (
  <>
    <ListItem>
      <ListItemText
        primary={(
          <>
            <strong>{transaction.tokenSymbol}: </strong>
            {transaction.tokenAmount}
          </>
        )}
        secondary={`TX: ${transaction.tx}`}
      />
      <ListItemText
        right="true"
        primary={(
          <>
            {transaction.ethAmount}
            <strong> ETH</strong>
          </>
        )}
      />
    </ListItem>
    <Divider component="li" />
  </>
);

UserTransactionsListItem.propTypes = {
  transaction: PropTypes.shape({
    ethAmount: PropTypes.string,
    tx: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default UserTransactionsListItem;
