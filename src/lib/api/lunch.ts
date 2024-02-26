import { authClient } from '@lib/client';
import Lunch from '@lib/type/Lunch';

export const getLunch = async () => {
  const res = await authClient.get<Lunch>('/lunch/demo');
  return {
    date: res.data.date,
    menu: res.data.menu,
  } as Lunch;
};
