import React from 'react';

import UsersListItem from './UserListItem';
import { handleEthBalance } from '../utils';


const UsersList = ({ users }) => users.map((user) => {
  const ethBalance = handleEthBalance(user.exchangeBalances);
  return (
    <>
      <UsersListItem
        key={user.id}
        id={user.id}
        ethBalance={ethBalance}
      />
    </>
  );
});

export default UsersList;
