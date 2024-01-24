import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import RootNavigator from './src/navigation/RootNavigator';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { light } from '@/theme';

const queryClient = new QueryClient();

const App = () => {
  const theme = { colors: light };
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
