import axios from 'axios';
import { PUBLIC_API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultClient } from '@lib/client';

const authClient = axios.create({
  baseURL: PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

authClient.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorage.getItem('access');
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (_) => {},
);

authClient.interceptors.response.use(
  async (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      try {
        const refreshToken = await AsyncStorage.getItem('refresh');
        await defaultClient
          .get('auth/refresh', {
            headers: {
              Cookie: `Refresh=${refreshToken};`,
            },
          })
          .then((res) => {
            AsyncStorage.setItem('access', res.data.accessToken);
          });
        return authClient(error.config);
      } catch (e: any) {
        console.error(e.message);
      }
    }
    return Promise.reject(error);
  },
);

export default authClient;
