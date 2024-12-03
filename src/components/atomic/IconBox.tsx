import { PressableProps, Pressable } from 'react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface IconBoxProps extends PressableProps {
  children: React.ReactNode;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const IconBox = ({ children, ...props }: IconBoxProps) => {
  const { colors } = useTheme();
  const currentColor = colors.gray20;
  const pressed = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value === 0 ? currentColor : colors.gray30,
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    };
  });

  return (
    <AnimatedPressable
      onPressIn={() => {
        pressed.value = withSpring(1);
      }}
      onPressOut={() => {
        pressed.value = withSpring(0);
      }}
      style={animatedStyle}
      {...props}
    >
      {children}
    </AnimatedPressable>
  );
};

export default IconBox;
