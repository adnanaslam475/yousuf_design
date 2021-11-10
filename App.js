import React from 'react';
import {
  StatusBar,
  LogBox,
} from 'react-native';
import TestNavigator from './Navigator/MainNavigator';
LogBox.ignoreLogs(['If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation'])

function App() {
  return <TestNavigator />
};
export default App;