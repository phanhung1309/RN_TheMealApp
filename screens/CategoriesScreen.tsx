import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {}

const CategoriesScreen: React.FC<Props> = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
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
});
