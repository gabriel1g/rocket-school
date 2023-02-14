import { SafeAreaView } from 'react-native-safe-area-context';

import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  padding: 30px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
`;

export const Form = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
`;

export const HeaderList = styled.View`
  margin: 32px 0 12px;
  flex-direction: row;
  align-items: center;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD};
  `}
`;
