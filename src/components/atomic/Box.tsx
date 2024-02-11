import { View } from 'react-native';
import React from 'react';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

interface BoxProps extends ViewProps {
  children: React.ReactNode;
  size: number;
}

const Box = ({ children, size }: BoxProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  );
};

export default Box;
