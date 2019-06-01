import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UserTransactionsList from './UserTransactionsList';
import ExpansionPanelDetails from './styles/UserListItem.styled';


const UsersListItem = ({ id }) => {
  const [expandedPanel, setExpandedPanel] = useState(false);

  return (
    <ExpansionPanel
      TransitionProps={{ unmountOnExit: true }}
      onChange={(event, expanded) => setExpandedPanel(expanded)}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Grid container justify="space-between">
          <Grid item>
            <Typography>{id}</Typography>
          </Grid>
          <Grid item>
            <Typography>ETH BALANCE</Typography>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="overline">List of transactions</Typography>
        {expandedPanel
          && <UserTransactionsList user={id} />
        }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

UsersListItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UsersListItem;
