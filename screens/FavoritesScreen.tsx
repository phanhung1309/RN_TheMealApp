import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootRoutes, RootStackParamList} from '../routes/RootNavigation';
import {useAppSelector} from '../hooks';
import MealList from '../components/MealList';
import NotFound from '../components/NotFound';

type Props = NativeStackScreenProps<RootStackParamList, RootRoutes.Meals>;

const FavoritesScreen: React.FC<Props> = ({navigation}) => {
  const favMeals = useAppSelector(state => state.meals.favoriteMeals);

  const hasFavMeals = favMeals.length === 0 || !favMeals;

  return hasFavMeals ? (
    <NotFound message="No favorite meals found. Start add some!" />
  ) : (
    <MealList displayedMeals={favMeals} navigation={navigation} />
  );
};

export default FavoritesScreen;
