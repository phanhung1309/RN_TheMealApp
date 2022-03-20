import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import MealItem from './MealItem';
import {MealsRoutes} from '../routes/MealsNavigationStack';
import {Meal} from '../models/Meal';

interface Props {
  displayedMeals: Meal[];
  navigation: any;
}

const MealList: React.FC<Props> = ({displayedMeals, navigation}) => {
  return (
    <View style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <MealItem
            title={item.title}
            durations={item.durations}
            complexity={item.complexity}
            affordability={item.affordability}
            imageUrl={item.imageUrl}
            onSelect={() =>
              navigation.navigate(MealsRoutes.MealDetail, {
                mealId: item.id,
                mealTitle: item.title,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
});
