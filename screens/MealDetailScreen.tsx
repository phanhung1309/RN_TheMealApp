import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useMemo} from 'react';
import {mealData} from '../data/mealData';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsParamList, MealsRoutes} from '../routes/MealsNavigationStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import typography from '../styles/typography';

type Props = NativeStackScreenProps<MealsParamList, MealsRoutes.MealDetail>;

type ItemProps = {
  children: string;
};

const ListItem: React.FC<ItemProps> = ({children}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{children}</Text>
    </View>
  );
};

const MealDetailScreen: React.FC<Props> = ({route}) => {
  const displayedMeal = useMemo(() => {
    return mealData.find(meal => meal.id === route.params.mealId);
  }, [route.params.mealId]);

  const {imageUrl, durations, complexity, affordability, ingredients, steps} =
    displayedMeal;

  return (
    <ScrollView>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.mealInfo}>
          <Icon name="timer" size={12} /> {durations}m
        </Text>
        <Text style={styles.mealInfo}>
          <Icon name="check" size={12} /> {complexity.toUpperCase()}
        </Text>
        <Text style={styles.mealInfo}>
          <Icon name="person" size={12} /> {affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map(ingredient => (
        <ListItem key={ingredient}>{`- ${ingredient}`}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {steps.map((step, index) => (
        <ListItem key={step}>{`${index + 1}. ${step}`}</ListItem>
      ))}
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  mealInfo: {
    ...typography.primarySemiBold,
    marginTop: 4,
  },
  title: {
    ...typography.primaryBold,
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  listItemText: {
    ...typography.primarySemiBold,
  },
});
