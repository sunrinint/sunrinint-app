import { authClient } from '@lib/client';
import Lunch from '@lib/type/Lunch';

export const getLunch = async () => {
  try {
    const res = await authClient.get<Lunch>('/lunch/demo');
    return {
      date: res.data.date,
      menu: res.data.menu,
    } as Lunch;
  } catch (e) {
    return {
      date: '',
      menu: [],
    } as Lunch;
  }
};

export const getLunchWeek = async () => {
  const res = await authClient.get<Lunch[]>('/lunch/week/demo');
  return res.data.map((lunch) => ({
    date: lunch.date,
    menu: lunch.menu,
  })) as Lunch[];
};
