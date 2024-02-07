import React from 'react';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import styled, { useTheme } from 'styled-components/native';
import Typography from '@components/typography';
import { light } from '@/theme';
import NoticeIcon from '@/assets/icons/notice.svg';
import Setting from '@assets/icons/setting.svg';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  return (
    <LayoutWithHeader
      logo
      FirstChild={Setting}
      onFirstChildPress={() => navigation.navigate('Setting')}
    >
      <Container>
        <NoticeCard>
          <IconBox>
            <NoticeIcon fill={colors.highlight} />
          </IconBox>
          <Typography.SemiBody $color={colors.gray90}>
            2023 선린제 개최 및 안내
          </Typography.SemiBody>
        </NoticeCard>
        <MealCard>
          <Typography.SemiLabel $color={colors.gray90}>
            시간표
          </Typography.SemiLabel>
          <Typography.Body $color={colors.gray60}>
            오늘의 시간표 정보가 존재하지 않습니다.
          </Typography.Body>
        </MealCard>
        <MealCard>
          <Typography.SemiLabel $color={colors.gray90}>
            오늘의 급식
          </Typography.SemiLabel>
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
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  background: ${(props) => props.theme.colors.gray10};
`;

const MealCard = styled.View`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  background: ${(props) => props.theme.colors.gray10};
`;

const Container = styled.View`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export default HomeScreen;
