import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  padding: 50px 24px 30px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
`;
