import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { HomeScreenProps } from '../DashboardTabStack';

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
