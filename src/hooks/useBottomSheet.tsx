import { useCallback } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';
import useOverlay from './useOverlay';

const useBottomSheet = () => {
  const overlay = useOverlay();
  const { height } = useWindowDimensions();

  // Shared values for animation
  const translateY = useSharedValue(height);
  const opacity = useSharedValue(0);

  // Callback to handle closing the bottom sheet
  const handleClose = useCallback(() => {
    translateY.value = withTiming(height, { duration: 400 });
    opacity.value = withTiming(0, { duration: 300 });
    overlay.close();
  }, [height, translateY, opacity]);

  // Callback to handle opening the bottom sheet
  const handleOpen = useCallback(() => {
    translateY.value = withTiming(0, {
      duration: 400,
      easing: Easing.out(Easing.ease),
    });
    opacity.value = withTiming(1, { duration: 300 });
  }, [translateY, opacity]);

  // Gesture handler
  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      'worklet';
      if (event.translationY > 0) {
        translateY.value = event.translationY;
      }
    })
    .onEnd((event) => {
      'worklet';
      if (event.translationY > 50 || event.velocityY > 1000) {
        runOnJS(handleClose)();
      } else {
        translateY.value = withTiming(0, { duration: 300 });
      }
    });

  // Animated styles
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return {
    open: handleOpen,
    close: handleClose,
    animationValues: {
      translateY,
      opacity,
    },
    gesture,
    animatedStyle,
  };
};

export default useBottomSheet;
