import styled from 'styled-components';
import MaterialListItemText from '@material-ui/core/ListItemText';

const ListItemText = styled(MaterialListItemText)`
  ${({ right }) => right && 'text-align: right'};
`;

export default ListItemText;
