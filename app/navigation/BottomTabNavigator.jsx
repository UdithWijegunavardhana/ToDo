import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import SettingsScreen from '../screens/SettingsScreen';
import HomeStack from './Stacks/HomeStack';

const Tab = createBottomTabNavigator();

const getTabBarIcon = routeName => {
  let iconName = 'home';
  switch (routeName) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Settings':
      iconName = 'search';
      break;
  }

  return ({color, size}) => (
    <Feather name={iconName} color={color} size={size} />
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: getTabBarIcon(route.name),
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
