import gql from 'graphql-tag';

export const GET_USERS = gql`
  {
    users(last: 30) {
      id
      exchangeBalances {
        ethDeposited
        ethWithdrawn
      }
    }
  }
`;

export const GET_USER_TRANSACTIONS = gql`
  query Transactions($user: String!) {
    transactions(where: { user: $user }) {
      id
      tx
      ethAmount
      tokenAmount
      tokenSymbol
    }
  }
`;
