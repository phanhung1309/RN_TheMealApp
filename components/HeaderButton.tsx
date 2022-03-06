import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  onPress: () => void;
}

const HeaderButton: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="ios-star" size={20} color="white" />
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({});
