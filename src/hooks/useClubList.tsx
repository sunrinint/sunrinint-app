import { ClubType } from '@lib/type/Club';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getClubList } from '@lib/api/club';

const useClubList = (department: ClubType) => {
  const { data, refetch } = useSuspenseQuery({
    queryKey: ['clubList', department],
    queryFn: () => getClubList(department),
  });
  return {
    clubList: data,
    refetchClubList: refetch,
  };
};
export default useClubList;
