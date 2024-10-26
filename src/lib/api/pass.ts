import { authClient } from '@lib/client';
import Pass from '@lib/type/Pass';

export const getPass = async () => {
  const res = await authClient.get<Pass>('pass');
  return res.data;
};
