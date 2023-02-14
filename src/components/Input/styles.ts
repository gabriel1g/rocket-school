import styled, { css } from 'styled-components/native';

export const Container = styled.TextInput`
  min-height: 56px;
  max-height: 56px;
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `}
  flex: 1;
`;
