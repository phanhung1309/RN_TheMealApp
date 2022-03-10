import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import MealsNavigationStack from './MealsNavigationStack';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

export enum RootRoutes {
  Meals = 'Meals',
  Favorites = 'Favorites',
}

export type RootStackParamList = {
  [RootRoutes.Meals]: undefined;
  [RootRoutes.Favorites]: undefined;
};

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export interface Props {}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={RootRoutes.Meals}
          component={BottomTabNavigator}
          options={screenOptions}
        />
        {MealsNavigationStack()}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
