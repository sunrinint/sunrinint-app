import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Pressable } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, interpolate, interpolateColor } from 'react-native-reanimated';

interface SwitchProps {
  value: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
}

const Switch = ({ value, onChange, disabled }: SwitchProps) => {
  const { colors } = useTheme();
  const position = useSharedValue(value ? 1 : 0);
  const width = useSharedValue(0);
  const right = useSharedValue(0);
  const background = useSharedValue(value ? 1 : 0);

  useEffect(() => {
    position.value = withTiming(value ? 0 : 1, { duration: 200 });
    background.value = withTiming(value ? 0 : 1, { duration: 150 });
    width.value = withTiming(0, { duration: 250 });
    right.value = withTiming(0, { duration: 250 });
  }, [value]);

  const containerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        background.value,
        [0, 1],
        [colors.gray40, colors.gray80]
      ),
    };
  });

  const circleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(position.value, [0, 1], [0, 24]),
        },
      ],
      width: interpolate(width.value, [0, 1], [24, 30]),
      right: interpolate(right.value, [0, 1], [0, 6]),
    };
  });

  return (
    <Container
      $enabled={value}
      onPressIn={() => {
        width.value = withTiming(1, { duration: 250 });
        right.value = withTiming(value ? 0 : 1, { duration: 250 });
      }}
      onPressOut={() => onChange(!value)}
      disabled={disabled}
      style={containerStyle}
    >
      <Circle style={circleStyle} />
    </Container>
  );
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Container = styled(AnimatedPressable)<{ $enabled: boolean }>`
  width: 56px;
  height: 32px;
  padding: 4px;
  display: flex;
  flex-direction: row;
  border-radius: 100px;
`;

const Circle = styled(Animated.View)`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: white;
`;

export default Switch;
