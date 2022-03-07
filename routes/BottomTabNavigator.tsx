import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MealsNavigationStack from './MealsNavigationStack';
import FavoritesScreen from '../screens/FavoritesScreen';

export enum BottomTabRoutes {
  Meals = 'Meals',
  Favorites = 'Favorites',
}

export type BottomTabParamsList = {
  [BottomTabRoutes.Meals]: undefined;
  [BottomTabRoutes.Favorites]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamsList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={BottomTabRoutes.Meals}>
      <Tab.Screen
        name={BottomTabRoutes.Meals}
        component={MealsNavigationStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={BottomTabRoutes.Favorites}
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
