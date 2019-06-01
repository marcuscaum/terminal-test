import React from 'react';
import Typography from '@material-ui/core/Typography';
import UsersList from '../components/UsersList';

import { Content, Container } from './App.styled';

const App = () => (
  <>
    <Content>
      <Container maxWidth="md">
        <Typography variant="subtitle1" paragraph>
          Users List
        </Typography>
        <UsersList />
      </Container>
    </Content>
  </>
);

export default App;
