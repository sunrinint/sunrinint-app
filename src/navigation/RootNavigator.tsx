import * as React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import BottomNavigation from './BottomNavigation';
import LoginScreen from '@screens/LoginScreen';
import SettingScreen from '@screens/SettingScreen';
import ClassScreen from '@screens/ClassScreen';
import MealScreen from '@/screens/MealScreen';
import TimeTableScreen from '@/screens/TimeTableScreen';
import NoticeScreen from '@/screens/NoticeScreen';
import { Platform, StatusBar } from 'react-native';
import useAppTheme from '@/hooks/useAppTheme';
import { useTheme } from 'styled-components/native';

export type RootStackParamList = {
  Login: undefined;
  Tab: undefined;
  Setting: undefined;
  Class: undefined;
  Meal: undefined;
  TimeTable: undefined;
  Notice: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { theme } = useAppTheme();
  const { colors } = useTheme();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={colors.gray20}
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: { duration: 300 },
            },
            close: {
              animation: 'timing',
              config: { duration: 300 },
            },
          },
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
    </>
  );
};

export default RootNavigator;
