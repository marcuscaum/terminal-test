import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

const App = ({ classes }) => (
  <>
    <main className={classes.content}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="subtitle1" className={classes.title} paragraph>
          Users List
        </Typography>
      </Container>
    </main>
  </>
);

App.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
