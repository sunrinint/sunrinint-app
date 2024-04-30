import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import BottomTabBar from '@components/layout/BottomTabBar';
import { useTheme } from 'styled-components/native';
import SchoolCardScreen from '@screens/SchoolCardScreen';
import ClubScreen from '@screens/ClubScreen';
import {
  ClubIcon,
  HomeIcon,
  SchoolCardIcon,
  SettingsIcon,
} from '@components/icons/bottom-tabs';
import SettingScreen from '@/screens/SettingScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      initialRouteName="Home"
      backBehavior={'initialRoute'}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.gray40,
        tabBarActiveTintColor: colors.gray90,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon color={color} fill={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Club"
        component={ClubScreen}
        options={{
          tabBarLabel: '동아리',
          tabBarIcon: ({ color, focused }) => (
            <ClubIcon color={color} fill={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="SchoolCard"
        component={SchoolCardScreen}
        options={{
          tabBarLabel: '학생증',
          tabBarIcon: ({ color, focused }) => (
            <SchoolCardIcon color={color} fill={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: '설정',
          tabBarIcon: ({ color, focused }) => (
            <SettingsIcon color={color} fill={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
