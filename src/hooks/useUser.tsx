import { useSuspenseQuery } from '@tanstack/react-query';
import { getUser } from '@lib/api/user';

const useUser = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return {
    user: data,
  };
};
export default useUser;
