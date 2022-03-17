import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import FiltersScreen from '../screens/FiltersScreen';
import {colors} from '../styles/colors';
import HeaderDrawerMenuButton from '../components/HeaderDrawerMenuButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import typography from '../styles/typography';
import HeaderButton from '../components/HeaderButton';

export enum DrawerRoutes {
  MealsFav = 'MealsFav',
  Filters = 'Filters',
}

export type DrawerParamsList = {
  [DrawerRoutes.MealsFav]: undefined;
  [DrawerRoutes.Filters]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamsList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={DrawerRoutes.MealsFav}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          drawerLabel: 'Meals',
          drawerIcon: ({color}) => (
            <Icon name="set-meal" size={20} color={color} />
          ),
          drawerLabelStyle: {
            ...typography.primaryBold,
          },
          drawerActiveTintColor: colors.primary,
        }}
      />
      <Drawer.Screen
        name={DrawerRoutes.Filters}
        component={FiltersScreen}
        options={({navigation}) => ({
          headerTitle: 'Filters Meal',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerLeft: () => (
            <HeaderDrawerMenuButton onPress={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => (
            <HeaderButton name="ios-save" onPress={() => {}} />
          ),
          drawerIcon: ({color}) => (
            <Icon name="filter-alt" size={20} color={color} />
          ),
          drawerActiveTintColor: colors.primary,
        })}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
