import Lunch from '@lib/type/Lunch';
import mealClient from '../client/mealClient';
import LunchResponse from '../type/LunchResponse';

export const getLunch = async () => {
  try {
    const date = new Date();
    const res = await mealClient.get<LunchResponse<Lunch>>('/lunch');

    if (res.data.success === true) {
      if (res.data.data) {
        console.log(res.data.data);
        return {
          date: res.data.data.date,
          meals: res.data.data.meals,
        } as Lunch;
      }
    }
    return {
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      meals: [],
    };
  } catch (e) {
    console.error(e);
    return {
      date: '',
      meals: [],
    } as Lunch;
  }
};

export const getLunchWeek = async () => {
  const res = await mealClient.get<LunchResponse<Lunch[]>>('/lunch/week/');
  if (res.data.success === true) {
    if (res.data.data) {
      const mealList = res.data.data;
      return mealList.map((lunch) => ({
        date: lunch.date,
        meals: lunch.meals,
      })) as Lunch[];
    }
  }
};
