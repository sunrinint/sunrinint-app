import { authClient } from '@lib/client';
import ScheduleState from '@lib/type/ScheduleState';

interface Response {
  state: ScheduleState;
}

export const getScheduleState = async () => {
  const res = await authClient.get<Response>('schedule/state');
  return res.data;
};
