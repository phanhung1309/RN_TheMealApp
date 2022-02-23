import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

export enum MealsRoutes {
  Categories = 'Categories',
  CategoryMeals = 'CategoryMeals',
  MealDetail = 'MealDetail',
}

export type MealsParamList = {
  [MealsRoutes.Categories]: undefined;
  [MealsRoutes.CategoryMeals]: undefined;
  [MealsRoutes.MealDetail]: undefined;
};

const screenOptions: NativeStackNavigationOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#d31145',
  },
  headerTitleAlign: 'center',
};

const Stack = createNativeStackNavigator<MealsParamList>();

const MealsNavigationStack = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={MealsRoutes.Categories}>
      <Stack.Screen
        name={MealsRoutes.Categories}
        component={CategoriesScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name={MealsRoutes.CategoryMeals}
        component={CategoryMealsScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name={MealsRoutes.MealDetail}
        component={MealDetailScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigationStack;
