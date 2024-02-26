import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../../typography';
import { Card } from '../../atomic/Card';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import {Column, Row} from '@components/atomic';

type tabScreenProp = StackNavigationProp<RootStackParamList, 'Tab'>;

const MealSection = () => {
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

const Skeleton = () => {
  return (
      <SkeletonContainer>
        <Row $padding={[4,0]}>
          <SkeletonContent18 $width={140}/>
        </Row>
        <Column>
          <Row $padding={[4,0]}>
            <SkeletonContent16 style={{width: '100%'}}/>
          </Row>
          <Row $padding={[4,0]}>
            <SkeletonContent16 $width={140}/>
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

const SkeletonContent12 = styled.View`
  width: ${(props) => props.$width || 0}px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.gray20};
  border-radius: 100px;
`;

const SkeletonContent16 = styled.View`
  width: ${(props) => props.$width || 0}px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.gray20};
  border-radius: 100px;
`;

const SkeletonContent18 = styled.View`
  width: ${(props) => props.$width || 0}px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.gray20};
  border-radius: 100px;
`;

const SkeletonContent20 = styled.View`
  width: ${(props) => props.$width || 0}px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.gray20};
  border-radius: 100px;
`;

export default MealSection;
