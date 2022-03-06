import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import typography from '../styles/typography';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title: string;
  durations: number;
  complexity: string;
  affordability: string;
  imageUrl: string;
  onSelect: () => void;
}

const MealItem: React.FC<Props> = ({
  title,
  durations,
  complexity,
  affordability,
  imageUrl,
  onSelect,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelect}>
        <View>
          <View style={[styles.mealRow, styles.mealHeader]}>
            <ImageBackground
              source={{uri: imageUrl}}
              style={styles.bgImage}
              resizeMode="cover">
              <Text style={styles.title}>{title}</Text>
            </ImageBackground>
          </View>
          <View style={[styles.mealRow, styles.mealDetails]}>
            <Text style={styles.mealInfo}>
              <Icon name="timer" size={12} /> {durations}m
            </Text>
            <Text style={styles.mealInfo}>
              <Icon name="check" size={12} /> {complexity.toUpperCase()}
            </Text>
            <Text style={styles.mealInfo}>
              <Icon name="person" size={12} /> {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    height: 250,
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 8,
    marginBottom: 32,
    overflow: 'hidden',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '90%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    ...typography.primarySemiBold,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.1,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  mealInfo: {
    ...typography.primarySemiBold,
    marginTop: 4,
  },
});
