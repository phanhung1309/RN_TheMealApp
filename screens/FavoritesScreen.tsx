import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MealList from '../components/MealList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootRoutes, RootStackParamList} from '../routes/RootNavigation';
import {useAppSelector} from '../hooks';
import typography from '../styles/typography';

type Props = NativeStackScreenProps<RootStackParamList, RootRoutes.Meals>;

const FavoritesScreen: React.FC<Props> = ({navigation}) => {
  const favMeals = useAppSelector(state => state.meals.favoriteMeals);

  const hasFavMeals = favMeals.length === 0 || !favMeals;

  return hasFavMeals ? (
    <View style={styles.screen}>
      <Text style={styles.content}>
        No favorite meals found. Start add some!
      </Text>
    </View>
  ) : (
    <MealList displayedMeals={favMeals} navigation={navigation} />
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    ...typography.primary,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
});
