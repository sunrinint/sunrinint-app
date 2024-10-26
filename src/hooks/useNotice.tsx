import { useSuspenseQuery } from '@tanstack/react-query';
import { getNotice } from '@lib/api/notice';

const useNotice = (uuid: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['notice', uuid],
    queryFn: () => getNotice(uuid),
  });
  return {
    notice: data,
  };
};

export default useNotice;
