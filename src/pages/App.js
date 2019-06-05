import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { CircularProgress, Typography, Grid } from '@material-ui/core';

import UsersList from '../components/UserList';
import { GET_USERS, GET_USERS_AFTER } from '../graphql/queries';
import { Content, Container } from './styles/App.styled';
import TransferEth from '../components/TransferEth';


const App = () => {
  const [onTransferEth, setOnTransferEth] = useState(false);
  const [fromId, setFromId] = useState('');
  const [toId, setToId] = useState('');

  return (
    <Content>
      <Container maxWidth="md">
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="overline" paragraph>
                User List
            </Typography>
          </Grid>
          <Grid item>
            <TransferEth
              onTransferEth={onTransferEth}
              setOnTransferEth={setOnTransferEth}
              fromId={fromId}
              toId={toId}
            />
          </Grid>
        </Grid>
        <Query query={GET_USERS} fetchPolicy="cache-first">
          {({
            data: { users }, loading, error, fetchMore,
          }) => {
            if (loading) return <CircularProgress />;
            if (error) return `Error! ${error.message}`;

            return (
              <UsersList
                users={users}
                onTransferEth={onTransferEth}
                setToId={setToId}
                setFromId={setFromId}
                fromId={fromId}
                toId={toId}
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
                })}
              />
            );
          }}
        </Query>
      </Container>
    </Content>
  );
};

export default App;
