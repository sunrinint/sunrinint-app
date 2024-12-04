import React from 'react';
import NoticeIcon from '@assets/icons/notice.svg';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../../typography';
import { Card } from '../../atomic/Card';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import useNoticeList from '@hooks/useNoticeList';
import CustomPressable from '@/components/common/CustomPressable';
import { View } from 'react-native';

type tabScreenProp = StackNavigationProp<RootStackParamList, 'Tab'>;

const NoticeSection = () => {
  const navigation = useNavigation<tabScreenProp>();
  const { colors } = useTheme();
  const { noticeList } = useNoticeList();
  return (
    <CustomPressable
      activeScale={0.98}
      onPress={() => {
        navigation.navigate('Notice');
      }}
    >
      <View style={{ width: '100%' }}>
        <Card.CardContainer>
          <Card.CardTop>
            <NoticeRow>
              <IconBox>
                <NoticeIcon fill={colors.gray90} />
              </IconBox>
              <Typography.SemiBody $color={colors.gray90}>
                {noticeList[0]?.title ?? '공지사항이 없습니다.'}
              </Typography.SemiBody>
            </NoticeRow>
          </Card.CardTop>
        </Card.CardContainer>
      </View>
    </CustomPressable>
  );
};

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonContent />
    </SkeletonContainer>
  );
};

NoticeSection.Skeleton = Skeleton;

const SkeletonContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray10};
  padding: 24px 20px;
  border-radius: 8px;
`;

const SkeletonContent = styled.View`
  width: 100%;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.gray20};
  border-radius: 100px;
`;

const NoticeRow = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const IconBox = styled.View`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export default NoticeSection;
