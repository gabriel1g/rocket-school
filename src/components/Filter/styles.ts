import styled, { css } from 'styled-components/native';

type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled.TouchableOpacity<FilterStyleProps>`
  height: 36px;
  width: 64px;
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `}
  text-transform: uppercase;
`;
