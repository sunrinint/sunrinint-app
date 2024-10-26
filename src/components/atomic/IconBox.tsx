import { PressableProps, Animated, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import { useTheme } from 'styled-components/native';

interface IconBoxProps extends PressableProps {
  children: React.ReactNode;
}

const AnimatedPresable = Animated.createAnimatedComponent(Pressable);

const IconBox = ({ children, ...props }: IconBoxProps) => {
  const { colors } = useTheme();
  const currentColor = colors.gray20;
  const [color, setColor] = useState(new Animated.Value(0));
  const bgColor = color.interpolate({
    inputRange: [0, 1],
    outputRange: [currentColor, colors.gray30],
  });
  return (
    <AnimatedPresable
      onPressIn={() => {
        setColor(new Animated.Value(1));
      }}
      onPressOut={() => {
        setColor(new Animated.Value(0));
      }}
      style={{
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
      }}
      {...props}
    >
      {children}
    </AnimatedPresable>
  );
};

export default IconBox;
