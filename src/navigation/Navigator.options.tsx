import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StackNavigationOptions } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { SvgProps } from 'react-native-svg';
import colors from 'themes/light';

interface TabBarIcon {
  focused: boolean;
  color: string;
  size: number;
}

export const DEFAULT_SCREEN_OPTIONS = {
  headerShown: false,
  cardShadowEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
} as StackNavigationOptions;

export const DISABLED_HANDLER_SCREEN_OPTIONS = {
  gestureEnabled: false,
  headerShown: false,
  cardShadowEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
} as StackNavigationOptions;

export const MODAL_SCREEN_OPTIONS = {
  headerShown: false,
  cardStyle: {
    shadowColor: 'transparent',
    backgroundColor: 'transparent',
  },
  ...TransitionPresets.ModalSlideFromBottomIOS,
} as StackNavigationOptions;

export const bottomTabNavigatorOptions = (insets: EdgeInsets): BottomTabNavigationOptions => {
  return {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      borderTopWidth: 0,
      paddingBottom: insets.bottom ? 20 : 0,
      height: insets.bottom ? insets.bottom + 60 : 70,
      // backgroundColor: colors.white,
    },
  };
};

export const bottomTabScreenOptions = ({
  text,
  icon: Icon,
  activeIcon: ActiveIcon,
  tabBarVisible = true,
}: {
  text?: string;
  icon: FC<SvgProps>;
  activeIcon?: FC<SvgProps>;
  tabBarVisible?: boolean;
}) => {
  return {
    tabBarLabel: () => {
      return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{ paddingBottom: 16 }}>{text && <Text>{text}</Text>}</View>
      );
    },
    tabBarIcon: ({ focused }: TabBarIcon) => {
      return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{ paddingTop: 7, paddingBottom: 4 }}>
          {ActiveIcon && focused ? (
            <ActiveIcon color={colors.primary} />
          ) : (
            <Icon color={focused ? colors.primary : colors.grey[1]} />
          )}
        </View>
      );
    },
    tabBarVisible,
    ...TransitionPresets.SlideFromRightIOS,
  };
};
