import { SafeAreaView } from 'react-native-safe-area-context';

import { Entypo } from '@expo/vector-icons';

import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  padding: 30px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Entypo).attrs(({ theme }) => ({
  name: 'users',
  color: theme.COLORS.GREEN_700,
  size: 50,
}))``;
