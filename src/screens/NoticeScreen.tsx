import { View } from 'react-native';
import React from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import { useTheme } from 'styled-components/native';

const NoticeScreen = () => {
  const { colors } = useTheme();
  return (
    <LayoutWithHeader title="공지사항" showBack>
      <View></View>
    </LayoutWithHeader>
  );
};

export default NoticeScreen;
