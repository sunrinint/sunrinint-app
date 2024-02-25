import { authClient } from '@lib/client';
import { Timetable } from '@lib/type/Timetable';

export const getTimetable = async () => {
  const res = await authClient.get<Timetable>('timetable');
  return res.data;
};

export const getTimetableWeek = async () => {};
