declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '@env' {
  export const SERVER_URL: string;
  export const PUBLIC_API_URL: string;
  export const GOOGLE_CLIENT_ID: string;
  export const GOOGLE_IOS_CLIENT_ID: string;
  export const GOOGLE_CLIENT_SECRET: string;
  export const PUBLIC_MEAL_API_URL: string;
}
