import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../typography';
import ArrowDown from '@assets/icons/down.svg';
import useNotice from '@hooks/useNotice';
import { View } from 'react-native';
import CustomPressable from './CustomPressable';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface NoticeProps {
  uuid: string;
}

const Notice = ({ uuid }: NoticeProps) => {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { notice } = useNotice(uuid);

  const contentStyle = useAnimatedStyle(() => {
    return {
      maxHeight: withTiming(isOpen ? 500 : 0, {
        duration: 300,
      }),
      opacity: withTiming(isOpen ? 1 : 0, {
        duration: 300,
      }),
      overflow: 'hidden',
    };
  });

  return (
    <CustomPressable activeScale={0.99} onPress={() => setIsOpen(!isOpen)}>
      <NoticeLayout>
        <NoticeTop>
          <NoticeTopLeft>
            <Typography.SemiLabel $color={colors.gray90}>
              {notice.title}
            </Typography.SemiLabel>
            <Typography.Caption $color={colors.gray60}>
              {notice.createdAt.substring(0, 10)}
            </Typography.Caption>
          </NoticeTopLeft>
          <IconBox>
            <ArrowDown
              style={{
                transform: [{ rotate: isOpen ? '180deg' : '0deg' }],
              }}
              fill={colors.gray80}
            />
          </IconBox>
        </NoticeTop>
        {isOpen && (
          <Animated.View style={contentStyle}>
            <Typography.Body $color={colors.gray80}>
              {notice.content}
            </Typography.Body>
          </Animated.View>
        )}
      </NoticeLayout>
    </CustomPressable>
  );
};

const Skeleton = () => {
  const { colors } = useTheme();
  return (
    <SkeletonContainer>
      <View
        style={{
          marginVertical: 4,
          width: '100%',
          height: 18,
          backgroundColor: colors.gray20,
          borderRadius: 100,
        }}
      />
      <View
        style={{
          marginVertical: 4,
          width: 128,
          height: 12,
          backgroundColor: colors.gray20,
          borderRadius: 100,
        }}
      />
    </SkeletonContainer>
  );
};

Notice.Skeleton = Skeleton;

const SkeletonContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray10};
  padding: 20px;
  border-radius: 8px;
  height: 88px;
`;

const NoticeTopLeft = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

const IconBox = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const NoticeLayout = styled.View`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  background: ${({ theme }) => theme.colors.gray10};
`;

const NoticeTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export default Notice;
