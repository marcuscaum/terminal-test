/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { Waypoint } from 'react-waypoint';
import UsersListItem from './UserListItem';
import { TRANSFER_ETH_PROPTYPES } from './TransferEth';

const UsersList = ({
  users,
  onLoadMore,
  onTransferEth,
  setToId,
  setFromId,
  fromId,
  toId,
}) => (
  <>
    {
        users.map(user => (
          <UsersListItem
            key={user.id}
            user={user}
            onTransferEth={onTransferEth}
            setToId={setToId}
            setFromId={setFromId}
            fromId={fromId}
            toId={toId}
          />
        ))
      }
    <Waypoint onEnter={onLoadMore} />
  </>
);

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  ...TRANSFER_ETH_PROPTYPES,
};

export default UsersList;
