import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { FavoritesScreenProps } from '../DashboardTabStack';

const FavoritesScreen: FC<FavoritesScreenProps> = () => {
  return (
    <View>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

export default FavoritesScreen;
