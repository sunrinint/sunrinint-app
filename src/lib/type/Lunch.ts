interface Lunch {
  date: string;
  menu: Array<{
    name: string;
    code?: string;
  }>;
}

export default Lunch;
