import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance, useColorScheme } from 'react-native';

type Theme = 'light' | 'dark' | 'system';

const useAppTheme = () => {
  const setTheme = (theme: Theme) => {
    theme === 'system'
      ? Appearance.setColorScheme(null)
      : Appearance.setColorScheme(theme);
    AsyncStorage.setItem('theme', theme).then(() =>
      console.log('theme set', theme),
    );
  };

  useEffect(() => {
    AsyncStorage.getItem('theme').then((value) => {
      if (value === 'system' || !value) {
        setTheme('system');
      } else {
        setTheme(value as Theme);
      }
    });
  }, []);

  const theme = useColorScheme();

  return {
    theme,
    setTheme,
  };
};

export default useAppTheme;
