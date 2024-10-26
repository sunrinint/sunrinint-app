import { useSuspenseQuery } from '@tanstack/react-query';
import { getNoticeList } from '@lib/api/notice';

const useNoticeList = () => {
  const { data, refetch } = useSuspenseQuery({
    queryKey: ['noticeList'],
    queryFn: getNoticeList,
  });
  return {
    noticeList: data,
    refetchNoticeList: refetch,
  };
};

export default useNoticeList;
