import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Divider } from '@material-ui/core';

import ListItemText from './styles/UserTransactionsListItem.styled';


const UserTransactionsListItem = ({ transaction }) => (
  <>
    <ListItem>
      <ListItemText
        primary={<strong>USER</strong>}
        secondary={transaction.user}
      />
      <ListItemText
        right="true"
        primary={<strong>ETH AMOUNT</strong>}
        secondary={transaction.ethAmount}
      />
    </ListItem>
    <Divider component="li" />
  </>
);

UserTransactionsListItem.propTypes = {
  transaction: PropTypes.shape({
    ethAmount: PropTypes.number,
    user: PropTypes.string,
  }).isRequired,
};

export default UserTransactionsListItem;
