import gql from 'graphql-tag';

export const GET_USERS = gql`
  {
    users {
      id,
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
