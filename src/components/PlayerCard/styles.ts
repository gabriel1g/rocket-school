import { MaterialIcons } from '@expo/vector-icons';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 56px;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `}
  flex: 1;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24,
}))`
  margin: 0 8px 0 16px;
`;
