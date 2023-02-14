import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

const NativeStack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NativeStack.Navigator
      initialRouteName="groups"
      screenOptions={{ headerShown: false }}
    >
      <NativeStack.Screen
        name="groups"
        component={Groups}
      />
      <NativeStack.Screen
        name="newGroup"
        component={NewGroup}
      />
      <NativeStack.Screen
        name="players"
        component={Players}
      />
    </NativeStack.Navigator>
  );
}
