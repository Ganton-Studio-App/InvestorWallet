import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
// import { RouteProp } from '@react-navigation/native';
const defaultNavOptions = {
  headerShown: false,
};
type AuthRoutes = {
  Login: undefined;
};
type HomeRoutes = {
  Dashboard: undefined;
};
const AuthStackNavigator = createStackNavigator<AuthRoutes>();
export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen name="Login" component={LoginScreen} />
    </AuthStackNavigator.Navigator>
  );
};

export type RootStackParamList = {
  Home: undefined;
  // Detail: { item: Item };
};

export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const HomeStackNavigator = createStackNavigator<HomeRoutes>();
export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <HomeStackNavigator.Screen name="Dashboard" component={DashboardScreen} />
    </HomeStackNavigator.Navigator>
  );
};
