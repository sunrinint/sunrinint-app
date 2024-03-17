import React, { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from '@lib/error-boundary';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
}

const SuspenseWithErrorBoundary = ({
  children,
  fallback,
  errorFallback,
}: Props) => {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseWithErrorBoundary;
