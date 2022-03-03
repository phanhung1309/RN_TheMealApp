import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import typography from '../styles/typography';

interface Props {
  onSelect: () => void;
  image: any;
  title: string;
}

const CategoryGridTile: React.FC<Props> = ({onSelect, image, title}) => {
  return (
    <TouchableOpacity style={styles.categoryItem} onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>{title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 1,
    height: 160,
    margin: 15,
  },
  text: {
    ...typography.primaryBold,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
