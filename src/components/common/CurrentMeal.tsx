import { View, Text } from 'react-native';
import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../typography';

const CurrentMeal = () => {
  const { colors } = useTheme();
  return (
    <CurrnetMealLayout>
      <Typography.SemiLabel $color={colors.gray80}>
        1월 23일 점심
      </Typography.SemiLabel>
      <Typography.Body $color={colors.gray80}>
        수수밥, 설렁탕, 소면, 생선까스, 타르타르, 궁중떡볶이, 석박지,
        생과일(청포도)
      </Typography.Body>
    </CurrnetMealLayout>
  );
};

const CurrnetMealLayout = styled.View`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray30};
  background: ${(props) => props.theme.colors.gray10};
`;

export default CurrentMeal;
