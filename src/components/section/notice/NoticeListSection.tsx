import React, { Suspense } from 'react';
import { FlatList } from 'react-native';
import { Spacer, Wrapper } from '@components/atomic';
import Notice from '@components/common/Notice';
import useNoticeList from '@hooks/useNoticeList';

const NoticeListSection = () => {
  const { noticeList } = useNoticeList();

  return (
    <Wrapper $padding={[12]}>
      <FlatList
        data={noticeList}
        ItemSeparatorComponent={() => <Spacer $height={12} />}
        renderItem={({ item }) => (
          <Suspense fallback={<Notice.Skeleton />}>
            <Notice uuid={item.uuid} />
          </Suspense>
        )}
      />
    </Wrapper>
  );
};

const Skeleton = () => {
  return (
    <Wrapper $padding={[12]}>
      <Notice.Skeleton />
      <Spacer $height={12} />
      <Notice.Skeleton />
      <Spacer $height={12} />
      <Notice.Skeleton />
      <Spacer $height={12} />
      <Notice.Skeleton />
      <Spacer $height={12} />
      <Notice.Skeleton />
    </Wrapper>
  );
};

NoticeListSection.Skeleton = Skeleton;

export default NoticeListSection;
