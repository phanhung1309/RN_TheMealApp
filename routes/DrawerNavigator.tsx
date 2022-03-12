import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import FiltersScreen from '../screens/FiltersScreen';

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
        options={{headerShown: false}}
      />
      <Drawer.Screen name={DrawerRoutes.Filters} component={FiltersScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
