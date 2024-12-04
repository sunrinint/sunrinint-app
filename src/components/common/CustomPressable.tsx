import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

interface CustomPressableProps {
  children: React.ReactNode;
  onPress?: () => void;
  activeScale?: number;
  style?: StyleProp<ViewStyle>;
}

const CustomPressable = ({
  children,
  onPress,
  activeScale = 0.97,
  style,
}: CustomPressableProps) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  const handlePressIn = () => {
    scale.value = withTiming(activeScale, {
      duration: 300,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    opacity.value = withTiming(0.6, {
      duration: 150,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      delay: 50,
    });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, {
      duration: 200,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    opacity.value = withTiming(1, {
      duration: 150,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      delay: 50,
    });
  };

  return (
    <Pressable
      style={style}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </Pressable>
  );
};

export default CustomPressable;
