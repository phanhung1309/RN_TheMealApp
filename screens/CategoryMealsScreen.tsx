import React, {useMemo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsParamList, MealsRoutes} from '../routes/MealsNavigationStack';
import {mealData} from '../data/mealData';
import MealList from '../components/MealList';

type Props = NativeStackScreenProps<MealsParamList, MealsRoutes.CategoryMeals>;

const CategoryMealsScreen: React.FC<Props> = ({navigation, route}) => {
  const displayedMeals = useMemo(() => {
    return mealData.filter(meal =>
      meal.categoryIds.includes(route.params.categoryId),
    );
  }, [route.params.categoryId]);

  return <MealList displayedMeals={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
