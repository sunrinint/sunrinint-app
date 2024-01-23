import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Tab"
        component={BottomNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
