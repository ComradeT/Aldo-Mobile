import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { ProfileScreenProps } from '../DashboardTabStack';

const ProfileScreen: FC<ProfileScreenProps> = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
