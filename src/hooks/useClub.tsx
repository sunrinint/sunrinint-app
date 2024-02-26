import { getClub } from '@lib/api/club';
import { useSuspenseQuery } from '@tanstack/react-query';

const useClub = (id: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['club', id],
    queryFn: () => getClub(id),
  });
  return {
    club: data,
  };
};

export default useClub;
