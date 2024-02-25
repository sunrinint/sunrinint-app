import React, { Suspense } from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import Timetable from '@components/common/Timetable';
import { Column, Row } from '@components/atomic';
import { ActivityIndicator } from 'react-native';
import useUser from '@hooks/useUser';
import Typography from '@components/typography';
import { useTheme } from 'styled-components/native';

const TimetableScreen = () => {
  return (
    <LayoutWithHeader title="시간표" showBack>
      <Column $padding={[12]} $gap={12}>
        <Suspense fallback={<ActivityIndicator />}>
          <Title />
        </Suspense>
        <Suspense fallback={<Timetable.Skeleton />}>
          <Timetable />
        </Suspense>
      </Column>
    </LayoutWithHeader>
  );
};

const Title = () => {
  const { user } = useUser();
  const { colors } = useTheme();
  return (
    <Row $justifyContent={'center'} $fill>
      <Typography.Title $color={colors.gray90}>
        {user.grade}학년 {user.class}반
      </Typography.Title>
    </Row>
  );
};

export default TimetableScreen;
