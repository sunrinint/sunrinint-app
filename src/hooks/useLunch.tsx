import { useSuspenseQuery } from '@tanstack/react-query';
import { getLunch } from '@lib/api/lunch';

const useLunch = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['lunch'],
    queryFn: getLunch,
  });
  return {
    lunch: data,
  };
};

export default useLunch;
