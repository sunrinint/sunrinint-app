import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { defaultClient } from '@lib/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async () => {
  await GoogleSignin.hasPlayServices();
  const { idToken } = await GoogleSignin.signIn();
  const res = await defaultClient.post('auth/app/google', {
    idToken: idToken,
  });
  return AsyncStorage.setItem('refresh', res.data.refreshToken);
};
