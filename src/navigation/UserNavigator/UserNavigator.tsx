import { RouteProp, ParamListBase } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { DEFAULT_SCREEN_OPTIONS } from 'navigation/Navigator.options';
import AppRoutes from 'navigation/routes';
import React from 'react';

import DashboardTabStack, { DashboardStackParams } from './DashboardTabStack/DashboardTabStack';

const UserStack = createStackNavigator<UserNavigatorParams>();

const UserNavigator = () => {
  return (
    <UserStack.Navigator initialRouteName={AppRoutes.DashboardTabStack}>
      <UserStack.Screen
        name={AppRoutes.DashboardTabStack}
        component={DashboardTabStack}
        options={DEFAULT_SCREEN_OPTIONS}
      />
    </UserStack.Navigator>
  );
};

export type SubNavigator<T extends ParamListBase> = {
  [K in keyof T]: { screen: K; params?: T[K] };
}[keyof T];

export type UserNavigatorParams = {
  [AppRoutes.DashboardTabStack]: SubNavigator<DashboardStackParams>;
};

export interface DashboardTabStackProps {
  navigation: StackNavigationProp<UserNavigatorParams, AppRoutes.DashboardTabStack>;
  route: RouteProp<UserNavigatorParams, AppRoutes.DashboardTabStack>;
}

export default UserNavigator;
