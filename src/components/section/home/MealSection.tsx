import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../../typography';
import { Card } from '../../atomic/Card';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Column, Row } from '@components/atomic';
import { SkeletonContent } from '@components/skeleton/SkeletonContent';
import useMeal from '@/hooks/useMeal';
import CustomPressable from '@/components/common/CustomPressable';

type tabScreenProp = StackNavigationProp<RootStackParamList, 'Tab'>;

const MealSection = () => {
  const navigation = useNavigation<tabScreenProp>();
  const { meal } = useMeal();
  const { colors } = useTheme();
  const [ ismealvalid, setIsMealValid ] = useState(true);
  const [_, month, day] = meal.date.split('-');

  console.log(meal);
  useEffect(() => {
    if (meal.date === "" || meal.meals.length === 0) {
      setIsMealValid(false);
    } else {
      setIsMealValid(true);
    }
  }, [meal]); // meal이 변경될 때만 실행

  return (
    <CustomPressable
      valid={ismealvalid}
      activeScale={0.98}
      onPress={() => {
        navigation.navigate('Meal');
      }}
    >
      <Card.CardContainer>
        <Card.CardTop IsArrowRightShow={ismealvalid}>
          {!ismealvalid ? (
            <Typography.SemiLabel $color={colors.gray80}>
              급식 정보가 없습니다
            </Typography.SemiLabel>
          ) : (
            <Typography.SemiLabel $color={colors.gray80}>
              {month}월 {day}일 점심
            </Typography.SemiLabel>
          )}
        </Card.CardTop>
        {ismealvalid && (
          <Typography.Body $color={colors.gray80}>
            {meal.meals.map((v) => v.meal).join(', ')}
          </Typography.Body>
        )}
      </Card.CardContainer>
    </CustomPressable>
  );
};

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <Row $padding={[4, 0]}>
        <SkeletonContent $width={140} $height={18} />
      </Row>
      <Column>
        <Row $padding={[4, 0]}>
          <SkeletonContent $height={16} />
        </Row>
        <Row $padding={[4, 0]}>
          <SkeletonContent $width={140} $height={16} />
        </Row>
      </Column>
    </SkeletonContainer>
  );
};

MealSection.Skeleton = Skeleton;

const SkeletonContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray10};
  padding: 20px 20px;
  border-radius: 8px;
  gap: 12px;
`;

export default MealSection;
