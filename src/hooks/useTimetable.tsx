import { useSuspenseQuery } from '@tanstack/react-query';
import { getTimetable } from '@lib/api/timetable';
import { useEffect } from 'react';

const useTimetable = () => {
  const { data, refetch } = useSuspenseQuery({
    queryKey: ['timetable'],
    queryFn: getTimetable,
  });
  useEffect(() => {
    const interval = setInterval(() => refetch(), 1000 * 60 * 30);
    return () => clearInterval(interval);
  }, []);
  return {
    timetable: data,
  };
};

export default useTimetable;
