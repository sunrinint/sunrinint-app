import Meal from '@lib/type/Meal';
import mealClient from '../client/mealClient';
import MealResponse from '../type/MealResponse';
import { format } from 'date-fns';

export const getMeal = async () => {
  try {
    const date = new Date();
    const res = await mealClient.get<MealResponse<Meal>>('/meal/today');

    if (res.data.success === true) {
      if (res.data.data) {
        return {
          date: res.data.data.date,
          meals: res.data.data.meals,
        } as Meal;
      }
    }
    return {
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      meals: [],
    };
  } catch (e) {
    return {
      date: '',
      meals: [],
    } as Meal;
  }
};

export const getMealWeek = async (weekOffset = 0) => {
  const today = new Date();

  const currentWeekMonday = new Date(today);
  currentWeekMonday.setDate(today.getDate() - today.getDay() + 1);

  const targetMonday = new Date(currentWeekMonday);
  targetMonday.setDate(currentWeekMonday.getDate() + weekOffset * 7);

  const targetFriday = new Date(targetMonday);
  targetFriday.setDate(targetMonday.getDate() + 4);

  const dateFrom = format(targetMonday, 'yyyy-MM-dd');
  const dateTo = format(targetFriday, 'yyyy-MM-dd');
  const res = await mealClient.get<MealResponse<Meal[]>>('/meal/period', {
    params: {
      date_from: dateFrom,
      date_to: dateTo,
    },
  });

  if (res.data.success === true) {
    if (res.data.data) {
      const mealList = res.data.data;
      return mealList.map((meal: Meal) => ({
        date: meal.date,
        meals: meal.meals,
      })) as Meal[];
    }
  }
};
