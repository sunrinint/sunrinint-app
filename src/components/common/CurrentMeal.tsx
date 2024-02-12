import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../typography';
import { Card } from '../atomic/Card';
import { useNavigation } from '@react-navigation/native';

const CurrentMeal = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <Card.CardContainer>
      <Card.CardTop
        onClick={() => {
          navigation.navigate('Meal');
        }}
      >
        <Typography.SemiLabel $color={colors.gray80}>
          1월 23일 점심
        </Typography.SemiLabel>
      </Card.CardTop>

      <Typography.Body $color={colors.gray80}>
        수수밥, 설렁탕, 소면, 생선까스, 타르타르, 궁중떡볶이, 석박지,
        생과일(청포도)
      </Typography.Body>
    </Card.CardContainer>
  );
};

export default CurrentMeal;
