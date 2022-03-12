import * as React from 'react';
import {LogBox} from 'react-native';
import RootNavigator from './routes/RootNavigation';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return <RootNavigator />;
}
