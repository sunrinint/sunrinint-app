import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigation from './BottomNavigation';
import LoginScreen from '@screens/LoginScreen';
import SettingScreen from '@screens/SettingScreen';
import ClassScreen from '@screens/ClassScreen';
import MealScreen from '@/screens/MealScreen';
import TimeTableScreen from '@/screens/TimeTableScreen';
import NoticeScreen from '@/screens/NoticeScreen';

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
      <Stack.Screen name={'Meal'} component={MealScreen} />
      <Stack.Screen name={'TimeTable'} component={TimeTableScreen} />
      <Stack.Screen name={'Notice'} component={NoticeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
