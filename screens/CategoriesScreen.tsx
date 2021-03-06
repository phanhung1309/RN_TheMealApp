import {FlatList} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsParamList, MealsRoutes} from '../routes/MealsNavigationStack';
import {categoriesData} from '../data/categoriesData';
import CategoryGridTile from '../components/CategoryGridTile';

type Props = NativeStackScreenProps<MealsParamList, MealsRoutes.Categories>;

const CategoriesScreen: React.FC<Props> = ({navigation}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      keyExtractor={item => item.id}
      data={categoriesData}
      renderItem={({item}) => (
        <CategoryGridTile
          image={item.image}
          title={item.title}
          onSelect={() =>
            navigation.navigate(MealsRoutes.CategoryMeals, {
              categoryId: item.id,
            })
          }
        />
      )}
    />
  );
};

export default CategoriesScreen;
