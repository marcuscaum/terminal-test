import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Typography,
  Grid,
  Divider,
  Snackbar,
} from '@material-ui/core';

import SwapHoriz from '@material-ui/icons/SwapHoriz';

import { Mutation } from 'react-apollo';
import Drawer from './styles/TransferEth.styled';
import { TRANSFER_ETH_BALANCE } from '../graphql/mutations';

export const TRANSFER_ETH_PROPTYPES = {
  onTransferEth: PropTypes.bool.isRequired,
  setToId: PropTypes.func.isRequired,
  setFromId: PropTypes.func.isRequired,
  fromId: PropTypes.string.isRequired,
  toId: PropTypes.string.isRequired,
};

const TransferEth = ({
  fromId, toId, setOnTransferEth, onTransferEth,
}) => {
  const [successTransfer, setSuccessTransfer] = useState(false);

  if (!onTransferEth) {
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOnTransferEth(!onTransferEth)}
        >
          Transfer eth
          <SwapHoriz />
        </Button>
        {successTransfer && (
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={successTransfer}
            onClose={() => setSuccessTransfer(false)}
            message="The transfer was a success!"
            autoHideDuration={4000}
          />
        )}
      </>
    );
  }

  return (
    <Drawer anchor="bottom" variant="permanent" open={onTransferEth}>
      <Typography variant="h6" paragraph>
        Select the items to Transfer the ETH balance
      </Typography>
      <Divider />
      <Typography variant="caption" paragraph>
        Transfer ETHs from: <strong>{fromId}</strong>
      </Typography>
      <Typography variant="caption" paragraph>
        To: <strong>{toId}</strong>
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Mutation mutation={TRANSFER_ETH_BALANCE}>
            {transferEthBalance => (
              <Button
                variant="contained"
                color="primary"
                disabled={!fromId || !toId}
                onClick={async () => {
                  await transferEthBalance({
                    variables: {
                      toId,
                      fromId,
                    },
                  });
                  setOnTransferEth(false);
                  setSuccessTransfer(true);
                }}
              >
                  Transfer
                <SwapHoriz />
              </Button>
            )}
          </Mutation>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOnTransferEth(false)}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

const { setFromId, setToId, ...props } = TRANSFER_ETH_PROPTYPES;

TransferEth.propTypes = {
  ...props,
};

export default React.memo(TransferEth);
