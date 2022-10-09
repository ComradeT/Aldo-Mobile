import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { SignInScreenProps } from '../GuestNavigator';

const SignInScreen: FC<SignInScreenProps> = () => {
  return (
    <View>
      <Text>SignInScreen</Text>
    </View>
  );
};

export default SignInScreen;
