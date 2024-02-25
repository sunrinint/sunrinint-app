import React from 'react';
import NoticeIcon from '@assets/icons/notice.svg';
import styled, { useTheme } from 'styled-components/native';
import Typography from '../../typography';
import { Card } from '../../atomic/Card';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type tabScreenProp = StackNavigationProp<RootStackParamList, 'Tab'>;

const NoticeSection = () => {
  const navigation = useNavigation<tabScreenProp>();
  const { colors } = useTheme();
  return (
    <Card.CardContainer
      onPress={() => {
        navigation.navigate('Notice');
      }}
    >
      <Card.CardTop>
        <NoticeRow>
          <IconBox>
            <NoticeIcon fill={colors.gray90} />
          </IconBox>
          <Typography.SemiBody $color={colors.gray90}>
            2023 선린제 개최 및 안내
          </Typography.SemiBody>
        </NoticeRow>
      </Card.CardTop>
    </Card.CardContainer>
  );
};

const NoticeRow = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const IconBox = styled.View`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export default NoticeSection;
