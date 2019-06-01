import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const UsersListItem = () => (
  <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1c-content"
      id="panel1c-header"
    >
      <Grid container justify="space-between">
        <Grid item>
          <Typography>USER ID</Typography>
        </Grid>
        <Grid item>
          <Typography>ETH BALANCE</Typography>
        </Grid>
      </Grid>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      List of eth transactions
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default UsersListItem;
