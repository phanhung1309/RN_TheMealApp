import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MealList from '../components/MealList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootRoutes, RootStackParamList} from '../routes/RootNavigation';
import {useAppSelector} from '../hooks';

type Props = NativeStackScreenProps<RootStackParamList, RootRoutes.Meals>;

const FavoritesScreen: React.FC<Props> = ({navigation}) => {
  const favMeals = useAppSelector(state => state.meals.favoriteMeals);

  return <MealList displayedMeals={favMeals} navigation={navigation} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
