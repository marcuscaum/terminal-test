import React from 'react';
import Typography from '@material-ui/core/Typography';
import UsersList from '../components/UserList';

import { Content, Container } from './App.styled';

const App = () => (
  <>
    <Content>
      <Container maxWidth="md">
        <Typography variant="subtitle1" paragraph>
          User List
        </Typography>
        <UsersList />
      </Container>
    </Content>
  </>
);

export default App;
