import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MealsNavigationStack from './routes/MealsNavigationStack';

export default function App() {
  return <NavigationContainer>{MealsNavigationStack()}</NavigationContainer>;
}
