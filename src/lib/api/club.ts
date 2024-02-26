import { authClient } from '@lib/client';
import Club, { ClubType } from '@lib/type/Club';

export const getClubList = async (department: ClubType) => {
  const res = await authClient.get<Club[]>('club', {
    params: {
      department,
    },
  });
  return res.data;
};

export const getClub = async (id: string) => {
  const res = await authClient.get<Club>(`club/${id}`);
  return res.data;
};
