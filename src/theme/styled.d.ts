import 'styled-components/native';
import Palette from '@/theme/types/Palette';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: Palette;
  }
}
