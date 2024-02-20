import React from 'react';
import { useTheme } from 'styled-components/native';
import Typography from '../typography';
import { Card } from '../atomic/Card';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type tabScreenProp = StackNavigationProp<RootStackParamList, 'Tab'>;

const CurrentMeal = () => {
  const navigation = useNavigation<tabScreenProp>();
  const { colors } = useTheme();
  return (
    <Card.CardContainer
      onPress={() => {
        navigation.navigate('Meal');
      }}
    >
      <Card.CardTop>
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
