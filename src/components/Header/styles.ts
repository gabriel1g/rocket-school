import { Feather } from '@expo/vector-icons';

import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 55px;
  width: 46px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const ChevronLeftIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'chevron-left',
  color: theme.COLORS.WHITE,
  size: 32,
}))``;
