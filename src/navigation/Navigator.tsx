import { NavigationContainer } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { StatusBar } from 'react-native';

import GuestNavigator from './GuestNavigator';
import UserNavigator from './UserNavigator';

const Navigator = () => {
  const isAuthenticated = false;
  const navigator = useMemo(
    () => (isAuthenticated ? <UserNavigator /> : <GuestNavigator />),
    [isAuthenticated],
  );
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      {navigator}
    </NavigationContainer>
  );
};

export default Navigator;
