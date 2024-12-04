import React, { useEffect } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Card } from '../../atomic/Card';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Column, Row } from '@components/atomic';
import Typography from '@components/typography';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import useTimetable from '@hooks/useTimetable';
import { SkeletonContent } from '@components/skeleton/SkeletonContent';
import useScheduleState from '@hooks/useScheduleState';

type tabScreenProp = StackNavigationProp<RootStackParamList, 'Tab'>;

const TimeTableSection = () => {
  const navigation = useNavigation<tabScreenProp>();
  const { colors } = useTheme();
  const { timetable } = useTimetable();
  const currentTime = timetable.timetable
    ? (timetable.timetable[timetable.period] as {
        teacher: string;
        subject: string;
        room: string;
      })
    : { teacher: '', subject: '', room: '' };

  const { state } = useScheduleState();
  return (
    <Card.CardContainer
      onPress={() => {
        navigation.navigate('TimeTable');
      }}
    >
      <Card.CardTop>
        <Column $gap={2}>
          {state === 'DURING_CLASSES' ? (
            <Typography.SemiLabel $color={colors.gray90}>
              {`${timetable.period}교시,`}{' '}
              <Typography.SemiLabel $color={colors.highlight}>
                {currentTime.subject}
              </Typography.SemiLabel>
              시간
            </Typography.SemiLabel>
          ) : (
            <Typography.Label $bold $color={colors.gray90}>
              {state === 'BEFORE_CLASSES' && '현재는 등교 전입니다'}
              {state === 'AFTER_SCHOOL' && '방과 후'}
            </Typography.Label>
          )}
          <Typography.Body $color={colors.gray60}>
            {state === 'DURING_CLASSES' &&
              `${currentTime.room ? currentTime.room + ' ' : ''}${currentTime.teacher} 선생님`}
            {state === 'BEFORE_CLASSES' && '등교시간 : 8시 30분'}
            {(state === 'AFTER_SCHOOL' || state === 'WEEKEND_OR_HOLIDAY') &&
              '현재는 수업시간이 아닙니다'}
          </Typography.Body>
        </Column>
      </Card.CardTop>
      {state !== 'WEEKEND_OR_HOLIDAY' && (
        <>
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
        </>
      )}
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
        {subject[0] + subject[1]}{subject.length > 2 ? subject[3] : ''}
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
  const animation = useSharedValue(0);
  const { timetable } = useTimetable();
  const { state } = useScheduleState();

  useEffect(() => {
    const [_, ...subjects] = timetable.timetable;
    const subjectsLength = subjects.filter((item) => item).length;
    const percentage =
      state === 'AFTER_SCHOOL' ? 1 : (timetable.period - 0.5) / subjectsLength;

    animation.value = withTiming(percentage, {
      duration: 1000,
      easing: Easing.linear,
    });
  }, [timetable]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${animation.value * 100}%`,
    };
  });

  return (
    <Column $gap={8}>
      <ProgressContainer>
        <ProgressBar style={animatedStyle} />
      </ProgressContainer>
      <Row $justifyContent={'space-between'} $fill>
        <Typography.Caption $color={colors.highlight}>
          {formatTime(start)}
        </Typography.Caption>
        <Typography.Caption
          $color={state === 'AFTER_SCHOOL' ? colors.highlight : colors.gray40}
        >
          {formatTime(addFiftyMinutesAndFormat(end))}
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
TimeTableSection.Error = Skeleton;

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

const addFiftyMinutesAndFormat = (date: string) => {
  const [hours, minutes] = date.split(':').map((str) => parseInt(str, 10));
  const newMinutes = minutes + 50;
  const newHours = hours + Math.floor(newMinutes / 60);
  const formattedMinutes = newMinutes % 60;
  return `${newHours}:${formattedMinutes}`;
};

export default TimeTableSection;
