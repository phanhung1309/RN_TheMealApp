import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import * as React from 'react';
import typography from '../styles/typography';
import {colors} from '../styles/colors';

interface Props {
  onSelect: () => void;
  title: string;
  durations: number;
  complexity: string;
  affordability: string;
  imageUrl: string;
}

const MealItem: React.FC<Props> = ({
  onSelect,
  title,
  durations,
  complexity,
  affordability,
  imageUrl,
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
            <Text>{durations}m</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
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
    height: 200,
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
    ...typography.primaryBold,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.1,
    color: colors.white,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});
