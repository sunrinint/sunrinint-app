import { useSuspenseQuery } from '@tanstack/react-query';
import { getMealWeek } from '@/lib/api/meal';

const useMealWeek = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['mealWeek'],
    queryFn: getMealWeek,
  });
  return {
    mealWeek: data,
  };
};

export default useMealWeek;
