import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsParamList, MealsRoutes} from '../routes/MealsNavigationStack';
import {categoriesData} from '../data/categoriesData';
import typography from '../styles/typography';

type Props = NativeStackScreenProps<MealsParamList, MealsRoutes.Categories>;

const CategoriesScreen: React.FC<Props> = () => {
  return (
    <FlatList
      numColumns={2}
      keyExtractor={item => item.id}
      data={categoriesData}
      renderItem={({item}) => (
        <View style={styles.categoryItem}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
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
