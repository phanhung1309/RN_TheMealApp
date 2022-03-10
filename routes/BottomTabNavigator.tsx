import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MealsNavigationStack from './MealsNavigationStack';
import FavoritesScreen from '../screens/FavoritesScreen';
import {colors} from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export enum BottomTabRoutes {
  Meals = 'Meals',
  Favorites = 'Favorites',
}

export type BottomTabParamsList = {
  [BottomTabRoutes.Meals]: undefined;
  [BottomTabRoutes.Favorites]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamsList>();

const tabBarOptions = {
  tabBarStyle: {
    backgroundColor: colors.secondary,
  },
  tabBarActiveTintColor: 'orange',
  tabBarInactiveTintColor: 'white',
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={BottomTabRoutes.Meals}>
      <Tab.Screen
        name={BottomTabRoutes.Meals}
        component={MealsNavigationStack}
        options={{
          ...tabBarOptions,
          tabBarIcon: tabInfo => (
            <Icon name="restaurant" size={24} color={tabInfo.color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={BottomTabRoutes.Favorites}
        component={FavoritesScreen}
        options={{
          ...tabBarOptions,
          tabBarIcon: tabInfo => (
            <Icon name="star" size={24} color={tabInfo.color} />
          ),
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
