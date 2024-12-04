import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';
import ThemeMode from '@lib/type/ThemeMode';

const useAppTheme = () => {
  const systemColorScheme = useColorScheme(); // 'light' 또는 'dark'
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [theme, setThemeState] = useState<'light' | 'dark'>(
    systemColorScheme || 'light',
  );

  // 테마 모드를 설정하고 저장하는 함수
  const setThemeModeAndPersist = (mode: ThemeMode) => {
    setThemeMode(mode);
    AsyncStorage.setItem('theme', mode);
  };

  // 초기 로딩 시 저장된 테마 모드를 불러옴
  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (
        storedTheme === 'light' ||
        storedTheme === 'dark' ||
        storedTheme === 'system'
      ) {
        setThemeMode(storedTheme as ThemeMode);
      }
    };
    loadTheme();
  }, []);

  // 테마 모드 또는 시스템 테마 변경 시 실제 테마를 설정
  useEffect(() => {
    if (themeMode === 'system') {
      setThemeState(systemColorScheme || 'light');
    } else {
      setThemeState(themeMode);
    }
  }, [systemColorScheme, themeMode]);

  return {
    theme,
    themeMode,
    setTheme: setThemeModeAndPersist,
  };
};

export default useAppTheme;
