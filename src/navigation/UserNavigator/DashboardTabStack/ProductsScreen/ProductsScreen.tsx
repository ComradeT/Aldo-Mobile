import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { ProductsScreenProps } from '../DashboardTabStack';

const ProductsScreen: FC<ProductsScreenProps> = () => {
  return (
    <View>
      <Text>ProductsScreen</Text>
    </View>
  );
};

export default ProductsScreen;
