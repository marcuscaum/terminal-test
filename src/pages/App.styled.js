import styled from 'styled-components';
import MaterialContainer from '@material-ui/core/Container';

export const Content = styled.main`
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
`;

export const Container = styled(MaterialContainer)`
  padding-top: ${({ theme }) => `${theme.spacing(4)}px`};
  padding-bottom: ${({ theme }) => `${theme.spacing(4)}px`};
`;
