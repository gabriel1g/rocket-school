import { MaterialIcons } from '@expo/vector-icons';

import styled from 'styled-components/native';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';
type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled.TouchableOpacity<Props>`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : type === 'SECONDARY' && theme.COLORS.RED,
  size: 24,
}))``;
