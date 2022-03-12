import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  onPress: () => void;
}

const HeaderDrawerMenuButton: React.FC<Props> = ({onPress}) => {
  return (
    <View style={styles.iconButton}>
      <Icon name="ios-menu" size={24} color="white" onPress={onPress} />
    </View>
  );
};

export default HeaderDrawerMenuButton;

const styles = StyleSheet.create({
  iconButton: {
    marginHorizontal: 16,
  },
});
