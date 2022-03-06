import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {colors} from '../styles/colors';
import {categoriesData} from '../data/categoriesData';
import {mealData} from '../data/mealData';
import HeaderButton from '../components/HeaderButton';

export enum MealsRoutes {
  Categories = 'Categories',
  CategoryMeals = 'CategoryMeals',
  MealDetail = 'MealDetail',
}

export type MealsParamList = {
  [MealsRoutes.Categories]: undefined;
  [MealsRoutes.CategoryMeals]: {
    categoryId: string;
  };
  [MealsRoutes.MealDetail]: {
    mealId: string;
  };
};

const screenOptions: NativeStackNavigationOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: colors.secondary,
  },
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
};

const Stack = createNativeStackNavigator<MealsParamList>();

const MealsNavigationStack = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={MealsRoutes.Categories}>
      <Stack.Screen
        name={MealsRoutes.Categories}
        component={CategoriesScreen}
        options={{...screenOptions, title: 'Meal Categories'}}
      />
      <Stack.Screen
        name={MealsRoutes.CategoryMeals}
        component={CategoryMealsScreen}
        options={({route}) => {
          const selectedCategory = categoriesData.find(
            cat => cat.id === route.params.categoryId,
          );
          return {...screenOptions, title: selectedCategory.title};
        }}
      />
      <Stack.Screen
        name={MealsRoutes.MealDetail}
        component={MealDetailScreen}
        options={({route}) => {
          const selectedMeal = mealData.find(
            meal => meal.id === route.params.mealId,
          );
          return {
            ...screenOptions,
            title: selectedMeal.title,
            headerTitleStyle: {fontSize: 15},
            headerRight: () => <HeaderButton onPress={() => {}} />,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigationStack;
