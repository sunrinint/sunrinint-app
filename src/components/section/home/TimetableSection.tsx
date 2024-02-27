import React, { useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Card } from '../../atomic/Card';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Column, Row } from '@components/atomic';
import Typography from '@components/typography';
import { Animated } from 'react-native';
import useTimetable from '@hooks/useTimetable';
import { SkeletonContent } from '@components/skeleton/SkeletonContent';

type tabScreenProp = StackNavigationProp<RootStackParamList, 'Tab'>;

const TimeTableSection = () => {
  const navigation = useNavigation<tabScreenProp>();
  const { colors } = useTheme();
  const { timetable } = useTimetable();
  const currentTime = timetable.timetable[timetable.period] as {
    teacher: string;
    subject: string;
    room: string;
  };
  return (
    <Card.CardContainer
      onPress={() => {
        navigation.navigate('TimeTable');
      }}
    >
      <Card.CardTop>
        <Column $gap={2}>
          <Typography.SemiLabel $color={colors.gray90}>
            {`${timetable.period}교시,`}{' '}
            <Typography.SemiLabel $color={colors.highlight}>
              {currentTime.subject}
            </Typography.SemiLabel>{' '}
            시간
          </Typography.SemiLabel>
          <Typography.Body $color={colors.gray60}>
            {`${currentTime.room} ${currentTime.teacher} 선생님`}
          </Typography.Body>
        </Column>
      </Card.CardTop>
      <Row $gap={4} $fill>
        {timetable.timetable.map(
          (item, index) =>
            item &&
            typeof item !== 'number' && (
              <PeriodItem
                key={index}
                period={index}
                currentPeriod={timetable.period}
                subject={item.subject}
              />
            ),
        )}
      </Row>
      <TimeProgress
        start={timetable.timeOfDay[0]}
        end={timetable.timeOfDay.slice(-1)[0]}
      />
    </Card.CardContainer>
  );
};

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
  start: string;
  end: string;
}

const TimeProgress = ({ start, end }: ProgressProps) => {
  const { colors } = useTheme();
  const animation = useRef(new Animated.Value(0)).current;
  const { timetable } = useTimetable();
  useEffect(() => {
    const [_, ...subjects] = timetable.timetable;
    const subjectsLength = subjects.filter((item) => item).length;
    const percentage = (timetable.period - 0.5) / subjectsLength;
    Animated.timing(animation, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [timetable]);

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

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <Column $gap={4} $alignItems={'flex-start'}>
        <Row $gap={8} $padding={[4, 0]}>
          <SkeletonContent $width={48} $height={20} />
          <SkeletonContent $width={80} $height={20} />
        </Row>
        <Row $gap={4} $padding={[4, 0]}>
          <SkeletonContent $width={32} $height={12} />
          <SkeletonContent $width={80} $height={12} />
        </Row>
      </Column>
      <Row $alignItems={'flex-start'} $justifyContent={'space-between'}>
        <Column
          $padding={[4, 0]}
          $justifyContent={'center'}
          $alignItems={'center'}
        >
          <Row
            $padding={[4, 4]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={32} $height={12} />
          </Row>
          <Row
            $padding={[4, 0]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={40} $height={16} />
          </Row>
        </Column>
        <Column
          $padding={[4, 0]}
          $justifyContent={'center'}
          $alignItems={'center'}
        >
          <Row
            $padding={[4, 4]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={32} $height={12} />
          </Row>
          <Row
            $padding={[4, 0]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={40} $height={16} />
          </Row>
        </Column>
        <Column
          $padding={[4, 0]}
          $justifyContent={'center'}
          $alignItems={'center'}
        >
          <Row
            $padding={[4, 4]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={32} $height={12} />
          </Row>
          <Row
            $padding={[4, 0]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={40} $height={16} />
          </Row>
        </Column>
        <Column
          $padding={[4, 0]}
          $justifyContent={'center'}
          $alignItems={'center'}
        >
          <Row
            $padding={[4, 4]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={32} $height={12} />
          </Row>
          <Row
            $padding={[4, 0]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={40} $height={16} />
          </Row>
        </Column>
        <Column
          $padding={[4, 0]}
          $justifyContent={'center'}
          $alignItems={'center'}
        >
          <Row
            $padding={[4, 4]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={32} $height={12} />
          </Row>
          <Row
            $padding={[4, 0]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={40} $height={16} />
          </Row>
        </Column>
        <Column
          $padding={[4, 0]}
          $justifyContent={'center'}
          $alignItems={'center'}
        >
          <Row
            $padding={[4, 4]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={32} $height={12} />
          </Row>
          <Row
            $padding={[4, 0]}
            $justifyContent={'center'}
            $alignItems={'center'}
          >
            <SkeletonContent $width={40} $height={16} />
          </Row>
        </Column>
      </Row>
      <Row $padding={[4, 0]}>
        <SkeletonContent $height={12} />
      </Row>
    </SkeletonContainer>
  );
};

TimeTableSection.Skeleton = Skeleton;

const SkeletonContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray10};
  padding: 20px 20px;
  border-radius: 8px;
  gap: 12px;
`;

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

const formatTime = (date: string) => {
  const [hours, minutes] = date.split(':').map((str) => parseInt(str, 10));

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  if (minutes === 0) {
    return `${formattedHours}시`;
  } else {
    return `${formattedHours}시 ${minutes}분`;
  }
};

export default TimeTableSection;
