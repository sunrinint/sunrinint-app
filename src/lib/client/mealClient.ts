import axios from 'axios';
import { PUBLIC_MEAL_API_URL } from '@env';

const mealClient = axios.create({
  baseURL: PUBLIC_MEAL_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mealClient;
