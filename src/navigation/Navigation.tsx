import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
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

const HomeStackNavigator = createStackNavigator<HomeRoutes>();
export const HomeNavigator = () => {
	return (
		<HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
			<HomeStackNavigator.Screen name="Dashboard" component={DashboardScreen} />
		</HomeStackNavigator.Navigator>
	);
};
