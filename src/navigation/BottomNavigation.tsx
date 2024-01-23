import React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function BottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider
      style={{
        backgroundColor: 'white',
      }}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

export default BottomNavigation;
