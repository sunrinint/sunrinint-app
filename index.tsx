/**
 * @format
 */

import { AppRegistry, Appearance, useColorScheme } from 'react-native';
import { name as appName } from './app.json';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import RootNavigator from './src/navigation/RootNavigator';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { light, dark } from '@/theme';
import BootSplash from 'react-native-bootsplash';
import OverlayContext from '@/lib/overlay/OverlayContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const queryClient = new QueryClient();

const App = () => {
  const [mode, setMode] = React.useState('light');
  const onReady = () => {
    BootSplash.hide();
  };

  const colorScheme = Appearance.getColorScheme();

  const getMode = () => {
    return AsyncStorage.getItem('theme').then((value) => {
      console.log(value, colorScheme);
      return value || colorScheme;
    });
  };

  useEffect(() => {
    getMode().then((value) => {
      setMode(value);
    });
  }, []);

  const theme = { colors: colorScheme === 'light' ? light : dark };
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
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
