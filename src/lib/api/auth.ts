import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { defaultClient } from '@lib/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async () => {
  await GoogleSignin.hasPlayServices();
  const { idToken } = await GoogleSignin.signIn();
  try {
    const res = await defaultClient.post('auth/app/google', {
      idToken: idToken,
    });
    return AsyncStorage.setItem('refresh', res.data.refreshToken);
  } catch (error) {
    console.error("Server error:", error.response ? error.response.data : error.message); // Log only the server error
    throw error;
  }
};
