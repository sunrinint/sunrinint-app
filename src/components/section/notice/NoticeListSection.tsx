import React, { Suspense, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Spacer, Wrapper } from '@components/atomic';
import Notice from '@components/common/Notice';
import useNoticeList from '@hooks/useNoticeList';

const NoticeListSection = () => {
  const { noticeList, refetchNoticeList } = useNoticeList();
  const [refreshing, setRefreshing] = useState(false);
  return (
    <Wrapper $padding={[12]}>
      <FlatList
        style={{ height: '100%' }}
        data={noticeList}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              refetchNoticeList().then(() => setRefreshing(false));
            }}
          />
        }
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
