import React, {useMemo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsParamList, MealsRoutes} from '../routes/MealsNavigationStack';
import MealList from '../components/MealList';
import {useAppSelector} from '../hooks';

type Props = NativeStackScreenProps<MealsParamList, MealsRoutes.CategoryMeals>;

const CategoryMealsScreen: React.FC<Props> = ({navigation, route}) => {
  const availableMeals = useAppSelector(state => state.meals.filteredMeals);

  const displayedMeals = useMemo(() => {
    return availableMeals.filter(meal =>
      meal.categoryIds.includes(route.params.categoryId),
    );
  }, [route.params.categoryId, availableMeals]);

  return <MealList displayedMeals={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
