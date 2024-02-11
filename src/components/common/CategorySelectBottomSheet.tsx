import {
  View,
  Animated,
  Modal,
  TouchableWithoutFeedback,
  PanResponder,
  Dimensions,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Row } from '../atomic';
import { Spacer } from '../atomic/Spacer';
import Typography from '../typography';
import Radio from './Radio';
import Club from '@assets/icons/club_icon.svg';

interface BottomSheetProps {
  onClose: () => void;
  category: number;
  setCategory: (value: number) => void;
}

const BottomSheet = ({ category, setCategory, onClose }: BottomSheetProps) => {
  const screenHeight = Dimensions.get('screen').height;

  const [isVisible, setIsVisible] = useState(false);
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

  const hideBottomSheet = () => {
    closeBottomSheet.start(() => {
      setIsVisible(false);
      panY.setValue(screenHeight);
      onClose();
    });
  };

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1) {
          hideBottomSheet();
        } else {
          resetBottomSheet.start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    setIsVisible(true);
    resetBottomSheet.start();
  }, []);

  const { colors } = useTheme();

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
    >
      <Overlay>
        <TouchableWithoutFeedback
          onPress={() => {
            hideBottomSheet();
          }}
        >
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <BottomSheetContainer
          style={{ transform: [{ translateY }] }}
          {...panResponders.panHandlers}
        >
          <Bar />
          <Row
            $padding={[8, 0]}
            $alignItems={'center'}
            $justifyContent={'space-between'}
            $fill={true}
          >
            <Typography.SemiLabel $color={colors.gray80}>
              학과 선택
            </Typography.SemiLabel>
            <Club fill={colors.gray50} />
          </Row>
          <Radio
            data={['정보보호과', '소프트웨어과', 'IT경영과', '콘텐츠디자인과']}
            value={category}
            setValue={setCategory}
            onConfirm={hideBottomSheet}
          />
          <Spacer $height={37} />
        </BottomSheetContainer>
      </Overlay>
    </Modal>
  );
};

const Bar = styled.View`
  width: 64px;
  height: 4px;
  border-radius: 10px;
  background: #e7eaef;
`;

const BottomSheetContainer = styled(Animated.View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px;
  border-radius: 8px 8px 0 0;
  background: ${(props) => props.theme.colors.gray10};
`;

const Overlay = styled.View`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default BottomSheet;
