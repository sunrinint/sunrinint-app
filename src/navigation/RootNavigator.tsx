import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigation from './BottomNavigation';
import LoginScreen from '@screens/LoginScreen';
import ClassScreen from '@screens/ClassScreen';
import MealScreen from '@/screens/MealScreen';
import TimetableScreen from '@screens/TimetableScreen';
import NoticeScreen from '@/screens/NoticeScreen';
import { StatusBar } from 'react-native';
import useAppTheme from '@/hooks/useAppTheme';
import { useTheme } from 'styled-components/native';
import MadebyScreen from '@screens/MadebyScreen';
import OpenSourceLicenseScreen from '@/screens/OpenSourceLicenseScreen';
import OpenSourceLicenseDetailScreen from '@/screens/OpenSourceLicenseDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLayoutEffect, useState } from 'react';

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

const RootNavigator = () => {
  const { theme } = useAppTheme();
  const { colors } = useTheme();
  const [initialRoute, setInitialRoute] =
    useState<keyof RootStackParamList>('Login');
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        const [refreshToken, accessToken] = await Promise.all([
          AsyncStorage.getItem('refresh'),
          AsyncStorage.getItem('access'),
        ]);

        if (refreshToken && accessToken) {
          setInitialRoute('Tab');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (!isLoading) {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor={colors.gray20}
          barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        />
        <Stack.Navigator
          id={undefined}
          initialRouteName={initialRoute}
          screenOptions={{
            headerShown: false,
            presentation: 'card',
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
          <Stack.Screen name={'Class'} component={ClassScreen} />
          <Stack.Screen name={'Meal'} component={MealScreen} />
          <Stack.Screen name={'TimeTable'} component={TimetableScreen} />
          <Stack.Screen name={'Notice'} component={NoticeScreen} />
          <Stack.Screen name={'Madeby'} component={MadebyScreen} />
          <Stack.Screen
            name={'OpenSourceLicense'}
            component={OpenSourceLicenseScreen}
          />
          <Stack.Screen
            name={'OpenSourceLicenseDetail'}
            component={OpenSourceLicenseDetailScreen}
          />
        </Stack.Navigator>
      </>
    );
  }
};

export default RootNavigator;
