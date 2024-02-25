import { authClient } from '@lib/client';
import User from '@lib/type/User';

export const getUser = async () => {
  const response = await authClient.get<User>('user/me');
  return response.data;
};

interface UpdateUser {
  profileImage?: string;
  birthday?: string;
}

export const updateUser = async (data: UpdateUser) => {
  await authClient.patch('user/me', data);
};
