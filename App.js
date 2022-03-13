/* eslint-disable prettier/prettier */
import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import {enableScreens} from 'react-native-screens';

import MainNavigator from './navigation/mainNavigator';

enableScreens();

const App = () => {
  return <MainNavigator />;
};

export default App;
