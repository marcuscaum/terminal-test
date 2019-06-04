import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Checkbox,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  Grid,
} from '@material-ui/core';
import UserTransactionsList from './UserTransactionsList';
import ExpansionPanelDetails from './styles/UserListItem.styled';
import { TRANSFER_ETH_PROPTYPES } from './TransferEth';

const UsersListItem = ({
  user: { id, ethBalance },
  onTransferEth,
  setToId,
  setFromId,
  fromId,
  toId,
}) => {
  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleTransfer = (userId, checked) => {
    if (!checked) {
      if (fromId === userId) {
        return setFromId('');
      }
      return setToId('');
    }

    return (fromId ? setToId(userId) : setFromId(userId));
  };

  return (
    <ExpansionPanel
      TransitionProps={{ unmountOnExit: true }}
      onChange={(event, expanded) => setExpandedPanel(expanded)}
      expanded={expandedPanel && !onTransferEth}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Grid container justify="space-between">
          <Grid item>
            {onTransferEth && <Checkbox checked={fromId === id || toId === id} color="primary" onChange={(e, checked) => handleTransfer(id, checked)} />}
            <Typography variant="caption">{id}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              <svg width="20px" height="10px" viewBox="0 0 256 417" preserveAspectRatio="xMidYMid" className="sc-csuQGl coVCDK"><g><polygon fill="#343434" points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32" /><polygon fill="#8C8C8C" points="127.962 0 0 212.32 127.962 287.959 127.962 154.158" /><polygon fill="#3C3C3B" points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866" /><polygon fill="#8C8C8C" points="127.962 416.9052 127.962 312.1852 0 236.5852" /><polygon fill="#141414" points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587" /><polygon fill="#393939" points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588" /></g></svg>
              {ethBalance}
            </Typography>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="overline">List of transactions</Typography>
        {expandedPanel && !onTransferEth
          && <UserTransactionsList user={id} />
        }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

UsersListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    ethBalance: PropTypes.number.isRequired,
  }).isRequired,
  ...TRANSFER_ETH_PROPTYPES,
};

export default UsersListItem;
