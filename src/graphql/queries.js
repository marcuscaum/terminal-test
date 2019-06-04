import gql from 'graphql-tag';

export const GET_USERS = gql`
  {
    users(first: 15) @connection(key: "users") {
      id
      ethBalance @client
    }
  }
`;

export const GET_USERS_AFTER = gql`
  query GetUsersAfter($skip: Int!) {
    users(first: 5, skip: $skip) @connection(key: "users") {
      id
      ethBalance @client
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: String!) {
    users(where: { id: $id }) {
      id
      ethBalance
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
