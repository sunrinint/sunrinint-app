import { authClient } from '@lib/client';
import { Timetable, TimetableWeek } from '@lib/type/Timetable';

export const getTimetable = async () => {
  const res = await authClient.get<Timetable>('timetable');
  return res.data;
};

export const getTimetableWeek = async () => {
  const res = await authClient.get<TimetableWeek>('timetable/week');
  return res.data;
};
