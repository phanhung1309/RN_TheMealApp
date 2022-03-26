import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import typography from '../styles/typography';

interface Props {
  message: string;
}

const NotFound: React.FC<Props> = ({message}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/alert.png')} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '50%',
  },
  text: {
    ...typography.primary,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    marginTop: 20,
  },
});
