import { View } from 'react-native';
import React from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import { useTheme } from 'styled-components/native';

const TimeTableScreen = () => {
  const { colors } = useTheme();
  return (
    <LayoutWithHeader title="시간표" showBack>
      <View></View>
    </LayoutWithHeader>
  );
};

export default TimeTableScreen;
