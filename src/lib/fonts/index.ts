import { PixelRatio } from 'react-native';

export const getFontSize = (size: number) => { return size / PixelRatio.getFontScale(); };

