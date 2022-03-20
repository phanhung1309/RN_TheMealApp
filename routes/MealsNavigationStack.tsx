import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {colors} from '../styles/colors';
import {categoriesData} from '../data/categoriesData';
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
    mealTitle: string;
    toggleFav: () => void;
    isFavMeal: boolean;
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
    <Stack.Group>
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
          return {
            ...screenOptions,
            title: route.params.mealTitle,
            headerTitleStyle: {fontSize: 15},
            headerRight: () => (
              <HeaderButton
                name="ios-star"
                onPress={route.params.toggleFav}
                color={route.params.isFavMeal ? 'orange' : 'white'}
              />
            ),
          };
        }}
      />
    </Stack.Group>
  );
};

export default MealsNavigationStack;
