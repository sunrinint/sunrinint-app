import React from 'react';
import {Animated, SafeAreaView} from 'react-native';
import Header from '@components/layout/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header logo={true} />
    </SafeAreaView>
  );
};

export default HomeScreen;
