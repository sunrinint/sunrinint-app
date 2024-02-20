import React, { useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Card } from '../atomic/Card';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Column, Row } from '@components/atomic';
import Typography from '@components/typography';
import { Animated } from 'react-native';

type tabScreenProp = StackNavigationProp<RootStackParamList, 'Tab'>;

const data = [
  {
    teacher: '이왕렬',
    subject: '웹프',
    class: '342',
    period: 1,
  },
  {
    teacher: '이왕렬',
    subject: '웹프',
    class: '342',
    period: 2,
  },
  {
    teacher: '이왕렬',
    subject: '웹프',
    class: '342',
    period: 3,
  },
  {
    teacher: '이왕렬',
    subject: '웹프',
    class: '342',
    period: 4,
  },
  {
    teacher: '이왕렬',
    subject: '웹프',
    class: '342',
    period: 5,
  },
  {
    teacher: '이왕렬',
    subject: '웹프',
    class: '342',
    period: 6,
  },
];
const currentTime = 0;

export default function () {
  const navigation = useNavigation<tabScreenProp>();
  const { colors } = useTheme();
  return (
    <Card.CardContainer
      onPress={() => {
        navigation.navigate('TimeTable');
      }}
    >
      <Card.CardTop>
        <Column $gap={2}>
          <Typography.SemiLabel $color={colors.gray90}>
            {`${data[currentTime].period}교시,`}{' '}
            <Typography.SemiLabel $color={colors.highlight}>
              {data[currentTime].subject}
            </Typography.SemiLabel>{' '}
            시간
          </Typography.SemiLabel>
          <Typography.Body $color={colors.gray60}>
            {`${data[currentTime].class}실 ${data[currentTime].teacher} 선생님`}
          </Typography.Body>
        </Column>
      </Card.CardTop>
      <Row $gap={4} $fill>
        {data.map((item, index) => (
          <PeriodItem
            key={index}
            period={item.period}
            currentPeriod={currentTime + 1}
            subject={item.subject}
          />
        ))}
      </Row>
      <TimeProgress
        start={new Date('2000-1-1T08:00')}
        end={new Date('2000-1-1T15:30')}
      />
    </Card.CardContainer>
  );
}

interface ItemProps {
  period: number;
  subject: string;
  currentPeriod: number;
}

const PeriodItem = ({ period, subject, currentPeriod }: ItemProps) => {
  const { colors } = useTheme();
  const isCurrent = period === currentPeriod;
  return (
    <Column $alignItems={'center'} $padding={[8, 0]} style={{ flex: 1 }}>
      <Typography.Caption $color={isCurrent ? colors.highlight : colors.gray60}>
        {period}
      </Typography.Caption>
      <Typography.Body
        $color={isCurrent ? colors.highlight : colors.gray90}
        $bold={isCurrent}
      >
        {subject}
      </Typography.Body>
    </Column>
  );
};

interface ProgressProps {
  start: Date;
  end: Date;
}

const TimeProgress = ({ start, end }: ProgressProps) => {
  const { colors } = useTheme();
  const animation = useRef(new Animated.Value(0)).current;
  const updateAnimation = () => {
    const percentage = calcPercentage(start, end);
    Animated.timing(animation, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    updateAnimation();
    const interval = setInterval(updateAnimation, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Column $gap={8}>
      <ProgressContainer>
        <ProgressBar
          style={{
            width: animation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          }}
        />
      </ProgressContainer>
      <Row $justifyContent={'space-between'} $fill>
        <Typography.Caption $color={colors.highlight}>
          {formatTime(start)}
        </Typography.Caption>
        <Typography.Caption $color={colors.gray40}>
          {formatTime(end)}
        </Typography.Caption>
      </Row>
    </Column>
  );
};

const ProgressBar = styled(Animated.View)`
  height: 4px;
  background-color: ${({ theme }) => theme.colors.highlight};
  position: absolute;
  border-radius: 2px;
  bottom: 0;
  left: 0;
`;

const ProgressContainer = styled.View`
  height: 4px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray40};
  border-radius: 2px;
  position: relative;
`;

const calcPercentage = (start: Date, end: Date) => {
  const now = new Date('2000-1-1T010:00');
  const totalMinutes = (end.getTime() - start.getTime()) / (1000 * 60);
  const elapsedMinutes = (now.getTime() - start.getTime()) / (1000 * 60);
  return Math.min(1, elapsedMinutes / totalMinutes);
};

const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  if (minutes === 0) {
    return `${formattedHours}시`;
  } else {
    return `${formattedHours}시 ${minutes}분`;
  }
};
