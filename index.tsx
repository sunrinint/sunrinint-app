/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import { name as appName } from './app.json';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import RootNavigator from './src/navigation/RootNavigator';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { dark, light } from '@/theme';
import BootSplash from 'react-native-bootsplash';
import OverlayContext from '@/lib/overlay/OverlayContext';
import useAppTheme from '@hooks/useAppTheme';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from '@lib/api/user';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
  },
});

const App = () => {
  const [logincheck, setLogincheck] = useState<boolean | null>(null);
  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      webClientId: GOOGLE_CLIENT_ID,
      offlineAccess: true,
    });
  }, []);

  const onReady = () => {
      const checkUser = async () => {
        const accessToken = await AsyncStorage.getItem('access');
        if (accessToken !== null) {
          const user = await getUser();
          setLogincheck(!!user);
          BootSplash.hide();
        }
        else {
          setLogincheck(false);
          BootSplash.hide();
        }
      };
      checkUser();

  };

  const { theme } = useAppTheme();

  const palette = { colors: theme === 'light' ? light : dark };
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={palette}>
          <OverlayContext>
            <NavigationContainer onReady={onReady}>
              <RootNavigator logincheck={logincheck}/>
            </NavigationContainer>
          </OverlayContext>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

AppRegistry.registerComponent(appName, () => App);
