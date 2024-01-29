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
import { light } from '@/theme';
import BootSplash from 'react-native-bootsplash';


const queryClient = new QueryClient();

const App = () => {
  const onReady = () => {
    BootSplash.hide();
  };

  const theme = { colors: light };
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer
          onReady={onReady}>
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

AppRegistry.registerComponent(appName, () => App);
