import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';
type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  min-height: 64px;
  padding: 16px;
  border-radius: 6px;
  margin-top: 15px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'PRIMARY':
        return theme.COLORS.GREEN_700;
      case 'SECONDARY':
        return theme.COLORS.RED_DARK;
    }
  }};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD};
  `}
  text-align: center;
`;
