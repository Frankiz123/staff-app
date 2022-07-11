import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'screens/public/LoginScreen';
import { SCREENS } from 'navigators/constants';
import GoogleWebView from '../../screens/public/GoogleWebView';
const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS.LOGIN}>
      <Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={SCREENS.GOOGLE_WEB}
        component={GoogleWebView}
      />
    </Stack.Navigator>
  );
};
