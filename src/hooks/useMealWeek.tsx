import { useSuspenseQuery } from '@tanstack/react-query';
import { getMealWeek } from '@/lib/api/meal';

const useMealWeek = (page: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['mealWeek', page], // page를 queryKey에 포함하여 캐싱을 관리
    queryFn: () => getMealWeek(page), // queryFn은 함수여야 함
  });
  return {
    mealWeek: data,
  };
};

export default useMealWeek;
