import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

export interface Props {}

const RootNavigator: React.FC<Props> = () => {
  return <NavigationContainer>{BottomTabNavigator()}</NavigationContainer>;
};

export default RootNavigator;
