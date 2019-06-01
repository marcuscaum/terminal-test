import React from 'react';
import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';

import UsersListItem from './UserListItem';
import { GET_USERS } from '../graphql/queries';


const UsersList = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return <CircularProgress />;
      if (error) return `Error! ${error.message}`;

      return data.users.map(user => (
        <UsersListItem key={user.id} id={user.id} />
      ));
    }}
  </Query>
);


export default UsersList;
