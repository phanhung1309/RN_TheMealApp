import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import {colors} from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderDrawerMenuButton from '../components/HeaderDrawerMenuButton';

export enum BottomTabRoutes {
  Meals = 'Meals',
  Favorites = 'Favorites',
}

export type BottomTabParamsList = {
  [BottomTabRoutes.Meals]: undefined;
  [BottomTabRoutes.Favorites]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamsList>();

const headerOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: colors.secondary,
  },
};

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
        component={CategoriesScreen}
        options={({navigation}) => ({
          ...headerOptions,
          ...tabBarOptions,
          tabBarIcon: tabInfo => (
            <Icon name="restaurant" size={24} color={tabInfo.color} />
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <HeaderDrawerMenuButton onPress={() => navigation.toggleDrawer()} />
          ),
        })}
      />
      <Tab.Screen
        name={BottomTabRoutes.Favorites}
        component={FavoritesScreen}
        options={{
          ...headerOptions,
          ...tabBarOptions,
          tabBarIcon: tabInfo => (
            <Icon name="star" size={24} color={tabInfo.color} />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
