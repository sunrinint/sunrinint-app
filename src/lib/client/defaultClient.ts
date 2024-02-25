import axios from 'axios';
import { PUBLIC_API_URL } from '@env';

const defaultClient = axios.create({
  baseURL: PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default defaultClient;
