import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import RootNavigator from './src/navigation/RootNavigator';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { dark, light } from '@/theme';
import BootSplash from 'react-native-bootsplash';
import OverlayContext from '@/lib/overlay/OverlayContext';
import useAppTheme from '@hooks/useAppTheme';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
  },
});

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      webClientId: GOOGLE_CLIENT_ID,
    });
  }, []);

  const onReady = () => {
    BootSplash.hide();
  };

  const { theme, themeMode } = useAppTheme();

  const palette = { colors: theme === 'light' ? light : dark };
  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: palette.colors.gray20 }}
    >
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={palette}>
            <OverlayContext>
              <NavigationContainer
                theme={{
                  ...DefaultTheme,
                  colors: {
                    ...DefaultTheme.colors,
                    background: palette.colors.gray20,
                  },
                }}
                onReady={onReady}
              >
                <RootNavigator />
              </NavigationContainer>
            </OverlayContext>
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => App);
