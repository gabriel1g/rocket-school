import { Entypo } from '@expo/vector-icons';

import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 80px;
  width: 100%;
  padding: 24px;
  border-radius: 6px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `}
`;

export const UsersIcon = styled(Entypo).attrs(({ theme }) => ({
  name: 'users',
  color: theme.COLORS.GREEN_700,
  size: 32,
}))`
  flex: 0.2;
`;
