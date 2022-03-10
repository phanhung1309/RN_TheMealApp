import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MealList from '../components/MealList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootRoutes, RootStackParamList} from '../routes/RootNavigation';
import {mealData} from '../data/mealData';

type Props = NativeStackScreenProps<RootStackParamList, RootRoutes.Meals>;

const FavoritesScreen: React.FC<Props> = ({navigation}) => {
  const displayedMeals = mealData.filter(
    meal => meal.id === 'm1' || meal.id === 'm2' || meal.id === 'm3',
  );
  return <MealList displayedMeals={displayedMeals} navigation={navigation} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
