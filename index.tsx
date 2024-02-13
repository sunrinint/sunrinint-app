/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import RootNavigator from './src/navigation/RootNavigator';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { dark, light } from '@/theme';
import BootSplash from 'react-native-bootsplash';
import OverlayContext from '@/lib/overlay/OverlayContext';
import useAppTheme from '@hooks/useAppTheme';

const queryClient = new QueryClient();

const App = () => {
  const onReady = () => {
    BootSplash.hide();
  };

  const { theme } = useAppTheme();

  const palette = { colors: theme === 'light' ? light : dark };
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={palette}>
          <OverlayContext>
            <NavigationContainer onReady={onReady}>
              <RootNavigator />
            </NavigationContainer>
          </OverlayContext>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

AppRegistry.registerComponent(appName, () => App);
