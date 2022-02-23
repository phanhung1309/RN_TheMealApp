import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {}

const CategoriesScreen: React.FC<Props> = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>The Categories Screen</Text>
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
