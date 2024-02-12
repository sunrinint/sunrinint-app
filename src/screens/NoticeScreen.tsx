import { View } from 'react-native';
import React from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import styled, { useTheme } from 'styled-components/native';
import Notice from '@/components/common/Notice';

const NoticeScreen = () => {
  const { colors } = useTheme();
  return (
    <LayoutWithHeader title="공지사항" showBack>
      <NoticeList>
        <Notice
          title="2023 선린제 개최 및 안내"
          date="2023-09-14"
          content="안녕하세요, 선린인터넷고등학교 118대 학생회 BackUP입니다. 2023년 9월 15일, 드디어 2023 선린제가 개최됩니다!

        모든 참가자분들께 세 번째 페이지의 스탬프가 지급될 예정이며, 스탬프를 15개 이상 모아야 출석이 인정되며 간식과 음료가 지급됩니다. (간식은 선착순이며, 소진 시 지급이 종료될 수 있습니다)"
        />
        <Notice
          title="2023 선린제 개최 및 안내"
          date="2023-09-14"
          content="안녕하세요, 선린인터넷고등학교 118대 학생회 BackUP입니다. 2023년 9월 15일, 드디어 2023 선린제가 개최됩니다!

        모든 참가자분들께 세 번째 페이지의 스탬프가 지급될 예정이며, 스탬프를 15개 이상 모아야 출석이 인정되며 간식과 음료가 지급됩니다. (간식은 선착순이며, 소진 시 지급이 종료될 수 있습니다)"
        />
        <Notice
          title="2023 선린제 개최 및 안내"
          date="2023-09-14"
          content="안녕하세요, 선린인터넷고등학교 118대 학생회 BackUP입니다. 2023년 9월 15일, 드디어 2023 선린제가 개최됩니다!

        모든 참가자분들께 세 번째 페이지의 스탬프가 지급될 예정이며, 스탬프를 15개 이상 모아야 출석이 인정되며 간식과 음료가 지급됩니다. (간식은 선착순이며, 소진 시 지급이 종료될 수 있습니다)"
        />
      </NoticeList>
    </LayoutWithHeader>
  );
};

const NoticeList = styled.View`
  flex: 1;
  gap: 12px;
  padding: 12px;
`;

export default NoticeScreen;
