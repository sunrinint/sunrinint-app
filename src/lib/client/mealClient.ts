import axios from 'axios';
import { PUBLIC_MEAL_API_URL } from '@env';

const mealClient = axios.create({
  baseURL: 'http://140.238.24.144:8030',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mealClient;
