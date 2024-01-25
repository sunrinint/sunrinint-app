import React from 'react';
import { Animated, SafeAreaView } from 'react-native';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import styled from 'styled-components/native';
import Typography from '@components/typography';
import { light } from '@/theme';
import NoticeIcon from '@/assets/icons/notice.svg';

const HomeScreen = () => {
  const colors = light;
  return (
    <LayoutWithHeader logo>
      <Container>
        <NoticeCard>
          <IconBox>
            <NoticeIcon fill={colors.highlight} />
          </IconBox>
          <Typography.SemiBody>2023 선린제 개최 및 안내</Typography.SemiBody>
        </NoticeCard>
        <MealCard>
          <Typography.SemiLabel>시간표</Typography.SemiLabel>
          <Typography.Body $color={colors.gray60}>
            오늘의 시간표 정보가 존재하지 않습니다.
          </Typography.Body>
        </MealCard>
        <MealCard>
          <Typography.SemiLabel>오늘의 급식</Typography.SemiLabel>
          <Typography.Body $color={colors.gray60}>
            오늘의 급식이 없습니다.
          </Typography.Body>
        </MealCard>
      </Container>
    </LayoutWithHeader>
  );
};

const IconBox = styled.View`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const NoticeCard = styled.View`
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: #ffffff;
`;

const MealCard = styled.View`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: #fff;
`;

const Container = styled.View`
  display: flex;
  width: 100%;
  padding: 8px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export default HomeScreen;
