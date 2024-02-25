import { authClient } from '@lib/client';
import User, { UpdateUser } from '@lib/type/User';

export const getUser = async () => {
  const response = await authClient.get<User>('user/me');
  return response.data;
};

export const updateUser = async (data: UpdateUser) => {
  await authClient.patch('user/me', data);
};
