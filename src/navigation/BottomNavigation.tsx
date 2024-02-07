import React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import BottomTabBar from '@components/layout/BottomTabBar';
import { useTheme } from 'styled-components/native';
import HomeIcon from '@/assets/icons/home_icon.svg';
import ClubIcon from '@/assets/icons/club_icon.svg';
import SchoolCardIcon from '@/assets/icons/school-card_icon.svg';
import SchoolCardScreen from '@screens/SchoolCardScreen';
import ClubScreen from '@screens/ClubScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Tab.Navigator
        tabBar={(props) => <BottomTabBar {...props} />}
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: colors.gray40,
          tabBarActiveTintColor: colors.gray10,
        }}
      >
        <Tab.Screen
          name="Club"
          component={ClubScreen}
          options={{
            tabBarLabel: '동아리',
            tabBarIcon: ({ color }) => <ClubIcon fill={color} />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
          }}
        />
        <Tab.Screen
          name="SchoolCard"
          component={SchoolCardScreen}
          options={{
            tabBarLabel: '학생증',
            tabBarIcon: ({ color }) => <SchoolCardIcon fill={color} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;
