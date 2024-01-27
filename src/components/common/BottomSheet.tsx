import { useState, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

const useBottomSheet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const showBottomSheet = () => {
    setIsVisible(true);
    resetBottomSheet.start();
  };

  const hideBottomSheet = () => {
    closeBottomSheet.start(() => {
      setIsVisible(false);
      panY.setValue(screenHeight);
    });
  };

  return {
    isVisible,
    showBottomSheet,
    hideBottomSheet,
    translateY,
    resetBottomSheet,
    panY,
  };
};

export default useBottomSheet;
