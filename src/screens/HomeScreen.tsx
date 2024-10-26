import React, { Suspense } from 'react';
import LayoutWithHeader from '@components/layout/LayoutWithHeader';
import styled from 'styled-components/native';
import {
  MealSection,
  NoticeSection,
  TimetableSection,
} from '@components/section/home';
import { SuspenseWithErrorBoundary } from '@lib/error-boundary';

const HomeScreen = () => {
  return (
    <LayoutWithHeader logo>
      <Container>
        <Suspense fallback={<NoticeSection.Skeleton />}>
          <NoticeSection />
        </Suspense>
        <SuspenseWithErrorBoundary
          fallback={<TimetableSection.Skeleton />}
          errorFallback={<TimetableSection.Error />}
        >
          <TimetableSection />
        </SuspenseWithErrorBoundary>
        <Suspense fallback={<MealSection.Skeleton />}>
          <MealSection />
        </Suspense>
      </Container>
    </LayoutWithHeader>
  );
};

const Container = styled.View`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export default HomeScreen;
