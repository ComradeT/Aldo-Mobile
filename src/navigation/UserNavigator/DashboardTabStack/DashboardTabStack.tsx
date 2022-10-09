import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { bottomTabNavigatorOptions, bottomTabScreenOptions } from 'navigation/Navigator.options';
import AppRoutes from 'navigation/routes';
import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DashboardTabStackProps, UserNavigatorParams } from '../UserNavigator';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { FavoriteIcon, HomeIcon, ProfileIcon, SearchIcon } from 'assets/icons';
import FavoritesScreen from './FavoritesScreen';
import ProductsScreen from './ProductsScreen';

const DashboardTabStackNavigator = createBottomTabNavigator<DashboardStackParams>();

const DashboardTabStack: FC<DashboardTabStackProps> = () => {
  const insets = useSafeAreaInsets();

  return (
    <DashboardTabStackNavigator.Navigator
      backBehavior="history"
      screenOptions={bottomTabNavigatorOptions(insets)}
      initialRouteName={AppRoutes.HomeScreen}>
      <DashboardTabStackNavigator.Screen
        name={AppRoutes.HomeScreen}
        component={HomeScreen}
        options={bottomTabScreenOptions({ icon: HomeIcon, text: 'Главная' })}
      />
      <DashboardTabStackNavigator.Screen
        name={AppRoutes.ProductsScreen}
        component={ProductsScreen}
        options={bottomTabScreenOptions({ icon: SearchIcon, text: 'Услуги' })}
      />
      <DashboardTabStackNavigator.Screen
        name={AppRoutes.FavoritesScreen}
        component={FavoritesScreen}
        options={bottomTabScreenOptions({ icon: FavoriteIcon, text: 'Задачи' })}
      />
      <DashboardTabStackNavigator.Screen
        name={AppRoutes.ProfileScreen}
        component={ProfileScreen}
        options={bottomTabScreenOptions({ icon: ProfileIcon, text: 'Профиль' })}
      />
    </DashboardTabStackNavigator.Navigator>
  );
};

export type DashboardStackParams = UserNavigatorParams & {
  [AppRoutes.HomeScreen]: undefined;
  [AppRoutes.ProductsScreen]: undefined;
  [AppRoutes.FavoritesScreen]: undefined;
  [AppRoutes.ProfileScreen]: { profileId?: string };
};

export interface HomeScreenProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<UserNavigatorParams, AppRoutes.DashboardTabStack>,
    BottomTabNavigationProp<DashboardStackParams, AppRoutes.HomeScreen>
  >;
  route: RouteProp<DashboardStackParams, AppRoutes.HomeScreen>;
}
export interface ProductsScreenProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<UserNavigatorParams, AppRoutes.DashboardTabStack>,
    BottomTabNavigationProp<DashboardStackParams, AppRoutes.ProductsScreen>
  >;
  route: RouteProp<DashboardStackParams, AppRoutes.ProductsScreen>;
}
export interface FavoritesScreenProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<UserNavigatorParams, AppRoutes.DashboardTabStack>,
    BottomTabNavigationProp<DashboardStackParams, AppRoutes.FavoritesScreen>
  >;
  route: RouteProp<DashboardStackParams, AppRoutes.FavoritesScreen>;
}
export interface ProfileScreenProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<UserNavigatorParams, AppRoutes.DashboardTabStack>,
    BottomTabNavigationProp<DashboardStackParams, AppRoutes.ProfileScreen>
  >;
  route: RouteProp<DashboardStackParams, AppRoutes.ProfileScreen>;
}

export default DashboardTabStack;
