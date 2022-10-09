import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { DEFAULT_SCREEN_OPTIONS } from 'navigation/Navigator.options';
import AppRoutes from 'navigation/routes';
import React from 'react';

import SignInScreen from './SignInScreen';

const GuestStack = createStackNavigator<GuestNavigatorParams>();

const GuestNavigator = () => {
  return (
    <GuestStack.Navigator initialRouteName={AppRoutes.SignInScreen}>
      <GuestStack.Screen
        name={AppRoutes.SignInScreen}
        component={SignInScreen}
        options={DEFAULT_SCREEN_OPTIONS}
      />
    </GuestStack.Navigator>
  );
};

export type GuestNavigatorParams = {
  [AppRoutes.SignInScreen]: undefined;
};

export interface SignInScreenProps {
  navigation: StackNavigationProp<GuestNavigatorParams, AppRoutes.SignInScreen>;
  route: RouteProp<GuestNavigatorParams, AppRoutes.SignInScreen>;
}

export default GuestNavigator;
