import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';

import UsersList from '../components/UserList';
import { GET_USERS, GET_USERS_AFTER } from '../graphql/queries';

import { Content, Container } from './styles/App.styled';


const App = () => (
  <>
    <Content>
      <Container maxWidth="md">
        <Typography variant="overline" paragraph>
            User List
        </Typography>
        <Query query={GET_USERS}>
          {({
            data: { users }, loading, error, fetchMore,
          }) => {
            if (loading) return <CircularProgress />;
            if (error) return `Error! ${error.message}`;

            return (
              <UsersList
                users={users}
                onLoadMore={() => fetchMore({
                  query: GET_USERS_AFTER,
                  variables: { skip: users.length },
                  updateQuery: (previousResult, { fetchMoreResult }) => {
                    const previousUsers = previousResult.users;
                    const newUsers = fetchMoreResult.users;

                    return {
                      users: [...previousUsers, ...newUsers],
                    };
                  },
                })
                }
              />
            );
          }}
        </Query>
      </Container>
    </Content>
  </>
);

export default App;
