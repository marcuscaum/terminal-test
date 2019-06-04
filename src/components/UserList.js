/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { Waypoint } from 'react-waypoint';
import UsersListItem from './UserListItem';


const UsersList = ({ users, onLoadMore }) => (
  <>
    {
      users.map(user => (
        <UsersListItem
          key={user.id}
          user={user}
        />
      ))
    }
    <Waypoint onEnter={onLoadMore} />
  </>
);

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

export default UsersList;
