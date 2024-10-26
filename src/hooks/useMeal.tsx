import { useSuspenseQuery } from '@tanstack/react-query';
import { getMeal } from '@lib/api/meal';

const useMeal = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['meal'],
    queryFn: getMeal,
  });
  return {
    meal: data,
  };
};

export default useMeal;
