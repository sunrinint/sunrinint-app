import Meal from '@lib/type/Meal';
import mealClient from '../client/mealClient';
import MealResponse from '../type/MealResponse';

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

export const getMealWeek = async () => {
  const res = await mealClient.get<MealResponse<Meal[]>>('/meal/week');
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
