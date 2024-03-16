import { useSuspenseQuery } from '@tanstack/react-query';
import { getLunchWeek } from '@lib/api/lunch';

const useLunchWeek = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['lunchWeek'],
    queryFn: getLunchWeek,
  });
  return {
    lunchWeek: data,
  };
};

export default useLunchWeek;
