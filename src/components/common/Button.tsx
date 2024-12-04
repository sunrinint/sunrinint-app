import { View } from 'react-native';
import React from 'react';
import { useTheme } from 'styled-components';

interface ButtonProps {
  level: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
  radius: number;
  fullWidth?: boolean;
  width?: number;
  height?: number;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        gap: 8,
        height: props.height,
        flexDirection: 'row',
        flex: props.fullWidth ? 1 : 0,
        width: props.fullWidth ? '100%' : props.width,
        borderRadius: props.radius,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors[`gray${props.level}`],
        borderWidth: props.level === 10 ? 1 : 0,
        borderColor: colors.gray30,
      }}
      {...props}
    >
      {props.children}
    </View>
  );
};

export default Button;
