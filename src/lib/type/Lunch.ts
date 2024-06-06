interface Lunch {
  date: string;
  meals: Array<{
    meal: string;
    code?: string;
  }>;
}

export default Lunch;
