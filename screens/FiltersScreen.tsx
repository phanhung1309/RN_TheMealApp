import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import typography from '../styles/typography';
import {colors} from '../styles/colors';
import {onChange} from 'react-native-reanimated';

interface Props {}

interface FilterSwitchProps {
  label: string;
  state: boolean;
  onChange: (newValue: boolean) => void;
}

const FilterSwitch: React.FC<FilterSwitchProps> = ({
  label,
  state,
  onChange,
}) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{true: colors.secondary}}
        thumbColor="white"
        value={state}
        onValueChange={onChange}
      />
    </View>
  );
};

const FiltersScreen: React.FC<Props> = () => {
  const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
  const [isLactoseFree, setIsLactoseFree] = useState<boolean>(false);
  const [isVegan, setIsVegan] = useState<boolean>(false);
  const [isVegetarian, setIsVegetarian] = useState<boolean>(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    ...typography.primaryBold,
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
    color: colors.primaryText,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    width: '80%',
  },
});
