/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const GET_USERS = gql`
  {
    users {
      id,
    }
  }
`;
