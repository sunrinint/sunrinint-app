import { useSuspenseQuery } from '@tanstack/react-query';
import { getNoticeList } from '@lib/api/notice';

const useNoticeList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['noticeList'],
    queryFn: getNoticeList,
  });
  return {
    noticeList: data,
  };
};

export default useNoticeList;
