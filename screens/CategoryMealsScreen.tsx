import React, {useMemo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsParamList, MealsRoutes} from '../routes/MealsNavigationStack';
import {useAppSelector} from '../hooks';
import MealList from '../components/MealList';
import NotFound from '../components/NotFound';

type Props = NativeStackScreenProps<MealsParamList, MealsRoutes.CategoryMeals>;

const CategoryMealsScreen: React.FC<Props> = ({navigation, route}) => {
  const availableMeals = useAppSelector(state => state.meals.filteredMeals);

  const displayedMeals = useMemo(() => {
    return availableMeals.filter(meal =>
      meal.categoryIds.includes(route.params.categoryId),
    );
  }, [route.params.categoryId, availableMeals]);

  const hasMeals = displayedMeals.length === 0 || !displayedMeals;

  return hasMeals ? (
    <NotFound message="No meals found, maybe check your filters?" />
  ) : (
    <MealList displayedMeals={displayedMeals} navigation={navigation} />
  );
};

export default CategoryMealsScreen;
