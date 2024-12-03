import React, { Suspense, useState } from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import styled, { useTheme } from 'styled-components/native';
import Typography from '@components/typography';
import { ScrollView } from 'react-native-gesture-handler';
import useMealWeek from '@/hooks/useMealWeek';
import { Column, Row } from '@components/atomic';
import { SkeletonContent } from '@components/skeleton/SkeletonContent';

const MealScreen = () => {
  return (
    <LayoutWithHeader title="급식" showBack>
      <Container>
        <Suspense fallback={<MealContent.Skeleton />}>
          <MealContent />
        </Suspense>
      </Container>
    </LayoutWithHeader>
  );
};

const MealContent = () => {
  const { mealWeek } = useMealWeek();
  const { colors } = useTheme();
  const [selectedDayIndex] = useState(0);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    let day = date.getDate();
    return `${month}월 ${day}일`;
  };

  const formatDate2 = (dateString: string): string => {
    const date = new Date(dateString);
    let day = date.getDate();
    return `${day}`;
  };

  return (
    <>
      <DateContainer>
        <Typography.Title $color={colors.gray80}>
          {formatDate(mealWeek[0].date)} ~{' '}
          {formatDate(mealWeek.slice(-1)[0].date)}
        </Typography.Title>
      </DateContainer>
      <WeekContainer>
        {mealWeek.map((lunch, index) => (
          <DayContainer key={index} selected={selectedDayIndex === index}>
            <Typography.Body
              $color={
                selectedDayIndex === index ? colors.gray10 : colors.gray90
              }
            >
              {getDayOfWeek(lunch.date)}
            </Typography.Body>
            <Typography.Caption
              $color={
                selectedDayIndex === index ? colors.gray10 : colors.gray90
              }
            >
              {formatDate2(lunch.date)}
            </Typography.Caption>
          </DayContainer>
        ))}
      </WeekContainer>
      <ScrollView
        style={{
          width: '100%',
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          gap: 12,
          borderRadius: 8,
          paddingBottom: 42,
        }}
      >
        {mealWeek.map((lunch, index) => (
          <MenuContainer key={index}>
            <Typography.Label $color={colors.gray90}>
              {formatDate(lunch.date)} 점심
            </Typography.Label>
            <MenuList>
              {lunch.meals.map((item, mealIndex) => (
                <MenuInfo key={mealIndex}>
                  <Typography.Body $color={colors.gray80}>
                    {item.meal}
                  </Typography.Body>
                  <Typography.Body $color={colors.gray60}>
                    {item.code}
                  </Typography.Body>
                </MenuInfo>
              ))}
            </MenuList>
          </MenuContainer>
        ))}
      </ScrollView>
    </>
  );
};

const Skeleton = () => {
  return (
    <>
      <DateContainer>
        <SkeletonContent $width={200} $height={28} />
      </DateContainer>
      <WeekContainer>
        {[...Array(5)].map((_, i) => (
          <Column key={i} $alignItems="center" $gap={4} style={{ flex: 1 }}>
            <SkeletonContent $width={20} $height={20} />
            <SkeletonContent $width={16} $height={16} />
          </Column>
        ))}
      </WeekContainer>
      <Column $gap={12} $fill>
        {[...Array(3)].map((_, i) => (
          <MenuContainer key={i}>
            <SkeletonContent $width={120} $height={20} />
            <Column $gap={8}>
              {[...Array(4)].map((_, j) => (
                <Row key={j} $gap={8}>
                  <SkeletonContent $width={160} $height={16} />
                  <SkeletonContent $width={60} $height={16} />
                </Row>
              ))}
            </Column>
          </MenuContainer>
        ))}
      </Column>
    </>
  );
};

MealContent.Skeleton = Skeleton;

const getDayOfWeek = (dateString: string): string => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const date = new Date(dateString);
  return days[date.getDay()];
};

const DateContainer = styled.View`
  padding: 4px 0px;
`;

const Container = styled.View`
  flex: 1;
  padding: 12px 12px 0 12px;
  gap: 12px;
  align-items: center;
`;

const WeekContainer = styled.View`
  display: flex;
  width: 100%;
  padding: 8px 8px;
  gap: 4px;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
`;

const MenuContainer = styled.View`
  display: flex;
  width: 100%;
  padding: 16px 16px;
  gap: 12px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
`;

const MenuList = styled.View``;

const MenuInfo = styled.View`
  flex-direction: row;
  gap: 5px;
`;

const DayContainer = styled.View<{ selected: boolean }>`
  padding: 8px 0px;
  flex: 1;
  border-radius: 4px;
  align-items: center;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.gray90 : theme.colors.gray10};
`;

export default MealScreen;
