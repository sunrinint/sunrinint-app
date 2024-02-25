import React, { Suspense } from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import NoticeListSection from '@components/section/notice/NoticeListSection';

const NoticeScreen = () => {
  return (
    <LayoutWithHeader title="공지사항" showBack>
      <Suspense fallback={<NoticeListSection.Skeleton />}>
        <NoticeListSection />
      </Suspense>
    </LayoutWithHeader>
  );
};

export default NoticeScreen;
