import React, { useState } from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import styled, { useTheme } from 'styled-components/native';
import useLunchWeek from '@hooks/useLunchWeek';
import Typography from '@components/typography';
import { ScrollView } from 'react-native-gesture-handler';

const MealScreen = () => {
  const { lunchWeek } = useLunchWeek();
  console.log(lunchWeek);
  console.log(lunchWeek[0].meals);
  const { colors } = useTheme();

  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0); // 선택된 요일의 인덱스를 저장하는 state 추가

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // getMonth는 0부터 시작하므로 +1 해줍니다.
    let day = date.getDate();
    return `${month}월 ${day}일`;
  };

  const formatDate2 = (dateString: string): string => {
    const date = new Date(dateString);
    let day = date.getDate();
    return `${day}`;
  };

  return (
    <LayoutWithHeader title="급식" showBack>
      <Container>
        <DateContainer>
          <Typography.Title $color={colors.gray80}>
            {formatDate(lunchWeek[0].date)} ~{' '}
            {formatDate(lunchWeek.slice(-1)[0].date)}
          </Typography.Title>
        </DateContainer>
        <WeekContainer>
          {lunchWeek.map((lunch, index) => (
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
          {lunchWeek.map((lunch, index) => (
            <MenuContainer>
              <Typography.Label $color={colors.gray90}>
                {formatDate(lunch.date)} 점심
              </Typography.Label>
              <MenuList>
                {lunch.meals.map((item) => (
                  <MenuInfo>
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
      </Container>
    </LayoutWithHeader>
  );
};

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
    selected
      ? theme.colors.gray90
      : theme.colors.gray10}; // 선택된 요일일 때 색 변경
`;

export default MealScreen;
