import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigation from './BottomNavigation';
import LoginScreen from '@screens/LoginScreen';
import SettingScreen from '@screens/SettingScreen';
import ClassScreen from '@screens/ClassScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Tab"
        component={BottomNavigation}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={'Login'}
        component={LoginScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name={'Setting'} component={SettingScreen} />
      <Stack.Screen name={'Class'} component={ClassScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
