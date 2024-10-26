import { useSuspenseQuery } from '@tanstack/react-query';
import { getTimetableWeek } from '@lib/api/timetable';
import { useEffect } from 'react';

const useTimetableWeek = () => {
  const { data, refetch } = useSuspenseQuery({
    queryKey: ['timetableWeek'],
    queryFn: () => getTimetableWeek(),
  });

  useEffect(() => {
    const interval = setInterval(() => refetch(), 1000 * 60 * 30);
    return () => clearInterval(interval);
  }, []);

  return {
    timetableWeek: data,
  };
};
export default useTimetableWeek;
