interface Meal {
  date: string;
  meals: Array<{
    meal: string;
    code?: string;
  }>;
}

export default Meal;
