import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MealsParamList, MealsRoutes} from '../routes/MealsNavigationStack';

type Props = NativeStackScreenProps<MealsParamList, MealsRoutes.Categories>;

const CategoriesScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>The Categories Screen</Text>
      <Button
        title="Go to Category Meals"
        onPress={() => navigation.navigate(MealsRoutes.CategoryMeals)}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: 'black',
  },
});
