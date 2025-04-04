import { atom } from 'recoil';
import ThemeMode from '@lib/type/ThemeMode';

export const themeModeAtom = atom<ThemeMode>({
  key: 'themeMode',
  default: 'system',
});

export const resolvedThemeAtom = atom<'light' | 'dark'>({
  key: 'resolvedTheme',
  default: 'light',
});
