import gql from 'graphql-tag';

export const GET_USERS = gql`
  query getUsers {
    users(first: 15) @connection(key: "users") {
      id
      ethBalance @client
      txs  {
        ethAmount
        user
      } 
    }
  }
`;

export const GET_USERS_AFTER = gql`
  query getUsersAfter($skip: Int!) {
    users(first: 5, skip: $skip) @connection(key: "users") {
      id
      ethBalance @client
      txs {
        ethAmount
        user
      }
    }
  }
`;
