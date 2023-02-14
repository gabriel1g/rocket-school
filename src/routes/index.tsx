import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import { useTheme } from 'styled-components/native';

import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <View style={{ backgroundColor: useTheme().COLORS.GRAY_700, flex: 1 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
