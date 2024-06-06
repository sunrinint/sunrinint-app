import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../../typography';
import { Card } from '../../atomic/Card';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Column, Row } from '@components/atomic';
import { SkeletonContent } from '@components/skeleton/SkeletonContent';
import useLunch from '@hooks/useLunch';

type tabScreenProp = StackNavigationProp<RootStackParamList, 'Tab'>;

const MealSection = () => {
  const navigation = useNavigation<tabScreenProp>();
  const { lunch } = useLunch();
  const { colors } = useTheme();
  const [_, month, day] = lunch.date.split('-');

  return (
    <Card.CardContainer
      onPress={() => {
        navigation.navigate('Meal');
      }}
    >
      <Card.CardTop>
        <Typography.SemiLabel $color={colors.gray80}>
          {month}월 {day}일 점심
        </Typography.SemiLabel>
      </Card.CardTop>

      <Typography.Body $color={colors.gray80}>
        {lunch.meals.map((v) => v.meal).join(', ')}
      </Typography.Body>
    </Card.CardContainer>
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
