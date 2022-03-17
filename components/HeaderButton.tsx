import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  onPress: () => void;
  name: string;
  size?: number;
  color?: string;
}

const HeaderButton: React.FC<Props> = ({
  name,
  size = 20,
  color = 'white',
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconButton}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  iconButton: {
    marginHorizontal: 16,
  },
});
