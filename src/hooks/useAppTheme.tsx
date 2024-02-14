import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance, useColorScheme } from 'react-native';
import ThemeMode from '@lib/type/ThemeMode';

const useAppTheme = () => {
  const setTheme = (theme: ThemeMode) => {
    theme === 'system'
      ? Appearance.setColorScheme(null)
      : Appearance.setColorScheme(theme);
    setThemeMode(theme as ThemeMode);
    AsyncStorage.setItem('theme', theme).then(() => {
      console.log('theme set', theme);
    });
  };

  useEffect(() => {
    AsyncStorage.getItem('theme').then((value) => {
      if (value === 'system' || !value) {
        setTheme('system');
        setThemeMode('system');
      } else {
        setTheme(value as ThemeMode);
        setThemeMode(value as ThemeMode);
      }
    });
  }, []);
  const theme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>();

  return {
    theme,
    themeMode,
    setTheme,
  };
};

export default useAppTheme;
