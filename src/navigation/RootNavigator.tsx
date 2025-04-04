import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View } from 'react-native';

import BottomNavigation from './BottomNavigation';
import LoginScreen from '@screens/LoginScreen';
import ClassScreen from '@screens/ClassScreen';
import MealScreen from '@/screens/MealScreen';
import TimetableScreen from '@screens/TimetableScreen';
import NoticeScreen from '@/screens/NoticeScreen';
import MadebyScreen from '@screens/MadebyScreen';
import OpenSourceLicenseScreen from '@/screens/OpenSourceLicenseScreen';
import OpenSourceLicenseDetailScreen from '@/screens/OpenSourceLicenseDetail';
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
  Madeby: undefined;
  OpenSourceLicense: undefined;
  OpenSourceLicenseDetail: { id: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = ({ login }: { login: boolean | null }) => {
  const { theme } = useAppTheme();
  const { colors } = useTheme();

  // 아직 로그인 체크 중이면 아무것도 렌더링하지 않음 (Splash 그대로 유지)
  if (login === null) {
    return <View style={{ flex: 1, backgroundColor: colors.gray20 }} />;
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={colors.gray20}
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <Stack.Navigator
        initialRouteName={login ? 'Tab' : 'Login'}
        screenOptions={{
          headerShown: false,
          presentation: 'card',
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="Tab" component={BottomNavigation} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Class" component={ClassScreen} />
        <Stack.Screen name="Meal" component={MealScreen} />
        <Stack.Screen name="TimeTable" component={TimetableScreen} />
        <Stack.Screen name="Notice" component={NoticeScreen} />
        <Stack.Screen name="Madeby" component={MadebyScreen} />
        <Stack.Screen name="OpenSourceLicense" component={OpenSourceLicenseScreen} />
        <Stack.Screen name="OpenSourceLicenseDetail" component={OpenSourceLicenseDetailScreen} />
      </Stack.Navigator>
    </>
  );
};

export default RootNavigator;
