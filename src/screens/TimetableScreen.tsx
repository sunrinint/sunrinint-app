import React, { Suspense } from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import Timetable from '@components/common/Timetable';
import { Column, Row } from '@components/atomic';
import { ActivityIndicator } from 'react-native';
import useUser from '@hooks/useUser';
import Typography from '@components/typography';
import styled, { useTheme } from 'styled-components/native';
import {SkeletonContent} from '@components/skeleton/SkeletonContent';

const TimetableScreen = () => {
  return (
    <LayoutWithHeader title="시간표" showBack>
      <Column $padding={[12]} $gap={12}>
        <Suspense fallback={<Title.Skeleton />}>
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

const Skeleton = () => {
    return (
        <Row $fill $padding={[8,0]} $justifyContent={'center'} $alignItems={'center'}>
            <SkeletonTitle />
        </Row>
    );
};

Title.Skeleton = Skeleton;

export default TimetableScreen;

const SkeletonTitle = styled.View`
    background-color: ${({ theme }) => theme.colors.gray30};
    border-radius: 100px;
    width: 128px;
    height: 20px;
`;
