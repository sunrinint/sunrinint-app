import { Pressable, PressableProps } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';

interface ButtonProps extends PressableProps {
  level: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
  radius: number;
  fullWidth?: boolean;
  width?: number;
  height?: number;
}

const Button = (props: ButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const { colors } = useTheme();
  return (
    <Pressable
      style={{
        gap: 8,
        height: props.height,
        flexDirection: 'row',
        flex: props.fullWidth ? 1 : 0,
        width: props.fullWidth ? '100%' : props.width,
        backgroundColor: pressed
          ? colors[`gray${props.level + 10}`]
          : colors[`gray${props.level}`],
        borderRadius: props.radius,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: props.level === 10 ? 1 : 0,
        borderColor: colors.gray30,
      }}
      {...props}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      {props.children}
    </Pressable>
  );
};

export default Button;
