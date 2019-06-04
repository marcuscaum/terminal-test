/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const TRANSFER_ETH_BALANCE = gql`
  mutation TransferEthBalance($fromId: String!, $toId: String!) {
    transferEthBalance(fromId: $fromId, toId: $toId) @client
  }
`;
