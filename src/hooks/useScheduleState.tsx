import { useEffect } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getScheduleState } from '@lib/api/schedule';

const useScheduleState = () => {
  const { data, refetch } = useSuspenseQuery({
    queryKey: ['schedule-state'],
    queryFn: getScheduleState,
  });
  useEffect(() => {
    const interval = setInterval(
      () => {
        refetch().then();
      },
      1000 * 60 * 10,
    );
    return () => clearInterval(interval);
  }, []);
  return {
    state: data?.state,
  };
};

export default useScheduleState;
