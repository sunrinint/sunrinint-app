import { Animated, PanResponder, useWindowDimensions } from 'react-native';
import { useRef } from 'react';

const useBottomSheet = () => {
  const { height } = useWindowDimensions();
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const animationY = useRef(new Animated.Value(height)).current;
  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > 0) {
          animationY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1) {
          console.log("test");
          close.start();
        } else {
          open.start();
          console.log("test");
        }
      },
    }),
  ).current;
  const open = Animated.parallel([
    Animated.timing(animationY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }),
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }),
  ]);
  const close = Animated.parallel([
    Animated.timing(animationY, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }),
    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }),
  ]);

  const translateY = animationY;
  const opacity = opacityAnimation.interpolate({
    inputRange: [0, 0.5],
    outputRange: [0, 1],
  });

  return {
    open,
    close,
    animationVale: {
      translateY,
      opacity,
    },
    handler: panResponders,
  };
};
export default useBottomSheet;
