import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsParamList, MealsRoutes} from '../routes/MealsNavigationStack';
import {categoriesData} from '../data/categoriesData';
import typography from '../styles/typography';

type Props = NativeStackScreenProps<MealsParamList, MealsRoutes.Categories>;

const CategoriesScreen: React.FC<Props> = ({navigation}) => {
  return (
    <FlatList
      numColumns={2}
      keyExtractor={item => item.id}
      data={categoriesData}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() =>
            navigation.navigate(MealsRoutes.CategoryMeals, {
              categoryId: item.id,
            })
          }>
          <View>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    padding: 15,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
  text: {
    ...typography.primarySemiBold,
  },
});
