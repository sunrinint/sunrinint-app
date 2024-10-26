import { getPass } from '@lib/api/pass';
import { useSuspenseQuery } from '@tanstack/react-query';

const usePass = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['pass'],
    queryFn: getPass,
  });
  return {
    pass: data,
  };
};

export default usePass;
