import { View } from 'react-native';
import React from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import { useTheme } from 'styled-components/native';

const MealScreen = () => {
  const { colors } = useTheme();
  return (
    <LayoutWithHeader title="급식" showBack>
      <View></View>
    </LayoutWithHeader>
  );
};

export default MealScreen;
