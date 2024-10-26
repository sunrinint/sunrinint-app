import { authClient } from '@lib/client';
import Notice from '@lib/type/Notice';

export const getNoticeList = async () => {
  const response = await authClient.get<Notice[]>('/notice');
  return response.data;
};

export const getNotice = async (uuid: string) => {
  const response = await authClient.get<Notice>(`/notice/${uuid}`);
  return response.data;
};
