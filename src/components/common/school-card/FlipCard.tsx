import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export const FlipCard = ({
  isFlipped,
  cardStyle,
  direction = 'y',
  duration = 400,
  RegularContent,
  FlippedContent,
}) => {
  const isDirectionX = direction === 'x';

  const tapGesture = Gesture.Tap()
    .onStart(() => {
      // 드래그 시 상태 토글
      isFlipped.value = !isFlipped.value;
    })
    .onEnd(() => {
      console.log('Drag ended');
    });

  const regularCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);

    return {
      transform: [
        {
          [isDirectionX ? 'rotateX' : 'rotateY']: withTiming(
            `${spinValue}deg`,
            {
              duration,
            },
          ),
        },
      ],
      backfaceVisibility: 'hidden',
    };
  });

  const flippedCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);

    return {
      transform: [
        {
          [isDirectionX ? 'rotateX' : 'rotateY']: withTiming(
            `${spinValue}deg`,
            {
              duration,
            },
          ),
        },
      ],
      backfaceVisibility: 'hidden',
    };
  });

  return (
    <GestureDetector gesture={tapGesture}>
      <Animated.View style={[flipCardStyles.container, cardStyle]}>
        <Animated.View
          style={[
            flipCardStyles.card,
            flipCardStyles.regularCard,
            regularCardAnimatedStyle,
          ]}
        >
          {RegularContent}
        </Animated.View>
        <Animated.View
          style={[
            flipCardStyles.card,
            flipCardStyles.flippedCard,
            flippedCardAnimatedStyle,
          ]}
        >
          {FlippedContent}
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

const flipCardStyles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  regularCard: {
    zIndex: 1,
  },
  flippedCard: {
    zIndex: 2,
  },
});
