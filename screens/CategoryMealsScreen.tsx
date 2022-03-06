import {StyleSheet, View, FlatList} from 'react-native';
import React, {useMemo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsParamList, MealsRoutes} from '../routes/MealsNavigationStack';
import {mealData} from '../data/mealData';
import MealItem from '../components/MealItem';

type Props = NativeStackScreenProps<MealsParamList, MealsRoutes.CategoryMeals>;

const CategoryMealsScreen: React.FC<Props> = ({navigation, route}) => {
  const displayedMeals = useMemo(() => {
    return mealData.filter(meal =>
      meal.categoryIds.includes(route.params.categoryId),
    );
  }, [route.params.categoryId]);

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
            onSelect={() => navigation.navigate(MealsRoutes.MealDetail)}
          />
        )}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
});
