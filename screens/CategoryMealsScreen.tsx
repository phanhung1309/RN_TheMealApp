import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsParamList, MealsRoutes} from '../routes/MealsNavigationStack';
import {categoriesData} from '../data/categoriesData';

type Props = NativeStackScreenProps<MealsParamList, MealsRoutes.CategoryMeals>;

const CategoryMealsScreen: React.FC<Props> = ({navigation, route}) => {
  const selectedCategory = categoriesData.find(
    cat => cat.id === route.params.categoryId,
  );

  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen: {selectedCategory.title}</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate(MealsRoutes.MealDetail)}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
